import { useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import classNames from "classnames";


function CustomCursor({ enabled, className }) {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [mouseX, mouseY]);

    const classes = classNames(
        "pointer-events-none drop-shadow-2xl",
        {
            hidden: !enabled,
            visible: enabled
        },
        className
    );

    return (
        <AnimatePresence>
            {enabled && (
                <motion.div
                    className={classes}
                    style={{
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        fontSize: '11px',
                        borderRadius: '0%',
                        position: 'fixed',
                        zIndex: 999,
                        pointerEvents: 'none',
                        top: '0px',
                        left: '0px',
                        x: mouseX,
                        y: mouseY,
                        paddingRight: '20px',
                        paddingLeft: '20px',
                    }}
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 600,
                            damping: 20
                        }
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.2,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                        }
                    }}
                >
                    Projektbericht anzeigen
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default CustomCursor;
