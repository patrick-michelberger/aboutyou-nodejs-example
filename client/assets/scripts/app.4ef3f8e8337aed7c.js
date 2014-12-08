;(function(){ 
/**
 * Diese Klasse stellt Hilfsmethoden zur Verfügung.
 *
 * @type Helper
 */
var helper =
{
    /**
     * Sucht in dem Script-Tag nach Data-Attributen und gibt den Wert zurück.
     *
     * @param {string} name
     * @param {string} url
     *
     * @returns {string}
     */
    getDataAttribute: function (name, url) {
        var scripts = document.getElementsByTagName('script');

        for (var i = 0, l = scripts.length; i < l; i++) {
            if (scripts[i].src.match(url) !== null) {
                return scripts[i].getAttribute('data-' + name);
            }
        }

        return null;
    },

    /**
     * Findet heraus ob der aktuelle UserAgent Mobile ist.
     *
     * @returns {boolean}
     */
    isMobile: function () {
        var isMobile = false;
        var agent = navigator.userAgent.toLowerCase();

        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(agent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0,4))) {
            isMobile = true;
        }	

        return isMobile;
    },

    /**
     * Lädt ein Script nach und ruft anschließend die Callback-
     * Funktion auf.
     *
     * @param {string} url
     * @param {function} callback
     *
     * @returns {void}
     */
    loadScript: function (url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        callback = callback || function () {};

        if (script.readyState) { // Register Callback for legacy IE, incl. IE9
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { // Register Callback "modern browsers"
            script.onload = function () {
                callback();
            };
        }

        // Fire the loading
        head.appendChild(script);
    },

    /**
     * Registriert ein Event.
     *
     * @param {type} obj
     * @param {type} type
     * @param {type} fn
     *
     * @returns {undefined}
     */
    addEvent: function (obj, type, fn) {
        if (obj.attachEvent) {
            obj['e' + type + fn] = fn;
            obj[type + fn] = function () {
                obj['e' + type + fn](window.event);
            };
            obj.attachEvent('on' + type, obj[type + fn]);
        } else {
            obj.addEventListener(type, fn, false);
        }
    },

    /**
     * Löscht ein Event.
     *
     * @param {type} obj
     * @param {type} type
     * @param {type} fn
     *
     * @returns {undefined}
     */
    removeEvent: function (obj, type, fn) {
        if (obj.detachEvent) {
            obj.detachEvent('on' + type, obj[type + fn]);
            obj[type + fn] = null;
        } else {
            obj.removeEventListener(type, fn, false);
        }
    },
    
    /**
     * Öffnet eine URL in einem iFrame.
     * 
     * @param {string} url
     * @param {int} top
     * 
     * @returns {void}
     */
    openModal: function (url, top) {
        var div = document.getElementById('aboutyou-modal-iframe');
        
        if (div === null) {
            this.createModal(url, top);
        } else {
            div.src = url;
            div.style.display = 'block';
            div.style.paddingTop = top + 'px';
        }        
    },
    
    /**
     * Schließt das Modal im iFrame.
     * 
     * @return {void}
     */
    closeModal: function () {
        document.getElementById('aboutyou-modal-iframe').src = 'about:blank';
        document.getElementById('aboutyou-modal-iframe').style.display = 'none';        
    },
    
    /**
     * Erstellt einen iFrame und hängt ihn an den Body-Tag an.
     * 
     * @return {void}
     */
    createModal: function(url, top) {
        // createModal()
        var iframeStyles = [
            'width: 100%',
            'height: 100%',
            'padding-top: ' + top + 'px',
            'top: 0',
            'left: 0',
            'position: fixed',
            'z-index: 9998',
            '-webkit-overflow-scrolling: touch',
            'border-width: 0px',
            'border-style: none',
            'margin-top: 0px',
            'overflow: auto',
            'overflow-y: hidden',
            'overflow-x: hidden',
            'transition: height 500ms',
            '-webkit-transition: height 500ms'
        ];

        var iframe = document.createElement('iframe');
        iframe.id = 'aboutyou-modal-iframe';
        iframe.scrolling = 'no';
        iframe.style.cssText = iframeStyles.join(';');
        iframe.src = url;

        document.body.appendChild(iframe);        
    }
};
/**
 * Handelt die Funktionen für das Tracking.
 *
 * @type Object
 */
var tracking =
{
    registerGoogleAnalytics: function (gtm) {
        var noscript = document.createElement('noscript');
        var iframe = document.createElement('iframe');

        iframe.height = 0;
        iframe.width = 0;
        iframe.src = '//www.googletagmanager.com/ns.html?id=' + gtm;
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';

        noscript.appendChild(iframe);
        document.body.appendChild(noscript);

        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push(
                {'gtm.start': new Date().getTime(), event: 'gtm.js'}
            );
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', gtm);
    },

    registerTracking: function (appId, trackingUrl) {
        helper.loadScript(trackingUrl, function () {
            if (typeof track === 'object' && typeof track.record === 'function') {
                track.record("app_view", {"app_id": appId});
            }
        });
    }
};
/**
 * Kapselt die Methoden um auf den Warenkorb zuzugreifen.
 *
 * @type Object
 */
var basket =
{
    /**
     * Fügt eine ProduktVariante in den Warenkorb und ruft dannach die
     * Callback-Funktion auf. Nutzt intern die Funktion addVariantsToBasket.
     *
     * @param {int} productVariantId
     * @param {int} quantity
     * @param {int} userId
     * @param {int} appId
     * @param {array} additionalData
     * @param {function} callback
     *
     * @returns {void}
     */
    addToCart: function (productVariantId, quantity, userId, appId, additionalData, callback) {
        var productVariantIds = [
            {
                'id': productVariantId,
                'quantity': quantity,
                'additional_data': additionalData
            }
        ];

        this.addVariantsToBasket(productVariantIds, userId, appId, callback);
    },

    /**
     * Fügt mehrere Produktvarianten zum Warenkorb hinzu.
     *
     * - Wenn die App im iFrame geladen wurde, dann wird eine PostMessage
     * abgeschickt und an den Parent geschickt.
     * - Sonst wird per jsonp etwas in den Warenkorb gelegt.
     *
     * @param {array} productVariants
     * @param {int} userId
     * @param {int} appId
     * @param {function} callback
     *
     * @returns {void}
     */
    addVariantsToBasket: function (productVariants, userId, appId, callback) {
        appId = basket.data.id;
        
        if (basket.data.iframe === '1') {
            var command = {
                'cmd': 'addToBasket',
                'params': {
                    'variants': productVariants,
                    'user_id': userId,
                    'app_id': appId
                }
            };

            var strCommand = JSON.stringify(command);
            top.postMessage(strCommand, '*');

            if (typeof(callback) === 'function') {
                callback();
            }

        } else {
            for (var i = 0; i < productVariants.length; i++) {
                var variant = productVariants[i];

                var url = basket.data.ayBaseUrl + '/warenkorb/artikel-hinzufuegen/' +
                    variant.id + '/' + variant.quantity + '/' + appId + '.jsonp';

                if (variant.additional_data) {
                    url += '?additionalData=' + encodeURIComponent(JSON.stringify(variant.additional_data));
                }

                helper.loadScript(url, function () {
                    if (typeof(callback) === 'function') {
                        callback();
                    }
                });
            }
        }
    },

    /**
     * Fügt mehrere Varianten als Set zum Warenkorb hinzu.
     *
     * @param {array} items
     * @param {int} userId
     * @param {int} appId
     * @param {int} quantity
     * @param {array} additionalData
     * @param {function} callback
     *
     * @returns {undefined}
     */
    addSetToBasket: function (items, userId, appId, quantity, additionalData, callback) {
        if (basket.data.iframe === '1') {
            var set = {
                'items': items,
                'additional_data': additionalData,
                'quantity': quantity
            };

            var command = {
                'cmd': 'addSetToBasket',
                'params': {
                    'user_id': userId,
                    'app_id': appId,
                    'set': set
                }
            };

            var strCommand = JSON.stringify(command); // some older browsers don't support postMessage with objects
            top.postMessage(strCommand, '*');
        } else {
            if (!additionalData || !additionalData.image_url) {
                console.error('Image URL must be specified in additional data.');
            }


            var url = basket.data.ayBaseUrl;
            url += '/warenkorb/artikel-set-hinzufuegen.jsonp';
            url += '?appId=' + basket.data.id; // TODO: warum wird nicht die übergebene appId genutzt?
            url += '&set[quantity]=' + quantity;
            url += '&set[additional_data]=' + encodeURIComponent(JSON.stringify(additionalData));

            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                url += '&set[items][' + i + '][id]=' + item.id;

                var quantity = 1;

                if (item.quantity) {
                    quantity = item.quantity;
                }

                url += '&set[items][' + i + '][quantity]=' + quantity;

                if (item.additional_data) {
                    url += '&set[items][' + i + '][additional_data]=' + encodeURIComponent(JSON.stringify(item.additional_data));
                }
            }

            helper.loadScript(url, function () {
                if (typeof(callback) === 'function') {
                    callback();
                }
            });
        }
    },
    
    /**
     * Fügt ein Produkt zur Wishlist hinzu von About You.
     * 
     * @param {int} productId
     * @param {int} variantId
     * @param {function} callback     
     * 
     * @returns {undefined}
     */
    addToWishlist: function(productId, variantId, callback) {
        var url = basket.data.ayBaseUrl;
        url += '/wunschliste/artikel-hinzufuegen/';
        url += productId + '-' + variantId + '.jsonp';

        if (typeof(callback) === 'function') {
            window.ayWishlistCallback = callback;

            url += '?callback=ayWishlistCallback';
        }


        helper.loadScript(url, function () {});            
    }    
};
/**
 * Diese Javascript-Datei stellt ein Objekt zur Verfügung um das Aufbauen
 * einer App für AboutYou zu erleichtern und um Basisfunktionen einer
 * App bereitzustellen.
 *
 * Das entsprechende Objekt muss im Window registriert werden.
 *
 * [Public]
 * - Quickview öffnen
 * - Produkte in den Warenkorb legen
 *
 * [Private]
 * - Tracking initialisieren
 * - Header integrieren
 * -
 *
 * @author Florian Weigang <florian.weigang@project-collins.com>
 * @author Nils <nils.droege@aboutyou.de>
 *
 * @returns {void}
 */
(function (helper, tracking, basket) {
    'use strict';

    /**
     * Stellt den Init der AY-Objectes dar.
     *
     * - Object wird initialisiert
     * - Tracking wird eingeschaltet
     * - Header wird integriert.
     *
     * @type Object
     */
    var AYWrapper =
    {
        /**
         * Initialisiert das AY-Objekt.
         *
         * - Tracking
         * - Header
         * - PostMessages
         * - Objekt registrieren
         * - Optionene setzen
         *
         * @param {object} options
         *
         * @returns {void}
         */
        init: function (options) {
            this.options = options;
            AY.data = this.options;
            basket.data = options;

            // copy legacy callbacks
            if (window.collins && typeof window.collins.userLocaleCallbacks === 'object') {
                AY.userLocaleCallbacks = window.collins.userLocaleCallbacks;
            }

            this.initTracking();
            this.initHeader();
            this.initMessages();

            this.registerObject();
        },

        /**
         * Initialisiert das Tracking für die App, welche die Appjs verwedent.
         *
         * @returns {void}
         */
        initTracking: function () {
            // Tracking hochfahren
            if (this.options.trackingUrl && this.options.trackingUrl.length > 0) {
                tracking.registerTracking(this.options.id, this.options.trackingUrl);
            }

            if (this.options.gtm && this.options.gtm.length > 0) {
                tracking.registerGoogleAnalytics(this.options.gtm);
            }
        },

        /**
         * Integriert den Header in die aktuelle JS wenn er angezeigt werden
         * soll. Ist abhängig davon ob die App im iFrame geladen werden soll.
         *
         * @returns {void}
         */
        initHeader: function () {
            if (this.options.hideHeader === '0') {
                // Integrate Header
                HeaderView.integrateHeader();
            }
        },

        /**
         * PostMessages werden auf eine Funktion umgeleitet.
         *
         * @returns {void}
         */
        initMessages: function () {
            helper.addEvent(window, 'message', Events.handlePostMessages);
        },

        /**
         * Objekt wird zur Verfügung gestellt.
         *
         * @returns {void}
         */
        registerObject: function () {
            window.AY = AY;
            window.collins = AY;
        }
    };

    /**
     * Stellt das eigentliche Object für den Entwickler dar.
     *
     * - Öffnen des ProduktLayers
     * - Produkte zum Warenkorb hinzufügen.
     *
     * @type Object
     */
    var AY =
    {
        userLocaleCallbacks: [],
        locale: "de_DE",
        headerHeight: 51,

        /**
         * Ruft einen Endpoint auf um das Land des Users herauszufinden.
         *
         * @param {function} callback
         *
         * @returns {void}
         */
        getUserLocale: function (callback) {
            this.userLocaleCallbacks.push(callback);

            // workaround, if the jsonp endpoint is not available
            setTimeout(function () {
                AY.userLocaleReceived({"locale": "de_DE"});
            }, 1000);
            var url = AY.data.ayBaseUrl + '/land/get-locale.jsonp';

            helper.loadScript(url, function () {
            });
        },

        /**
         * Wird von dem jsonp von getUserLocale aufgerufen.
         *
         * @param {object} response
         *
         * @returns {void}
         */
        userLocaleReceived: function (response) {
            while (this.userLocaleCallbacks.length > 0) {
                this.locale = response.locale;
                (this.userLocaleCallbacks.pop())(response);
            }
        },

        /**
         * Gibt die Header-URL in Abhängigkeit des aktuellen Landes des Users.
         *
         * @param function callback
         *
         * @return {void}
         */
        getHeaderURL: function (callback) {

            if (AY.data.id === "111" && helper.isMobile()) {
                callback('http://m.aboutyou.de/external');

                return;
            }

            AY.getUserLocale(function (result) {
                var locale = result.locale;
                var app_id = AY.data.id;

                var url = '//app-ui.aboutyou.de/header/' + app_id + '/white?locale=' + locale;
                callback(url);
            });
        },

        /**
         * Gibt die Höhe des aktuellen Headers zurück.
         *
         * @returns {Number}
         */
        getHeaderHeight: function () {
            return (AY.data.hideHeader === '1') ? 0 : AY.headerHeight;
        },

        /**
         * Öffnet eine Quickview für eine App und ein Produkt.
         *
         *
         * @param {int} userId
         * @param {int} productId
         * @param {int} appId
         * @param {int} productVariantId
         * @param {function} closeCallBack
         * @param {string} host
         *
         * @returns {void}
         */
        openProductLayer: function (userId, productId, appId, productVariantId, closeCallBack) {
            appId = this.data.id;

            // Bei Mobilen Endgeräten auf eine Mobile-URL umgeleitet
            if (helper.isMobile()) {
                var redirectURL = encodeURIComponent(location.href);
                location.href = 'http://m.aboutyou.de/p/marke/product-' + productId + '?fromApp=' + redirectURL + '&appId=' + appId;

                return;
            }

            var locale = this.locale;
            var iframeUrl = this.data.quickviewUrl
                .replace('{appId}', appId)
                .replace('{productId}', productId)
                .replace('{userId}', userId)
                .replace('{productVariantId}', productVariantId)
                .replace('{locale}', locale);

            helper.openModal(iframeUrl, AY.getHeaderHeight());
        },

        /**
         * Öffnet die Nutzungsbedingungen im Modal.
         *
         * @returns {void}
         */
        openTermsLayer: function () {
            var url = this.data.dcBaseUrl
                + '/app/nutzungsbedingungen/'
                + this.data.id;

            helper.openModal(url, AY.getHeaderHeight());
        },

        /**
         * Öffnet das Impressum im Modal.
         *
         * @returns {void}
         */
        openLegalNoticeLayer: function () {
            var url = this.data.dcBaseUrl
                + '/app/impressum/'
                + this.data.id;

            helper.openModal(url, AY.getHeaderHeight());
        },

        /**
         * Öffnet den Datenschutz im Modal.
         *
         * @returns {void}
         */
        openPrivacyLayer: function () {
            var url = this.data.dcBaseUrl
                + '/app/datenschutz/'
                + this.data.id;

            helper.openModal(url, AY.getHeaderHeight());
        },

        /**
         * Schließt den ProductLayer.
         *
         * @returns {void}
         */
        closeProductLayer: function () {
            helper.closeModal();
        },

        /**
         * Schließt ein iFrame Modal
         *
         * @returns {void}
         */
        closeModal: function () {
            helper.closeModal();
        },

        /**
         * Gibt an ob der User sich in einem Mobilen-Context befindet.
         *
         * @returns {void}
         */
        isMobile: function () {
            return helper.isMobile();
        },

        /** @deprecated */
        initIframe: function () {
        },

        /**
         * Callback-Funktion
         *
         * @param {boolean} result
         *
         * @returns {undefined}
         */
        addedToBasket: function (result) {
            if (result) {
                HeaderView.reloadHeader();
            }
        },

        /**
         * Fügt eine ProduktVariante in den Warenkorb und ruft dannach die
         * Callback-Funktion auf. Nutzt intern die Funktion addVariantsToBasket.
         *
         * @param {int} productVariantId
         * @param {int} quantity
         * @param {int} userId
         * @param {int} appId
         * @param {array} additionalData
         * @param {function} callback
         *
         * @returns {void}
         */
        addToCart: function (productVariantId, quantity, userId, appId, additionalData, callback) {
            basket.addToCart(productVariantId, quantity, userId, appId, additionalData, callback);
        },

        /**
         * Fügt mehrere Produktvarianten zum Warenkorb hinzu.
         *
         * @param {array} productVariants
         * @param {int} userId
         * @param {int} appId
         * @param {function} callback
         *
         * @returns {void}
         */
        addVariantsToBasket: function (productVariants, userId, appId, callback) {
            basket.addVariantsToBasket(productVariants, userId, appId, callback);
        },

        /**
         * Fügt mehrere Varianten als Set zum Warenkorb hinzu.
         *
         * @param {array} items
         * @param {int} userId
         * @param {int} appId
         * @param {int} quantity
         * @param {array} additionalData
         * @param {function} callback
         *
         * @returns {undefined}
         */
        addSetToBasket: function (items, userId, appId, quantity, additionalData, callback) {
            basket.addSetToBasket(items, userId, appId, quantity, additionalData, callback);
        },

        /**
         * Fügt ein Produkt zur Wishlist hinzu von About You.
         *
         * @param {int} productId
         * @param {int} variantId
         * @param {function} callback
         *
         * @returns {undefined}
         */
        addToWishlist: function(productId, variantId, callback) {
            basket.addToWishlist(productId, variantId, callback);
        },

        /**
         * Fügt über eine URL und eine Höhenangabe einen Header ein.
         *
         * @param {string} url
         * @param {int} height
         *
         * @returns {void}
         */
        integrateHeader: function (url, height) {
            // Neue höhe setzen.
            AY.headerHeight = height;
            AY.data.hideHeader = '0';

            HeaderView.buildHeader(url);
        }
    };

    var Events =
    {
        handlePostMessages: function (event) {
            if (event.data === 'closeProductLayer' || event.data === 'closeModal') {
                AY.closeModal();
            } else if (event.data['maximize-iframe'] !== undefined) {
                var maximize = event.data['maximize-iframe'];

                if (maximize) {
                    document.getElementById('about-you-header-iframe').style.height = '600px';
                } else {
                    document.getElementById('about-you-header-iframe').style.height = AY.getHeaderHeight() + 'px';
                }
            } else if (event.data === 'reloadHeader') {
                HeaderView.reloadHeader();
            } else if (event.data === 'maximize-header') {
                var body = document.body,
                    html = document.documentElement;

                var height = Math.max(body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight);


                document.getElementById('about-you-header-iframe').style.height = height + 'px';

            } else if (event.data === 'minimize-header') {
                document.getElementById('about-you-header-iframe').style.height = AY.getHeaderHeight() + 'px';
            } else if (event.data === 'open-terms-layer') {
                AY.openTermsLayer();
            } else if (event.data === 'open-privacy-layer') {
                AY.openPrivacyLayer();
            } else if (event.data === 'open-imprint-layer') {
                AY.openLegalNoticeLayer();
            }
        }
    };

    var HeaderView =
    {
        integrateHeader: function () {
            AY.getHeaderURL(function (url) {
                HeaderView.buildHeader(url);
            });
        },

        buildHeader: function(url) {
            var header = document.getElementById('about-you-header');
            var iframe = document.getElementById('about-you-header-iframe');

            if (url.indexOf('?') > -1) {
                url = url + '&';
            }  else {
                url = url + '?';
            }
            url = url + 'appId='+AY.data.id;

            if (header && iframe) {
                // change header
                header.style.height = AY.getHeaderHeight() + 'px';

                // change iframe
                iframe.src = url;
                iframe.style.height = AY.getHeaderHeight() + 'px';

                // change document
                document.body.style.marginTop = AY.getHeaderHeight() + 'px';

            } else {
                var header = document.createElement('header');

                header.id = 'about-you-header';
                header.style.position = 'fixed';
                header.style.top = '0px';
                header.style.left = '0px';
                header.opacity = '0.2';
                header.style.marginTop = '0px';
                header.style.marginLeft = '0px';
                header.style.marginRight = '0px';
                header.style.marginBottom = '0px';
                header.style.paddingTop = '0px';
                header.style.paddingLeft = '0px';
                header.style.paddingRight = '0px';
                header.style.paddingBottom = '0px';
                header.style.width = '100%';
                header.style.zIndex = '9999';
                header.style.height = AY.getHeaderHeight()  + 'px';

                var iframe = document.createElement('iframe');

                iframe.src = url;
                iframe.allowtransparency = true;
                iframe.style.width = '100%';
                iframe.style.position = 'fixed';
                iframe.style.height = AY.getHeaderHeight()  + 'px';
                iframe.scrolling = 'no';
                iframe.border = '0';
                iframe.frameBorder = '0';
                iframe.id = 'about-you-header-iframe';
                iframe.style.marginTop = '0px';
                iframe.style.marginLeft = '0px';
                iframe.style.marginRight = '0px';
                iframe.style.marginBottom = '0px';
                iframe.style.paddingTop = '0px';
                iframe.style.paddingLeft = '0px';
                iframe.style.paddingRight = '0px';
                iframe.style.paddingBottom = '0px';

                header.appendChild(iframe);

                document.body.style.marginTop = AY.getHeaderHeight()  + 'px';
                document.body.appendChild(header);
            }
        },

        reloadHeader: function () {
            if (AY.data.hideHeader === "0") {
                var iframe = document.getElementById('about-you-header-iframe');

                iframe.src = iframe.src;
            }
        }
    };

    // Wrapper veröffentlichen
    window.AYWrapper = AYWrapper;

})(helper, tracking, basket);



})();