import React, { useEffect, useState } from "react";
import {GoogelAnalytics_API} from '../../../hooks/Apis'

export default function GoogelAnalytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState("30days");
  const [compareMode, setCompareMode] = useState(false);
  const [demographicsView, setDemographicsView] = useState("countries"); // 'countries', 'regions', 'cities'

  useEffect(() => {
    fetch(GoogelAnalytics_API)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading Google Analytics data...</p>
      </div>
    </div>
  );
  
  if (!data) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-red-500 text-xl">⚠️</div>
        <p className="mt-4 text-gray-600">Failed to load analytics data.</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  // Parse KPI safely
  const kpiRow = data.kpi?.rows?.[0]?.metricValues ?? [];
  
  const kpis = {
    activeUsers: kpiRow[0]?.value ?? 0,
    newUsers: kpiRow[1]?.value ?? 0,
    sessions: kpiRow[2]?.value ?? 0,
    engagedSessions: kpiRow[3]?.value ?? 0,
    avgSessionDuration: kpiRow[4]?.value ?? 0,
    pageViews: kpiRow[5]?.value ?? 0,
    bounceRate: kpiRow[6]?.value ?? 0,
    engagementRate: kpiRow[7]?.value ?? 0,
    totalRevenue: kpiRow[8]?.value ?? 0,
    conversions: kpiRow[9]?.value ?? 0
  };

  function formatNumber(num) {
    return parseInt(num || 0).toLocaleString();
  }

  function formatDuration(seconds) {
    if (!seconds) return "0s";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  }

  function formatPercentage(value) {
    if (!value) return "0%";
    return `${parseFloat(value).toFixed(1)}%`;
  }

  // Mock previous period data for changes (in real app, this would come from API)
  const mockPreviousData = {
    countries: {
      'United States': 12,
      'India': 8,
      'United Kingdom': 5,
      'Canada': 3,
      'Australia': 2
    },
    regions: {
      'California': 8,
      'New York': 6,
      'Texas': 4,
      'Delhi': 7,
      'London': 3
    },
    cities: {
      'New York': 6,
      'Los Angeles': 5,
      'London': 3,
      'Delhi': 7,
      'Sydney': 2
    }
  };

  // Calculate changes for demographics
  const calculateChange = (currentValue, location, type) => {
    const previousValue = mockPreviousData[type]?.[location] || 0;
    if (previousValue === 0) return { change: 100, isPositive: currentValue > 0 };
    const change = ((currentValue - previousValue) / previousValue) * 100;
    return {
      change: Math.abs(Math.round(change)),
      isPositive: change >= 0
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header with Controls */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Reports snapshot</h1>
            <p className="text-gray-600 text-sm mt-1">Google Analytics 4 Data</p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            {/* Date Range Selector */}
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="text-sm border border-gray-300 rounded px-3 py-1.5 bg-white"
            >
              <option value="30min">Last 30 minutes</option>
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="custom">Custom</option>
            </select>

            {/* Comparison Toggle */}
            <button 
              onClick={() => setCompareMode(!compareMode)}
              className={`flex items-center space-x-1 text-sm px-3 py-1.5 rounded border ${
                compareMode 
                  ? 'bg-blue-50 border-blue-200 text-blue-700' 
                  : 'bg-white border-gray-300 text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>🔄</span>
              <span>Compare</span>
            </button>

            {/* Export Options */}
            <div className="flex items-center space-x-2">
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100">
                <span>📊</span>
                <span className="hidden sm:inline">Share</span>
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100">
                <span>📥</span>
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>

            <button 
              onClick={() => window.location.reload()}
              className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors flex items-center space-x-1"
            >
              <span>↻</span>
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <CompactMetricCard 
          title="Active users" 
          value={formatNumber(kpis.activeUsers)}
          secondary="New users"
          secondaryValue={formatNumber(kpis.newUsers)}
          compareMode={compareMode}
          previousValue="12"
        />
        <CompactMetricCard 
          title="Avg engagement time" 
          value={formatDuration(kpis.avgSessionDuration)}
          secondary="Engaged sessions"
          secondaryValue={formatNumber(kpis.engagedSessions)}
          compareMode={compareMode}
          previousValue="1m 30s"
        />
        <CompactMetricCard 
          title="Sessions" 
          value={formatNumber(kpis.sessions)}
          secondary="Page views"
          secondaryValue={formatNumber(kpis.pageViews)}
          compareMode={compareMode}
          previousValue="450"
        />
        <CompactMetricCard 
          title="Engagement rate" 
          value={formatPercentage(kpis.engagementRate)}
          secondary="Bounce rate"
          secondaryValue={formatPercentage(kpis.bounceRate)}
          compareMode={compareMode}
          previousValue="52.1%"
        />
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        {/* Top Pages Card */}
        <div className="bg-white rounded-lg border border-gray-200 xl:col-span-2">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Top pages</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1">
              <span>+</span>
              <span>Add card</span>
            </button>
          </div>
          <div className="p-1">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="pb-2 pl-3 font-medium">Page title and screen class</th>
                    <th className="pb-2 font-medium text-right">Views</th>
                    <th className="pb-2 font-medium text-right">Active users</th>
                    <th className="pb-2 font-medium text-right">Event count</th>
                    <th className="pb-2 pr-3 font-medium text-right">Bounce rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.topPages?.rows?.slice(0, 6).map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-2 pl-3 pr-2">
                        <div className="font-medium text-gray-900 text-xs line-clamp-1">
                          {row.dimensionValues[1].value || 'Untitled'}
                        </div>
                        <div className="text-gray-500 text-xs line-clamp-1">
                          {row.dimensionValues[0].value}
                        </div>
                      </td>
                      <td className="py-2 text-right font-medium text-gray-900">
                        {formatNumber(row.metricValues[0].value)}
                      </td>
                      <td className="py-2 text-right text-gray-900">
                        {formatNumber(row.metricValues[3]?.value || 0)}
                      </td>
                      <td className="py-2 text-right text-gray-900">
                        {formatNumber(row.metricValues[2]?.value || 0)}
                      </td>
                      <td className="py-2 pr-3 text-right text-gray-900">
                        {formatPercentage(row.metricValues[2]?.value || 0)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {data.topPages?.rows?.length > 6 && (
              <div className="p-2 border-t border-gray-200 text-center">
                <button className="text-xs text-blue-600 hover:text-blue-800">
                  Show {data.topPages.rows.length - 6} more
                </button>
              </div>
            )}
          </div>
        </div>

        {/* User Acquisition & Demographics */}
        <div className="space-y-4">
          {/* User Acquisition Card */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">User acquisition</h2>
            </div>
            <div className="p-1">
              {/* First user source */}
              <div className="mb-4">
                <div className="px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50">
                  Active users by First user source / medium
                </div>
                <div className="max-h-32 overflow-y-auto">
                  {data.traffic?.rows?.slice(0, 6).map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-2 hover:bg-gray-50">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {row.dimensionValues[1].value} / {row.dimensionValues[2].value}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {formatNumber(row.metricValues[1].value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Session source */}
              <div>
                <div className="px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50">
                  Sessions by Session source / medium
                </div>
                <div className="max-h-32 overflow-y-auto">
                  {data.traffic?.rows?.slice(0, 6).map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-2 hover:bg-gray-50">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {row.dimensionValues[1].value} / {row.dimensionValues[2].value}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {formatNumber(row.metricValues[0].value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* New vs Returning Users */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900 mb-3">New vs Returning users</h3>
            <div className="flex items-center justify-center h-24 border border-gray-200 rounded bg-gray-50">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">{formatNumber(kpis.newUsers)}</div>
                <div className="text-xs text-gray-600">New users</div>
              </div>
              <div className="mx-6 text-gray-300 text-xl">|</div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">
                  {formatNumber(kpis.activeUsers - kpis.newUsers)}
                </div>
                <div className="text-xs text-gray-600">Returning users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Three Columns */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        {/* Enhanced Demographics Card with Tabs */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-900">Demographics</h2>
              <div className="flex space-x-1 bg-gray-100 p-1 rounded">
                {[
                  { key: 'countries', label: 'Country', icon: '🌍' },
                  { key: 'regions', label: 'Region', icon: '🗺️' },
                  { key: 'cities', label: 'City', icon: '🏙️' }
                ].map(view => (
                  <button
                    key={view.key}
                    onClick={() => setDemographicsView(view.key)}
                    className={`flex items-center space-x-1 px-2 py-1 text-xs rounded transition-colors ${
                      demographicsView === view.key 
                        ? 'bg-white shadow-sm text-blue-700' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>{view.icon}</span>
                    <span>{view.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4">
            {/* Countries View */}
            {demographicsView === 'countries' && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Top countries</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {data.topCountries?.rows?.slice(0, 8).map((row, i) => {
                    const country = row.dimensionValues[0].value;
                    const users = parseInt(row.metricValues[0].value);
                    const change = calculateChange(users, country, 'countries');
                    
                    return (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <span className="text-base">{getCountryFlag(country)}</span>
                          <span className="text-gray-900 truncate font-medium">
                            {country}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 ml-2">
                          <span className="font-semibold text-gray-900">
                            {formatNumber(users)}
                          </span>
                          {compareMode && (
                            <span className={`text-xs px-1.5 py-0.5 rounded ${
                              change.isPositive 
                                ? 'bg-green-50 text-green-700' 
                                : 'bg-red-50 text-red-700'
                            }`}>
                              {change.isPositive ? '↑' : '↓'} {change.change}%
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Regions View */}
            {demographicsView === 'regions' && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Top regions</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {data.topRegions?.rows
                    ?.filter(row => row.dimensionValues[0].value !== "(not set)")
                    .slice(0, 8)
                    .map((row, i) => {
                      const region = row.dimensionValues[0].value;
                      const users = parseInt(row.metricValues[0].value);
                      const change = calculateChange(users, region, 'regions');
                      
                      return (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 flex-1 min-w-0">
                            <span className="text-base">🗺️</span>
                            <span className="text-gray-900 truncate font-medium">
                              {region}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
                            <span className="font-semibold text-gray-900">
                              {formatNumber(users)}
                            </span>
                            {compareMode && (
                              <span className={`text-xs px-1.5 py-0.5 rounded ${
                                change.isPositive 
                                  ? 'bg-green-50 text-green-700' 
                                  : 'bg-red-50 text-red-700'
                              }`}>
                                {change.isPositive ? '↑' : '↓'} {change.change}%
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Cities View */}
            {demographicsView === 'cities' && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Top cities</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {data.topCities?.rows
                    ?.filter(row => row.dimensionValues[0].value !== "(not set)")
                    .slice(0, 8)
                    .map((row, i) => {
                      const city = row.dimensionValues[0].value;
                      const users = parseInt(row.metricValues[0].value);
                      const change = calculateChange(users, city, 'cities');
                      
                      return (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 flex-1 min-w-0">
                            <span className="text-base">🏙️</span>
                            <span className="text-gray-900 truncate font-medium">
                              {city}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
                            <span className="font-semibold text-gray-900">
                              {formatNumber(users)}
                            </span>
                            {compareMode && (
                              <span className={`text-xs px-1.5 py-0.5 rounded ${
                                change.isPositive 
                                  ? 'bg-green-50 text-green-700' 
                                  : 'bg-red-50 text-red-700'
                              }`}>
                                {change.isPositive ? '↑' : '↓'} {change.change}%
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Events & Conversions Card */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">Engagement</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {/* Events */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Top events</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {data.events?.rows?.slice(0, 6).map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 truncate flex-1">
                        {row.dimensionValues[0].value}
                      </span>
                      <span className="font-medium text-gray-900 ml-2">
                        {formatNumber(row.metricValues[0].value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversions */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Conversions</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {data.conversions?.rows?.slice(0, 6).map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 truncate flex-1">
                        {row.dimensionValues[0].value}
                      </span>
                      <span className="font-medium text-green-600 ml-2">
                        {formatNumber(row.metricValues[0].value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Events & Real-time */}
        <div className="space-y-4">
          {/* Key Events by Platform */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Key events by Platform</h3>
            </div>
            <div className="p-4">
              <div className="text-center text-gray-500 text-sm py-6">
                No key events configured
              </div>
            </div>
          </div>

          {/* Real-time Overview */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Real-time</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Live</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {data.realtimeOverview?.rows?.[0]?.metricValues?.[0]?.value || 0}
                  </div>
                  <div className="text-xs text-gray-600">Active users</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {data.realtimeOverview?.rows?.[0]?.metricValues?.[1]?.value || 0}
                  </div>
                  <div className="text-xs text-gray-600">Page views</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">
                    {data.realtimeOverview?.rows?.[0]?.metricValues?.[2]?.value || 0}
                  </div>
                  <div className="text-xs text-gray-600">Conversions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-xs">
        <p>Google Analytics 4 Dashboard • Last fetched: {new Date(data.fetchedAt).toLocaleString()}</p>
      </div>
    </div>
  );
}

// Enhanced Compact Metric Card with Comparison
function CompactMetricCard({ title, value, secondary, secondaryValue, compareMode, previousValue }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-sm transition-shadow">
      <div className="text-sm font-medium text-gray-900 mb-1">{title}</div>
      <div className="flex items-end justify-between">
        <div className="text-xl font-bold text-gray-900">{value}</div>
        {compareMode && previousValue && (
          <div className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
            +{calculatePercentageChange(previousValue, value)}%
          </div>
        )}
      </div>
      <div className="flex justify-between items-center text-xs mt-2">
        <span className="text-gray-600">{secondary}</span>
        <span className="font-medium text-gray-900">{secondaryValue}</span>
      </div>
    </div>
  );
}

// Helper function to calculate percentage change
function calculatePercentageChange(previous, current) {
  // Simple implementation - in real app, you'd parse numbers properly
  const prev = parseInt(previous) || 0;
  const curr = parseInt(current) || 0;
  if (prev === 0) return 100;
  return Math.round(((curr - prev) / prev) * 100);
}

// Helper function to get country flags
function getCountryFlag(countryCode) {
  const flags = {
    'United States': '🇺🇸',
    'United Kingdom': '🇬🇧',
    'Canada': '🇨🇦',
    'Australia': '🇦🇺',
    'Germany': '🇩🇪',
    'France': '🇫🇷',
    'Japan': '🇯🇵',
    'India': '🇮🇳',
    'Brazil': '🇧🇷',
    'Mexico': '🇲🇽',
    'Italy': '🇮🇹',
    'Spain': '🇪🇸',
    'China': '🇨🇳',
    'South Korea': '🇰🇷',
    'Russia': '🇷🇺'
  };
  return flags[countryCode] || '🌐';
}