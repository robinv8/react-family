import React, { Component } from 'react';
import { Toast } from 'antd-mobile/lib/index';

const styles = {
  codeBtn: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    borderRadius: '2px',
    color: '#FF2006',
    width: '180px',
    textAlign: 'right',
  },
  codeBtnDisabled: {
    color: '#666',
    textAlign: 'right',
  },
};
export default class TimeOut extends Component {
  state = {
    seconds: 60,
    codeText: '获取验证码',
  };

  init = () => {
    clearTimeout(this.time);
    this.setState({
      seconds: 60,
      codeText: '获取验证码',
    });
  };

  getCode = () => {
    const { getCode, personInfo, reg } = this.props;
    if (!personInfo.mobile) {
      Toast.info('电话号码不能为空！');
      return false;
    }
    if (!reg.test(personInfo.mobile)) {
      Toast.info('电话号码格式不正确！');
    } else {
      this.setTimeStart();
      getCode(personInfo.mobile);
    }
  };

  setTimeStart = () => {
    const { seconds } = this.state;
    let num = seconds;
    this.time = null;
    if (num > 0) {
      num--;
      this.setState({
        seconds: num,
      });
      this.time = setTimeout(() => {
        this.setTimeStart();
      }, 1000);
    } else {
      this.setState({
        seconds: 60,
        codeText: '重新获取',
      });
      clearTimeout(this.time);
    }
  };

  render() {
    const { seconds, codeText } = this.state;
    const { codeId } = this.props;
    return seconds !== 60 ? (
      <div style={{ ...styles.codeBtn, ...styles.codeBtnDisabled }}>{seconds}s</div>
    ) : (
      <div className={codeId} id={codeId} onClick={this.getCode} style={styles.codeBtn}>
        {codeText}
      </div>
    );
  }
}
