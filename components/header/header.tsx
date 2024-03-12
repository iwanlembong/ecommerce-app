import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            Tongkonan App
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
