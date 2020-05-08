import React, { useState, useContext, useEffect } from 'react';
import { Flex } from 'rebass';
import { Select } from '@rebass/forms';

import { CustomInput, SHeading } from '../../../../shared';
import { TrackContext } from '../../../../store/contexts';
import { BreadCrumb } from '../BreadCrumb';

import { updateTask } from '../helpers';

export const Task = () => {
  const { tracker } = useContext(TrackContext);

  if (!tracker.task || !tracker.space || !tracker.project) {
    window.location = '/';
  }

  const [taskPayload, updateTracker] = useState(tracker.task);

  const updateTaskInDb = () => {
    updateTask(tracker.space.id, tracker.project.id, tracker.task.id, taskPayload);
  };

  const initialMount = React.useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      updateTaskInDb();
    }
  }, [taskPayload.priority, taskPayload.status]);

  const breadCrumbData = [
    {
      route: `/spaces/${tracker.space.id}`,
      name: tracker.space.spaceName,
    },
    {
      route: `/project/${tracker.project.id}`,
      name: tracker.project.title,
    },
  ];

  return (
    <>
      <BreadCrumb data={breadCrumbData} />
      <br />

      <CustomInput
        type="text"
        fontWeight="bold"
        value={taskPayload.title || ''}
        onChange={(e) => updateTracker({
          ...taskPayload,
          title: e.target.value,
        })}
        onBlur={updateTaskInDb}
        hidden
      />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <SHeading m={0}>
            Assignes
          </SHeading>
          <CustomInput
            type="text"
            placeholder="Assign owner"
            value={taskPayload.owner || ''}
            onChange={(e) => updateTracker({
              ...taskPayload,
              owner: e.target.value,
            })}
            onBlur={updateTaskInDb}
          />
        </Flex>

        <Flex flexDirection="column">
          <SHeading m={0}>
            Due date
          </SHeading>
          <CustomInput
            type="text"
            placeholder="Due date of task"
            value={taskPayload.due_date}
            onChange={(e) => updateTracker({
              ...taskPayload,
              due_date: e.target.value,
            })}
            onBlur={updateTaskInDb}
          />
        </Flex>

        <Flex flexDirection="column" width={1 / 4}>
          <SHeading m={0}>
            Priority
          </SHeading>
          <Select
            placeholder="Status"
            value={taskPayload.priority || ''}
            onChange={(e) => updateTracker({ ...taskPayload, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </Flex>

        <Flex flexDirection="column" width={1 / 4}>
          <SHeading m={0}>
            Status
          </SHeading>
          <Select
            placeholder="Priority"
            value={taskPayload.status || ''}
            onChange={(e) => updateTracker({ ...taskPayload, status: e.target.value })}
          >
            <option value="paused">Paused</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </Select>
        </Flex>
      </Flex>
    </>
  );
};
