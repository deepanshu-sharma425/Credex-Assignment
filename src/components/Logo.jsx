import { BarChartBig } from 'lucide-react';

const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <span className="text-blue-600 dark:text-blue-400 mr-2">
        <BarChartBig size={28} />
      </span>
      <span className="text-xl font-bold tracking-tight">
        Soft<span className="text-blue-600 dark:text-blue-400">Sell</span>
      </span>
    </a>
  );
};

export default Logo;