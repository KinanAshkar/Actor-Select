const api = "https://www.breakingbadapi.com/api/characters";

async function data() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        getResult(data);
    } catch (error) {
        console.log(error.message);
    }
};

const getResult = (item) => {
    const header = document.querySelector("#header");
    const content = document.querySelector("#content");
    header.innerHTML += `
    <select class="form-control" onchange = "actor(this.value)">
        <option>Select Actor</option>
        ${item.map(char => `<option>${char.name}</option>`)}
    </select>`
}

async function actor(res) {
    if (res !== "Select Actor") {
        const response = await fetch(`${api}?name=${res}`);
        const data = await response.json();
        console.log(data);
        content.innerHTML = `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <h5>${data[0].nickname}</h5>
    <img src = ${data[0].img} alt = ""width = "250px"/>
    `;
    }
};

data();
