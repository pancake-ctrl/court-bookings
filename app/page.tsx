import dynamic from 'next/dynamic'
import Venue from './component/venue/venue'

const DynamicCarouselContainer = dynamic(()=> import('./component/carouselContainer/carouselContainer'), {
  ssr: false,
  
})

export default function Home() {
  return (
    
    <div className="">
      <Container />
    </div>
  )
}


function Container() {
  return (
    <div className= ' h-auto w-full p-2'>
      <DynamicCarouselContainer/ >
      <Venue />
      
    </div>
  )
}
