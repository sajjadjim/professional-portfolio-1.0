import React, { useEffect } from 'react';
import EducationSection from './Educational/EducationSection';
import Achievement from './Achivement';
import Skills from '../Skill/Skill';
import Publications from './Publication/Publications';

const ABout = () => {
    useEffect(()=>{
        document.title = "About - Sajjad JIM";
    })
    return (
        <div  className='bg-gradient-to-br from-gray-900/70 via-blue-950/40  to-violet-950/40'>
            <EducationSection ></EducationSection>
            <Skills></Skills>
            <Publications></Publications>
            <Achievement></Achievement>
        </div>
    );
};

export default ABout;