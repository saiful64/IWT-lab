
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <style>
       ul.navbar {
        list-style-type: none;
        margin: 0;
        padding: 0;
        background-color: #333;
        overflow: hidden;
      }

      li.nav-item {
        float: left;
      }

      li.nav-item a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      li.nav-item a:hover {
        background-color: #ddd;
        color: black;
      }
    </style>
</head>
<body>

<div class="header">
    <ul class="navbar">
        <li class="nav-item"><a href="index.html">Home</a></li>
        <li class="nav-item"><a href="about.html">About Us</a></li>
      </ul>
    
    <?php 
    session_start();
      $user = $_SESSION["user_name"];  
    ?>
    <h1>Welcome <?php  echo $user ?></h1>
</div>

</div>

</body>
</html>
