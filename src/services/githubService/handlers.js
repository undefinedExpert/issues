import { getOrganizationRepositoryList } from './api'

export const githubIssues = async (organization, repository, since) => {
  const isoDate = since.toISOString()
  const { data } = await getOrganizationRepositoryList(organization, repository, isoDate)
  return data.map(({user, title, body, url, created_at}) => ({
    login: user.login,
    title,
    description: body,
    link: url,
    date: created_at
  }))
}
export const githubReactIssues = async () => {
  const organization = 'facebook';
  const repository = 'react';
  const date = last7DaysDate()

  return await githubIssues(organization, repository, date)
}

export const last7DaysDate = () => {
  const date = new Date();
  const desiredDate = date.getDate() - 7;
  date.setDate(desiredDate);
  return date
}