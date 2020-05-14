/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class MyLibComponent {
    constructor() {
        this.content = '😄';
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
        console.log('Clicked');
    }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-my-lib',
                template: "<h1>{{ title }}</h1>\n<h2>{{ subtitle }}</h2>\n\n<hr *ngIf=\"title || subtitle\">\n\n<p>{{ content }}</p>\n\n<button (click)=\"handleBtnClick()\">Click me!</button>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9teS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEIvRSxNQUFNLE9BQU8sY0FBYztJQVF6QjtRQUZBLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDTCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsY0FBYztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsZ0xBQXNDO3lCQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQkM7YUFFSjs7Ozs7b0JBRUUsS0FBSzt1QkFFTCxLQUFLO3NCQUVMLEtBQUs7eUJBRUwsTUFBTTs7OztJQU5QLCtCQUNjOztJQUNkLGtDQUNpQjs7SUFDakIsaUNBQ2U7O0lBQ2Ysb0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXktbGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL215LWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAuNDVyZW0gMC42NXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDMyNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjYzg1ZjdmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29udGVudCA9ICfwn5iEJztcbiAgQE91dHB1dCgpIGJ0bkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgaGFuZGxlQnRuQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQnKTtcbiAgfVxufVxuIl19