import React from 'react';

const styles = {
  container: {
    padding: '10px',
  },
  itemWrap: {
    marginBottom: '10px',
    borderRadius: '4px',
    background: '#fff',
    padding: '10px',
    boxSizing: 'border-box',
    display: 'flex',
  },
  itemImgWrap: {
    width: '100px',
    height: '100px',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: '4px',
    marginRight: '12px',
  },
  itemImg: {
    width: '100%',
    height: 'auto',
  },
  infoWrap: {
    height: '100px',
    flex: 1,
    display: 'flex',
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
  itemName: {
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '14px',
    lineHeight: '19px',
    width: '100%',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    marginBottom: '10px',
  },
  priceWrap: {
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '11px',
  },
  priceText1: {
    color: '#F90707',
    fontSize: '18px',
    fontFamily: 'PingFangSC-Semibold',
  },
  priceText2: {
    color: '#333',
    fontSize: '11px',
    fontFamily: 'PingFangSC-Thin',
    textDecoration: 'line-through',
    marginLeft: '4px',
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  itemBtn: {
    lineHeight: '32px',
    padding: '0 18px',
    borderRadius: '16px',
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '12px',
    background: 'linear-gradient(0deg, #F5211D, #FA5246)',
    textAlign: 'center',
  },
  itemBtn2: {
    background: 'rgb(205, 205, 205)',
  },
};
export default class OneYuanItem extends React.Component {
  renderList = () => {
    const { list, jumpPage, tabIndex } = this.props;
    if (list && list.length > 0) {
      return list.map((item, index) => {
        return (
          <div style={styles.itemWrap} key={index} onClick={() => jumpPage(item)}>
            <div style={styles.itemImgWrap}>
              <img style={styles.itemImg} src={item.productImg} alt="" />
            </div>
            <div style={styles.infoWrap}>
              <div>
                <div style={styles.itemName}>{item.productName}</div>
                <div style={styles.priceWrap}>
                  付款价：
                  <span style={styles.priceText1}>￥{item.paymentPriceF}</span>
                  <span style={styles.priceText2}>￥{item.originalPriceF}</span>
                </div>
              </div>
              <div style={styles.btnWrap}>
                {item.status === 0 || tabIndex === 1 ? (
                  <div style={styles.itemBtn}>
                    领红包
                    {item.paymentPriceF}
                    元购>
                  </div>
                ) : (
                  <div style={{ ...styles.itemBtn, ...styles.itemBtn2 }}>已抢完</div>
                )}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return <div style={styles.container}>{this.renderList()}</div>;
  }
}
