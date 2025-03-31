🚀 JavaScript LocalStorage (With Examples!)
LocalStorage is a browser storage that lets you store data even after the user closes the browser.

✅ Key Features
🔹 Stores data in key-value pairs.
🔹 Data does not expire (remains until manually removed).
🔹 Stores only strings (must convert objects).

📌 Basic Methods of LocalStorage
Method	Description
localStorage.setItem(key, value)	Stores a value with a key
localStorage.getItem(key)	Retrieves the value by key
localStorage.removeItem(key)	Deletes a specific key-value pair
localStorage.clear()	Removes all stored data
localStorage.length	Returns the number of stored items
localStorage.key(index)	Gets key by index
🔹 Example 1: Storing & Retrieving Simple Data
javascript
Copy
Edit
// Store data
localStorage.setItem("username", "Sangeeta");

// Retrieve data
let user = localStorage.getItem("username");
console.log(user); // Output: Sangeeta

// Remove a key
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
🔹 Example 2: Storing & Retrieving Objects
LocalStorage only stores strings, so we must convert objects using JSON.stringify() and JSON.parse().

javascript
Copy
Edit
// Create an object
let user = {
    name: "Sangeeta",
    age: 10,
    city: "Delhi"
};

// Store object (convert to string)
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object (convert back to object)
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // Output: Sangeeta
🔹 Example 3: Saving a To-Do List in LocalStorage
html
Copy
Edit
<!DOCTYPE html>
<html lang="en">
<head>
    <title>To-Do List with LocalStorage</title>
</head>
<body>
    <h2>To-Do List</h2>
    <input type="text" id="task" placeholder="Enter a task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>

    <script>
        function addTask() {
            let taskInput = document.getElementById("task").value;

            if (taskInput) {
                let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                tasks.push(taskInput);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                displayTasks();
            }
        }

        function displayTasks() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            tasks.forEach((task, index) => {
                let li = document.createElement("li");
                li.innerText = task;
                taskList.appendChild(li);
            });
        }

        // Display tasks when page loads
        displayTasks();
    </script>
</body>
</html>
✅ Your tasks will remain saved even if you refresh the page! 🎉

📌 When to Use LocalStorage?
✅ Store user preferences (dark mode, language settings).
✅ Save form data so users don’t lose progress.
✅ Cache API responses to reduce server requests.
✅ Store game scores, to-do lists, shopping cart items.

📌 Limitations of LocalStorage
❌ Only strings (must convert objects).
❌ Maximum storage: ~5MB per domain.
❌ Not secure (avoid storing passwords or sensitive data).
❌ Synchronous (can slow down the page if overused).

🔥 Next Step
Would you like to create a login system using LocalStorage? Let me know! 🚀😃








