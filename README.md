# Hyppykeli.fi

Skydiving weather for Finnish Dropzones. All data is obtained from the open data APIs of the [Finnish Meteorological Institute][fmi].
The application is free and open source under the GPLv3 license. It's live at https://hyppykeli.fi/. The application is currently available only in Finnish.

[fmi]: http://en.ilmatieteenlaitos.fi/

# Some devnotes

## Havaintoasemat

<http://ilmatieteenlaitos.fi/havaintoasemat>

Kartalla: <https://drive.google.com/open?id=1N_DKKUhwuirVsGHV3R14VYfJH7o&usp=sharing>

CSV:n generointi

```js
c = (el, i) =>
    jQuery(jQuery("td", el).get(i))
        .text()
        .trim();
document.body.innerHTML =
    "<pre>" +
    jQuery(".stations tr")
        .toArray()
        .slice(1)
        .map(
            el =>
                `${c(el, 0)} (${c(el, 1)}),${c(el, 4).replace(
                    ",",
                    "."
                )}0000,${c(el, 5).replace(",", ".")}0000`
        )
        .join("\n");
```
