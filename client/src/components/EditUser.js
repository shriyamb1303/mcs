import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services';



const EditUser = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState();

    const [currenttask, setCurrentTask] = useState({});

    const handleCheckboxChange = (event) => {
        setStatus(event.target.checked);
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/tasks/taskpage/${id}`)
            .then(res => {
                setCurrentTask(res.data)
            })
    })

    const updateTask = (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}/tasks/updatetask/${id}`, {
            title,
            status,
            description
        })
            .then((response) => {
                alert("User updated successfully");
                navigate(`/user/${id}`);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update task</h2>
                    <form action="#">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div class="sm:col-span-2">
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" placeholder={currenttask.title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                            </div>
                            <div class="w-full">
                                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                {/* {currenttask.status ?
                                    <p>Completed</p> :
                                    <p>Pending</p>}
                                <label></label> */}
                                <div class="flex items-center mr-4">
                                    <input
                                        // checked={status}
                                        onChange={handleCheckboxChange} id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                            </div>
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job</label>
                                <input type='text' placeholder={currenttask.description} onChange={(e) => setDescription(e.target.value)} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                </input>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button onClick={updateTask} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Update Task
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default EditUser
