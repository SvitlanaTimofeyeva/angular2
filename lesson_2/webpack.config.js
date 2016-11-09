module.exports = {
    entry: {
        '001_ngFor/build/bundle': './001_ngFor/src/main.ts',
        '002_ngIf/build/bundle': './002_ngIf/src/main.ts',
        '003_ngSwitch/build/bundle': './003_ngSwitch/src/main.ts',
        '004_ngStyle/build/bundle': './004_ngStyle/src/main.ts',
        '005_ngClass/build/bundle': './005_ngClass/src/main.ts',
        '006_pipes_1/build/bundle': './006_pipes_1/src/main.ts',
        '007_pipes_2/build/bundle': './007_pipes_2/src/main.ts',
        '008_pipes_3/build/bundle': './008_pipes_3/src/main.ts',
        '009_pipes_4/build/bundle': './009_pipes_4/src/main.ts',
        '010_pipes_5/build/bundle': './010_pipes_5/src/main.ts',
        '011_pipes_custom/build/bundle': './011_pipes_custom/src/main.ts'
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