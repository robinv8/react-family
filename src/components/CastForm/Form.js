import React, { Component } from 'react';
import { Toast, Picker, List } from 'antd-mobile';

export default class Index extends Component {
  init = () => {
    // this.timeChild.init();
  };

  setCity = e => {
    const { setCity } = this.props;
    setCity(e);
  };

  handleValueChange = obj => {
    const { handleValueChange, personInfo } = this.props;
    const info = {
      ...personInfo,
      ...obj,
    };
    handleValueChange(info);
  };

  getVerificationCode = mobile => {
    const { getVerificationCode } = this.props;
    getVerificationCode(mobile);
  };

  handleSubmit = () => {
    const { getFormSubmit, personInfo, city, pcdInfo } = this.props;
    const result = this.handleCheckForm();
    if (result) {
      Toast.loading('提交中...', 0);
      let addressInfo = {};
      if (!pcdInfo) {
        addressInfo = {
          provinceCode: Number(city[0].split('-')[0]),
          provinceName: city[0].split('-')[1],
        };
        if (city.length > 1) {
          addressInfo.cityCode = Number(city[1].split('-')[0]);
          addressInfo.cityName = city[1].split('-')[1];
        }
      }
      const params = {
        ...personInfo,
        ...addressInfo,
      };
      if (city.length > 1) {
        params.cityCode = Number(city[1].split('-')[0]);
        params.cityName = city[1].split('-')[1];
      }
      getFormSubmit(params);
    }
  };

  // 表单校验
  handleCheckForm = () => {
    const { personInfo, city, reg, pcdInfo } = this.props;
    if (!personInfo.name) {
      Toast.info('姓名不能为空！');
      return false;
    }
    if (!personInfo.mobile) {
      Toast.info('电话不能为空！');
      return false;
    }
    if (!reg.test(personInfo.mobile)) {
      Toast.info('电话号码格式不正确！');
      return false;
    }
    // if (!personInfo.verifyCode) {
    //   Toast.info("验证码不能为空！");
    //   return false;
    // }
    if (city.length === 0 && !pcdInfo) {
      Toast.info('请选择省/市！');
      return false;
    }
    // if (!personInfo.company) {
    //   Toast.info("公司名称不能为空！");
    //   return false;
    // }
    return true;
  };

  render() {
    const {
      cityInfo,
      city,
      submitId,
      personInfo: { mobile, name },
    } = this.props;
    return (
      <div style={styles.formWrap}>
        <div style={styles.titleWrap}>
          <div style={styles.point}></div>
          <div style={styles.titleText}>服务商申请</div>
          <div style={styles.point}></div>
        </div>
        <div style={styles.inputBox}>
          <div style={styles.inputName}>
            姓名<span style={styles.nameLabel}>*</span>
          </div>
          <input
            style={styles.inputValue}
            onChange={e => this.handleValueChange({ name: e.target.value.trim() })}
            placeholder="请输入姓名"
            value={name}
            maxLength={10}
          />
        </div>
        <div style={styles.inputBox}>
          <div style={styles.inputName}>
            电话<span style={styles.nameLabel}>*</span>
          </div>
          <input
            style={styles.inputValue}
            onChange={e => this.handleValueChange({ mobile: e.target.value.trim() })}
            placeholder="请输入电话"
            value={mobile}
            maxLength={11}
          />
        </div>
        {/* <div style={styles.inputBox}>
          <div style={styles.inputName}>
            验证码<span style={styles.nameLabel}>*</span>
          </div>
          <div style={styles.codeWrap}>
            <input
              style={styles.inputValue}
              onChange={e =>
                this.handleValueChange({
                  verifyCode: e.target.value.trim()
                })
              }
              placeholder="输入手机验证码"
              value={verifyCode}
              maxLength={4}
            />
            <TimeOut
              codeId={codeId}
              getCode={this.getVerificationCode}
              personInfo={personInfo}
              reg={reg}
              ref={child => {
                this.timeChild = child;
              }}
            />
          </div>
        </div> */}
        <div style={styles.inputBox}>
          <div style={styles.inputName}>
            所在城市<span style={styles.nameLabel}>*</span>
          </div>
          <Picker
            itemStyle={{ width: '100%' }}
            extra="请选择省/市"
            value={city}
            data={cityInfo}
            onOk={e => this.setCity(e)}
          >
            <List.Item arrow="down" />
          </Picker>
        </div>
        {/*<div style={styles.inputBox}>
              <div style={styles.inputName}>公司名称<span style={styles.nameLabel}>*</span></div>
              <input
                style={styles.inputValue}
                onChange={(e) => this.handleValueChange({company: e.target.value.trim()})}
                placeholder="请输入公司名称"
                value={company}
                maxLength={40}
              />
            </div>
            */}
        <div
          className={submitId}
          id={submitId}
          onClick={() => this.handleSubmit()}
          style={styles.btnWrap}
        >
          0元领取项目资料
        </div>
      </div>
    );
  }
}

const styles = {
  img1: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  imgContent: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99,
  },
  formWrap: {
    position: 'relative',
    background: '#fff',
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 8,
    padding: '20px 6% 20px',
    boxSizing: 'border-box',
    zIndex: 99,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  inputBox: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '15px',
    marginBottom: '18px',
    width: '100%',
  },
  inputName: {
    color: '#666',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    marginBottom: '15px',
  },
  nameLabel: {
    color: '#FC2435',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
  },
  inputValue: {
    color: '#666',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    width: '100%',
    background: 'none',
  },
  btnWrap: {
    width: '100%',
    height: '49px',
    lineHeight: '49px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
    fontFamily: 'PingFangSC-Medium',
    borderRadius: '4px',
    background: '#FF4105',
  },
  codeWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleWrap: {
    backgroundColor: '#EA1605',
    borderRadius: 22.5,
    width: 162,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    marginBottom: 30,
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'PingFangSC-Semibold',
    marginLeft: 12,
    marginRight: 12,
  },
  point: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: '#fff',
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
};
