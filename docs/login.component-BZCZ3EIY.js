import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  IconDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  NgStyle,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/pages/login/login.component.ts
var _c0 = () => ({ "minWidth.%": 44 });
var _LoginComponent = class _LoginComponent {
  constructor() {
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 3, consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], ["breakpoint", "md"], [1, "justify-content-center"], ["lg", "10", "xl", "8"], [1, "p-4"], ["cForm", ""], [1, "text-body-secondary"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["autoComplete", "username", "cFormControl", "", "placeholder", "Username"], [1, "mb-4"], ["cIcon", "", "name", "cilLockLocked"], ["autoComplete", "current-password", "cFormControl", "", "placeholder", "Password", "type", "password"], ["xs", "6"], ["cButton", "", "color", "primary", 1, "px-4"], ["xs", "6", 1, "text-right"], ["cButton", "", "color", "link", 1, "px-0"], [1, "text-white", "bg-primary", "py-5", 3, "ngStyle"], [1, "text-center"], ["cButton", "", "color", "primary", "routerLink", "/register", 1, "mt-3", 3, "active"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "c-container", 1)(2, "c-row", 2)(3, "c-col", 3)(4, "c-card-group")(5, "c-card", 4)(6, "c-card-body")(7, "form", 5)(8, "h1");
    \u0275\u0275text(9, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 6);
    \u0275\u0275text(11, "Sign In to your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "c-input-group", 7)(13, "span", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(14, "svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "c-input-group", 11)(17, "span", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(18, "svg", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(19, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "c-row")(21, "c-col", 14)(22, "button", 15);
    \u0275\u0275text(23, " Login ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "c-col", 16)(25, "button", 17);
    \u0275\u0275text(26, " Forgot password? ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(27, "c-card", 18)(28, "c-card-body", 19)(29, "div")(30, "h2");
    \u0275\u0275text(31, "Sign up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 20);
    \u0275\u0275text(35, " Register Now! ");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(27);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275property("active", true);
  }
}, dependencies: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\documentacion\\pages\\login\\login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-BZCZ3EIY.js.map
