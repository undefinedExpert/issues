import { getOrganizationRepositoryList } from './api'

export const githubIssues = async (organization, repository) => {
  const { data } = await getOrganizationRepositoryList(organization, repository)
  return data.map(({user, title, body, url}) => ({
    login: user.login,
    title,
    description: body,
    link: url,
  }))
}
export const githubReactIssues = async () => {
  const organization = 'facebook';
  const repository = 'react';
  return await githubIssues(organization, repository)
}
