// A promise is a cleaner way to handle asynchronous operations.

function getData(url) {
    return new Promise((resolve, reject) => {
        // check if a url is provided
        if (!url) {
            reject("No URL provided");
        }

        // create new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // open a GET request to the provided url
        xhr.open("GET", url);

        // send the request
        xhr.send();

        // when the request loads, check the status
        xhr.onload = function () {
            if (xhr.status === 200) {
                // if the status is 200 (OK), resolve the promise with the response text
                resolve(xhr.responseText)
                
            } else {
                // if the status is not 200, reject the promise with the status code
                reject(xhr.status);
            }
        }
    })
}

const url = prompt("Enter a url");
getData(url)
    .then((result) => {
        console.log("Success!")
        console.log(result)

    }).catch(status => {
        console.log(`An error with status code ${status} occurred`)
    })