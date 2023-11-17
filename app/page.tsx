import dynamic from 'next/dynamic'

const DynamicCarouselContainer = dynamic(()=> import('./component/carouselContainer/carouselContainer'), {
  ssr: false,
  
})

export default function Home() {
  return (
    
    <div className="">
      <Container />
      <h1 className='text-black'>heya</h1>
    </div>
  )
}


function Container() {
  return (
    <div className= ' h-auto w-full'>
      <DynamicCarouselContainer/ >
      
    </div>
  )
}
