import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import Form1 from '../../components/CastForm/Form';
import Form2 from '../../components/CastForm/Form';
import { getFormSubmit, getCityData, getPersonalCode } from '../../service/api';
import URLSearchParams from 'url-search-params';
const urlSearchParams = new URLSearchParams(
  decodeURI(decodeURI(window.location.href)).split('?')[1],
);
export default class Index extends Component {
  state = {
    personInfo: {
      company: '',
      mobile: urlSearchParams.get('mobile'),
      name: '',
      verifyCode: '',
    },
    city: [],
    cityInfo: [],
    reg: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getCityData();
  }

  init = () => {
    this.setState({
      personInfo: {
        company: '',
        mobile: '',
        name: '',
        verifyCode: '',
      },
      city: [],
      pcdInfo: '',
    });
    this.formChild1.init();
    this.formChild2.init();
  };

  handleCityData = city => {
    city.forEach(item => {
      item.label = item.name;
      item.value = `${item.id}-${item.name}`;
      if (item.children && item.children.length > 0 && item.grade < 1) {
        this.handleCityData(item.children);
      } else {
        delete item.children;
      }
    });
    this.setState({
      cityInfo: city,
    });
  };

  setCity = e => {
    this.setState({
      city: e,
    });
  };

  handleValueChange = info => {
    this.setState({
      personInfo: info,
    });
  };

  // 提交申请
  async getFormSubmit(params) {
    const searchKeyword = urlSearchParams.get('keyword');
    const platform = urlSearchParams.get('platform');

    const res = await getFormSubmit({
      ...params,
      searchKeyword,
      device: platform === 'mobile' ? 1 : 0,
    });
    if (res && !res.code) {
      Toast.hide();
      Toast.success('保存成功');
      const params = {
        isPop: true,
        isVerifity: true,
      };
      setTimeout(() => {
        window.postMessage(JSON.stringify(params));
      }, 1000);
    } else {
      Toast.hide();
      this.init();
      Toast.info(res.msg);
    }
  }

  // 获取省市区数据
  async getCityData() {
    const res = await getCityData();
    if (res) {
      this.handleCityData(res);
    }
  }

  // 获取验证码
  getVerificationCode = async mobile => {
    const params = {
      mobile,
    };
    const res = await getPersonalCode(params);
    if (res && res.msg) {
      Toast.info(res.msg);
      this.init();
    }
  };

  render() {
    const { cityInfo, city, reg, personInfo, isLocationError = false, pcdInfo } = this.state;
    return (
      <div style={styles.container}>
        <img style={styles.imgContent} src={require('@assets/CastForm/img1.png')} alt="" />
        <img style={styles.imgContent} src={require('@assets/CastForm/img2.png')} alt="" />
        <div style={styles.contentWrap}>
          <Form1
            cityInfo={cityInfo}
            city={city}
            personInfo={personInfo}
            reg={reg}
            setCity={this.setCity}
            handleValueChange={this.handleValueChange}
            getFormSubmit={this.getFormSubmit.bind(this)}
            getVerificationCode={this.getVerificationCode}
            codeId="castCodeBtn1"
            submitId="castSubmitBtn1"
            isLocationError={isLocationError}
            onLocation={this.onLocation}
            pcdInfo={pcdInfo}
            ref={child => {
              this.formChild1 = child;
            }}
            bgType={1}
          />
          <img style={styles.imgContent} src={require('@assets/CastForm/img3.png')} alt="" />
          <img style={styles.imgContent} src={require('@assets/CastForm/img4.png')} alt="" />
          <img style={styles.imgContent} src={require('@assets/CastForm/img5.png')} alt="" />
          <img style={styles.imgContent} src={require('@assets/CastForm/img6.png')} alt="" />
          <img
            style={{ ...styles.imgContent, marginBottom: 30 }}
            src={require('@assets/CastForm/img7.png')}
            alt=""
          />
          <Form2
            cityInfo={cityInfo}
            city={city}
            personInfo={personInfo}
            reg={reg}
            setCity={this.setCity}
            handleValueChange={this.handleValueChange}
            getFormSubmit={this.getFormSubmit.bind(this)}
            getVerificationCode={this.getVerificationCode}
            codeId="castCodeBtn2"
            submitId="castSubmitBtn2"
            isLocationError={isLocationError}
            onLocation={this.onLocation}
            pcdInfo={pcdInfo}
            ref={child => {
              this.formChild2 = child;
            }}
            bgType={2}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background: '#ff3e17',
    paddingBottom: '20px',
  },
  imgContent: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  contentWrap: {
    position: 'relative',
    marginTop: -462,
  },
  iframe: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: '#fff',
    zIndex: 1000,
  },
};
