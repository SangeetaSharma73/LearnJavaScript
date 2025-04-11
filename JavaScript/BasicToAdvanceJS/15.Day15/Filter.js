// Function to filter posts by a keyword in the title
function filterPostsByKeyword(posts, keyword) {
  return posts.filter((post) => post.title.includes(keyword));
}

// Usage example
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const keyword = "eum";
    const filteredPosts = filterPostsByKeyword(posts, keyword);
    // console.log(posts[0].title)
    console.log(`Posts containing "${keyword}":`, filteredPosts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });




// Function to sort comments by name
function sortCommentsByName(comments) {
  return comments.sort((a, b) => a.name.localeCompare(b.name));
}

// Usage example
fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(comments => {
    const sortedComments = sortCommentsByName(comments);
    console.log('Comments sorted by name:', sortedComments);
  })
  .catch(error => {
    console.error('Error:', error);
  });




// Async function to fetch the first user's posts
async function fetchFirstUsersPosts() {
  try {
    // Fetch the list of users
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    const firstUser = users[0];
    console.log('First User:', firstUser);

    // Fetch posts of the first user
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
    const posts = await postsResponse.json();
    console.log("First User's Posts:", posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
fetchFirstUsersPosts();



// Async function to fetch the last post and its comments
async function fetchLastPostComments() {
  try {
    // Fetch the list of users
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    const firstUser = users[0];
    console.log('First User:', firstUser);

    // Fetch posts of the first user
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
    const posts = await postsResponse.json();
    console.log("First User's Posts:", posts);

    // Get the last post
    const lastPost = posts[posts.length - 1];
    console.log('Last Post:', lastPost);

    // Fetch comments of the last post
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
    const comments = await commentsResponse.json();
    console.log('Comments on Last Post:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
fetchLastPostComments();








// Function to filter posts by a keyword in the title
function filterPostsByKeyword(posts, keyword) {
  return posts.filter(post => post.title.includes(keyword));
}

// Function to sort comments by name
function sortCommentsByName(comments) {
  return comments.sort((a, b) => a.name.localeCompare(b.name));
}

// Async function to fetch and process data
async function fetchAndProcessData() {
  try {
    // Fetch the list of users
    const usersResponse = await fetch('<https://jsonplaceholder.typicode.com/users>');
    const users = await usersResponse.json();
    const firstUser = users[0];

    // Fetch posts of the first user
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
    let posts = await postsResponse.json();
    

    // Filter posts by keyword
    const keyword = 'eum';
    posts = filterPostsByKeyword(posts, keyword);
    console.log(`Filtered Posts containing "${keyword}":`, posts);

    // Get the last post from filtered posts
    const lastPost = posts[posts.length - 1];

    // Fetch comments of the last post
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
    let comments = await commentsResponse.json();

    // Sort comments by name
    comments = sortCommentsByName(comments);
    console.log('Sorted Comments:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
fetchAndProcessData();
