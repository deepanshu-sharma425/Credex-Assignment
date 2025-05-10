import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const licenseTypes = [
  "Microsoft 365 / Office",
  "Adobe Creative Cloud",
  "Autodesk Products",
  "VMware Products",
  "Oracle Database",
  "SAP Products",
  "Salesforce Licenses",
  "Other Enterprise Software"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-blue-600 p-8 md:p-12 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Your License Valuation</h2>
                <p className="mb-6 text-blue-100">
                  Fill out this form to get a free, no-obligation valuation of your unused software licenses. Our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-5 mt-10">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">No Commitment Required</h4>
                      <p className="text-sm text-blue-100">Request a valuation with no obligation to sell</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Confidential Process</h4>
                      <p className="text-sm text-blue-100">Your information is kept 100% secure and private</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expert Consultation</h4>
                      <p className="text-sm text-blue-100">Get advice from our license transfer specialists</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                      Your request has been submitted. One of our experts will contact you shortly with your license valuation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                        placeholder="Your Company"
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="licenseType" className="block text-sm font-medium mb-1">
                        License Type
                      </label>
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                      >
                        <option value="">Select a license type</option>
                        {licenseTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.licenseType && <p className="mt-1 text-sm text-red-600">{errors.licenseType}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                        placeholder="Please describe the software licenses you're looking to sell"
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center font-medium transition-colors ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="w-4 h-4 mr-2" /> Submit Request
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;