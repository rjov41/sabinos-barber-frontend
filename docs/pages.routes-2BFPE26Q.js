import "./chunk-6WCCERUZ.js";

// src/app/pages/pages.routes.ts
var routesPages = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "",
        pathMatch: "full"
      },
      {
        path: "productos",
        loadChildren: () => import("./productos.routes-EKGB4R7Z.js").then((m) => m.routesProducto),
        data: {
          title: "Productos"
        }
      }
    ]
  }
];
export {
  routesPages
};
//# sourceMappingURL=pages.routes-2BFPE26Q.js.map
