<?php

require __DIR__ . '/init.php';
header("content-type: application/json");

$task = new stdClass();

$task->title = $_POST['title'];
$task->description = $_POST['description'];
$task->from_date = $_POST['from_date'];
$task->to_date = $_POST['to_date'];
$task->is_important = $_POST['is_important'];

$query = "INSERT INTO tasks(title, description, from_date, to_date, is_important) VALUES('{$task->title}', '{$task->description}', '{$task->from_date}', '{$task->to_date}', '{$task->is_important}')";

$query_execute = mysqli_query(connection(), $query);

if (!$query_execute) {
    $response = [
        'success' => false
    ];
    echo json_encode($response);
    exit();
}

$response = [
    'success' => true
];
echo json_encode($response);
