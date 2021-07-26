# VPReact

Components and Redux module for rendering and editing [TuiPageBundle](https://bitbucket.org/tui/TuiPageBundle) content.

This is a React version of [@tuimedia/vuepage](https://bitbucket.org/tui/vue-page/)

[TOC]

## Setup
WIP

## TuiPage component

* `url` - the URL on the API for the page you want to render. Commonly you'll want this to be a computed property that uses a router parameter to fetch the page slug and then prepends the API base URL.
* WIP `state` (optional, defaults to 'live') - the page state you want to retrieve (defaults to `live`)
* `data` - an alternative to `url` if you want to fetch the page object yourself and use it outside the component.
* `language` - a language code you want the page to be rendered in


