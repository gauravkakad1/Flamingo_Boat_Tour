const express = require('express');
const path = require('path');
const { popularHighlights, packagesData, galleryData } = require('./data');
const app = express();
const port = 5000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'assets' directory
app.use(express.static(path.join(__dirname, 'assets')));


// Define routes
app.get('/', (req, res) => {
    // Render index.ejs

    res.render('index', { popularHighlights, packagesData, galleryData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

