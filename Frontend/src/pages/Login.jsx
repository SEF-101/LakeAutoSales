import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from 'react-helmet';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
      const q = query(collection(db, "logins"), where("username", "==", username), where("password", "==", password));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0].data();
        setPhoneNumber(userDoc.phoneNumber);

        // proceed to recaptcha verification if login correct
        window.recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
          }
        }, auth);

        // confirm code with user and if correct proceed
        const confirmationResult = await signInWithPhoneNumber(auth, userDoc.phoneNumber, window.recaptchaVerifier);
        setConfirmationResult(confirmationResult);
        setIsVerifying(true);
      } else {
        console.log("Invalid username or password");
      }
    } catch (error) {
      console.error("Error checking credentials: ", error);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult.confirm(verificationCode);
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error verifying code: ", error);
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
