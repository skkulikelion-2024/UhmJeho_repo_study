'use strict';

// Synchronous callback
function printImmediately(print){
    print();
}

//JavaScript is synchronous.
//Execute the code block by order after hoisting.
// hoisting: var, function declaration

console.log('1');
setTimeout(()=>console.log('2'),1000);
console.log('2');
console.log('3');


printImmediately(() => console.log('hello'));
// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}
printWithDelay(() => console.log('async callback'),2000);

//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess,onError) {
        setTimeout(() => {
        if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            onSuccess(id);
        } else{
            onError(new Error('not found'));
        }
        },2000);
    }
    getRoles(user, onSuccess,onError){
        setTimeout(() => {
            if (user ==='ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
UserStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(
                    `Hello ${user.name},you have a ${user.role} role`
                    );
            },
            error => {
                console.log(error);
            }
            );
    },
    error => {
        console.log(error)
    }
);

