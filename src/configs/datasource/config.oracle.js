'use strict';

/**
 * method to retrieve Oracle datasource config strings
 *
 * @param {*} platform wso2 platform ['apim', 'iam']
 * @returns datasource configurations
 */
function getDatasourceConfigs(platform) {
	let args = {
		_connectionUrl: 'jdbc:oracle:thin:@localhost:1521/wso2oracle',
		_defaultAutoCommit: 'false',
		_description: 'The datasource used for registry and user manager',
		_driver: 'oracle.jdbc.OracleDriver',
		_jndiName: 'jdbc/WSO2OracleCarbonDB',
		_maxActive: '80',
		_maxWait: '60000',
		_minIdle: '5',
		_name: 'WSO2_ORACLE_CARBON_DB',
		_password: 'hydrogen',
		_testOnBorrow: 'true',
		_username: 'oracle',
		_validationInterval: '30000',
		_validationQuery: 'SELECT 1 FROM DUAL',
	};

	if (platform === 'apim') {
		args._connectionUrl = 'jdbc:oracle:thin:@localhost:1521/wso2oracle';
		args._defaultAutoCommit = 'true';
		args._description = 'The datasource used for API Manager database';
		args._jndiName = 'jdbc/WSO2AM_DB';
		args._maxActive = '100';
		args._name = 'WSO2AM_DB';
	}
}

exports.getDatasourceConfigs = getDatasourceConfigs;
