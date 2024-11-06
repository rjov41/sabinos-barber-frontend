import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/theme/typography.component.ts
var _TypographyComponent = class _TypographyComponent {
  constructor() {
  }
};
_TypographyComponent.\u0275fac = function TypographyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TypographyComponent)();
};
_TypographyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypographyComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 190, vars: 0, consts: [[1, "mb-4"], [1, "table"], [1, "c-highlighter-rouge"], [1, "bd-example"], [1, "h1"], [1, "h2"], [1, "h3"], [1, "h4"], [1, "h5"], [1, "h6"], ["id", "headings", 1, "mb-4"], [1, "bd-example", "bd-example-type"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "c-d-block", "c-text-truncate"], [1, "col-sm-9", "c-d-block", "c-text-truncate"], [1, "col-sm-4"], [1, "col-sm-8"]], template: function TypographyComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-card", 0)(1, "c-card-header");
    \u0275\u0275text(2, " Headings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-card-body")(4, "p");
    \u0275\u0275text(5, "Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "table", 1)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Example");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody")(14, "tr")(15, "td")(16, "p")(17, "code", 2);
    \u0275\u0275text(18, "<h1></h1>");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td")(20, "h1");
    \u0275\u0275text(21, "h1. Bootstrap heading");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tr")(23, "td")(24, "p")(25, "code", 2);
    \u0275\u0275text(26, "<h2></h2>");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "td")(28, "h2");
    \u0275\u0275text(29, "h2. Bootstrap heading");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tr")(31, "td")(32, "p")(33, "code", 2);
    \u0275\u0275text(34, "<h3></h3>");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "td")(36, "h3");
    \u0275\u0275text(37, "h3. Bootstrap heading");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tr")(39, "td")(40, "p")(41, "code", 2);
    \u0275\u0275text(42, "<h4></h4>");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "td")(44, "h4");
    \u0275\u0275text(45, "h4. Bootstrap heading");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tr")(47, "td")(48, "p")(49, "code", 2);
    \u0275\u0275text(50, "<h5></h5>");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "td")(52, "h5");
    \u0275\u0275text(53, "h5. Bootstrap heading");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "tr")(55, "td")(56, "p")(57, "code", 2);
    \u0275\u0275text(58, "<h6></h6>");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "td")(60, "h6");
    \u0275\u0275text(61, "h6. Bootstrap heading");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(62, "c-card", 0)(63, "c-card-header");
    \u0275\u0275text(64, " Headings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "c-card-body")(66, "p")(67, "code", 2);
    \u0275\u0275text(68, ".h1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, " through ");
    \u0275\u0275elementStart(70, "code", 2);
    \u0275\u0275text(71, ".h6");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 3)(74, "p", 4);
    \u0275\u0275text(75, "h1. Bootstrap heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 5);
    \u0275\u0275text(77, "h2. Bootstrap heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 6);
    \u0275\u0275text(79, "h3. Bootstrap heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 7);
    \u0275\u0275text(81, "h4. Bootstrap heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p", 8);
    \u0275\u0275text(83, "h5. Bootstrap heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p", 9);
    \u0275\u0275text(85, "h6. Bootstrap heading");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "c-card", 10)(87, "c-card-header");
    \u0275\u0275text(88, " Display headings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "c-card-body")(90, "p");
    \u0275\u0275text(91, "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ");
    \u0275\u0275elementStart(92, "strong");
    \u0275\u0275text(93, "display heading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\u2014a larger, slightly more opinionated heading style. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 11)(96, "table", 1)(97, "tbody")(98, "tr")(99, "td")(100, "span", 12);
    \u0275\u0275text(101, "Display 1");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "tr")(103, "td")(104, "span", 13);
    \u0275\u0275text(105, "Display 2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "tr")(107, "td")(108, "span", 14);
    \u0275\u0275text(109, "Display 3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "tr")(111, "td")(112, "span", 15);
    \u0275\u0275text(113, "Display 4");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(114, "c-card", 0)(115, "c-card-header");
    \u0275\u0275text(116, " Inline text elements ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "c-card-body")(118, "p");
    \u0275\u0275text(119, "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ");
    \u0275\u0275elementStart(120, "strong");
    \u0275\u0275text(121, "display heading");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "\u2014a larger, slightly more opinionated heading style. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 3)(124, "p");
    \u0275\u0275text(125, "You can use the mark tag to ");
    \u0275\u0275elementStart(126, "mark");
    \u0275\u0275text(127, "highlight");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, " text. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "p")(130, "del");
    \u0275\u0275text(131, "This line of text is meant to be treated as deleted text.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "p")(133, "s");
    \u0275\u0275text(134, "This line of text is meant to be treated as no longer accurate.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "p")(136, "ins");
    \u0275\u0275text(137, "This line of text is meant to be treated as an addition to the document.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "p")(139, "u");
    \u0275\u0275text(140, "This line of text will render as underlined");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "p")(142, "small");
    \u0275\u0275text(143, "This line of text is meant to be treated as fine print.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "p")(145, "strong");
    \u0275\u0275text(146, "This line rendered as bold text.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "p")(148, "em");
    \u0275\u0275text(149, "This line rendered as italicized text.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(150, "c-card", 0)(151, "c-card-header");
    \u0275\u0275text(152, " Description list alignment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "c-card-body")(154, "p");
    \u0275\u0275text(155, "Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a ");
    \u0275\u0275elementStart(156, "code", 2);
    \u0275\u0275text(157, ".text-truncate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, " class to truncate the text with an ellipsis.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "div", 3)(160, "dl", 16)(161, "dt", 17);
    \u0275\u0275text(162, "Description lists");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "dd", 18);
    \u0275\u0275text(164, "A description list is perfect for defining terms.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "dt", 17);
    \u0275\u0275text(166, "Euismod");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "dd", 18)(168, "p");
    \u0275\u0275text(169, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "p");
    \u0275\u0275text(171, "Donec id elit non mi porta gravida at eget metus.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "dt", 17);
    \u0275\u0275text(173, "Malesuada porta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "dd", 18);
    \u0275\u0275text(175, "Etiam porta sem malesuada magna mollis euismod.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "dt", 19);
    \u0275\u0275text(177, "Truncated term is truncated with ");
    \u0275\u0275elementStart(178, "code");
    \u0275\u0275text(179, "d-block");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "dd", 20);
    \u0275\u0275text(181, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "dt", 17);
    \u0275\u0275text(183, "Nesting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "dd", 18)(185, "dl", 16)(186, "dt", 21);
    \u0275\u0275text(187, "Nested definition list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "dd", 22);
    \u0275\u0275text(189, "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.");
    \u0275\u0275elementEnd()()()()()()();
  }
}, dependencies: [
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent
], encapsulation: 2 });
var TypographyComponent = _TypographyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypographyComponent, { className: "TypographyComponent", filePath: "src\\app\\documentacion\\theme\\typography.component.ts", lineNumber: 14 });
})();
export {
  TypographyComponent
};
//# sourceMappingURL=typography.component-ZD66LCD7.js.map
