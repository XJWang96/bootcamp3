const functions = {

    add:(num1,num2) => num1 + num2,
    isNull: ( )=> null,
    checkValue : x => x,
    createUser: () =>{
        const user = { firstname : 'Brad'};
        user['lastname'] = 'Michelle';
        return user;
    }
}

/*const tota = () =>{


}

function toto(){


}*/

module.exports = functions;