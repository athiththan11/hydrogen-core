'use strict';

const EasyTable = require('easy-table');

const { logger } = require('../utils/util.winston');
const HydrogenConfigMaps = require('../maps/map.hydrogen');

/**
 * method to generate docs and logs for the database drivers based on given database type
 *
 * @param {('postgre'|'mysql'|'mssql'|'oracle')} databaseType type of the database is being used
 */
function generateDBDriverDocs(databaseType) {
	if (process.env.HYDROGEN_DEBUG) logger.debug('Generating database driver docs');

	switch (databaseType.toLowerCase()) {
		case HydrogenConfigMaps.datasource.postgre:
			logger.info('Please download the Postgre JDBC Driver from ' + HydrogenConfigMaps.jdbcDrivers.postgre);
			break;
		case HydrogenConfigMaps.datasource.mysql:
			logger.info('Please download the MySQL JDBC Driver from ' + HydrogenConfigMaps.jdbcDrivers.mysql);
			break;
		case HydrogenConfigMaps.datasource.mssql:
			logger.info('Please download the MSSQL JDBC Driver from ' + HydrogenConfigMaps.jdbcDrivers.mssql);
			break;
		case HydrogenConfigMaps.datasource.oracle:
			logger.info('Please download the Oracle JDBC Driver from ' + HydrogenConfigMaps.jdbcDrivers.oracle);
			break;
	}
}

/**
 * method to generate docs for publish-multiple-gateway deployment layout
 *
 * @param {number} gwCount number of gateway nodes
 * @param {{}} layoutConfs layout configurations
 */
function generatePublishMultipleGatewayDocs(gwCount, layoutConfs) {
	if (process.env.HYDROGEN_DEBUG)
		logger.debug('Generating docs for deployment layout Publish through Multiple Gateways');

	let table = new EasyTable();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.publishMultipleGateway.aio);
	table.cell('port offset', 0);
	table.cell('port', HydrogenConfigMaps.ports._9443);
	table.newRow();
	for (let index = 0; index < gwCount; index++) {
		table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.publishMultipleGateway.gw_node + (index + 1));
		table.cell('port offset', layoutConfs.offset + index);
		table.cell('port', HydrogenConfigMaps.ports._9443 + (index + 1));
		table.newRow();
	}
	logger.info('\n\n' + table.toString() + '\n');
}

/**
 * method to generate docs for identity-server-as-key-manager deployment layout
 *
 * @param {{}} iskmlayoutConfs is-km layout configurations
 */
function generateIdentityServerasKMDocs(iskmlayoutConfs) {
	if (process.env.HYDROGEN_DEBUG)
		logger.debug('Generating docs for deployment layout Identity Server as Key Manager');

	let table = new EasyTable();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.iskm.apim);
	table.cell('port offset', 0);
	table.cell('port', HydrogenConfigMaps.ports._9443);
	table.newRow();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.iskm.iskm);
	table.cell('port offset', iskmlayoutConfs.offset);
	table.cell('port', HydrogenConfigMaps.ports._9443 + iskmlayoutConfs.offset);
	table.newRow();
	logger.info('\n\n' + table.toString() + '\n');
}

/**
 * method to generate docs to for distributed deployment layout
 *
 * @param {{}} distributedConfs distributed layout configurations
 */
function generateDistributedDocs(distributedConfs) {
	if (process.env.HYDROGEN_DEBUG) logger.debug('Generating docs for Distributed deployment layout');

	let table = new EasyTable();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.distributed.gateway);
	table.cell('port offset', distributedConfs.gatewaylayoutConfs.offset);
	table.cell('port', HydrogenConfigMaps.ports._9443 + distributedConfs.gatewaylayoutConfs.offset);
	table.newRow();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.distributed.keymanager);
	table.cell('port offset', distributedConfs.kmlayoutConfs.offset);
	table.cell('port', HydrogenConfigMaps.ports._9443 + distributedConfs.kmlayoutConfs.offset);
	table.newRow();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.distributed.publisher);
	table.cell('port offset', distributedConfs.publisherlayoutConfs.offset);
	table.cell('port', HydrogenConfigMaps.ports._9443 + distributedConfs.publisherlayoutConfs.offset);
	table.newRow();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.distributed.store);
	table.cell('port offset', distributedConfs.storelayoutConfs.offset);
	table.cell('port', HydrogenConfigMaps.ports._9443 + distributedConfs.storelayoutConfs.offset);
	table.newRow();
	table.cell('node', HydrogenConfigMaps.layoutNamePatterns.apim.distributed.trafficmanager);
	table.cell('port offset', distributedConfs.tmlayoutConfs.offset);
	table.cell('port', HydrogenConfigMaps.ports._9443 + distributedConfs.tmlayoutConfs.offset);
	table.newRow();
	logger.info('\n\n' + table.toString() + '\n');
}

exports.generateDBDriverDocs = generateDBDriverDocs;
exports.generatePublishMultipleGatewayDocs = generatePublishMultipleGatewayDocs;
exports.generateIdentityServerasKMDocs = generateIdentityServerasKMDocs;
exports.generateDistributedDocs = generateDistributedDocs;
