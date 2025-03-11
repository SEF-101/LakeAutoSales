import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { Button, TextInput, Label, Card } from "flowbite-react";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching users: ${await response.text()}`);
      }

      const users = await response.json();
      const user = users.find((u) => u.username === username && u.password === password);

      if (user) {
        setEmail(user.email);

        // Send OTP request
        const otpResponse = await fetch("http://localhost:5000/api/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });

        if (!otpResponse.ok) {
          throw new Error(`Error sending OTP: ${await otpResponse.text()}`);
        }

        setIsVerifying(true);
      } else {
        alert("Invalid username or password");
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, otp: verificationCode }),
      });

      if (response.ok) {
        navigate("/admin-dashboard");
      } else {
        alert("Invalid OTP");
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
      <Card className="w-full max-w-md bg-neutral-700 dark:bg-gray-800 p-6 shadow-lg">
        <div className="text-center">
          <img className="w-12 h-12 mx-auto mb-4" src="/lakesAutoSales.svg" alt="logo" />
          <h1 className="text-2xl font-bold text-white dark:text-white">Sign in to your account</h1>
        </div>

        {!isVerifying ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" value="Username" className="text-white" />
              <TextInput
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" value="Password" className="text-white" />
              <TextInput
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" gradientMonochrome="info">
              Sign in
            </Button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleVerifyCode}>
            <div>
              <Label htmlFor="verificationCode" value="Verification Code" className="text-white" />
              <TextInput
                id="verificationCode"
                type="text"
                placeholder="Enter the OTP sent to your email"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" gradientMonochrome="info">
              Verify Code
            </Button>
          </form>
        )}
      </Card>
    </section>
  );
}

export default Login;
