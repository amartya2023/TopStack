import React from 'react'
import ContactComponent from './../../components/admin/Contacts';

const ContactSubmission = () => {
  return (
        <main className='bg-slate-100 w-full h-full p-10'>

            <div className="flex justify-between mb-10">
                
                <div className='text-2xl font-bold text-slate-900'>
                    Contacts
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    Array(10).fill().map((_, i) => (
                        <ContactComponent key={i} />
                    ))
                }
            </div>
        </main>
  )
}

export default ContactSubmission