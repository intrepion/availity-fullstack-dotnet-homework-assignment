import utilities from './utilities';

test('NPI number not long enough', () => {
    let npiNumber = '123456789';
    let valid = utilities.validateNPI(npiNumber);
    expect(valid).toBe(false);
});

test('NPI number too long', () => {
    let npiNumber = '12345678901';
    let valid = utilities.validateNPI(npiNumber);
    expect(valid).toBe(false);
});
