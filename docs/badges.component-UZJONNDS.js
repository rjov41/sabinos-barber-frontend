import {
  DocsExampleComponent
} from "./chunk-R3RM7AC5.js";
import {
  BadgeComponent,
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/notifications/badges/badges.component.ts
var _BadgesComponent = class _BadgesComponent {
  constructor() {
  }
};
_BadgesComponent.\u0275fac = function BadgesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BadgesComponent)();
};
_BadgesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BadgesComponent, selectors: [["app-badges"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 174, vars: 0, consts: [["lg", "6"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/badge"], ["color", "secondary"], ["cButton", "", "color", "primary"], [1, "visually-hidden"], ["href", "components/badge#contextual-variations"], ["color", "primary", 1, "me-1"], ["color", "success", 1, "me-1"], ["color", "danger", 1, "me-1"], ["color", "warning", 1, "me-1"], ["color", "info", 1, "me-1"], ["color", "light", "textColor", "dark", 1, "me-1"], ["color", "dark", 1, "me-1"], ["href", "components/badge#pill-badges"], ["color", "primary", "shape", "rounded-pill", 1, "me-1"], ["color", "success", "shape", "rounded-pill", 1, "me-1"], ["color", "danger", "shape", "rounded-pill", 1, "me-1"], ["color", "warning", "shape", "rounded-pill", 1, "me-1"], ["color", "info", "shape", "rounded-pill", 1, "me-1"], ["color", "light", "shape", "rounded-pill", "textColor", "dark", 1, "me-1"], ["color", "dark", "shape", "rounded-pill", 1, "me-1"], ["href", "components/badge#positioned"], ["cButton", "", "color", "primary", 1, "position-relative", "mx-2"], ["color", "danger", "position", "top-start", "shape", "rounded-pill"], ["color", "danger", "position", "top-end", "shape", "rounded-pill"], ["color", "danger", "position", "bottom-start", "shape", "rounded-pill"], ["color", "danger", "position", "bottom-end", "shape", "rounded-pill"], ["cButton", "", "color", "primary", 1, "position-relative"], ["color", "danger", "position", "top-end", "shape", "rounded-circle", "cBorder", "light", 1, "p-2"]], template: function BadgesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header");
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Angular Badges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-card-body")(9, "p", 2);
    \u0275\u0275text(10, " Bootstrap badge scale to suit the size of the parent element by using relative font sizing and ");
    \u0275\u0275elementStart(11, "code");
    \u0275\u0275text(12, "em");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " units. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-docs-example", 3)(15, "h1");
    \u0275\u0275text(16, " Example heading ");
    \u0275\u0275elementStart(17, "c-badge", 4);
    \u0275\u0275text(18, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h2");
    \u0275\u0275text(20, " Example heading ");
    \u0275\u0275elementStart(21, "c-badge", 4);
    \u0275\u0275text(22, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "h3");
    \u0275\u0275text(24, " Example heading ");
    \u0275\u0275elementStart(25, "c-badge", 4);
    \u0275\u0275text(26, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h4");
    \u0275\u0275text(28, " Example heading ");
    \u0275\u0275elementStart(29, "c-badge", 4);
    \u0275\u0275text(30, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "h5");
    \u0275\u0275text(32, " Example heading ");
    \u0275\u0275elementStart(33, "c-badge", 4);
    \u0275\u0275text(34, "New");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "h6");
    \u0275\u0275text(36, " Example heading ");
    \u0275\u0275elementStart(37, "c-badge", 4);
    \u0275\u0275text(38, "New");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "p", 2);
    \u0275\u0275text(40, " Badges can be used as part of links or buttons to provide a counter. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "app-docs-example", 3)(42, "button", 5);
    \u0275\u0275text(43, " Notifications ");
    \u0275\u0275elementStart(44, "c-badge", 4);
    \u0275\u0275text(45, "4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "p", 2);
    \u0275\u0275text(47, " Remark that depending on how you use them, badges may be complicated for users of screen readers and related assistive technologies. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 2);
    \u0275\u0275text(49, " Unless the context is clear, consider including additional context with a visually hidden piece of additional text. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "app-docs-example", 3)(51, "button", 5);
    \u0275\u0275text(52, " Profile ");
    \u0275\u0275elementStart(53, "c-badge", 4);
    \u0275\u0275text(54, "9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 6);
    \u0275\u0275text(56, "unread messages");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(57, "c-col", 0)(58, "c-card", 1)(59, "c-card-header");
    \u0275\u0275text(60, "\n        ");
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62, "AngularBadges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " ");
    \u0275\u0275elementStart(64, "small");
    \u0275\u0275text(65, "Contextual variations");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "c-card-body")(68, "p", 2);
    \u0275\u0275text(69, " Add any of the below-mentioned ");
    \u0275\u0275elementStart(70, "code");
    \u0275\u0275text(71, "color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " props to modify the presentation of a badge. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "app-docs-example", 7)(74, "c-badge", 8);
    \u0275\u0275text(75, "primary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "c-badge", 9);
    \u0275\u0275text(77, "success");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "c-badge", 10);
    \u0275\u0275text(79, "danger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "c-badge", 11);
    \u0275\u0275text(81, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "c-badge", 12);
    \u0275\u0275text(83, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "c-badge", 13);
    \u0275\u0275text(85, "light");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "c-badge", 14);
    \u0275\u0275text(87, "dark");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "c-card", 1)(89, "c-card-header");
    \u0275\u0275text(90, "\n        ");
    \u0275\u0275elementStart(91, "strong");
    \u0275\u0275text(92, "Angular Badges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " ");
    \u0275\u0275elementStart(94, "small");
    \u0275\u0275text(95, "Pill badges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "c-card-body")(98, "p", 2);
    \u0275\u0275text(99, " Apply the ");
    \u0275\u0275elementStart(100, "code");
    \u0275\u0275text(101, 'shape="rounded-pill"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " prop to make badges rounded. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "app-docs-example", 15)(104, "c-badge", 16);
    \u0275\u0275text(105, " primary ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "c-badge", 17);
    \u0275\u0275text(107, " success ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "c-badge", 18);
    \u0275\u0275text(109, " danger ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "c-badge", 19);
    \u0275\u0275text(111, " warning ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "c-badge", 20);
    \u0275\u0275text(113, " info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "c-badge", 21);
    \u0275\u0275text(115, " light ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "c-badge", 22);
    \u0275\u0275text(117, " dark ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(118, "c-card", 1)(119, "c-card-header");
    \u0275\u0275text(120, "\n        ");
    \u0275\u0275elementStart(121, "strong");
    \u0275\u0275text(122, "Angular Badges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, " ");
    \u0275\u0275elementStart(124, "small");
    \u0275\u0275text(125, "Positioned");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "c-card-body")(128, "p", 2);
    \u0275\u0275text(129, " Use position prop to modify a component and position it in the corner of a link or button. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "app-docs-example", 23)(131, "button", 24);
    \u0275\u0275text(132, " Profile ");
    \u0275\u0275elementStart(133, "c-badge", 25);
    \u0275\u0275text(134, "99+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "span", 6);
    \u0275\u0275text(136, "unread messages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "button", 24);
    \u0275\u0275text(138, " Profile ");
    \u0275\u0275elementStart(139, "c-badge", 26);
    \u0275\u0275text(140, "99+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "span", 6);
    \u0275\u0275text(142, "unread messages");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(143, "br");
    \u0275\u0275elementStart(144, "button", 24);
    \u0275\u0275text(145, " Profile ");
    \u0275\u0275elementStart(146, "c-badge", 27);
    \u0275\u0275text(147, "99+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "span", 6);
    \u0275\u0275text(149, "unread messages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "button", 24);
    \u0275\u0275text(151, " Profile ");
    \u0275\u0275elementStart(152, "c-badge", 28);
    \u0275\u0275text(153, "99+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "span", 6);
    \u0275\u0275text(155, "unread messages");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(156, "c-card", 1)(157, "c-card-header");
    \u0275\u0275text(158, "\n        ");
    \u0275\u0275elementStart(159, "strong");
    \u0275\u0275text(160, "Angular Badges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, " ");
    \u0275\u0275elementStart(162, "small");
    \u0275\u0275text(163, "Indicator");
    \u0275\u0275elementEnd();
    \u0275\u0275text(164, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "c-card-body")(166, "p", 2);
    \u0275\u0275text(167, " You can also create more generic indicators without a counter using a few more utilities. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "app-docs-example", 23)(169, "button", 29);
    \u0275\u0275text(170, " Profile ");
    \u0275\u0275elementStart(171, "c-badge", 30)(172, "span", 6);
    \u0275\u0275text(173, "unread messages");
    \u0275\u0275elementEnd()()()()()()()();
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, BadgeComponent, ButtonDirective, BorderDirective], styles: ['\n\n.dark-theme[_nghost-%COMP%]     c-badge.bg-light:not([class*="dark:"]), .dark-theme   [_nghost-%COMP%]     c-badge.bg-light:not([class*="dark:"]) {\n  color: var(--cui-body-bg);\n}\n.dark-theme[_nghost-%COMP%]     c-badge.bg-light-gradient:not([class*="dark:"]), .dark-theme   [_nghost-%COMP%]     c-badge.bg-light-gradient:not([class*="dark:"]) {\n  color: var(--cui-body-bg);\n}\n/*# sourceMappingURL=badges.component.css.map */'] });
var BadgesComponent = _BadgesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadgesComponent, { className: "BadgesComponent", filePath: "src\\app\\documentacion\\notifications\\badges\\badges.component.ts", lineNumber: 12 });
})();
export {
  BadgesComponent
};
//# sourceMappingURL=badges.component-UZJONNDS.js.map
