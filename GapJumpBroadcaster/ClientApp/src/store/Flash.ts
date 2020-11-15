import { Action, Reducer } from 'redux';
 
export interface BoxState {
    isActive: string;
    headerStyleName: string;
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
        return { isActive: "Off", headerStyleName: "table-header-off" };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'BOX_ON':
            return { isActive: "On", headerStyleName: "table-header-on" };
        case 'BOX_OFF':
            return { isActive: "Off", headerStyleName: "table-header-off" };
        default:
            return state;
    }
};