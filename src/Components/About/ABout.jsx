import React, { useEffect } from 'react';
import EducationSection from './Educational/EducationSection';
import Achievement from './Achivement';
import Skills from '../Skill/Skill';

const ABout = () => {
    useEffect(()=>{
        document.title = "About";
    })
    return (
        <div  className='bg-black'>
            <EducationSection ></EducationSection>
            <Skills></Skills>
            <Achievement></Achievement>
        </div>
    );
};

export default ABout;