import { GraduationCap, Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">United Globals</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Education Consultancy</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}