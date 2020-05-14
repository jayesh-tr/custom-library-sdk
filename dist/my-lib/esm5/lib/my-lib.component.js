/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var MyLibComponent = /** @class */ (function () {
    function MyLibComponent() {
        this.content = '😄';
        this.btnClicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MyLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    MyLibComponent.prototype.handleBtnClick = /**
     * @return {?}
     */
    function () {
        console.log('yes I am in');
    };
    MyLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-my-lib',
                    template: "<h1>{{ title }}</h1>\n<h2>{{ subtitle }}</h2>\n\n<hr *ngIf=\"title || subtitle\">\n\n<p>{{ content }}</p>\n\n<button (click)=\"handleBtnClick()\">Click me!</button>",
                    styles: ["\n    :host {\n      text-align: center;\n      background: white;\n      display: block;\n      padding: .45rem .65rem;\n      border-radius: 3px;\n      max-width: 325px;\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n    }\nh2 {\n  color: #c85f7f;\n}\n\np {\n  text-align: center;\n}  "]
                }] }
    ];
    /** @nocollapse */
    MyLibComponent.ctorParameters = function () { return []; };
    MyLibComponent.propDecorators = {
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        content: [{ type: Input }],
        btnClicked: [{ type: Output }]
    };
    return MyLibComponent;
}());
export { MyLibComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9teS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBZ0NFO1FBRkEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNMLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFakIsaUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHVDQUFjOzs7SUFBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZ0xBQXNDOzZCQUVwQyxvU0FnQkE7aUJBRUg7Ozs7O3dCQUdFLEtBQUs7MkJBRUwsS0FBSzswQkFFTCxLQUFLOzZCQUVMLE1BQU07O0lBU1QscUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQWpCWSxjQUFjOzs7SUFFekIsK0JBQ2M7O0lBQ2Qsa0NBQ2lCOztJQUNqQixpQ0FDZTs7SUFDZixvQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1teS1saWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbXktbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAuNDVyZW0gLjY1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgbWF4LXdpZHRoOiAzMjVweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5oMiB7XG4gIGNvbG9yOiAjYzg1ZjdmO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb250ZW50ID0gJ/CfmIQnO1xuICBAT3V0cHV0KCkgYnRuQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGhhbmRsZUJ0bkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCd5ZXMgSSBhbSBpbicpO1xuICB9XG59XG4iXX0=