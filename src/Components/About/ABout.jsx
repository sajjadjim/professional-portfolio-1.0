import React, { useEffect } from 'react';
import EducationSection from './Educational/EducationSection';

const ABout = () => {
    useEffect(()=>{
        document.title = "About Me";
    })
    return (
        <div  className='bg-black'>
            <EducationSection ></EducationSection>
        </div>
    );
};

export default ABout;