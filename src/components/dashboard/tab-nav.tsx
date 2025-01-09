'use client'
import { useState } from 'react'

export function TabNav() {
  const [activeTab, setActiveTab] = useState('Today')
  const tabs = ['Today', 'WTD', 'MTD', 'YTD']

  return (
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
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
                  ? 'dark:bg-custom-gray bg-white dark:text-white text-black '
                  : 'text-gray-600 dark:text-gray-400 hover:bg-custom-blue/10 dark:hover:bg-custom-blue/10'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
