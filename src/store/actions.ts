type INCREMENT = { type: 'INCREMENT' }
type DECREMENT = { type: 'DECREMENT' }

export type ActionTypes = |
  INCREMENT |
  DECREMENT

export const actionIncrement = (): INCREMENT => ({ type: 'INCREMENT' });
export const actionDecrement = (): DECREMENT => ({ type: 'DECREMENT' });
