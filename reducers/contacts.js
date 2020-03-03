const initialState = {
  data: [],
  favorites: [],
  isFetching: null,
  hasError: false,
  errorMsg: null
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CONTACTS_FETCHING':
      return {
        ...state,
        isFetching: true,
        hasError: false,
        errorMsg: null
      };
    case 'FETCH_CONTACTS_COMPLETE':
      const sortedContactData = [...action.data].sort(sortByLastName);
      return {
        ...state,
        data: sortedContactData,
        isFetching: false
      };
    case 'FETCH_CONTACTS_FAILED':
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMsg: 'Something went wrong'
      };
    case 'MODIFY_FAVORITE':
      let newFavorites = [];
      const contact = action.data;

      let isCurrentFavorite = false;
      //check if contact is currently in favorites
      state.favorites.forEach(favorite => {
        if (favorite.id === contact.id) {
          isCurrentFavorite = true;
        }
      });

      //add or delete from favorites
      if (isCurrentFavorite) {
        for (let i = 0; i < state.favorites.length; i++) {
          const favorite = state.favorites[i];

          if (favorite.id !== contact.id) {
            newFavorites.push(favorite);
          }
        }
      } else {
        newFavorites = [...state.favorites, contact];
      }

      return {
        ...state,
        favorites: newFavorites
      };

    default:
      return state;
  }
}

function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else if (a.lastName > b.lastName) {
    return 1;
  } else if (b.lastName === a.lastName) {
    if (a.firstName < b.firstName) {
      return -1;
    } else if (a.firstName < b.firstName) {
      return 1;
    }
  }
}
