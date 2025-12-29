import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Shield, Sparkles, Users, TrendingUp, Award, Star, ArrowRight } from 'lucide-react';

export default function ModernHomepage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({ users: 0, projects: 0, satisfaction: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          users: Math.floor(10000 * progress),
          projects: Math.floor(500 * progress),
          satisfaction: Math.floor(99 * progress)
        });
        
        if (step >= steps) clearInterval(timer);
      }, increment);
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
    
    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);
    
    return () => observer.disconnect();
  }, []);

  const cards = [
    { icon: Zap, title: 'দ্রুত গতি', desc: 'Lightning fast performance সহ আপনার ওয়েবসাইট', color: 'from-yellow-400 to-orange-500' },
    { icon: Shield, title: 'নিরাপত্তা', desc: 'সর্বোচ্চ মানের security এবং protection', color: 'from-blue-400 to-indigo-600' },
    { icon: Sparkles, title: 'আধুনিক ডিজাইন', desc: 'সুন্দর এবং responsive UI/UX', color: 'from-purple-400 to-pink-500' },
    { icon: TrendingUp, title: 'বৃদ্ধি', desc: 'আপনার ব্যবসা grow করান আমাদের সাথে', color: 'from-green-400 to-emerald-600' }
  ];

  const features = [
    { icon: Users, title: 'Community', desc: '10,000+ active users' },
    { icon: Award, title: 'Quality', desc: 'Award winning service' },
    { icon: Shield, title: 'Secure', desc: '100% data protection' },
    { icon: Sparkles, title: 'Innovation', desc: 'Latest technology' }
  ];

  const testimonials = [
    { name: 'আহমেদ হাসান', role: 'CEO, Tech Solutions', text: 'অসাধারণ সেবা! আমার ব্যবসা অনেক এগিয়ে গেছে।', rating: 5 },
    { name: 'ফাতিমা খান', role: 'Designer', text: 'খুবই professional এবং creative টিম।', rating: 5 },
    { name: 'রহিম উদ্দিন', role: 'Entrepreneur', text: 'দামের তুলনায় অনেক ভালো quality পেয়েছি।', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4"></div>
          <div className="absolute w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 -right-4"></div>
          <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-8 left-20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 animate-fade-in">
            <span className="text-sm font-semibold">🚀 আধুনিক সমাধান</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            আপনার <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">স্বপ্নের</span> ওয়েবসাইট
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-slide-up animation-delay-200 max-w-3xl mx-auto">
            Professional web development এবং digital solutions যা আপনার ব্যবসাকে নিয়ে যাবে নতুন উচ্চতায়
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">
              শুরু করুন <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
              আরও জানুন
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white/50" size={32} />
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">আমাদের সেবাসমূহ</h2>
            <p className="text-gray-400 text-lg">যা আমরা অফার করি</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <card.icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {card.desc}
                </p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">কেন আমাদের বেছে নিবেন</h2>
            <p className="text-gray-400 text-lg">আমরা যা অফার করি</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border border-purple-500/30">
                  <feature.icon size={40} className="text-purple-400 group-hover:text-pink-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section id="stats-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.users.toLocaleString()}+
                </div>
                <div className="text-gray-400 text-lg">সন্তুষ্ট গ্রাহক</div>
              </div>
              
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.projects}+
                </div>
                <div className="text-gray-400 text-lg">সফল প্রজেক্ট</div>
              </div>
              
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.satisfaction}%
                </div>
                <div className="text-gray-400 text-lg">সন্তুষ্টির হার</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">গ্রাহকদের মতামত</h2>
            <p className="text-gray-400 text-lg">তারা কী বলছেন</p>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    idx === currentTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={24} />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-center mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="text-center">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? 'bg-purple-500 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                আজই শুরু করুন আপনার যাত্রা
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                আমাদের সাথে যোগ দিন এবং আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়
              </p>
              
              <button className="group px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50 inline-flex items-center gap-2">
                এখনই শুরু করুন <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animation-delay-200 { animation-delay: 0.2s; animation-fill-mode: both; }
        .animation-delay-400 { animation-delay: 0.4s; animation-fill-mode: both; }
      `}</style>
    </div>
  );
}