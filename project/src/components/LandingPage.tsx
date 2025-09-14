import React from 'react';
import { Shield, Eye, Users, Database, Zap, TrendingUp, ArrowRight, Lock, Fingerprint, Cpu, Server } from 'lucide-react';

interface LandingPageProps {
  onNavigateToLogin: () => void;
}

const KaramProofLanding: React.FC<LandingPageProps> = ({ onNavigateToLogin }) => {
  const features = [
    {
      icon: <Eye className="w-10 h-10 text-blue-400" />,
      title: "AI Forgery Catcher",
      description: "Instantly detect photo swaps, fake seals, or edited marks using advanced AI technology"
    },
    {
      icon: <Shield className="w-10 h-10 text-teal-400" />,
      title: "Blockchain Seal of Trust",
      description: "Each certificate holds a unique digital stamp proving authentic originality"
    },
    {
      icon: <Users className="w-10 h-10 text-purple-400" />,
      title: "Dual Dashboards",
      description: "Separate interfaces for institutions to upload and users to verify certificates"
    },
    {
      icon: <Database className="w-10 h-10 text-cyan-400" />,
      title: "API Integration",
      description: "Seamlessly merge different database formats into one unified system"
    },
    {
      icon: <Zap className="w-10 h-10 text-green-400" />,
      title: "Real-Time Validation",
      description: "Instant verification against predefined criteria for accuracy & legitimacy"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-amber-400" />,
      title: "Analytics & Reports",
      description: "Monthly reports of fake verification attempts and security insights"
    }
  ];

  const newItems = [
    {
      title: "St. Columba's College, Hazaribagh - 2025",
      description: "Marksheets of Class XI",
      status: "Available Now"
    },
    {
      title: "Rajkiya Unchch Vidyalaya , Jamshedpur- 2025",
      description: "Marksheets of Class X and XII",
      status: "Available Now"
    },
    {
      title: "St.Xavier's School, Ranchi - 2025",
      description: "Marksheets of Class X",
      status: "Available Now"
    },
    {
      title: "Central Board of Secondary Education - 2025",
      description: "Marksheets of Class X and XII",
      status: "Available Now"
    }
  ];

  const stats = [
    { number: "2.5M+", label: "Certificates Verified" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "15,247", label: "Frauds Detected" },
    { number: "500+", label: "Institutions Registered" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold">KaramProof</span>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:underline">Sign to main content</a>
              <a href="#" className="hover:underline">A+</a>
              <a href="#" className="hover:underline">A-</a>
              <a href="#" className="hover:underline">English <span className="ml-1">▼</span></a>
            </div>
          </div>
          
          <nav className="flex justify-between items-center py-2">
            <div className="flex space-x-6">
              <a href="#" className="hover:bg-blue-700 px-3 py-1 rounded">Explore KaramProof</a>
              <a href="#" className="hover:bg-blue-700 px-3 py-1 rounded">Become a Partner</a>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={onNavigateToLogin}
                className="border border-white px-4 py-1 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button 
                onClick={onNavigateToLogin}
                className="bg-orange-500 px-4 py-1 rounded hover:bg-orange-600 transition"
              >
                Register
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 py-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Digital India Milestone</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-10">
            NeGD Achieves Pan-India Integration of 2,000 e-Services of Government Departments on <strong>KaramProof</strong> and <strong>e-District Platforms</strong>
          </p>
          <div className="text-center">
            <button 
              onClick={onNavigateToLogin}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* New Items Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">New in KaramProof</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newItems.map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Advanced Security Features</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our platform combines cutting-edge AI technology with blockchain security to deliver unparalleled certificate verification accuracy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border border-blue-100"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">KaramProof by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Trusted by Leading Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Lock className="w-12 h-12 text-blue-500" />, title: "256-bit Encryption" },
              { icon: <Fingerprint className="w-12 h-12 text-teal-500" />, title: "Biometric Auth" },
              { icon: <Cpu className="w-12 h-12 text-purple-500" />, title: "AI-Powered Scan" },
              { icon: <Server className="w-12 h-12 text-amber-500" />, title: "Secure Cloud" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Certificates?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Join thousands of institutions and users who trust KaramProof for authentic certificate verification.
          </p>
          <button 
            onClick={onNavigateToLogin}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition flex items-center justify-center mx-auto"
          >
            Start Verification Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">About KaramProof</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Our Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Document Verification</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Institute Registration</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">API Integration</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Fraud Analytics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">User Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 KaramProof. All rights reserved. | Digital India Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KaramProofLanding;