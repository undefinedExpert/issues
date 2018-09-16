import { githubReactIssues } from '../handlers'
import nock from 'nock'
import { services, GITHUB_SERVICE } from 'services/http'

describe('githubService', function () {
  const mockData = [{ user: { login: 'some login' }, notWanted: 'fixture', body: 'fixture', title: 'fixture', url: 'fixture' }]

  beforeEach(() => {
    nock(services[GITHUB_SERVICE].url)
      .persist()
      .get("/repos/facebook/react/issues")
      .reply(200, mockData);
  });

  it('Should return correct data from githubReactIssues', async () => {
    const result = await githubReactIssues();
    const { user: { login }, body, title, url } = mockData[0]
    const expectedData = [{
      login,
      title,
      description: body,
      link: url,
    }]
    expect(result).toEqual(expectedData)
  });
});
