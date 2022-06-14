# Google App Script Utils

Toolset to create an App in Google App Script

## Installation

1. Select "Resources" > "Libraries..." in the Google Apps Script editor.
2. Enter the project key (```1eApY2GbvlKzu4PgOnlc-wY2fTQXaIuQNlxtysYo4EuT3kOIFoTGW_LxD```) in the "Find a Library" field, and choose "Select".
3. Select the highest version number, and choose `App` as the identifier. (Do not turn on Development Mode unless you know what you are doing. The development version may not work.)
4. Press Save. You can now use the `App` library in your code.

## Model
Models use Tamotsu a Object-Spreadsheet Mapping (OSM) library like ActiveRecord for Google Apps Script.

[Check full documentation](https://github.com/itmammoth/Tamotsu).

```js
const Users = App.Model({ sheetName: 'users' });

Users.all(); // return all users
Users.first(); // return first user
var user = Users.where({email: 'mary@example.com'}).first();
user.update({email: 'sarah@example.com'})
```

## Route

Gexpress to handle webapps routes for Google Apps Script. 

[Check full documentation](https://github.com/coderofsalvation/Gexpress).
```js
var app = App.Route();
var cache = CacheService.getScriptCache()

cache.put("/hello", JSON.stringify({date: new Date()}) )

app.use(function(req,res,next){
  req.user = {email:Session.getActiveUser().getEmail()}
  next()
})

app.get('/hello',function(req,res,next){
  res.set('content-type','application/json')
  res.send( cache.get('/hello') )
  res.end()
},true)

app.get('/client.js', app.client() )

app.get(/.*/, function(req,res,next){
  res.set('content-type','text/html')
  res.send("<html><body><h1>Hello</h1></body></html>") // see docs for template-usage & banner-removal
  res.end()
})

// this hooks Gexpress into appscript 
function doGet(e) { return app.doGet(e)  }
function doPost(e){ return app.doPost(e) }
```

## Lodash
Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

[Check full documentation](https://lodash.com/docs).

```js
var _ = App.Lodash();

_.isArray([1, 2, 3]); // => true
_.isArray(document.body.children); // => false
_.isArray('abc'); // => false
_.isArray(_.noop); // => false
```

## Collection
Collection is for working with arrays and objects. Collect.js offers an (almost) identical api to Laravel Collections.

[Check full documentation](https://collect.js.org/usage.html).

```js
var items = [1,2,3,4];
var collection = App.Collection(items);
```

## Str
Javascript Version's of Laravel's `Illuminate\Support\Str`.

[Check full documentation](https://github.com/zhorton34/laravel-js-str).

```js
let replaced = App.Str().of('the quick brown fox jumps over the lazy dog').replaceFirst('the', 'a');
// or
let replaced = App.Str('the quick brown fox jumps over the lazy dog').replaceFirst('the', 'a');
// a quick brown fox jumps over the lazy dog
```

## Moment
Handle with dates.

[Check full documentation](https://momentjs.com/docs/#/use-it/).

```js
App.Moment().format('MMMM Do YYYY, h:mm:ss a'); // June 14th 2022, 3:44:40 pm
App.Moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
```

## Development

You must have installed `clasp` [CLI for Google App Script](https://developers.google.com/apps-script/guides/clasp).

Install dependencies
```bash
npm install
```

Transpile code
```bash
npm run gas
```

Transpile and push to Google
```bash
npm run push
```

Transpile, push to Google and create a new GAS deploy
```bash
npm run deploy
```
