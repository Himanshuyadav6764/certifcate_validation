import React from 'react';
import { ArrowLeft, LogOut, Shield, TrendingUp, AlertTriangle, Users, FileCheck, Calendar, Download, Filter, Cpu, Database, Lock } from 'lucide-react';

interface AnalyticsProps {
  onBack: () => void;
  onLogout: () => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ onBack, onLogout }) => {
  const monthlyStats = [
    { month: 'Jan', verifications: 1240, fraudAttempts: 23, successRate: 98.1 },
    { month: 'Feb', verifications: 1456, fraudAttempts: 31, successRate: 97.8 },
    { month: 'Mar', verifications: 1789, fraudAttempts: 18, successRate: 99.0 },
    { month: 'Apr', verifications: 2134, fraudAttempts: 42, successRate: 98.0 },
    { month: 'May', verifications: 2347, fraudAttempts: 29, successRate: 98.7 },
    { month: 'Jun', verifications: 2891, fraudAttempts: 38, successRate: 98.6 },
  ];

  const recentFraudAttempts = [
    { id: 1, type: 'Photo Manipulation', certificate: 'Bachelor of Science', time: '2 hours ago', severity: 'high' },
    { id: 2, type: 'Fake Seal', certificate: 'MBA Certificate', time: '6 hours ago', severity: 'medium' },
    { id: 3, type: 'Grade Tampering', certificate: 'Engineering Degree', time: '1 day ago', severity: 'high' },
    { id: 4, type: 'Invalid Signature', certificate: 'Business Certificate', time: '2 days ago', severity: 'low' },
    { id: 5, type: 'Duplicate Certificate', certificate: 'Medical Degree', time: '3 days ago', severity: 'high' },
  ];

  const kpiCards = [
    { title: 'Total Verifications', value: '12,847', change: '+23%', icon: <FileCheck className="w-6 h-6 text-blue-600" />, color: 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300' },
    { title: 'Fraud Attempts Blocked', value: '181', change: '-12%', icon: <AlertTriangle className="w-6 h-6 text-red-600" />, color: 'bg-gradient-to-br from-red-100 to-red-200 border-red-300' },
    { title: 'Success Rate', value: '98.4%', change: '+0.3%', icon: <TrendingUp className="w-6 h-6 text-green-600" />, color: 'bg-gradient-to-br from-green-100 to-green-200 border-green-300' },
    { title: 'Active Users', value: '4,291', change: '+18%', icon: <Users className="w-6 h-6 text-purple-600" />, color: 'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      {/* Header */}
      <div className="bg-white border-b border-blue-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-xl shadow-md">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blue-800">Analytics Dashboard</h1>
                  <p className="text-sm text-blue-600">Security & Verification Insights</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Export Report</span>
              </button>
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
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">Security Analytics</h2>
          <p className="text-lg text-blue-700">Monitor fraud attempts and verification patterns</p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((card, index) => (
            <div key={index} className={`${card.color} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white/50 rounded-lg shadow-sm">
                  {card.icon}
                </div>
                <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  card.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {card.change}
                </span>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{card.value}</div>
                <div className="text-sm font-medium text-blue-700">{card.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Verification Trends Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-blue-900">Monthly Verification Trends</h3>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filter</span>
              </button>
            </div>
            <div className="space-y-4">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900">{stat.month} 2025</div>
                      <div className="text-sm text-blue-700">{stat.verifications.toLocaleString()} verifications</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-blue-900">{stat.successRate}%</div>
                    <div className="text-sm text-red-600">{stat.fraudAttempts} fraud attempts</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Alerts */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-blue-900">Recent Fraud Attempts</h3>
              <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
                {recentFraudAttempts.length} Active
              </span>
            </div>
            <div className="space-y-4">
              {recentFraudAttempts.map((attempt) => (
                <div key={attempt.id} className="flex items-start justify-between p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      attempt.severity === 'high' ? 'bg-red-500' :
                      attempt.severity === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-blue-900">{attempt.type}</div>
                      <div className="text-sm text-blue-700">{attempt.certificate}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-blue-600">{attempt.time}</div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      attempt.severity === 'high' ? 'bg-red-100 text-red-700' :
                      attempt.severity === 'medium' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {attempt.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Fraud Detection Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-red-600">67%</div>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Photo Manipulation</h4>
              <p className="text-blue-700 text-sm">Most common fraud type detected by AI analysis</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-orange-600">23%</div>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Fake Signatures</h4>
              <p className="text-blue-700 text-sm">Digital signature verification failures</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-yellow-600">10%</div>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Grade Tampering</h4>
              <p className="text-blue-700 text-sm">Modified academic scores and grades</p>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-200 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">AI-Powered Detection</h3>
            <p className="text-sm text-blue-700">Advanced algorithms analyze certificates for authenticity</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-200 text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Blockchain Verification</h3>
            <p className="text-sm text-blue-700">Immutable digital signatures ensure document integrity</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-200 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Real-Time Monitoring</h3>
            <p className="text-sm text-blue-700">24/7 surveillance of verification activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;