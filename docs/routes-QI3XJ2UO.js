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
        loadComponent: () => import("./accordions.component-ZNB2KFAK.js").then((m) => m.AccordionsComponent),
        data: {
          title: "Accordion"
        }
      },
      {
        path: "breadcrumbs",
        loadComponent: () => import("./breadcrumbs.component-BDNWWSWQ.js").then((m) => m.BreadcrumbsComponent),
        data: {
          title: "Breadcrumbs"
        }
      },
      {
        path: "cards",
        loadComponent: () => import("./cards.component-FM2IYUWV.js").then((m) => m.CardsComponent),
        data: {
          title: "Cards"
        }
      },
      {
        path: "carousel",
        loadComponent: () => import("./carousels.component-42I74BMQ.js").then((m) => m.CarouselsComponent),
        data: {
          title: "Carousel"
        }
      },
      {
        path: "collapse",
        loadComponent: () => import("./collapses.component-PZQGS2TS.js").then((m) => m.CollapsesComponent),
        data: {
          title: "Collapse"
        }
      },
      {
        path: "list-group",
        loadComponent: () => import("./list-groups.component-7DXOMSPU.js").then((m) => m.ListGroupsComponent),
        data: {
          title: "List Group"
        }
      },
      {
        path: "navs",
        loadComponent: () => import("./navs.component-TJRZ5AVL.js").then((m) => m.NavsComponent),
        data: {
          title: "Navs & Tabs"
        }
      },
      {
        path: "pagination",
        loadComponent: () => import("./paginations.component-ADALIAJB.js").then((m) => m.PaginationsComponent),
        data: {
          title: "Pagination"
        }
      },
      {
        path: "placeholder",
        loadComponent: () => import("./placeholders.component-FOIRUC4K.js").then((m) => m.PlaceholdersComponent),
        data: {
          title: "Placeholder"
        }
      },
      {
        path: "popovers",
        loadComponent: () => import("./popovers.component-HGODD2ZI.js").then((m) => m.PopoversComponent),
        data: {
          title: "Popovers"
        }
      },
      {
        path: "progress",
        loadComponent: () => import("./progress.component-ELSTLM4H.js").then((m) => m.ProgressComponent),
        data: {
          title: "Progress"
        }
      },
      {
        path: "spinners",
        loadComponent: () => import("./spinners.component-HNBAMKNW.js").then((m) => m.SpinnersComponent),
        data: {
          title: "Spinners"
        }
      },
      {
        path: "tables",
        loadComponent: () => import("./tables.component-5UMZ56MK.js").then((m) => m.TablesComponent),
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
        loadComponent: () => import("./tooltips.component-BCYIT7V4.js").then((m) => m.TooltipsComponent),
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
//# sourceMappingURL=routes-QI3XJ2UO.js.map
