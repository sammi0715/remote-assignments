import React from "react";
import { useState, useEffect } from "react";
import "./styles3.css";

function GithubRepoPage() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.github.com/orgs/facebook/repos?per_page=5&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRepos((prevRepos) => {
          const newRepos = data.filter(
            (repo) => !prevRepos.some((prevRepo) => prevRepo.id === repo.id)
          );
          return [...prevRepos, ...newRepos];
        });
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  const viewMoreBtn = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h1>GitHub Repositories</h1>
      <RepoList repos={repos} />
      <button id="view-btn" onClick={viewMoreBtn}>
        More
      </button>
    </>
  );
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function RepoItem({ repo }) {
  return (
    <div className="repo">
      <h2 className="repo-name">
        {repo.name}
        <span className="repo-view">
          {capitalizeFirstLetter(repo.visibility)}
        </span>
      </h2>
      <p className="repo-describe">{repo.description}</p>

      {repo.topics.map((topics, index) => (
        <span className="repo-topics">{topics}</span>
      ))}
    </div>
  );
}

function RepoList({ repos }) {
  return (
    <div id="container">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default GithubRepoPage;
