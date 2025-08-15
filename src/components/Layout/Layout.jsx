import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    
      <Sidebar/>
      <main className="p-4 sm:ml-64">
        <div className="mt-14-md">
           <Outlet />
        </div>
      </main>

      <Footer/>
    
    </>
  )
}
