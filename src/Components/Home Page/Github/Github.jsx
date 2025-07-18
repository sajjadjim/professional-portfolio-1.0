import React from 'react';
import { motion } from 'framer-motion';

const Github = () => {
    return (
        <div className='grid justify-center 2xl:py-10 py-5'

        >
            <h1 className='text-left not-last:2xl:text-3xl text-2xl  py-5 relative 2xl:right-55 font-bold'>Github states.</h1>
            <motion.div className="flex justify-center my-8 2xl:block lg:hidden"
                initial={{ opacity: 1, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            // , delay: 0.2
            >
                <img
                    src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sajjadjim&theme=blue_green"
                    alt="GitHub Profile Summary"
                    className="max-w-full h-auto"
                />
            </motion.div>

            <motion.img initial={{ opacity: 1, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }} src="https://github-readme-activity-graph.vercel.app/graph?username=sajjadjim&custom_title=My%20Contribution%20Graph&bg_color=FFFFF&color=58A6FF&line=1F6FEB&point=FF6B6B&area=true&hide_border=true&border_radius=10" alt="GitHub Contribution Graph" style={{ width: "100%", maxWidth: "800px" }} />

        </div>
    );
};

export default Github;