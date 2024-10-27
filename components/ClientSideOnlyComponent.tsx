// components/ClientSideOnlyComponent.tsx
import React, { useEffect, useState } from "react";

const ClientSideOnlyComponent: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Browser-specific logic
    setData("This is only rendered on the client");
  }, []);

  return <div>{data}</div>;
};

export default dynamic(() => Promise.resolve(ClientSideOnlyComponent), {
  ssr: false,
});
