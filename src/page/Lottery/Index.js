import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import ToastModal from '../../components/Lottery/TostModal';
import Barrage from '../../components/Lottery/Barrage';
import { getCoinCount, lotteryStart, lotteryBullet } from '../../service/api';

const styles = {
  itemBorder: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '2px',
  },
  content: {
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: 'PingFangSC-Regular',
    background: 'linear-gradient(135deg, #FF7840 0%, #FE2866 100%)',
  },
  pageBg: {
    width: '100%',
  },
  rule: {
    width: '54px',
    height: '22px',
    textAlign: 'center',
    lineHeight: '22px',
    color: '#fff',
    fontSize: '14px',
    background: '#FE2B64',
    borderRadius: '100px 0 0 100px',
    position: 'absolute',
    top: '14px',
    right: 0,
    zIndex: 1,
  },
  totalNum: {
    width: '100%',
    paddingTop: '90px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  colorGold: {
    fontFamily: 'PingFangSC-Medium',
    color: 'gold',
  },
  lotteryWrap: {
    width: '97%',
    // margin: '88px auto 0',
    // position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '200px',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  lotteryBg: {
    width: '98%',
    height: '394px',
  },
  lotteryCon: {
    width: '89%',
    height: '346px',
    position: 'absolute',
    top: '12px',
    left: '22px',
    borderRadius: '20px',
    clear: 'both',
  },
  item: {
    width: '22%',
    height: '22%',
    position: 'relative',
    float: 'left',
    margin: '8px 0 0 8px',
    display: 'inline-block',
  },
  item2: {
    position: 'absolute',
    top: '168px',
    left: '0px',
  },
  itemIcon: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    width: '100%',
    fontSize: '12px',
    position: 'absolute',
    top: '8px',
    left: 0,
    color: '#960000',
    textAlign: 'center',
    lineHeight: '12px',
  },
  itemText3: {
    fontSize: '10px',
  },
  itemText4: {
    top: '48px',
    color: '#fff',
  },
  itemSpe: {
    width: '45.5%',
    height: '45.8%',
    position: 'relative',
    float: 'left',
    margin: '8px 1px 0 9px',
  },
  itemBtnText: {
    fontFamily: 'PingFangSC-Medium',
    width: '60px',
    fontSize: '28px',
    position: 'absolute',
    top: '28px',
    left: 0,
    right: 0,
    margin: 'auto',
    color: '#fff',
    textAlign: 'center',
    lineHeight: '28px',
  },
  itemText2: {
    width: '100%',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '12px',
    position: 'absolute',
    bottom: '35px',
    left: 0,
    color: '#FFEB93',
    textAlign: 'center',
    lineHeight: '12px',
  },
  detail: {
    width: '100%',
    fontSize: '14px',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: '14px',
    marginTop: '24px',
    position: 'absolute',
    top: '600px',
    left: 0,
  },
  masker: {
    width: '100%',
    height: '34px',
    position: 'absolute',
    top: '130px',
    left: '0px',
    zIndex: 6,
  },
};

export default class Lottery extends Component {
  state = {
    coinNum: 0,
    activeIndex: 0,
    showToast: false,
    toastParams: {
      toastType: '', // toast red
      type: 'money', // money free
      money: 0,
    },
    barrageList: [],
  };

  componentDidMount() {
    this.init();
    this.getCoinNum();
    this.getBarrage();
  }

  jumpPage = type => {
    console.log('pagetype', type);
    let datas;
    if (type === 'rule') {
      datas = {
        isVerifity: true,
        isJump: true,
        jumpInfo: {
          routeName: 'WebView',
          params: {
            title: '抽奖规则',
            src: `${window.document.activeH5Url}/lotteryRule`,
          },
        },
      };
    }
    if (type === 'free') {
      datas = {
        isVerifity: true,
        isJump: true,
        jumpInfo: {
          routeName: 'WebView',
          params: {
            title: '新人免单',
            src: `${window.document.activeH5Url}/newPeople`,
          },
        },
      };
    }

    if (type === 'signIn') {
      datas = {
        isVerifity: true,
        isPop: true,
      };
    }

    if (type === 'lotteryDetail') {
      datas = {
        isVerifity: true,
        isJump: true,
        jumpInfo: {
          routeName: 'WebView',
          params: {
            title: '抽奖记录',
            src: `${window.document.activeH5Url}/lotteryDetail`,
          },
        },
      };
    }

    setTimeout(() => {
      window.postMessage(JSON.stringify(datas), '*');
    }, 100);
  };

  init = () => {
    this.count = 0; // 1-arr.length循环
    this.circle = 0; // 转几圈 转一圈+1
    this.speed = 5; // 速度 逐渐变大  转的速度越来越慢
    this.round = 6; // 转的圈数 转几圈结束抽奖
    this.isStart = false;
  };

  startLottery = id => {
    clearTimeout(this.timer);
    if (this.circle >= this.round && this.count === id) {
      // 游戏结束 结束递归 初始化游戏数据
      this.init();
      return;
    }
    this.timer = setTimeout(() => {
      // console.log('999', this.count, this.circle, this.speed)
      if (this.count === 12) {
        // 1 - 12循环  每次到12 圈数+1 下标为0
        this.count = 0;
        this.circle++;
      }
      if (this.circle >= this.round) {
        this.count += 1;
        // console.log('999999', this.count, id)
        const a = id > 7 ? 10 : 20;
        this.speed = this.speed + a * this.count;
        this.setState(
          {
            activeIndex: this.count,
          },
          () => {
            if (this.count === Number(id) - 1) {
              setTimeout(() => {
                if (Number(id) !== 10) {
                  this.toastState();
                } else {
                  this.setState({
                    showToast: false,
                  });
                  Toast.info('谢谢参与');
                }
              }, 1000);
              clearTimeout(this.timer);
            }
          },
        );
      } else {
        this.count += 1;
        this.speed = this.speed + 2;
        this.setState({
          activeIndex: this.count,
        });
      }
      this.startLottery(id);
    }, this.speed);
  };

  toastState = () => {
    const { showToast } = this.state;
    this.setState({
      showToast: !showToast,
    });
  };

  // 接口
  getLottery = async () => {
    // 金米粒不足
    const { coinNum } = this.state;
    if (coinNum < 50) {
      this.setState(
        {
          toastParams: {
            toastType: 'toast',
          },
        },
        () => {
          this.toastState();
        },
      );
      return;
    }
    // 埋点
    const statisticsParams = {
      isVerifity: true,
      isStatistics: true,
      statisticsInfo: {
        eventId: 'click_DrawRolls',
        eventParams: {},
      },
    };
    window.postMessage(JSON.stringify(statisticsParams));

    if (this.isStart) {
      Toast.info('游戏进行中');
    } else {
      console.log('调用了几次');
      this.isStart = true;
      const res = await lotteryStart();
      if (res && !res.msg) {
        this.lotteryResult(res);
        // 刷新米粒余额
        this.getCoinNum();
      }
    }
  };

  lotteryResult = data => {
    console.log('type====', data.type);
    switch (Number(data.type)) {
      case 1: // 0.88
        this.setState(
          {
            toastParams: {
              toastType: 'red',
              type: 'money',
              money: '0.88',
            },
          },
          () => {
            this.startLottery(7);
          },
        );
        break;
      case 2: // 1.8红包
        this.setState(
          {
            toastParams: {
              toastType: 'red',
              type: 'money',
              money: '1.8',
            },
          },
          () => {
            this.startLottery(4);
          },
        );
        break;
      case 3: // 2.8红包
        this.setState(
          {
            toastParams: {
              toastType: 'red',
              type: 'money',
              money: '2.8',
            },
          },
          () => {
            this.startLottery(12);
          },
        );
        break;
      case 4: // 6.8红包
        this.setState(
          {
            toastParams: {
              toastType: 'red',
              type: 'money',
              money: '6.8',
            },
          },
          () => {
            this.startLottery(9);
          },
        );
        break;
      case 5: // 8.8红包
        this.setState(
          {
            toastParams: {
              toastType: 'red',
              type: 'money',
              money: '8.8',
            },
          },
          () => {
            this.startLottery(2);
          },
        );
        break;
      case 7: // 免单
        this.setState({
          toastParams: {
            toastType: 'red',
            type: 'free',
          },
        });
        this.startLottery(11);
        break;
      case 0: // 谢谢参与
        this.startLottery(10);
        break;
      // case 6: // 88红包
      //   this.startLottery(5)
      //   break;
      // case 8: // 小米净化器
      //   this.startLottery(3)
      //   break;
      // case 9: // 手机
      //   this.startLottery(8)
      //   break;
      // case 10: // 烤箱
      //   this.startLottery(1)
      //   break;
      // case 11: // 吸尘器
      //   this.startLottery(6)
      //   break;
      default:
        Toast.info('出错了');
        break;
    }
  };

  // 金米粒金额
  getCoinNum = async () => {
    const res = await getCoinCount();
    if (!res.msg) {
      this.setState({
        coinNum: res,
      });
    }
  };

  // 弹幕
  getBarrage = async () => {
    const res = await lotteryBullet();
    if (res && !res.msg) {
      this.setState({
        barrageList: res,
      });
    }
  };

  renderItem = () => {
    const list = [
      {
        imgUrl: require('@assets/Lottery/box.png'),
        title: '智能电烤箱',
        type: 1,
        id: 1,
      },
      {
        imgUrl: require('@assets/Lottery/red.png'),
        title: '8.8元红包',
        type: 1,
        id: 2,
      },
      {
        imgUrl: require('@assets/Lottery/xiaomi.png'),
        title: '小米净化器',
        type: 1,
        id: 3,
      },
      {
        imgUrl: require('@assets/Lottery/red.png'),
        title: '1.8元红包',
        type: 1,
        id: 4,
      },
      {
        imgUrl: require('@assets/Lottery/red.png'),
        title: '2.8元红包',
        type: 1,
        id: 12,
      },
      {
        imgUrl: require('@assets/Lottery/start-btn.png'),
        title: '开始抽奖',
        type: 2,
      },
      {
        imgUrl: require('@assets/Lottery/red.png'),
        title: '88元红包',
        type: 1,
        id: 5,
      },
      {
        imgUrl: require('@assets/Lottery/free.png'),
        title: '免单1次',
        type: 3,
        id: 11,
      },
      {
        imgUrl: require('@assets/Lottery/clean.png'),
        title: '海尔静音吸尘器',
        type: 1,
        id: 6,
      },
      {
        imgUrl: require('@assets/Lottery/thank.png'),
        title: '谢谢参与',
        type: 4,
        id: 10,
      },
      {
        imgUrl: require('@assets/Lottery/red.png'),
        title: '6.8元红包',
        type: 1,
        id: 9,
      },
      {
        imgUrl: require('@assets/Lottery/phone.png'),
        title: '华为p30 pro',
        type: 1,
        id: 8,
      },
      {
        imgUrl: require('@assets/Lottery/red.png'),
        title: '0.88元红包',
        type: 1,
        id: 7,
      },
    ];
    const { activeIndex } = this.state;
    const arr = [];
    list.forEach((item, index) => {
      if (item.type === 1 || item.type === 4) {
        arr.push(
          <div style={{ ...styles.item, ...styles.border }} key={item.title}>
            <img style={styles.itemIcon} src={item.imgUrl} alt="" />
            <div style={{ ...styles.itemText, ...(item.type === 4 ? styles.itemText4 : '') }}>
              {item.title}
            </div>
            {activeIndex === item.id ? <div style={styles.itemBorder} /> : null}
          </div>,
        );
      }
      if (item.type === 2) {
        arr.push(
          <div style={styles.itemSpe} key={index} onClick={() => this.getLottery()}>
            <img style={styles.itemIcon} src={item.imgUrl} alt="" />
            <div style={styles.itemBtnText}>{item.title}</div>
            <div style={styles.itemText2}>50米粒</div>
          </div>,
        );
      }
      if (item.type === 3) {
        arr.push(
          <div style={{ ...styles.item, ...styles.item2 }} key={index}>
            <img style={styles.itemIcon} src={item.imgUrl} alt="" />
            <div style={styles.itemText}>{item.title}</div>
            {activeIndex === item.id ? <div style={styles.itemBorder} /> : null}
          </div>,
        );
      }
    });
    return arr;
  };

  render() {
    const { coinNum, showToast, toastParams, barrageList } = this.state;
    return (
      <div style={styles.content}>
        <img style={styles.pageBg} src={require('@assets/Lottery/page-bg.png')} alt="" />
        <div style={styles.rule} onClick={() => this.jumpPage('rule')}>
          规则
        </div>
        <div style={styles.totalNum}>
          剩余米粒：
          <span style={styles.colorGold}>{coinNum}</span>粒
        </div>
        {barrageList.length > 0 && <Barrage barrageList={barrageList} />}
        <div style={styles.masker} />
        <div style={styles.lotteryWrap}>
          <img style={styles.lotteryBg} src={require('@assets/Lottery/round-bg.png')} alt="" />
          <div style={styles.lotteryCon}>{this.renderItem()}</div>
        </div>

        <div style={styles.detail} onClick={() => this.jumpPage('lotteryDetail')}>
          抽奖记录>
        </div>
        {showToast ? (
          <ToastModal data={toastParams} toastState={this.toastState} jumpPage={this.jumpPage} />
        ) : null}
      </div>
    );
  }
}
