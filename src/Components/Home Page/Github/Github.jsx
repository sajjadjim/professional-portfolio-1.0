import React from 'react';
import { motion } from 'framer-motion';

const Github = () => {
    return (
        <motion.div className='grid justify-center  md:py-10 py-5'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h1 className='text-left md:text-4xl text-2xl py-5 relative md:right-55 font-bold'>Github states.</h1>
            <div className="flex justify-center my-8">
                <img
                    src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sajjadjim&theme=blue_green"
                    alt="GitHub Profile Summary"
                    className="max-w-full h-auto"
                />
            </div>
            <img src="https://github-readme-activity-graph.vercel.app/graph?username=sajjadjim&custom_title=My%20Contribution%20Graph&bg_color=FFFFF&color=58A6FF&line=1F6FEB&point=FF6B6B&area=true&hide_border=true&border_radius=10" alt="GitHub Contribution Graph" style={{ width: "100%", maxWidth: "800px" }} />
        </motion.div>
    );
};

export default Github;