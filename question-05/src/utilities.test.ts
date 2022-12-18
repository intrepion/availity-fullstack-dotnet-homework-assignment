import utilities from './utilities';

test('NPI number not long enough', () => {
    let npiNumber = '123456789';
    let valid = utilities.validateNPI(npiNumber);
});
