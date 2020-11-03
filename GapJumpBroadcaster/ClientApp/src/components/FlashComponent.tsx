import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as FlashStore from '../store/FlashComponent';

type FlashProps =
    FlashStore.BoxState &
    typeof FlashStore.actionCreators &
    RouteComponentProps<{}>;

class Flasher extends React.PureComponent<FlashProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Box state</h1>

                <p>Rob's React component.</p>

                <p aria-live="polite">Current state: <strong>{this.props.active}</strong></p>

                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.boxoff(); }}>
                    Box Off
                </button>
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.boxon(); }}>
                    Box On
                </button>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.active,
    FlashStore.actionCreators
)(Flasher);
