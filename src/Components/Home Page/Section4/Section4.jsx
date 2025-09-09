import React, { useState, useEffect, useRef } from 'react';
import './section4.css';
import { motion } from 'framer-motion';
const pages = [
  {
    id: 1,
    bg: '',
    title: 'Problem Solving',
    text: `
      <ul class="md:list-disc  list-none flex gap-5 list-inside mt-2">
        <li>Python</li>
        <li>C</li>
        <li>C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
    `,
  },
  {
    id: 2,
    bg: '',
    title: 'Frontend',
    text: `
      <ul class="md:list-disc list-none flex gap-5 list-inside mt-2">
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    `,
  },
  {
    id: 3,
    bg: '',
    title: 'Backend',
    text: `
      <ul class="md:list-disc list-none flex gap-5 list-inside mt-2">
        <li>Express.js</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>NextJs</li>
        <li>PHP</li>
      </ul>
    `,
  },
    {
    id: 4,
    bg: '',
    title: 'Authentications',
    text: `
      <ul class="md:list-disc list-none flex gap-5 list-inside mt-2">
        <li>JWT</li>
        <li>Firebase Auth</li>
      </ul>
    `,
  },
];

const Section4 = () => {
  const [index, setIndex] = useState(0);
  const [typedHTML, setTypedHTML] = useState('');
  const typingTimeout = useRef(null);
  // const fullTextRef = useRef(null);
  const sectionRef = useRef(null);
  const scrolling = useRef(false);
  const charIndex = useRef(0);

  const handleScroll = (e) => {
    if (!sectionRef.current.contains(e.target)) return;
    e.preventDefault();

    if (scrolling.current) return;
    scrolling.current = true;

    if (e.deltaY > 0 && index < pages.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && index > 0) {
      setIndex((prev) => prev - 1);
    }

    setTimeout(() => {
      scrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [index]);

  useEffect(() => {
    const fullText = pages[index].text;
    charIndex.current = 0;
    setTypedHTML('');

    function type() {
      if (charIndex.current < fullText.length) {
        setTypedHTML(fullText.slice(0, charIndex.current + 1));
        charIndex.current += 1;
        typingTimeout.current = setTimeout(type, 20); // Typing speed
      } else {
        typingTimeout.current = setTimeout(() => {
          setIndex((prev) => (prev + 1) % pages.length);
        }, 2000);
      }
    }

    type();

    return () => clearTimeout(typingTimeout.current);
  }, [index]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative 2xl:h-80 bg-gradient-to-br from-gray-900  to-gray-900/20   lg:h-50 h-60 rounded-xl 2xl:w-10/12 lg:w-11/12 mx-auto overflow-hidden border-2 border-blue-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute md:w-350   top-1/4 left-1/2 transform -translate-x-1/2 z-20   bg-opacity-60  py-6 rounded-lg grid justify-center  text-2xl">
        <h2 className="mb-4 2xl:text-5xl lg:text-3xl text-2xl font-semibold text-center">{pages[index].title}</h2>
        <div
          className=" text-left text-md md:text-xl 2xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: typedHTML }}
        />
      </div>

      <div
        className="flex"
        style={{
          width: `${pages.length * 100}vw`,
          transform: `translateX(-${index * 100}vw)`,
          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {pages.map((page) => (
          <div
            key={page.id}
            className={`${page.bg} h-screen  w-screen flex-shrink-0`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Section4;
