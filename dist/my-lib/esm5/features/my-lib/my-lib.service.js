/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
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
            for (var params_1 = tslib_1.__values(params), params_1_1 = params_1.next(); !params_1_1.done; params_1_1 = params_1.next()) {
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
    /** @nocollapse */ MyLibService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
    return MyLibService;
}());
export { MyLibService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1saWIvIiwic291cmNlcyI6WyJmZWF0dXJlcy9teS1saWIvbXktbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUlFO0lBQWUsQ0FBQzs7Ozs7SUFFaEIsMEJBQUc7Ozs7SUFBSDtRQUFJLGdCQUFtQjthQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7WUFBbkIsMkJBQW1COzs7O1lBQ2pCLE1BQU0sR0FBRyxDQUFDOztZQUNkLEtBQWtCLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXJCLElBQU0sR0FBRyxtQkFBQTtnQkFDWixNQUFNLElBQUksR0FBRyxDQUFDO2FBQ2Y7Ozs7Ozs7OztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3VCQUpEO0NBZUMsQUFiRCxJQWFDO1NBVlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYlNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkKC4uLnBhcmFtczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHBhcmFtcykge1xuICAgICAgcmVzdWx0ICs9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19