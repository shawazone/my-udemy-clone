import prisma from '../lib/prismadb'



interface IParams {
    courseId?:string 
}


export default async function getCourseById (
    params: IParams
) {
    try{
        const {courseId} = params
        const course = await prisma.course.findUnique({
            where: {
                id : courseId
            },
            include: {
                user:true 
            }
        });



            return{
                ...course,
                createdAt: course?.createdAt.toString(),
                user:{
                    ...course?.user,
                    createdAt: course?.user.createdAt.toString(),
                    updatedAt: course?.user.updatedAt.toString(),
                }
            }

        if(!courseId) {
            return null
        }
    }catch(error:any) {
        throw new Error(error);
    }
}