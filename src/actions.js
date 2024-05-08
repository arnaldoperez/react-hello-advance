// In this file you will have an initial store when initializing your application and the actions that can modify your store
// Remember that only the actions can change the value of the store, 
// It is the analogous to the "setter" function of the useState.


export function reducer(store, action) {
  if (action.type === 'change_color') {
    return {
      ...globalState,
      demo: action.nextDemo
    };
  }
  throw Error('Unknown action.');
}



