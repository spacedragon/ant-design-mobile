interface NavBarProps {
    prefixCls?: string;
    children?: any;
    mode?: 'dark' | 'light';
    iconName?: string | boolean | null;
    leftContent?: any;
    rightContent?: any;
    onLeftClick?: () => void;
}
export default NavBarProps;
