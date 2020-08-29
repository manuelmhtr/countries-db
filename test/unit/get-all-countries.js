const data = require('../../src/data.json');
const countriesDB = require('../../dist');

const OPTIONAL_STRINGS = [
  'domain', 'postalCodeFormat', 'postalCodeRegex', 'phoneCode', 'currencyCode', 'currencyName'
];
const OPTIONAL_NUMBERS = [
  'elevation', 'population', 'areaSqKm'
];

describe('.getAllCountries', () => {
  it('should return an object containing full countries data', () => {
    const expectedLength = Object.keys(data).length;
    const countries = countriesDB.getAllCountries();
    expect(countries).to.be.an('object');
    expect(Object.keys(countries).length).to.be.equal(expectedLength);

    Object.values(countries).forEach(expectCountry);
  });
});

function expectCountry(country) {
  expectRequiredProperties(country);
  expectOptionalProperties(country);
}

function expectRequiredProperties(country) {
  expectString(country.id, /^[A-Z]{2}$/);
  expectString(country.name);
  expectString(country.officialName);
  expectString(country.emoji);
  expectString(country.emojiUnicode);
  expectString(country.iso2, /^[A-Z]{2}$/);
  expectString(country.iso3, /^[A-Z]{3}$/);
  expectString(country.isoNumeric, /^[0-9]{3}$/);
  expect(country.geonameId).to.be.a('number');
  expectString(country.continentId, /^[A-Z]{2}$/);
  expect(country.coordinates).to.be.an('object');
  expect(country.coordinates.latitude).to.be.an('number');
  expect(country.coordinates.longitude).to.be.an('number');
  expectTimezones(country.timezones);
  expectNeighborCountryIds(country.neighborCountryIds);
  expectLanguages(country.languages);
  expectLocales(country.locales);
}

function expectString(str, regex) {
  expect(str).to.be.a('string');
  expect(str.length > 0).to.be.equal(true);
  if (regex) expect(str).to.match(regex);
}

function expectOptionalProperties(country) {
  OPTIONAL_STRINGS.forEach(property => {
    if (country[property]) expectString(country[property]);
    else expect(country[property]).to.be.equal(null);
  });

  OPTIONAL_NUMBERS.forEach(property => {
    if (country[property]) expect(country[property]).to.be.a('number');
    else expect(country[property]).to.be.equal(null);
  });
}

function expectTimezones(timezones) {
  expect(timezones).to.be.an('array');
  timezones.forEach(timezone => {
    expectString(timezone);
  });
}

function expectNeighborCountryIds(neighborCountryIds) {
  expect(neighborCountryIds).to.be.an('array');
  neighborCountryIds.forEach(id => {
    expectString(id, /^[A-Z]{2}$/);
  });
}

function expectLanguages(languages) {
  expect(languages).to.be.an('array');
  languages.forEach(language => {
    expectString(language, /^[a-z]{2,3}$/);
  });
}

function expectLocales(locales) {
  expect(locales).to.be.an('array');
  locales.forEach(locale => {
    expectString(locale, /^[a-z]{2,3}(\-[A-Z]{2})?$/);
  });
}
