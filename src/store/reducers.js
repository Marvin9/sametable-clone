import firebase from '../firebase';

export const spacesReducer = async (state, action) => {
  const { type } = action;

  switch (type) {
    case 'ADD': {
      const { spaceName } = action;
      const chunks = await firebase.firestore().collection('spaces').add({ spaceName });
      return [...await state, { id: chunks.id, spaceName }];
    }
    case 'GET': {
      let spaces = [];
      const docs = await firebase.firestore().collection('spaces').get();
      docs.docs.forEach((doc) => {
        spaces = [...spaces, { id: doc.id, spaceName: doc.data().spaceName }];
      });
      return [...spaces];
    }
    default:
      return state;
  }
};

/**
 * state => {
 *  space: Data of selected space,
 *  project: Data of selected project,
 *  task: Data of selected task
 * }
 */
export const trackReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_PROJECT': {
      const { spaceData, projectData } = action;
      return {
        space: spaceData,
        project: projectData,
      };
    }
    case 'SELECT_TASK': {
      const { taskData } = action;
      return {
        ...state,
        task: taskData,
      };
    }
    default:
      return state;
  }
};
