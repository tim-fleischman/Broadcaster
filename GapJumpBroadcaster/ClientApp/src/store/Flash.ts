import { Action, Reducer } from 'redux';
 
export interface BoxState {
    isactive: boolean;
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
        return { isactive: false };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'BOX_ON':
            return { isactive: true };
        case 'BOX_OFF':
            return { isactive: false };
        default:
            return state;
    }
};