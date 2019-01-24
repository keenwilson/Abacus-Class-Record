const Assignment = require("../../models/assignment");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const Classroom = require("../../models/classroom")
const Student = require('../../models/student')

router.get("/assignments", async (req, res) => {
    const assignment = await Assignment.find()
        .select("-__v")
        .sort("assignmentType")
         const studentsInClass = Classroom.studenId
         studentsInClass.map(this.assignment)   
        res.send(assignment);

});
router.post("/assignments/submit", async (req, res) => {
    let assignment = new Assignment({
        assignmentName: req.body.assignmentName,
        assignmentDesc: req.body.assignmentDesc,
        assignmentType: req.body.assignmentType,
        dateSubmited: req.body.dateSubmitted,
        dueDate: moment(req.body.assignmentDueDate, MM/DD/YYYY)
    });
    assignment = await assignment.save();
    
    if (!assignment)
    return res.status(404).send("The assignment with the given ID was not found.");
    
    res.send(assignment);
});

router.put("/assignments/update/:id", async (req, res) => {
    const assignment = await assignment.findByIdAndUpdate(
        req.params.id,
        {
            assignmentName: req.body.assignmentName,
            assignmentDesc: req.body.assignmentDesc,
            assignmentType: req.body.assignmentType,
            startDate: req.body.assignmentStartDate,
            dueDate: req.body.assignmentDueDate
        },
        { new: true }
    );

    if (!assignment)
        return res.status(404).send("The assignment with the given ID was not found.");

    res.send(assignment);
});

router.delete("/assignments/delete/:id", async (req, res) => {
    const assignment = await Assignment.findByIdAndRemove(req.params.id);

    if (!assignment)
        return res.status(404).send("The assignment with the given ID was not found.");

    res.send(assignment);
});

router.get("/assignments/:id", auth, async (req, res) => {
    const assignment = await assignment.findById(req.params.id).select("-__v");

    if (!assignment)
        return res.status(404).send("The assignment with the given ID was not found.");

    res.send(assignment);
});

module.exports = router;
