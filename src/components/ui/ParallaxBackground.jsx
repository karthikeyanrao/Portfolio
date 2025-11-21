import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxBackground = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

    return (
        <div ref={ref} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-neon-blue/5 blur-[100px]"
            />
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-neon-purple/5 blur-[100px]"
            />
            <motion.div
                style={{ y: y3 }}
                className="absolute top-[40%] left-[60%] w-[20vw] h-[20vw] rounded-full bg-neon-green/5 blur-[100px]"
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [null, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ParallaxBackground;
