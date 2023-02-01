<?php

require __DIR__ . '/init.php';
header("content-type: application/json");

$data = $_POST;
$taskId = $_GET['id'];

$task = new stdClass();

$task->title = $data['title'];
$task->description = $data['description'];
$task->from_date = $data['from_date'];
$task->to_date = $data['to_date'];
$task->is_important = $data['is_important'];
$task->status = $data['status'];

$query = "UPDATE tasks SET title = '{$task->title}', description = '{$task->description}', from_date = '{$task->from_date}', to_date = '{$task->to_date}', is_important = '{$task->is_important}', status = '{$task->status}' WHERE id = '{$taskId}'";

$query_execute = mysqli_query(connection(), $query);

if (!$query_execute) {
  $response = [
    'success' => false];
  echo json_encode($response);
  exit();
}

$response = [
    'success' => true
  ];
echo json_encode($response);