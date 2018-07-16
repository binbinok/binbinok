import React from "react";
import { connect } from "dva";
import jQuery from 'jquery';

console.log(jQuery)

function ListPage () {
    return (
        <ul>
            <li>123</li>
        </ul>
    )
}

export default connect()(ListPage);