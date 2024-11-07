import "./chunk-6WCCERUZ.js";

// src/app/documentacion/base/routes.ts
var routes = [
  {
    path: "",
    data: {
      title: "Base"
    },
    children: [
      {
        path: "",
        redirectTo: "cards",
        pathMatch: "full"
      },
      {
        path: "accordion",
        loadComponent: () => import("./accordions.component-FOTMJ5TK.js").then((m) => m.AccordionsComponent),
        data: {
          title: "Accordion"
        }
      },
      {
        path: "breadcrumbs",
        loadComponent: () => import("./breadcrumbs.component-42TPKLRI.js").then((m) => m.BreadcrumbsComponent),
        data: {
          title: "Breadcrumbs"
        }
      },
      {
        path: "cards",
        loadComponent: () => import("./cards.component-A3NJDMYW.js").then((m) => m.CardsComponent),
        data: {
          title: "Cards"
        }
      },
      {
        path: "carousel",
        loadComponent: () => import("./carousels.component-BTRU3TFN.js").then((m) => m.CarouselsComponent),
        data: {
          title: "Carousel"
        }
      },
      {
        path: "collapse",
        loadComponent: () => import("./collapses.component-A4UAIXFT.js").then((m) => m.CollapsesComponent),
        data: {
          title: "Collapse"
        }
      },
      {
        path: "list-group",
        loadComponent: () => import("./list-groups.component-KDDKKKG7.js").then((m) => m.ListGroupsComponent),
        data: {
          title: "List Group"
        }
      },
      {
        path: "navs",
        loadComponent: () => import("./navs.component-XNOAB6BK.js").then((m) => m.NavsComponent),
        data: {
          title: "Navs & Tabs"
        }
      },
      {
        path: "pagination",
        loadComponent: () => import("./paginations.component-ZCIE53LN.js").then((m) => m.PaginationsComponent),
        data: {
          title: "Pagination"
        }
      },
      {
        path: "placeholder",
        loadComponent: () => import("./placeholders.component-RJV74VSM.js").then((m) => m.PlaceholdersComponent),
        data: {
          title: "Placeholder"
        }
      },
      {
        path: "popovers",
        loadComponent: () => import("./popovers.component-LIK35W55.js").then((m) => m.PopoversComponent),
        data: {
          title: "Popovers"
        }
      },
      {
        path: "progress",
        loadComponent: () => import("./progress.component-REYN73SN.js").then((m) => m.ProgressComponent),
        data: {
          title: "Progress"
        }
      },
      {
        path: "spinners",
        loadComponent: () => import("./spinners.component-BR6KV4O4.js").then((m) => m.SpinnersComponent),
        data: {
          title: "Spinners"
        }
      },
      {
        path: "tables",
        loadComponent: () => import("./tables.component-25DUR47B.js").then((m) => m.TablesComponent),
        data: {
          title: "Tables"
        }
      },
      {
        path: "tabs",
        loadComponent: () => import("./tabs.component-KZC4T3NC.js").then((m) => m.AppTabsComponent),
        data: {
          title: "Tabs"
        }
      },
      {
        path: "tooltips",
        loadComponent: () => import("./tooltips.component-6YX3QJPP.js").then((m) => m.TooltipsComponent),
        data: {
          title: "Tooltips"
        }
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=routes-RVFKYZIY.js.map
