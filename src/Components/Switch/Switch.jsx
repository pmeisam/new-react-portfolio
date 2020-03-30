import React from 'react';
import './Switch.scss';

class Switch extends React.Component {

    render () {

        return (
            <>
              <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                onChange={() => this.props.handleThemeChange(!this.props.isDark)}
                checked={this.props.isDark}
              />
              <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
                active={this.props.isDark}
              >
                <span className={`react-switch-button`} />
              </label>
            </>
          );
    }
  
};

export default Switch;