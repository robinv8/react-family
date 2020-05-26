/*
 * @Descrition: 文件描述
 * @Author: Da Shuai
 * @Date: 2020-05-09 09:29:48
 * @LastEditTime: 2020-05-11 20:53:33
 */
import React, { PureComponent } from 'react';

const styles = {
  head: {
    width: '100%',
  },
  bgW: {
    background: '#fff',
  },
  h20: {
    height: '20px',
  },
  titleWrap: {
    height: '74px',
    position: 'relative',
  },
  title1: {
    width: '100%',
    fontSize: '30px',
    color: '#E7EBEF',
    textAlign: 'center',
    lineHeight: '74px',
  },
  title: {
    width: '100%',
    color: '#323B45',
    fontSize: '24px',
    textAlign: 'center',
    position: 'absolute',
    top: '10px',
  },
  ruleItem: {
    fontSize: '14px',
    fontFamily: 'PingFangSC-Medium',
    color: '#4D555D',
    lineHeight: '30px',
  },
  ruleText: {
    color: '#0074FF',
  },
  ruleCon: {
    padding: '20px 27px 50px',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
    color: '#4D555D',
    lineHeight: '30px',
  },
  personWrap: {
    padding: '18px 18px 25px',
    background: '#fff',
  },
  conBg: {
    width: '100%',
    background: '#fff',
    boxSizing: 'border-box',
    padding: '25px 20px 25px 16px',
  },
  intro: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  introLeft: {
    flex: 1,
  },
  name: {
    fontSize: '20px',
    fontFamily: 'PingFangSC-Medium',
    color: '#000',
    lineHeight: '24px',
  },
  grade: {
    flexWrap: 1,
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    marginTop: 5,
    fontWeight: 400,
  },
  nameCon: {
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular',
    color: 'rgba(0,0,0,0.65)',
    lineHeight: '26px',
    marginTop: 10,
  },
  avatar: {
    width: '128px',
    height: '128px',
    flex: 'none',
  },
  videoWrap: {
    padding: '50px 37px',
  },
  videoWrap2: {
    padding: '13px 37px 0',
  },
  videoWrap3: {
    padding: '20px 37px 27px',
  },
  videoBox: {
    position: 'relative',
  },
  video1: {
    width: '100%',
    height: '170px',
    borderRadius: '10px',
    background: '#fff',
  },
  video2: {
    borderRadius: '10px 10px 0 0',
  },
  subTitle: {
    background: '#fff',
    height: '48px',
    lineHeight: '48px',
    borderRadius: '0 0 10px 10px',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    paddingLeft: '10px',
  },
  playWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '170px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  teacherWrap: {
    padding: '22px 50px 36px 50px',
    background: '#fff',
  },
  teacherBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '42px',
  },
  teacherLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spac-between',
    paddingRight: '10px',
  },
  teacherName: {
    fontSize: '20px',
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
  },
  teacherIntro: {
    marginTop: '15px',
    fontSize: '14px',
    fontFamily: 'PingFangSC-Medium',
    color: '#333',
    lineHeight: '23px',
  },
  teacherIntro1: {
    fontSize: '13px',
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    lineHeight: '21px',
  },
  teacherImg: {
    width: '110px',
    height: '128px',
    flex: 'none',
  },
  parterWrap: {
    padding: '20px 0px 0',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // flexWrap: 'wrap',
  },
  parterBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  parterItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  parterItem2: {
    marginBottom: '0px',
    paddingBottom: '40px',
  },
  parterImg: {
    width: '110px',
    height: '110px',
  },
  parterTitle: {
    fontSize: '20px',
    fontFamily: 'PingFangSC-Regular',
    color: '#333',
    lineHeight: '28px',
    marginTop: '10px',
  },
  ruleWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videoPlay1: false,
      videoPlay2: false,
      videoPlay3: false,
    };
  }
  componentDidMount() {}

  handleVideo = num => {
    const { videoPlay1, videoPlay2, videoPlay3 } = this.state;
    switch (num) {
      case 1:
        if (!videoPlay1) {
          this.video1.play();
          this.video2.pause();
          this.video3.pause();
        } else {
          this.video1.pause();
        }
        this.setState({
          videoPlay1: !videoPlay1,
          videoPlay2: false,
          videoPlay3: false,
        });
        break;
      case 2:
        if (!videoPlay2) {
          this.video2.play();
          this.video1.pause();
          this.video3.pause();
        } else {
          this.video2.pause();
        }
        this.setState({
          videoPlay2: !videoPlay2,
          videoPlay1: false,
          videoPlay3: false,
        });
        break;
      case 3:
        if (!videoPlay3) {
          this.video3.play();
          this.video1.pause();
          this.video2.pause();
        } else {
          this.video3.pause();
        }
        this.setState({
          videoPlay3: !videoPlay3,
          videoPlay2: false,
          videoPlay1: false,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { videoPlay1, videoPlay2, videoPlay3 } = this.state;
    return (
      <div style={styles.con}>
        <img src={require('@assets/JstAbout/img1.png')} alt="" style={styles.head} />
        <div style={{ ...styles.videoWrap, ...styles.bgW }}>
          <div style={styles.videoBox}>
            <video
              ref={video => (this.video1 = video)}
              // x5-playsinline="true"
              // webkit-playsinline="true"
              // playsInline={true}
              // x5-video-player-type="h5"
              controls=""
              loop
              poster="https://video.vxiaoke360.com/xuanchuanpian.mp4?vframe/jpg/offset/1"
              src="https://video.vxiaoke360.com/xuanchuanpian.mp4"
              style={styles.video1}
            ></video>
            <div style={styles.playWrap} onClick={() => this.handleVideo(1)}>
              {!videoPlay1 && (
                <img src={require('@assets/JstAbout/play.png')} alt="" style={styles.playBtn} />
              )}
            </div>
          </div>
        </div>

        <div style={styles.h20}></div>
        <div style={{ ...styles.titleWrap }}>
          <div style={styles.title}>平台介绍</div>
          <div style={styles.title1}>Platform introduction</div>
        </div>
        <div style={styles.ruleWrap}>
          <div>
            <div style={styles.ruleItem}>
              <span>讲商堂的口号：</span>
              <span style={styles.ruleText}>讲商堂，打开新商业之门</span>
            </div>

            <div style={styles.ruleItem}>
              <span>讲商堂的愿景：</span>
              <span style={styles.ruleText}>打造最具亲和力的学习社区</span>
            </div>

            <div style={styles.ruleItem}>
              <span>讲商堂的使命：</span>
              <span style={styles.ruleText}>让天下没有难做的实体生意</span>
            </div>
          </div>

          <div style={styles.ruleCon}>
            讲商堂隶属于杭州湘靖网络科技有限公司，是面向实体零售、实体服务、实体制造业的新商业学习平台。成为讲商堂会员后，可享受新商业文明方法论、新商业管理方法论两个系列，共计100余堂精品实战课程。
          </div>
        </div>

        <div style={{ ...styles.h20, ...styles.bgW }}></div>
        <div style={{ ...styles.titleWrap, ...styles.bgW }}>
          <div style={styles.title}>创始人介绍</div>
          <div style={styles.title1}>About Founder</div>
        </div>

        <div style={styles.personWrap}>
          <div style={styles.conBg}>
            <div style={styles.intro}>
              <div style={styles.introLeft}>
                <div style={styles.name}>漠河</div>
                <div style={styles.grade}> 创始人，阿里系创业者</div>
                <div style={styles.nameCon}>原名吴云昌，985硕士，前阿里巴巴、众安保险高管。</div>
              </div>
              <img src={require('@assets/JstAbout/img2.png')} alt="" style={styles.avatar} />
            </div>

            <div style={styles.nameCon}>
              15年互联网+零售实战经验；“新商业”经营方法论导师；“新商业”管理方法论布道者；十年专注于实体零售的观察与研究，新零售商业模式的先行者，2019中国财经峰会行业领军人物。致力于新商业文明方法论在实际经营中的应用，影响了20多万认可商业创新的小微经营者。
            </div>
          </div>
        </div>

        <div style={{ ...styles.h20 }}></div>
        <div style={{ ...styles.titleWrap }}>
          <div style={styles.title}>媒体报道</div>
          <div style={styles.title1}>Media reports</div>
        </div>

        <div style={styles.videoWrap2}>
          <div style={styles.videoBox}>
            <video
              ref={video => (this.video2 = video)}
              controls=""
              loop
              poster="https://video.vxiaoke360.com/meitibaodao1.mp4?vframe/jpg/offset/1"
              src="https://video.vxiaoke360.com/meitibaodao1.mp4"
              style={{ ...styles.video1, ...styles.video2 }}
            ></video>
            <div style={styles.playWrap} onClick={() => this.handleVideo(2)}>
              {!videoPlay2 && (
                <img src={require('@assets/JstAbout/play.png')} alt="" style={styles.playBtn} />
              )}
            </div>
          </div>
          <div style={styles.subTitle}>“讲商堂”发起人漠河接受凤凰网专访</div>
        </div>

        <div style={{ ...styles.videoWrap2, ...styles.videoWrap3 }}>
          <div style={styles.videoBox}>
            <video
              ref={video => (this.video3 = video)}
              controls=""
              loop
              poster="https://video.vxiaoke360.com/baitibaodao2.mp4?vframe/jpg/offset/1"
              src="https://video.vxiaoke360.com/baitibaodao2.mp4"
              style={{ ...styles.video1, ...styles.video2 }}
            ></video>
            <div style={styles.playWrap} onClick={() => this.handleVideo(3)}>
              {!videoPlay3 && (
                <img src={require('@assets/JstAbout/play.png')} alt="" style={styles.playBtn} />
              )}
            </div>
          </div>
          <div style={styles.subTitle}>“讲商堂”发起人漠河接受人民网专访</div>
        </div>

        <div style={{ ...styles.h20, ...styles.bgW }}></div>
        <div style={{ ...styles.titleWrap, ...styles.bgW }}>
          <div style={styles.title}>导师团队</div>
          <div style={styles.title1}>Mentor team</div>
        </div>
        <div style={styles.teacherWrap}>
          <div style={styles.teacherBox}>
            <div style={styles.teacherLeft}>
              <span style={styles.teacherName}>漠河</span>
              <span style={styles.teacherIntro}>讲商堂CEO兼首席导师</span>
              <span style={styles.teacherIntro1}>成功创业者</span>
              <span style={styles.teacherIntro1}>前阿里巴巴高管</span>
              <span style={styles.teacherIntro1}>新零售实战专家</span>
            </div>
            <img src={require('@assets/JstAbout/teacher1.png')} alt="" style={styles.teacherImg} />
          </div>

          <div style={styles.teacherBox}>
            <div style={styles.teacherLeft}>
              <span style={styles.teacherName}>梁舒瑶</span>
              <span style={styles.teacherIntro}>讲商堂首席导师</span>
              <span style={styles.teacherIntro1}>高级咨询师</span>
              <span style={styles.teacherIntro1}>新零售战略架构师</span>
            </div>
            <img src={require('@assets/JstAbout/teacher2.png')} alt="" style={styles.teacherImg} />
          </div>

          <div style={{ ...styles.teacherBox, ...{ marginBottom: 0 } }}>
            <div style={styles.teacherLeft}>
              <span style={styles.teacherName}>朱娇萍</span>
              <span style={styles.teacherIntro}>讲商堂首席导师</span>
              <span style={styles.teacherIntro1}>上市公司高管</span>
              <span style={styles.teacherIntro1}>互联网运营高级策划师</span>
              <span style={styles.teacherIntro1}>新商业模式战略架构师</span>
            </div>
            <img src={require('@assets/JstAbout/teacher3.png')} alt="" style={styles.teacherImg} />
          </div>
        </div>

        <div style={styles.h20}></div>
        <div style={styles.titleWrap}>
          <div style={styles.title}>合作伙伴</div>
          <div style={styles.title1}>Cooperative partnerm</div>
        </div>
        <div style={styles.parterWrap}>
          <div style={styles.parterBox}>
            <div style={{ ...styles.parterItem, ...{ marginRight: '35px' } }}>
              <img src={require('@assets/JstAbout/p1.png')} alt="" style={styles.parterImg} />
              <span style={styles.parterTitle}>聚划算</span>
            </div>

            <div style={styles.parterItem}>
              <img src={require('@assets/JstAbout/p2.png')} alt="" style={styles.parterImg} />
              <span style={styles.parterTitle}>支付宝</span>
            </div>
          </div>

          <div style={styles.parterBox}>
            <div style={{ ...styles.parterItem, ...{ marginRight: '35px' } }}>
              <img src={require('@assets/JstAbout/p3.png')} alt="" style={styles.parterImg} />
              <span style={styles.parterTitle}>阿里云</span>
            </div>

            <div style={styles.parterItem}>
              <img src={require('@assets/JstAbout/p4.png')} alt="" style={styles.parterImg} />
              <span style={styles.parterTitle}>淘宝大学</span>
            </div>
          </div>
        </div>

        <div style={{ ...styles.h20, ...styles.bgW }}></div>
        <div style={{ ...styles.titleWrap, ...styles.bgW }}>
          <div style={styles.title}>战略投资</div>
          <div style={styles.title1}>Strategic investment</div>
        </div>
        <div style={{ ...styles.parterWrap, ...styles.bgW }}>
          <div style={styles.parterBox}>
            <div
              style={{ ...styles.parterItem, ...styles.parterItem2, ...{ marginRight: '35px' } }}
            >
              <img src={require('@assets/JstAbout/idg.png')} alt="" style={styles.parterImg} />
              <span style={styles.parterTitle}>IDG</span>
            </div>

            <div style={{ ...styles.parterItem, ...styles.parterItem2 }}>
              <img src={require('@assets/JstAbout/hd.png')} alt="" style={styles.parterImg} />
              <span style={styles.parterTitle}>弘道资本</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
