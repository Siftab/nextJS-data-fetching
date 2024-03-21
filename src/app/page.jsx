import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl">this is data fetching </h1>
      <Link href="/posts">
        <button className="btn bg-cyan-300">posts</button>
      </Link>
    </div>
  );
};

export default HomePage;
