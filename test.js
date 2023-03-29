/*const functions = require('./functions')

test('Adds 2 + 2 to equal', () =>{
    expect(functions.add(2,2)).toBe(4)
})


test('Adds 2 + 2 to equal', () =>{
    expect(functions.add(1,2)).not.toBe(4)
})


test('Should be null', () =>{
    expect(functions.isNull()).toBeNull();
})

test('should be false',()=>{
    expect(functions.checkValue(null)).toBeFalsy();
}

)

test('user should be Brad Michelle',() => {
    expect(functions.createUser()).toEqual({firstname:'Brad', lastname : 'Michelle'})

})*/


const reverseString = require('./reverseString')
const isAnagram = require('./isAnagram')
const chunkArray = require('./chunk')



test('reverse tito', () =>{
    expect(reverseString('tito')).toBe('otit');
})

test('return true if anagram',() => {

    expect(isAnagram('xiaojie','jiexiao')).toBe(true);
})

test('chunkArray couper le tableau de numero (1 2 3 4) en 2', () =>{



    expect(chunkArray([1,2,3,4],2)).toEqual([1,2],[3,4]);

})