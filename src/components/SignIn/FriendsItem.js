import React, { Component } from 'react';
import { Icon, Modal } from 'antd-mobile';
import './Style.css';

const fontFamilyNormal = 'PingFangSC-Regular';
const fontFamilyBold = 'PingFangSC-Medium';

const styles = {
  container: {
    padding: '0 10px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  modalWrap: {
    padding: '6px 6px 14px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: '6px',
    padding: '0 0 10px 20px',
  },
  title: {
    textAlign: 'center',
    paddingBottom: '16px',
    fontFamily: fontFamilyBold,
    color: '#333',
    fontSize: '17px',
    borderBottom: '1px solid #EBEBEB',
  },
  itemWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '16px',
  },
  nameBox: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    marginRight: '8px',
    width: '28px',
    height: '28px',
  },
  itemName: {
    fontFamily: fontFamilyNormal,
    color: '#333',
    fontSize: '14px',
  },
  itemBtn: {
    paddingBottom: '12px',
    fontFamily: fontFamilyBold,
    color: '#fff',
    lineHeight: '28px',
    borderRadius: '15px',
    padding: '0 14px',
    background: 'linear-gradient(-45deg, #FB9D54 0%, #FF5947 100%)',
  },
  friendsBox: {
    maxHeight: '400px',
    overflow: 'scroll',
  },
};

export default class FriendsItem extends Component {
  closeModal = () => {
    const { closeFriendModal } = this.props;
    closeFriendModal();
  };

  answerFriends = () => {
    const { answerFriends } = this.props;
    answerFriends();
  };

  renderList = list => {
    return list.map((item, index) => {
      return (
        <div style={styles.itemWrap} key={index}>
          <div style={styles.nameBox}>
            <img style={styles.avatar} src={item.headimgurl ? item.headimgurl : ''} alt="" />
            <div style={styles.itemName}>{item.nickname}</div>
          </div>
          <div onClick={this.answerFriends} style={styles.itemBtn}>
            通知他
          </div>
        </div>
      );
    });
  };

  render() {
    const { isShowFriends, list } = this.props;
    return (
      <Modal className="friendModal" visible={isShowFriends} style={styles.container} transparent>
        <div style={styles.modalWrap}>
          <div onClick={this.closeModal} style={styles.closeIcon}>
            <Icon type="cross" size="md" color="#B3B3B3" />
          </div>
          <div style={styles.title}>未完成首购好友</div>
          <div style={styles.friendsBox}>{list && list.length > 0 && this.renderList(list)}</div>
        </div>
      </Modal>
    );
  }
}
