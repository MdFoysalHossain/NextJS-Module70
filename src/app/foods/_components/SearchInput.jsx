"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput({ onSearch }) {
    const router = useRouter()
    const params = useSearchParams()


    const [query, setQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("");


    const quickFilters = ["All", "Fast Food", "Desserts", "Traditional", "Drinks"];

    const handleClear = () => {
        setQuery("");
        if (onSearch) onSearch("", activeFilter);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        
        const newParams = new URLSearchParams(params)
        newParams.set("search", searchValue)

        router.push(`?${newParams}`)

        // if (onSearch) onSearch(query, activeFilter);
    };

    const handleFilterClick = (filter) => {
        console.log("Filter clicked:", filter);
        if (filter === "All") {
            setActiveFilter();
        } else {
            setActiveFilter(filter);
        }

        if (onSearch) onSearch(query, filter);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-4 px-4 ">
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="relative group ">
                {/* Glow Effect Background */}
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl opacity-15 group-focus-within:opacity-30 blur transition duration-300 pointer-events-none" /> */}

                <div className="relative flex items-center bg-zinc-900 border border-zinc-800 group-focus-within:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300">

                    {/* Search Icon */}
                    <div className="pl-5 text-zinc-500 group-focus-within:text-amber-500 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Input Box */}
                    <input
                        type="text"
                        name="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search cravings... (e.g., Kacchi, Burger, Pizza)"
                        className="w-full bg-transparent text-white placeholder-zinc-500 text-base py-4 px-4 outline-none tracking-wide"
                    />

                    {/* Clear Button (Visible only when typing) */}
                    {query && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="p-1.5 mr-2 rounded-lg text-zinc-500 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 transition active:scale-95"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    {/* Submit Search Button */}
                    <button
                        type="submit"
                        className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-zinc-950 font-bold px-6 py-4 transition-all duration-200 text-sm tracking-wide shrink-0"
                    >
                        Find Food
                    </button>
                </div>
            </form>

            {/* Quick Interactive Tags / Filters */}
            <div className="flex hidden items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar mask-image-edge">
                {quickFilters.map((filter) => {
                    const isActive = activeFilter === filter;
                    return (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => handleFilterClick(filter)}
                            className={`text-xs font-semibold px-4 py-2 rounded-xl border whitespace-nowrap transition-all duration-200 active:scale-95 shrink-0 ${isActive
                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-md shadow-amber-500/5"
                                    : "bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                                }`}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}