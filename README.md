# Color Palette Api

This is the color palette API for my [Frontend Masters React Native course](https://kadikraman.github.io/react-native-v2/).

Hosted version: https://color-palette-api.kadikraman.now.sh/palettes

## Local development

```sh
yarn
yarn dev
```

The api will be served from `http://localhost:3000/palettes`

## Deployment

This api is set up to be deployed using Zeit Now.

Install the cli:

```sh
npm i -g now
```

Deploy:

```sh
now
```

You will have to create an account and/or log in first.

**Note:** the POST requests will work, but will not persist in the cloud function (we're only saving the data in memory), but it will persist while the server is running if you run it locally. Intended for learning purposes only.

## Supported methods

### `GET /palettes`

```js
[
  {
    id: <number>,
    paletteName: <string>,
    colors: [
        {
            colorName: <string>,
            hexCode: <string>,
        }
        ...
    ]
  },
  ...
]
```

### `GET /palettes?id=<number>`

```js
{
  id: <number>,
  paletteName: <string>,
  colors: [
      {
          colorName: <string>,
          hexCode: <string>,
      }
      ...
  ]
}
```

### (for local development only) `POST /palettes`

Method body:

```js
{
  id: <number>,
  paletteName: <string>,
  colors: [
      {
          colorName: <string>,
          hexCode: <string>,
      }
      ...
  ]
}
```

e.g.

```js
await fetch("http://localhost:3000/palettes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    paletteName: "New palette",
    colors: [
      { colorName: "Brown", hexCode: "#655643" },
      { colorName: "Teal", hexCode: "#80BCA3" },
      { colorName: "Yellowish", hexCode: "#F6F7BD" },
      { colorName: "Yellow", hexCode: "#E6AC27" },
      { colorName: "Red", hexCode: "#BF4D28" }
    ]
  })
});
```
