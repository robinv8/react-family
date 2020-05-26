import React, { Component } from 'react';

const styles = {
  itemContainer: {
    background: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '16% 9px 0',
    boxSizing: 'border-box',
    zIndex: 999,
  },
  closeBtn: {
    position: 'absolute',
    right: '9px',
    top: '12%',
    width: '32px',
    height: '32px',
  },
  itemWrap: {
    marginTop: '60px',
    background: '#fff',
    borderRadius: '10px',
    padding: '20px 10px',
    boxSizing: 'border-box',
    boxShadow: 'inset 0 0 15px #FFDDAA',
  },
  itemTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '34px',
    height: '34px',
    marginRight: '9px',
    borderRadius: '50%',
  },
  text1: {
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    fontSize: '14px',
  },
  text2: {
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '14px',
    marginLeft: '4px',
  },
  topTitle: {
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    fontSize: '20px',
    margin: '40px 0 20px 0',
    textAlign: 'center',
  },
  bagList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  bagImg1: {
    width: '78px',
    height: '108px',
    marginBottom: '15px',
  },
  topPriceWrap: {
    margin: '20px 0 30px 0',
  },
  topPrice: {
    color: '#F41E06',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'PingFangSC-Medium',
  },
  topPriceText: {
    fontSize: '34px',
    fontFamily: 'PingFangSC-Semibold',
  },
  topText: {
    color: '#666',
    textAlign: 'center',
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular',
    marginTop: '4px',
  },
  bagItemBox: {
    position: 'relative',
    marginBottom: '15px',
    width: '78px',
    height: '108px',
  },
  bagImg2: {
    width: '100%',
    height: '100%',
  },
  bagPrice: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '20px',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    top: '52px',
    width: '100%',
  },
};
export default class BagItem extends Component {
  state = {
    bagBg: [
      {
        imgs: [
          require('@assets/RedEnvelopes/a1.png'),
          require('@assets/RedEnvelopes/a2.png'),
          require('@assets/RedEnvelopes/a3.png'),
          require('@assets/RedEnvelopes/a4.png'),
          require('@assets/RedEnvelopes/a5.png'),
          require('@assets/RedEnvelopes/a6.png'),
          require('@assets/RedEnvelopes/a3.png'),
          require('@assets/RedEnvelopes/a4.png'),
        ],
      },
      {
        imgs: [
          require('@assets/RedEnvelopes/b1.png'),
          require('@assets/RedEnvelopes/b2.png'),
          require('@assets/RedEnvelopes/b3.png'),
          require('@assets/RedEnvelopes/b4.png'),
          require('@assets/RedEnvelopes/b5.png'),
          require('@assets/RedEnvelopes/b6.png'),
          require('@assets/RedEnvelopes/b5.png'),
          require('@assets/RedEnvelopes/b7.png'),
        ],
      },
    ],
    bagIndex: 0,
  };

  handleBag = () => {
    const { handleBag } = this.props;
    handleBag(false);
  };

  getBagList = index => {
    const { getBagList } = this.props;
    this.setState({
      bagIndex: index,
    });
    getBagList();
  };

  renderBg = () => {
    const { bagBg } = this.state;
    const { bagBgIndex } = this.props;
    return bagBg[bagBgIndex].imgs.map((item, index) => {
      return (
        <img onClick={() => this.getBagList(index)} key={index} style={styles.bagImg1} src={item} />
      );
    });
  };

  renderBag = () => {
    const { bagIndex } = this.state;
    const { bagList } = this.props;
    if (bagList.demolition && bagList.demolition.length > 0) {
      const arr = bagList.demolition
        .filter(item => !item.open)
        .map((item, index) => {
          return (
            <div key={index} style={styles.bagItemBox}>
              <img
                style={styles.bagImg2}
                alt=""
                src={require('@assets/RedEnvelopes/envelopes.png')}
              />
              <div style={{ ...styles.bagPrice, color: '#eee' }}>{item.amount}</div>
            </div>
          );
        });
      bagList.demolition.forEach((item, index) => {
        if (item.open) {
          const actEle = (
            <div key={index} style={styles.bagItemBox}>
              <img
                style={styles.bagImg2}
                alt=""
                src={require('@assets/RedEnvelopes/envelopesAct.png')}
              />
              <div style={{ ...styles.bagPrice, color: '#FFD800' }}>{item.amount}</div>
            </div>
          );
          arr.splice(bagIndex, 0, actEle);
        }
      });
      return arr;
    }
  };

  render() {
    const { isOpen, bagList, bagItem } = this.props;
    return (
      <div style={styles.itemContainer}>
        <img
          onClick={this.handleBag}
          style={styles.closeBtn}
          src={require('@assets/icon-close.png')}
          alt=""
        />
        <div style={styles.itemWrap}>
          <div style={styles.itemTop}>
            <img style={styles.avatar} src={bagItem.headimgurl} alt="" />
            <div style={styles.text1}>
              {bagItem.nickname && bagItem.nickname.length > 11
                ? `${bagItem.nickname.substr(0, 11)}...`
                : bagItem.nickname}
              <span style={styles.text2}>的购物红包</span>
            </div>
          </div>
          {isOpen ? (
            <div style={styles.topPriceWrap}>
              <div style={styles.topPrice}>
                ￥<span style={styles.topPriceText}>{bagList.total}</span>
              </div>
              <div style={styles.topText}>已转入待审核</div>
            </div>
          ) : (
            <div style={styles.topTitle}>选一个</div>
          )}
          <div style={styles.bagList}>{isOpen ? this.renderBag() : this.renderBg()}</div>
        </div>
      </div>
    );
  }
}
