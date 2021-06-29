document.addEventListener("DOMContentLoaded", function(event){
var calcButton = document.getElementById('calc').addEventListener("click",calculate)
    function calculate(){
        var n = document.getElementById("revenue")
        var value = n.value
        var budg = document.getElementById('budget').value;
        if (budg == "50/20/30"){
            fifthytwentythirty(value)
        }
        if (budg == "70/20/10"){
            seventytwentyten(value)
        }
    }

    function fifthytwentythirty(value){
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        var nec = (value) * (50/100)
        var wants = (value) * (30/100)
        var save = (value) * (20/100)
        function drawChart() {
  
            var data = google.visualization.arrayToDataTable([
              ['Task', 'Hours per Day'],
              ['Housing,transportation,utilities,food',     nec],
              ['Travel,subscriptions etc',      wants],
              ['Savings',  save]
            ]);
        
            var options = {
              title: '50/20/30 budget rule'
            };
        
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        
            chart.draw(data, options);
            document.getElementById('piechart').style.display='block';
          }
    }

    function seventytwentyten(value){
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        var nec = (value) * (70/100)
        var debts = (value) * (30/100)
        var save = (value) * (20/100)

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Task', 'Hours per Day'],
              ['Housing,Utilities,entertainment',nec],
              ['Savings',  save],
              ['Debts',  debts]
            ]);
    
            var options = {
              title: '70/20/30 Budgeting rule',
              is3D: true,
            };
    
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
            document.getElementById('piechart').style.display='block';
          }
    
        
    }

  
   
  
  });
  
  
  
  