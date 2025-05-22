import { easeInOut, motion } from "motion/react";
function App() {
  return (
    <div
      className="[perspective:1000px] [transfrom-style:preserve-3d] flex justify-center items-center h-screen bg-neutral-900 w-full"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          // rotate: 100,
          // rotate: [
          //   0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
          //   160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280,
          //   290, 300, 310, 320, 330, 340, 350, 360,
          // ],
          opacity: 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          y: -5,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
        }}
        whileTap={{ y: 0 }}
        style={{ translateZ: 100 }}
        className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Motion
        </span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
}

export default App;
