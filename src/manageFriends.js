export function manageFriends(state = { friends: [] }, action) {
  if (action.type === "friends/add") {
    return {
      friends: [...state.friends, action.payload]
    }
  } else if (action.type === "friends/remove") {
    return { 
      friends: state.friends.filter(friend => friend.id !== action.payload)
    } 
  }
  else 
  return state
}
