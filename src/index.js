const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const pool = require('./data/dbConfig.js');
const productRoutes = require('./routes/productRoutes');
const providerRoutes = require('./routes/providerRoutes');
const swaggerSetup = require('./swagger.js');
const port = 3000;

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
    connection.release();
  }
});

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use('/api/products', productRoutes);
app.use('/api/providers', providerRoutes);

swaggerSetup(app);


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
