var ctx = document.querySelectorAll('canvas#myChart');
var data = JSON.parse(document.getElementById("value_from_server").value)

for (let indexGraphic = 0; indexGraphic < ctx.length; indexGraphic++){
    const state = ctx[indexGraphic].getAttribute("state")
    const labels = []
    const jobs = []
    data.languages.map(language => {
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

var myLineChart = new Chart(ctx_line, {
    type: 'line',
    data: {
        labels: ['1', '2'],
        datasets: [{
            backgroundColor: "#808080",
            label: 'Teste3',
            data: [10, 20,],
        },
        {
            label: 'Teste4',
            data: [15, 10],
        }]

    },
    options: {
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