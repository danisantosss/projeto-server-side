import mysql2 from "mysql2/promise"

async function connect() {
    if(global.connection && global.connection.state !== "disconnected")
        return global.connection

    const mysql = mysql2
    const connection = await mysql.createConnection("mysql://root:1234@localhost:3305/n2");

    console.log("Conectando ao SGBD MySQL")
    global.connection = connection
    return connection
    }
    connect()
    export default connect