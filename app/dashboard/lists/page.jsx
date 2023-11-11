import Lists from '@/app/_components/dashboard/lists/Lists'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='p-4'>
        <div className='px-4'>Lists Page</div>
        <ul className="mt-5 w-[100%] gap-3 flex flex-col justify-center items-center">
          <Lists title="ABC" />
          <Lists title="ABC" />
          <Lists title="ABC" />
          <Lists title="ABC" />
          <Lists title="ABC" />
        </ul>
      </div>
    </>
  )
}

export default page