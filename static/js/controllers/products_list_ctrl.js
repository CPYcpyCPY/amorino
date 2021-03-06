angular.module('glassApp')
    .controller('products_list_ctrl', function ($scope) {
        $scope.cur_lang = sessionStorage['cur_lang'];
        $scope.data = JSON.parse(sessionStorage['data']);
        $scope.curPage = 'products';
        $scope.repeat = false;

        var type = sessionStorage.getItem('type');
        var kind = sessionStorage.getItem('kind');
        getType($scope, $scope.data.products);

        if (type && kind) {
            $scope.cur_type = type;
            $scope.cur_kind = kind;
            var details = $scope.data.products[type].details[kind];
            $scope.num = details.length;
            $scope.details = details;
        } else {
            if ($scope.type1 != null && $scope.type1.kinds.length != 0) {
                var first_kind = $scope.type1.kinds[0].key;
                var first_detail = $scope.type1.details[first_kind];
                $scope.num = first_detail.length;
                $scope.details = first_detail;
                $scope.cur_type = $scope.type1.name.key;
                $scope.cur_kind = first_kind;
            }

        }

        $scope.getKind = function (type, kind) {
            var detail;
            $scope.cur_type = type;
            $scope.cur_kind = kind;
            detail = $scope.data.products[type].details[kind];
            if (detail) {
                $scope.num = detail.length;
                $scope.details = detail;
            } else {
                $scope.num = 0;
                $scope.details = {};
            }
        };

        $scope.setDetail = function (type, kind, index) {
            if ($(".username").text()) {
                sessionStorage.setItem('type_', type);
                sessionStorage.setItem('kind_', kind);
                sessionStorage.setItem('index_', index);
                $scope.detail_url = '/products_detail';
            } else {
                $('#login').fadeIn('slow');
                $scope.detail_url = '#';
            }
        };

        $scope.setDetail_ = function (type, kind, index) {
            if ($(".username").text()) {
                sessionStorage.setItem('type_', type);
                sessionStorage.setItem('kind_', kind);
                sessionStorage.setItem('index_', index);
                $scope.detail_url = '/products_detail';
            } else {
                $scope.detail_url = '/login_page';
            }
        };

        $scope.setType = function (type) {
            if ($scope.cur_type == type) {
                if ($scope.repeat) $scope.repeat = false;
                else $scope.repeat = true;
            } else {
                $scope.repeat = false;
            }
            $scope.cur_type = type;
            $scope.cur_kind = $scope.data.products[type].kinds[0].key;
            $scope.details = $scope.data.products[type].details[$scope.cur_kind];
        };
        $scope.isEmptyObject = isEmptyObject;
    });

function getType($scope, data) {
    var index = 1;
    $scope['type1'] = null;
    for (var obj in $scope.data.products) {
        $scope['type' + index] = data[obj];
        index++;
    }
}

function isEmptyObject(o){
    for(var n in o){
        return false;
    }
    return true;
}

