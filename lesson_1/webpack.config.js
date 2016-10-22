module.exports = {
    entry: {
       '001_intro/build/bundle':'./001_intro/src/main.ts', 
	   '002_one_way_data_binding/build/bundle':'./002_one_way_data_binding/src/main.ts', 
	   '003_two_way_data_binding/build/bundle': './003_two_way_data_binding/src/main.ts'
   }, 
   output: {
        filename: '[name].js'
    }, 
	   resolve: {

		 extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	   },
	   module: {
		 loaders: [
	
       { test: /\.tsx?$/, loader: 'ts-loader' }
     ]
   }
}