def binarray(binary_array) -> int:
    # Initialise the current balance between 0s and 1s
    # and the maximum length found
    balance = max_length = 0
    # Create a hash map to store the first occurrence of each balance
    balance_map = {0: -1}

    # Iterate over the elements in the array
    for index, value in enumerate(binary_array):
        # Update the balance (+1 for 1, -1 for 0)
        balance += 1 if value == 1 else -1

        # Check if the same balance has been seen before
        if balance in balance_map:
            # If this balance had been seen before,
            # calculate the length of the subarray
            # between the previous index and the current index
            max_length = max(max_length, index - balance_map[balance])
        else:
            # Since this is the first time this balance has been seen
            # store the index for this balance in the hash map
            balance_map[balance] = index

    # Return the maximum length of the subarray with equal number of 0s and 1s
    return max_length
