import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services';

const Userprofile = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [task, setTask] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}/tasks/taskpage/${id}`)
            .then(res => setTask(res.data))
            .catch(err => console.log(`Error: ${err}`))
    })

    const deleteTask = () => {
        axios.delete(`${BASE_URL}/tasks/deletetask/${id}`)
            .then(res => {
                alert("Task deleted successfully")
                // window.location.reload()
                navigate('/');
            }).catch(err => console.log(`Error: ${err}`))
    }


    return (
        <div className='pt-5'>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div class="max-h-96 md:h-screen">
                        <img class="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                    <div class="flex bg-gray-100 p-10 ml-10">
                        <div class="mb-auto mt-auto max-w-lg">
                            <h1 class="text-3xl uppercase">{task.title}</h1>
                            {/* <p class="font-semibold mb-5">{task.description}</p> */}
                            <p>{task.description}</p>
                            {task.status === true ?
                                <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Completed</button> :
                                <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Pending</button>
                            }

                            <div className="mt-6 ml-5">
                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mr-10 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><Link to={`/edituser/${id}`}>Edit</Link></button>
                                <button onClick={deleteTask} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userprofile
