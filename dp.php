<?php
    $target_file = "uploads/" . basename($_FILES["ftu"]["name"]);
    $ft = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    if($ft != "jpg" && $ft != "png" && $ft != "jpeg") {
        echo "Only .jpg, .png, .jpeg files can be submitted.";
    } else {
        if (move_uploaded_file($_FILES["ftu"]["tmp_name"], $target_file)) {
            echo basename( $_FILES["ftu"]["name"]). " has been uploaded.";
        } else {echo "An error occurred.";}
    }
?>