import {
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-3RTTW4L4.js";
import {
  DocsExampleComponent
} from "./chunk-J6J7THO6.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormSelectDirective,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/forms/select/select.component.ts
var _SelectComponent = class _SelectComponent {
  constructor() {
  }
};
_SelectComponent.\u0275fac = function SelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectComponent)();
};
_SelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 185, vars: 0, consts: [["xs", "12"], [1, "mb-4"], ["href", "forms/select"], ["aria-label", "Default select example", "cSelect", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "text-body-secondary", "small"], ["href", "forms/select#sizing"], ["aria-label", "Large select example", "cSelect", "", "sizing", "lg", 1, "mb-3"], ["aria-label", "Small select example", "cSelect", "", "sizing", "sm", 1, "mb-3"], ["aria-label", "Multiple select example", "cSelect", "", "multiple", "", "sizing", "lg"], ["aria-label", "Multiple select example", "cSelect", "", "multiple", "", "size", "3", "sizing", "lg"], ["value", "4"], ["href", "forms/select#disabled"], ["aria-label", "Disabled select example", "cSelect", "", "disabled", ""], ["selected", "", "value", "2"]], template: function SelectComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Angular Select");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ");
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n      ");
    \u0275\u0275elementStart(15, "c-card-body");
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "app-docs-example", 2);
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275elementStart(19, "select", 3);
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementStart(21, "option");
    \u0275\u0275text(22, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "option", 4);
    \u0275\u0275text(25, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n            ");
    \u0275\u0275elementStart(27, "option", 5);
    \u0275\u0275text(28, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275elementStart(30, "option", 6);
    \u0275\u0275text(31, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n  ");
    \u0275\u0275elementStart(38, "c-col", 0);
    \u0275\u0275text(39, "\n    ");
    \u0275\u0275elementStart(40, "c-card", 1);
    \u0275\u0275text(41, "\n      ");
    \u0275\u0275elementStart(42, "c-card-header");
    \u0275\u0275text(43, "\n        ");
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45, "Angular Select");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " ");
    \u0275\u0275elementStart(47, "small");
    \u0275\u0275text(48, "Sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, "\n      ");
    \u0275\u0275elementStart(51, "c-card-body");
    \u0275\u0275text(52, "\n        ");
    \u0275\u0275elementStart(53, "p", 7);
    \u0275\u0275text(54, "\n          You may also choose from small and large custom selects to match our similarly sized\n          text inputs.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, "\n        ");
    \u0275\u0275elementStart(56, "app-docs-example", 8);
    \u0275\u0275text(57, "\n          ");
    \u0275\u0275elementStart(58, "select", 9);
    \u0275\u0275text(59, "\n            ");
    \u0275\u0275elementStart(60, "option");
    \u0275\u0275text(61, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, "\n            ");
    \u0275\u0275elementStart(63, "option", 4);
    \u0275\u0275text(64, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275elementStart(66, "option", 5);
    \u0275\u0275text(67, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n            ");
    \u0275\u0275elementStart(69, "option", 6);
    \u0275\u0275text(70, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n          ");
    \u0275\u0275elementStart(73, "select", 10);
    \u0275\u0275text(74, "\n            ");
    \u0275\u0275elementStart(75, "option");
    \u0275\u0275text(76, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n            ");
    \u0275\u0275elementStart(78, "option", 4);
    \u0275\u0275text(79, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, "\n            ");
    \u0275\u0275elementStart(81, "option", 5);
    \u0275\u0275text(82, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, "\n            ");
    \u0275\u0275elementStart(84, "option", 6);
    \u0275\u0275text(85, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n        ");
    \u0275\u0275elementStart(89, "p", 7);
    \u0275\u0275text(90, "\n          The ");
    \u0275\u0275elementStart(91, "code");
    \u0275\u0275text(92, "multiple");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " attribute is also supported:\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\n        ");
    \u0275\u0275elementStart(95, "app-docs-example", 8);
    \u0275\u0275text(96, "\n          ");
    \u0275\u0275elementStart(97, "select", 11);
    \u0275\u0275text(98, "\n            ");
    \u0275\u0275elementStart(99, "option");
    \u0275\u0275text(100, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, "\n            ");
    \u0275\u0275elementStart(102, "option", 4);
    \u0275\u0275text(103, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, "\n            ");
    \u0275\u0275elementStart(105, "option", 5);
    \u0275\u0275text(106, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, "\n            ");
    \u0275\u0275elementStart(108, "option", 6);
    \u0275\u0275text(109, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "\n        ");
    \u0275\u0275elementStart(113, "p", 7);
    \u0275\u0275text(114, "\n          As is the ");
    \u0275\u0275elementStart(115, "code");
    \u0275\u0275text(116, "html size");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, " property:\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "\n        ");
    \u0275\u0275elementStart(119, "app-docs-example", 8);
    \u0275\u0275text(120, "\n          ");
    \u0275\u0275elementStart(121, "select", 12);
    \u0275\u0275text(122, "\n            ");
    \u0275\u0275elementStart(123, "option");
    \u0275\u0275text(124, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n            ");
    \u0275\u0275elementStart(126, "option", 4);
    \u0275\u0275text(127, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, "\n            ");
    \u0275\u0275elementStart(129, "option", 5);
    \u0275\u0275text(130, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, "\n            ");
    \u0275\u0275elementStart(132, "option", 6);
    \u0275\u0275text(133, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n            ");
    \u0275\u0275elementStart(135, "option", 13);
    \u0275\u0275text(136, "Four");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, "\n        ");
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
    \u0275\u0275elementStart(145, "c-card", 1);
    \u0275\u0275text(146, "\n      ");
    \u0275\u0275elementStart(147, "c-card-header");
    \u0275\u0275text(148, "\n        ");
    \u0275\u0275elementStart(149, "strong");
    \u0275\u0275text(150, "Angular Select");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, " ");
    \u0275\u0275elementStart(152, "small");
    \u0275\u0275text(153, "Disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(155, "\n      ");
    \u0275\u0275elementStart(156, "c-card-body");
    \u0275\u0275text(157, "\n        ");
    \u0275\u0275elementStart(158, "p", 7);
    \u0275\u0275text(159, "\n          Add the ");
    \u0275\u0275elementStart(160, "code");
    \u0275\u0275text(161, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, " boolean attribute on a select to give it a grayed out\n          appearance and remove pointer events.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, "\n        ");
    \u0275\u0275elementStart(164, "app-docs-example", 14);
    \u0275\u0275text(165, "\n          ");
    \u0275\u0275elementStart(166, "select", 15);
    \u0275\u0275text(167, "\n            ");
    \u0275\u0275elementStart(168, "option");
    \u0275\u0275text(169, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(170, "\n            ");
    \u0275\u0275elementStart(171, "option", 4);
    \u0275\u0275text(172, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(173, "\n            ");
    \u0275\u0275elementStart(174, "option", 16);
    \u0275\u0275text(175, "Selected: Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(176, "\n            ");
    \u0275\u0275elementStart(177, "option", 6);
    \u0275\u0275text(178, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(179, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(181, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(183, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, "\n");
    \u0275\u0275elementEnd();
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormSelectDirective, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption] });
var SelectComponent = _SelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "src\\app\\documentacion\\forms\\select\\select.component.ts", lineNumber: 13 });
})();
export {
  SelectComponent
};
//# sourceMappingURL=select.component-LKAD3ZH2.js.map
