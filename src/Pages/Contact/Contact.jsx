import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

                    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" rows="4" required></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
