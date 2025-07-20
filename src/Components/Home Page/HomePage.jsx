import './HomePage.css'
import DevIconsMarquee from './DevIcons/DevIconsMarquee'
import Github from './Github/Github'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import { useEffect } from 'react'

function HomePage() {
  useEffect(()=>{
    document.title = 'Sajjad JIM'
    // This will set the document title to 'Sajjad JIM' when the component mounts
  })
  return (
    <div className='bg-black'>
      <Section1></Section1>
      <Section2></Section2>
      <DevIconsMarquee></DevIconsMarquee>
      <Section3></Section3>
      <Section4></Section4>
      <Github></Github>
    </div>
  )
}

export default HomePage
