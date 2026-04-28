import React, { useEffect, useState } from "react";
import { CRUD_Domains } from "../../../hooks/Apis";
import { useAuth } from "../../../hooks/AuthContext";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import {
  FaDownload,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaExclamationTriangle,
  FaCheckCircle,
  FaServer,
  FaGlobe,
  FaUser,
  FaCalendarAlt,
  FaShieldAlt,
  FaFilter,
} from "react-icons/fa";

function AdminExcel() {
  const { user } = useAuth();
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "customer_name", direction: "asc" });
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    if (user.role !== "admin") return;

    const fetchDomains = async () => {
      try {
        const res = await fetch(CRUD_Domains);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          setDomains(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch domain renewals");
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, [user]);

  const getRemainingDays = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusInfo = (domain) => {
    const days = getRemainingDays(domain.expiry_date);
    const isBusiness = domain.business_status === "Yes";
    
    if (days < 0) {
      return { status: "expired", color: "red", text: "Expired", icon: FaExclamationTriangle };
    } else if (days <= 7) {
      return { status: "critical", color: "orange", text: "Expiring Soon", icon: FaExclamationTriangle };
    } else if (days <= 30) {
      return { status: "warning", color: "yellow", text: "Renewal Due", icon: FaExclamationTriangle };
    } else {
      return { status: "active", color: "green", text: "Active", icon: FaCheckCircle };
    }
  };

  const filteredAndSortedDomains = React.useMemo(() => {
    let filtered = domains;

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = domains.filter(domain => {
        const status = getStatusInfo(domain).status;
        return status === statusFilter;
      });
    }

    // Sort the filtered array
    if (!sortConfig.key) return filtered;
    
    return [...filtered].sort((a, b) => {
      let aVal = a[sortConfig.key];
      let bVal = b[sortConfig.key];

      // Handle special sorting cases
      if (sortConfig.key === "customer_name") {
        aVal = `${a.customer_userId} / ${a.user_name}`.toLowerCase();
        bVal = `${b.customer_userId} / ${b.user_name}`.toLowerCase();
      }

      if (sortConfig.key === "remaining_days") {
        aVal = getRemainingDays(a.expiry_date);
        bVal = getRemainingDays(b.expiry_date);
      }

      if (sortConfig.key === "business_status") {
        aVal = a.business_status === "Yes" ? 1 : 0;
        bVal = b.business_status === "Yes" ? 1 : 0;
      }

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [domains, sortConfig, statusFilter]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleExport = () => {
    const exportData = filteredAndSortedDomains.map(d => ({
      "Customer ID": d.customer_userId,
      "Customer Name": d.customer_name || d.user_name,
      "Domain Name": d.user_domain,
      "Business Status": d.business_status,
      "Tier": d.tier,
      "Purchased Date": d.purchased_date,
      "Expiry Date": d.expiry_date,
      "Remaining Days": getRemainingDays(d.expiry_date),
      "Server Status": d.server,
      "Notes": d.notes || "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Domains");
    
    // Auto-size columns
    const maxWidth = exportData.reduce((w, r) => Math.max(w, r['Customer Name']?.length || 0), 10);
    worksheet['!cols'] = [{ wch: maxWidth }];
    
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(data, `domain_renewals_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-gray-400" />;
    return sortConfig.direction === "asc" ? <FaSortUp className="text-yellow-600" /> : <FaSortDown className="text-yellow-600" />;
  };

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
          <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h2>
          <p className="text-gray-600">This page is for administrators only.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading domain data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
          <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Data</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const columns = [
    { key: "customer_name", label: "Customer", icon: FaUser, width: "w-48" },
    { key: "user_domain", label: "Domain", icon: FaGlobe, width: "w-64" },
    { key: "business_status", label: "Business", icon: FaShieldAlt, width: "w-24" },
    { key: "tier", label: "Tier", icon: FaServer, width: "w-32" },
    { key: "purchased_date", label: "Purchased", icon: FaCalendarAlt, width: "w-32" },
    { key: "expiry_date", label: "Expires", icon: FaCalendarAlt, width: "w-32" },
    { key: "remaining_days", label: "Status", icon: FaExclamationTriangle, width: "w-32" },
    { key: "server", label: "Server", icon: FaServer, width: "w-24" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent mb-2">
                Domain Management
              </h1>
              <p className="text-gray-600">
                Manage and export all domain renewal information
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Status Filter */}
              <div className="flex items-center gap-3">
                <FaFilter className="text-yellow-500" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="warning">Renewal Due</option>
                  <option value="critical">Expiring Soon</option>
                  <option value="expired">Expired</option>
                </select>
              </div>

              {/* Export Button */}
              <button
                onClick={handleExport}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3"
              >
                <FaDownload />
                Export Excel
              </button>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="text-2xl font-bold text-green-600">{domains.length}</div>
              <div className="text-sm text-green-700">Total Domains</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {domains.filter(d => d.business_status === "Yes").length}
              </div>
              <div className="text-sm text-blue-700">Business</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
              <div className="text-2xl font-bold text-orange-600">
                {domains.filter(d => getRemainingDays(d.expiry_date) <= 30 && getRemainingDays(d.expiry_date) > 0).length}
              </div>
              <div className="text-sm text-orange-700">Need Renewal</div>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <div className="text-2xl font-bold text-red-600">
                {domains.filter(d => getRemainingDays(d.expiry_date) < 0).length}
              </div>
              <div className="text-sm text-red-700">Expired</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`px-6 py-4 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${col.width}`}
                      onClick={() => requestSort(col.key)}
                    >
                      <div className="flex items-center gap-2">
                        <col.icon className="text-yellow-500" />
                        <span>{col.label}</span>
                        {getSortIcon(col.key)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAndSortedDomains.map((domain) => {
                  const status = getStatusInfo(domain);
                  const StatusIcon = status.icon;
                  const remainingDays = getRemainingDays(domain.expiry_date);
                  
                  return (
                    <tr
                      key={domain.id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-gray-800">
                            {domain.customer_name || domain.user_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {domain.customer_userId}
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <FaGlobe className="text-blue-500" />
                          <span className="font-medium text-gray-800">
                            {domain.user_domain}
                          </span>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          domain.business_status === "Yes" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {domain.business_status === "Yes" ? "Business" : "Personal"}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                          {domain.tier}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {domain.purchased_date}
                      </td>
                      
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {domain.expiry_date}
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium ${
                          status.status === "expired" ? "bg-red-100 text-red-800" :
                          status.status === "critical" ? "bg-orange-100 text-orange-800" :
                          status.status === "warning" ? "bg-yellow-100 text-yellow-800" :
                          "bg-green-100 text-green-800"
                        }`}>
                          <StatusIcon />
                          <span>
                            {status.status === "expired" 
                              ? `Expired ${Math.abs(remainingDays)}d ago` 
                              : `${remainingDays} days left`
                            }
                          </span>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          domain.server === "on" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {domain.server === "on" ? "🟢 Online" : "🔴 Offline"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredAndSortedDomains.length === 0 && (
            <div className="text-center py-12">
              <FaGlobe className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No domains found
              </h3>
              <p className="text-gray-600">
                {statusFilter !== "all" 
                  ? `No domains match the "${statusFilter}" filter.` 
                  : "No domains available."
                }
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>
                Showing {filteredAndSortedDomains.length} of {domains.length} domains
              </span>
              <span>
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminExcel;