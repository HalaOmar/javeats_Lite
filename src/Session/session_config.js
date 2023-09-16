const express_session = require('express-session');
const { col } = require('sequelize');
const MySQLStore = require('express-mysql-session')(express_session);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];

const options = {
	host: config.host,
	port: 3306,
	user: config.username,
	password: config.password,
	database: config.database,
	createDatabaseTable: true,
	schema: {
		tableName: 'custom_sessions',
		columnNames: {
			session_id: 'custom_session_id',
			expires: 'custom_expires_column_name',
			data: 'custom_data_column_name'
		}
	}
};

const sessionStore = new MySQLStore(options);

sessionStore.onReady().then(() => {
	// MySQL session store ready for use.
	console.log('MySQLStore ready');
}).catch(error => {
	// Something went wrong.
	console.error(error);
});

module.exports = () => {
	
    return express_session({
        
            key: process.env.SESSION_KEY,
            secret: process.env.SESSION_SECRET,
            store: sessionStore,
            resave: false,
            saveUninitialized: false
        } )
}