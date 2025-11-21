import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background">
            <div className="relative flex flex-col items-center">
                {/* Outer rotating ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 rounded-full border-t-4 border-b-4 border-neon-blue shadow-[0_0_15px_rgba(0,191,255,0.5)]"
                />

                {/* Inner rotating ring (reverse) */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-2 w-20 h-20 rounded-full border-r-4 border-l-4 border-neon-purple shadow-[0_0_15px_rgba(181,108,255,0.5)]"
                />

                {/* Center pulsing dot */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute top-8 w-8 h-8 bg-neon-green rounded-full shadow-[0_0_20px_rgba(0,255,176,0.8)]"
                />

                {/* Loading text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mt-8 text-neon-blue font-mono tracking-widest"
                >
                    INITIALIZING...
                </motion.p>
            </div>
        </div>
    );
};

export default Loader;
