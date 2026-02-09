"use client";
import React from "react";
import LoginModal from '../../../components/LoginModal';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-900">
      <LoginModal open={true} onClose={() => { window.location.href = "/"; }} />
    </div>
  );
};

export default LoginPage;
