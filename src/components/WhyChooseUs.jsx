import { Shield, DollarSign, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="w-8 h-8 text-blue-500 mb-3" />,
    title: "Maximum Value",
    description: "Our market analytics ensure you get up to 70% of the original license value, higher than industry average."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500 mb-3" />,
    title: "Fast Process",
    description: "From submission to payment in as little as 48 hours. No lengthy negotiations or paperwork."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500 mb-3" />,
    title: "100% Secure & Compliant",
    description: "All transactions follow software license transfer regulations with full legal documentation."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500 mb-3" />,
    title: "Dedicated Support",
    description: "Personal account manager and tech support to guide you through every step of the process."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of businesses that trust us with their software asset recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full p-3 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to turn unused licenses into revenue?</h3>
              <p className="text-blue-100">Over $2.3 million recovered for our clients in 2023 alone.</p>
            </div>
            <a 
              href="#contact"
              className="whitespace-nowrap px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-300 text-center md:text-left"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;