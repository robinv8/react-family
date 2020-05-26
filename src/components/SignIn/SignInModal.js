import React, { Component } from 'react';
import { Modal } from 'antd-mobile';
import './Style.css';

const fontFamilyNormal = 'PingFangSC-Regular';
const fontFamilyBold = 'PingFangSC-Medium';

const styles = {
  container: {
    padding: '0 50px',
    boxSizing: 'border-box',
    width: '100%',
  },
  modalArea: {
    position: 'relative',
    paddingTop: '56px',
  },
  modalWrap: {
    boxSizing: 'border-box',
    background: '#fff',
    borderRadius: '8px',
    padding: '34px 20px 0',
  },
  modalImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontFamily: fontFamilyBold,
    color: '#333',
    fontSize: '18px',
    marginBottom: '6px',
  },
  signInText: {
    textAlign: 'center',
    fontFamily: fontFamilyNormal,
    color: '#333',
    fontSize: '12px',
    marginBottom: '20px',
  },
  signInTextColor: {
    color: '#FE2D64',
  },
  btnBox1: {
    width: '184px',
    lineHeight: '46px',
    textAlign: 'center',
    fontFamily: fontFamilyBold,
    color: '#fff',
    fontSize: '18px',
    background: 'linear-gradient(135deg, #FF7840 0%, #FE2866 100%)',
    borderRadius: '23px',
    margin: '0 auto',
  },
  btnBox2: {
    lineHeight: '46px',
    textAlign: 'center',
    fontFamily: fontFamilyBold,
    color: '#FF5353',
    fontSize: '18px',
    borderTop: '1px solid #E0E0E0',
  },
  tipText: {
    textAlign: 'center',
    color: '#FE2D64',
    fontFamily: fontFamilyNormal,
    fontSize: '12px',
    marginBottom: '20px',
  },
};
export default class SignInModal extends Component {
  closeModal = () => {
    const { closeSignInModal } = this.props;
    closeSignInModal();
  };

  jumpPage = page => {
    const { jumpPage } = this.props;
    jumpPage('h5', page);
  };

  render() {
    const { isShowSignModal, data } = this.props;
    return (
      <Modal className="signModal" visible={isShowSignModal} style={styles.container} transparent>
        <div style={styles.modalArea}>
          <img style={styles.modalImg} src={require('@assets/SignIn/signIn-modal.png')} alt="" />
          <div style={{ ...styles.modalWrap, paddingBottom: data.type === 1 && '24px' }}>
            <div style={styles.title}>签到成功</div>
            <div style={styles.signInText}>
              已连续签到<span style={styles.signInTextColor}>{data.continuousTime || '0'}天</span>{' '}
              金米粒<span style={styles.signInTextColor}>+{data.goldRiceNum}</span>
            </div>
            {data.type === 1 && <div style={styles.tipText}>获得一次抽奖机会</div>}
            {data.type === 1 ? (
              <div onClick={() => this.jumpPage('lottery')} style={styles.btnBox1}>
                去抽奖
              </div>
            ) : (
              <div onClick={this.closeModal} style={styles.btnBox2}>
                确定
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
  }
}
