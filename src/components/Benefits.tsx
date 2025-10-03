import { DollarSign, CreditCard, Shield, Star } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: "স্বল্প খরচে ১ বছর মালয়েশিয়ায় পড়াশোনার সুযোগ",
    description: "কম খরচে উন্নত মানের শিক্ষা পান এবং আন্তর্জাতিক অভিজ্ঞতা অর্জন করুন",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: CreditCard,
    title: "এক বছর পর ক্রেডিট ট্রান্সফারের মাধ্যমে USA/UK/Europe-এর যেকোনো দেশে পড়াশোনার সুযোগ",
    description: "বাকি ৩ বছর বিশ্বমানের বিশ্ববিদ্যালয়ে সম্পূর্ণ করুন",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Shield,
    title: "IELTS ছাড়া ১০০% ভিসা রেশিও",
    description: "IELTS স্কোর ছাড়াই নিশ্চিত ভিসা প্রাপ্তির গ্যারান্টি",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Star,
    title: "United Globals-এর মাধ্যমে কোনো সার্ভিস চার্জ ছাড়া সম্পূর্ণ প্রসেসিং",
    description: "বিনামূল্যে সম্পূর্ণ প্রসেসিং এবং সহায়তা পান",
    color: "from-orange-500 to-red-600"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            কেন মালয়েশিয়া থেকে শুরু করবেন?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            United Globals এর সাথে আপনার স্বপ্নের ক্যারিয়ার গড়ার জন্য অসাধারণ সুবিধাসমূহ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-emerald-600">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="h-1 flex-1 bg-gradient-to-r from-emerald-200 to-transparent rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}