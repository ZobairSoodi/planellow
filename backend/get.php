<?php

require __DIR__ . '/init.php';
header("content-type: application/json");

$taskId = $_GET['id'];

$query = "SELECT * FROM tasks WHERE id = '{$taskId}'";

$query_execute = mysqli_query(connection(), $query);

if (!$query_execute) {
  $response = [
    'success' => false];
  echo json_encode($response);
  exit();
}

$response = [
    'success' => true,
    'data' => mysqli_fetch_assoc($query_execute)
  ];
echo json_encode($response);