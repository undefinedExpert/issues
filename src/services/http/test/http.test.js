import http from '../http'
import config from '../config'
import nock from 'nock'

describe('http', function () {
  const mockData = { someServiceData: [] }

  beforeEach(() => {
    nock(config.github.url)
      .persist()
      .get("/fixture")
      .reply(200, mockData);
  });

  it('should make mock request and return correct data', async () => {
    const result = await http.get('github', '/fixture');
    expect(result.data).toEqual(mockData)
  });
});
