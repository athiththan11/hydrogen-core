'use strict';

//#region publish-through-multiple-gateway layout

let environmentConfs = [
	{
		type: 'production',
		'api-console': true,
		_name: 'Production environment one',
		_description: 'a sample environment',
		_hostname: 'localhost',
		username: 'admin',
		password: 'admin',
		offset: 1,
	},
	{
		type: 'staging',
		'api-console': true,
		_name: 'Staging environment one',
		_description: 'a sample stage environment',
		_hostname: 'localhost',
		username: 'admin',
		password: 'admin',
		offset: 2,
	},
];

let layoutConfs = {
	_hostname: 'https://localhost',
	thriftClientPort: '10397',
	enableThriftServer: 'false',
	offset: 0,
};

let publishmultiplegatewayConfs = {
	environmentConfs: environmentConfs,
	layoutConfs: layoutConfs,
};

//#endregion

//#region is-km layout

let apimlayoutConfs = {
	_hostname: 'https://localhost',
	keyValidatorClientType: 'WSClient',
	enableThriftServer: 'false',
	iskmoffset: 1,
};

let iskmlayoutConfs = {
	_hostname: 'https://localhost',
	offset: 1,
};

let iskmConfs = {
	apimlayoutConfs: apimlayoutConfs,
	iskmlayoutConfs: iskmlayoutConfs,
};

//#endregion

//#region distributed layout

let tmlayoutConfs = {
	enableThriftServer: 'false',
	offset: 0,
};

let storelayoutConfs = {
	_hostname: 'https://localhost',
	keyValidatorClientType: 'WSClient',
	enableThriftServer: 'false',
	enableDataPublisher: 'false',
	enablePolicyDeployer: 'false',
	enableBlockCondition: 'false',
	enableJMSConnectionDetails: 'false',
	gwoffset: 1,
	kmoffset: 4,
	offset: 3,
};

let publisherlayoutConfs = {
	_hostname: 'https://localhost',
	_tcpHostname: 'tcp://localhost',
	_sslHostname: 'ssl://localhost',
	keyValidatorClientType: 'WSClient',
	enableThriftServer: 'false',
	enableDataPublisher: 'true',
	enableBlockCondition: 'false',
	enableJMSConnectionDetails: 'false',
	displayURL: 'true',
	gwoffset: 1,
	kmoffset: 4,
	storeoffset: 3,
	tmoffset: 0,
	offset: 2,
};

let kmlayoutConfs = {
	_hostname: 'https://localhost',
	keyValidatorClientType: 'WSClient',
	enableThriftServer: 'false',
	enableDataPublisher: 'false',
	enablePolicyDeployer: 'false',
	enableJMSConnectionDetails: 'false',
	gwoffset: 1,
	offset: 4,
};

let gatewaylayoutConfs = {
	_hostname: 'https://localhost',
	_tcpHostname: 'tcp://localhost',
	_sslHostname: 'ssl://localhost',
	keyValidatorClientType: 'WSClient',
	enableThriftServer: 'false',
	enablePolicyDeployer: 'false',
	topicConnectionFactoryQuery: "?retries='5'%26connectdelay='50''",
	kmoffset: 4,
	tmoffset: 0,
	offset: 1,
};

let distributedConfs = {
	tmlayoutConfs: tmlayoutConfs,
	storelayoutConfs: storelayoutConfs,
	publisherlayoutConfs: publisherlayoutConfs,
	kmlayoutConfs: kmlayoutConfs,
	gatewaylayoutConfs: gatewaylayoutConfs,
};

//#endregion

exports.environmentConfs = environmentConfs;
exports.layoutConfs = layoutConfs;
exports.publishmultiplegatewayConfs = publishmultiplegatewayConfs;

exports.apimlayoutConfs = apimlayoutConfs;
exports.iskmlayoutConfs = iskmlayoutConfs;
exports.iskmConfs = iskmConfs;

exports.tmlayoutConfs = tmlayoutConfs;
exports.storelayoutConfs = storelayoutConfs;
exports.publisherlayoutConfs = publisherlayoutConfs;
exports.kmlayoutConfs = kmlayoutConfs;
exports.gatewaylayoutConfs = gatewaylayoutConfs;
exports.distributedConfs = distributedConfs;
