import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollOnTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`${isVisible ? 'opacity-100' : 'opacity-0'
                    } fixed bottom-8 right-8 text-2xl p-2 border-2 border-[#C19D60] rounded-lg  text-[#C19D60] transition-opacity duration-300`}
            >
                <IoIosArrowUp />
            </button>
        </div>
    );
};

export default ScrollOnTop;