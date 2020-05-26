/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { getOilOrderDetail } from '@api';

const styles = {
  container: {
    boxSizing: 'border-box',
    paddingTop: '8px',
    width: '100%',
    minHeight: '100vh',
    background: '#f4f4f4',
  },
  list: {
    padding: '16px 12px 20px',
    background: '#fff',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  itemName: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#666666',
  },
  itemValue: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#333',
  },
  line: {
    width: '100%',
    height: '1px',
    backgroundColor: '#EFEFEF',
    marginBottom: '20px',
  },
  fontBold: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '14px',
    color: '#333',
  },
  red: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#E00A19',
  },
};

export default class OilOrderDetail extends React.Component {
  state = {
    detailInfo: {},
  };

  componentDidMount() {
    const { orderId } = this.props.match.params;
    this.getDetail(orderId);
  }

  getDetail = async id => {
    const res = await getOilOrderDetail(id);
    if (res && !res.code) {
      this.setState({
        detailInfo: res,
      });
    }
  };

  render() {
    const { detailInfo } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.list}>
          <div style={styles.item}>
            <span style={styles.itemName}>订单号</span>
            <span style={styles.itemValue}>{detailInfo.orderId}</span>
          </div>

          <div style={styles.item}>
            <span style={styles.itemName}>加油站名称</span>
            <span style={styles.itemValue}>{detailInfo.gasName}</span>
          </div>

          <div style={styles.item}>
            <span style={styles.itemName}>地址</span>
            <span style={styles.itemValue}>{detailInfo.address}</span>
          </div>

          <div style={styles.item}>
            <span style={styles.itemName}>油号</span>
            <span style={styles.itemValue}>{detailInfo.oilNo}</span>
          </div>

          <div style={styles.item}>
            <span style={styles.itemName}>加油升数</span>
            <span style={styles.itemValue}>{detailInfo.litre}升</span>
          </div>

          <div style={styles.item}>
            <span style={styles.itemName}>订单总金额</span>
            <span style={styles.itemValue}>¥{detailInfo.amountGun}</span>
          </div>

          <div style={styles.line}></div>

          <div style={styles.item}>
            <span style={styles.itemName}>直降优惠</span>
            <span style={styles.itemValue}>¥{detailInfo.amountDiscounts}</span>
          </div>

          <div style={styles.item}>
            <span style={styles.itemName}>优惠券</span>
            <span style={styles.itemValue}>¥{detailInfo.couponMoney}</span>
          </div>

          <div style={styles.item}>
            <span style={styles.itemName}>合计优惠</span>
            <span style={styles.itemValue}>¥{detailInfo.totalDiscounts}</span>
          </div>

          <div style={styles.line}></div>

          <div style={styles.item}>
            <span style={styles.fontBold}>实付金额</span>
            <span style={styles.red}>¥{detailInfo.amountPay}</span>
          </div>

          <div style={{ ...styles.item, ...{ marginBottom: 0 } }}>
            <span style={styles.itemName}>支付时间</span>
            <span style={styles.itemValue}>{detailInfo.payTime}</span>
          </div>
        </div>
      </div>
    );
  }
}
