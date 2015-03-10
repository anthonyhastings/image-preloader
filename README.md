# ImagePreloader

This micro-library offers an easy to use method of preloading an image resource that, upon completion, will fire a callback if one was supplied. It uses the popular UMD wrapper to make itself available to AMD, CommonJS and vanilla JS loading.

## Example Usage
```
new ImagePreloader('/path/to/image.jpg', function() {
    console.log('Image preloading is complete.');
});
```

## License
This library is licensed under MIT. You are free to use any of this libraries code in any other project (even commercial projects) as long as the copyright header is left intact.
