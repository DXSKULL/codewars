// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!

//Solution:
function permutations(string) {
	if (string.length <= 1) return [string];

	return Array.from(
		new Set(
			string
				.split("")
				.map((character, index) =>
					permutations(
						string.substring(0, index) + string.substring(index + 1)
					).map((returnChar) => character + returnChar)
				)
				.reduce((acc, item) => [...acc, ...item], [])
		)
	);
}