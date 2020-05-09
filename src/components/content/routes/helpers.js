import firebase from '../../../firebase';

export const getProjectsAndSpaceName = async (spaceId) => {
  let projects = [];
  let docs = await firebase.firestore().collection('spaces').doc(spaceId);
  const { spaceName } = (await docs.get()).data();
  docs = await docs.collection('projects')
    .get();
  docs.docs.forEach((doc) => {
    const { title, approver, status } = doc.data();
    projects = [...projects, {
      id: doc.id, title, approver, status,
    }];
  });
  return [spaceName, projects];
};

const normalizePayload = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) obj[key] = '';
  });
  return obj;
};

export const updateProject = async (spaceId, projectId, obj) => {
  obj = normalizePayload(obj);
  await firebase.firestore().collection('spaces').doc(spaceId)
    .collection('projects')
    .doc(projectId)
    .update(obj);
};

export const getProject = async (spaceId, projectId) => {
  const docs = await firebase.firestore().collection('spaces').doc(spaceId).collection('projects')
    .doc(projectId)
    .get();
  return docs.data();
};

export const addProject = async (spaceId) => {
  const add = await firebase.firestore().collection('spaces').doc(spaceId).collection('projects')
    .add({});
  return (await add).id;
};

const emptyTask = (task) => (
  !task.title && !task.owner && !task.due_date
);

export const getTasks = async (spaceId, projectId) => {
  let tasks = [];
  const tasksDocs = await firebase.firestore().collection('spaces').doc(spaceId)
    .collection('projects')
    .doc(projectId)
    .collection('tasks');

  const getTasksDocs = await tasksDocs.get();

  getTasksDocs.docs.forEach((task) => {
    if (emptyTask(task.data())) {
      tasksDocs.doc(task.id).delete();
      return;
    }
    const {
      title, owner, due_date, status, priority,
    } = task.data();
    tasks = [...tasks, {
      id: task.id, title, owner, due_date, status, priority,
    }];
  });

  return tasks;
};

export const updateTask = async (spaceId, projectId, taskId, payload) => {
  payload = normalizePayload(payload);

  await firebase.firestore().collection('spaces').doc(spaceId)
    .collection('projects')
    .doc(projectId)
    .collection('tasks')
    .doc(taskId)
    .update(payload);
};

export const addTask = async (spaceId, projectId) => {
  const add = await firebase.firestore().collection('spaces').doc(spaceId).collection('projects')
    .doc(projectId)
    .collection('tasks')
    .add({});

  return (await add).id;
};
