import Image from 'next/image'
import CarouselContainer from './component/carouselContainer/carouselContainer'

export default function Home() {
  return (
    
    <div className="">
      <Container />
    </div>
  )
}


function Container() {
  return (
    <div className= 'mx-auto h-auto container'>
      <CarouselContainer/ >
      
    </div>
  )
}
