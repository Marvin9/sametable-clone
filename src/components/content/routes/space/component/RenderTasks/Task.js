import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from '@rebass/forms';


import { TrackContext } from '../../../../../../store/contexts';
import {
  Column, CustomButton, CustomInput, Row,
} from '../../../../../../shared';

export const Task = ({ task, updateTaskDb }) => {
  const [taskPayload, updateTaskPayload] = useState(task);

  const initialMount = React.useRef(true);

  const { trackDispatcher } = React.useContext(TrackContext);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      updateTaskDb(task.id, taskPayload);
    }
  }, [taskPayload.status, taskPayload.priority]);

  return (
    <Row>
      <Column width="30%">
        <CustomInput
          type="text"
          placeholder="Task title"
          value={taskPayload.title}
          onChange={(e) => updateTaskPayload({
            ...taskPayload,
            title: e.target.value,
          })}
          onBlur={() => updateTaskDb(task.id, taskPayload)}
        />
      </Column>
      <Column>
        <CustomInput
          type="text"
          placeholder="Task owner"
          value={taskPayload.owner}
          onChange={(e) => updateTaskPayload({
            ...taskPayload,
            owner: e.target.value,
          })}
          onBlur={() => updateTaskDb(task.id, taskPayload)}
        />
      </Column>
      <Column>
        <CustomInput
          type="text"
          placeholder="Due date"
          value={taskPayload.due_date}
          onChange={(e) => updateTaskPayload({
            ...taskPayload,
            owner: e.target.value,
          })}
        />
      </Column>
      <Column>
        <Select
          placeholder="Select status"
          value={taskPayload.status}
          onChange={(e) => updateTaskPayload({
            ...taskPayload,
            status: e.target.value,
          })}
        >
          <option value="paused">Paused</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </Select>
      </Column>
      <Column>
        <Select
          placeholder="Select status"
          value={taskPayload.priority}
          onChange={(e) => updateTaskPayload({
            ...taskPayload,
            priority: e.target.value,
          })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
      </Column>
      <Column>
        <CustomButton>
          <Link
            style={{ color: 'white' }}
            to={`/tasks/${taskPayload.id}`}
            onClick={() => {
              trackDispatcher({ type: 'SELECT_TASK', taskData: taskPayload });
            }}
          >
            View
          </Link>
        </CustomButton>
      </Column>
    </Row>
  );
};
