function getData(url) {
    return new Promise((resolve, reject) => {
       if (!url) {// check if a url is provided
           reject("No URL provided"); //if not, reject the promise with an error message
       }

       const xhr = new XMLHttpRequest(); // create a new XMLHttpRequest object

       xhr.open("GET", url); // open a GET request to the provided URL

       xhr.send(); // send the request

       xhr.onload = function () { // when the request is loaded

        if (xhr.status === 200) { // check if the status is 200 (success)

            resolve(xhr.responseText); // if so, resolve the promise with the response text

        } else {
            reject(xhr.status); // if not, reject the promise with the status code
        }
    }
});
}


// Promise.all() is a method that takes an array of promises and returns a new promise.
// It runs in parallel and returns an array of the results.

const promises = [
    getData("https://reqres.in/api/unknown/2"),
    getData("https://reqres.in/api/users/2"),
    getData("https://reqres.in/api/unknown")
];

Promise.all(promises)
    .then((results) => { // when all promises are resolved successfully
        console.log("Success!", results); // log the results
    }).catch(status => { // if any of the promises are rejected
        console.log(`An error with status code ${status} occurred:` ); // log the error with the status code
    });

// Promise.race() waits only for the first settled promise and gets its result (or error).
Promise.race(promises)
    .then((result) => {
        console.log("Success!", result);
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `);
    });
    
//  Promise.any()  waits for any of the first successful/fulfilled promise
Promise.any(promises)
    .then((result) => {
        console.log("First Success!", result);
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `);
    });