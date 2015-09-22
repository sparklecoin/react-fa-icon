import React  from 'react';

var bools = ["border","fixed","spin"];
var variable = ["size","icon"];
var composite = ["rotate"];
var pulls = ["right","left"];

var FontIcon = React.createClass({
	propTypes: {
		icon: React.PropTypes.string.isRequired,
		size: React.PropTypes.oneOf(['lg',2,3,4,5]),
		right: React.PropTypes.bool,
		left: React.PropTypes.bool,
		flip: React.PropTypes.bool,
		mirror: React.PropTypes.bool,
		rotate: React.PropTypes.oneOf([90,180,270]),
		fixed: React.PropTypes.bool,
		spin: React.PropTypes.bool,
		border: React.PropTypes.bool
	},
	render: function(){


		var classList = bools.reduce((res,prop) => {
			if(this.props[prop]) res.push('fa-' + prop);
				return res;
		},[])
		.concat(variable.reduce((res,prop) => {
			let val = this.props[prop];
			if(val){
				if(typeof val == 'number') val = val + "x";
				res.push('fa-' + val);
			}
			return res;
		},[]))
		.concat(composite.reduce((res,prop) => {
			if(this.props[prop]) res.push('fa-' + prop + '-' + this.props[prop]);
			return res;
		},[]))
		.concat(pulls.reduce((res,prop) => {
			if(this.props[prop]) res.push('fa-pull-' + prop);
			return res;
		},[]))
		.join(' ');

		if(this.props.flip) classList = classList + " fa-flip-vertical";
		if(this.props.mirror) classList = classList + " fa-flip-horizontal";

		return (
			<i onClick={this.props.onClick}
				{...this.props}
				className={'fa ' + classList} />
		);
	}
});

export default FontIcon;
