import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4 text-center">
            <div className="max-w-lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold text-text-primary mb-6">
                        Node Not Found
                    </h2>
                    <p className="text-text-muted mb-8 text-lg">
                        The block you are looking for has not been mined or does not exist on this chain.
                    </p>
                    <Link
                        to="/"
                        className="btn btn-primary inline-flex items-center gap-2"
                    >
                        Return to Genesis Block
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
