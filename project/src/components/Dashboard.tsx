import React, { useState, useEffect } from 'react';
import { Upload, Search, BarChart3, Shield, FileCheck, AlertTriangle, TrendingUp, LogOut, Database, MessageCircle, Clock, Bell, Eye, CheckCircle } from 'lucide-react';

interface DashboardProps {
  userType: 'user' | 'institution';
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userType, onNavigate, onLogout }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const userStats = [
    { label: 'Certificates Verified', value: '127', icon: <FileCheck className="w-7 h-7 text-white" />, color: 'bg-gradient-to-br from-green-500 to-teal-600' },
    { label: 'Pending Verifications', value: '3', icon: <Search className="w-7 h-7 text-white" />, color: 'bg-gradient-to-br from-orange-500 to-amber-600' },
    { label: 'Success Rate', value: '98.4%', icon: <TrendingUp className="w-7 h-7 text-white" />, color: 'bg-gradient-to-br from-blue-500 to-cyan-600' },
  ];

  const institutionStats = [
    { label: 'Certificates Issued', value: '2,847', icon: <FileCheck className="w-7 h-7 text-white" />, color: 'bg-gradient-to-br from-green-500 to-teal-600' },
    { label: 'Active Verifications', value: '156', icon: <Eye className="w-7 h-7 text-white" />, color: 'bg-gradient-to-br from-blue-500 to-cyan-600' },
    { label: 'Fraud Attempts Blocked', value: '23', icon: <AlertTriangle className="w-7 h-7 text-white" />, color: 'bg-gradient-to-br from-red-500 to-rose-600' },
    { label: 'Monthly Verifications', value: '4,291', icon: <TrendingUp className="w-7 h-7 text-white" />, color: 'bg-gradient-to-br from-purple-500 to-indigo-600' },
  ];

  const stats = userType === 'user' ? userStats : institutionStats;

  const quickActions = userType === 'user' ? [
    { 
      title: 'Verify Certificate', 
      description: 'Instantly check certificate authenticity', 
      icon: <FileCheck className="w-8 h-8 text-white" />, 
      action: () => onNavigate('upload'), 
      bg: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    { 
      title: 'Feedback', 
      description: 'Your Feedback matters', 
      icon: <MessageCircle className="w-8 h-8 text-white" />, 
      action: () => {}, 
      bg: 'bg-gradient-to-br from-teal-600 to-emerald-700'
    },
    { 
      title: 'View History', 
      description: 'See your verification history', 
      icon: <Clock className="w-8 h-8 text-white" />, 
      action: () => {}, 
      bg: 'bg-gradient-to-br from-purple-600 to-pink-700'
    },
  ] : [
    { 
      title: 'Upload Database', 
      description: 'Upload your respective database', 
      icon: <Database className="w-8 h-8 text-white" />, 
      action: () => onNavigate('upload'), 
      bg: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    { 
      title: 'View Analytics', 
      description: 'Monitor verification statistics', 
      icon: <BarChart3 className="w-8 h-8 text-white" />, 
      action: () => onNavigate('analytics'), 
      bg: 'bg-gradient-to-br from-teal-600 to-emerald-700'
    },
    { 
      title: 'Issue Certificate', 
      description: 'Generate certificate for your Institution', 
      icon: <FileCheck className="w-8 h-8 text-white" />, 
      action: () => {}, 
      bg: 'bg-gradient-to-br from-amber-600 to-orange-700'
    },
  ];

  const recentActivity = userType === 'user' ? [
    { action: 'Certificate Verified', detail: 'Bachelor of Science - Rungta', time: '2 hours ago', status: 'success' },
    { action: 'Verification Failed', detail: 'B-Tech Certificate - Invalid Signature', time: '1 day ago', status: 'error' },
    { action: 'Certificate Uploaded', detail: 'BCA Certificate - Pending Verification', time: '3 days ago', status: 'pending' },
  ] : [
    { action: 'Certificate Issued', detail: 'Computer Science Degree - John Doe', time: '1 hour ago', status: 'success' },
    { action: 'Fraud Attempt Blocked', detail: 'Tampered Business Certificate', time: '4 hours ago', status: 'blocked' },
    { action: 'Bulk Upload Completed', detail: '45 certificates processed', time: '1 day ago', status: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b border-blue-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-xl shadow-md">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-800">karamProof</h1>
                <p className="text-sm text-blue-600 font-medium">
                  {userType === 'user' ? 'User Dashboard' : 'Institution Dashboard'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {userType === 'user' ? 'U' : 'I'}
                </div>
                <span className="text-sm font-semibold text-blue-800">
                  {userType === 'user' ? 'Himanshu Yadav' : 'Rungta University'}
                </span>
                <Bell className="w-5 h-5 text-blue-600 ml-2 cursor-pointer" />
              </div>
              <button 
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">
            Welcome back, <span className="text-blue-600">{userType === 'user' ? 'Himanshu' : 'Rungta University'}</span>!
          </h2>
          <p className="text-lg text-blue-700">
            {userType === 'user' 
              ? 'Manage and verify your certificates with AI-powered security.'
              : 'Monitor your certificate issuance and verification analytics.'
            }
          </p>
          <div className="mt-2 text-blue-600">
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid ${userType === 'user' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6 mb-8`}>
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white/20 rounded-xl">
                  {stat.icon}
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-blue-100">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Quick Actions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className={`group p-6 ${action.bg} rounded-2xl shadow-lg hover:shadow-xl border border-blue-200 transition-all duration-300 transform hover:-translate-y-1 text-left`}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-wide">{action.title}</h4>
                  <p className="text-blue-100 text-sm font-medium">{action.description}</p>
                </button>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'error' ? 'bg-red-500' :
                        activity.status === 'blocked' ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`}></div>
                      <div>
                        <div className="font-semibold text-blue-900">{activity.action}</div>
                        <div className="text-sm text-blue-700">{activity.detail}</div>
                      </div>
                    </div>
                    <div className="text-sm text-blue-600">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="space-y-6">
            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Security Status</h3>
                  <p className="text-sm text-green-600">All Systems Secure</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-blue-700">AI Detection</span>
                  <span className="text-sm font-medium text-green-600 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> Active
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-blue-700">Blockchain Seal</span>
                  <span className="text-sm font-medium text-green-600 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> Verified
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-blue-700">API Status</span>
                  <span className="text-sm font-medium text-green-600 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> Online
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">System Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-blue-700">Server Load</span>
                    <span className="text-sm font-medium text-green-600">23%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{width: '23%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-blue-700">Processing Speed</span>
                    <span className="text-sm font-medium text-blue-600">0.3s avg</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-blue-700">Threat Detection</span>
                    <span className="text-sm font-medium text-purple-600">99.8%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '99.8%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button (FAB) */}
        <button
          onClick={() => onNavigate('upload')}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 border-4 border-white"
          title="Quick Upload"
        >
          <Upload className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;