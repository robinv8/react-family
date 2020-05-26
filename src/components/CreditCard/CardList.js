import React, { Component } from 'react';

const styles = {
  itemWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 12px',
  },
  itemLeft: {
    color: '#333333',
  },
  itemType: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '16px',
    lineHeight: '16px',
  },
  itemTime: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    color: '#666',
    lineHeight: '12px',
    marginTop: '8px',
  },
  itemRight: {
    fontFamily: 'DINAlternate-Bold',
    fontSize: '18px',
    color: '#FC4277',
    textAlign: 'right',
    lineHeight: '18px',
  },
  line: {
    width: '100%',
    background: '#EFEFEF',
    height: '1px',
  },
};
export default class CardList extends Component {
  renderItem = () => {
    const { list } = this.props;
    if (list.length > 0) {
      return list.map((item, index) => {
        return (
          <div key={index}>
            <div style={styles.itemWrap}>
              <div style={styles.itemLeft}>
                <div style={styles.itemType}>{item.rebateType}</div>
                <div style={styles.itemTime}>{item.rebateTime}</div>
              </div>
              <div style={styles.itemRight}>+{item.rebateMoney}</div>
            </div>
            {index !== list.length - 1 && <div style={styles.line} />}
          </div>
        );
      });
    }
  };

  render() {
    return <div>{this.renderItem()}</div>;
  }
}
