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
        loadComponent: () => import("./alerts.component-LY6MP6RX.js").then((m) => m.AlertsComponent),
        data: {
          title: "Alerts"
        }
      },
      {
        path: "badges",
        loadComponent: () => import("./badges.component-GGTGKO43.js").then((m) => m.BadgesComponent),
        data: {
          title: "Badges"
        }
      },
      {
        path: "modal",
        loadComponent: () => import("./modals.component-GCXKJRH7.js").then((m) => m.ModalsComponent),
        data: {
          title: "Modal"
        }
      },
      {
        path: "toasts",
        loadComponent: () => import("./toasters.component-DZ6WJSTV.js").then((m) => m.ToastersComponent),
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
//# sourceMappingURL=routes-6WGUI4JK.js.map
