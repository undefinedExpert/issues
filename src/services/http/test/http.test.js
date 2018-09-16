import http from '../http'
import nock from 'nock'
import { services, GITHUB_SERVICE } from '../config'

describe('http', function () {
  const mockData = { someServiceData: [] }
  beforeEach(() => {
    nock(services[GITHUB_SERVICE].url)
      .persist()
      .get("/fixture")
      .reply(200, mockData);
  });

  it('should make mock request and return correct data', async () => {
    const result = await http.get(GITHUB_SERVICE, '/fixture');
    expect(result.data).toEqual(mockData)
  });
});
