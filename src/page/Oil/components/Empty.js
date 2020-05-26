import React from 'react';

const styles = {
  emptyWrap: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '133px',
  },
  text: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    color: '#666666',
    lineHeight: '22px',
    marginTop: '20px',
  },
};

export default props => {
  const { text } = props;
  return (
    <div style={styles.emptyWrap}>
      <img src={require('@assets/Oil/empty.png')} alt="" style={styles.img} />
      <span style={styles.text}>{text ? text : '暂无订单记录'}</span>
    </div>
  );
};
