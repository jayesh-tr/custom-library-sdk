/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class MyLibService {
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
/** @nocollapse */ MyLibService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1saWIvIiwic291cmNlcyI6WyJmZWF0dXJlcy9teS1saWIvbXktbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLGdCQUFlLENBQUM7Ozs7O0lBRWhCLEdBQUcsQ0FBQyxHQUFHLE1BQWdCOztZQUNqQixNQUFNLEdBQUcsQ0FBQztRQUNkLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxHQUFHLENBQUM7U0FDZjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYlNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkKC4uLnBhcmFtczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHBhcmFtcykge1xuICAgICAgcmVzdWx0ICs9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19