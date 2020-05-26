/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { getOilDetail, getBuyOilUrl } from '../../service/api';
import Product from './components/DetailProduct';

const styles = {
  container: {
    boxSizing: 'border-box',
    background: '#f4f4f4',
    padding: '12px 12px 19px',
  },
  skuWrap: {
    boxSizing: 'border-box',
    background: '#fff',
    padding: '16px 12px',
    marginTop: '8px',
    borderRadius: '4px 4px 0 0',
  },
  skuTitle: {
    fontSize: '14px',
    color: '#333',
    lineHeight: '20px',
    height: '20px',
  },
  skuLine: {
    width: '100%',
    height: '1px',
    background: '#efefef',
    margin: '4px 0 19px',
  },
  skuItemWrap: {
    marginTop: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  skuItem: {
    width: '73px',
    height: '32px',
    borderRadius: '16px',
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    border: '1px solid #FFF',
  },
  skuItem2: {
    background: '#fff',
  },
  itemSelect: {
    background: '#FEFAF1',
    border: '1px solid #DFB453',
    color: '#DFB453',
  },
  warnInfo: {
    padding: '12px 12px',
    background: '#FEF8E8',
    borderRadius: '0px 0px 4px 4px',
  },
  warnTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#D0A138',
    fontFamily: 'PingFangSC-Medium',
  },
  wranIcon: {
    width: '16px',
    height: '16px',
    marginRight: '4px',
  },
  warnCon: {
    padding: '8px 0 0 20px',
    fontSize: '14px',
    color: '#D0A138',
    lineHeight: '18px',
  },
  btn: {
    background: '#DFB453',
    wdith: '100%',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    fontSize: '18px',
    color: '#fff',
    marginTop: '32px',
  },
};

export default class OilDetail extends React.Component {
  state = {
    detailInfo: {},
    skuList: [],
    gunList: [],
    oilNo: '',
    priceObj: {
      price: 0,
      discountPrice: '0.00',
      oilNo: '',
    },
    gunIndex: 0,
  };

  componentDidMount() {
    const { gasId, location, oilNo } = this.props.match.params;
    this.gasId = gasId;
    this.location = location;
    this.oilNo = oilNo;
    this.getDetail();
  }

  jumpNativeMap = () => {
    const { detailInfo } = this.state;
    const datas = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        type: 'native',
        pageKey: 'enterMapAddressNavigation',
        longitude: detailInfo.gasAddressLongitude, // 终点经度
        latitude: detailInfo.gasAddressLatitude, // 终点纬度
        address: detailInfo.gasAddress, // 地址
      },
    };

    console.log('打开地图导航参数', datas);
    window.postMessage(JSON.stringify(datas), '*');
  };

  jumpNativeWebView = async () => {
    const { gunList, gunIndex } = this.state;
    const params = {
      gasId: this.gasId,
      gunNo: gunList[gunIndex],
    };
    const res = await getBuyOilUrl(params);
    if (res && !res.code) {
      const datas = {
        isVerifity: true,
        isJump: true,
        jumpInfo: {
          routeName: 'WebView',
          params: {
            title: '加油订单',
            src: res, // 页面地址
          },
        },
      };
      console.log('打开加油支付页面参数', datas);
      window.postMessage(JSON.stringify(datas), '*');
    }
  };

  checkSku = index => {
    const { skuList } = this.state;
    let arr;
    let params = {};
    skuList.forEach((item, i) => {
      if (index === i) {
        arr = item.gunNoList;
        item.checked = true;
        params.price = item.oilPricePerLitre;
        params.discountPrice = item.amountDiscounts;
        params.oilNo = item.oilNo;
      } else {
        item.checked = false;
      }
    });
    this.setState({
      skuList,
      gunList: arr,
      gunIndex: 0,
      priceObj: params,
    });
  };

  checkGun = index => {
    this.setState({
      gunIndex: index,
    });
  };

  getDetail = async () => {
    const params = {
      gasId: this.gasId,
      location: this.location,
      mobile: '',
    };
    const res = await getOilDetail(params);
    if (res && !res.code) {
      let gunList;
      let obj = {};
      res.oilNoList.forEach(item => {
        if (item.oilNo === Number(this.oilNo)) {
          gunList = item.gunNoList;
          item.checked = true;
          obj.price = item.oilPricePerLitre;
          obj.discountPrice = item.amountDiscounts;
          obj.oilNo = item.oilNo;
        } else {
          item.checked = false;
        }
      });
      this.setState({
        amountDiscounts: res.oilNoList[0].amountDiscounts,
        detailInfo: res,
        skuList: res.oilNoList,
        priceObj: obj,
        gunList,
      });
    }
  };

  renderSkuItem = () => {
    const { skuList } = this.state;
    if (!skuList.length) {
      return;
    }
    let a = skuList.length % 4;
    if (a > 0 && a < 4) {
      for (let i = 0; i < 4 - a; i++) skuList.push({ id: Math.random(100000) });
    }
    return skuList.map((item, index) => {
      if (item.oilName) {
        return (
          <div
            style={{ ...styles.skuItem, ...(item.checked && styles.itemSelect) }}
            key={item.oilNo}
            onClick={() => this.checkSku(index)}
          >
            {item.oilName}
          </div>
        );
      }
      return <div style={{ ...styles.skuItem, ...styles.skuItem2 }} key={item.id}></div>;
    });
  };

  renderGunItem = () => {
    const { gunList, gunIndex } = this.state;
    if (!gunList.length) {
      return;
    }
    let a = gunList.length % 4;
    if (a > 0 && a < 4) {
      for (let i = 0; i < 4 - a; i++) gunList.push('');
    }
    return gunList.map((item, index) => {
      if (item) {
        return (
          <div
            style={{ ...styles.skuItem, ...(Number(gunIndex) === index && styles.itemSelect) }}
            key={Math.random(999999)}
            onClick={() => this.checkGun(index)}
          >
            {item}号
          </div>
        );
      }
      return (
        <div style={{ ...styles.skuItem, ...styles.skuItem2 }} key={Math.random(999999)}></div>
      );
    });
  };

  render() {
    const { detailInfo, priceObj } = this.state;
    return (
      <div style={styles.container}>
        <Product jumpNativeMap={this.jumpNativeMap} data={detailInfo} priceObj={priceObj} />

        <div style={styles.skuWrap}>
          <div style={styles.skuTitle}>选择油号</div>
          <div style={styles.skuItemWrap}>{this.renderSkuItem()}</div>
          <div style={styles.skuLine}></div>
          <div style={styles.skuTitle}>选择油枪</div>
          <div style={styles.skuItemWrap}>{this.renderGunItem()}</div>
        </div>

        <div style={styles.warnInfo}>
          <div style={styles.warnTitle}>
            <img src={require('@assets/Oil/icon-wran.png')} alt="" style={styles.wranIcon} />
            <span>重要提示</span>
          </div>
          <div style={styles.warnCon}>
            请务必 先到达油站 与工作人员确认后再付款，切勿先买单后加油，避免异常订单的产生！
          </div>
        </div>

        <div style={styles.btn} onClick={this.jumpNativeWebView}>
          确认
        </div>
      </div>
    );
  }
}
