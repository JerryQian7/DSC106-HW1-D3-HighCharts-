<html>
   <head>
      <title>Highcharts Tutorial</title>
      <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
      <script src = "https://code.highcharts.com/highcharts.js"></script> 
   </head>
   
   <body>
      <div id = "container" style = "width: 600px; height: 400px; margin: 0 auto"></div>
      <script language = "JavaScript">
         $(document).ready(function() {
            var title = {
               text: 'Full Time Applicants 2005-2018'   
            };
            var subtitle = {
               text: ''
            };
            var xAxis = {
               categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,
               2016,2017,2018]
            };
            var yAxis = {
               title: {
                  text: 'Number of People'
               },
               plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
               }]
            };   
            var tooltip = {
               valueSuffix: '\xB0C'
            }
            var legend = {
               layout: 'vertical',
               align: 'right',
               verticalAlign: 'middle',
               borderWidth: 0
            };
            var series =  [{
                  name: 'Full Time Men Applied',
                  data: [18147,19838,20566,21590,21725,22332,25097,28758,
                  31992,34618,37009,39779,41583,45636]
               }, 
               {
                   name:'Full Time Women Applied',
                   data:[22371,23748,24507,25775,25321,25761,28351,
                   32049,35408,38822,41407,44430,46845,52265]
               }
            ];

            var json = {};
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.tooltip = tooltip;
            json.legend = legend;
            json.series = series;
            
            $('#container').highcharts(json);
         });
      </script>
   </body>
   
</html>
