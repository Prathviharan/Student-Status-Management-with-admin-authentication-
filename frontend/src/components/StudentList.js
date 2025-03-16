import React from "react";
import { FaEdit, FaTrashAlt, FaPowerOff, FaCheck } from "react-icons/fa";

const StudentList = ({ students, onActivateDeactivate, onEdit, onDelete }) => {
    return (
        <div className="mt-4">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                {student.image && student.image !== "" ? (
                                    <img
                                        src={student.image}
                                        alt={`${student.name}'s image`}
                                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                    />
                                ) : (
                                    <span>No image</span>
                                )}
                            </td>
                            <td>{student.status}</td>
                            <td>
                                <div className="d-flex justify-content-start align-items-center">
                                    <button
                                    className={`btn btn-${student.status === "Active" ? "warning" : "success"} mr-2`}
                                    onClick={() => onActivateDeactivate(student.id)}
                                >
                                    {student.status === "Active" ? "Deactivate" : "Activate"}
                                </button>
                                    <button
                                        className="btn btn-primary mr-2"
                                        onClick={() => onEdit(student)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => onDelete(student.id)}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
