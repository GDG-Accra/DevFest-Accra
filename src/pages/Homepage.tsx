// HomePage.tsx

import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Welcome to the DevFest Project
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-600">
        Ready for scalable development 🚀
      </p>
    </div>
  );
}

export default HomePage;
