// asynchronous javascript  is a feature that enable js code to execute other tasks while waiting for the longer running tasks to finish its execution .this is a key feature in js that acts as non-blocking behavior meaning a feature ie. not stopping other part of the code to execute and  even waiting for the longer running tasks to complete.

// mainly used with callback functions , function passed as an argument to another function 

function fetchData(callback) {
    setTimeout(()=> {
        callback("Data fetched!");
    }, 3000); //wil fetch data after 3 ms
}
function displayData(data) {
    console.log(data);
}
fetchData(displayData); //displayData passed as arg ie. a callback function 
