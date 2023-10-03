import SliderMain from './components/SliderMain'
import getAllCourses from './actions/getAllCourses';
import CourseComponent from './components/CourseComponent';

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
            {courses.map((item:any) => (
              <CourseComponent
                key={item.id}
                data={item}          

                />
            ))}

          
          </div>
      </div>


    </main>
  )
}
