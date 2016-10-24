module.exports = {
    entry: {
        '001_ngFor/build/bundle': './001_ngFor/src/main.ts',
        '002_ngIf/build/bundle': './002_ngIf/src/main.ts',
        '003_ngSwitch/build/bundle': './003_ngSwitch/src/main.ts',
        '005_ngStyle/build/bundle': './005_ngStyle/src/main.ts',
        '006_ngClass/build/bundle': './006_ngClass/src/main.ts'
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