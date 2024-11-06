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
        loadComponent: () => import("./accordions.component-QFJYOABG.js").then((m) => m.AccordionsComponent),
        data: {
          title: "Accordion"
        }
      },
      {
        path: "breadcrumbs",
        loadComponent: () => import("./breadcrumbs.component-F2PWIA3L.js").then((m) => m.BreadcrumbsComponent),
        data: {
          title: "Breadcrumbs"
        }
      },
      {
        path: "cards",
        loadComponent: () => import("./cards.component-W2ITHODH.js").then((m) => m.CardsComponent),
        data: {
          title: "Cards"
        }
      },
      {
        path: "carousel",
        loadComponent: () => import("./carousels.component-DVK72MWM.js").then((m) => m.CarouselsComponent),
        data: {
          title: "Carousel"
        }
      },
      {
        path: "collapse",
        loadComponent: () => import("./collapses.component-7FNOFDIE.js").then((m) => m.CollapsesComponent),
        data: {
          title: "Collapse"
        }
      },
      {
        path: "list-group",
        loadComponent: () => import("./list-groups.component-E2XFVBXV.js").then((m) => m.ListGroupsComponent),
        data: {
          title: "List Group"
        }
      },
      {
        path: "navs",
        loadComponent: () => import("./navs.component-2XFQRV5N.js").then((m) => m.NavsComponent),
        data: {
          title: "Navs & Tabs"
        }
      },
      {
        path: "pagination",
        loadComponent: () => import("./paginations.component-FKSSMNB6.js").then((m) => m.PaginationsComponent),
        data: {
          title: "Pagination"
        }
      },
      {
        path: "placeholder",
        loadComponent: () => import("./placeholders.component-RVRSGRFL.js").then((m) => m.PlaceholdersComponent),
        data: {
          title: "Placeholder"
        }
      },
      {
        path: "popovers",
        loadComponent: () => import("./popovers.component-H4HXKK3K.js").then((m) => m.PopoversComponent),
        data: {
          title: "Popovers"
        }
      },
      {
        path: "progress",
        loadComponent: () => import("./progress.component-AMQOI66T.js").then((m) => m.ProgressComponent),
        data: {
          title: "Progress"
        }
      },
      {
        path: "spinners",
        loadComponent: () => import("./spinners.component-4OFSDBXV.js").then((m) => m.SpinnersComponent),
        data: {
          title: "Spinners"
        }
      },
      {
        path: "tables",
        loadComponent: () => import("./tables.component-ZJ75QCMR.js").then((m) => m.TablesComponent),
        data: {
          title: "Tables"
        }
      },
      {
        path: "tabs",
        loadComponent: () => import("./tabs.component-Q24WWDHX.js").then((m) => m.AppTabsComponent),
        data: {
          title: "Tabs"
        }
      },
      {
        path: "tooltips",
        loadComponent: () => import("./tooltips.component-JQDEIK3G.js").then((m) => m.TooltipsComponent),
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
//# sourceMappingURL=routes-VPDSVPBL.js.map
