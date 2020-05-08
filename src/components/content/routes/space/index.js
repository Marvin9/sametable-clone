import React, { useEffect, useState } from 'react';

import { CustomButton, LHeading } from '../../../../shared';

import { addProject, getProjectsAndSpaceName } from '../helpers';
import { RenderProject } from './component/RenderProject';

export const Space = ({ spaceId }) => {
  const [projects, updateProjects] = useState([]);
  const [spaceName, updateSpaceName] = useState('');

  useEffect(() => {
    getProjectsAndSpaceName(spaceId).then(([s, p]) => {
      updateProjects(p);
      updateSpaceName(s);
    });

    // eslint-disable-next-line no-return-assign
    // return () => (window.location = '/');
  }, []);

  const addNewProject = async () => {
    const id = await addProject(spaceId);
    updateProjects([{ id, title: '' }, ...projects]);
  };

  return (
    <>
      {spaceName && (
        <LHeading bg="pink" p={2} sx={{ borderRadius: '10px', '&:hover': { background: 'none' } }}>{spaceName}</LHeading>
      )}
      <br />
      <CustomButton ml={3} onClick={addNewProject}>
        Create Project
      </CustomButton>

      {!!projects.length && projects.map((project) => (
        <RenderProject key={project.id} project={project} spaceId={spaceId} spaceName={spaceName} />
      ))}
    </>
  );
};
