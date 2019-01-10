# ImagePreloader

This library offers an easy to use method of preloading an image resource that, upon completion, will fire a callback if one was supplied. It uses a UMD wrapper to make itself available to AMD, CommonJS and vanilla JS loading.

## Example Usage
```js
new ImagePreloader('/path/to/image.jpg', function() {
  console.log('Image preloading is complete.');
});
```

## License
MIT
