import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Paginationp from './Pagination';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services';

const User = () => {
    const [listofTasks, setListofTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() => {
        axios.get(`${BASE_URL}/tasks/gettasks`)
            .then(res => {
                setListofTasks(res.data)
            })
    })

    // const handleCheckboxChange = async (id) => {
    //     axios.put(`${BASE_URL}/tasks/updatetaskstatus/${id}`,
    //         {

    //         })
    //         .then(res => {
    //             console.log(res.data)
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = listofTasks.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <h1 className='w-full my-10 text-5xl font-bold leading-tight text-center text-listcolor'>List of All Tasks</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400 ml-24 mt-5 pl-60">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                            {/* <th scope="col" class="px-6 py-3">
                                Mark As Completed
                            </th> */}
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((task) => {
                            return (
                                <tr className="bg-rowcolor dark:bg-gray-800 pb-5 hover:bg-rowhover">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {task.title}
                                    </th>
                                    <td class="px-6 py-4">
                                        {task.description}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Link to={`/user/${task._id}`}>View Task Details</Link></a>
                                    </td>
                                    {/* <td class="px-6 py-4">
                                        <div class="flex items-center mr-4">
                                            <input onChange={handleCheckboxChange(task.id)} id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </div>
                                    </td> */}
                                    <td class="px-6 py-4">
                                        {task.status === true ?
                                            <span className='text-green-500'>Completed</span> :
                                            <span className='text-red-500'>Pending</span>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Paginationp
                totalPosts={listofTasks.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default User