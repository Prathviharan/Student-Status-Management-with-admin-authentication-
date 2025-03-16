import React, { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        const data = [
            { id: 1, name: "student 1", image: "", age: 22, status: "Active" },
            { id: 2, name: "student 2", image: "", age: 23, status: "Inactive" },
        ];
        setStudents(data);
    }, []);

    const handleActivateDeactivate = (id) => {
        const updatedStudents = students.map((student) =>
            student.id === id ? { ...student, status: student.status === "Active" ? "Inactive" : "Active" } : student
        );
        setStudents(updatedStudents);
        setAlertMessage("Status updated successfully!");
    };

    const handleAddStudent = (student) => {
        const newStudent = { id: students.length + 1, ...student };
        setStudents([...students, newStudent]);
        setAlertMessage("Student added successfully!");
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
    };

    const handleSaveStudent = (student) => {
        if (student.id) {
            const updatedStudents = students.map((s) => (s.id === student.id ? student : s));
            setStudents(updatedStudents);
            setAlertMessage("Student updated successfully!");
        } else {
            const newStudent = { ...student, id: students.length + 1 };
            setStudents([...students, newStudent]);
            setAlertMessage("Student added successfully!");
        }
        setEditingStudent(null);
    };

    const handleDeleteStudent = (id) => {
        const filteredStudents = students.filter((student) => student.id !== id);
        setStudents(filteredStudents);
        setAlertMessage("Student deleted successfully!");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Admin Dashboard</h2>

            {alertMessage && <div className="alert alert-success">{alertMessage}</div>}

            <button className="btn btn-primary" onClick={() => setEditingStudent({})}>
                Add New Student
            </button>

            {editingStudent && (
                <StudentForm student={editingStudent} onSave={handleSaveStudent} />
            )}

            <StudentList
                students={students}
                onActivateDeactivate={handleActivateDeactivate}
                onEdit={handleEditStudent}
                onDelete={handleDeleteStudent}
            />
        </div>
    );
};

export default Dashboard;
