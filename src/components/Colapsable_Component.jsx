"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`w-full max-w-2xl mx-auto p-1 rounded-md ${isOpen ? 'bg-custom-gradient2' : ''}`}>
      <div className="bg-background rounded-lg shadow-sm overflow-hidden border-2 border-transparent">
        <button
          className="w-full md:px-6 md:py-4 px-4 py-2 flex items-center justify-between md:text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="md:text-lg md:font-semibold text-sm mr-2 font-medium">{title}</h2>
          <div className="flex items-center ">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </button>
        {isOpen && (
          <div className="md:px-6 md:py-4 px-4 py-2 md:text-lg md:font-medium text-clip text-sm font-normal bg-background">
            <p className="md:text-left text-center">{children}</p>
          </div>
        )}
      </div>
    </div>
  )
}
