module.exports = {
    entry: {
		'001_events_1/build/bundle': './001_events_1/src/main.ts'
   }, 
   output: {
        filename: '[name].js'
    }, 
	   resolve: {

		 extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	   },
	   module: {
		 loaders: [
	
	      { 
			test: /\.tsx?$/, 
			loader: 'ts-loader' 
		  }, 
		  {
			test: /\.html$/,
			loader: "html"
		  }
     ]
   }
}