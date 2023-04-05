const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  try {
    const responses = await fetch(url);
    const data = await responses.json();
    let address = data.map((item) => item.address.geo);
    console.log(address);
  } catch (err) {
    console.log("Sth gone wrong");
  }
}
getData();
