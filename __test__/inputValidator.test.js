import { validateInput } from '../src/client/js/inputValidator'

  
describe("Testing the format of the input", () => {
    
    test("checks for a match", () => {
    const urlRegex = /^(https:\/\/www\.|http:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9!\_$%?\-]+\.([a-zA-Z]|[a-zA-Z\/]{2,5})/;
    const url = 'http://google.com:4443/'; 
    const url2 = 'www.gogle.com';
    const output = 'Please enter a valid url';
    expect(urlRegex.test(url)).toBe(true);
    expect(urlRegex.test(url2)).toBeFalsy();

    })
});