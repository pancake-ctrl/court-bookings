import dynamic from 'next/dynamic'
import Venue from './component/venue/page'

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
    <div className= ' h-auto w-full'>
      <DynamicCarouselContainer/ >
      <Venue />
      
    </div>
  )
}
