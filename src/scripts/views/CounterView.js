import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Notification, Card } from 'react-impression';
import Counter from '../components/Counter';
import * as actions from '../actions/counter';

// 页面
@connect(state => ({
    total: state.counter.total,
}), {
    ...actions,
})
export default class CounterView extends Component {
    static propTypes = {
        total: PropTypes.number,
        increment: PropTypes.func,
        decrement: PropTypes.func,
    }
    componentDidMount() {
        Notification.info({
            closeable: false,
            title: '通知',
            message: '欢迎，这是一个Info通知。',
        });
    }
    render() {
        const { total, increment, decrement } = this.props;

        return (
            <Card block noborder>
                <Counter
                    counter={total}
                    increment={increment}
                    decrement={decrement} />
            </Card>
        );
    }
}
