webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actors/actors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/actors/actors.component.html":
/***/ (function(module, exports) {

module.exports = "<mao-image-actor-list></mao-image-actor-list>"

/***/ }),

/***/ "../../../../../src/app/actors/actors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActorsComponent = (function () {
    function ActorsComponent() {
    }
    ActorsComponent.prototype.ngOnInit = function () {
    };
    ActorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-actors',
            template: __webpack_require__("../../../../../src/app/actors/actors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/actors/actors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActorsComponent);
    return ActorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/actors/image-actor-detail/image-actor-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-detail {\n    margin: 20px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/actors/image-actor-detail/image-actor-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedActor\">\n    <div class=\"container image-detail\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 col-xs-12\">\n          <img src=\"{{image_base_url}}{{selectedActor.profile_path}}\" class=\"img-responsive\">\n        </div>\n        <div class=\"col-sm-4 col-xs-12\">\n          <h1>{{selectedActor.name}}</h1>\n          <h5><strong >Known for:</strong></h5>\n          <div *ngFor=\"let movie of selectedActor.known_for\">\n            <p>{{movie.original_title}}</p>\n          </div>\n          \n          \n        </div>\n      </div>\n    </div> \n  </div>"

/***/ }),

/***/ "../../../../../src/app/actors/image-actor-detail/image-actor-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageActorDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageActorDetailComponent = (function () {
    function ImageActorDetailComponent() {
        this.image_base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
    }
    ImageActorDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageActorDetailComponent.prototype, "selectedActor", void 0);
    ImageActorDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-image-actor-detail',
            template: __webpack_require__("../../../../../src/app/actors/image-actor-detail/image-actor-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/actors/image-actor-detail/image-actor-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageActorDetailComponent);
    return ImageActorDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/actors/image-actor-list/image-actor-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/actors/image-actor-list/image-actor-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mao-image-actor-detail [selectedActor]=\"selectedActor\"></mao-image-actor-detail>\n<div class= \"container\">\n  <div class=\"row\">\n    <mao-image-actor *ngFor=\"let actor of actors\" [actor]=\"actor\" (click)=\"onSelect(actor)\"></mao-image-actor>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/actors/image-actor-list/image-actor-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageActorListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_actor_service__ = __webpack_require__("../../../../../src/app/services/actor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageActorListComponent = (function () {
    function ImageActorListComponent(actorService) {
        this.actorService = actorService;
        this.loadActors();
    }
    ImageActorListComponent.prototype.ngOnInit = function () {
    };
    ImageActorListComponent.prototype.onSelect = function (actor) {
        this.selectedActor = actor;
    };
    ImageActorListComponent.prototype.loadActors = function () {
        var _this = this;
        this.actorService.getActors().subscribe(function (response) {
            console.log('actors from api', response.results);
            _this.actors = response.results;
        }, function (error) {
            console.log('some error has ocurred', error);
        });
    };
    ImageActorListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-image-actor-list',
            template: __webpack_require__("../../../../../src/app/actors/image-actor-list/image-actor-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/actors/image-actor-list/image-actor-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_actor_service__["a" /* ActorService */]])
    ], ImageActorListComponent);
    return ImageActorListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/actors/image-actor-list/image-actor/image-actor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    box-shadow:0px 1px 6px 1px rgba(0,0,0,0.75);\n    margin-bottom:20px;\n\n}\n\nimg:hover{\n    filter: gray; \n    -webkit-filter: grayscale(1);\n\n}\n\na:hover {\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/actors/image-actor-list/image-actor/image-actor.component.html":
/***/ (function(module, exports) {

module.exports = "<a>\n    <!-- <div class=\"col-md-3 col-sm-4 col-xs-6\"> -->\n    <div class=\"col-md-3\">\n      <img class=\"img-responsive\" src=\"{{base_url}}{{actor.profile_path}}\"/>\n    </div>\n  </a>"

/***/ }),

/***/ "../../../../../src/app/actors/image-actor-list/image-actor/image-actor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageActorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageActorComponent = (function () {
    function ImageActorComponent() {
        this.base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
    }
    ImageActorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageActorComponent.prototype, "actor", void 0);
    ImageActorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-image-actor',
            template: __webpack_require__("../../../../../src/app/actors/image-actor-list/image-actor/image-actor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/actors/image-actor-list/image-actor/image-actor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageActorComponent);
    return ImageActorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mao-navbar></mao-navbar>\n<router-outlet></router-outlet>\n<!-- <mao-galler></mao-galler> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'mao';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__galler_galler_component__ = __webpack_require__("../../../../../src/app/galler/galler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__galler_image_list_image_list_component__ = __webpack_require__("../../../../../src/app/galler/image-list/image-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__galler_image_list_image_image_component__ = __webpack_require__("../../../../../src/app/galler/image-list/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__galler_image_detail_image_detail_component__ = __webpack_require__("../../../../../src/app/galler/image-detail/image-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_actor_service__ = __webpack_require__("../../../../../src/app/services/actor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actors_actors_component__ = __webpack_require__("../../../../../src/app/actors/actors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actors_image_actor_detail_image_actor_detail_component__ = __webpack_require__("../../../../../src/app/actors/image-actor-detail/image-actor-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actors_image_actor_list_image_actor_list_component__ = __webpack_require__("../../../../../src/app/actors/image-actor-list/image-actor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actors_image_actor_list_image_actor_image_actor_component__ = __webpack_require__("../../../../../src/app/actors/image-actor-list/image-actor/image-actor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__galler_galler_component__["a" /* GallerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__galler_image_list_image_list_component__["a" /* ImageListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__galler_image_list_image_image_component__["a" /* ImageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__galler_image_detail_image_detail_component__["a" /* ImageDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__actors_actors_component__["a" /* ActorsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__actors_image_actor_detail_image_actor_detail_component__["a" /* ImageActorDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__actors_image_actor_list_image_actor_list_component__["a" /* ImageActorListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__actors_image_actor_list_image_actor_image_actor_component__["a" /* ImageActorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__app_routes__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_11__services_actor_service__["a" /* ActorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__galler_galler_component__ = __webpack_require__("../../../../../src/app/galler/galler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actors_actors_component__ = __webpack_require__("../../../../../src/app/actors/actors.component.ts");



var appRoutes = [
    { path: '', redirectTo: '/galler', pathMatch: 'full' },
    { path: 'galler', component: __WEBPACK_IMPORTED_MODULE_1__galler_galler_component__["a" /* GallerComponent */] },
    { path: 'actors', component: __WEBPACK_IMPORTED_MODULE_2__actors_actors_component__["a" /* ActorsComponent */] },
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/galler/galler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/galler/galler.component.html":
/***/ (function(module, exports) {

module.exports = "<mao-image-list></mao-image-list>"

/***/ }),

/***/ "../../../../../src/app/galler/galler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GallerComponent = (function () {
    function GallerComponent() {
    }
    GallerComponent.prototype.ngOnInit = function () {
    };
    GallerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-galler',
            template: __webpack_require__("../../../../../src/app/galler/galler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/galler/galler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GallerComponent);
    return GallerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/galler/image-detail/image-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-detail {\n    margin: 20px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/galler/image-detail/image-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedMovie\">\n  <div class=\"container image-detail\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-xs-12\">\n        <img src=\"{{image_base_url}}{{selectedMovie.poster_path}}\" class=\"img-responsive\">\n      </div>\n      <div class=\"col-sm-4 col-xs-12\">\n        <h1>{{selectedMovie.title}}</h1>\n        <h3>Overview</h3>\n        <p>{{selectedMovie.overview}}</p>\n        <p><strong>Vote average </strong> <small>{{selectedMovie.vote_average | number}}</small></p>\n        <p><strong>Release date </strong> <small>{{selectedMovie.release_date | date}}</small></p>\n      </div>\n    </div>\n  </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/galler/image-detail/image-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageDetailComponent = (function () {
    function ImageDetailComponent() {
        this.image_base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageDetailComponent.prototype, "selectedMovie", void 0);
    ImageDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-image-detail',
            template: __webpack_require__("../../../../../src/app/galler/image-detail/image-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/galler/image-detail/image-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageDetailComponent);
    return ImageDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/galler/image-list/image-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mao-image-detail [selectedMovie]=\"selectedMovie\"></mao-image-detail>\n<div class= \"container\">\n  <div class=\"row\">\n    <mao-image *ngFor=\"let movie of movies\" [movie]=\"movie\" (click)=\"onSelect(movie)\"></mao-image>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/galler/image-list/image-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageListComponent = (function () {
    function ImageListComponent(movieService) {
        this.movieService = movieService;
        this.loadMovies();
    }
    ImageListComponent.prototype.ngOnInit = function () {
    };
    ImageListComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    ImageListComponent.prototype.loadMovies = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (response) {
            console.log('movies from api', response.results);
            _this.movies = response.results;
        }, function (error) {
            console.log('some error has ocurred', error);
        });
    };
    ImageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-image-list',
            template: __webpack_require__("../../../../../src/app/galler/image-list/image-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]])
    ], ImageListComponent);
    return ImageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/galler/image-list/image/image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    box-shadow:0px 1px 6px 1px rgba(0,0,0,0.75);\n    margin-bottom:20px;\n\n}\n\nimg:hover{\n    filter: gray; \n    -webkit-filter: grayscale(1);\n\n}\n\na:hover {\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/galler/image-list/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<a>\n  <!-- <div class=\"col-md-3 col-sm-4 col-xs-6\"> -->\n  <div class=\"col-md-3\">\n    <img class=\"img-responsive\" src=\"{{base_url}}{{movie.poster_path}}\"/>\n  </div>\n</a>"

/***/ }),

/***/ "../../../../../src/app/galler/image-list/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageComponent = (function () {
    function ImageComponent() {
        this.base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "movie", void 0);
    ImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-image',
            template: __webpack_require__("../../../../../src/app/galler/image-list/image/image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/galler/image-list/image/image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a class=\"navbar-brand\"  [routerLink]=\"['/galler']\">Curso de Angular</a> -->\n      \n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li ><a [routerLink]=\"['/galler']\">Movies and Actors Application</a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n    </div>\n\n    <!-- Navbar Right -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/galler']\">Movies now playing</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/actors']\">Popular actors</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mao-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/actor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActorService = (function () {
    function ActorService(http) {
        this.http = http;
        this.theMovieUrl = 'http://api.themoviedb.org/3/';
        this.apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
    }
    ActorService.prototype.getActors = function () {
        var discover = 'person/popular';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('api_key', this.apiKey);
        params.set('r', 'json');
        var url = this.theMovieUrl + discover;
        console.log('hello');
        return this.http.get(url, { search: params })
            .map(function (response) {
            console.log('People service response:', response.json());
            return response.json();
        });
    };
    ActorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ActorService);
    return ActorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.theMovieUrl = 'http://api.themoviedb.org/3/';
        this.apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
    }
    MovieService.prototype.getMovies = function () {
        var discover = 'movie/now_playing';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('api_key', this.apiKey);
        params.set('r', 'json');
        var url = this.theMovieUrl + discover;
        console.log('hello');
        return this.http.get(url, { search: params })
            .map(function (response) {
            console.log('Movie service response:', response.json());
            return response.json();
        });
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map