import { getOrganizationRepositoryList } from './api'

export const githubReactIssues = async () => {
  const organization = 'facebook';
  const repository = 'react';
  return await getOrganizationRepositoryList(organization, repository)
}
