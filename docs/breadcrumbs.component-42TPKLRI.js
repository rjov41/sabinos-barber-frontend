import {
  DocsExampleComponent
} from "./chunk-J6J7THO6.js";
import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbRouterComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  NgClass,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/breadcrumbs/breadcrumbs.component.ts
var _c0 = (a0) => ({ "mark": a0 });
function BreadcrumbsComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "c-breadcrumb-item", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_47_r2 = ctx.$index;
    const \u0275$count_47_r3 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("active", \u0275$index_47_r2 === \u0275$count_47_r3 - 1)("url", item_r1.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", item_r1.label, "\n              ");
  }
}
function BreadcrumbsComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "c-breadcrumb-item", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_60_r5 = ctx.$index;
    const \u0275$count_60_r6 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("active", \u0275$index_60_r5 === \u0275$count_60_r6 - 1)("url", item_r4.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", item_r4.label, "\n              ");
  }
}
function BreadcrumbsComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "c-breadcrumb-item", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const \u0275$index_70_r8 = ctx.$index;
    const \u0275$count_70_r9 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("active", \u0275$index_70_r8 === \u0275$count_70_r9 - 1)("url", item_r7.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", item_r7.label, "\n              ");
  }
}
function BreadcrumbsComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "c-breadcrumb-item", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const \u0275$index_80_r11 = ctx.$index;
    const \u0275$count_80_r12 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("active", \u0275$index_80_r11 === \u0275$count_80_r12 - 1)("url", item_r10.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", item_r10.label, "\n              ");
  }
}
function BreadcrumbsComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "c-breadcrumb-item", 12);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const \u0275$index_90_r14 = ctx.$index;
    const \u0275$count_90_r15 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("active", \u0275$index_90_r14 === \u0275$count_90_r15 - 1)("url", item_r13.url);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, \u0275$index_90_r14 === \u0275$count_90_r15 - 1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r13.label);
  }
}
var _BreadcrumbsComponent = class _BreadcrumbsComponent {
  constructor() {
    this.items = [];
  }
  ngOnInit() {
    this.items = [
      { label: "Home", url: "/", attributes: { title: "Home" } },
      { label: "Library", url: "/" },
      { label: "Data", url: "/dashboard/" },
      { label: "CoreUI", url: "/" }
    ];
    setTimeout(() => {
      this.items = [
        { label: "CoreUI", url: "/" },
        { label: "Data", url: "/dashboard/" },
        { label: "Library", url: "/" },
        { label: "Home", url: "/", attributes: { title: "Home" } }
      ];
    }, 5e3);
  }
};
_BreadcrumbsComponent.\u0275fac = function BreadcrumbsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbsComponent)();
};
_BreadcrumbsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 104, vars: 2, consts: [["xs", "12", 1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS/content"], ["href", "components/breadcrumb"], [1, "mb-2"], [1, "mb-0"], ["url", "/"], [3, "active"], ["xs", "12"], ["href", "components/breadcrumb#router"], [3, "items"], [3, "active", "url"], [3, "ngClass"]], template: function BreadcrumbsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 0);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card");
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Angular Breadcrumbs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "p", 1);
    \u0275\u0275text(15, "\n          The breadcrumb navigation provides links back to each previous page the user navigated\n          through and shows the current location in a website or an application. You don\u2019t have\n          to add separators, because they automatically added in CSS through\n          ");
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275text(17, "\n            ");
    \u0275\u0275elementStart(18, "code");
    \u0275\u0275text(19, "::before");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n          and\n          ");
    \u0275\u0275elementStart(22, "a", 3);
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "code");
    \u0275\u0275text(25, "content");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n          .\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n        ");
    \u0275\u0275elementStart(29, "app-docs-example", 4);
    \u0275\u0275text(30, "\n          ");
    \u0275\u0275elementStart(31, "c-breadcrumb", 5);
    \u0275\u0275text(32, "\n            ");
    \u0275\u0275repeaterCreate(33, BreadcrumbsComponent_For_34_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n          ");
    \u0275\u0275element(36, "hr");
    \u0275\u0275text(37, "\n          ");
    \u0275\u0275elementStart(38, "c-breadcrumb", 5);
    \u0275\u0275text(39, "\n            ");
    \u0275\u0275repeaterCreate(40, BreadcrumbsComponent_For_41_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n          ");
    \u0275\u0275elementStart(43, "c-breadcrumb", 5);
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275repeaterCreate(45, BreadcrumbsComponent_For_46_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n          ");
    \u0275\u0275elementStart(48, "c-breadcrumb", 5);
    \u0275\u0275text(49, "\n            ");
    \u0275\u0275repeaterCreate(50, BreadcrumbsComponent_For_51_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n          ");
    \u0275\u0275elementStart(53, "c-breadcrumb", 5);
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275repeaterCreate(55, BreadcrumbsComponent_For_56_Template, 7, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n          ");
    \u0275\u0275element(58, "hr");
    \u0275\u0275text(59, "\n          ");
    \u0275\u0275elementStart(60, "c-breadcrumb", 6);
    \u0275\u0275text(61, "\n            ");
    \u0275\u0275elementStart(62, "c-breadcrumb-item", 7);
    \u0275\u0275text(63, "\n              Home\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n            ");
    \u0275\u0275elementStart(65, "c-breadcrumb-item", 7);
    \u0275\u0275text(66, "\n              Library\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n            ");
    \u0275\u0275elementStart(68, "c-breadcrumb-item", 7);
    \u0275\u0275text(69, "\n              Data\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n            ");
    \u0275\u0275elementStart(71, "c-breadcrumb-item", 8);
    \u0275\u0275text(72, "\n              Bootstrap\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n  ");
    \u0275\u0275elementStart(79, "c-col", 9);
    \u0275\u0275text(80, "\n    ");
    \u0275\u0275elementStart(81, "c-card");
    \u0275\u0275text(82, "\n      ");
    \u0275\u0275elementStart(83, "c-card-header");
    \u0275\u0275text(84, "\n        ");
    \u0275\u0275elementStart(85, "strong");
    \u0275\u0275text(86, "Angular Breadcrumbs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, " ");
    \u0275\u0275elementStart(88, "small");
    \u0275\u0275text(89, "router");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, "\n      ");
    \u0275\u0275elementStart(92, "c-card-body");
    \u0275\u0275text(93, "\n        ");
    \u0275\u0275elementStart(94, "app-docs-example", 10);
    \u0275\u0275text(95, "\n          ");
    \u0275\u0275element(96, "c-breadcrumb-router");
    \u0275\u0275text(97, "\n          ");
    \u0275\u0275element(98, "c-breadcrumb-router", 11);
    \u0275\u0275text(99, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(33);
    \u0275\u0275repeater(ctx.items);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.items.slice(0, 1));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.items.slice(0, 2));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.items.slice(0, 3));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.items.slice(0, 4));
    \u0275\u0275advance(16);
    \u0275\u0275property("active", true);
    \u0275\u0275advance(27);
    \u0275\u0275property("items", ctx.items);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, BreadcrumbComponent, BreadcrumbItemComponent, NgClass, BreadcrumbRouterComponent] });
var BreadcrumbsComponent = _BreadcrumbsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbsComponent, { className: "BreadcrumbsComponent", filePath: "src\\app\\documentacion\\base\\breadcrumbs\\breadcrumbs.component.ts", lineNumber: 22 });
})();
export {
  BreadcrumbsComponent
};
//# sourceMappingURL=breadcrumbs.component-42TPKLRI.js.map
