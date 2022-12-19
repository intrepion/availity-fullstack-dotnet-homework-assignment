import utilities from "./utilities";

test("NPI number not long enough", () => {
  let npiNumber = "123456789";
  let valid = utilities.validateNpi(npiNumber);
  expect(valid).toBe(false);
});

test("pi number too long", () => {
  let npiNumber = "12345678901";
  let valid = utilities.validateNpi(npiNumber);
  expect(valid).toBe(false);
});

test("NPI number has non-digits", () => {
  let npiNumber = "lZ34SG7Bg0";
  let valid = utilities.validateNpi(npiNumber);
  expect(valid).toBe(false);
});
