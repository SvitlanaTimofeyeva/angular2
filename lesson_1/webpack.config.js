module.exports = {
    entry: {
       '001_basic_component_1/build/bundle': './001_basic_component_1/src/main.ts',
       '002_basic_component_2/build/bundle': './002_basic_component_2/src/main.ts',
       '003_one_way_data_binding/build/bundle': './003_one_way_data_binding/src/main.ts',
       '004_one_way_data_binding_2/build/bundle': './004_one_way_data_binding_2/src/main.ts',
       '005_two_way_data_binding/build/bundle': './005_two_way_data_binding/src/main.ts',
       '006_reference_variables/build/bundle': './006_reference_variables/src/main.ts',
       '007_nested_components/build/bundle': './007_nested_components/src/main.ts', 
       '008_component_styles_1/build/bundle': './008_component_styles_1/src/main.ts',
       '009_component_styles_2/build/bundle': './009_component_styles_2/src/main.ts'
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