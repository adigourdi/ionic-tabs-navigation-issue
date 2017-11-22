# Ionic Tabs navigation issue demonstration

This repo serves as reproduction of an issue I encountered with Ionic Tabs navigation

### Setup the app

1. Run `npm install` to setup packages
2. Run `ionic serve` to open the app in a browser

### Steps to reproduce

1. Open the app, you're on the home page, home-tab1 open by default
2. Click the `About` button

### Expected results

You're on the About page, and about-tab1 open

##### Expected console log

```
Constructor: Home
Constructor: Home Tab 1
Constructor: About
Constructor: About Tab 1
```

### Actual results

You're on the About page, the selected tab is `about-tab2`, and the current page is `home-tab1` (the page you came from)

##### Actual console log

```
Constructor: Home
Constructor: Home Tab 1
Constructor: About
Constructor: Home Tab 1
```

Alternatively, instead of clicking the About button on `home-tab1`, click the About button on the `home-tab2` page,
the same behaviour will occur, but now the selected tab will be `about-tab3`, and the current page will be `home-tab2` (the page you came from)

##### Actual console log

```
Constructor: Home
Constructor: Home Tab 1
Constructor: Home Tab 2
Constructor: About
Constructor: Home Tab 2
```

## Notes

* This repo is based on a fresh start of the blank ionic package
* This issue happens only when the pages are decorated with `@IonicPage` and have their own module, there is a branch `no-page-modules` where the issue doesn't occur
* Package versions
  * ionic 3.19
  * ionic-angular 3.9.2
  * @angular/* 5.0.1
