import React, { Component } from "react";
import JsColumnResizer from "column-resizer";
import ReactDOM from "react-dom";

class ColumnResizer extends Component {
  componentDidMount() {
    this.enableResize();
  }

  componentWillUnmount() {
    this.disableResize();
  }

  componentDidUpdate() {
    this.enableResize();
  }

  componentWillUpdate() {
    this.disableResize();
  }

  enableResize() {
    const { children, onResize, ...options } = this.props;
    const onResizeWrapper = e => {
      if (onResize == null) {
        return;
      }
      const table = this.getTable();
      const nodes = Array.prototype.slice.call(table.querySelectorAll("th"));
      const widths = nodes.map(node => node.offsetWidth);
      onResize(table, widths);
    };
    if (!this.resizer) {
      this.resizer = new JsColumnResizer(this.getTable(), {
        ...options,
        onResize: onResizeWrapper
      });
    } else {
      this.resizer.reset(options);
    }
  }

  getTable() {
    return ReactDOM.findDOMNode(this).querySelector(`table`);
  }

  disableResize() {
    if (this.resizer) {
      this.resizer.reset({ disable: true });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ColumnResizer;
