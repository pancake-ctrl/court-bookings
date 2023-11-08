import dynamic from 'next/dynamic'

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
    <div className= ' h-auto container'>
      <DynamicCarouselContainer/ >
    </div>
  )
}
