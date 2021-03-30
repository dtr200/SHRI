const projectFolder = 'build';
const sourceFolder = 'src';
const baseDir = `${sourceFolder}/`;

const path = {
    build: {
        html: `${projectFolder}/`,
        css: `${projectFolder}/`,
        js: `${projectFolder}/`,
        img: `${projectFolder}/images`,
        fonts: `${projectFolder}/fonts`
    },
    source: {
        html: `${sourceFolder}`,
        css: `${sourceFolder}`,
        scss: `${sourceFolder}/scss`,
        js: `${sourceFolder}/js`,
        img: `${sourceFolder}/images`,
        fonts: `${sourceFolder}/fonts`
    }
}

const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const concat = require('gulp-concat');

function synchronize(){
    browserSync.init({
        server: {
            baseDir
        }
    })
}

function cleanBuild(){
    return del(projectFolder);
}

function convertScripts(){
    return src([`${path.source.js}/*.js`])
        .pipe(browserSync.stream())
}

function convertStyles(){
    return src(`${path.source.scss}/style.scss`)
        .pipe(scss())
        .pipe(concat('stories.css'))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest(path.source.css))
        .pipe(browserSync.stream())
}

function buildProject(){
    return src([
        `${path.source.css}/style.css`,
        `${path.source.html}/index.html`,
        `${path.source.js}/scripts.js`,
        `${path.source.fonts}/**/*`
    ], {base: sourceFolder} )
    .pipe(dest(projectFolder))
}

function watchProject(){
    watch([`${path.source.scss}/**/*.scss`], convertStyles);
    watch([`${path.source.js}/*.js`], convertScripts);
    watch([`${path.source.html}/*.html`]).on('change', browserSync.reload)
}

exports.getCss = convertStyles;
exports.watching = watchProject;
exports.sync = synchronize;
exports.cleanBuild = cleanBuild;

exports.build = series(cleanBuild, buildProject);
exports.default = parallel(convertStyles, convertScripts, synchronize, watchProject);