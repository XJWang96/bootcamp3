/*process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('what\'s your name ?')
process.stdin.on('data',(text)=>{

    console.log('hello ' + text)ca
    process.exit()

})*/



process.stdin.resume()
process.stdin.setEncoding('utf8')
const currentYear = new Date().getFullYear();



console.log('entrer ton age ?')
process.stdin.on('data',(aget)=>{

    const age = parseInt(aget);
    if(age >= 0 && age <= 99)
    {
        const anneenaissance = currentYear - age;
        console.log('votre annee de naissance :' + anneenaissance)
    }else
    {
        console.log('erreur age : ' + age + 'age supeieur ou egale à 0 et inferieur ou egale à 99')
    }
    


    process.exit()

})