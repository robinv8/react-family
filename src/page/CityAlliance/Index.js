import React, { Component } from 'react';
import InviteModal from '../../components/CityAlliance/InviteModal';

const styles = {
  banner: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
  container: {
    position: 'relative',
  },
  infoWrap: {
    padding: '12px 12px 90px',
  },
  infoTitle: {
    marginBottom: '12px',
    fontFamily: 'PingFangSC-Medium',
    color: '#000',
    fontSize: '18px',
  },
  infoText: {
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    fontSize: '13px',
    lineHeight: '20px',
  },
  text: {
    marginBottom: '6px',
    textIndent: '2em',
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    fontSize: '14px',
    marginBottom: '6px',
  },
  infoImg: {
    width: '100%',
    height: 'auto',
    padding: '12px 20px 32px',
    boxSizing: 'border-box',
  },
  btnWrap: {
    padding: '0 16px 24px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    boxSizing: 'border-box',
  },
  btn: {
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: '48px',
    width: '100%',
    borderRadius: '24px',
    background: '#FC4277',
    boxShadow: '0 4px 8px 0 rgba(252, 66, 119, 0.4)',
  },
};
export default class Index extends Component {
  state = {
    isInviteModal: false,
  };

  joinApply = () => {
    this.setState({
      isInviteModal: true,
    });
  };

  toInvite = () => {
    const params = {
      isVerifity: true,
      isJump: true,
      jumpInfo: {
        routeName: 'InvitationShare',
        params: {},
      },
    };
    window.postMessage(JSON.stringify(params));
  };

  render() {
    const { isInviteModal } = this.state;
    return (
      <div style={styles.container}>
        <img style={styles.banner} src={require('@assets/CityAlliance/banner.png')} alt="" />
        <div style={styles.infoWrap}>
          <div style={styles.infoTitle}>一、同城联盟是什么？</div>
          <div style={styles.infoText}>
            <div style={styles.text}>
              米粒生活同城联盟是专为门店进行联盟合作，实现会员共享，店铺共享，资源整合而量身设计的
            </div>
            <div style={styles.text}>
              平台基于共享、分销、线上线下闭环3个理念，将门店联合起来，联盟中的门店可相互引流，相互宣传，优劣互补，抱团共赢。
            </div>
          </div>
          <img style={styles.infoImg} src={require('@assets/CityAlliance/img1.png')} alt="" />
          <div style={styles.infoTitle}>二、加入同城联盟，有什么好处？</div>
          <div style={styles.title}>1、会员共享，同城引流</div>
          <div style={styles.infoText}>
            <div style={styles.text}>
              全城门店会员聚合成为所有门店的通用会员，通过平台线上线下为商家引流，拉开与周边商家的竞争，实现客流和营业额的增长。（门店可选择会员不对同行开放）。
            </div>
          </div>
          <div style={styles.title}>2、全城分销，报团共赢</div>
          <div style={styles.infoText}>
            <div style={styles.text}>会员购买其他门店商品，店长可获得分销奖励。</div>
          </div>
          <div style={styles.title}>3、加强门店广告宣传曝光</div>
          <div style={styles.infoText}>
            <div style={styles.text}>
              平台线上可展示商家的门店及产品，为门店免费做广告宣传，加强品牌曝光率。
            </div>
          </div>
          <img style={styles.infoImg} src={require('@assets/CityAlliance/img2.png')} alt="" />
          <div style={styles.infoTitle}>三、怎么加入同城联盟？</div>
          <div style={styles.infoText}>
            <div style={styles.text}>
              同城联盟目前为邀请制，平台会根据好友数、订单数、热度等综合评定，邀请有实力的门店入驻；未被邀请的门店可申请加入。
            </div>
          </div>
        </div>
        <div style={styles.btnWrap}>
          <div style={styles.btn} onClick={this.joinApply}>
            申请加入同城联盟
          </div>
        </div>
        {isInviteModal && <InviteModal toInvite={this.toInvite} />}
      </div>
    );
  }
}
