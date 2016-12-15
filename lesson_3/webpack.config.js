module.exports = {
    entry: {
        '001_events_1/build/bundle': './001_events_1/src/main.ts',
        '002_events_2/build/bundle': './002_events_2/src/main.ts',
        '003_mouse_events_1/build/bundle': './003_mouse_events_1/src/main.ts',
        '004_mouse_events_2/build/bundle': './004_mouse_events_2/src/main.ts',
        '005_scroll/build/bundle': './005_scroll/src/main.ts',
        '006_keyboard_events/build/bundle': './006_keyboard_events/src/main.ts',
        '007_drag_n_drop/build/bundle': './007_drag_n_drop/src/main.ts',
        '008_form_events/build/bundle': './008_form_events/src/main.ts',
        '009_custom_events/build/bundle': './009_custom_events/src/main.ts',
        '010_validation_1/build/bundle': './010_validation_1/src/main.ts',
        '011_validation_2/build/bundle': './011_validation_2/src/main.ts'
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