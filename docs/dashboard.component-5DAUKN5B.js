import {
  WidgetsBrandComponent,
  WidgetsDropdownComponent
} from "./chunk-HEWSB7TJ.js";
import {
  ChartjsComponent
} from "./chunk-YQNXMK3O.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-F3KJ4UGH.js";
import {
  getStyle,
  hexToRgba
} from "./chunk-OOW7M2IT.js";
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  DOCUMENT,
  DestroyRef,
  FormCheckLabelDirective,
  GutterDirective,
  IconDirective,
  NgStyle,
  ProgressComponent,
  Renderer2,
  RowComponent,
  TableDirective,
  effect,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VGFF44UQ.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadValues
} from "./chunk-6WCCERUZ.js";

// src/app/documentacion/dashboard/dashboard-charts-data.ts
var _DashboardChartsData = class _DashboardChartsData {
  constructor() {
    this.mainChart = { type: "line" };
    this.initMainChart();
  }
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  initMainChart(period = "Month") {
    const brandSuccess = getStyle("--cui-success") ?? "#4dbd74";
    const brandInfo = getStyle("--cui-info") ?? "#20a8d8";
    const brandInfoBg = hexToRgba(getStyle("--cui-info") ?? "#20a8d8", 10);
    const brandDanger = getStyle("--cui-danger") ?? "#f86c6b";
    this.mainChart["elements"] = period === "Month" ? 12 : 27;
    this.mainChart["Data1"] = [];
    this.mainChart["Data2"] = [];
    this.mainChart["Data3"] = [];
    for (let i = 0; i <= this.mainChart["elements"]; i++) {
      this.mainChart["Data1"].push(this.random(50, 240));
      this.mainChart["Data2"].push(this.random(20, 160));
      this.mainChart["Data3"].push(65);
    }
    let labels = [];
    if (period === "Month") {
      labels = [
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
        "December"
      ];
    } else {
      const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];
      labels = week.concat(week, week, week);
    }
    const colors = [
      {
        // brandInfo
        backgroundColor: brandInfoBg,
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        fill: true
      },
      {
        // brandSuccess
        backgroundColor: "transparent",
        borderColor: brandSuccess || "#4dbd74",
        pointHoverBackgroundColor: "#fff"
      },
      {
        // brandDanger
        backgroundColor: "transparent",
        borderColor: brandDanger || "#f86c6b",
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5]
      }
    ];
    const datasets = [
      __spreadValues({
        data: this.mainChart["Data1"],
        label: "Current"
      }, colors[0]),
      __spreadValues({
        data: this.mainChart["Data2"],
        label: "Previous"
      }, colors[1]),
      __spreadValues({
        data: this.mainChart["Data3"],
        label: "BEP"
      }, colors[2])
    ];
    const plugins = {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          labelColor: (context) => ({ backgroundColor: context.dataset.borderColor })
        }
      }
    };
    const scales = this.getScales();
    const options = {
      maintainAspectRatio: false,
      plugins,
      scales,
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
      }
    };
    this.mainChart.type = "line";
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels
    };
  }
  getScales() {
    const colorBorderTranslucent = getStyle("--cui-border-color-translucent");
    const colorBody = getStyle("--cui-body-color");
    const scales = {
      x: {
        grid: {
          color: colorBorderTranslucent,
          drawOnChartArea: false
        },
        ticks: {
          color: colorBody
        }
      },
      y: {
        border: {
          color: colorBorderTranslucent
        },
        grid: {
          color: colorBorderTranslucent
        },
        max: 250,
        beginAtZero: true,
        ticks: {
          color: colorBody,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5)
        }
      }
    };
    return scales;
  }
};
_DashboardChartsData.\u0275fac = function DashboardChartsData_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardChartsData)();
};
_DashboardChartsData.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardChartsData, factory: _DashboardChartsData.\u0275fac, providedIn: "any" });
var DashboardChartsData = _DashboardChartsData;

// src/app/documentacion/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _c0 = () => ({ "marginTop.px": 40 });
function DashboardComponent_For_253_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275element(2, "c-avatar", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(10, "svg", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "td")(12, "div", 87)(13, "div", 88)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 89)(17, "small", 17);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(19, "c-progress", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(21, "svg", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "td")(23, "div", 3);
    \u0275\u0275text(24, "Last login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 92);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", user_r1.avatar);
    \u0275\u0275propertyInterpolate("status", user_r1.status);
    \u0275\u0275property("size", "md");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", user_r1.state, " | Registered: ", user_r1.registered, " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("id", user_r1.country + user_r1.name);
    \u0275\u0275propertyInterpolate1("name", "cif", user_r1.country, "");
    \u0275\u0275propertyInterpolate("title", user_r1.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", user_r1.usage, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r1.period, " ");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("color", user_r1.color);
    \u0275\u0275property("value", user_r1.usage);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("name", "cibCc", user_r1.payment, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r1.activity);
  }
}
var _destroyRef, _document, _renderer, _chartsData, _mainChartRefEffect;
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    __privateAdd(this, _destroyRef);
    __privateAdd(this, _document);
    __privateAdd(this, _renderer);
    __privateAdd(this, _chartsData);
    __privateAdd(this, _mainChartRefEffect);
    __privateSet(this, _destroyRef, inject(DestroyRef));
    __privateSet(this, _document, inject(DOCUMENT));
    __privateSet(this, _renderer, inject(Renderer2));
    __privateSet(this, _chartsData, inject(DashboardChartsData));
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
    this.mainChart = { type: "line" };
    this.mainChartRef = signal(void 0);
    __privateSet(this, _mainChartRefEffect, effect(() => {
      if (this.mainChartRef()) {
        this.setChartStyles();
      }
    }));
    this.chart = [];
    this.trafficRadioGroup = new FormGroup({
      trafficRadio: new FormControl("Month")
    });
  }
  ngOnInit() {
    this.initCharts();
    this.updateChartOnColorModeChange();
  }
  initCharts() {
    this.mainChart = __privateGet(this, _chartsData).mainChart;
  }
  setTrafficPeriod(value) {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    __privateGet(this, _chartsData).initMainChart(value);
    this.initCharts();
  }
  handleChartRef($chartRef) {
    if ($chartRef) {
      this.mainChartRef.set($chartRef);
    }
  }
  updateChartOnColorModeChange() {
    const unListen = __privateGet(this, _renderer).listen(__privateGet(this, _document).documentElement, "ColorSchemeChange", () => {
      this.setChartStyles();
    });
    __privateGet(this, _destroyRef).onDestroy(() => {
      unListen();
    });
  }
  setChartStyles() {
    if (this.mainChartRef()) {
      setTimeout(() => {
        const options = __spreadValues({}, this.mainChart.options);
        const scales = __privateGet(this, _chartsData).getScales();
        this.mainChartRef().options.scales = __spreadValues(__spreadValues({}, options.scales), scales);
        this.mainChartRef().update();
      });
    }
  }
};
_destroyRef = new WeakMap();
_document = new WeakMap();
_renderer = new WeakMap();
_chartsData = new WeakMap();
_mainChartRefEffect = new WeakMap();
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 254, vars: 17, consts: [[1, "my-4"], ["sm", "5"], ["id", "traffic", 1, "card-title", "mb-0"], [1, "small", "text-body-secondary"], ["sm", "7", 1, "d-none", "d-md-block"], ["cButton", "", "color", "primary", "aria-label", "Download", 1, "float-end"], ["cIcon", "", "name", "cilCloudDownload"], [3, "formGroup"], ["role", "group", 1, "float-end", "me-3"], ["formControlName", "trafficRadio", "type", "radio", "value", "Day", "id", "dayRadio", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "secondary", "variant", "outline", "for", "dayRadio", 3, "click"], ["formControlName", "trafficRadio", "type", "radio", "value", "Month", "id", "radioMonth", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "secondary", "variant", "outline", "for", "radioMonth", 3, "click"], ["formControlName", "trafficRadio", "type", "radio", "value", "Year", "id", "radioYear", 1, "btn-check"], ["cButton", "", "cFormCheckLabel", "", "color", "secondary", "variant", "outline", "for", "radioYear", 3, "click"], [3, "chartRef", "data", "height", "ngStyle", "options", "type"], [1, "text-center", "mb-2", 3, "xl", "lg", "sm", "xs", "gutter"], [1, "text-body-secondary"], ["thin", "", "color", "success", "value", "40", "aria-label", "User visits", 1, "mt-2"], [1, "fw-semibold", "text-truncate"], ["thin", "", "color", "info", "value", "20", "aria-label", "Unique users", 1, "mt-2"], ["thin", "", "color", "warning", "value", "60", "aria-label", "Page views", 1, "mt-2"], ["thin", "", "color", "danger", "value", "80", "aria-label", "New users", 1, "mt-2"], [1, "d-none", "d-xl-block"], ["thin", "", "value", "40", "aria-label", "Bounce rate", 1, "mt-2"], [3, "withCharts"], [1, "mt-4"], ["xs", ""], [1, "mb-4"], ["md", "6", "xl", "6", "xs", "12"], ["xs", "6"], [1, "border-start", "border-start-4", "border-start-info", "py-1", "px-3", "mb-3"], [1, "text-body-secondary", "text-truncate", "small"], [1, "fs-5", "fw-semibold"], [1, "border-start", "border-start-4", "border-start-danger", "py-1", "px-3", "mb-3"], [1, "mt-0"], [1, "progress-group", "mb-4"], [1, "progress-group-prepend"], [1, "text-body-secondary", "small"], [1, "progress-group-bars"], ["thin", "", "color", "info", "value", "34", "aria-label", "Monday new clients"], ["thin", "", "color", "danger", "value", "78", "aria-label", "Monday recurring clients"], ["thin", "", "color", "info", "value", "56", "aria-label", "Tuesday new clients"], ["thin", "", "color", "danger", "value", "94", "aria-label", "Tuesday recurring clients"], ["thin", "", "color", "info", "value", "12", "aria-label", "Wednesday new clients"], ["thin", "", "color", "danger", "value", "67", "aria-label", "Wednesday recurring clients"], ["thin", "", "color", "info", "value", "43", "aria-label", "Thursday new clients"], ["thin", "", "color", "danger", "value", "91", "aria-label", "Thursday recurring clients"], ["thin", "", "color", "info", "value", "22", "aria-label", "Friday new clients"], ["thin", "", "color", "danger", "value", "73", "aria-label", "Friday recurring clients"], ["thin", "", "color", "info", "value", "53", "aria-label", "Saturday new clients"], ["thin", "", "color", "danger", "value", "82", "aria-label", "Saturday recurring clients"], ["thin", "", "color", "info", "value", "9", "aria-label", "Sunday new clients"], ["thin", "", "color", "danger", "value", "69", "aria-label", "Sunday recurring clients"], [1, "legend", "text-center", "d-none", "d-md-block"], [1, "badge", "badge-pill", "badge-sm", "bg-info"], [1, "badge", "badge-pill", "badge-sm", "bg-danger"], [1, "border-start", "border-start-4", "border-start-warning", "py-1", "px-3", "mb-3"], [1, "border-start", "border-start-4", "border-start-success", "py-1", "px-3", "mb-3"], [1, "progress-group-header"], ["cIcon", "", "name", "cilUser", 1, "icon", "icon-lg", "me-2"], [1, "ms-auto", "font-semibold"], ["thin", "", "color", "warning", "value", "43", "aria-label", "Male users"], [1, "progress-group", "mb-5"], ["cIcon", "", "name", "cilUserFemale", 1, "icon", "icon-lg", "me-2"], ["thin", "", "color", "warning", "value", "37", "aria-label", "Feale users"], [1, "progress-group"], ["cIcon", "", "name", "cibGoogle", 1, "icon", "icon-lg", "me-2"], ["thin", "", "color", "success", "value", "56", "aria-label", "Organic search"], ["cIcon", "", "name", "cibFacebook", 1, "icon", "icon-lg", "me-2"], ["thin", "", "color", "success", "value", "15", "aria-label", "Facebook"], ["cIcon", "", "name", "cibTwitter", 1, "icon", "icon-lg", "me-2"], ["thin", "", "color", "success", "value", "11", "aria-label", "Twitter"], ["cIcon", "", "name", "cibLinkedin", 1, "icon", "icon-lg", "me-2"], ["thin", "", "color", "success", "value", "8", "aria-label", "LinkedIn"], [1, "divider", "d-flex", "justify-content-center"], ["cButton", "", "color", "transparent", "size", "sm", "type", "button", "aria-label", "Options", 1, "text-muted", "btn-link"], ["cIcon", "", "name", "cil-options"], ["align", "middle", "cTable", "", 1, "mb-0", "border", 3, "hover", "responsive", "striped"], [1, "text-nowrap", "text-truncate"], [1, "bg-body-tertiary", "text-center"], ["cIcon", "", "name", "cilPeople"], [1, "bg-body-tertiary"], [1, "text-center"], [3, "size", "src", "status"], [1, "small", "text-body-secondary", "text-nowrap"], ["cIcon", "", "size", "xl", 3, "id", "name", "title"], [1, "d-flex", "justify-content-between"], [1, "float-start"], [1, "float-end", "ms-1", "text-nowrap"], ["thin", "", "aria-label", "Usage", 3, "value", "color"], ["cIcon", "", "size", "xl", 3, "name"], [1, "fw-semibold", "text-nowrap"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-widgets-dropdown");
    \u0275\u0275elementStart(1, "c-card", 0)(2, "c-card-body")(3, "c-row")(4, "c-col", 1)(5, "h4", 2);
    \u0275\u0275text(6, "Traffic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275text(8, "January - December 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "c-col", 4)(10, "button", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(11, "svg", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "form", 7)(13, "c-button-group", 8);
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275elementStart(15, "label", 10);
    \u0275\u0275listener("click", function DashboardComponent_Template_label_click_15_listener() {
      return ctx.setTrafficPeriod("Day");
    });
    \u0275\u0275text(16, " Day ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 11);
    \u0275\u0275elementStart(18, "label", 12);
    \u0275\u0275listener("click", function DashboardComponent_Template_label_click_18_listener() {
      return ctx.setTrafficPeriod("Month");
    });
    \u0275\u0275text(19, " Month ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 13);
    \u0275\u0275elementStart(21, "label", 14);
    \u0275\u0275listener("click", function DashboardComponent_Template_label_click_21_listener() {
      return ctx.setTrafficPeriod("Year");
    });
    \u0275\u0275text(22, " Year ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "c-chart", 15);
    \u0275\u0275listener("chartRef", function DashboardComponent_Template_c_chart_chartRef_23_listener($event) {
      return ctx.handleChartRef($event);
    });
    \u0275\u0275text(24, " Main chart ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "c-card-footer")(26, "c-row", 16)(27, "c-col")(28, "div", 17);
    \u0275\u0275text(29, "Visits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "29.703 Users (40%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "c-progress", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "c-col")(34, "div", 17);
    \u0275\u0275text(35, "Unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 19);
    \u0275\u0275text(37, "24.093 Users (20%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "c-progress", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "c-col")(40, "div", 17);
    \u0275\u0275text(41, "Page views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 19);
    \u0275\u0275text(43, "78.706 Views (60%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "c-progress", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "c-col")(46, "div", 17);
    \u0275\u0275text(47, "New Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 19);
    \u0275\u0275text(49, "22.123 Users (80%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "c-progress", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "c-col", 23)(52, "div", 17);
    \u0275\u0275text(53, "Bounce Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 19);
    \u0275\u0275text(55, "Average Rate (40.15%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "c-progress", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(57, "app-widgets-brand", 25);
    \u0275\u0275elementStart(58, "c-row", 26)(59, "c-col", 27)(60, "c-card", 28)(61, "c-card-header");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "c-card-body")(64, "c-row")(65, "c-col", 29)(66, "c-row")(67, "c-col", 30)(68, "div", 31)(69, "div", 32);
    \u0275\u0275text(70, "New Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 33);
    \u0275\u0275text(72, "9,123");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "c-col", 30)(74, "div", 34)(75, "div", 32);
    \u0275\u0275text(76, " Recurring Clients ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 33);
    \u0275\u0275text(78, "22,643");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(79, "hr", 35);
    \u0275\u0275elementStart(80, "div", 36)(81, "div", 37)(82, "span", 38);
    \u0275\u0275text(83, "Monday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 39);
    \u0275\u0275element(85, "c-progress", 40)(86, "c-progress", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 36)(88, "div", 37)(89, "span", 38);
    \u0275\u0275text(90, "Tuesday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 39);
    \u0275\u0275element(92, "c-progress", 42)(93, "c-progress", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 36)(95, "div", 37)(96, "span", 38);
    \u0275\u0275text(97, "Wednesday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 39);
    \u0275\u0275element(99, "c-progress", 44)(100, "c-progress", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 36)(102, "div", 37)(103, "span", 38);
    \u0275\u0275text(104, "Thursday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 39);
    \u0275\u0275element(106, "c-progress", 46)(107, "c-progress", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 36)(109, "div", 37)(110, "span", 38);
    \u0275\u0275text(111, "Friday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 39);
    \u0275\u0275element(113, "c-progress", 48)(114, "c-progress", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 36)(116, "div", 37)(117, "span", 38);
    \u0275\u0275text(118, "Saturday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 39);
    \u0275\u0275element(120, "c-progress", 50)(121, "c-progress", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 36)(123, "div", 37)(124, "span", 38);
    \u0275\u0275text(125, "Sunday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 39);
    \u0275\u0275element(127, "c-progress", 52)(128, "c-progress", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 54);
    \u0275\u0275text(130, "\n              ");
    \u0275\u0275elementStart(131, "small");
    \u0275\u0275text(132, "\n                ");
    \u0275\u0275elementStart(133, "sup");
    \u0275\u0275text(134, "\n                  ");
    \u0275\u0275elementStart(135, "span", 55);
    \u0275\u0275text(136, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, "\n                ");
    \u0275\u0275elementStart(139, "span");
    \u0275\u0275text(140, "New clients");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, "\n                \xA0\xA0\n                ");
    \u0275\u0275elementStart(142, "sup");
    \u0275\u0275text(143, "\n                  ");
    \u0275\u0275elementStart(144, "span", 56);
    \u0275\u0275text(145, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(146, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147, "\n                ");
    \u0275\u0275elementStart(148, "span");
    \u0275\u0275text(149, "Recurring clients");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, "\n              ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, "\n            ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "c-col", 29)(153, "c-row")(154, "c-col", 30)(155, "div", 57)(156, "div", 32);
    \u0275\u0275text(157, "Page views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 33);
    \u0275\u0275text(159, "78,623");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(160, "c-col", 30)(161, "div", 58)(162, "div", 32);
    \u0275\u0275text(163, "Organic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "div", 33);
    \u0275\u0275text(165, "49,123");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(166, "hr", 35);
    \u0275\u0275elementStart(167, "div", 36)(168, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(169, "svg", 60);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(170, "span");
    \u0275\u0275text(171, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "span", 61);
    \u0275\u0275text(173, "43%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "div", 39);
    \u0275\u0275element(175, "c-progress", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "div", 63)(177, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(178, "svg", 64);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(179, "span");
    \u0275\u0275text(180, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "span", 61);
    \u0275\u0275text(182, "37%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "div", 39);
    \u0275\u0275element(184, "c-progress", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(185, "div", 66)(186, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(187, "svg", 67);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(188, "span");
    \u0275\u0275text(189, "Organic Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "span", 61);
    \u0275\u0275text(191, " 191,235 ");
    \u0275\u0275elementStart(192, "span", 38);
    \u0275\u0275text(193, "(56%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(194, "div", 39);
    \u0275\u0275element(195, "c-progress", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "div", 66)(197, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(198, "svg", 69);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(199, "span");
    \u0275\u0275text(200, "Facebook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "span", 61);
    \u0275\u0275text(202, " 51,223 ");
    \u0275\u0275elementStart(203, "span", 38);
    \u0275\u0275text(204, "(15%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(205, "div", 39);
    \u0275\u0275element(206, "c-progress", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(207, "div", 66)(208, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(209, "svg", 71);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(210, "span");
    \u0275\u0275text(211, "Twitter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "span", 61);
    \u0275\u0275text(213, " 37,564 ");
    \u0275\u0275elementStart(214, "span", 38);
    \u0275\u0275text(215, "(11%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(216, "div", 39);
    \u0275\u0275element(217, "c-progress", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(218, "div", 66)(219, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(220, "svg", 73);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(221, "span");
    \u0275\u0275text(222, "LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "span", 61);
    \u0275\u0275text(224, " 27,319 ");
    \u0275\u0275elementStart(225, "span", 38);
    \u0275\u0275text(226, "(8%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(227, "div", 39);
    \u0275\u0275element(228, "c-progress", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(229, "div", 75)(230, "button", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(231, "svg", 77);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(232, "c-row")(233, "c-col", 27)(234, "c-card", 28)(235, "c-card-body")(236, "table", 78)(237, "thead", 79)(238, "tr")(239, "th", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(240, "svg", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(241, "th", 82);
    \u0275\u0275text(242, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "th", 80);
    \u0275\u0275text(244, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(245, "th", 82);
    \u0275\u0275text(246, "Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(247, "th", 80);
    \u0275\u0275text(248, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "th", 82);
    \u0275\u0275text(250, "Activity");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(251, "tbody");
    \u0275\u0275repeaterCreate(252, DashboardComponent_For_253_Template, 27, 17, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx.trafficRadioGroup);
    \u0275\u0275advance(11);
    \u0275\u0275property("data", ctx.mainChart.data)("height", 300)("ngStyle", \u0275\u0275pureFunction0(16, _c0))("options", ctx.mainChart.options)("type", ctx.mainChart.type);
    \u0275\u0275advance(3);
    \u0275\u0275property("xl", 5)("lg", 4)("sm", 2)("xs", 1)("gutter", 4);
    \u0275\u0275advance(31);
    \u0275\u0275property("withCharts", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Traffic ", "&", " Sales");
    \u0275\u0275advance(174);
    \u0275\u0275property("hover", true)("responsive", true)("striped", true);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx.users);
  }
}, dependencies: [WidgetsDropdownComponent, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent], styles: ["\n\n[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: x-small;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\documentacion\\dashboard\\dashboard.component.ts", lineNumber: 49 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-5DAUKN5B.js.map
