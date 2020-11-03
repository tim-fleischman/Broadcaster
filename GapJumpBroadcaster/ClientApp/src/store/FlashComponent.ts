import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface BoxState {
    active: boolean;
}

export interface BoxAttributes {
    height: number;
    width: number;
    colour: string;
}

export interface BoxOnAction { type: 'BOX_ON' }
export interface BoxOffAction { type: 'BOX_OFF' }

export type KnownAction = BoxOnAction | BoxOffAction;

export const actionCreators = {
    boxon: () => ({ type: 'BOX_ON' } as BoxOnAction),
    boxoff: () => ({ type: 'BOX_OFF' } as BoxOffAction)
};

export const reducer: Reducer<BoxState> = (state: BoxState | undefined, incomingAction: Action): BoxState => {
    if (state === undefined) {
        return { active: false };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'BOX_ON':
            return { active: true };
        case 'BOX_OFF':
            return { active: false };
        default:
            return state;
    }
};