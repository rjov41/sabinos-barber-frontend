import {
  DocsExampleComponent
} from "./chunk-72S5C6XO.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CollapseDirective,
  RowComponent,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/collapses/collapses.component.ts
var _CollapsesComponent = class _CollapsesComponent {
  constructor() {
    this.collapses = [false, false, false, false];
  }
  toggleCollapse(id) {
    this.collapses[id] = !this.collapses[id];
  }
};
_CollapsesComponent.\u0275fac = function CollapsesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CollapsesComponent)();
};
_CollapsesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollapsesComponent, selectors: [["app-collapses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 143, vars: 5, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/collapse"], ["cButton", "", "color", "primary", 1, "me-1", 3, "click"], ["cCollapse", "", 3, "visible"], [1, "shadow", "mt-3"], ["ngPreserveWhitespaces", ""], ["cButton", "", "color", "primary", 1, "me-1", "mb-3", 3, "click"], [2, "min-height", "130px"], ["cCollapse", "", "horizontal", "", 2, "max-width", "260px", 3, "visible"], [1, "shadow"], [2, "width", "260px"], ["href", "components/collapse#multiple-targets"], ["xs", "6"], [1, "mt-3"]], template: function CollapsesComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Angular Collapse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "p", 2);
    \u0275\u0275text(15, "You can use a link or a button component.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "app-docs-example", 3);
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275elementStart(19, "a", 4);
    \u0275\u0275listener("click", function CollapsesComponent_Template_a_click_19_listener() {
      return ctx.toggleCollapse(0);
    });
    \u0275\u0275text(20, "Link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275elementStart(22, "button", 4);
    \u0275\u0275listener("click", function CollapsesComponent_Template_button_click_22_listener() {
      return ctx.toggleCollapse(0);
    });
    \u0275\u0275text(23, "\n            Button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n          ");
    \u0275\u0275elementStart(25, "div", 5);
    \u0275\u0275text(26, "\n            ");
    \u0275\u0275elementStart(27, "c-card", 6);
    \u0275\u0275text(28, "\n              ");
    \u0275\u0275elementStart(29, "c-card-body");
    \u0275\u0275text(30, "\n                Anim pariatur cliche reprehenderit, enim eiusmod high life\n                accusamus terry richardson ad squid. Nihil anim keffiyeh\n                helvetica, craft beer labore wes anderson cred nesciunt sapiente\n                ea proident.\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, "\n            ");
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
    \u0275\u0275elementStart(42, "c-card-header", 7);
    \u0275\u0275text(43, "\n        ");
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45, "Angular Collapse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " ");
    \u0275\u0275elementStart(47, "small");
    \u0275\u0275text(48, "horizontal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, "\n      ");
    \u0275\u0275elementStart(51, "c-card-body");
    \u0275\u0275text(52, "\n        ");
    \u0275\u0275elementStart(53, "p", 2);
    \u0275\u0275text(54, "\n          Add the ");
    \u0275\u0275elementStart(55, "code");
    \u0275\u0275text(56, "horizontal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " property to transition the width\n          instead of height and set a width on the immediate child element.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, "\n        ");
    \u0275\u0275elementStart(59, "app-docs-example", 3);
    \u0275\u0275text(60, "\n          ");
    \u0275\u0275elementStart(61, "button", 8);
    \u0275\u0275listener("click", function CollapsesComponent_Template_button_click_61_listener() {
      return ctx.toggleCollapse(1);
    });
    \u0275\u0275text(62, "\n            Button\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "\n          ");
    \u0275\u0275elementStart(64, "div", 9);
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275elementStart(66, "div", 10);
    \u0275\u0275text(67, "\n              ");
    \u0275\u0275elementStart(68, "c-card", 11);
    \u0275\u0275text(69, "\n                ");
    \u0275\u0275elementStart(70, "c-card-body", 12);
    \u0275\u0275text(71, "\n                  This is some placeholder content for a horizontal collapse.\n                  It's hidden by default and shown when triggered.\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n  ");
    \u0275\u0275elementStart(80, "c-col", 0);
    \u0275\u0275text(81, "\n    ");
    \u0275\u0275elementStart(82, "c-card", 1);
    \u0275\u0275text(83, "\n      ");
    \u0275\u0275elementStart(84, "c-card-header");
    \u0275\u0275text(85, "\n        ");
    \u0275\u0275elementStart(86, "strong");
    \u0275\u0275text(87, "Angular Collapse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " ");
    \u0275\u0275elementStart(89, "small");
    \u0275\u0275text(90, " multi target");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "\n      ");
    \u0275\u0275elementStart(93, "c-card-body");
    \u0275\u0275text(94, "\n        ");
    \u0275\u0275elementStart(95, "p", 2);
    \u0275\u0275text(96, "\n          A ");
    \u0275\u0275elementStart(97, "code");
    \u0275\u0275text(98, "<c-button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, " can show and hide multiple elements.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "\n        ");
    \u0275\u0275elementStart(101, "app-docs-example", 13);
    \u0275\u0275text(102, "\n          ");
    \u0275\u0275elementStart(103, "button", 4);
    \u0275\u0275listener("click", function CollapsesComponent_Template_button_click_103_listener() {
      return ctx.toggleCollapse(2);
    });
    \u0275\u0275text(104, "\n            Toggle first element\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "\n          ");
    \u0275\u0275elementStart(106, "button", 4);
    \u0275\u0275listener("click", function CollapsesComponent_Template_button_click_106_listener() {
      return ctx.toggleCollapse(3);
    });
    \u0275\u0275text(107, "\n            Toggle second element\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "\n          ");
    \u0275\u0275elementStart(109, "button", 4);
    \u0275\u0275listener("click", function CollapsesComponent_Template_button_click_109_listener() {
      ctx.toggleCollapse(2);
      return ctx.toggleCollapse(3);
    });
    \u0275\u0275text(110, "\n            Toggle both\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n          ");
    \u0275\u0275elementStart(112, "c-row", 9);
    \u0275\u0275text(113, "\n            ");
    \u0275\u0275elementStart(114, "c-col", 14);
    \u0275\u0275text(115, "\n              ");
    \u0275\u0275elementStart(116, "div", 5);
    \u0275\u0275text(117, "\n                ");
    \u0275\u0275elementStart(118, "c-card", 15);
    \u0275\u0275text(119, "\n                  ");
    \u0275\u0275elementStart(120, "c-card-body");
    \u0275\u0275text(121, "\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life\n                    accusamus terry richardson ad squid. Nihil anim keffiyeh\n                    helvetica, craft beer labore wes anderson cred nesciunt\n                    sapiente ea proident.\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(124, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n            ");
    \u0275\u0275elementStart(126, "c-col", 14);
    \u0275\u0275text(127, "\n              ");
    \u0275\u0275elementStart(128, "div", 5);
    \u0275\u0275text(129, "\n                ");
    \u0275\u0275elementStart(130, "c-card", 15);
    \u0275\u0275text(131, "\n                  ");
    \u0275\u0275elementStart(132, "c-card-body");
    \u0275\u0275text(133, "\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life\n                    accusamus terry richardson ad squid. Nihil anim keffiyeh\n                    helvetica, craft beer labore wes anderson cred nesciunt\n                    sapiente ea proident.\n                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, "\n            ");
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
    \u0275\u0275text(142, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(25);
    \u0275\u0275property("visible", ctx.collapses[0]);
    \u0275\u0275advance(36);
    \u0275\u0275attribute("aria-expanded", ctx.collapses[1]);
    \u0275\u0275advance(5);
    \u0275\u0275property("visible", ctx.collapses[1]);
    \u0275\u0275advance(50);
    \u0275\u0275property("visible", ctx.collapses[2]);
    \u0275\u0275advance(12);
    \u0275\u0275property("visible", ctx.collapses[3]);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, CollapseDirective] });
var CollapsesComponent = _CollapsesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollapsesComponent, { className: "CollapsesComponent", filePath: "src\\app\\documentacion\\base\\collapses\\collapses.component.ts", lineNumber: 12 });
})();
export {
  CollapsesComponent
};
//# sourceMappingURL=collapses.component-7FNOFDIE.js.map
