import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from 'react-helmet';

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch all users
      const response = await fetch("http://localhost:5000/api/users/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error fetching users: ${errorText}`);
      }
  
      const users = await response.json();
  
      if (users.length > 0) {
        // Check for matching username and password
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
  
        if (user) {
          setEmail(user.email);

          // If user is found, send OTP request to the backend
          const otpResponse = await fetch("http://localhost:5000/api/send-otp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
          });
  
          if (!otpResponse.ok) {
            const errorText = await otpResponse.text();
            throw new Error(`Error sending OTP: ${errorText}`);
          }
  
          const otpData = await otpResponse.json();
  
          setIsVerifying(true); // Show OTP input field
        } else {
          alert("Invalid username or password");
        }
      } else {
        alert("No users found or server error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, otp: verificationCode }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        navigate("/admin-dashboard");
      } else {
        alert(data.error || "Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="bg-neutral-900 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Lakes Auto Sales | Login</title>
      </Helmet>
      <div className="w-full max-w-md bg-neutral-700 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-6 space-y-4">
        <div className="text-center">
          <img className="w-12 h-12 mx-auto mb-4" src="/lakesAutoSales.svg" alt="logo" />
          <h1 className="text-2xl font-bold text-white dark:text-white">Sign in to your account</h1>
        </div>
        {!isVerifying ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-white dark:text-white">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                value={username} 
                onChange={handleUsernameChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required 
              />
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <div id="recaptcha-container"></div>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleVerifyCode}>
            <div>
              <label htmlFor="verificationCode" className="block mb-2 text-sm font-medium text-white dark:text-white">Verification Code</label>
              <input 
                type="text" 
                name="verificationCode" 
                id="verificationCode" 
                value={verificationCode} 
                onChange={handleVerificationCodeChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required 
              />
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verify Code</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Login;
