/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
export class MyLibComponent {
    constructor() {
        this.content = "😄";
        this.btnClicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    handleBtnClick() {
        console.log("Clicked");
    }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-my-lib",
                template: "<h1>{{ title }}</h1>\n<h2>{{ subtitle }}</h2>\n\n<hr *ngIf=\"title || subtitle\" />\n\n<p>{{ content }}</p>\n\n<button (click)=\"handleBtnClick()\">Click me!</button>\n",
                styles: [`
      :host {
        text-align: center;
        background: white;
        display: block;
        padding: 0.45rem 0.65rem;
        border-radius: 3px;
        max-width: 325px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
      h2 {
        color: #c85f7f;
      }

      p {
        text-align: center;
      }
    `]
            }] }
];
/** @nocollapse */
MyLibComponent.ctorParameters = () => [];
MyLibComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    content: [{ type: Input }],
    btnClicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MyLibComponent.prototype.title;
    /** @type {?} */
    MyLibComponent.prototype.subtitle;
    /** @type {?} */
    MyLibComponent.prototype.content;
    /** @type {?} */
    MyLibComponent.prototype.btnClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LWxpYi8iLCJzb3VyY2VzIjpbImZlYXR1cmVzL215LWxpYi9teS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEIvRSxNQUFNLE9BQU8sY0FBYztJQVF6QjtRQUZBLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDTCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsY0FBYztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsb0xBQXNDO3lCQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQkM7YUFFSjs7Ozs7b0JBRUUsS0FBSzt1QkFFTCxLQUFLO3NCQUVMLEtBQUs7eUJBRUwsTUFBTTs7OztJQU5QLCtCQUNjOztJQUNkLGtDQUNpQjs7SUFDakIsaUNBQ2U7O0lBQ2Ysb0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItbXktbGliXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbXktbGliLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAuNDVyZW0gMC42NXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDMyNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjYzg1ZjdmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29udGVudCA9IFwi8J+YhFwiO1xuICBAT3V0cHV0KCkgYnRuQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBoYW5kbGVCdG5DbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWRcIik7XG4gIH1cbn1cbiJdfQ==