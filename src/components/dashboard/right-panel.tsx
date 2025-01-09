'use client'
import { useState } from 'react'

export function RightPanel() {
  const [activeTab, setActiveTab] = useState('Today')
  const [activeOption, setActiveOption] = useState('Agreements')
  const tabs = ['Today', 'WTD', 'MTD', 'YTD']

  const leaderboard = [
    { name: 'Jose Cuevas', score: 69 },
    { name: 'Vic Gutierrez', score: 57 },
    { name: 'Sam Peake', score: 52 },
    { name: 'Ian Atkinson', score: 42 },
    { name: 'Gadiel Durant', score: 41 },
  ]

  const appointments = [
    { name: 'Elvis Presley', date: '9/16', time: '2:00pm' },
    { name: 'Riley Ried', date: '9/16', time: '4:00pm' },
    { name: 'John Smith', date: '9/17', time: '2:30pm' },
    { name: 'Jason Born', date: '9/17', time: '3:30pm' },
    { name: 'Jorge Clone', date: '9/18', time: '7:00pm' },
  ]

  return (
    <div className="p-4 -mt-5 lg:p-6">
      <div className="mb-8 dark:bg-custom-dark bg-custom-lightGray rounded-lg p-4">
        <div className="flex flex-col justify-between items-center gap-4 mb-4">
          <h2 className="text-xl font-bold">Leaderboard</h2>
          <div className="border rounded-md">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-3 py-1.5 text-xs lg:text-base font-bold dark:text-white text-black
                  transition-all duration-300 ease-in-out
                  ${index !== 0 ? 'border-l' : 'rounded-md'} 
                  ${
                    activeTab === tab
                      ? 'dark:bg-custom-gray bg-white dark:text-white text-black'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-custom-blue/10 dark:hover:bg-custom-blue/10'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex w-full max-w-[200px] relative bg-white dark:bg-custom-dark rounded-md">
            <div
              className={`
                absolute top-0 h-full w-1/2 bg-custom-lightGray dark:bg-gray-800
                border border-black dark:border-gray-700 rounded-md
                transition-transform duration-300 ease-in-out
                ${activeOption === 'Installed' ? 'translate-x-full' : 'translate-x-0'}
              `}
            />
            <button
              onClick={() => setActiveOption('Agreements')}
              className={`
                flex-1 py-1 px-2 text-xs lg:text-sm
                transition-colors duration-300
                relative z-10
                ${activeOption === 'Agreements' ? 'text-black dark:text-white' : 'text-gray-500'}
              `}
            >
              Agreements
            </button>
            <button
              onClick={() => setActiveOption('Installed')}
              className={`
                flex-1 py-1 px-2 text-xs lg:text-sm
                transition-colors duration-300
                relative z-10
                ${activeOption === 'Installed' ? 'text-black dark:text-white' : 'text-gray-500'}
              `}
            >
              Installed
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {leaderboard.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center font-bold justify-between dark:bg-custom-gray bg-white px-3 lg:px-4 py-2 rounded-md text-sm"
            >
              <div className="flex items-center gap-2 lg:gap-4">
                <span className="text-black">{index + 1}</span>
                <span className="truncate text-black">{item.name}</span>
              </div>
              <span className="text-black">{item.score}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dark:bg-custom-dark bg-custom-lightGray rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Appointments</h2>
        <div className="space-y-2">
          {appointments.map((appointment) => (
            <div
              key={appointment.name}
              className="flex items-center font-bold justify-between dark:bg-custom-gray bg-white px-3 lg:px-4 py-2 rounded-md text-sm"
            >
              <span className="truncate text-black">{appointment.name}</span>
              <div className="flex items-center gap-2 text-black shrink-0">
                <span>{appointment.date}</span>
                <span>{appointment.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
