let preprocessor = 'sass';

const { src, dest, parallel, series, watch } = require('gulp');

const browserSync = require('browser-sync').create();

const concat = require('gulp-concat');

const uglify = require('gulp-uglify-es').default;

var sass = require('gulp-sass')(require('sass'));


const autoprefixer = require('gulp-autoprefixer');

const cleancss = require('gulp-clean-css');


const imagemin = require('gulp-imagemin');

const newer = require('gulp-newer');

const del = require('del');

function browsersync() {
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: 'app/' }, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    })
}

function scripts() {
    return src([
            'app/js/index.js',
            'app/js/app.js'

        ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/scss/main.scss') // Выбираем источник: "app/sass/main.sass"
        .pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
        .pipe(concat('app.min.css')) // Конкатенируем в файл app.min.js
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } /* , format: 'beautify' */ })) // Минифицируем стили
        .pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
        .pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function images() {
    return src('app/images/src/**/*')
        .pipe(newer('app/images/dest/')) // Проверяем, было ли изменено (сжато) изображение ранее
        .pipe(imagemin()) // Сжимаем и оптимизируем изображеня
        .pipe(dest('app/images/dest/')) // Выгружаем оптимизированные изображения в папку назначения
}

function cleanimg() {
    return del('app/images/dest/**/*', { force: true }) // Удаляем всё содержимое папки "app/images/dest/"
}

function buildcopy() {
    return src([ // Выбираем нужные файлы
            'app/css/**/*.min.css',
            'app/js/**/*.min.js',
            'app/images/dest/**/*',
            'app/**/*.html',
        ], { base: 'app' })
        .pipe(dest('dist'))
}

function cleandist() {
    return del('dist/**/*', { force: true }) // Удаляем всё содержимое папки "dist/"
}

function startwatch() {

    // Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);

    // Мониторим файлы препроцессора на изменения
    watch('app/**/scss/**/*', styles);

    // Мониторим файлы HTML на изменения
    watch('app/**/*.html').on('change', browserSync.reload);

    // Мониторим папку-источник изображений и выполняем images(), если есть изменения
    watch('app/images/src/**/*', images);

}

// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;

// Экспортируем функцию scripts() в таск scripts
exports.scripts = scripts;

// Экспортируем функцию styles() в таск styles
exports.styles = styles;

// Экспорт функции images() в таск images
exports.images = images;

// Экспортируем функцию cleanimg() как таск cleanimg
exports.cleanimg = cleanimg;

// Создаём новый таск "build", который последовательно выполняет нужные операции
exports.build = series(cleandist, styles, scripts, images, buildcopy);

// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(styles, scripts, browsersync, startwatch);