'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTimerMixin = require('react-timer-mixin');

var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _reactNative = require('react-native');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Carousel = _react2["default"].createClass({
    displayName: 'Carousel',

    mixins: [_reactTimerMixin2["default"]],
    getDefaultProps: function getDefaultProps() {
        return {
            bounces: true,
            infinite: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: 2.5,
            selectedIndex: 0,
            // vertical 目前只实现 pagination，内容 vertical 由于自动高度拿不到，暂时无法实现
            vertical: false,
            styles: _style2["default"]
        };
    },
    getInitialState: function getInitialState() {
        var _props = this.props,
            children = _props.children,
            selectedIndex = _props.selectedIndex;

        var count = children ? children.length || 1 : 0;
        var index = count > 1 ? Math.min(selectedIndex, count - 1) : 0;
        return {
            width: 0,
            isScrolling: false,
            autoplayEnd: false,
            loopJump: false,
            selectedIndex: index,
            offset: { x: 0, y: 0 }
        };
    },
    componentDidMount: function componentDidMount() {
        this.autoplay();
    },
    loopJump: function loopJump() {
        var _this = this;

        // iOS 通过 contentOffet 可以平滑过度，不需要做处理
        if (this.state.loopJump && _reactNative.Platform.OS === 'android') {
            (function () {
                var index = _this.state.selectedIndex + (_this.props.infinite ? 1 : 0);
                setTimeout(function () {
                    var x = _this.state.width * index;
                    _this.refs.scrollview.scrollTo({ x: x, y: 0 }, false);
                }, 10);
            })();
        }
    },
    autoplay: function autoplay() {
        var _this2 = this;

        var _props2 = this.props,
            children = _props2.children,
            autoplay = _props2.autoplay,
            infinite = _props2.infinite,
            autoplayTimeout = _props2.autoplayTimeout;
        var _state = this.state,
            isScrolling = _state.isScrolling,
            autoplayEnd = _state.autoplayEnd,
            selectedIndex = _state.selectedIndex;

        var count = children ? children.length || 1 : 0;
        if (!Array.isArray(children) || !autoplay || isScrolling || autoplayEnd) {
            return;
        }
        clearTimeout(this.autoplayTimer);
        this.autoplayTimer = this.setTimeout(function () {
            if (!infinite && selectedIndex === count - 1) {
                // !infinite && last one, autoplay end
                return _this2.setState({ autoplayEnd: true });
            }
            _this2.scrollNextPage();
        }, autoplayTimeout * 1000);
    },
    onScrollBegin: function onScrollBegin(e) {
        var _this3 = this;

        this.setState({
            isScrolling: true
        }, function () {
            if (_this3.props.onScrollBeginDrag) {
                _this3.props.onScrollBeginDrag(e, _this3.state, _this3);
            }
        });
    },
    onScrollEnd: function onScrollEnd(e) {
        var _this4 = this;

        this.setState({ isScrolling: false });
        // android incompatible
        if (!e.nativeEvent.contentOffset) {
            var position = e.nativeEvent.position;
            e.nativeEvent.contentOffset = {
                x: position * this.state.width
            };
        }
        this.updateIndex(e.nativeEvent.contentOffset);
        this.setTimeout(function () {
            _this4.autoplay();
            _this4.loopJump();
            if (_this4.props.onMomentumScrollEnd) {
                _this4.props.onMomentumScrollEnd(e, _this4.state, _this4);
            }
        });
    },
    onScrollEndDrag: function onScrollEndDrag(e) {
        var _state2 = this.state,
            offset = _state2.offset,
            selectedIndex = _state2.selectedIndex;

        var previousOffset = offset.x;
        var newOffset = e.nativeEvent.x;
        var count = this.props.children ? this.props.children.length || 1 : 0;
        if (previousOffset === newOffset && (selectedIndex === 0 || selectedIndex === count - 1)) {
            this.setState({
                isScrolling: false
            });
        }
    },
    updateIndex: function updateIndex(offset) {
        var state = this.state;
        var selectedIndex = state.selectedIndex;
        var diff = offset.x - state.offset.x;
        var step = state.width;
        var loopJump = false;
        var count = this.props.children ? this.props.children.length || 1 : 0;
        // Do nothing if offset no change.
        if (!diff) {
            return;
        }
        selectedIndex = parseInt(selectedIndex + Math.round(diff / step), 10);
        if (this.props.infinite) {
            if (selectedIndex <= -1) {
                selectedIndex = count - 1;
                offset.x = step * count;
                loopJump = true;
            } else if (selectedIndex >= count) {
                selectedIndex = 0;
                offset.x = step;
                loopJump = true;
            }
        }
        this.setState({
            selectedIndex: selectedIndex,
            offset: offset,
            loopJump: loopJump
        });
        var afterChange = this.props.afterChange;

        if (afterChange) {
            afterChange(selectedIndex);
        }
    },
    scrollNextPage: function scrollNextPage() {
        var _this5 = this;

        var _props3 = this.props,
            children = _props3.children,
            infinite = _props3.infinite;

        var count = children ? children.length || 1 : 0;
        if (this.state.isScrolling || count < 2) {
            return;
        }
        var state = this.state;
        var diff = (infinite ? 1 : 0) + this.state.selectedIndex + 1;
        var x = diff * state.width;
        var y = 0;
        this.refs.scrollview.scrollTo({ x: x, y: y });
        this.setState({
            isScrolling: true,
            autoplayEnd: false
        });
        // trigger onScrollEnd manually in android
        if (_reactNative.Platform.OS === 'android') {
            this.setTimeout(function () {
                _this5.onScrollEnd({
                    nativeEvent: {
                        position: diff
                    }
                });
            }, 0);
        }
    },
    renderContent: function renderContent(pages) {
        var others = {
            onScrollBeginDrag: this.onScrollBegin,
            onMomentumScrollEnd: this.onScrollEnd,
            onScrollEndDrag: this.onScrollEndDrag
        };
        return _react2["default"].createElement(
            _reactNative.ScrollView,
            (0, _extends3["default"])({ ref: 'scrollview' }, this.props, { horizontal: true, pagingEnabled: true, bounces: !!this.props.bounces, scrollEventThrottle: 100, removeClippedSubviews: true, automaticallyAdjustContentInsets: false, directionalLockEnabled: true, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, contentContainerStyle: this.props.style, contentOffset: this.state.offset }, others),
            pages
        );
    },
    renderDots: function renderDots(index) {
        var _props4 = this.props,
            children = _props4.children,
            vertical = _props4.vertical,
            styles = _props4.styles;

        var positionStyle = vertical ? 'paginationY' : 'paginationX';
        var flexDirection = vertical ? 'column' : 'row';
        var count = children ? children.length || 1 : 0;
        return _react2["default"].createElement(_pagination2["default"], { style: [styles.pagination, styles[positionStyle]], indicatorStyle: { flexDirection: flexDirection }, current: index, mode: 'pointer', total: count });
    },
    onLayout: function onLayout(e) {
        var _this6 = this;

        // for horizontal, get width, scollTo
        var props = this.props;
        var count = props.children ? props.children.length || 1 : 0;
        var selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;
        var width = e.nativeEvent.layout.width;
        var offsetX = width * (selectedIndex + (props.infinite ? 1 : 0));
        this.setState({
            width: width,
            offset: { x: offsetX, y: 0 }
        }, function () {
            if (_reactNative.Platform.OS === 'android') {
                _this6.refs.scrollview.scrollTo({ y: 0, x: offsetX }, false);
            }
        });
    },
    render: function render() {
        var state = this.state;
        var _props5 = this.props,
            dots = _props5.dots,
            infinite = _props5.infinite,
            children = _props5.children;

        var pages = [];
        if (!children) {
            return _react2["default"].createElement(
                _reactNative.Text,
                { style: { backgroundColor: 'white' } },
                'You are supposed to add children inside Carousel'
            );
        }
        var pageStyle = { width: state.width };
        var count = children ? children.length || 1 : 0;
        // For make infinite at least count > 1
        if (count > 1) {
            pages = Object.keys(children);
            if (infinite) {
                pages.unshift(count - 1 + '');
                pages.push('0');
            }
            pages = pages.map(function (page, i) {
                return _react2["default"].createElement(
                    _reactNative.View,
                    { style: pageStyle, key: i },
                    children[page]
                );
            });
        } else {
            pages = _react2["default"].createElement(
                _reactNative.View,
                { style: pageStyle },
                children
            );
        }
        return _react2["default"].createElement(
            _reactNative.View,
            { onLayout: this.onLayout },
            this.renderContent(pages),
            dots && this.renderDots(this.state.selectedIndex)
        );
    }
});
exports["default"] = Carousel;
module.exports = exports['default'];