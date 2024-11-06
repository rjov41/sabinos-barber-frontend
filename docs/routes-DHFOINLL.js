import "./chunk-6WCCERUZ.js";

// src/app/documentacion/theme/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Theme"
    },
    children: [
      {
        path: "",
        redirectTo: "colors",
        pathMatch: "full"
      },
      {
        path: "colors",
        loadComponent: () => import("./colors.component-I54JZZX7.js").then((m) => m.ColorsComponent),
        data: {
          title: "Colors"
        }
      },
      {
        path: "typography",
        loadComponent: () => import("./typography.component-ZD66LCD7.js").then((m) => m.TypographyComponent),
        data: {
          title: "Typography"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=routes-DHFOINLL.js.map
