export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })

      .then(() => {
        console.log('added successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .delete()

      .then(() => {
        console.log('deleted successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const toggleFav = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const fav = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .update({
        favorite: fav,
      })
      .then(() => {
        console.log('fav added');
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .update({
        title: note.title,
        content: note.content,
      })

      .then(() => {
        console.log('rewritting ');
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
