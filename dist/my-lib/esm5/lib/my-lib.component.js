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
    function () { };
    /**
     * @return {?}
     */
    MyLibComponent.prototype.handleBtnClick = /**
     * @return {?}
     */
    function () {
        console.log('Clicked');
    };
    MyLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-my-lib',
                    template: "<h1>{{ title }}</h1>\n<h2>{{ subtitle }}</h2>\n\n<hr *ngIf=\"title || subtitle\">\n\n<p>{{ content }}</p>\n\n<button (click)=\"handleBtnClick()\">Click me!</button>",
                    styles: ["\n      :host {\n        text-align: center;\n        background: white;\n        display: block;\n        padding: 0.45rem 0.65rem;\n        border-radius: 3px;\n        max-width: 325px;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n      }\n      h2 {\n        color: #c85f7f;\n      }\n\n      p {\n        text-align: center;\n      }\n    "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9teS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBZ0NFO1FBRkEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNMLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFaEIsaUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7OztJQUViLHVDQUFjOzs7SUFBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZ0xBQXNDOzZCQUVwQyxnV0FpQkM7aUJBRUo7Ozs7O3dCQUVFLEtBQUs7MkJBRUwsS0FBSzswQkFFTCxLQUFLOzZCQUVMLE1BQU07O0lBUVQscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWZZLGNBQWM7OztJQUN6QiwrQkFDYzs7SUFDZCxrQ0FDaUI7O0lBQ2pCLGlDQUNlOztJQUNmLG9DQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW15LWxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBjb2xvcjogI2M4NWY3ZjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQgPSAn8J+YhCc7XG4gIEBPdXRwdXQoKSBidG5DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGhhbmRsZUJ0bkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJyk7XG4gIH1cbn1cbiJdfQ==