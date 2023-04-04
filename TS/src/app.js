"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var hr = "Hello TS";
console.warn(hr);
console.log("Khushal Sharma");
var a = 12;
var b = 6;
var c = 2;
console.log(a / b);
console.log(c * b);
console.log(typeof (a));
var any_datatype;
any_datatype = 'Khushal Sharma';
var album; // union datatype
album = '4';
var sum = function (a, b) {
    return a + b;
};
var users = {
    name: 'bruce',
    age: 30,
    address: 'USA'
};
console.warn(users);
function calc(a, b) {
    return b ? a + b : a;
}
console.warn(calc(100));
console.warn(calc(100, 120));
// classes in typescript
var App = /** @class */ (function () {
    function App() {
        this.name = "Khushal Sharma";
        console.log("constructor called");
    }
    App.prototype.get_name = function () {
        return this.name;
    };
    return App;
}());
var a1 = new App();
console.log(a1.get_name());
// inheritance in typescript
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setname = function (nm) {
        this.nm = nm;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getName = function () {
        return this.nm;
    };
    return Child;
}(Parent));
var b1 = new Child();
b1.setname("Apoorva Khandelwal");
console.log(b1.getName());
// namespace in typescript
/// <reference path="./utils.ts"/>
var Userutils;
(function (Userutils) {
    var Users = /** @class */ (function (_super) {
        __extends(Users, _super);
        function Users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Users.prototype.getName = function () {
            return this.name;
        };
        return Users;
    }(Parent));
    Userutils.Users = Users;
})(Userutils || (Userutils = {}));
var u1 = new Userutils.Users();
u1.setname("Apoorva Khandelwal");
console.warn(u1.getName());
// tsc --init : this command is used to create tsconfig.json file
//tsc name.ts -w this command is used to run typescript file
