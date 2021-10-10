import React from 'react';
import './App.scss';

function App() {
  return (
    <div
        className="h-full dark:bg-gray-600 dark:text-white flex justify-center items-center"
    >
        <div className="login-form shadow-2xl dark:bg-gray-800 rounded">
            <h1 className="text-xl p-6 text-center">Login</h1>
            <div className="p-6">
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="pl-5 mb-3 block"
                    >Email</label>
                    <input
                        className="px-5 py-3 rounded-full w-full dark:bg-gray-400"
                        type="email"
                    />
                </div>
                <div className="mb-9">
                    <label
                        htmlFor="email"
                        className="pl-5 mb-3 block"
                    >Password</label>
                    <input
                        className="px-5 py-3 rounded-full w-full dark:bg-gray-400"
                        type="password"
                    />
                </div>
                <button className="px-5 py-3 text-center bg-indigo-400 rounded-full w-full">Zaloguj</button>
            </div>
        </div>
    </div>
  );
}

export default App;
