import myUser from '../actions/getUser'
import getCurrUserCourse from '../actions/getCurrUserCourse'

import React from 'react'

interface IParams{
    courseId?: string

}


export default async function page({params}: {params:IParams}) {
  const currentUser = await myUser()


    if(!currentUser){
        return "Not Authorized for this page"
    }

    const courses = await getCurrUserCourse()

    if(courses.length === 0){
        return "No co "
    }

  
    return (
    <div>
      
    </div>
  )
}
