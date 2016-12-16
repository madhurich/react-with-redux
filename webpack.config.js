module.exports = {
	entry : './index.js', //input file
	output : {
		path: './',
		filename: 'bundle.js' //output file must be included in index.html
	},
	devServer : { //ports available are 1024 to 65535
		inline: true, //it this is true, when changes are made this automatically 
		//it builds and reloads without manual reloading
		port : 2002
	}, 
	module : {
		loaders : [
			{
				test : /\.jsx?$/,
				exclude : /node_modules/,
				loader : 'babel',
				query : {
					presets : ['es2015', 'react']
				}
			}
		]
	}
};