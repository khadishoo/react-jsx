import React, { useEffect, useState } from 'react'

export default function Class27w4day() {
  // console.log("content kaita jukteldi");
  // useEffect(()=>{
  //   console.log("content jukteldi");
  // }, [])

  // const [count, setCount] = useState(0)
  // const [text, setText] = useState('ACS')


  // useEffect(()=>{
  //   console.log("press basyldy");
  // }, [count])

  // useEffect(()=>{
  //   console.log("change basyldy");
  // }, [text])


  // const [time, setTime] = useState(10)

  // useEffect(()=>{
  //   if(time == 0 ) return
  //   let interval = setInterval(() => {
  //     console.log('timer istedi');
  //     setTime(time - 1)
  //   }, 1000);

  //   return()=>{
  //     clearInterval(interval)
  //   }
  // }, [time])


  const [count, setCount] = useState(()=>{
    let sevedSan = localStorage.getItem('san')
    return sevedSan == null ? 0 : parseInt(sevedSan)
  })

  useEffect(()=>{
    localStorage.setItem('san', count)
  }, [count])

  
  return (
    <div className='body-div'> 
      <div>{count}</div>
      <button onClick={()=>{setCount(count+1)}}>press</button>


      {/* <div><h1>{time}</h1></div>
      <button onClick={()=>{setTime(10)}}>qaita bastau</button> */}


      {/* <div>{count}</div>
      <div>{text}</div>
      <button onClick={()=>{setCount(count+1)}}>press</button>
      <button onClick={()=>{setText('24/8')}}>Change</button> */}
    </div>
  )
}
