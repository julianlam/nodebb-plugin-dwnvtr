var	Meta = module.parent.require('./meta'),

	Dwnvtr = {};

Dwnvtr.loadScripts = function(scripts) {
	return scripts.concat([
		'assets/dwnvtr.js'
	]);
};

module.exports = Dwnvtr;
