import React from 'react'

import { IconBoxMultiple, IconHome, IconSubtask } from '@tabler/icons'

import { Link, routes, useLocation } from '@redwoodjs/router'

import './styles.css'

interface ILink {
  name: string
  icon: React.ReactNode
  path: string
}

function Sidebar() {
  const { pathname } = useLocation()

  const links: ILink[] = [
    {
      name: 'Dashboard',
      icon: <IconHome />,
      path: routes.home(),
    },
    {
      name: 'Tasks',
      icon: <IconSubtask />,
      path: routes.tasks(),
    },
    {
      name: 'Projects',
      icon: <IconBoxMultiple />,
      path: '',
    },
  ]

  return (
    <div className="h-0 flex-1 flex flex-col overflow-y-auto">
      <nav className="flex-1 px-2 py-4 bg-gray-800">
        {links.map(({ name, icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`group mb-2 ${
              pathname === path ? 'active' : 'not-active'
            }`}
          >
            <div className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150">
              {icon}
            </div>
            {name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
