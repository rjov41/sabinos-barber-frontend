import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  UntypedFormControl,
  UntypedFormGroup,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3RTTW4L4.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  JsonPipe,
  NgClass,
  NgStyle,
  ProgressComponent,
  RowComponent,
  SlicePipe,
  TextColorDirective,
  ToastBodyComponent,
  ToastCloseDirective,
  ToastComponent,
  ToastHeaderComponent,
  ToasterComponent,
  ToasterPlacement,
  ToasterService,
  takeUntilDestroyed
} from "./chunk-JAOOB3SV.js";
import {
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  filter,
  forwardRef,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-TU2APFZU.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-6WCCERUZ.js";

// src/app/documentacion/notifications/toasters/toast-simple/toast.component.ts
var _c0 = ["*"];
var _AppToastComponent = class _AppToastComponent extends ToastComponent {
  constructor(hostElement, renderer, toasterService, changeDetectorRef) {
    super(hostElement, renderer, toasterService, changeDetectorRef);
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.toasterService = toasterService;
    this.changeDetectorRef = changeDetectorRef;
    this.closeButton = true;
    this.title = "";
  }
};
_AppToastComponent.\u0275fac = function AppToastComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppToastComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ToasterService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_AppToastComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppToastComponent, selectors: [["app-toast-simple"]], inputs: { closeButton: "closeButton", title: "title" }, standalone: true, features: [\u0275\u0275ProvidersFeature([{ provide: ToastComponent, useExisting: forwardRef(() => _AppToastComponent) }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 12, vars: 6, consts: [["toastBody", ""], [3, "closeButton"], ["focusable", "false", "height", "20", "preserveAspectRatio", "xMidYMid slice", "role", "img", "width", "20", "xmlns", "http://www.w3.org/2000/svg", 1, "rounded", "me-2"], ["fill", "#007aff", "height", "100%", "width", "100%"], [3, "cToastClose"], [1, "mb-1"], ["thin", "", 3, "value"]], template: function AppToastComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "c-toast-header", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 2);
    \u0275\u0275element(3, "rect", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "c-toast-body", 4, 0)(8, "p", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(10);
    \u0275\u0275element(11, "c-progress", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const toastBody_r1 = \u0275\u0275reference(7);
    \u0275\u0275advance();
    \u0275\u0275property("closeButton", ctx.closeButton);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275property("cToastClose", toastBody_r1.toast);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("This is a dynamic toast no ", toastBody_r1.toast == null ? null : toastBody_r1.toast.index(), " ", toastBody_r1.toast == null ? null : toastBody_r1.toast.clock, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 25 * ((tmp_5_0 = toastBody_r1.toast == null ? null : toastBody_r1.toast.clock) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : 1));
  }
}, dependencies: [ToastHeaderComponent, ToastBodyComponent, ToastCloseDirective, ProgressComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
var AppToastComponent = _AppToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppToastComponent, { className: "AppToastComponent", filePath: "src\\app\\documentacion\\notifications\\toasters\\toast-simple\\toast.component.ts", lineNumber: 13 });
})();

// src/app/documentacion/notifications/toasters/toasters.component.ts
var _c02 = () => ({ position: "relative" });
var _c1 = () => ({ display: "contents" });
function ToastersComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "c-toaster", 2);
  }
  if (rf & 2) {
    const pos_r2 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("placement", pos_r2);
    \u0275\u0275property("ngClass", "p-3");
  }
}
function ToastersComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const position_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", position_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", position_r3, " ");
  }
}
function ToastersComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", color_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", color_r4, " ");
  }
}
var Colors;
(function(Colors2) {
  Colors2[""] = "";
  Colors2["primary"] = "primary";
  Colors2["secondary"] = "secondary";
  Colors2["success"] = "success";
  Colors2["info"] = "info";
  Colors2["warning"] = "warning";
  Colors2["danger"] = "danger";
  Colors2["dark"] = "dark";
  Colors2["light"] = "light";
})(Colors || (Colors = {}));
var _ToastersComponent = class _ToastersComponent {
  constructor() {
    this.positions = Object.values(ToasterPlacement);
    this.position = ToasterPlacement.TopEnd;
    this.positionStatic = ToasterPlacement.Static;
    this.colors = Object.keys(Colors);
    this.autohide = true;
    this.delay = 5e3;
    this.fade = true;
    this.toasterForm = new UntypedFormGroup({
      autohide: new UntypedFormControl(this.autohide),
      delay: new UntypedFormControl({ value: this.delay, disabled: !this.autohide }),
      position: new UntypedFormControl(this.position),
      fade: new UntypedFormControl({ value: true, disabled: false }),
      closeButton: new UntypedFormControl(true),
      color: new UntypedFormControl("")
    });
    this.formChanges = this.toasterForm.valueChanges.pipe(takeUntilDestroyed(), filter((e) => e.autohide !== this.autohide));
  }
  ngOnInit() {
    this.formChanges.subscribe((e) => {
      this.autohide = e.autohide;
      this.position = e.position;
      this.fade = e.fade;
      const control = this.toasterForm?.get("delay");
      this.autohide ? control?.enable() : control?.disable();
      this.delay = control?.enabled ? e.timeout : this.delay;
    });
  }
  addToast() {
    const formValues = this.toasterForm.value;
    const toasterPosition = this.viewChildren.filter((item) => item.placement === this.toasterForm.value.position);
    toasterPosition.forEach((item) => {
      const title = `Toast ${formValues.color} ${formValues.position}`;
      const props = __objRest(__spreadProps(__spreadValues({}, formValues), { title }), []);
      const componentRef = item.addToast(AppToastComponent, props, {});
      componentRef.instance["closeButton"] = props.closeButton;
    });
  }
};
_ToastersComponent.\u0275fac = function ToastersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastersComponent)();
};
_ToastersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastersComponent, selectors: [["app-toasters"]], viewQuery: function ToastersComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(ToasterComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewChildren = _t);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 24, consts: [["toast", ""], ["xs", "12"], ["position", "fixed", 3, "ngClass", "placement"], ["lg", "6", "sm", "12"], ["cForm", "", 3, "formGroup"], [1, "my-2", "mt-4"], ["cFormCheckInput", "", "formControlName", "autohide", "id", "autohide", "type", "checkbox"], ["cFormCheckLabel", "", "for", "autohide"], ["cInputGroupText", ""], ["cFormControl", "", "formControlName", "delay", "id", "delay", 3, "type"], [1, "my-2"], ["cSelect", "", "formControlName", "position"], [3, "ngValue"], ["cSelect", "", "formControlName", "color"], ["cFormCheckInput", "", "formControlName", "fade", "id", "fade", "type", "checkbox"], ["cFormCheckLabel", "", "for", "fade"], ["cFormCheckInput", "", "formControlName", "closeButton", "id", "close", "type", "checkbox"], ["cFormCheckLabel", "", "for", "close"], ["cButton", "", "color", "success", 1, "m-1", 3, "click"], ["lg", "6", "sm", "12", 1, "mt-3", 3, "ngStyle"], [3, "placement", "ngStyle"], ["color", "danger", 3, "autohide", "fade", "visible"], ["color", "dark", 3, "fade", "visible"], [3, "closeButton"], ["cTextColor", "secondary"], ["color", "secondary", 3, "autohide", "fade", "visible", "title"], [1, "mt-3"]], template: function ToastersComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "c-row")(1, "c-col", 1);
    \u0275\u0275repeaterCreate(2, ToastersComponent_For_3_Template, 1, 2, "c-toaster", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementStart(5, "c-card")(6, "c-card-header");
    \u0275\u0275text(7, " Toaster ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "c-card-body")(9, "c-container")(10, "c-row")(11, "c-col", 3)(12, "form", 4)(13, "h5");
    \u0275\u0275text(14, "Add toast with following props:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "c-form-check", 5);
    \u0275\u0275element(16, "input", 6);
    \u0275\u0275elementStart(17, "label", 7);
    \u0275\u0275text(18, " Toast autohide ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "c-input-group")(20, "span", 8);
    \u0275\u0275text(21, "Delay");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "c-input-group", 10)(24, "span", 8);
    \u0275\u0275text(25, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 11);
    \u0275\u0275repeaterCreate(27, ToastersComponent_For_28_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "c-input-group", 10)(30, "span", 8);
    \u0275\u0275text(31, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 13);
    \u0275\u0275repeaterCreate(33, ToastersComponent_For_34_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "c-form-check", 10);
    \u0275\u0275element(36, "input", 14);
    \u0275\u0275elementStart(37, "label", 15);
    \u0275\u0275text(38, "Fade");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "c-form-check", 10);
    \u0275\u0275element(40, "input", 16);
    \u0275\u0275elementStart(41, "label", 17);
    \u0275\u0275text(42, "Close Button");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "hr");
    \u0275\u0275elementStart(44, "button", 18);
    \u0275\u0275listener("click", function ToastersComponent_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addToast());
    });
    \u0275\u0275text(45, " Add toast ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "c-col", 19)(47, "c-toaster", 20)(48, "c-toast", 21)(49, "c-toast-header");
    \u0275\u0275text(50, "Toast title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "c-toast-body");
    \u0275\u0275text(52, "This is a static toast in a static toaster");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "c-toast", 22)(54, "c-toast-header", 23);
    \u0275\u0275text(55, "Toast title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "c-toast-body", 24);
    \u0275\u0275text(57, "This is a static toast in a static toaster");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "app-toast-simple", 25, 0);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(61, "c-card", 26)(62, "c-card-body")(63, "c-row")(64, "c-col")(65, "p");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "json");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const toast_r5 = \u0275\u0275reference(59);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(4, 17, ctx.positions, 1));
    \u0275\u0275advance(10);
    \u0275\u0275property("formGroup", ctx.toasterForm);
    \u0275\u0275advance(10);
    \u0275\u0275property("type", "number");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.positions);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.colors);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(22, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("placement", ctx.positionStatic)("ngStyle", \u0275\u0275pureFunction0(23, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("autohide", false)("fade", true)("visible", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("fade", true)("visible", true);
    \u0275\u0275advance();
    \u0275\u0275property("closeButton", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("autohide", false)("fade", true)("visible", true)("title", "App Toast");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" This is a toast in static positioned App toaster! ", toast_r5.index(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Form value: ", \u0275\u0275pipeBind1(67, 20, ctx.toasterForm.value), "");
  }
}, dependencies: [RowComponent, ColComponent, ToasterComponent, NgClass, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ContainerComponent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, FormSelectDirective, ButtonDirective, NgStyle, ToastComponent, ToastHeaderComponent, ToastBodyComponent, AppToastComponent, JsonPipe, SlicePipe] });
var ToastersComponent = _ToastersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastersComponent, { className: "ToastersComponent", filePath: "src\\app\\documentacion\\notifications\\toasters\\toasters.component.ts", lineNumber: 52 });
})();
export {
  Colors,
  ToastersComponent
};
//# sourceMappingURL=toasters.component-AN37WTTZ.js.map
