import React from 'react';
import '../styles/base.css';

const DotPulseLoader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-200">
            <div className="flex space-x-2">
                <div className="dot w-4 h-4 rounded-full bg-primary animate-bounce-delay-0"></div>
                <div className="dot w-4 h-4 rounded-full bg-primary animate-bounce-delay-1"></div>
                <div className="dot w-4 h-4 rounded-full bg-primary animate-bounce-delay-2"></div>
            </div>
        </div>
    );
};

export default DotPulseLoader;
