const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the path to the 'views' folder where EJS templates will be stored
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder (replace 'public' with the name of your static files folder)
app.use(express.static(path.join(__dirname, 'public')));

// Your other routes and configurations go here

// ...


// Your other routes and configurations go here
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define the home page route
app.get('/', (req, res) => {
  const data = {
    title: 'Home',
    yourName: 'John Doe',
    description: 'Web Developer', // Add a description here
    currentYear: new Date().getFullYear(), // To show the current year in the footer
    // Add other data you want to display on the home page
  };

  res.render('index', data);
});

const port = 3000; // You can change this to any port you prefer

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
