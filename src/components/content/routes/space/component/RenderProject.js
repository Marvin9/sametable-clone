import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from '@rebass/forms';
import { Box, Flex } from 'rebass';

import { TrackContext } from '../../../../../store/contexts';

import {
  CustomButton, CustomInput, SHeading,
} from '../../../../../shared';
import { updateProject } from '../../helpers';
import { RenderTasks } from './RenderTasks';

export const RenderProject = ({ project, spaceId, spaceName }) => {
  const [projectPayload, updatePayload] = useState(project);

  const updateProjectDb = () => {
    updateProject(spaceId, project.id, projectPayload);
  };

  const initialMount = React.useRef(true);

  const { trackDispatcher } = useContext(TrackContext);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      updateProjectDb();
    }
  }, [projectPayload.status]);

  return (
    <Box my={4} px={3}>
      <CustomInput
        width={1 / 3}
        placeholder="Project title"
        type="text"
        fontWeight="bold"
        fontSize={4}
        value={projectPayload.title}
        onChange={(e) => updatePayload({ ...projectPayload, title: e.target.value })}
        onBlur={updateProjectDb}
        hidden
      />

      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          <SHeading m={0}>Approver</SHeading>
          <CustomInput
            type="text"
            placeholder="Assign an approver"
            value={projectPayload.approver}
            onChange={(e) => updatePayload({ ...projectPayload, approver: e.target.value })}
            onBlur={updateProjectDb}
          />
        </Flex>

        <Flex flexDirection="column">
          <SHeading m={0}>Due Date</SHeading>
          <CustomInput
            type="text"
            placeholder="Enter due data"
            value={projectPayload.due_date}
            onChange={(e) => updatePayload({ ...projectPayload, due_date: e.target.value })}
            onBlur={updateProjectDb}
          />
        </Flex>

        <Flex flexDirection="column">
          <SHeading m={0}>Status</SHeading>
          <Select
            placeholder="Select status"
            value={projectPayload.status}
            onChange={(e) => {
              updatePayload({
                ...projectPayload,
                status: e.target.value,
              });
            }}
          >
            <option value="paused">Paused</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </Select>
        </Flex>

        <CustomButton
          display="inline-block"
        >
          <Link
            style={{ color: 'white' }}
            to={`/project/${projectPayload.id}`}
            onClick={() => trackDispatcher({
              type: 'SELECT_PROJECT',
              projectData: projectPayload,
              spaceData: {
                id: spaceId,
                spaceName,
              },
            })}
          >
            View
          </Link>
        </CustomButton>
      </Flex>

      <br />

      <RenderTasks projectId={project.id} spaceId={spaceId} />

      <hr
        style={{
          margin: '2rem 0',
          height: '2px',
          background: 'black',
        }}
      />
    </Box>
  );
};
