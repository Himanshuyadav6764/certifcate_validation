import React, { useState } from 'react';
import { Upload, FileCheck, ArrowLeft, LogOut, CheckCircle, Shield, Plus, Search, Download, Filter, Calendar, User, Building } from 'lucide-react';

interface CertificateUploadProps {
  userType: 'user' | 'institution';
  onBack: () => void;
  onLogout: () => void;
}

const CertificateUpload: React.FC<CertificateUploadProps> = ({ userType, onBack, onLogout }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleVerify = async () => {
    if (!uploadedFile) return;
    
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setVerificationResult({
        isValid: true,
        studentName: "John Doe",
        rollNumber: "2024001",
        board: "Central Board of Secondary Education",
        year: "2024",
        percentage: "85.6%"
      });
      setIsVerifying(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-purple-600" />
              </button>
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-purple-600" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  karamProof
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100">
                {userType === 'user' ? <User className="w-4 h-4 text-green-600" /> : <Building className="w-4 h-4 text-green-600" />}
                <span className="text-sm font-medium text-green-700 capitalize">{userType}</span>
              </div>
              <button
                onClick={onLogout}
                className="p-2 rounded-lg bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 transition-all duration-300"
              >
                <LogOut className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Upload Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-purple-100 p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Certificate Verification
            </h2>
            <p className="text-gray-600">Upload your certificate to verify its authenticity</p>
          </div>

          <div
            className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
              dragActive 
                ? 'border-purple-400 bg-purple-50' 
                : 'border-purple-200 hover:border-purple-300 bg-gradient-to-br from-purple-25 to-pink-25'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-purple-600" />
              </div>
              
              {uploadedFile ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <FileCheck className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-700">{uploadedFile.name}</span>
                  </div>
                  <p className="text-sm text-gray-500">File size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-700">
                    Drag and drop your certificate here
                  </p>
                  <p className="text-gray-500">or click to browse files</p>
                  <p className="text-sm text-gray-400">Supports PDF, JPG, PNG (Max 10MB)</p>
                </div>
              )}
            </div>
          </div>

          {uploadedFile && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleVerify}
                disabled={isVerifying}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isVerifying
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {isVerifying ? (
                  <span className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Verify Certificate</span>
                  </span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Verification Result */}
        {verificationResult && (
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-green-200 p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-700">Certificate Verified</h3>
                <p className="text-green-600">This certificate is authentic and valid</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-1">Student Name</h4>
                  <p className="text-lg font-semibold text-blue-700">{verificationResult.studentName}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-1">Roll Number</h4>
                  <p className="text-lg font-semibold text-purple-700">{verificationResult.rollNumber}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-1">Board</h4>
                  <p className="text-lg font-semibold text-amber-700">{verificationResult.board}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-1">Percentage</h4>
                  <p className="text-lg font-semibold text-emerald-700">{verificationResult.percentage}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 text-blue-700 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 text-green-700 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Verify Another</span>
              </button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur-lg rounded-xl border border-purple-100 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Search</h3>
            <p className="text-sm text-gray-600">Search certificates by roll number or name</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-xl border border-purple-100 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Batch Verify</h3>
            <p className="text-sm text-gray-600">Upload multiple certificates at once</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-xl border border-purple-100 p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
              <Filter className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Filter Results</h3>
            <p className="text-sm text-gray-600">Sort and filter verification history</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateUpload;