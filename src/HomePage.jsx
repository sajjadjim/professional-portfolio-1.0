import './App.css'
import DevIconsMarquee from './Components/Home Page/DevIcons/DevIconsMarquee'
import Github from './Components/Home Page/Github/Github'
import Section1 from './Components/Home Page/Section1/Section1'
import Section2 from './Components/Home Page/Section2/Section2'
import Section3 from './Components/Home Page/Section3/Section3'
import Section4 from './Components/Home Page/Section4/Section4'

function HomePage() {
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
