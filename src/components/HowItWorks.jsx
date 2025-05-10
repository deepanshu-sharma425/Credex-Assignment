import { UploadCloud, BarChart2, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud className="w-10 h-10 mb-4 text-blue-500" />,
    title: "Upload License",
    description: "Submit your software license details through our secure portal. We support all major enterprise software vendors."
  },
  {
    icon: <BarChart2 className="w-10 h-10 mb-4 text-blue-500" />,
    title: "Get Valuation",
    description: "Our automated system analyzes your license against current market rates to provide you with the best possible valuation."
  },
  {
    icon: <CreditCard className="w-10 h-10 mb-4 text-blue-500" />,
    title: "Get Paid",
    description: "Once you accept our offer, receive payment via your preferred method within 3-5 business days."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our streamlined process makes selling your unused licenses simple and profitable.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900 relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full p-4 mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg inline-block transition-colors duration-300"
          >
            Start the Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;