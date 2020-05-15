import { Injectable, Component, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibService {
    constructor() { }
    /**
     * @param {...?} params
     * @return {?}
     */
    add(...params) {
        /** @type {?} */
        let result = 0;
        for (const val of params) {
            result += val;
        }
        return result;
    }
}
MyLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root",
            },] }
];
/** @nocollapse */
MyLibService.ctorParameters = () => [];
/** @nocollapse */ MyLibService.ngInjectableDef = defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibComponent],
                imports: [CommonModule, BrowserModule],
                exports: [MyLibComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MyLibService, MyLibComponent, MyLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1saWIvZmVhdHVyZXMvbXktbGliL215LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teS1saWIvZmVhdHVyZXMvbXktbGliL215LWxpYi5jb21wb25lbnQudHMiLCJuZzovL215LWxpYi9mZWF0dXJlcy9teS1saWIvbXktbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZCguLi5wYXJhbXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBwYXJhbXMpIHtcbiAgICAgIHJlc3VsdCArPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLW15LWxpYlwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL215LWxpYi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBjb2xvcjogI2M4NWY3ZjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQgPSBcIsOwwp/CmMKEXCI7XG4gIEBPdXRwdXQoKSBidG5DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGhhbmRsZUJ0bkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlMaWJDb21wb25lbnQgfSBmcm9tIFwiLi9teS1saWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTXlMaWJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCcm93c2VyTW9kdWxlXSxcbiAgZXhwb3J0czogW015TGliQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BS2EsWUFBWTtJQUN2QixpQkFBZ0I7Ozs7O0lBRWhCLEdBQUcsQ0FBQyxHQUFHLE1BQWdCOztZQUNqQixNQUFNLEdBQUcsQ0FBQztRQUNkLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxHQUFHLENBQUM7U0FDZjtRQUNELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pELE1BMEJhLGNBQWM7SUFRekI7UUFGQSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ0wsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FDbkM7Ozs7SUFFaEIsUUFBUSxNQUFLOzs7O0lBRWIsY0FBYztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEI7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG9MQUFzQzt5QkFFcEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJDO2FBRUo7Ozs7O29CQUVFLEtBQUs7dUJBRUwsS0FBSztzQkFFTCxLQUFLO3lCQUVMLE1BQU07Ozs7Ozs7QUNqQ1QsTUFVYSxXQUFXOzs7WUFMdkIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7In0=