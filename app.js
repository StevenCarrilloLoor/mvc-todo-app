const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Conexión a MongoDB local
mongoose.connect('mongodb://localhost:27017/tododb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('? Conectado a MongoDB'))
    .catch(err => console.error('? Error de conexión:', err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`?? Servidor escuchando en puerto ${PORT}`));
