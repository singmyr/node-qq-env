var fs = require('fs');

module.exports = {
	env: function(key, defaultValue) {
		return process.env[key] || defaultValue || null;
	},
	load: function(file) {
		if(file === undefined) {
			file = '.env';
		}

		try {
			var data = fs.readFileSync(file, {
				encoding: 'utf8'
			});

			data.split('\n').forEach(function(value) {
				var info = /^([a-zA-Z0-9_]+)=(.*)$/.exec(value);
				if(info.length === 3) {
					process.env[info[1]] = info[2];
				}
			});
		} catch(error) {
			if(error.code === 'ENOENT') {
				throw Error('Could not find file.');
			} else {
				console.error('Unhandled error:');
				console.error(error);
			}
		}

		return this;
	}
};