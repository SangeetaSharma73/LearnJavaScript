// # 1. Fetching a List of Users

// First, we'll fetch a list of users from the JSONPlaceholder API and log them to the console.users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("list of users", users);
  })
  .catch(err=>console.error(err));



// Fetch the list of users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Get the first user
    const firstUser = users[0];
    console.log('First User:', firstUser);

    // Fetch posts of the first user
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log("First User's Posts:", posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });



// Fetch the list of users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const firstUser = users[0];
    console.log('First User:', firstUser);

    // Fetch posts of the first user
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log("First User's Posts:", posts);

    // Get the last post
    const lastPost = posts[posts.length - 1];
    console.log('Last Post:', lastPost);

    // Fetch comments of the last post
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
  })
  .then(response => response.json())
  .then(comments => {
    console.log('Comments on Last Post:', comments);
  })
  .catch(error => {
    console.error('Error:', error);
  });
