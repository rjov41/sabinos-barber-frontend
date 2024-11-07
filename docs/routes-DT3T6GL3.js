import "./chunk-6WCCERUZ.js";

// src/app/documentacion/forms/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Forms"
    },
    children: [
      {
        path: "",
        redirectTo: "form-control",
        pathMatch: "full"
      },
      {
        path: "form-control",
        loadComponent: () => import("./form-controls.component-SY6EOXKN.js").then((m) => m.FormControlsComponent),
        data: {
          title: "Form Control"
        }
      },
      {
        path: "select",
        loadComponent: () => import("./select.component-GYD2CPBB.js").then((m) => m.SelectComponent),
        data: {
          title: "Select"
        }
      },
      {
        path: "checks-radios",
        loadComponent: () => import("./checks-radios.component-Y3TSX6UQ.js").then((m) => m.ChecksRadiosComponent),
        data: {
          title: "Checks & Radios"
        }
      },
      {
        path: "range",
        loadComponent: () => import("./ranges.component-T7RT7CLE.js").then((m) => m.RangesComponent),
        data: {
          title: "Range"
        }
      },
      {
        path: "input-group",
        loadComponent: () => import("./input-groups.component-7PZBUFVB.js").then((m) => m.InputGroupsComponent),
        data: {
          title: "Input Group"
        }
      },
      {
        path: "floating-labels",
        loadComponent: () => import("./floating-labels.component-JUPYZSTL.js").then((m) => m.FloatingLabelsComponent),
        data: {
          title: "Floating Labels"
        }
      },
      {
        path: "layout",
        loadComponent: () => import("./layout.component-RO2YZA5Q.js").then((m) => m.LayoutComponent),
        data: {
          title: "Layout"
        }
      },
      {
        path: "validation",
        loadComponent: () => import("./validation.component-NUQSR7M3.js").then((m) => m.ValidationComponent),
        data: {
          title: "Validation"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=routes-DT3T6GL3.js.map
