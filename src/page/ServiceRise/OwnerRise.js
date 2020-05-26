import React, { Component } from 'react';
import { FaCheckCircle, FaCamera } from 'react-icons/fa';
import { Toast, Picker, List, ImagePicker, Modal } from 'antd-mobile';
import * as qiniu from 'qiniu-js';
import Compressor from 'compressorjs';
import {
  getUploadToken,
  getPersonalCode,
  getServiceRiseFormSubmit,
  getInvitationInfo,
  getCityData,
} from '../../service/api';
import './Style.css';
import TimeOut from '../../components/ShopkeeperRise/TimeOut';
import Agreement from '../../components/ServiceRise/Agreement';
import { getQueryString } from '../../utils/tools';

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
    width: '84px',
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
};
export default class OwnerRise extends Component {
  maxWidth = 4000;

  // 图片最大宽度
  state = {
    personInfo: {
      nickName: '',
      mobile: '',
      verifyCode: '',
    },
    city: [],
    cityInfo: [],
    isChecked: false,
    seconds: 60,
    token: '',
    agentUserId: '',
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
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getQiniuToken();
    this.getCityData();
    let agentUserId = '';
    if (window.location.href.indexOf('from=') > 0) {
      agentUserId = getQueryString('id', 2);
    } else {
      agentUserId = getQueryString('id');
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
    if (agentUserId) {
      this.setState(
        {
          agentUserId,
        },
        () => {
          this.getInvitationInfo();
        },
      );
    }
  }

  init = () => {
    this.setState({
      personInfo: {
        nickName: '',
        mobile: '',
        verifyCode: '',
      },
      cardAArr: [],
      cardBArr: [],
      city: [],
      isChecked: false,
      seconds: 60,
      isCanUpload: true,
    });
    this.timeChild.init();
  };

  // setState图片url
  setImg = (type, url) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 1:
        this.setState({
          cardAArr: [
            {
              url,
              id: 1,
            },
          ],
        });
        break;
      case 2:
        this.setState({
          cardBArr: [
            {
              url,
              id: 2,
            },
          ],
        });
        break;
    }
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

  compressImage = async file => {
    let width = 1000;
    try {
      const imgInfo = (await this.getImageSize(file)) || {};
      if (imgInfo.width) {
        width = imgInfo.width;
      }
    } catch (e) {
      if ('fundebug' in window) {
        window.fundebug.notifyError(e);
      }
    }
    return new Promise(resolve => {
      new Compressor(file, {
        quality: 0.9,
        width: width > this.maxWidth ? this.maxWidth : width,
        success: result => {
          resolve(result);
        },
        error: e => {
          if ('fundebug' in window) {
            window.fundebug.notifyError(e);
          }
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

  cardAUpload = async files => {
    const fileData = (await this.compressImage(files[0].file)) || files[0].file;
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

  cardBUpload = async files => {
    const fileData = (await this.compressImage(files[0].file)) || files[0].file;
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

  handleAgreement = boo => {
    this.setState({
      isShowAgreement: boo,
    });
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
    });
  };

  handleSubmit = () => {
    const { personInfo, city, agentUserId, cardAArr, cardBArr } = this.state;
    const result = this.handleCheckForm();
    if (result) {
      Toast.loading('提交中...', 0);
      const params = {
        ...personInfo,
        areaId1: Number(city[0].split('-')[0]),
        areaName: city[0].split('-')[1],
        agentUserId,
        cardA: cardAArr[0].url,
        cardB: cardBArr[0].url,
        roleId: 52,
      };
      if (city.length > 1) {
        params.areaId2 = Number(city[1].split('-')[0]);
        params.areaName = city[0].split('-')[1] + city[1].split('-')[1];
      }
      this.getRiseFormSubmit(params);
    }
  };

  // 表单校验
  handleCheckForm = () => {
    const { personInfo, isChecked, city, reg, cardAArr, cardBArr } = this.state;
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
    if (!personInfo.verifyCode) {
      Toast.info('验证码不能为空！');
      return false;
    }
    if (city.length === 0) {
      Toast.info('请选择省/市！');
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
    if (!isChecked) {
      Toast.info('请勾选协议！');
      return false;
    }
    return true;
  };

  // 提交申请
  async getRiseFormSubmit(params) {
    const res = await getServiceRiseFormSubmit(params);
    if (res && !res.code) {
      Toast.hide();
      Toast.success('提交成功');
      this.init();
    } else {
      Toast.hide();

      this.setState({
        seconds: 60,
      });
      this.timeChild.init();

      Toast.info(res.msg);
    }
  }

  // 获取七牛token
  async getQiniuToken() {
    const res = await getUploadToken();
    if (res) {
      this.setState({
        token: res.token,
      });
    }
  }

  // 获取省市区数据
  async getCityData() {
    const res = await getCityData();
    if (res) {
      this.handleCityData(res);
    }
  }

  // 获取邀请人信息
  async getInvitationInfo() {
    const { agentUserId } = this.state;
    const res = await getInvitationInfo(agentUserId);
    if (res) {
      this.setState({
        invitationInfo: res,
      });
    }
  }

  // 获取验证码
  async getVerificationCode(mobile) {
    const params = {
      mobile,
    };
    const res = await getPersonalCode(params);
    if (res && res.msg) {
      Toast.info(res.msg);
      this.init();
    }
  }

  render() {
    const {
      isChecked,
      cityInfo,
      city,
      invitationInfo,
      personInfo,
      reg,
      cardAArr,
      cardBArr,
      personInfo: { nickName, mobile, verifyCode },
      isShowPercent,
      timePercent,
      isShowAgreement,
      authority,
    } = this.state;
    return (
      <div style={styles.container}>
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
              placeholder="此号码将升级为基础服务商"
              maxLength={11}
              value={mobile}
            />
          </div>
          <div style={styles.inputBox}>
            <div style={styles.inputName}>验证码</div>
            <input
              style={{ ...styles.inputValue, ...styles.codeInput }}
              onChange={e => this.handleValueChange({ verifyCode: e.target.value.trim() })}
              placeholder="输入手机验证码"
              value={verifyCode}
              maxLength={4}
            />
            <TimeOut
              getCode={this.getVerificationCode.bind(this)}
              personInfo={personInfo}
              reg={reg}
              ref={child => {
                this.timeChild = child;
              }}
            />
          </div>
          <div
            style={{
              ...styles.inputBox,
              ...styles.inputArea,
              ...styles.noBorderLine,
            }}
          >
            <Picker
              itemStyle={{ width: '100%' }}
              extra="请选择省/市"
              value={city}
              data={cityInfo}
              onOk={e => this.setState({ city: e })}
            >
              <List.Item arrow="horizontal">代理城市</List.Item>
            </Picker>
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
                    onChange={this.cardAUpload}
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
                    onChange={this.cardBUpload}
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
              《米粒生活服务商服务协议》
            </span>
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
          onClose={() => this.handleAgreement(false)}
          title="米粒生活服务商合作协议"
          footer={[{ text: '同意', onPress: () => this.handleCheck('1') }]}
        >
          <div style={{ height: window.screen.availHeight - 260 }}>
            <Agreement />
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
      </div>
    );
  }
}
