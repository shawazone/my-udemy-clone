import prisma from '../lib/prismadb'

export default async function getAllCourses(params:any) {

    try{
            const {SearchResults} = params

            let query:any = {};

            if(SearchResults)   {
           
                    query.name = {
                        contains: SearchResults,
                    
                    }
                }
                
                
                
                const courses = await prisma.course.findMany({
                    where: query,
            orderBy: {
                createdAt: 'desc'
            }
        })
        
        const safeCourse = courses.map((course) => ({
            ...course,
            createdAt: course.createdAt.toISOString(),
        })) 
        
        return safeCourse
        
    }
    catch(error:any){
        throw new Error(error)
    }
 }
