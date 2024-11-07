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
        loadComponent: () => import("./buttons.component-47MKVQLG.js").then((m) => m.ButtonsComponent),
        data: {
          title: "Buttons"
        }
      },
      {
        path: "button-groups",
        loadComponent: () => import("./button-groups.component-3SRCJC7Z.js").then((m) => m.ButtonGroupsComponent),
        data: {
          title: "Button groups"
        }
      },
      {
        path: "dropdowns",
        loadComponent: () => import("./dropdowns.component-7VDE2BRT.js").then((m) => m.DropdownsComponent),
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
//# sourceMappingURL=routes-HNVVJ7KA.js.map
