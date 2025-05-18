import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { MenuIcon, XIcon, UserIcon, HeartIcon, LogOutIcon } from 'lucide-react'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 text-2xl font-bold">
                TravelEase
              </span>
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/destinations"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Destinations
            </Link>
            <Link
              to="/accommodations"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Accommodations
            </Link>
            <Link
              to="/packages"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Packages
            </Link>
            <Link
              to="/reviews"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Reviews
            </Link>
            <Link
              to="/faq"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              FAQs
            </Link>
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/wishlist"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <HeartIcon className="h-5 w-5" />
                </Link>
                <div className="relative group">
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <UserIcon className="h-5 w-5" />
                  </button>
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-lg hidden group-hover:block">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      {currentUser.email}
                    </div>
                    <hr />
                    <button
                      onClick={logout}
                      className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOutIcon className="h-4 w-4 mr-2" /> Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/destinations"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              to="/accommodations"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Accommodations
            </Link>
            <Link
              to="/packages"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Packages
            </Link>
            <Link
              to="/reviews"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              FAQs
            </Link>
            {currentUser ? (
              <>
                <Link
                  to="/wishlist"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  My Wishlist
                </Link>
                <button
                  onClick={() => {
                    logout()
                    toggleMenu()
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
