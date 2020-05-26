import React, { Component } from 'react';

const styles = {
  content: {
    width: '100%',
    boxSizing: 'border-box',
    background: '#f4f4f4',
    padding: '0 20px',
  },
  title: {
    fontSize: '16px',
    fontFamily: 'PingFang-SC-Bold',
    color: '#333',
    paddingTop: '24px',
  },
};

export default class LotteryRule extends Component {
  componentDidMount() {}

  render() {
    return (
      <div style={styles.content}>
        <div style={styles.title}>1.花费50米粒，可抽奖1次</div>

        <div style={styles.title}>2.现金红包：红包自动发放入米粒生活账户余额，可直接提现</div>

        <div style={styles.title}>
          3.免单1次：请在24小时内，前往新人免单专区选取商品进行购买，具体规则见免单专区
        </div>

        <div style={styles.title}>
          4.实物奖品：中奖后，客服会在24小时内联系您，请您提供地址信息，奖品会在7天内发货。如有售后问题，请联系客服进行处理
        </div>

        <div style={styles.title}>5.本活动解释权归米粒生活所有</div>

        <div style={styles.title}>6.该活动与苹果公司无关</div>
      </div>
    );
  }
}
