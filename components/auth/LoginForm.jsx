"use client";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Announcement from "@/components/login/Announcement";
import LoginFooter from "@/components/login/LoginFooter";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await login(username, password);

      console.log(result);

      alert("Login Success");

      router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE */}
      <Announcement />

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2 text-slate-800 whitespace-nowrap">
            Welcome to B2B Viktorindo
          </h2>

          <p className="text-slate-500 mb-8">
            Please login with your username and password. If you do not have
            one, please contact helpdesk@vtp.com to register
          </p>

          {/* Username */}
          <div className="mb-6">
            <label className="block text-sm mb-2 text-slate-600">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full border-b-2 border-slate-300 p-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm mb-2 text-slate-600">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border-b-2 border-slate-300 p-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
          >
            LOGIN
          </button>

          {/* Footer */}
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}
