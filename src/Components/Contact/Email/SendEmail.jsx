import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
// import './SendEmail.css'; // Optional, for external styles if needed

const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_goye8av', 'template_ba6ua04', form.current, {
      publicKey: 'vnA9Trwl2IBt2a_Fr',
    }).then(
      () => {
        console.log('SUCCESS!');
        Swal.fire({
        //   title: 'Message Sent!',
          html: "<div id='lottie-container' style='width:150px;height:150px;margin:auto;'></div><p>Your email has been sent successfully.</p>",
        //   icon: 'success',
          confirmButtonText: 'OK',
          didOpen: async () => {
            const Lottie = await import('lottie-web');
            const animationData = await import('./Email successfully sent.json'); // ✅ Replace with your actual file path
            Lottie.default.loadAnimation({
              container: document.getElementById('lottie-container'),
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: animationData.default,
            });
          },
        });
      },
      (error) => {
        console.error('FAILED...', error.text);
      }
    );
    form.current.reset();
  };

  return (
    <div className="flex w-full mx-auto justify-center items-center md:min-h-[50vh] bg-gradient-to-br rounded-2xl shadow-lg">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-black md:p-8 rounded-xl shadow-md flex flex-col gap-6 md:w-full md:max-w-4xl"
      >
        <h2 className="mb-3 text-teal-700 font-bold text-2xl text-center">Email Me</h2>
        <div className="flex flex-row gap-4">
          <div className="flex-1">
            <label className="text-teal-700 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 px-3 py-2 border border-indigo-200 rounded-md text-base outline-none focus:border-teal-400 transition w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-teal-700 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 px-3 py-2 border border-indigo-200 rounded-md text-base outline-none focus:border-teal-600 transition w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-teal-700 font-medium">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="px-3 py-2 border border-indigo-200 rounded-md text-base resize-vertical outline-none focus:border-teal-600 transition"
          />
        </div>

        <input
          type="submit"
          value="Send"
          className="bg-gradient-to-r from-teal-500 to-indigo-400 text-white border-none rounded-md py-3 font-semibold text-base cursor-pointer mt-2 transition hover:from-teal-600 hover:to-indigo-500"
        />
      </form>
    </div>
  );
};

export default SendEmail;
