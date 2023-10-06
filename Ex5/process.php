<?php
$host = "localhost:3307";
$username = "root";
$password = "";
$dbname = "emp";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $joining_date = $_POST["joining_date"];
    $gender = $_POST["gender"];
    $hobbies = implode(", ", $_POST["hobbies"]); // Convert hobbies array to a comma-separated string
    $designation = $_POST["designation"]; 

    $sql = "INSERT INTO employee (first_name, last_name, email, phone, joining_date, address, gender, hobbies, designation)
            VALUES ('$first_name', '$last_name', '$email', '$phone', '$joining_date', '$address', '$gender', '$hobbies', '$designation')";

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>