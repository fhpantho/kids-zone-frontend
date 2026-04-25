"use client";
import { useState } from "react";

const AuthForm = ({ type = "login" }) => {
  const isLogin = type === "login";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: connect API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-primary">
            {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
          </h2>

          <p className="text-center text-sm text-base-content/70">
            {isLogin
              ? "Login to continue to KidzzZone"
              : "Join KidzzZone and start exploring"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">

            {/* Name (Signup only) */}
            {!isLogin && (
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered w-full focus:input-primary"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="input input-bordered w-full focus:input-primary"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:input-primary"
                onChange={handleChange}
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full mt-2">
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <button
  type="button"
  onClick={() => signIn("google")}
  className="btn btn-outline w-full flex items-center justify-center gap-2"
>
  {/* Google Icon */}
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.64 2.3 30.2 0 24 0 14.82 0 6.73 5.48 2.69 13.44l8.06 6.26C12.9 13.18 17.98 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.5 24.5c0-1.64-.14-3.22-.4-4.76H24v9.02h12.7c-.55 2.96-2.22 5.48-4.74 7.18l7.3 5.68C43.9 37.18 46.5 31.4 46.5 24.5z"/>
    <path fill="#FBBC05" d="M10.75 28.7a14.5 14.5 0 010-9.4l-8.06-6.26A24.02 24.02 0 000 24c0 3.87.93 7.53 2.69 10.96l8.06-6.26z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.92-2.14 15.9-5.82l-7.3-5.68c-2.03 1.36-4.64 2.18-8.6 2.18-6.02 0-11.1-3.68-12.95-8.9l-8.06 6.26C6.73 42.52 14.82 48 24 48z"/>
  </svg>

  Continue with Google
</button>
          </form>

          {/* Switch */}
          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <a
              href={isLogin ? "/signup" : "/login"}
              className="text-secondary font-semibold ml-1 hover:underline"
            >
              {isLogin ? "Sign up" : "Login"}
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default AuthForm;