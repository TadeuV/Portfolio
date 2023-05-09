export const bounceball = {
  hover:{
    y:4,
    transition:{
      duration:0.4,
      repeatType: "mirror",
      repeat: Infinity,
    }
  },
  // tap:{
  //   y:100,
  //   width:200
  // }
  
  
};



export const draw = {
  hidden: { pathLength: 0, opacity: 0, },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 1.5 },
      
      }
    };
  }
};

export const dropIn = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration:.8,
      type: 'spring',
      stiffness: 40,
      delay: .3,
    },
  },
  hover:{
    y:-50,
    opacity:0,
    transition: {
      type: 'spring',
      duration: .8,
      delay: 0,
    },
  }
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textVariant3 = (delay) => ({
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});
export const textVariant4 = (delay) => ({
  hidden: {
    x: 150,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 3,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const fadeIn2 = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -20 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
});
export const fadeIn3 = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -20 : 0,
    y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
});

export const fadeIn4 = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
  hover: {
    
    x: 0,
    y: 0,
    opacity: 0.9,
    
    transition: {
      type,
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
});
export const fadeIn5 = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -40 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
  hover: {
    x: 0,
    y: 0,
    opacity: 0.8,
    
    transition: {
      type,
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
});


export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 180,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 1.2,
      delay: 0.5,
    },
  },
});
export const Rolling = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    // rotate: 180,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 1.3,
      delay: 0,
    },
  },
  hover:{
    y:-50,
    opacity:0,
    transition: {
      type: 'spring',
      duration: .5,
      delay: 0,
    },
  }
});
export const Appear = () => ({
  hidden: {
    top:0,
    opacity: 0,
  },

  hover:{
    top:330,
    // right:-200,
    opacity:0.9,
    transition: {
      type: 'tween',
      duration: .5,
      delay: 0.1,
    },
  }
});
export const AppearMobile = () => ({
  hidden: {
    top:0,
    opacity: 0,
  },

  hover:{
    top:230,
    // right:-200,
    opacity:0.9,
    transition: {
      type: 'tween',
      duration: .5,
      delay: 0.1,
    },
  }
});
export const AppearMobileSM = () => ({
  hidden: {
    top:0,
    opacity: 0,
  },

  hover:{
    top:270,
    // right:-200,
    opacity:0.9,
    transition: {
      type: 'tween',
      duration: .5,
      delay: 0.1,
    },
  }
});
export const AppearMobileLG = () => ({
  hidden: {
    top:0,
    opacity: 0,
  },

  hover:{
    right:-450,
    top:180,
    // right:-200,
    opacity:0.9,
    transition: {
      type: 'tween',
      duration: .5,
      delay: 0.1,
    },
  }
});
export const AppearMain = () => ({
  

  hover:{
    y:-70,
    // right:-200,
    // opacity:0.9,
    transition: {
      type: 'tween',
      duration: .5,
      delay: 0.1,
    },
  }
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
