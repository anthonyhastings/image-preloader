/**
 *  ImagePreloader v1.0
 *  http://www.bitbucket.org/antwan1986
 *
 *  Copyright 2013 Anthony Hastings.
 *  Non-commercial use is licensed under the GPL v3 License.
 */
(function(root, factory) {
    'use strict';

    if (typeof(define) === 'function' && define.amd) {
        define(factory);
    } else {
        root.ImagePreloader = factory();
    }
}(window, function() { 
    'use strict';

    /**
     *  Creates an image element in memory, binds a load listener to it
     *  that will run a callback function passed through during initialise,
     *  and then triggers the loading of the image by applying the src.
     *
     *  @param string imageSrc - The path of the image to load.
     *  @param func callbackFunc - The callback function to run after load.
     *  @return void.
     */
    function ImagePreloader(imageSrc, callbackFunc) {
        var img = document.createElement('img');

        img.addEventListener('load', function() {
            if (typeof(callbackFunc) === 'function' && callbackFunc.call) {
                callbackFunc.call();
            }
            img = null;
        }, false);

        img.src = imageSrc;
    }

    return ImagePreloader;
}));