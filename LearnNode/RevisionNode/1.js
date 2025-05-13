// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     return fetch("https://jsonplaceholder.typicode.com/users/" + data.userData);
//   })
//   .then((userResponse) => userResponse.json())
//   .then((userData) => {
//     console.log("Post author name:", userData.name);
//   })
//   .catch((err) => console.log("err", err));

async function fetchPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Fetched the response.", response);

    const postData = await response.json();
    console.log("Post title:", postData.title);

    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + postData.userId
    );
    const userData = await userResponse.json();
    console.log("Post author name:", userData.name);
  } catch (err) {
    console.error(`err ${err}`);
  }
}

fetchPost();
