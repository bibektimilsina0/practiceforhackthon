import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // e.g., make an API call to create a new user
    console.log('Form submitted:', { name, email, password });
    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full h-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-500">Become a Member!</h2>
        {/* <h3>Make tours for free in 5 minutes.No credit card required</h3> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder='Enter your full name'
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email'
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='Enter your password'
              className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white-400 text-black w-full border border-blue-300 rounded-md px-4 py-2 mt-2 hover:bg-blue-500 transition-colors"
          >
            Sign Up
          </button>
          
        </form>
        <p className="text-gray-600 mt-4">
          Already a member?{' '}
          <a href="#" className="text-blue-500 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
