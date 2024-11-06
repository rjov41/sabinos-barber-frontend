import {
  DocsExampleComponent
} from "./chunk-72S5C6XO.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  PopoverDirective,
  RowComponent,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/popovers/popovers.component.ts
function PopoversComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "h3", 12);
    \u0275\u0275text(2, "\n                Popover Title\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n              ");
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5, "\n                And here\u2019s some amazing content. It\u2019s very engaging. ");
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7, "Right?");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
  }
}
function PopoversComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2, "\n                Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Top!\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
}
var _PopoversComponent = class _PopoversComponent {
  constructor() {
    this.visible = true;
  }
  ngOnInit() {
    setTimeout(() => {
      this.visible = !this.visible;
    }, 3e3);
  }
};
_PopoversComponent.\u0275fac = function PopoversComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PopoversComponent)();
};
_PopoversComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PopoversComponent, selectors: [["app-popovers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 8, consts: [["popoverHtml", ""], ["tooltipHtml", ""], ["xs", "12"], [1, "mb-4"], ["href", "components/popover"], ["cPopoverPlacement", "right", "cButton", "", "color", "danger", "size", "lg", 1, "m-1", 3, "cPopover", "cPopoverTrigger", "cPopoverVisible"], [1, "text-body-secondary", "small"], ["href", "components/popover#four-directions"], ["cButton", "", "cPopoverPlacement", "top", "color", "secondary", 1, "me-1", 3, "cPopoverTrigger", "cPopover"], ["cButton", "", "cPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Right!", "cPopoverPlacement", "right", "color", "secondary", 1, "me-1", 3, "cPopoverTrigger"], ["cButton", "", "cPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Bottom!", "cPopoverPlacement", "bottom", "color", "secondary", 1, "me-1", 3, "cPopoverTrigger"], ["cButton", "", "cPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Left!", "cPopoverPlacement", "left", "color", "secondary", 1, "me-1", 3, "cPopoverTrigger"], [1, "popover-header"], [1, "popover-body"], [1, "text-danger"]], template: function PopoversComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 2);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 3);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Angular Popover");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ");
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "Basic example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n      ");
    \u0275\u0275elementStart(15, "c-card-body");
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "app-docs-example", 4);
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275elementStart(19, "button", 5);
    \u0275\u0275text(20, "\n            Click to toggle popover\n            ");
    \u0275\u0275template(21, PopoversComponent_ng_template_21_Template, 10, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(23, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n  ");
    \u0275\u0275elementStart(29, "c-col", 2);
    \u0275\u0275text(30, "\n    ");
    \u0275\u0275elementStart(31, "c-card", 3);
    \u0275\u0275text(32, "\n      ");
    \u0275\u0275elementStart(33, "c-card-header");
    \u0275\u0275text(34, "\n        ");
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36, "Angular Popover");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " ");
    \u0275\u0275elementStart(38, "small");
    \u0275\u0275text(39, "Four directions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, "\n      ");
    \u0275\u0275elementStart(42, "c-card-body");
    \u0275\u0275text(43, "\n        ");
    \u0275\u0275elementStart(44, "p", 6);
    \u0275\u0275text(45, "\n          Four options are available: top, right, bottom, and left aligned.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n        ");
    \u0275\u0275elementStart(47, "app-docs-example", 7);
    \u0275\u0275text(48, "\n          ");
    \u0275\u0275elementStart(49, "button", 8);
    \u0275\u0275text(50, "Popover on top\n            ");
    \u0275\u0275template(51, PopoversComponent_ng_template_51_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(53, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "\n          ");
    \u0275\u0275elementStart(55, "button", 9);
    \u0275\u0275text(56, "Popover on right\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n          ");
    \u0275\u0275elementStart(58, "button", 10);
    \u0275\u0275text(59, "Popover on bottom\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\n          ");
    \u0275\u0275elementStart(61, "button", 11);
    \u0275\u0275text(62, "Popover on left\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const popoverHtml_r1 = \u0275\u0275reference(22);
    const tooltipHtml_r2 = \u0275\u0275reference(52);
    \u0275\u0275advance(19);
    \u0275\u0275property("cPopover", popoverHtml_r1)("cPopoverTrigger", "click")("cPopoverVisible", ctx.visible);
    \u0275\u0275advance(30);
    \u0275\u0275property("cPopoverTrigger", "hover")("cPopover", tooltipHtml_r2);
    \u0275\u0275advance(6);
    \u0275\u0275property("cPopoverTrigger", "hover");
    \u0275\u0275advance(3);
    \u0275\u0275property("cPopoverTrigger", "hover");
    \u0275\u0275advance(3);
    \u0275\u0275property("cPopoverTrigger", "hover");
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, PopoverDirective] });
var PopoversComponent = _PopoversComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PopoversComponent, { className: "PopoversComponent", filePath: "src\\app\\documentacion\\base\\popovers\\popovers.component.ts", lineNumber: 12 });
})();
export {
  PopoversComponent
};
//# sourceMappingURL=popovers.component-H4HXKK3K.js.map
