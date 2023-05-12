import React from 'react';
import ContentLoader from 'react-content-loader';

export const EventSkeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={100}
      viewBox="0 0 500 150"
      className='md:w-1/3'
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="8" ry="8" width="150" height="150" />
      <rect x="170" y="8" rx="4" ry="4" width="150" height="20" />
      <rect x="170" y="40" rx="4" ry="4" width="250" height="16" />
      <rect x="170" y="68" rx="4" ry="4" width="200" height="16" />
      <rect x="170" y="96" rx="4" ry="4" width="100" height="16" />
      <rect x="170" y="124" rx="4" ry="4" width="60" height="16" />
    </ContentLoader>
  );
};