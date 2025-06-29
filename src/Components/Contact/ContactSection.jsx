import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaMediumM, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { IoShareSocialSharp } from "react-icons/io5";
import { FaTelegramPlane } from 'react-icons/fa';
import SendEmail from './Email/SendEmail';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    name: 'Email',
    icon: <MdEmail className="text-3xl text-red-600" />,
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
    link: 'https://wa.me/880123456789',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF className="text-3xl text-blue-600" />,
    link: 'https://www.linkedin.com/in/sajjadjim/',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn className="text-3xl text-blue-800" />,
    link: 'https://linkedin.com/in/yourprofile',
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

const ContactSection = () => {
  useEffect(()=>{
    document.title = "Contact";
  })
  return (
    <section className="w-full min-h-screen bg-black flex flex-col justify-center items-center md:px-4 px-2 md:pt-25 pt-20">
      <h2 className="text-4xl flex gap-2 font-bold mb-10 text-center text-white">
        Contact Me
        <IoShareSocialSharp />
      </h2>
      <p className="text-center md:text-xl mb-10 max-w-md text-gray-300">
        Feel free to reach out to me through any of the platforms below. I'm always open to
        collaboration, feedback, or just a friendly hello! 😊
      </p>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl w-full"
       initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
      >
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-teal-500 group "
          >
            <span className="transition-colors duration-300 group-hover:text-blue-400">
              {contact.icon}
            </span>
            <span className="mt-2 font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
              {contact.name}
            </span>
          </a>
        ))}
      </motion.div>
      <motion.div className="md:w-full md:mx-auto md:mt-10 md:px-4 pt-5 flex justify-center"
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
