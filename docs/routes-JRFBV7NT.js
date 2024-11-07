import "./chunk-6WCCERUZ.js";

// src/app/documentacion/pages/routes.ts
var routes = [
  {
    path: "404",
    loadComponent: () => import("./page404.component-WFNG3Y54.js").then((m) => m.Page404Component),
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    loadComponent: () => import("./page500.component-FMB62FE4.js").then((m) => m.Page500Component),
    data: {
      title: "Page 500"
    }
  },
  {
    path: "login",
    loadComponent: () => import("./login.component-BZCZ3EIY.js").then((m) => m.LoginComponent),
    data: {
      title: "Login Page"
    }
  },
  {
    path: "register",
    loadComponent: () => import("./register.component-UY5E3TNL.js").then((m) => m.RegisterComponent),
    data: {
      title: "Register Page"
    }
  }
];
export {
  routes
};
//# sourceMappingURL=routes-JRFBV7NT.js.map
