const fetch = require('jest-fetch-mock');

jest.setMock('node-fetch', fetch);

const searchArtists = require('./searchArtists');
const fixture = require('../../fixtures/search.json')

describe('Search artists query', () => {
  test('Search for foals and process the API response', async () => {
    fetch.mockResponse(JSON.stringify(fixture));
    const results = await searchArtists('foals');
    expect(fetch).toHaveBeenCalledWith('https://musicbrainz.org/ws/2/artist/?query=foals&fmt=json');
    expect(results).toHaveLength(1);
    expect(results).toContainEqual({
      name: "Foals",
      country: "GB",
      began: "2005",
      ended: null
    });
  });

  test('Search for jesus and mary chain', async () => {
    fetch.mockResponse(JSON.stringify({ artists: [] }));
    await searchArtists('jesus and mary chain');
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('?query=jesus%20and%20mary%20chain'));
  });
});
