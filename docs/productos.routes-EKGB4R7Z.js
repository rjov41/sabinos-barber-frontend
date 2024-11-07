import "./chunk-6WCCERUZ.js";

// src/app/pages/producto/productos.routes.ts
var routesProducto = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "",
        pathMatch: "full"
      },
      {
        path: "",
        loadComponent: () => import("./producto-list.component-M32EWUDC.js").then((m) => m.ProductoListComponent),
        data: {
          title: "Listado"
        }
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: "editar/:id",
        loadComponent: () => import("./producto-editar.component-N74MJ6MJ.js").then((m) => m.ProductoEditarComponent),
        data: {
          title: "Editar"
        }
      },
      {
        path: "insertar",
        loadComponent: () => import("./producto-insertar.component-YFLCWIF6.js").then((m) => m.ProductoInsertarComponent),
        data: {
          title: "Insertar"
        }
      }
    ]
  }
];
export {
  routesProducto
};
//# sourceMappingURL=productos.routes-EKGB4R7Z.js.map
