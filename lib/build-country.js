function buildCountry(obj) {
  if (!obj) return null;

  return {
    id: get(obj, 'i2'),
    name: get(obj, 'n'),
    officialName: get(obj, 'on'),
    emoji: get(obj, 'e'),
    emojiUnicode: get(obj, 'eu'),
    iso2: get(obj, 'i2'),
    iso3: get(obj, 'i3'),
    isoNumeric: get(obj, 'in'),
    geonameId: get(obj, 'gi'),
    continentId: get(obj, 'ci'),
    population: get(obj, 'p'),
    elevation: get(obj, 'l'),
    areaSqKm: get(obj, 'a'),
    coordinates: {
      latitude: get(obj.c, 'a'),
      longitude: get(obj.c, 'o')
    },
    timezones: get(obj, 't', []),
    domain: get(obj, 'd'),
    currencyCode: get(obj, 'cc'),
    currencyName: get(obj, 'cn'),
    postalCodeFormat: get(obj, 'pf'),
    postalCodeRegex: get(obj, 'pr'),
    phoneCode: get(obj, 'pc'),
    neighborCountryIds: get(obj, 'ni', []),
    languages: get(obj, 'lg', []),
    locales: get(obj, 'lc', []),
  };
}

function get(obj, property, def = null) {
  return (obj || {})[property] || def;
}

module.exports = buildCountry;
