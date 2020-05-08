import React, { useContext } from 'react';

import { TrackContext } from '../../../../store/contexts';

import { BreadCrumb } from '../BreadCrumb';

import { RenderProject } from '../space/component/RenderProject';

export const Project = () => {
  const { tracker } = useContext(TrackContext);

  const breadCrumbData = [{
    route: `/spaces/${tracker.space.id}`,
    name: tracker.space.spaceName,
  }];

  return (
    <>
      <BreadCrumb data={breadCrumbData} />
      <br />
      <RenderProject
        project={tracker.project}
        spaceId={tracker.space.id}
        spaceName={tracker.space.spaceName}
      />
    </>
  );
};
