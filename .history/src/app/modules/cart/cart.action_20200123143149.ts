import {createAction, props} from '@ngrx/store';

export namespace VinhosAction {
    export enum ActionTypes {
        ADD    = '[CART] add',
        EDIT   = '[CART] edit',
        REMOVE = '[CART] remove'
    }

    export const add  = createAction(ActionTypes.ADD, props<{ payload : any }>());

    export const remove  = createAction(ActionTypes.REMOVE, props<{ payload : any }>());

    export const edit  = createAction(ActionTypes.EDIT, props<{ payload : any }>());

}
