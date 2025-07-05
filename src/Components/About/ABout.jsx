import React, { useEffect } from 'react';
import EducationSection from './Educational/EducationSection';
import Achievement from './Achivement';

const ABout = () => {
    useEffect(()=>{
        document.title = "About";
    })
    return (
        <div  className='bg-black'>
            <EducationSection ></EducationSection>
            <Achievement></Achievement>
        </div>
    );
};

export default ABout;