import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LanguageDetails = () => {
    // Get the language data passed via the loader
    const language = useLoaderData();

    // Check the structure of the language object
    const { name, logo, description } = language;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Title Section */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                {name} - Language Details
            </h2>

            {/* Language Logo */}
            <div className="flex justify-center mb-6">
                <img
                    src={logo}
                    alt={`${name} logo`}
                    className="h-24 w-24 object-contain rounded-lg border border-gray-200"
                />
            </div>

            {/* Language Description */}
            <div className="text-lg text-gray-700">
                <p>{description}</p>
            </div>

            {/* You can add more details here depending on what data you have */}
            {/* Example: Add tutors for this language */}
            {/* <h3 className="text-2xl font-semibold mt-8">Available Tutors</h3> */}
            {/* List of tutors or other language-related information */}
        </div>
    );
};

export default LanguageDetails;
