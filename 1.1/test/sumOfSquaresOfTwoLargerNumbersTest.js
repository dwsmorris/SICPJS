/*globals require*/

/// <reference path="../../thirdParty/require-2.0.2.js" />
/// <reference path="../../thirdParty/jasmine.js" />

require({
	paths: {
		lodash: "../../thirdparty/lodash.compat",
		"lodash-contrib": "../../thirdparty/lodash-contrib"
	},
	shim: {
		"lodash-contrib": {
			deps: ["lodash"],
			exports: "_"
		}
	}
}, [
	"../source/sumOfSquaresOfTwoLargerNumbers"
], function (
	sumOfSquaresOfTwoLargerNumbers
) {

	describe("sumOfSquaresOfTwoLargerNumbers", function () {

		it("applied to (2,1,3) returns 13", function () {
			expect(sumOfSquaresOfTwoLargerNumbers(2,1,3)).toEqual(13);
		});

	});

});