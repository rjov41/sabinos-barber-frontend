import {
  ChartjsComponent
} from "./chunk-YQNXMK3O.js";
import {
  getStyle
} from "./chunk-OOW7M2IT.js";
import {
  ButtonDirective,
  ChangeDetectorRef,
  ColComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  IconDirective,
  RouterLink,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent,
  WidgetStatDComponent,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VGFF44UQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-6WCCERUZ.js";

// src/app/documentacion/widgets/widgets-brand/widgets-brand.component.ts
function WidgetsBrandComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-chart", 5, 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chart_r1 = \u0275\u0275reference(1);
    const widget_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", widget_r2.data)("options", ctx_r2.chartOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", chart_r1.id, " ");
  }
}
function WidgetsBrandComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-col", 2)(1, "c-widget-stat-d", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 4);
    \u0275\u0275template(3, WidgetsBrandComponent_For_2_Conditional_3_Template, 3, 3, "c-chart", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    const widget_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap((tmp_11_0 = widget_r2.capBg) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : null);
    \u0275\u0275property("color", (tmp_12_0 = widget_r2.color) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "")("values", widget_r2.values);
    \u0275\u0275advance();
    \u0275\u0275property("name", widget_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.withCharts ? 3 : -1);
  }
}
var _WidgetsBrandComponent = class _WidgetsBrandComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.chartOptions = {
      elements: {
        line: {
          tension: 0.4
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      }
    };
    this.labels = ["January", "February", "March", "April", "May", "June", "July"];
    this.datasets = {
      borderWidth: 2,
      fill: true
    };
    this.colors = {
      backgroundColor: "rgba(255,255,255,.1)",
      borderColor: "rgba(255,255,255,.55)",
      pointHoverBackgroundColor: "#fff",
      pointBackgroundColor: "rgba(255,255,255,.55)"
    };
    this.brandData = [
      {
        icon: "cibFacebook",
        values: [{ title: "friends", value: "89K" }, { title: "feeds", value: "459" }],
        capBg: { "--cui-card-cap-bg": "#3b5998" },
        labels: [...this.labels],
        data: {
          labels: [...this.labels],
          datasets: [__spreadValues(__spreadProps(__spreadValues({}, this.datasets), { data: [65, 59, 84, 84, 51, 55, 40], label: "Facebook" }), this.colors)]
        }
      },
      {
        icon: "cibTwitter",
        values: [{ title: "followers", value: "973k" }, { title: "tweets", value: "1.792" }],
        capBg: { "--cui-card-cap-bg": "#00aced" },
        data: {
          labels: [...this.labels],
          datasets: [__spreadValues(__spreadProps(__spreadValues({}, this.datasets), { data: [1, 13, 9, 17, 34, 41, 38], label: "Twitter" }), this.colors)]
        }
      },
      {
        icon: "cib-linkedin",
        values: [{ title: "contacts", value: "500" }, { title: "feeds", value: "1.292" }],
        capBg: { "--cui-card-cap-bg": "#4875b4" },
        data: {
          labels: [...this.labels],
          datasets: [__spreadValues(__spreadProps(__spreadValues({}, this.datasets), { data: [78, 81, 80, 45, 34, 12, 40], label: "LinkedIn" }), this.colors)]
        }
      },
      {
        icon: "cilCalendar",
        values: [{ title: "events", value: "12+" }, { title: "meetings", value: "4" }],
        capBg: { "--cui-card-cap-bg": "var(--cui-warning)" },
        data: {
          labels: [...this.labels],
          datasets: [__spreadValues(__spreadProps(__spreadValues({}, this.datasets), { data: [35, 23, 56, 22, 97, 23, 64], label: "Events" }), this.colors)]
        }
      }
    ];
  }
  capStyle(value) {
    return !!value ? { "--cui-card-cap-bg": value } : {};
  }
  ngAfterContentInit() {
    this.changeDetectorRef.detectChanges();
  }
};
_WidgetsBrandComponent.\u0275fac = function WidgetsBrandComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetsBrandComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_WidgetsBrandComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WidgetsBrandComponent, selectors: [["app-widgets-brand"]], inputs: { withCharts: "withCharts" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [["chart", "cChart"], [1, "g-4"], ["sm", "6", "xl", "3"], [3, "color", "values"], ["cIcon", "", "height", "52", 1, "my-4", "text-white", 3, "name"], ["type", "line", 1, "position-absolute", "w-100", "h-100", 3, "data", "options"]], template: function WidgetsBrandComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row", 1);
    \u0275\u0275repeaterCreate(1, WidgetsBrandComponent_For_2_Template, 4, 6, "c-col", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.brandData);
  }
}, dependencies: [RowComponent, ColComponent, WidgetStatDComponent, IconDirective, ChartjsComponent] });
var WidgetsBrandComponent = _WidgetsBrandComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WidgetsBrandComponent, { className: "WidgetsBrandComponent", filePath: "src\\app\\documentacion\\widgets\\widgets-brand\\widgets-brand.component.ts", lineNumber: 24 });
})();

// src/app/documentacion/widgets/widgets-dropdown/widgets-dropdown.component.ts
var _c0 = () => [];
function WidgetsDropdownComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        26K\n        ");
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "\n          (-12.4% ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(3, "svg", 10);
    \u0275\u0275text(4, ")\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n      ");
  }
}
function WidgetsDropdownComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown", 11)(1, "button", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 15);
    \u0275\u0275text(6, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 15);
    \u0275\u0275text(9, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 15);
    \u0275\u0275text(12, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275element(14, "hr", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "button", 17);
    \u0275\u0275text(17, "Separated link");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
  }
}
function WidgetsDropdownComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-chart", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.data[0])("options", ctx_r0.options[0])("type", "line");
  }
}
function WidgetsDropdownComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "$6.200");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "\n          (40.9%");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 19);
    \u0275\u0275text(7, ")\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n      ");
  }
}
function WidgetsDropdownComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown", 11)(1, "button", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 15);
    \u0275\u0275text(6, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 15);
    \u0275\u0275text(9, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 15);
    \u0275\u0275text(12, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 20);
    \u0275\u0275text(15, "Disabled");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", true)("routerLink", \u0275\u0275pureFunction0(9, _c0));
  }
}
function WidgetsDropdownComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-chart", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.data[1])("options", ctx_r0.options[1]);
  }
}
function WidgetsDropdownComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "2.49");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "\n          (84.7% ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 19);
    \u0275\u0275text(7, ")\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n      ");
  }
}
function WidgetsDropdownComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown", 11)(1, "button", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 15);
    \u0275\u0275text(6, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 15);
    \u0275\u0275text(9, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 15);
    \u0275\u0275text(12, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 20);
    \u0275\u0275text(15, "Disabled");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", true)("routerLink", \u0275\u0275pureFunction0(9, _c0));
  }
}
function WidgetsDropdownComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-chart", 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.data[2])("options", ctx_r0.options[2]);
  }
}
function WidgetsDropdownComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "44K");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "\n          (-23.6% ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 10);
    \u0275\u0275text(7, ")\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n      ");
  }
}
function WidgetsDropdownComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-dropdown", 11)(1, "button", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 15);
    \u0275\u0275text(6, "Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 15);
    \u0275\u0275text(9, "Another action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 15);
    \u0275\u0275text(12, "Something else here");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 20);
    \u0275\u0275text(15, "Disabled");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("caret", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", true)("routerLink", \u0275\u0275pureFunction0(9, _c0));
  }
}
function WidgetsDropdownComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-chart", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.data[3])("options", ctx_r0.options[3]);
  }
}
var _c1 = ["chart"];
var _WidgetsDropdownComponent = class _WidgetsDropdownComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.data = [];
    this.options = [];
    this.labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April"
    ];
    this.datasets = [
      [{
        label: "My First dataset",
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,.55)",
        pointBackgroundColor: getStyle("--cui-primary"),
        pointHoverBorderColor: getStyle("--cui-primary"),
        data: [65, 59, 84, 84, 51, 55, 40]
      }],
      [{
        label: "My Second dataset",
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,.55)",
        pointBackgroundColor: getStyle("--cui-info"),
        pointHoverBorderColor: getStyle("--cui-info"),
        data: [1, 18, 9, 17, 34, 22, 11]
      }],
      [{
        label: "My Third dataset",
        backgroundColor: "rgba(255,255,255,.2)",
        borderColor: "rgba(255,255,255,.55)",
        pointBackgroundColor: getStyle("--cui-warning"),
        pointHoverBorderColor: getStyle("--cui-warning"),
        data: [78, 81, 80, 45, 34, 12, 40],
        fill: true
      }],
      [{
        label: "My Fourth dataset",
        backgroundColor: "rgba(255,255,255,.2)",
        borderColor: "rgba(255,255,255,.55)",
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        barPercentage: 0.7
      }]
    ];
    this.optionsDefault = {
      plugins: {
        legend: {
          display: false
        }
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        },
        y: {
          min: 30,
          max: 89,
          display: false,
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      },
      elements: {
        line: {
          borderWidth: 1,
          tension: 0.4
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }
  ngOnInit() {
    this.setData();
  }
  ngAfterContentInit() {
    this.changeDetectorRef.detectChanges();
  }
  setData() {
    for (let idx = 0; idx < 4; idx++) {
      this.data[idx] = {
        labels: idx < 3 ? this.labels.slice(0, 7) : this.labels,
        datasets: this.datasets[idx]
      };
    }
    this.setOptions();
  }
  setOptions() {
    for (let idx = 0; idx < 4; idx++) {
      const options = JSON.parse(JSON.stringify(this.optionsDefault));
      switch (idx) {
        case 0: {
          this.options.push(options);
          break;
        }
        case 1: {
          options.scales.y.min = -9;
          options.scales.y.max = 39;
          options.elements.line.tension = 0;
          this.options.push(options);
          break;
        }
        case 2: {
          options.scales.x = { display: false };
          options.scales.y = { display: false };
          options.elements.line.borderWidth = 2;
          options.elements.point.radius = 0;
          this.options.push(options);
          break;
        }
        case 3: {
          options.scales.x.grid = { display: false, drawTicks: false };
          options.scales.x.grid = { display: false, drawTicks: false, drawBorder: false };
          options.scales.y.min = void 0;
          options.scales.y.max = void 0;
          options.elements = {};
          this.options.push(options);
          break;
        }
      }
    }
  }
};
_WidgetsDropdownComponent.\u0275fac = function WidgetsDropdownComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetsDropdownComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_WidgetsDropdownComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WidgetsDropdownComponent, selectors: [["app-widgets-dropdown"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [[1, "g-4"], ["sm", "6", "xl", "3"], ["color", "primary", 3, "title"], ["cTemplateId", "widgetValueTemplate"], ["cTemplateId", "widgetActionTemplate"], ["cTemplateId", "widgetChartTemplate"], ["color", "info", 3, "title"], ["color", "warning", 3, "title"], ["color", "danger", 3, "title"], [1, "fw-normal", 2, "font-size", "12px"], ["cIcon", "", "name", "cilArrowBottom", "size", "sm"], ["alignment", "end", "variant", "btn-group"], ["cButton", "", "cDropdownToggle", "", "color", "transparent", "aria-label", "Open dropdown", 1, "p-0", "text-white", 3, "caret"], ["cIcon", "", "name", "cilOptions"], ["cDropdownMenu", ""], ["cDropdownItem", "", 3, "routerLink"], ["cDropdownDivider", ""], ["cDropdownItem", ""], ["height", "70", 1, "mt-3", "mx-3", 3, "data", "options", "type"], ["cIcon", "", "name", "cilArrowTop", "size", "sm"], ["cDropdownItem", "", 3, "disabled", "routerLink"], ["height", "70", "type", "line", 1, "mt-3", "mx-3", 3, "data", "options"], ["height", "70", "type", "line", 1, "mt-3", 3, "data", "options"], ["height", "70", "type", "bar", 1, "mt-3", "mx-3", 3, "data", "options"]], template: function WidgetsDropdownComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row", 0)(1, "c-col", 1)(2, "c-widget-stat-a", 2);
    \u0275\u0275template(3, WidgetsDropdownComponent_ng_template_3_Template, 6, 0, "ng-template", 3)(4, WidgetsDropdownComponent_ng_template_4_Template, 18, 7, "ng-template", 4)(5, WidgetsDropdownComponent_ng_template_5_Template, 1, 3, "ng-template", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-col", 1)(7, "c-widget-stat-a", 6);
    \u0275\u0275template(8, WidgetsDropdownComponent_ng_template_8_Template, 9, 0, "ng-template", 3)(9, WidgetsDropdownComponent_ng_template_9_Template, 16, 10, "ng-template", 4)(10, WidgetsDropdownComponent_ng_template_10_Template, 1, 2, "ng-template", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "c-col", 1)(12, "c-widget-stat-a", 7);
    \u0275\u0275template(13, WidgetsDropdownComponent_ng_template_13_Template, 9, 0, "ng-template", 3)(14, WidgetsDropdownComponent_ng_template_14_Template, 16, 10, "ng-template", 4)(15, WidgetsDropdownComponent_ng_template_15_Template, 1, 2, "ng-template", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "c-col", 1)(17, "c-widget-stat-a", 8);
    \u0275\u0275template(18, WidgetsDropdownComponent_ng_template_18_Template, 9, 0, "ng-template", 3)(19, WidgetsDropdownComponent_ng_template_19_Template, 16, 10, "ng-template", 4)(20, WidgetsDropdownComponent_ng_template_20_Template, 1, 2, "ng-template", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Users");
    \u0275\u0275advance(5);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(5);
    \u0275\u0275property("title", "Conversion Rate");
    \u0275\u0275advance(5);
    \u0275\u0275property("title", "Sessions");
  }
}, dependencies: [RowComponent, ColComponent, WidgetStatAComponent, TemplateIdDirective, IconDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, RouterLink, DropdownDividerDirective, ChartjsComponent] });
var WidgetsDropdownComponent = _WidgetsDropdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WidgetsDropdownComponent, { className: "WidgetsDropdownComponent", filePath: "src\\app\\documentacion\\widgets\\widgets-dropdown\\widgets-dropdown.component.ts", lineNumber: 24 });
})();
var _ChartSample = class _ChartSample {
  constructor() {
    this.colors = {
      label: "My dataset",
      backgroundColor: "rgba(77,189,116,.2)",
      borderColor: "#4dbd74",
      pointHoverBackgroundColor: "#fff"
    };
    this.labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    this.data = {
      labels: this.labels,
      datasets: [__spreadProps(__spreadValues({
        data: [65, 59, 84, 84, 51, 55, 40]
      }, this.colors), {
        fill: { value: 65 }
      })]
    };
    this.options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      elements: {
        line: {
          tension: 0.4
        }
      }
    };
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const data = () => {
        return __spreadProps(__spreadValues({}, this.data), {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [__spreadProps(__spreadValues({}, this.data.datasets[0]), {
            data: [42, 88, 42, 66, 77],
            fill: { value: 55 }
          }), __spreadProps(__spreadValues({}, this.data.datasets[0]), { borderColor: "#ffbd47", data: [88, 42, 66, 77, 42] })]
        });
      };
      const newLabels = ["Jan", "Feb", "Mar", "Apr", "May"];
      const newData = [42, 88, 42, 66, 77];
      let { datasets, labels } = __spreadValues({}, this.data);
      const before = this.chartComponent?.chart?.data.datasets.length;
      console.log("before", before);
      this.data = __spreadProps(__spreadValues({}, this.data), {
        datasets: [__spreadProps(__spreadValues({}, this.data.datasets[0]), { data: newData }), __spreadProps(__spreadValues({}, this.data.datasets[0]), {
          borderColor: "#ffbd47",
          data: [88, 42, 66, 77, 42]
        })],
        labels: newLabels
      });
      setTimeout(() => {
        const after = this.chartComponent?.chart?.data.datasets.length;
        console.log("after", after);
      });
    }, 5e3);
  }
};
_ChartSample.\u0275fac = function ChartSample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChartSample)();
};
_ChartSample.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartSample, selectors: [["app-chart-sample"]], viewQuery: function ChartSample_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartComponent = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["chart", ""], ["type", "line", "width", "300", 3, "data", "options"]], template: function ChartSample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-chart", 1, 0);
  }
  if (rf & 2) {
    \u0275\u0275property("data", ctx.data)("options", ctx.options);
  }
}, dependencies: [ChartjsComponent], encapsulation: 2 });
var ChartSample = _ChartSample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartSample, { className: "ChartSample", filePath: "src\\app\\documentacion\\widgets\\widgets-dropdown\\widgets-dropdown.component.ts", lineNumber: 188 });
})();

export {
  WidgetsBrandComponent,
  WidgetsDropdownComponent
};
//# sourceMappingURL=chunk-HEWSB7TJ.js.map
