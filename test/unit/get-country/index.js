const countriesDB = require('../../../dist');
const fixtures = require('./fixtures');

describe('.getCountry', () => {
  Object.keys(fixtures).forEach(countryId => {
    it(`should return correct data for country "${countryId}"`, () => {
      const result = countriesDB.getCountry(countryId);
      const expectedResult = fixtures[countryId];
      expect(result).to.be.eql(expectedResult);
    });
  });

  it(`should return a property if specified`, () => {
    const result = countriesDB.getCountry('MX', 'name');
    expect(result).to.be.eql('Mexico');
  });

  it(`should return an embedded property if specified`, () => {
    const result = countriesDB.getCountry('AQ', 'coordinates.longitude');
    expect(result).to.be.eql(-135);
  });

  it(`should return null when requesting an unexistent property of an existent country`, () => {
    const result = countriesDB.getCountry('AQ', 'UNEXISTENT_PROPERTY');
    expect(result).to.be.eql(null);
  });

  it(`should return null when requesting an unexistent property of an unexistent country`, () => {
    const result = countriesDB.getCountry('UNEXISTENT_COUNTRY', 'UNEXISTENT_PROPERTY');
    expect(result).to.be.eql(null);
  });

  it(`should return null when requesting an existent property of an unexistent country`, () => {
    const result = countriesDB.getCountry('UNEXISTENT_COUNTRY', 'name');
    expect(result).to.be.eql(null);
  });

  it('should return null for not existent country', () => {
    const result = countriesDB.getCountry('NOT_EXISTENT_COUNTRY');
    expect(result).to.be.eql(null);
  });
});
