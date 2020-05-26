import React from 'react';

const styles = {
  container: {
    display: 'flex',
    height: '45px',
    boxShadow: '0 0 1px 0 #EFEFEF',
    background: '#fff',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 9,
  },
  line: {
    height: '20px',
    width: '1px',
    background: '#F6F6F6',
  },
  tabItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabName: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '13px',
    color: '#333',
    marginRight: '4px',
  },
  tabIcon: {
    width: 0,
    height: 0,
    borderLeft: '4.5px solid transparent',
    borderRight: '4.5px solid transparent',
    borderTop: '7px solid #BABABA',
    marginTop: '2px',
  },
  tabNameAct: {
    fontFamily: 'PingFangSC-Medium',
    color: '#DFB453',
  },
};
export default class Menu extends React.Component {
  changeMenu = tab => {
    const { handleMenu, showChooseModal } = this.props;
    handleMenu(tab, !showChooseModal);
  };

  render() {
    const { tabName1, tabName2, isMenuChange1, isMenuChange2 } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.tabItem} onClick={() => this.changeMenu(1)}>
          <div style={{ ...styles.tabName, ...(isMenuChange1 && styles.tabNameAct) }}>
            {tabName1}
          </div>
          <div style={styles.tabIcon} />
        </div>
        <div style={styles.line} />
        <div style={styles.tabItem} onClick={() => this.changeMenu(2)}>
          <div style={{ ...styles.tabName, ...(isMenuChange2 && styles.tabNameAct) }}>
            {tabName2}
          </div>
          <div style={styles.tabIcon} />
        </div>
      </div>
    );
  }
}
