import "./chunk-6WCCERUZ.js";

// src/app/documentacion/icons/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Icons"
    },
    children: [
      {
        path: "",
        redirectTo: "coreui-icons",
        pathMatch: "full"
      },
      {
        path: "coreui-icons",
        loadComponent: () => import("./coreui-icons.component-4SZDKNZZ.js").then((m) => m.CoreUIIconsComponent),
        data: {
          title: "CoreUI Icons"
        }
      },
      {
        path: "brands",
        loadComponent: () => import("./coreui-icons.component-4SZDKNZZ.js").then((m) => m.CoreUIIconsComponent),
        data: {
          title: "Brands"
        }
      },
      {
        path: "flags",
        loadComponent: () => import("./coreui-icons.component-4SZDKNZZ.js").then((m) => m.CoreUIIconsComponent),
        data: {
          title: "Flags"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=routes-P7K6TIM5.js.map
