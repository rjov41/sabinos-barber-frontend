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
        loadComponent: () => import("./form-controls.component-FLVZUGDI.js").then((m) => m.FormControlsComponent),
        data: {
          title: "Form Control"
        }
      },
      {
        path: "select",
        loadComponent: () => import("./select.component-FTUJXSXY.js").then((m) => m.SelectComponent),
        data: {
          title: "Select"
        }
      },
      {
        path: "checks-radios",
        loadComponent: () => import("./checks-radios.component-BY64DSZ6.js").then((m) => m.ChecksRadiosComponent),
        data: {
          title: "Checks & Radios"
        }
      },
      {
        path: "range",
        loadComponent: () => import("./ranges.component-LWSSJMPK.js").then((m) => m.RangesComponent),
        data: {
          title: "Range"
        }
      },
      {
        path: "input-group",
        loadComponent: () => import("./input-groups.component-S2AOLNW3.js").then((m) => m.InputGroupsComponent),
        data: {
          title: "Input Group"
        }
      },
      {
        path: "floating-labels",
        loadComponent: () => import("./floating-labels.component-RHW6EQWH.js").then((m) => m.FloatingLabelsComponent),
        data: {
          title: "Floating Labels"
        }
      },
      {
        path: "layout",
        loadComponent: () => import("./layout.component-A52FPQ2G.js").then((m) => m.LayoutComponent),
        data: {
          title: "Layout"
        }
      },
      {
        path: "validation",
        loadComponent: () => import("./validation.component-LZ2X6H5N.js").then((m) => m.ValidationComponent),
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
//# sourceMappingURL=routes-MI3J42YP.js.map
