import {
  DocsExampleComponent
} from "./chunk-72S5C6XO.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-F3KJ4UGH.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  RowComponent,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/forms/validation/validation.component.ts
var _ValidationComponent = class _ValidationComponent {
  constructor() {
    this.customStylesValidated = false;
    this.browserDefaultsValidated = false;
    this.tooltipValidated = false;
  }
  ngOnInit() {
  }
  onSubmit1() {
    this.customStylesValidated = true;
    console.log("Submit... 1");
  }
  onReset1() {
    this.customStylesValidated = false;
    console.log("Reset... 1");
  }
  onSubmit2() {
    this.browserDefaultsValidated = true;
    console.log("Submit... 2");
  }
  onReset2() {
    this.browserDefaultsValidated = false;
    console.log("Reset... 3");
  }
  onSubmit3() {
    this.tooltipValidated = true;
    console.log("Submit... 3");
  }
  onReset3() {
    this.tooltipValidated = false;
    console.log("Reset... 3");
  }
};
_ValidationComponent.\u0275fac = function ValidationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ValidationComponent)();
};
_ValidationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValidationComponent, selectors: [["app-validation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 381, vars: 46, consts: [["customStylesForm", "ngForm"], ["browserDefaultsForm", "ngForm"], ["tooltipForm", "ngForm"], ["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "forms/validation"], ["cForm", "", 1, "row", "g-3", "needs-validation", 3, "ngSubmit", "validated"], ["md", "4"], ["cLabel", "", "for", "validationCustom01"], ["cFormControl", "", "id", "validationCustom01", "required", "", "type", "text", "value", "Mark"], [3, "valid"], ["cLabel", "", "for", "validationCustom02"], ["cFormControl", "", "id", "validationCustom02", "required", "", "type", "text", "value", "Otto"], ["cLabel", "", "for", "validationCustomUsername"], [1, "has-validation"], ["cInputGroupText", "", "id", "inputGroupPrepend"], ["aria-describedby", "inputGroupPrepend", "cFormControl", "", "id", "validationCustomUsername", "required", "", "type", "text"], ["md", "6"], ["cLabel", "", "for", "validationCustom03"], ["cFormControl", "", "id", "validationCustom03", "required", "", "type", "text"], ["md", "3"], ["cLabel", "", "for", "validationCustom04"], ["cSelect", "", "id", "validationCustom04", "required", ""], ["value", ""], ["cLabel", "", "for", "validationCustom05"], ["cFormControl", "", "id", "validationCustom05", "required", "", "type", "text"], ["cFormCheckInput", "", "id", "invalidCheck", "name", "invalidCheck", "required", "", "type", "checkbox"], ["cFormCheckLabel", "", "for", "invalidCheck"], ["cButton", "", "color", "primary", "type", "submit", 1, "me-1"], ["cButton", "", "color", "secondary", "type", "reset", 3, "click"], ["href", "forms/validation#browser-defaults"], ["cForm", "", "ngNativeValidate", "", 1, "row", "g-3", 3, "ngSubmit", "validated"], ["cLabel", "", "for", "validationDefault01"], ["cFormControl", "", "id", "validationDefault01", "required", "", "type", "text", "value", "Mark"], ["cLabel", "", "for", "validationDefault02"], ["cFormControl", "", "id", "validationDefault02", "required", "", "type", "text", "value", "Otto"], ["cLabel", "", "for", "validationDefaultUsername"], ["cInputGroupText", "", "id", "inputGroupPrepend1"], ["aria-describedby", "inputGroupPrepend1", "cFormControl", "", "id", "validationDefaultUsername", "required", "", "type", "text"], ["cLabel", "", "for", "validationDefault03"], ["cFormControl", "", "id", "validationDefault03", "required", "", "type", "text"], ["cLabel", "", "for", "validationDefault04"], ["cSelect", "", "id", "validationDefault04", "required", ""], ["cLabel", "", "for", "validationDefault05"], ["cFormControl", "", "id", "validationDefault05", "required", "", "type", "text"], ["cFormCheckInput", "", "id", "invalidCheck1", "name", "invalidCheck", "required", "", "type", "checkbox"], ["cFormCheckLabel", "", "for", "invalidCheck1"], ["href", "forms/validation#server-side"], ["cForm", "", "ngNativeValidate", "", 1, "row", "g-3", "needs-validation"], ["cLabel", "", "for", "validationServer01"], ["cFormControl", "", "id", "validationServer01", "required", "", "type", "text", "value", "Mark", 3, "valid"], ["cLabel", "", "for", "validationServer02"], ["cFormControl", "", "id", "validationServer02", "required", "", "type", "text", "value", "Otto", 3, "valid"], ["cLabel", "", "for", "validationServerUsername"], ["cInputGroupText", "", "id", "inputGroupPrepend03"], ["aria-describedby", "inputGroupPrepend03", "cFormControl", "", "id", "validationServerUsername", "required", "", "type", "text", 3, "valid"], ["cLabel", "", "for", "validationServer03"], ["cFormControl", "", "id", "validationServer03", "required", "", "type", "text", 3, "valid"], ["cLabel", "", "for", "validationServer04"], ["cSelect", "", "id", "validationServer04", 3, "valid"], ["disabled", ""], ["cLabel", "", "for", "validationServer05"], ["cFormControl", "", "id", "validationServer05", "required", "", "type", "text", 3, "valid"], [1, "mb-3"], ["cFormCheckInput", "", "id", "invalidCheckServer", "required", "", "type", "checkbox", 3, "valid"], ["cFormCheckLabel", "", "for", "invalidCheckServer"], ["cButton", "", "color", "primary", "type", "submit"], ["cListGroup", "", 1, "mb-3", 3, "flush"], ["cListGroupItem", ""], ["href", "forms/validation#supported-elements"], ["cForm", "", 3, "validated"], ["cLabel", "", "for", "validationTextarea", 1, "form-label"], ["cFormControl", "", "id", "validationTextarea", "placeholder", "Required example textarea", "required", "", 3, "valid"], ["cFormCheckInput", "", "id", "validationFormCheck1", "name", "validationFormCheck1", "required", "", "type", "checkbox"], ["cFormCheckLabel", "", "for", "validationFormCheck1"], ["cFormCheckInput", "", "id", "validationFormCheck2", "name", "radio-stacked", "required", "", "type", "radio"], ["cFormCheckLabel", "", "for", "validationFormCheck2"], ["cFormCheckInput", "", "id", "validationFormCheck3", "name", "radio-stacked", "required", "", "type", "radio"], ["cFormCheckLabel", "", "for", "validationFormCheck3"], ["aria-label", "select example", "cSelect", "", "required", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["aria-label", "file example", "cFormControl", "", "id", "validationText1", "required", "", "type", "file"], ["cButton", "", "color", "primary", "disabled", "", "type", "submit"], ["href", "forms/validation#tooltips"], ["md", "4", 1, "position-relative"], ["cLabel", "", "for", "validationTooltip01"], ["cFormControl", "", "id", "validationTooltip01", "required", "", "type", "text", "value", "Mark"], ["tooltip", "", 3, "valid"], ["cLabel", "", "for", "validationTooltip02"], ["cFormControl", "", "id", "validationTooltip02", "required", "", "type", "text", "value", "Otto"], ["cLabel", "", "for", "validationTooltipUsername"], ["cInputGroupText", "", "id", "inputGroupPrependTooltip"], ["aria-describedby", "inputGroupPrependTooltip", "cFormControl", "", "id", "validationTooltipUsername", "required", "", "type", "text"], ["md", "6", 1, "position-relative"], ["cLabel", "", "for", "validationTooltip03"], ["cFormControl", "", "id", "validationTooltip03", "required", "", "type", "text"], ["md", "3", 1, "position-relative"], ["cLabel", "", "for", "validationTooltip04"], ["cSelect", "", "id", "validationTooltip04", "required", ""], ["cLabel", "", "for", "validationTooltip05"], ["cFormControl", "", "id", "validationTooltip05", "required", "", "type", "text"], ["xs", "12", 1, "position-relative"], ["cFormCheckInput", "", "id", "invalidCheckTooltip", "name", "invalidCheckTooltip", "required", "", "type", "checkbox"], ["cFormCheckLabel", "", "for", "invalidCheckTooltip"]], template: function ValidationComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 3)(2, "c-card", 4)(3, "c-card-header");
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " ");
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Custom styles");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "c-card-body")(12, "p", 5);
    \u0275\u0275text(13, " For custom CoreUI form validation messages, you'll need to add the ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "noValidate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " boolean property to your ");
    \u0275\u0275elementStart(17, "code");
    \u0275\u0275text(18, "<CForm>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, ". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the ");
    \u0275\u0275elementStart(20, "code");
    \u0275\u0275text(21, ":invalid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " and ");
    \u0275\u0275elementStart(23, "code");
    \u0275\u0275text(24, ":valid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " styles applied to your form controls. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 5);
    \u0275\u0275text(27, " Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "app-docs-example", 6)(29, "form", 7, 0);
    \u0275\u0275listener("ngSubmit", function ValidationComponent_Template_form_ngSubmit_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit1());
    });
    \u0275\u0275elementStart(31, "c-col", 8)(32, "label", 9);
    \u0275\u0275text(33, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 10);
    \u0275\u0275elementStart(35, "c-form-feedback", 11);
    \u0275\u0275text(36, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "c-col", 8)(38, "label", 12);
    \u0275\u0275text(39, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 13);
    \u0275\u0275elementStart(41, "c-form-feedback", 11);
    \u0275\u0275text(42, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "c-col", 8)(44, "label", 14);
    \u0275\u0275text(45, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "c-input-group", 15)(47, "span", 16);
    \u0275\u0275text(48, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 17);
    \u0275\u0275elementStart(50, "c-form-feedback", 11);
    \u0275\u0275text(51, "Please choose a username.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "c-col", 18)(53, "label", 19);
    \u0275\u0275text(54, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 20);
    \u0275\u0275elementStart(56, "c-form-feedback", 11);
    \u0275\u0275text(57, "Please provide a valid city.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "c-col", 21)(59, "label", 22);
    \u0275\u0275text(60, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "select", 23)(62, "option", 24);
    \u0275\u0275text(63, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option");
    \u0275\u0275text(65, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "c-form-feedback", 11);
    \u0275\u0275text(67, "Please provide a valid State.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "c-col", 21)(69, "label", 25);
    \u0275\u0275text(70, "Zip code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 26);
    \u0275\u0275elementStart(72, "c-form-feedback", 11);
    \u0275\u0275text(73, "Please provide a valid zip.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "c-col", 3)(75, "c-form-check");
    \u0275\u0275element(76, "input", 27);
    \u0275\u0275elementStart(77, "label", 28);
    \u0275\u0275text(78, "Agree to terms and conditions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "c-form-feedback", 11);
    \u0275\u0275text(80, "You must agree before submitting.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "c-col", 3)(82, "button", 29);
    \u0275\u0275text(83, " Submit form ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 30);
    \u0275\u0275listener("click", function ValidationComponent_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onReset1());
    });
    \u0275\u0275text(85, " Reset ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(86, "c-col", 3)(87, "c-card", 4)(88, "c-card-header");
    \u0275\u0275text(89, "\n        ");
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " ");
    \u0275\u0275elementStart(93, "small");
    \u0275\u0275text(94, "Browser defaults");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "c-card-body")(97, "p", 5);
    \u0275\u0275text(98, " Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p", 5);
    \u0275\u0275text(100, " While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "app-docs-example", 31)(102, "form", 32, 1);
    \u0275\u0275listener("ngSubmit", function ValidationComponent_Template_form_ngSubmit_102_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit2());
    });
    \u0275\u0275elementStart(104, "c-col", 8)(105, "label", 33);
    \u0275\u0275text(106, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "input", 34);
    \u0275\u0275elementStart(108, "c-form-feedback", 11);
    \u0275\u0275text(109, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "c-col", 8)(111, "label", 35);
    \u0275\u0275text(112, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "input", 36);
    \u0275\u0275elementStart(114, "c-form-feedback", 11);
    \u0275\u0275text(115, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "c-col", 8)(117, "label", 37);
    \u0275\u0275text(118, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "c-input-group", 15)(120, "span", 38);
    \u0275\u0275text(121, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(122, "input", 39);
    \u0275\u0275elementStart(123, "c-form-feedback", 11);
    \u0275\u0275text(124, "Please choose a username.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "c-col", 18)(126, "label", 40);
    \u0275\u0275text(127, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(128, "input", 41);
    \u0275\u0275elementStart(129, "c-form-feedback", 11);
    \u0275\u0275text(130, "Please provide a valid city.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "c-col", 21)(132, "label", 42);
    \u0275\u0275text(133, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "select", 43)(135, "option", 24);
    \u0275\u0275text(136, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "option");
    \u0275\u0275text(138, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "c-form-feedback", 11);
    \u0275\u0275text(140, "Please provide a valid State.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "c-col", 21)(142, "label", 44);
    \u0275\u0275text(143, "Zip code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(144, "input", 45);
    \u0275\u0275elementStart(145, "c-form-feedback", 11);
    \u0275\u0275text(146, "Please provide a valid zip.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "c-col", 3)(148, "c-form-check");
    \u0275\u0275element(149, "input", 46);
    \u0275\u0275elementStart(150, "label", 47);
    \u0275\u0275text(151, "Agree to terms and conditions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "c-form-feedback", 11);
    \u0275\u0275text(153, "You must agree before submitting.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "c-col", 3)(155, "button", 29);
    \u0275\u0275text(156, " Submit form ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "button", 30);
    \u0275\u0275listener("click", function ValidationComponent_Template_button_click_157_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onReset2());
    });
    \u0275\u0275text(158, " Reset ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(159, "c-col", 3)(160, "c-card", 4)(161, "c-card-header");
    \u0275\u0275text(162, "\n        ");
    \u0275\u0275elementStart(163, "strong");
    \u0275\u0275text(164, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(165, " ");
    \u0275\u0275elementStart(166, "small");
    \u0275\u0275text(167, "Server side");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "c-card-body")(170, "p", 5);
    \u0275\u0275text(171, " We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with ");
    \u0275\u0275elementStart(172, "code");
    \u0275\u0275text(173, "invalid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174, " and ");
    \u0275\u0275elementStart(175, "code");
    \u0275\u0275text(176, "valid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(177, " boolean properties. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "p", 5);
    \u0275\u0275text(179, " For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using ");
    \u0275\u0275elementStart(180, "code");
    \u0275\u0275text(181, "aria-describedby");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, " (noting that this attribute allows more than one ");
    \u0275\u0275elementStart(183, "code");
    \u0275\u0275text(184, "id");
    \u0275\u0275elementEnd();
    \u0275\u0275text(185, " to be referenced, in case the field already points to additional form text). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "app-docs-example", 48)(187, "form", 49)(188, "c-col", 8)(189, "label", 50);
    \u0275\u0275text(190, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(191, "input", 51);
    \u0275\u0275elementStart(192, "c-form-feedback", 11);
    \u0275\u0275text(193, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(194, "c-col", 8)(195, "label", 52);
    \u0275\u0275text(196, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(197, "input", 53);
    \u0275\u0275elementStart(198, "c-form-feedback", 11);
    \u0275\u0275text(199, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(200, "c-col", 8)(201, "label", 54);
    \u0275\u0275text(202, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "c-input-group", 15)(204, "span", 55);
    \u0275\u0275text(205, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(206, "input", 56);
    \u0275\u0275elementStart(207, "c-form-feedback", 11);
    \u0275\u0275text(208, "Please choose a username.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(209, "c-col", 18)(210, "label", 57);
    \u0275\u0275text(211, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(212, "input", 58);
    \u0275\u0275elementStart(213, "c-form-feedback", 11);
    \u0275\u0275text(214, "Please provide a valid city.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(215, "c-col", 21)(216, "label", 59);
    \u0275\u0275text(217, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "select", 60)(219, "option", 61);
    \u0275\u0275text(220, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "option");
    \u0275\u0275text(222, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(223, "c-form-feedback", 11);
    \u0275\u0275text(224, "Please provide a valid state.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "c-col", 21)(226, "label", 62);
    \u0275\u0275text(227, "Zip code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(228, "input", 63);
    \u0275\u0275elementStart(229, "c-form-feedback", 11);
    \u0275\u0275text(230, "Please provide a valid zip.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "c-col", 3)(232, "c-form-check", 64);
    \u0275\u0275element(233, "input", 65);
    \u0275\u0275elementStart(234, "label", 66);
    \u0275\u0275text(235, "Agree to terms and conditions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(236, "c-form-feedback", 11);
    \u0275\u0275text(237, "You must agree before submitting.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(238, "c-col", 3)(239, "button", 67);
    \u0275\u0275text(240, " Submit form ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(241, "c-col", 3)(242, "c-card", 4)(243, "c-card-header");
    \u0275\u0275text(244, "\n        ");
    \u0275\u0275elementStart(245, "strong");
    \u0275\u0275text(246, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(247, " ");
    \u0275\u0275elementStart(248, "small");
    \u0275\u0275text(249, "Supported elements");
    \u0275\u0275elementEnd();
    \u0275\u0275text(250, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "c-card-body")(252, "p", 5);
    \u0275\u0275text(253, " Validation styles are available for the following form controls and components: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(254, "ul", 68)(255, "li", 69)(256, "code");
    \u0275\u0275text(257, "<input cFormControl>");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "li", 69)(259, "code");
    \u0275\u0275text(260, "<select cSelect>");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(261, "li", 69)(262, "code");
    \u0275\u0275text(263, "<c-form-check>");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(264, "app-docs-example", 70)(265, "form", 71)(266, "div", 64)(267, "label", 72);
    \u0275\u0275text(268, " Textarea ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(269, "textarea", 73);
    \u0275\u0275elementStart(270, "c-form-feedback", 11);
    \u0275\u0275text(271, "Please enter a message in the textarea.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(272, "c-form-check", 64);
    \u0275\u0275element(273, "input", 74);
    \u0275\u0275elementStart(274, "label", 75);
    \u0275\u0275text(275, "Check this checkbox");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(276, "c-form-feedback", 11);
    \u0275\u0275text(277, "Example invalid feedback text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(278, "c-form-check");
    \u0275\u0275element(279, "input", 76);
    \u0275\u0275elementStart(280, "label", 77);
    \u0275\u0275text(281, "Check this radio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(282, "c-form-check", 64);
    \u0275\u0275element(283, "input", 78);
    \u0275\u0275elementStart(284, "label", 79);
    \u0275\u0275text(285, "Check this radio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(286, "c-form-feedback", 11);
    \u0275\u0275text(287, "More example invalid feedback text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(288, "div", 64)(289, "select", 80)(290, "option", 24);
    \u0275\u0275text(291, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(292, "option", 81);
    \u0275\u0275text(293, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(294, "option", 82);
    \u0275\u0275text(295, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(296, "option", 83);
    \u0275\u0275text(297, "Three");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(298, "c-form-feedback", 11);
    \u0275\u0275text(299, "Example invalid select feedback");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(300, "div", 64);
    \u0275\u0275element(301, "input", 84);
    \u0275\u0275elementStart(302, "c-form-feedback", 11);
    \u0275\u0275text(303, "Example invalid form file feedback");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(304, "div", 64)(305, "button", 85);
    \u0275\u0275text(306, " Submit form ");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(307, "c-col", 3)(308, "c-card", 4)(309, "c-card-header");
    \u0275\u0275text(310, "\n        ");
    \u0275\u0275elementStart(311, "strong");
    \u0275\u0275text(312, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(313, " ");
    \u0275\u0275elementStart(314, "small");
    \u0275\u0275text(315, "Tooltips");
    \u0275\u0275elementEnd();
    \u0275\u0275text(316, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "c-card-body")(318, "p", 5);
    \u0275\u0275text(319, " If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with ");
    \u0275\u0275elementStart(320, "code");
    \u0275\u0275text(321, "position: relative");
    \u0275\u0275elementEnd();
    \u0275\u0275text(322, " on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(323, "app-docs-example", 86)(324, "form", 7, 2);
    \u0275\u0275listener("ngSubmit", function ValidationComponent_Template_form_ngSubmit_324_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit3());
    });
    \u0275\u0275elementStart(326, "c-col", 87)(327, "label", 88);
    \u0275\u0275text(328, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(329, "input", 89);
    \u0275\u0275elementStart(330, "c-form-feedback", 90);
    \u0275\u0275text(331, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(332, "c-col", 87)(333, "label", 91);
    \u0275\u0275text(334, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(335, "input", 92);
    \u0275\u0275elementStart(336, "c-form-feedback", 90);
    \u0275\u0275text(337, "Looks good!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(338, "c-col", 87)(339, "label", 93);
    \u0275\u0275text(340, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(341, "c-input-group", 15)(342, "span", 94);
    \u0275\u0275text(343, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275element(344, "input", 95);
    \u0275\u0275elementStart(345, "c-form-feedback", 90);
    \u0275\u0275text(346, "Please choose a username.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(347, "c-col", 96)(348, "label", 97);
    \u0275\u0275text(349, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(350, "input", 98);
    \u0275\u0275elementStart(351, "c-form-feedback", 90);
    \u0275\u0275text(352, "Please provide a valid city.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(353, "c-col", 99)(354, "label", 100);
    \u0275\u0275text(355, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(356, "select", 101)(357, "option", 24);
    \u0275\u0275text(358, "Choose...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(359, "option", 81);
    \u0275\u0275text(360, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(361, "c-form-feedback", 90);
    \u0275\u0275text(362, "Please provide a valid State.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(363, "c-col", 99)(364, "label", 102);
    \u0275\u0275text(365, "Zip code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(366, "input", 103);
    \u0275\u0275elementStart(367, "c-form-feedback", 90);
    \u0275\u0275text(368, "Please provide a valid zip.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(369, "c-col", 104)(370, "c-form-check");
    \u0275\u0275element(371, "input", 105);
    \u0275\u0275elementStart(372, "label", 106);
    \u0275\u0275text(373, "Agree to terms and conditions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(374, "c-form-feedback", 90);
    \u0275\u0275text(375, "You must agree before submitting.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(376, "c-col", 3)(377, "button", 29);
    \u0275\u0275text(378, " Submit form ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(379, "button", 30);
    \u0275\u0275listener("click", function ValidationComponent_Template_button_click_379_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onReset3());
    });
    \u0275\u0275text(380, " Reset ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(29);
    \u0275\u0275property("validated", ctx.customStylesValidated);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(10);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(23);
    \u0275\u0275property("validated", ctx.browserDefaultsValidated);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(10);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(39);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance();
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance();
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(18);
    \u0275\u0275property("flush", true);
    \u0275\u0275advance(11);
    \u0275\u0275property("validated", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance();
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(10);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(12);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(22);
    \u0275\u0275property("validated", ctx.tooltipValidated);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(10);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("valid", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("valid", false);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, FormsModule, NgForm, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ListGroupDirective, ListGroupItemDirective] });
var ValidationComponent = _ValidationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValidationComponent, { className: "ValidationComponent", filePath: "src\\app\\documentacion\\forms\\validation\\validation.component.ts", lineNumber: 13 });
})();
export {
  ValidationComponent
};
//# sourceMappingURL=validation.component-LZ2X6H5N.js.map
