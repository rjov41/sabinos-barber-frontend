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
        loadComponent: () => import("./buttons.component-HAUL2V6L.js").then((m) => m.ButtonsComponent),
        data: {
          title: "Buttons"
        }
      },
      {
        path: "button-groups",
        loadComponent: () => import("./button-groups.component-SO7LTRGT.js").then((m) => m.ButtonGroupsComponent),
        data: {
          title: "Button groups"
        }
      },
      {
        path: "dropdowns",
        loadComponent: () => import("./dropdowns.component-ICF3HWF3.js").then((m) => m.DropdownsComponent),
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
//# sourceMappingURL=routes-OTZOQJ54.js.map
