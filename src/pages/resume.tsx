import Bar from '../components/Bar';
import { languages, tools } from '../modules/data';
import { motion } from 'framer-motion';
import { opacityFY } from '../animations/animation';

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education & exprience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={opacityFY}
          transition={{ delay: 0.1 }}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="div">
            <h5 className="my-2 text-xl font-bold">Frontend Development</h5>
            <p className="font-semibold">Hyper Island SE(2019-2021)</p>
            <p className="my">
              description Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={opacityFY}
          transition={{ delay: 0.1 }}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Exprience</h5>
          <div className="div">
            <h5 className="my-2 text-xl font-bold">Frontend Lead</h5>
            <p className="font-semibold">Dibz.se(2021 -0n)</p>
            <p className="my">
              description dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </motion.div>
      </div>
      {/* language and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
