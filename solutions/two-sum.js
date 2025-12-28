class Solution(object):
    def twoSum(self, nums, target):
        hash_map = {}
        for i in range(len(nums)):
            required = target -  nums[i]
            if required in hash_map:
                return [i, hash_map[required]]
            else:
                hash_map[nums[i]] = i