import React from 'react';
import { Shield, Zap, Eye, Database, TrendingUp, Users, ArrowRight, Check } from 'lucide-react';

interface LandingPageProps {
  onNavigateToLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToLogin }) => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "AI Forgery Catcher",
      description: "Instantly detect photo swaps, fake seals, or edited marks using advanced AI technology"
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Blockchain Seal of Trust",
      description: "Each certificate holds a unique digital stamp proving authentic originality"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Dual Dashboards",
      description: "Separate interfaces for institutions to upload and users to verify certificates"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "API Integration",
      description: "Seamlessly merge different database formats into one unified system"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Real-Time Validation",
      description: "Instant verification against predefined criteria for accuracy & legitimacy"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Analytics & Reports",
      description: "Monthly reports of fake verification attempts and security insights"
    }
  ];

  const benefits = [
    "99.9% accuracy in detecting fraudulent documents",
    "Reduce verification time from days to seconds",
    "Blockchain-secured immutable records",
    "Government-grade security standards",
    "24/7 automated verification system"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              SecureVerify
              <span className="block text-3xl md:text-4xl font-normal text-blue-200 mt-2">
                AI-Powered Certificate Authentication
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Combat fake degrees and certificates with our intelligent verification platform. 
              Powered by AI, OCR, and blockchain technology for instant, secure authentication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onNavigateToLogin}
                className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-400/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with blockchain security 
              to deliver unparalleled certificate verification accuracy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose SecureVerify?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 mt-1">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4">Real-Time Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Certificates Verified</span>
                      <span className="text-2xl font-bold">2.5M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fraud Detected</span>
                      <span className="text-2xl font-bold text-red-300">15,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Accuracy Rate</span>
                      <span className="text-2xl font-bold text-green-300">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Certificates?
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Join thousands of institutions and users who trust SecureVerify 
            for authentic certificate verification.
          </p>
          <button 
            onClick={onNavigateToLogin}
            className="group bg-gradient-to-r from-blue-500 to-teal-500 text-white px-12 py-5 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center mx-auto"
          >
            Start Verification Now
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;