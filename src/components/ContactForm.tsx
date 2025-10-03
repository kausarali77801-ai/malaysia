import { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  lastExam: string;
  examYear: string;
  district: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    lastExam: '',
    examYear: '',
    district: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="consultation-form" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ধন্যবাদ!
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              আপনার তথ্য সফলভাবে জমা হয়েছে। আমাদের একজন এক্সপার্ট শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
            </p>
            <p className="text-lg text-emerald-600 font-semibold">
              প্রত্যাশিত যোগাযোগের সময়: ২৪ ঘন্টার মধ্যে
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation-form" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>ফ্রি কনসালটেশন</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            এখনই ফর্মটি পূরণ করে জমা দিন
          </h2>
          <p className="text-xl text-gray-600">
            আমাদের এক্সপার্ট টিম আপনাকে সম্পূর্ণ গাইডেন্স প্রদান করবে
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                নাম *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ইমেইল *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ফোন *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                সর্বশেষ পরীক্ষা *
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="lastExam"
                  value={formData.lastExam}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="SSC">SSC</option>
                  <option value="HSC">HSC</option>
                  <option value="Honours">Honours</option>
                  <option value="Masters">Masters</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                সর্বশেষ পরীক্ষার সাল *
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="examYear"
                  value={formData.examYear}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="যেমন: 2023"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                জেলা *
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder="আপনার জেলার নাম"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>জমা দেওয়া হচ্ছে...</span>
                </div>
              ) : (
                <>
                  <span>ফ্রি কনসালটেশনের জন্য জমা দিন</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}