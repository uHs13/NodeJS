const mysql = require('mysql');

class Sql {

    constructor() {

        this._connection;

        this.connectDatabase();

    }
    // .constructor

    get connection() {

        return this._connection;

    }
    // .get connection

    set connection(value) {

        this._connection = value;

    }
    // .set connection

    connectDatabase() {

        this.connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'sql123',
            database: 'news'
        });

    }
    // .connectDatabase

    query(query, params = []) {

        return new Promise((res, rej) => {

            this.connection.query(
                query, params,
                (error, results) => {

                    if (error) rej(error);

                    res(results['0']);

                });

        });

    }
    // .query

}
// .Sql

module.exports = Sql;