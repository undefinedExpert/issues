import http, { GITHUB_SERVICE } from 'services/http'

const endPoints = {
  repos() {
    return `/repos`
  },
  organizationRepos(organization) {
    return `${this.repos()}/${organization}`
  },
  organizationRepo(organization, repository) {
    return `${this.organizationRepos(organization)}/${repository}`
  },
  repoIssues(organization, repository) {
    return `${this.organizationRepo(organization, repository)}/issues?since=2018-09-16`
  }
}

export const getOrganizationRepositoryList = (organization, repository) =>
  http.get(GITHUB_SERVICE, endPoints.repoIssues(organization, repository))

