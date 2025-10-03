import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg%3E%3Cg" fill="none" fill-rule="evenodd%3E%3Cg" fill="%233B82F6"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-600 font-medium text-lg">স্বপ্ন পূরণের সময় এসেছে</span>
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              উচ্চ শিক্ষায় মালয়েশিয়ায়
            </span>
            <br />
            <span className="text-gray-800">গিয়ে স্বপ্ন পূরণ করুন</span>
            <br />
            <span className="text-2xl md:text-4xl text-emerald-600 font-semibold">
              United Globals এর সাথে
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium">
            স্বল্প খরচে মালয়েশিয়ায় শুরু করুন, তারপর USA/UK/Europe-এ সম্পূর্ণ করুন
          </p>
          
          <button 
            onClick={scrollToForm}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>ফ্রি কনসালটেশন নিন</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}