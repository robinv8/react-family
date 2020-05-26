/*
 * @Description:
 * @Date: 2020-05-09 09:41:38
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-05-09 16:26:21
 */
import React, { useEffect, useState } from 'react';
import imageMapResize from 'image-map-resizer';
import wx from 'weixin-js-sdk';
import { Modal, Toast } from 'antd-mobile';
import copy from 'copy-to-clipboard';

const styles = {
  btn: {
    position: 'fixed',
    bottom: 0,
    border: 0,
    width: '100%',
    height: '55px',
    background: 'linear-gradient(180deg,rgba(222,66,148,1) 0%,rgba(224,74,113,1) 100%)',
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'PingFang SC',
  },
};
const Index = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    imageMapResize();
  });
  const toPage = () => {
    wx.miniProgram.navigateTo({
      url: '/pages/WebView/index?url=https://activity-h5.vxiaoke360.com/ShopkeeperRise',
    });
  };
  const onDownload = () => {
    copy('https://a.app.qq.com/o/simple.jsp?pkgname=com.vxiaoke.ricelife.app&fromcase=40002');
    setVisible(true);
  };
  const onPress = () => {
    setVisible(false);
    Toast.show('复制成功！');
  };
  return (
    <>
      <img src="https://image.vxiaoke360.com/20200509094906.png" style={{ width: '100%' }} alt="" />
      <img
        src="https://image.vxiaoke360.com/20200509094918.png"
        style={{ width: '100%' }}
        alt=""
        useMap="#image-map"
      />
      <img src="https://image.vxiaoke360.com/20200509095136.png" style={{ width: '100%' }} alt="" />
      <img src="https://image.vxiaoke360.com/20200509095204.png" style={{ width: '100%' }} alt="" />

      <img src="https://image.vxiaoke360.com/20200509095221.png" style={{ width: '100%' }} alt="" />

      <img src="https://image.vxiaoke360.com/20200509095234.png" style={{ width: '100%' }} alt="" />

      <img src="https://image.vxiaoke360.com/20200509095249.png" style={{ width: '100%' }} alt="" />
      <map name="image-map">
        <area
          target="_blank"
          alt="店长申请"
          title="店长申请"
          onClick={toPage}
          coords="1292,326,146,244"
          shape="rect"
        />
      </map>
      <button style={styles.btn} onClick={onDownload}>
        前往下载米粒生活
      </button>
      <Modal
        visible={visible}
        transparent
        maskClosable={false}
        onClose={() => setVisible(false)}
        title="提示"
        footer={[
          {
            text: '好的',
            onPress,
          },
        ]}
      >
        <div>打开浏览器，粘贴链接进行下载！</div>
      </Modal>
    </>
  );
};
export default Index;
