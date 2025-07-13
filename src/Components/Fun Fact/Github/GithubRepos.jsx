import React, { useEffect, useState } from "react";

const GithubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) {
      setRepos([]);
      return;
    }

    const fetchRepos = async () => {
      setLoading(true);
      setError("");
      setRepos([]);
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!res.ok) throw new Error("User not found or no repositories");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-teal-600 text-center mb-4">
        {username ? `${username}'s Repositories` : "No username provided"}
      </h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {repos.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-4 border rounded shadow hover:shadow-md transition bg-white"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-sm text-gray-600 mt-1">
                {repo.description || "No description"}
              </p>
              <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-700">
                {repo.language && (
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    🧑‍💻 {repo.language}
                  </span>
                )}
                <span className="bg-gray-100 px-2 py-1 rounded">
                  ⭐ {repo.stargazers_count}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  📅 Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && repos.length === 0 && username && (
        <p className="text-center text-gray-500 mt-6">
          No repositories found.
        </p>
      )}
    </div>

  );
};

export default GithubRepos;
