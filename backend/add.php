<?php

require __DIR__ . '/init.php';
header("content-type: application/json");

$data = $_POST;

$task = new stdClass();

$task->title = $data['title'];
$task->description = $data['description'];
$task->from_date = $data['from_date'];
$task->to_date = $data['to_date'];
$task->is_important = $data['is_important'];

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
