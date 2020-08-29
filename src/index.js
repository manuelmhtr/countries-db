const data = require('./data.json');
const buildCountry = require('./build-country');
const totalCountries = Object.keys(data).length;
let countries;
let memoizedCountries = 0;

function getAllCountries() {
  if (totalCountries !== memoizedCountries) Object.keys(data).forEach(getCountry);
  return { ...countries };
}

function getCountry(id, property) {
  if (!countries) initCache();
  if (!countries[id]) memoizeCountry(buildCountry(data[id]));
  const country = countries[id] ? { ...countries[id] } : null;
  return isString(property) ? getProperty(country, property) : country;
}

function initCache() {
  countries = Object.keys(data).reduce((result, id) => {
    return Object.assign(result, { [id]: null });
  }, {});
}

function memoizeCountry(country) {
  if (!country) return;
  countries[country.id] = country;
  memoizedCountries = Object.values(countries).filter(c => !!c).length;
}

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

function getProperty(obj, property = '') {
  const paths = String(property).split('.');
  return paths.reduce((result, path) => {
    return (result || {})[path] || null;
  }, obj);
}

module.exports = {
  getCountry,
  getAllCountries
};
