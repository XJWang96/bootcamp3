const name = 'john doo';
const age = 20;
const passions = ['ski','hiking','cinema'];

//console.log(name ,age,passions);


function displayPassions(){
    console.log('ma passion est ');
    for(let i = 0; i < passions.length; i++)
    {
        console.log( `- ${passions[i]}`);
    }


}

module.exports = {
    name : name,
    age : age,
    displayPassions : displayPassions

}