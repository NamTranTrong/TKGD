import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from 'url';
import path from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () =>
  console.log(`App is listening at http://localhost:${port}`)
);
