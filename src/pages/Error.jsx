import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
      <p className="mt-4">
        Sorry, we couldn&apos;t find what you were trying to look for.
      </p>
      <Link to="/" className="mt-4 text-blue-500 underline">
        Home
      </Link>
    </div>
  );
};

export default Error;
