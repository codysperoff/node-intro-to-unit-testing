const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {

    //test the normal cases
    it('should return certain words when divisible by certain numbers', function () {
        //range of normal inputs
        const normalCases = [
            {
                num: 30,
                expected: 'fizz-buzz'
            },
            {
                num: 25,
                expected: 'buzz'
            },
            {
                num: 24,
                expected: 'fizz'
            },
            {
                num: 23,
                expected: 23
            }
        ];
        //for each input (num), fizzBuzz
        //should produce the expected value.
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input.num);
            answer.should.equal(input.expected);
        });
    });

    it('should raise errors if num is not a number', function () {
        //ragne of bad inputs where num is not a number
        const badInputs = [
            ['fbkd'],
            ['oionio'],
            ['adkj']
        ];
        //prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            (function () {
                fizzBuzzer(input[0])
            }).should.throw[Error];

        });


    });
});
