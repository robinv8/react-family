import React, { Component } from 'react';
import { getRights } from '../../service/api';

const styles = {
  container: {
    paddingTop: '16px',
  },
  topBox: {
    position: 'relative',
  },
  bgText: {
    position: 'absolute',
    width: '100%',
    bottom: '40%',
    fontSize: '24px',
    color: '#7C440D',
    lineHeight: '24px',
    textAlign: 'center',
    fontFamily: 'PingFangSC-Medium',
  },
  bottomDate: {
    position: 'absolute',
    left: '50%',
    marginLeft: '-76px',
    bottom: '20%',
    width: '152px',
    height: '28px',
    textAlign: 'center',
    lineHeight: '28px',
    fontSize: '13px',
    color: '#783E07',
    background: '#FFB960',
    borderRadius: '24px',
  },
  bgImg: {
    width: '100%',
  },
  titles: {
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '18px',
    color: '#333',
    fontFamily: 'PingFangSC-Medium',
  },
  smImg: {
    width: '8px',
    height: '8px',
  },
  titleWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  listWrap: {
    paddingLeft: '16px',
    paddingRight: '16px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  },
  circleImg: {
    width: '44px',
    height: '44px',
    marginRight: '12px',
  },
  topTxt: {
    fontSize: '15px',
    color: '#333',
    lineHeight: '16px',
    marginBottom: '8px',
    fontFamily: 'PingFangSC-Medium',
  },
  bottomTxt: {
    fontSize: '12px',
    color: '#999',
    lineHeight: '14px',
    fontFamily: 'PingFangSC-Regular',
  },
};

export default class ShopownerRights extends Component {
  state = {
    service: '',
    dates: '',
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const res = await getRights();
    if (res) {
      this.setState({ service: res.copywriting, dates: res.term });
    }
  }

  render() {
    const { service, dates } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.topBox}>
          <div style={styles.bgText}>{service}</div>
          <div style={styles.bottomDate}>{dates}</div>
          <img style={styles.bgImg} src={require('@assets/ShopownerRights/rights1.png')} />
        </div>
        <div style={styles.titleWrap}>
          <img style={styles.smImg} src={require('@assets/ShopownerRights/leftTwo.png')} />
          <div style={styles.titles}>尊享五大权益</div>
          <img style={styles.smImg} src={require('@assets/ShopownerRights/rightTwo.png')} />
        </div>
        <div style={styles.listWrap}>
          <img style={styles.circleImg} src={require('@assets/ShopownerRights/quanyi.png')} />
          <div>
            <div style={styles.topTxt}>门店入驻免费</div>
            <div style={styles.bottomTxt}>城市服务商内部专享价</div>
          </div>
        </div>
        <div style={styles.listWrap}>
          <img style={styles.circleImg} src={require('@assets/ShopownerRights/quanyi2.png')} />
          <div>
            <div style={styles.topTxt}>持续佣金收益</div>
            <div style={styles.bottomTxt}>享受线上、线下佣金，门店流水，差级奖等高收益</div>
          </div>
        </div>
        <div style={styles.listWrap}>
          <img style={styles.circleImg} src={require('@assets/ShopownerRights/quanyi4.png')} />
          <div>
            <div style={styles.topTxt}>总部学习机会</div>
            <div style={styles.bottomTxt}>一年2次总部现场学习机会</div>
          </div>
        </div>
        <div style={styles.listWrap}>
          <img style={styles.circleImg} src={require('@assets/ShopownerRights/quanyi3.png')} />
          <div>
            <div style={styles.topTxt}>每个月一场地方招商会支持</div>
            <div style={styles.bottomTxt}>每月一场地方招商会，总部出培训讲师，招商建议支持</div>
          </div>
        </div>
        <div style={styles.listWrap}>
          <img style={styles.circleImg} src={require('@assets/ShopownerRights/quanyi5.png')} />
          <div>
            <div style={styles.topTxt}>营销活动支持</div>
            <div style={styles.bottomTxt}>新人0元购，天猫1分购，品牌特卖等各种营销活动支持</div>
          </div>
        </div>
      </div>
    );
  }
}
