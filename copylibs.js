var fs = require('fs');
var uglifyjs = require("uglify-js");

function mkdir(dirpath) {
	if (!fs.existsSync(dirpath)) {
		fs.mkdirSync(dirpath)
	}
	return dirpath
}

function copy(src, dst, filename) {
	fs.writeFileSync(mkdir(dst)+filename, fs.readFileSync(src+filename));
}

copy("node_modules/bootstrap/dist/js/", "www/libs/bootstrap/","bootstrap.min.js");
copy("node_modules/bootstrap/dist/js/", "www/libs/bootstrap/","bootstrap.min.js.map");
copy("node_modules/bootstrap/dist/css/", "www/libs/bootstrap/","bootstrap.min.css");
copy("node_modules/bootstrap/dist/css/", "www/libs/bootstrap/","bootstrap.min.css.map");

copy("node_modules/jquery/dist/", "www/libs/jquery/","jquery.slim.min.js");
copy("node_modules/jquery/dist/", "www/libs/jquery/","jquery.slim.min.map");

copy("node_modules/popper.js/dist/umd/", "www/libs/popper/","popper.min.js");
copy("node_modules/popper.js/dist/umd/", "www/libs/popper/","popper.min.js.map");

copy("node_modules/whatwg-fetch/dist/", "www/libs/fetch/","fetch.umd.js");
/*var code = fs.readFileSync("node_modules/bootstrap/dist/js/bootstrap.js");
var result = uglifyjs.minify(code);
fs.writeFileSync("www/libs/fetch/fetch.min.js",result.error || result.code);*/

copy("node_modules/flatpickr/dist/", "www/libs/flatpickr/","flatpickr.min.js");
copy("node_modules/flatpickr/dist/", "www/libs/flatpickr/","flatpickr.min.css");

copy("node_modules/sweetalert/dist/", "www/libs/sweetalert/","sweetalert.min.js");

copy("node_modules/echarts/dist/", "www/libs/echarts/","echarts.min.js");
copy("node_modules/echarts/dist/", "www/libs/echarts/","echarts.common.min.js");
copy("node_modules/echarts/dist/", "www/libs/echarts/","echarts.simple.min.js");

copy("node_modules/template7/dist/", "www/libs/template7/","template7.min.js");
copy("node_modules/template7/dist/", "www/libs/template7/","template7.min.js.map");

mkdir("www/libs/fontawesome/");
copy("node_modules/@fortawesome/fontawesome-free/css/", "www/libs/fontawesome/css/","all.min.css");
fs.readdir("node_modules/@fortawesome/fontawesome-free/webfonts",function(err,paths){
	if(err) throw err;
	paths.forEach(function(path){
		copy("node_modules/@fortawesome/fontawesome-free/webfonts/", "www/libs/fontawesome/webfonts/",path);
	});
});

copy("node_modules/bluebird/js/browser/", "www/libs/bluebird/","bluebird.min.js");






