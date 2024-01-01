import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
    <ContentLoader
        className="card"
        speed={2}
        width={290}
        height={470}
        viewBox="0 0 290 470"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="322" rx="5" ry="5" width="52" height="18" />
        <rect x="71" y="350" rx="25" ry="25" width="150" height="44" />
        <rect x="0" y="285" rx="5" ry="5" width="284" height="32" />
        <circle cx="144" cy="146" r="114" />
        <circle cx="265" cy="443" r="24" />
        <rect x="0" y="425" rx="5" ry="5" width="75" height="35" />
        <rect x="111" y="409" rx="0" ry="0" width="11" height="0" />
    </ContentLoader>
);

export default Skeleton;
