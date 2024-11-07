import {
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-3RTTW4L4.js";
import {
  DocsExampleComponent
} from "./chunk-NVLXH4OP.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormCheckInputDirective,
  FormControlDirective,
  FormLabelDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
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
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/forms/input-groups/input-groups.component.ts
var _c0 = () => [];
var _InputGroupsComponent = class _InputGroupsComponent {
  constructor() {
  }
};
_InputGroupsComponent.\u0275fac = function InputGroupsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputGroupsComponent)();
};
_InputGroupsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputGroupsComponent, selectors: [["app-input-groups"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 492, vars: 68, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "forms/input-group"], [1, "mb-3"], ["cInputGroupText", "", "id", "basic-addon1"], ["aria-describedby", "basic-addon1", "aria-label", "Username", "cFormControl", "", "placeholder", "Username"], ["aria-describedby", "basic-addon2", "aria-label", "Recipient's username", "cFormControl", "", "placeholder", "Recipient's username"], ["cInputGroupText", "", "id", "basic-addon2"], ["cLabel", "", "for", "basic-url"], ["cInputGroupText", "", "id", "basic-addon3"], ["aria-describedby", "basic-addon3", "cFormControl", "", "id", "basic-url"], ["cInputGroupText", ""], ["aria-label", "Amount (to the nearest dollar)", "cFormControl", ""], ["aria-label", "Username", "cFormControl", "", "placeholder", "Username"], ["aria-label", "Server", "cFormControl", "", "placeholder", "Server"], ["aria-label", "With textarea", "cFormControl", ""], ["href", "forms/input-group#wrapping"], [1, "flex-nowrap"], ["cInputGroupText", "", "id", "addon-wrapping"], ["aria-describedby", "addon-wrapping", "aria-label", "Username", "cFormControl", "", "placeholder", "Username"], ["href", "forms/input-group#sizing"], ["sizing", "sm", 1, "mb-3"], ["cInputGroupText", "", "id", "inputGroup-sizing-sm"], ["aria-describedby", "inputGroup-sizing-sm", "aria-label", "Sizing example input", "cFormControl", ""], ["cInputGroupText", "", "id", "inputGroup-sizing-default"], ["aria-describedby", "inputGroup-sizing-default", "aria-label", "Sizing example input", "cFormControl", ""], ["sizing", "lg"], ["cInputGroupText", "", "id", "inputGroup-sizing-lg"], ["aria-describedby", "inputGroup-sizing-lg", "aria-label", "Sizing example input", "cFormControl", ""], ["href", "forms/input-group#checkboxes-and-radios"], ["cFormCheckInput", "", "id", "checkOne", "type", "checkbox"], ["aria-label", "Text input with checkbox", "cFormControl", ""], ["cFormCheckInput", "", "id", "radioOne", "type", "radio"], ["aria-label", "Text input with radio button", "cFormControl", ""], ["href", "forms/input-group#multiple-inputs"], ["aria-label", "First name", "cFormControl", ""], ["aria-label", "Last name", "cFormControl", ""], ["href", "forms/input-group#multiple-addons"], ["aria-label", "Dollar amount (with dot and two decimal places)", "cFormControl", ""], ["href", "forms/input-group#button-addons"], ["cButton", "", "color", "secondary", "id", "button-addon1", "type", "button", "variant", "outline"], ["aria-describedby", "button-addon1", "aria-label", "Example text with button addon", "cFormControl", "", "placeholder", ""], ["aria-describedby", "button-addon2", "aria-label", "Recipient's username", "cFormControl", "", "placeholder", "Recipient's username"], ["cButton", "", "color", "secondary", "id", "button-addon2", "type", "button", "variant", "outline"], ["cButton", "", "color", "secondary", "type", "button", "variant", "outline"], ["aria-label", "Example text with two button addons", "cFormControl", "", "placeholder", ""], ["aria-label", "Recipient's username with two button addons", "cFormControl", "", "placeholder", "Recipient's username"], ["href", "forms/input-group#buttons-with-dropdowns"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "variant", "outline"], ["cDropdownMenu", ""], ["cDropdownItem", "", 3, "routerLink"], ["cDropdownDivider", ""], ["aria-label", "Text input with dropdown button", "cFormControl", ""], ["alignment", "end"], ["aria-label", "Text input with 2 dropdown buttons", "cFormControl", ""], ["href", "forms/input-group#segmented-buttons"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "variant", "outline", 3, "split"], [1, "visually-hidden"], ["aria-label", "Text input with segmented dropdown button", "cFormControl", ""], ["cButton", "", "color", "secondary", "variant", "outline"], ["href", "forms/input-group#custom-select"], ["cInputGroupText", "", "for", "inputGroupSelect01"], ["cSelect", "", "id", "inputGroupSelect01"], ["value", "1"], ["value", "2"], ["value", "3"], ["cSelect", "", "id", "inputGroupSelect02"], ["cInputGroupText", "", "for", "inputGroupSelect02"], ["aria-label", "Example select with button addon", "cSelect", "", "id", "inputGroupSelect03"], ["aria-label", "Example select with button addon", "cSelect", "", "id", "inputGroupSelect04"], ["href", "forms/input-group#custom-file-input"], ["cInputGroupText", "", "for", "inputGroupFile01"], ["cFormControl", "", "id", "inputGroupFile01", "type", "file"], ["cFormControl", "", "id", "inputGroupFile02", "type", "file"], ["cInputGroupText", "", "for", "inputGroupFile02"], ["cButton", "", "color", "secondary", "id", "inputGroupFileAddon03", "type", "button", "variant", "outline"], ["aria-describedby", "inputGroupFileAddon03", "aria-label", "Upload", "cFormControl", "", "id", "inputGroupFile03", "type", "file"], ["aria-describedby", "inputGroupFileAddon04", "aria-label", "Upload", "cFormControl", "", "id", "inputGroupFile04", "type", "file"], ["cButton", "", "color", "secondary", "id", "inputGroupFileAddon04", "type", "button", "variant", "outline"]], template: function InputGroupsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header");
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " ");
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Basic example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-card-body")(12, "p", 2);
    \u0275\u0275text(13, " Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "s outside the input group. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-docs-example", 3)(18, "c-input-group", 4)(19, "span", 5);
    \u0275\u0275text(20, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "c-input-group", 4);
    \u0275\u0275element(23, "input", 7);
    \u0275\u0275elementStart(24, "span", 8);
    \u0275\u0275text(25, "@example.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 9);
    \u0275\u0275text(27, "Your vanity URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "c-input-group", 4)(29, "span", 10);
    \u0275\u0275text(30, "https://example.com/users/");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "c-input-group", 4)(33, "span", 12);
    \u0275\u0275text(34, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 13);
    \u0275\u0275elementStart(36, "span", 12);
    \u0275\u0275text(37, ".00");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "c-input-group", 4);
    \u0275\u0275element(39, "input", 14);
    \u0275\u0275elementStart(40, "span", 12);
    \u0275\u0275text(41, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "c-input-group")(44, "span", 12);
    \u0275\u0275text(45, "With textarea");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "c-col", 0)(48, "c-card", 1)(49, "c-card-header");
    \u0275\u0275text(50, "\n        ");
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " ");
    \u0275\u0275elementStart(54, "small");
    \u0275\u0275text(55, "Wrapping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "c-card-body")(58, "p", 2);
    \u0275\u0275text(59, " Input groups wrap by default via ");
    \u0275\u0275elementStart(60, "code");
    \u0275\u0275text(61, "flex-wrap: wrap");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " in order to accommodate custom form field validation within an input group. You may disable this with ");
    \u0275\u0275elementStart(63, "code");
    \u0275\u0275text(64, ".flex-nowrap");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "app-docs-example", 17)(67, "c-input-group", 18)(68, "span", 19);
    \u0275\u0275text(69, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(71, "c-col", 0)(72, "c-card", 1)(73, "c-card-header");
    \u0275\u0275text(74, "\n        ");
    \u0275\u0275elementStart(75, "strong");
    \u0275\u0275text(76, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " ");
    \u0275\u0275elementStart(78, "small");
    \u0275\u0275text(79, "Sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "c-card-body")(82, "p", 2);
    \u0275\u0275text(83, " Add the relative form sizing classes to the ");
    \u0275\u0275elementStart(84, "code");
    \u0275\u0275text(85, "<c-input-group>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " itself and contents within will automatically resize\u2014no need for repeating the form control size classes on each element. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p", 2)(88, "strong");
    \u0275\u0275text(89, "Sizing on the individual input group elements isn't supported.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "app-docs-example", 21)(91, "c-input-group", 22)(92, "span", 23);
    \u0275\u0275text(93, "Small");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "c-input-group", 4)(96, "span", 25);
    \u0275\u0275text(97, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "c-input-group", 27)(100, "span", 28);
    \u0275\u0275text(101, "Large");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "input", 29);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(103, "c-col", 0)(104, "c-card", 1)(105, "c-card-header");
    \u0275\u0275text(106, "\n        ");
    \u0275\u0275elementStart(107, "strong");
    \u0275\u0275text(108, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, " ");
    \u0275\u0275elementStart(110, "small");
    \u0275\u0275text(111, "Checkboxes and radios");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "c-card-body")(114, "p", 2);
    \u0275\u0275text(115, " Place any checkbox or radio option within an input group's addon instead of text. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "app-docs-example", 30)(117, "c-input-group", 4)(118, "span", 12)(119, "div");
    \u0275\u0275element(120, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(121, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "c-input-group")(123, "span", 12)(124, "div");
    \u0275\u0275element(125, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(126, "input", 34);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(127, "c-col", 0)(128, "c-card", 1)(129, "c-card-header");
    \u0275\u0275text(130, "\n        ");
    \u0275\u0275elementStart(131, "strong");
    \u0275\u0275text(132, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(133, " ");
    \u0275\u0275elementStart(134, "small");
    \u0275\u0275text(135, "Multiple inputs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "c-card-body")(138, "p", 2);
    \u0275\u0275text(139, " While multiple ");
    \u0275\u0275elementStart(140, "code");
    \u0275\u0275text(141, "<CFormInput>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "s are supported visually, validation styles are only available for input groups with a single ");
    \u0275\u0275elementStart(143, "code");
    \u0275\u0275text(144, "cFormControl");
    \u0275\u0275elementEnd();
    \u0275\u0275text(145, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "app-docs-example", 35)(147, "c-input-group")(148, "span", 12);
    \u0275\u0275text(149, "First and last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(150, "input", 36)(151, "input", 37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(152, "c-col", 0)(153, "c-card", 1)(154, "c-card-header");
    \u0275\u0275text(155, "\n        ");
    \u0275\u0275elementStart(156, "strong");
    \u0275\u0275text(157, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, " ");
    \u0275\u0275elementStart(159, "small");
    \u0275\u0275text(160, "Multiple addons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "c-card-body")(163, "p", 2);
    \u0275\u0275text(164, " Multiple add-ons are supported and can be mixed with checkbox and radio input versions.. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "app-docs-example", 38)(166, "c-input-group", 4)(167, "span", 12);
    \u0275\u0275text(168, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "span", 12);
    \u0275\u0275text(170, "0.00");
    \u0275\u0275elementEnd();
    \u0275\u0275element(171, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "c-input-group");
    \u0275\u0275element(173, "input", 39);
    \u0275\u0275elementStart(174, "span", 12);
    \u0275\u0275text(175, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "span", 12);
    \u0275\u0275text(177, "0.00");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(178, "c-col", 0)(179, "c-card", 1)(180, "c-card-header");
    \u0275\u0275text(181, "\n        ");
    \u0275\u0275elementStart(182, "strong");
    \u0275\u0275text(183, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, " ");
    \u0275\u0275elementStart(185, "small");
    \u0275\u0275text(186, "Button addons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(187, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "c-card-body")(189, "p", 2);
    \u0275\u0275text(190, " Button add-ons are supported. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "app-docs-example", 40)(192, "c-input-group", 4)(193, "button", 41);
    \u0275\u0275text(194, " Button ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(195, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "c-input-group", 4);
    \u0275\u0275element(197, "input", 43);
    \u0275\u0275elementStart(198, "button", 44);
    \u0275\u0275text(199, " Button ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(200, "c-input-group", 4)(201, "button", 45);
    \u0275\u0275text(202, " Button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "button", 45);
    \u0275\u0275text(204, " Button ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(205, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "c-input-group");
    \u0275\u0275element(207, "input", 47);
    \u0275\u0275elementStart(208, "button", 45);
    \u0275\u0275text(209, " Button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "button", 45);
    \u0275\u0275text(211, " Button ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(212, "c-col", 0)(213, "c-card", 1)(214, "c-card-header");
    \u0275\u0275text(215, "\n        ");
    \u0275\u0275elementStart(216, "strong");
    \u0275\u0275text(217, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(218, " ");
    \u0275\u0275elementStart(219, "small");
    \u0275\u0275text(220, "Buttons with dropdowns");
    \u0275\u0275elementEnd();
    \u0275\u0275text(221, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "c-card-body")(223, "app-docs-example", 48)(224, "c-input-group", 4)(225, "c-dropdown")(226, "button", 49);
    \u0275\u0275text(227, " Dropdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "ul", 50)(229, "li")(230, "a", 51);
    \u0275\u0275text(231, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(232, "li")(233, "a", 51);
    \u0275\u0275text(234, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(235, "li")(236, "a", 51);
    \u0275\u0275text(237, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(238, "li");
    \u0275\u0275element(239, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "li")(241, "a", 51);
    \u0275\u0275text(242, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(243, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "c-input-group", 4);
    \u0275\u0275element(245, "input", 53);
    \u0275\u0275elementStart(246, "c-dropdown", 54)(247, "button", 49);
    \u0275\u0275text(248, " Dropdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "ul", 50)(250, "li")(251, "a", 51);
    \u0275\u0275text(252, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(253, "li")(254, "a", 51);
    \u0275\u0275text(255, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(256, "li")(257, "a", 51);
    \u0275\u0275text(258, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "li");
    \u0275\u0275element(260, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "li")(262, "a", 51);
    \u0275\u0275text(263, "Separated link");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(264, "c-input-group")(265, "c-dropdown")(266, "button", 49);
    \u0275\u0275text(267, " Dropdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(268, "ul", 50)(269, "li")(270, "a", 51);
    \u0275\u0275text(271, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(272, "li")(273, "a", 51);
    \u0275\u0275text(274, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(275, "li")(276, "a", 51);
    \u0275\u0275text(277, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(278, "li");
    \u0275\u0275element(279, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(280, "li")(281, "a", 51);
    \u0275\u0275text(282, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(283, "input", 55);
    \u0275\u0275elementStart(284, "c-dropdown", 54)(285, "button", 49);
    \u0275\u0275text(286, " Dropdown ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(287, "ul", 50)(288, "li")(289, "a", 51);
    \u0275\u0275text(290, "Other Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(291, "li")(292, "a", 51);
    \u0275\u0275text(293, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(294, "li")(295, "a", 51);
    \u0275\u0275text(296, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(297, "li");
    \u0275\u0275element(298, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(299, "li")(300, "a", 51);
    \u0275\u0275text(301, "Separated link");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(302, "c-col", 0)(303, "c-card", 1)(304, "c-card-header");
    \u0275\u0275text(305, "\n        ");
    \u0275\u0275elementStart(306, "strong");
    \u0275\u0275text(307, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(308, " ");
    \u0275\u0275elementStart(309, "small");
    \u0275\u0275text(310, "Segmented buttons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(311, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(312, "c-card-body")(313, "app-docs-example", 56)(314, "c-input-group", 4)(315, "c-dropdown")(316, "button", 45);
    \u0275\u0275text(317, " Action ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(318, "button", 57)(319, "span", 58);
    \u0275\u0275text(320, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "ul", 50)(322, "li")(323, "a", 51);
    \u0275\u0275text(324, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(325, "li")(326, "a", 51);
    \u0275\u0275text(327, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(328, "li")(329, "a", 51);
    \u0275\u0275text(330, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(331, "li");
    \u0275\u0275element(332, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "li")(334, "a", 51);
    \u0275\u0275text(335, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(336, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(337, "c-input-group", 4);
    \u0275\u0275element(338, "input", 59);
    \u0275\u0275elementStart(339, "c-dropdown", 54)(340, "button", 60);
    \u0275\u0275text(341, " Action ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(342, "button", 57)(343, "span", 58);
    \u0275\u0275text(344, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(345, "ul", 50)(346, "li")(347, "a", 51);
    \u0275\u0275text(348, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(349, "li")(350, "a", 51);
    \u0275\u0275text(351, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(352, "li")(353, "a", 51);
    \u0275\u0275text(354, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(355, "li");
    \u0275\u0275element(356, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(357, "li")(358, "a", 51);
    \u0275\u0275text(359, "Separated link");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(360, "c-input-group")(361, "c-dropdown")(362, "button", 45);
    \u0275\u0275text(363, " Action ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(364, "button", 57)(365, "span", 58);
    \u0275\u0275text(366, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(367, "ul", 50)(368, "li")(369, "a", 51);
    \u0275\u0275text(370, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(371, "li")(372, "a", 51);
    \u0275\u0275text(373, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(374, "li")(375, "a", 51);
    \u0275\u0275text(376, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(377, "li");
    \u0275\u0275element(378, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(379, "li")(380, "a", 51);
    \u0275\u0275text(381, "Separated link");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(382, "input", 59);
    \u0275\u0275elementStart(383, "c-dropdown", 54)(384, "button", 60);
    \u0275\u0275text(385, " Action ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(386, "button", 57)(387, "span", 58);
    \u0275\u0275text(388, "Toggle Dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(389, "ul", 50)(390, "li")(391, "a", 51);
    \u0275\u0275text(392, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(393, "li")(394, "a", 51);
    \u0275\u0275text(395, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(396, "li")(397, "a", 51);
    \u0275\u0275text(398, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(399, "li");
    \u0275\u0275element(400, "hr", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(401, "li")(402, "a", 51);
    \u0275\u0275text(403, "Separated link");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(404, "c-col", 0)(405, "c-card", 1)(406, "c-card-header");
    \u0275\u0275text(407, "\n        ");
    \u0275\u0275elementStart(408, "strong");
    \u0275\u0275text(409, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(410, " ");
    \u0275\u0275elementStart(411, "small");
    \u0275\u0275text(412, "Custom select");
    \u0275\u0275elementEnd();
    \u0275\u0275text(413, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(414, "c-card-body")(415, "app-docs-example", 61)(416, "c-input-group", 4)(417, "label", 62);
    \u0275\u0275text(418, " Options ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(419, "select", 63)(420, "option");
    \u0275\u0275text(421, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(422, "option", 64);
    \u0275\u0275text(423, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(424, "option", 65);
    \u0275\u0275text(425, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(426, "option", 66);
    \u0275\u0275text(427, "Three");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(428, "c-input-group", 4)(429, "select", 67)(430, "option");
    \u0275\u0275text(431, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(432, "option", 64);
    \u0275\u0275text(433, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(434, "option", 65);
    \u0275\u0275text(435, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(436, "option", 66);
    \u0275\u0275text(437, "Three");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(438, "label", 68);
    \u0275\u0275text(439, " Options ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(440, "c-input-group", 4)(441, "button", 45);
    \u0275\u0275text(442, " Button ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(443, "select", 69)(444, "option");
    \u0275\u0275text(445, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(446, "option", 64);
    \u0275\u0275text(447, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(448, "option", 65);
    \u0275\u0275text(449, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(450, "option", 66);
    \u0275\u0275text(451, "Three");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(452, "c-input-group")(453, "select", 70)(454, "option");
    \u0275\u0275text(455, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(456, "option", 64);
    \u0275\u0275text(457, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(458, "option", 65);
    \u0275\u0275text(459, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(460, "option", 66);
    \u0275\u0275text(461, "Three");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(462, "button", 45);
    \u0275\u0275text(463, " Button ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(464, "c-col", 0)(465, "c-card", 1)(466, "c-card-header");
    \u0275\u0275text(467, "\n        ");
    \u0275\u0275elementStart(468, "strong");
    \u0275\u0275text(469, "Angular Input group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(470, " ");
    \u0275\u0275elementStart(471, "small");
    \u0275\u0275text(472, "Custom file input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(473, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(474, "c-card-body")(475, "app-docs-example", 71)(476, "c-input-group", 4)(477, "label", 72);
    \u0275\u0275text(478, " Upload ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(479, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(480, "c-input-group", 4);
    \u0275\u0275element(481, "input", 74);
    \u0275\u0275elementStart(482, "label", 75);
    \u0275\u0275text(483, " Upload ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(484, "c-input-group", 4)(485, "button", 76);
    \u0275\u0275text(486, " Button ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(487, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(488, "c-input-group");
    \u0275\u0275element(489, "input", 78);
    \u0275\u0275elementStart(490, "button", 79);
    \u0275\u0275text(491, " Button ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(230);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(36, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(37, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(40, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(41, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(42, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(43, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(44, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(45, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(46, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(47, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(48, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(49, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(50, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(51, _c0));
    \u0275\u0275advance(18);
    \u0275\u0275property("split", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(52, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(53, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(54, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(55, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275property("split", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(56, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(57, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(58, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(59, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275property("split", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(60, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(61, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(62, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(63, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275property("split", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(64, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(65, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(66, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(67, _c0));
  }
}, dependencies: [
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  DocsExampleComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  FormLabelDirective,
  FormCheckInputDirective,
  ButtonDirective,
  DropdownComponent,
  DropdownToggleDirective,
  DropdownMenuDirective,
  DropdownItemDirective,
  RouterLink,
  DropdownDividerDirective,
  FormSelectDirective,
  ReactiveFormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption
] });
var InputGroupsComponent = _InputGroupsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputGroupsComponent, { className: "InputGroupsComponent", filePath: "src\\app\\documentacion\\forms\\input-groups\\input-groups.component.ts", lineNumber: 57 });
})();
export {
  InputGroupsComponent
};
//# sourceMappingURL=input-groups.component-KY7TOHZH.js.map
