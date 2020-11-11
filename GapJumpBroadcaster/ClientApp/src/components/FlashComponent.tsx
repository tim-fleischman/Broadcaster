import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as FlashStore from '../store/Flash';

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

                <p aria-live="polite">Current state: <strong>{this.props.isactive}</strong></p>

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

                {this.renderJunkTable()}

            </React.Fragment>
        );
    }
    private renderJunkTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Some Info</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
};



export default connect(
    (state: ApplicationState) => state.flashComponent,
    FlashStore.actionCreators
)(Flasher); 