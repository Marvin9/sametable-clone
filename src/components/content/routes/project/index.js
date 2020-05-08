import React, { useContext, useState, useEffect } from 'react';

import { TrackContext } from '../../../../store/contexts';

import { BreadCrumb } from '../BreadCrumb';

import { RenderProject } from '../space/component/RenderProject';

import { getProject } from '../helpers';

export const Project = () => {
  const { tracker } = useContext(TrackContext);
  const [project, updateProject] = useState(null);

  useEffect(() => {
    getProject(tracker.space.id, tracker.project.id).then((data) => {
      updateProject(data);
    });
  }, []);

  if (!tracker.space || !tracker.project) {
    window.location = '/';
  }

  const breadCrumbData = [{
    route: `/spaces/${tracker.space.id}`,
    name: tracker.space.spaceName,
  }];

  if (project) {
    return (
      <>
        <BreadCrumb data={breadCrumbData} />
        <br />
        <RenderProject
          project={project}
          spaceId={tracker.space.id}
          spaceName={tracker.space.spaceName}
        />
      </>
    );
  }

  return null;
};
