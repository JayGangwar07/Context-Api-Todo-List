import React from 'react'
import {useParams} from 'react-router'

export default function User(){
  const params = useParams()

  return(
  <h1 className="bg-gray-500 w-[90%] mx-5 h-40 text-7xl flex items-center justify-center
    text-white rounded-3xl">User: {params.id}</h1>
  )
  }