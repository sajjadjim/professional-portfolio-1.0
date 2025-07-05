import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const SendEmail = () => {

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_goye8av', 'template_ba6ua04', form.current, {
        publicKey: 'vnA9Trwl2IBt2a_Fr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('Send to Failed Email...', error.text);
        },
      );
  };
    return (
        <div className="flex w-full mx-auto justify-center items-center md:min-h-[50vh] bg-gradient-to-br  rounded-2xl shadow-lg ">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-black md:p-8 rounded-xl shadow-md flex flex-col gap-6 md:w-full md:max-w-4xl"
            >
                <h2 className="mb-3 text-teal-700 font-bold text-2xl text-center">Email Me</h2>
                {/* Name and Email in one row */}
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
                {/* Message in another div */}
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