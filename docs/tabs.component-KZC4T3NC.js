import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  IconDirective,
  RoundedDirective,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent
} from "./chunk-JAOOB3SV.js";
import {
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/tabs/tabs.component.ts
function AppTabsComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const \u0275$index_83_r2 = ctx.$index;
    const \u0275$count_83_r3 = ctx.$count;
    \u0275\u0275property("itemKey", \u0275$index_83_r2)("disabled", \u0275$index_83_r2 === \u0275$count_83_r3 - 1);
    \u0275\u0275advance();
    \u0275\u0275property("name", tab_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r1.name, " ");
  }
}
function AppTabsComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-tab-panel", 15);
    \u0275\u0275text(1, " This is some placeholder content the ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pane_r4 = ctx.$implicit;
    const \u0275$index_91_r5 = ctx.$index;
    \u0275\u0275property("itemKey", \u0275$index_91_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pane_r4.name);
  }
}
var _AppTabsComponent = class _AppTabsComponent {
  constructor() {
    this.panes = [
      { name: "Home 01", id: "tab-01", icon: "cilHome" },
      { name: "Profile 02", id: "tab-02", icon: "cilUser" },
      { name: "Contact 03", id: "tab-03", icon: "cilCode" }
    ];
    this.activeItem = signal(0);
  }
  handleActiveItemChange(value) {
    this.activeItem.set(value);
  }
};
_AppTabsComponent.\u0275fac = function AppTabsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppTabsComponent)();
};
_AppTabsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTabsComponent, selectors: [["app-tabs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 95, vars: 15, consts: [["xs", "12"], [1, "mb-3"], [3, "activeItemKeyChange", "activeItemKey"], ["variant", "underline-border"], ["cTab", "", 3, "itemKey"], ["cIcon", "", "name", "cilHome", 1, "me-2"], ["cIcon", "", "name", "cilUser", 1, "me-2"], ["cTab", "", 3, "itemKey", "disabled"], ["cIcon", "", "name", "cilCode", 1, "me-2"], [1, "p-3", 3, "itemKey"], [1, "text-info"], [1, "text-success"], [1, "text-warning"], [3, "activeItemKey"], ["variant", "tabs"], ["cRounded", "bottom", 1, "p-3", "preview", 3, "itemKey"], ["variant", "pills"], ["cIcon", "", 1, "me-2", 3, "name"]], template: function AppTabsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header");
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Angular Tabs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " ");
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "underline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-card-body")(12, "c-tabs", 2);
    \u0275\u0275listener("activeItemKeyChange", function AppTabsComponent_Template_c_tabs_activeItemKeyChange_12_listener($event) {
      return ctx.handleActiveItemChange($event);
    });
    \u0275\u0275elementStart(13, "c-tabs-list", 3)(14, "button", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(15, "svg", 5);
    \u0275\u0275text(16, " Home ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(18, "svg", 6);
    \u0275\u0275text(19, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(21, "svg", 8);
    \u0275\u0275text(22, " Contact ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "c-tabs-content")(24, "c-tab-panel", 9);
    \u0275\u0275text(25, " This is some placeholder content the ");
    \u0275\u0275elementStart(26, "strong", 10);
    \u0275\u0275text(27, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "c-tab-panel", 9);
    \u0275\u0275text(30, " This is some placeholder content the ");
    \u0275\u0275elementStart(31, "strong", 11);
    \u0275\u0275text(32, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "c-tab-panel", 9);
    \u0275\u0275text(35, " This is some placeholder content the ");
    \u0275\u0275elementStart(36, "strong", 12);
    \u0275\u0275text(37, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(39, "c-col", 0)(40, "c-card", 1)(41, "c-card-header");
    \u0275\u0275text(42, "\n        ");
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44, "Angular Tabs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " ");
    \u0275\u0275elementStart(46, "small");
    \u0275\u0275text(47, "tabs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "c-card-body")(50, "c-tabs", 13)(51, "c-tabs-list", 14);
    \u0275\u0275repeaterCreate(52, AppTabsComponent_For_53_Template, 3, 4, "button", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "c-tabs-content");
    \u0275\u0275repeaterCreate(55, AppTabsComponent_For_56_Template, 5, 2, "c-tab-panel", 15, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(57, "c-col", 0)(58, "c-card", 1)(59, "c-card-header");
    \u0275\u0275text(60, "\n        ");
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62, "Angular Tabs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " ");
    \u0275\u0275elementStart(64, "small");
    \u0275\u0275text(65, "pills");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "c-card-body")(68, "c-tabs")(69, "c-tabs-list", 16)(70, "button", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(71, "svg", 5);
    \u0275\u0275text(72, " Home ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(73, "button", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(74, "svg", 6);
    \u0275\u0275text(75, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(76, "button", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(77, "svg", 8);
    \u0275\u0275text(78, " Contact ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "c-tabs-content")(80, "c-tab-panel", 9);
    \u0275\u0275text(81, " This is some placeholder content the ");
    \u0275\u0275elementStart(82, "strong");
    \u0275\u0275text(83, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, " tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "c-tab-panel", 9);
    \u0275\u0275text(86, " This is some placeholder content the ");
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "c-tab-panel", 9);
    \u0275\u0275text(91, " This is some placeholder content the ");
    \u0275\u0275elementStart(92, "strong");
    \u0275\u0275text(93, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, " tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("activeItemKey", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("itemKey", 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("itemKey", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("itemKey", 2)("disabled", ctx.activeItem() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("itemKey", 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("itemKey", 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("itemKey", 2);
    \u0275\u0275advance(16);
    \u0275\u0275property("activeItemKey", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.panes);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.panes);
    \u0275\u0275advance(15);
    \u0275\u0275property("itemKey", 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("itemKey", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("itemKey", 2);
    \u0275\u0275advance(4);
    \u0275\u0275property("itemKey", 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("itemKey", 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("itemKey", 2);
  }
}, dependencies: [
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RoundedDirective,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  IconDirective
] });
var AppTabsComponent = _AppTabsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTabsComponent, { className: "AppTabsComponent", filePath: "src\\app\\documentacion\\base\\tabs\\tabs.component.ts", lineNumber: 37 });
})();
export {
  AppTabsComponent
};
//# sourceMappingURL=tabs.component-KZC4T3NC.js.map
