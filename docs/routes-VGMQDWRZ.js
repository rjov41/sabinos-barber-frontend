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
        loadComponent: () => import("./form-controls.component-ZTNGVZ2K.js").then((m) => m.FormControlsComponent),
        data: {
          title: "Form Control"
        }
      },
      {
        path: "select",
        loadComponent: () => import("./select.component-LKAD3ZH2.js").then((m) => m.SelectComponent),
        data: {
          title: "Select"
        }
      },
      {
        path: "checks-radios",
        loadComponent: () => import("./checks-radios.component-CZBYEXQK.js").then((m) => m.ChecksRadiosComponent),
        data: {
          title: "Checks & Radios"
        }
      },
      {
        path: "range",
        loadComponent: () => import("./ranges.component-2PMJKU4B.js").then((m) => m.RangesComponent),
        data: {
          title: "Range"
        }
      },
      {
        path: "input-group",
        loadComponent: () => import("./input-groups.component-EUNDVEJ2.js").then((m) => m.InputGroupsComponent),
        data: {
          title: "Input Group"
        }
      },
      {
        path: "floating-labels",
        loadComponent: () => import("./floating-labels.component-I7WZZKSM.js").then((m) => m.FloatingLabelsComponent),
        data: {
          title: "Floating Labels"
        }
      },
      {
        path: "layout",
        loadComponent: () => import("./layout.component-BT3VI76E.js").then((m) => m.LayoutComponent),
        data: {
          title: "Layout"
        }
      },
      {
        path: "validation",
        loadComponent: () => import("./validation.component-MSCPOODV.js").then((m) => m.ValidationComponent),
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
//# sourceMappingURL=routes-VGMQDWRZ.js.map
