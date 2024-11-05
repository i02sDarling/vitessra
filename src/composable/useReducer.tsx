import { useState } from 'react'

export function useReducer<S, A>(
  reducer: (state: S, action: A) => S,
  initState: S,
): [S, (action: A) => void] {
  const [state, setState] = useState<S>(initState)
  const dispatch = (action: A): void => {
    setState(s => reducer(s, action))
  }
  return [state, dispatch]
}
