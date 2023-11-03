<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "department";

    $conn = new mysqli($host, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $username = $_POST["username"];
    $password = $_POST["password"];

    // Prepare and execute an SQL SELECT statement
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        // Verify the password
        if (password_verify($password, $row["password"])) {
            // Password is correct, create a session and redirect to a secure page
            session_start();
            $_SESSION["user_id"] = $row["id"];
            $_SESSION["user_name"] = $row["username"];
            header("Location: dashboard.php");
            exit;
        } else {
            // Display the alert using JavaScript
            echo '<script>alert("Incorrect password. Please try again.");</script>';
            // Delay the redirection by a few seconds
            echo '<script>setTimeout(function(){ window.location = "login.html"; });</script>';
        }
    } else {
        echo '<script>alert("Invalid Credentials. Please try again.");</script>';
        echo '<script>setTimeout(function(){ window.location = "login.html"; });</script>';
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
}

?>
