import React from 'react';
import { connect } from 'react-redux';

const Classes = () => (
    <div>
        <h1>My Classes</h1>
        <div className="collapsable">
            <div className="collapsable-heading">Class 1</div>
            <div className="collapsable-body">
                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Full name</th>
                            <th>Date of birth</th>
                            <th>Grading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>John Doe</td>
                            <td>07.02.2017</td>
                            <td>8/10</td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>John Doe</td>
                            <td>07.02.2017</td>
                            <td>8/10</td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>John Doe</td>
                            <td>07.02.2017</td>
                            <td>8/10</td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>John Doe</td>
                            <td>07.02.2017</td>
                            <td>8/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default connect()(Classes);
