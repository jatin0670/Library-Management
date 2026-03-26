import React, { useEffect, useState } from 'react'
import Card from './Card'
import img from '../assets/bgimg.jpg'
import axios from 'axios'
import Navbar from './Navbar'


// add local host 8080 to run locally 

const Home = () => {

  const [bookNo, setBookNo] = useState(0)
  const [studentNo, setStudentNo] = useState(0)
  const [issueBookNo, setIssueBookNo] = useState(0)

  useEffect(()=>{
    axios.get("http://localhost:8080/allbooks")
    .then((response)=>{
       setBookNo(response.data.length)
       console.log(response.data.length);
    })
 
 }, [])

 useEffect(()=>{
  axios.get("http://localhost:8080/allstudents")
  .then((response)=>{
     setStudentNo(response.data.length)
     console.log(response.data.length);
  })

}, [])

useEffect(()=>{
  axios.get("http://localhost:8080/allissuebooks")
  .then((response)=>{
     setIssueBookNo(response.data.length)
     console.log(response.data.length);
  })

}, [])

  return (

    <div>

      <div className='h-screen w-full flex flex-col'>

        <div className='z-20 w-full h-16 top-0 left-0 bg-[#3666ad] flex items-center px-10  '>
            <h2 className=' text-white text-3xl font-bold'>Library Management</h2>
        </div>

        <div className='flex w-full h-full '>

          <Navbar/>

          <div className=' h-full w-5/6 flex items-center justify-center gap-28 relative'>
            <img className=' absolute h-full w-full' src={img} alt="" />
        
            <Card No={bookNo} text="Total Books"/>
            <Card No={studentNo} text="Total students"/>
            <Card No={issueBookNo} text="Total Issue Books"/>
            {/* <Card No="0" text="Total Fine Received"/> */}
          
          </div>
        </div>
  

      </div>

      
    <div className=' pt-16 bg-gray-800 h-screen w-full flex flex-col items-center justify-center gap-10'>

        <h1 className='text-4xl text-white font-bold'>About</h1>

      <p className='text-gray-300 text-xl text-center w-3/4'>
        A Library Management System built with React and Spring Boot. 
        Manage books, students, and track issued books easily.
      </p>

    <div className='flex gap-30 text-white text-center'>

        <a target='blank' href="https://react.dev/">
           <div className='bg-[#294666] px-10 py-6 rounded-lg'>
               <h2 className='text-2xl font-bold'>React.JS</h2>
               <p className='text-gray-300'>Frontend</p>
           </div>
        </a>

        <a target='blank' href="https://spring.io/projects/spring-boot">
            <div className='bg-[#294666] px-10 py-6 rounded-lg'>
                <h2 className='text-2xl font-bold'>Spring Boot</h2>
                <p className='text-gray-300'>Backend</p>
            </div>
        </a>

        <a target='blank' href="https://www.mysql.com/">
            <div className='bg-[#294666] px-10 py-6 rounded-lg'>
                <h2 className='text-2xl font-bold'>MySQL</h2>
                <p className='text-gray-300'>Database</p>
            </div>
        </a>

    </div>

    </div>
  </div>
    
  )
}

export default Home
