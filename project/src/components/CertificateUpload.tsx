import React, { useState, useRef } from 'react';
import { Upload, FileText, Check, X, AlertTriangle, ArrowLeft, LogOut, Shield, Eye, Zap, Database } from 'lucide-react';
import { UserType } from '../App';

interface CertificateUploadProps {
  userType: UserType;
  onBack: () => void;
  onLogout: () => void;
}

const CertificateUpload: React.FC<CertificateUploadProps> = ({ userType, onBack, onLogout }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [verificationResults, setVerificationResults] = useState<any>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleVerification = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResults = {
        isValid: Math.random() > 0.3,
        confidence: Math.floor(Math.random() * 20) + 80,
        checks: {
          aiDetection: Math.random() > 0.2,
          blockchainSeal: Math.random() > 0.1,
          signatureVerification: Math.random() > 0.15,
          tamperDetection: Math.random() > 0.25,
        },
        metadata: {
          issuer: 'Rungta University',
          recipient: 'Himanshu Yadav',
          degree: 'Bachelor of Computer Science',
          issueDate: '2024-05-15',
          uniqueId: 'RUNGTA-CS-2024-001847'
        }
      };
      
      setVerificationResults(mockResults);
      setIsProcessing(false);
    }, 3000);
  };

  const resetForm = () => {
    setFile(null);
    setVerificationResults(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-xl">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {userType === 'user' ? 'Certificate Verification' : 'Issue Certificate'}
                  </h1>
                  <p className="text-sm text-gray-500">AI-Powered Security Analysis</p>
                </div>
              </div>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!verificationResults ? (
          <div className="space-y-8">
            {/* Upload Section */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {userType === 'user' ? 'Upload Certificate for Verification' : 'Upload Certificate to Issue'}
                </h2>
                <p className="text-lg text-gray-600">
                  Our AI will analyze your certificate for authenticity using advanced detection algorithms
                </p>
              </div>

              {/* File Upload Area */}
              <div 
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-50' 
                    : file 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      Remove File
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        Drop your certificate here
                      </p>
                      <p className="text-gray-600 mb-4">
                        or click to browse files
                      </p>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
                      >
                        Choose File
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Supports PDF, JPG, PNG files up to 10MB
                    </p>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
              />

              {/* Verify Button */}
              {file && !isProcessing && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleVerification}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start {userType === 'user' ? 'Verification' : 'Certificate Issuance'}
                  </button>
                </div>
              )}
            </div>

            {/* Processing Animation */}
            {isProcessing && (
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                      <div className="absolute inset-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      AI Analysis in Progress
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3 text-blue-600">
                        <Eye className="w-5 h-5" />
                        <span className="font-medium">Scanning for tampering...</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-teal-600">
                        <Zap className="w-5 h-5" />
                        <span className="font-medium">Verifying signatures...</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-purple-600">
                        <Database className="w-5 h-5" />
                        <span className="font-medium">Checking blockchain records...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Detection</h3>
                <p className="text-sm text-gray-600">Advanced algorithms detect photo manipulation and forgeries</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain Seal</h3>
                <p className="text-sm text-gray-600">Immutable digital signatures ensure authenticity</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Database Verification</h3>
                <p className="text-sm text-gray-600">Cross-reference with institutional records</p>
              </div>
            </div>
          </div>
        ) : (
          // Results Section
          <div className="space-y-8">
            <div className={`bg-white rounded-3xl p-8 shadow-lg border ${
              verificationResults.isValid ? 'border-green-200' : 'border-red-200'
            }`}>
              <div className="text-center mb-8">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  verificationResults.isValid ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {verificationResults.isValid ? (
                    <Check className="w-10 h-10 text-green-600" />
                  ) : (
                    <X className="w-10 h-10 text-red-600" />
                  )}
                </div>
                <h2 className={`text-3xl font-bold mb-4 ${
                  verificationResults.isValid ? 'text-green-900' : 'text-red-900'
                }`}>
                  {verificationResults.isValid ? 'Certificate Verified' : 'Verification Failed'}
                </h2>
                <p className={`text-lg ${
                  verificationResults.isValid ? 'text-green-700' : 'text-red-700'
                }`}>
                  Confidence Level: {verificationResults.confidence}%
                </p>
              </div>

              {/* Verification Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Checks</h3>
                  <div className="space-y-3">
                    {Object.entries(verificationResults.checks).map(([check, passed]) => (
                      <div key={check} className="flex items-center justify-between">
                        <span className="text-gray-700 capitalize">
                          {check.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <div className="flex items-center space-x-2">
                          {passed ? (
                            <>
                              <Check className="w-5 h-5 text-green-600" />
                              <span className="text-green-600 font-medium">Passed</span>
                            </>
                          ) : (
                            <>
                              <X className="w-5 h-5 text-red-600" />
                              <span className="text-red-600 font-medium">Failed</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certificate Details</h3>
                  <div className="space-y-3">
                    {Object.entries(verificationResults.metadata).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-gray-600 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <div className="font-medium text-gray-900">{value as string}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={resetForm}
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
                >
                  Verify Another
                </button>
                {verificationResults.isValid && (
                  <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                    Download Report
                  </button>
                )}
              </div>
            </div>

            {!verificationResults.isValid && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Potential Issues Detected</h3>
                    <ul className="text-red-700 space-y-1">
                      <li>• Signature verification failed</li>
                      <li>• Photo appears to be manipulated</li>
                      <li>• Certificate not found in institutional database</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateUpload;