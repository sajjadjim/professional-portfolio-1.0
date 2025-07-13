import React, { useState } from "react";
import { FaGithub, FaSearch } from "react-icons/fa";
import GithubRepos from "./GithubRepos";

const Github = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchGithubUser = async () => {
    setError("");
    setUserData(null);
    if (!username) {
      setError("Please enter a username");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <FaGithub className="text-black text-4xl" />
          GitHub User Lookup
        </h1>
        <p className="text-gray-600">Enter a username to fetch GitHub profile</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mb-4 max-w-md mx-auto w-full">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 px-4 py-2 rounded-3xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        />
        <button
          onClick={fetchGithubUser}
          className="flex items-center justify-center gap-1 px-4 py-2 bg-black text-white rounded shadow hover:bg-gray-800 w-full sm:w-auto"
        >
          <FaSearch /> Search
        </button>
      </div>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {loading && (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {userData && (
        <div className="mt-6 p-4 border rounded shadow-md flex flex-col lg:flex-row gap-6 bg-white hover:shadow-lg transition w-full max-w-4xl mx-auto">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-36 h-36 rounded-full mx-auto lg:mx-0 shadow"
          />
          <div>
            <h2 className="text-2xl font-semibold">{userData.name || userData.login}</h2>
            <p className="text-gray-700 italic">{userData.bio}</p>
            {userData.location && (
              <p className="text-sm text-gray-600 mt-1">📍 {userData.location}</p>
            )}

            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-800">
              <span className="bg-gray-100 px-3 py-1 rounded shadow">
                🗂 Repos: {userData.public_repos}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded shadow">
                👥 Followers: {userData.followers}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded shadow">
                ➕ Following: {userData.following}
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline"
              >
                🌐 GitHub Profile
              </a>

              {userData.blog && (
                <a
                  href={userData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  🔗 Blog: {userData.blog}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto mt-6">
        <GithubRepos username={username} />
      </div>
    </div>

  );
};

export default Github;
