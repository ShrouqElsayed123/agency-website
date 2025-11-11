import React, { useState } from 'react'

const Toggle = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <div className="flex items-center justify-center    transition-colors duration-500">
            <button
                onClick={() => setIsDark(!isDark)}
                className={`relative w-12 h-7 rounded-full shadow-xl transition-all duration-700 overflow-hidden border-2 border-gray-300 dark:border-gray-700 ${isDark ? "bg-gray-900" : "bg-blue-300"}`}
            >
                {/* Background sky animations */}
                <div
                    className={`absolute inset-0 transition-all duration-700 ${isDark ? "bg-gradient-to-r from-gray-800 to-black" : "bg-gradient-to-r from-blue-400 to-blue-200"
                        }`}
                >
                    {/* Cloud */}
                    {!isDark && (
                        <div className="absolute w-full h-full flex items-center justify-center">
                            <div className="bg-white opacity-70 rounded-full w-12 h-12 absolute left-6 top-6 blur-md" />
                            <div className="bg-white opacity-80 rounded-full w-16 h-16 absolute left-12 top-10 blur-md" />
                        </div>
                    )}


                    {/* Stars */}
                    {isDark && (
                        <div className="absolute inset-0">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-full w-1 h-1 absolute animate-pulse"
                                    style={{
                                        top: `${10 + i * 12}%`,
                                        left: `${15 + (i % 3) * 30}%`,
                                        animationDelay: `${i * 0.2}s`,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>


                {/* Sun & Moon */}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-all duration-700 flex items-center justify-center ${isDark ? "right-1 bg-gray-300" : "left-1 bg-yellow-400"
                        }`}
                >
                    {/* Moon craters */}
                    {isDark && (
                        <>
                            <div className="bg-gray-400 rounded-full w-4 h-4 absolute top-3 left-3" />
                            <div className="bg-gray-400 rounded-full w-3 h-3 absolute bottom-4 right-4" />
                        </>
                    )}
                </div>
            </button>
        </div>
    )
}

export default Toggle
