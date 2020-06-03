const weeksSchema = require('../Models/weeks')
const jobsSchema = require('../Models/jobs')

module.exports = {
    async index(req, res){

        const information = {
            BSB: [
                {
                    name: "Python",
                    jobs: 0
                },
                {
                    name: "Java",
                    jobs: 0
                },
                {
                    name: "C",
                    jobs: 0
                },
                {
                    name: "Javascript",
                    jobs: 0
                },
                {
                    name: "C#",
                    jobs: 0
                },
                {
                    name: "C++",
                    jobs: 0
                }
            ]
        }
        res.render("main/update_jobs", { information })
    }
}