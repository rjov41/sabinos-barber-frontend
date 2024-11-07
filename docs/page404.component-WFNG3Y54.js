import {
  ButtonDirective,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  IconDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/pages/page404/page404.component.ts
var _Page404Component = class _Page404Component {
  constructor() {
  }
};
_Page404Component.\u0275fac = function Page404Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Page404Component)();
};
_Page404Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page404Component, selectors: [["app-page404"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "6"], [1, "clearfix"], [1, "float-start", "display-3", "me-4"], [1, "pt-3"], [1, "text-body-secondary", "float-start"], [1, "input-prepend"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilMagnifyingGlass"], ["cFormControl", "", "placeholder", "What are you looking for?", "type", "text"], ["cButton", "", "color", "info"]], template: function Page404Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "div", 3)(5, "h1", 4);
    \u0275\u0275text(6, "404");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 5);
    \u0275\u0275text(8, "Oops! You're lost.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10, " The page you are looking for was not found. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "c-input-group", 7)(12, "span", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(13, "svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275text(16, "Search");
    \u0275\u0275elementEnd()()()()()();
  }
}, dependencies: [ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective] });
var Page404Component = _Page404Component;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page404Component, { className: "Page404Component", filePath: "src\\app\\documentacion\\pages\\page404\\page404.component.ts", lineNumber: 12 });
})();
export {
  Page404Component
};
//# sourceMappingURL=page404.component-WFNG3Y54.js.map
