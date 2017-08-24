/**
 * Created by ayushimittal on 21/08/17.
 */
app.directive('amRepeat',['$compile',function ($compile) {
    return {
        restrict:'A',
        link: function (scope, element, attr) {
                var i,newEle ,newScope;
                var value = attr.amRepeat.split(' ');
                var iteratorName = value[0];
                var data = scope[value[2]];
                element[0].style.display='none';
                attr.$set('amRepeat',null);
                for(i = data.length-1; i >= 0; i--) {
                    newEle = element[0].cloneNode(true);
                    newScope = scope.$new(true);
                    newScope.$newIndex = i;
                    newEle.style.display='block';
                    newScope[iteratorName] = data[i] ;
                    $compile(newEle)(newScope);
                    element[0].parentNode.insertBefore(newEle,element[0].nextElementSibling);
                }
        }
    };
}]);