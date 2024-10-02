// promises :- either gets rejected or resolved
// promises are object in js , represents eventual completion or failure of a asynchronous tasks in js , its an object
// allows code to write in more manageable and readable way

/* Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed */

let myFirstPromise = new Promise((resolve, reject) => {
  let dataFetched = true;
  if (dataFetched) {
    resolve("Data has been succefully fetched!");
  } else {
    reject("Data has not been fetched.");
  }
});
myFirstPromise.then(
  (data) => console.log(data),
  (error) => console.log(error)
);

// real life-example of when to use promises
/* suppose we want to display some user data of any social media or our customers simply but our server is located somewhere (remote)  or we need an api call to fetch the data , this is  asynchronous operation where we want some data to fetch over .Promoise are useful here */

function fetchUserData(userId, loginDetails) {
  return new Promise((resolve, reject) => {
    // making an api call
    setTimeout(() => {
      const ifSuccessfulDataFetched = true;
      if (ifSuccessfulDataFetched) {
        resolve({
          id: userId,
          name: "Ragini Roy",
          age: 22,
          userId: "raginiroy@github.com",
          password: "567@xml.com",
        });
      } else {
        reject("try again , no data fetched!");
      }
    }, 1000);
  });
}

fetchUserData(1)
  .then((userData) => {
    console.log("user data:", userData);
  })
  .catch((noUserFound) => {
    console.log("error:", noUserFound);
  });

//  using some api data while using a promise

function fetchRandomUserData () {
    return new Promise ((resolve, reject)=> {
        fetch("https://randomuser.me/api/?results=1")
        .then(response=> response.json())
        .then(data.results[0])
        .catch(error=> reject("failed to fetch data"+error));
    })
};
fetchRandomUserData().then(user=> {
    console.log("user id:", user.login.uuid);
})
.catch((noData)=> {
    console.log("no data :", noData);
}); 
// function for fetching the data

function fetchRandomUserdata () {
    return new Promise ((resolve,reject)=> {
        fetch("https://randomuser.me/api/?results=1")
        .then(response=> {
            if(!response.ok)  {
                throw new 
                Error("network response failed");
            }
            return response.json();
          })
          .then (data=> resolve(data.results[0]))
          .catch(error=> reject ("failed to fetch data:", error));
    });
} 
// fetchRandomUserdata().then(user=> {
//     console.log("user id:", user.login.uuid);
// });
fetchRandomUserData()
  .then(user => {
    console.log("User ID:", user.login.uuid);
    console.log("Name:", `${user.name.first} ${user.name.last}`);
    console.log("Username:", user.login.username);
    console.log("Email:", user.email);
    console.log("Location:", `${user.location.city}, ${user.location.country}`);
  })
  .catch(error => {
    console.error(error);
  });


async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=1");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const user = data.results[0];
    console.log("User ID:", user.login.uuid);
    console.log("Name:", `${user.name.first} ${user.name.last}`);
    console.log("Username:", user.login.username);
    console.log("Email:", user.email);
    console.log("Location:", `${user.location.city}, ${user.location.country}`);
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
}

fetchRandomUser();

const myOtherPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "ragini",
        age: 21,
        majors: "cs",
        loginId: "privateventures@example.com",
        password: "9905849583@someoneisme",
        location: "India",
      });
    } 
    else {
        reject("something went wrong on request!")
    }
  },1000);
});
myOtherPromise.then((user)=> {
    console.log(user);
    return user.username //this is chaining where user se username return kar rhe hain
}).then ((username)=> {
    console.log(username);
}).catch((error)=> {
    console.log(error);
})
.finally(()=> {
    console.log("finally on the verge of fetching api data,async,await")
}); 
//will always be executed "finally" keyword


// this is what i learned about promises 
/*promises are returned object that states completion or failure of an event eventually , promises resolve major problem like callback hell (ie. callback inside callbacks /nested cllback hell). we attach callback functions instead of passing callback as paramter. 
promise chaining:
*/
// const newPromise = doMyWork(); 
// const anotherPromise =  newPromise.then(succeeful,failure);

