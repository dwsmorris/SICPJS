/*globals define*/

define([
	"lodash-contrib"	
], function (
	_
) {

	return function () {
		return _.add.apply(null, _.map(_.rest(_.toArray(arguments).sort()), function (value) {
			return value * value;
		}));
	};

});