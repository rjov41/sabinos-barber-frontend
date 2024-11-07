import "./chunk-6WCCERUZ.js";

// src/app/documentacion/notifications/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Notifications"
    },
    children: [
      {
        path: "",
        redirectTo: "badges",
        pathMatch: "full"
      },
      {
        path: "alerts",
        loadComponent: () => import("./alerts.component-62WNTI3C.js").then((m) => m.AlertsComponent),
        data: {
          title: "Alerts"
        }
      },
      {
        path: "badges",
        loadComponent: () => import("./badges.component-UZJONNDS.js").then((m) => m.BadgesComponent),
        data: {
          title: "Badges"
        }
      },
      {
        path: "modal",
        loadComponent: () => import("./modals.component-KIH5F56I.js").then((m) => m.ModalsComponent),
        data: {
          title: "Modal"
        }
      },
      {
        path: "toasts",
        loadComponent: () => import("./toasters.component-AN37WTTZ.js").then((m) => m.ToastersComponent),
        data: {
          title: "Toasts"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=routes-67FQF3AJ.js.map
