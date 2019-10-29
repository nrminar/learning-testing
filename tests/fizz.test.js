const fizz = require('../modules/fizz')

test('fizzBuzz of 3 gives fizz', () =>{
    expect(fizz(3)).toBe('fizz')
})

test('fizzBuzz of 5 gives buzz', () =>{
    expect(fizz(5)).toBe('buzz')
})

test('fizzBuzz of 15 gives fizzbuzz', ()=>{
    expect(fizz(15)).toBe('fizzbuzz')
})

test('fizzBuzz of 17 gives 17', ()=>{
    expect(fizz(17)).toBe(17)
})