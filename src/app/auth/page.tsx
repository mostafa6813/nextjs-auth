"use client";

import { login } from "@/serverActions/login";
import { Button } from "@/components/auth/Button";
import { useState } from "react";

const Auth = () => {
  const [status, setStatus] = useState<number>();
  const [message, setMessage] = useState<Promise<string>>();

  const handleSubmitForm = async (formData: FormData) => {
    const data = await login(formData);
    setStatus(data.status);
    setMessage(data.message);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        name="auth-form"
        action={handleSubmitForm}
        className="space-y-4 p-8 bg-slate-700 rounded-md"
      >
        {message && (
          <div
            className={`${
              status === 401 ? "bg-red-600" : "bg-green-600"
            }  text-center  rounded-md text-white py-2`}
          >
            {message}
          </div>
        )}
        <div>
          <input
            onChange={() => setMessage(undefined)}
            name="username"
            type="text"
            className="px-4 py-2 bg-slate-900 rounded-md focus-visible:outline-none"
            placeholder="User name"
          />
        </div>
        <div>
          <input
            onChange={() => setMessage(undefined)}
            name="password"
            type="password"
            placeholder="Password"
            className="px-4 py-2 bg-slate-900 rounded-md focus-visible:outline-none"
          />
        </div>
        <div>
          <Button />
        </div>
      </form>
    </div>
  );
};

export default Auth;
