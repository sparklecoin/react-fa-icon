"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var bools = ["border", "fixed", "spin"];
var variable = ["size", "icon"];
var composite = ["rotate"];
var pulls = ["right", "left"];

var FontIcon = createReactClass({
	displayName: "FontIcon",

	propTypes: {
		icon: PropTypes.string.isRequired,
		size: PropTypes.oneOf(['lg', 2, 3, 4, 5]),
		right: PropTypes.bool,
		left: PropTypes.bool,
		flip: PropTypes.bool,
		mirror: PropTypes.bool,
		rotate: PropTypes.oneOf([90, 180, 270]),
		fixed: PropTypes.bool,
		spin: PropTypes.bool,
		border: PropTypes.bool
	},
	render: function render() {
		var _this = this;

		var classList = bools.reduce(function (res, prop) {
			if (_this.props[prop]) res.push('fa-' + prop);
			return res;
		}, []).concat(variable.reduce(function (res, prop) {
			var val = _this.props[prop];
			if (val) {
				if (typeof val == 'number') val = val + "x";
				res.push('fa-' + val);
			}
			return res;
		}, [])).concat(composite.reduce(function (res, prop) {
			if (_this.props[prop]) res.push('fa-' + prop + '-' + _this.props[prop]);
			return res;
		}, [])).concat(pulls.reduce(function (res, prop) {
			if (_this.props[prop]) res.push('fa-pull-' + prop);
			return res;
		}, [])).join(' ');

		if (this.props.flip) classList = classList + " fa-flip-vertical";
		if (this.props.mirror) classList = classList + " fa-flip-horizontal";

		return _react2["default"].createElement("i", _extends({ onClick: this.props.onClick
		}, this.props, {
			className: 'fa ' + classList }));
	}
});

module.exports = FontIcon;

