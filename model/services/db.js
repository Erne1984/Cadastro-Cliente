async function connect() {
    // Confirma se está concetado com a variavel
    if(global.connection && global.connection.state !== "disconnected")
        return global.connection
    
    const mysql = require ("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/web2");
    console.log("conectou no MySQL")
    global.connection = connection;
    return connection
}

async function selectUsuario() {
    const conn = await connect();
    const [rows] = await conn.query('slect * from usuario;')
    return rows;
}

module.exports = {selectUsuario}