import {
  CalloutComponent,
  IconDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  NgTemplateOutlet,
  RouterLink
} from "./chunk-JAOOB3SV.js";
import {
  ChangeDetectorRef,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate6
} from "./chunk-TU2APFZU.js";

// package.json
var package_default = {
  name: "sabinos-app",
  version: "5.2.22",
  copyright: "Copyright 2024",
  license: "MIT",
  author: "The CoreUI Team (https://github.com/orgs/coreui/people) and contributors",
  homepage: "https://coreui.io/angular",
  config: {
    theme: "default",
    coreui_library_short_version: "5.2",
    coreui_library_docs_url: "https://coreui.io/angular/docs/"
  },
  scripts: {
    ng: "ng",
    start: "ng serve -o",
    build: "ng build",
    watch: "ng build --watch --configuration development",
    test: "ng test"
  },
  private: true,
  dependencies: {
    "@angular/animations": "^18.2.9",
    "@angular/cdk": "^18.2.10",
    "@angular/common": "^18.2.9",
    "@angular/compiler": "^18.2.9",
    "@angular/core": "^18.2.9",
    "@angular/forms": "^18.2.9",
    "@angular/language-service": "^18.2.9",
    "@angular/platform-browser": "^18.2.9",
    "@angular/platform-browser-dynamic": "^18.2.9",
    "@angular/router": "^18.2.9",
    "@coreui/angular": "~5.2.22",
    "@coreui/angular-chartjs": "~5.2.22",
    "@coreui/chartjs": "~4.0.0",
    "@coreui/coreui": "~5.2.0",
    "@coreui/icons": "^3.0.1",
    "@coreui/icons-angular": "~5.2.22",
    "@coreui/utils": "^2.0.2",
    "chart.js": "^4.4.6",
    "lodash-es": "^4.17.21",
    "ngx-scrollbar": "^13.0.3",
    rxjs: "~7.8.1",
    tslib: "^2.8.0",
    "zone.js": "~0.14.10"
  },
  devDependencies: {
    "@angular-devkit/build-angular": "^18.2.10",
    "@angular/cli": "^18.2.10",
    "@angular/compiler-cli": "^18.2.9",
    "@angular/localize": "^18.2.9",
    "@types/jasmine": "^5.1.4",
    "@types/lodash-es": "^4.17.12",
    "@types/node": "^20.17.1",
    "jasmine-core": "^5.4.0",
    karma: "^6.4.4",
    "karma-chrome-launcher": "^3.2.0",
    "karma-coverage": "^2.2.1",
    "karma-jasmine": "^5.1.0",
    "karma-jasmine-html-reporter": "^2.1.0",
    typescript: "~5.5.4"
  },
  engines: {
    node: "^18.19.0 || ^20.9.0",
    npm: ">= 9"
  }
};

// src/components/docs-example/docs-example.component.ts
var _c0 = ["*"];
var _c1 = () => [];
var _DocsExampleComponent = class _DocsExampleComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this._href = "https://coreui.io/angular/docs/";
  }
  get exampleClass() {
    return true;
  }
  get href() {
    return this._href;
  }
  set href(value) {
    const version = package_default?.config?.coreui_library_short_version;
    const docsUrl = package_default?.config?.coreui_library_docs_url ?? "https://coreui.io/angular/";
    this._href = `${docsUrl}${value}`;
  }
  ngAfterContentInit() {
  }
  ngAfterViewInit() {
    this.changeDetectorRef.markForCheck();
  }
};
_DocsExampleComponent.\u0275fac = function DocsExampleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocsExampleComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_DocsExampleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocsExampleComponent, selectors: [["app-docs-example"]], hostVars: 2, hostBindings: function DocsExampleComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classProp("example", ctx.exampleClass);
  }
}, inputs: { fragment: "fragment", href: "href" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 12, vars: 5, consts: [["variant", "underline-border", 1, "border-bottom", "w-100"], ["cNavLink", "", 3, "active", "fragment", "routerLink"], ["cIcon", "", "name", "cilMediaPlay", 1, "me-2"], ["cNavLink", "", "target", "_blank", 3, "href"], ["cIcon", "", "name", "cilCode", 1, "me-2"], [1, "tab-content", "rounded-bottom"], [1, "tab-pane", "active", "show", "p-3", "preview", "fade"]], template: function DocsExampleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "c-nav", 0)(1, "c-nav-item")(2, "a", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 2);
    \u0275\u0275text(4, " Preview ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "c-nav-item")(6, "a", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(7, "svg", 4);
    \u0275\u0275text(8, " Code ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
    \u0275\u0275projection(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("active", true)("fragment", ctx.fragment)("routerLink", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx.href, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [NavComponent, NavItemComponent, NavLinkDirective, RouterLink, IconDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=/sabinos-barber-frontend/docs-example.component.css.map */"], changeDetection: 0 });
var DocsExampleComponent = _DocsExampleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocsExampleComponent, { className: "DocsExampleComponent", filePath: "src\\components\\docs-example\\docs-example.component.ts", lineNumber: 24 });
})();

// src/components/docs-link/docs-link.component.ts
var _DocsLinkComponent = class _DocsLinkComponent {
  constructor() {
    this.href = "https://coreui.io/angular/docs/";
  }
  get hostClasses() {
    return {
      "float-end": true
    };
  }
  ngOnInit() {
    this.href = this.name ? `https://coreui.io/angular/docs/components/${this.name}` : this.href;
  }
};
_DocsLinkComponent.\u0275fac = function DocsLinkComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocsLinkComponent)();
};
_DocsLinkComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocsLinkComponent, selectors: [["app-docs-link"]], hostVars: 2, hostBindings: function DocsLinkComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classMap(ctx.hostClasses);
  }
}, inputs: { href: "href", name: "name", text: "text" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "float-end"], ["rel", "noreferrer noopener", "target", "_blank", 1, "card-header-action", 3, "href"], [1, "text-body-secondary"]], template: function DocsLinkComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "small", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx.text) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "docs");
  }
} });
var DocsLinkComponent = _DocsLinkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocsLinkComponent, { className: "DocsLinkComponent", filePath: "src\\components\\docs-link\\docs-link.component.ts", lineNumber: 9 });
})();

// src/components/docs-callout/docs-callout.component.ts
var _c02 = ["*"];
function DocsCalloutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DocsCalloutComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate6(" An Angular ", ctx_r0.name, " component", ctx_r0.plural ? "s" : "", " ", ctx_r0.plural ? "have" : "has", " been created as a native Angular version of Bootstrap ", ctx_r0.name, ". ", ctx_r0.name, " ", ctx_r0.plural ? "are" : "is", " delivered with some new features, variants, and unique design that matches CoreUI Design System requirements. ");
  }
}
function DocsCalloutComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocsCalloutComponent_ng_template_2_Conditional_0_Template, 2, 6, "p");
    \u0275\u0275projection(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3, " For more information please visit our official ");
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "documentation of CoreUI Components Library for Angular.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!!ctx_r0.name ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("href", ctx_r0.href, \u0275\u0275sanitizeUrl);
  }
}
var _DocsCalloutComponent = class _DocsCalloutComponent {
  constructor() {
    this.name = "";
    this._href = "https://coreui.io/angular/docs/";
  }
  get href() {
    return this._href;
  }
  set href(value) {
    const version = package_default?.config?.coreui_library_short_version;
    const docsUrl = package_default?.config?.coreui_library_docs_url ?? "https://coreui.io/angular/";
    const path = value;
    this._href = `${docsUrl}${path}`;
  }
  get plural() {
    return this.name?.slice(-1) === "s";
  }
};
_DocsCalloutComponent.\u0275fac = function DocsCalloutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocsCalloutComponent)();
};
_DocsCalloutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocsCalloutComponent, selectors: [["app-docs-callout"]], inputs: { name: "name", href: "href" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c02, decls: 4, vars: 1, consts: [["default", ""], ["color", "info", 1, "bg-white:dark:bg-transparent"], [4, "ngTemplateOutlet"], ["target", "_blank", 3, "href"]], template: function DocsCalloutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "c-callout", 1);
    \u0275\u0275template(1, DocsCalloutComponent_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DocsCalloutComponent_ng_template_2_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const default_r2 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", default_r2);
  }
}, dependencies: [CalloutComponent, NgTemplateOutlet] });
var DocsCalloutComponent = _DocsCalloutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocsCalloutComponent, { className: "DocsCalloutComponent", filePath: "src\\components\\docs-callout\\docs-callout.component.ts", lineNumber: 13 });
})();

export {
  DocsCalloutComponent,
  DocsExampleComponent,
  DocsLinkComponent
};
//# sourceMappingURL=chunk-NVLXH4OP.js.map
