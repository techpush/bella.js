# BellaJS

Lightweight util for handling data type, string... in your Node.js and browser
apps.

![CodeQL](https://github.com/ndaidong/bellajs/workflows/CodeQL/badge.svg)
[![CI test](https://github.com/ndaidong/bellajs/workflows/ci-test/badge.svg)](https://github.com/ndaidong/bellajs/actions)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/bellajs/badge.svg)](https://coveralls.io/github/ndaidong/bellajs)
[![NPM](https://img.shields.io/npm/v/%40ndaidong%2Fbellajs?color=32bb24)](https://www.npmjs.com/package/@ndaidong/bellajs)
[![JSR](https://jsr.io/badges/@ndaidong/bellajs?color=32bb24)](https://jsr.io/@ndaidong/bellajs)

## Contents

- [Setup](#setup)
- [APIs](#apis)
  - [DataType detection](#datatype-detection)
  - [String manipulation](#string-manipulation)
  - [Data handling](#data-handling): [`clone`](#cloneanything-val),
    [`copies`](#copiesobject-source-object-target-boolean-requirematching-array-excepts)
  - [Array utils](#array-utils): [`pick`](#pickarray-arr--number-count--1),
    [`sort`](#sortarray-arr--function-compare),
    [`sortBy`](#sortbyarray-arr-number-order-string-property),
    [`shuffle`](#shufflearray-arr), [`unique`](#uniquearray-arr)
  - [Functional utils](#functional-utils): [`curry`](#curryfn),
    [`compose`](#composef1-f2-fn), [`pipe`](#pipef1-f2-fn),
  - [Date utils](#date-utils):
    [`formatDateString`](#formatdatestringdate--timestamp--string-locale--object-options),
    [`formatTimeAgo`](#formattimeagodate--timestamp--string-locale--string-justnow)
  - [Random utils](#random-utils): [`randint`](#randintnumber-min--number-max),
    [`genid`](#genidnumber-length--string-prefix)

- [Development](#development)

- [License](#license)

## Setup & Usage

### Deno

https://jsr.io/@ndaidong/bellajs

```ts
import { genid } from "@ndaidong/bellajs";

for (let i = 0; i < 5; i++) {
  console.log(genid());
}
```

You can use JSR packages without an install step using `jsr:` specifiers:

```ts
import { genid } from "jsr:@ndaidong/bellajs";

for (let i = 0; i < 5; i++) {
  console.log(genid());
}
```

You can also use `npm:` specifiers as before:

```ts
import { genid } from "npm:@ndaidong/bellajs";

for (let i = 0; i < 5; i++) {
  console.log(genid());
}
```

Or import from esm.sh

```ts
import { genid } from "https://esm.sh/@ndaidong/bellajs";

for (let i = 0; i < 5; i++) {
  console.log(genid());
}
```

### Node.js & Bun

https://www.npmjs.com/package/@ndaidong/bellajs

```bash
npm i @ndaidong/bellajs
# pnpm
pnpm i @ndaidong/bellajs
# yarn
yarn add @ndaidong/bellajs
# bun
bun add @ndaidong/bellajs
```

```js
import { genid } from "@ndaidong/bellajs";

for (let i = 0; i < 5; i++) {
  console.log(genid());
}
```

You can also use CJS style:

```js
const { genid } = require("@ndaidong/bellajs");

for (let i = 0; i < 5; i++) {
  console.log(genid());
}
```

### Browsers:

```html
<script type="module">
  import { genid } from "https://esm.sh/@ndaidong/bellajs";
  // import { genid } from 'https://unpkg.com/@ndaidong/bellajs/esm/mod.js';

  for (let i = 0; i < 5; i++) {
    console.log(genid());
  }
</script>
```

## APIs

### DataType detection

- `.isArray(Anything val)`
- `.isBoolean(Anything val)`
- `.isDate(Anything val)`
- `.isEmail(Anything val)`
- `.isEmpty(Anything val)`
- `.isFunction(Anything val)`
- `.isInteger(Anything val)`
- `.isLetter(Anything val)`
- `.isNil(Anything val)`
- `.isNull(Anything val)`
- `.isNumber(Anything val)`
- `.isObject(Anything val)`
- `.isString(Anything val)`
- `.isUndefined(Anything val)`

### String manipulation

- `.ucfirst(String s)`
- `.ucwords(String s)`
- `.escapeHTML(String s)`
- `.unescapeHTML(String s)`
- `.slugify(String s)`
- `.stripTags(String s)`
- `.stripAccent(String s)`
- `.truncate(String s, Number limit)`
- `.replaceAll(String s, String|Array search, String|Array replace)`

### Data handling

#### `clone(Anything val)`

Make a deep copy of a variable.

```js
import { clone } from "@ndaidong/bellajs";

const b = [
  1,
  5,
  0,
  "a",
  -10,
  "-10",
  "",
  {
    a: 1,
    b: "Awesome",
  },
];

const cb = clone(b);
console.log(cb);
```

_cb_ now has the same values as _b_, while the properties are standalone, not
reference. So that:

```js
cb[7].a = 2;
cb[7].b = "Noop";

console.log(b[7]);
```

What you get is still:

```js
{
  a: 1,
  b: 'Awesome'
}
```

#### `copies(Object source, Object target[[, Boolean requireMatching], Array excepts])`

Copy the properties from _source_ to _target_.

- _requireMatching_: if true, BellaJS only copies the properties that are
  already exist in _target_.
- _excepts_: array of the properties properties in _source_ that you don't want
  to copy.

After this action, target will be modified.

```js
import { copies } from "@ndaidong/bellajs";

const a = {
  name: "Toto",
  age: 30,
  level: 8,
  nationality: {
    name: "America",
  },
};
const b = {
  level: 4,
  IQ: 140,
  epouse: {
    name: "Alice",
    age: 27,
  },
  nationality: {
    long: "18123.123123.12312",
    lat: "98984771.134231.1234",
  },
};

copies(a, b);
console.log(b);
```

Output:

```js
{
  level: 8,
  IQ: 140,
  epouse: {
    name: 'Alice',
    age: 27
  },
  nationality: {
    long: '18123.123123.12312',
    lat: '98984771.134231.1234',
    name: 'America'
  },
  name: 'Toto',
  age: 30
}
```

### Array utils

#### `pick(Array arr [, Number count = 1])`

Randomly choose N elements from array.

```js
import { pick } from "@ndaidong/bellajs";

const arr = [1, 3, 8, 2, 5, 7];
pick(arr, 2); // --> [3, 5]
pick(arr, 2); // --> [8, 1]
pick(arr); // --> [3]
pick(arr); // --> [7]
```

#### `sort(Array arr [, Function compare])`

Sort the array using a function.

```js
import { sort } from "@ndaidong/bellajs";

const fn = (a, b) => {
  return a < b ? 1 : a > b ? -1 : 0;
};

sort([3, 1, 5, 2], fn); // => [ 1, 2, 3, 5 ]
```

#### `sortBy(Array arr, Number order, String property)`

Sort the array by specific property and direction.

```js
import { sortBy } from "@ndaidong/bellajs";

const players = [
  {
    name: "Jerome Nash",
    age: 24,
  },
  {
    name: "Jackson Valdez",
    age: 21,
  },
  {
    name: "Benjamin Cole",
    age: 23,
  },
  {
    name: "Manuel Delgado",
    age: 33,
  },
  {
    name: "Caleb McKinney",
    age: 28,
  },
];

const result = sortBy(players, -1, "age");
console.log(result);
```

#### `shuffle(Array arr)`

Shuffle the positions of elements in an array.

```js
import { shuffle } from "@ndaidong/bellajs";

shuffle([1, 3, 8, 2, 5, 7]);
```

#### `unique(Array arr)`

Remove all duplicate elements from an array.

```js
import { unique } from "@ndaidong/bellajs";

unique([1, 2, 3, 2, 3, 1, 5]); // => [ 1, 2, 3, 5 ]
```

### Functional utils

#### `curry(fn)`

Make a curried function.

```js
import { curry } from "@ndaidong/bellajs";

const sum = curry((a, b, c) => {
  return a + b + c;
});

sum(3)(2)(1); // => 6
sum(1)(2)(3); // => 6
sum(1, 2)(3); // => 6
sum(1)(2, 3); // => 6
sum(1, 2, 3); // => 6
```

#### `compose(f1, f2, ...fN)`

Performs right-to-left function composition.

```js
import { compose } from "@ndaidong/bellajs";

const f1 = (name) => {
  return `f1 ${name}`;
};
const f2 = (name) => {
  return `f2 ${name}`;
};
const f3 = (name) => {
  return `f3 ${name}`;
};

const addF = compose(f1, f2, f3);

addF("Hello"); // => 'f1 f2 f3 Hello'

const add1 = (num) => {
  return num + 1;
};

const mult2 = (num) => {
  return num * 2;
};

const add1AndMult2 = compose(add1, mult2);
add1AndMult2(3); // => 7
// because multiple to 2 first, then add 1 late => 3 * 2 + 1
```

#### `pipe(f1, f2, ...fN)`

Performs left-to-right function composition.

```js
import { pipe } from "@ndaidong/bellajs";

const f1 = (name) => {
  return `f1 ${name}`;
};
const f2 = (name) => {
  return `f2 ${name}`;
};
const f3 = (name) => {
  return `f3 ${name}`;
};

const addF = pipe(f1, f2, f3);

addF("Hello"); // => 'f3 f2 f1 Hello'

const add1 = (num) => {
  return num + 1;
};

const mult2 = (num) => {
  return num * 2;
};

const add1AndMult2 = pipe(add1, mult2);
add1AndMult2(3); // => 8
// because add 1 first, then multiple to 2 late => (3 + 1) * 2
```

### Date utils

#### `formatDateString(Date | Timestamp [, String locale [, Object options]])`

```js
import { formatDateString } from "@ndaidong/bellajs";

const today = new Date();

formatDateString(today); // => Jan 3, 2022, 8:34:28 PM GMT+7

// custom format
formatDateString(today, {
  dateStyle: "short",
  timeStyle: "short",
  hour12: true,
}); // => 1/3/22, 8:34 PM

// custom locale
formatDateString(today, "zh"); // => 2022年1月3日 GMT+7 下午8:34:28

// custom lang and format
formatDateString(today, "zh", {
  dateStyle: "short",
  timeStyle: "long",
  hour12: true,
}); // => 2022/1/3 GMT+7 下午8:34:28

formatDateString(today, "vi"); // => 20:34:28 GMT+7, 3 thg 1, 2022
formatDateString(today, "vi", {
  dateStyle: "full",
  timeStyle: "full",
}); // => 20:34:28 Giờ Đông Dương Thứ Hai, 3 tháng 1, 2022
```

#### `formatTimeAgo(Date | Timestamp [, String locale [, String justnow]])`

```js
import { formatTimeAgo } from "@ndaidong/bellajs";

const today = new Date();

const yesterday = today.setDate(today.getDate() - 1);
formatTimeAgo(yesterday); // => 1 day ago

const current = new Date();
const aLittleWhile = current.setHours(current.getHours() - 3);
formatTimeAgo(aLittleWhile); // => 3 hours ago

// change locale
formatTimeAgo(aLittleWhile, "zh"); // => 3小时前
formatTimeAgo(aLittleWhile, "vi"); // => 3 giờ trước
```

The last param `justnow` can be used to display a custom 'just now' message,
when the distance is lesser than 1s.

```js
const now = new Date();
const aJiff = now.setTime(now.getTime() - 100);
formatTimeAgo(aJiff); // => 'just now'
formatTimeAgo(aJiff, "fr", "à l'instant"); // => à l'instant
formatTimeAgo(aJiff, "ja", "すこし前"); // => すこし前
```

These two functions based on recent features of built-in object `Intl`.

Please refer the following resources for more info:

- [Intl.DateTimeFormat() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
- [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
- [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)

### Random utils

#### `randint([Number min [, Number max]])`

Returns a number between `min` and `max`

```js
import { randint } from "@ndaidong/bellajs";

randint(); // => a random integer
randint(1, 5); // => a random integer between 3 and 5, including 1 and 5
```

#### `genid([Number length [, String prefix]])`

Create random ID string.

```js
import { genid } from "@ndaidong/bellajs";

genid(); // => random 32 chars
genid(16); // => random 16 chars
genid(5); // => random 5 chars
genid(5, "X_"); // => X_{random 3 chars}
```

## Development

Since v12.x.x, we switched to [Deno](https://docs.deno.com/runtime/manual/)
platform, and use [DNT](https://github.com/denoland/dnt) to build Node.js
packages.

```bash
git clone https://github.com/ndaidong/bellajs.git
cd bellajs

# test
deno test

# build npm packages
deno task build

cd npm
node test_runner.js
```

## License

The MIT License (MIT)

---
