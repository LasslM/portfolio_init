// src/components/AnimatedBg.jsx
import React from 'react';

const AnimatedBg = () => {
    return (
        <>
            <div className={"relative w-full max-w-lg"}>
                <div className={"absolute top-24 -right-48 w-72 h-72 bg-color-1 mix-blend-multiply rounded-full filter blur-2xl"}></div>
                <div className={"absolute top-48 -right-80 w-72 h-72 bg-color-3 mix-blend-multiply rounded-full filter blur-2xl"}></div>
                <div className={"absolute top-64 -right-96 w-72 h-72 bg-color-5 mix-blend-multiply rounded-full filter blur-2xl opacity-65"}></div>
            </div>
        </>
    );
};

export default AnimatedBg;
