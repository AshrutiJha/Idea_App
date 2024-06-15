// logic to create controllers for ideas
const ideas =require("../models/ideas.model")


let id =3




//create the controller for fetching all ideas 


//GET 127.0.0.1:8000/ideaApp/api/v1/ideas


//Return list of all ideas


exports.getAllIdeas = (req,res)=>{

    //first read all ideas from idea model file

    //then return all ideas

    res.status(200).send(ideas)
}


//controllers that fetch ideas based on id


exports.getIdeaBasedOnId = (req,res)=>{
    idea_id = req.params.id


if(ideas[idea_id]){
 } else{
        res.status(404)({
        message : "Idea with the given idea id not found"
        })
    }

}

//controller to create a new idea

exports.createIdea = (req,res)=>{
    idea_object = req.body
    id++
    idea_object["id"] = id
    ideas[id]=idea_object

    res.status(201).send(idea_object)
} 

//controller for updating idea

exports.updateIdea = (req, res)=>{
    idea_id = req.params.id

    if(ideas[idea_id]){
        idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)

    }else{
        return res.status(404).send({
            message : "Idea id you wanted to update doesn't exist!"
        })
    }

}

exports.deleteIdea = (req, res)=>{
    idea_is = req.params.id

    if(ideas[idea_id]){
        delete ideas[idea_id]
        res.status(200).send({
            message : "Yay , your idea has been deleted successfully"
        })

    }else{
        return res.status(404).send({
            massage : "Idea id you wanted to delete is already not present boss!"
        })
    }
}