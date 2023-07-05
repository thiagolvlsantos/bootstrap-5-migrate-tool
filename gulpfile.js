const replace = require('gulp-replace');
const { src, dest } = require('gulp');

function migrate() {
  return src(['src/*.html'])
    .pipe(
      replace(
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" rel="stylesheet">',
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">'
      )
    )
    .pipe(
      replace(
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>',
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>'
      )
    )
    .pipe(
      replace(
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"></script>',
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>'
      )
    )
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-danger\b([^"]*")/g, '$1bg-danger$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-dark\b([^"]*")/g, '$1bg-dark$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-info\b([^"]*")/g, '$1bg-info$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-light\b([^"]*")/g, '$1bg-light$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-pill\b([^"]*")/g, '$1rounded-pill$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-primary\b([^"]*")/g, '$1bg-primary$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-secondary\b([^"]*")/g, '$1bg-secondary$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-success\b([^"]*")/g, '$1bg-success$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bbadge-warning\b([^"]*")/g, '$1bg-warning$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bborder-left\b([^"]*")/g, '$1border-start$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bborder-right\b([^"]*")/g, '$1border-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bclose\b([^"]*")/g, '$1btn-close$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bcustom-checkbox\b([^"]*")/g, '$1form-check$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bcustom-file\b([^"]*")/g, '$1form-file$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bcustom-radio\b([^"]*")/g, '$1form-check$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bcustom-range\b([^"]*")/g, '$1form-range$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bcustom-select\b([^"]*")/g, '$1form-select$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bcustom-switch\b([^"]*")/g, '$1form-switch$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfloat-left\b([^"]*")/g, '$1float-start$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfloat-right\b([^"]*")/g, '$1float-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfont-italic\b([^"]*")/g, '$1fst-italic$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfont-weight-bold\b([^"]*")/g, '$1fw-bold$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfont-weight-bolder\b([^"]*")/g, '$1fw-bolder$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfont-weight-light\b([^"]*")/g, '$1fw-light$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfont-weight-lighter\b([^"]*")/g, '$1fw-lighter$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bfont-weight-normal\b([^"]*")/g, '$1fw-normal$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bjumbotron-fluid\b([^"]*")/g, '$1rounded-0 px-0$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bjumbotron\b([^"]*")/g, '$1bg-light mb-4 rounded-2 py-5 px-3$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bmedia\b([^"]*")/g, '$1d-flex$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bmedia-body\b([^"]*")/g, '$1flex-grow-1$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bml-\b([^"]*")/g, '$1ms-$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bmr-\b([^"]*")/g, '$1me-$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bmr-auto\b([^"]*")/g, '$1me-auto$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bno-gutters\b([^"]*")/g, '$1g-0$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bpl-\b([^"]*")/g, '$1ps-$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bpr-\b([^"]*")/g, '$1pe-$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bembed-responsive-item\b([^"]*")/g, '$1$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bembed-responsive-16by9\b([^"]*")/g, '$1ratio-16x9$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bembed-responsive-1by1\b([^"]*")/g, '$1ratio-1x1$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bembed-responsive-21by9\b([^"]*")/g, '$1ratio-21x9$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bembed-responsive-4by3\b([^"]*")/g, '$1ratio-4x3$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bembed-responsive\b([^"]*")/g, '$1ratio$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\brounded-lg\b([^"]*")/g, '$1rounded-3$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\brounded-right\b([^"]*")/g, '$1rounded-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\brounded-sm\b([^"]*")/g, '$1rounded-1$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bsr-only-focusable\b([^"]*")/g, '$1visually-hidden-focusable$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\bsr-only\b([^"]*")/g, '$1visually-hidden$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-left\b([^"]*")/g, '$1text-start$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-sm-left\b([^"]*")/g, '$1text-sm-start$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-md-left\b([^"]*")/g, '$1text-md-start$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-lg-left\b([^"]*")/g, '$1text-lg-start$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-xl-left\b([^"]*")/g, '$1text-xl-start$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-right\b([^"]*")/g, '$1text-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-sm-right\b([^"]*")/g, '$1text-sm-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-md-right\b([^"]*")/g, '$1text-md-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-lg-right\b([^"]*")/g, '$1text-lg-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-xl-right\b([^"]*")/g, '$1text-xl-end$2'))
    .pipe(replace(/(<[^>]*class\s*=\s*"[^"]*)\btext-monospace\b([^"]*")/g, '$1font-monospace$2'))
    .pipe(dest('dest/'));
}

exports.migrate = migrate;