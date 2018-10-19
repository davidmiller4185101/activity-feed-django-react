// @flow
import * as React from 'react';

export type Props = {|
  children?: React.Node,
  Header?: React.Node,
  Footer?: React.Node,
  left: boolean,
  right: boolean,
  arrow: boolean,
|};

/**
 * Component is described here.
 *
 * @example ./examples/DropdownPanel.md
 */
export default class DropdownPanel extends React.Component<Props> {
  static defaultProps = {
    arrow: false,
    left: true,
    right: false,
  };

  render() {
    return (
      <div
        className={`raf-dropdown-panel ${
          this.props.arrow ? ' raf-dropdown-panel--arrow' : ''
        } ${
          this.props.right
            ? ' raf-dropdown-panel--right raf-dropdown-panel--arrow-right'
            : 'raf-dropdown-panel--left raf-dropdown-panel--arrow-left'
        }`}
      >
        <div className="raf-dropdown-panel__header">{this.props.Header}</div>
        <div className="raf-dropdown-panel__content">{this.props.children}</div>
        <div className="raf-dropdown-panel__footer">{this.props.Footer}</div>
      </div>
    );
  }
}
