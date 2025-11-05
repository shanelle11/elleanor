// User credentials database
// You can add or modify users here
const users = [
    {
        username: "shanelle",
        password: "1234"
    },
    {
        username: "guest",
        password: "guest123"
    }
    // Add more users below:
    // {
    //     username: "yourname",
    //     password: "yourpassword"
    // }
];

// Function to validate credentials
function validateCredentials(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return {
            success: true,
            username: user.username
        };
    }
    return {
        success: false,
        message: "Invalid username or password"
    };
}
