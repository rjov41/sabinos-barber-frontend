import {
  DocsExampleComponent
} from "./chunk-72S5C6XO.js";
import {
  AlertComponent,
  AlertHeadingDirective,
  AlertLinkDirective,
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  IconDirective,
  RouterLink,
  RowComponent,
  TemplateIdDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/notifications/alerts/alerts.component.ts
var _c0 = () => [];
function AlertsComponent_Conditional_211_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-alert", 52);
    \u0275\u0275twoWayListener("visibleChange", function AlertsComponent_Conditional_211_Template_c_alert_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.visible[0], $event) || (ctx_r2.visible[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "Go right ahead");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " and click that dismiss over there on the right. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("visible", ctx_r2.visible[0]);
  }
}
function AlertsComponent_Conditional_214_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AlertsComponent_Conditional_214_ng_template_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.visible[1] = false);
    });
    \u0275\u0275elementEnd();
  }
}
function AlertsComponent_Conditional_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AlertsComponent_Conditional_214_ng_template_0_Template, 1, 0, "ng-template", 49);
  }
}
var _AlertsComponent = class _AlertsComponent {
  constructor() {
    this.visible = [true, true];
    this.dismissible = true;
  }
  ngOnInit() {
  }
  onAlertVisibleChange(eventValue = this.visible) {
    this.visible[1] = eventValue;
  }
  onResetDismiss() {
    this.visible = [true, true];
  }
  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }
};
_AlertsComponent.\u0275fac = function AlertsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlertsComponent)();
};
_AlertsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertsComponent, selectors: [["app-alerts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 223, vars: 20, consts: [["alertWithButtonCloseTemplate", "cAlert"], ["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "https://coreui.io/angular/docs/4.0/components/alert#dismissing"], ["href", "components/alert"], ["color", "primary"], ["color", "secondary"], ["color", "success"], ["color", "danger"], ["color", "warning"], ["color", "info"], ["color", "light"], ["color", "dark"], ["color", "primary", "variant", "solid"], ["color", "secondary", "variant", "solid"], ["color", "success", "variant", "solid"], ["color", "danger", "variant", "solid"], ["color", "warning", "variant", "solid"], ["color", "info", "variant", "solid"], ["color", "light", "variant", "solid"], ["color", "dark", "variant", "solid"], ["href", "components/alert#link-color"], ["cAlertLink", "", 3, "routerLink"], ["href", "components/alert#additional-content"], ["cAlertHeading", ""], [1, "mb-0"], ["color", "dark", 1, "d-flex", "align-items-center"], ["cIcon", "", "name", "cilCheck", "size", "xl", 1, "flex-shrink-0", "me-2"], ["color", "secondary", 1, "d-flex", "align-items-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16", "role", "img", "aria-label", "Warning:", 1, "bi", "bi-exclamation-triangle-fill", "flex-shrink-0", "me-2"], ["d", "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"], ["xmlns", "http://www.w3.org/2000/svg", 1, "d-none"], ["id", "check-circle-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], ["id", "info-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"], ["id", "exclamation-triangle-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["color", "primary", 1, "d-flex", "align-items-center"], ["width", "24", "height", "24", "role", "img", "aria-label", "Info:", 1, "bi", "flex-shrink-0", "me-2"], [0, "xlink", "href", "#info-fill"], ["color", "success", 1, "d-flex", "align-items-center"], [0, "xlink", "href", "#check-circle-fill"], ["color", "warning", 1, "d-flex", "align-items-center"], [0, "xlink", "href", "#exclamation-triangle-fill"], ["color", "danger", 1, "d-flex", "align-items-center"], ["href", "components/alert#dismissing"], ["dismissible", "", "color", "warning", "fade", "", 3, "visible"], ["color", "dark", "fade", "", "variant", "solid", 3, "visibleChange", "dismissible", "visible"], ["cTemplateId", "alertButtonCloseTemplate"], ["cButton", "", "color", "primary", 1, "'me-1'", 3, "click"], ["cButton", "", "color", "secondary", 3, "click"], ["dismissible", "", "color", "warning", "fade", "", 3, "visibleChange", "visible"], ["cButtonClose", "", "white", "", 3, "click"]], template: function AlertsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 1)(2, "c-card", 2)(3, "c-card-header")(4, "strong");
    \u0275\u0275text(5, "Angular Alert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-card-body")(7, "p", 3);
    \u0275\u0275text(8, " Angular Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "required");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " contextual ");
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13, "color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " props (e.g., ");
    \u0275\u0275elementStart(15, "code");
    \u0275\u0275text(16, "primary");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "). For inline dismissal, use the ");
    \u0275\u0275elementStart(18, "a", 4);
    \u0275\u0275text(19, " dismissing prop ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " . ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "app-docs-example", 5)(22, "c-alert", 6);
    \u0275\u0275text(23, "A simple primary alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "c-alert", 7);
    \u0275\u0275text(25, "A simple secondary alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "c-alert", 8);
    \u0275\u0275text(27, "A simple success alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "c-alert", 9);
    \u0275\u0275text(29, "A simple danger alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "c-alert", 10);
    \u0275\u0275text(31, "A simple warning alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "c-alert", 11);
    \u0275\u0275text(33, "A simple info alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "c-alert", 12);
    \u0275\u0275text(35, "A simple light alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "c-alert", 13);
    \u0275\u0275text(37, "A simple dark alert\u2014check it out!");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "c-col", 1)(39, "c-card", 2)(40, "c-card-header");
    \u0275\u0275text(41, "\n        ");
    \u0275\u0275elementStart(42, "strong");
    \u0275\u0275text(43, "Angular Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " ");
    \u0275\u0275elementStart(45, "small");
    \u0275\u0275text(46, "solid variant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "c-card-body")(49, "app-docs-example", 5)(50, "c-alert", 14);
    \u0275\u0275text(51, "A solid primary alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "c-alert", 15);
    \u0275\u0275text(53, "A solid secondary alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "c-alert", 16);
    \u0275\u0275text(55, "A solid success alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "c-alert", 17);
    \u0275\u0275text(57, "A solid danger alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "c-alert", 18);
    \u0275\u0275text(59, "A solid warning alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "c-alert", 19);
    \u0275\u0275text(61, "A solid info alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "c-alert", 20);
    \u0275\u0275text(63, "A solid light alert\u2014check it out!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "c-alert", 21);
    \u0275\u0275text(65, "A solid dark alert\u2014check it out!");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(66, "c-col", 1)(67, "c-card", 2)(68, "c-card-header");
    \u0275\u0275text(69, "\n        ");
    \u0275\u0275elementStart(70, "strong");
    \u0275\u0275text(71, "Angular Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " ");
    \u0275\u0275elementStart(73, "small");
    \u0275\u0275text(74, "Link color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "c-card-body")(77, "p", 3);
    \u0275\u0275text(78, " Use the ");
    \u0275\u0275elementStart(79, "code");
    \u0275\u0275text(80, "cAlertLink");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, " directive to immediately give matching colored links inside any alert. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "app-docs-example", 22)(83, "c-alert", 6);
    \u0275\u0275text(84, " A simple primary alert with ");
    \u0275\u0275elementStart(85, "a", 23);
    \u0275\u0275text(86, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, ". Give it a click if you like. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "c-alert", 7);
    \u0275\u0275text(89, " A simple secondary alert with ");
    \u0275\u0275elementStart(90, "a", 23);
    \u0275\u0275text(91, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, ". Give it a click if you like. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "c-alert", 8);
    \u0275\u0275text(94, " A simple success alert with ");
    \u0275\u0275elementStart(95, "a", 23);
    \u0275\u0275text(96, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, ". Give it a click if you like. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "c-alert", 9);
    \u0275\u0275text(99, " A simple danger alert with ");
    \u0275\u0275elementStart(100, "a", 23);
    \u0275\u0275text(101, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, ". Give it a click if you like. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "c-alert", 10);
    \u0275\u0275text(104, " A simple warning alert with ");
    \u0275\u0275elementStart(105, "a", 23);
    \u0275\u0275text(106, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, ". Give it a click if you like. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "c-alert", 11);
    \u0275\u0275text(109, " A simple info alert with ");
    \u0275\u0275elementStart(110, "a", 23);
    \u0275\u0275text(111, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, ". Give it a click if you like. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "c-alert", 12);
    \u0275\u0275text(114, " A simple light alert with ");
    \u0275\u0275elementStart(115, "a", 23);
    \u0275\u0275text(116, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, ". Give it a click if you like. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "c-alert", 13);
    \u0275\u0275text(119, " A simple dark alert with ");
    \u0275\u0275elementStart(120, "a", 23);
    \u0275\u0275text(121, "an example link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, ". Give it a click if you like. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(123, "c-col", 1)(124, "c-card", 2)(125, "c-card-header");
    \u0275\u0275text(126, "\n        ");
    \u0275\u0275elementStart(127, "strong");
    \u0275\u0275text(128, "Angular Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(129, " ");
    \u0275\u0275elementStart(130, "small");
    \u0275\u0275text(131, "Additional content");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "c-card-body")(134, "p", 3);
    \u0275\u0275text(135, " Alert can also incorporate supplementary components & elements like heading, paragraph, and divider. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "app-docs-example", 24)(137, "c-alert", 8)(138, "h4", 25);
    \u0275\u0275text(139, "Well done!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "p");
    \u0275\u0275text(141, " Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(142, "hr");
    \u0275\u0275elementStart(143, "p", 26);
    \u0275\u0275text(144, " Whenever you need to, be sure to use margin utilities to keep things nice and tidy. ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(145, "c-col", 1)(146, "c-card", 2)(147, "c-card-header");
    \u0275\u0275text(148, "\n        ");
    \u0275\u0275elementStart(149, "strong");
    \u0275\u0275text(150, "Angular Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, " ");
    \u0275\u0275elementStart(152, "small");
    \u0275\u0275text(153, "Icons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "c-card-body")(156, "app-docs-example", 5)(157, "c-alert", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(158, "svg", 28);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(159, "div");
    \u0275\u0275text(160, "An example alert with an icon");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "c-alert", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(162, "svg", 30);
    \u0275\u0275element(163, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(164, "div");
    \u0275\u0275text(165, "An example alert with an icon");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(166, "hr");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(167, "svg", 32)(168, "symbol", 33);
    \u0275\u0275element(169, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "symbol", 35);
    \u0275\u0275element(171, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "symbol", 37);
    \u0275\u0275element(173, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(174, "c-alert", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(175, "svg", 39);
    \u0275\u0275element(176, "use", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(177, "div");
    \u0275\u0275text(178, "An example primary alert with an icon");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(179, "c-alert", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(180, "svg", 39);
    \u0275\u0275element(181, "use", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(182, "div");
    \u0275\u0275text(183, "An example success alert with an icon");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "c-alert", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(185, "svg", 39);
    \u0275\u0275element(186, "use", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(187, "div");
    \u0275\u0275text(188, "An example warning alert with an icon");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "c-alert", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(190, "svg", 39);
    \u0275\u0275element(191, "use", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(192, "div");
    \u0275\u0275text(193, "An example danger alert with an icon");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(194, "c-col", 1)(195, "c-card", 2)(196, "c-card-header");
    \u0275\u0275text(197, "\n        ");
    \u0275\u0275elementStart(198, "strong");
    \u0275\u0275text(199, "Angular Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(200, " ");
    \u0275\u0275elementStart(201, "small");
    \u0275\u0275text(202, "Dismissing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(203, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "c-card-body")(205, "p", 3);
    \u0275\u0275text(206, " Alerts can also be easily dismissed. Just add the ");
    \u0275\u0275elementStart(207, "code");
    \u0275\u0275text(208, "dismissible");
    \u0275\u0275elementEnd();
    \u0275\u0275text(209, " prop. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "app-docs-example", 46);
    \u0275\u0275template(211, AlertsComponent_Conditional_211_Template, 4, 1, "c-alert", 47);
    \u0275\u0275elementStart(212, "c-alert", 48, 0);
    \u0275\u0275listener("visibleChange", function AlertsComponent_Template_c_alert_visibleChange_212_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onAlertVisibleChange($event));
    });
    \u0275\u0275template(214, AlertsComponent_Conditional_214_Template, 1, 0, null, 49);
    \u0275\u0275elementStart(215, "strong");
    \u0275\u0275text(216, "Go right ahead");
    \u0275\u0275elementEnd();
    \u0275\u0275text(217, " and click that dismiss over there on the right. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(218, "hr");
    \u0275\u0275elementStart(219, "button", 50);
    \u0275\u0275listener("click", function AlertsComponent_Template_button_click_219_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onToggleDismiss());
    });
    \u0275\u0275text(220, "Toggle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "button", 51);
    \u0275\u0275listener("click", function AlertsComponent_Template_button_click_221_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onResetDismiss());
    });
    \u0275\u0275text(222, "Reset");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const alertWithButtonCloseTemplate_r5 = \u0275\u0275reference(213);
    \u0275\u0275advance(85);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c0));
    \u0275\u0275advance(91);
    \u0275\u0275conditional(ctx.visible[0] ? 211 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("dismissible", ctx.dismissible)("visible", ctx.visible[1]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(alertWithButtonCloseTemplate_r5.dismissible ? 214 : -1);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, AlertComponent, AlertLinkDirective, RouterLink, AlertHeadingDirective, IconDirective, TemplateIdDirective, ButtonCloseDirective, ButtonDirective], styles: [`

.dark-theme[_nghost-%COMP%]     .btn-close, .dark-theme   [_nghost-%COMP%]     .btn-close {
  --cui-btn-close-bg: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba(44, 56, 74, 0.95)'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>") !important;
}
/*# sourceMappingURL=alerts.component.css.map */`] });
var AlertsComponent = _AlertsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertsComponent, { className: "AlertsComponent", filePath: "src\\app\\documentacion\\notifications\\alerts\\alerts.component.ts", lineNumber: 28 });
})();
export {
  AlertsComponent
};
//# sourceMappingURL=alerts.component-C4TKVSVY.js.map
