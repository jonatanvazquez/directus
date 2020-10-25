<?php
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);


return [
    'database' => [
        'type' => 'mysql',
        'host' => $server,
        'port' => 3306,
        'name' => $db,
        'username' => $username,
        'password' => $password,
        'engine' => 'InnoDB',
        'charset' => 'utf8mb4',
        // Remove 'host' above when using sockets
        'socket' => '',
    ]
];
