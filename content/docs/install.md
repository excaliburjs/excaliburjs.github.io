---
title: Install Guide
---
# Install Guide

<a href="https://github.com/excaliburjs/Excalibur/releases/tag/v{{pkg.version}}" class="btn btn-primary btn-lg">**Latest Release:** {{pkg.version}}</a>

## Get Excalibur

You can install Excalibur through one of many package managers:

**Bower:** `bower install excalibur`

**NuGet:** `Install-Package Excalibur`

You can also obtain the latest version on GitHub: [{{pkg.author.git}}]({{pkg.author.git}})

## Including Excalibur

### For the web

Just include the `excalibur-{version}.min.js` file on your page and you'll be set.

If you're using TypeScript, be sure to reference the declaration file `excalibur-{version}.d.ts` file.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
	</head>
	<body>
		<script src="excalibur-version.min.js"></script>
	</body>
</html>
```

### For Windows 8

Please reference the [GitHub repository]({{pkg.author.git}}) for an example of using VS2013 and a WinJS application to run Excalbur.

1. Install the Excalibur Nuget package
2. Include the JS file in your WinJS layout file (e.g. `default.html`)
3. Include a small script to new up your game (don't use `default.js`)

### For Windows 8.1 & Windows Phone 8.1 (Universal App)

Stay tuned for a formal tutorial, but it should be as simple as including the JS in your Shared project and referencing it.