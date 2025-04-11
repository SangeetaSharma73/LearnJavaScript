# Promises

Must watch: https://www.youtube.com/watch?v=kKGduK6YrmQ [specially the second half for Promises in depth]

## Open APIs

- https://jsonplaceholder.typicode.com/
- https://reqres.in/

## What is Promise?

In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It provides a more structured and efficient way to handle asynchronous operations compared to using callback functions.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a46c2445-d612-403d-8fc0-4024d3c6dd8a/0016ffc2-8d9a-4716-b629-91214b1c46cf/image.png)

**Synchronous Example:** 

- Fans ask for the release date of the next album and
- she gives them the **date** immediately

**Asynchronous Example:** 

- Fans ask for the **release date** of the next album
- She gives them back a **promise** {unfulfilled}
- The promise may **resolve** in the future with a date {fulfilled}
- The promise may **reject** in the future with an error {fulfilled}

## fetch() returns a promise & not a value

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 

## Promises in action

The Fetch API provides a modern interface for making HTTP requests in JavaScript. It returns a promise that resolves to the response of the request. Promises and `async/await` syntax allow you to handle asynchronous operations in a more readable and manageable way.

In this tutorial, we'll learn how to:

- Fetch a list of users.
- Fetch the first user and use their `id` to fetch their posts.
- Fetch the first user's last post and the comments on that post.
- Write separate code for filtering and sorting data.
- Use both Promise chaining and `async/await` syntax.

---

# 1. Fetching a List of Users

First, we'll fetch a list of users from the JSONPlaceholder API and log them to the console.

### Code Example

```jsx
// Fetch the list of users and log them to the console
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log('List of Users:', users);
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });

```

### Explanation

1. **Initiate the Fetch Request**
    
    ```jsx
    fetch('https://jsonplaceholder.typicode.com/users')
    
    ```
    
    - Initiates a GET request to the specified URL to fetch the list of users.
2. **Parse the Response**
    
    ```jsx
    .then(response => response.json())
    
    ```
    
    - Parses the JSON from the response.
3. **Handle the Data**
    
    ```jsx
    .then(users => {
      console.log('List of Users:', users);
    })
    
    ```
    
    - Logs the list of users to the console.
4. **Error Handling**
    
    ```jsx
    .catch(error => {
      console.error('Error fetching users:', error);
    });
    
    ```
    
    - Catches any errors that occur during the fetch or parsing process.

---

# 2. Fetching the First User's Posts

Next, we'll fetch the first user from the list and then fetch their posts using their `id`.

### Code Example

```jsx
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

```

### Explanation

1. **Fetch the List of Users**
    - Same as in step 1.
2. **Get the First User**
    
    ```jsx
    const firstUser = users[0];
    console.log('First User:', firstUser);
    
    ```
    
    - Retrieves the first user from the array.
3. **Fetch the First User's Posts**
    
    ```jsx
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
    
    ```
    
    - Fetches posts for the first user using their `id`.
4. **Parse and Handle the Posts**
    
    ```jsx
    .then(response => response.json())
    .then(posts => {
      console.log("First User's Posts:", posts);
    })
    
    ```
    
    - Parses the posts and logs them.

---

# 3. Fetching the Last Post and Its Comments

Now, we'll fetch the last post of the first user and then fetch the comments on that post.

### Code Example

```jsx
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

```

### Explanation

1. **Fetch the First User and Their Posts**
    - Same as in step 2.
2. **Get the Last Post**
    
    ```jsx
    const lastPost = posts[posts.length - 1];
    console.log('Last Post:', lastPost);
    
    ```
    
    - Retrieves the last post from the posts array.
3. **Fetch Comments of the Last Post**
    
    ```jsx
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
    
    ```
    
    - Fetches comments for the last post using its `id`.
4. **Parse and Handle the Comments**
    
    ```jsx
    .then(response => response.json())
    .then(comments => {
      console.log('Comments on Last Post:', comments);
    })
    
    ```
    
    - Parses the comments and logs them.

---

# 4. Filtering Data

Let's write separate code for filtering data. We'll create a function that filters posts based on a keyword in the title.

### Code Example

```jsx
// Function to filter posts by a keyword in the title
function filterPostsByKeyword(posts, keyword) {
  return posts.filter(post => post.title.includes(keyword));
}

// Usage example
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const keyword = 'eum';
    const filteredPosts = filterPostsByKeyword(posts, keyword);
    console.log(`Posts containing "${keyword}":`, filteredPosts);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Explanation

1. **Define the Filter Function**
    
    ```jsx
    function filterPostsByKeyword(posts, keyword) {
      return posts.filter(post => post.title.includes(keyword));
    }
    
    ```
    
    - Filters the `posts` array to include only posts where the title contains the `keyword`.
2. **Fetch Posts and Apply Filter**
    - Fetches all posts and applies the `filterPostsByKeyword` function.
3. **Log the Filtered Posts**
    
    ```jsx
    console.log(`Posts containing "${keyword}":`, filteredPosts);
    
    ```
    
    - Logs the filtered posts to the console.

---

# 5. Sorting Data

Similarly, we'll write separate code for sorting data. We'll create a function that sorts comments based on the `name` property.

### Code Example

```jsx
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

```

### Explanation

1. **Define the Sort Function**
    
    ```jsx
    function sortCommentsByName(comments) {
      return comments.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    ```
    
    - Sorts the `comments` array based on the `name` property using `localeCompare`.
2. **Fetch Comments and Apply Sorting**
    - Fetches all comments and applies the `sortCommentsByName` function.
3. **Log the Sorted Comments**
    
    ```jsx
    console.log('Comments sorted by name:', sortedComments);
    
    ```
    
    - Logs the sorted comments to the console.

---

# 6. Using Async/Await Syntax

Now, let's rewrite the previous examples using `async/await` syntax for cleaner and more readable code.

## 6.1 Fetching the First User's Posts Using Async/Await

### Code Example

```jsx
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

```

### Explanation

1. **Define an Async Function**
    
    ```jsx
    async function fetchFirstUsersPosts() { ... }
    
    ```
    
    - The `async` keyword allows the use of `await` inside the function.
2. **Use `await` to Fetch Users**
    
    ```jsx
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    
    ```
    
    - Waits for the fetch to complete and the response to be parsed.
3. **Fetch Posts of the First User**
    - Similar to fetching users, we fetch posts using `await`.
4. **Error Handling**
    
    ```jsx
    } catch (error) {
      console.error('Error:', error);
    }
    
    ```
    
    - Uses a `try...catch` block to handle errors.

## 6.2 Fetching the Last Post and Its Comments Using Async/Await

### Code Example

```jsx
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

```

### Explanation

- Similar to the previous example, but includes fetching the comments of the last post.

## 6.3 Filtering and Sorting with Async/Await

Let's combine filtering and sorting with `async/await`.

### Code Example

```jsx
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

```

### Explanation

- Combines filtering and sorting functions with async/await syntax.
- Error handling is done using a `try...catch` block.

---

# 7. Conclusion

In this tutorial, we've covered:

- How to use the Fetch API to make HTTP requests.
- How to handle asynchronous operations using promises and `async/await`.
- How to fetch data from an API and chain fetch requests.
- How to write separate functions for filtering and sorting data.
- How to rewrite code using `async/await` for cleaner syntax.

---

# Additional Notes

- **Async/Await vs Promises**: `async/await` is syntactic sugar over promises and can make asynchronous code more readable.
- **Error Handling**: When using `async/await`, use `try...catch` blocks to handle errors.
- **Modular Code**: Writing separate functions for filtering and sorting promotes code reusability and cleanliness.
- **API Limitations**: When working with APIs, be mindful of rate limits and handle errors gracefully.

---

Feel free to experiment with the code examples and adapt them to your own projects. Happy coding!

# Practice Exercises with Fetch API and Async/Await using JSONPlaceholder API

To further practice using the Fetch API, promises, and `async/await`, we'll work with different endpoints from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API. Specifically, we'll:

- Fetch a list of albums.
- Fetch the user associated with the first album.
- Fetch posts by that user.
- Fetch the last post by that user and its comments.
- Write separate code for filtering and sorting data.
- Use both Promise chaining and `async/await` syntax.

---

# 1. Fetching a List of Albums

We'll start by fetching a list of albums from the API.

### Code Example

```jsx
// Fetch the list of albums and log them to the console
fetch('<https://jsonplaceholder.typicode.com/albums>')
  .then(response => response.json())
  .then(albums => {
    console.log('List of Albums:', albums);
  })
  .catch(error => {
    console.error('Error fetching albums:', error);
  });

```

### Explanation

1. **Initiate the Fetch Request**
    
    ```jsx
    fetch('<https://jsonplaceholder.typicode.com/albums>')
    
    ```
    
    - Sends a GET request to retrieve the list of albums.
2. **Parse the Response**
    
    ```jsx
    .then(response => response.json())
    
    ```
    
    - Parses the JSON from the response.
3. **Handle the Data**
    
    ```jsx
    .then(albums => {
      console.log('List of Albums:', albums);
    })
    
    ```
    
    - Logs the list of albums to the console.
4. **Error Handling**
    
    ```jsx
    .catch(error => {
      console.error('Error fetching albums:', error);
    });
    
    ```
    
    - Catches and logs any errors that occur during the fetch or parsing process.

---

# 2. Fetching the User of the First Album

Next, we'll fetch the user associated with the first album in the list.

### Code Example

```jsx
// Fetch the list of albums
fetch('<https://jsonplaceholder.typicode.com/albums>')
  .then(response => response.json())
  .then(albums => {
    // Get the first album
    const firstAlbum = albums[0];
    console.log('First Album:', firstAlbum);

    // Fetch the user associated with the first album
    return fetch(`https://jsonplaceholder.typicode.com/users/${firstAlbum.userId}`);
  })
  .then(response => response.json())
  .then(user => {
    console.log('User of First Album:', user);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Explanation

1. **Fetch the List of Albums**
    - Same as in step 1.
2. **Get the First Album**
    
    ```jsx
    const firstAlbum = albums[0];
    console.log('First Album:', firstAlbum);
    
    ```
    
    - Retrieves the first album from the array.
3. **Fetch the User**
    
    ```jsx
    return fetch(`https://jsonplaceholder.typicode.com/users/${firstAlbum.userId}`);
    
    ```
    
    - Fetches the user associated with the `userId` from the first album.
4. **Parse and Handle the User Data**
    
    ```jsx
    .then(response => response.json())
    .then(user => {
      console.log('User of First Album:', user);
    })
    
    ```
    
    - Parses the user data and logs it.

---

# 3. Fetching Posts by the User

Now, we'll fetch posts made by the user of the first album.

### Code Example

```jsx
// Fetch the list of albums
fetch('<https://jsonplaceholder.typicode.com/albums>')
  .then(response => response.json())
  .then(albums => {
    const firstAlbum = albums[0];
    console.log('First Album:', firstAlbum);

    // Fetch the user associated with the first album
    return fetch(`https://jsonplaceholder.typicode.com/users/${firstAlbum.userId}`)
      .then(response => response.json())
      .then(user => {
        console.log('User of First Album:', user);

        // Fetch posts by the user
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      });
  })
  .then(response => response.json())
  .then(posts => {
    console.log('Posts by User:', posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Explanation

1. **Fetch the User**
    - Same as in step 2.
2. **Fetch Posts by the User**
    
    ```jsx
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    
    ```
    
    - Fetches posts where `userId` matches the user's `id`.
3. **Parse and Handle the Posts**
    
    ```jsx
    .then(response => response.json())
    .then(posts => {
      console.log('Posts by User:', posts);
    })
    
    ```
    
    - Parses and logs the posts.

---

# 4. Fetching the Last Post and Its Comments

We'll fetch the last post made by the user and then fetch comments on that post.

### Code Example

```jsx
// Fetch the list of albums
fetch('<https://jsonplaceholder.typicode.com/albums>')
  .then(response => response.json())
  .then(albums => {
    const firstAlbum = albums[0];
    console.log('First Album:', firstAlbum);

    // Fetch the user associated with the first album
    return fetch(`https://jsonplaceholder.typicode.com/users/${firstAlbum.userId}`)
      .then(response => response.json())
      .then(user => {
        console.log('User of First Album:', user);

        // Fetch posts by the user
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
          .then(response => response.json())
          .then(posts => {
            console.log('Posts by User:', posts);

            // Get the last post
            const lastPost = posts[posts.length - 1];
            console.log('Last Post by User:', lastPost);

            // Fetch comments of the last post
            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
          });
      });
  })
  .then(response => response.json())
  .then(comments => {
    console.log('Comments on Last Post:', comments);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Explanation

1. **Fetch Posts by the User**
    - Same as in step 3.
2. **Get the Last Post**
    
    ```jsx
    const lastPost = posts[posts.length - 1];
    console.log('Last Post by User:', lastPost);
    
    ```
    
    - Retrieves the last post from the posts array.
3. **Fetch Comments on the Last Post**
    
    ```jsx
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
    
    ```
    
    - Fetches comments where `postId` matches the last post's `id`.
4. **Parse and Handle the Comments**
    
    ```jsx
    .then(response => response.json())
    .then(comments => {
      console.log('Comments on Last Post:', comments);
    })
    
    ```
    
    - Parses and logs the comments.

---

# 5. Filtering and Sorting Data

We'll write separate functions for filtering and sorting posts and comments.

## 5.1 Filtering Posts by Keyword

### Code Example

```jsx
// Function to filter posts by a keyword in the title
function filterPostsByKeyword(posts, keyword) {
  return posts.filter(post => post.title.includes(keyword));
}

// Usage example
fetch('<https://jsonplaceholder.typicode.com/posts>')
  .then(response => response.json())
  .then(posts => {
    const keyword = 'qui';
    const filteredPosts = filterPostsByKeyword(posts, keyword);
    console.log(`Posts containing "${keyword}":`, filteredPosts);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Explanation

- **filterPostsByKeyword**: Filters the posts array to include only posts where the title contains the specified keyword.

## 5.2 Sorting Comments by Email

### Code Example

```jsx
// Function to sort comments by email
function sortCommentsByEmail(comments) {
  return comments.sort((a, b) => a.email.localeCompare(b.email));
}

// Usage example
fetch('<https://jsonplaceholder.typicode.com/comments>')
  .then(response => response.json())
  .then(comments => {
    const sortedComments = sortCommentsByEmail(comments);
    console.log('Comments sorted by email:', sortedComments);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Explanation

- **sortCommentsByEmail**: Sorts the comments array based on the `email` property using `localeCompare`.

---

# 6. Using Async/Await Syntax

Let's rewrite the previous examples using `async/await` for cleaner code.

## 6.1 Fetching the User and Their Posts

### Code Example

```jsx
// Async function to fetch the user of the first album and their posts
async function fetchUserAndPosts() {
  try {
    // Fetch the list of albums
    const albumsResponse = await fetch('<https://jsonplaceholder.typicode.com/albums>');
    const albums = await albumsResponse.json();
    const firstAlbum = albums[0];
    console.log('First Album:', firstAlbum);

    // Fetch the user associated with the first album
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstAlbum.userId}`);
    const user = await userResponse.json();
    console.log('User of First Album:', user);

    // Fetch posts by the user
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    console.log('Posts by User:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
fetchUserAndPosts();

```

### Explanation

1. **Define an Async Function**
    
    ```jsx
    async function fetchUserAndPosts() { ... }
    
    ```
    
2. **Use `await` to Fetch Data**
    - Fetches albums, user, and posts sequentially using `await`.
3. **Error Handling**
    
    ```jsx
    } catch (error) {
      console.error('Error:', error);
    }
    
    ```
    

## 6.2 Fetching the Last Post and Its Comments

### Code Example

```jsx
// Async function to fetch the last post and its comments
async function fetchLastPostAndComments() {
  try {
    // Fetch the list of albums
    const albumsResponse = await fetch('<https://jsonplaceholder.typicode.com/albums>');
    const albums = await albumsResponse.json();
    const firstAlbum = albums[0];

    // Fetch the user associated with the first album
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstAlbum.userId}`);
    const user = await userResponse.json();

    // Fetch posts by the user
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();

    // Get the last post
    const lastPost = posts[posts.length - 1];

    // Fetch comments of the last post
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
    const comments = await commentsResponse.json();

    console.log('Last Post by User:', lastPost);
    console.log('Comments on Last Post:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
fetchLastPostAndComments();

```

### Explanation

- Uses `async/await` to sequentially fetch the last post and its comments.

## 6.3 Filtering and Sorting with Async/Await

### Code Example

```jsx
// Function to filter posts by a keyword in the body
function filterPostsByKeyword(posts, keyword) {
  return posts.filter(post => post.body.includes(keyword));
}

// Function to sort comments by name
function sortCommentsByName(comments) {
  return comments.sort((a, b) => a.name.localeCompare(b.name));
}

// Async function to fetch and process data
async function fetchAndProcessData() {
  try {
    // Fetch posts
    const postsResponse = await fetch('<https://jsonplaceholder.typicode.com/posts>');
    let posts = await postsResponse.json();

    // Filter posts by keyword
    const keyword = 'voluptate';
    posts = filterPostsByKeyword(posts, keyword);
    console.log(`Filtered Posts containing "${keyword}":`, posts);

    // Fetch comments of the first filtered post
    if (posts.length > 0) {
      const post = posts[0];
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
      let comments = await commentsResponse.json();

      // Sort comments by name
      comments = sortCommentsByName(comments);
      console.log('Sorted Comments:', comments);
    } else {
      console.log('No posts found with the specified keyword.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
fetchAndProcessData();

```

### Explanation

- Filters posts by a keyword in the body.
- Sorts comments by name.
- Uses `async/await` for asynchronous operations.

---

# Conclusion

In these practice exercises, we've:

- Used different endpoints from the JSONPlaceholder API.
- Practiced making chained fetch requests using both Promise chaining and `async/await`.
- Wrote separate functions for filtering and sorting data.
- Enhanced our understanding of handling asynchronous operations in JavaScript.

---

# Additional Practice Suggestions

Feel free to further practice by:

- **Fetching Photos of an Album**: Fetch the photos associated with the first album.
    
    ```jsx
    // Fetch photos of the first album
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${firstAlbum.id}`)
      .then(response => response.json())
      .then(photos => {
        console.log('Photos in First Album:', photos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
    
    ```
    
- **Combining Data**: Combine data from multiple endpoints, such as displaying posts along with the name of the user who created them.
- **Error Scenarios**: Intentionally cause errors (e.g., use an invalid URL) to practice error handling.
- **Async/Await with Parallel Requests**: Use `Promise.all` with `async/await` to make parallel requests.
    
    ```jsx
    // Fetch multiple resources in parallel
    async function fetchMultipleResources() {
      try {
        const [usersResponse, postsResponse] = await Promise.all([
          fetch('<https://jsonplaceholder.typicode.com/users>'),
          fetch('<https://jsonplaceholder.typicode.com/posts>')
        ]);
    
        const users = await usersResponse.json();
        const posts = await postsResponse.json();
    
        console.log('Users:', users);
        console.log('Posts:', posts);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    fetchMultipleResources();
    
    ```
    

---

# Final Notes

- **API Documentation**: Refer to the [JSONPlaceholder API documentation](https://jsonplaceholder.typicode.com/) to explore more endpoints and parameters.
- **Practice Makes Perfect**: The more you practice fetching and manipulating data, the more comfortable you'll become with asynchronous JavaScript.
- **Explore Error Handling**: Robust error handling is crucial in real-world applications. Always consider how your code will handle network failures or unexpected responses.

Happy coding!