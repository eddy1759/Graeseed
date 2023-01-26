async function getData() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData();