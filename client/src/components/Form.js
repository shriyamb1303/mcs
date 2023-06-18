import React from 'react'
import { useState } from 'react';
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services';



const Form = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        Axios.post(`${BASE_URL}/tasks/addtask`, {
            title,
            description
        })
            .then((response) => {
                alert("Task created successfully");
                navigate("/");
            })
    }

    return (
        <div>
            <div class="mb-6 w-3/4 align-middle mx-auto mt-8">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} id="message" rows="4" class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-3/4 align-middle mx-auto" placeholder="Description..."></textarea>
            <button onClick={createUser} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <div className='place-self-end mt-auto'>
                <Link to="/">
                    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-48 ml-80 place-items-end">Back to Tasks</button>
                </Link>
            </div>
        </div>
    )
}

export default Form
