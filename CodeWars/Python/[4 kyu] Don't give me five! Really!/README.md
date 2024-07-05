# [Don't give me five! Really!](https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4/)

## Description:
This kata is the performance version of [Don't give me five](https://www.codewars.com/kata/5813d19765d81c592200001a) by [user5036852](https://www.codewars.com/users/user5036852).

Your mission, should you accept it: 
<br>is to return the count of all integers in a given range which do not contain the digit 5 (in base 10 representation).<br>
You are given the start and the end of the integer range. The start and the end are both inclusive.

## Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> return 8<br>
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12<br>
The result may contain fives.<br>
The start will always be smaller than the end. Both numbers can also be negative.<br>

The regions can be very large and there will be a large number of test cases.<br>
**So brute force solutions will certainly time out!**<br>

## Example Tests
```
@test.describe("Example tests")
def test_group():
    @test.it("small_numbers")
    def test_case():
        test.assert_equals(dont_give_me_five(-17, 9), 24)
        test.assert_equals(dont_give_me_five(1, 9), 8)
        test.assert_equals(dont_give_me_five(4, 17), 12)
        test.assert_equals(dont_give_me_five(-17, -4), 12)
        
    @test.it("larger_numbers")
    def test_case():
        test.assert_equals(dont_give_me_five(984, 4304), 2449)
        test.assert_equals(dont_give_me_five(2313, 2317), 4)
        test.assert_equals(dont_give_me_five(-4045, 2575), 4819)
        test.assert_equals(dont_give_me_five(-4436, -1429), 2194)

    @test.it("huge_numbers")
    def test_case():
        test.assert_equals(dont_give_me_five(40076, 2151514229639903569), 326131553237897713)
        test.assert_equals(dont_give_me_five(-206981731, 2235756979031654521), 340132150309630357)
        test.assert_equals(dont_give_me_five(-2490228783604515625, -2490228782196537011), 520812180)    
        test.assert_equals(dont_give_me_five(-9000000000000000000, 9000000000000000000), 2401514164751985937)
        
    @test.it("edge_cases")
    def test_case():
        test.assert_equals(dont_give_me_five(0, 1), 2)
        test.assert_equals(dont_give_me_five(5, 15), 9)
        test.assert_equals(dont_give_me_five(-5, 4), 9)
        test.assert_equals(dont_give_me_five(51, 60), 1)
```