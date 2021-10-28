// import { GetStaticPropsContext } from 'next';
import { motion } from 'framer-motion';
import { fadeInUp, itemFadeIn } from '../animations/animation';
import ServiceCard from '../components/ServiceCard';
import { services } from '../modules/data';

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        With 3+ years of experience in Web Development and a 12+ years
        background in film, design & photography
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ type: 'spring', damping: 300, stiffness: 50 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              variants={itemFadeIn}
              key="index"
              className="bg-white rounded-lg shadow-lg lg:col-span-1 dark:bg-dark-500"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default index;

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log('SERVER', services);
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
