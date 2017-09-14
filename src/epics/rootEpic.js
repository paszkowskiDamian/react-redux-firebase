import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { firebaseApp } from '../firebaseApp'
import { EXAMPLE_ACTION } from '../actions/actionTypes'


const count = firebaseApp.database().ref('count');

const count$ = Observable.fromEvent(count, 'value')
    .map(res => res.val())

function settingsEpic() {
    const exampleEpic = (action$, { getState }) =>
        action$.ofType(EXAMPLE_ACTION)
            .map(_ => count.transaction(count => count + 1))
            .mapTo({ type: 'DUPA_ACTION' })

    const countEpic = (_) => 
        count$
        .map(count => ({type: "COUNT", payload: count}))

    return combineEpics(exampleEpic,countEpic)
}


export const rootEpic = combineEpics(settingsEpic())