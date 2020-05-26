import React from 'react';
import './Style.css';

const styles = {
  container: {
    padding: '12px 0 0 12px',
    boxSizing: 'border-box',
    marginBottom: '8px',
    background: '#fff',
    borderRadius: '4px',
  },
  itemWrap: {
    display: 'flex',
  },
  imgBox: {
    width: '54px',
    height: '54px',
    overflow: 'hidden',
    marginRight: '10px',
  },
  img: {
    height: '100%',
  },
  itemInfo: {
    flex: 1,
  },
  infoArea: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '12px',
    paddingRight: '12px',
    boxSizing: 'border-box',
  },
  infoBox: {
    flex: 1,
    marginRight: '10px',
  },
  itemName: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#333',
    marginBottom: '12px',
  },
  priceBox: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#E00413',
    marginBottom: '8px',
  },
  priceText: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: '20px',
  },
  tagWrap: {
    display: 'flex',
  },
  tagText: {
    background: '#2C2616',
    borderRadius: '2px',
    lineHeight: '20px',
    padding: '0 4px',
    fontFamily: 'PingFangSC-Regular',
    color: '#FFD57E',
    fontSize: '11px',
  },
  navBtnBox: {
    borderRadius: '12px',
    height: '24px',
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    background: '#DFB453',
  },
  navIcon: {
    width: '12px',
    marginRight: '4px',
  },
  navBtn: {
    fontFamily: 'PingFangSC-Regular',
    color: '#fff',
    fontSize: '14px',
  },
  distance: {
    fontFamily: 'PingFangSC-Regular',
    color: '#999',
    fontSize: '12px',
    marginTop: '8px',
  },
  addressBox: {
    borderTop: '1px solid #efefef',
    padding: '8px 12px 8px 0',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
  addressIcon: {
    width: '12px',
    marginRight: '4px',
  },
  addressText: {
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '12px',
    overflow: 'hidden',
    display: '-webkit-box',
    webkitLineClamp: '1',
    webkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    lineHeight: '20px',
  },
  reductionBox: {
    border: '1px solid #E00413',
    borderRadius: '2px',
    height: '18px',
    display: 'flex',
    marginRight: '6px',
  },
  reductionIconBox: {
    background: '#E00413',
    height: '18px',
    width: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '6px',
  },
  reductionIcon: {
    height: '9px',
  },
  reductionText: {
    fontFamily: 'PingFangSC-Regular',
    color: '#E00413',
    fontSize: '12px',
    lineHeight: '18px',
    marginRight: '6px',
  },
};
export default class OilItem extends React.Component {
  renderList = () => {
    const { item, jumpPage, jumpNativeMap } = this.props;
    return (
      <div style={styles.itemWrap}>
        <div style={styles.imgBox} onClick={() => jumpPage(item)}>
          <img src={item.gasLogoSmall} style={styles.img} alt="" />
        </div>

        <div style={styles.itemInfo}>
          <div style={styles.itemName}>{item.gasName || '-'}</div>
          <div style={styles.infoArea}>
            <div style={styles.infoBox} onClick={() => jumpPage(item)}>
              <div style={styles.priceBox}>
                ￥<span style={styles.priceText}>{item.priceYfq || '0.00'}</span>
                /升/{item.oilName}
              </div>
              <div style={styles.tagWrap}>
                {item.amountDiscounts && (
                  <div style={styles.reductionBox}>
                    <div style={styles.reductionIconBox}>
                      <img
                        style={styles.reductionIcon}
                        alt=""
                        src={require('@assets/Oil/icon-down.png')}
                      />
                    </div>
                    <div style={styles.reductionText}>{item.amountDiscounts}</div>
                  </div>
                )}
              </div>
            </div>
            <div onClick={() => jumpNativeMap(item)}>
              <div style={styles.navBtnBox}>
                <img style={styles.navIcon} src={require('@assets/Oil/icon-nav.png')} alt="" />
                <div style={styles.navBtn}>导航</div>
              </div>
              <div style={styles.distance}>{item.distance}</div>
            </div>
          </div>

          <div style={styles.addressBox}>
            <img style={styles.addressIcon} src={require('@assets/Oil/icon-address.png')} alt="" />
            <div style={styles.addressText}>{item.gasAddress}</div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div style={styles.container}>{this.renderList()}</div>;
  }
}
