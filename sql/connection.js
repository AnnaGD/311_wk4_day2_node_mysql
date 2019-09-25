const mysql = require("mysql");

class Connection {
	constructor() {
		if (!this.pool) {
			console.log("creating connection...");
			this.pool = mysql.createPool({
				connectionLimit: 100,
				host: "35.232.187.33",
				user: "",
				password: "Anya120890",
				database: "admin"
			});

			return this.pool;
		}

		return this.pool;
	}
}

const instance = new Connection();

module.exports = instance;
