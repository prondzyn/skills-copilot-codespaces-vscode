// Create web server
// 1. Create a web server
// 2. Create a route to handle comment creation
// 3. Create a route to handle comment listing
// 4. Create a route to handle comment update
// 5. Create a route to handle comment deletion
// 6. Start the server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

// Create a route to handle comment creation
app.post('/comments', (req, res) => {
  // Create a comment
  const comment = {
    id: 1,
    content: req.body.content
  };

  res.status(201).json(comment);
});

// Create a route to handle comment listing
app.get('/comments', (req, res) => {
  // List all comments
  const comments = [
    {
      id: 1,
      content: 'Hello, World!'
    }
  ];

  res.status(200).json(comments);
});

// Create a route to handle comment update
app.put('/comments/:id', (req, res) => {
  // Update a comment
  const comment = {
    id: req.params.id,
    content: req.body.content
  };

  res.status(200).json(comment);
});

// Create a route to handle comment deletion
app.delete('/comments/:id', (req, res) => {
  // Delete a comment
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});