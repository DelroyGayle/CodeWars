def max_zero_sequence(arr):
    return (max(handle_ranges(arr,
                              powerset(range(len(arr)))), key=len))


def handle_ranges(arr, ranges):
    for range in ranges:
        combination = []
        for index in range:
            combination.append(arr[index])

        # filter - leaving only the combinations that add up to zero
        if sum(combination) != 0:
            continue
        yield combination


def powerset(lst):
    subsets = []
    for i in range(len(lst)):
        # i + 1 - do not include the empty set []
        for j in range(i + 1, len(lst) + 1):
            subsets.append(lst[i:j])
    return subsets
