'use strict';

exports.MasterDatasource = {
	Generic: require('./src/modules/master.datasource/datasource.util'),
	Util: require('./src/modules/master.datasource/utils/util.datasource'),
};

exports.UserMgt = {
	Generic: require('./src/modules/user.management/usermgt.util'),
	Util: require('./src/modules/user.management/utils/util.usermgt'),
};

exports.Carbon = {
	Generic: require('./src/modules/carbon/carbon.util'),
};

exports.JNDIProperties = {
	Generic: require('./src/modules/jndi.properties/jndi.util'),
};

exports.Identity = {
	Generic: require('./src/modules/identity/identity.util'),
};

exports.Registry = {
	Generic: require('./src/modules/registry/registry.util'),
	Util: require('./src/modules/registry/utils/util.registry'),
};

exports.Utils = {
	Scripts: require('./src/utils/util.scripts'),
	Docs: require('./src/docs/docs.util'),
}

exports.DatasourceConfigs = {
	Postgre: require('./src/configs/datasource/config.postgre'),
	MySQL: require('./src/configs/datasource/config.mysql'),
	MSSQL: require('./src/configs/datasource/config.mssql'),
	Oracle: require('./src/configs/datasource/config.oracle'),
}