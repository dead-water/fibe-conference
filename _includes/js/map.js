window.conference.map = (() => {
    let config;
    let lang;

    let map;

    const setup = (elId) => {
        map = L.map(elId).setView(52.20784, 0.11827, zoom = config.default_zoom);

        L.tileLayer.provider(config.map_provider).addTo(map);

        L.easyButton('far fa-star', () => {
            map.flyTo(config.home_coord, config.default_zoom);
        }, lang.focus_conf).addTo(map);

        L.control.locate({
            flyTo: true,
            strings: {
                title: lang.focus_me
            }
        }).addTo(map);
    };

    const init = (c, l) => {
        config = c;
        lang = l;

        const elId = 'map';

        if (document.getElementById(elId)) {
            setup(elId);
        }
    };

    const getMap = () => {
        return map
    };

    return {
        init: init,
        getMap: getMap
    };
})();
