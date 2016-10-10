/**
 * Created by ghj on 16-10-10.
 */
"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Hero1' },
            { id: 2, name: 'Hero2' },
            { id: 3, name: 'Hero3' },
            { id: 4, name: 'Hero4' },
            { id: 5, name: 'Hero5' },
            { id: 6, name: 'Hero6' },
            { id: 7, name: 'Hero7' },
            { id: 8, name: 'Hero8' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map