// import { safeCourse } from './../types/index';
import prisma from '../lib/prismadb'
import myUser from '../actions/getUser'


import React from 'react'

export default async function getCurrUserCourse() {
    const user = await myUser()
    const course = await prisma.course.findMany({
        where: {
            userId: user?.id
        },
        orderBy: {
        createdAt: 'desc'
        }
    })
    const safeCourse = course.map((course)=> ({
        ...course,  
        createdAt: course.createdAt.toDateString()
}))

return safeCourse 

}

