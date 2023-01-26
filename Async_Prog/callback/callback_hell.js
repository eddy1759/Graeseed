// A callback with success and error

function getData(url, success, error) {
    if (!url) {
        return;
    }
}

// load content of page from url
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        // Run success callback
        success(xhr.responseText)
    } else {
        // Run error callback
        error(xhr.status)
    }
} 

function success(result) {
    console.log("Finally done")
    console.log(result)
}

function error(status) {
    console.log(`An error with status code ${status} occurred: `)
}

// using the browser prompt api 
const url = prompt("Enter a URL")

// Using multiple callbacks can result in a callback hell.
// Using multiple callbacks can result in a callback hell.
getData(url, (res1) => {
    console.log("Success 1", res1);
    getData("https://reqres.in/api/users/1", (res2) => {
        console.log("Success 2", res2);
        getData("htps://reqres.in/api/users/3", (res3) => {
            console.log("Success 3", res3);
            getData("https://reqres.in/api/users/4", 
            success, 
            error);
        }, error);
    }, error);
}, error);