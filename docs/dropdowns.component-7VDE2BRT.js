import {
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-3RTTW4L4.js";
import {
  DocsExampleComponent
} from "./chunk-R3RM7AC5.js";
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CollapseDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
  NavItemComponent,
  NavLinkDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  RouterLink,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/buttons/dropdowns/dropdowns.component.ts
var _c0 = () => [];
function DropdownsComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown", 10)(1, "button", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 6)(4, "li")(5, "button", 8);
    \u0275\u0275text(6, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "button", 8);
    \u0275\u0275text(9, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "button", 8);
    \u0275\u0275text(12, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275element(14, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "button", 15);
    \u0275\u0275text(17, "Separated link");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", color_r1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
  }
}
function DropdownsComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown", 12)(1, "button", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 53)(4, "span", 18);
    \u0275\u0275text(5, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 6)(7, "li")(8, "button", 8);
    \u0275\u0275text(9, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "button", 15);
    \u0275\u0275text(12, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "button", 15);
    \u0275\u0275text(15, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275element(17, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li")(19, "button", 15);
    \u0275\u0275text(20, "Separated link");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", color_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r2);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
  }
}
var _DropdownsComponent = class _DropdownsComponent {
  constructor() {
    this.colors = ["primary", "secondary", "success", "info", "warning", "danger"];
  }
};
_DropdownsComponent.\u0275fac = function DropdownsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DropdownsComponent)();
};
_DropdownsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownsComponent, selectors: [["app-dropdowns"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 448, vars: 23, consts: [["collapseRef", "cCollapse"], ["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/dropdown#single-button"], ["cButton", "", "cDropdownToggle", "", "color", "secondary"], ["cDropdownMenu", ""], ["cDropdownHeader", ""], ["cDropdownItem", "", 3, "routerLink"], ["cDropdownDivider", ""], ["variant", "btn-group"], ["href", "components/dropdown#split-button"], ["placement", "bottom-start", "variant", "btn-group"], ["href", "components/dropdown#sizing"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "size", "lg"], ["cDropdownItem", ""], ["cButton", "", "color", "secondary", "size", "lg"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "size", "lg", "split", ""], [1, "visually-hidden"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "size", "sm"], ["cButton", "", "color", "secondary", "size", "sm"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "size", "sm", "split", ""], ["href", "components/dropdown#dark-dropdowns"], ["dark", ""], ["cDropdownMenu", "", "cdkTrapFocus", ""], ["colorScheme", "dark", "expand", "lg", 1, "bg-dark"], [3, "fluid"], ["cNavbarBrand", "", "href", "https://coreui.io/angular/", "target", "_blank"], [3, "cNavbarToggler"], ["cCollapse", "", 3, "navbar"], [1, "me-auto", "mb-2", "mb-lg-0"], ["cNavLink", "", 3, "active", "routerLink"], ["cNavLink", "", 3, "routerLink"], ["variant", "nav-item", 3, "popper"], ["cNavLink", "", "cDropdownToggle", ""], ["cDropdownMenu", "", "dark", ""], ["cNavLink", "", "disabled", ""], ["cForm", "", 1, "d-flex"], ["aria-label", "Search", "cFormControl", "", "placeholder", "Search", "type", "search", 1, "me-2"], ["cButton", "", "color", "success", "type", "submit", "variant", "outline"], ["href", "components/dropdown#dropup"], ["direction", "dropup", "variant", "btn-group"], ["cButton", "", "color", "secondary"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", 3, "split"], ["href", "components/dropdown#dropright"], ["direction", "dropend", "variant", "btn-group"], ["href", "components/dropdown#dropleft"], ["direction", "dropstart", "variant", "input-group"], ["href", "components/dropdown#centered"], ["direction", "center", "variant", "btn-group"], ["direction", "dropup-center", "variant", "btn-group", 1, "dropup"], ["cButton", "", "cDropdownToggle", "", 3, "color"], ["cButton", "", 3, "color"], ["cButton", "", "cDropdownToggle", "", "split", "", 3, "color"]], template: function DropdownsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 1)(2, "c-card", 2)(3, "c-card-header");
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " ");
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Single button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-card-body")(12, "p", 3);
    \u0275\u0275text(13, " Here's how you can put them to work with either ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "<button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " elements: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-docs-example", 4)(18, "c-dropdown")(19, "button", 5);
    \u0275\u0275text(20, " Dropdown button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ul", 6)(22, "li")(23, "h6", 7);
    \u0275\u0275text(24, "Header");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "li")(26, "a", 8);
    \u0275\u0275text(27, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "li")(29, "a", 8);
    \u0275\u0275text(30, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li")(32, "a", 8);
    \u0275\u0275text(33, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li");
    \u0275\u0275element(35, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li")(37, "button", 8);
    \u0275\u0275text(38, "Separated link");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(39, "p", 3);
    \u0275\u0275text(40, " The best part is you can do this with any button variant, too: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "app-docs-example", 4);
    \u0275\u0275repeaterCreate(42, DropdownsComponent_For_43_Template, 18, 8, "c-dropdown", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "c-col", 1)(45, "c-card", 2)(46, "c-card-header");
    \u0275\u0275text(47, "\n        ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " ");
    \u0275\u0275elementStart(51, "small");
    \u0275\u0275text(52, "Split button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "c-card-body")(55, "p", 3);
    \u0275\u0275text(56, " Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of boolean prop ");
    \u0275\u0275elementStart(57, "code");
    \u0275\u0275text(58, "split");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " for proper spacing around the dropdown caret. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 3);
    \u0275\u0275text(61, " We use this extra class to reduce the horizontal ");
    \u0275\u0275elementStart(62, "code");
    \u0275\u0275text(63, "padding");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " on either side of the caret by 25% and remove the ");
    \u0275\u0275elementStart(65, "code");
    \u0275\u0275text(66, "margin-left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " that's attached for normal button dropdowns. Those additional changes hold the caret centered in the split button and implement a more properly sized hit area next to the main button. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "app-docs-example", 11);
    \u0275\u0275repeaterCreate(69, DropdownsComponent_For_70_Template, 21, 5, "c-dropdown", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "c-col", 1)(72, "c-card", 2)(73, "c-card-header");
    \u0275\u0275text(74, "\n        ");
    \u0275\u0275elementStart(75, "strong");
    \u0275\u0275text(76, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " ");
    \u0275\u0275elementStart(78, "small");
    \u0275\u0275text(79, "Sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "c-card-body")(82, "p", 3);
    \u0275\u0275text(83, " Button dropdowns work with buttons of all sizes, including default and split dropdown buttons. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "app-docs-example", 13)(85, "c-dropdown", 10)(86, "button", 14);
    \u0275\u0275text(87, " Large button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ul", 6)(89, "li")(90, "button", 15);
    \u0275\u0275text(91, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "li")(93, "button", 15);
    \u0275\u0275text(94, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "li")(96, "button", 15);
    \u0275\u0275text(97, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "li");
    \u0275\u0275element(99, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "li")(101, "button", 15);
    \u0275\u0275text(102, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(103, "c-dropdown", 10)(104, "button", 16);
    \u0275\u0275text(105, " Large split button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "button", 17)(107, "span", 18);
    \u0275\u0275text(108, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "ul", 6)(110, "li")(111, "button", 8);
    \u0275\u0275text(112, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "li")(114, "button", 15);
    \u0275\u0275text(115, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "li")(117, "button", 15);
    \u0275\u0275text(118, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "li");
    \u0275\u0275element(120, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "li")(122, "button", 15);
    \u0275\u0275text(123, "Separated link");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(124, "app-docs-example", 13)(125, "c-dropdown", 10)(126, "button", 19);
    \u0275\u0275text(127, " Small button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "ul", 6)(129, "li")(130, "button", 15);
    \u0275\u0275text(131, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "li")(133, "button", 15);
    \u0275\u0275text(134, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "li")(136, "button", 15);
    \u0275\u0275text(137, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "li");
    \u0275\u0275element(139, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "li")(141, "button", 15);
    \u0275\u0275text(142, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(143, "c-dropdown", 10)(144, "button", 20);
    \u0275\u0275text(145, " Small split button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "button", 21)(147, "span", 18);
    \u0275\u0275text(148, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "ul", 6)(150, "li")(151, "button", 8);
    \u0275\u0275text(152, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "li")(154, "button", 15);
    \u0275\u0275text(155, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "li")(157, "button", 15);
    \u0275\u0275text(158, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "li");
    \u0275\u0275element(160, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "li")(162, "button", 15);
    \u0275\u0275text(163, "Separated link");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(164, "c-col", 1)(165, "c-card", 2)(166, "c-card-header");
    \u0275\u0275text(167, "\n        ");
    \u0275\u0275elementStart(168, "strong");
    \u0275\u0275text(169, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(170, " ");
    \u0275\u0275elementStart(171, "small");
    \u0275\u0275text(172, "dark");
    \u0275\u0275elementEnd();
    \u0275\u0275text(173, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "c-card-body")(175, "p", 3);
    \u0275\u0275text(176, " Opt into darker dropdowns to match a dark navbar or custom style by set ");
    \u0275\u0275elementStart(177, "code");
    \u0275\u0275text(178, "dark");
    \u0275\u0275elementEnd();
    \u0275\u0275text(179, " property. No changes are required to the dropdown items. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "app-docs-example", 22)(181, "c-dropdown", 23)(182, "button", 5);
    \u0275\u0275text(183, " Dropdown button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "ul", 24)(185, "li")(186, "button", 15);
    \u0275\u0275text(187, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "li")(189, "button", 15);
    \u0275\u0275text(190, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "li")(192, "button", 15);
    \u0275\u0275text(193, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(194, "li");
    \u0275\u0275element(195, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "li")(197, "button", 15);
    \u0275\u0275text(198, "Separated link");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(199, "p", 3);
    \u0275\u0275text(200, "And putting it to use in a navbar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "app-docs-example", 22)(202, "c-navbar", 25)(203, "c-container", 26)(204, "a", 27);
    \u0275\u0275text(205, " Navbar ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(206, "button", 28);
    \u0275\u0275elementStart(207, "div", 29, 0)(209, "c-navbar-nav", 30)(210, "c-nav-item")(211, "a", 31);
    \u0275\u0275text(212, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "c-nav-item")(214, "a", 32);
    \u0275\u0275text(215, "Link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "c-nav-item")(217, "c-dropdown", 33)(218, "a", 34);
    \u0275\u0275text(219, " Dropdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "ul", 35)(221, "li")(222, "button", 15);
    \u0275\u0275text(223, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(224, "li")(225, "button", 15);
    \u0275\u0275text(226, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(227, "li")(228, "button", 15);
    \u0275\u0275text(229, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(230, "li");
    \u0275\u0275element(231, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "li")(233, "button", 15);
    \u0275\u0275text(234, "Separated link");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(235, "c-nav-item")(236, "a", 36);
    \u0275\u0275text(237, "Disabled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(238, "form", 37);
    \u0275\u0275element(239, "input", 38);
    \u0275\u0275elementStart(240, "button", 39);
    \u0275\u0275text(241, "Search");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(242, "c-col", 1)(243, "c-card", 2)(244, "c-card-header");
    \u0275\u0275text(245, "\n        ");
    \u0275\u0275elementStart(246, "strong");
    \u0275\u0275text(247, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(248, " ");
    \u0275\u0275elementStart(249, "small");
    \u0275\u0275text(250, "Dropup");
    \u0275\u0275elementEnd();
    \u0275\u0275text(251, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "c-card-body")(253, "p", 3);
    \u0275\u0275text(254, " Trigger dropdown menus above elements by adding ");
    \u0275\u0275elementStart(255, "code");
    \u0275\u0275text(256, 'direction="dropup"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(257, " to the ");
    \u0275\u0275elementStart(258, "code");
    \u0275\u0275text(259, "<c-dropdown>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(260, " component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "app-docs-example", 40)(262, "c-dropdown", 41)(263, "button", 5);
    \u0275\u0275text(264, " Dropup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(265, "ul", 6)(266, "li")(267, "button", 15);
    \u0275\u0275text(268, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(269, "li")(270, "button", 15);
    \u0275\u0275text(271, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(272, "li")(273, "button", 15);
    \u0275\u0275text(274, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(275, "li");
    \u0275\u0275element(276, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(277, "li")(278, "button", 15);
    \u0275\u0275text(279, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(280, "c-dropdown", 41)(281, "button", 42);
    \u0275\u0275text(282, " Split Dropup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "button", 43)(284, "span", 18);
    \u0275\u0275text(285, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(286, "ul", 6)(287, "li")(288, "button", 15);
    \u0275\u0275text(289, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(290, "li")(291, "button", 15);
    \u0275\u0275text(292, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(293, "li")(294, "button", 15);
    \u0275\u0275text(295, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(296, "li");
    \u0275\u0275element(297, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "li")(299, "button", 15);
    \u0275\u0275text(300, "Separated link");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(301, "c-col", 1)(302, "c-card", 2)(303, "c-card-header");
    \u0275\u0275text(304, "\n        ");
    \u0275\u0275elementStart(305, "strong");
    \u0275\u0275text(306, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(307, " ");
    \u0275\u0275elementStart(308, "small");
    \u0275\u0275text(309, "Dropright");
    \u0275\u0275elementEnd();
    \u0275\u0275text(310, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(311, "c-card-body")(312, "p", 3);
    \u0275\u0275text(313, " Trigger dropdown menus at the right of the elements by adding ");
    \u0275\u0275elementStart(314, "code");
    \u0275\u0275text(315, 'direction="dropend"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(316, " to the ");
    \u0275\u0275elementStart(317, "code");
    \u0275\u0275text(318, "<c-dropdown>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(319, " component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(320, "app-docs-example", 44)(321, "c-dropdown", 45)(322, "button", 5);
    \u0275\u0275text(323, " Dropend ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(324, "ul", 6)(325, "li")(326, "button", 15);
    \u0275\u0275text(327, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(328, "li")(329, "button", 15);
    \u0275\u0275text(330, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(331, "li")(332, "button", 15);
    \u0275\u0275text(333, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(334, "li");
    \u0275\u0275element(335, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(336, "li")(337, "button", 15);
    \u0275\u0275text(338, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(339, "c-dropdown", 45)(340, "button", 42);
    \u0275\u0275text(341, " Split Right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(342, "button", 43)(343, "span", 18);
    \u0275\u0275text(344, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(345, "ul", 6)(346, "li")(347, "button", 15);
    \u0275\u0275text(348, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(349, "li")(350, "button", 15);
    \u0275\u0275text(351, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(352, "li")(353, "button", 15);
    \u0275\u0275text(354, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(355, "li");
    \u0275\u0275element(356, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(357, "li")(358, "button", 15);
    \u0275\u0275text(359, "Separated link");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(360, "c-col", 1)(361, "c-card", 2)(362, "c-card-header");
    \u0275\u0275text(363, "\n        ");
    \u0275\u0275elementStart(364, "strong");
    \u0275\u0275text(365, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(366, " ");
    \u0275\u0275elementStart(367, "small");
    \u0275\u0275text(368, "Dropleft");
    \u0275\u0275elementEnd();
    \u0275\u0275text(369, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(370, "c-card-body")(371, "p", 3);
    \u0275\u0275text(372, " Trigger dropdown menus at the left of the elements by adding ");
    \u0275\u0275elementStart(373, "code");
    \u0275\u0275text(374, 'direction="dropstart"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(375, " to the ");
    \u0275\u0275elementStart(376, "code");
    \u0275\u0275text(377, "<c-dropdown>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(378, " component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(379, "app-docs-example", 46)(380, "c-button-group")(381, "c-dropdown", 47)(382, "button", 43)(383, "span", 18);
    \u0275\u0275text(384, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(385, "ul", 6)(386, "li")(387, "button", 15);
    \u0275\u0275text(388, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(389, "li")(390, "button", 15);
    \u0275\u0275text(391, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(392, "li")(393, "button", 15);
    \u0275\u0275text(394, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(395, "li");
    \u0275\u0275element(396, "hr", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(397, "li")(398, "button", 15);
    \u0275\u0275text(399, "Separated link");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(400, "button", 42);
    \u0275\u0275text(401, " Split Left ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(402, "c-col", 1)(403, "c-card", 2)(404, "c-card-header");
    \u0275\u0275text(405, "\n        ");
    \u0275\u0275elementStart(406, "strong");
    \u0275\u0275text(407, "Angular Dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(408, " ");
    \u0275\u0275elementStart(409, "small");
    \u0275\u0275text(410, "Centered");
    \u0275\u0275elementEnd();
    \u0275\u0275text(411, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(412, "c-card-body")(413, "p", 3);
    \u0275\u0275text(414, " Trigger dropdown menus centered below the toggle by adding ");
    \u0275\u0275elementStart(415, "code");
    \u0275\u0275text(416, 'direction="center"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(417, " to the ");
    \u0275\u0275elementStart(418, "code");
    \u0275\u0275text(419, "c-dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(420, " component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(421, "app-docs-example", 48)(422, "c-dropdown", 49)(423, "button", 5);
    \u0275\u0275text(424, "Centered dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(425, "ul", 6)(426, "li")(427, "button", 15);
    \u0275\u0275text(428, "Action one");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(429, "li")(430, "button", 15);
    \u0275\u0275text(431, "Action two");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(432, "li")(433, "button", 15);
    \u0275\u0275text(434, "Action three");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(435, "c-dropdown", 50)(436, "button", 5);
    \u0275\u0275text(437, "Centered dropdup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(438, "ul", 6)(439, "li")(440, "button", 15);
    \u0275\u0275text(441, "Action one");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(442, "li")(443, "button", 15);
    \u0275\u0275text(444, "Action two");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(445, "li")(446, "button", 15);
    \u0275\u0275text(447, "Action three");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const collapseRef_r3 = \u0275\u0275reference(208);
    \u0275\u0275advance(26);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/buttons");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.colors);
    \u0275\u0275advance(27);
    \u0275\u0275repeater(ctx.colors);
    \u0275\u0275advance(42);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c0));
    \u0275\u0275advance(40);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275advance(52);
    \u0275\u0275property("fluid", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("cNavbarToggler", collapseRef_r3);
    \u0275\u0275advance();
    \u0275\u0275property("navbar", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("active", true)("routerLink", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("popper", false);
    \u0275\u0275advance(66);
    \u0275\u0275property("split", true);
    \u0275\u0275advance(59);
    \u0275\u0275property("split", true);
    \u0275\u0275advance(40);
    \u0275\u0275property("split", true);
  }
}, dependencies: [
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  DocsExampleComponent,
  DropdownComponent,
  ButtonDirective,
  DropdownToggleDirective,
  DropdownMenuDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  RouterLink,
  DropdownDividerDirective,
  NavbarComponent,
  ContainerComponent,
  NavbarBrandDirective,
  NavbarTogglerDirective,
  CollapseDirective,
  NavbarNavComponent,
  NavItemComponent,
  NavLinkDirective,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatusGroup,
  FormDirective,
  FormControlDirective,
  ButtonGroupComponent
], encapsulation: 2 });
var DropdownsComponent = _DropdownsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownsComponent, { className: "DropdownsComponent", filePath: "src\\app\\documentacion\\buttons\\dropdowns\\dropdowns.component.ts", lineNumber: 68 });
})();
export {
  DropdownsComponent
};
//# sourceMappingURL=dropdowns.component-7VDE2BRT.js.map
