<!-- Object Create To The Json Data -->
<?php
    $myObj = new stdClass();
    $myObj->name = "John";
    $myObj->age = 30;
    $myObj->city = "New York";

    $myJSON = json_encode($myObj);

    echo $myJSON;
?> 

<!-- Array Create To The Json Data -->

<?php
    $myArr = array("John", "Mary", "Peter", "Sally");

    $myJSON = json_encode($myArr);

    echo $myJSON;
?>
