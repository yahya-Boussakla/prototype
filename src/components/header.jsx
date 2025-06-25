/**
 * Header component with navigation
 */
export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 text-blue-600 mr-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">React prototype</h1>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button className="text-blue-600 bg-blue-50 px-3 py-2 rounded-md text-sm font-medium">All Todos</button>
              <button className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Completed
              </button>
              <button className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pending
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;