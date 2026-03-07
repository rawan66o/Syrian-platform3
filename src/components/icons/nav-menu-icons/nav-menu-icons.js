
export const MenuIcon = ({ size = 32, color = "#0C1C2F" }) => {
    return (<svg
        width={size}
        height={size}
        viewBox={`0 0 24 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4418_3746)">
            <path d="M3 7H21"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
            <path d="M9.49023 12H21.0002"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
            <path d="M3 12H5.99"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
            <path d="M3 17H21"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
        </g>
        <defs>
            <clipPath id="clip0_4418_3746">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>);
};