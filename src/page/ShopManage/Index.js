/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Toast, Picker, List, ImagePicker, DatePicker } from 'antd-mobile';
import * as qiniu from 'qiniu-js';
import Compressor from 'compressorjs';
import { MdMyLocation, MdAdd } from 'react-icons/md';
import {
  getUploadToken,
  getshopFormSubmit,
  getCityData,
  getshopFormDetail,
} from '../../service/api';
import './Style.css';

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
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  checkText: {
    fontSize: '16px',
    color: '#333',
    marginLeft: '3px',
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
  addFontSize: {
    fontSize: '48px',
    color: '#E8E8E8',
    paddingBottom: '10px',
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
    background: '#FC4277',
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
    minWidth: '96px',
    whiteSpace: 'nowrap',
    marginRight: '8px',
    lineHeight: '24px',
    height: '24px',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#333',
  },
  inputLable: {
    width: '56px',
    paddingLeft: '8px',
    paddingRight: '8px',
    height: '30px',
    fontSize: '14px',
    marginRight: '8px',
    borderRadius: '4px',
    background: '#F6F6F6',
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
  smallText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    marginLeft: '3px',
    color: '#999',
  },
  inputArea: {
    display: 'block',
  },
  inputAreaValue: {
    minHeight: '48px',
    resize: 'none',
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
    whiteSpace: 'nowrap',
  },
  uploadWrap: {
    padding: '16px',
    boxSizing: 'border-box',
  },
  cardUploadWrap: {
    display: 'flex',
    justifyContent: 'center',
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
    height: '100%',
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
    zIndex: 100,
  },
  storeStatus_Select: {
    display: 'flex',
    flexDirection: 'row',
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
export default class ShopManage extends Component {
  state = {
    personInfo: {
      name: '',
      idName: '',
      contactsMobile: '',
      businessHours: '',
      address: '',
      storeInsidePhoto: '',
      isShow: 1,
      wxNo: '',
      businessTimeStart: new Date('2019-01-01 00:00:00'.replace(/-/g, '/')),
      businessTimeEnd: new Date('2019-01-01 23:59:00'.replace(/-/g, '/')),
    },
    id: 1,
    currentIndex: 0,
    checkList: ['是', '否'],
    city: [],
    cityInfo: [],
    token: '',
    reg: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
    authority: true,
    // 上传loading参数
    isShowPercent: false,
    timePercent: 0,
    // 图片上传参数
    storeInsidePhotoArr: [],
    indexImageArr: [],
    location: '',
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getCityData();
    this.getshopDetail();
    this.getQiniuToken();
    this.getLocationData();
  }

  // 获取原生返回定位监听
  getLocationData = () => {
    const mobileType = navigator.userAgent;
    const isAndroid = mobileType.indexOf('Android') > -1 || mobileType.indexOf('Linux') > -1;
    if (isAndroid) {
      window.addEventListener('message', e => {
        console.log('返回监听1', e);
        const message = e.data;
        if (message && message.longitude && message.latitude) {
          this.isLocation(message, true);
        } else if (message && message.longitude === 0 && message.latitude === 0) {
          this.isLocation(false);
        }
      });
      window.document.addEventListener('message', e => {
        console.log('返回监听2', e);
        const message = JSON.parse(e.data);
        if (message && message.longitude && message.latitude) {
          this.isLocation(message, true);
        } else if (message && message.longitude === 0 && message.latitude === 0) {
          this.isLocation(false);
        }
      });
    } else {
      window.addEventListener('message', e => {
        const message = JSON.parse(e.data);
        console.log('返回监听', message);
        if (message && message.longitude && message.latitude) {
          this.isLocation(message, true);
        } else if (message && message.longitude === 0 && message.latitude === 0) {
          this.isLocation(false);
        }
      });
    }
  };

  isLocation = (message, boo) => {
    const { personInfo } = this.state;

    if (boo) {
      Toast.hide();
      this.setState({
        location: `${message.longitude},${message.latitude}`,
        pcdInfo: `${message.province}${message.city}${message.district}`,
        personInfo: {
          ...personInfo,
          address: message.address,
        },
      });
    } else {
      Toast.hide();
      Toast.show('定位失败，请手动选择地址');
      this.setState({ isLocationError: true });
    }
  };

  // 获取省市区数据
  getCityData = async () => {
    const res = await getCityData();
    if (res) {
      console.log('res', res);
      this.handleCityData(res);
    }
  };

  // 获取页面数据
  getshopDetail = async () => {
    const res = await getshopFormDetail();
    if (res.msg && res.code) {
      return;
    }
    const arr = [];
    if (res.areaId1) {
      arr.push(res.areaId1);
    }
    if (res.areaId2) {
      arr.push(res.areaId2);
    }
    if (res.areaId3) {
      arr.push(res.areaId3);
    }

    if (res.businessTimeStart === '0') {
      res.businessTimeStart = new Date();
    }
    if (res.businessTimeEnd === '0') {
      res.businessTimeEnd = new Date();
    }
    const startTime = res.businessTimeStart;
    const endTime = res.businessTimeEnd;
    res.businessTimeStart = new Date();

    if (startTime.indexOf(':') > 0) {
      res.businessTimeStart.setHours(Number(startTime.split(':')[0]));
      res.businessTimeStart.setMinutes(Number(startTime.split(':')[1]));
    }

    res.businessTimeEnd = new Date();
    if (endTime.indexOf(':') > 0) {
      res.businessTimeEnd.setHours(Number(endTime.split(':')[0]));
      res.businessTimeEnd.setMinutes(Number(endTime.split(':')[1]));
    }

    const saveData = {
      city: arr,
      id: res.id,
      pcdInfo: (res.addressEt || {}).pcdInfo,
    };
    if (res.location) {
      saveData.location = res.location;
    }
    this.setState({
      ...saveData,
    });
    if (res.isShow === 0) {
      this.setState({ currentIndex: 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }

    this.handleValueChange(res);
  };

  // 获取七牛token
  getQiniuToken = async () => {
    const res = await getUploadToken();
    if (res) {
      this.setState({
        token: res.token,
      });
    }
  };

  // 提交申请
  getFormSubmit = async arg => {
    const res = await getshopFormSubmit(arg);
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
      this.getshopDetail();
    } else {
      Toast.hide();
      Toast.info(res.msg);
    }
  };

  init = () => {
    this.setState({
      personInfo: {
        name: '',
        idName: '',
        contactsMobile: '',
        businessHours: '',
        address: '',
        storeInsidePhoto: '',
      },
      storeInsidePhotoArr: [],
      indexImageArr: [],
      city: [],
      location: '',
      pcdInfo: '',
    });
  };

  compressImage = async file => {
    let width = 1000;
    try {
      const imgInfo = (await this.getImageSize(file)) || {};
      if (imgInfo.width) {
        width = imgInfo.width;
      }
    } catch (e) {}
    return new Promise(resolve => {
      new Compressor(file, {
        quality: 0.9,
        width,
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

      fr.onload = function() {
        const img = new Image();

        img.onload = function() {
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
        const url = `${imgUrl}${res.key}`;
        const imgObj = {};
        if (type === 1) {
          imgObj.storeInsidePhoto = url;
        } else if (type === 2) {
          imgObj.storePhoto = url;
        }
        that.setState({
          timePercent: 0,
          isShowPercent: false,
          personInfo: {
            ...that.state.personInfo,
            ...imgObj,
          },
        });
      },
    };
    const observable = qiniu.upload(files, key, token);
    observable.subscribe(observer);
  };

  inStorePhotoUpload = async files => {
    const fileData = await this.compressImage(files[0].file);
    if (
      fileData &&
      (fileData.type === 'image/png' ||
        fileData.type === 'image/jpg' ||
        fileData.type === 'image/jpeg' ||
        fileData.type === 'image/webp')
    ) {
      this.uploadImg(fileData, 1);
    } else {
      window.MtaH5.clickStat('upload_img_type', {
        type1: fileData.type,
        type2: files[0].file.type,
      });
      Toast.info('该图片格式不支持，仅支持png,jpg,jpeg,webp格式');
    }
  };

  indexImageUpload = async files => {
    const fileData = await this.compressImage(files[0].file);
    if (
      fileData &&
      (fileData.type === 'image/png' ||
        fileData.type === 'image/jpg' ||
        fileData.type === 'image/jpeg' ||
        fileData.type === 'image/webp')
    ) {
      this.uploadImg(fileData, 2);
    } else {
      window.MtaH5.clickStat('upload_img_type', {
        type1: fileData.type,
        type2: files[0].file.type,
      });
      Toast.info('该图片格式不支持，仅支持png,jpg,jpeg,webp格式');
    }
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
      ...obj,
    });
  };

  handleValueChange2 = obj => {
    this.setState({
      ...obj,
    });
  };

  handleSubmit = () => {
    const { personInfo, city, id, location, isLocationError } = this.state;

    const result = this.handleCheckForm();
    if (result) {
      Toast.loading('提交中...', 0);
      const {
        isShow,
        name,
        storeInsidePhoto,
        contactsMobile,
        idName,
        address,
        businessHours,
        wxNo,
        introduce,
        storePhoto,
        businessStatus,
        businessTimeStart,
        businessTimeEnd,
        storeType,
      } = personInfo;
      const startHour = businessTimeStart.getHours();
      const startMinute = businessTimeStart.getMinutes();
      const endHour = businessTimeEnd.getHours();
      const endMinute = businessTimeEnd.getMinutes();
      const params = {
        isShow,
        name,
        storeInsidePhoto,
        contactsMobile,
        idName,
        address,
        businessHours,
        wxNo,
        introduce,
        id,
        storePhoto,
        businessStatus,
        businessTimeStart: `${startHour < 10 ? `0${startHour}` : startHour}:${
          startMinute < 10 ? `0${startMinute}` : startMinute
        }`,
        businessTimeEnd: `${endHour < 10 ? `0${endHour}` : endHour}:${
          endMinute < 10 ? `0${endMinute}` : endMinute
        }`,
      };
      if (isLocationError) {
        params.areaId1 = city[0];
        params.areaId2 = city[1];
        params.areaId3 = city[2];
      } else {
        params.location = location;
      }
      console.log(params);
      if (storeType === 0) {
        delete params.businessStatus;
      } else {
        delete params.isShow;
      }
      this.getFormSubmit(params);
    }
  };

  isChecked = index => {
    this.setState({ currentIndex: index }, () => {
      const { currentIndex, personInfo } = this.state;
      if (currentIndex === 0) {
        this.setState({
          personInfo: {
            ...personInfo,
            isShow: 1,
          },
        });
      } else {
        this.setState({
          personInfo: {
            ...personInfo,
            isShow: 0,
          },
        });
      }
    });
  };

  // 表单校验
  handleCheckForm = () => {
    const { personInfo, location, reg, isLocationError, city } = this.state;
    if (!personInfo.name) {
      Toast.info('请输入门店名称!');
      return false;
    }

    if (!personInfo.idName) {
      Toast.info('请输入店长姓名！');
      return false;
    }
    if (!personInfo.contactsMobile) {
      Toast.info('请输入联系方式！');
      return false;
    }
    if (
      !reg.test(personInfo.contactsMobile) &&
      !/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(personInfo.contactsMobile)
    ) {
      Toast.info('请输入正确的手机号或带区号的固定电话,固话格式如：xxx-xxxxxxx！', 5);
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
      Toast.info('请输入详细地址！');
      return false;
    }
    if (!personInfo.storeInsidePhoto) {
      Toast.info('请上传店内照片！');
      return false;
    }
    if (!personInfo.storePhoto) {
      Toast.info('请上传门头照片！');
      return false;
    }
    return true;
  };

  onLocation = () => {
    Toast.loading('定位中，请等待…');

    const datas = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        type: 'native',
        pageKey: 'enterMapViewAddressData',
      },
    };
    window.postMessage(JSON.stringify(datas), '*');
  };

  onSelectStoreStatus = index => {
    const { personInfo } = this.state;
    this.setState({
      personInfo: { ...personInfo, businessStatus: index },
    });
  };

  render() {
    const {
      cityInfo,
      city,
      storeInsidePhotoArr,
      indexImageArr,
      personInfo: {
        name,
        idName,
        contactsMobile,
        address,
        storeInsidePhoto,
        storePhoto,
        wxNo,
        introduce,
        businessStatus = 0,
        businessTimeStart,
        businessTimeEnd,
        storeType = 0,
      },
      personInfo,
      isShowPercent,
      timePercent,
      authority,
      currentIndex,
      checkList,
      mapUrl,
      isShopMap = false,
      pcdInfo = '',
      isRemoveMap = false,
      isLocationError = false,
    } = this.state;

    return (
      <div style={styles.container} className="amList">
        {!isRemoveMap && (
          // eslint-disable-next-line jsx-a11y/iframe-has-title
          <iframe id="map" src={mapUrl} style={isShopMap ? styles.iframe : { display: 'none' }} />
        )}
        <div style={styles.areaContainer}>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>门店名称</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ name: e.target.value.trim() })}
              placeholder="请输入门店名称"
              value={name}
              maxLength={10}
            />
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>介绍门店</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ introduce: e.target.value.trim() })}
              placeholder="一句话介绍门店，不超过20字"
              value={introduce}
              maxLength={20}
            />
          </div>
          {/* <div style={styles.inputBox}>
            <div style={styles.inputName}>APP展示名称</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ appShow: e.target.value.trim() })}
              placeholder="请输入APP展示名称"
              value={appShow}
              maxLength={4}
            />
          </div> */}
          {/* <div style={styles.inputBox}>
            <div style={styles.inputName}>门店广告语</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ introduce: e.target.value.trim() })}
              placeholder="请输入门店广告语"
              value={introduce}
              maxLength={12}
            />
          </div> */}
          {/* <div style={{ ...styles.inputBox, padding: '9px 16px' }}>
            <div style={styles.inputName}>门店标签</div>
            <div style={{ whiteSpace: 'nowrap' }}>
              <input
                style={{ ...styles.inputValue, ...styles.inputLable }}
                onChange={e => this.handleValueChange2({ shopLable1: e.target.value.trim() })}
                placeholder="输入标签"
                value={shopLable1}
                maxLength={4}
              />
              <input
                style={{ ...styles.inputValue, ...styles.inputLable }}
                onChange={e => this.handleValueChange2({ shopLable2: e.target.value.trim() })}
                placeholder="输入标签"
                value={shopLable2}
                maxLength={4}
              />
              <input
                style={{
                  ...styles.inputValue,
                  ...styles.inputLable,
                  marginRight: 0,
                }}
                onChange={e => this.handleValueChange2({ shopLable3: e.target.value.trim() })}
                placeholder="输入标签"
                value={shopLable3}
                maxLength={4}
              />
            </div>
          </div> */}
        </div>
        <div style={styles.areaContainer}>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>店长姓名</div>
            <input
              style={styles.inputValue}
              onChange={e => this.handleValueChange({ idName: e.target.value.trim() })}
              placeholder="请输入店长姓名"
              value={idName}
            />
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>联系方式</div>
            <input
              style={styles.inputValue}
              onChange={e =>
                this.handleValueChange({
                  contactsMobile: e.target.value.trim(),
                })
              }
              placeholder="请输入联系方式"
              value={contactsMobile}
              maxLength={16}
            />
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>微信</div>
            <input
              style={styles.inputValue}
              onChange={e =>
                this.handleValueChange({
                  wxNo: e.target.value.trim(),
                })
              }
              placeholder="请输入微信"
              value={wxNo}
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
          {!isLocationError ? (
            <div style={styles.inputBox}>
              <div style={styles.inputName}>店铺地址</div>
              <div style={styles.inputValue2} onClick={this.onLocation}>
                <div style={{ flex: 1 }}>{pcdInfo}</div>
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
          <div style={{ ...styles.inputBox, ...styles.noBorderLine }}>
            <div style={styles.inputName}>详细地址</div>
            <textarea
              style={{ ...styles.inputValue, ...styles.inputAreaValue }}
              onChange={e => this.handleValueChange({ address: e.target.value.trim() })}
              placeholder="如道路、门牌号、小区、楼栋号、单元、室等"
              value={address}
            />
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
                  files={indexImageArr}
                  onChange={this.indexImageUpload}
                  length={1}
                  accept="image/*"
                />
                {storePhoto && (
                  <div
                    style={styles.trashBtnWrap}
                    onClick={() =>
                      this.setState({
                        personInfo: {
                          ...personInfo,
                          storePhoto: '',
                        },
                      })
                    }
                  >
                    <div style={styles.trashBtn}>×</div>
                  </div>
                )}
                {storePhoto && <img style={styles.uploadBg} src={storePhoto} alt="" />}
                {!storePhoto && (
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
                  files={storeInsidePhotoArr}
                  onChange={this.inStorePhotoUpload}
                  length={1}
                  accept="image/*"
                />
                {storePhoto && (
                  <div
                    style={styles.trashBtnWrap}
                    onClick={() =>
                      this.setState({
                        personInfo: {
                          ...personInfo,
                          storeInsidePhoto: '',
                        },
                      })
                    }
                  >
                    <div style={styles.trashBtn}>×</div>
                  </div>
                )}
                {storeInsidePhoto && <img style={styles.uploadBg} src={storeInsidePhoto} alt="" />}
                {!storeInsidePhoto && (
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

        {/* <div style={styles.areaContainer}>
          <div style={styles.uploadAreaTitle}>门店介绍</div>
          <div style={{ ...styles.uploadWrap, height: 121, paddingTop: 11, paddingBottom: 11 }}>
            <TextareaItem
              placeholder="请输入门店介绍…"
              rows={3}
              value={storeIntroduce}
              onChange={data => this.handleValueChange({ storeIntroduce: data })}
              count={200}
            />
          </div>
        </div> */}
        {storeType === 0 ? (
          <div style={styles.flexWrap}>
            <div style={styles.uploadAreaTitle}>是否开启门店</div>
            <div style={styles.flexWrap}>
              {checkList.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ ...styles.flexWrap, marginRight: '48px' }}
                    onClick={() => this.isChecked(index)}
                  >
                    <FaCheckCircle color={currentIndex === index ? '#FC4277' : '#999'} size={18} />
                    <span style={styles.checkText}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', paddingTop: 13, background: '#fff' }}>
            <div
              style={{
                whiteSpace: 'nowrap',
                paddingLeft: 16,
                paddingRight: 24,
                flex: 1,
              }}
            >
              营业状态
            </div>
            <div style={{ ...styles.flexWrap, flexDirection: 'column', alignItems: 'flex-start' }}>
              <div
                style={{ flex: 1, marginBottom: 12 }}
                onClick={() => this.onSelectStoreStatus(0)}
              >
                <div style={styles.storeStatus_Select}>
                  <img
                    src={
                      businessStatus === 0
                        ? require('@assets/icon-selected.png')
                        : require('@assets/icon-select.png')
                    }
                    style={{ width: 24, height: 24, marginRight: 4 }}
                    alt=""
                  />
                  <span style={{ fontSize: 16, color: '#333' }}>正常营业</span>
                </div>
                <div style={{ paddingLeft: 28, fontSize: 13, color: '#999' }}>
                  按营业时间自动开关店，营业时间内自动接单
                </div>
              </div>
              <div
                style={{ flex: 1, marginBottom: 12 }}
                onClick={() => this.onSelectStoreStatus(1)}
              >
                <div style={styles.storeStatus_Select}>
                  <img
                    src={
                      businessStatus === 1
                        ? require('@assets/icon-selected.png')
                        : require('@assets/icon-select.png')
                    }
                    style={{ width: 24, height: 24, marginRight: 4 }}
                    alt=""
                  />
                  <span style={{ fontSize: 16, color: '#333' }}>临时休息</span>
                </div>
                <div style={{ paddingLeft: 28, fontSize: 13, color: '#999' }}>
                  向顾客展示门店休息
                </div>
              </div>
              <div
                style={{ flex: 1, marginBottom: 12 }}
                onClick={() => this.onSelectStoreStatus(2)}
              >
                <div style={styles.storeStatus_Select}>
                  <img
                    src={
                      businessStatus === 2
                        ? require('@assets/icon-selected.png')
                        : require('@assets/icon-select.png')
                    }
                    style={{ width: 24, height: 24, marginRight: 4 }}
                    alt=""
                  />
                  <span style={{ fontSize: 16, color: '#333' }}>长期停业</span>
                </div>
                <div style={{ paddingLeft: 28, fontSize: 13, color: '#999' }}>
                  代表长期停止服务，不向顾客展示门店
                </div>
              </div>
            </div>
          </div>
        )}
        <div style={styles.btnWrap}>
          <div onClick={() => this.handleSubmit()} style={styles.btnBox}>
            保存
          </div>
        </div>
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
