const weeksSchema = require('../Models/weeks')
const jobsSchema = require('../Models/jobs')

module.exports = {
    async index(req, res){
        const weeks = await weeksSchema.find()
        .populate('languages', '-_id -createdAt -updatedAt -week_date')
        .sort({'week': 1})      

        const LINKEDIN = {
            BSB: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            },
            SP: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            },
            MG: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            },
            SC: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            }
        }
        const CATHO = {
            BSB: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            },
            SP: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            },
            MG: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            },
            SC: {
                Python: {
                    jobs: []
                },
                Java: {
                    jobs: []
                },
                Javascript: {
                    jobs: []
                },
                C: {
                    jobs: []
                },
                C_plusplus: {
                    jobs: []
                },
                C_sharp: {
                    jobs: []
                }
            }
        }

        weeks.map(week => {
            week.languages.map(record => {
                if (record.source_site == 'LINKEDIN'){
                    if (record.language == 'Python'){
                        LINKEDIN[record.state].Python.jobs.push(record.jobs)
                    }
                    if (record.language == 'Java'){
                        LINKEDIN[record.state].Java.jobs.push(record.jobs)
                    }
                    if (record.language == 'Javascript'){
                        LINKEDIN[record.state].Javascript.jobs.push(record.jobs)
                    }
                    if (record.language == 'C'){
                        LINKEDIN[record.state].C.jobs.push(record.jobs)
                    }
                    if (record.language == 'C_plusPlus'){
                        LINKEDIN[record.state].C_plusplus.jobs.push(record.jobs)
                    }
                    if (record.language == 'C_sharp'){
                        LINKEDIN[record.state].C_sharp.jobs.push(record.jobs)
                    }
                }
                if (record.source_site == 'CATHO'){
                    if (record.language == 'Python'){
                        CATHO[record.state].Python.jobs.push(record.jobs)
                    }
                    if (record.language == 'Java'){
                        CATHO[record.state].Java.jobs.push(record.jobs)
                    }
                    if (record.language == 'Javascript'){
                        CATHO[record.state].Javascript.jobs.push(record.jobs)
                    }
                    if (record.language == 'C'){
                        CATHO[record.state].C.jobs.push(record.jobs)
                    }
                    if (record.language == 'C_plusPlus'){
                        CATHO[record.state].C_plusplus.jobs.push(record.jobs)
                    }
                    if (record.language == 'C_sharp'){
                        CATHO[record.state].C_sharp.jobs.push(record.jobs)
                    }
                }
            })
        })

        const data = {
            weeks: weeks[weeks.length - 1],
            variation: {
                LINKEDIN: LINKEDIN,
                CATHO: CATHO
            }
        }
        
        return res.render('main/index', {all: JSON.stringify(data)})
    }
}