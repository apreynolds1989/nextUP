import React from 'react';

export const ShootingPuck = (props, width, height) => (
    <svg
        width={width}
        height={height}
        overflow='visible'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 955 626.25'
        {...props}
    >
        <defs>
            <clipPath id='a'>
                <path pointerEvents='all' d='M95.5 98.25h764V528h-764z' />
            </clipPath>
        </defs>
        <g
            className='layer'
            style={{
                pointerEvents: 'all',
            }}
            clipPath='url(#a)'
        >
            <g
                pointerEvents='none'
                style={{
                    colorInterpolationFilters: 'sRGB',
                    pointerEvents: 'none',
                }}
            />
            <image
                x={476.767}
                y={312.626}
                width={1.268}
                height={0.955}
                xlinkHref='https://imprintnext.io/xetool/assets/user/202207281246412764.png'
                transform='rotate(-30.96 -173720.581 543620.244) scale(534.541)'
            />
        </g>
    </svg>
);
