// pages/dashboard.tsx
import dynamic from "next/dynamic";

// Dynamically import HeavyChart
const LazyLoadedChart = dynamic(() => import("@/components/HeavyChart"), {
  loading: () => <p>Loading chart...</p>, // Optional loading fallback
  ssr: false, // Disables server-side rendering for this component
});

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <LazyLoadedChart /> {/* The component will load only when needed */}
    </div>
  );
};

export default Dashboard;
