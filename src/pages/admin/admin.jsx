import { useState } from 'react';
import { Bell, ChevronDown, Filter, Menu, Plus, Settings, X } from 'lucide-react';

export default function Admin() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilters] = useState(['life', 'health', 'long-term disability', 'auto insurance']);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r bg-[#3F51B5] text-white">
        <div className="p-4">
          <Menu className="h-6 w-6" />
        </div>
        <nav className="space-y-2 px-2">
          {['Appointments', 'Patients', 'Diaries', 'Settings'].map((item) => (
            <button
              key={item}
              className={`w-full flex items-center px-4 py-2 text-sm rounded-md transition-colors
                ${item === 'Appointments' ? 'bg-white/10' : 'hover:bg-white/5'}`}
            >
              {item}
              {item === 'Diaries' && (
                <span className="ml-auto bg-white/20 text-xs px-2 py-0.5 rounded-full">
                  3
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 border rounded-md hover:bg-gray-50"
              >
                All
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-1 w-40 bg-white border rounded-md shadow-lg py-1">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50">All</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Active</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Inactive</button>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="search"
                placeholder="Search"
                className="w-[300px] px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-1.5 bg-white border rounded-md hover:bg-gray-50">
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 text-gray-600" />
            <Settings className="h-5 w-5 text-gray-600" />
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                U
              </div>
              <span>Welcome!</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Appointments</h1>
            <div className="flex items-center gap-2">
              <input
                type="date"
                defaultValue="2022-06-24"
                className="px-3 py-1.5 border rounded-md"
              />
              <button className="flex items-center gap-2 px-4 py-1.5 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                <Plus className="h-4 w-4" />
                New Appointment
              </button>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm"
              >
                {filter}
                <button className="hover:bg-gray-200 rounded">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            <button className="flex items-center gap-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
              <Filter className="h-4 w-4" />
              Add Filter
            </button>
            <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
              Delete All
            </button>
          </div>
          <div className="flex justify-between mb-5 p-2">
             <div>
               <p>showing : <span>10 appointment</span></p>
             </div>
             <div className="flex items-center">
                <div className='mr-3'>
                   <input type="checkbox" id="hideVisited" />
                   <label htmlFor="hideVisited" className="ml-2">Hide Visited</label>
                </div>
                <div>
                   <input type="checkbox" id="hideVisited" />
                   <label htmlFor="hideVisited" className="ml-2">Show Empty</label>
                </div>
             </div>
          </div>
          <div className="border rounded-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TIME</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">PATIENT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">INSURANCE</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TEST</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TECHNICIAN</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">LOCATION</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">STATUS</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">CREATOR</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } hover:bg-gray-50`}
                    >
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-4 py-3 text-sm">{appointment.time}</td>
                      <td className="px-4 py-3 text-sm">{appointment.patient}</td>
                      <td className="px-4 py-3 text-sm">{appointment.insurance}</td>
                      <td className="px-4 py-3 text-sm">{appointment.test}</td>
                      <td className="px-4 py-3 text-sm">{appointment.technician}</td>
                      <td className="px-4 py-3 text-sm max-w-[200px] truncate">
                        {appointment.location}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                            ${
                              appointment.status === "Scheduled"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                          {appointment.creator}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const appointments = [
  {
    time: '18:15 - 19:00',
    patient: 'Dianne Russell',
    insurance: 'health',
    test: 'Upper Abdomen General – Test Code 2705',
    technician: 'Kristin',
    location: '4517 Washington Ave. Manchester, Kentucky 39495'
 }]