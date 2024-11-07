import {
  CheckboxControlValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ɵNgNoValidate
} from "./chunk-3RTTW4L4.js";
import {
  DocsExampleComponent
} from "./chunk-J6J7THO6.js";
import {
  BadgeComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  RowComponent
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/list-groups/list-groups.component.ts
function ListGroupsComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "li", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1);
  }
}
function ListGroupsComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "li", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_85_r3 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("active", \u0275$index_85_r3 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function ListGroupsComponent_For_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "button", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_135_r5 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", \u0275$index_135_r5 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
  }
}
function ListGroupsComponent_For_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "a", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_205_r7 = ctx.$index;
    const \u0275$count_205_r8 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("active", \u0275$index_205_r7 === 0)("disabled", \u0275$index_205_r7 === \u0275$count_205_r8 - 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6);
  }
}
function ListGroupsComponent_For_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "li", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9);
  }
}
function ListGroupsComponent_For_220_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "ul", 38);
    \u0275\u0275text(2, "\n              ");
    \u0275\u0275elementStart(3, "li", 30);
    \u0275\u0275text(4, "Cras justo odio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementStart(6, "li", 30);
    \u0275\u0275text(7, "Dapibus ac facilisis in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n              ");
    \u0275\u0275elementStart(9, "li", 30);
    \u0275\u0275text(10, "Morbi leo risus");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n          ");
  }
  if (rf & 2) {
    const breakpoint_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("horizontal", breakpoint_r10);
  }
}
function ListGroupsComponent_For_248_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "li", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const color_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                A simple ", color_r11, " list group item\n              ");
  }
}
function ListGroupsComponent_For_268_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "a", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    const color_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                A simple ", color_r12, " list group item\n              ");
  }
}
function ListGroupsComponent_For_297_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "button", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "c-badge", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const \u0275$index_437_r14 = ctx.$index;
    const \u0275$count_437_r15 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", \u0275$index_437_r14 === \u0275$count_437_r15 - 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", item_r13, "\n                ");
    \u0275\u0275advance();
    \u0275\u0275property("color", \u0275$index_437_r14 === \u0275$count_437_r15 - 1 ? "secondary" : "primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_437_r14 + 1);
  }
}
var _ListGroupsComponent = class _ListGroupsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.breakpoints = [true, "sm", "md", "lg", "xl", "xxl"];
    this.colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    this.checkBoxes = this.formBuilder.group({
      one: false,
      two: false,
      three: true,
      four: true,
      five: { value: false, disabled: true }
    });
    this.sampleList = [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Morbi leo risus",
      "Porta ac consectetur ac",
      "Vestibulum at eros"
    ];
  }
  setValue(controlName) {
    const prevValue = this.checkBoxes.get(controlName)?.value;
    const value = this.checkBoxes.getRawValue();
    value[controlName] = !prevValue;
    this.checkBoxes.setValue(value);
  }
  logValue() {
    console.log(this.checkBoxes.value);
    this.checkBoxes.reset();
  }
  getValue(controlName) {
    return this.checkBoxes.get(controlName);
  }
};
_ListGroupsComponent.\u0275fac = function ListGroupsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListGroupsComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
};
_ListGroupsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListGroupsComponent, selectors: [["app-list-groups"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 475, vars: 3, consts: [["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/list-group"], ["cListGroup", ""], ["href", "components/list-group/#active-items"], ["href", "components/list-group/#disabled-items"], ["href", "components/list-group/#links-and-buttons"], ["href", "components/list-group/#flush"], ["cListGroup", "", "flush", ""], ["href", "components/list-group/#contextual-classes"], ["cListGroup", "", 1, "mb-3"], [1, "text-body-secondary", "small", "mt-1"], ["href", "components/list-group/#with-badges"], ["href", "https://coreui.io/docs/utilities/flex/"], ["href", "components/list-group/#custom-content"], ["cListGroupItem", "", "href", "", 3, "active"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], ["cListGroupItem", "", "href", ""], [1, "text-body-secondary"], ["href", "components/list-group/#checkboxes-and-radios"], ["cForm", "", 3, "ngSubmit", "formGroup"], ["cListGroup", "", 3, "flush"], ["cListGroupItem", "", "type", "button", 3, "click"], ["cFormCheckInput", "", "formControlName", "one", "type", "checkbox"], ["cFormCheckLabel", ""], ["cListGroupItem", "", 2, "cursor", "pointer"], ["cFormCheckInput", "", "formControlName", "two", "type", "checkbox"], [1, "ms-1"], ["cListGroupItem", ""], ["cFormCheckInput", "", "formControlName", "three", "type", "checkbox"], ["cFormCheckInput", "", "formControlName", "four", "type", "checkbox"], ["cFormCheckInput", "", "formControlName", "five", "type", "checkbox"], ["cButton", "", "type", "submit", 1, "mt-3"], ["cListGroupItem", "", 3, "active"], ["cListGroupItem", "", 3, "disabled"], ["href", "", "cListGroupItem", "", 3, "active", "disabled"], ["cListGroup", "", 1, "mb-2", 3, "horizontal"], ["cListGroupItem", "", 3, "color"], ["cListGroupItem", "", "href", "", 3, "color"], ["cListGroupItem", "", 1, "d-flex", "justify-content-between", "align-items-center", 3, "disabled"], ["shape", "rounded-pill", 3, "color"]], template: function ListGroupsComponent_Template(rf, ctx) {
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
    \u0275\u0275text(9, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ");
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12, "Basic example");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n      ");
    \u0275\u0275elementStart(15, "c-card-body");
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "p", 2);
    \u0275\u0275text(18, "\n          The default list group is an unordered list with items and the proper\n          CSS classes. Build upon it with the options that follow, or with your\n          CSS as required.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n        ");
    \u0275\u0275elementStart(20, "app-docs-example", 3);
    \u0275\u0275text(21, "\n          ");
    \u0275\u0275elementStart(22, "ul", 4);
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275repeaterCreate(24, ListGroupsComponent_For_25_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n  ");
    \u0275\u0275elementStart(31, "c-col", 0);
    \u0275\u0275text(32, "\n    ");
    \u0275\u0275elementStart(33, "c-card", 1);
    \u0275\u0275text(34, "\n      ");
    \u0275\u0275elementStart(35, "c-card-header");
    \u0275\u0275text(36, "\n        ");
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " ");
    \u0275\u0275elementStart(40, "small");
    \u0275\u0275text(41, "Active items");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, "\n      ");
    \u0275\u0275elementStart(44, "c-card-body");
    \u0275\u0275text(45, "\n        ");
    \u0275\u0275elementStart(46, "p", 2);
    \u0275\u0275text(47, "\n          Add ");
    \u0275\u0275elementStart(48, "code");
    \u0275\u0275text(49, "active");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " boolean property to a\n          ");
    \u0275\u0275elementStart(51, "code");
    \u0275\u0275text(52, "cListGroupItem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " to show the current active selection.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "\n        ");
    \u0275\u0275elementStart(55, "app-docs-example", 5);
    \u0275\u0275text(56, "\n          ");
    \u0275\u0275elementStart(57, "ul", 4);
    \u0275\u0275text(58, "\n            ");
    \u0275\u0275repeaterCreate(59, ListGroupsComponent_For_60_Template, 4, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n  ");
    \u0275\u0275elementStart(66, "c-col", 0);
    \u0275\u0275text(67, "\n    ");
    \u0275\u0275elementStart(68, "c-card", 1);
    \u0275\u0275text(69, "\n      ");
    \u0275\u0275elementStart(70, "c-card-header");
    \u0275\u0275text(71, "\n        ");
    \u0275\u0275elementStart(72, "strong");
    \u0275\u0275text(73, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, " ");
    \u0275\u0275elementStart(75, "small");
    \u0275\u0275text(76, "Disabled items");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n      ");
    \u0275\u0275elementStart(79, "c-card-body");
    \u0275\u0275text(80, "\n        ");
    \u0275\u0275elementStart(81, "p", 2);
    \u0275\u0275text(82, "\n          Add ");
    \u0275\u0275elementStart(83, "code");
    \u0275\u0275text(84, "disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " boolean property to a\n          ");
    \u0275\u0275elementStart(86, "code");
    \u0275\u0275text(87, "cListGroupItem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " to make it appear disabled.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n        ");
    \u0275\u0275elementStart(90, "app-docs-example", 6);
    \u0275\u0275text(91, "\n          ");
    \u0275\u0275elementStart(92, "div", 4);
    \u0275\u0275text(93, "\n            ");
    \u0275\u0275repeaterCreate(94, ListGroupsComponent_For_95_Template, 4, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "\n  ");
    \u0275\u0275elementStart(101, "c-col", 0);
    \u0275\u0275text(102, "\n    ");
    \u0275\u0275elementStart(103, "c-card", 1);
    \u0275\u0275text(104, "\n      ");
    \u0275\u0275elementStart(105, "c-card-header");
    \u0275\u0275text(106, "\n        ");
    \u0275\u0275elementStart(107, "strong");
    \u0275\u0275text(108, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, " ");
    \u0275\u0275elementStart(110, "small");
    \u0275\u0275text(111, "Links and buttons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, "\n      ");
    \u0275\u0275elementStart(114, "c-card-body");
    \u0275\u0275text(115, "\n        ");
    \u0275\u0275elementStart(116, "p", 2);
    \u0275\u0275text(117, "\n          Use ");
    \u0275\u0275elementStart(118, "code");
    \u0275\u0275text(119, "<a>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "s or ");
    \u0275\u0275elementStart(121, "code");
    \u0275\u0275text(122, "<button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "s to create\n          ");
    \u0275\u0275elementStart(124, "em");
    \u0275\u0275text(125, "actionable");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, " list group items with hover, disabled, and active\n          states with ");
    \u0275\u0275elementStart(127, "code");
    \u0275\u0275text(128, "a");
    \u0275\u0275elementEnd();
    \u0275\u0275text(129, " or ");
    \u0275\u0275elementStart(130, "code");
    \u0275\u0275text(131, "button");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, ". We\n          separate these pseudo-classes to ensure list groups made of\n          non-interactive elements (like ");
    \u0275\u0275elementStart(133, "code");
    \u0275\u0275text(134, "<li>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, " or\n          ");
    \u0275\u0275elementStart(136, "code");
    \u0275\u0275text(137, "<div>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, ") don't provide a click or tap affordance.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, "\n        ");
    \u0275\u0275elementStart(140, "app-docs-example", 7);
    \u0275\u0275text(141, "\n          ");
    \u0275\u0275elementStart(142, "div", 4);
    \u0275\u0275text(143, "\n            ");
    \u0275\u0275repeaterCreate(144, ListGroupsComponent_For_145_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(146, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(148, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n  ");
    \u0275\u0275elementStart(151, "c-col", 0);
    \u0275\u0275text(152, "\n    ");
    \u0275\u0275elementStart(153, "c-card", 1);
    \u0275\u0275text(154, "\n      ");
    \u0275\u0275elementStart(155, "c-card-header");
    \u0275\u0275text(156, "\n        ");
    \u0275\u0275elementStart(157, "strong");
    \u0275\u0275text(158, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(159, " ");
    \u0275\u0275elementStart(160, "small");
    \u0275\u0275text(161, "Flush");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, "\n      ");
    \u0275\u0275elementStart(164, "c-card-body");
    \u0275\u0275text(165, "\n        ");
    \u0275\u0275elementStart(166, "p", 2);
    \u0275\u0275text(167, "\n          Add ");
    \u0275\u0275elementStart(168, "code");
    \u0275\u0275text(169, "flush");
    \u0275\u0275elementEnd();
    \u0275\u0275text(170, " boolean property to remove some borders and\n          rounded corners to render list group items edge-to-edge in a parent\n          container (e.g., cards).\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, "\n        ");
    \u0275\u0275elementStart(172, "app-docs-example", 8);
    \u0275\u0275text(173, "\n          ");
    \u0275\u0275elementStart(174, "ul", 9);
    \u0275\u0275text(175, "\n            ");
    \u0275\u0275repeaterCreate(176, ListGroupsComponent_For_177_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(178, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(179, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(181, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, "\n  ");
    \u0275\u0275elementStart(183, "c-col", 0);
    \u0275\u0275text(184, "\n    ");
    \u0275\u0275elementStart(185, "c-card", 1);
    \u0275\u0275text(186, "\n      ");
    \u0275\u0275elementStart(187, "c-card-header");
    \u0275\u0275text(188, "\n        ");
    \u0275\u0275elementStart(189, "strong");
    \u0275\u0275text(190, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(191, " ");
    \u0275\u0275elementStart(192, "small");
    \u0275\u0275text(193, "Horizontal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(194, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(195, "\n      ");
    \u0275\u0275elementStart(196, "c-card-body");
    \u0275\u0275text(197, "\n        ");
    \u0275\u0275elementStart(198, "p", 2);
    \u0275\u0275text(199, "\n          Add ");
    \u0275\u0275elementStart(200, "code");
    \u0275\u0275text(201, 'layout="horizontal"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(202, " to change the layout of\n          list group items from vertical to horizontal across all breakpoints. ");
    \u0275\u0275element(203, "br");
    \u0275\u0275text(204, "\n          Alternatively, choose a responsive variant\n          ");
    \u0275\u0275elementStart(205, "code");
    \u0275\u0275text(206, '[horizontal]="sm | md | lg | xl | xxl"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(207, "\n          to make a list group horizontal starting at that breakpoint's\n          ");
    \u0275\u0275elementStart(208, "code");
    \u0275\u0275text(209, "min-width");
    \u0275\u0275elementEnd();
    \u0275\u0275text(210, ". ");
    \u0275\u0275element(211, "br");
    \u0275\u0275text(212, "\n          Currently ");
    \u0275\u0275elementStart(213, "strong");
    \u0275\u0275text(214, "horizontal list groups cannot be combined with flush list groups.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(215, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(216, "\n        ");
    \u0275\u0275elementStart(217, "app-docs-example", 8);
    \u0275\u0275text(218, "\n          ");
    \u0275\u0275repeaterCreate(219, ListGroupsComponent_For_220_Template, 13, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(221, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(222, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(223, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(224, "\n  ");
    \u0275\u0275elementStart(225, "c-col", 0);
    \u0275\u0275text(226, "\n    ");
    \u0275\u0275elementStart(227, "c-card", 1);
    \u0275\u0275text(228, "\n      ");
    \u0275\u0275elementStart(229, "c-card-header");
    \u0275\u0275text(230, "\n        ");
    \u0275\u0275elementStart(231, "strong");
    \u0275\u0275text(232, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(233, " ");
    \u0275\u0275elementStart(234, "small");
    \u0275\u0275text(235, "Contextual classes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(236, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(237, "\n      ");
    \u0275\u0275elementStart(238, "c-card-body");
    \u0275\u0275text(239, "\n        ");
    \u0275\u0275elementStart(240, "p", 2);
    \u0275\u0275text(241, "\n          Use contextual classes to style list items with a stateful background\n          and color.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(242, "\n        ");
    \u0275\u0275elementStart(243, "app-docs-example", 10);
    \u0275\u0275text(244, "\n          ");
    \u0275\u0275elementStart(245, "ul", 11);
    \u0275\u0275text(246, "\n            ");
    \u0275\u0275repeaterCreate(247, ListGroupsComponent_For_248_Template, 4, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(249, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(250, "\n        ");
    \u0275\u0275elementStart(251, "p", 12);
    \u0275\u0275text(252, "\n          Contextual classes also work with ");
    \u0275\u0275elementStart(253, "code");
    \u0275\u0275text(254, "<a>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(255, " or\n          ");
    \u0275\u0275elementStart(256, "code");
    \u0275\u0275text(257, "<button>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(258, ". Note the addition of the hover styles\n          here not present in the previous example. Also supported is the\n          ");
    \u0275\u0275elementStart(259, "code");
    \u0275\u0275text(260, "active");
    \u0275\u0275elementEnd();
    \u0275\u0275text(261, " state; apply it to indicate an active selection on\n          a contextual list group item.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(262, "\n        ");
    \u0275\u0275elementStart(263, "app-docs-example", 10);
    \u0275\u0275text(264, "\n          ");
    \u0275\u0275elementStart(265, "div", 4);
    \u0275\u0275text(266, "\n            ");
    \u0275\u0275repeaterCreate(267, ListGroupsComponent_For_268_Template, 4, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(269, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(270, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(271, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(272, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(273, "\n  ");
    \u0275\u0275elementStart(274, "c-col", 0);
    \u0275\u0275text(275, "\n    ");
    \u0275\u0275elementStart(276, "c-card", 1);
    \u0275\u0275text(277, "\n      ");
    \u0275\u0275elementStart(278, "c-card-header");
    \u0275\u0275text(279, "\n        ");
    \u0275\u0275elementStart(280, "strong");
    \u0275\u0275text(281, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(282, " ");
    \u0275\u0275elementStart(283, "small");
    \u0275\u0275text(284, "With badges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(285, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(286, "\n      ");
    \u0275\u0275elementStart(287, "c-card-body");
    \u0275\u0275text(288, "\n        ");
    \u0275\u0275elementStart(289, "p", 2);
    \u0275\u0275text(290, "\n          Add badges to any list group item to show unread counts, activity, and\n          more.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(291, "\n        ");
    \u0275\u0275elementStart(292, "app-docs-example", 13);
    \u0275\u0275text(293, "\n          ");
    \u0275\u0275elementStart(294, "div", 4);
    \u0275\u0275text(295, "\n            ");
    \u0275\u0275repeaterCreate(296, ListGroupsComponent_For_297_Template, 7, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(298, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(299, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(300, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(301, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(302, "\n  ");
    \u0275\u0275elementStart(303, "c-col", 0);
    \u0275\u0275text(304, "\n    ");
    \u0275\u0275elementStart(305, "c-card", 1);
    \u0275\u0275text(306, "\n      ");
    \u0275\u0275elementStart(307, "c-card-header");
    \u0275\u0275text(308, "\n        ");
    \u0275\u0275elementStart(309, "strong");
    \u0275\u0275text(310, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(311, " ");
    \u0275\u0275elementStart(312, "small");
    \u0275\u0275text(313, "Custom content");
    \u0275\u0275elementEnd();
    \u0275\u0275text(314, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(315, "\n      ");
    \u0275\u0275elementStart(316, "c-card-body");
    \u0275\u0275text(317, "\n        ");
    \u0275\u0275elementStart(318, "p", 2);
    \u0275\u0275text(319, "\n          Add nearly any HTML within, even for linked list groups like the one\n          below, with the help of\n          ");
    \u0275\u0275elementStart(320, "a", 14);
    \u0275\u0275text(321, "flexbox utilities");
    \u0275\u0275elementEnd();
    \u0275\u0275text(322, ".\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(323, "\n        ");
    \u0275\u0275elementStart(324, "app-docs-example", 15);
    \u0275\u0275text(325, "\n          ");
    \u0275\u0275elementStart(326, "div", 4);
    \u0275\u0275text(327, "\n            ");
    \u0275\u0275elementStart(328, "a", 16);
    \u0275\u0275text(329, "\n              ");
    \u0275\u0275elementStart(330, "div", 17);
    \u0275\u0275text(331, "\n                ");
    \u0275\u0275elementStart(332, "h5", 18);
    \u0275\u0275text(333, "List group item heading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(334, "\n                ");
    \u0275\u0275elementStart(335, "small");
    \u0275\u0275text(336, "3 days ago");
    \u0275\u0275elementEnd();
    \u0275\u0275text(337, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(338, "\n              ");
    \u0275\u0275elementStart(339, "p", 18);
    \u0275\u0275text(340, "\n                Donec id elit non mi porta gravida at eget metus. Maecenas sed\n                diam eget risus varius blandit.\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(341, "\n              ");
    \u0275\u0275elementStart(342, "small");
    \u0275\u0275text(343, "Donec id elit non mi porta.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(344, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(345, "\n            ");
    \u0275\u0275elementStart(346, "a", 19);
    \u0275\u0275text(347, "\n              ");
    \u0275\u0275elementStart(348, "div", 17);
    \u0275\u0275text(349, "\n                ");
    \u0275\u0275elementStart(350, "h5", 18);
    \u0275\u0275text(351, "List group item heading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(352, "\n                ");
    \u0275\u0275elementStart(353, "small", 20);
    \u0275\u0275text(354, "3 days ago");
    \u0275\u0275elementEnd();
    \u0275\u0275text(355, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(356, "\n              ");
    \u0275\u0275elementStart(357, "p", 18);
    \u0275\u0275text(358, "\n                Donec id elit non mi porta gravida at eget metus. Maecenas sed\n                diam eget risus varius blandit.\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(359, "\n              ");
    \u0275\u0275elementStart(360, "small", 20);
    \u0275\u0275text(361, "Donec id elit non mi porta.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(362, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(363, "\n            ");
    \u0275\u0275elementStart(364, "a", 19);
    \u0275\u0275text(365, "\n              ");
    \u0275\u0275elementStart(366, "div", 17);
    \u0275\u0275text(367, "\n                ");
    \u0275\u0275elementStart(368, "h5", 18);
    \u0275\u0275text(369, "List group item heading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(370, "\n                ");
    \u0275\u0275elementStart(371, "small", 20);
    \u0275\u0275text(372, "3 days ago");
    \u0275\u0275elementEnd();
    \u0275\u0275text(373, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(374, "\n              ");
    \u0275\u0275elementStart(375, "p", 18);
    \u0275\u0275text(376, "\n                Donec id elit non mi porta gravida at eget metus. Maecenas sed\n                diam eget risus varius blandit.\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(377, "\n              ");
    \u0275\u0275elementStart(378, "small", 20);
    \u0275\u0275text(379, "Donec id elit non mi porta.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(380, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(381, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(382, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(383, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(384, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(385, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(386, "\n  ");
    \u0275\u0275elementStart(387, "c-col", 0);
    \u0275\u0275text(388, "\n    ");
    \u0275\u0275elementStart(389, "c-card", 1);
    \u0275\u0275text(390, "\n      ");
    \u0275\u0275elementStart(391, "c-card-header");
    \u0275\u0275text(392, "\n        ");
    \u0275\u0275elementStart(393, "strong");
    \u0275\u0275text(394, "Angular List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(395, " ");
    \u0275\u0275elementStart(396, "small");
    \u0275\u0275text(397, "Checkboxes and radios");
    \u0275\u0275elementEnd();
    \u0275\u0275text(398, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(399, "\n      ");
    \u0275\u0275elementStart(400, "c-card-body");
    \u0275\u0275text(401, "\n        ");
    \u0275\u0275elementStart(402, "p", 2);
    \u0275\u0275text(403, "\n          Place CoreUI's checkboxes and radios within list group items and\n          customize as needed.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(404, "\n        ");
    \u0275\u0275elementStart(405, "app-docs-example", 21);
    \u0275\u0275text(406, "\n          ");
    \u0275\u0275elementStart(407, "form", 22);
    \u0275\u0275listener("ngSubmit", function ListGroupsComponent_Template_form_ngSubmit_407_listener() {
      return ctx.logValue();
    });
    \u0275\u0275text(408, "\n            ");
    \u0275\u0275elementStart(409, "ul", 23);
    \u0275\u0275text(410, "\n              ");
    \u0275\u0275elementStart(411, "button", 24);
    \u0275\u0275listener("click", function ListGroupsComponent_Template_button_click_411_listener() {
      return ctx.setValue("one");
    });
    \u0275\u0275text(412, "\n                ");
    \u0275\u0275elementStart(413, "c-form-check");
    \u0275\u0275text(414, "\n                  ");
    \u0275\u0275element(415, "input", 25);
    \u0275\u0275text(416, "\n                  ");
    \u0275\u0275elementStart(417, "label", 26);
    \u0275\u0275text(418, "Cras justo odio");
    \u0275\u0275elementEnd();
    \u0275\u0275text(419, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(420, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(421, "\n              ");
    \u0275\u0275elementStart(422, "label", 27);
    \u0275\u0275text(423, "\n                ");
    \u0275\u0275elementStart(424, "c-form-check");
    \u0275\u0275text(425, "\n                  ");
    \u0275\u0275element(426, "input", 28);
    \u0275\u0275text(427, "\n                  ");
    \u0275\u0275elementStart(428, "span", 29);
    \u0275\u0275text(429, "Dapibus ac facilisis in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(430, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(431, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(432, "\n              ");
    \u0275\u0275elementStart(433, "li", 30);
    \u0275\u0275text(434, "\n                ");
    \u0275\u0275elementStart(435, "c-form-check");
    \u0275\u0275text(436, "\n                  ");
    \u0275\u0275element(437, "input", 31);
    \u0275\u0275text(438, "\n                  ");
    \u0275\u0275elementStart(439, "label", 26);
    \u0275\u0275text(440, "Morbi leo risus");
    \u0275\u0275elementEnd();
    \u0275\u0275text(441, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(442, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(443, "\n              ");
    \u0275\u0275elementStart(444, "li", 30);
    \u0275\u0275text(445, "\n                ");
    \u0275\u0275elementStart(446, "c-form-check");
    \u0275\u0275text(447, "\n                  ");
    \u0275\u0275element(448, "input", 32);
    \u0275\u0275text(449, "\n                  ");
    \u0275\u0275elementStart(450, "label", 26);
    \u0275\u0275text(451, "Orta ac consectetur ac");
    \u0275\u0275elementEnd();
    \u0275\u0275text(452, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(453, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(454, "\n              ");
    \u0275\u0275elementStart(455, "li", 30);
    \u0275\u0275text(456, "\n                ");
    \u0275\u0275elementStart(457, "c-form-check");
    \u0275\u0275text(458, "\n                  ");
    \u0275\u0275element(459, "input", 33);
    \u0275\u0275text(460, "\n                  ");
    \u0275\u0275elementStart(461, "label", 26);
    \u0275\u0275text(462, "Vestibulum at eros");
    \u0275\u0275elementEnd();
    \u0275\u0275text(463, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(464, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(465, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(466, "\n            ");
    \u0275\u0275elementStart(467, "button", 34);
    \u0275\u0275text(468, "Submit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(469, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(470, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(471, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(472, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(473, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(474, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx.sampleList);
    \u0275\u0275advance(35);
    \u0275\u0275repeater(ctx.sampleList);
    \u0275\u0275advance(35);
    \u0275\u0275repeater(ctx.sampleList);
    \u0275\u0275advance(50);
    \u0275\u0275repeater(ctx.sampleList);
    \u0275\u0275advance(32);
    \u0275\u0275repeater(ctx.sampleList);
    \u0275\u0275advance(43);
    \u0275\u0275repeater(ctx.breakpoints);
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx.colors);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx.colors);
    \u0275\u0275advance(29);
    \u0275\u0275repeater(ctx.sampleList);
    \u0275\u0275advance(32);
    \u0275\u0275property("active", true);
    \u0275\u0275advance(79);
    \u0275\u0275property("formGroup", ctx.checkBoxes);
    \u0275\u0275advance(2);
    \u0275\u0275property("flush", true);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ListGroupDirective, ListGroupItemDirective, BadgeComponent, ReactiveFormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective] });
var ListGroupsComponent = _ListGroupsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListGroupsComponent, { className: "ListGroupsComponent", filePath: "src\\app\\documentacion\\base\\list-groups\\list-groups.component.ts", lineNumber: 13 });
})();
export {
  ListGroupsComponent
};
//# sourceMappingURL=list-groups.component-KDDKKKG7.js.map
