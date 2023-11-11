import React from 'react'
import Sidebar from '../_components/dashboard/sidebar/Sidebar'
import Navbar from '../_components/dashboard/navbar/Navbar'
import { AiOutlineHome } from 'react-icons/ai'

const layout = ({ children }) => {

  const homeSidebarData = [
    { icon: <AiOutlineHome />, title: "Dashboard", path: "/dashboard" },
    { icon: <AiOutlineHome />, title: "Form", path: "/dashboard/form" },
    { icon: <AiOutlineHome />, title: "Lists", path: "/dashboard/lists" },
    { icon: <AiOutlineHome />, title: "Notification", path: "/dashboard/notification", },
    { icon: <AiOutlineHome />, title: "Available Tasks", path: "tasks" },
  ]

  return (
    <div className='flex w-full'>
      <div>
        <Sidebar data={homeSidebarData} />
      </div>
      <div className='w-full'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout