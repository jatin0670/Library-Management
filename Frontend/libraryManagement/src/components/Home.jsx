import React, { useState } from 'react'
import Card from './Card'


const Home = () => {
  return (

    <div>
      <div className=' h-screen w-full bg-[#F2FAFF] flex items-center justify-center gap-10 pt-16'>
      {/* <div className=' fixed top-0 left-0 w-full h-16 bg-purple-500 flex justify-between items-center px-10'>
        <div className=' text-white text-2xl font-bold'>LibraryManagement</div>
        <div className=' text-white font-medium text-[15px] flex gap-10 items-center'>
            <h1 className=' cursor-pointer'>Dashboard</h1>
            <h1 className=' cursor-pointer'>Manage Books</h1>
            <h1 className=' cursor-pointer'>Manage Students</h1>
            <h1 className=' cursor-pointer'>Issue Book</h1>
            <h1 className=' cursor-pointer'>Return Book</h1>
            <h1 className=' cursor-pointer'>Fines</h1>
            <h1 className=' cursor-pointer hover:scale-95 p-3 bg-red-500 rounded-md shadow-lg '>SignUp/Login</h1>
        </div>
      </div> */}

      <Card No="100" text="Total Book Issue"/>
      <Card No="110" text="Total Book Returned"/>
      <Card No="0" text="Total Book Not Return"/>
      <Card No="0" text="Total Fine Received"/>
      
    </div>

    <div className=' pt-16 bg-gray-800 h-screen w-full flex flex-col items-center gap-10'>
        <h1 className='p-3 text-4xl text-white font-bold flex items-center justify-center '>Records</h1>

    </div>
    </div>
    
  )
}

export default Home
