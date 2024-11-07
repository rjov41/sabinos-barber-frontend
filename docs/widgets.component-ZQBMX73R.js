import {
  WidgetsBrandComponent,
  WidgetsDropdownComponent
} from "./chunk-HMEKFVQI.js";
import {
  ChartjsComponent
} from "./chunk-SKJ6WEKW.js";
import {
  getStyle
} from "./chunk-OOW7M2IT.js";
import {
  DocsExampleComponent
} from "./chunk-J6J7THO6.js";
import {
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  CardHeaderComponent,
  ColComponent,
  IconDirective,
  ProgressComponent,
  RowComponent,
  TemplateIdDirective,
  WidgetStatBComponent,
  WidgetStatCComponent,
  WidgetStatEComponent,
  WidgetStatFComponent
} from "./chunk-JAOOB3SV.js";
import {
  ChangeDetectorRef,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-TU2APFZU.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/widgets/widgets-e/widgets-e.component.ts
var _WidgetsEComponent = class _WidgetsEComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.datasets = [];
    this.labels = [];
    this.data = [];
    this.barOptions = {
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
    this.lineOptions = {
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0.4
        },
        point: {
          radius: 0
        }
      },
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
    this.prepareLabels();
    this.prepareDatasets();
    this.prepareData();
  }
  get random() {
    const min = 40, max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  get randomData() {
    const data = [];
    for (let i = 0; i < 15; i++) {
      data.push(this.random);
    }
    return data;
  }
  get baseDatasets() {
    return [
      {
        data: this.randomData,
        barThickness: "flex",
        borderColor: "transparent",
        backgroundColor: "transparent",
        pointBackgroundColor: "transparent",
        pointHoverBorderColor: "transparent",
        borderWidth: 1
      }
    ];
  }
  ngAfterContentInit() {
    this.changeDetectorRef.detectChanges();
  }
  prepareData() {
    for (let i = 0; i < 6; i++) {
      this.data.push({ labels: this.labels, datasets: this.datasets[i] });
    }
  }
  prepareLabels() {
    for (let i = 0; i < 15; i++) {
      this.labels.push(this.getDayName(i));
    }
  }
  prepareDatasets() {
    const params = [
      { backgroundColor: "danger" },
      { backgroundColor: "primary" },
      { backgroundColor: "secondary" },
      { borderColor: "danger", borderWidth: 2 },
      { borderColor: "success", borderWidth: 2 },
      { borderColor: "info", borderWidth: 2 }
    ];
    for (let i = 0; i < 6; i++) {
      this.datasets.push(this.getDataset(params[i]));
    }
  }
  getDataset({ backgroundColor = "transparent", borderColor = "transparent", borderWidth = 1 }) {
    const dataset = this.baseDatasets;
    dataset[0].backgroundColor = backgroundColor !== "transparent" ? getStyle(`--cui-${backgroundColor}`) : backgroundColor;
    dataset[0].borderColor = borderColor !== "transparent" ? getStyle(`--cui-${borderColor}`) : borderColor;
    dataset[0].pointBackgroundColor = getStyle(`--cui-${borderColor}`);
    dataset[0].borderWidth = borderWidth;
    return dataset;
  }
  getDayName(shift = 0) {
    const locale = navigator.language ?? navigator.userLanguage ?? navigator.systemLanguage ?? navigator.browserLanguage ?? "en-US";
    const baseDate = new Date(Date.UTC(2e3, 1, 0));
    baseDate.setDate(baseDate.getDate() + shift);
    return baseDate.toLocaleDateString(locale, { weekday: "short" });
  }
};
_WidgetsEComponent.\u0275fac = function WidgetsEComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetsEComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_WidgetsEComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WidgetsEComponent, selectors: [["app-widgets-e"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 24, consts: [[1, "g-4"], ["xl", "2", "lg", "4", "sm", "6"], [3, "title", "value"], ["height", "40", "width", "80", 1, "mx-auto", 3, "data", "options"], ["height", "40", "type", "line", "width", "80", 1, "mx-auto", 3, "data", "options"]], template: function WidgetsEComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row", 0)(1, "c-col", 1)(2, "c-widget-stat-e", 2);
    \u0275\u0275element(3, "c-chart", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "c-col", 1)(5, "c-widget-stat-e", 2);
    \u0275\u0275element(6, "c-chart", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-col", 1)(8, "c-widget-stat-e", 2);
    \u0275\u0275element(9, "c-chart", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "c-col", 1)(11, "c-widget-stat-e", 2);
    \u0275\u0275element(12, "c-chart", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "c-col", 1)(14, "c-widget-stat-e", 2);
    \u0275\u0275element(15, "c-chart", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "c-col", 1)(17, "c-widget-stat-e", 2);
    \u0275\u0275element(18, "c-chart", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "title")("value", "1,123");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data[0])("options", ctx.barOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "title")("value", "1,123");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data[1])("options", ctx.barOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "title")("value", "1,123");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data[2])("options", ctx.barOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "title")("value", "1,123");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data[3])("options", ctx.lineOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "title")("value", "1,123");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data[4])("options", ctx.lineOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "title")("value", "1,123");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.data[5])("options", ctx.lineOptions);
  }
}, dependencies: [RowComponent, ColComponent, WidgetStatEComponent, ChartjsComponent] });
var WidgetsEComponent = _WidgetsEComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WidgetsEComponent, { className: "WidgetsEComponent", filePath: "src\\app\\documentacion\\widgets\\widgets-e\\widgets-e.component.ts", lineNumber: 14 });
})();

// src/app/documentacion/widgets/widgets/widgets.component.ts
function WidgetsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 51);
  }
}
function WidgetsComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 52);
  }
}
function WidgetsComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 53);
  }
}
function WidgetsComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 54);
  }
}
function WidgetsComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 51);
  }
}
function WidgetsComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275text(1, " View more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 56);
    \u0275\u0275elementEnd();
  }
}
function WidgetsComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 52);
  }
}
function WidgetsComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275text(1, " View more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 56);
    \u0275\u0275elementEnd();
  }
}
function WidgetsComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 53);
  }
}
function WidgetsComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275text(1, " View more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 56);
    \u0275\u0275elementEnd();
  }
}
function WidgetsComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 54);
  }
}
function WidgetsComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275text(1, " View more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 56);
    \u0275\u0275elementEnd();
  }
}
function WidgetsComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 51);
  }
}
function WidgetsComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 52);
  }
}
function WidgetsComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 53);
  }
}
function WidgetsComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 57);
  }
}
function WidgetsComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 58);
  }
}
function WidgetsComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 59);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 60);
  }
}
function WidgetsComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 61);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 62);
  }
}
function WidgetsComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 63);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 64);
  }
}
function WidgetsComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 65);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 66);
  }
}
function WidgetsComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 67);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 58);
  }
}
function WidgetsComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 59);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 60);
  }
}
function WidgetsComponent_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 61);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 62);
  }
}
function WidgetsComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 63);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 64);
  }
}
function WidgetsComponent_ng_template_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 65);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 66);
  }
}
function WidgetsComponent_ng_template_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 67);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 68);
  }
}
function WidgetsComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 69);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 58);
  }
}
function WidgetsComponent_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 70);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 60);
  }
}
function WidgetsComponent_ng_template_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 70);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 62);
  }
}
function WidgetsComponent_ng_template_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 70);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 64);
  }
}
function WidgetsComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 70);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 66);
  }
}
function WidgetsComponent_ng_template_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 70);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
function WidgetsComponent_ng_template_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 68);
  }
}
function WidgetsComponent_ng_template_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-progress", 70);
  }
  if (rf & 2) {
    \u0275\u0275property("value", 75);
  }
}
var _WidgetsComponent = class _WidgetsComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }
  ngAfterContentInit() {
    this.changeDetectorRef.detectChanges();
  }
};
_WidgetsComponent.\u0275fac = function WidgetsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WidgetsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_WidgetsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WidgetsComponent, selectors: [["app-widgets"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 159, vars: 50, consts: [["widgetStatB1inv", "cWidgetStatB"], ["widgetStatB2inv", "cWidgetStatB"], ["widgetStatB3inv", "cWidgetStatB"], ["widgetStatB4inv", "cWidgetStatB"], [1, "mb-4"], ["href", "components/widgets/#cwidgetstatsa"], ["href", "components/widgets/#cwidgetstatsb"], [1, "g-4"], ["xl", "3", "md", "6", "sm", "6"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "89.9%", 3, "title"], ["thin", "", "color", "success", 1, "my-2", 3, "value"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "12.124", 3, "title"], ["thin", "", "color", "info", 1, "my-2", 3, "value"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "$98,111.00", 3, "title"], ["thin", "", "color", "warning", 1, "my-2", 3, "value"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "2 TB", 3, "title"], ["thin", "", "color", "primary", 1, "my-2", 3, "value"], ["color", "success", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "89.9%", 3, "title"], ["thin", "", 1, "my-2", 3, "white", "value"], ["color", "info", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "12.124", 3, "title"], ["color", "warning", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "$98,111.00", 3, "title"], ["color", "primary", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "2 TB", 3, "title"], ["href", "components/widgets/#cwidgetstatse"], ["href", "components/widgets/#cwidgetstatsf"], ["color", "primary", "padding", "", "value", "$1,999.50", 3, "title"], ["cTemplateId", "widgetIconTemplate"], ["color", "info", "padding", "", "value", "$1,999.50", 3, "title"], ["color", "warning", "padding", "", "value", "$1,999.50", 3, "title"], ["color", "danger", "padding", "", "value", "$1,999.50", 3, "title"], ["cTemplateId", "widgetFooterTemplate"], ["color", "primary", "value", "$1,999.50", 3, "title"], ["color", "info", "value", "$1,999.50", 3, "title"], ["color", "warning", "value", "$1,999.50", 3, "title"], ["color", "danger", "value", "$1,999.50", 3, "title"], ["href", "components/widgets/#cwidgetstatsd"], [3, "withCharts"], ["href", "components/widgets/#cwidgetstatsc"], ["value", "87,500", 3, "title"], ["cTemplateId", "widgetProgressTemplate"], ["value", "385", 3, "title"], ["value", "1238", 3, "title"], ["value", "28%", 3, "title"], ["value", "5:34:11", 3, "title"], ["xl", "2", "lg", "4", "sm", "6"], ["value", "972", 3, "title"], ["color", "info", "inverse", "", "value", "87,500", 3, "title"], ["color", "success", "inverse", "", "value", "385", 3, "title"], ["color", "warning", "inverse", "", "value", "1238", 3, "title"], ["color", "primary", "inverse", "", "value", "28%", 3, "title"], ["color", "danger", "inverse", "", "value", "5:34:11", 3, "title"], ["color", "dark", "inverse", "", "value", "972", 3, "title"], ["cIcon", "", "name", "cilSettings", "size", "xl", "width", "24"], ["cIcon", "", "name", "cilUser", "size", "xl", "width", "24"], ["cIcon", "", "name", "cilMoon", "size", "xl", "width", "24"], ["cIcon", "", "name", "cilBell", "size", "xl", "width", "24"], ["href", "https://coreui.io/", "rel", "noopener norefferer", "target", "_blank", 1, "font-weight-bold", "font-xs", "text-body-secondary"], ["cIcon", "", "name", "cilArrowRight", "width", "16", 1, "float-end"], ["cIcon", "", "name", "cilBell", "size", "xl", "width", "24", 1, "rounded-5"], ["cIcon", "", "height", "36", "name", "cilPeople"], ["thin", "", "color", "info", 1, "mt-3", "mb-0", 3, "value"], ["cIcon", "", "height", "36", "name", "cilUserFollow"], ["thin", "", "color", "success", 1, "mt-3", "mb-0", 3, "value"], ["cIcon", "", "height", "36", "name", "cilBasket"], ["thin", "", "color", "warning", 1, "mt-3", "mb-0", 3, "value"], ["cIcon", "", "height", "36", "name", "cilChartPie"], ["thin", "", "color", "primary", 1, "mt-3", "mb-0", 3, "value"], ["cIcon", "", "height", "36", "name", "cilSpeedometer"], ["thin", "", "color", "danger", 1, "mt-3", "mb-0", 3, "value"], ["cIcon", "", "height", "36", "name", "cilSpeech"], ["thin", "", "color", "dark", 1, "mt-3", "mb-0", 3, "value"], ["thin", "", "white", "", 1, "mt-3", "mb-0", 3, "value"]], template: function WidgetsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-card", 4)(1, "c-card-header");
    \u0275\u0275text(2, "Widgets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-card-body")(4, "app-docs-example", 5);
    \u0275\u0275element(5, "app-widgets-dropdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-docs-example", 6)(7, "c-row", 7)(8, "c-col", 8)(9, "c-widget-stat-b", 9);
    \u0275\u0275element(10, "c-progress", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "c-col", 8)(12, "c-widget-stat-b", 11);
    \u0275\u0275element(13, "c-progress", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "c-col", 8)(15, "c-widget-stat-b", 13);
    \u0275\u0275element(16, "c-progress", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "c-col", 8)(18, "c-widget-stat-b", 15);
    \u0275\u0275element(19, "c-progress", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "app-docs-example", 6)(21, "c-row", 7)(22, "c-col", 8)(23, "c-widget-stat-b", 17, 0);
    \u0275\u0275element(25, "c-progress", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "c-col", 8)(27, "c-widget-stat-b", 19, 1);
    \u0275\u0275element(29, "c-progress", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "c-col", 8)(31, "c-widget-stat-b", 20, 2);
    \u0275\u0275element(33, "c-progress", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "c-col", 8)(35, "c-widget-stat-b", 21, 3);
    \u0275\u0275element(37, "c-progress", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "app-docs-example", 22);
    \u0275\u0275element(39, "app-widgets-e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "app-docs-example", 23)(41, "c-row", 7)(42, "c-col", 8)(43, "c-widget-stat-f", 24);
    \u0275\u0275template(44, WidgetsComponent_ng_template_44_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "c-col", 8)(46, "c-widget-stat-f", 26);
    \u0275\u0275template(47, WidgetsComponent_ng_template_47_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "c-col", 8)(49, "c-widget-stat-f", 27);
    \u0275\u0275template(50, WidgetsComponent_ng_template_50_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "c-col", 8)(52, "c-widget-stat-f", 28);
    \u0275\u0275template(53, WidgetsComponent_ng_template_53_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "app-docs-example", 23)(55, "c-row", 7)(56, "c-col", 8)(57, "c-widget-stat-f", 24);
    \u0275\u0275template(58, WidgetsComponent_ng_template_58_Template, 1, 0, "ng-template", 25)(59, WidgetsComponent_ng_template_59_Template, 3, 0, "ng-template", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "c-col", 8)(61, "c-widget-stat-f", 26);
    \u0275\u0275template(62, WidgetsComponent_ng_template_62_Template, 1, 0, "ng-template", 25)(63, WidgetsComponent_ng_template_63_Template, 3, 0, "ng-template", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "c-col", 8)(65, "c-widget-stat-f", 27);
    \u0275\u0275template(66, WidgetsComponent_ng_template_66_Template, 1, 0, "ng-template", 25)(67, WidgetsComponent_ng_template_67_Template, 3, 0, "ng-template", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "c-col", 8)(69, "c-widget-stat-f", 28);
    \u0275\u0275template(70, WidgetsComponent_ng_template_70_Template, 1, 0, "ng-template", 25)(71, WidgetsComponent_ng_template_71_Template, 3, 0, "ng-template", 29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "app-docs-example", 23)(73, "c-row", 7)(74, "c-col", 8)(75, "c-widget-stat-f", 30);
    \u0275\u0275template(76, WidgetsComponent_ng_template_76_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "c-col", 8)(78, "c-widget-stat-f", 31);
    \u0275\u0275template(79, WidgetsComponent_ng_template_79_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "c-col", 8)(81, "c-widget-stat-f", 32);
    \u0275\u0275template(82, WidgetsComponent_ng_template_82_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "c-col", 8)(84, "c-widget-stat-f", 33);
    \u0275\u0275template(85, WidgetsComponent_ng_template_85_Template, 1, 0, "ng-template", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "app-docs-example", 34);
    \u0275\u0275element(87, "app-widgets-brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "app-docs-example", 34);
    \u0275\u0275element(89, "app-widgets-brand", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "app-docs-example", 36)(91, "c-card-group", 4)(92, "c-widget-stat-c", 37);
    \u0275\u0275template(93, WidgetsComponent_ng_template_93_Template, 1, 0, "ng-template", 25)(94, WidgetsComponent_ng_template_94_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "c-widget-stat-c", 39);
    \u0275\u0275template(96, WidgetsComponent_ng_template_96_Template, 1, 0, "ng-template", 25)(97, WidgetsComponent_ng_template_97_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "c-widget-stat-c", 40);
    \u0275\u0275template(99, WidgetsComponent_ng_template_99_Template, 1, 0, "ng-template", 25)(100, WidgetsComponent_ng_template_100_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "c-widget-stat-c", 41);
    \u0275\u0275template(102, WidgetsComponent_ng_template_102_Template, 1, 0, "ng-template", 25)(103, WidgetsComponent_ng_template_103_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "c-widget-stat-c", 42);
    \u0275\u0275template(105, WidgetsComponent_ng_template_105_Template, 1, 0, "ng-template", 25)(106, WidgetsComponent_ng_template_106_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "app-docs-example", 36)(108, "c-row", 7)(109, "c-col", 43)(110, "c-widget-stat-c", 37);
    \u0275\u0275template(111, WidgetsComponent_ng_template_111_Template, 1, 0, "ng-template", 25)(112, WidgetsComponent_ng_template_112_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "c-col", 43)(114, "c-widget-stat-c", 39);
    \u0275\u0275template(115, WidgetsComponent_ng_template_115_Template, 1, 0, "ng-template", 25)(116, WidgetsComponent_ng_template_116_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "c-col", 43)(118, "c-widget-stat-c", 40);
    \u0275\u0275template(119, WidgetsComponent_ng_template_119_Template, 1, 0, "ng-template", 25)(120, WidgetsComponent_ng_template_120_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "c-col", 43)(122, "c-widget-stat-c", 41);
    \u0275\u0275template(123, WidgetsComponent_ng_template_123_Template, 1, 0, "ng-template", 25)(124, WidgetsComponent_ng_template_124_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "c-col", 43)(126, "c-widget-stat-c", 42);
    \u0275\u0275template(127, WidgetsComponent_ng_template_127_Template, 1, 0, "ng-template", 25)(128, WidgetsComponent_ng_template_128_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "c-col", 43)(130, "c-widget-stat-c", 44);
    \u0275\u0275template(131, WidgetsComponent_ng_template_131_Template, 1, 0, "ng-template", 25)(132, WidgetsComponent_ng_template_132_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(133, "app-docs-example", 36)(134, "c-row", 7)(135, "c-col", 43)(136, "c-widget-stat-c", 45);
    \u0275\u0275template(137, WidgetsComponent_ng_template_137_Template, 1, 0, "ng-template", 25)(138, WidgetsComponent_ng_template_138_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "c-col", 43)(140, "c-widget-stat-c", 46);
    \u0275\u0275template(141, WidgetsComponent_ng_template_141_Template, 1, 0, "ng-template", 25)(142, WidgetsComponent_ng_template_142_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "c-col", 43)(144, "c-widget-stat-c", 47);
    \u0275\u0275template(145, WidgetsComponent_ng_template_145_Template, 1, 0, "ng-template", 25)(146, WidgetsComponent_ng_template_146_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "c-col", 43)(148, "c-widget-stat-c", 48);
    \u0275\u0275template(149, WidgetsComponent_ng_template_149_Template, 1, 0, "ng-template", 25)(150, WidgetsComponent_ng_template_150_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "c-col", 43)(152, "c-widget-stat-c", 49);
    \u0275\u0275template(153, WidgetsComponent_ng_template_153_Template, 1, 0, "ng-template", 25)(154, WidgetsComponent_ng_template_154_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "c-col", 43)(156, "c-widget-stat-c", 50);
    \u0275\u0275template(157, WidgetsComponent_ng_template_157_Template, 1, 0, "ng-template", 25)(158, WidgetsComponent_ng_template_158_Template, 1, 1, "ng-template", 38);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const widgetStatB1inv_r1 = \u0275\u0275reference(24);
    const widgetStatB2inv_r2 = \u0275\u0275reference(28);
    const widgetStatB3inv_r3 = \u0275\u0275reference(32);
    const widgetStatB4inv_r4 = \u0275\u0275reference(36);
    \u0275\u0275advance(9);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance();
    \u0275\u0275property("value", 89.9);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance();
    \u0275\u0275property("value", 89.9);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance();
    \u0275\u0275property("value", 89.9);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance();
    \u0275\u0275property("value", 89.9);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance(2);
    \u0275\u0275property("white", widgetStatB1inv_r1.inverse())("value", 89.9);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance(2);
    \u0275\u0275property("white", widgetStatB2inv_r2.inverse())("value", 89.9);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance(2);
    \u0275\u0275property("white", widgetStatB3inv_r3.inverse())("value", 89.9);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Widget title");
    \u0275\u0275advance(2);
    \u0275\u0275property("white", widgetStatB4inv_r4.inverse())("value", 89.9);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(5);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(6);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Income");
    \u0275\u0275advance(5);
    \u0275\u0275property("withCharts", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Visitors");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "New Clients");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Products sold");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Returning Visitors");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Avg. Time");
    \u0275\u0275advance(6);
    \u0275\u0275property("title", "Visitors");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "New Clients");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Products sold");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Returning Visitors");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Avg. Time");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Comments");
    \u0275\u0275advance(6);
    \u0275\u0275property("title", "Visitors");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "New Clients");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Products sold");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Returning Visitors");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Avg. Time");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "Comments");
  }
}, dependencies: [CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, WidgetsDropdownComponent, RowComponent, ColComponent, WidgetStatBComponent, ProgressComponent, WidgetsEComponent, WidgetStatFComponent, TemplateIdDirective, IconDirective, WidgetsBrandComponent, CardGroupComponent, WidgetStatCComponent] });
var WidgetsComponent = _WidgetsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WidgetsComponent, { className: "WidgetsComponent", filePath: "src\\app\\documentacion\\widgets\\widgets\\widgets.component.ts", lineNumber: 17 });
})();
export {
  WidgetsComponent
};
//# sourceMappingURL=widgets.component-ZQBMX73R.js.map
