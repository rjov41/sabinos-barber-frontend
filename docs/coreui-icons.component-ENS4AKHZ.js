import {
  DocsLinkComponent
} from "./chunk-R3RM7AC5.js";
import {
  brand_exports,
  flag_exports,
  free_exports
} from "./chunk-UAVO64J3.js";
import {
  ActivatedRoute,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  IconDirective,
  IconSetService,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TU2APFZU.js";
import {
  __spreadValues
} from "./chunk-6WCCERUZ.js";

// src/app/documentacion/icons/coreui-icons.component.ts
var _forTrack0 = ($index, $item) => $item[0];
function CoreUIIconsComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 3);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("md", 3)("sm", 4)("xl", 2)("xs", 6);
    \u0275\u0275advance();
    \u0275\u0275property("name", icon_r1[0])("title", icon_r1[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toKebabCase(icon_r1[0]));
  }
}
var _CoreUIIconsComponent = class _CoreUIIconsComponent {
  constructor(route, iconSet) {
    this.route = route;
    this.iconSet = iconSet;
    this.title = "CoreUI Icons";
    iconSet.icons = __spreadValues(__spreadValues(__spreadValues({}, free_exports), brand_exports), flag_exports);
  }
  ngOnInit() {
    const path = this.route?.routeConfig?.path;
    let prefix = "cil";
    if (path === "coreui-icons") {
      this.title = `${this.title} - Free`;
      prefix = "cil";
    } else if (path === "brands") {
      this.title = `${this.title} - Brands`;
      prefix = "cib";
    } else if (path === "flags") {
      this.title = `${this.title} - Flags`;
      prefix = "cif";
    }
    this.icons = this.getIconsView(prefix);
  }
  toKebabCase(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }
  getIconsView(prefix) {
    return Object.entries(this.iconSet.icons).filter((icon) => {
      return icon[0].startsWith(prefix);
    });
  }
};
_CoreUIIconsComponent.\u0275fac = function CoreUIIconsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CoreUIIconsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(IconSetService));
};
_CoreUIIconsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoreUIIconsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275ProvidersFeature([IconSetService]), \u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [["href", "https://github.com/coreui/coreui-icons", "text", "GitHub"], [1, "text-center"], [1, "mb-5", 3, "md", "sm", "xl", "xs"], ["cIcon", "", "size", "3xl", 3, "name", "title"]], template: function CoreUIIconsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-card")(1, "c-card-header");
    \u0275\u0275text(2);
    \u0275\u0275element(3, "app-docs-link", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "c-card-body")(5, "c-row", 1);
    \u0275\u0275repeaterCreate(6, CoreUIIconsComponent_For_7_Template, 4, 7, "c-col", 2, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.title, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.icons);
  }
}, dependencies: [
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  ColComponent,
  DocsLinkComponent,
  IconDirective,
  RowComponent
], encapsulation: 2 });
var CoreUIIconsComponent = _CoreUIIconsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoreUIIconsComponent, { className: "CoreUIIconsComponent", filePath: "src\\app\\documentacion\\icons\\coreui-icons.component.ts", lineNumber: 23 });
})();
export {
  CoreUIIconsComponent
};
//# sourceMappingURL=coreui-icons.component-ENS4AKHZ.js.map
