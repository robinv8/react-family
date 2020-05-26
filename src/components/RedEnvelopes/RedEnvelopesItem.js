import React, { Component } from 'react';

const styles = {
  itemContainer: {
    background: 'linear-gradient(90deg, #DF1D00, #E94313)',
    position: 'relative',
    borderRadius: '10px',
    marginBottom: '10px',
    display: 'flex',
    height: '90px',
  },
  avatarWrap: {
    height: '100%',
    width: '76px',
    borderRadius: '0 30px 30px 0',
    background: 'linear-gradient(90deg, #E73905, #E73905)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '2px 0 5px rgba(58, 59, 60, 0.2)',
    marginRight: '20px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
  },
  itemInfoWrap: {
    display: 'flex',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    padding: '9px 0',
    flex: 1,
  },
  name: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '15px',
    color: '#FFDBA2',
    marginBottom: '8px',
  },
  time: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#FFA347',
  },
  idWrap: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  idIcon: {
    width: '14px',
    height: '14px',
    marginRight: '4px',
  },
  idText: {
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
  },
  bagWrap: {
    position: 'absolute',
    right: 0,
    top: '21px',
    width: '90px',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bagOpen: {
    width: '50px',
    height: '50px',
    background: 'radial-gradient(#FFD800 40%, #f8a943)',
    borderRadius: '50%',
    boxShadow: 'inset 0 0 0px 2px #FDE86C',
    lineHeight: '50px',
    textAlign: 'center',
    color: '#E94313',
    fontFamily: 'PingFangSC-Semibold',
    fontSize: '18px',
    marginRight: '15px',
  },
  bagPriceWrap: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    padding: '4px 0',
    boxSizing: 'border-box',
    width: '92%',
  },
  bagText: {
    color: '#FFA347',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    textAlign: 'center',
    width: '100%',
  },
  bagPrice: {
    color: '#FFD800',
    fontFamily: 'PingFangSC-Semibold',
    fontSize: '20px',
    textAlign: 'center',
    width: '100%',
  },
};
export default class RedEnvelopesItem extends Component {
  openBag = (id, info) => {
    const { openBag } = this.props;
    openBag(id, info);
  };

  render() {
    const { info } = this.props;
    return (
      <div style={styles.itemContainer}>
        <div style={styles.avatarWrap}>
          <img style={styles.avatar} src={info.headimgurl} alt="" />
        </div>
        <div style={styles.itemInfoWrap}>
          <div>
            <div style={styles.name}>
              {info.nickname && info.nickname.length > 11
                ? `${info.nickname.substr(0, 11)}`
                : info.nickname}
            </div>
            <div style={styles.time}>{info.time}</div>
          </div>
          <div style={styles.idWrap}>
            <img
              style={styles.idIcon}
              src={
                info.orderType === 0
                  ? require('@assets/taobao.png')
                  : require('@assets/tmallIcon.png')
              }
              alt=""
            />
            <div style={styles.idText}>
              订单：
              {info.orderSn}
            </div>
          </div>
          <div style={styles.bagWrap}>
            {info.state === 1 ? (
              <div style={styles.bagPriceWrap}>
                <div style={styles.bagText}>红包金额</div>
                <div style={styles.bagPrice}>{info.amountStr}</div>
              </div>
            ) : (
              <div
                onClick={() => info.state !== 1 && this.openBag(info.id, info)}
                style={styles.bagOpen}
              >
                拆
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
