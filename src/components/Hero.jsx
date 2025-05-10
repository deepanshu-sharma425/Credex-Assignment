import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 tracking-tight">
                Unlock the Value of Your Unused Software Licenses
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Turn your dormant software licenses into cash. Fast, secure, and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="px-7 py-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Sell My Licenses
                </a>
                <a 
                  href="#how-it-works" 
                  className="px-7 py-3 text-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  How It Works <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Trusted by 500+ companies
                </span>
                <span className="mx-3">•</span>
                <span>Secure transactions</span>
                <span className="mx-3">•</span>
                <span>Best market rates</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-10 rounded-2xl shadow-xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl opacity-70"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Current Value</span>
                    <span className="text-3xl font-bold">$12,500</span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full">+24% Higher</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="font-medium">Adobe Creative Cloud</span>
                    <span className="font-semibold">$3,200</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="font-medium">Microsoft 365 E3</span>
                    <span className="font-semibold">$4,800</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="font-medium">AutoCAD License</span>
                    <span className="font-semibold">$2,900</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="font-medium">Salesforce Enterprise</span>
                    <span className="font-semibold">$1,600</span>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href="#contact"
                    className="block w-full py-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    Get Your Valuation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;