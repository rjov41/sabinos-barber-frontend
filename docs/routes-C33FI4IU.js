import "./chunk-6WCCERUZ.js";

// src/app/documentacion/pages/routes.ts
var routes = [
  {
    path: "404",
    loadComponent: () => import("./page404.component-GZXHVSW2.js").then((m) => m.Page404Component),
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    loadComponent: () => import("./page500.component-WNRNOTV2.js").then((m) => m.Page500Component),
    data: {
      title: "Page 500"
    }
  },
  {
    path: "login",
    loadComponent: () => import("./login.component-YNFOOLU3.js").then((m) => m.LoginComponent),
    data: {
      title: "Login Page"
    }
  },
  {
    path: "register",
    loadComponent: () => import("./register.component-JMJTUAHB.js").then((m) => m.RegisterComponent),
    data: {
      title: "Register Page"
    }
  }
];
export {
  routes
};
//# sourceMappingURL=routes-C33FI4IU.js.map
