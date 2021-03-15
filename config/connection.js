var mysql = require("mysql");



var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{connection = mysql.createConnection({
  host: "td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "j9jiru66jhmy8t1t",
  password: "x7euixyttz76eq97",
  database: "y99cgjb4yv1ayqg2"
});
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;