import React, { Component } from "react";
import { render } from "react-dom";
import Resizable from "../../src";

class Demo extends Component {
  render() {
    const onResize = (table, widths) => {
      console.log(table);
      console.log(widths);
    };
    return (
      <div>
        <h1>react-column-resizer Demo</h1>
        <Resizable
          gripInnerHtml="<div class='grip'></div>"
          liveDrag={true}
          onResize={onResize}
        >
          <table>
            <thead>
              <tr>
                <th style={{ width: 300 }}>1</th>
                <th style={{ width: 300 }}>2</th>
                <th style={{ width: 300 }}>3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
            </tbody>
          </table>
        </Resizable>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
