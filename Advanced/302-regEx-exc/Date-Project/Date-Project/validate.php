<?php

// echo $_POST['username'] . '<br />' . $_POST['date'];

$username = $_POST['username'];
$date = $_POST['date'];

// preg_match('/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/', $date) => Boolean (true, false)

$date_regex_result = preg_match('/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/', $date);

if ($date_regex_result) {
    echo 'Date is valid :)';
} else {
    echo 'Date is inValid :(';
}

?>