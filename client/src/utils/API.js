import axios from 'axios';

export default {
    // Get All Teachers
    getTeachers: function() {
        return axios.get('api/teachers');
    },

    // Get specific Teacher
    getTeacher: function(id) {
        return axios.get('api/teachers/' + id);
    },

    // Delete a Teacher
    deleteTeacher: function(id) {
        return axios.delete('api/teachers/' + id);
    },

    // Save a Teacher
    saveTeacher: function(teacherData) {
        return axios.post('/api/teachers', teacherData)
    },

    updateTeacher: function(id, teacherData) {
        return axios.put('/api/teachers', teacherData);
    }
};