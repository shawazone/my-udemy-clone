import React from 'react';
// import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';

const LoadingComponent = () => {
//   const router = useRouter();


    return (
        <div className="flex justify-center items-center mt-16">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-950 border-opacity-2"></div>
      </div>
    );

};

export default LoadingComponent;