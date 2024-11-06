import {
  DocsExampleComponent
} from "./chunk-72S5C6XO.js";
import {
  BgColorDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  ColDirective,
  PlaceholderAnimationDirective,
  PlaceholderDirective,
  RouterLink,
  RowComponent,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/placeholders/placeholders.component.ts
var _PlaceholdersComponent = class _PlaceholdersComponent {
  constructor() {
  }
  ngOnInit() {
  }
};
_PlaceholdersComponent.\u0275fac = function PlaceholdersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlaceholdersComponent)();
};
_PlaceholdersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceholdersComponent, selectors: [["app-placeholders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 149, vars: 0, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/placeholder"], [1, "d-flex", "justify-content-around", "p-3"], [2, "width", "18rem"], ["cCardImg", "top", "loading", "lazy", "src", "./assets/images/angular.jpg"], ["cCardTitle", ""], ["cCardText", ""], ["cButton", "", "cCol", "7", "routerLink", "./"], ["aria-label", "Placeholder", "cCardImg", "top", "focusable", "false", "height", "162", "preserveAspectRatio", "xMidYMid slice", "role", "img", "width", "100%", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#868e96", "height", "100%", "width", "100%"], ["cCardTitle", "", "cPlaceholderAnimation", "glow"], ["cCol", "6", "cPlaceholder", ""], ["cCardText", "", "cPlaceholderAnimation", "glow"], ["cCol", "", "xs", "7", "cPlaceholder", "", 1, "me-1"], ["cCol", "4", "cPlaceholder", "", 1, "me-1"], ["cCol", "6", "cPlaceholder", "", 1, "me-1"], ["cCol", "8", "cPlaceholder", "", 1, "me-1"], ["cPlaceholderAnimation", "glow"], ["cButton", "", "cCol", "7", "cPlaceholder", "", "color", "primary", "disabled", "", "routerLink", "./"], ["aria-hidden", "true"], ["cButton", "", "cCol", "4", "cPlaceholder", "", "disabled", ""], ["href", "components/placeholder#width"], ["cPlaceholder", "", 1, "w-75"], ["cPlaceholder", "", 2, "width", "30%"], ["href", "components/placeholder#color"], ["cCol", "12", "cPlaceholder", ""], ["cBgColor", "primary", "cCol", "12", "cPlaceholder", ""], ["cBgColor", "secondary", "cCol", "12", "cPlaceholder", ""], ["cBgColor", "success", "cCol", "12", "cPlaceholder", ""], ["cBgColor", "danger", "cCol", "12", "cPlaceholder", ""], ["cBgColor", "warning", "cCol", "12", "cPlaceholder", ""], ["cBgColor", "info", "cCol", "12", "cPlaceholder", ""], ["cBgColor", "light", "cCol", "12", "cPlaceholder", ""], ["cBgColor", "dark", "cCol", "12", "cPlaceholder", ""], ["href", "components/placeholder#sizing"], ["cCol", "12", "cPlaceholder", "", "cPlaceholderSize", "lg"], ["cCol", "12", "cPlaceholder", "", "cPlaceholderSize", "sm"], ["cCol", "12", "cPlaceholder", "", "cPlaceholderSize", "xs"], ["href", "components/placeholder#animation"], ["cPlaceholderAnimation", "wave"]], template: function PlaceholdersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header")(4, "strong");
    \u0275\u0275text(5, "Angular Placeholder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-card-body")(7, "p", 2);
    \u0275\u0275text(8, ' In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two. ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-docs-example", 3)(10, "div", 4)(11, "c-card", 5);
    \u0275\u0275element(12, "img", 6);
    \u0275\u0275elementStart(13, "c-card-body")(14, "h5", 7);
    \u0275\u0275text(15, "Card title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 8);
    \u0275\u0275text(17, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 9);
    \u0275\u0275text(19, "Go somewhere");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "c-card", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 10)(22, "title");
    \u0275\u0275text(23, "Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "rect", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "c-card-body")(26, "h5", 12);
    \u0275\u0275element(27, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 14);
    \u0275\u0275element(29, "span", 15)(30, "span", 16)(31, "span", 16)(32, "span", 17)(33, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 19);
    \u0275\u0275element(35, "a", 20);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(36, "c-card", 1)(37, "c-card-header")(38, "strong");
    \u0275\u0275text(39, "Angular Placeholder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "c-card-body")(41, "p", 2);
    \u0275\u0275text(42, " Create placeholders with the ");
    \u0275\u0275elementStart(43, "code");
    \u0275\u0275text(44, "cPlaceholder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " directive and a grid column cCol directive (e.g., ");
    \u0275\u0275elementStart(46, "code");
    \u0275\u0275text(47, 'cCol="6"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, ") to set the ");
    \u0275\u0275elementStart(49, "code");
    \u0275\u0275text(50, "width");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, ". They can replace the text inside an element or be added as a modifier to an existing component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "app-docs-example", 3)(53, "p", 21);
    \u0275\u0275element(54, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "button", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "c-card", 1)(57, "c-card-header")(58, "strong");
    \u0275\u0275text(59, "Angular Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "small");
    \u0275\u0275text(61, " Width");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "c-card-body")(63, "p", 2);
    \u0275\u0275text(64, " You can change the ");
    \u0275\u0275elementStart(65, "code");
    \u0275\u0275text(66, "width");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " through grid column classes, width utilities, or inline styles. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "app-docs-example", 23);
    \u0275\u0275element(69, "span", 13)(70, "span", 24)(71, "span", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "c-card", 1)(73, "c-card-header")(74, "strong");
    \u0275\u0275text(75, "Angular Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "small");
    \u0275\u0275text(77, " Color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "c-card-body")(79, "p", 2);
    \u0275\u0275text(80, " By default, the ");
    \u0275\u0275elementStart(81, "code");
    \u0275\u0275text(82, "cPlaceholder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, " uses ");
    \u0275\u0275elementStart(84, "code");
    \u0275\u0275text(85, "currentColor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, ". This can be overridden with a custom color or utility class. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "app-docs-example", 26);
    \u0275\u0275element(88, "span", 27)(89, "span", 28)(90, "span", 29)(91, "span", 30)(92, "span", 31)(93, "span", 32)(94, "span", 33)(95, "span", 34)(96, "span", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "c-card", 1)(98, "c-card-header")(99, "strong");
    \u0275\u0275text(100, "Angular Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "small");
    \u0275\u0275text(102, " Sizing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "c-card-body")(104, "p", 2);
    \u0275\u0275text(105, " The size of ");
    \u0275\u0275elementStart(106, "code");
    \u0275\u0275text(107, "cPlaceholder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "s are based on the typographic style of the parent element. Customize them with ");
    \u0275\u0275elementStart(109, "code");
    \u0275\u0275text(110, "size");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, " prop: ");
    \u0275\u0275elementStart(112, "code");
    \u0275\u0275text(113, "lg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, ", ");
    \u0275\u0275elementStart(115, "code");
    \u0275\u0275text(116, "sm");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, ", or ");
    \u0275\u0275elementStart(118, "code");
    \u0275\u0275text(119, "xs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "app-docs-example", 36);
    \u0275\u0275element(122, "span", 37)(123, "span", 27)(124, "span", 38)(125, "span", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "c-card", 1)(127, "c-card-header")(128, "strong");
    \u0275\u0275text(129, "Angular Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "small");
    \u0275\u0275text(131, " Animation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "c-card-body")(133, "p", 2);
    \u0275\u0275text(134, " Animate placeholders with ");
    \u0275\u0275elementStart(135, "code");
    \u0275\u0275text(136, 'cPlaceholderAnimation="glow"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, " or ");
    \u0275\u0275elementStart(138, "code");
    \u0275\u0275text(139, 'cPlaceholderAnimation="wave"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(140, " to better convey the perception of something being ");
    \u0275\u0275elementStart(141, "em");
    \u0275\u0275text(142, "actively");
    \u0275\u0275elementEnd();
    \u0275\u0275text(143, " loaded. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "app-docs-example", 40)(145, "p", 19);
    \u0275\u0275element(146, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "p", 41);
    \u0275\u0275element(148, "span", 27);
    \u0275\u0275elementEnd()()()()()();
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, CardImgDirective, CardTitleDirective, CardTextDirective, ButtonDirective, ColDirective, RouterLink, PlaceholderAnimationDirective, PlaceholderDirective, BgColorDirective] });
var PlaceholdersComponent = _PlaceholdersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceholdersComponent, { className: "PlaceholdersComponent", filePath: "src\\app\\documentacion\\base\\placeholders\\placeholders.component.ts", lineNumber: 13 });
})();
export {
  PlaceholdersComponent
};
//# sourceMappingURL=placeholders.component-RVRSGRFL.js.map
