"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter the search term"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-500 font-bold rounded-lg text-white py-2 px-4">
        Search
      </button>
    </form>
  );
};

export default Search;
