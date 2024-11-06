import {
  DocsExampleComponent
} from "./chunk-72S5C6XO.js";
import {
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  NgTemplateOutlet,
  PopoverDirective,
  RowComponent,
  TooltipDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-VGFF44UQ.js";
import "./chunk-6WCCERUZ.js";

// src/app/documentacion/notifications/modals/modals.component.ts
var _c0 = () => ({ strategy: "fixed" });
function ModalsComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_container_263_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_template_264_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ModalsComponent_ng_template_264_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLiveDemo());
    });
    \u0275\u0275text(1, "Launch demo modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "c-modal", 45);
    \u0275\u0275listener("visibleChange", function ModalsComponent_ng_template_264_Template_c_modal_visibleChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleLiveDemoChange($event));
    });
    \u0275\u0275elementStart(3, "c-modal-header")(4, "h5", 30);
    \u0275\u0275text(5, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function ModalsComponent_ng_template_264_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLiveDemo());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "c-modal-body");
    \u0275\u0275text(8, "Woohoo, you're reading this text in a modal!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "c-modal-footer")(10, "button", 47);
    \u0275\u0275listener("click", function ModalsComponent_ng_template_264_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLiveDemo());
    });
    \u0275\u0275text(11, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275text(13, "Save changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("visible", ctx_r1.liveDemoVisible);
  }
}
function ModalsComponent_ng_template_266_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Launch static backdrop modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "c-modal", 49, 10)(4, "c-modal-header")(5, "h5", 30);
    \u0275\u0275text(6, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-modal-body");
    \u0275\u0275text(9, "I will not close if you click outside of me. Don't even try to press escape key.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "c-modal-footer")(11, "button", 51);
    \u0275\u0275text(12, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275text(14, "Understood");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const staticBackdropModal_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("cModalToggle", staticBackdropModal_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("@.disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("cModalToggle", staticBackdropModal_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("cModalToggle", staticBackdropModal_r3.id);
  }
}
function ModalsComponent_ng_template_268_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_template_268_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Scrolling long content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "c-modal", 52, 11)(4, "c-modal-header")(5, "h5", 30);
    \u0275\u0275text(6, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-modal-body");
    \u0275\u0275template(9, ModalsComponent_ng_template_268_ng_container_9_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "c-modal-footer")(11, "button", 51);
    \u0275\u0275text(12, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275text(14, "Save changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const scrollingLongContentModal_r4 = \u0275\u0275reference(3);
    \u0275\u0275nextContext();
    const longContent_r5 = \u0275\u0275reference(283);
    \u0275\u0275property("cModalToggle", scrollingLongContentModal_r4.id);
    \u0275\u0275advance(7);
    \u0275\u0275property("cModalToggle", scrollingLongContentModal_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", longContent_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", scrollingLongContentModal_r4.id);
  }
}
function ModalsComponent_ng_template_270_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ModalsComponent_ng_template_270_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Scrollable long content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "c-modal", 53, 12)(4, "c-modal-header")(5, "h5", 30);
    \u0275\u0275text(6, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-modal-body");
    \u0275\u0275template(9, ModalsComponent_ng_template_270_ng_container_9_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "c-modal-footer")(11, "button", 51);
    \u0275\u0275text(12, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275text(14, "Save changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const scrollableLongContentModal_r6 = \u0275\u0275reference(3);
    \u0275\u0275nextContext();
    const longContent_r5 = \u0275\u0275reference(283);
    \u0275\u0275property("cModalToggle", scrollableLongContentModal_r6.id);
    \u0275\u0275advance(7);
    \u0275\u0275property("cModalToggle", scrollableLongContentModal_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", longContent_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", scrollableLongContentModal_r6.id);
  }
}
function ModalsComponent_ng_template_272_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Centered modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "c-modal", 54, 13)(4, "c-modal-header")(5, "h5", 30);
    \u0275\u0275text(6, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-modal-body");
    \u0275\u0275text(9, " Woohoo, you're reading this text in a modal! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "c-modal-footer")(11, "button", 51);
    \u0275\u0275text(12, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275text(14, "Understood");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const verticallyCenteredModal_r7 = \u0275\u0275reference(3);
    \u0275\u0275property("cModalToggle", verticallyCenteredModal_r7.id);
    \u0275\u0275advance(7);
    \u0275\u0275property("cModalToggle", verticallyCenteredModal_r7.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("cModalToggle", verticallyCenteredModal_r7.id);
  }
}
function ModalsComponent_ng_template_274_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Centered scrollable modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "c-modal", 55, 14)(4, "c-modal-header")(5, "h5", 30);
    \u0275\u0275text(6, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-modal-body")(9, "p");
    \u0275\u0275text(10, " This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "br")(12, "br")(13, "br")(14, "br")(15, "br")(16, "br")(17, "br")(18, "br")(19, "br")(20, "br");
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, "Just like that.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "c-modal-footer")(24, "button", 51);
    \u0275\u0275text(25, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 33);
    \u0275\u0275text(27, "Understood");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const verticallyCenteredScrollableModal_r8 = \u0275\u0275reference(3);
    \u0275\u0275property("cModalToggle", verticallyCenteredScrollableModal_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("scrollable", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("cModalToggle", verticallyCenteredScrollableModal_r8.id);
    \u0275\u0275advance(17);
    \u0275\u0275property("cModalToggle", verticallyCenteredScrollableModal_r8.id);
  }
}
function ModalsComponent_ng_template_276_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 60);
    \u0275\u0275text(1, " Popover title ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275text(3, " And here\u2019s some amazing content. It\u2019s very engaging. Right? ");
    \u0275\u0275elementEnd();
  }
}
function ModalsComponent_ng_template_276_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Modal with Popover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "c-modal", 56, 15)(4, "c-modal-header")(5, "h5", 30);
    \u0275\u0275text(6, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-modal-body")(9, "h5");
    \u0275\u0275text(10, "Popover in a modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " This ");
    \u0275\u0275elementStart(12, "button", 57);
    \u0275\u0275text(13, " button ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " triggers a popover on click. ");
    \u0275\u0275template(15, ModalsComponent_ng_template_276_ng_template_15_Template, 4, 0, "ng-template", null, 16, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(17, "hr");
    \u0275\u0275elementStart(18, "h5");
    \u0275\u0275text(19, "Tooltips in a modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p")(21, "a", 58);
    \u0275\u0275text(22, "This link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " and ");
    \u0275\u0275elementStart(24, "a", 59);
    \u0275\u0275text(25, "that link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " have tooltips on hover. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "c-modal-footer")(28, "button", 51);
    \u0275\u0275text(29, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 33);
    \u0275\u0275text(31, "Understood");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const withPopoverModal_r9 = \u0275\u0275reference(3);
    const popoverHtml_r10 = \u0275\u0275reference(16);
    \u0275\u0275property("cModalToggle", withPopoverModal_r9.id);
    \u0275\u0275advance(7);
    \u0275\u0275property("cModalToggle", withPopoverModal_r9.id);
    \u0275\u0275advance(5);
    \u0275\u0275property("cPopoverTrigger", "click")("cPopover", popoverHtml_r10)("cPopoverOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(12);
    \u0275\u0275property("cTooltipOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("cModalToggle", withPopoverModal_r9.id);
  }
}
function ModalsComponent_ng_template_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Extra large modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Large modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275text(5, "Small modal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "c-modal", 62, 17)(8, "c-modal-header")(9, "h5", 30);
    \u0275\u0275text(10, "Extra large modal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "c-modal-body");
    \u0275\u0275text(12, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "c-modal", 63, 18)(15, "c-modal-header")(16, "h5", 30);
    \u0275\u0275text(17, "Large modal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "c-modal-body");
    \u0275\u0275text(19, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "c-modal", 64, 19)(22, "c-modal-header")(23, "h5", 30);
    \u0275\u0275text(24, "Small modal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "c-modal-body");
    \u0275\u0275text(26, "...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const modalXl_r11 = \u0275\u0275reference(7);
    const modalLg_r12 = \u0275\u0275reference(14);
    const modalSm_r13 = \u0275\u0275reference(21);
    \u0275\u0275property("cModalToggle", modalXl_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", modalLg_r12.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", modalSm_r13.id);
  }
}
function ModalsComponent_ng_template_280_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1, "Full screen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275text(3, "Full screen below sm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275text(5, "Full screen below md");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 48);
    \u0275\u0275text(7, "Full screen below lg");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 48);
    \u0275\u0275text(9, "Full screen below xl");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275text(11, "Full screen below xxl");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "c-modal", 65, 8)(14, "c-modal-header")(15, "h5", 30);
    \u0275\u0275text(16, "Full screen");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "c-modal-body");
    \u0275\u0275text(19, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "c-modal-footer")(21, "button", 48);
    \u0275\u0275text(22, "Close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "c-modal", 66, 20)(25, "c-modal-header")(26, "h5", 30);
    \u0275\u0275text(27, "Full screen below sm");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "c-modal-body");
    \u0275\u0275text(30, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "c-modal", 67, 21)(33, "c-modal-header")(34, "h5", 30);
    \u0275\u0275text(35, "Full screen below md");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "c-modal-body");
    \u0275\u0275text(38, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "c-modal", 68, 22)(41, "c-modal-header")(42, "h5", 30);
    \u0275\u0275text(43, "Full screen below lg");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "c-modal-body");
    \u0275\u0275text(46, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "c-modal", 69, 23)(49, "c-modal-header")(50, "h5", 30);
    \u0275\u0275text(51, "Full screen below xl");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "c-modal-body");
    \u0275\u0275text(54, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "c-modal", 70, 24)(57, "c-modal-header")(58, "h5", 30);
    \u0275\u0275text(59, "Full screen below xxl");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "c-modal-body");
    \u0275\u0275text(62, "...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fullScreen_r14 = \u0275\u0275reference(13);
    const fullScreenSm_r15 = \u0275\u0275reference(24);
    const fullScreenMd_r16 = \u0275\u0275reference(32);
    const fullScreenLg_r17 = \u0275\u0275reference(40);
    const fullScreenXl_r18 = \u0275\u0275reference(48);
    const fullScreen2Xl_r19 = \u0275\u0275reference(56);
    \u0275\u0275property("cModalToggle", fullScreen_r14.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", fullScreenSm_r15.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", fullScreenMd_r16.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", fullScreenLg_r17.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", fullScreenXl_r18.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("cModalToggle", fullScreen2Xl_r19.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("cModalToggle", fullScreen_r14.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("cModalToggle", fullScreen_r14.id);
    \u0275\u0275advance(7);
    \u0275\u0275property("cModalToggle", fullScreenSm_r15.id);
    \u0275\u0275advance(8);
    \u0275\u0275property("cModalToggle", fullScreenMd_r16.id);
    \u0275\u0275advance(8);
    \u0275\u0275property("cModalToggle", fullScreenLg_r17.id);
    \u0275\u0275advance(8);
    \u0275\u0275property("cModalToggle", fullScreenXl_r18.id);
    \u0275\u0275advance(8);
    \u0275\u0275property("cModalToggle", fullScreen2Xl_r19.id);
  }
}
function ModalsComponent_ng_template_282_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    \u0275\u0275elementEnd();
  }
}
var _ModalsComponent = class _ModalsComponent {
  constructor() {
    this.liveDemoVisible = false;
  }
  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }
  handleLiveDemoChange(event) {
    this.liveDemoVisible = event;
  }
};
_ModalsComponent.\u0275fac = function ModalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalsComponent)();
};
_ModalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalsComponent, selectors: [["app-modals"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 284, vars: 11, consts: [["liveDemo", ""], ["staticBackdrop", ""], ["scrollingLongContent", ""], ["scrollableLongContent", ""], ["verticallyCentered", ""], ["verticallyCenteredScrollable", ""], ["withPopover", ""], ["optionalSizes", ""], ["fullScreen", ""], ["longContent", ""], ["staticBackdropModal", ""], ["scrollingLongContentModal", ""], ["scrollableLongContentModal", ""], ["verticallyCenteredModal", ""], ["verticallyCenteredScrollableModal", ""], ["withPopoverModal", ""], ["popoverHtml", ""], ["modalXl", ""], ["modalLg", ""], ["modalSm", ""], ["fullScreenSm", ""], ["fullScreenMd", ""], ["fullScreenLg", ""], ["fullScreenXl", ""], ["fullScreen2Xl", ""], ["xs", "12"], [1, "mb-4"], [1, "text-body-secondary", "small"], ["href", "components/modal"], ["backdrop", "static", "id", "modalStatic", 1, "position-static", "d-block", "show", 3, "keyboard", "transition"], ["cModalTitle", ""], ["cButtonClose", ""], ["cButton", "", "color", "secondary"], ["cButton", "", "color", "primary"], ["href", "components/modal#live-demo"], [4, "ngTemplateOutlet"], ["href", "components/modal#static-backdrop"], ["href", "components/modal#scrolling-long-content"], ["href", "components/modal#vertically-centered"], ["href", "components/modal#tooltips-and-popovers"], [1, "table"], [1, "text-body-secondary"], ["href", "components/modal#optional-sizes"], ["href", "components/modal#fullscreen-modal"], ["cButton", "", 3, "click"], ["id", "liveDemoModal", 3, "visibleChange", "visible"], ["cButtonClose", "", 3, "click"], ["cButton", "", "color", "secondary", 3, "click"], ["cButton", "", 3, "cModalToggle"], ["backdrop", "static", "id", "staticBackdropModal"], ["cButtonClose", "", 3, "cModalToggle"], ["cButton", "", "color", "secondary", 3, "cModalToggle"], ["id", "scrollingLongContentModal"], ["id", "scrollableLongContentModal", "scrollable", ""], ["alignment", "center", "id", "verticallyCenteredModal"], ["alignment", "center", "id", "verticallyCenteredScrollableModal", 3, "scrollable"], ["alignment", "center", "id", "withPopoverModal"], ["cButton", "", 3, "cPopoverTrigger", "cPopover", "cPopoverOptions"], ["cTooltip", "Tooltip text", "href", ""], ["cTooltip", "Tooltip text", "cTooltipPlacement", "bottom", "href", "", 3, "cTooltipOptions"], [1, "popover-header"], ["id", "", 1, "popover-body"], ["id", "modalXl", "size", "xl"], ["id", "modalLg", "size", "lg"], ["id", "modalSm", "size", "sm"], ["id", "fullScreen", 3, "fullscreen"], ["fullscreen", "sm", "id", "fullScreenSm"], ["fullscreen", "md", "id", "fullScreenMd"], ["fullscreen", "lg", "id", "fullScreenLg"], ["fullscreen", "xl", "id", "fullScreenXl"], ["fullscreen", "xxl", "id", "fullScreen2Xl"]], template: function ModalsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 25)(2, "c-card", 26)(3, "c-card-header")(4, "strong");
    \u0275\u0275text(5, "Angular Modal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-card-body")(7, "p", 27);
    \u0275\u0275text(8, "\n          Below is a static modal example (meaning its ");
    \u0275\u0275elementStart(9, "code");
    \u0275\u0275text(10, "position");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " and\n          ");
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13, "display");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " have been overridden). Included are the modal header, modal body\n          (required for ");
    \u0275\u0275elementStart(15, "code");
    \u0275\u0275text(16, "padding");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "), and modal footer (optional). We ask that you\n          include modal headers with dismiss actions whenever possible, or provide another\n          explicit dismiss action.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "app-docs-example", 28)(19, "c-modal", 29)(20, "c-modal-header")(21, "h5", 30);
    \u0275\u0275text(22, "Modal title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "button", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "c-modal-body");
    \u0275\u0275text(25, "Modal body text goes here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "c-modal-footer")(27, "button", 32);
    \u0275\u0275text(28, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 33);
    \u0275\u0275text(30, "Save changes");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(31, "c-col", 25)(32, "c-card", 26)(33, "c-card-header");
    \u0275\u0275text(34, "\n        ");
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36, "Angular Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " ");
    \u0275\u0275elementStart(38, "small");
    \u0275\u0275text(39, "Live demo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "c-card-body")(42, "p", 27);
    \u0275\u0275text(43, " Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "app-docs-example", 34);
    \u0275\u0275template(45, ModalsComponent_ng_container_45_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "c-col", 25)(47, "c-card", 26)(48, "c-card-header");
    \u0275\u0275text(49, "\n        ");
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51, "Angular Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " ");
    \u0275\u0275elementStart(53, "small");
    \u0275\u0275text(54, "Static backdrop");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "c-card-body")(57, "p", 27);
    \u0275\u0275text(58, " If you don\u2019t provide an ");
    \u0275\u0275elementStart(59, "code");
    \u0275\u0275text(60, "(visibleChange)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " handler to the Modal component, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "app-docs-example", 36);
    \u0275\u0275template(63, ModalsComponent_ng_container_63_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "c-col", 25)(65, "c-card", 26)(66, "c-card-header");
    \u0275\u0275text(67, "\n        ");
    \u0275\u0275elementStart(68, "strong");
    \u0275\u0275text(69, "Angular Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, " ");
    \u0275\u0275elementStart(71, "small");
    \u0275\u0275text(72, "Scrolling long content");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "c-card-body")(75, "p", 27);
    \u0275\u0275text(76, " If your modals are too long for the user\u2019s viewport, they scroll the page by itself. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "app-docs-example", 37);
    \u0275\u0275template(78, ModalsComponent_ng_container_78_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 27);
    \u0275\u0275text(80, "\n          You can also create a scrollable modal that allows scroll the modal body by adding ");
    \u0275\u0275elementStart(81, "code");
    \u0275\u0275text(82, "scrollable");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, "\n          prop.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "app-docs-example", 37);
    \u0275\u0275template(85, ModalsComponent_ng_container_85_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "c-col", 25)(87, "c-card", 26)(88, "c-card-header");
    \u0275\u0275text(89, "\n        ");
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91, "Angular Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " ");
    \u0275\u0275elementStart(93, "small");
    \u0275\u0275text(94, "Vertically centered");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "c-card-body")(97, "p", 27);
    \u0275\u0275text(98, " Add ");
    \u0275\u0275elementStart(99, "code");
    \u0275\u0275text(100, 'alignment="center"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, " to ");
    \u0275\u0275elementStart(102, "code");
    \u0275\u0275text(103, "<c-modal>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, " to vertically center the modal. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "app-docs-example", 38);
    \u0275\u0275template(106, ModalsComponent_ng_container_106_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "app-docs-example", 38);
    \u0275\u0275template(108, ModalsComponent_ng_container_108_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(109, "c-col", 25)(110, "c-card", 26)(111, "c-card-header");
    \u0275\u0275text(112, "\n        ");
    \u0275\u0275elementStart(113, "strong");
    \u0275\u0275text(114, "Angular Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, " ");
    \u0275\u0275elementStart(116, "small");
    \u0275\u0275text(117, "Tooltips and popovers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "c-card-body")(120, "p", 27)(121, "code");
    \u0275\u0275text(122, "cTooltip");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, " and ");
    \u0275\u0275elementStart(124, "code");
    \u0275\u0275text(125, "cPopover");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, " can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "app-docs-example", 39);
    \u0275\u0275template(128, ModalsComponent_ng_container_128_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(129, "c-col", 25)(130, "c-card", 26)(131, "c-card-header");
    \u0275\u0275text(132, "\n        ");
    \u0275\u0275elementStart(133, "strong");
    \u0275\u0275text(134, "Angular Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, " ");
    \u0275\u0275elementStart(136, "small");
    \u0275\u0275text(137, "Optional sizes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "c-card-body")(140, "p", 27);
    \u0275\u0275text(141, "\n          Modals have three optional sizes, available via modifier classes to be placed on a\n          ");
    \u0275\u0275elementStart(142, "code");
    \u0275\u0275text(143, "<c-modal>");
    \u0275\u0275elementEnd();
    \u0275\u0275text(144, ". These sizes kick in at certain breakpoints to avoid\n          horizontal scrollbars on narrower viewports.\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "table", 40)(146, "thead")(147, "tr")(148, "th");
    \u0275\u0275text(149, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "th");
    \u0275\u0275text(151, "Property size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "th");
    \u0275\u0275text(153, "Modal max-width");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(154, "tbody")(155, "tr")(156, "td");
    \u0275\u0275text(157, "Small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "td")(159, "code");
    \u0275\u0275text(160, "'sm'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "td")(162, "code");
    \u0275\u0275text(163, "300px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(164, "tr")(165, "td");
    \u0275\u0275text(166, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "td", 41);
    \u0275\u0275text(168, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "td")(170, "code");
    \u0275\u0275text(171, "500px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(172, "tr")(173, "td");
    \u0275\u0275text(174, "Large");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "td")(176, "code");
    \u0275\u0275text(177, "'lg'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "td")(179, "code");
    \u0275\u0275text(180, "800px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(181, "tr")(182, "td");
    \u0275\u0275text(183, "Extra large");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "td")(185, "code");
    \u0275\u0275text(186, "'xl'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(187, "td")(188, "code");
    \u0275\u0275text(189, "1140px");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(190, "app-docs-example", 42);
    \u0275\u0275template(191, ModalsComponent_ng_container_191_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(192, "c-col", 25)(193, "c-card", 26)(194, "c-card-header");
    \u0275\u0275text(195, "\n        ");
    \u0275\u0275elementStart(196, "strong");
    \u0275\u0275text(197, "Angular Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(198, " ");
    \u0275\u0275elementStart(199, "small");
    \u0275\u0275text(200, "Fullscreen Modal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(201, "\n      ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "c-card-body")(203, "p", 27);
    \u0275\u0275text(204, " Another override is the option to pop up a modal that covers the user viewport, available via property ");
    \u0275\u0275elementStart(205, "code");
    \u0275\u0275text(206, "fullscreen");
    \u0275\u0275elementEnd();
    \u0275\u0275text(207, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "table", 40)(209, "thead")(210, "tr")(211, "th");
    \u0275\u0275text(212, "Property fullscreen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "th");
    \u0275\u0275text(214, "Availability");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(215, "tbody")(216, "tr")(217, "td")(218, "code");
    \u0275\u0275text(219, "true");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(220, "td");
    \u0275\u0275text(221, "Always");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(222, "tr")(223, "td")(224, "code");
    \u0275\u0275text(225, "'sm'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(226, "td");
    \u0275\u0275text(227, " Below ");
    \u0275\u0275elementStart(228, "code");
    \u0275\u0275text(229, "576px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(230, "tr")(231, "td")(232, "code");
    \u0275\u0275text(233, "'md'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(234, "td");
    \u0275\u0275text(235, " Below ");
    \u0275\u0275elementStart(236, "code");
    \u0275\u0275text(237, "768px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(238, "tr")(239, "td")(240, "code");
    \u0275\u0275text(241, "'lg'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(242, "td");
    \u0275\u0275text(243, " Below ");
    \u0275\u0275elementStart(244, "code");
    \u0275\u0275text(245, "992px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(246, "tr")(247, "td")(248, "code");
    \u0275\u0275text(249, "'xl'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(250, "td");
    \u0275\u0275text(251, " Below ");
    \u0275\u0275elementStart(252, "code");
    \u0275\u0275text(253, "1200px");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(254, "tr")(255, "td")(256, "code");
    \u0275\u0275text(257, "'xxl'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "td");
    \u0275\u0275text(259, " Below ");
    \u0275\u0275elementStart(260, "code");
    \u0275\u0275text(261, "1400px");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(262, "app-docs-example", 43);
    \u0275\u0275template(263, ModalsComponent_ng_container_263_Template, 1, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(264, ModalsComponent_ng_template_264_Template, 14, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(266, ModalsComponent_ng_template_266_Template, 15, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(268, ModalsComponent_ng_template_268_Template, 15, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(270, ModalsComponent_ng_template_270_Template, 15, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(272, ModalsComponent_ng_template_272_Template, 15, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(274, ModalsComponent_ng_template_274_Template, 28, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(276, ModalsComponent_ng_template_276_Template, 32, 9, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(278, ModalsComponent_ng_template_278_Template, 27, 3, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(280, ModalsComponent_ng_template_280_Template, 63, 14, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(282, ModalsComponent_ng_template_282_Template, 36, 0, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const liveDemo_r20 = \u0275\u0275reference(265);
    const staticBackdrop_r21 = \u0275\u0275reference(267);
    const scrollingLongContent_r22 = \u0275\u0275reference(269);
    const scrollableLongContent_r23 = \u0275\u0275reference(271);
    const verticallyCentered_r24 = \u0275\u0275reference(273);
    const verticallyCenteredScrollable_r25 = \u0275\u0275reference(275);
    const withPopover_r26 = \u0275\u0275reference(277);
    const optionalSizes_r27 = \u0275\u0275reference(279);
    const fullScreen_r28 = \u0275\u0275reference(281);
    \u0275\u0275advance(19);
    \u0275\u0275property("keyboard", false)("transition", false);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngTemplateOutlet", liveDemo_r20);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngTemplateOutlet", staticBackdrop_r21);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngTemplateOutlet", scrollingLongContent_r22);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngTemplateOutlet", scrollableLongContent_r23);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngTemplateOutlet", verticallyCentered_r24);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", verticallyCenteredScrollable_r25);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngTemplateOutlet", withPopover_r26);
    \u0275\u0275advance(63);
    \u0275\u0275property("ngTemplateOutlet", optionalSizes_r27);
    \u0275\u0275advance(72);
    \u0275\u0275property("ngTemplateOutlet", fullScreen_r28);
  }
}, dependencies: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent, ButtonDirective, NgTemplateOutlet, ModalToggleDirective, PopoverDirective, TooltipDirective] });
var ModalsComponent = _ModalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalsComponent, { className: "ModalsComponent", filePath: "src\\app\\documentacion\\notifications\\modals\\modals.component.ts", lineNumber: 31 });
})();
export {
  ModalsComponent
};
//# sourceMappingURL=modals.component-OVOJQAX5.js.map
