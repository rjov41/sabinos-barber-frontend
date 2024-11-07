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
        loadComponent: () => import("./accordions.component-NC554WBY.js").then((m) => m.AccordionsComponent),
        data: {
          title: "Accordion"
        }
      },
      {
        path: "breadcrumbs",
        loadComponent: () => import("./breadcrumbs.component-42I7MCOX.js").then((m) => m.BreadcrumbsComponent),
        data: {
          title: "Breadcrumbs"
        }
      },
      {
        path: "cards",
        loadComponent: () => import("./cards.component-4V5LUVTJ.js").then((m) => m.CardsComponent),
        data: {
          title: "Cards"
        }
      },
      {
        path: "carousel",
        loadComponent: () => import("./carousels.component-DJBEDLIY.js").then((m) => m.CarouselsComponent),
        data: {
          title: "Carousel"
        }
      },
      {
        path: "collapse",
        loadComponent: () => import("./collapses.component-LFA2EP2B.js").then((m) => m.CollapsesComponent),
        data: {
          title: "Collapse"
        }
      },
      {
        path: "list-group",
        loadComponent: () => import("./list-groups.component-NVMNSQPX.js").then((m) => m.ListGroupsComponent),
        data: {
          title: "List Group"
        }
      },
      {
        path: "navs",
        loadComponent: () => import("./navs.component-LYKY3FUG.js").then((m) => m.NavsComponent),
        data: {
          title: "Navs & Tabs"
        }
      },
      {
        path: "pagination",
        loadComponent: () => import("./paginations.component-Z45NLZMM.js").then((m) => m.PaginationsComponent),
        data: {
          title: "Pagination"
        }
      },
      {
        path: "placeholder",
        loadComponent: () => import("./placeholders.component-RYLKPT3C.js").then((m) => m.PlaceholdersComponent),
        data: {
          title: "Placeholder"
        }
      },
      {
        path: "popovers",
        loadComponent: () => import("./popovers.component-PR4EOSAT.js").then((m) => m.PopoversComponent),
        data: {
          title: "Popovers"
        }
      },
      {
        path: "progress",
        loadComponent: () => import("./progress.component-EK4CTV7J.js").then((m) => m.ProgressComponent),
        data: {
          title: "Progress"
        }
      },
      {
        path: "spinners",
        loadComponent: () => import("./spinners.component-OZKJWFE3.js").then((m) => m.SpinnersComponent),
        data: {
          title: "Spinners"
        }
      },
      {
        path: "tables",
        loadComponent: () => import("./tables.component-RBZMC2SO.js").then((m) => m.TablesComponent),
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
        loadComponent: () => import("./tooltips.component-4LDCZI5Z.js").then((m) => m.TooltipsComponent),
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
//# sourceMappingURL=routes-NUZYTU43.js.map
