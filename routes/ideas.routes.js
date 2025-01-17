const idea_controller = require("../controllers/idea.controllers")

// route for
// GEt 127.0.0.1:8000/ideaApp/api/v1/ideas

module.exports = (app)=>{

    app.get("/ideaApp/api/v1/ideas",idea_controller.getAllIdeas)

    app.get("/ideaApp/api/v1/ideas/:id",idea_controller.getIdeaBasedOnId)

    app.post("/ideaApp/api/v1/ideas", idea_controller.createIdea)

    app.put("ideaApp/api/v1/ideas/:id", idea_controller.updateIdea)

    app.delete("/ideaApp/api/v1/ideas/:id", idea_controller.deleteIdea)
} 

