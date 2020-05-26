/*
 * @Description:
 * @Date: 2019-12-13 10:21:44
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-04-13 14:58:47
 */
import React from 'react';
import axios from 'axios';
import { getQueryString } from '../../utils/tools';

export default class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    };
  }
  componentWillMount() {
    const qid = getQueryString('qid');
    const to = getQueryString('to');

    axios
      .post(
        `https://${
          document.location.origin.indexOf('//activity-h5.') > -1 ? '' : 'test'
        }bc-common-api.vxiaoke360.com/common/mini/qrcode`,
        {
          page: 'pages/Home/index',
          scene: `to=${to}&qid=${qid}`,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        },
      )
      .then(({ data: { data } }) => {
        this.setState({
          img: `data:image/png;base64,${data}`,
        });
      });
  }
  render() {
    const { img } = this.state;
    return <img src={img} />;
  }
}
