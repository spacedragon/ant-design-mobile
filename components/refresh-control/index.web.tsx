/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ListView from 'rmc-list-view';
import Icon from '../icon';
// import tsPropsType from './PropsType';
import assign from 'object-assign';

function dpr() {
  if (typeof(window) === 'undefined') {
    return 2
  } else {
    return (window as any).devicePixelRatio
  }
}

ListView.RefreshControl.defaultProps = assign({}, ListView.RefreshControl.defaultProps, {
  prefixCls: 'am-refresh-control',
  icon: [
    <div key="0" className="am-refresh-control-pull">
      <Icon type="down"/><span>下拉</span>
    </div>,
    <div key="1" className="am-refresh-control-release">
      <Icon type="left" style={{ transform: 'rotate(90deg)' }}/><span>释放</span>
    </div>,
  ],
  loading: <Icon type="loading"/>,
  refreshing: false,
  distanceToRefresh: 50 / 2 * (dpr() || 2),
});

export default ListView.RefreshControl;
