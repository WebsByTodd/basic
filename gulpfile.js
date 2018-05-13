const gulp = require("gulp");
// misc
const tasklisting = require("gulp-task-listing");
const browserSync = require("browser-sync");

function dst(type) {
  return config.dist + "/" + type;
}

//////////////////
// Create tasks //
//////////////////
const config = {
	dist: "./site"
};

gulp.task("run", runTask());


gulp.task(
  "default",
  tasklisting.withFilters(/clean|run|default/)
);

function runTask() {
  return () => {
    browserSync.init({
			files: config.dist + "/**",
			server: {
				baseDir: config.dist
			}
		});
  };
}
