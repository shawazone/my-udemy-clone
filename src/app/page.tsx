import SliderMain from './components/SliderMain'
import getAllCourses from './actions/getAllCourses';
import CourseComponent from './components/CourseComponent';
import myUser from './actions/getUser';
const images = [
  "/a.jpg",
  "/b.jpg",
]


interface HomeProps {
  searchParams : string
}

export default async function Home({searchParams}:HomeProps) {

    const courses = await getAllCourses(searchParams); // get all the searched courses from api
    const currentUser = await myUser();
  return (
    
    <main className='w-[100%]'>
      <SliderMain // ??
      images={images}
      />

      <div>

          <div className='flex flex-wrap px-8'>
            {courses.map((item:any) => (
              <CourseComponent // ??
                key={item.id}
                data={item}   
                currentUser={currentUser}       
                
                />
            ))}

          
          </div>
      </div>


    </main>
  )
}
