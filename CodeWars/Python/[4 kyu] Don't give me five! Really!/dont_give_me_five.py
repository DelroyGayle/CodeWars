CACHE = None
LIMIT = 22


def dont_give_me_five(start, end):
    # count the numbers from start to end that don't contain the digit 5

    if not CACHE:
        setup()

    # Handle Edge Cases
    if start == 0 and end == 0:
        return 1

    abs_start = abs(start)
    abs_end = abs(end)

    if start == end:
        # Identical values
        return 0 if str(abs_start)[0] == '5' else 1

    if start == 0 and end != 0:
        # '1 +' is to count the number ZERO
        return 1 + compute(abs_end)

    if end == 0 and start != 0:
        # '1 +' is to count the number ZERO
        return 1 + compute(abs_start)

    # Same signs?
    if ((start > 0 and end > 0)
        or
       (start < 0 and end < 0)):
        return compute_range_part1(min(abs_start, abs_end),
                                   max(abs_start, abs_end))

    # '1 +' is to count the number ZERO
    return (1 + compute(abs_start) + compute(abs_end))


def compute_range_part1(start, end):
    # NOTE: start IS <= end
    # Edge cases when the range numbers begin with five
    # or contain fives
    start_string = str(start)
    end_string = str(end)
    if ((start_string[0] == end_string[0] == '5' and
       len(start_string) == len(end_string))):
        # EG 5 & 5; 51 & 55; 565 & 589 IN SUCH CASES THE VALUE IS ZERO!
        return 0

    # If 'start' begins with 5 round up to 6
    # EG 5 to 6, 53 to 60, 546 to 600, etc
    if start_string[0] == '5':
        start = 6 * 10 ** (len(start_string) - 1)
        start_string = str(start)

    # If 'end' begins with 5 round down to 4
    # EG 5 to 4, 53 to 49, 546 to 499, etc
    if end_string[0] == '5':
        end = startswith_5_round_down(end, end_string)
        end_string = str(end)

    # What if either range number contains a 5 e.g.
    # for the range 2490228782196537011 to 2490228783604515625

    # Round 2490228782196537011 up to 2490228782196600000
    # Round 2490228783604515625 down to 2490228783604499999

    start = handle_rounding(start, start_string, True)
    end = handle_rounding(end, end_string, False)
    return compute_range_part2(start, end)


def compute_range_part2(start, end):
    return compute(end) - compute(start) + 1


def compute(number):
    thestring = str(number)
    thelength = len(thestring)
    if thelength > LIMIT:
        print("ERROR")
        quit()

    worknumber = number

    if thestring[0] == '5':
        return compute(startswith_5_round_down(number, thestring))

    thesum = 0
    for i in range(thelength, 1, -1):
        minus1 = i - 1

        # Determine the DIGIT value
        # i.e. for 984 the first digit is '9', 2nd digit is 8, etc
        tens = 10 ** minus1
        nines = 9 ** minus1
        digit, remainder = divmod(worknumber, tens)

        # If zero, proceed no further
        # instead continue with the remainder
        # e.g. 904 => 04 => 4
        if digit == 0:
            worknumber = remainder
            continue

        # add up e.g. value of 999, value of 99, value of 9
        if minus1 > 0:
            thesum2 = 9 ** minus1

            # Multiply by what amount? Work out the digit
            # i.e. for 984 the first digit is '9', 2nd digit is 8, etc
            # However for any value >= 5, subtract 1
            # i.e. reflect the fact that numbers with '5' are
            # being ignored

            if digit > 5:
                digit -= 1

            elif digit == 5:
                # Replace numbers beginning with 5 with 49x
                # i.e. for 5 replace with 4
                #      for 50-59 replace with 49
                #      for 500=599 replace with 499
                # etc
                remainder = 10 ** minus1 - 1
                digit = 4

            tens = 10 ** minus1
            thesum += thesum2 * digit

            # remove digit i.e. for 984 ==> 84
            worknumber = remainder

    if worknumber:
        thesum += CACHE[worknumber]

    return thesum


def startswith_5_round_down(number, thestring):
    if thestring[0] == '5':
        if number == 5:
            return 4

        # Handle 5xx
        # Round the value down
        # That is: round down to 49x
        # e.g. The values of 50-59 is the value for 49
        # e.g. The values of 500-599 is the value for 499
        # e.g. The values of 5000-5999 is the value for 4999
        # 5x, 5xx, 5xxx, etc
        thelength = len(thestring)
        minus1 = thelength - 1
        nines = minus1 * '9'
        return int('4' + nines)

    return number


def handle_rounding(number, string, up):
    """
    Round up towards 6
    Round down towards 4
    """
    five_pos = string.find('5')
    if five_pos == -1:
        return number

    # '5' found
    string_length = len(string)
    if up:
        # Rounding Up
        # Replace the 5 with 6 and zero fill the rest
        diff = string_length - five_pos
        string = string[0:five_pos] + '6' + '0' * (diff - 1)
        return int(string)

    # Rounding Down
    # Replace the 5 with 4 and '9' fill the rest
    diff = string_length - five_pos
    string = string[0:five_pos] + '4' + '9' * (diff - 1)
    return int(string)


def setup():
    global CACHE

    CACHE = {}
    for i in range(1, 10):
        CACHE[i] = i if i <= 4 else i - 1
