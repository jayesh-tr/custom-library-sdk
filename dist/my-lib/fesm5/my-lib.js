import { __values } from 'tslib';
import { Injectable, Component, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibService = /** @class */ (function () {
    function MyLibService() {
    }
    /**
     * @param {...?} params
     * @return {?}
     */
    MyLibService.prototype.add = /**
     * @param {...?} params
     * @return {?}
     */
    function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var e_1, _a;
        /** @type {?} */
        var result = 0;
        try {
            for (var params_1 = __values(params), params_1_1 = params_1.next(); !params_1_1.done; params_1_1 = params_1.next()) {
                var val = params_1_1.value;
                result += val;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (params_1_1 && !params_1_1.done && (_a = params_1.return)) _a.call(params_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    MyLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root",
                },] }
    ];
    /** @nocollapse */
    MyLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MyLibService.ngInjectableDef = defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
    return MyLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibComponent = /** @class */ (function () {
    function MyLibComponent() {
        this.content = "😄";
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
        console.log("Clicked");
    };
    MyLibComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-my-lib",
                    template: "<h1>{{ title }}</h1>\n<h2>{{ subtitle }}</h2>\n\n<hr *ngIf=\"title || subtitle\" />\n\n<p>{{ content }}</p>\n\n<button (click)=\"handleBtnClick()\">Click me!</button>\n",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MyLibComponent],
                    imports: [CommonModule, BrowserModule],
                    exports: [MyLibComponent],
                },] }
    ];
    return MyLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MyLibService, MyLibComponent, MyLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1saWIvZmVhdHVyZXMvbXktbGliL215LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teS1saWIvZmVhdHVyZXMvbXktbGliL215LWxpYi5jb21wb25lbnQudHMiLCJuZzovL215LWxpYi9mZWF0dXJlcy9teS1saWIvbXktbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZCguLi5wYXJhbXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBwYXJhbXMpIHtcbiAgICAgIHJlc3VsdCArPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLW15LWxpYlwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL215LWxpYi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBjb2xvcjogI2M4NWY3ZjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQgPSBcIsOwwp/CmMKEXCI7XG4gIEBPdXRwdXQoKSBidG5DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGhhbmRsZUJ0bkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlMaWJDb21wb25lbnQgfSBmcm9tIFwiLi9teS1saWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTXlMaWJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCcm93c2VyTW9kdWxlXSxcbiAgZXhwb3J0czogW015TGliQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBTUU7S0FBZ0I7Ozs7O0lBRWhCLDBCQUFHOzs7O0lBQUg7UUFBSSxnQkFBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLDJCQUFtQjs7OztZQUNqQixNQUFNLEdBQUcsQ0FBQzs7WUFDZCxLQUFrQixJQUFBLFdBQUFBLFNBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUFyQixJQUFNLEdBQUcsbUJBQUE7Z0JBQ1osTUFBTSxJQUFJLEdBQUcsQ0FBQzthQUNmOzs7Ozs7Ozs7UUFDRCxPQUFPLE1BQU0sQ0FBQztLQUNmOztnQkFaRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1QkFKRDtDQUVBOzs7Ozs7QUNGQTtJQWtDRTtRQUZBLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDTCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQUNuQzs7OztJQUVoQixpQ0FBUTs7O0lBQVIsZUFBYTs7OztJQUViLHVDQUFjOzs7SUFBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEI7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLG9MQUFzQzs2QkFFcEMsZ1dBaUJDO2lCQUVKOzs7Ozt3QkFFRSxLQUFLOzJCQUVMLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxNQUFNOztJQVFULHFCQUFDO0NBdkNEOzs7Ozs7QUNGQTtJQUtBO0tBSzJCOztnQkFMMUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMxQjs7SUFDeUIsa0JBQUM7Q0FMM0I7Ozs7Ozs7Ozs7Ozs7OyJ9