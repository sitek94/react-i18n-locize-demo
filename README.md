# React i18n Demo ⚗️

> 🚧 &nbsp; work in progress &nbsp;🚧

## Localization Flow

![React i18n Demo - Localization Flow](./docs/localization-flow-v1-dark.png#gh-dark-mode-only)
![React i18n Demo - Localization Flow](./docs/localization-flow-v1-light.png#gh-light-mode-only)

## Localization service

As of now I'm using [POEditor](https://www.poeditor.com/) as a localization service. Why? Well, it's a tool that is used
in my day job's project, so I want to explore its possibilities. However, in the future I'm definitely going to check 
out [locize](https://locize.com/), which is a service created by the authors of [i18next](https://www.i18next.com/).

## Resources

### i18n

- [Language Plural Rules](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html)
- [Percentage](https://docs.microsoft.com/en-us/globalization/locale/number-formatting#the-placement-of-the-percent-sign-) -
  It can be written several ways: 98%, 98 %, 98 pct, %98. Thus you should never assume that you can hard-code the percent sign.
- [Units of measurement](https://docs.microsoft.com/en-us/globalization/locale/units-of-measurement) - 
  > In 1999, the NASA Mars Climate Orbiter was lost on entry to the Martian atmosphere because of "the failed translation
  > of English units into metric units" - [source](https://science.ksc.nasa.gov/mars/msp98/news/mco991110.html)

### Best Practices
- [l10n and i18n Best Practices](https://www.infragistics.com/community/blogs/b/devtoolsguy/posts/l10n-and-i18n-best-practices)
- [Translation keys: Naming and organizing](https://lokalise.com/blog/translation-keys-naming-and-organizing/)

### Common Mistakes
- [i18n Mistakes - Word Puzzles](https://techbase.kde.org/Development/Tutorials/Localization/i18n_Mistakes#Pitfall_.232:_Word_Puzzles)
- [Avoiding Common Internationalization Mistakes](https://mattermost.com/blog/avoiding-common-internationalization-mistakes/)
- [Top Localization Mistakes to Avoid](https://harryclarktranslation.co.nz/top-localization-mistakes-to-avoid/)
- [10 Common Mistakes in Software Localization](https://phrase.com/blog/posts/10-common-mistakes-in-software-localization/)


### Tools
- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
- [How to properly internationalize a React application using i18next](https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb)
