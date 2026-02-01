'use client'

import { useState } from 'react'

export default function ExcelFormatsPage() {
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table')
  
  // Sample Excel data - replace with actual data from your API/database
  const excelData = [
    {
      id: 1,
      formatName: 'Product Catalog',
      columns: ['Product ID', 'Product Name', 'Price', 'Category', 'Stock', 'Description'],
      rows: [
        ['P001', 'Royal Metro Classic', '₹1,20,000', 'E-Rickshaw', '50', 'Entry-level electric e-rickshaw'],
        ['P002', 'Royal Metro Premium', '₹1,50,000', 'E-Rickshaw', '30', 'Premium quality e-rickshaw'],
        ['P003', 'Royal Metro Elite', '₹1,80,000', 'E-Rickshaw', '20', 'Luxury e-rickshaw'],
      ],
    },
    {
      id: 2,
      formatName: 'Customer Database',
      columns: ['Customer ID', 'Name', 'Email', 'Phone', 'Address', 'City', 'State'],
      rows: [
        ['C001', 'Rajesh Kumar', 'rajesh@example.com', '+91 9876543210', '100, Prempuri', 'Muzaffarnagar', 'Uttar Pradesh'],
        ['C002', 'Priya Sharma', 'priya@example.com', '+91 9876543211', '200, Main Street', 'Shamli', 'Uttar Pradesh'],
        ['C003', 'Amit Singh', 'amit@example.com', '+91 9876543212', '300, Market Road', 'Meerut', 'Uttar Pradesh'],
      ],
    },
    {
      id: 3,
      formatName: 'Sales Report',
      columns: ['Sale ID', 'Date', 'Product', 'Quantity', 'Amount', 'Customer', 'Status'],
      rows: [
        ['S001', '2026-01-15', 'Royal Metro Classic', '2', '₹2,40,000', 'Rajesh Kumar', 'Completed'],
        ['S002', '2026-01-20', 'Royal Metro Premium', '1', '₹1,50,000', 'Priya Sharma', 'Completed'],
        ['S003', '2026-01-25', 'Royal Metro Elite', '1', '₹1,80,000', 'Amit Singh', 'Pending'],
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Excel Formats</h1>
          <p className="text-gray-600">View and manage Excel format templates</p>
        </div>

        {/* View Mode Toggle */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">View Mode:</span>
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'table'
                    ? 'bg-dark-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-dark-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Grid View
              </button>
            </div>
          </div>
        </div>

        {/* Excel Formats List */}
        <div className="space-y-6">
          {excelData.map((format) => (
            <div key={format.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Format Header */}
              <div className="bg-gradient-to-r from-dark-green to-light-green px-6 py-4">
                <h2 className="text-xl font-bold text-white">{format.formatName}</h2>
              </div>

              {/* Format Content */}
              <div className="p-6">
                {viewMode === 'table' ? (
                  /* Table View - Shows all rows and columns in a table */
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {format.columns.map((column, index) => (
                            <th
                              key={index}
                              className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-200 last:border-r-0"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {format.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-gray-50">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200 last:border-r-0 whitespace-nowrap"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  /* Grid View - Shows data in a card grid format */
                  <div className="space-y-4">
                    {/* Column Headers */}
                    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${format.columns.length}, minmax(150px, 1fr))` }}>
                      {format.columns.map((column, index) => (
                        <div
                          key={index}
                          className="font-semibold text-sm text-gray-700 bg-gray-50 p-2 rounded border border-gray-200"
                        >
                          {column}
                        </div>
                      ))}
                    </div>

                    {/* Rows */}
                    {format.rows.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="grid gap-4 border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                        style={{ gridTemplateColumns: `repeat(${format.columns.length}, minmax(150px, 1fr))` }}
                      >
                        {row.map((cell, cellIndex) => (
                          <div
                            key={cellIndex}
                            className="text-sm text-gray-900 break-words"
                          >
                            {cell}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Format Info */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>
                      <strong>{format.rows.length}</strong> rows × <strong>{format.columns.length}</strong> columns
                    </span>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-dark-green text-white rounded hover:bg-dark-green/90 transition-colors">
                        Export
                      </button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
