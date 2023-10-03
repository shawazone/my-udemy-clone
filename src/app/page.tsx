import SliderMain from './components/SliderMain'
import getAllCourses from './actions/getAllCourses';


const images = [
  "/a.jpg",
  "/b.jpg",
]


interface HomeProps {
  searchParams : string
}

export default async function Home({searchParams}:HomeProps) {

    const courses = await getAllCourses(searchParams);

  return (
    
    <main className='w-[100%]'>
      <SliderMain 
      images={images}
      />

      <div>

          <div className='flex flex-wrap px-8'>
          <CourseComponent/>

          
          </div>
      </div>


    </main>
  )
}
