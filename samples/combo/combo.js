
app = angular.module("app");

app.directive("dir", function () {
    return {
        restrict: 'EA',
        scope: {
            data: "=",
            flag: "<",
            ngModel: "=",
            comboValue: "<",
            total: "@"
        },
        templateUrl: "combo.html",

        link: function (scope, element, attrs, controller) {
            scope.flag = false;

            scope.$watch(function () { return scope.ngModel }, function (model) {
                for (let d of scope.data) {
                    if (d.Id == scope.ngModel) {
                        scope.comboValue = d.Name;
                        break;
                    }
                }
            });

            scope.selectItem = function (item) {
                scope.ngModel = item.Id;
            }

            element.bind("click", function () {
                scope.$apply(function () {
                    scope.flag = true;
                });
            });

            scope.closeCombo = function () {
                if (!angular.element(document.activeElement).hasClass("noBlur")) {
                    scope.flag = false;
                }
                else
                {
                    angular.element(".combo").focus();
                }
            }

        }
    }
})