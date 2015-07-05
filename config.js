angular.module("vibe", [])

.run(function ($rootScope) {
    $rootScope.countryName = "Bangladesh"; // Your country name (Mandatory) | List of countries - http://is.gd/ZRQKky
	$rootScope.blogUrl = "//blog.mozillabd.org/"; // Community blog URL (Leave blank if you don't have one)
	$rootScope.hiveUrl = ""; // Hive URL (Leave blank if you don't have one)
	$rootScope.leaderboardUrl = ""; // Leaderboard URL (Leave blank if you don't have one)
});
