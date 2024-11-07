import {
  DocsExampleComponent
} from "./chunk-J6J7THO6.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  SpinnerComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/spinners/spinners.component.ts
var _SpinnersComponent = class _SpinnersComponent {
  constructor() {
  }
};
_SpinnersComponent.\u0275fac = function SpinnersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpinnersComponent)();
};
_SpinnersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnersComponent, selectors: [["app-spinners"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 187, vars: 0, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/spinner"], ["href", "components/spinner#colors"], ["color", "primary"], ["color", "secondary"], ["color", "success"], ["color", "danger"], ["color", "warning"], ["color", "info"], ["color", "light"], ["color", "dark"], ["href", "components/spinner#growing-spinner"], ["variant", "grow"], ["color", "primary", "variant", "grow"], ["color", "secondary", "variant", "grow"], ["color", "success", "variant", "grow"], ["color", "danger", "variant", "grow"], ["color", "warning", "variant", "grow"], ["color", "info", "variant", "grow"], ["color", "light", "variant", "grow"], ["color", "dark", "variant", "grow"], ["href", "components/spinner#size"], ["size", "sm"], ["size", "sm", "variant", "grow"], ["href", "components/spinner#buttons"], ["cButton", "", "disabled", "", 1, "m-1"], ["aria-hidden", "true", "size", "sm"], ["aria-hidden", "true", "size", "sm", "variant", "grow"]], template: function SpinnersComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Angular Spinner");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ");
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "Border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n      ");
    \u0275\u0275elementStart(15, "c-card-body");
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "p", 2);
    \u0275\u0275text(18, "\n          Use the border spinners for a lightweight loading indicator.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n        ");
    \u0275\u0275elementStart(20, "app-docs-example", 3);
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275element(22, "c-spinner");
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275elementStart(25, "p", 2);
    \u0275\u0275text(26, "\n          The border spinner uses ");
    \u0275\u0275elementStart(27, "code");
    \u0275\u0275text(28, "currentColor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " for its ");
    \u0275\u0275elementStart(30, "code");
    \u0275\u0275text(31, "border-color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, ".\n          You can use any of our text color utilities on the standard spinner.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n        ");
    \u0275\u0275elementStart(34, "app-docs-example", 4);
    \u0275\u0275text(35, "\n          ");
    \u0275\u0275element(36, "c-spinner", 5);
    \u0275\u0275text(37, "\n          ");
    \u0275\u0275element(38, "c-spinner", 6);
    \u0275\u0275text(39, "\n          ");
    \u0275\u0275element(40, "c-spinner", 7);
    \u0275\u0275text(41, "\n          ");
    \u0275\u0275element(42, "c-spinner", 8);
    \u0275\u0275text(43, "\n          ");
    \u0275\u0275element(44, "c-spinner", 9);
    \u0275\u0275text(45, "\n          ");
    \u0275\u0275element(46, "c-spinner", 10);
    \u0275\u0275text(47, "\n          ");
    \u0275\u0275element(48, "c-spinner", 11);
    \u0275\u0275text(49, "\n          ");
    \u0275\u0275element(50, "c-spinner", 12);
    \u0275\u0275text(51, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, "\n  ");
    \u0275\u0275elementStart(56, "c-col", 0);
    \u0275\u0275text(57, "\n    ");
    \u0275\u0275elementStart(58, "c-card", 1);
    \u0275\u0275text(59, "\n      ");
    \u0275\u0275elementStart(60, "c-card-header");
    \u0275\u0275text(61, "\n        ");
    \u0275\u0275elementStart(62, "strong");
    \u0275\u0275text(63, "Angular Spinner");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " ");
    \u0275\u0275elementStart(65, "small");
    \u0275\u0275text(66, "Growing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n      ");
    \u0275\u0275elementStart(69, "c-card-body");
    \u0275\u0275text(70, "\n        ");
    \u0275\u0275elementStart(71, "p", 2);
    \u0275\u0275text(72, "\n          If you don'tfancy a border spinner, switch to the grow spinner. While it\n          doesn't technically spin, it does repeatedly grow!\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "\n        ");
    \u0275\u0275elementStart(74, "app-docs-example", 13);
    \u0275\u0275text(75, "\n          ");
    \u0275\u0275element(76, "c-spinner", 14);
    \u0275\u0275text(77, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n        ");
    \u0275\u0275elementStart(79, "p", 2);
    \u0275\u0275text(80, "\n          Once again, this spinner is built with ");
    \u0275\u0275elementStart(81, "code");
    \u0275\u0275text(82, "currentColor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, ", so you can easily\n          change its appearance. Here it is in blue, along with the supported variants.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "\n        ");
    \u0275\u0275elementStart(85, "app-docs-example", 13);
    \u0275\u0275text(86, "\n          ");
    \u0275\u0275element(87, "c-spinner", 15);
    \u0275\u0275text(88, "\n          ");
    \u0275\u0275element(89, "c-spinner", 16);
    \u0275\u0275text(90, "\n          ");
    \u0275\u0275element(91, "c-spinner", 17);
    \u0275\u0275text(92, "\n          ");
    \u0275\u0275element(93, "c-spinner", 18);
    \u0275\u0275text(94, "\n          ");
    \u0275\u0275element(95, "c-spinner", 19);
    \u0275\u0275text(96, "\n          ");
    \u0275\u0275element(97, "c-spinner", 20);
    \u0275\u0275text(98, "\n          ");
    \u0275\u0275element(99, "c-spinner", 21);
    \u0275\u0275text(100, "\n          ");
    \u0275\u0275element(101, "c-spinner", 22);
    \u0275\u0275text(102, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, "\n  ");
    \u0275\u0275elementStart(107, "c-col", 0);
    \u0275\u0275text(108, "\n    ");
    \u0275\u0275elementStart(109, "c-card", 1);
    \u0275\u0275text(110, "\n      ");
    \u0275\u0275elementStart(111, "c-card-header");
    \u0275\u0275text(112, "\n        ");
    \u0275\u0275elementStart(113, "strong");
    \u0275\u0275text(114, "Angular Spinner");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, " ");
    \u0275\u0275elementStart(116, "small");
    \u0275\u0275text(117, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(119, "\n      ");
    \u0275\u0275elementStart(120, "c-card-body");
    \u0275\u0275text(121, "\n        ");
    \u0275\u0275elementStart(122, "p", 2);
    \u0275\u0275text(123, "\n          Add ");
    \u0275\u0275elementStart(124, "code");
    \u0275\u0275text(125, 'size="sm"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, " property to make a smaller spinner that can quickly\n          be used within other components.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(127, "\n        ");
    \u0275\u0275elementStart(128, "app-docs-example", 23);
    \u0275\u0275text(129, "\n          ");
    \u0275\u0275element(130, "c-spinner", 24);
    \u0275\u0275text(131, "\n          ");
    \u0275\u0275element(132, "c-spinner", 25);
    \u0275\u0275text(133, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, "\n  ");
    \u0275\u0275elementStart(138, "c-col", 0);
    \u0275\u0275text(139, "\n    ");
    \u0275\u0275elementStart(140, "c-card", 1);
    \u0275\u0275text(141, "\n      ");
    \u0275\u0275elementStart(142, "c-card-header");
    \u0275\u0275text(143, "\n        ");
    \u0275\u0275elementStart(144, "strong");
    \u0275\u0275text(145, "Angular Spinner");
    \u0275\u0275elementEnd();
    \u0275\u0275text(146, " ");
    \u0275\u0275elementStart(147, "small");
    \u0275\u0275text(148, "Buttons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n      ");
    \u0275\u0275elementStart(151, "c-card-body");
    \u0275\u0275text(152, "\n        ");
    \u0275\u0275elementStart(153, "p", 2);
    \u0275\u0275text(154, "\n          Use spinners within buttons to indicate an action is currently processing or taking\n          place. You may also swap the text out of the spinner element and utilize button text\n          as needed.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(155, "\n        ");
    \u0275\u0275elementStart(156, "app-docs-example", 26);
    \u0275\u0275text(157, "\n          ");
    \u0275\u0275elementStart(158, "button", 27);
    \u0275\u0275text(159, "\n            ");
    \u0275\u0275element(160, "c-spinner", 28);
    \u0275\u0275text(161, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, "\n          ");
    \u0275\u0275elementStart(163, "button", 27);
    \u0275\u0275text(164, "\n            ");
    \u0275\u0275element(165, "c-spinner", 28);
    \u0275\u0275text(166, "\n            Loading...\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, "\n        ");
    \u0275\u0275elementStart(169, "app-docs-example", 26);
    \u0275\u0275text(170, "\n          ");
    \u0275\u0275element(171, "br");
    \u0275\u0275text(172, "\n          ");
    \u0275\u0275elementStart(173, "button", 27);
    \u0275\u0275text(174, "\n            ");
    \u0275\u0275element(175, "c-spinner", 29);
    \u0275\u0275text(176, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(177, "\n          ");
    \u0275\u0275elementStart(178, "button", 27);
    \u0275\u0275text(179, "\n            ");
    \u0275\u0275element(180, "c-spinner", 29);
    \u0275\u0275text(181, "\n            Loading...\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(183, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(185, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(186, "\n");
    \u0275\u0275elementEnd();
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, SpinnerComponent, ButtonDirective] });
var SpinnersComponent = _SpinnersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnersComponent, { className: "SpinnersComponent", filePath: "src\\app\\documentacion\\base\\spinners\\spinners.component.ts", lineNumber: 12 });
})();
export {
  SpinnersComponent
};
//# sourceMappingURL=spinners.component-BR6KV4O4.js.map
