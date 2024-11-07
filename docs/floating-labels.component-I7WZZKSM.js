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
} from "./chunk-J6J7THO6.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFloatingDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
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
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/forms/floating-labels/floating-labels.component.ts
var _c0 = () => ({ "height.px": 100 });
var _c1 = () => ({ g: 2 });
var _FloatingLabelsComponent = class _FloatingLabelsComponent {
  constructor() {
  }
};
_FloatingLabelsComponent.\u0275fac = function FloatingLabelsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FloatingLabelsComponent)();
};
_FloatingLabelsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloatingLabelsComponent, selectors: [["app-floating-labels"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 272, vars: 5, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "forms/floating-labels"], [1, "mb-3", 3, "cFormFloating"], ["cFormControl", "", "id", "floatingInput", "placeholder", "name@example.com", "type", "email"], ["cLabel", "", "for", "floatingInput"], ["cFormFloating", ""], ["cFormControl", "", "id", "floatingPassword", "placeholder", "Password", "type", "password"], ["cLabel", "", "for", "floatingPassword"], ["cForm", "", "cFormFloating", ""], ["cFormControl", "", "id", "floatingInputValue", "placeholder", "name@example.com", "type", "email", "value", "test@example.com"], ["cLabel", "", "for", "floatingInputValue"], ["href", "forms/floating-labels#textareas"], ["cFormControl", "", "id", "floatingTextarea", "placeholder", "Leave a comment here", "type", "text"], ["cLabel", "", "for", "floatingTextarea"], ["cFormControl", "", "id", "floatingTextarea2", "placeholder", "Leave a comment here", 3, "ngStyle"], ["cLabel", "", "for", "floatingTextarea2"], ["href", "forms/floating-labels#selects"], ["aria-label", "Floating label select example", "cSelect", "", "id", "floatingSelect"], ["value", "1"], ["value", "2"], ["value", "3"], ["cLabel", "", "for", "floatingSelect"], ["href", "forms/floating-labels#layout"], [3, "gutter"], ["md", ""], ["cFormControl", "", "id", "floatingInputGrid", "placeholder", "name@example.com", "type", "email", "value", "email@example.com"], ["cLabel", "", "for", "floatingInputGrid"], ["aria-label", "Floating label select example", "cSelect", "", "id", "floatingSelectGrid"], ["cLabel", "", "for", "floatingSelectGrid"]], template: function FloatingLabelsComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Angular Floating labels");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "p", 2);
    \u0275\u0275text(15, "\n          Wrap a pair of ");
    \u0275\u0275elementStart(16, "code");
    \u0275\u0275text(17, "<cFormControl>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " and ");
    \u0275\u0275elementStart(19, "code");
    \u0275\u0275text(20, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n          elements in ");
    \u0275\u0275elementStart(22, "code");
    \u0275\u0275text(23, "cFormControl");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " to enable floating labels with textual form\n          fields. A ");
    \u0275\u0275elementStart(25, "code");
    \u0275\u0275text(26, "placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " is required on each ");
    \u0275\u0275elementStart(28, "code");
    \u0275\u0275text(29, "<input>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n          as our method of CSS-only floating labels uses the ");
    \u0275\u0275elementStart(31, "code");
    \u0275\u0275text(32, ":placeholder-shown");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n          pseudo-element. Also note that the ");
    \u0275\u0275elementStart(34, "code");
    \u0275\u0275text(35, "<cFormControl>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " must come first so\n          we can utilize a sibling selector (e.g., ");
    \u0275\u0275elementStart(37, "code");
    \u0275\u0275text(38, "~");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, ").\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n        ");
    \u0275\u0275elementStart(41, "app-docs-example", 3);
    \u0275\u0275text(42, "\n          ");
    \u0275\u0275elementStart(43, "div", 4);
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275element(45, "input", 5);
    \u0275\u0275text(46, "\n            ");
    \u0275\u0275elementStart(47, "label", 6);
    \u0275\u0275text(48, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, "\n          ");
    \u0275\u0275elementStart(51, "div", 7);
    \u0275\u0275text(52, "\n            ");
    \u0275\u0275element(53, "input", 8);
    \u0275\u0275text(54, "\n            ");
    \u0275\u0275elementStart(55, "label", 9);
    \u0275\u0275text(56, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "\n        ");
    \u0275\u0275elementStart(60, "p", 2);
    \u0275\u0275text(61, "\n          When there's a ");
    \u0275\u0275elementStart(62, "code");
    \u0275\u0275text(63, "value");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " already defined, ");
    \u0275\u0275elementStart(65, "code");
    \u0275\u0275text(66, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n          s will automatically adjust to their floated position.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "\n        ");
    \u0275\u0275elementStart(69, "app-docs-example", 3);
    \u0275\u0275text(70, "\n          ");
    \u0275\u0275elementStart(71, "form", 10);
    \u0275\u0275text(72, "\n            ");
    \u0275\u0275element(73, "input", 11);
    \u0275\u0275text(74, "\n            ");
    \u0275\u0275elementStart(75, "label", 12);
    \u0275\u0275text(76, "Input with value");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, "\n  ");
    \u0275\u0275elementStart(83, "c-col", 0);
    \u0275\u0275text(84, "\n    ");
    \u0275\u0275elementStart(85, "c-card", 1);
    \u0275\u0275text(86, "\n      ");
    \u0275\u0275elementStart(87, "c-card-header");
    \u0275\u0275text(88, "\n        ");
    \u0275\u0275elementStart(89, "strong");
    \u0275\u0275text(90, "Angular Floating labels");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, " ");
    \u0275\u0275elementStart(92, "small");
    \u0275\u0275text(93, "Textareas");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n      ");
    \u0275\u0275elementStart(96, "c-card-body");
    \u0275\u0275text(97, "\n        ");
    \u0275\u0275elementStart(98, "p", 2);
    \u0275\u0275text(99, "\n          By default, ");
    \u0275\u0275elementStart(100, "code");
    \u0275\u0275text(101, "<CFormTextarea>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "s will be the same height as\n          ");
    \u0275\u0275elementStart(103, "code");
    \u0275\u0275text(104, "<input>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "s.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, "\n        ");
    \u0275\u0275elementStart(107, "app-docs-example", 13);
    \u0275\u0275text(108, "\n          ");
    \u0275\u0275elementStart(109, "div", 7);
    \u0275\u0275text(110, "\n            ");
    \u0275\u0275element(111, "input", 14);
    \u0275\u0275text(112, "\n            ");
    \u0275\u0275elementStart(113, "label", 15);
    \u0275\u0275text(114, "Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(116, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, "\n        ");
    \u0275\u0275elementStart(118, "p", 2);
    \u0275\u0275text(119, "\n          To set a custom height on your ");
    \u0275\u0275elementStart(120, "code");
    \u0275\u0275text(121, "<CFormTextarea;>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, ", do not use the\n          ");
    \u0275\u0275elementStart(123, "code");
    \u0275\u0275text(124, "rows");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125, " attribute. Instead, set an explicit ");
    \u0275\u0275elementStart(126, "code");
    \u0275\u0275text(127, "height");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, " (either\n          inline or via custom CSS).\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(129, "\n        ");
    \u0275\u0275elementStart(130, "app-docs-example", 13);
    \u0275\u0275text(131, "\n          ");
    \u0275\u0275elementStart(132, "div", 7);
    \u0275\u0275text(133, "\n            ");
    \u0275\u0275element(134, "textarea", 16);
    \u0275\u0275text(135, "\n            ");
    \u0275\u0275elementStart(136, "label", 17);
    \u0275\u0275text(137, "Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(140, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(143, "\n  ");
    \u0275\u0275elementStart(144, "c-col", 0);
    \u0275\u0275text(145, "\n    ");
    \u0275\u0275elementStart(146, "c-card", 1);
    \u0275\u0275text(147, "\n      ");
    \u0275\u0275elementStart(148, "c-card-header");
    \u0275\u0275text(149, "\n        ");
    \u0275\u0275elementStart(150, "strong");
    \u0275\u0275text(151, "Angular Floating labels");
    \u0275\u0275elementEnd();
    \u0275\u0275text(152, " ");
    \u0275\u0275elementStart(153, "small");
    \u0275\u0275text(154, "Selects");
    \u0275\u0275elementEnd();
    \u0275\u0275text(155, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(156, "\n      ");
    \u0275\u0275elementStart(157, "c-card-body");
    \u0275\u0275text(158, "\n        ");
    \u0275\u0275elementStart(159, "p", 2);
    \u0275\u0275text(160, "\n          Other than ");
    \u0275\u0275elementStart(161, "code");
    \u0275\u0275text(162, "<input>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, ", floating labels are only available on\n          ");
    \u0275\u0275elementStart(164, "code");
    \u0275\u0275text(165, "<cSelect>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(166, "s. They work in the same way, but unlike\n          ");
    \u0275\u0275elementStart(167, "code");
    \u0275\u0275text(168, "<input>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(169, "s, they'll always show the\n          ");
    \u0275\u0275elementStart(170, "code");
    \u0275\u0275text(171, "<label>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(172, " in its floated state.\n          ");
    \u0275\u0275elementStart(173, "strong");
    \u0275\u0275text(174, "\n            Selects with ");
    \u0275\u0275elementStart(175, "code");
    \u0275\u0275text(176, "size");
    \u0275\u0275elementEnd();
    \u0275\u0275text(177, " and ");
    \u0275\u0275elementStart(178, "code");
    \u0275\u0275text(179, "multiple");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, " are not supported.\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(181, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, "\n        ");
    \u0275\u0275elementStart(183, "app-docs-example", 18);
    \u0275\u0275text(184, "\n          ");
    \u0275\u0275elementStart(185, "div", 7);
    \u0275\u0275text(186, "\n            ");
    \u0275\u0275elementStart(187, "select", 19);
    \u0275\u0275text(188, "\n              ");
    \u0275\u0275elementStart(189, "option");
    \u0275\u0275text(190, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(191, "\n              ");
    \u0275\u0275elementStart(192, "option", 20);
    \u0275\u0275text(193, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(194, "\n              ");
    \u0275\u0275elementStart(195, "option", 21);
    \u0275\u0275text(196, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(197, "\n              ");
    \u0275\u0275elementStart(198, "option", 22);
    \u0275\u0275text(199, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(200, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(201, "\n            ");
    \u0275\u0275elementStart(202, "label", 23);
    \u0275\u0275text(203, "Works with selects");
    \u0275\u0275elementEnd();
    \u0275\u0275text(204, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(205, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(206, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(207, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(208, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(209, "\n  ");
    \u0275\u0275elementStart(210, "c-col", 0);
    \u0275\u0275text(211, "\n    ");
    \u0275\u0275elementStart(212, "c-card", 1);
    \u0275\u0275text(213, "\n      ");
    \u0275\u0275elementStart(214, "c-card-header");
    \u0275\u0275text(215, "\n        ");
    \u0275\u0275elementStart(216, "strong");
    \u0275\u0275text(217, "Angular Floating labels");
    \u0275\u0275elementEnd();
    \u0275\u0275text(218, " ");
    \u0275\u0275elementStart(219, "small");
    \u0275\u0275text(220, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(221, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(222, "\n      ");
    \u0275\u0275elementStart(223, "c-card-body");
    \u0275\u0275text(224, "\n        ");
    \u0275\u0275elementStart(225, "p", 2);
    \u0275\u0275text(226, "\n          When working with the CoreUI for Bootstrap grid system, be sure to place form elements\n          within column classes.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(227, "\n        ");
    \u0275\u0275elementStart(228, "app-docs-example", 24);
    \u0275\u0275text(229, "\n          ");
    \u0275\u0275elementStart(230, "c-row", 25);
    \u0275\u0275text(231, "\n            ");
    \u0275\u0275elementStart(232, "c-col", 26);
    \u0275\u0275text(233, "\n              ");
    \u0275\u0275elementStart(234, "div", 7);
    \u0275\u0275text(235, "\n                ");
    \u0275\u0275element(236, "input", 27);
    \u0275\u0275text(237, "\n                ");
    \u0275\u0275elementStart(238, "label", 28);
    \u0275\u0275text(239, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275text(240, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(241, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(242, "\n            ");
    \u0275\u0275elementStart(243, "c-col", 26);
    \u0275\u0275text(244, "\n              ");
    \u0275\u0275elementStart(245, "div", 7);
    \u0275\u0275text(246, "\n                ");
    \u0275\u0275elementStart(247, "select", 29);
    \u0275\u0275text(248, "\n                  ");
    \u0275\u0275elementStart(249, "option");
    \u0275\u0275text(250, "Open this select menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(251, "\n                  ");
    \u0275\u0275elementStart(252, "option", 20);
    \u0275\u0275text(253, "One");
    \u0275\u0275elementEnd();
    \u0275\u0275text(254, "\n                  ");
    \u0275\u0275elementStart(255, "option", 21);
    \u0275\u0275text(256, "Two");
    \u0275\u0275elementEnd();
    \u0275\u0275text(257, "\n                  ");
    \u0275\u0275elementStart(258, "option", 22);
    \u0275\u0275text(259, "Three");
    \u0275\u0275elementEnd();
    \u0275\u0275text(260, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(261, "\n                ");
    \u0275\u0275elementStart(262, "label", 30);
    \u0275\u0275text(263, "Works with selects");
    \u0275\u0275elementEnd();
    \u0275\u0275text(264, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(265, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(266, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(267, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(268, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(269, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(270, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(271, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(43);
    \u0275\u0275property("cFormFloating", true);
    \u0275\u0275advance(91);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(96);
    \u0275\u0275property("gutter", \u0275\u0275pureFunction0(4, _c1));
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormFloatingDirective, FormControlDirective, FormLabelDirective, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, FormsModule, NgForm, FormDirective, NgStyle, FormSelectDirective, GutterDirective] });
var FloatingLabelsComponent = _FloatingLabelsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloatingLabelsComponent, { className: "FloatingLabelsComponent", filePath: "src\\app\\documentacion\\forms\\floating-labels\\floating-labels.component.ts", lineNumber: 14 });
})();
export {
  FloatingLabelsComponent
};
//# sourceMappingURL=floating-labels.component-I7WZZKSM.js.map
