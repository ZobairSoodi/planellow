<?php

require __DIR__ . '/init.php';
header("content-type: application/json");

$query = "SELECT * FROM tasks";

$query_execute = mysqli_query(connection(), $query);

if (!$query_execute) {
    $response = [
        'success' => false,
        'data' => []
    ];
    echo json_encode($response);
    exit();
}

$tasks = [];
while ($task = mysqli_fetch_assoc($query_execute)) {
    $tasks[] = $task;
}

$response = [
    'success' => true,
    'data' => $tasks,
];
echo json_encode($response);
