import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Compass, 
  Coffee, 
  Briefcase, 
  TrendingUp, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Smile, 
  ArrowRight,
  Sparkles,
  RefreshCw,
  Sun,
  ShieldCheck,
  Award
} from 'lucide-react';

const ENJOY_LIFE_DATA = [
  {
    title: "Solo Travel Adventures",
    description: "Discover new places at your own pace. No compromises, just pure exploration and self-discovery.",
    icon: Compass,
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    title: "Self-Care Dates",
    description: "Treat yourself to a nice dinner, a spa day, or a movie. You deserve the best company—yourself.",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-100"
  },
  {
    title: "Explore Hobbies",
    description: "Dive deep into painting, coding, music, or cooking. Turn your free time into creative fulfillment.",
    icon: Coffee,
    color: "text-amber-600",
    bg: "bg-amber-100"
  }
];

const FUTURE_STEPS_DATA = [
  {
    title: "Career Growth",
    description: "Focus on upskilling. Take courses, attend networking events, and aim for that promotion or dream job.",
    icon: Briefcase,
    color: "text-indigo-500",
    bg: "bg-indigo-100"
  },
  {
    title: "Financial Independence",
    description: "Build an emergency fund, start investing, and create multiple streams of income for a secure future.",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-100"
  },
  {
    title: "Personal Development",
    description: "Read books, listen to podcasts, and cultivate a growth mindset. Become the best version of yourself.",
    icon: BookOpen,
    color: "text-purple-500",
    bg: "bg-purple-100"
  }
];

const SOCIAL_SKILLS_DATA = [
  {
    title: "Overcoming Shyness",
    description: "Start small. Practice maintaining eye contact and giving compliments to build your social muscle.",
    icon: ShieldCheck,
    color: "text-teal-500",
    bg: "bg-teal-100"
  },
  {
    title: "Making New Friends",
    description: "Join local clubs, fitness classes, or online communities centered around your interests.",
    icon: Users,
    color: "text-orange-500",
    bg: "bg-orange-100"
  },
  {
    title: "Improving Communication",
    description: "Practice active listening. Show genuine interest in others' stories to create meaningful connections.",
    icon: MessageCircle,
    color: "text-cyan-500",
    bg: "bg-cyan-100"
  },
  {
    title: "Building Confidence",
    description: "Celebrate your small wins. Dress well, stand tall, and reframe negative thoughts into positive affirmations.",
    icon: Award,
    color: "text-yellow-500",
    bg: "bg-yellow-100"
  }
];

const CHALLENGES = [
  "Take yourself out for a coffee and read a chapter of a book.",
  "Give a genuine compliment to a stranger today.",
  "Try a completely new workout routine or yoga class.",
  "Cook a fancy, three-course meal just for yourself.",
  "Sign up for a local workshop or class (pottery, coding, etc.).",
  "Go for a 30-minute walk without your phone.",
  "Write down 5 things you love about your current life.",
  "Start a conversation with a barista or cashier.",
  "Buy a ticket to a movie and go watch it alone.",
  "Declutter one room or closet in your home today."
];

const App = () => {

  const [currentChallenge, setCurrentChallenge] = useState(CHALLENGES[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateChallenge = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * CHALLENGES.length);
      setCurrentChallenge(CHALLENGES[randomIndex]);
      setIsSpinning(false);
    }, 500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Sun className={`w-8 h-8 ${scrolled ? 'text-rose-500' : 'text-white'}`} />
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Solo<span className={scrolled ? 'text-rose-500' : 'text-rose-200'}>Thrive</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            {['Enjoy Life', 'Future Steps', 'Social Skills'].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-medium text-sm hover:text-rose-400 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection('daily-challenge')}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95 ${scrolled ? 'bg-slate-900 text-white' : 'bg-white text-rose-500 shadow-lg'}`}
          >
            Get Daily Challenge
          </button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-600 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Your journey starts here</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
            Embrace Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-amber-400">Solo Journey</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
            Being single isn't a waiting room for your next relationship; it's a launchpad for your personal growth. Discover how to thrive, build unshakeable confidence, and fall in love with your own life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('enjoy-life')}
              className="px-8 py-4 bg-white text-rose-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Start Thriving <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('daily-challenge')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Take a Challenge
            </button>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12.5 md:h-25" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,123,194,115.15,238.22,109.84,281.33,83.9,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      <section id="enjoy-life" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Master the Art of <span className="text-rose-500">Enjoying Life</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Your happiness is in your own hands. Learn to savor every moment and create beautiful memories just for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENJOY_LIFE_DATA.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="future-steps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Design Your <span className="text-indigo-600">Dream Future</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                When you're single, you have the ultimate freedom to direct your energy exactly where you want it. Build an empire, start a business, or travel the world. The canvas is blank, and you hold the brush.
              </p>
              <div className="space-y-6">
                {FUTURE_STEPS_DATA.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className={`shrink-0 w-12 h-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-200 to-rose-200 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10">Your Growth Checklist</h3>
                <ul className="space-y-4 relative z-10 font-medium text-slate-200">
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">✓</span> Update Resume & Portfolio</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">✓</span> Read 1 book per month</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">✓</span> Set up automated savings</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">✓</span> Learn one new high-income skill</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-sm">○</span> Plan a solo retreat (Upcoming)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="social-skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Build Real <span className="text-teal-500">Connections & Confidence</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">You don't need a partner to have a vibrant social life. Overcome shyness, build charisma, and attract great friends into your circle.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SOCIAL_SKILLS_DATA.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 flex gap-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className={`shrink-0 w-16 h-16 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="daily-challenge" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-linear-to-t from-rose-900/40 to-transparent"></div>
        
        {/* Animated particles background simulation */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-500 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500 rounded-full blur-[100px] opacity-50"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smile className="w-16 h-16 text-rose-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Daily Solo Challenge</h2>
          <p className="text-slate-300 text-lg mb-10">Step out of your comfort zone. Click the button below to generate a random, fun, and actionable task just for you today.</p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-8 transform transition-all hover:scale-[1.02]">
            <div className={`min-h-25 flex items-center justify-center transition-opacity duration-300 ${isSpinning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                "{currentChallenge}"
              </h3>
            </div>
          </div>
          
          <button 
            onClick={generateChallenge}
            disabled={isSpinning}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-rose-500 to-indigo-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-rose-500/25 transition-all active:scale-95 disabled:opacity-70"
          >
            <RefreshCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            <span>{isSpinning ? 'Generating...' : 'Give me another challenge'}</span>
          </button>
        </div>
      </section>

      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sun className="w-6 h-6 text-rose-500" />
            <span className="text-xl font-bold tracking-tight text-white">
              Solo<span className="text-rose-500">Thrive</span>
            </span>
          </div>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Dedicated to helping individuals discover the power, peace, and joy of their solo journey. 
          </p>
          <div className="flex justify-center gap-4 text-slate-500">
            <span className="hover:text-rose-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-rose-400 cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-rose-400 cursor-pointer transition-colors">Contact</span>
          </div>
          <p className="text-slate-600 mt-8 text-sm">
            © {new Date().getFullYear()} SoloThrive. All rights reserved. Keep glowing.
          </p>
        </div>
      </footer>

      {/* Global styles for animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 15s ease infinite;
        }
      `}} />
    </div>

    </>
  )
}

export default App