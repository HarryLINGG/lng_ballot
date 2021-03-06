function makeChart(title,values,name) {

    var doughnutData = [
    {
        value: 30,
        color:"#F7464A"
    },
    {
        value : 50,
        color : "#46BFBD"
    },
    {
        value : 100,
        color : "#FDB45C"
    },
    {
        value : 40,
        color : "#949FB1"
    },
    {
        value : 120,
        color : "#4D5360"
    }

    ];
    var lineChartData = {
        labels : ["","","","","","",""],
        datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
        }
        ]

    };
    var pieData = [
    {
        value: 30,
        color:"#F38630"
    },
    {
        value : 50,
        color : "#E0E4CC"
    },
    {
        value : 100,
        color : "#69D2E7"
    }

    ];
    var barChartData = {
        labels : [name[0],name[1],name[2],name[3],name[4]],
        datasets : [
        { 
            label: title,
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [values[0],values[1],values[2],values[3],values[4]]
        }
        ]

    };
    var chartData = [
    {
        value : Math.random(),
        color: "#D97041"
    },
    {
        value : Math.random(),
        color: "#C7604C"
    },
    {
        value : Math.random(),
        color: "#21323D"
    },
    {
        value : Math.random(),
        color: "#9D9B7F"
    },
    {
        value : Math.random(),
        color: "#7D4F6D"
    },
    {
        value : Math.random(),
        color: "#584A5E"
    }
    ];
    var radarChartData = {
        labels : ["","","","","","",""],
        datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
        }
        ]

    };

    new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);



};