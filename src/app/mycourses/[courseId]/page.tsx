import getCourseById from "@/app/actions/getCourseById";
import UpdataCourseComponent from "./UpdataCourseComponent";

interface IParams{
    courseId: string,
}


import React from 'react'

export default async function page({params}:{params:IParams}  ){

  const courses = await getCourseById(params)

  return (
    <div>
      <UpdataCourseComponent 
        name={courses?.name}
        imageSrc={courses?.imageSrc}
        author={courses?.author}
        price={courses?.price}
        courseId={courses?.id}
        description={courses?.description}/>
    </div>
  )
}
