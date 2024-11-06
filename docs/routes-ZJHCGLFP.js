import "./chunk-6WCCERUZ.js";

// src/app/documentacion/buttons/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Buttons"
    },
    children: [
      {
        path: "",
        redirectTo: "buttons",
        pathMatch: "full"
      },
      {
        path: "buttons",
        loadComponent: () => import("./buttons.component-ZUXRNWTZ.js").then((m) => m.ButtonsComponent),
        data: {
          title: "Buttons"
        }
      },
      {
        path: "button-groups",
        loadComponent: () => import("./button-groups.component-TQPLNC7T.js").then((m) => m.ButtonGroupsComponent),
        data: {
          title: "Button groups"
        }
      },
      {
        path: "dropdowns",
        loadComponent: () => import("./dropdowns.component-THDUG4IP.js").then((m) => m.DropdownsComponent),
        data: {
          title: "Dropdowns"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=routes-ZJHCGLFP.js.map
