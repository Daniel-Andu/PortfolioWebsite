

'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="title-number">5</span> Get in Touch
        </h2>
        
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-primary rounded-xl border border-gray-800">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <a 
                    href="mailto:you@gmail.com" 
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-primary rounded-xl border border-gray-800">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p className="text-text-secondary">Your City, Country</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-primary rounded-xl border border-gray-800">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-text-secondary">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                     Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary border border-gray-800 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                     Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary border border-gray-800 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-800 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary border border-gray-800 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
  
  