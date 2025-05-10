import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SoftSell helped us recover over $45,000 from unused enterprise licenses. The process was incredibly smooth, and their team was professional throughout.",
    name: "Sarah Johnson",
    title: "CTO",
    company: "Elevate Digital",
    rating: 5
  },
  {
    quote: "As a growing startup, every dollar counts. SoftSell's platform made it easy to convert our excess licenses into cash that we could reinvest in our growth.",
    name: "Michael Chen",
    title: "Operations Director",
    company: "NexTech Solutions",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Don't just take our word for it - hear from businesses that have successfully recovered value from their software licenses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-sm group hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 dark:text-gray-800" />
              <div className="flex flex-col h-full">
                <div className="mb-6 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 flex-grow italic text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;