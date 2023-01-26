// A MongoDB database that uses callbacks to handle the responses of a queries to the database

class MongoClient {
    contructor() {
        this.callback = null;
    }

    query(query, callback) {
        MongoClient.find(query, (error, data) => {
            if (error) {
                callback(error)
            } else {
                callback(null, data)
            }
        })
    }
}

// Implementing callback in an API class

class API {
    constructor() {
        this.baseUrl = "https://jsonplaceholder.typicode.com/posts"
    }

    getData(callback) {
        fetch(`${this.baseUrl}/posts`)
        .then(res => res.json())
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.log(error)
        })
    }
}

// A callback with success and error handler

function getData(url, success, error) {
    if (!url) {
        return;
    }

    // load content of page from url
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Run success callback
            success(xhr.responseText);
        } else {
            error(xhr.status) // Run error callback
        }
    };
}

function success(result) {
    console.log("Success!");
    console.log(result);
}

function error(status) {
    console.log(`An error with status code ${status} occurred:`)
}

const url = prompt("Enter an address")

getData(url, success, error)