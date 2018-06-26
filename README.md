# snow-dark-syntax-patch theme

> A syntax theme for atom which is easy on the eyes, yet still colorful. This theme is intended for use with the One Dark UI theme.

This patch adds some more styling to the basic [snow-dark-syntax] and comes with theme settings.

## Styling

![screenshot]

My intent was to have syntax coloring which makes you **focus** on what's important, while still keeping everything readable and follow [snow-dark-syntax]'s original idea: a theme that is **easy on the eyes, yet still colorful**.

This effect is achieved by having the less important elements in **darker** and **colder colors**, and the more important ones in **bright**, **hotter colors**, as seen on the screenshot above.

Another key idea is **unity**: trying to keep the main colors in every language: for instance, variable names are green, so they be in every language.

## Settings

This theme allows you to adjust a few settings:

* **Invisible character's opacity**: you may want to have the invisible characters enabled, but them filling up your field of view annoys you - you can make them more transparent now
* **Hide invisibles on current line**: does what it says: whenever a line is selected, invisible characters won't show up on it
* **Cursor color** (does not work while sharing the editor, `teletype` overrides it)
* **Code shadow** - on the current line: make the code stand out a little bit on the current line, by adding a slight shadow to it
* **Current line highlight**: make your current line stand out even more by applying a highlight on it (as seen on the screenshot)

## Installation and usage

You can either install the package through Atom's package installer in Atom's settings (look for `snow-dark-syntax-patch`), or install it using apm:

```sh
apm install snow-dark-syntax-patch
```

This theme is intended to be used with a dark UI theme, [snow-darl-syntax] recommends the [one-dark-ui] theme, but pretty much any dark UI theme might work (I'd recommend [pristine-ui]).

**Long last to dark themes!**

[screenshot]: https://i.imgur.com/qpq1nhE.png
[snow-dark-syntax]: https://atom.io/themes/snow-dark-syntax/
[one-dark-ui]: https://atom.io/themes/one-dark-ui/
[pristine-ui]: https://atom.io/themes/pristine-ui/
