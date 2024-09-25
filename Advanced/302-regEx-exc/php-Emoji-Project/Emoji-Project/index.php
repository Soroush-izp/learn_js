<?php

$string_text = "I Love PHP :) \n I am learning laravel framework :) \n PHP is the best :)";


// preg_replace('/:\)/', '😀', $string_text)

echo nl2br(preg_replace('/:\)/', '😀', $string_text));

?>