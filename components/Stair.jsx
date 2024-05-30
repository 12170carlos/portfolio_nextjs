import { animate, motion } from "framer-motion";

//variantes

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stair = () => {
  console.log("Stair component is rendering");
  return (
    <>
      {/* render ó motion divs, each  representing  a step of the stairs.
    
    Each div will have the sema animation defined by the starAnimation object.
    The delay for each div is calculated dinamically based on t's reverse index,
    creating a staggered effect with decreasing delay for each subsequent step.
    
    */}
    
      {[...Array(6).map((_, index) => {
          console.log(`Animating div ${index}`);
          return (
            
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className="h-full w-full bg-white-relative"
            />
          );
        }),
      ]}
    </>
  );
};

export default Stair;
