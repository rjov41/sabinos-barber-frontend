import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgNoValidate,
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
  ColDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
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

// src/app/documentacion/forms/layout/layout.component.ts
var _LayoutComponent = class _LayoutComponent {
  constructor() {
  }
};
_LayoutComponent.\u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutComponent)();
};
_LayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 373, vars: 0, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "forms/layout#form-grid"], ["xs", ""], ["aria-label", "First name", "cFormControl", "", "placeholder", "First name"], ["aria-label", "Last name", "cFormControl", "", "placeholder", "Last name"], ["href", "https://coreui.io/docs/layout/gutters/"], ["href", "forms/layout#gutters"], [1, "g-3"], ["cForm", "", 1, "row", "g-3"], ["md", "6"], ["cLabel", "", "for", "inputEmail4"], ["cFormControl", "", "id", "inputEmail4", "type", "email"], ["cLabel", "", "for", "inputPassword4"], ["cFormControl", "", "id", "inputPassword4", "type", "password"], ["cLabel", "", "for", "inputAddress"], ["cFormControl", "", "id", "inputAddress", "placeholder", "1234 Main St"], ["cLabel", "", "for", "inputAddress2"], ["cFormControl", "", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor"], ["cLabel", "", "for", "inputCity"], ["cFormControl", "", "id", "inputCity"], ["md", "4"], ["cLabel", "", "for", "inputState"], ["cSelect", "", "id", "inputState"], ["md", "2"], ["cLabel", "", "for", "inputZip"], ["cFormControl", "", "id", "inputZip"], ["cFormCheckInput", "", "id", "gridCheck", "name", "gridCheck", "type", "checkbox"], ["cFormCheckLabel", "", "for", "gridCheck"], ["cButton", "", "type", "submit"], ["href", "forms/layout#horizontal-form"], [1, "mb-3"], ["cLabel", "", "for", "inputEmail3", 1, "col-sm-2", "col-form-label"], ["sm", "10"], ["cFormControl", "", "id", "inputEmail3", "type", "email"], ["cLabel", "", "for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["cFormControl", "", "id", "inputPassword3", "type", "password"], [1, "row", "mb-3"], [1, "col-form-label", "col-sm-2", "pt-0"], ["cFormCheckInput", "", "checked", "", "id", "gridRadios1", "name", "gridRadios", "type", "radio", "value", "option1"], ["cFormCheckLabel", "", "for", "gridRadios1"], ["cFormCheckInput", "", "id", "gridRadios2", "name", "gridRadios", "type", "radio", "value", "option2"], ["cFormCheckLabel", "", "for", "gridRadios2"], ["cFormCheckInput", "", "id", "gridRadios3", "name", "gridRadios", "type", "radio", "value", "option3"], ["cFormCheckLabel", "", "for", "gridRadios3"], ["sm", "10", 1, "offset-sm-2"], ["cFormCheckInput", "", "id", "gridCheck1", "name", "gridCheck1", "type", "checkbox"], ["cFormCheckLabel", "", "for", "gridCheck1"], ["href", "forms/layout#horizontal-form-label-sizing"], ["cLabel", "col", "cCol", "", "sm", "2", "sizing", "sm", "for", "colFormLabelSm"], ["cFormControl", "", "sizing", "sm", "id", "colFormLabelSm", "placeholder", "col-form-label-sm", "type", "email"], ["cLabel", "col", "cCol", "", "sm", "2", "for", "colFormLabel"], ["cFormControl", "", "id", "colFormLabel", "placeholder", "col-form-label", "type", "email"], ["cLabel", "col", "cCol", "", "sm", "2", "sizing", "lg", "for", "colFormLabelLg"], ["cFormControl", "", "sizing", "lg", "id", "colFormLabelLg", "placeholder", "col-form-label-lg", "type", "email"], ["href", "forms/layout#column-sizing"], ["sm", "7"], ["aria-label", "City", "cFormControl", "", "placeholder", "City"], ["sm", ""], ["aria-label", "State", "cFormControl", "", "placeholder", "State"], ["aria-label", "Zip", "cFormControl", "", "placeholder", "Zip"], ["href", "forms/layout#auto-sizing"], ["cForm", "", 1, "row", "gy-2", "gx-3", "align-items-center"], ["xs", "auto"], ["cLabel", "", "for", "autoSizingInput", 1, "visually-hidden"], ["cFormControl", "", "id", "autoSizingInput", "placeholder", "Jane Doe"], ["cLabel", "", "for", "autoSizingInputGroup", 1, "visually-hidden"], ["cInputGroupText", ""], ["cFormControl", "", "id", "autoSizingInputGroup", "placeholder", "Username"], ["cLabel", "", "for", "autoSizingSelect", 1, "visually-hidden"], ["cSelect", "", "id", "autoSizingSelect"], ["value", "1"], ["value", "2"], ["value", "3"], ["cFormCheckInput", "", "id", "autoSizingCheck", "name", "autoSizingCheck", "type", "checkbox"], ["cFormCheckLabel", "", "for", "autoSizingCheck"], ["cForm", "", 1, "row", "gx-3", "gy-2", "align-items-center"], ["sm", "3"], ["cLabel", "", "for", "specificSizeInputName", 1, "visually-hidden"], ["cFormControl", "", "id", "specificSizeInputName", "placeholder", "Jane Doe"], ["cLabel", "", "for", "specificSizeInputGroupUsername", 1, "visually-hidden"], ["cFormControl", "", "id", "specificSizeInputGroupUsername", "placeholder", "Username"], ["cLabel", "", "for", "specificSizeSelect", 1, "visually-hidden"], ["cSelect", "", "id", "specificSizeSelect"], ["cFormCheckInput", "", "id", "autoSizingCheck2", "name", "autoSizingCheck2", "type", "checkbox"], ["cFormCheckLabel", "", "for", "autoSizingCheck2"], ["href", "forms/layout#inline-forms"], ["cForm", "", 1, "row", "row-cols-lg-auto", "g-3", "align-items-center"], ["cLabel", "", "for", "inlineFormInputGroupUsername", 1, "visually-hidden"], ["cFormControl", "", "id", "inlineFormInputGroupUsername", "placeholder", "Username"], ["cLabel", "", "for", "inlineFormSelectPref", 1, "visually-hidden"], ["cSelect", "", "id", "inlineFormSelectPref"], ["inline", ""], ["cFormCheckInput", "", "id", "inlineFormCheck", "name", "inlineFormCheck", "type", "checkbox"], ["cFormCheckLabel", "", "for", "inlineFormCheck"]], template: function LayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header");
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " ");
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Form grid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-card-body")(12, "p", 2);
    \u0275\u0275text(13, " More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-docs-example", 3)(15, "c-row")(16, "c-col", 4);
    \u0275\u0275element(17, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "c-col", 4);
    \u0275\u0275element(19, "input", 6);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(20, "c-col", 0)(21, "c-card", 1)(22, "c-card-header");
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " ");
    \u0275\u0275elementStart(27, "small");
    \u0275\u0275text(28, "Gutters");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "c-card-body")(31, "p", 2);
    \u0275\u0275text(32, " By adding ");
    \u0275\u0275elementStart(33, "a", 7);
    \u0275\u0275text(34, "gutter modifier classes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " , you can have control over the gutter width in as well the inline as block direction. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "app-docs-example", 8)(37, "c-row", 9)(38, "c-col", 4);
    \u0275\u0275element(39, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "c-col", 4);
    \u0275\u0275element(41, "input", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "p", 2);
    \u0275\u0275text(43, " More complex layouts can also be created with the grid system. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "app-docs-example", 8)(45, "form", 10)(46, "c-col", 11)(47, "label", 12);
    \u0275\u0275text(48, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "c-col", 11)(51, "label", 14);
    \u0275\u0275text(52, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "c-col", 0)(55, "label", 16);
    \u0275\u0275text(56, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "c-col", 0)(59, "label", 18);
    \u0275\u0275text(60, "Address 2");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "c-col", 11)(63, "label", 20);
    \u0275\u0275text(64, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "c-col", 22)(67, "label", 23);
    \u0275\u0275text(68, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "select", 24)(70, "option");
    \u0275\u0275text(71, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option");
    \u0275\u0275text(73, "...");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "c-col", 25)(75, "label", 26);
    \u0275\u0275text(76, "Zip");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "c-col", 0)(79, "c-form-check");
    \u0275\u0275element(80, "input", 28);
    \u0275\u0275elementStart(81, "label", 29);
    \u0275\u0275text(82, "Check me out");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "c-col", 0)(84, "button", 30);
    \u0275\u0275text(85, "Sign in");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(86, "c-col", 0)(87, "c-card", 1)(88, "c-card-header");
    \u0275\u0275text(89, "\n        ");
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " ");
    \u0275\u0275elementStart(93, "small");
    \u0275\u0275text(94, "Horizontal form");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "c-card-body")(97, "p", 2);
    \u0275\u0275text(98, " Create horizontal forms with the grid by adding the ");
    \u0275\u0275elementStart(99, "code");
    \u0275\u0275text(100, ".row");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, " class to form groups and using the ");
    \u0275\u0275elementStart(102, "code");
    \u0275\u0275text(103, ".col-*-*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, " classes to specify the width of your labels and controls. Be sure to add ");
    \u0275\u0275elementStart(105, "code");
    \u0275\u0275text(106, ".col-form-label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, " to your ");
    \u0275\u0275elementStart(108, "code");
    \u0275\u0275text(109, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, "s as well so they're vertically centered with their associated form controls. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p", 2);
    \u0275\u0275text(112, " At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the ");
    \u0275\u0275elementStart(113, "code");
    \u0275\u0275text(114, "padding-top");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, " on our stacked radio inputs label to better align the text baseline. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "app-docs-example", 31)(117, "form")(118, "c-row", 32)(119, "label", 33);
    \u0275\u0275text(120, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "c-col", 34);
    \u0275\u0275element(122, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "c-row", 32)(124, "label", 36);
    \u0275\u0275text(125, " Password ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "c-col", 34);
    \u0275\u0275element(127, "input", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "fieldset", 38)(129, "legend", 39);
    \u0275\u0275text(130, "Radios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "c-col", 34)(132, "c-form-check");
    \u0275\u0275element(133, "input", 40);
    \u0275\u0275elementStart(134, "label", 41);
    \u0275\u0275text(135, "First radio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "c-form-check");
    \u0275\u0275element(137, "input", 42);
    \u0275\u0275elementStart(138, "label", 43);
    \u0275\u0275text(139, "Second radio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "c-form-check");
    \u0275\u0275element(141, "input", 44);
    \u0275\u0275elementStart(142, "label", 45);
    \u0275\u0275text(143, "Third disabled radio");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(144, "c-row", 32)(145, "c-col", 46)(146, "c-form-check");
    \u0275\u0275element(147, "input", 47);
    \u0275\u0275elementStart(148, "label", 48);
    \u0275\u0275text(149, "Example checkbox");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(150, "button", 30);
    \u0275\u0275text(151, "Sign in");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(152, "c-col", 0)(153, "c-card", 1)(154, "c-card-header");
    \u0275\u0275text(155, "\n        ");
    \u0275\u0275elementStart(156, "strong");
    \u0275\u0275text(157, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, " ");
    \u0275\u0275elementStart(159, "small");
    \u0275\u0275text(160, "Horizontal form label sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "c-card-body")(163, "p", 2);
    \u0275\u0275text(164, " Be sure to use ");
    \u0275\u0275elementStart(165, "code");
    \u0275\u0275text(166, ".col-form-label-sm");
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, " or ");
    \u0275\u0275elementStart(168, "code");
    \u0275\u0275text(169, ".col-form-label-lg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(170, " to your ");
    \u0275\u0275elementStart(171, "code");
    \u0275\u0275text(172, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(173, "s or ");
    \u0275\u0275elementStart(174, "code");
    \u0275\u0275text(175, "<legend>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(176, "s to correctly follow the size of ");
    \u0275\u0275elementStart(177, "code");
    \u0275\u0275text(178, ".form-control-lg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(179, " and ");
    \u0275\u0275elementStart(180, "code");
    \u0275\u0275text(181, ".form-control-sm");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "app-docs-example", 49)(184, "c-row", 32)(185, "label", 50);
    \u0275\u0275text(186, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "c-col", 34);
    \u0275\u0275element(188, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "c-row", 32)(190, "label", 52);
    \u0275\u0275text(191, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "c-col", 34);
    \u0275\u0275element(193, "input", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(194, "c-row")(195, "label", 54);
    \u0275\u0275text(196, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "c-col", 34);
    \u0275\u0275element(198, "input", 55);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(199, "c-col", 0)(200, "c-card", 1)(201, "c-card-header");
    \u0275\u0275text(202, "\n        ");
    \u0275\u0275elementStart(203, "strong");
    \u0275\u0275text(204, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205, " ");
    \u0275\u0275elementStart(206, "small");
    \u0275\u0275text(207, "Column sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(208, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "c-card-body")(210, "p", 2);
    \u0275\u0275text(211, " As shown in the previous examples, our grid system allows you to place any number of ");
    \u0275\u0275elementStart(212, "code");
    \u0275\u0275text(213, "<c-col>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(214, "s within a ");
    \u0275\u0275elementStart(215, "code");
    \u0275\u0275text(216, "<c-row>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(217, ". They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining ");
    \u0275\u0275elementStart(218, "code");
    \u0275\u0275text(219, "<c-col>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(220, "s equally split the rest, with specific column classes like ");
    \u0275\u0275elementStart(221, "code");
    \u0275\u0275text(222, '<c-col sm="7">');
    \u0275\u0275elementEnd();
    \u0275\u0275text(223, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "app-docs-example", 56)(225, "c-row", 9)(226, "c-col", 57);
    \u0275\u0275element(227, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "c-col", 59);
    \u0275\u0275element(229, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(230, "c-col", 59);
    \u0275\u0275element(231, "input", 61);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(232, "c-col", 0)(233, "c-card", 1)(234, "c-card-header");
    \u0275\u0275text(235, "\n        ");
    \u0275\u0275elementStart(236, "strong");
    \u0275\u0275text(237, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(238, " ");
    \u0275\u0275elementStart(239, "small");
    \u0275\u0275text(240, "Auto-sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(241, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(242, "c-card-body")(243, "p", 2);
    \u0275\u0275text(244, " The example below uses a flexbox utility to vertically center the contents and changes ");
    \u0275\u0275elementStart(245, "code");
    \u0275\u0275text(246, "<c-col>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(247, " to ");
    \u0275\u0275elementStart(248, "code");
    \u0275\u0275text(249, '<c-col xs="auto">');
    \u0275\u0275elementEnd();
    \u0275\u0275text(250, " so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "app-docs-example", 62)(252, "form", 63)(253, "c-col", 64)(254, "label", 65);
    \u0275\u0275text(255, " Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(256, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "c-col", 64)(258, "label", 67);
    \u0275\u0275text(259, " Username ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(260, "c-input-group")(261, "span", 68);
    \u0275\u0275text(262, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(263, "input", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(264, "c-col", 64)(265, "label", 70);
    \u0275\u0275text(266, " Preference ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "select", 71)(268, "option");
    \u0275\u0275text(269, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(270, "option", 72);
    \u0275\u0275text(271, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(272, "option", 73);
    \u0275\u0275text(273, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(274, "option", 74);
    \u0275\u0275text(275, "Three");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(276, "c-col", 64)(277, "c-form-check");
    \u0275\u0275element(278, "input", 75);
    \u0275\u0275elementStart(279, "label", 76);
    \u0275\u0275text(280, "Remember me");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(281, "c-col", 64)(282, "button", 30);
    \u0275\u0275text(283, "Submit");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(284, "p", 2);
    \u0275\u0275text(285, " You can then remix that once again with size-specific column classes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(286, "app-docs-example", 62)(287, "form", 77)(288, "c-col", 78)(289, "label", 79);
    \u0275\u0275text(290, " Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(291, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(292, "c-col", 78)(293, "label", 81);
    \u0275\u0275text(294, " Username ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(295, "c-input-group")(296, "span", 68);
    \u0275\u0275text(297, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(298, "input", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(299, "c-col", 78)(300, "label", 83);
    \u0275\u0275text(301, " Preference ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "select", 84)(303, "option");
    \u0275\u0275text(304, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(305, "option", 72);
    \u0275\u0275text(306, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(307, "option", 73);
    \u0275\u0275text(308, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(309, "option", 74);
    \u0275\u0275text(310, "Three");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(311, "c-col", 64)(312, "c-form-check");
    \u0275\u0275element(313, "input", 85);
    \u0275\u0275elementStart(314, "label", 86);
    \u0275\u0275text(315, "Remember me");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(316, "c-col", 64)(317, "button", 30);
    \u0275\u0275text(318, "Submit");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(319, "c-col", 0)(320, "c-card", 1)(321, "c-card-header");
    \u0275\u0275text(322, "\n        ");
    \u0275\u0275elementStart(323, "strong");
    \u0275\u0275text(324, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(325, " ");
    \u0275\u0275elementStart(326, "small");
    \u0275\u0275text(327, "Inline forms");
    \u0275\u0275elementEnd();
    \u0275\u0275text(328, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "c-card-body")(330, "p", 2);
    \u0275\u0275text(331, " Use the ");
    \u0275\u0275elementStart(332, "code");
    \u0275\u0275text(333, '<c-col xs="auto">');
    \u0275\u0275elementEnd();
    \u0275\u0275text(334, " class to create horizontal layouts. By adding ");
    \u0275\u0275elementStart(335, "a", 7);
    \u0275\u0275text(336, "gutter modifier classes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(337, ", we will have gutters in horizontal and vertical directions. The ");
    \u0275\u0275elementStart(338, "code");
    \u0275\u0275text(339, ".align-items-center");
    \u0275\u0275elementEnd();
    \u0275\u0275text(340, " aligns the form elements to the middle, making the ");
    \u0275\u0275elementStart(341, "code");
    \u0275\u0275text(342, "<CFormCheck>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(343, " align properly. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(344, "app-docs-example", 87)(345, "form", 88)(346, "c-col", 0)(347, "label", 89);
    \u0275\u0275text(348, " Username ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(349, "c-input-group")(350, "span", 68);
    \u0275\u0275text(351, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(352, "input", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(353, "c-col", 0)(354, "label", 91);
    \u0275\u0275text(355, " Preference ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(356, "select", 92)(357, "option");
    \u0275\u0275text(358, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(359, "option", 72);
    \u0275\u0275text(360, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(361, "option", 73);
    \u0275\u0275text(362, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(363, "option", 74);
    \u0275\u0275text(364, "Three");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(365, "c-col", 0)(366, "c-form-check", 93);
    \u0275\u0275element(367, "input", 94);
    \u0275\u0275elementStart(368, "label", 95);
    \u0275\u0275text(369, "Remember me");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(370, "c-col", 0)(371, "button", 30);
    \u0275\u0275text(372, "Submit");
    \u0275\u0275elementEnd()()()()()()()();
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormControlDirective, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, FormsModule, NgForm, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective] });
var LayoutComponent = _LayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\documentacion\\forms\\layout\\layout.component.ts", lineNumber: 13 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=layout.component-NML7PEUK.js.map
