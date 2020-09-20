import firebase from '../services/firebase';
const database = firebase.firestore();

export const createCatFact = (data) => (dispatch) => {
  return database
    .collection('catfacts')
    .add({
      author: data.author,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      fact: data.fact,
    })
    .then((res) => {
      const addCat = database
        .collection('catfacts')
        .doc(res.id)
        .get()
        .then((response) => {
          dispatch({
            type: 'ADD_CAT_FACT',
            payload: response.data(),
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCatFact = () => (dispatch) => {
  return database
    .collection('catfacts')
    .get()
    .then((res) => {
      const data = res.docs.map((cat) => cat.data());
      dispatch({
        type: 'GET_CAT_FACT',
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
