import React, { Component } from 'react';

const styles = {
  shareWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(0, 0,0, 0.6)',
    boxSizing: 'border-box',
    position: 'relative',
  },
  shareCon: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: '#F6F6F6',
  },
  shareTop: {
    width: '100%',
    background: '#F6F6F6',
    boxSizing: 'border-box',
    padding: '19px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareItem: {
    width: '56px',
    textAlign: 'center',
  },
  img: {
    width: '36px',
    height: '36px',
  },
  shareText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#666',
    marginTop: '8px',
    textAlign: 'center',
  },
  shareBottom: {
    background: '#fff',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#333',
  },
};
export default class Share extends Component {
  closeShare = () => {
    const { closeShare } = this.props;
    closeShare();
  };

  render() {
    return (
      <div style={styles.shareWrap}>
        <div style={styles.shareCon}>
          <div style={styles.shareTop}>
            <div style={styles.shareItem}>
              <img style={styles.img} src={require('@assets/NewPeople/w-f.png')} alt="" />
              <div style={styles.shareText}>微信好友</div>
            </div>

            <div style={styles.shareItem}>
              <img style={styles.img} src={require('@assets/NewPeople/w-c.png')} alt="" />
              <div style={styles.shareText}>朋友圈</div>
            </div>

            <div style={styles.shareItem}>
              <img style={styles.img} src={require('@assets/NewPeople/w-save.png')} alt="" />
              <div style={styles.shareText}>保存图片</div>
            </div>

            <div style={styles.shareItem}>
              <img style={styles.img} src={require('@assets/NewPeople/w-link.png')} alt="" />
              <div style={styles.shareText}>分享链接</div>
            </div>
          </div>
          <div style={styles.shareBottom} onClick={() => this.closeShare()}>
            取消
          </div>
        </div>
      </div>
    );
  }
}
