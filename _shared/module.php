<?php
// Retrieve the session if the url is used instead of cookies
if (@$_REQUEST['token']) {
    session_id($_REQUEST['token']);
}
session_start();

$filename = $_GET["file"];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $code = file_get_contents('php://input');
    $_SESSION[$filename] = $code;

    header('Content-Type: application/json');
    echo json_encode(array("success" => true));
}
else {
    header('Content-Type: application/javascript');
    echo $_SESSION[$filename];
}
