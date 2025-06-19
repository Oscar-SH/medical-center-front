import { motion } from 'framer-motion';

const CmpHeartLoading = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <motion.div
                className='w-24 h-24 border-4 border-blue-500 border-solid rounded-full flex justify-center items-center'
                animate={{ scale: [10, 15, 10] }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
                ❤️
            </motion.div>
        </div>
    );
};

export default CmpHeartLoading;