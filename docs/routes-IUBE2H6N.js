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
        loadComponent: () => import("./alerts.component-C4TKVSVY.js").then((m) => m.AlertsComponent),
        data: {
          title: "Alerts"
        }
      },
      {
        path: "badges",
        loadComponent: () => import("./badges.component-YFGRQZGQ.js").then((m) => m.BadgesComponent),
        data: {
          title: "Badges"
        }
      },
      {
        path: "modal",
        loadComponent: () => import("./modals.component-OVOJQAX5.js").then((m) => m.ModalsComponent),
        data: {
          title: "Modal"
        }
      },
      {
        path: "toasts",
        loadComponent: () => import("./toasters.component-S5DP7E7Q.js").then((m) => m.ToastersComponent),
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
//# sourceMappingURL=routes-IUBE2H6N.js.map
