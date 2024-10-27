import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const LazyComponent = dynamic(() => import("@/components/LazyComponent"));

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default Home;
