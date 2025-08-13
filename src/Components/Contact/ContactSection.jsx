import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaMediumM, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoShareSocialSharp } from "react-icons/io5";
import { FaTelegramPlane } from 'react-icons/fa';
import SendEmail from './Email/SendEmail';
import { motion } from 'framer-motion';

const baseContactInfo = [
  {
    name: 'Email',
    icon: <MdEmail className="text-3xl text-red-500" />,
    link: 'mailto:sajjadjim15@gmail.com',
  },
  {
    name: 'Phone',
    icon: <MdPhone className="text-3xl text-green-600" />,
    link: 'tel:+8801600101810',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp className="text-3xl text-green-500" />,
    link: 'https://wa.me/+8801600101810',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF className="text-3xl text-blue-600" />,
    // (Note: your original link points to LinkedIn; keeping it unchanged)
    link: 'https://www.linkedin.com/in/sajjadjim/',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn className="text-3xl text-blue-500" />,
    link: 'https://www.linkedin.com/in/sajjadjim/',
  },
  {
    name: 'Medium',
    icon: <FaMediumM className="text-3xl " />,
    link: 'https://medium.com/@sajjadjim',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-3xl " />,
    link: 'https://github.com/sajjadjim',
  },
  {
    name: 'Telegram',
    icon: <FaTelegramPlane className="text-3xl " />,
    link: 'https://t.me/sajjadjim15',
  }
];

// Tooltip animation
const tooltipVariants = {
  rest:   { opacity: 0, y: 8, scale: 0.95, pointerEvents: 'none' },
  hover:  { opacity: 1, y: -8, scale: 1, transition: { type: 'spring', stiffness: 520, damping: 28 } },
};

const ContactSection = () => {
  const [contacts, setContacts] = useState(baseContactInfo);

  useEffect(() => {
    document.title = "Contact";
  }, []);

  // Shuffle order on mount (Fisher–Yates)
  useEffect(() => {
    const arr = [...baseContactInfo];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setContacts(arr);
  }, []);

  return (
    <section className="w-full min-h-screen 
    bg-gradient-to-br from-gray-900/70 via-blue-950/40  to-violet-950/40 
    flex flex-col justify-center items-center md:px-4 px-2 md:pt-25 pt-20">
      <h2 className="2xl:text-4xl md:text-3xl text-2xl flex gap-2 font-bold mb-10 text-center text-white">
        Contact Me
        <IoShareSocialSharp />
      </h2>
      <p className="text-center lg:text-md 2xl:text-xl mb-10 max-w-md text-gray-300">
        Feel free to reach out to me through any of the platforms below. I'm always open to
        collaboration, feedback, or just a friendly hello! 😊
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-xl w-full">
        {contacts.map((contact, index) => (
          <motion.a
            key={`${contact.name}-${index}`}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            // Use variants to expose tooltip on hover (desktop only)
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative group flex border-blue-950 border-2 flex-col items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg 
             hover:shadow-blue-900 hover:scale-105
              bg-gradient-to-br from-violet-950/10  to-blue-800/40   
              cursor-pointer 
              hover:bg-gradient-to-br hover:from-gray-900  hover:to-blue-900 
              transition duration-300"
          >
            <span className="transition-colors duration-300 group-hover:text-white">
              {contact.icon}
            </span>

            {/* Mobile: show name under icon */}
            <span className="mt-2 font-medium text-gray-200 transition-colors duration-300 block md:hidden">
              {contact.name}
            </span>

            {/* Desktop tooltip (name + link) */}
            <motion.div
              variants={tooltipVariants}
              className="hidden md:block absolute -top-3 -translate-y-full left-1/2 -translate-x-1/2
                         px-3 py-2 rounded-md text-xs text-gray-100 font-medium whitespace-nowrap
                         backdrop-blur border border-blue-400/40 shadow-lg"
              style={{
                background: 'rgba(15,23,42,0.70)', // slate-900/70
              }}
            >
              <div className="flex flex-col items-center">
                <span className="text-gray-100">{contact.name}</span>
                <span className="text-[10px] text-blue-300/90">
                  {contact.link}
                </span>
              </div>
              {/* pointer arrow */}
              <span
                aria-hidden
                className="absolute left-1/2 translate-x-[-50%] -bottom-2"
                style={{
                  width: 0, height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '6px solid rgba(96,165,250,0.40)' // matches border color
                }}
              />
            </motion.div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="md:w-full md:mx-auto md:mt-10 md:px-4 pt-5 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SendEmail />
      </motion.div>
    </section>
  );
};

export default ContactSection;
