import {
  DocsExampleComponent
} from "./chunk-NVLXH4OP.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  IconDirective,
  RouterLink,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/buttons/buttons/buttons.component.ts
var _c0 = () => [];
function ButtonsComponent_For_20_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                  ");
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                ");
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    const state_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("active", state_r2 === "active")("color", color_r1)("disabled", state_r2 === "disabled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                    ", color_r1.charAt(0).toUpperCase() + color_r1.slice(1), "\n                  ");
  }
}
function ButtonsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "c-row", 36);
    \u0275\u0275text(2, "\n              ");
    \u0275\u0275elementStart(3, "c-col", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "c-col");
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275repeaterCreate(8, ButtonsComponent_For_20_For_9_Template, 4, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275text(11, "Link\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n          ");
  }
  if (rf & 2) {
    const state_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", state_r2.charAt(0).toUpperCase() + state_r2.slice(1), "\n              ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.colors);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", state_r2 === "active")("disabled", state_r2 === "disabled");
  }
}
function ButtonsComponent_For_49_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                  ");
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    const state_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("active", state_r5 === "active")("color", color_r4)("disabled", state_r5 === "disabled");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                    ", color_r4.charAt(0).toUpperCase() + color_r4.slice(1), "\n                  ");
  }
}
function ButtonsComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "c-row", 36);
    \u0275\u0275text(2, "\n              ");
    \u0275\u0275elementStart(3, "c-col", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "c-col");
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275repeaterCreate(8, ButtonsComponent_For_49_For_9_Template, 6, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275text(11, "\n                  ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(12, "svg", 40);
    \u0275\u0275text(13, "\n                  Link\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n          ");
  }
  if (rf & 2) {
    const state_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", state_r5.charAt(0).toUpperCase() + state_r5.slice(1), "\n              ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.colors);
    \u0275\u0275advance(2);
    \u0275\u0275property("active", state_r5 === "active")("disabled", state_r5 === "disabled");
  }
}
function ButtonsComponent_For_138_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                  ");
    \u0275\u0275elementStart(1, "button", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                ");
  }
  if (rf & 2) {
    const color_r6 = ctx.$implicit;
    const state_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("active", state_r7 === "active")("color", color_r6)("disabled", state_r7 === "disabled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                    ", color_r6.charAt(0).toUpperCase() + color_r6.slice(1), "\n                  ");
  }
}
function ButtonsComponent_For_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "c-row", 36);
    \u0275\u0275text(2, "\n              ");
    \u0275\u0275elementStart(3, "c-col", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "c-col");
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275repeaterCreate(8, ButtonsComponent_For_138_For_9_Template, 4, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n          ");
  }
  if (rf & 2) {
    const state_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", state_r7.charAt(0).toUpperCase() + state_r7.slice(1), "\n              ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.colors);
  }
}
function ButtonsComponent_For_167_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                  ");
    \u0275\u0275elementStart(1, "button", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                ");
  }
  if (rf & 2) {
    const color_r8 = ctx.$implicit;
    const state_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("active", state_r9 === "active")("color", color_r8)("disabled", state_r9 === "disabled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                    ", color_r8.charAt(0).toUpperCase() + color_r8.slice(1), "\n                  ");
  }
}
function ButtonsComponent_For_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "c-row", 36);
    \u0275\u0275text(2, "\n              ");
    \u0275\u0275elementStart(3, "c-col", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "c-col");
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275repeaterCreate(8, ButtonsComponent_For_167_For_9_Template, 4, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n          ");
  }
  if (rf & 2) {
    const state_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", state_r9.charAt(0).toUpperCase() + state_r9.slice(1), "\n              ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.colors);
  }
}
function ButtonsComponent_For_237_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n          ");
  }
  if (rf & 2) {
    const color_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", color_r10.charAt(0).toUpperCase() + color_r10.slice(1), "\n            ");
  }
}
function ButtonsComponent_For_260_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n          ");
  }
  if (rf & 2) {
    const color_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n              ", color_r11.charAt(0).toUpperCase() + color_r11.slice(1), "\n            ");
  }
}
var _ButtonsComponent = class _ButtonsComponent {
  constructor() {
    this.states = ["normal", "active", "disabled"];
    this.colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
  }
};
_ButtonsComponent.\u0275fac = function ButtonsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonsComponent)();
};
_ButtonsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonsComponent, selectors: [["app-buttons"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 430, vars: 6, consts: [["xs", "12"], ["id", "AngularButton", 1, "mb-4"], [1, "text-body-secondary", "small"], ["fragment", "AngularButton", "href", "components/button"], ["id", "AngularButtonWithIcons", 1, "mb-4"], ["href", "https://icons.coreui.io/"], ["fragment", "AngularButtonWithIcons", "href", "components/button"], [1, "mb-4"], ["ngPreserveWhitespaces", ""], ["href", "components/button#button-components"], ["cButton", "", "color", "primary", 1, "me-1", 3, "routerLink"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-1"], ["cButton", "", "color", "primary", "type", "button", "value", "Input", 1, "me-1"], ["cButton", "", "color", "primary", "type", "submit", "value", "Submit", 1, "me-1"], ["cButton", "", "color", "primary", "type", "reset", "value", "Reset", 1, "me-1"], ["href", "components/button#outline-buttons"], ["href", "components/button#ghost-buttons"], ["href", "components/button#sizes"], ["cButton", "", "color", "primary", "size", "lg", 1, "mb-3"], ["cButton", "", "color", "secondary", "size", "lg", 1, "mb-3"], ["cButton", "", "color", "primary", "size", "sm", 1, "mb-3"], ["cButton", "", "color", "secondary", "size", "sm", 1, "mb-3"], ["href", "components/button#pill-buttons"], ["href", "components/button#square"], ["href", "components/button#disabled-state"], ["cButton", "", "color", "primary", "disabled", "", "size", "lg"], ["cButton", "", "color", "secondary", "disabled", "", "size", "lg"], ["cButton", "", "color", "primary", "disabled", "", "size", "lg", 3, "routerLink"], ["cButton", "", "color", "secondary", "disabled", "", "size", "lg", 3, "routerLink"], ["href", "components/button#block-buttons"], [1, "d-grid", "gap-2"], ["cButton", "", "color", "primary"], [1, "d-grid", "gap-2", "d-md-block"], [1, "d-grid", "gap-2", "col-6", "mx-auto"], [1, "d-grid", "gap-2", "d-md-flex", "justify-content-md-end"], ["cButton", "", "color", "primary", 1, "me-md-2"], [1, "align-items-center", "mb-3"], ["xl", "2", "xs", "12", 1, "mb-3", "mb-xl-0"], ["cButton", "", "color", "link", 3, "active", "disabled"], ["cButton", "", 3, "active", "color", "disabled"], ["cIcon", "", "name", "cil-bell", 1, "me-2"], ["cButton", "", "variant", "outline", 3, "active", "color", "disabled"], ["cButton", "", "variant", "ghost", 3, "active", "color", "disabled"], ["cButton", "", "shape", "rounded-pill", 1, "me-1", 3, "color"], ["cButton", "", "shape", "rounded-0", 1, "me-1", 3, "color"]], template: function ButtonsComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "p", 2);
    \u0275\u0275text(15, "\n          CoreUI includes a bunch of predefined buttons components, each serving its own\n          semantic purpose. Buttons show what action will happen when the user clicks or touches\n          it. CoreUI buttons are used to initialize operations, both in the background or\n          foreground of an experience.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "app-docs-example", 3);
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275repeaterCreate(19, ButtonsComponent_For_20_Template, 15, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n  ");
    \u0275\u0275elementStart(25, "c-col", 0);
    \u0275\u0275text(26, "\n    ");
    \u0275\u0275elementStart(27, "c-card", 4);
    \u0275\u0275text(28, "\n      ");
    \u0275\u0275elementStart(29, "c-card-header");
    \u0275\u0275text(30, "\n        ");
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " ");
    \u0275\u0275elementStart(34, "small");
    \u0275\u0275text(35, "with icons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n      ");
    \u0275\u0275elementStart(38, "c-card-body");
    \u0275\u0275text(39, "\n        ");
    \u0275\u0275elementStart(40, "p", 2);
    \u0275\u0275text(41, "\n          You can combine button with our ");
    \u0275\u0275elementStart(42, "a", 5);
    \u0275\u0275text(43, "CoreUI Icons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, ".\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n        ");
    \u0275\u0275elementStart(46, "app-docs-example", 6);
    \u0275\u0275text(47, "\n          ");
    \u0275\u0275repeaterCreate(48, ButtonsComponent_For_49_Template, 17, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n  ");
    \u0275\u0275elementStart(54, "c-col", 0);
    \u0275\u0275text(55, "\n    ");
    \u0275\u0275elementStart(56, "c-card", 7);
    \u0275\u0275text(57, "\n      ");
    \u0275\u0275elementStart(58, "c-card-header", 8);
    \u0275\u0275text(59, "\n        ");
    \u0275\u0275elementStart(60, "strong");
    \u0275\u0275text(61, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " ");
    \u0275\u0275elementStart(63, "small");
    \u0275\u0275text(64, "Button components");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n      ");
    \u0275\u0275elementStart(67, "c-card-body");
    \u0275\u0275text(68, "\n        ");
    \u0275\u0275elementStart(69, "p", 2);
    \u0275\u0275text(70, "\n          The ");
    \u0275\u0275elementStart(71, "code");
    \u0275\u0275text(72, "<button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " component are designed for\n          ");
    \u0275\u0275elementStart(74, "code");
    \u0275\u0275text(75, "<button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " , ");
    \u0275\u0275elementStart(77, "code");
    \u0275\u0275text(78, "<a>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, " or ");
    \u0275\u0275elementStart(80, "code");
    \u0275\u0275text(81, "<input>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, "\n          elements (though some browsers may apply a slightly different rendering).\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, "\n        ");
    \u0275\u0275elementStart(84, "p", 2);
    \u0275\u0275text(85, "\n          If you're using ");
    \u0275\u0275elementStart(86, "code");
    \u0275\u0275text(87, "<button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " component as ");
    \u0275\u0275elementStart(89, "code");
    \u0275\u0275text(90, "<a>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, "\n          elements that are used to trigger functionality ex. collapsing content, these links\n          should be given a ");
    \u0275\u0275elementStart(92, "code");
    \u0275\u0275text(93, 'role="button"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, " to adequately communicate their\n          meaning to assistive technologies such as screen readers.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n        ");
    \u0275\u0275elementStart(96, "app-docs-example", 9);
    \u0275\u0275text(97, "\n          ");
    \u0275\u0275elementStart(98, "a", 10);
    \u0275\u0275text(99, "\n            Link\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "\n          ");
    \u0275\u0275elementStart(101, "button", 11);
    \u0275\u0275text(102, "\n            Button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, "\n          ");
    \u0275\u0275element(104, "input", 12);
    \u0275\u0275text(105, "\n          ");
    \u0275\u0275element(106, "input", 13);
    \u0275\u0275text(107, "\n          ");
    \u0275\u0275element(108, "input", 14);
    \u0275\u0275text(109, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, "\n  ");
    \u0275\u0275elementStart(114, "c-col", 0);
    \u0275\u0275text(115, "\n    ");
    \u0275\u0275elementStart(116, "c-card", 7);
    \u0275\u0275text(117, "\n      ");
    \u0275\u0275elementStart(118, "c-card-header");
    \u0275\u0275text(119, "\n        ");
    \u0275\u0275elementStart(120, "strong");
    \u0275\u0275text(121, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, " ");
    \u0275\u0275elementStart(123, "small");
    \u0275\u0275text(124, "outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, "\n      ");
    \u0275\u0275elementStart(127, "c-card-body");
    \u0275\u0275text(128, "\n        ");
    \u0275\u0275elementStart(129, "p", 2);
    \u0275\u0275text(130, "\n          If you need a button, but without the strong background colors. Set\n          ");
    \u0275\u0275elementStart(131, "code");
    \u0275\u0275text(132, 'variant="outline"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(133, " prop to remove all background colors.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n        ");
    \u0275\u0275elementStart(135, "app-docs-example", 15);
    \u0275\u0275text(136, "\n          ");
    \u0275\u0275repeaterCreate(137, ButtonsComponent_For_138_Template, 12, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(140, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "\n  ");
    \u0275\u0275elementStart(143, "c-col", 0);
    \u0275\u0275text(144, "\n    ");
    \u0275\u0275elementStart(145, "c-card", 7);
    \u0275\u0275text(146, "\n      ");
    \u0275\u0275elementStart(147, "c-card-header");
    \u0275\u0275text(148, "\n        ");
    \u0275\u0275elementStart(149, "strong");
    \u0275\u0275text(150, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, " ");
    \u0275\u0275elementStart(152, "small");
    \u0275\u0275text(153, "ghost");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(155, "\n      ");
    \u0275\u0275elementStart(156, "c-card-body");
    \u0275\u0275text(157, "\n        ");
    \u0275\u0275elementStart(158, "p", 2);
    \u0275\u0275text(159, "\n          If you need a ghost variant of button, set ");
    \u0275\u0275elementStart(160, "code");
    \u0275\u0275text(161, 'variant="ghost"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, " prop\n          to remove all background colors.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, "\n        ");
    \u0275\u0275elementStart(164, "app-docs-example", 16);
    \u0275\u0275text(165, "\n          ");
    \u0275\u0275repeaterCreate(166, ButtonsComponent_For_167_Template, 12, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(169, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(170, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, "\n  ");
    \u0275\u0275elementStart(172, "c-col", 0);
    \u0275\u0275text(173, "\n    ");
    \u0275\u0275elementStart(174, "c-card", 7);
    \u0275\u0275text(175, "\n      ");
    \u0275\u0275elementStart(176, "c-card-header");
    \u0275\u0275text(177, "\n        ");
    \u0275\u0275elementStart(178, "strong");
    \u0275\u0275text(179, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, " ");
    \u0275\u0275elementStart(181, "small");
    \u0275\u0275text(182, "Sizes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(183, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, "\n      ");
    \u0275\u0275elementStart(185, "c-card-body");
    \u0275\u0275text(186, "\n        ");
    \u0275\u0275elementStart(187, "p", 2);
    \u0275\u0275text(188, "\n          Larger or smaller buttons? Add ");
    \u0275\u0275elementStart(189, "code");
    \u0275\u0275text(190, 'size="lg"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(191, "\n          ");
    \u0275\u0275elementStart(192, "code");
    \u0275\u0275text(193, 'size="sm"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(194, " for additional sizes.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(195, "\n        ");
    \u0275\u0275elementStart(196, "app-docs-example", 17);
    \u0275\u0275text(197, "\n          ");
    \u0275\u0275elementStart(198, "button", 18);
    \u0275\u0275text(199, "\n            Large button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(200, "\n          ");
    \u0275\u0275elementStart(201, "button", 19);
    \u0275\u0275text(202, "\n            Large button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(203, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(204, "\n        ");
    \u0275\u0275elementStart(205, "app-docs-example", 17);
    \u0275\u0275text(206, "\n          ");
    \u0275\u0275element(207, "br");
    \u0275\u0275text(208, "\n          ");
    \u0275\u0275elementStart(209, "button", 20);
    \u0275\u0275text(210, "\n            Small button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(211, "\n          ");
    \u0275\u0275elementStart(212, "button", 21);
    \u0275\u0275text(213, "\n            Small button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(214, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(215, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(216, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(217, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(218, "\n  ");
    \u0275\u0275elementStart(219, "c-col", 0);
    \u0275\u0275text(220, "\n    ");
    \u0275\u0275elementStart(221, "c-card", 7);
    \u0275\u0275text(222, "\n      ");
    \u0275\u0275elementStart(223, "c-card-header");
    \u0275\u0275text(224, "\n        ");
    \u0275\u0275elementStart(225, "strong");
    \u0275\u0275text(226, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(227, " ");
    \u0275\u0275elementStart(228, "small");
    \u0275\u0275text(229, "Pill");
    \u0275\u0275elementEnd();
    \u0275\u0275text(230, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(231, "\n      ");
    \u0275\u0275elementStart(232, "c-card-body");
    \u0275\u0275text(233, "\n        ");
    \u0275\u0275elementStart(234, "app-docs-example", 22);
    \u0275\u0275text(235, "\n          ");
    \u0275\u0275repeaterCreate(236, ButtonsComponent_For_237_Template, 4, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(238, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(239, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(240, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(241, "\n  ");
    \u0275\u0275elementStart(242, "c-col", 0);
    \u0275\u0275text(243, "\n    ");
    \u0275\u0275elementStart(244, "c-card", 7);
    \u0275\u0275text(245, "\n      ");
    \u0275\u0275elementStart(246, "c-card-header");
    \u0275\u0275text(247, "\n        ");
    \u0275\u0275elementStart(248, "strong");
    \u0275\u0275text(249, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(250, " ");
    \u0275\u0275elementStart(251, "small");
    \u0275\u0275text(252, "Square");
    \u0275\u0275elementEnd();
    \u0275\u0275text(253, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(254, "\n      ");
    \u0275\u0275elementStart(255, "c-card-body");
    \u0275\u0275text(256, "\n        ");
    \u0275\u0275elementStart(257, "app-docs-example", 23);
    \u0275\u0275text(258, "\n          ");
    \u0275\u0275repeaterCreate(259, ButtonsComponent_For_260_Template, 4, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(261, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(262, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(263, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(264, "\n  ");
    \u0275\u0275elementStart(265, "c-col", 0);
    \u0275\u0275text(266, "\n    ");
    \u0275\u0275elementStart(267, "c-card", 7);
    \u0275\u0275text(268, "\n      ");
    \u0275\u0275elementStart(269, "c-card-header");
    \u0275\u0275text(270, "\n        ");
    \u0275\u0275elementStart(271, "strong");
    \u0275\u0275text(272, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(273, " ");
    \u0275\u0275elementStart(274, "small");
    \u0275\u0275text(275, "Disabled state");
    \u0275\u0275elementEnd();
    \u0275\u0275text(276, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(277, "\n      ");
    \u0275\u0275elementStart(278, "c-card-body");
    \u0275\u0275text(279, "\n        ");
    \u0275\u0275elementStart(280, "p", 2);
    \u0275\u0275text(281, "\n          Add the ");
    \u0275\u0275elementStart(282, "code");
    \u0275\u0275text(283, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(284, " boolean prop to any ");
    \u0275\u0275elementStart(285, "code");
    \u0275\u0275text(286, "<button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(287, "\n          component to make buttons look inactive. Disabled button has\n          ");
    \u0275\u0275elementStart(288, "code");
    \u0275\u0275text(289, "pointer-events: none");
    \u0275\u0275elementEnd();
    \u0275\u0275text(290, " applied to, disabling hover and active states from\n          triggering.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(291, "\n        ");
    \u0275\u0275elementStart(292, "app-docs-example", 24);
    \u0275\u0275text(293, "\n          ");
    \u0275\u0275elementStart(294, "button", 25);
    \u0275\u0275text(295, "\n            Primary button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(296, "\n          ");
    \u0275\u0275elementStart(297, "button", 26);
    \u0275\u0275text(298, "\n            Button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(299, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(300, "\n        ");
    \u0275\u0275elementStart(301, "p", 2);
    \u0275\u0275text(302, "\n          Disabled buttons using the ");
    \u0275\u0275elementStart(303, "code");
    \u0275\u0275text(304, "<a>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(305, " component act a little different:\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(306, "\n        ");
    \u0275\u0275elementStart(307, "p", 2);
    \u0275\u0275text(308, "\n          ");
    \u0275\u0275elementStart(309, "code");
    \u0275\u0275text(310, "<a>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(311, "s don'tsupport the ");
    \u0275\u0275elementStart(312, "code");
    \u0275\u0275text(313, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(314, " attribute, so\n          CoreUI has to add ");
    \u0275\u0275elementStart(315, "code");
    \u0275\u0275text(316, ".disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(317, " class to make buttons look inactive.\n          CoreUI also has to add to the disabled button component\n          ");
    \u0275\u0275elementStart(318, "code");
    \u0275\u0275text(319, 'aria-disabled="true"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(320, " attribute to show the state of the component\n          to assistive technologies.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(321, "\n        ");
    \u0275\u0275elementStart(322, "app-docs-example", 24);
    \u0275\u0275text(323, "\n          ");
    \u0275\u0275elementStart(324, "a", 27);
    \u0275\u0275text(325, "\n            Primary link\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(326, "\n          ");
    \u0275\u0275elementStart(327, "a", 28);
    \u0275\u0275text(328, "\n            Link\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(329, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(330, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(331, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(332, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(333, "\n  ");
    \u0275\u0275elementStart(334, "c-col", 0);
    \u0275\u0275text(335, "\n    ");
    \u0275\u0275elementStart(336, "c-card", 7);
    \u0275\u0275text(337, "\n      ");
    \u0275\u0275elementStart(338, "c-card-header");
    \u0275\u0275text(339, "\n        ");
    \u0275\u0275elementStart(340, "strong");
    \u0275\u0275text(341, "Angular Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(342, " ");
    \u0275\u0275elementStart(343, "small");
    \u0275\u0275text(344, "Block buttons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(345, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(346, "\n      ");
    \u0275\u0275elementStart(347, "c-card-body");
    \u0275\u0275text(348, "\n        ");
    \u0275\u0275elementStart(349, "p", 2);
    \u0275\u0275text(350, "\n          Create buttons that span the full width of a parent\u2014by using utilities.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(351, "\n        ");
    \u0275\u0275elementStart(352, "app-docs-example", 29);
    \u0275\u0275text(353, "\n          ");
    \u0275\u0275elementStart(354, "div", 30);
    \u0275\u0275text(355, "\n            ");
    \u0275\u0275elementStart(356, "button", 31);
    \u0275\u0275text(357, "Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(358, "\n            ");
    \u0275\u0275elementStart(359, "button", 31);
    \u0275\u0275text(360, "Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(361, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(362, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(363, "\n        ");
    \u0275\u0275elementStart(364, "p", 2);
    \u0275\u0275text(365, "\n          Here we create a responsive variation, starting with vertically stacked buttons until\n          the ");
    \u0275\u0275elementStart(366, "code");
    \u0275\u0275text(367, "md");
    \u0275\u0275elementEnd();
    \u0275\u0275text(368, " breakpoint, where ");
    \u0275\u0275elementStart(369, "code");
    \u0275\u0275text(370, ".d-md-block");
    \u0275\u0275elementEnd();
    \u0275\u0275text(371, " replaces the\n          ");
    \u0275\u0275elementStart(372, "code");
    \u0275\u0275text(373, ".d-grid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(374, " class, thus nullifying the ");
    \u0275\u0275elementStart(375, "code");
    \u0275\u0275text(376, "gap-2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(377, " utility. Resize\n          your browser to see them change.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(378, "\n        ");
    \u0275\u0275elementStart(379, "app-docs-example", 29);
    \u0275\u0275text(380, "\n          ");
    \u0275\u0275elementStart(381, "div", 32);
    \u0275\u0275text(382, "\n            ");
    \u0275\u0275elementStart(383, "button", 31);
    \u0275\u0275text(384, "Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(385, "\n            ");
    \u0275\u0275elementStart(386, "button", 31);
    \u0275\u0275text(387, "Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(388, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(389, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(390, "\n        ");
    \u0275\u0275elementStart(391, "p", 2);
    \u0275\u0275text(392, '\n          You can adjust the width of your block buttons with grid column width classes. For\n          example, for a half-width "block button", use ');
    \u0275\u0275elementStart(393, "code");
    \u0275\u0275text(394, ".col-6");
    \u0275\u0275elementEnd();
    \u0275\u0275text(395, ". Center it\n          horizontally with ");
    \u0275\u0275elementStart(396, "code");
    \u0275\u0275text(397, ".mx-auto");
    \u0275\u0275elementEnd();
    \u0275\u0275text(398, ", too.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(399, "\n        ");
    \u0275\u0275elementStart(400, "app-docs-example", 29);
    \u0275\u0275text(401, "\n          ");
    \u0275\u0275elementStart(402, "div", 33);
    \u0275\u0275text(403, "\n            ");
    \u0275\u0275elementStart(404, "button", 31);
    \u0275\u0275text(405, "Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(406, "\n            ");
    \u0275\u0275elementStart(407, "button", 31);
    \u0275\u0275text(408, "Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(409, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(410, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(411, "\n        ");
    \u0275\u0275elementStart(412, "p", 2);
    \u0275\u0275text(413, "\n          Additional utilities can be used to adjust the alignment of buttons when horizontal.\n          Here we've taken our previous responsive example and added some flex utilities and\n          a margin utility on the button to right align the buttons when they're no longer\n          stacked.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(414, "\n        ");
    \u0275\u0275elementStart(415, "app-docs-example", 29);
    \u0275\u0275text(416, "\n          ");
    \u0275\u0275elementStart(417, "div", 34);
    \u0275\u0275text(418, "\n            ");
    \u0275\u0275elementStart(419, "button", 35);
    \u0275\u0275text(420, "\n              Button\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(421, "\n            ");
    \u0275\u0275elementStart(422, "button", 31);
    \u0275\u0275text(423, "Button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(424, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(425, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(426, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(427, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(428, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(429, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx.states);
    \u0275\u0275advance(29);
    \u0275\u0275repeater(ctx.states);
    \u0275\u0275advance(50);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(39);
    \u0275\u0275repeater(ctx.states);
    \u0275\u0275advance(29);
    \u0275\u0275repeater(ctx.states);
    \u0275\u0275advance(70);
    \u0275\u0275repeater(ctx.colors);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx.colors);
    \u0275\u0275advance(65);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, IconDirective, RouterLink], encapsulation: 2 });
var ButtonsComponent = _ButtonsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonsComponent, { className: "ButtonsComponent", filePath: "src\\app\\documentacion\\buttons\\buttons\\buttons.component.ts", lineNumber: 21 });
})();
export {
  ButtonsComponent
};
//# sourceMappingURL=buttons.component-XSVY45NS.js.map
