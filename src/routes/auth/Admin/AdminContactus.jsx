//admincontact.jsx
import React, { useState, useEffect } from 'react';
import { CONTACTUS_API, LEADS_API } from "../../../hooks/Apis";
import {
  FaEye,
  FaTrash,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaSearch,
  FaFilter,
  FaSync,
  FaUserPlus,
  FaUsers
} from "react-icons/fa";

const ContactDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingStatus, setEditingStatus] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'contact_form',
    status: 'new',
    priority: 'medium',
    notes: ''
  });

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch(CONTACTUS_API);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmissions(result.data || []);
      } else {
        console.error('Failed to fetch submissions:', result.error);
        setSubmissions([]);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
      alert('Failed to load submissions. Please check console for details.');
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const response = await fetch(`${CONTACTUS_API}?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        alert('Submission deleted successfully!');
        fetchSubmissions();
      } else {
        alert(result.error || 'Failed to delete submission');
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
      alert('Failed to delete submission. Please check console for details.');
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${CONTACTUS_API}?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        setEditingStatus(null);
        fetchSubmissions();
      } else {
        alert(result.error || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status. Please check console for details.');
    }
  };

  const deleteAllSubmissions = async () => {
    if (!window.confirm('Are you sure you want to delete ALL submissions? This action cannot be undone!')) {
      return;
    }

    try {
      const deletePromises = submissions.map(submission => 
        fetch(`${CONTACTUS_API}?id=${submission.id}`, {
          method: 'DELETE',
        })
      );

      const results = await Promise.allSettled(deletePromises);
      
      const failedDeletes = results.filter(result => result.status === 'rejected');
      
      if (failedDeletes.length === 0) {
        alert('All submissions deleted successfully!');
        setSubmissions([]);
      } else {
        alert(`Deleted ${submissions.length - failedDeletes.length} submissions. ${failedDeletes.length} failed.`);
        fetchSubmissions();
      }
    } catch (error) {
      console.error('Error deleting all submissions:', error);
      alert('Failed to delete submissions. Please check console for details.');
    }
  };

  const convertToLead = (submission) => {
    setSelectedSubmission(submission);
    setLeadFormData({
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      source: 'contact_form',
      status: 'new',
      priority: 'medium',
      notes: `Converted from contact form. Original message: ${submission.message}`
    });
    setShowLeadForm(true);
  };

const handleConvertToLead = async () => {
  try {
    const response = await fetch(LEADS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadFormData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success) {
      alert('Lead created successfully!');
      setShowLeadForm(false);
      setSelectedSubmission(null);
      
      // DELETE the submission after successful lead creation
      try {
        const deleteResponse = await fetch(`${CONTACTUS_API}?id=${selectedSubmission.id}`, {
          method: 'DELETE',
        });

        if (!deleteResponse.ok) {
          throw new Error(`HTTP error! status: ${deleteResponse.status}`);
        }

        const deleteResult = await deleteResponse.json();
        
        if (deleteResult.success) {
          alert('Submission converted to lead and removed from contact submissions!');
          fetchSubmissions(); // Refresh the list
        } else {
          console.error('Failed to delete submission:', deleteResult.error);
          alert('Lead created but failed to remove submission. Please delete it manually.');
          fetchSubmissions(); // Still refresh to show updated status
        }
      } catch (deleteError) {
        console.error('Error deleting submission:', deleteError);
        alert('Lead created but failed to remove submission. Please delete it manually.');
        fetchSubmissions(); // Still refresh to show updated status
      }
    } else {
      alert(result.error || 'Failed to create lead');
    }
  } catch (error) {
    console.error('Error creating lead:', error);
    alert('Failed to create lead. Please check console for details.');
  }
};
  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = 
      submission.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-green-100 text-green-800';
      case 'replied': return 'bg-purple-100 text-purple-800';
      case 'converted': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Contact Form Submissions
              </h1>
              <p className="text-gray-600 mt-2">
                Manage and review all contact form submissions ({submissions.length} total)
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <button
                onClick={fetchSubmissions}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors"
              >
                <FaSync className="text-sm" />
                Refresh
              </button>
              <a
                href="/admin/leads"
                className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg text-blue-700 font-medium transition-colors"
              >
                <FaUsers className="text-sm" />
                View Leads
              </a>
              {submissions.length > 0 && (
                <button
                  onClick={deleteAllSubmissions}
                  className="flex items-center gap-2 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-lg text-red-700 font-medium transition-colors"
                >
                  <FaTrash className="text-sm" />
                  Delete All
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, subject, or message..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <FaFilter className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
                <option value="converted">Converted</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-gray-900">{submissions.length}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {submissions.filter(s => s.status === 'new').length}
            </div>
            <div className="text-sm text-gray-600">New</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">
              {submissions.filter(s => s.status === 'read').length}
            </div>
            <div className="text-sm text-gray-600">Read</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {submissions.filter(s => s.status === 'replied').length}
            </div>
            <div className="text-sm text-gray-600">Replied</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {submissions.filter(s => s.status === 'converted').length}
            </div>
            <div className="text-sm text-gray-600">Converted</div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No submissions found
              </h3>
              <p className="text-gray-600">
                {submissions.length === 0 
                  ? "No contact form submissions yet." 
                  : "No submissions match your search criteria."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject & Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="font-medium text-gray-700">
                              {submission.name?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {submission.name}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <FaEnvelope className="text-xs" />
                              {submission.email}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <FaPhone className="text-xs" />
                              {submission.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {submission.subject}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2">
                          {submission.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-xs" />
                          {formatDate(submission.submission_date)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingStatus === submission.id ? (
                          <select
                            value={submission.status}
                            onChange={(e) => updateStatus(submission.id, e.target.value)}
                            onBlur={() => setEditingStatus(null)}
                            autoFocus
                            className="text-sm px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-black outline-none"
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                            <option value="converted">Converted</option>
                          </select>
                        ) : (
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer ${getStatusColor(submission.status)}`}
                            onClick={() => setEditingStatus(submission.id)}
                          >
                            {submission.status}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="text-blue-600 hover:text-blue-900 p-1 rounded transition-colors"
                            title="View Details"
                          >
                            <FaEye />
                          </button>
                          {submission.status !== 'converted' && (
                            <button
                              onClick={() => convertToLead(submission)}
                              className="text-green-600 hover:text-green-900 p-1 rounded transition-colors"
                              title="Convert to Lead"
                            >
                              <FaUserPlus />
                            </button>
                          )}
                          <button
                            onClick={() => deleteSubmission(submission.id)}
                            className="text-red-600 hover:text-red-900 p-1 rounded transition-colors"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* View Details Modal */}
      {selectedSubmission && !showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Submission Details
                </h2>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Name</label>
                    <p className="text-gray-900">{selectedSubmission.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-gray-900">{selectedSubmission.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="text-gray-900">{selectedSubmission.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedSubmission.status)}`}>
                      {selectedSubmission.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Subject</label>
                <p className="text-gray-900 mt-1">{selectedSubmission.subject}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Message</label>
                <div className="mt-1 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Submitted</label>
                  <p className="text-gray-900">{formatDate(selectedSubmission.submission_date)}</p>
                </div>
                {selectedSubmission.updated_date && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Last Updated</label>
                    <p className="text-gray-900">{formatDate(selectedSubmission.updated_date)}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-between">
              <div>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
              <div className="flex gap-3">
                <a
                  href={`mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  Reply via Email
                </a>
                {selectedSubmission.status !== 'converted' && (
                  <button
                    onClick={() => convertToLead(selectedSubmission)}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <FaUserPlus className="text-sm" />
                    Convert to Lead
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Convert to Lead Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Convert to Lead
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Create a new lead from this contact submission
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  value={leadFormData.name}
                  onChange={(e) => setLeadFormData({...leadFormData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={leadFormData.email}
                  onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone
                </label>
                <input
                  type="tel"
                  value={leadFormData.phone}
                  onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Priority
                </label>
                <select
                  value={leadFormData.priority}
                  onChange={(e) => setLeadFormData({...leadFormData, priority: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Additional Notes
                </label>
                <textarea
                  value={leadFormData.notes}
                  onChange={(e) => setLeadFormData({...leadFormData, notes: e.target.value})}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowLeadForm(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConvertToLead}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                Create Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDashboard;