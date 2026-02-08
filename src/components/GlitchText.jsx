import { useRef, useEffect } from 'react';
import './GlitchText.css';

const GlitchText = ({
    children,
    speed = 1,
    enableShadows = true,
    enableOnHover = false,
    className = '',
}) => {
    const inlineStyles = {
        '--after-duration': `${3 / speed}s`,
        '--before-duration': `${2 / speed}s`,
        '--after-shadow': enableShadows ? '-10px 0 red' : 'none',
        '--before-shadow': enableShadows ? '10px 0 cyan' : 'none',
    };

    return (
        <div
            className={`glitch ${enableOnHover ? 'enable-on-hover' : ''} ${className}`}
            style={inlineStyles}
            data-text={children}
        >
            {children}
        </div>
    );
};

export default GlitchText;
