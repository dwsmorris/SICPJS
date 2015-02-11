/*globals require*/

require.config({
	paths: {
		lodash: "thirdparty/lodash.compat",
		"lodash-contrib": "thirdparty/lodash-contrib"
	},
	shim: {
		"lodash-contrib": {
			deps: ["lodash"],
			exports: "_"
		}
	}
});

require([
	"./1.1/source/sumOfSquaresOfTwoLargerNumbers"
], function (
	sumOfSquaresOfTwoLargerNumbers
) {

	alert(sumOfSquaresOfTwoLargerNumbers(1, 2, 3));
});
