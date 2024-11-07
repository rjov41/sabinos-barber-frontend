import {
  DocsExampleComponent
} from "./chunk-J6J7THO6.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormLabelDirective,
  RowComponent
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

// src/app/documentacion/forms/ranges/ranges.component.ts
var _RangesComponent = class _RangesComponent {
  constructor() {
  }
};
_RangesComponent.\u0275fac = function RangesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RangesComponent)();
};
_RangesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RangesComponent, selectors: [["app-ranges"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 144, vars: 0, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "forms/range"], ["cLabel", "", "for", "customRange1"], ["cFormControl", "", "id", "customRange1", "type", "range"], ["href", "forms/range#disabled"], ["cLabel", "", "for", "disabledRange"], ["cFormControl", "", "disabled", "", "id", "disabledRange", "type", "range"], ["href", "forms/range#min-and-max"], ["cLabel", "", "for", "customRange2"], ["cFormControl", "", "id", "customRange2", "max", "5", "min", "0", "type", "range", "value", "3"], ["href", "forms/range#steps"], ["cLabel", "", "for", "customRange3"], ["cFormControl", "", "id", "customRange3", "max", "5", "min", "0", "step", "0.5", "type", "range", "value", "3"]], template: function RangesComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Angular Range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ");
    \u0275\u0275element(11, "small");
    \u0275\u0275text(12, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n      ");
    \u0275\u0275elementStart(14, "c-card-body");
    \u0275\u0275text(15, "\n        ");
    \u0275\u0275elementStart(16, "p", 2);
    \u0275\u0275text(17, "\n          Create custom ");
    \u0275\u0275elementStart(18, "code");
    \u0275\u0275text(19, '<input type="range">');
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " controls\n          with ");
    \u0275\u0275elementStart(21, "code");
    \u0275\u0275text(22, '<input cFormControl type="range">');
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, ".\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275elementStart(25, "app-docs-example", 3);
    \u0275\u0275text(26, "\n          ");
    \u0275\u0275elementStart(27, "label", 4);
    \u0275\u0275text(28, "Example range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n          ");
    \u0275\u0275element(30, "input", 5);
    \u0275\u0275text(31, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n  ");
    \u0275\u0275elementStart(36, "c-col", 0);
    \u0275\u0275text(37, "\n    ");
    \u0275\u0275elementStart(38, "c-card", 1);
    \u0275\u0275text(39, "\n      ");
    \u0275\u0275elementStart(40, "c-card-header");
    \u0275\u0275text(41, "\n        ");
    \u0275\u0275elementStart(42, "strong");
    \u0275\u0275text(43, "Angular Range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " ");
    \u0275\u0275elementStart(45, "small");
    \u0275\u0275text(46, "Disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n      ");
    \u0275\u0275elementStart(49, "c-card-body");
    \u0275\u0275text(50, "\n        ");
    \u0275\u0275elementStart(51, "p", 2);
    \u0275\u0275text(52, "\n          Add the ");
    \u0275\u0275elementStart(53, "code");
    \u0275\u0275text(54, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " boolean attribute on an input to give it\n          a grayed out appearance and remove pointer events.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n        ");
    \u0275\u0275elementStart(57, "app-docs-example", 6);
    \u0275\u0275text(58, "\n          ");
    \u0275\u0275elementStart(59, "label", 7);
    \u0275\u0275text(60, "Disabled range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, "\n          ");
    \u0275\u0275element(62, "input", 8);
    \u0275\u0275text(63, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n  ");
    \u0275\u0275elementStart(68, "c-col", 0);
    \u0275\u0275text(69, "\n    ");
    \u0275\u0275elementStart(70, "c-card", 1);
    \u0275\u0275text(71, "\n      ");
    \u0275\u0275elementStart(72, "c-card-header");
    \u0275\u0275text(73, "\n        ");
    \u0275\u0275elementStart(74, "strong");
    \u0275\u0275text(75, "Angular Range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " ");
    \u0275\u0275elementStart(77, "small");
    \u0275\u0275text(78, "Min and max");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, "\n      ");
    \u0275\u0275elementStart(81, "c-card-body");
    \u0275\u0275text(82, "\n        ");
    \u0275\u0275elementStart(83, "p", 2);
    \u0275\u0275text(84, "\n          Range inputs have implicit values for ");
    \u0275\u0275elementStart(85, "code");
    \u0275\u0275text(86, "min-0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, " and\n          ");
    \u0275\u0275elementStart(88, "code");
    \u0275\u0275text(89, "max-100");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, ", respectively.\n          You may specify new values for those using the ");
    \u0275\u0275elementStart(91, "code");
    \u0275\u0275text(92, "min");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " and\n          ");
    \u0275\u0275elementStart(94, "code");
    \u0275\u0275text(95, "max");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, " attributes.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, "\n        ");
    \u0275\u0275elementStart(98, "app-docs-example", 9);
    \u0275\u0275text(99, "\n          ");
    \u0275\u0275elementStart(100, "label", 10);
    \u0275\u0275text(101, "Example range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "\n          ");
    \u0275\u0275element(103, "input", 11);
    \u0275\u0275text(104, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "\n  ");
    \u0275\u0275elementStart(109, "c-col", 0);
    \u0275\u0275text(110, "\n    ");
    \u0275\u0275elementStart(111, "c-card", 1);
    \u0275\u0275text(112, "\n      ");
    \u0275\u0275elementStart(113, "c-card-header");
    \u0275\u0275text(114, "\n        ");
    \u0275\u0275elementStart(115, "strong");
    \u0275\u0275text(116, "Angular Range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, " ");
    \u0275\u0275elementStart(118, "small");
    \u0275\u0275text(119, "Steps");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(121, "\n      ");
    \u0275\u0275elementStart(122, "c-card-body");
    \u0275\u0275text(123, "\n        ");
    \u0275\u0275elementStart(124, "p", 2);
    \u0275\u0275text(125, '\n          By default, range inputs "snap" to integer values. To change\n          this, you can specify a ');
    \u0275\u0275elementStart(126, "code");
    \u0275\u0275text(127, "step");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, " value. In the example below,\n          we double the number of steps by using\n          ");
    \u0275\u0275elementStart(129, "code");
    \u0275\u0275text(130, 'step="0.5"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(131, ".\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, "\n        ");
    \u0275\u0275elementStart(133, "app-docs-example", 12);
    \u0275\u0275text(134, "\n          ");
    \u0275\u0275elementStart(135, "label", 13);
    \u0275\u0275text(136, "Example range");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, "\n          ");
    \u0275\u0275element(138, "input", 14);
    \u0275\u0275text(139, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(140, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(143, "\n");
    \u0275\u0275elementEnd();
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormLabelDirective, FormControlDirective] });
var RangesComponent = _RangesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RangesComponent, { className: "RangesComponent", filePath: "src\\app\\documentacion\\forms\\ranges\\ranges.component.ts", lineNumber: 12 });
})();
export {
  RangesComponent
};
//# sourceMappingURL=ranges.component-2PMJKU4B.js.map
