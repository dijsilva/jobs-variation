var data = JSON.parse(document.getElementById("value_from_server").value)
var last_week = data.weeks


var ctx = document.querySelectorAll('canvas#myChart');
for (let indexGraphic = 0; indexGraphic < ctx.length; indexGraphic++){
    const state = ctx[indexGraphic].getAttribute("state")
    const labels = []
    const jobs = []
    last_week.languages.map(language => {
        if (language.state == state && language.source_site == 'LINKEDIN'){
            labels.push(language.language)
            jobs.push(language.jobs)
        }
    })


    var myChart = new Chart(ctx[indexGraphic], {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Vagas',
                data: jobs,
                backgroundColor: 'rgba(58, 168, 223, 0.8)',
                borderColor: 'rgba(58, 168, 223, 0.8)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Vagas'
                      }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: false,
                        maxRotation: 30,
                        minRotation: 30
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Linguagem'
                      }
                }]
                },
        }
    });
}



var ctx_line = document.querySelectorAll('canvas#myChart-line');
const variation = data.variation.LINKEDIN

for (let indexGraphic = 0; indexGraphic < ctx_line.length; indexGraphic++){
    const state = ctx_line[indexGraphic].getAttribute("state")
    console.log(variation[state].Python.jobs)
    var myLineChart = new Chart(ctx_line[indexGraphic], {
        type: 'line',
        data: {
            labels: ["22-05", "01-06"],
            datasets: [{
                label: 'Python',
                backgroundColor: "transparent",
                borderColor: "#373737",
                labels: ["22-05", "01-06"],
                data: variation[state].Python.jobs,
            },
            {
                label: 'Java',
                backgroundColor: "transparent",
                borderColor: "#ff704d",
                data: variation[state].Java.jobs,
            },
            {
                label: 'Javascript',
                backgroundColor: "transparent",
                borderColor: "#ffd11a",
                data: variation[state].Javascript.jobs,
            },
            {
                label: 'C',
                backgroundColor: "transparent",
                borderColor: "#0099ff",
                data: variation[state].C.jobs,
            },
            {
                label: 'C++',
                backgroundColor: "transparent",
                borderColor: "#005ce6",
                data: variation[state].C_plusplus.jobs,
            },
            {
                label: 'C#',
                backgroundColor: "transparent",
                borderColor: "#3385ff",
                data: variation[state].C_sharp.jobs,
            }]
    
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Vagas'
                      }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: false,
                        maxRotation: 30,
                        minRotation: 30
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Data'
                      }
                }]
                },
        }
    });
}