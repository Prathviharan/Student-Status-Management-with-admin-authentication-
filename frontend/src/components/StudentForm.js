import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentForm = ({ student, onSave }) => {
    const [formData, setFormData] = useState({ name: "", age: "", image: "", status: "Active" });
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (student) {
            console.log("Editing student:",student);
            setFormData({ name: student.name, age: student.age, image: student.image, status: student.status });
            setImagePreview(student.image);
        }
    }, [student]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setFormData({ ...formData, image: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let uploadedImageUrl = formData.image;
        if (formData.image instanceof File) {
            uploadedImageUrl = await handleImageUpload(formData.image);
        }

        const updatedData = { ...formData, image: uploadedImageUrl };
        onSave(updatedData);

        setFormData({ name: "", age: "", image: "", status: "Active" });
        setImagePreview(null);
    };

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("your-upload-endpoint", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            
            return response.data.imageUrl;
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    className="form-control"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Upload Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    className="form-control"
                    onChange={handleImageChange}
                />
                {imagePreview && (
                    <div className="mt-2">
                        <img
                            src={imagePreview}
                            alt="Image Preview"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                    </div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    className="form-control"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <button type="submit" className="btn btn-success mt-3">
                {student ? "Add Student" : "Save Changes" }
            </button>
        </form>
    );
};

export default StudentForm;
