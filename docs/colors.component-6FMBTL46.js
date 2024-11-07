import {
  getStyle,
  rgbToHex
} from "./chunk-OOW7M2IT.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DOCUMENT,
  NgClass,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  Renderer2,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-6WCCERUZ.js";

// src/app/documentacion/theme/colors.component.ts
var _c0 = ["*"];
var _ColorsComponent = class _ColorsComponent {
  constructor(document, renderer) {
    this.document = document;
    this.renderer = renderer;
  }
  themeColors() {
    Array.from(this.document.querySelectorAll(".theme-color")).forEach((element) => {
      const htmlElement = element;
      const background = getStyle("background-color", htmlElement) ?? "#fff";
      const table = this.renderer.createElement("table");
      table.innerHTML = `
          <table class="table w-100">
            <tr>
              <td class="text-muted">HEX:</td>
              <td class="font-weight-bold">${rgbToHex(background)}</td>
            </tr>
            <tr>
              <td class="text-muted">RGB:</td>
              <td class="font-weight-bold">${background}</td>
            </tr>
          </table>
        `;
      this.renderer.appendChild(htmlElement.parentNode, table);
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.themeColors();
  }
};
_ColorsComponent.\u0275fac = function ColorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ColorsComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Renderer2));
};
_ColorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 0, consts: [[1, "mb-4"], ["color", "primary"], ["color", "secondary"], ["color", "success"], ["color", "danger"], ["color", "warning"], ["color", "info"], ["color", "light"], ["color", "dark"]], template: function ColorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-card", 0)(1, "c-card-header");
    \u0275\u0275text(2, " Theme colors ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-card-body")(4, "c-row")(5, "app-theme-color", 1)(6, "h6");
    \u0275\u0275text(7, "Brand Primary Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "app-theme-color", 2)(9, "h6");
    \u0275\u0275text(10, "Brand Secondary Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-theme-color", 3)(12, "h6");
    \u0275\u0275text(13, "Brand Success Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "app-theme-color", 4)(15, "h6");
    \u0275\u0275text(16, "Brand Danger Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "app-theme-color", 5)(18, "h6");
    \u0275\u0275text(19, "Brand Warning Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "app-theme-color", 6)(21, "h6");
    \u0275\u0275text(22, "Brand Info Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "app-theme-color", 7)(24, "h6");
    \u0275\u0275text(25, "Brand Light Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "app-theme-color", 8)(27, "h6");
    \u0275\u0275text(28, "Brand Dark Color");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: () => [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ThemeColorComponent], encapsulation: 2 });
var ColorsComponent = _ColorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorsComponent, { className: "ColorsComponent", filePath: "src\\app\\documentacion\\theme\\colors.component.ts", lineNumber: 12 });
})();
var _ThemeColorComponent = class _ThemeColorComponent {
  constructor() {
    this.color = "";
    this.colorClasses = {
      "theme-color w-75 rounded mb-3": true
    };
    this.display = "contents";
  }
  ngOnInit() {
    this.colorClasses = __spreadProps(__spreadValues({}, this.colorClasses), {
      [`bg-${this.color}`]: !!this.color
    });
  }
};
_ThemeColorComponent.\u0275fac = function ThemeColorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeColorComponent)();
};
_ThemeColorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeColorComponent, selectors: [["app-theme-color"]], hostVars: 2, hostBindings: function ThemeColorComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275styleProp("display", ctx.display);
  }
}, inputs: { color: "color" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [["xl", "2", "md", "4", "sm", "6", "xs", "12", 1, "my-4", "ms-4"], [2, "padding-top", "75%", 3, "ngClass"]], template: function ThemeColorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "c-col", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx.colorClasses);
  }
}, dependencies: [ColComponent, NgClass], encapsulation: 2 });
var ThemeColorComponent = _ThemeColorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeColorComponent, { className: "ThemeColorComponent", filePath: "src\\app\\documentacion\\theme\\colors.component.ts", lineNumber: 63 });
})();
export {
  ColorsComponent,
  ThemeColorComponent
};
//# sourceMappingURL=colors.component-6FMBTL46.js.map
