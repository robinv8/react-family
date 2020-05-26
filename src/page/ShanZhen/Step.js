import React, { PureComponent } from 'react';

const styles = {
  imgs: {
    width: '100%',
    verticalAlign: 'top',
  },
};
export default class Step extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <img src={require('../../../src/assets/Shanzhen/step1.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step2.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step3.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step4.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step5.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step6.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step7.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step8.png')} alt="" style={styles.imgs} />
          <img src={require('../../../src/assets/Shanzhen/step9.png')} alt="" style={styles.imgs} />
          <img
            src={require('../../../src/assets/Shanzhen/step10.png')}
            alt=""
            style={styles.imgs}
          />
        </div>
      </div>
    );
  }
}
