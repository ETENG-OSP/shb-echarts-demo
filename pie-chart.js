angular.module('app')
  .directive('pieChart', PieChartDirective);

function PieChartDirective() {
  return {
    link: link,
    scope: {
      chartOptions: '='
    }
  };
}

function link(scope, element) {
  var dom = element[0];
  require([
    'echarts',
    'echarts/chart/pie'
  ], function(echarts) {
    var myChart = echarts.init(dom);
    myChart.setOption(scope.chartOptions);
  });
}
