'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('aboutYouApp'));

    var MainCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/products')
            .respond(productData);

        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of products to the scope', function () {
        $httpBackend.flush();
        expect(scope.products.length).toBe(25);
    });

});

// TEST DATA
var productData = [
    {
        "id": 1488985,
        "name": "Bauchweg-Jeans",
        "isSale": false,
        "isActive": true,
        "description": "Röhre. Zipperdetails. Eingrifftaschen. Leicht vertiefte Leibhöhe. 65% Baumwolle, 33% Polyester, 2% Elasthan. Waschbar. Ohne Gürtel.",
        "brand": {
            "id": 121,
            "name": "BEST CONNECTIONS"
        },
        "price": 4990,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/84a9debb7fee4923e4710e898b7aa19b?width=200&height=200",
            "imageSize": {
                "width": 720,
                "height": 960
            }
        }
    },
    {
        "id": 1488982,
        "name": "Rundhalspullover",
        "isSale": false,
        "isActive": true,
        "description": "Grobstrick. Trageangenehme, kuschelweiche Qualität. Figurumspielend. Länge ca. 56 cm. 75%Polyacryl, 25% Polyamid. Waschbar.",
        "brand": {
            "id": 121,
            "name": "BEST CONNECTIONS"
        },
        "price": 3990,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/5abf77a67693e51d45b49ddcb614d0bd?width=200&height=200",
            "imageSize": {
                "width": 720,
                "height": 960
            }
        }
    },
    {
        "id": 1488957,
        "name": "Druck-Cordleggings",
        "isSale": false,
        "isActive": true,
        "description": "Röhrenform. Gummizugbund. 98% Baumwolle, 2% Elasthan. Waschbar.",
        "brand": {
            "id": 121,
            "name": "BEST CONNECTIONS"
        },
        "price": 4990,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/5bb6aa1c8ca395800413e711f6b0b21a?width=200&height=200",
            "imageSize": {
                "width": 720,
                "height": 960
            }
        }
    },
    {
        "id": 1488954,
        "name": "Druck-Cordleggings",
        "isSale": false,
        "isActive": true,
        "description": "Röhrenform. Gummizugbund. 98% Baumwolle, 2% Elasthan. Waschbar.",
        "brand": {
            "id": 121,
            "name": "BEST CONNECTIONS"
        },
        "price": 4990,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/a76277f0d06caf7c16bc68132af7cad9?width=200&height=200",
            "imageSize": {
                "width": 720,
                "height": 960
            }
        }
    },
    {
        "id": 1488945,
        "name": "Arizona 5-Pocket-Jeans »Röhre mit niedriger Leibhöhe«",
        "isSale": false,
        "isActive": true,
        "description": "Style »Rock ´n´ Roll«: enge Röhrenform. 5 Taschen, die vorderen mit zweifarbiger Stickerei im Inka-Look und aufwendigem Nietenbesatz. Aus weichem Stretch-Denim.. Leibhöhe: niedrig. Bundabschluss: durchgesteppt. Beinabschluss: durchgesteppt. Passform: schmal. Schnittform Länge: lang.",
        "brand": {
            "id": 379,
            "name": "ARIZONA"
        },
        "price": 5999,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/4c1f297551f1c2e4010ee25bc305a87a?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1488889,
        "name": "Vivance Bügelfaltenhose",
        "isSale": false,
        "isActive": true,
        "description": "Mit gerader Beinform und genähten Bügelfalten vorn und hinten. Gürtelschlaufen, Eingrifftaschen, Paspeltasche hinten. Weiche Stoffqualität mit Stretch-Anteil. Innenbeinlänge bei Kurzgrößen ca. 72 cm, bei Normalgrößen ca. 77 cm.. Leibhöhe: komfortabel. Passform: normal.",
        "brand": {
            "id": 172,
            "name": "VIVANCE"
        },
        "price": 3999,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/cbdd685148833f597fe121b6d3aa931e?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1488878,
        "name": "Arizona Boyfriendjeans »\"Sexy Boyfriend\"«",
        "isSale": false,
        "isActive": true,
        "description": "Boyfriend-Schnitt mit knackigem Sitz. Im Destroyed-Look mit aufgesetzten Karo-Patches. Five-Pocket-Style, vorn mit Münztäschchen mit gesticktem ARIZONA-Label und zwei nietenverzierten Eingrifftaschen, hinten mit zwei aufgesetzten Taschen. Aus formstabilem Stretch-Denim. Produkttyp: Boyfriendjeans. Passform: Schmal. Bund + Verschluss: Knopf. Leibhöhe: Etwas niedriger. Pflegehinweise: Maschinenwäsche. Materialzusammensetzung: Obermaterial: 98% Baumwolle, 2% Elasthan.",
        "brand": {
            "id": 379,
            "name": "ARIZONA"
        },
        "price": 4999,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/727a9dde0cc3cc7d5a65e090785393cc?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1488423,
        "name": "G-Star Boyfriend-Jeans »Arc 3D«",
        "isSale": false,
        "isActive": true,
        "description": "Boyfriend-Style mit leicht verdrehtem 3D-Effekt. 5-Pocket-Form. Abnäher auf Kniehöhe. Used-Waschung mit Crinkle-Effekten. Elastische Denim-Qualität.. Leibhöhe: niedrig. Bundabschluss: durchgesteppt. Passform: normal. Verschluss: Knopf Reißverschluss.",
        "brand": {
            "id": 399,
            "name": "G-STAR RAW"
        },
        "price": 12995,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/38edda0aae413c431ccbf4e183f6027c?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1488394,
        "name": "Replay Jeans »Luz«",
        "isSale": false,
        "isActive": true,
        "description": "Jeans Luz  Diese Röhre von Replay sollte in keinem gut sortierten Kleiderschrank fehlen. Die hautenge Jeans passt sich dank des Stretch-Anteils und ihrer robusten Qualität perfekt an die Haut an. Mit engem Print-Shirt oder Longbluse, High Heels und interessanten Accessoires gelingen sexy Outfits wie von selbst. Die Luz von Replay ist ein Must-Have für jede moderne Frau.  Außenmaterial: 91% Baumwolle, 8% Elastomultiester, 1% Elasthan",
        "brand": {
            "id": 48,
            "name": "REPLAY"
        },
        "price": 11900,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/6ffc8ccf530c337c25097c6234211144?width=200&height=200",
            "imageSize": {
                "width": 738,
                "height": 960
            }
        }
    },
    {
        "id": 1487691,
        "name": "Replay Jeans »Luz Hyperflex«",
        "isSale": false,
        "isActive": true,
        "description": "Jeans Luz Hyperflex  Diese Röhre von Replay sollte in keinem gut sortierten Kleiderschrank fehlen. Die hautenge Jeans passt sich dank des Stretch-Anteils und ihrer robusten Qualität perfekt an die Haut an. Mit engem Print-Shirt oder Longbluse, High Heels und interessanten Accessoires gelingen sexy Outfits wie von selbst. Die Luz von Replay ist ein Must-Have für jede moderne Frau.  Außenmaterial: 87% Baumwolle, 9% Polyester, 4% Elasthan",
        "brand": {
            "id": 48,
            "name": "REPLAY"
        },
        "price": 15900,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/aeee156e909204b97fa8108db6adb17d?width=200&height=200",
            "imageSize": {
                "width": 738,
                "height": 960
            }
        }
    },
    {
        "id": 1487662,
        "name": "G-Star Röhrenjeans »3301 Low Super Skinny«",
        "isSale": false,
        "isActive": true,
        "description": "Nietenverzierter 5-Pocket-Style. Waschung im Used-Look. Leicht vorverlegte Seitennaht. Elastische Denim-Qualität.. Leibhöhe: niedrig. Bundabschluss: durchgesteppt. Beinabschluss: gerader Abschluss. Passform: eng. Verschluss: Knopf Reißverschluss.",
        "brand": {
            "id": 399,
            "name": "G-STAR RAW"
        },
        "price": 9995,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/bc5cd39bad52d768fb5dd569552c8b97?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1487566,
        "name": "Replay Jeans »Alanies Hyperflex«",
        "isSale": false,
        "isActive": true,
        "description": "Jeans Alanies Hyperflex  Diese Röhre von Replay sollte in keinem gut sortierten Kleiderschrank fehlen. Die schmal geschnittene Jeans passt sich dank des Stretch-Anteils und ihrer robusten Qualität perfekt an die Haut an. Mit dem Reißverschluss an der Münztasche und der Naht in den Kniekehlen ist sie ein Must-Have für jede moderne Frau. Mit engem Print-Shirt oder Longbluse, High Heels und interessanten Accessoires gelingen sexy Outfits wie von selbst. Die Alanies von Replay!  Außenmaterial: 87% Baumwolle, 9% Polyester, 4% Elasthan",
        "brand": {
            "id": 48,
            "name": "REPLAY"
        },
        "price": 15900,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/cc8f3e0623317ccd2fac27992fa544f4?width=200&height=200",
            "imageSize": {
                "width": 738,
                "height": 960
            }
        }
    },
    {
        "id": 1487528,
        "name": "Replay Jeans »Anbass Hyperflex«",
        "isSale": false,
        "isActive": true,
        "description": "Jeans Anbass Hyperflex  Die Anbass Jeans von Replay ist eine klassische Slim Fit Jeans mit engem Bein. Die coole Waschung verschönert die Optik. Dazu kommen die Backpockets mit schön geschwungenen Ziernähten und dezent aufgerauten Stellen. Die jahrzehntelange Jeans-Erfahrung ist Replay mal wieder positiv anzumerken.  Außenmaterial: 87% Baumwolle, 9% Polyester, 4% Elasthan",
        "brand": {
            "id": 48,
            "name": "REPLAY"
        },
        "price": 15900,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/a29a63324d884e403fcd2f78469d48eb?width=200&height=200",
            "imageSize": {
                "width": 738,
                "height": 960
            }
        }
    },
    {
        "id": 1487506,
        "name": "Replay Jeans »Vicki Hyperflex«",
        "isSale": false,
        "isActive": true,
        "description": "Jeans Vicki Hyperflex  Oh Vicki, du hast echtes Potenzial! Ein Leben lang sind wir auf der Suche nach einer Jeans, die zeitlos ist und uns durch gute und schlechte Zeiten begleitet, in die Uni und auf die After-Work-Party. Ein Lieblingsstück, das wir unendlich kombinieren können und das wir uns am liebsten in allen Farben und Formen kaufen würden. Mit der schmal geschnittenen Jeans könnte Replay unserer schier endlosen Suche ein Ende gesetzt haben. Ein Must-Have in jedem Kleiderschrank - die Vicki von Replay!  Außenmaterial: 87% Baumwolle, 9% Polyester, 4% Elasthan",
        "brand": {
            "id": 48,
            "name": "REPLAY"
        },
        "price": 15900,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/1094298bb7d341e2f5b1a60c60166d4c?width=200&height=200",
            "imageSize": {
                "width": 738,
                "height": 960
            }
        }
    },
    {
        "id": 1487505,
        "name": "Replay Jeans »Vicki Hyperflex«",
        "isSale": false,
        "isActive": true,
        "description": "Jeans Vicki Hyperflex  Oh Vicki, du hast echtes Potenzial! Ein Leben lang sind wir auf der Suche nach einer Jeans, die zeitlos ist und uns durch gute und schlechte Zeiten begleitet, in die Uni und auf die After-Work-Party. Ein Lieblingsstück, das wir unendlich kombinieren können und das wir uns am liebsten in allen Farben und Formen kaufen würden. Mit der schmal geschnittenen Jeans könnte Replay unserer schier endlosen Suche ein Ende gesetzt haben. Ein Must-Have in jedem Kleiderschrank - die Vicki von Replay!  Außenmaterial: 87% Baumwolle, 9% Polyester, 4% Elasthan",
        "brand": {
            "id": 48,
            "name": "REPLAY"
        },
        "price": 15900,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/d06ff937b9870ade0319d28e54ce98e6?width=200&height=200",
            "imageSize": {
                "width": 738,
                "height": 960
            }
        }
    },
    {
        "id": 1487373,
        "name": "Entlastungs-BH, Nuance",
        "isSale": false,
        "isActive": true,
        "description": "Tolle Mix & Match-Serie von NUANCE. Schöne Basics in hautsympathischer Baumwolle. Alles miteinander kombinierbar. Jeweils in 3 Farben. Bei allen BHs sind Träger und Rückenverschluss verstellbar. Ohne Bügel. Extrabreite entlastende Träger für einen hohen Tragekomfort. Netzeinsatz am Dekolleté. Hoch geschnittenes Rückenteil für einen angenehmen Halt. 90% Baumwolle, 5% Polyamid, 5% Elasthan. BHs sind nicht trocknergeeignet, da die Versteller und Ringe durch die Hitze beschädigt werden und brechen.",
        "brand": {
            "id": 263,
            "name": "NUANCE"
        },
        "price": 1999,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/82ba97a1aa2e272733ed3dc8c804d1dc?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1487286,
        "name": "Schalen-BH, Petite Fleur (2 Stck.)",
        "isSale": false,
        "isActive": true,
        "description": "BH mit Bügel. Schöne Wäsche-Serie von PETITE FLEUR. Süße Allover-Prints mit kleinen Schmetterlingen und zauberhaften Details – echte Hingucker zum Mixen! Träger und Rückenverschluss verstellbar. Im 2er-Pack. Aus 60% Baumwolle, 35% Polyester, 5% Elasthan. BHs sind nicht trocknergeeignet, da die Versteller und Ringe durch die Hitze beschädigt werden und brechen.",
        "brand": {
            "id": 522,
            "name": "PETITE FLEUR"
        },
        "price": 2699,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/70ce00157754d81d924688bbff35449e?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1487230,
        "name": "Liebeskind Gürtel »LKB24«",
        "isSale": false,
        "isActive": true,
        "description": "Breite Form, ganz mit matt glänzenden Ziernieten in unterschiedlicher Farbe besetzt. Mit matt glänzender Schließe. Robuste Lederqualität. Produkttyp: Gürtel. Verschlussart: Einfachdornschließe. Materialzusammensetzung: Obermaterial: 100% Leder.",
        "brand": {
            "id": 5500,
            "name": "Liebeskind Berlin"
        },
        "price": 5990,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/85bb1d6ddbece04ea2f4c764ace98dab?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1487229,
        "name": "Liebeskind Gürtel »LKB24«",
        "isSale": false,
        "isActive": true,
        "description": "Breite Form, ganz mit matt glänzenden Ziernieten in unterschiedlicher Farbe besetzt. Mit matt glänzender Schließe. Robuste Lederqualität. Produkttyp: Gürtel. Verschlussart: Einfachdornschließe. Materialzusammensetzung: Obermaterial: 100% Leder.",
        "brand": {
            "id": 5500,
            "name": "Liebeskind Berlin"
        },
        "price": 5990,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/725a5f106051d830f996775fa7e66244?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1487228,
        "name": "Liebeskind Gürtel »LKB24«",
        "isSale": false,
        "isActive": true,
        "description": "Breite Form, ganz mit matt glänzenden Ziernieten in unterschiedlicher Farbe besetzt. Mit matt glänzender Schließe. Robuste Lederqualität. Produkttyp: Gürtel. Verschlussart: Einfachdornschließe. Materialzusammensetzung: Obermaterial: 100% Leder.",
        "brand": {
            "id": 5500,
            "name": "Liebeskind Berlin"
        },
        "price": 5990,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/1ec95218495e99a11be6eb68a2eafcff?width=200&height=200",
            "imageSize": {
                "width": 672,
                "height": 960
            }
        }
    },
    {
        "id": 1486488,
        "name": "Jack Wolfskin Travel Accessories Mini Waschsalon Kulturtasche 26 cm",
        "isSale": false,
        "isActive": true,
        "description": "",
        "brand": {
            "id": 209,
            "name": "JACK WOLFSKIN"
        },
        "price": 1895,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/160ce4f4d567a79ae84e508d06f7d181?width=200&height=200",
            "imageSize": {
                "width": 1500,
                "height": 1500
            }
        }
    },
    {
        "id": 1486485,
        "name": "Jack Wolfskin Travel Accessories Mini Waschsalon Kulturtasche 26 cm",
        "isSale": false,
        "isActive": true,
        "description": "",
        "brand": {
            "id": 209,
            "name": "JACK WOLFSKIN"
        },
        "price": 1895,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/1f865e18c2823aa3dfd0ee6a80215e90?width=200&height=200",
            "imageSize": {
                "width": 1500,
                "height": 1500
            }
        }
    },
    {
        "id": 1486460,
        "name": "Jack Wolfskin Travel Accessories Coin & Credit Geldbörse 12 cm",
        "isSale": false,
        "isActive": true,
        "description": "",
        "brand": {
            "id": 209,
            "name": "JACK WOLFSKIN"
        },
        "price": 1695,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/fdffd29c68fa0d94b4b026cac0d456bf?width=200&height=200",
            "imageSize": {
                "width": 1500,
                "height": 1500
            }
        }
    },
    {
        "id": 1486372,
        "name": "Jack Wolfskin Packs Great Escape Rucksack 58 cm",
        "isSale": true,
        "isActive": true,
        "description": "",
        "brand": {
            "id": 209,
            "name": "JACK WOLFSKIN"
        },
        "price": 6995,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/ab78077b1e16f953fbc0a7197161aaaf?width=200&height=200",
            "imageSize": {
                "width": 1500,
                "height": 1500
            }
        }
    },
    {
        "id": 1485788,
        "name": "Quiksilver Hoodie mit Reißverschluss »KADAM ZIP«",
        "isSale": false,
        "isActive": true,
        "description": "Kadam Zip - QUIKSILVER Hoodie mit Reißverschluss für Männer Dieses Quiksilver Sweatshirt für Herren aus einem Baumwollpolyester-Gemisch und einem mittelschweren Material ist die perfekte Ergänzung zur Bekleidungskollektion für den Winter 2014. Außerdem präsentiert es sich in einem weichen, gebürsteten Material im Vintage-Look.  Merkmale: Hoodie mit Reißverschluss Gemisch aus Baumwolle und Polyester Mittelschweres Material Weiches, gebürstetes Material Vintage-Look  Dieses Produkt besteht aus: 80 % Baumwolle, 20 % Polyester",
        "brand": {
            "id": 195,
            "name": "QUIKSILVER"
        },
        "price": 9500,
        "defaultImage": {
            "url": "http://cdn.aboutyou.de/file/97ad68c9268ed5207229c4e04a7b16c8?width=200&height=200",
            "imageSize": {
                "width": 720,
                "height": 960
            }
        }
    }
];