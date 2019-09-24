import dynamic from "next/dynamic";
import ReactDOM from "react-dom";
import { Component, useRef, useEffect, useState } from "react";
import { findDOMNode } from "react-dom";

export default class LazyLoadedImage extends Component {
  constructor() {
    super();
    this.elRef = React.createRef();
    this.state = {
      src: ""
    };
  }

  handleObserver(entries, observer) {
    console.log(this.observer);
    const isIntersecting = entries[0].isIntersecting;
    console.log({
      isIntersecting,
      src: this.props.src
    });

    if (isIntersecting) {
      this.setState({ src: this.props.src });
    }
    this.unobserve();
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this), //callback
      {
        root: null,
        rootMargin: "500px"
      }
    );
    this.el = findDOMNode(this);
    this.observer.observe(this.el);
  }

  unobserve() {
    if (this.el && this.observer) {
      // Remove the observation listener
      this.observer.unobserve(this.el);
    }

    this.observer = null;
  }

  componentWillUnmount() {
    this.unobserve();
  }

  render() {
    const { src, alt } = this.props;
    const activeSrc = this.state.src;
    return (
      <img
        ref={this.elRef}
        className="lazyload"
        src={activeSrc}
        data-src={src}
        alt={alt}
      />
    );
  }
}
