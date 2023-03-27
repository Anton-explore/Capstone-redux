
import { createServer, Model } from "miragejs"

const server = () => createServer({

  models: {
    skill: Model
  },


  routes() {
    this.namespace = "api"


    this.get("/skills", (schema, request) => {
      return schema.skills.all()
    }, { timing: 3000 }
    )


    this.post("/skills", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      return schema.skills.create(attrs)
    })
        

    this.delete("/skills/:id", (schema, request) => {
      let id = request.params.id;
      return schema.skills.find(id).destroy()
    })

    this.get("/educations", () => {
        return {
          educations: [
            {
              id: 1,
              "date": "2023",
              "title": "EPAM UpSkill",
              "description": "Frontend Development. Stack: HTML, CSS, SCSS, JavaScript, Git(Github,Gitlab), Typescript, React, Redux"
            },
            {
              id: 2,
              "date": "2023",
              "title": "DevPRO",
              "description": "Internship Javascript basic, Angular basic, Typescript basic"
            },
            {
              id: 3,
              "date": "2022",
              "title": "QAtestLab",
              "description": "Software Functional Testing (Manual QA). Debugging - creating bug-reports, check-list, check-plan, test-cases.  Game-testing, mobile-testing. Understanding of the life-cycle of Software Testing. SCRUM-methodology."
            },
            {
              id: 4,
              "date": "2022",
              "title": "Prometheus",
              "description": "Basics of Web UI Development.  Javascript basic course. Stack: JavaScript, OOP, HTML, CSS, SCSS, Bootstrap, Git(GitHub), Slack/Jira, Photoshop, Figma"
            },
            {
              id: 5,
              "date": "2009",
              "title": "LNU Tarasa Shevchenka",
              "description": "Sociology & PR - master degree, International tourism - practical course"
            }
          ],
        }
      }, { timing: 3000 }
    )

    
  },
})

export default server;