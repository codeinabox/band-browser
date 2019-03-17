const fetch = require('node-fetch');

module.exports = async query => {
  const response = await fetch(`https://musicbrainz.org/ws/2/artist/?query=${encodeURI( query )}&fmt=json`);
  const json = await response.json();

  return json.artists
    .filter(artist => artist.type === 'Group')
    .map(artist => ({
      name: artist.name,
      country: artist.country,
      began: artist['life-span'].begin,
      ended: artist['life-span'].ended
    }));
};
