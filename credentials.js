// user database - stores all valid usernames and passwords
// this is a simple array of objects
const users = [
    {
        username: "shanelle",
        password: "1234"
    },
    {
        username: "guest",
        password: "guest123"
    }
    // you can add more users like this:
    // {
    //     username: "yourname",
    //     password: "yourpassword"
    // }
];

// function that checks if username and password match
function validateCredentials(username, password) {
    // searches through users array to find a match
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // if match found, return success
        return {
            success: true,
            username: user.username
        };
    }
    
    // if no match found, return error
    return {
        success: false,
        message: "Invalid username or password"
    };
}
