import { FaFileAlt, FaUserGraduate, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Exploring the Best Machine Learning Model for Alzheimer’s Disease Prediction",
    authors: [
      "Shahin Chowdhury",
      "Md. Mahfujur Rahman",
      "S.M. Sajjad Hossain Jim",
      "Sharmin Alam Mou",
      "Sadman Sadik Khan"
    ],
    certificateLink: "https://drive.google.com/file/d/1cna8A0oPCZq0XsMjUFgiJyhXCg2Y09bQ/view", // Replace with your actual link
  },
  {
    title: "Deep Neural Networks for Identifying Leaf Diseases in Potato and Eggplant Crops",
    authors: [
      "Sadman Sadik Khan",
      "Md. Mahfujur Rahman",
      "Nasif Abdullah",
      "S.M. Sajjad Hossain Jim"
    ],
    certificateLink: "https://drive.google.com/file/d/1JYxDE92J2yi-0zn49JXaGCNP0a0CQW3z/view", // Replace with your actual link
  }
];

const Publications = () => {
  return (
    <div className="px-4 py-10 md:px-10 2xl:max-w-9/12 lg:w-11/12 mx-auto text-white">
      <h2 className="text-3xl md:text-4xl font-bold  mb-8 flex items-center gap-2">
        <FaFileAlt className="text-2xl" />
        Research Publications.
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="border border-gray-800 rounded-2xl p-6 bg-gradient-to-br from-gray-900 to-gray-900/10  hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900/40  shadow-lg hover:shadow-blue-950 transition-shadow duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-2 flex items-center gap-2">
              <FaFileAlt /> {pub.title}
            </h3>
            <div className="mb-4">
              <p className="text-sm text-gray-400 font-medium mb-1 flex items-center gap-1">
                <FaUserGraduate className="" />
                <span>Authors:</span>
              </p>
              <ul className="list-disc ml-6 space-y-1 text-sm text-gray-400">
                {pub.authors.map((author, i) => (
                  <li key={i}>{author}</li>
                ))}
              </ul>
            </div>
            <a
              href={pub.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-500 transition-colors"
            >
              View Certificate <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
