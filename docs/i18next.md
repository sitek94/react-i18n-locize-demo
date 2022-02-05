# i18next

## Keys vs fallback values

```json5
// es/translation.json
{
  "How are you?": "¿Cómo estás?"
}
```

> **i18next docs**:
> 
> While this works and might reduce files to load it makes the management of translations a lot harder as you will need 
> to update changes to fallback values in code and JSON files.
>
> Possible - but not recommended.
> 
> https://www.i18next.com/principles/fallback#key-fallback

One of the benefits, that I see in using keys, as opposed to fallback values, is that we could keep the translations 
files separate from the source code. There would be no need to redeploy the app when there are some changes in
the translations.

## ICU vs i18next JSON format

https://gitlab.com/kachkaev/website-frontend/-/tree/master
