interface Props {
  children?: any;
  selectedIndex?: number;
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  infinite?: boolean;
  easing?: string;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  style?: any;
  /** below web only */
  className?: string;
  prefixCls?: string;
  /** below rn only */
  bounces?: boolean;
  autoplayTimeout?: number;
  onScrollBeginDrag?: Function;
  onMomentumScrollEnd?: Function;
  styles?: any;
}

export default Props;
