import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
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
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  NgStyle,
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
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/forms/form-controls/form-controls.component.ts
var _c0 = (a0) => ({ "backgroundColor": a0 });
var _FormControlsComponent = class _FormControlsComponent {
  constructor() {
    this.favoriteColor = "#26ab3c";
  }
};
_FormControlsComponent.\u0275fac = function FormControlsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormControlsComponent)();
};
_FormControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormControlsComponent, selectors: [["app-form-controls"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 333, vars: 7, consts: [["xs", "12"], [1, "mb-4"], ["href", "forms/form-control"], ["cForm", ""], [1, "mb-3"], ["cLabel", "", "for", "exampleFormControlInput1"], ["cFormControl", "", "id", "exampleFormControlInput1", "placeholder", "name@example.com", "type", "email"], ["cLabel", "", "for", "exampleFormControlTextarea1"], ["cFormControl", "", "id", "exampleFormControlTextarea1", "rows", "3"], [1, "text-body-secondary", "small"], ["href", "forms/form-control#sizing"], ["aria-label", "lg input example", "cFormControl", "", "placeholder", "Large input", "sizing", "lg", "type", "text"], ["aria-label", "default input example", "cFormControl", "", "placeholder", "Default input", "type", "text"], ["aria-label", "sm input example", "cFormControl", "", "placeholder", "Small input", "sizing", "sm", "type", "text"], ["href", "forms/form-control#disabled"], ["aria-label", "Disabled input example", "cFormControl", "", "disabled", "", "placeholder", "Disabled input", "type", "text"], ["aria-label", "Disabled input example", "cFormControl", "", "disabled", "", "placeholder", "Disabled readonly input", "readOnly", "", "type", "text"], ["href", "forms/form-control#readonly"], ["aria-label", "readonly input example", "cFormControl", "", "placeholder", "Readonly input here...", "readOnly", "", "type", "text"], ["cLabel", "", "for", "staticEmail", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["cFormControl", "", "id", "staticEmail", "readonly", "", "type", "text", "value", "email@example.com", 3, "plaintext"], ["cLabel", "", "for", "inputPassword", 1, "col-sm-2", "col-form-label"], ["cFormControl", "", "id", "inputPassword", "type", "password"], ["cForm", "", 1, "row", "g-3"], [1, "col-auto"], ["cLabel", "", "for", "staticEmail2", 1, "visually-hidden"], ["cFormControl", "", "id", "staticEmail2", "readonly", "", "type", "text", "value", "email@example.com", 3, "plaintext"], ["cLabel", "", "for", "inputPassword2", 1, "visually-hidden"], ["cFormControl", "", "id", "inputPassword2", "placeholder", "Password", "type", "password"], ["cButton", "", "type", "submit", 1, "mb-3"], ["href", "forms/form-control#file-input"], ["cLabel", "", "for", "formFile"], ["cFormControl", "", "id", "formFile", "type", "file"], ["cLabel", "", "for", "formFileMultiple"], ["cFormControl", "", "id", "formFileMultiple", "multiple", "", "type", "file"], ["cLabel", "", "for", "formFileDisabled"], ["cFormControl", "", "disabled", "", "id", "formFileDisabled", "type", "file"], ["cLabel", "", "for", "formFileSm"], ["cFormControl", "", "id", "formFileSm", "sizing", "sm", "type", "file"], ["cLabel", "", "for", "formFileLg"], ["cFormControl", "", "id", "formFileLg", "sizing", "lg", "type", "file"], ["href", "forms/form-control#color"], [1, "align-items-center", "g-2"], ["xs", "auto"], ["cLabel", "col", "for", "exampleColorInput"], ["cFormControl", "", "id", "exampleColorInput", "title", "Choose your color", "type", "color", 3, "ngModelChange", "ngModel"], [1, "color-box", "p-1", "m-1", 3, "ngStyle"]], template: function FormControlsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 0);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 1);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Angular Form Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "app-docs-example", 2);
    \u0275\u0275text(15, "\n          ");
    \u0275\u0275elementStart(16, "form", 3);
    \u0275\u0275text(17, "\n            ");
    \u0275\u0275elementStart(18, "div", 4);
    \u0275\u0275text(19, "\n              ");
    \u0275\u0275elementStart(20, "label", 5);
    \u0275\u0275text(21, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n              ");
    \u0275\u0275element(23, "input", 6);
    \u0275\u0275text(24, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n            ");
    \u0275\u0275elementStart(26, "div", 4);
    \u0275\u0275text(27, "\n              ");
    \u0275\u0275elementStart(28, "label", 7);
    \u0275\u0275text(29, "Example textarea");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n              ");
    \u0275\u0275element(31, "textarea", 8);
    \u0275\u0275text(32, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "\n  ");
    \u0275\u0275elementStart(39, "c-col", 0);
    \u0275\u0275text(40, "\n    ");
    \u0275\u0275elementStart(41, "c-card", 1);
    \u0275\u0275text(42, "\n      ");
    \u0275\u0275elementStart(43, "c-card-header");
    \u0275\u0275text(44, "\n        ");
    \u0275\u0275elementStart(45, "strong");
    \u0275\u0275text(46, "Angular Form Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " ");
    \u0275\u0275elementStart(48, "small");
    \u0275\u0275text(49, "Sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n      ");
    \u0275\u0275elementStart(52, "c-card-body");
    \u0275\u0275text(53, "\n        ");
    \u0275\u0275elementStart(54, "p", 9);
    \u0275\u0275text(55, "\n          Set heights using ");
    \u0275\u0275elementStart(56, "code");
    \u0275\u0275text(57, "sizing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " property like ");
    \u0275\u0275elementStart(59, "code");
    \u0275\u0275text(60, 'sizing="lg"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " and\n          ");
    \u0275\u0275elementStart(62, "code");
    \u0275\u0275text(63, 'sizing="sm"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, ".\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n        ");
    \u0275\u0275elementStart(66, "app-docs-example", 10);
    \u0275\u0275text(67, "\n          ");
    \u0275\u0275element(68, "input", 11);
    \u0275\u0275text(69, "\n          ");
    \u0275\u0275element(70, "br");
    \u0275\u0275text(71, "\n          ");
    \u0275\u0275element(72, "input", 12);
    \u0275\u0275text(73, "\n          ");
    \u0275\u0275element(74, "br");
    \u0275\u0275text(75, "\n          ");
    \u0275\u0275element(76, "input", 13);
    \u0275\u0275text(77, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, "\n  ");
    \u0275\u0275elementStart(82, "c-col", 0);
    \u0275\u0275text(83, "\n    ");
    \u0275\u0275elementStart(84, "c-card", 1);
    \u0275\u0275text(85, "\n      ");
    \u0275\u0275elementStart(86, "c-card-header");
    \u0275\u0275text(87, "\n        ");
    \u0275\u0275elementStart(88, "strong");
    \u0275\u0275text(89, "Angular Form Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, " ");
    \u0275\u0275elementStart(91, "small");
    \u0275\u0275text(92, "Disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\n      ");
    \u0275\u0275elementStart(95, "c-card-body");
    \u0275\u0275text(96, "\n        ");
    \u0275\u0275elementStart(97, "p", 9);
    \u0275\u0275text(98, "\n          Add the ");
    \u0275\u0275elementStart(99, "code");
    \u0275\u0275text(100, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, " boolean attribute on an input to give it a grayed out\n          appearance and remove pointer events.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "\n        ");
    \u0275\u0275elementStart(103, "app-docs-example", 14);
    \u0275\u0275text(104, "\n          ");
    \u0275\u0275element(105, "input", 15);
    \u0275\u0275text(106, "\n          ");
    \u0275\u0275element(107, "br");
    \u0275\u0275text(108, "\n          ");
    \u0275\u0275element(109, "input", 16);
    \u0275\u0275text(110, "\n          ");
    \u0275\u0275element(111, "br");
    \u0275\u0275text(112, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(116, "\n  ");
    \u0275\u0275elementStart(117, "c-col", 0);
    \u0275\u0275text(118, "\n    ");
    \u0275\u0275elementStart(119, "c-card", 1);
    \u0275\u0275text(120, "\n      ");
    \u0275\u0275elementStart(121, "c-card-header");
    \u0275\u0275text(122, "\n        ");
    \u0275\u0275elementStart(123, "strong");
    \u0275\u0275text(124, "Angular Form Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, " ");
    \u0275\u0275elementStart(126, "small");
    \u0275\u0275text(127, "Readonly");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(129, "\n      ");
    \u0275\u0275elementStart(130, "c-card-body");
    \u0275\u0275text(131, "\n        ");
    \u0275\u0275elementStart(132, "p", 9);
    \u0275\u0275text(133, "\n          Add the ");
    \u0275\u0275elementStart(134, "code");
    \u0275\u0275text(135, "readOnly");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, " boolean attribute on an input to prevent modification of\n          the input's value. Read-only inputs appear lighter (just like disabled inputs),\n          but retain the standard cursor.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, "\n        ");
    \u0275\u0275elementStart(138, "app-docs-example", 17);
    \u0275\u0275text(139, "\n          ");
    \u0275\u0275element(140, "input", 18);
    \u0275\u0275text(141, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(143, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(144, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(145, "\n  ");
    \u0275\u0275elementStart(146, "c-col", 0);
    \u0275\u0275text(147, "\n    ");
    \u0275\u0275elementStart(148, "c-card", 1);
    \u0275\u0275text(149, "\n      ");
    \u0275\u0275elementStart(150, "c-card-header");
    \u0275\u0275text(151, "\n        ");
    \u0275\u0275elementStart(152, "strong");
    \u0275\u0275text(153, "Angular Form Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, " ");
    \u0275\u0275elementStart(155, "small");
    \u0275\u0275text(156, "Readonly plain text");
    \u0275\u0275elementEnd();
    \u0275\u0275text(157, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, "\n      ");
    \u0275\u0275elementStart(159, "c-card-body");
    \u0275\u0275text(160, "\n        ");
    \u0275\u0275elementStart(161, "p", 9);
    \u0275\u0275text(162, "\n          If you want to have ");
    \u0275\u0275elementStart(163, "code");
    \u0275\u0275text(164, "<input readonly>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(165, " elements in your form styled\n          as plain text, use the ");
    \u0275\u0275elementStart(166, "code");
    \u0275\u0275text(167, "plainText");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, " boolean property to remove the default\n          form field styling and preserve the correct margin and padding.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(169, "\n        ");
    \u0275\u0275elementStart(170, "app-docs-example", 17);
    \u0275\u0275text(171, "\n          ");
    \u0275\u0275elementStart(172, "c-row", 4);
    \u0275\u0275text(173, "\n            ");
    \u0275\u0275elementStart(174, "label", 19);
    \u0275\u0275text(175, "\n              Email\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(176, "\n            ");
    \u0275\u0275elementStart(177, "div", 20);
    \u0275\u0275text(178, "\n              ");
    \u0275\u0275element(179, "input", 21);
    \u0275\u0275text(180, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(181, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, "\n          ");
    \u0275\u0275elementStart(183, "c-row", 4);
    \u0275\u0275text(184, "\n            ");
    \u0275\u0275elementStart(185, "label", 22);
    \u0275\u0275text(186, "\n              Password\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(187, "\n            ");
    \u0275\u0275elementStart(188, "div", 20);
    \u0275\u0275text(189, "\n              ");
    \u0275\u0275element(190, "input", 23);
    \u0275\u0275text(191, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(192, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(193, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(194, "\n        ");
    \u0275\u0275elementStart(195, "app-docs-example", 17);
    \u0275\u0275text(196, "\n          ");
    \u0275\u0275elementStart(197, "form", 24);
    \u0275\u0275text(198, "\n            ");
    \u0275\u0275elementStart(199, "div", 25);
    \u0275\u0275text(200, "\n              ");
    \u0275\u0275elementStart(201, "label", 26);
    \u0275\u0275text(202, "\n                Email\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(203, "\n              ");
    \u0275\u0275element(204, "input", 27);
    \u0275\u0275text(205, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(206, "\n            ");
    \u0275\u0275elementStart(207, "div", 25);
    \u0275\u0275text(208, "\n              ");
    \u0275\u0275elementStart(209, "label", 28);
    \u0275\u0275text(210, "\n                Password\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(211, "\n              ");
    \u0275\u0275element(212, "input", 29);
    \u0275\u0275text(213, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(214, "\n            ");
    \u0275\u0275elementStart(215, "div", 25);
    \u0275\u0275text(216, "\n              ");
    \u0275\u0275elementStart(217, "button", 30);
    \u0275\u0275text(218, "\n                Confirm identity\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(219, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(220, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(221, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(222, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(223, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(224, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(225, "\n  ");
    \u0275\u0275elementStart(226, "c-col", 0);
    \u0275\u0275text(227, "\n    ");
    \u0275\u0275elementStart(228, "c-card", 1);
    \u0275\u0275text(229, "\n      ");
    \u0275\u0275elementStart(230, "c-card-header");
    \u0275\u0275text(231, "\n        ");
    \u0275\u0275elementStart(232, "strong");
    \u0275\u0275text(233, "Angular Form Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(234, " ");
    \u0275\u0275elementStart(235, "small");
    \u0275\u0275text(236, "File input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(237, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(238, "\n      ");
    \u0275\u0275elementStart(239, "c-card-body");
    \u0275\u0275text(240, "\n        ");
    \u0275\u0275elementStart(241, "app-docs-example", 31);
    \u0275\u0275text(242, "\n          ");
    \u0275\u0275elementStart(243, "div", 4);
    \u0275\u0275text(244, "\n            ");
    \u0275\u0275elementStart(245, "label", 32);
    \u0275\u0275text(246, "Default file input example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(247, "\n            ");
    \u0275\u0275element(248, "input", 33);
    \u0275\u0275text(249, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(250, "\n          ");
    \u0275\u0275elementStart(251, "div", 4);
    \u0275\u0275text(252, "\n            ");
    \u0275\u0275elementStart(253, "label", 34);
    \u0275\u0275text(254, "Multiple files input example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(255, "\n            ");
    \u0275\u0275element(256, "input", 35);
    \u0275\u0275text(257, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(258, "\n          ");
    \u0275\u0275elementStart(259, "div", 4);
    \u0275\u0275text(260, "\n            ");
    \u0275\u0275elementStart(261, "label", 36);
    \u0275\u0275text(262, "Disabled file input example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(263, "\n            ");
    \u0275\u0275element(264, "input", 37);
    \u0275\u0275text(265, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(266, "\n          ");
    \u0275\u0275elementStart(267, "div", 4);
    \u0275\u0275text(268, "\n            ");
    \u0275\u0275elementStart(269, "label", 38);
    \u0275\u0275text(270, "Small file input example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(271, "\n            ");
    \u0275\u0275element(272, "input", 39);
    \u0275\u0275text(273, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(274, "\n          ");
    \u0275\u0275elementStart(275, "div");
    \u0275\u0275text(276, "\n            ");
    \u0275\u0275elementStart(277, "label", 40);
    \u0275\u0275text(278, "Large file input example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(279, "\n            ");
    \u0275\u0275element(280, "input", 41);
    \u0275\u0275text(281, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(282, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(283, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(284, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(285, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(286, "\n  ");
    \u0275\u0275elementStart(287, "c-col", 0);
    \u0275\u0275text(288, "\n    ");
    \u0275\u0275elementStart(289, "c-card", 1);
    \u0275\u0275text(290, "\n      ");
    \u0275\u0275elementStart(291, "c-card-header");
    \u0275\u0275text(292, "\n        ");
    \u0275\u0275elementStart(293, "strong");
    \u0275\u0275text(294, "Angular Form Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(295, " ");
    \u0275\u0275elementStart(296, "small");
    \u0275\u0275text(297, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(298, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(299, "\n      ");
    \u0275\u0275elementStart(300, "c-card-body");
    \u0275\u0275text(301, "\n        ");
    \u0275\u0275elementStart(302, "app-docs-example", 42);
    \u0275\u0275text(303, "\n          ");
    \u0275\u0275elementStart(304, "c-row", 43);
    \u0275\u0275text(305, "\n            ");
    \u0275\u0275elementStart(306, "c-col", 44);
    \u0275\u0275text(307, "\n              ");
    \u0275\u0275elementStart(308, "label", 45);
    \u0275\u0275text(309, "Color picker");
    \u0275\u0275elementEnd();
    \u0275\u0275text(310, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(311, "\n            ");
    \u0275\u0275elementStart(312, "c-col", 44);
    \u0275\u0275text(313, "\n              ");
    \u0275\u0275elementStart(314, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function FormControlsComponent_Template_input_ngModelChange_314_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.favoriteColor, $event) || (ctx.favoriteColor = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(315, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(316, "\n            ");
    \u0275\u0275elementStart(317, "c-col", 44);
    \u0275\u0275text(318, "\n              ");
    \u0275\u0275element(319, "div", 47);
    \u0275\u0275text(320, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(321, "\n            ");
    \u0275\u0275elementStart(322, "c-col", 44);
    \u0275\u0275text(323, "\n              ");
    \u0275\u0275elementStart(324, "strong");
    \u0275\u0275text(325);
    \u0275\u0275elementEnd();
    \u0275\u0275text(326, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(327, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(328, "        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(329, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(330, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(331, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(332, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(179);
    \u0275\u0275property("plaintext", true);
    \u0275\u0275advance(25);
    \u0275\u0275property("plaintext", true);
    \u0275\u0275advance(110);
    \u0275\u0275twoWayProperty("ngModel", ctx.favoriteColor);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, ctx.favoriteColor));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.favoriteColor);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormsModule, NgModel, NgForm, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle], styles: ["\n\n[_nghost-%COMP%]   #exampleColorInput[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n}\n[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%] {\n  min-width: 2rem;\n  min-height: 2rem;\n}\n/*# sourceMappingURL=/sabinos-barber-frontend/form-controls.component.css.map */"] });
var FormControlsComponent = _FormControlsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormControlsComponent, { className: "FormControlsComponent", filePath: "src\\app\\documentacion\\forms\\form-controls\\form-controls.component.ts", lineNumber: 14 });
})();
export {
  FormControlsComponent
};
//# sourceMappingURL=form-controls.component-6D4IBMYC.js.map
