import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from "antd";
import { routerRedux } from "dva/router";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.onLinkToList = this.onLinkToList.bind(this);
    }

    onLinkToList(e) {
        // yield put(routerRedux.push('/logout'));
        this.props.dispatch(routerRedux.push('/list'));
        console.log('on link to list', routerRedux.push('/list'));
    }

    render() {
        return (
            <div className={styles.normal}>
                <h1 className={styles.title}>Dva Demo</h1>
                <ul className={styles.list}>
                    <li><Button type="primary" onClick={this.onLinkToList}>list</Button></li>
                </ul>
            </div>
        )
    }
}


export default connect()(IndexPage);
