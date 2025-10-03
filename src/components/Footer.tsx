import { Globe, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">United Globals</h3>
                <p className="text-sm text-gray-400">Education Consultancy</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              আমরা আপনার স্বপ্নের উচ্চ শিক্ষার পথে সঠিক দিকনির্দেশনা প্রদান করি। 
              বিশ্বমানের শিক্ষা প্রতিষ্ঠানে ভর্তির জন্য আমাদের সাথে যোগ দিন।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">যোগাযোগ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <p className="font-medium">ফোন</p>
                  <p className="text-gray-400">+880 1961-969942</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <p className="font-medium">ইমেইল</p>
                  <p className="text-gray-400">info@unitedglobals.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <p className="font-medium">ঠিকানা</p>
                  <p className="text-gray-400">ঢাকা, বাংলাদেশ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">আমাদের সেবাসমূহ</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>ভিসা প্রসেসিং</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>ইউনিভার্সিটি অ্যাডমিশন</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>স্কলারশিপ সহায়তা</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>ক্রেডিট ট্রান্সফার</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>ক্যারিয়ার কাউন্সেলিং</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 United Globals. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}