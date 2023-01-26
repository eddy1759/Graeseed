
function getData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("No URL provided");
        }

        const xhr = new XMLHttpRequest
        ();
        xhr.open("GET", url)
        xhr.send()
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.status)
            }
        }
    })
}

async function getAllData() {
    const result = await getData(url);
    console.log("Success 1", result);

    const result2 = await getData(url2);
    console.log("Success 2", result2)

    const result3 = await getData(url3);
    console.log("Success 3", result3)
}

