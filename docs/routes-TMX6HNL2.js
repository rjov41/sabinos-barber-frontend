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
        loadComponent: () => import("./form-controls.component-6D4IBMYC.js").then((m) => m.FormControlsComponent),
        data: {
          title: "Form Control"
        }
      },
      {
        path: "select",
        loadComponent: () => import("./select.component-VXPFTMKH.js").then((m) => m.SelectComponent),
        data: {
          title: "Select"
        }
      },
      {
        path: "checks-radios",
        loadComponent: () => import("./checks-radios.component-7YUZL6VM.js").then((m) => m.ChecksRadiosComponent),
        data: {
          title: "Checks & Radios"
        }
      },
      {
        path: "range",
        loadComponent: () => import("./ranges.component-OE4BMCAI.js").then((m) => m.RangesComponent),
        data: {
          title: "Range"
        }
      },
      {
        path: "input-group",
        loadComponent: () => import("./input-groups.component-KY7TOHZH.js").then((m) => m.InputGroupsComponent),
        data: {
          title: "Input Group"
        }
      },
      {
        path: "floating-labels",
        loadComponent: () => import("./floating-labels.component-FXNJWP7Z.js").then((m) => m.FloatingLabelsComponent),
        data: {
          title: "Floating Labels"
        }
      },
      {
        path: "layout",
        loadComponent: () => import("./layout.component-NML7PEUK.js").then((m) => m.LayoutComponent),
        data: {
          title: "Layout"
        }
      },
      {
        path: "validation",
        loadComponent: () => import("./validation.component-RBS6K5JI.js").then((m) => m.ValidationComponent),
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
//# sourceMappingURL=routes-TMX6HNL2.js.map
