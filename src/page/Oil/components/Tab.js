/*
 * @Description:
 * @Date: 2020-01-16 11:14:21
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-01-16 11:25:02
 */
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    height: '50px',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 99,
    bottom: 0,
    left: 0,
    width: '100%',
    boxShadow: '0 0 5px #ddd',
    background: '#fff',
  },
  tabBox: {
    flex: 1,
  },
  tabIcon: {
    margin: '0 auto 4px',
    display: 'block',
    width: '20px',
  },
  tabText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '10px',
    color: '#999',
    textAlign: 'center',
  },
  tabTextAct: {
    color: '#333',
  },
};
export default class Tab extends React.Component {
  changeTab = tab => {
    const { changeTab } = this.props;
    changeTab(tab);
  };

  render() {
    const { tabIndex } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.tabBox} onClick={() => this.changeTab(1)}>
          <img
            style={styles.tabIcon}
            src={
              tabIndex === 1
                ? require('@assets/Oil/icon-tab-oil-act.png')
                : require('@assets/Oil/icon-tab-oil.png')
            }
            alt=""
          />
          <div style={{ ...styles.tabText, ...(tabIndex === 1 && styles.tabTextAct) }}>
            优惠加油
          </div>
        </div>
        <div style={styles.tabBox} onClick={() => this.changeTab(2)}>
          <img
            style={styles.tabIcon}
            src={
              tabIndex === 2
                ? require('@assets/Oil/icon-tab-order-act.png')
                : require('@assets/Oil/icon-tab-order.png')
            }
            alt=""
          />
          <div style={{ ...styles.tabText, ...(tabIndex === 2 && styles.tabTextAct) }}>
            我的订单
          </div>
        </div>
      </div>
    );
  }
}
