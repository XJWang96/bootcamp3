const reverseString = require('./reverseString')
const isAnagram = require('./isAnagram')
const chunkArray = require('./chunkArray')



test2('reverse tito', () =>{
    expect(reverseString.reverseString('tito').toBe('otit'));
})