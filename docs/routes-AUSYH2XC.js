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
        loadComponent: () => import("./alerts.component-ASEIPZKR.js").then((m) => m.AlertsComponent),
        data: {
          title: "Alerts"
        }
      },
      {
        path: "badges",
        loadComponent: () => import("./badges.component-GPGPOOT2.js").then((m) => m.BadgesComponent),
        data: {
          title: "Badges"
        }
      },
      {
        path: "modal",
        loadComponent: () => import("./modals.component-UZEX474V.js").then((m) => m.ModalsComponent),
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
//# sourceMappingURL=routes-AUSYH2XC.js.map
