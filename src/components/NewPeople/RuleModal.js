import React, { Component } from 'react';

const styles = {
  modalWrap: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 100,
    padding: '0 20px',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
  },
  modalContent: {
    width: '100%',
    background: '#FFEFF4',
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 6px 16px 0 rgba(0,0,0,0.20)',
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '15px',
    color: '#333',
    lineHeight: '22px',
    marginBottom: '12px',
  },
  ruleWrap: {
    background: '#fff',
    borderRadius: '4px',
    padding: '12px 8px 4px',
  },
  closeBtn: {
    width: '32px',
    height: '32px',
    margin: '32px auto 0',
    display: 'block',
  },
  ruleTextWrap: {
    fontSize: '12px',
    color: '#333',
    fontFamily: 'PingFangSC-Regular',
    marginBottom: '8px',
    lineHeight: '18px',
    display: 'flex',
  },
  ruleNum: {
    width: '18px',
    height: '18px',
    background: '#F1004D',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '50%',
    marginRight: '8px',
  },
  ruleText: {
    flex: 1,
  },
};
export default class RuleModal extends Component {
  handleRule = boo => {
    const { handleRule } = this.props;
    handleRule(boo);
  };

  renderRule = () => {
    const { ruleText } = this.props;
    return ruleText.map((item, index) => {
      return (
        <div style={styles.ruleTextWrap}>
          <div style={styles.ruleNum}>{index + 1}</div>
          <div style={styles.ruleText}>
            {item.title}: {item.text}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div style={styles.modalWrap}>
        <div style={styles.modalContent}>
          <div style={styles.modalTitle}>规则</div>
          <div style={styles.ruleWrap}>{this.renderRule()}</div>
        </div>
        <img
          onClick={() => this.handleRule(false)}
          style={styles.closeBtn}
          src={require('@assets/icon-close.png')}
          alt=""
        />
      </div>
    );
  }
}
