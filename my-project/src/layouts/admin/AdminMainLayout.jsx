import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const AdminMainLayout = ({Page}) => {
  return (
    <div className='flex flex-col'>

        <Header/>

        <div className='w-full flex'>

            <SideBar/>

            <Page/>

        </div>

    </div>
  )
}

export default AdminMainLayout