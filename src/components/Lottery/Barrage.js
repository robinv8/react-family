/*
 * @Description:
 * @Date: 2020-05-14 10:20:36
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-05-19 14:11:31
 */

import React, { Component } from "react";
import { Carousel } from "antd-mobile";

const styles = {
  con: {
    width: "100%",
    position: "absolute",
    top: "130px",
    left: "0px",
    zIndex: 5,
  },
  barrageBox: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "0 8px",
  },
  barrageAvatar: {
    width: "32px",
    height: "32px",
    position: "relative",
    zIndex: 99,
    borderRadius: "50%",
  },
  barrageName: {
    maxWidth: "350px",
    height: "30px",
    borderRadius: "0 15px 15px 0",
    background: "rgba(0, 0, 0, 0.3)",
    color: "#fff",
    textAlign: "center",
    padding: "0 18px",
    boxSizing: "border-box",
    lineHeight: "30px",
    marginLeft: "-8px",
    fontSize: "12px",
  },
};

export default class Barrage extends Component {
  componentDidMount() {}

  linear = (t, b, _c, d) => {
    var c = _c - b;
    return (c * t) / d + b;
  };

  renderItem = () => {
    const { barrageList } = this.props;
    return barrageList.map((item, index) => {
      return (
        <div style={styles.barrageBox} key={index}>
          <img style={styles.barrageAvatar} src={item.avatar} alt="" />
          <div style={styles.barrageName}>{item.txt}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <Carousel
        dots={false}
        autoplay
        autoplayInterval={10000}
        infinite
        style={styles.con}
        speed={800}
        easing={this.linear}
      >
        {this.renderItem()}
      </Carousel>
    );
  }
}
