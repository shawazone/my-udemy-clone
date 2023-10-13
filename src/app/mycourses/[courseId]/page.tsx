import getCourseById from "@/app/actions/getCourseById";
import UpdataCourseComponent from "./UpdataCourseComponent";

interface IParams{
    courseId: string,
}


import React from 'react'

export default function page({params}:{params:IParams}  ){
  return (
    <div>
      <UpdataCourseComponent />
    </div>
  )
}
