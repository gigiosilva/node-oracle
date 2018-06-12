var oracledb = require('oracledb');
require('dotenv').config();

//Criar arquivo .env com as configs
//DB_USER=user
//DB_PASS=pass
//DB_HOST=host:post/instancia

oracledb.getConnection(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        connectString: process.env.DB_HOST
    },
    function (err, connection) {
        if (err) { console.error(err); return; }
        connection.execute(
            "SELECT count(1) from AHX_AIRCRAFT",
            function (err, result) {
                if (err) { console.error(err); return; }
                console.log(result.rows);
            });
    }
);