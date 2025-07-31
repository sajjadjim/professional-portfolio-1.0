import React, { useEffect } from 'react';
import EducationSection from './Educational/EducationSection';
import Achievement from './Achivement';
import Skills from '../Skill/Skill';
import Publications from './Publication/Publications';

const ABout = () => {
    useEffect(()=>{
        document.title = "About";
    })
    return (
        <div  className='bg-black'>
            <EducationSection ></EducationSection>
            <Skills></Skills>
            <Publications></Publications>
            <Achievement></Achievement>
        </div>
    );
};

export default ABout;