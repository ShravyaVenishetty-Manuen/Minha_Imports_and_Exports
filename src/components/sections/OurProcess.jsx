import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import step1Img from '../../assets/process-step1.png';
import step2Img from '../../assets/process-step2.png';
import step3Img from '../../assets/process-step3.png';
import step4Img from '../../assets/process-step4.png';

const steps = [
  {
    id: '01',
    title: 'Farm sourcing',
    text: 'Direct collaboration with trusted Guntur grower groups since 2013 for premium cultivation.',
    image: step1Img,
    color: '#8f000d',
  },
  {
    id: '02',
    title: 'Selection & grading',
    text: 'Handpicked and graded by our team for vibrant color, high SHU and consistent quality.',
    image: step2Img,
    color: '#1f5e3b',
  },
  {
    id: '03',
    title: 'Processing & packing',
    text: 'Hygienic sorting and custom packaging that locks in freshness, color and flavor.',
    image: step3Img,
    color: '#cca72f',
  },
  {
    id: '04',
    title: 'Global export',
    text: 'On-time delivery with full documentation and clearance to ports worldwide.',
    image: step4Img,
    color: '#8f000d',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const OurProcess = () => {
  return (
    <section id="our-process" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1280px] mx-auto">

        <SectionHeading
          align="center"
          kicker="How it works"
          title={
            <>
              From <span className="text-[#8f000d]">Guntur farms</span> to{' '}
              <span className="text-[#1f5e3b]">global markets</span>
            </>
          }
          intro="A documented four-stage journey — from the field to your destination port."
        />

        <div className="relative mt-16">
          {/* Single hairline connector behind the number badges (desktop) */}
          <div className="hidden lg:block absolute top-[136px] left-[12.5%] right-[12.5%] h-px bg-neutral-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Image */}
                <div className="w-full h-[150px] mb-6 flex items-center justify-center">
                  <img src={step.image} alt={step.title} className="max-h-full object-contain" />
                </div>

                {/* Number node */}
                <div
                  className="relative z-10 w-11 h-11 rounded-full text-white font-['urbanist'] font-bold text-[13px] flex items-center justify-center mb-5 ring-4 ring-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.id}
                </div>

                <h3 className="font-['urbanist'] font-bold text-[18px] text-[#1a1c1e] mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="font-['Nunito'] font-semibold text-[#5f5b58] text-[14px] leading-[1.6] max-w-[260px]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
