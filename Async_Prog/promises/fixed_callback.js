// A promise call cleanly handle multiple asynchronous operations.
function getData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("No URL provided");
        }

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }

        };
    });
}

const url = prompt("Enter a URL");

getData(url)
    .then((result) => {
        console.log("Success 1", result);
        return getData("https://reqres.in/api/unknown/2");
    }).then((result) => {
        console.log("Success 2", result);
        return getData("https://reqres.in/api/users/2");
    }).then((result) => {
        console.log("Success 3", result);
        return getData("https://reqres.in/api/unknown");
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `); // Catch any error
    });



