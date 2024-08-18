<?php
// Set the content type to JSON
header('Content-Type: application/json');

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Check if 'text' is provided in the request body
    if (isset($data['text'])) {
        // Specify the file path
        $filePath = 'output.txt';

        // Write the text to the file
        if (file_put_contents($filePath, $data['text'])) {
            // Respond with success
            echo json_encode(['message' => 'File written successfully', 'filePath' => $filePath]);
        } else {
            // Respond with an error if the file couldn't be written
            http_response_code(500);
            echo json_encode(['error' => 'Failed to write to file']);
        }
    } else {
        // Respond with an error if 'text' is missing
        http_response_code(400);
        echo json_encode(['error' => 'Text is required']);
    }
} else {
    // Respond with an error if the request method is not POST
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
