import React, { Component } from 'react';
import * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const styles: { [propName: string]: Style } = {
  oldWrap: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  oldContent: {
    width: '270px',
    background: '#fff',
    borderRadius: '8px',
    padding: '20px 7.5px',
  },
  oldInfo: {
    paddingTop: '16px',
    width: '100%',
    textAlign: 'center',
    color: '#333',
    fontSize: '14px',
    lineHeight: '22px',
  },
  oldBtn: {
    width: '230px',
    background: '#FFD34D',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '24px',
    margin: '20px auto 0',
  },
  oldBtnText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    color: '#A74D00',
  },
  oldBtnImg: {
    width: '15px',
    height: '15px',
    marginLeft: '4px',
  },
};
interface Props {
  handleBuyModal: (param: boolean) => void;
  pressShare: (param: string) => void;
}
export default ({ handleBuyModal, pressShare }: Props) => {
  return (
    <div style={styles.oldWrap} onClick={() => handleBuyModal(false)}>
      <div style={styles.oldContent}>
        <div style={styles.oldInfo}>
          <div>你已经是老用户啦</div>
          <div>快去分享免单机会，邀请新人赚佣金吧</div>
        </div>
        <div style={styles.oldBtn} onClick={() => pressShare('2')}>
          <span style={styles.oldBtnText}>分享0元好物给好友</span>
          <img style={styles.oldBtnImg} src={require('@assets/NewPeople/share-zong.png')} alt="" />
        </div>
      </div>
    </div>
  );
};
