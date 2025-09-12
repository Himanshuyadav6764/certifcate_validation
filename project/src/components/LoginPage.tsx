import React, { useState } from 'react';
import { ArrowLeft, Shield, User, Building, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { UserType } from '../App';

interface LoginPageProps {
  onLogin: (type: UserType) => void;
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-white space-y-8 lg:pr-12">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold">SecureVerify</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Secure Access to Certificate Verification
            </h2>
            
            <p className="text-xl text-blue-200 leading-relaxed">
              Join our platform to verify certificates with AI-powered accuracy and blockchain security. 
              Trusted by institutions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2.5M+</div>
              <div className="text-blue-200">Certificates Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-blue-200">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          {/* User Type Toggle */}
          <div className="bg-gray-100 p-1 rounded-xl mb-8">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setLoginType('user')}
                className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  loginType === 'user'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <User className="w-5 h-5 mr-2" />
                User
              </button>
              <button
                onClick={() => setLoginType('institution')}
                className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  loginType === 'institution'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Building className="w-5 h-5 mr-2" />
                Institution
              </button>
            </div>
          </div>

          {/* Login/Signup Toggle */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {isLogin ? 'Sign in to your account' : 'Join SecureVerify today'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Institution Name (only for signup) */}
            {!isLogin && loginType === 'institution' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Institution Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter institution name"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password (only for signup) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {/* Demo Login */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 text-center mb-3">Demo Credentials:</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center">
                <p className="font-medium">User Demo</p>
                <p className="text-gray-500">user@demo.com / demo123</p>
              </div>
              <div className="text-center">
                <p className="font-medium">Institution Demo</p>
                <p className="text-gray-500">admin@uni.edu / admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;