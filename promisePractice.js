
let myPromise = new Promise(function(resolve, reject) {
    const userName= "ragini";
    const userEmailId= "ragini@123gmail.com";
    if(userName === "ragini" && userEmailId=== "ragini@123gmail.com") {
        resolve();
    } else {
        reject();
    }
});
myPromise.then(function() {
    console.log("You will be successful, keep on going!");
}).catch(function() {
    console.log("some error on server side has occured!");
});

// promise chaining previously was handled by using callback which becomes difficult to read and maintain since it gets dependent on some other function to pass the value, instead of depending  on some other function , we attach callback function  instead of passing callback as parameter. 
// let promise = new Promise(function(resolve,reject){ 
//     const myLinkedinHandle = "raginiroy";
//     const myGithub= "raginiroyy";
//     const myGmail= "royragini967@gmail.com";
//     resolve("my basic resume must includes:",`${myLinkedinHandle}, ${myGithub}, ${myGmail}`);
// }); 
// promise
// .then(storedInfo=> {
//     console.log(storedInfo.myGmail);
//     return storedInfo;  
// })
// .then(storedInfo=> {
//     console.log(storedInfo.myLinkedinHandle);
//     return storedInfo;
// })
// .catch(error => {
//     console.error('Error:', error);
// });
let promise = new Promise(function(resolve, reject) { 
    const myLinkedinHandle = "raginiroy";
    const myGithub = "raginiroyy";
    const myGmail = "royragini967@gmail.com";
    console.log("my basic resume must include:", `${myLinkedinHandle}, ${myGithub}, ${myGmail}`);
    resolve({ myLinkedinHandle, myGithub, myGmail }); // Resolve with an object containing the info
}); 

promise
.then(storedInfo => {
    console.log("First then:", storedInfo.myGmail); // Access myGmail from storedInfo
    return storedInfo;  
})
.then(storedInfo => {
    console.log("Second then:", storedInfo.myGithub); // Access myGithub from storedInfo
    return storedInfo;
})
.catch(error => {
    console.error('Error:', error);
});

// async await 
async function getUserData() {
    try {
     const response= await fetch("https://jsonplaceholder.typicode.com/todos/1");
     const data = await response.json();
     console.log(data);
    }
    catch (error) {
        console.log("error:", error);
    }
}
getUserData();

/* 
async function getFakeRestApi() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log("try again later!", err);
    }
}

getFakeRestApi();
*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data);
})
