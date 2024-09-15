import { motion } from "framer-motion";
const SlideUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};
interface BannerProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const SlideLeft = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

// Tipifica el componente correctamente usando la interfaz
export const BannerPrincipal = ({
  image,
  title,
  subtitle,
  link,
}: BannerProps) => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image Section */}
        <div>
          <motion.img
            variants={SlideUp(0.6)}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={image}
            alt={title}
            className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover"
          />
        </div>
        {/* Banner Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
          <motion.h1
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-4xl font-bold capitalize font-playfair"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn">
              <a href={link}>Explorar Mas</a>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        {/* brand info */}
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase"
          >
            Get 20% Discount On Your First Order, Are You Ready To Buy
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=""
          >
            We will make sure you get the right and the best quality products
            for your workout
          </motion.p>
          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn">Learn More</button>
            <button className="border-2 border-primary text-primary font-bold px-5 rounded-lg">
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
