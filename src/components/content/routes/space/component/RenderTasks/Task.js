import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from '@rebass/forms';


import { TrackContext } from '../../../../../../store/contexts';
import {
  Column, CustomButton, CustomInput, Row,
} from '../../../../../../shared';

// eslint-disable-next-line import/no-cycle
import { ProjectContext } from '../RenderProject';

export const Task = ({ task, updateTaskDb }) => {
  const [taskPayload, updateTaskPayload] = useState(task);

  const initialMount = React.useRef(true);

  const { trackDispatcher } = useContext(TrackContext);
  const { project, space } = useContext(ProjectContext);

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
          value={taskPayload.title || ''}
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
          value={taskPayload.owner || ''}
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
          value={taskPayload.due_date || ''}
          onChange={(e) => updateTaskPayload({
            ...taskPayload,
            due_date: e.target.value,
          })}
        />
      </Column>
      <Column width="20%">
        <Select
          placeholder="Select status"
          value={taskPayload.status || ''}
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
      <Column width="20%">
        <Select
          placeholder="Select priority"
          value={taskPayload.priority || ''}
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
            to={`/task/${taskPayload.id}`}
            onClick={() => {
              trackDispatcher({
                type: 'SELECT_TASK',
                taskData: taskPayload,
                projectData: project,
                spaceData: space,
              });
            }}
          >
            View
          </Link>
        </CustomButton>
      </Column>
    </Row>
  );
};
