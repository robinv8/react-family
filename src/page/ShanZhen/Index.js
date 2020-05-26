import React, { Component } from 'react';
import { Toast, Picker, List, Modal } from 'antd-mobile';
import { getProvince, freeGet } from '../../service/api';
import { getQueryString } from '../../utils/tools';
import './Style.css';

const { alert } = Modal;
const styles = {
  topImg1: {
    width: '100%',
    verticalAlign: 'top',
    height: '60vh',
  },
  topImg2: {
    width: '100%',
    verticalAlign: 'top',
    height: '40vh',
  },
  BottomContainer: {
    position: 'relative',
    width: '100%',
  },
  pickerWraper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '30vh',
  },
  topPositionWrap: {
    position: 'absolute',
    top: '12%',
    left: 0,
    width: '100%',
  },
  bottomText: {
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular',
    color: 'rgba(153,110,124,1)',
    marginTop: '10px',
    textAlign: 'center',
  },
  bottomBtn: {
    width: '60%',
    height: '44px',
    margin: 'auto',
    marginTop: '7%',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'PingFangSC-Medium',
    color: 'rgba(255,255,255,1)',
    lineHeight: '44px',
    background: 'linear-gradient(0deg,rgba(235,50,118,1) 0%,rgba(254,103,104,1) 100%)',
    borderRadius: '24px',
  },
  pinkText: {
    fontSize: '14px',
    color: 'rgba(252,62,135,1)',
    textAlign: 'center',
    marginTop: '2.5%',
  },
  cityPicker: {
    width: '70%',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
};
export default class Shanzhen extends Component {
  state = {
    city: [],
    cityInfo: [],
  };

  componentDidMount() {
    this.getCityData();
  }

  handleCityData = city => {
    city.forEach(item => {
      item.label = item.name;
      item.value = item.id;
      if (item.children && item.children.length > 0) {
        this.handleCityData(item.children);
      } else {
        delete item.children;
      }
    });
    this.setState({
      cityInfo: city,
    });
  };

  jumpLink = () => {
    const params = {
      type: 'jumpPage',
      info: {
        url: `${window.document.activeH5Url}/shanZhenStep`,
        title: '0元体检福利领取攻略',
        type: 1,
        id: 1,
      },
    };
    const isApp = !!getQueryString('isApp');
    if (isApp) {
      window.postMessage(JSON.stringify(params));
    } else {
      window.location.href = `${window.document.activeH5Url}/shanZhenStep`;
    }
  };

  // 获取省市区数据
  async getCityData() {
    const res = await getProvince();
    if (res) {
      this.handleCityData(res);
    }
  }

  // 免费领取
  async freeGet(city) {
    if (window.MtaH5) {
      window.MtaH5.clickStat('shanzhen_click_free_btn');
    }
    if (city.length === 0) {
      Toast.info('请选择您要体检的省市！');
      return false;
    }
    const res = await freeGet(city[1]);
    const showAlert = () => {
      const alertInstance = alert('该城市暂无0元体检福利', '是否继续领取?', [
        { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
        {
          text: '确认',
          onPress: () =>
            (window.location.href =
              'https://m.shanzhen.me/cooperation/coupon?comId=9ad0725465734d68a08ba1b49a2b44a5&activityCode=ACT651999935'),
        },
      ]);
      setTimeout(() => {
        alertInstance.close();
      }, 500000);
    };
    if (res.isMember) {
      window.location.href =
        'https://m.shanzhen.me/cooperation/coupon?comId=9ad0725465734d68a08ba1b49a2b44a5&activityCode=ACT651999935';
    } else {
      showAlert();
    }
  }

  render() {
    const { city, cityInfo } = this.state;
    return (
      <div className="shanzhen">
        <div>
          <img src={require('@assets/Shanzhen/shanTop.png')} style={styles.topImg1} alt="" />
        </div>
        <div style={styles.BottomContainer}>
          <div style={styles.pickerWraper}>
            <div style={styles.topPositionWrap}>
              <div style={styles.cityPicker}>
                <Picker
                  itemStyle={{ width: '100%' }}
                  extra="请选择您要体检的城市"
                  value={city}
                  data={cityInfo}
                  onOk={e => this.setState({ city: e })}
                >
                  <List.Item arrow="horizontal" />
                </Picker>
              </div>
              <div style={styles.bottomText}>所选城市的体检机构将会为你进行体检服务</div>
              <div style={styles.bottomBtn} onClick={() => this.freeGet(city)}>
                免费领取
              </div>
              <div style={styles.pinkText} onClick={this.jumpLink}>
                0元体检福利领取攻略>
              </div>
            </div>
          </div>
          <img src={require('@assets/Shanzhen/shanzhenBottom.png')} style={styles.topImg2} alt="" />
        </div>
      </div>
    );
  }
}
