import React, { useState } from 'react';
import { ArrowLeft, Shield, User, Building, Eye, EyeOff, Mail, Lock, Database, Server, Zap } from 'lucide-react';

interface LoginPageProps {
  onLogin: (type: 'user' | 'institution') => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const [loginType, setLoginType] = useState<'user' | 'institution'>('user');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    institutionName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginType);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-blue-900 space-y-8 lg:pr-12">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-100">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-blue-800">karamProof</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-900">
              Secure Access to Certificate Verification
            </h2>
            
            <p className="text-xl text-blue-700 leading-relaxed">
              Join our platform to verify certificates with AI-powered accuracy and blockchain security. 
              Trusted by institutions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="text-center p-4 bg-white rounded-2xl shadow-md border border-blue-100">
              <div className="text-3xl font-bold text-blue-800">2.5M+</div>
              <div className="text-blue-600">Certificates Verified</div>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-md border border-blue-100">
              <div className="text-3xl font-bold text-blue-800">99.9%</div>
              <div className="text-blue-600">Accuracy Rate</div>
            </div>
          </div>

          {/* Security Features */}
          <div className="pt-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Enterprise-Grade Security</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Lock className="w-5 h-5 text-green-600" />, text: "256-bit Encryption" },
                { icon: <Database className="w-5 h-5 text-blue-600" />, text: "Blockchain" },
                { icon: <Zap className="w-5 h-5 text-amber-600" />, text: "AI Verification" },
                { icon: <Server className="w-5 h-5 text-purple-600" />, text: "Secure Cloud" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  {item.icon}
                  <span className="text-sm text-blue-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          {/* User Type Toggle */}
          <div className="bg-blue-50 p-1 rounded-xl mb-8">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setLoginType('user')}
                className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  loginType === 'user'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                <User className="w-5 h-5 mr-2" />
                User
              </button>
              <button
                onClick={() => setLoginType('institution')}
                className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  loginType === 'institution'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                <Building className="w-5 h-5 mr-2" />
                Institution
              </button>
            </div>
          </div>

          {/* Login/Signup Toggle */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-blue-700">
              {isLogin ? 'Sign in to your account' : 'Join karamProof today'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Institution Name (only for signup) */}
            {!isLogin && loginType === 'institution' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-700">
                  Institution Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-blue-900 placeholder-blue-400"
                    placeholder="Enter institution name"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-blue-900 placeholder-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-12 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-blue-900 placeholder-blue-400"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password (only for signup) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-blue-900 placeholder-blue-400"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="text-center mt-6">
            <p className="text-blue-700">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {/* Demo Login */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-700 text-center mb-3">Demo Credentials:</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center p-2 bg-white rounded-lg border border-blue-200">
                <p className="font-medium text-blue-600">User Demo</p>
                <p className="text-blue-700">user@demo.com / demo123</p>
              </div>
              <div className="text-center p-2 bg-white rounded-lg border border-blue-200">
                <p className="font-medium text-blue-600">Institution Demo</p>
                <p className="text-blue-700">admin@uni.edu / admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;