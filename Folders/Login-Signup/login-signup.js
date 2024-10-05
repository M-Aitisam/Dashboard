document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("signupForm").classList.remove("active");
});

document.getElementById("signupBtn").addEventListener("click", function () {
    document.getElementById("signupForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
});

// Example submission logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Redirect to dashboard
    window.location.href = "../Folders/index.html"; 
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Handle signup logic here, then redirect
    window.location.href = "index.html"; // Replace with your dashboard URL
});
