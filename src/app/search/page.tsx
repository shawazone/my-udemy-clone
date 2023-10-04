interface HomeProps {
    searchParams:string
    }
    export default async function page({searchParams}: HomeProps) {
    const courses = await getSeachParams ({})
    return (
    <div>page</div>
    )
    }