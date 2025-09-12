import React from 'react';
import { Upload, Search, BarChart3, Shield, FileCheck, Users, AlertTriangle, TrendingUp, LogOut, User, Building } from 'lucide-react';
import { UserType, Page } from '../App';

interface DashboardProps {
  userType: UserType;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userType, onNavigate, onLogout }) => {
  const userStats = [
    { label: 'Certificates Verified', value: '127', icon: <FileCheck className="w-6 h-6 text-green-600" />, color: 'bg-green-50 border-green-200' },
    { label: 'Pending Verifications', value: '3', icon: <Search className="w-6 h-6 text-orange-600" />, color: 'bg-orange-50 border-orange-200' },
    { label: 'Success Rate', value: '98.4%', icon: <TrendingUp className="w-6 h-6 text-blue-600" />, color: 'bg-blue-50 border-blue-200' },
  ];

  const institutionStats = [
    { label: 'Certificates Issued', value: '2,847', icon: <FileCheck className="w-6 h-6 text-green-600" />, color: 'bg-green-50 border-green-200' },
    { label: 'Active Verifications', value: '156', icon: <Search className="w-6 h-6 text-blue-600" />, color: 'bg-blue-50 border-blue-200' },
    { label: 'Fraud Attempts Blocked', value: '23', icon: <AlertTriangle className="w-6 h-6 text-red-600" />, color: 'bg-red-50 border-red-200' },
    { label: 'Monthly Verifications', value: '4,291', icon: <TrendingUp className="w-6 h-6 text-purple-600" />, color: 'bg-purple-50 border-purple-200' },
  ];

  const stats = userType === 'user' ? userStats : institutionStats;

  const quickActions = userType === 'user' ? [
    { title: 'Verify Certificate', description: 'Upload and verify a new certificate', icon: <Upload className="w-8 h-8 text-blue-600" />, action: () => onNavigate('upload'), color: 'from-blue-500 to-blue-600' },
    { title: 'Search Database', description: 'Search for verified certificates', icon: <Search className="w-8 h-8 text-teal-600" />, action: () => {}, color: 'from-teal-500 to-teal-600' },
    { title: 'View History', description: 'Check your verification history', icon: <FileCheck className="w-8 h-8 text-purple-600" />, action: () => {}, color: 'from-purple-500 to-purple-600' },
  ] : [
    { title: 'Issue Certificate', description: 'Create and issue new certificates', icon: <FileCheck className="w-8 h-8 text-green-600" />, action: () => onNavigate('upload'), color: 'from-green-500 to-green-600' },
    { title: 'View Analytics', description: 'Monitor verification statistics', icon: <BarChart3 className="w-8 h-8 text-blue-600" />, action: () => onNavigate('analytics'), color: 'from-blue-500 to-blue-600' },
    { title: 'Manage Users', description: 'Administer user permissions', icon: <Users className="w-8 h-8 text-orange-600" />, action: () => {}, color: 'from-orange-500 to-orange-600' },
  ];

  const recentActivity = userType === 'user' ? [
    { action: 'Certificate Verified', detail: 'Bachelor of Science - Rungta', time: '2 hours ago', status: 'success' },
    { action: 'Verification Failed', detail: 'MBA Certificate - Invalid Signature', time: '1 day ago', status: 'error' },
    { action: 'Certificate Uploaded', detail: 'High School Diploma', time: '3 days ago', status: 'pending' },
  ] : [
    { action: 'Certificate Issued', detail: 'Computer Science Degree - John Doe', time: '1 hour ago', status: 'success' },
    { action: 'Fraud Attempt Blocked', detail: 'Tampered Business Certificate', time: '4 hours ago', status: 'blocked' },
    { action: 'Bulk Upload Completed', detail: '45 certificates processed', time: '1 day ago', status: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SecureVerify</h1>
                <p className="text-sm text-gray-500">
                  {userType === 'user' ? 'User Dashboard' : 'Institution Dashboard'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                {userType === 'user' ? <User className="w-4 h-4 text-gray-600" /> : <Building className="w-4 h-4 text-gray-600" />}
                <span className="text-sm font-medium text-gray-700">
                  {userType === 'user' ? 'Himanshu Yadav' : 'Rungta University'}
                </span>
              </div>
              <button 
                onClick={onLogout}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userType === 'user' ? 'Himanshu' : 'Rungta University'}!
          </h2>
          <p className="text-lg text-gray-600">
            {userType === 'user' 
              ? 'Manage and verify your certificates with AI-powered security.'
              : 'Monitor your certificate issuance and verification analytics.'
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid ${userType === 'user' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6 mb-8`}>
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {stat.icon}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 text-left"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {action.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h4>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </button>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'error' ? 'bg-red-500' :
                        activity.status === 'blocked' ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`}></div>
                      <div>
                        <div className="font-semibold text-gray-900">{activity.action}</div>
                        <div className="text-sm text-gray-600">{activity.detail}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Security Status</h3>
                  <p className="text-sm text-green-600">All Systems Secure</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AI Detection</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Blockchain Seal</span>
                  <span className="text-sm font-medium text-green-600">Verified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">API Status</span>
                  <span className="text-sm font-medium text-green-600">Online</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Server Load</span>
                    <span className="text-sm font-medium text-gray-900">23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '23%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Processing Speed</span>
                    <span className="text-sm font-medium text-gray-900">0.3s avg</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;