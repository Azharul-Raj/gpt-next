import React, { useEffect } from 'react'

export default function index() {
  useEffect(()=>{
    fetch("/api/hello").then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div>
        Hey there
    </div>
  )
}
