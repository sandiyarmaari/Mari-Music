<?php
$name = $_POST["name"];
$pass = $_POST["pass"];


if (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/', $pass)) {
    echo "<script>";
    echo "alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');";
    echo "window.location.href = 'authentication.html';";
    echo "</script>";
    exit();
}

// $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

$conn = mysqli_connect("localhost", "root", "", "music");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO authentication (name, pass) VALUES (?,  ?)");
    $stmt->bind_param("ss", $name, $pass);
    $stmt->execute();
    echo "<script>";
    echo "alert('Successfully Signed Up ');";
    echo "window.location.href = 'home.html';";
    echo "</script>";
    $stmt->close();
    $conn->close();
}
?>
