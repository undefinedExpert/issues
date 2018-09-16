import { githubReactIssues } from '../handlers'
import nock from 'nock'
import { services, GITHUB_SERVICE } from 'services/http'

describe('githubService', function () {
  const mockData = { someServiceData: [] }

  beforeEach(() => {
    nock(services[GITHUB_SERVICE].url)
      .persist()
      .get("/repos/facebook/react/issues")
      .reply(200, mockData);
  });

  it('should make mock request and return correct data', async () => {
    const result = await githubReactIssues();
    expect(result.data).toEqual(mockData)
  });
});
