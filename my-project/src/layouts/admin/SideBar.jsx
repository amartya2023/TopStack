import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

const SideBar = () => {

  const navRoutes = [
    {
      name: 'Home',
      path: '/admin/home',
      icon: HomeOutlinedIcon
    },
    {
      name: 'Contact Submissions',
      path: '/admin/Contact-Submissions',
      icon: ContactSupportOutlinedIcon
    },
    {
      name: 'Items',
      path: '/admin/Items',
      icon: CategoryOutlinedIcon
    },
    {
      name: 'Services',
      path: '/admin/Services',
      icon: MiscellaneousServicesOutlinedIcon
    },
    {
      name: 'Reviews',
      path: '/admin/Reviews',
      icon: RateReviewOutlinedIcon
    }
  ]

  return (
    
    <nav className='h-screen px-2 flex flex-col justify-between py-20 bg-white'>

      <div className='flex flex-col gap-2'>

        {
          navRoutes.map((route, index) => (
            <NavLink to={route.path} className={({ isActive }) => (isActive ? "text-white rounded-lg bg-black p-3 duration-300 flex" : "text-slate-500 bg-white hover:bg-slate-200 rounded-lg duration-300 p-3 flex")}>
              {
                <route.icon fontSize='medium' />
              }
              
            </NavLink>
          ))
        }

      </div>

    </nav>
  )
}

export default SideBar