const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new mongoose.Schema(
    {
        studentId: [{
            $type: Schema.Types.ObjectId,
            ref: 'Student',
            currentGrade: {
                $type: Number
            },

        }],
        assignmentGrade: {
            $type: Number,
        }

    });

const Grade = mongoose.model('Grade', gradeSchema);
module.exports = Grade;