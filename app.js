const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.get('/', (req, res) => {
  const data = {
    title: 'Home',
    yourName: 'SREETHI',
    description: 'ARTIST', 
    currentYear: new Date().getFullYear(), 
    
  };

  res.render('index', data);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
