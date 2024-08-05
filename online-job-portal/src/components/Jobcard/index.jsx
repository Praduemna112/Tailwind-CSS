import dayjs from 'dayjs';
import React from 'react'

function JobCart(props) {
  //const skills = ["Javascript","React","Nodejs"]; 
  const date1= dayjs(Date.now());
  const diffInDays=date1.diff(props.postedOn,'day');
  return (
 <div className='mx-40 mb-4'>
  <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-700 hover:translate-y-1 hover:scale-100'>
    <div className='flex flex-col items-start gap-3'>
        <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
        <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
        <div className='flex items-center gap-2'>
          {props.skills.map((skill)=>(
            <p className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
            
            ))}
        </div>
    </div>
    <div className='flex items-center gap-4'>
          <p className='text-gray-500 '>Posted {diffInDays} days ago</p>
          <a href={props.Job_link}>
          <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
          </a>
          
    </div>
  </div>
 </div>
  )
}

export default JobCart
