// src/components/AboutUs.js
import React from 'react';

function AboutUs() {
    return (
        <div className="bg-gray-200 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h2>
                    <p className="text-xl text-gray-600">
                        Welcome to Our Blogging Platform! We're dedicated to bringing you the latest news, stories, and insights from around the world.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                        <p className="text-gray-700 mb-4">
                            Our mission is to create a community where everyone can share their stories, ideas, and experiences.
                        </p>
                        <img
                            className="w-full h-60 object-fit rounded-lg"
                            src="https://source.unsplash.com/random/400x300/?community"
                            alt="Community"
                        />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                        <p className="text-gray-700 mb-4">
                            We envision a platform where diverse voices can be heard, and meaningful conversations can take place.
                        </p>
                        <img
                            className="w-full h-60 object-fit rounded-lg"
                            src="https://source.unsplash.com/random/400x300/?vision"
                            alt="Vision"
                        />
                    </div>
                </div>

                <div className="bg-white  p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Community</h3>
                    <p className="text-gray-700 mb-4">
                        We believe in building a strong and inclusive community where everyone feels welcome.
                    </p>
                    <div className="flex justify-center">
                        <img
                            className="w-auto h-auto object-fit rounded-lg"
                            src="https://source.unsplash.com/random/400x300/?team"
                            alt="Community"
                        />
                    </div>
                </div>


                <div className="mt-12 text-center">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">Message from Us</h3>
                    <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                        <p className="text-gray-700 mb-4">
                            "Thank you for visiting our platform. We started this journey with a dream of creating a space where everyone can share their stories. It's been an incredible journey, and we're grateful for your support."
                        </p>
                        <p className="text-gray-900 font-semibold">- MOHIT GHANCHI</p>
                        <div className="flex justify-center rounded-3xl">
                            <img
                                className="w-20 h-20 object-fit rounded-3xl"
                                src="data:image/jpeg;base64,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"
                                alt="Community"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
