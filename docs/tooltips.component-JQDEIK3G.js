import {
  DocsExampleComponent
} from "./chunk-72S5C6XO.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RouterLink,
  RowComponent,
  TextColorDirective,
  TooltipDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/tooltips/tooltips.component.ts
var _c0 = () => [];
function TooltipsComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Vivamus sagittis lacus vel augue laoreet rutrum ");
    \u0275\u0275elementStart(1, "i", 13);
    \u0275\u0275text(2, "faucibus");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ". ");
  }
}
var _TooltipsComponent = class _TooltipsComponent {
  constructor() {
  }
};
_TooltipsComponent.\u0275fac = function TooltipsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TooltipsComponent)();
};
_TooltipsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TooltipsComponent, selectors: [["app-tooltips"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 6, consts: [["tooltipContent", ""], ["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/tooltip"], [1, "text-body-secondary"], ["cTooltip", "Tooltip text", 3, "routerLink", "cTooltipVisible"], ["cTooltip", "Tooltip text", 3, "routerLink"], ["cTooltip", "Tooltip text", "href", ""], ["cButton", "", "cTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "cTooltipPlacement", "top", "color", "secondary", 1, "me-1"], ["cButton", "", "cTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "cTooltipPlacement", "right", "color", "secondary", 1, "me-1"], ["cButton", "", "cTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "cTooltipPlacement", "bottom", "color", "secondary", 1, "me-1"], ["cButton", "", "cTooltipPlacement", "left", "color", "secondary", 1, "me-1", 3, "cTooltip"], ["cTextColor", "warning"]], template: function TooltipsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 1)(2, "c-card", 2)(3, "c-card-header");
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Angular Tooltip");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " ");
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Basic example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-card-body")(12, "p", 3);
    \u0275\u0275text(13, " Hover over the links below to see tooltips: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-docs-example", 4)(15, "p", 5);
    \u0275\u0275text(16, " Tight pants next level keffiyeh ");
    \u0275\u0275elementStart(17, "a", 6);
    \u0275\u0275text(18, " you probably ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " haven'theard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel ");
    \u0275\u0275elementStart(20, "a", 7);
    \u0275\u0275text(21, " have a ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney''s cleanse vegan chambray. A really ironic artisan ");
    \u0275\u0275elementStart(23, "a", 8);
    \u0275\u0275text(24, " whatever keytar ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " scenester farm-to-table banksy Austin ");
    \u0275\u0275elementStart(26, "a", 8);
    \u0275\u0275text(27, " twitter handle ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " freegan cred raw denim single-origin coffee viral. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p", 3);
    \u0275\u0275text(30, " Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "app-docs-example", 4)(32, "button", 9);
    \u0275\u0275text(33, "Tooltip on top ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 10);
    \u0275\u0275text(35, "Tooltip on right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 11);
    \u0275\u0275text(37, "Tooltip on bottom ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 12);
    \u0275\u0275text(39, "Tooltip on left ");
    \u0275\u0275template(40, TooltipsComponent_ng_template_40_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const tooltipContent_r1 = \u0275\u0275reference(41);
    \u0275\u0275advance(17);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0))("cTooltipVisible", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(18);
    \u0275\u0275property("cTooltip", tooltipContent_r1);
  }
}, dependencies: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TooltipDirective, RouterLink, ButtonDirective] });
var TooltipsComponent = _TooltipsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TooltipsComponent, { className: "TooltipsComponent", filePath: "src\\app\\documentacion\\base\\tooltips\\tooltips.component.ts", lineNumber: 13 });
})();
export {
  TooltipsComponent
};
//# sourceMappingURL=tooltips.component-JQDEIK3G.js.map
