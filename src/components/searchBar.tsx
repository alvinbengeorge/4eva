"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, '_blank');
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-2 w-full p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Google"
                className="flex-1 p-2 text-lg bg-white text-black border border-gray-300 rounded-md w-full"
            />
            <button
                type="submit"
                className=" h-full p-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                <Search className="w-5 h-full" />
            </button>
        </form>
    );
};

export default SearchBar;
