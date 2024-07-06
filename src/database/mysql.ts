// import dotenv from "dotenv";
// import mysql from "mysql2/promise";

// dotenv.config();

// const config = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   waitForConnections: true,
//   connectionLimit: 10,
// };

// console.log(config);

// const pool = mysql.createPool(config);

// export async function query(sql: string, params: any[]) {
//   try {
//     const conn = await pool.getConnection();
//     const result = await conn.execute(sql, params);
//     conn.release();
//     return result;
//   } catch (error) {
//     return null;
//   }
// }

import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
};

console.log(config);

const pool = mysql.createPool(config);


export async function query(sql: string, params: any[]) {
  try {
    const conn = await pool.getConnection();
    const result = await conn.execute(sql, params);
    conn.release();
    return result;
  } catch (error) {
    return null;
  }
}


// Función para validar la conexión a la base de datos
async function validarConexion() {
  try {
    // Intenta obtener una conexión directa al servidor de la base de datos
    const connection = await mysql.createConnection(config);
    await connection.connect();
    console.log('La conexión a la base de datos mysql es exitosa.');
    await connection.end(); // Cierra la conexión después de verificarla
  } catch (error) {
    console.error('Error al intentar conectar a la base de datos:', error);
  }
}


validarConexion();