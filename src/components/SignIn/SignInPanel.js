import React, { Component } from 'react';

const fontFamilyNormal = 'PingFangSC-Regular';
const fontFamilyBold = 'PingFangSC-Medium';

const styles = {
  container: {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 8px 20px #f5bcb7',
    padding: '22px 12px',
    boxSizing: 'border-box',
  },
  panelTitleWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  panelTitle: {
    color: '#333',
    fontFamily: fontFamilyBold,
    fontSize: '16px',
  },
  dayText: {
    color: '#ff0a0a',
  },
  panelDes: {
    color: '#333',
    fontFamily: fontFamilyNormal,
    fontSize: '12px',
  },
  panelListWrap: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  panelBox: {
    padding: '8px 3px',
    boxSizing: 'boxder-box',
    borderRadius: '4px',
  },
  coinBox: {
    fontFamily: fontFamilyNormal,
    fontSize: '10px',
    textAlign: 'center',
    color: '#FFE4B0',
    background: 'linear-gradient(135deg, #FF8F02 0%, #FF6100 100%)',
    border: '4px solid #FFBB04',
    width: '23px',
    height: '23px',
    borderRadius: '50%',
    lineHeight: '23px',
    marginBottom: '7px',
  },
  panelText: {
    fontFamily: fontFamilyNormal,
    fontSize: '12px',
    textAlign: 'center',
  },
};
export default class SignInPanel extends Component {
  renderPanelList = (panelList, data) => {
    const timeIndex = (data.continuousTime && Number(data.continuousTime)) || 0;
    return panelList.map((item, index) => {
      return (
        <div
          style={{
            ...styles.panelBox,
            background:
              timeIndex >= index + 1
                ? 'linear-gradient(180deg, #FEF1CB 0%, #FEF1CB 100%)'
                : '#F5F6FA',
          }}
          key={index}
        >
          <div style={styles.coinBox}>+{item}</div>
          <div style={{ ...styles.panelText, color: timeIndex >= index + 1 ? '#FF5C4E' : '#999' }}>
            {timeIndex >= index + 1 ? '已签' : `${index + 1}天`}
          </div>
        </div>
      );
    });
  };

  render() {
    const { panelList, data } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.panelTitleWrap}>
          <div style={styles.panelTitle}>
            已连续签到<span style={styles.dayText}>{data.continuousTime || '0'}天</span>
          </div>
          <div style={styles.panelDes}>连续七天签到拿大奖</div>
        </div>
        {panelList && panelList.length > 0 && (
          <div style={styles.panelListWrap}>{this.renderPanelList(panelList, data)}</div>
        )}
      </div>
    );
  }
}
