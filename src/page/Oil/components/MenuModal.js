import React from 'react';

const styles = {
  container: {
    position: 'fixed',
    top: '44px',
    left: 0,
    zIndex: 999,
    width: '100%',
    height: '100%',
  },
  menuWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    background: '#fff',
  },
  menuItem: {
    lineHeight: '41px',
    padding: '0 15px',
    boxSizing: 'border-box',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '13px',
    color: '#333',
    width: '100%',
  },
  menuItemAct: {
    fontFamily: 'PingFangSC-Medium',
    color: '#DFB453',
    background: '#F9F9F9',
  },
  bg: {
    background: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
  },
};

export default class MenuModal extends React.Component {
  changeMenu = item => {
    const { changeMenu } = this.props;
    changeMenu(item);
  };

  handleMenu = () => {
    const { handleMenu, tab } = this.props;
    handleMenu(tab, false);
  };

  renderMenu = () => {
    const { menuData, tab, sort, oilNo } = this.props;
    let value = 0;
    if (tab === 1) {
      value = sort;
    } else {
      value = oilNo;
    }

    return menuData.map(item => {
      return (
        <div
          style={{ ...styles.menuItem, ...(value === item.key && styles.menuItemAct) }}
          key={item.name}
          onClick={() => this.changeMenu(item)}
        >
          {item.name}
        </div>
      );
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <div onClick={this.handleMenu} style={styles.bg} />
        <div style={styles.menuWrap}>{this.renderMenu()}</div>
      </div>
    );
  }
}
