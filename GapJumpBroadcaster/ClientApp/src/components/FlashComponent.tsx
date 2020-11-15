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
                <h1>Rob's React Fragment</h1>

                <p aria-live="polite">Current state: <strong>{this.props.isActive}</strong></p>

                <button type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => { this.props.boxoff(); }}>
                    Switch Off
                </button>
                <button type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => { this.props.boxon(); }}>
                    Switch On
                </button>

                <h1>Reactor Performance Data</h1>

                {this.renderPerfDataTable()}

            </React.Fragment>
        );
    }
    private renderPerfDataTable() {
        return (
            <table>
                <tr>
                    <th scope="col" className={this.props.headerStyleName}>Reactor</th>
                    <th scope="col" className={this.props.headerStyleName}>Output (MW)</th>
                    <th scope="col" className={this.props.headerStyleName}>Temperature (C)</th>
                    <th scope="col" className={this.props.headerStyleName}>Summary</th>
                </tr>
                <tr>
                    <th scope="row" className="row-header">Reactor 1</th>
                    <td>687</td>
                    <td>305</td>
                    <td>Nominal</td>
                </tr>
                <tr>
                    <th scope="row" className="row-header">Reactor 2</th>
                    <td>595</td>
                    <td>302</td>
                    <td>Nominal</td>
                </tr>
                <tr>
                    <th scope="row" className="row-header">Reactor 3</th>
                    <td>634</td>
                    <td>297</td>
                    <td>Nominal</td>
                </tr>
            </table>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.flasher,
    FlashStore.actionCreators
)(Flasher); 