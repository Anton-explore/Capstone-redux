
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
              "date": 2023,
              "title": "EPAM UpSkill",
              "description": "Frontend Development. Elit voluptate ad nostrud laboris."
            },
            {
              id: 2,
              "date": 2022,
              "title": "Prometheus",
              "description": "Basics of Web UI Development.  Javascript basic course. Et irure culpa ad proident labore excepteur elit dolore."
            },
            {
              id: 3,
              "date": 2009,
              "title": "LNU Tarasa Shevchenka",
              "description": "Sociology & PR, International tourism. Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate."
            }
          ],
        }
      }, { timing: 3000 }
    )

    
  },
})

export default server;