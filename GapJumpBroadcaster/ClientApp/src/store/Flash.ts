import { Action, Reducer } from 'redux';
 
export interface BoxState {
    isActive: string;
}

export interface BoxAttributes {
    height: number;
    width: number;
    colour: string;
}

export interface CoreParams {
    date: string;
    temperatureC: number;
    powerOutputMW: number;
    summary: string;
    location: string;
}

export interface BoxOnAction { type: 'BOX_ON' }
export interface BoxOffAction { type: 'BOX_OFF' }

export type KnownAction = BoxOnAction | BoxOffAction;

export const actionCreators = {
    boxon: () => ({ type: 'BOX_ON' } as BoxOnAction),
    boxoff: () => ({ type: 'BOX_OFF' } as BoxOffAction)
};

export const reducer: Reducer <BoxState> = (state: BoxState | undefined, incomingAction: Action): BoxState => {
    if (state === undefined) {
        return { isActive: "Off" };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'BOX_ON':
            return { isActive: "On" };
        case 'BOX_OFF':
            return { isActive: "Off" };
        default:
            return state;
    }
};