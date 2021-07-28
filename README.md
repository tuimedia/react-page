# react-page

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

## Metadata helper 

This helper differs a bit from the vue version.

It's quite common to need to access page metadata from outside the TuiPage component, for example when displaying a list of pages. In that case, accessing the translatedMetadata properties can be quite verbose. As an alternative, you can use the `useTranslatedMetadata` helper to generate methods for the fields you need to access. For example:

```js
const metadataOutsideTuiPage = useTranslatedMetadata(sample, 'en_GB');

// Returns an object like:

/* 
{
  "thumbnail": "https://unwfp.imgix.net/htbe/uploads/f2510d343d42cfc07113b3e93494e453efa13d0f.jpg",
  "type": "article",
  "accessRole": "ROLE_USER",
  "cardStyle": "textImage",
  "showRelated": true,
  "spludge": "https://unwfp.imgix.net/htbe/uploads/a6cfa689457ca5d2ed132fd43e55ea454bfd2d39.png",
  "isDutyStation": false,
  "heroImage": "https://unwfp.imgix.net/htbe/uploads/5ce1345bbba85e95ccd2ba1f594a6d4ef23d86df.jpg",
  "blendImage": "https://unwfp.imgix.net/htbe/uploads/92d942dceb0674071ec71e2eec77cdef80c20ad0.png",
  "imgixParams": "",
  "title": "How to prepare your partner to move to a new Duty Station",
  "intro": "",
  "standfirst": ""
}*/
```

## Handling page state 

The `pageState` state property goes through the following lifecycle:

* `initialised` - the component has loaded but no page has been loaded or set
* `loading` - a page is being retrieved
* `loaded` or `error` - the page has been retrieved (and there was an error)
* WIP `unloading` - the page state is resetting

You can watch this state property to perform various actions, and also modify it manually using the `setPageState` action.

## Showing content while loading

Set the `loading` slot to display content while the page is being loaded. If you aren't using the `url` property of the TuiPage component, then you'll need to manage the pageState manually by calling the `setPageState` action (the `setPage` action will set the pageState to loading and then loaded, but obviously it won't accurately reflect that your content is loading).

```js
<TuiPage 
  class="tui-page-class" 
  //data={sample} 
  url={'https://qa.wellbeing.wfp.org/api/pages/manage-remote-work-isolation?state=live'}
  language={language}
  loading={<div>Loading...</div>}>
</TuiPage>
```

## Handling errors

If you use the `url` property on the TuiPage component, an axios http request will be made to fetch that URL. If that request fails, you can provide an error template to display something useful to users. For example:

```js
    <TuiPage 
      class="tui-page-class" 
      //data={sample} 
      url={'https://qa.wellbeing.wfp.org/api/pages/manage-remote-work-isolation?state=live'}
      language={language}
      loading={<div>Loading...</div>}
      error={<div>This is an error</div>}>
    </TuiPage>
```

The `error` property is an [axios error object](https://github.com/axios/axios#handling-errors).

## Your content components

All custom components will receive `props`, which will contain the processed configuration and translated content for that component. A minimal component might look like this:

```js
import React from 'react'

const PageHero = (props) => {
    return (
        <div>
            <h1>{props.block.title}</h1>
            <h3>{props.langData.title}</h3>
        </div>
    );
}

export default PageHero
```