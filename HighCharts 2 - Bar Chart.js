<html>
   <head>
      <title>Highcharts Tutorial</title>
      <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
      <script src = "https://code.highcharts.com/highcharts.js"></script>  
   </head>
   
   <body>
      <div id = "container" style = "width: 550px; height: 400px; margin: 0 auto"></div>
      <script language = "JavaScript">
         $(document).ready(function() {  
            var chart = {
               type: 'bar'
            };
            var title = {
               text: 'Admission Data 2005 vs 2018'   
            };
            var subtitle = {
               text: ''  
            };
            var xAxis = {
               categories: ['Applied (M)', 'Applied (W)', 'Admitted (M)', 'Admitted (W)',
               'Enrolled (M)', 'Enrolled (W)'],
               title: {
                  text: null
               }
            };
            var yAxis = {
               min: 0,
               title: {
                  text: 'People',
                  align: 'high'
               },
               labels: {
                  overflow: 'justify'
               }
            };
            var tooltip = {
               valueSuffix: ' millions'
            };
            var plotOptions = {
               bar: {
                  dataLabels: {
                     enabled: true
                  }
               }
            };
            var legend = {
               layout: 'vertical',
               align: 'right',
               verticalAlign: 'top',
               x: -30,
               y: 140,
               floating: true,
               borderWidth: 1,
               
               backgroundColor: (
                  (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
                     '#FFFFFF'),
               shadow: true
            };
            var credits = {
               enabled: false
            };
            var series = [
               {
                  name: '2018',
                  data: [45636,52265,13781,15821,3220,3484]
               }, 
               
               {
                  name: '2005',
                  data: [18147,22371,7580,10311,1607,2113]      
               }
            ];
      
            var json = {};   
            json.chart = chart; 
            json.title = title;   
            json.subtitle = subtitle; 
            json.tooltip = tooltip;
            json.xAxis = xAxis;
            json.yAxis = yAxis;  
            json.series = series;
            json.plotOptions = plotOptions;
            json.legend = legend;
            json.credits = credits;
            $('#container').highcharts(json);
         });
      </script>
   </body>
   
</html>
