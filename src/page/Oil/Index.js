import React from 'react';
import Tab from './components/Tab';
import OilList from './components/OilList';
import OrderList from './components/OrderList';

const styles = {
  container: {
    height: '100%',
  },
};

export default class CardIndex extends React.Component {
  state = {
    tabIndex: 1,
  };

  componentWillMount() {
    localStorage.removeItem('localData');
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const mobileType = navigator.userAgent;
    const isAndroid = mobileType.indexOf('Android') > -1 || mobileType.indexOf('Linux') > -1;

    window.addEventListener('message', e => {
      const message = isAndroid ? e.data : JSON.parse(e.data);
      console.log('接收postmessage', message);
      if (message && Number(message.tbAuth) >= 0) {
        console.log('bridge建立成功！');
        this.getAreaId();
      }
    });
    this.oilList.init();
  }

  // 获取areaId
  getAreaId = () => {
    console.log('发送消息');
    const datas = {
      isVerifity: true,
      isGetLocalAreaId: true,
    };
    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 100);
  };

  // 切换底部tab
  changeTab = tab => {
    this.setState({
      tabIndex: tab,
    });
  };

  render() {
    const { tabIndex } = this.state;
    return (
      <div style={styles.container}>
        {tabIndex === 1 ? <OilList ref={el => (this.oilList = el)} /> : <OrderList />}
        <Tab changeTab={this.changeTab} tabIndex={tabIndex} />
      </div>
    );
  }
}
