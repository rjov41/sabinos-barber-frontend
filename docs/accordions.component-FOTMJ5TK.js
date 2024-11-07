import {
  DocsExampleComponent
} from "./chunk-J6J7THO6.js";
import {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  BgColorDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DomSanitizer,
  RowComponent,
  TemplateIdDirective
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/accordion/accordions.component.ts
function AccordionsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 18);
    \u0275\u0275listener("click", function AccordionsComponent_ng_template_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const item0_r2 = \u0275\u0275reference(22);
      return \u0275\u0275resetView(item0_r2.toggleItem());
    });
    \u0275\u0275text(2, "\n                  Accordion item #0\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n              ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const item0_r2 = \u0275\u0275reference(22);
    \u0275\u0275advance();
    \u0275\u0275property("collapsed", !item0_r2.visible);
  }
}
function AccordionsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275text(2, "\n              ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.getAccordionBodyText("first"), \u0275\u0275sanitizeHtml)("gradient", true);
  }
}
function AccordionsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 20);
    \u0275\u0275listener("click", function AccordionsComponent_ng_template_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      \u0275\u0275nextContext();
      const item1_r5 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(item1_r5.toggleItem());
    });
    \u0275\u0275text(2, "\n                  Accordion item #1\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n              ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const item1_r5 = \u0275\u0275reference(30);
    \u0275\u0275advance();
    \u0275\u0275property("collapsed", !item1_r5.visible);
  }
}
function AccordionsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "This is the\n                    ");
    \u0275\u0275elementStart(5, "mark");
    \u0275\u0275text(6, "#second");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                    item accordion body.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " It is hidden by\n                  default, until the collapse plugin adds the appropriate classes that we use to\n                  style each element. These classes control the overall appearance, as well as\n                  the showing and hiding via CSS transitions. You can modify any of this with\n                  custom CSS or overriding our default variables. It's also worth noting\n                  that just about any HTML can go within the ");
    \u0275\u0275elementStart(9, "code");
    \u0275\u0275text(10, ".accordion-body");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ",\n                  though the transition does limit overflow.\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n              ");
  }
}
function AccordionsComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 20);
    \u0275\u0275listener("click", function AccordionsComponent_ng_template_40_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      \u0275\u0275nextContext();
      const item2_r7 = \u0275\u0275reference(38);
      return \u0275\u0275resetView(item2_r7.toggleItem());
    });
    \u0275\u0275text(2, "\n                  Accordion item #2\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n              ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const item2_r7 = \u0275\u0275reference(38);
    \u0275\u0275advance();
    \u0275\u0275property("collapsed", !item2_r7.visible);
  }
}
function AccordionsComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2, "\n                  ");
    \u0275\u0275element(3, "span", 22);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n              ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r2.getAccordionBodyText("third"), \u0275\u0275sanitizeHtml);
  }
}
function AccordionsComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                Accordion item #0\n              ");
  }
}
function AccordionsComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275text(2, "\n              ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.getAccordionBodyText("first"), \u0275\u0275sanitizeHtml);
  }
}
function AccordionsComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                Accordion item #1\n              ");
  }
}
function AccordionsComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275text(2, "\n              ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.getAccordionBodyText("second"), \u0275\u0275sanitizeHtml);
  }
}
function AccordionsComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                Accordion item #2\n              ");
  }
}
function AccordionsComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275text(2, "\n              ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.getAccordionBodyText("third"), \u0275\u0275sanitizeHtml);
  }
}
function AccordionsComponent_For_118_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_218_r8 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1("\n                  Custom Accordion item #", \u0275$index_218_r8, "\n                ");
  }
}
function AccordionsComponent_For_118_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                  ");
    \u0275\u0275elementStart(1, "small")(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4, "\n                  ");
    \u0275\u0275element(5, "span", 22);
    \u0275\u0275text(6, "\n                ");
  }
  if (rf & 2) {
    const \u0275$index_218_r8 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275$index_218_r8, ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r2.getAccordionBodyText(\u0275$index_218_r8), \u0275\u0275sanitizeHtml);
  }
}
function AccordionsComponent_For_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n              ");
    \u0275\u0275elementStart(1, "c-accordion-item", 8);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275template(3, AccordionsComponent_For_118_ng_template_3_Template, 1, 1, "ng-template", 14);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275template(5, AccordionsComponent_For_118_ng_template_5_Template, 7, 2, "ng-template", 15);
    \u0275\u0275text(6, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    const \u0275$index_218_r8 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("visible", \u0275$index_218_r8 === 1);
  }
}
var _AccordionsComponent = class _AccordionsComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.items = [1, 2, 3, 4];
  }
  getAccordionBodyText(value) {
    const textSample = `
      <strong>This is the <mark>#${value}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;
    return this.sanitizer.bypassSecurityTrustHtml(textSample);
  }
};
_AccordionsComponent.\u0275fac = function AccordionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccordionsComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
_AccordionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionsComponent, selectors: [["app-accordions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 124, vars: 7, consts: [["item0", "cAccordionItem"], ["item1", "cAccordionItem"], ["item2", "cAccordionItem"], ["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/accordion"], [1, "shadow", "rounded-2", 3, "alwaysOpen"], [3, "visible"], ["cTemplateId", "accordionHeaderTemplate"], ["cTemplateId", "accordionBodyTemplate"], ["href", "components/accordion#flush"], [3, "flush"], ["visible", ""], ["cTemplateId", "accordionHeader"], ["cTemplateId", "accordionBody"], ["href", "components/accordion#always-open"], ["alwaysOpen", "", 1, "shadow", "accordion-custom", "rounded-2"], ["cAccordionButton", "", "cBgColor", "info", 3, "click", "collapsed"], ["cBgColor", "info", 1, "accordion-body", 3, "innerHTML", "gradient"], ["cAccordionButton", "", 3, "click", "collapsed"], [1, "accordion-body"], [3, "innerHTML"]], template: function AccordionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row");
    \u0275\u0275text(1, "\n  ");
    \u0275\u0275elementStart(2, "c-col", 3);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "c-card", 4);
    \u0275\u0275text(5, "\n      ");
    \u0275\u0275elementStart(6, "c-card-header");
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Angular Accordion");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n      ");
    \u0275\u0275elementStart(12, "c-card-body");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "p", 5);
    \u0275\u0275text(15, "\n          Click the accordions below to expand/collapse the accordion content.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementStart(17, "app-docs-example", 6);
    \u0275\u0275text(18, "\n          ");
    \u0275\u0275elementStart(19, "c-accordion", 7);
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementStart(21, "c-accordion-item", 8, 0);
    \u0275\u0275text(23, "\n              ");
    \u0275\u0275template(24, AccordionsComponent_ng_template_24_Template, 4, 1, "ng-template", 9);
    \u0275\u0275text(25, "\n              ");
    \u0275\u0275template(26, AccordionsComponent_ng_template_26_Template, 3, 2, "ng-template", 10);
    \u0275\u0275text(27, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n            ");
    \u0275\u0275elementStart(29, "c-accordion-item", 8, 1);
    \u0275\u0275text(31, "\n              ");
    \u0275\u0275template(32, AccordionsComponent_ng_template_32_Template, 4, 1, "ng-template", 9);
    \u0275\u0275text(33, "\n              ");
    \u0275\u0275template(34, AccordionsComponent_ng_template_34_Template, 13, 0, "ng-template", 10);
    \u0275\u0275text(35, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n            ");
    \u0275\u0275elementStart(37, "c-accordion-item", 8, 2);
    \u0275\u0275text(39, "\n              ");
    \u0275\u0275template(40, AccordionsComponent_ng_template_40_Template, 4, 1, "ng-template", 9);
    \u0275\u0275text(41, "\n              ");
    \u0275\u0275template(42, AccordionsComponent_ng_template_42_Template, 6, 1, "ng-template", 10);
    \u0275\u0275text(43, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n    ");
    \u0275\u0275elementStart(49, "c-card", 4);
    \u0275\u0275text(50, "\n      ");
    \u0275\u0275elementStart(51, "c-card-header");
    \u0275\u0275text(52, "\n        ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "Angular Accordion");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " flush\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, "\n      ");
    \u0275\u0275elementStart(57, "c-card-body");
    \u0275\u0275text(58, "\n        ");
    \u0275\u0275elementStart(59, "p", 5);
    \u0275\u0275text(60, "\n          Add ");
    \u0275\u0275elementStart(61, "code");
    \u0275\u0275text(62, "flush");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " to remove the default ");
    \u0275\u0275elementStart(64, "code");
    \u0275\u0275text(65, "background-color");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, ", some\n          borders, and some rounded corners to render accordions edge-to-edge with their parent\n          container.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, "\n        ");
    \u0275\u0275elementStart(68, "app-docs-example", 11);
    \u0275\u0275text(69, "\n          ");
    \u0275\u0275elementStart(70, "c-accordion", 12);
    \u0275\u0275text(71, "\n            ");
    \u0275\u0275elementStart(72, "c-accordion-item", 13);
    \u0275\u0275text(73, "\n              ");
    \u0275\u0275template(74, AccordionsComponent_ng_template_74_Template, 1, 0, "ng-template", 14);
    \u0275\u0275text(75, "\n              ");
    \u0275\u0275template(76, AccordionsComponent_ng_template_76_Template, 3, 1, "ng-template", 15);
    \u0275\u0275text(77, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n            ");
    \u0275\u0275elementStart(79, "c-accordion-item", 8);
    \u0275\u0275text(80, "\n              ");
    \u0275\u0275template(81, AccordionsComponent_ng_template_81_Template, 1, 0, "ng-template", 14);
    \u0275\u0275text(82, "\n              ");
    \u0275\u0275template(83, AccordionsComponent_ng_template_83_Template, 3, 1, "ng-template", 15);
    \u0275\u0275text(84, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "\n            ");
    \u0275\u0275elementStart(86, "c-accordion-item", 8);
    \u0275\u0275text(87, "\n              ");
    \u0275\u0275template(88, AccordionsComponent_ng_template_88_Template, 1, 0, "ng-template", 14);
    \u0275\u0275text(89, "\n              ");
    \u0275\u0275template(90, AccordionsComponent_ng_template_90_Template, 3, 1, "ng-template", 15);
    \u0275\u0275text(91, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "\n          ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "\n    ");
    \u0275\u0275elementStart(97, "c-card", 4);
    \u0275\u0275text(98, "\n      ");
    \u0275\u0275elementStart(99, "c-card-header");
    \u0275\u0275text(100, "\n        ");
    \u0275\u0275elementStart(101, "strong");
    \u0275\u0275text(102, "Angular Accordion");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, " alwaysOpen\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, "\n      ");
    \u0275\u0275elementStart(105, "c-card-body");
    \u0275\u0275text(106, "\n        ");
    \u0275\u0275elementStart(107, "p", 5);
    \u0275\u0275text(108, "\n          Add ");
    \u0275\u0275elementStart(109, "code");
    \u0275\u0275text(110, "alwaysOpen");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, " property to make accordion items stay open when another\n          item is opened.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "\n        ");
    \u0275\u0275elementStart(113, "app-docs-example", 16);
    \u0275\u0275text(114, "\n          ");
    \u0275\u0275elementStart(115, "c-accordion", 17);
    \u0275\u0275text(116, "\n            ");
    \u0275\u0275repeaterCreate(117, AccordionsComponent_For_118_Template, 8, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275text(119, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(121, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\n  ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(19);
    \u0275\u0275property("alwaysOpen", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("visible", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("visible", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("visible", false);
    \u0275\u0275advance(33);
    \u0275\u0275property("flush", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("visible", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("visible", false);
    \u0275\u0275advance(31);
    \u0275\u0275repeater(ctx.items);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective], styles: [`

[_nghost-%COMP%]     .accordion-custom .accordion-button {
  background-color: var(--cui-dark);
  color: var(--cui-white);
}
[_nghost-%COMP%]     .accordion-custom .accordion-button::after {
  --cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
/*# sourceMappingURL=/sabinos-barber-frontend/accordions.component.css.map */`] });
var AccordionsComponent = _AccordionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionsComponent, { className: "AccordionsComponent", filePath: "src\\app\\documentacion\\base\\accordion\\accordions.component.ts", lineNumber: 13 });
})();
export {
  AccordionsComponent
};
//# sourceMappingURL=accordions.component-FOTMJ5TK.js.map
