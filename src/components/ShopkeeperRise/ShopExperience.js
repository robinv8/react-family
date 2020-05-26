import React, { PureComponent } from 'react';

const styles = {
  container: {
    padding: '10px',
    textAlign: 'left',
  },
};
export default class Agreement extends PureComponent {
  render() {
    const content = `<p>一、体验店长权益：</p>
    <p>1.所有店长的功能均可使用；</p>
    <p>2.门店订单收益、新人免单返现可随时提现，其他收益（如自购奖励、分享奖励、店主红包等）升级正式版后可提现；</p>
    <p>3.店长可在体验期内随时缴费，升级正式版。</p>
    <p>二、体验时间：</p>
    <p>体验店长申请通过之日起45天。</p>
    <p>三、未缴费处理：</p>
    <p>1.如未缴费，则体验期结束后，所有权限收回，店长按会员等级自动降级；</p>
    <p>2.除门店订单、新人免单返现外，其他收益（如自购奖励、分享奖励、店主红包等）全部由平台收回。</p>`;
    return <div style={styles.container} dangerouslySetInnerHTML={{ __html: content }} />;
  }
}
