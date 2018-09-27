// @flow
import React from 'react';
import '../styles/Textarea.css';

export type Props = {|
  rows: number,
  placeholder: string,
  onChange: (event: SyntheticEvent<HTMLButtonElement>) => mixed,
  value?: string,
|};

/**
 * Component is described here.
 *
 * @example ./examples/Textarea.md
 */
export default class Textarea extends React.Component<Props> {
  static defaultProps = {
    rows: 3,
    placeholder: 'Share your opinion',
  };

  render() {
    return (
      <textarea
        rows={this.props.rows}
        className="raf-textarea"
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}
