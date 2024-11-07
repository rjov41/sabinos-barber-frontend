import {
  DocsExampleComponent
} from "./chunk-NVLXH4OP.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ColComponent,
  DomSanitizer,
  IconDirective,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/carousels/carousels.component.ts
var _forTrack0 = ($index, $item) => $item.src;
function CarouselsComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "c-carousel-item");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", slide_r1.title);
    \u0275\u0275property("src", slide_r1.src, \u0275\u0275sanitizeUrl);
  }
}
function CarouselsComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "c-carousel-item");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", slide_r2.title);
    \u0275\u0275property("src", slide_r2.src, \u0275\u0275sanitizeUrl);
  }
}
function CarouselsComponent_For_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "c-carousel-item");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
  }
  if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", slide_r3.title);
    \u0275\u0275property("src", slide_r3.src, \u0275\u0275sanitizeUrl);
  }
}
function CarouselsComponent_For_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "c-carousel-item");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", slide_r4.title);
    \u0275\u0275property("src", slide_r4.src, \u0275\u0275sanitizeUrl);
  }
}
function CarouselsComponent_For_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "c-carousel-item");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "img", 30);
    \u0275\u0275text(4, "\n                  ");
    \u0275\u0275elementStart(5, "c-carousel-caption", 31);
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                    ");
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
  }
  if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", slide_r5.title);
    \u0275\u0275propertyInterpolate("src", slide_r5.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(slide_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r5.subtitle);
  }
}
function CarouselsComponent_For_233_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "c-carousel-item");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275text(4, "\n                  ");
    \u0275\u0275elementStart(5, "c-carousel-caption", 31);
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                    ");
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
  }
  if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", slide_r6.title);
    \u0275\u0275property("src", slide_r6.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(slide_r6.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r6.subtitle);
  }
}
function CarouselsComponent_For_286_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "c-carousel-item");
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275text(4, "\n                  ");
    \u0275\u0275elementStart(5, "c-carousel-caption", 31);
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                    ");
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
  }
  if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", slide_r7.title);
    \u0275\u0275property("src", slide_r7.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(slide_r7.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r7.subtitle);
  }
}
var _CarouselsComponent = class _CarouselsComponent {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
    this.imageSrc = [
      "assets/images/angular.jpg",
      "assets/images/react.jpg",
      "assets/images/vue.jpg",
      "https://picsum.photos/id/1/800/400",
      "https://picsum.photos/id/1026/800/400",
      "https://picsum.photos/id/1031/800/400"
    ];
    this.slidesLight = [
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    ];
    this.slides = [];
    this.slides[0] = [
      {
        id: 0,
        src: domSanitizer.bypassSecurityTrustUrl(this.imageSrc[0]),
        title: "First slide",
        subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        id: 1,
        src: domSanitizer.bypassSecurityTrustUrl(this.imageSrc[1]),
        title: "Second slide",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 2,
        src: domSanitizer.bypassSecurityTrustUrl(this.imageSrc[2]),
        title: "Third slide",
        subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
    ];
    this.slides[1] = [
      {
        id: 0,
        src: this.imageSrc[3],
        title: "First slide",
        subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        id: 1,
        src: this.imageSrc[4],
        title: "Second slide",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 2,
        src: this.imageSrc[5],
        title: "Third slide",
        subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
    ];
    this.slides[2] = [
      {
        id: 0,
        src: domSanitizer.bypassSecurityTrustUrl(this.slidesLight[0]),
        title: "First slide",
        subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        id: 1,
        src: domSanitizer.bypassSecurityTrustUrl(this.slidesLight[1]),
        title: "Second slide",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 2,
        src: domSanitizer.bypassSecurityTrustUrl(this.slidesLight[2]),
        title: "Third slide",
        subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
    ];
  }
  onItemChange($event) {
    console.log("Carousel onItemChange", $event);
  }
};
_CarouselsComponent.\u0275fac = function CarouselsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarouselsComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
_CarouselsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarouselsComponent, selectors: [["app-carousels"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 297, vars: 14, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_0 = goog.getMsg("Previous");
    i18n_0 = MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`Previous`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_1 = goog.getMsg("Next");
    i18n_1 = MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`Next`;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_2 = goog.getMsg("Previous");
    i18n_2 = MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`Previous`;
  }
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_3 = goog.getMsg("Next");
    i18n_3 = MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`Next`;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_4 = goog.getMsg("Previous");
    i18n_4 = MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`Previous`;
  }
  let i18n_5;
  if (false) {
    const MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_5 = goog.getMsg("Next");
    i18n_5 = MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_5;
  } else {
    i18n_5 = $localize`Next`;
  }
  let i18n_6;
  if (false) {
    const MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_6 = goog.getMsg("Previous");
    i18n_6 = MSG_EXTERNAL_4452427314943113135$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_6;
  } else {
    i18n_6 = $localize`Previous`;
  }
  let i18n_7;
  if (false) {
    const MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_7 = goog.getMsg("Next");
    i18n_7 = MSG_EXTERNAL_3885497195825665706$$SRC_APP_DOCUMENTACION_BASE_CAROUSELS_CAROUSELS_COMPONENT_TS_7;
  } else {
    i18n_7 = $localize`Next`;
  }
  return [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/carousel"], ["transition", "slide", 3, "itemChange", "interval"], ["href", "components/carousel/#with-controls"], [3, "itemChange", "interval"], ["caption", i18n_0, "direction", "prev"], ["caption", i18n_1, "direction", "next"], ["direction", "prev", 3, "tabIndex"], ["cIcon", "", "name", "cil-chevron-left", "size", "3xl"], [1, "visually-hidden"], ["direction", "next", 3, "tabIndex"], ["cIcon", "", "name", "cil-chevron-right", "size", "3xl"], ["href", "components/carousel/#with-indicators"], ["direction", "prev", 3, "itemChange", "activeIndex", "dark", "interval"], ["href", "https://coreui.io/4.0/utilities/display"], ["href", "components/carousel/#with-captions"], ["transition", "slide", 3, "itemChange", "interval", "wrap"], ["caption", i18n_2, "direction", "prev"], ["caption", i18n_3, "direction", "next"], ["href", "components/carousel/#crossfade"], ["transition", "crossfade", 3, "itemChange", "animate", "interval"], ["caption", i18n_4, "direction", "prev"], ["caption", i18n_5, "direction", "next"], ["href", "components/carousel/#dark-variant"], ["transition", "slide", 3, "itemChange", "dark", "interval"], ["caption", i18n_6, "direction", "prev"], ["caption", i18n_7, "direction", "next"], ["loading", "lazy", 1, "d-block", "w-100", 3, "src", "alt"], ["loading", "lazy", 1, "d-block", "w-100", 3, "alt", "src"], [1, "d-none", "d-md-block"]];
}, template: function CarouselsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 0);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 1);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Angular Carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ");
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "Slide only");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n      ");
    \u0275\u0275elementStart(15, "c-card-body");
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "p", 2);
    \u0275\u0275text(18, "Here\u2019s a carousel with slides");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n        ");
    \u0275\u0275elementStart(20, "app-docs-example", 3);
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275elementStart(22, "c-carousel", 4);
    \u0275\u0275listener("itemChange", function CarouselsComponent_Template_c_carousel_itemChange_22_listener($event) {
      return ctx.onItemChange($event);
    });
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "c-carousel-inner");
    \u0275\u0275text(25, "\n              ");
    \u0275\u0275repeaterCreate(26, CarouselsComponent_For_27_Template, 6, 2, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n  ");
    \u0275\u0275elementStart(34, "c-col", 0);
    \u0275\u0275text(35, "\n    ");
    \u0275\u0275elementStart(36, "c-card", 1);
    \u0275\u0275text(37, "\n      ");
    \u0275\u0275elementStart(38, "c-card-header");
    \u0275\u0275text(39, "\n        ");
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41, "Angular Carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " ");
    \u0275\u0275elementStart(43, "small");
    \u0275\u0275text(44, "with controls");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n      ");
    \u0275\u0275elementStart(47, "c-card-body");
    \u0275\u0275text(48, "\n        ");
    \u0275\u0275elementStart(49, "p", 2);
    \u0275\u0275text(50, "\n          Adding in the previous and next controls with ");
    \u0275\u0275elementStart(51, "code");
    \u0275\u0275text(52, "c-carousel-controls");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " component.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "\n        ");
    \u0275\u0275elementStart(55, "app-docs-example", 5);
    \u0275\u0275text(56, "\n          ");
    \u0275\u0275elementStart(57, "c-carousel", 6);
    \u0275\u0275listener("itemChange", function CarouselsComponent_Template_c_carousel_itemChange_57_listener($event) {
      return ctx.onItemChange($event);
    });
    \u0275\u0275text(58, "\n            ");
    \u0275\u0275elementStart(59, "c-carousel-inner");
    \u0275\u0275text(60, "\n              ");
    \u0275\u0275repeaterCreate(61, CarouselsComponent_For_62_Template, 6, 2, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "\n            ");
    \u0275\u0275element(64, "c-carousel-control", 7);
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275element(66, "c-carousel-control", 8);
    \u0275\u0275text(67, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n  ");
    \u0275\u0275elementStart(73, "c-col", 0);
    \u0275\u0275text(74, "\n    ");
    \u0275\u0275elementStart(75, "c-card", 1);
    \u0275\u0275text(76, "\n      ");
    \u0275\u0275elementStart(77, "c-card-header");
    \u0275\u0275text(78, "\n        ");
    \u0275\u0275elementStart(79, "strong");
    \u0275\u0275text(80, "Angular Carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, " ");
    \u0275\u0275elementStart(82, "small");
    \u0275\u0275text(83, "with custom controls");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n      ");
    \u0275\u0275elementStart(86, "c-card-body");
    \u0275\u0275text(87, "\n        ");
    \u0275\u0275elementStart(88, "p", 2);
    \u0275\u0275text(89, "\n          Adding in the previous and next controls with custom content of ");
    \u0275\u0275elementStart(90, "code");
    \u0275\u0275text(91, "c-carousel-controls");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " component.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "\n        ");
    \u0275\u0275elementStart(94, "app-docs-example", 5);
    \u0275\u0275text(95, "\n          ");
    \u0275\u0275elementStart(96, "c-carousel", 6);
    \u0275\u0275listener("itemChange", function CarouselsComponent_Template_c_carousel_itemChange_96_listener($event) {
      return ctx.onItemChange($event);
    });
    \u0275\u0275text(97, "\n            ");
    \u0275\u0275elementStart(98, "c-carousel-inner");
    \u0275\u0275text(99, "\n              ");
    \u0275\u0275repeaterCreate(100, CarouselsComponent_For_101_Template, 6, 2, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "\n            ");
    \u0275\u0275elementStart(103, "c-carousel-control", 9);
    \u0275\u0275text(104, "\n              ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(105, "svg", 10);
    \u0275\u0275text(106, "\n              ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(107, "span", 11);
    \u0275\u0275text(108, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, "\n            ");
    \u0275\u0275elementStart(111, "c-carousel-control", 12);
    \u0275\u0275text(112, "\n              ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(113, "svg", 13);
    \u0275\u0275text(114, "\n              ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(115, "span", 11);
    \u0275\u0275text(116, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(119, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(121, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n  ");
    \u0275\u0275elementStart(124, "c-col", 0);
    \u0275\u0275text(125, "\n    ");
    \u0275\u0275elementStart(126, "c-card", 1);
    \u0275\u0275text(127, "\n      ");
    \u0275\u0275elementStart(128, "c-card-header");
    \u0275\u0275text(129, "\n        ");
    \u0275\u0275elementStart(130, "strong");
    \u0275\u0275text(131, "Angular Carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, " ");
    \u0275\u0275elementStart(133, "small");
    \u0275\u0275text(134, "with indicators");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, "\n      ");
    \u0275\u0275elementStart(137, "c-card-body");
    \u0275\u0275text(138, "\n        ");
    \u0275\u0275elementStart(139, "p", 2);
    \u0275\u0275text(140, "\n          You can attach the indicators to the carousel, lengthwise the controls, too.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n        ");
    \u0275\u0275elementStart(142, "app-docs-example", 14);
    \u0275\u0275text(143, "\n          ");
    \u0275\u0275elementStart(144, "c-carousel", 15);
    \u0275\u0275listener("itemChange", function CarouselsComponent_Template_c_carousel_itemChange_144_listener($event) {
      return ctx.onItemChange($event);
    });
    \u0275\u0275text(145, "\n            ");
    \u0275\u0275element(146, "c-carousel-indicators");
    \u0275\u0275text(147, "\n            ");
    \u0275\u0275elementStart(148, "c-carousel-inner");
    \u0275\u0275text(149, "\n              ");
    \u0275\u0275repeaterCreate(150, CarouselsComponent_For_151_Template, 6, 2, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(152, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(153, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(155, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(156, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(157, "\n  ");
    \u0275\u0275elementStart(158, "c-col", 0);
    \u0275\u0275text(159, "\n    ");
    \u0275\u0275elementStart(160, "c-card", 1);
    \u0275\u0275text(161, "\n      ");
    \u0275\u0275elementStart(162, "c-card-header");
    \u0275\u0275text(163, "\n        Carousel with captions, controls and indicators\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(164, "\n      ");
    \u0275\u0275elementStart(165, "c-card-body");
    \u0275\u0275text(166, "\n        ");
    \u0275\u0275elementStart(167, "p", 2);
    \u0275\u0275text(168, "\n          You can add captions to slides with the ");
    \u0275\u0275elementStart(169, "code");
    \u0275\u0275text(170, "<c-carousel-caption>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, " element\n          within any ");
    \u0275\u0275elementStart(172, "code");
    \u0275\u0275text(173, "<c-carousel-item>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174, ". They can be immediately hidden on\n          smaller viewports, as shown below, with optional ");
    \u0275\u0275elementStart(175, "a", 16);
    \u0275\u0275text(176, "display\n          utilities");
    \u0275\u0275elementEnd();
    \u0275\u0275text(177, ".\n          We hide them with ");
    \u0275\u0275elementStart(178, "code");
    \u0275\u0275text(179, ".d-none");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, " and draw them back on medium-sized devices with\n          ");
    \u0275\u0275elementStart(181, "code");
    \u0275\u0275text(182, ".d-md-block");
    \u0275\u0275elementEnd();
    \u0275\u0275text(183, ".\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, "\n        ");
    \u0275\u0275elementStart(185, "app-docs-example", 17);
    \u0275\u0275text(186, "\n          ");
    \u0275\u0275elementStart(187, "c-carousel", 18);
    \u0275\u0275listener("itemChange", function CarouselsComponent_Template_c_carousel_itemChange_187_listener($event) {
      return ctx.onItemChange($event);
    });
    \u0275\u0275text(188, "\n            ");
    \u0275\u0275element(189, "c-carousel-indicators");
    \u0275\u0275text(190, "\n            ");
    \u0275\u0275elementStart(191, "c-carousel-inner");
    \u0275\u0275text(192, "\n              ");
    \u0275\u0275repeaterCreate(193, CarouselsComponent_For_194_Template, 15, 4, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(195, "\n            ");
    \u0275\u0275element(196, "c-carousel-control", 19);
    \u0275\u0275text(197, "\n            ");
    \u0275\u0275element(198, "c-carousel-control", 20);
    \u0275\u0275text(199, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(200, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(201, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(202, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(203, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(204, "\n  ");
    \u0275\u0275elementStart(205, "c-col", 0);
    \u0275\u0275text(206, "\n    ");
    \u0275\u0275elementStart(207, "c-card", 1);
    \u0275\u0275text(208, "\n      ");
    \u0275\u0275elementStart(209, "c-card-header");
    \u0275\u0275text(210, "\n        ");
    \u0275\u0275elementStart(211, "strong");
    \u0275\u0275text(212, "Angular Carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(213, " ");
    \u0275\u0275elementStart(214, "small");
    \u0275\u0275text(215, "Crossfade");
    \u0275\u0275elementEnd();
    \u0275\u0275text(216, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(217, "\n      ");
    \u0275\u0275elementStart(218, "c-card-body");
    \u0275\u0275text(219, "\n        ");
    \u0275\u0275elementStart(220, "p", 2);
    \u0275\u0275text(221, "\n          Add ");
    \u0275\u0275elementStart(222, "code");
    \u0275\u0275text(223, 'transition="crossfade"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(224, " to your carousel to animate slides\n          with a fade transition instead of a slide.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(225, "\n        ");
    \u0275\u0275elementStart(226, "app-docs-example", 21);
    \u0275\u0275text(227, "\n          ");
    \u0275\u0275elementStart(228, "c-carousel", 22);
    \u0275\u0275listener("itemChange", function CarouselsComponent_Template_c_carousel_itemChange_228_listener($event) {
      return ctx.onItemChange($event);
    });
    \u0275\u0275text(229, "\n            ");
    \u0275\u0275elementStart(230, "c-carousel-inner");
    \u0275\u0275text(231, "\n              ");
    \u0275\u0275repeaterCreate(232, CarouselsComponent_For_233_Template, 15, 4, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(234, "\n            ");
    \u0275\u0275element(235, "c-carousel-control", 23);
    \u0275\u0275text(236, "\n            ");
    \u0275\u0275element(237, "c-carousel-control", 24);
    \u0275\u0275text(238, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(239, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(240, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(241, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(242, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(243, "\n  ");
    \u0275\u0275elementStart(244, "c-col", 0);
    \u0275\u0275text(245, "\n    ");
    \u0275\u0275elementStart(246, "c-card", 1);
    \u0275\u0275text(247, "\n      ");
    \u0275\u0275elementStart(248, "c-card-header");
    \u0275\u0275text(249, "\n        ");
    \u0275\u0275elementStart(250, "strong");
    \u0275\u0275text(251, "Angular Carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(252, " ");
    \u0275\u0275elementStart(253, "small");
    \u0275\u0275text(254, "Dark variant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(255, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(256, "\n      ");
    \u0275\u0275elementStart(257, "c-card-body");
    \u0275\u0275text(258, "\n        ");
    \u0275\u0275elementStart(259, "p", 2);
    \u0275\u0275text(260, "\n          Add ");
    \u0275\u0275elementStart(261, "code");
    \u0275\u0275text(262, "dark");
    \u0275\u0275elementEnd();
    \u0275\u0275text(263, " property to the ");
    \u0275\u0275elementStart(264, "code");
    \u0275\u0275text(265, "c-carousel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(266, " for darker controls,\n          indicators, and captions. Controls have been inverted from their default white fill\n          with the ");
    \u0275\u0275elementStart(267, "code");
    \u0275\u0275text(268, "filter");
    \u0275\u0275elementEnd();
    \u0275\u0275text(269, " CSS property. Captions and controls have additional Sass\n          variables that customize the ");
    \u0275\u0275elementStart(270, "code");
    \u0275\u0275text(271, "color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(272, " and ");
    \u0275\u0275elementStart(273, "code");
    \u0275\u0275text(274, "background-color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(275, ".\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(276, "\n        ");
    \u0275\u0275elementStart(277, "app-docs-example", 25);
    \u0275\u0275text(278, "\n          ");
    \u0275\u0275elementStart(279, "c-carousel", 26);
    \u0275\u0275listener("itemChange", function CarouselsComponent_Template_c_carousel_itemChange_279_listener($event) {
      return ctx.onItemChange($event);
    });
    \u0275\u0275text(280, "\n            ");
    \u0275\u0275element(281, "c-carousel-indicators");
    \u0275\u0275text(282, "\n            ");
    \u0275\u0275elementStart(283, "c-carousel-inner");
    \u0275\u0275text(284, "\n              ");
    \u0275\u0275repeaterCreate(285, CarouselsComponent_For_286_Template, 15, 4, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(287, "\n            ");
    \u0275\u0275element(288, "c-carousel-control", 27);
    \u0275\u0275text(289, "\n            ");
    \u0275\u0275element(290, "c-carousel-control", 28);
    \u0275\u0275text(291, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(292, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(293, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(294, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(295, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(296, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(22);
    \u0275\u0275property("interval", 7e3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.slides[0]);
    \u0275\u0275advance(31);
    \u0275\u0275property("interval", 0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.slides[0]);
    \u0275\u0275advance(35);
    \u0275\u0275property("interval", 0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.slides[0]);
    \u0275\u0275advance(3);
    \u0275\u0275property("tabIndex", 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("tabIndex", 0);
    \u0275\u0275advance(33);
    \u0275\u0275property("activeIndex", 1)("dark", true)("interval", 5e3);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.slides[0]);
    \u0275\u0275advance(37);
    \u0275\u0275property("interval", 3e3)("wrap", false);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.slides[1]);
    \u0275\u0275advance(35);
    \u0275\u0275property("animate", false)("interval", 5e3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.slides[0]);
    \u0275\u0275advance(47);
    \u0275\u0275property("dark", true)("interval", 3e3);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.slides[2]);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, IconDirective, CarouselIndicatorsComponent, CarouselCaptionComponent] });
var CarouselsComponent = _CarouselsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarouselsComponent, { className: "CarouselsComponent", filePath: "src\\app\\documentacion\\base\\carousels\\carousels.component.ts", lineNumber: 14 });
})();
export {
  CarouselsComponent
};
//# sourceMappingURL=carousels.component-42I74BMQ.js.map
