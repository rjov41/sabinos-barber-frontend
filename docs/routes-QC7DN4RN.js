import {
  ChartjsComponent
} from "./chunk-SKJ6WEKW.js";
import {
  DocsCalloutComponent
} from "./chunk-R3RM7AC5.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
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
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/charts/charts.component.ts
var _ChartsComponent = class _ChartsComponent {
  constructor() {
    this.options = {
      maintainAspectRatio: false
    };
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.chartBarData = {
      labels: [...this.months].slice(0, 7),
      datasets: [
        {
          label: "GitHub Commits",
          backgroundColor: "#f87979",
          data: [40, 20, 12, 39, 17, 42, 79]
        }
      ]
    };
    this.chartLineData = {
      labels: [...this.months].slice(0, 7),
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "rgba(220, 220, 220, 1)",
          pointBackgroundColor: "rgba(220, 220, 220, 1)",
          pointBorderColor: "#fff",
          data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(151, 187, 205, 0.2)",
          borderColor: "rgba(151, 187, 205, 1)",
          pointBackgroundColor: "rgba(151, 187, 205, 1)",
          pointBorderColor: "#fff",
          data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
        }
      ]
    };
    this.chartLineOptions = {
      maintainAspectRatio: false
    };
    this.chartDoughnutData = {
      labels: ["VueJs", "EmberJs", "ReactJs", "Angular"],
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
          data: [40, 20, 80, 10]
        }
      ]
    };
    this.chartPieData = {
      labels: ["Red", "Green", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };
    this.chartPolarAreaData = {
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"]
        }
      ]
    };
    this.chartRadarData = {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "2020",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "2021",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
        }
      ]
    };
  }
  // chartRadarOptions = {
  //   aspectRatio: 1.5,
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };
  get randomData() {
    return Math.round(Math.random() * 100);
  }
};
_ChartsComponent.\u0275fac = function ChartsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChartsComponent)();
};
_ChartsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartsComponent, selectors: [["app-charts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 12, consts: [["xs", "12"], ["href", "charts"], ["xs", "12", "lg", "6"], [1, "mb-4"], ["type", "bar", 3, "data", "options"], ["type", "line", 3, "data", "options"], ["type", "doughnut", 3, "data", "options"], ["type", "pie", 3, "data", "options"], ["type", "polarArea", 3, "data", "options"], ["type", "radar", 3, "data", "options"]], template: function ChartsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "app-docs-callout", 1);
    \u0275\u0275text(3, " CoreUI Angular wrapper component for Chart.js 4.4, the most popular charting library. ");
    \u0275\u0275element(4, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "c-col", 2)(6, "c-card", 3)(7, "c-card-header");
    \u0275\u0275text(8, " Bar Chart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "c-card-body");
    \u0275\u0275element(10, "c-chart", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "c-col", 2)(12, "c-card", 3)(13, "c-card-header");
    \u0275\u0275text(14, " Line Chart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "c-card-body");
    \u0275\u0275element(16, "c-chart", 5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "c-row")(18, "c-col", 2)(19, "c-card", 3)(20, "c-card-header");
    \u0275\u0275text(21, " Doughnut Chart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "c-card-body");
    \u0275\u0275element(23, "c-chart", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "c-col", 2)(25, "c-card", 3)(26, "c-card-header");
    \u0275\u0275text(27, " Pie Chart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "c-card-body");
    \u0275\u0275element(29, "c-chart", 7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "c-row")(31, "c-col", 2)(32, "c-card", 3)(33, "c-card-header");
    \u0275\u0275text(34, " Polar Area Chart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "c-card-body");
    \u0275\u0275element(36, "c-chart", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "c-col", 2)(38, "c-card", 3)(39, "c-card-header");
    \u0275\u0275text(40, " Radar Chart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "c-card-body");
    \u0275\u0275element(42, "c-chart", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("data", ctx.chartBarData)("options", ctx.options);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx.chartLineData)("options", ctx.options);
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx.chartDoughnutData)("options", ctx.options);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx.chartPieData)("options", ctx.options);
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx.chartPolarAreaData)("options", ctx.options);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx.chartRadarData)("options", ctx.options);
  }
}, dependencies: [RowComponent, ColComponent, DocsCalloutComponent, CardComponent, CardHeaderComponent, CardBodyComponent, ChartjsComponent] });
var ChartsComponent = _ChartsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartsComponent, { className: "ChartsComponent", filePath: "src\\app\\documentacion\\charts\\charts.component.ts", lineNumber: 14 });
})();

// src/app/documentacion/charts/routes.ts
var routes = [
  {
    path: "",
    component: ChartsComponent,
    data: {
      title: "Charts"
    }
  }
];
export {
  routes
};
//# sourceMappingURL=routes-QC7DN4RN.js.map
