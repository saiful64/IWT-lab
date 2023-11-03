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

    // Retrieve registration data
    $name = $_POST["name"];
    $username = $_POST["username"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password
    $phone = $_POST["phone"];
    $department = $_POST["department"];
    $course = $_POST["course"];

    // Prepare and execute an SQL INSERT statement
    $stmt = $conn->prepare("INSERT INTO users (name, username, password, phone, department, course) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $username, $password, $phone, $department, $course);

    if ($stmt->execute()) {
        // Registration successful
        header("Location: login.html");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
}
?>