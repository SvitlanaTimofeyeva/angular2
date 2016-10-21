module.exports = {
   entry: {
	   '001_intro/build/bundle':'./001_intro/src/main.js', 
	   '002_one_way_data_binding/build/bundle':'./002_one_way_data_binding/src/main.js', 
	   '003_two_way_data_binding/build/bundle': './003_two_way_data_binding/src/main.js'
   }, 
   output: {
        filename: '[name].js'
    }//, 
	  // resolve: {

		// extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	  // },
	  // module: {
		// loaders: [
	
      // { test: /\.tsx?$/, loader: 'ts-loader' }
    // ]
  // }
}