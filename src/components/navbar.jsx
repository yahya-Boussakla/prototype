/**
 * Navbar component for the todo application
 */
export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
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
              <h1 className="text-xl font-bold text-gray-900">YAHYA'S TASKS</h1>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-blue-600 bg-blue-50 px-3 py-2 rounded-md text-sm font-medium">
                All Todos
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Completed
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pending
              </a>
            </div>
          </div>

          {/* Right side - Add button */}
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
              <div className="h-4 w-4 mr-2">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              Add Todo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md"
              aria-label="Open menu"
            >
              <div className="h-6 w-6">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
          <a href="#" className="text-blue-600 bg-blue-50 block px-3 py-2 rounded-md text-base font-medium">
            All Todos
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Completed
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Pending
          </a>
        </div>
      </div>
    </nav>
  )
}
