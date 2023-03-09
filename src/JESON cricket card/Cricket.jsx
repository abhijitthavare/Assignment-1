import React from 'react'
import Course from './Course'
import "./global.css"
import JSON from "./CricketersData.json"

const Cricket = () => {
  return (
    <Course payload={JSON}/>
  )
}

export default Cricket