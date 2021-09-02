var message = "Hello World";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Test");
    };
    return Site;
}());
var obj = new Site();
obj.name();
