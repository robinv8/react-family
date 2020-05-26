import React, { Component } from 'react';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrap: {
    width: '72%',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 6px 16px 0 rgba(0,0,0,0.20)',
  },
  contentWrap: {
    padding: '32px 24px 20px',
    boxSizing: 'border-box',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#333',
    marginBottom: '12px',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#999',
    lineHeight: '22px',
  },
  btnWrap: {
    display: 'flex',
    borderTop: '1px solid #DFDFDF',
  },
  btnText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '48px',
    flex: 1,
  },
  btnText1: {
    color: '#333',
    borderRight: '1px solid #DFDFDF',
  },
  btnText2: {
    color: '#FC4277',
  },
};
export default class UpFormalModal extends Component {
  handleFormal = () => {
    const { handleFormal } = this.props;
    handleFormal(false);
  };

  handleTel = () => {
    const { data } = this.props;
    window.location.href = `tel:${data.mobile}`;
  };

  render() {
    const { isUpFormalModal, data } = this.props;
    return (
      isUpFormalModal && (
        <div style={styles.container}>
          <div style={styles.modalWrap}>
            <div style={styles.contentWrap}>
              {data.mobile && <div style={styles.title}>服务商电话：{data.mobile}</div>}
              <div style={styles.text}>{data.text}</div>
            </div>
            <div style={styles.btnWrap}>
              <div onClick={this.handleFormal} style={{ ...styles.btnText, ...styles.btnText1 }}>
                取消
              </div>
              <div onClick={this.handleTel} style={{ ...styles.btnText, ...styles.btnText2 }}>
                呼叫
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
