import React from 'react'

type Props = {
  children: React.ReactNode
}

function Main({ children }: Props) {
  return (
    <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome!</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">{children}</div>
      </div>
    </main>
  )
}

export default Main
