(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/components/admin/admin.module": "./src/app/components/admin/admin.module.ts",
	"src/app/components/auth/auth.module": "./src/app/components/auth/auth.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [user]=\"user\"></app-header>\n<div class=\"wrapper-app\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>HELLO FROM ADMIN PAGE</h4>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n    <span>Don't have an account ? <a [routerLink]=\"['/auth/register']\" >register</a> here</span>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth/register/register.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth/register/register.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table cellspacing=\"0\" [formGroup]=\"userForm\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Fullname\" formControlName=\"fullname\" name=\"fullname\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\n              <mat-error *ngIf=\"email.invalid && email.errors.email\">Invalid email address</mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Reapet Password\" formControlName=\"repeatPassword\" type=\"password\" name=\"repeatPassword\" required>\n              <mat-error *ngIf=\"repeatPassword.invalid && repeatPassword.errors.passwordMatch\">Password mismatch</mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">Register</button>\n    <span>Allrady have an account ? <a [routerLink]=\"['/auth/login']\">login</a> here</span>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n    <a [routerLink]=\"['/']\" class=\"logo\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/book\">Book list</a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav mr-right\">\n        <li class=\"nav-item active\">\n          <a class=\"links side\" [routerLink]=\"['/auth/login']\" *ngIf=\"!user\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"links side\" *ngIf=\"user\" [routerLink]=\"['/user', user.fullname]\">\n            {{user.fullname}}\n          </a>\n          <a class=\"links side\" *ngIf=\"user && user.isAdmin\" [routerLink]=\"['/admin']\">{{user.fullname}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"links side\" *ngIf=\"user\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row \">\n    <input [(ngModel)]=\"query\" type=\"text\" class=\"form-control custom-search\"  placeholder=\"Search by id\" >\n    <button (click)=\"searchMovie()\">search</button>\n    <div\n      class=\"foo container-mov\"\n      ngxInfiniteScroller\n      strategy=\"scrollingToBoth\"\n      (onScrollUp)=\"onScrollUp()\"\n      (onScrollDown)=\"onScrollDown()\"\n    >\n        <div class=\"movie-card\" *ngFor=\"let movie of movies\">\n          <img routerLink=\"/movie/{{movie._id}}\" class=\"movie-header manOfSteel\" src={{movie.poster}} />\n          <div class=\"movie-content\">\n            <div class=\"movie-content-header\">\n              <a routerLink=\"/movie/{{movie._id}}\">\n                <h3 class=\"movie-title\">{{movie.title || '-'}}</h3>\n              </a>\n              <span class=\"pull-right\">\n                  <i class=\"thumbs-up\" (click)=\"updateRating(movie._id, movie.imdb.rating, movie.imdb.votes)\"></i>\n              </span>\n            </div>\n            <div class=\"movie-info\">\n              <div class=\"info-section\">\n                <label>Date</label>\n                <span>{{movie.released | date: 'yyyy-MM-dd' || '-'}}</span>\n              </div><!--date,time-->\n              <div class=\"info-section\">\n                <label>Rating</label>\n                <span>{{movie.imdb.rating | number : '1.2-2'}}</span>\n              </div><!--screen-->\n              <div class=\"info-section\">\n                <label>Votes</label>\n                <span>{{movie.imdb.votes  || '-'}}</span>\n              </div><!--row-->\n              <div class=\"info-section\">\n                <label>Genres</label>\n                <span>{{movie.genres && movie.genres[0] || '-'}}</span>\n              </div><!--seat-->\n            </div>\n          </div><!--movie-content-->\n        <!--movie-card-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie-edit/movie-edit.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie-edit/movie-edit.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"container\">\n  <div class=\"row\" id=\"contatti\">\n    <div class=\"container mt-5\" >\n      <div class=\"row\">\n        <div class=\"col-md-5 maps\">\n          <img class=\"movie-header manOfSteel\" src={{movie.poster}} />\n        </div>\n        <div class=\"col-md-7\">\n          <h2 class=\"text-uppercase mt-3 font-weight-bold text-white\">{{movie.title}}</h2>\n          <form action=\"\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  Title\n                  <input [(ngModel)]=\"title\" name=\"title\" type=\"text\" class=\"form-control mt-2\" placeholder=\"Title\" required>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  Plot\n                  <textarea [(ngModel)]=\"fullplot\" name=\"fullplot\" class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Inserisci testo\" rows=\"3\" required></textarea>\n                </div>\n              </div>\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  Duration (in minutes)\n                  <input [(ngModel)]=\"runtime\" name=\"runtime\"  class=\"form-control mt-2\" placeholder=\"Email\" required>\n                </div>\n              </div>\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  Genre\n                  <input [(ngModel)]=\"genre\" name=\"genre\" class=\"form-control mt-2\" placeholder=\"Telefono\" required>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <button (click)=\"update()\" class=\"btn btn-success\">Save</button>\n                <button (click)=\"backClicked()\" class=\"btn btn-danger\">Cancel</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row text-center bg-success text-white\" id=\"author\">\n    <div class=\"col-12 mt-4 h3 \">\n      <a href=\"/\">2019</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie/movie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"container\">\n  <div class=\"row\" id=\"contatti\">\n    <div class=\"container mt-5\" >\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <button class=\"btn btn-primary float-right\" routerLink=\"/movie/edit/{{movie._id}}\">Edit</button>\n        </div>\n        <div class=\"col-md-5 maps\">\n          <img class=\"movie-header manOfSteel\" src={{movie.poster}} />\n        </div>\n        <div class=\"col-md-7\">\n          <h2 class=\"text-uppercase mt-3 font-weight-bold text-white\">{{movie.title}}</h2>\n          <form action=\"\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  Title: <div class=\"form-replica\">{{movie.title}}</div>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  Plot:\n                  <div class=\"form-replica\">{{movie.fullplot}}</div>\n                </div>\n              </div>\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  Duration:\n                  <div class=\"form-replica\">{{movie.runtime | minuteSeconds}}</div>\n                </div>\n              </div>\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  Genres:\n                  <div class=\"form-replica\">{{movie.genres && movie.genres[0]}}</div>\n                </div>\n              </div>\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  Released:\n                  <div class=\"form-replica\">{{movie.released | date: 'yyyy-MM-dd'}}</div>\n                </div>\n              </div>\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  Cast:\n                  <div class=\"form-replica\">\n                    <ul class=\"cast\">\n                      <li *ngFor=\"let cast of movie.cast\">{{cast}}</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row text-center bg-success text-white\" id=\"author\">\n    <div class=\"col-12 mt-4 h3 \">\n      <a href=\"/\">2019</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/auth.service */ "./src/app/components/auth/auth.service.ts");






let AppComponent = class AppComponent {
    constructor(authService, router, domSanitizer, matIconRegistry) {
        this.authService = authService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
        this.registerSvgIcons();
    }
    ngOnInit() {
        // init this.user on startup
        this.authService.me().subscribe(data => {
            this.user = data.user;
        });
        // update this.user after login/register/logout
        this.userSubscription = this.authService.$userSource.subscribe((user) => {
            this.user = user;
        });
    }
    logout() {
        this.authService.signOut();
        this.navigate('');
    }
    navigate(link) {
        this.router.navigate([link]);
    }
    ngOnDestroy() {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    }
    registerSvgIcons() {
        [
            'close',
            'add',
            'add-blue',
            'airplane-front-view',
            'air-station',
            'balloon',
            'boat',
            'cargo-ship',
            'car',
            'catamaran',
            'clone',
            'convertible',
            'delete',
            'drone',
            'fighter-plane',
            'fire-truck',
            'horseback-riding',
            'motorcycle',
            'railcar',
            'railroad-train',
            'rocket-boot',
            'sailing-boat',
            'segway',
            'shuttle',
            'space-shuttle',
            'steam-engine',
            'suv',
            'tour-bus',
            'tow-truck',
            'transportation',
            'trolleybus',
            'water-transportation',
        ].forEach((icon) => {
            this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`));
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/auth.module */ "./src/app/components/auth/auth.module.ts");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http-service.service */ "./src/app/services/http-service.service.ts");
/* harmony import */ var _components_home_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/filter.pipe */ "./src/app/components/home/filter.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin.module */ "./src/app/components/admin/admin.module.ts");
/* harmony import */ var _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/header.interceptor */ "./src/app/interceptors/header.interceptor.ts");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ "./src/app/interceptors/http-error.interceptor.ts");
/* harmony import */ var _thisissoon_angular_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @thisissoon/angular-infinite-scroll */ "./node_modules/@thisissoon/angular-infinite-scroll/fesm2015/thisissoon-angular-infinite-scroll.js");
/* harmony import */ var ngx_infinite_scroller__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-infinite-scroller */ "./node_modules/ngx-infinite-scroller/fesm2015/ngx-infinite-scroller.js");
/* harmony import */ var _components_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/app-routing/app-routing.module */ "./src/app/components/app-routing/app-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_movie_toHours_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/movie/toHours.pipe */ "./src/app/components/movie/toHours.pipe.ts");
/* harmony import */ var _components_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/movie-edit/movie-edit.component */ "./src/app/components/movie-edit/movie-edit.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _components_home_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"],
            _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_19__["MovieComponent"],
            _components_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_21__["MovieEditComponent"],
            _components_movie_toHours_pipe__WEBPACK_IMPORTED_MODULE_20__["ConverToHoursPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_11__["AdminModule"],
            _components_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _thisissoon_angular_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"],
            ngx_infinite_scroller__WEBPACK_IMPORTED_MODULE_15__["NgxInfiniteScrollerModule"],
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthHeaderInterceptor"],
                multi: true,
            }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["CatchErrorInterceptor"],
                multi: true,
            },
            _services_http_service_service__WEBPACK_IMPORTED_MODULE_8__["AppDataService"]],
        entryComponents: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admin-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/components/admin/admin-user-guard.ts");





const routes = [{
        path: 'admin',
        canActivate: [_admin_user_guard__WEBPACK_IMPORTED_MODULE_4__["OnlyAdminUsersGuard"]],
        children: [{
                path: '',
                component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
            }]
    }];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/components/admin/admin-user-guard.ts":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin-user-guard.ts ***!
  \******************************************************/
/*! exports provided: OnlyAdminUsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyAdminUsersGuard", function() { return OnlyAdminUsersGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import { Observable } from 'rxjs/Observable';
//import { AuthService } from '../auth/auth.service';
let OnlyAdminUsersGuard = class OnlyAdminUsersGuard {
    constructor() { }
    canActivate() {
        const user = window.user;
        return user && user.isAdmin;
    }
};
OnlyAdminUsersGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OnlyAdminUsersGuard);



/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "./src/app/components/admin/admin.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/components/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/components/admin/admin-user-guard.ts");






let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
        ],
        providers: [
            _admin_user_guard__WEBPACK_IMPORTED_MODULE_5__["OnlyAdminUsersGuard"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/components/app-routing/app-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/app-routing/app-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/components/auth/auth-guard.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-edit/movie-edit.component */ "./src/app/components/movie-edit/movie-edit.component.ts");







const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'auth',
        loadChildren: 'src/app/components/auth/auth.module#AuthModule'
    },
    {
        path: 'admin',
        loadChildren: 'src/app/components/admin/admin.module#AdminModule'
    },
    {
        path: 'movie/:id',
        component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_5__["MovieComponent"]
    },
    {
        path: 'movie/edit/:id',
        component: _movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_6__["MovieEditComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/auth/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/auth/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        const user = window.user;
        if (user)
            return true;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login']);
        return false;
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/components/auth/auth-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/auth/auth-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/auth/register/register.component.ts");





const routes = [{
        path: 'auth',
        children: [{
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            }, {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            }]
    }];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/components/auth/auth.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.example-card {\n  width: 400px;\n  margin: 10% auto;\n}\n\n.mat-card-title {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbmF0L3Byb2plY3RzL215TWVhbi9hbmd1bGFyLWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIiwiLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMTAlIGF1dG87XG59XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token.storage */ "./src/app/components/auth/token.storage.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/components/auth/auth-routing.module.ts");









let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"],
        ],
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
        ],
        providers: [
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _token_storage__WEBPACK_IMPORTED_MODULE_7__["TokenStorage"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/components/auth/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.storage */ "./src/app/components/auth/token.storage.ts");






//import { TooltipComponent } from '@angular/material';
const urlAddress = 'http://localhost:3000';
let AuthService = class AuthService {
    constructor(http, token) {
        this.http = http;
        this.token = token;
        this.$userSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    login(email, password) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.http.post(`${urlAddress}/api/auth/login`, {
                email,
                password
            }).subscribe((data) => {
                observer.next({ user: data.user });
                this.setUser(data.user);
                this.token.saveToken(data.token);
                observer.complete();
            });
        });
    }
    register(fullname, email, password, repeatPassword) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.http.post(`${urlAddress}/api/auth/register`, {
                fullname,
                email,
                password,
                repeatPassword
            }).subscribe((data) => {
                observer.next({ user: data.user });
                this.setUser(data.user);
                this.token.saveToken(data.token);
                observer.complete();
            });
        });
    }
    setUser(user) {
        if (user)
            user.isAdmin = (user.roles.indexOf('admin') > -1);
        this.$userSource.next(user);
        window.user = user;
    }
    getUser() {
        return this.$userSource.asObservable();
    }
    me() {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            const tokenVal = this.token.getToken();
            if (!tokenVal)
                return observer.complete();
            this.http.get(`${urlAddress}/api/auth/me`).subscribe((data) => {
                observer.next({ user: data.user });
                this.setUser(data.user);
                observer.complete();
            });
        });
    }
    signOut() {
        this.token.signOut();
        this.setUser(null);
        delete window.user;
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _token_storage__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"]])
], AuthService);



/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.authService.login(this.email, this.password)
            .subscribe(data => {
            this.router.navigate(['']);
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/components/auth/auth.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.passwordsMatchValidator])
        });
    }
    ngOnInit() {
    }
    passwordsMatchValidator(control) {
        let password = control.root.get('password');
        return password && control.value !== password.value ? {
            passwordMatch: true
        } : null;
    }
    get fullname() { return this.userForm.get('fullname'); }
    get email() { return this.userForm.get('email'); }
    get password() { return this.userForm.get('password'); }
    get repeatPassword() { return this.userForm.get('repeatPassword'); }
    register() {
        if (!this.userForm.valid)
            return;
        let { fullname, email, password, repeatPassword } = this.userForm.getRawValue();
        this.authService.register(fullname, email, password, repeatPassword)
            .subscribe(data => {
            this.router.navigate(['']);
        });
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth/register/register.component.html"),
        styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/components/auth/auth.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/auth/token.storage.ts":
/*!**************************************************!*\
  !*** ./src/app/components/auth/token.storage.ts ***!
  \**************************************************/
/*! exports provided: TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'AuthToken';
let TokenStorage = class TokenStorage {
    constructor() { }
    signOut() {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    }
    saveToken(token) {
        if (!token)
            return;
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
};
TokenStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TokenStorage);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 100%;\n}\nheader .logo {\n  background-image: url('logo.png');\n  width: 50px;\n  height: 50px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nheader .example-spacer {\n  flex: 1 1 auto;\n}\nheader .links {\n  color: white;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: initial;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n  padding: 15px;\n}\nheader .links.side {\n  padding: 0 14px;\n}\nheader .mat-toolbar {\n  background: black;\n}\nheader .mat-icon {\n  vertical-align: middle;\n  margin: 0 5px;\n}\nheader a {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbmF0L3Byb2plY3RzL215TWVhbi9hbmd1bGFyLWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FEQUk7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ0VOO0FEQUk7RUFDRSxjQUFBO0FDRU47QURBSTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0VOO0FERE07RUFDRSxlQUFBO0FDR1I7QURBSTtFQUNFLGlCQUFBO0FDRU47QURBSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQ0VOO0FEQUk7RUFDRSxlQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5sb2dvIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvZ28ucG5nJyk7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5leGFtcGxlLXNwYWNlciB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gICAgLmxpbmtzIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICYuc2lkZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1hdC10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIH1cbiAgICAubWF0LWljb24ge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuIiwiaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5oZWFkZXIgLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9nby5wbmdcIik7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbmhlYWRlciAuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbmhlYWRlciAubGlua3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaGVhZGVyIC5saW5rcy5zaWRlIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuaGVhZGVyIC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuaGVhZGVyIC5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5oZWFkZXIgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {};
    }
    ngOnInit() {
    }
    logout() {
        this.authService.signOut();
        this.navigate('/auth/login');
    }
    navigate(link) {
        this.router.navigate([link]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "user", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/filter.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/filter.pipe.ts ***!
  \************************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterPipe = class SearchFilterPipe {
    transform(value, keys, term) {
        // if (!term) return value;
        // return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }
};
SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SearchFilterPipe);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foo {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n\n.thumbs-up {\n  background: url('like.svg') 50% 50%/100% no-repeat;\n  width: 20px;\n  height: 20px;\n  display: block;\n  cursor: pointer;\n}\n\n.thumbs-up:hover {\n  -webkit-transform: scale(1.15);\n          transform: scale(1.15);\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n  background: #e9e9e9;\n  font-family: \"Arimo\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  color: #010b26;\n}\n\n* {\n  transition: 300ms;\n}\n\n.intro {\n  text-align: center;\n}\n\nul {\n  list-style-type: none;\n}\n\nh1, h2, h3, h4, h5, p {\n  font-weight: 400;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\na:hover {\n  color: #6ABCEA;\n}\n\n.container-mov {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 10vh;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n}\n\n.movie-card {\n  background: #ffffff;\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 315px;\n  margin: 2em;\n  border-radius: 10px;\n  display: inline-block;\n}\n\n.movie-header {\n  padding: 0;\n  margin: 0;\n  height: 367px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.manOfSteel {\n  background: url(\"http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg\");\n  background-size: cover;\n  cursor: pointer;\n}\n\n.babyDriver {\n  background: url(\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/baby-driver-poster.jpg\");\n  background-size: cover;\n}\n\n.theDarkTower {\n  background: url(\"http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg\");\n  background-size: cover;\n  background-position: 100% 100%;\n}\n\n.bladeRunner2049 {\n  background: url(\"http://cdn.collider.com/wp-content/uploads/2017/05/blade-runner-2049-poster-ryan-gosling.jpeg\");\n  background-size: cover;\n  background-position: 100% 80%;\n}\n\n.header-icon-container {\n  position: relative;\n}\n\n.header-icon {\n  width: 100%;\n  height: 367px;\n  line-height: 367px;\n  text-align: center;\n  vertical-align: middle;\n  margin: 0 auto;\n  color: #ffffff;\n  font-size: 54px;\n  text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA;\n  opacity: 0.85;\n}\n\n.header-icon:hover {\n  background: rgba(0, 0, 0, 0.15);\n  font-size: 74px;\n  text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  opacity: 1;\n}\n\n.movie-card:hover {\n  -webkit-transform: scale(1.03);\n  transform: scale(1.03);\n  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);\n}\n\n.movie-content {\n  padding: 18px 18px 24px 18px;\n  margin: 0;\n}\n\n.movie-content-header, .movie-info {\n  display: table;\n  width: 100%;\n}\n\n.movie-title {\n  font-size: 24px;\n  margin: 0;\n  display: table-cell;\n}\n\n.imax-logo {\n  width: 50px;\n  height: 15px;\n  background: url(\"https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/media_kit/3e27ede823afbf139c57f1c78a03c870.jpg\") no-repeat;\n  background-size: contain;\n  display: table-cell;\n  float: right;\n  position: relative;\n  margin-top: 5px;\n}\n\n.movie-info {\n  margin-top: 1em;\n}\n\n.info-section {\n  display: table-cell;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.info-section:first-of-type {\n  text-align: left;\n}\n\n.info-section:last-of-type {\n  text-align: right;\n}\n\n.info-section label {\n  display: block;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.5em;\n  font-size: 9px;\n}\n\n.info-section span {\n  font-weight: 700;\n  font-size: 11px;\n}\n\n@media screen and (max-width: 500px) {\n  .movie-card {\n    width: 95%;\n    max-width: 95%;\n    margin: 1em;\n    display: block;\n  }\n\n  .container-mov {\n    padding: 0;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbmF0L3Byb2plY3RzL215TWVhbi9hbmd1bGFyLWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0RBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFFRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFHRSxhQUFBO0VBRUEsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHlHQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSwrR0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrRkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdIQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdURBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx1REFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkpBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNDRjs7RURFQTtJQUNFLFVBQUE7SUFDQSxTQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGh1bWJzLXVwIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbGlrZS5zdmcnKSA1MCUgNTAlLzEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGh1bWJzLXVwOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIGZvbnQtZmFtaWx5OiAnQXJpbW8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAxMGIyNjtcbn1cblxuKiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXM7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xufVxuXG4uaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjNkFCQ0VBO1xufVxuXG4uY29udGFpbmVyLW1vdiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vdmllLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMTVweDtcbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1vdmllLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzNjdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLm1hbk9mU3RlZWwge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8vaGVucnljYXZpbGwub3JnL2ltYWdlcy9GaWxtcy8yMDEzLU1hbi1vZi1TdGVlbC9wb3N0ZXJzLzMtV2FsbWFydC1TdXBlcm1hbi1hLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFieURyaXZlciB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaTAud3AuY29tL21lZGlhMi5zbGFzaGZpbG0uY29tL3NsYXNoZmlsbS93cC93cC1jb250ZW50L2ltYWdlcy9iYWJ5LWRyaXZlci1wb3N0ZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGhlRGFya1Rvd2VyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cDovL2Nkbi5jb2xsaWRlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvdGhlLWRhcmstdG93ZXItcG9zdGVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xufVxuXG4uYmxhZGVSdW5uZXIyMDQ5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cDovL2Nkbi5jb2xsaWRlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDUvYmxhZGUtcnVubmVyLTIwNDktcG9zdGVyLXJ5YW4tZ29zbGluZy5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDgwJTtcbn1cblxuLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzY3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjBweCAjNmFiY2VhLCAwcHggNXB4IDIwcHggIzZBQkNFQTtcbiAgb3BhY2l0eTogLjg1O1xufVxuXG4uaGVhZGVyLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBmb250LXNpemU6IDc0cHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDIwcHggIzZhYmNlYSwgMHB4IDVweCAzMHB4ICM2QUJDRUE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW92aWUtY2FyZDpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ubW92aWUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE4cHggMThweCAyNHB4IDE4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1vdmllLWNvbnRlbnQtaGVhZGVyLCAubW92aWUtaW5mbyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vdmllLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pbWF4LWxvZ28ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovLzZhMjViYmQwNGJkMzNiOGE4NDNlLTk2MjZhOGI2Yzc4NTgwNTc5NDE1MjRiZmRhZDVmNWIwLnNzbC5jZjUucmFja2Nkbi5jb20vbWVkaWFfa2l0LzNlMjdlZGU4MjNhZmJmMTM5YzU3ZjFjNzhhMDNjODcwLmpwZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1vdmllLWluZm8ge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5pbmZvLXNlY3Rpb24ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvLXNlY3Rpb246Zmlyc3Qtb2YtdHlwZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbmZvLXNlY3Rpb246bGFzdC1vZi10eXBlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbmZvLXNlY3Rpb24gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5pbmZvLXNlY3Rpb24gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1vdmllLWNhcmQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY29udGFpbmVyLW1vdiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiIsIi5mb28ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRodW1icy11cCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9saWtlLnN2Z1wiKSA1MCUgNTAlLzEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGh1bWJzLXVwOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaW1vXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDEwYjI2O1xufVxuXG4qIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcztcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG5cbi5pbnRybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICM2QUJDRUE7XG59XG5cbi5jb250YWluZXItbW92IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW92aWUtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMxNXB4O1xuICBtYXJnaW46IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubW92aWUtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDM2N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ubWFuT2ZTdGVlbCB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHA6Ly9oZW5yeWNhdmlsbC5vcmcvaW1hZ2VzL0ZpbG1zLzIwMTMtTWFuLW9mLVN0ZWVsL3Bvc3RlcnMvMy1XYWxtYXJ0LVN1cGVybWFuLWEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWJ5RHJpdmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pMC53cC5jb20vbWVkaWEyLnNsYXNoZmlsbS5jb20vc2xhc2hmaWxtL3dwL3dwLWNvbnRlbnQvaW1hZ2VzL2JhYnktZHJpdmVyLXBvc3Rlci5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50aGVEYXJrVG93ZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8vY2RuLmNvbGxpZGVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy90aGUtZGFyay10b3dlci1wb3N0ZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG59XG5cbi5ibGFkZVJ1bm5lcjIwNDkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8vY2RuLmNvbGxpZGVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9ibGFkZS1ydW5uZXItMjA0OS1wb3N0ZXItcnlhbi1nb3NsaW5nLmpwZWdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgODAlO1xufVxuXG4uaGVhZGVyLWljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNjdweDtcbiAgbGluZS1oZWlnaHQ6IDM2N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA1NHB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4ICM2YWJjZWEsIDBweCA1cHggMjBweCAjNkFCQ0VBO1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4uaGVhZGVyLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBmb250LXNpemU6IDc0cHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDIwcHggIzZhYmNlYSwgMHB4IDVweCAzMHB4ICM2QUJDRUE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW92aWUtY2FyZDpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ubW92aWUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE4cHggMThweCAyNHB4IDE4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1vdmllLWNvbnRlbnQtaGVhZGVyLCAubW92aWUtaW5mbyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vdmllLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pbWF4LWxvZ28ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovLzZhMjViYmQwNGJkMzNiOGE4NDNlLTk2MjZhOGI2Yzc4NTgwNTc5NDE1MjRiZmRhZDVmNWIwLnNzbC5jZjUucmFja2Nkbi5jb20vbWVkaWFfa2l0LzNlMjdlZGU4MjNhZmJmMTM5YzU3ZjFjNzhhMDNjODcwLmpwZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1vdmllLWluZm8ge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5pbmZvLXNlY3Rpb24ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvLXNlY3Rpb246Zmlyc3Qtb2YtdHlwZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbmZvLXNlY3Rpb246bGFzdC1vZi10eXBlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbmZvLXNlY3Rpb24gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuXG4uaW5mby1zZWN0aW9uIHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5tb3ZpZS1jYXJkIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC13aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNvbnRhaW5lci1tb3Yge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-service.service */ "./src/app/services/http-service.service.ts");



let HomeComponent = class HomeComponent {
    constructor(DataService) {
        this.DataService = DataService;
        this.movies = [];
        this.httpReqestInProgress = false;
    }
    ngOnInit() {
        this.DataService.getMovies().subscribe(data => {
            data.docs.forEach(item => this.movies.push(item));
            console.log(this.movies);
        });
    }
    onScrollDown() {
        if (this.httpReqestInProgress)
            return;
        this.httpReqestInProgress = true;
        this.DataService.getMovies().subscribe(data => {
            data.docs.forEach(item => this.movies.push(item));
            this.httpReqestInProgress = false;
            console.log(this.movies);
        });
    }
    onScrollUp() {
    }
    updateRating(id, rating, votes) {
        const updatedRating = {
            imdb: {
                rating: rating + 0.1,
                votes: votes + 1,
            },
        };
        this.DataService.updateRating(id, updatedRating).subscribe(data => {
            this.movies.map(movie => {
                if (movie._id === id) {
                    movie.imdb.rating = rating + 0.1;
                    movie.imdb.votes = votes + 1;
                    return movie;
                }
                return movie;
            });
        });
    }
    searchMovie() {
        this.DataService.searchMovie(this.query).subscribe(data => {
            console.log('aaa', data);
            this.movies = [];
            this.movies.push(data);
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        providers: [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]],
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/movie-edit/movie-edit.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-edit/movie-edit.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contatti {\n  background-color: #70c3be;\n  letter-spacing: 2px;\n}\n\n#contatti a {\n  color: #fff;\n  text-decoration: none;\n}\n\n@media (max-width: 575.98px) {\n  #contatti {\n    padding-bottom: 800px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 450px;\n  }\n}\n\n@media (min-width: 576px) {\n  #contatti {\n    padding-bottom: 800px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 450px;\n  }\n}\n\n@media (min-width: 768px) {\n  #contatti {\n    padding-bottom: 350px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 850px;\n  }\n}\n\n@media (min-width: 992px) {\n  #contatti {\n    padding-bottom: 200px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 700px;\n  }\n}\n\n#author a {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbmF0L3Byb2plY3RzL215TWVhbi9hbmd1bGFyLWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZWRpdC9tb3ZpZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWVkaXQvbW92aWUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0VGOztBREVBO0VBRUU7SUFBVSxxQkFBQTtFQ0NWOztFREFBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNHRjtBQUNGOztBRENBO0VBRUU7SUFBVSxxQkFBQTtFQ0NWOztFRENBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNFRjtBQUNGOztBRENBO0VBRUU7SUFBVSxxQkFBQTtFQ0NWOztFRENBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0U7SUFBVSxxQkFBQTtFQ0VWOztFREFBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNHRjtBQUNGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWVkaXQvbW92aWUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YXR0aXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwYzNiZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbiNjb250YXR0aSBhe1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuXG4gICNjb250YXR0aXtwYWRkaW5nLWJvdHRvbTogODAwcHg7fVxuICAjY29udGF0dGkgLm1hcHMgaWZyYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcblxuICAjY29udGF0dGl7cGFkZGluZy1ib3R0b206IDgwMHB4O31cblxuICAjY29udGF0dGkgLm1hcHMgaWZyYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgI2NvbnRhdHRpe3BhZGRpbmctYm90dG9tOiAzNTBweDt9XG5cbiAgI2NvbnRhdHRpIC5tYXBzIGlmcmFtZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAjY29udGF0dGl7cGFkZGluZy1ib3R0b206IDIwMHB4O31cblxuICAjY29udGF0dGkgLm1hcHMgaWZyYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAwcHg7XG4gIH1cbn1cblxuXG4jYXV0aG9yIGF7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbn1cbiIsIiNjb250YXR0aSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGMzYmU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiNjb250YXR0aSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICNjb250YXR0aSB7XG4gICAgcGFkZGluZy1ib3R0b206IDgwMHB4O1xuICB9XG5cbiAgI2NvbnRhdHRpIC5tYXBzIGlmcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNjb250YXR0aSB7XG4gICAgcGFkZGluZy1ib3R0b206IDgwMHB4O1xuICB9XG5cbiAgI2NvbnRhdHRpIC5tYXBzIGlmcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNjb250YXR0aSB7XG4gICAgcGFkZGluZy1ib3R0b206IDM1MHB4O1xuICB9XG5cbiAgI2NvbnRhdHRpIC5tYXBzIGlmcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4NTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNjb250YXR0aSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICB9XG5cbiAgI2NvbnRhdHRpIC5tYXBzIGlmcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgfVxufVxuI2F1dGhvciBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/movie-edit/movie-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-edit/movie-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEditComponent", function() { return MovieEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-service.service */ "./src/app/services/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let MovieEditComponent = class MovieEditComponent {
    constructor(DataService, route, _location) {
        this.DataService = DataService;
        this.route = route;
        this._location = _location;
        this.title = '';
        this.fullplot = '';
        this.runtime = '';
        this.genre = '';
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        console.log('editId', this.id);
        this.DataService.getMovie(this.id).subscribe(movie => {
            //data.docs.forEach(item => this.books.push(item));
            this.movie = movie;
            this.title = movie.title;
            this.fullplot = movie.fullplot;
            this.runtime = movie.runtime;
            this.genre = movie.genres && movie.genres[0];
        });
    }
    backClicked() {
        this._location.back();
    }
    update() {
        const movie = {
            title: this.title,
            fullplot: this.fullplot,
            runtime: this.runtime,
            genres: [this.genre],
        };
        this.DataService.updateMovie(this.id, movie).subscribe(movie => {
            this._location.back();
        });
    }
};
MovieEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie',
        template: __webpack_require__(/*! raw-loader!./movie-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie-edit/movie-edit.component.html"),
        providers: [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]],
        styles: [__webpack_require__(/*! ./movie-edit.component.scss */ "./src/app/components/movie-edit/movie-edit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], MovieEditComponent);



/***/ }),

/***/ "./src/app/components/movie/movie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-replica {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  padding: 0.375rem 0.75rem;\n}\n\n.cast {\n  margin-bottom: 0;\n}\n\n#contatti {\n  background-color: #70c3be;\n  letter-spacing: 2px;\n}\n\n#contatti a {\n  color: #fff;\n  text-decoration: none;\n}\n\n@media (max-width: 575.98px) {\n  #contatti {\n    padding-bottom: 800px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 450px;\n  }\n}\n\n@media (min-width: 576px) {\n  #contatti {\n    padding-bottom: 800px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 450px;\n  }\n}\n\n@media (min-width: 768px) {\n  #contatti {\n    padding-bottom: 350px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 850px;\n  }\n}\n\n@media (min-width: 992px) {\n  #contatti {\n    padding-bottom: 200px;\n  }\n\n  #contatti .maps iframe {\n    width: 100%;\n    height: 700px;\n  }\n}\n\n#author a {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbmF0L3Byb2plY3RzL215TWVhbi9hbmd1bGFyLWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQ0E7RUFFRTtJQUFVLHFCQUFBO0VDRVY7O0VEREE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQ0lGO0FBQ0Y7O0FEQUE7RUFFRTtJQUFVLHFCQUFBO0VDRVY7O0VEQUE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFFRTtJQUFVLHFCQUFBO0VDRVY7O0VEQUE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRTtJQUFVLHFCQUFBO0VDR1Y7O0VEREE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQ0lGO0FBQ0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1yZXBsaWNhIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbn1cbi5jYXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuI2NvbnRhdHRpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjM2JlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuI2NvbnRhdHRpIGF7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG5cbiAgI2NvbnRhdHRpe3BhZGRpbmctYm90dG9tOiA4MDBweDt9XG4gICNjb250YXR0aSAubWFwcyBpZnJhbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuXG4gICNjb250YXR0aXtwYWRkaW5nLWJvdHRvbTogODAwcHg7fVxuXG4gICNjb250YXR0aSAubWFwcyBpZnJhbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAjY29udGF0dGl7cGFkZGluZy1ib3R0b206IDM1MHB4O31cblxuICAjY29udGF0dGkgLm1hcHMgaWZyYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNjb250YXR0aXtwYWRkaW5nLWJvdHRvbTogMjAwcHg7fVxuXG4gICNjb250YXR0aSAubWFwcyBpZnJhbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgfVxufVxuXG5cbiNhdXRob3IgYXtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuXG4iLCIuZm9ybS1yZXBsaWNhIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbn1cblxuLmNhc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jY29udGF0dGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjM2JlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4jY29udGF0dGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAjY29udGF0dGkge1xuICAgIHBhZGRpbmctYm90dG9tOiA4MDBweDtcbiAgfVxuXG4gICNjb250YXR0aSAubWFwcyBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAjY29udGF0dGkge1xuICAgIHBhZGRpbmctYm90dG9tOiA4MDBweDtcbiAgfVxuXG4gICNjb250YXR0aSAubWFwcyBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAjY29udGF0dGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAzNTBweDtcbiAgfVxuXG4gICNjb250YXR0aSAubWFwcyBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAjY29udGF0dGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgfVxuXG4gICNjb250YXR0aSAubWFwcyBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAwcHg7XG4gIH1cbn1cbiNhdXRob3IgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-service.service */ "./src/app/services/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MovieComponent = class MovieComponent {
    constructor(DataService, route) {
        this.DataService = DataService;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.DataService.getMovie(this.id).subscribe(movie => {
            //data.docs.forEach(item => this.books.push(item));
            this.movie = movie;
        });
    }
};
MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie',
        template: __webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html"),
        providers: [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]],
        styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/components/movie/movie.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], MovieComponent);



/***/ }),

/***/ "./src/app/components/movie/toHours.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/components/movie/toHours.pipe.ts ***!
  \**************************************************/
/*! exports provided: ConverToHoursPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverToHoursPipe", function() { return ConverToHoursPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConverToHoursPipe = class ConverToHoursPipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        return minutes + 'h:' + (value - minutes * 60) + 'm';
    }
};
ConverToHoursPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'minuteSeconds'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConverToHoursPipe);



/***/ }),

/***/ "./src/app/interceptors/header.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/header.interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var _components_auth_token_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/auth/token.storage */ "./src/app/components/auth/token.storage.ts");

class AuthHeaderInterceptor {
    intercept(req, next) {
        // Clone the request to add the new header
        const token = new _components_auth_token_storage__WEBPACK_IMPORTED_MODULE_0__["TokenStorage"]();
        const tokenVal = token.getToken();
        const clonedRequest = req.clone({
            headers: req
                .headers
                .set('Authorization', tokenVal ? `Bearer ${tokenVal}` : '')
        });
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    }
}


/***/ }),

/***/ "./src/app/interceptors/http-error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: CatchErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatchErrorInterceptor", function() { return CatchErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");


class CatchErrorInterceptor {
    intercept(request, next) {
        return next
            .handle(request)
            .do((event) => { }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                let text = (err.error && err.error.message) ? err.error.message : err.statusText;
                window.globalEvents.emit('open error dialog', text);
            }
        });
    }
}


/***/ }),

/***/ "./src/app/services/http-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/http-service.service.ts ***!
  \**************************************************/
/*! exports provided: AppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataService", function() { return AppDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const api = '';
let AppDataService = class AppDataService {
    constructor(http) {
        this.http = http;
    }
    getMovies() {
        this.page = this.page + 1;
        return this.http.get(`${api}/api/movie?page=${this.page}`);
    }
    getMovie(id) {
        return this.http.get(`${api}/api/movie/${id}`);
    }
    updateMovie(id, movie) {
        return this.http.put(`${api}/api/movie/${id}`, movie);
    }
    updateRating(id, rating) {
        return this.http.put(`${api}/api/movie/rating/${id}`, rating);
    }
    searchMovie(movie) {
        return this.http.get(`${api}/api/movie/search?movie=${movie}`);
    }
};
AppDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppDataService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        ],
        declarations: [],
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kanat/projects/myMean/angular-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map