// bug 766872: function with type parameter in generic base class
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseClass = (function () {
    function BaseClass() {
    }
    return BaseClass;
})();

var SubClass = (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        _super.apply(this, arguments);
    }
    SubClass.prototype.Error = function () {
        var x = this._getValue1();
        var y = this._getValue2();
    };
    return SubClass;
})(BaseClass);
