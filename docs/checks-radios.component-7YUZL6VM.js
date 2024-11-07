import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  NgControlStatus,
  NgControlStatusGroup,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ɵNgNoValidate
} from "./chunk-3RTTW4L4.js";
import {
  DocsExampleComponent
} from "./chunk-NVLXH4OP.js";
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormDirective,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import {
  __spreadValues
} from "./chunk-6WCCERUZ.js";

// src/app/documentacion/forms/checks-radios/checks-radios.component.ts
var _ChecksRadiosComponent = class _ChecksRadiosComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.inputDisabled = null;
    this.formGroup = this.formBuilder.group({
      flexRadioGroup: this.formBuilder.group({
        flexRadioDefault: this.formBuilder.control("two")
      }),
      flexRadioGroupDisabled: this.formBuilder.group({
        flexRadioDefault: this.formBuilder.control({ value: "two", disabled: true })
      }),
      flexCheckGroup: this.formBuilder.group({
        checkOne: [false],
        checkTwo: [true]
      }),
      flexCheckGroupDisabled: this.formBuilder.group({
        checkThree: [{ value: false, disabled: true }],
        checkFour: [{ value: true, disabled: true }]
      }),
      btnCheckGroup: this.formBuilder.group({
        checkbox1: [true],
        checkbox2: [false],
        checkbox3: [{ value: false, disabled: true }]
      }),
      btnRadioGroup: this.formBuilder.group({
        radio1: this.formBuilder.control({ value: "Radio2" })
      })
    });
  }
  setCheckBoxValue(controlName) {
    const btnCheckGroup = this.formGroup.controls["btnCheckGroup"];
    const prevValue = btnCheckGroup.get(controlName)?.value;
    const groupValue = __spreadValues({}, btnCheckGroup.value);
    groupValue[controlName] = !prevValue;
    btnCheckGroup.patchValue(groupValue);
  }
  setRadioValue(value) {
    const group = this.formGroup.controls["btnRadioGroup"];
    group.setValue({ radio1: value });
  }
};
_ChecksRadiosComponent.\u0275fac = function ChecksRadiosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChecksRadiosComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
};
_ChecksRadiosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChecksRadiosComponent, selectors: [["app-checks-radios"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 592, vars: 10, consts: [["cForm", "", 3, "formGroup"], ["xs", "12"], [1, "mb-4"], ["href", "forms/checks-radios"], ["formGroupName", "flexCheckGroup"], ["cFormCheckInput", "", "formControlName", "checkOne", "id", "checkOne", "type", "checkbox"], ["cFormCheckLabel", "", "for", "checkOne"], ["cFormCheckInput", "", "formControlName", "checkTwo", "id", "checkTwo", "type", "checkbox", 3, "checked"], ["cFormCheckLabel", "", "for", "checkTwo"], [1, "text-body-secondary", "small"], ["href", "forms/checks-radios#disabled"], ["formGroupName", "flexCheckGroupDisabled"], ["cFormCheckInput", "", "formControlName", "checkThree", "id", "checkThree", "type", "checkbox"], ["cFormCheckLabel", "", "for", "checkThree"], ["cFormCheckInput", "", "formControlName", "checkFour", "id", "checkFour", "type", "checkbox"], ["cFormCheckLabel", "", "for", "checkFour"], ["href", "forms/checks-radios#radios"], ["formGroupName", "flexRadioGroup"], ["cFormCheckInput", "", "formControlName", "flexRadioDefault", "type", "radio", "value", "one"], ["cFormCheckLabel", ""], ["cFormCheckInput", "", "formControlName", "flexRadioDefault", "type", "radio", "value", "two"], ["href", "forms/checks-radios#disabled-1"], ["formGroupName", "flexRadioGroupDisabled"], ["href", "forms/checks-radios#switches"], [3, "switch"], ["cFormCheckInput", "", "type", "checkbox"], ["cFormCheckInput", "", "checked", "", "type", "checkbox"], ["cFormCheckInput", "", "disabled", "", "type", "checkbox"], ["cFormCheckInput", "", "checked", "", "disabled", "", "type", "checkbox"], ["href", "forms/checks-radios#sizes"], ["sizing", "lg", "switch", ""], ["sizing", "xl", "switch", ""], ["href", "forms/checks-radios#default-stacked"], ["cFormCheckInput", "", "id", "stackOne", "type", "checkbox"], ["cFormCheckLabel", "", "for", "stackOne"], ["cFormCheckInput", "", "disabled", "", "id", "stackTwo", "type", "checkbox"], ["cFormCheckLabel", "", "for", "stackTwo"], ["cFormCheckInput", "", "checked", "", "id", "radioStack1", "name", "radioStack", "type", "radio"], ["cFormCheckLabel", "", "for", "radioStack1"], ["cFormCheckInput", "", "id", "radioStack2", "name", "radioStack", "type", "radio"], ["cFormCheckLabel", "", "for", "radioStack2"], ["cFormCheckInput", "", "disabled", "", "id", "radioStack3", "name", "radioStack", "type", "radio"], ["cFormCheckLabel", "", "for", "radioStack3"], ["href", "forms/checks-radios#inline"], [3, "inline"], ["cFormCheckInput", "", "id", "inline1", "type", "checkbox"], ["cFormCheckLabel", "", "for", "inline1"], ["inline", ""], ["cFormCheckInput", "", "id", "inline2", "type", "checkbox"], ["cFormCheckLabel", "", "for", "inline2"], ["cFormCheckInput", "", "disabled", "", "id", "inline3", "type", "checkbox"], ["cFormCheckLabel", "", "for", "inline3"], ["cFormCheckInput", "", "checked", "", "id", "radioinline1", "name", "radioinline", "type", "radio"], ["cFormCheckLabel", "", "for", "radioinline1"], ["cFormCheckInput", "", "id", "radioinline2", "name", "radioinline", "type", "radio"], ["cFormCheckLabel", "", "for", "radioinline2"], ["cFormCheckInput", "", "disabled", "", "id", "radioinline3", "name", "radioinline", "type", "radio"], ["cFormCheckLabel", "", "for", "radioinline3"], ["href", "forms/checks-radios#without-labels"], ["cFormCheckInput", "", "id", "nolabelCheck", "name", "nolabelCheck", "type", "checkbox"], ["cFormCheckInput", "", "id", "nolabelRadio", "name", "nolabelRadio", "type", "radio"], ["href", "forms/checks-radios#toggle-buttons"], ["formGroupName", "btnCheckGroup"], ["aria-label", "Basic checkbox toggle button group", "role", "group"], ["formControlName", "checkbox1", "type", "checkbox", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", 3, "click"], ["formControlName", "checkbox2", "type", "checkbox", 1, "btn-check"], ["formControlName", "checkbox3", "type", "checkbox", 1, "btn-check"], ["formGroupName", "btnRadioGroup"], ["aria-label", "Basic radio toggle button group", "role", "group"], ["formControlName", "radio1", "id", "radio1", "type", "radio", "value", "Radio1", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "for", "radio1", "variant", "ghost", 3, "click"], ["formControlName", "radio1", "id", "radio2", "type", "radio", "value", "Radio2", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "for", "radio2", "variant", "ghost", 3, "click"], ["formControlName", "radio1", "id", "radio3", "type", "radio", "value", "Radio3", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "for", "radio3", "variant", "ghost", 3, "click"], ["cButton", "", "cFormCheckLabel", "", "variant", "outline", 3, "click"], ["formControlName", "radio1", "id", "radio1o", "type", "radio", "value", "Radio1", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "danger", "for", "radio1o", "variant", "outline", 3, "click"], ["formControlName", "radio1", "id", "radio2o", "type", "radio", "value", "Radio2", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "success", "for", "radio2o", "variant", "outline", 3, "click"], ["formControlName", "radio1", "id", "radio3o", "type", "radio", "value", "Radio3", 1, "btn-check"], ["cButton", "", "color", "secondary", "for", "radio3o", "variant", "outline", 3, "click"]], template: function ChecksRadiosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "form", 0);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-col", 1);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card", 2);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "c-card-header");
    \u0275\u0275text(9, "\n          ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "Angular Checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "c-card-body");
    \u0275\u0275text(15, "\n          ");
    \u0275\u0275elementStart(16, "app-docs-example", 3);
    \u0275\u0275text(17, "\n            ");
    \u0275\u0275elementStart(18, "div", 4);
    \u0275\u0275text(19, "\n              ");
    \u0275\u0275elementStart(20, "c-form-check");
    \u0275\u0275text(21, "\n                ");
    \u0275\u0275element(22, "input", 5);
    \u0275\u0275text(23, "\n                ");
    \u0275\u0275elementStart(24, "label", 6);
    \u0275\u0275text(25, "Default checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n              ");
    \u0275\u0275elementStart(28, "c-form-check");
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275element(30, "input", 7);
    \u0275\u0275text(31, "\n                ");
    \u0275\u0275elementStart(32, "label", 8);
    \u0275\u0275text(33, "Checked checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n    ");
    \u0275\u0275elementStart(41, "c-col", 1);
    \u0275\u0275text(42, "\n      ");
    \u0275\u0275elementStart(43, "c-card", 2);
    \u0275\u0275text(44, "\n        ");
    \u0275\u0275elementStart(45, "c-card-header");
    \u0275\u0275text(46, "\n          ");
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48, "Angular Checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " ");
    \u0275\u0275elementStart(50, "small");
    \u0275\u0275text(51, "Disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, "\n        ");
    \u0275\u0275elementStart(54, "c-card-body");
    \u0275\u0275text(55, "\n          ");
    \u0275\u0275elementStart(56, "p", 9);
    \u0275\u0275text(57, "\n            Add the ");
    \u0275\u0275elementStart(58, "code");
    \u0275\u0275text(59, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " attribute and the associated ");
    \u0275\u0275elementStart(61, "code");
    \u0275\u0275text(62, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "s\n            are automatically styled to match with a lighter color to help indicate the\n            input's state.\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n          ");
    \u0275\u0275elementStart(65, "app-docs-example", 10);
    \u0275\u0275text(66, "\n            ");
    \u0275\u0275elementStart(67, "div", 11);
    \u0275\u0275text(68, "\n              ");
    \u0275\u0275elementStart(69, "c-form-check");
    \u0275\u0275text(70, "\n                ");
    \u0275\u0275element(71, "input", 12);
    \u0275\u0275text(72, "\n                ");
    \u0275\u0275elementStart(73, "label", 13);
    \u0275\u0275text(74, "Disabled checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, "\n              ");
    \u0275\u0275elementStart(77, "c-form-check");
    \u0275\u0275text(78, "\n                ");
    \u0275\u0275element(79, "input", 14);
    \u0275\u0275text(80, "\n                ");
    \u0275\u0275elementStart(81, "label", 15);
    \u0275\u0275text(82, "Disabled checked checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n    ");
    \u0275\u0275elementStart(90, "c-col", 1);
    \u0275\u0275text(91, "\n      ");
    \u0275\u0275elementStart(92, "c-card", 2);
    \u0275\u0275text(93, "\n        ");
    \u0275\u0275elementStart(94, "c-card-header");
    \u0275\u0275text(95, "\n          ");
    \u0275\u0275elementStart(96, "strong");
    \u0275\u0275text(97, "Angular Radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, "\n        ");
    \u0275\u0275elementStart(100, "c-card-body");
    \u0275\u0275text(101, "\n          ");
    \u0275\u0275elementStart(102, "app-docs-example", 16);
    \u0275\u0275text(103, "\n            ");
    \u0275\u0275elementStart(104, "div", 17);
    \u0275\u0275text(105, "\n              ");
    \u0275\u0275elementStart(106, "c-form-check");
    \u0275\u0275text(107, "\n                ");
    \u0275\u0275element(108, "input", 18);
    \u0275\u0275text(109, "\n                ");
    \u0275\u0275elementStart(110, "label", 19);
    \u0275\u0275text(111, "Default radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, "\n              ");
    \u0275\u0275elementStart(114, "c-form-check");
    \u0275\u0275text(115, "\n                ");
    \u0275\u0275element(116, "input", 20);
    \u0275\u0275text(117, "\n                ");
    \u0275\u0275elementStart(118, "label", 19);
    \u0275\u0275text(119, "Checked radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(121, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(124, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, "\n    ");
    \u0275\u0275elementStart(127, "c-col", 1);
    \u0275\u0275text(128, "\n      ");
    \u0275\u0275elementStart(129, "c-card", 2);
    \u0275\u0275text(130, "\n        ");
    \u0275\u0275elementStart(131, "c-card-header");
    \u0275\u0275text(132, "\n          ");
    \u0275\u0275elementStart(133, "strong");
    \u0275\u0275text(134, "Angular Radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, " ");
    \u0275\u0275elementStart(136, "small");
    \u0275\u0275text(137, "Disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, "\n        ");
    \u0275\u0275elementStart(140, "c-card-body");
    \u0275\u0275text(141, "\n          ");
    \u0275\u0275elementStart(142, "p", 9);
    \u0275\u0275text(143, "\n            Add the ");
    \u0275\u0275elementStart(144, "code");
    \u0275\u0275text(145, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(146, " attribute and the associated ");
    \u0275\u0275elementStart(147, "code");
    \u0275\u0275text(148, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, "s\n            are automatically styled to match with a lighter color to help indicate the\n            input's state.\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n          ");
    \u0275\u0275elementStart(151, "app-docs-example", 21);
    \u0275\u0275text(152, "\n            ");
    \u0275\u0275elementStart(153, "div", 22);
    \u0275\u0275text(154, "\n              ");
    \u0275\u0275elementStart(155, "c-form-check");
    \u0275\u0275text(156, "\n                ");
    \u0275\u0275element(157, "input", 18);
    \u0275\u0275text(158, "\n                ");
    \u0275\u0275elementStart(159, "label", 19);
    \u0275\u0275text(160, "Default radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, "\n              ");
    \u0275\u0275elementStart(163, "c-form-check");
    \u0275\u0275text(164, "\n                ");
    \u0275\u0275element(165, "input", 20);
    \u0275\u0275text(166, "\n                ");
    \u0275\u0275elementStart(167, "label", 19);
    \u0275\u0275text(168, "Checked radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(169, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(170, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(172, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(173, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(175, "\n    ");
    \u0275\u0275elementStart(176, "c-col", 1);
    \u0275\u0275text(177, "\n      ");
    \u0275\u0275elementStart(178, "c-card", 2);
    \u0275\u0275text(179, "\n        ");
    \u0275\u0275elementStart(180, "c-card-header");
    \u0275\u0275text(181, "\n          ");
    \u0275\u0275elementStart(182, "strong");
    \u0275\u0275text(183, "Angular Switches");
    \u0275\u0275elementEnd();
    \u0275\u0275text(184, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(185, "\n        ");
    \u0275\u0275elementStart(186, "c-card-body");
    \u0275\u0275text(187, "\n          ");
    \u0275\u0275elementStart(188, "p", 9);
    \u0275\u0275text(189, "\n            A switch has the markup of a custom checkbox but uses the ");
    \u0275\u0275elementStart(190, "code");
    \u0275\u0275text(191, "switch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(192, " boolean\n            properly to render a toggle switch. Switches also support the ");
    \u0275\u0275elementStart(193, "code");
    \u0275\u0275text(194, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(195, "\n            attribute.\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(196, "\n          ");
    \u0275\u0275elementStart(197, "app-docs-example", 23);
    \u0275\u0275text(198, "\n            ");
    \u0275\u0275elementStart(199, "c-form-check", 24);
    \u0275\u0275text(200, "\n              ");
    \u0275\u0275element(201, "input", 25);
    \u0275\u0275text(202, "\n              ");
    \u0275\u0275elementStart(203, "label", 19);
    \u0275\u0275text(204, "Default switch checkbox input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(206, "\n            ");
    \u0275\u0275elementStart(207, "c-form-check", 24);
    \u0275\u0275text(208, "\n              ");
    \u0275\u0275element(209, "input", 26);
    \u0275\u0275text(210, "\n              ");
    \u0275\u0275elementStart(211, "label", 19);
    \u0275\u0275text(212, "Checked switch checkbox input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(213, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(214, "\n            ");
    \u0275\u0275elementStart(215, "c-form-check", 24);
    \u0275\u0275text(216, "\n              ");
    \u0275\u0275element(217, "input", 27);
    \u0275\u0275text(218, "\n              ");
    \u0275\u0275elementStart(219, "label", 19);
    \u0275\u0275text(220, "Default switch checkbox input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(221, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(222, "\n            ");
    \u0275\u0275elementStart(223, "c-form-check", 24);
    \u0275\u0275text(224, "\n              ");
    \u0275\u0275element(225, "input", 28);
    \u0275\u0275text(226, "\n              ");
    \u0275\u0275elementStart(227, "label", 19);
    \u0275\u0275text(228, "Checked switch checkbox input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(229, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(230, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(231, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(232, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(233, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(234, "\n    ");
    \u0275\u0275elementStart(235, "c-col", 1);
    \u0275\u0275text(236, "\n      ");
    \u0275\u0275elementStart(237, "c-card", 2);
    \u0275\u0275text(238, "\n        ");
    \u0275\u0275elementStart(239, "c-card-header");
    \u0275\u0275text(240, "\n          ");
    \u0275\u0275elementStart(241, "strong");
    \u0275\u0275text(242, "Angular Switches");
    \u0275\u0275elementEnd();
    \u0275\u0275text(243, " ");
    \u0275\u0275elementStart(244, "small");
    \u0275\u0275text(245, "Sizes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(246, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(247, "\n        ");
    \u0275\u0275elementStart(248, "c-card-body");
    \u0275\u0275text(249, "\n          ");
    \u0275\u0275elementStart(250, "app-docs-example", 29);
    \u0275\u0275text(251, "\n            ");
    \u0275\u0275elementStart(252, "c-form-check", 24);
    \u0275\u0275text(253, "\n              ");
    \u0275\u0275element(254, "input", 25);
    \u0275\u0275text(255, "\n              ");
    \u0275\u0275elementStart(256, "label", 19);
    \u0275\u0275text(257, "Default switch checkbox input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(258, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(259, "\n            ");
    \u0275\u0275elementStart(260, "c-form-check", 30);
    \u0275\u0275text(261, "\n              ");
    \u0275\u0275element(262, "input", 25);
    \u0275\u0275text(263, "\n              ");
    \u0275\u0275elementStart(264, "label", 19);
    \u0275\u0275text(265, "Large switch checkbox input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(266, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(267, "\n            ");
    \u0275\u0275elementStart(268, "c-form-check", 31);
    \u0275\u0275text(269, "\n              ");
    \u0275\u0275element(270, "input", 26);
    \u0275\u0275text(271, "\n              ");
    \u0275\u0275elementStart(272, "label", 19);
    \u0275\u0275text(273, "Extra large switch checkbox input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(274, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(275, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(276, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(277, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(278, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(279, "\n    ");
    \u0275\u0275elementStart(280, "c-col", 1);
    \u0275\u0275text(281, "\n      ");
    \u0275\u0275elementStart(282, "c-card", 2);
    \u0275\u0275text(283, "\n        ");
    \u0275\u0275elementStart(284, "c-card-header");
    \u0275\u0275text(285, "\n          ");
    \u0275\u0275elementStart(286, "strong");
    \u0275\u0275text(287, "Angular Checks and Radios");
    \u0275\u0275elementEnd();
    \u0275\u0275text(288, " ");
    \u0275\u0275elementStart(289, "small");
    \u0275\u0275text(290, "Default layout (stacked)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(291, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(292, "\n        ");
    \u0275\u0275elementStart(293, "c-card-body");
    \u0275\u0275text(294, "\n          ");
    \u0275\u0275elementStart(295, "p", 9);
    \u0275\u0275text(296, "\n            By default, any number of checkboxes and radios that are immediate sibling will be\n            vertically stacked and appropriately spaced.\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(297, "\n          ");
    \u0275\u0275elementStart(298, "app-docs-example", 32);
    \u0275\u0275text(299, "\n            ");
    \u0275\u0275elementStart(300, "c-form-check");
    \u0275\u0275text(301, "\n              ");
    \u0275\u0275element(302, "input", 33);
    \u0275\u0275text(303, "\n              ");
    \u0275\u0275elementStart(304, "label", 34);
    \u0275\u0275text(305, "Default checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(306, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(307, "\n            ");
    \u0275\u0275elementStart(308, "c-form-check");
    \u0275\u0275text(309, "\n              ");
    \u0275\u0275element(310, "input", 35);
    \u0275\u0275text(311, "\n              ");
    \u0275\u0275elementStart(312, "label", 36);
    \u0275\u0275text(313, "Disabled checkbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(314, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(315, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(316, "\n          ");
    \u0275\u0275elementStart(317, "app-docs-example", 32);
    \u0275\u0275text(318, "\n            ");
    \u0275\u0275elementStart(319, "c-form-check");
    \u0275\u0275text(320, "\n              ");
    \u0275\u0275element(321, "input", 37);
    \u0275\u0275text(322, "\n              ");
    \u0275\u0275elementStart(323, "label", 38);
    \u0275\u0275text(324, "Default radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(325, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(326, "\n            ");
    \u0275\u0275elementStart(327, "c-form-check");
    \u0275\u0275text(328, "\n              ");
    \u0275\u0275element(329, "input", 39);
    \u0275\u0275text(330, "\n              ");
    \u0275\u0275elementStart(331, "label", 40);
    \u0275\u0275text(332, "Second radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(333, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(334, "\n            ");
    \u0275\u0275elementStart(335, "c-form-check");
    \u0275\u0275text(336, "\n              ");
    \u0275\u0275element(337, "input", 41);
    \u0275\u0275text(338, "\n              ");
    \u0275\u0275elementStart(339, "label", 42);
    \u0275\u0275text(340, "Disabled radio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(341, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(342, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(343, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(344, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(345, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(346, "\n    ");
    \u0275\u0275elementStart(347, "c-col", 1);
    \u0275\u0275text(348, "\n      ");
    \u0275\u0275elementStart(349, "c-card", 2);
    \u0275\u0275text(350, "\n        ");
    \u0275\u0275elementStart(351, "c-card-header");
    \u0275\u0275text(352, "\n          ");
    \u0275\u0275elementStart(353, "strong");
    \u0275\u0275text(354, "Angular Checks and Radios");
    \u0275\u0275elementEnd();
    \u0275\u0275text(355, " ");
    \u0275\u0275elementStart(356, "small");
    \u0275\u0275text(357, "Inline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(358, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(359, "\n        ");
    \u0275\u0275elementStart(360, "c-card-body");
    \u0275\u0275text(361, "\n          ");
    \u0275\u0275elementStart(362, "p", 9);
    \u0275\u0275text(363, "\n            Group checkboxes or radios on the same horizontal row by adding ");
    \u0275\u0275elementStart(364, "code");
    \u0275\u0275text(365, "inline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(366, "\n            boolean property to any ");
    \u0275\u0275elementStart(367, "code");
    \u0275\u0275text(368, "<c-form-check>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(369, ".\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(370, "\n          ");
    \u0275\u0275elementStart(371, "app-docs-example", 43);
    \u0275\u0275text(372, "\n            ");
    \u0275\u0275elementStart(373, "c-form-check", 44);
    \u0275\u0275text(374, "\n              ");
    \u0275\u0275element(375, "input", 45);
    \u0275\u0275text(376, "\n              ");
    \u0275\u0275elementStart(377, "label", 46);
    \u0275\u0275text(378, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(379, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(380, "\n            ");
    \u0275\u0275elementStart(381, "c-form-check", 47);
    \u0275\u0275text(382, "\n              ");
    \u0275\u0275element(383, "input", 48);
    \u0275\u0275text(384, "\n              ");
    \u0275\u0275elementStart(385, "label", 49);
    \u0275\u0275text(386, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(387, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(388, "\n            ");
    \u0275\u0275elementStart(389, "c-form-check", 47);
    \u0275\u0275text(390, "\n              ");
    \u0275\u0275element(391, "input", 50);
    \u0275\u0275text(392, "\n              ");
    \u0275\u0275elementStart(393, "label", 51);
    \u0275\u0275text(394, "3 (disabled)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(395, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(396, "\n\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(397, "\n          ");
    \u0275\u0275elementStart(398, "app-docs-example", 43);
    \u0275\u0275text(399, "\n            ");
    \u0275\u0275elementStart(400, "c-form-check", 47);
    \u0275\u0275text(401, "\n              ");
    \u0275\u0275element(402, "input", 52);
    \u0275\u0275text(403, "\n              ");
    \u0275\u0275elementStart(404, "label", 53);
    \u0275\u0275text(405, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(406, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(407, "\n            ");
    \u0275\u0275elementStart(408, "c-form-check", 47);
    \u0275\u0275text(409, "\n              ");
    \u0275\u0275element(410, "input", 54);
    \u0275\u0275text(411, "\n              ");
    \u0275\u0275elementStart(412, "label", 55);
    \u0275\u0275text(413, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(414, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(415, "\n            ");
    \u0275\u0275elementStart(416, "c-form-check", 47);
    \u0275\u0275text(417, "\n              ");
    \u0275\u0275element(418, "input", 56);
    \u0275\u0275text(419, "\n              ");
    \u0275\u0275elementStart(420, "label", 57);
    \u0275\u0275text(421, "3 (disabled)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(422, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(423, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(424, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(425, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(426, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(427, "\n    ");
    \u0275\u0275elementStart(428, "c-col", 1);
    \u0275\u0275text(429, "\n      ");
    \u0275\u0275elementStart(430, "c-card", 2);
    \u0275\u0275text(431, "\n        ");
    \u0275\u0275elementStart(432, "c-card-header");
    \u0275\u0275text(433, "\n          ");
    \u0275\u0275elementStart(434, "strong");
    \u0275\u0275text(435, "Angular Checks and Radios");
    \u0275\u0275elementEnd();
    \u0275\u0275text(436, " ");
    \u0275\u0275elementStart(437, "small");
    \u0275\u0275text(438, "Without labels");
    \u0275\u0275elementEnd();
    \u0275\u0275text(439, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(440, "\n        ");
    \u0275\u0275elementStart(441, "c-card-body");
    \u0275\u0275text(442, "\n          ");
    \u0275\u0275elementStart(443, "p", 9);
    \u0275\u0275text(444, "\n            Remember to still provide some form of accessible name for assistive technologies (for\n            instance, using ");
    \u0275\u0275elementStart(445, "code");
    \u0275\u0275text(446, "aria-label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(447, ").\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(448, "\n          ");
    \u0275\u0275elementStart(449, "app-docs-example", 58);
    \u0275\u0275text(450, "\n            ");
    \u0275\u0275elementStart(451, "div");
    \u0275\u0275text(452, "\n              ");
    \u0275\u0275element(453, "input", 59);
    \u0275\u0275text(454, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(455, "\n            ");
    \u0275\u0275elementStart(456, "div");
    \u0275\u0275text(457, "\n              ");
    \u0275\u0275element(458, "input", 60);
    \u0275\u0275text(459, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(460, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(461, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(462, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(463, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(464, "\n    ");
    \u0275\u0275elementStart(465, "c-col", 1);
    \u0275\u0275text(466, "\n      ");
    \u0275\u0275elementStart(467, "c-card", 2);
    \u0275\u0275text(468, "\n        ");
    \u0275\u0275elementStart(469, "c-card-header");
    \u0275\u0275text(470, "\n          ");
    \u0275\u0275elementStart(471, "strong");
    \u0275\u0275text(472, "Toggle buttons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(473, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(474, "\n        ");
    \u0275\u0275elementStart(475, "c-card-body");
    \u0275\u0275text(476, "\n          ");
    \u0275\u0275elementStart(477, "p", 9);
    \u0275\u0275text(478, "\n            Create button-like checkboxes and radio buttons by using ");
    \u0275\u0275elementStart(479, "code");
    \u0275\u0275text(480, "button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(481, " boolean\n            property on the ");
    \u0275\u0275elementStart(482, "code");
    \u0275\u0275text(483, "<CFormCheck>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(484, " component. These toggle buttons can\n            further be grouped in a button group if needed.\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(485, "\n          ");
    \u0275\u0275elementStart(486, "app-docs-example", 61);
    \u0275\u0275text(487, "\n            ");
    \u0275\u0275elementStart(488, "div", 62);
    \u0275\u0275text(489, "\n              ");
    \u0275\u0275elementStart(490, "c-button-group", 63);
    \u0275\u0275text(491, "\n                ");
    \u0275\u0275element(492, "input", 64);
    \u0275\u0275text(493, "\n                ");
    \u0275\u0275elementStart(494, "label", 65);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_494_listener() {
      return ctx.setCheckBoxValue("checkbox1");
    });
    \u0275\u0275text(495, "Checkbox 1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(496, "\n\n                ");
    \u0275\u0275element(497, "input", 66);
    \u0275\u0275text(498, "\n                ");
    \u0275\u0275elementStart(499, "label", 65);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_499_listener() {
      return ctx.setCheckBoxValue("checkbox2");
    });
    \u0275\u0275text(500, "Checkbox 2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(501, "\n\n                ");
    \u0275\u0275element(502, "input", 67);
    \u0275\u0275text(503, "\n                ");
    \u0275\u0275elementStart(504, "label", 65);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_504_listener() {
      return ctx.setCheckBoxValue("checkbox3");
    });
    \u0275\u0275text(505, "Disabled 3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(506, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(507, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(508, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(509, "\n          ");
    \u0275\u0275elementStart(510, "app-docs-example");
    \u0275\u0275text(511, "\n            ");
    \u0275\u0275elementStart(512, "div", 68);
    \u0275\u0275text(513, "\n              ");
    \u0275\u0275elementStart(514, "c-button-group", 69);
    \u0275\u0275text(515, "\n                ");
    \u0275\u0275element(516, "input", 70);
    \u0275\u0275text(517, "\n                ");
    \u0275\u0275elementStart(518, "label", 71);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_518_listener() {
      return ctx.setRadioValue("Radio1");
    });
    \u0275\u0275text(519, "Radio 1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(520, "\n\n                ");
    \u0275\u0275element(521, "input", 72);
    \u0275\u0275text(522, "\n                ");
    \u0275\u0275elementStart(523, "label", 73);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_523_listener() {
      return ctx.setRadioValue("Radio2");
    });
    \u0275\u0275text(524, "Radio 2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(525, "\n                ");
    \u0275\u0275element(526, "input", 74);
    \u0275\u0275text(527, "\n                ");
    \u0275\u0275elementStart(528, "label", 75);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_528_listener() {
      return ctx.setRadioValue("Radio3");
    });
    \u0275\u0275text(529, "Radio3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(530, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(531, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(532, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(533, "\n          ");
    \u0275\u0275elementStart(534, "h5");
    \u0275\u0275text(535, "Outlined styles");
    \u0275\u0275elementEnd();
    \u0275\u0275text(536, "\n          ");
    \u0275\u0275elementStart(537, "p", 9);
    \u0275\u0275text(538, "\n            Different variants of button, such at the various outlined styles, are supported.\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(539, "\n          ");
    \u0275\u0275elementStart(540, "app-docs-example", 61);
    \u0275\u0275text(541, "\n            ");
    \u0275\u0275elementStart(542, "div", 62);
    \u0275\u0275text(543, "\n              ");
    \u0275\u0275elementStart(544, "c-button-group", 63);
    \u0275\u0275text(545, "\n                ");
    \u0275\u0275element(546, "input", 64);
    \u0275\u0275text(547, "\n                ");
    \u0275\u0275elementStart(548, "label", 76);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_548_listener() {
      return ctx.setCheckBoxValue("checkbox1");
    });
    \u0275\u0275text(549, "Checkbox 1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(550, "\n\n                ");
    \u0275\u0275element(551, "input", 66);
    \u0275\u0275text(552, "\n                ");
    \u0275\u0275elementStart(553, "label", 76);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_553_listener() {
      return ctx.setCheckBoxValue("checkbox2");
    });
    \u0275\u0275text(554, "Checkbox 2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(555, "\n\n                ");
    \u0275\u0275element(556, "input", 67);
    \u0275\u0275text(557, "\n                ");
    \u0275\u0275elementStart(558, "label", 76);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_558_listener() {
      return ctx.setCheckBoxValue("checkbox3");
    });
    \u0275\u0275text(559, "Disabled\n                  3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(560, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(561, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(562, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(563, "\n          ");
    \u0275\u0275elementStart(564, "app-docs-example");
    \u0275\u0275text(565, "\n            ");
    \u0275\u0275elementStart(566, "div", 68);
    \u0275\u0275text(567, "\n              ");
    \u0275\u0275elementStart(568, "c-button-group", 69);
    \u0275\u0275text(569, "\n                ");
    \u0275\u0275element(570, "input", 77);
    \u0275\u0275text(571, "\n                ");
    \u0275\u0275elementStart(572, "label", 78);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_572_listener() {
      return ctx.setRadioValue("Radio1");
    });
    \u0275\u0275text(573, "Radio 1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(574, "\n\n                ");
    \u0275\u0275element(575, "input", 79);
    \u0275\u0275text(576, "\n                ");
    \u0275\u0275elementStart(577, "label", 80);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_577_listener() {
      return ctx.setRadioValue("Radio2");
    });
    \u0275\u0275text(578, "Radio 2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(579, "\n\n                ");
    \u0275\u0275element(580, "input", 81);
    \u0275\u0275text(581, "\n                ");
    \u0275\u0275elementStart(582, "label", 82);
    \u0275\u0275listener("click", function ChecksRadiosComponent_Template_label_click_582_listener() {
      return ctx.setRadioValue("Radio3");
    });
    \u0275\u0275text(583, "Radio3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(584, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(585, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(586, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(587, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(588, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(589, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(590, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(591, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.formGroup);
    \u0275\u0275advance(28);
    \u0275\u0275property("checked", true);
    \u0275\u0275advance(169);
    \u0275\u0275property("switch", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("switch", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("switch", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("switch", true);
    \u0275\u0275advance(29);
    \u0275\u0275property("switch", true);
    \u0275\u0275advance(121);
    \u0275\u0275property("inline", true);
    \u0275\u0275advance(153);
    \u0275\u0275attribute("disabled", true);
    \u0275\u0275advance(54);
    \u0275\u0275attribute("disabled", true);
  }
}, dependencies: [RowComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormDirective, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonGroupComponent, ButtonDirective] });
var ChecksRadiosComponent = _ChecksRadiosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChecksRadiosComponent, { className: "ChecksRadiosComponent", filePath: "src\\app\\documentacion\\forms\\checks-radios\\checks-radios.component.ts", lineNumber: 13 });
})();
export {
  ChecksRadiosComponent
};
//# sourceMappingURL=checks-radios.component-7YUZL6VM.js.map
