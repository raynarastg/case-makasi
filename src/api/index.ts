import { GithubUserReposResponse, GithubUserResponseType } from '../types';

export const getUserAndRepos = async (username: string) => {
  const userResponse = await fetch(`https://api.github.com/users/${username}`);
  const userData: GithubUserResponseType = await userResponse.json();

  if (userResponse.ok) {
    const reposData = await getRepos(username);

    const starredUserResponse = await fetch(`https://api.github.com/users/${username}/starred`);

    const starredUser = await starredUserResponse.json();

    return { ...userData, repos: reposData, starredUser };
  } else {
    throw new Error(String(userData.message));
  }
};

const getRepos = async (username: string) => {
  const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
  const userRepos: GithubUserReposResponse[] = await reposResponse.json();
  userRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  return userRepos;
};
