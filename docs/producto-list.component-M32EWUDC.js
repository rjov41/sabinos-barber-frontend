import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  IconDirective,
  InputGroupComponent,
  PageItemDirective,
  PageLinkDirective,
  PaginationComponent,
  RouterLink,
  RowComponent,
  TableDirective
} from "./chunk-JAOOB3SV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/pages/producto/producto-list/producto-list.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function ProductoListComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div");
    \u0275\u0275text(3, "name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "span");
    \u0275\u0275text(6, " Registered: ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 25)(8, "span");
    \u0275\u0275text(9, " Registered: ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 25)(11, "span");
    \u0275\u0275text(12, " Registered: ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 25)(14, "span");
    \u0275\u0275text(15, " Registered: ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 25)(17, "span");
    \u0275\u0275text(18, " Registered: ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 25)(20, "span");
    \u0275\u0275text(21, " Registered: ");
    \u0275\u0275elementEnd()()();
  }
}
var _ProductoListComponent = class _ProductoListComponent {
  constructor() {
    this.users = [
      {
        name: "Yiorgos Avraamu",
        state: "New",
        registered: "Jan 1, 2021",
        country: "Us",
        usage: 50,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Mastercard",
        activity: "10 sec ago",
        avatar: "./assets/images/avatars/1.jpg",
        status: "success",
        color: "success"
      },
      {
        name: "Avram Tarasios",
        state: "Recurring ",
        registered: "Jan 1, 2021",
        country: "Br",
        usage: 10,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Visa",
        activity: "5 minutes ago",
        avatar: "./assets/images/avatars/2.jpg",
        status: "danger",
        color: "info"
      },
      {
        name: "Quintin Ed",
        state: "New",
        registered: "Jan 1, 2021",
        country: "In",
        usage: 74,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Stripe",
        activity: "1 hour ago",
        avatar: "./assets/images/avatars/3.jpg",
        status: "warning",
        color: "warning"
      },
      {
        name: "En\xE9as Kwadwo",
        state: "Sleep",
        registered: "Jan 1, 2021",
        country: "Fr",
        usage: 98,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Paypal",
        activity: "Last month",
        avatar: "./assets/images/avatars/4.jpg",
        status: "secondary",
        color: "danger"
      },
      {
        name: "Agapetus Tade\xE1\u0161",
        state: "New",
        registered: "Jan 1, 2021",
        country: "Es",
        usage: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "ApplePay",
        activity: "Last week",
        avatar: "./assets/images/avatars/5.jpg",
        status: "success",
        color: "primary"
      },
      {
        name: "Friderik D\xE1vid",
        state: "New",
        registered: "Jan 1, 2021",
        country: "Pl",
        usage: 43,
        period: "Jun 11, 2021 - Jul 10, 2021",
        payment: "Amex",
        activity: "Yesterday",
        avatar: "./assets/images/avatars/6.jpg",
        status: "info",
        color: "dark"
      }
    ];
  }
};
_ProductoListComponent.\u0275fac = function ProductoListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductoListComponent)();
};
_ProductoListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductoListComponent, selectors: [["app-producto-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 6, consts: [[1, "my-4"], [1, "pt-4"], [1, "my-table-full", 3, "fluid"], [1, "px-0", "mb-2", 3, "fluid"], ["cButton", "", "color", "info", 1, "me-3"], ["cIcon", "", "height", "18", "name", "cil-filter"], ["cButton", "", "color", "info", 1, "mr-3"], ["cIcon", "", "height", "18", "name", "cil-fax"], [1, "mb-4"], [1, "small", "text-body-secondary", "mt-3"], [1, ""], ["md", "4", 1, "d-flex", "justify-content-end"], [1, "mt-3"], ["aria-describedby", "button-addon2", "cFormControl", "", 1, ""], ["cButton", "", "color", "secondary", "id", "button-addon2", "type", "button", "variant", "outline"], ["align", "middle", "cTable", "", 1, "mb-0", 3, "hover", "responsive"], [1, "text-nowrap", "text-truncate"], [1, "bg-body-tertiary"], [1, "bg-body-tertiary", "text-center"], ["aria-label", "Page navigation example"], ["cPageItem", "", 3, "disabled"], ["cPageLink", "", 3, "routerLink"], ["cPageItem", ""], ["cPageItem", "", 3, "active"], [1, "small", "text-body-secondary", "text-nowrap"], [1, "text-center"]], template: function ProductoListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-card", 0)(1, "c-card-body", 1)(2, "c-container", 2)(3, "c-container", 3)(4, "button", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(5, "svg", 5);
    \u0275\u0275text(6, " Filtros ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(8, "svg", 7);
    \u0275\u0275text(9, " Descargar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "c-row", 8)(11, "c-col")(12, "div", 9)(13, "span", 10);
    \u0275\u0275text(14, " Productos: 5 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "c-col", 11)(16, "c-input-group", 12);
    \u0275\u0275element(17, "input", 13);
    \u0275\u0275elementStart(18, "button", 14);
    \u0275\u0275text(19, " Buscar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "c-row", 8)(21, "c-col")(22, "table", 15)(23, "thead", 16)(24, "tr")(25, "th", 17);
    \u0275\u0275text(26, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 17);
    \u0275\u0275text(28, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 18);
    \u0275\u0275text(30, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 17);
    \u0275\u0275text(32, "Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 18);
    \u0275\u0275text(34, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 17);
    \u0275\u0275text(36, "Activity");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, ProductoListComponent_For_39_Template, 22, 0, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "c-row", 10)(41, "c-col")(42, "c-pagination", 19)(43, "li", 20)(44, "span", 21);
    \u0275\u0275text(45, "Anterior");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "li", 22)(47, "a", 21);
    \u0275\u0275text(48, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "li", 23)(50, "span", 21);
    \u0275\u0275text(51, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "li", 22)(53, "a", 21);
    \u0275\u0275text(54, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "li", 22)(56, "a", 21);
    \u0275\u0275text(57, "Siguiente");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("fluid", true);
    \u0275\u0275advance();
    \u0275\u0275property("fluid", true);
    \u0275\u0275advance(19);
    \u0275\u0275property("hover", true)("responsive", true);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx.users);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("active", true);
  }
}, dependencies: [
  TableDirective,
  ColComponent,
  CardBodyComponent,
  CardComponent,
  RowComponent,
  InputGroupComponent,
  FormControlDirective,
  ButtonDirective,
  ContainerComponent,
  IconDirective,
  PaginationComponent,
  PageItemDirective,
  PageLinkDirective,
  RouterLink
] });
var ProductoListComponent = _ProductoListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductoListComponent, { className: "ProductoListComponent", filePath: "src\\app\\pages\\producto\\producto-list\\producto-list.component.ts", lineNumber: 59 });
})();
export {
  ProductoListComponent
};
//# sourceMappingURL=producto-list.component-M32EWUDC.js.map
