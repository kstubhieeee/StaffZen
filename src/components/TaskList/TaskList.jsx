/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    // console.log(data);

    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {/* <AcceptTask />
            <NewTask />
            <CompleteTask />
            <FailedTask /> */}
            {data.tasks.map((element, id) => {
                if (element.active) {
                    return <AcceptTask element={element} key={id} />
                }

                if (element.newTask) {
                    return <NewTask element={element} key={id} />
                }

                if (element.completed) {
                    return <CompleteTask element={element} key={id} />
                }

                if (element.failed) {
                    return <FailedTask element={element} key={id} />
                }
            })}
        </div>
    )
}

export default TaskList
