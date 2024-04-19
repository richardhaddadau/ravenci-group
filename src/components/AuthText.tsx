﻿import React, { ChangeEvent, useState } from "react";

interface AuthTextProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AuthText: React.FC<AuthTextProps> = ({
  id = "auth-text",
  name = "",
  label = "",
  type = "text",
  value = "",
  placeholder = "",
  required = false,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`grid gap-2`}>
      <label htmlFor={id} className={`text-xs tracking-wide`}>
        {label}:{" "}
      </label>
      <div className={`relative`}>
        <input
          id={id}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`px-2 py-1 ${
            type === "password" ? "pr-10" : ""
          } w-full bg-transparent border-b border-white/20 hover:border-white/50 focus:border-ravenci-primary text-[#B24398] font-bold outline-none text-sm transition-all duration-200`}
          {...props}
        />
        {type === "password" && (
          <div
            className={`cursor-pointer absolute right-2 top-1/2 -translate-y-1/2`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthText;
