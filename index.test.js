const prettier = require('prettier');

test('check if file is properly formatted', () => {
    expect(prettier.check('index.js', {
        parser: 'babel',
    })).toBe(true);
})