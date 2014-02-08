var	Meta = module.parent.require('./meta'),

	Dwnvtr = {};

Dwnvtr.loadScripts = function(scripts) {
	return scripts.concat([
		'plugins/dwnvtr/dwnvtr.js'
	]);
};

module.exports = Dwnvtr;