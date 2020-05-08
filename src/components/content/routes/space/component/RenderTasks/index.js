import React, { useEffect, useState } from 'react';

import {
  CustomButton,
  Table,
  TableHeading,
} from '../../../../../../shared';
import { addTask, getTasks, updateTask } from '../../../helpers';
import { Task } from './Task';

export const RenderTasks = ({ spaceId, projectId }) => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    getTasks(spaceId, projectId).then((tasksPayload) => {
      updateTasks(tasksPayload);
    });
  }, []);

  const updateTaskDb = (taskId, payload) => {
    updateTask(spaceId, projectId, taskId, payload);
  };

  const createTask = async () => {
    addTask(spaceId, projectId).then((id) => {
      updateTasks([...tasks, { id }]);
    });
  };

  const TaskTable = tasks.length ? (
    <Table>
      <thead style={{ backgroundColor: '#E1E3E5' }}>
        <TableHeading>Task</TableHeading>
        <TableHeading>Task Owner</TableHeading>
        <TableHeading>Due date</TableHeading>
        <TableHeading>Status</TableHeading>
        <TableHeading>Priority</TableHeading>
        <TableHeading>View</TableHeading>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} updateTaskDb={updateTaskDb} />
        ))}
      </tbody>
    </Table>
  ) : null;

  return (
    <>
      {TaskTable}
      <CustomButton onClick={createTask}>
        Create Task
      </CustomButton>
    </>
  );
};
