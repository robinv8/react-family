/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-new */
import React, { Component } from 'react';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import { Toast, Picker, List, ImagePicker, Modal, DatePicker } from 'antd-mobile';
import * as qiniu from 'qiniu-js';
import Compressor from 'compressorjs';
import { MdMyLocation, MdAdd } from 'react-icons/md';
import Root, { ApiServices } from '@HOC/Root';
import './Style.less';
import TimeOut from '@components/ShopkeeperRise/TimeOut';
import Agreement from '@components/ShopkeeperRise/Agreement';
import ShopExperience from '@components/ShopkeeperRise/ShopExperience';
import { getQueryString } from '@utils/tools';
const imgUrl = 'https://image.vxiaoke360.com/';

const styles = {
  container: {
    background: '#F8F8F8',
  },
  uploadHidden: {
    width: '100%',
    height: '100%',
    zIndex: 999,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  flexWrap: {
    width: '48%',
  },
  percentWrap: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    zIndex: 99,
  },
  percentBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentContent: {
    width: '90px',
    height: '90px',
    backgroundColor: 'rgba(58, 58, 58, 0.9)',
    borderRadius: '5px',
    padding: '15px',
    boxSizing: 'border-box',
  },
  uploadText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
    display: 'block',
  },
  uploadNum: {
    marginBottom: '8px',
    marginTop: '10px',
  },
  noBorderLine: {
    borderBottom: 0,
  },
  btnWrap: {
    height: '48px',
    padding: '12px 16px 40px 16px',
  },
  trashBtnWrap: {
    position: 'absolute',
    zIndex: 99,
    right: 0,
    top: 0,
    width: '34px',
    height: '34px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashBtn: {
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '22px',
    textAlign: 'center',
  },
  btnBox: {
    height: '48px',
    width: '100%',
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '18px',
    lineHeight: '48px',
    textAlign: 'center',
    borderRadius: '24px',
    background: 'linear-gradient(90deg, #FF2992 0%, #FF3F76 100%)',
    boxShadow: '0 4px 8px 0 rgba(252,66,119,0.30)',
  },
  areaContainer: {
    background: '#fff',
    marginBottom: '8px',
  },
  inputBox: {
    display: 'flex',
    padding: '12px 16px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #EFEFEF',
  },
  inputName: {
    width: '96px',
    marginRight: '8px',
    lineHeight: '24px',
    height: '24px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#333',
  },
  codeInput: {
    width: '100px',
    marginRight: '8px',
  },
  inputValue: {
    flex: 1,
    height: '24px',
    lineHeight: '24px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#666',
  },
  inputValue2: {
    flex: 1,
    height: '24px',
    lineHeight: '24px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#666',
    display: 'flex',
    alignItems: 'center',
  },
  inputArea: {
    display: 'block',
  },
  inputAreaValue: {
    minHeight: '48px',
    flex: 1,
  },
  inputIcon: {
    width: '10px',
    height: '16px',
    marginTop: '5px',
  },
  risePersonBox: {
    border: 0,
  },
  riseValue: {
    lineHeight: '24px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#666',
    flex: 1,
  },
  riseValueBox: {
    display: 'flex',
    alignItems: 'center',
  },
  personAvator: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    marginRight: '8px',
  },
  nickName: {
    lineHeight: '28px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#666',
  },
  checkedWrap: {
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
  },
  checkedText: {
    fontFamily: 'PingFangSC-Regular',
    color: '#666',
    fontSize: '13px',
    marginLeft: '8px',
    lineHeight: '18px',
  },
  checkedColor: {
    color: '#FC4277',
  },
  uploadAreaTitle: {
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '16px',
    lineHeight: '46px',
    borderBottom: '1px solid #EFEFEF',
    padding: '0 16px',
    boxSizing: 'border-box',
  },
  uploadWrap: {
    padding: '16px',
    boxSizing: 'border-box',
  },
  cardUploadWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  uploadBgWrap: {
    width: '100%',
    height: '106px',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F8F8F8',
    borderRadius: '8px',
  },
  uploadBgWrapBig: {
    width: '100%',
    height: '200px',
  },
  uploadInput: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: 22,
  },
  uploadBg: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  uploadIcon: {
    background: 'rgba(252, 66, 119, 0.8)',
    height: '44px',
    width: '44px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 9,
    boxShadow: '0 2px 8px 0 rgba(252,66,119,0.35)',
  },
  uploadIconBig: {
    height: '66px',
    width: '66px',
  },
  uploadTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '15px',
    color: '#333',
    textAlign: 'center',
  },
  mapWrap: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'none',
  },
  iframe: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: '#fff',
    zIndex: 1000,
  },

  uploadWrap2: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  storePhotoWrap: {
    width: '48%',
    textAlign: 'center',
    fontSize: 16,
  },
  uploadBgWrapBig2: {
    height: 104,
  },
  uploadIcon2: {
    backgroundColor: null,
    boxShadow: null,
  },
};

const imageType = {
  1: 'cardAArr',
  2: 'cardBArr',
  3: 'licenseArr',
  4: 'storePhotoArr',
  5: 'storeInsidePhoto',
};
@Root
class ShopkeeperRise extends Component {
  maxWidth = 4000;

  state = {
    personInfo: {
      nickName: '',
      mobile: '',
      storeName: '',
      address: '',
      svc: '',
      industry: '',
      businessTimeStart: new Date('2019-01-01 00:00:00'.replace(/-/g, '/')),
      businessTimeEnd: new Date('2019-01-01 23:59:00'.replace(/-/g, '/')),
      introduce: '',
    },
    industryArr: [],
    city: [],
    cityInfo: [],
    isChecked: false,
    token: '',
    invitationUserId: '',
    invitationInfo: {},
    reg: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
    isShowAgreement: false,
    authority: true,
    // 上传loading参数
    isShowPercent: false,
    timePercent: 0,
    // 图片上传参数
    cardAArr: [],
    cardBArr: [],
    licenseArr: [],
    storePhotoArr: [],
    location: '',
    storeInsidePhoto: [],
  };

  componentDidMount() {
    // type 1 店长体验版 0 正式版
    const { match } = this.props;

    this.type = Number(match.params.type) || 0;
    window.scrollTo(0, 0);
    this.getQiniuToken();
    this.getCityData();
    this.getIndustry();
    const invitationUserId = getQueryString('id');
    if (invitationUserId) {
      localStorage.setItem('invitationUserId', invitationUserId);
      this.setInvitation(invitationUserId);
    } else {
      const invitationId = localStorage.getItem('invitationUserId');
      localStorage.removeItem('invitationUserId');
      this.setInvitation(invitationId);
    }
    const authorityStr = getQueryString('authority');
    let authority = true;
    if (authorityStr && authorityStr === 'true') {
      authority = true;
    } else if (authorityStr && authorityStr === 'false') {
      authority = false;
    }

    this.setState({
      authority,
    });
    navigator.geolocation.getCurrentPosition(
      () => {
        this.mapInit();
        this.getLocation();
      },
      () => {
        this.setState({ isRemoveMap: true });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  }

  getImagePermission = () => {
    return new Promise(resolve => {
      window.wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success() {
          resolve();
        },
        error(e) {
          console.log(e);
        },
      });
    });
  };

  // 获取行业下拉数据
  async getIndustry() {
    const res = await ApiServices.getIndustry();
    if (res) {
      this.setState({
        industryArr: res,
      });
    }
  }

  // 获取邀请人信息
  async getInvitationInfo() {
    const { invitationUserId } = this.state;
    const res = await ApiServices.getInvitationInfo(invitationUserId);
    if (res) {
      this.setState({
        invitationInfo: res,
      });
    }
  }

  getLocation = () => {
    if (!document.getElementById('mapIframe')) {
      return;
    }
    const iframe = document.getElementById('mapIframe').contentWindow;
    document.getElementById('mapIframe').onload = () => {
      iframe.postMessage('hello', 'https://m.amap.com/picker/');
    };
    window.addEventListener(
      'message',
      async e => {
        const { location, address } = e.data;
        const { personInfo } = this.state;
        const newPersonInfo = { ...personInfo, address };
        if (location) {
          const { pcdInfo = '' } = (await ApiServices.getAddress(location)) || {};
          this.setState({
            isShopMap: false,
            location,
            pcdInfo,
            personInfo: newPersonInfo,
          });
        }
      },
      false,
    );
  };

  // 获取省市区数据
  async getCityData() {
    const res = await ApiServices.getCityData();
    if (res) {
      this.handleCityData(res);
    }
  }

  setInvitation = invitationUserId => {
    this.setState(
      {
        invitationUserId,
      },
      () => {
        this.getInvitationInfo();
      },
    );
  };

  // setState图片url
  setImg = (type, url) => {
    this.setState({
      [imageType[type]]: [
        {
          url,
          id: type,
        },
      ],
    });
  };

  // 获取七牛token
  async getQiniuToken() {
    const res = await ApiServices.getUploadToken();
    if (res) {
      this.setState({
        token: res.token,
      });
    }
  }

  // 提交申请
  async getRiseFormSubmit(params) {
    if (window.MtaH5) {
      window.MtaH5.clickStat('shop_keeperrise_submit', {
        data: JSON.stringify(params),
        url: window.location.href,
      });
    }
    const res = await ApiServices.getRiseFormSubmit(params);
    if (res && !res.code) {
      Toast.hide();
      Toast.success('提交成功');
      this.init();
    } else {
      Toast.hide();
      Toast.info(res.msg);
    }
  }

  compressImage = async file => {
    let width = 1000;
    try {
      const imgInfo = (await this.getImageSize(file)) || {};
      if (imgInfo.width) {
        width = imgInfo.width;
      }
    } catch (e) {
      console.log(e);
    }

    return new Promise(resolve => {
      new Compressor(file, {
        quality: 0.9,
        width: width > this.maxWidth ? this.maxWidth : width,
        success: result => {
          resolve(result);
        },
        error: () => {
          resolve(false);
        },
      });
    });
  };

  getImageSize = file => {
    return new Promise(resolve => {
      const fr = new FileReader();
      fr.onload = () => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.src = fr.result; // is the data URL because called with readAsDataURL
      };
      fr.readAsDataURL(file);
    });
  };

  // 图片上传
  uploadImg = (files, type) => {
    const { token } = this.state;
    const that = this;
    const key = null;
    let percent = 0;
    const observer = {
      next(res) {
        percent = parseInt(res.total.percent);
        that.setState({
          timePercent: percent,
          isShowPercent: true,
        });
      },
      error(err) {
        Toast.info(err);
      },
      complete(res) {
        that.setState({
          timePercent: 0,
          isShowPercent: false,
        });
        const url = `${imgUrl}${res.key}`;
        that.setImg(type, url);
      },
    };

    const observable = qiniu.upload(files, key, token);
    observable.subscribe(observer);
  };

  onUpload = async (files, index) => {
    const fileData = await this.compressImage(files[0].file);
    if (
      fileData &&
      (fileData.type === 'image/png' ||
        fileData.type === 'image/jpg' ||
        fileData.type === 'image/jpeg' ||
        fileData.type === 'image/webp')
    ) {
      this.uploadImg(fileData, index);
    } else {
      window.MtaH5.clickStat('upload_img_type', {
        type1: fileData.type,
        type2: files[0].file.type,
      });
      Toast.info('该图片格式不支持，仅支持png,jpg,jpeg,webp格式');
    }
  };
  handleAgreement = boo => {
    this.setState({
      isShowAgreement: boo,
    });
  };

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

  beforeUpload = () => {
    Toast.info('请前往设置开启相机和相册权限');
  };

  handleValueChange = obj => {
    const { personInfo } = this.state;
    const info = {
      ...personInfo,
      ...obj,
    };
    this.setState({
      personInfo: info,
    });
  };

  // 协议勾选
  handleCheck = type => {
    const { isChecked } = this.state;
    this.setState({
      isChecked: type === '1' ? true : !isChecked,
      isShowAgreement: false,
      isShowShopExperience: false,
    });
  };

  handleSubmit = () => {
    const {
      personInfo,
      city,
      invitationUserId,
      cardAArr,
      cardBArr,
      licenseArr,
      storePhotoArr,
      location,
      storeInsidePhoto,
    } = this.state;
    const { businessTimeStart, businessTimeEnd } = personInfo;
    const startHour = businessTimeStart.getHours();
    const startMinute = businessTimeStart.getMinutes();
    const endHour = businessTimeEnd.getHours();
    const endMinute = businessTimeEnd.getMinutes();
    const result = this.handleCheckForm();
    if (result) {
      Toast.loading('提交中...', 0);
      const params = {
        ...personInfo,
        areaId: city[0],
        invitationUserId,
        cardA: cardAArr[0].url,
        cardB: cardBArr[0].url,
        license: licenseArr[0].url,
        storePhoto: storePhotoArr[0].url,
        storeInsidePhoto: storeInsidePhoto[0].url,
        location,
        isExperience: this.type,
        businessTimeStart: `${startHour < 10 ? `0${startHour}` : startHour}:${
          startMinute < 10 ? `0${startMinute}` : startMinute
        }`,
        businessTimeEnd: `${endHour < 10 ? `0${endHour}` : endHour}:${
          endMinute < 10 ? `0${endMinute}` : endMinute
        }`,
      };
      if (city.length > 1) {
        params.areaId2 = city[1];
      }
      if (city.length > 2) {
        params.areaId3 = city[2];
      }

      this.getRiseFormSubmit(params);
    }
  };

  // 表单校验
  handleCheckForm = () => {
    const {
      personInfo,
      isChecked,
      city,
      reg,
      cardAArr,
      cardBArr,
      licenseArr,
      storePhotoArr,
      storeInsidePhoto,
      location,
      isLocationError,
    } = this.state;

    if (!personInfo.industry) {
      Toast.info('请选择行业！');
      return false;
    }
    if (!personInfo.storeName) {
      Toast.info('店铺名称不能为空！');
      return false;
    }
    if (isLocationError) {
      if (city.length < 1) {
        Toast.info('店铺地址不能为空！');
        return false;
      }
    } else if (!location) {
      Toast.info('店铺地址不能为空！');
      return false;
    }

    if (!personInfo.address) {
      Toast.info('详细地址不能为空！');
      return false;
    }
    if (!personInfo.businessTimeStart) {
      Toast.info('请输入营业开始时间！');
      return false;
    }
    if (!personInfo.businessTimeEnd) {
      Toast.info('请输入营业结束时间！');
      return false;
    }
    if (!cardAArr.length) {
      Toast.info('请上传身份证正面照片！');
      return false;
    }
    if (!cardBArr.length) {
      Toast.info('请上传身份证反面照片！');
      return false;
    }
    if (!licenseArr.length) {
      Toast.info('请上传营业执照照片！');
      return false;
    }
    if (!storePhotoArr.length) {
      Toast.info('请上传门店照片！');
      return false;
    }
    if (!storeInsidePhoto.length) {
      Toast.info('请上传店内照面！');
      return false;
    }
    if (!personInfo.nickName) {
      Toast.info('个人姓名不能为空！');
      return false;
    }
    if (!personInfo.mobile) {
      Toast.info('电话号码不能为空！');
      return false;
    }
    if (!reg.test(personInfo.mobile)) {
      Toast.info('电话号码格式不正确！');
      return false;
    }
    if (!personInfo.svc) {
      Toast.info('验证码不能为空！');
      return false;
    }
    if (!isChecked) {
      Toast.info('请勾选协议！');
      return false;
    }
    return true;
  };

  init = () => {
    this.setState({
      personInfo: {
        nickName: '',
        mobile: '',
        storeName: '',
        address: '',
        svc: '',
        industry: '',
      },
      cardAArr: [],
      cardBArr: [],
      licenseArr: [],
      storePhotoArr: [],
      storeInsidePhoto: [],
      city: [],
      isChecked: false,
      isCanUpload: true,
      location: '',
      pcdInfo: '',
    });
    this.timeChild.init();
  };

  // 获取验证码
  getVerificationCode = async mobile => {
    const res = await ApiServices.getVerificationCode(mobile, this.type);
    if (res && res.msg) {
      Toast.info(res.msg);
      this.init();
    }
  };

  renderIndustry = () => {
    const { industryArr } = this.state;
    return industryArr.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.dataValue}
        </option>
      );
    });
  };

  mapInit = () => {
    const { AMap } = window;
    const map = new AMap.Map('map');
    map.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, // 是否使用高精度定位，默认:true
        timeout: 10000, // 超过10秒后停止定位，默认：无穷大
        maximumAge: 0, // 定位结果缓存0毫秒，默认：0
        convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true, // 显示定位按钮，默认：true
        buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', ({ position: { lat, lng } }) => {
        this.setState({
          mapUrl: `https://m.amap.com/picker/?center=${lng},${lat}&key=f2f8d474dce3bcf7a17f0bc5df1b89fe`,
        });
      }); // 返回定位信息
      AMap.event.addListener(geolocation, 'error', () => {}); // 返回定位出错信息
    });
  };

  onLocation = () => {
    Toast.loading('定位中，请等待…');
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      Toast.show('定位失败，请手动选择地址。');
      this.setState({ isLocationError: true });
    }, 4000);
    const { isRemoveMap } = this.state;
    navigator.geolocation.getCurrentPosition(
      result => {
        clearTimeout(this.timer);
        Toast.hide();
        if (isRemoveMap) {
          this.setState({ isRemoveMap: false }, () => {
            this.mapInit();
            this.getLocation();
            this.setState({
              isShopMap: true,
            });
          });
        } else {
          this.setState({
            isShopMap: true,
          });
        }
      },
      error => {
        clearTimeout(this.timer);
        this.setState({ isRemoveMap: true });
        Toast.hide();
        if (error.code === error.PERMISSION_DENIED) {
          Toast.show('定位权限已关闭，请手动选择地址。');
          this.setState({ isLocationError: true });
        } else {
          Toast.show('定位失败，请手动选择地址。');
          this.setState({ isLocationError: true });
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0,
      },
    );
  };

  render() {
    const {
      isChecked,
      cityInfo,
      city,
      invitationInfo,
      industryArr,
      personInfo,
      reg,
      cardAArr,
      cardBArr,
      licenseArr,
      storePhotoArr,
      storeInsidePhoto,
      personInfo: {
        nickName,
        mobile,
        storeName,
        address,
        svc,
        industry,
        businessTimeStart,
        businessTimeEnd,
        introduce,
      },
      isShowPercent,
      timePercent,
      isShowAgreement,
      authority,
      mapUrl,
      isShopMap = false,
      pcdInfo = '',
      isRemoveMap = false,
      isLocationError = false,
      isShowShopExperience = false,
    } = this.state;
    return (
      <div style={styles.container}>
        {!isRemoveMap && (
          <iframe
            id="mapIframe"
            src={mapUrl}
            style={isShopMap ? styles.iframe : { display: 'none' }}
          />
        )}
        {invitationInfo.nickname && (
          <div style={styles.areaContainer}>
            <div style={{ ...styles.risePersonBox, ...styles.inputBox }}>
              <div style={styles.inputName}>直升邀请码</div>
              <div style={styles.riseValue}>{invitationInfo.invitationCode}</div>
            </div>
            <div
              style={{
                ...styles.risePersonBox,
                ...styles.inputBox,
                ...styles.noBorderLine,
              }}
            >
              <div style={styles.inputName}>邀请人</div>
              <div style={{ ...styles.riseValue, ...styles.riseValueBox }}>
                <img style={styles.personAvator} src={invitationInfo.headimgurl} alt="" />
                <div style={styles.nickName}>{invitationInfo.nickname}</div>
              </div>
            </div>
          </div>
        )}
        <div style={styles.areaContainer}>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>店铺名称</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ storeName: e.target.value.trim() })}
              placeholder="门店名"
              value={storeName}
              maxLength={10}
            />
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>行业信息</div>
            <select
              style={{ ...styles.inputValue, color: industry ? '#666' : '#999' }}
              onChange={e => this.handleValueChange({ industry: e.target.value.trim() })}
              value={industry}
            >
              <option checked>请选择行业</option>
              {industryArr.length > 0 && this.renderIndustry()}
            </select>
          </div>
          {!isLocationError ? (
            <div style={styles.inputBox}>
              <div style={styles.inputName}>店铺地址</div>
              <div style={styles.inputValue2} onClick={this.onLocation}>
                {pcdInfo ? (
                  <div style={{ flex: 1 }}>{pcdInfo}</div>
                ) : (
                  <div style={{ flex: 1, color: '#999' }}>请选择门店地址</div>
                )}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <MdMyLocation />
                  {pcdInfo ? '修改定位' : '获取位置'}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ ...styles.inputBox, ...styles.inputArea }}>
              <Picker
                itemStyle={{ width: '100%' }}
                extra="请选择门店地址"
                value={city}
                data={cityInfo}
                onOk={e => this.setState({ city: e })}
              >
                <List.Item arrow="horizontal">店铺地址</List.Item>
              </Picker>
            </div>
          )}

          <div style={styles.inputBox}>
            <div style={styles.inputName}>详细地址</div>
            <textarea
              style={{ ...styles.inputValue, ...styles.inputAreaValue }}
              onChange={e => this.handleValueChange({ address: e.target.value.trim() })}
              placeholder="如道路、门牌号、小区、楼栋号、单元、室等"
              value={address}
            />
          </div>
          <div style={{ ...styles.inputBox, justifyContent: 'space-between' }}>
            <div style={styles.inputName}>营业开始时间</div>
            <DatePicker
              mode="time"
              value={businessTimeStart}
              onChange={e => {
                this.handleValueChange({
                  businessTimeStart: e,
                });
              }}
            >
              <List.Item arrow="horizontal"></List.Item>
            </DatePicker>
          </div>
          <div style={{ ...styles.inputBox, justifyContent: 'space-between' }}>
            <div style={styles.inputName}>营业结束时间</div>
            <DatePicker
              mode="time"
              value={businessTimeEnd}
              minDate={businessTimeStart}
              onChange={e =>
                this.handleValueChange({
                  businessTimeEnd: e,
                })
              }
            >
              <List.Item arrow="horizontal"></List.Item>
            </DatePicker>
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>门店介绍</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ introduce: e.target.value.trim() })}
              placeholder="一句话介绍门店，不超过20字"
              value={introduce}
              maxLength={20}
            />
          </div>
        </div>
        <div style={styles.areaContainer}>
          <div style={styles.uploadAreaTitle}>证件上传</div>
          <div style={styles.uploadWrap}>
            <div style={styles.cardUploadWrap}>
              <div style={styles.flexWrap}>
                <div style={styles.uploadBgWrap}>
                  {!authority && <div style={styles.uploadHidden} onClick={this.beforeUpload} />}
                  <ImagePicker
                    style={styles.uploadInput}
                    files={cardAArr}
                    onChange={files => this.onUpload(files, 1)}
                    length={1}
                    accept="image/*"
                  />
                  {cardAArr.length > 0 && (
                    <div
                      style={styles.trashBtnWrap}
                      onClick={() =>
                        this.setState({
                          cardAArr: [],
                        })
                      }
                    >
                      <div style={styles.trashBtn}>×</div>
                    </div>
                  )}
                  <img
                    style={styles.uploadBg}
                    src={
                      cardAArr.length
                        ? `${cardAArr[0].url}?imageslim`
                        : require('@assets/ShopkeeperRise/bg-card2.png')
                    }
                    alt=""
                  />
                  {cardAArr.length === 0 && (
                    <div style={styles.uploadIcon}>
                      <FaCamera color="#fff" size={23} />
                    </div>
                  )}
                </div>
                <div style={styles.uploadTitle}>身份证上传(正面)</div>
              </div>
              <div style={styles.flexWrap}>
                <div style={styles.uploadBgWrap}>
                  {!authority && <div style={styles.uploadHidden} onClick={this.beforeUpload} />}
                  <ImagePicker
                    style={styles.uploadInput}
                    files={cardBArr}
                    onChange={files => this.onUpload(files, 2)}
                    length={1}
                    accept="image/*"
                  />
                  {cardBArr.length > 0 && (
                    <div
                      style={styles.trashBtnWrap}
                      onClick={() =>
                        this.setState({
                          cardBArr: [],
                        })
                      }
                    >
                      <div style={styles.trashBtn}>×</div>
                    </div>
                  )}
                  <img
                    style={styles.uploadBg}
                    src={
                      cardBArr.length
                        ? `${cardBArr[0].url}?imageslim`
                        : require('@assets/ShopkeeperRise/bg-card1.png')
                    }
                    alt=""
                  />
                  {cardBArr.length === 0 && (
                    <div style={styles.uploadIcon}>
                      <FaCamera color="#fff" size={23} />
                    </div>
                  )}
                </div>
                <div style={styles.uploadTitle}>身份证上传(反面)</div>
              </div>
            </div>
            <div>
              <div style={{ ...styles.uploadBgWrap, ...styles.uploadBgWrapBig }}>
                {!authority && <div style={styles.uploadHidden} onClick={this.beforeUpload} />}
                <ImagePicker
                  style={styles.uploadInput}
                  files={licenseArr}
                  onChange={files => this.onUpload(files, 3)}
                  length={1}
                  accept="image/*"
                />
                {licenseArr.length > 0 && (
                  <div
                    style={styles.trashBtnWrap}
                    onClick={() =>
                      this.setState({
                        licenseArr: [],
                      })
                    }
                  >
                    <div style={styles.trashBtn}>×</div>
                  </div>
                )}
                <img
                  style={styles.uploadBg}
                  src={
                    licenseArr.length
                      ? `${licenseArr[0].url}?imageslim`
                      : require('@assets/ShopkeeperRise/bg-License.png')
                  }
                  alt=""
                />
                {licenseArr.length === 0 && (
                  <div style={{ ...styles.uploadIcon, ...styles.uploadIconBig }}>
                    <FaCamera color="#fff" size={34} />
                  </div>
                )}
              </div>
              <div style={styles.uploadTitle}>营业执照</div>
            </div>
          </div>
        </div>
        <div style={styles.areaContainer}>
          <div style={styles.uploadAreaTitle}>门店照片上传</div>
          <div style={{ ...styles.uploadWrap, ...styles.uploadWrap2 }}>
            <div style={styles.storePhotoWrap}>
              <div
                style={{
                  ...styles.uploadBgWrap,
                  ...styles.uploadBgWrapBig,
                  ...styles.uploadBgWrapBig2,
                }}
              >
                {!authority && <div style={styles.uploadHidden} onClick={this.beforeUpload} />}
                <ImagePicker
                  style={styles.uploadInput}
                  files={storePhotoArr}
                  onChange={files => this.onUpload(files, 4)}
                  length={1}
                  accept="image/*"
                />
                {storePhotoArr.length > 0 && (
                  <div
                    style={styles.trashBtnWrap}
                    onClick={() =>
                      this.setState({
                        storePhotoArr: [],
                      })
                    }
                  >
                    <div style={styles.trashBtn}>×</div>
                  </div>
                )}
                {storePhotoArr.length > 0 && (
                  <img style={styles.uploadBg} src={`${storePhotoArr[0].url}?imageslim`} alt="" />
                )}
                {storePhotoArr.length === 0 && (
                  <div
                    style={{ ...styles.uploadIcon, ...styles.uploadIconBig, ...styles.uploadIcon2 }}
                  >
                    <MdAdd color="#E8E8E8" size={72} />
                  </div>
                )}
              </div>
              <div>门头照</div>
            </div>
            <div style={styles.storePhotoWrap}>
              <div
                style={{
                  ...styles.uploadBgWrap,
                  ...styles.uploadBgWrapBig,
                  ...styles.uploadBgWrapBig2,
                }}
              >
                {!authority && <div style={styles.uploadHidden} onClick={this.beforeUpload} />}
                <ImagePicker
                  style={styles.uploadInput}
                  files={storeInsidePhoto}
                  onChange={files => this.onUpload(files, 5)}
                  length={1}
                  accept="image/*"
                />
                {storeInsidePhoto.length > 0 && (
                  <div
                    style={styles.trashBtnWrap}
                    onClick={() =>
                      this.setState({
                        storeInsidePhoto: [],
                      })
                    }
                  >
                    <div style={styles.trashBtn}>×</div>
                  </div>
                )}
                {storeInsidePhoto.length > 0 && (
                  <img
                    style={styles.uploadBg}
                    src={`${storeInsidePhoto[0].url}?imageslim`}
                    alt=""
                  />
                )}
                {storeInsidePhoto.length === 0 && (
                  <div
                    style={{ ...styles.uploadIcon, ...styles.uploadIconBig, ...styles.uploadIcon2 }}
                  >
                    <MdAdd color="#E8E8E8" size={72} />
                  </div>
                )}
              </div>
              <div>店内照</div>
            </div>
          </div>
        </div>
        <div style={styles.areaContainer}>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>个人姓名</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ nickName: e.target.value.trim() })}
              placeholder="姓名"
              value={nickName}
            />
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>电话号码</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ mobile: e.target.value.trim() })}
              placeholder="此号码注册的账号将升级为店长"
              maxLength={11}
              value={mobile}
            />
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>验证码</div>
            <input
              style={{ ...styles.inputValue, ...styles.codeInput }}
              onChange={e => this.handleValueChange({ svc: e.target.value.trim() })}
              placeholder="输入手机验证码"
              value={svc}
              maxLength={4}
            />
            <TimeOut
              getCode={this.getVerificationCode}
              personInfo={personInfo}
              reg={reg}
              ref={child => {
                this.timeChild = child;
              }}
            />
          </div>
        </div>
        <div style={styles.checkedWrap}>
          <FaCheckCircle
            onClick={this.handleCheck}
            color={isChecked ? '#FC4277' : '#999'}
            size={18}
          />
          <div style={styles.checkedText}>
            <span onClick={this.handleCheck}>我已阅读并同意签署</span>
            <span onClick={() => this.handleAgreement(true)} style={styles.checkedColor}>
              《米粒生活店长服务协议》
            </span>
            {this.type === 1 && (
              <span
                onClick={() => {
                  this.setState({ isShowShopExperience: true });
                }}
                style={styles.checkedColor}
              >
                《体验店长活动规则》
              </span>
            )}
          </div>
        </div>
        <div style={styles.btnWrap}>
          <div onClick={() => this.handleSubmit()} style={styles.btnBox}>
            提交申请
          </div>
        </div>
        <Modal
          visible={isShowAgreement}
          transparent
          className="lalal"
          onClose={() => this.handleAgreement(false)}
          title="米粒生活平台商家合作协议"
          footer={[{ text: '同意', onPress: () => this.handleCheck('1') }]}
        >
          <div style={{ height: window.screen.availHeight - 260 }}>
            <Agreement />
          </div>
        </Modal>
        <Modal
          visible={isShowShopExperience}
          transparent
          className="lalal"
          onClose={() => {
            this.setState({ isShowShopExperience: false });
          }}
          title="体验店长活动规则"
          footer={[{ text: '同意', onPress: () => this.handleCheck('1') }]}
        >
          <div style={{ height: window.screen.availHeight - 260 }}>
            <ShopExperience />
          </div>
        </Modal>
        {isShowPercent && (
          <div style={styles.percentWrap}>
            <div style={styles.percentBox}>
              <div style={styles.percentContent}>
                <span style={{ ...styles.uploadText, ...styles.uploadNum }}>{timePercent}%</span>
                <span style={styles.uploadText}>上传中</span>
              </div>
            </div>
          </div>
        )}
        <div id="map" style={styles.mapWrap} />
      </div>
    );
  }
}
export default ShopkeeperRise;
