'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _default = require('../../style/themes/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = {
    underlayColor: _default2["default"].fill_tap,
    Header: {
        fontSize: _default2["default"].font_size_base,
        color: _default2["default"].color_text_caption,
        paddingLeft: _default2["default"].h_spacing_lg,
        paddingRight: _default2["default"].h_spacing_lg,
        paddingTop: _default2["default"].v_spacing_lg,
        paddingBottom: _default2["default"].v_spacing_md,
        backgroundColor: _default2["default"].fill_body
    },
    Footer: {
        fontSize: _default2["default"].font_size_base,
        color: _default2["default"].color_text_caption,
        paddingLeft: _default2["default"].h_spacing_lg,
        paddingRight: _default2["default"].h_spacing_lg,
        paddingTop: _default2["default"].v_spacing_md,
        paddingBottom: _default2["default"].v_spacing_md,
        backgroundColor: _default2["default"].fill_body
    },
    Body: {
        backgroundColor: _default2["default"].fill_base,
        borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
        borderTopColor: _default2["default"].border_color_base
    },
    BodyBottomLine: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: _default2["default"].fill_base,
        borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
        borderBottomColor: _default2["default"].border_color_base
    },
    Item: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: _default2["default"].h_spacing_lg,
        backgroundColor: _default2["default"].fill_base
    },
    Line: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingRight: _default2["default"].h_spacing_lg,
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: _default2["default"].list_item_height,
        borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
        borderBottomColor: _default2["default"].border_color_base
    },
    Thumb: {
        width: _default2["default"].icon_size_md,
        height: _default2["default"].icon_size_md,
        marginRight: _default2["default"].h_spacing_lg
    },
    Content: {
        color: _default2["default"].color_text_base,
        fontSize: _default2["default"].font_size_heading
    },
    Extra: {
        color: _default2["default"].color_text_caption,
        fontSize: _default2["default"].font_size_heading,
        textAlign: 'right'
    },
    Brief: {
        marginTop: _default2["default"].v_spacing_sm,
        height: _default2["default"].font_size_subhead
    },
    BriefText: {
        color: _default2["default"].color_text_caption,
        fontSize: _default2["default"].font_size_subhead
    },
    Arrow: {
        width: 8,
        height: 13,
        marginLeft: _default2["default"].h_spacing_md
    },
    ArrowV: {
        width: 13,
        height: 8,
        marginLeft: _default2["default"].h_spacing_md
    },
    Error: {
        Body: {
            borderTopColor: 'red'
        },
        Item: {
            borderBottomColor: 'red'
        },
        Line: {
            borderBottomColor: 'red'
        }
    },
    Last: {
        Item: {
            borderBottomWidth: 0,
            borderBottomColor: _default2["default"].border_color_base
        },
        Line: {
            borderBottomWidth: 0
        }
    },
    multipleLine: {
        Line: {
            paddingTop: _default2["default"].v_spacing_lg,
            paddingBottom: _default2["default"].v_spacing_lg
        },
        Thumb: {
            width: _default2["default"].icon_size_lg,
            height: _default2["default"].icon_size_lg
        }
    },
    column: {
        flex: 1,
        flexDirection: 'column'
    }
};
module.exports = exports['default'];