<?php

require __DIR__ .'/library.php';

$task = new Panorama();




echo $task->getItems($_GET['id']);

