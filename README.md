# countries-db
![](https://img.shields.io/github/workflow/status/manuelmhtr/countries-db/tests?style=flat)
![](https://img.shields.io/npm/dm/countries-db)
![](https://img.shields.io/badge/license-MIT-blue?style=flat)

This is a minimalistic library to work with countries data.

## Usage

### NodeJS

Install with npm or yarn:

```bash
npm install --save countries-db
```

### Browser

Add the following script to your project (only ~9kb):

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/gh/manuelmhtr/countries-db@latest/dist/index.js" type="text/javascript"></script>

<!-- Or specify a version -->
<script src="https://cdn.jsdelivr.net/gh/manuelmhtr/countries-db@v1.2.0/dist/index.js" type="text/javascript"></script>

<!-- This will export a variable named "countriesDb": -->
<script type="text/javascript">
  var data = countriesDb.getCountry('US');
  console.log(data);
</script>
```

## API

### .getCountry(id, [property])

Returns a country referenced by its `id`.

If the `property` argument is specified, it will only return the value of that property.

**Example**

```javascript
const countriesDB = require('countries-db');

const population = countriesDB.getCountry('MX', 'population');
console.log(population);

/*
Prints: 112468855
*/

const country = countriesDB.getCountry('MX');
console.log(country);

/*
Prints:

{
  id: 'MX',
  name: 'Mexico',
  officialName: 'The United Mexican States',
  emoji: '🇲🇽',
  emojiUnicode: 'U+1F1F2 U+1F1FD',
  iso2: 'MX',
  iso3: 'MEX',
  isoNumeric: '484',
  geonameId: 3996063,
  continentId: 'NA',
  population: 112468855,
  elevation: 2062,
  areaSqKm: 1972550,
  coordinates: {
    latitude: 23,
    longitude: -102
  },
  timezones: [
    'America/Bahia_Banderas',
    'America/Cancun',
    'America/Chihuahua',
    'America/Ensenada',
    'America/Hermosillo',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Merida',
    'America/Mexico_City',
    'America/Monterrey',
    'America/Ojinaga',
    'America/Santa_Isabel',
    'America/Tijuana'
  ],
  domain: '.mx',
  currencyCode: 'MXN',
  currencyName: 'Peso',
  postalCodeFormat: '#####',
  postalCodeRegex: '^(\\d{5})$',
  phoneCode: '+52',
  neighborCountryIds: [ 'GT', 'US', 'BZ' ],
  languages: [ 'es' ],
  locales: [ 'es-MX' ]
}
*/
```


### .getAllCountries()

Returns an object with the data of all countries.

**Example**

```javascript
const countriesDB = require('countries-db');

const countries = countriesDB.getAllCountries();
console.log(countries);

/*
Prints:

{
  AD: {
    id: 'AD',
    name: 'Andorra',
    officialName: 'The Principality of Andorra',
    emoji: '🇦🇩',
    ...
  },
  AE: {
    id: 'AE',
     name: 'United Arab Emirates',
     officialName: 'The United Arab Emirates',
     emoji: '🇦🇪',
     ...
  },
  AF: {
    id: 'AF',
     name: 'Afghanistan',
     officialName: 'The Islamic Republic of Afghanistan',
     emoji: '🇦🇫',
     ...
  },
  AG: {
    id: 'AG',
     name: 'Antigua and Barbuda',
     officialName: 'Antigua and Barbuda',
     emoji: '🇦🇬',
     ...
  },
  ...
}

*/
```

## Data models

### Country

A country is defined by the following parameters:

| Parameter | Type | Description |
| --------- | ---- | ----------- |
|`id`|String|The country [ISO 3166-1 code](https://es.wikipedia.org/wiki/ISO_3166-1).|
|`name`|String|Preferred name of the country.|
|`officialName`|String|The offcial name of the country.|
|`emoji`|String|The [Emoji](https://en.wikipedia.org/wiki/Emoji) flag of the country .|
|`emojiUnicode`|String|The [Emoji flag Unicode](https://unicode.org/emoji/charts/emoji-list.html#flags) of the country .|
|`iso2`| String | [ISO 3166-1](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) Alpha-2 code of the country. |
|`iso3`| String | [ISO 3166-1](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) Alpha-3 code of the country. |
|`isoNumeric`| String | [ISO 3166-1](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) Numeric code of the country. |
|`geonameId`| Integer | Unique identifier given by [GeoNames](https://www.geonames.org). |
|`continentId`| String | Id of the continent where the country is located. Valids are `AF` (Africa), `AS` (Asia), `EU` (Europe), `NA` (North America), `OC` (Oceania), `SA` (South America) and `AN` (Antarctica).|
|`population`| Integer | The approximate population living in the place. |
|`elevation`| Float | The approximate elevation from sea level. Value is expressed in meters. |
|`areaSqKm`| Integer | Total area of the country. Expressed in squared kilometers. |
|`coordinates`| Object | The geographic coordinates where the place is located. |
|`coordinates.latitude`| Float | Latitude component from the geographic coordinates of the place. |
|`coordinates.longitude`| Float | Longitude component from the geographic coordinates of the place. |
|`timezones`|Array[String]|The list of timezones used in the country.|
|`domain`| String | [Top-level domain](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) of the country. |
|`currencyCode`| String | Code of the official currency of the country. |
|`currencyName`| String | Name of the official currency of the country. |
|`postalCodeFormat`| String | Format of the postal codes used in the country. |
|`postalCodeRegex`| String | Regular expression to validate the postal codes used in the country. |
|`phoneCode`| String | The international phone code to call a number in the country. |
|`neighborCountryIds`| Array[String] | A list of ids of the countries that share border with it (neighbors). |
|`languages`| Array[String] | A list of [languages](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) spoken in the country. |
|`locales`| Array[String] | A list of [locales](https://en.wikipedia.org/wiki/Locale_(computer_software)) (language + region) used in the country. |



```javascript
{
  id: 'DE',
  name: 'Germany',
  officialName: 'The Federal Republic of Germany',
  emoji: '🇩🇪',
  emojiUnicode: 'U+1F1E9 U+1F1EA',
  iso2: 'DE',
  iso3: 'DEU',
  isoNumeric: '276',
  geonameId: 2921044,
  continentId: 'EU',
  population: 81802257,
  elevation: 303,
  areaSqKm: 357021,
  coordinates: {
    latitude: 51.5,
    longitude: 10.5
  },
  timezones: [ 'Europe/Berlin', 'Europe/Busingen' ],
  domain: '.de',
  currencyCode: 'EUR',
  currencyName: 'Euro',
  postalCodeFormat: '#####',
  postalCodeRegex: '^(\\d{5})$',
  phoneCode: '+49',
  neighborCountryIds: [ 'CH', 'PL', 'NL', 'DK', 'BE', 'CZ', 'LU', 'FR', 'AT' ],
  languages: [ 'de' ],
  locales: [ 'de' ]
}
```

## Related projects

* [countries-and-timezones](https://www.npmjs.com/package/countries-and-timezones)
* [location-by-ip](https://www.npmjs.com/package/location-by-ip)


## Working on something more complex?

Meet [Spott](https://spott.dev):
- **Search any city, country or administrative division** in the world. By full strings or autocompletion. 
- Find a place by an IP address.
- Access to more than 240,000 geographical places. In more than 20 languages.

[![Spott API for cities, countries and administrative divisions](https://spott-assets.s3.amazonaws.com/marketing/banner-720px.png)](https://spott.dev)


## License

MIT
