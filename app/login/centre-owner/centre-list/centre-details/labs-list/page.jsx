import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col text-lg font-bold p-4'>
      <p className='font-bold'>Labs List</p>  
      <Link href={'/login/centre-owner/centre-list/centre-details/labs-list/update'}>Update</Link>
    </div>
  )
}

export default page