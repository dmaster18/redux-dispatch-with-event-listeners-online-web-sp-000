<<<<<<< HEAD
let state;
 
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}
 
function dispatch(action){
  state = reducer(state, action)
  render()
}
 
function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}
 
let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})
=======
// add code snippets from README
let state = {count: 0}

function reducer(state, action) {
  switch(action.type) {
    case 'INCREASE_COUNT': 
      return {count: state.count + 1};
    default: 
      return state;
  }
}
>>>>>>> b5726e5aef181e49566f61c47907f944aea8f823
