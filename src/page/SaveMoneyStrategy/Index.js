import React, { PureComponent } from 'react';

const styles = {
  container: {
    background: '#fff',
    padding: '24px 18px',
  },
  titleWrap: {
    width: '100%',
    position: 'relative',
  },
  titleWrapMargin: {
    marginTop: '30px',
  },
  titleBg: {
    margin: '0 auto',
    width: 'auto',
    height: '39px',
  },
  titleText: {
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '18px',
    position: 'absolute',
    top: '7px',
    left: 0,
    textAlign: 'center',
    zIndex: 9,
    width: '100%',
  },
  itemTitleWrap: {
    display: 'flex',
    margin: '21px 0 17px 0',
  },
  itemNum: {
    background: 'rgba(252,66,119,0.15)',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '20px',
    color: '#FC4277',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    marginRight: '6px',
  },
  itemTitle: {
    flex: 1,
    fontFamily: 'PingFangSC-Medium',
    fontSize: '15px',
    color: '#333',
  },
  itemImg: {
    width: '100%',
    height: 'auto',
  },
  itemImgMargin: {
    marginBottom: '10px',
  },
};
export default class Index extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.titleWrap}>
          <img
            style={styles.titleBg}
            src={require('@assets/SaveMoneyStrategy/bg-title.png')}
            alt=""
          />
          <div style={styles.titleText}>省钱攻略</div>
        </div>
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>1</div>
          <div style={styles.itemTitle}>在淘宝/天猫长按商品标题，点击复制宝贝链接</div>
        </div>

        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img1.png')} alt="" />
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>2</div>
          <div style={styles.itemTitle}>打开米粒生活，弹出窗口，点击搜索</div>
        </div>
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img2.png')} alt="" />
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>3</div>
          <div style={styles.itemTitle}>领取优惠券/购买，回到米粒生活领取奖励</div>
        </div>
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img3.png')} alt="" />
        <div style={{ ...styles.titleWrap, ...styles.titleWrapMargin }}>
          <img
            style={styles.titleBg}
            src={require('@assets/SaveMoneyStrategy/bg-title.png')}
            alt=""
          />
          <div style={styles.titleText}>赚钱攻略</div>
        </div>
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>1</div>
          <div style={styles.itemTitle}>打开米粒生活，选择商品后进入商品详情页，点击“分享”</div>
        </div>
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img4.png')} alt="" />
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>2</div>
          <div style={styles.itemTitle}>点击微信好友/朋友圈，分享商品图片给好友</div>
        </div>
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img5.png')} alt="" />
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>3</div>
          <div style={styles.itemTitle}>
            好友扫描二维码/点击商品链接，复制淘口令后打开淘宝，点击弹窗领取优惠券，购买后你获得奖励
          </div>
        </div>
        <img
          style={{ ...styles.itemImg, ...styles.itemImgMargin }}
          src={require('@assets/SaveMoneyStrategy/img6.png')}
          alt=""
        />
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img7.png')} alt="" />
        <div style={{ ...styles.titleWrap, ...styles.titleWrapMargin }}>
          <img
            style={styles.titleBg}
            src={require('@assets/SaveMoneyStrategy/bg-title.png')}
            alt=""
          />
          <div style={styles.titleText}>邀请攻略</div>
        </div>
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>1</div>
          <div style={styles.itemTitle}>打开米粒生活，点击“我的-邀好友拿奖励”，跳转分享海报页</div>
        </div>
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img8.png')} alt="" />
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>2</div>
          <div style={styles.itemTitle}>左右滑动选择海报，点击“分享海报”/“分享链接”给好友</div>
        </div>
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img9.png')} alt="" />
        <div style={styles.itemTitleWrap}>
          <div style={styles.itemNum}>3</div>
          <div style={styles.itemTitle}>好友扫码下载米粒生活，完成注册，可享免单</div>
        </div>
        <img style={styles.itemImg} src={require('@assets/SaveMoneyStrategy/img10.png')} alt="" />
      </div>
    );
  }
}
