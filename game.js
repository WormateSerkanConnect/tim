var _0xb81a41 = _0x1792;
(function(_0x5ef26a, _0x226a69) {
    var _0x14f9d5 = _0x1792
      , _0x3313e9 = _0x5ef26a();
    while (!![]) {
        try {
            var _0x1ea830 = parseInt(_0x14f9d5(0x2a5)) / 0x1 * (-parseInt(_0x14f9d5(0x1f9)) / 0x2) + -parseInt(_0x14f9d5(0x662)) / 0x3 * (parseInt(_0x14f9d5(0x493)) / 0x4) + parseInt(_0x14f9d5(0x2b6)) / 0x5 + parseInt(_0x14f9d5(0x138)) / 0x6 + -parseInt(_0x14f9d5(0x419)) / 0x7 * (parseInt(_0x14f9d5(0x630)) / 0x8) + parseInt(_0x14f9d5(0x1e0)) / 0x9 + parseInt(_0x14f9d5(0x724)) / 0xa;
            if (_0x1ea830 === _0x226a69)
                break;
            else
                _0x3313e9['push'](_0x3313e9['shift']());
        } catch (_0x3ce8f7) {
            _0x3313e9['push'](_0x3313e9['shift']());
        }
    }
}(_0x5c34, 0x5ca22));
var GoogleAuth, zE;
window[_0xb81a41(0x2f7)] = {
    'settings': {
        'lineWidth': 0.15,
        'lineColor': 0xff0000,
        'lineAlpha': 0.3,
        'backgroundColor': 0x0,
        'backgroundAlpha': 0.6,
        'sectorTextStyle': {
            'fontFamily': _0xb81a41(0x277),
            'fontSize': 0xe,
            'fill': 0xffffff
        },
        'quarterTextStyle': {
            'fontFamily': _0xb81a41(0x277),
            'fontSize': 0x14,
            'fill': 0xffffff
        },
        'showLines': !![]
    },
    'state': {
        'container': null,
        'graphics': null,
        'isActive': ![],
        'currentMode': null,
        'texts': [],
        'initialized': ![],
        'renderContainer': null,
        'restored': ![]
    },
    'findRenderContainer': function() {
        var _0x4203cf = _0xb81a41;
        if (this[_0x4203cf(0x30c)][_0x4203cf(0x1da)])
            return this[_0x4203cf(0x30c)][_0x4203cf(0x1da)];
        if (window[_0x4203cf(0x39a)]?.[_0x4203cf(0x3bd)])
            return this['state'][_0x4203cf(0x1da)] = window[_0x4203cf(0x39a)][_0x4203cf(0x3bd)],
            this[_0x4203cf(0x30c)][_0x4203cf(0x1da)];
        if (window[_0x4203cf(0x326)]?.['Mh']?.['Lh']?.['Wf'])
            return this[_0x4203cf(0x30c)][_0x4203cf(0x1da)] = window[_0x4203cf(0x326)]['Mh']['Lh']['Wf'],
            this['state'][_0x4203cf(0x1da)];
        const _0x5b3fc8 = (_0x5020b2, _0x32ec12=new Set(), _0x105392=0x0) => {
            var _0x1d6bb0 = _0x4203cf;
            if (!_0x5020b2 || typeof _0x5020b2 !== _0x1d6bb0(0x1c5) || _0x105392 > 0x3 || _0x32ec12[_0x1d6bb0(0x37a)](_0x5020b2))
                return null;
            _0x32ec12[_0x1d6bb0(0x1c7)](_0x5020b2);
            if (_0x5020b2['Wf']instanceof PIXI[_0x1d6bb0(0x136)])
                return this[_0x1d6bb0(0x30c)][_0x1d6bb0(0x1da)] = _0x5020b2['Wf'],
                _0x5020b2['Wf'];
            for (let _0x4af39f in _0x5020b2) {
                if (_0x4af39f !== 'parent' && _0x4af39f !== _0x1d6bb0(0x567) && _0x5020b2[_0x4af39f] && typeof _0x5020b2[_0x4af39f] === 'object') {
                    const _0x29eab4 = _0x5b3fc8(_0x5020b2[_0x4af39f], _0x32ec12, _0x105392 + 0x1);
                    if (_0x29eab4)
                        return _0x29eab4;
                }
            }
            return null;
        }
        ;
        return _0x5b3fc8(window['ooo']);
    },
    'cachedRadius': 0x0,
    'lastRadiusTime': 0x0,
    'getRadius': function() {
        var _0x5738a8 = _0xb81a41;
        const _0x5ac761 = Date[_0x5738a8(0x4f5)]();
        return _0x5ac761 - this['lastRadiusTime'] > 0x3e8 && (this[_0x5738a8(0x2f4)] = window['ooo']?.['Mh']?.['Qh']?.['gh'] || window[_0x5738a8(0x326)]?.['Mh']?.['Lh']?.['Qh']?.['gh'] || 0x1f4,
        this[_0x5738a8(0x674)] = _0x5ac761),
        this[_0x5738a8(0x2f4)];
    },
    'clearTexts': function() {
        var _0xa45d5b = _0xb81a41;
        this['state']['texts'][_0xa45d5b(0x58d)](_0x4da114 => {
            var _0x4ef933 = _0xa45d5b;
            _0x4da114 && _0x4da114[_0x4ef933(0x3bd)] && _0x4da114[_0x4ef933(0x3bd)]['removeChild'](_0x4da114);
        }
        ),
        this['state'][_0xa45d5b(0x682)] = [];
    },
    'initDrawing': function(_0x1a888d) {
        var _0x3ca435 = _0xb81a41;
        return this[_0x3ca435(0x5ef)](),
        this[_0x3ca435(0x30c)][_0x3ca435(0x28e)]['clear'](),
        this[_0x3ca435(0x30c)]['graphics'][_0x3ca435(0x33d)](this[_0x3ca435(0x3e6)][_0x3ca435(0x38b)], this['settings'][_0x3ca435(0x516)], this[_0x3ca435(0x3e6)][_0x3ca435(0x6b7)]),
        this[_0x3ca435(0x30c)]['graphics']['beginFill'](this[_0x3ca435(0x3e6)][_0x3ca435(0x1d7)], this[_0x3ca435(0x3e6)][_0x3ca435(0x5fa)]),
        this['state']['graphics'][_0x3ca435(0x497)](0x0, 0x0, _0x1a888d),
        this[_0x3ca435(0x30c)]['graphics'][_0x3ca435(0x303)](),
        _0x1a888d;
    },
    'drawSectors': function() {
        var _0x236646 = _0xb81a41;
        const _0x112a08 = this[_0x236646(0x444)](this[_0x236646(0x644)]())
          , _0x422f7e = _0x112a08 / 0x3;
        if (this[_0x236646(0x3e6)][_0x236646(0x349)]) {
            for (let _0x17b400 = 0x1; _0x17b400 < 0x3; _0x17b400++) {
                this[_0x236646(0x30c)]['graphics'][_0x236646(0x497)](0x0, 0x0, _0x112a08 - _0x17b400 * _0x422f7e);
            }
            for (let _0x592dbf = 0x0; _0x592dbf < 0x4; _0x592dbf++) {
                const _0x577b2d = _0x592dbf * Math['PI'] / 0x2;
                this['state'][_0x236646(0x28e)][_0x236646(0x3a4)](0x0, 0x0),
                this[_0x236646(0x30c)][_0x236646(0x28e)][_0x236646(0x202)](Math['cos'](_0x577b2d) * _0x112a08, Math['sin'](_0x577b2d) * _0x112a08);
            }
        }
        for (let _0x78e4df = 0x0; _0x78e4df < 0x4; _0x78e4df++) {
            const _0x386bd4 = _0x78e4df * Math['PI'] / 0x2;
            for (let _0x52ea4a = 0x0; _0x52ea4a < 0x3; _0x52ea4a++) {
                const _0x4a4f67 = _0x112a08 - (_0x52ea4a * _0x422f7e + _0x422f7e / 0x2)
                  , _0x18ef18 = _0x386bd4 + Math['PI'] / 0x4
                  , _0x436a9e = ['S', 'D', 'F'][_0x52ea4a] + (_0x78e4df + 0x1)
                  , _0x1fe349 = new PIXI[(_0x236646(0x787))](_0x436a9e,this[_0x236646(0x3e6)][_0x236646(0x485)]);
                _0x1fe349[_0x236646(0x31d)][_0x236646(0x170)](0.5),
                _0x1fe349[_0x236646(0x722)][_0x236646(0x170)](Math[_0x236646(0x4d0)](_0x18ef18) * _0x4a4f67, Math[_0x236646(0x15b)](_0x18ef18) * _0x4a4f67),
                this[_0x236646(0x30c)][_0x236646(0x44b)][_0x236646(0x175)](_0x1fe349),
                this['state'][_0x236646(0x682)]['push'](_0x1fe349);
            }
        }
    },
    'drawQuarters': function() {
        var _0x26a75d = _0xb81a41;
        const _0x67bcb7 = this[_0x26a75d(0x444)](this[_0x26a75d(0x644)]());
        this['settings']['showLines'] && (this[_0x26a75d(0x30c)][_0x26a75d(0x28e)]['moveTo'](-_0x67bcb7, 0x0),
        this[_0x26a75d(0x30c)]['graphics'][_0x26a75d(0x202)](_0x67bcb7, 0x0),
        this[_0x26a75d(0x30c)][_0x26a75d(0x28e)][_0x26a75d(0x3a4)](0x0, -_0x67bcb7),
        this[_0x26a75d(0x30c)][_0x26a75d(0x28e)]['lineTo'](0x0, _0x67bcb7)),
        [{
            'n': _0x26a75d(0x638),
            'x': 0x1,
            'y': -0x1
        }, {
            'n': _0x26a75d(0x5fe),
            'x': -0x1,
            'y': -0x1
        }, {
            'n': 'WX\x203',
            'x': -0x1,
            'y': 0x1
        }, {
            'n': _0x26a75d(0x153),
            'x': 0x1,
            'y': 0x1
        }]['forEach'](_0x2c38af => {
            var _0x2932e9 = _0x26a75d;
            const _0x62e1ad = new PIXI[(_0x2932e9(0x787))](_0x2c38af['n'],this[_0x2932e9(0x3e6)][_0x2932e9(0x3d4)]);
            _0x62e1ad[_0x2932e9(0x31d)][_0x2932e9(0x170)](0.5),
            _0x62e1ad['position'][_0x2932e9(0x170)](_0x2c38af['x'] * _0x67bcb7 / 0x3, _0x2c38af['y'] * _0x67bcb7 / 0x3),
            this['state'][_0x2932e9(0x44b)][_0x2932e9(0x175)](_0x62e1ad),
            this[_0x2932e9(0x30c)][_0x2932e9(0x682)][_0x2932e9(0x1bc)](_0x62e1ad);
        }
        );
    },
    'initGraphics': function() {
        var _0x31c299 = _0xb81a41;
        if (this[_0x31c299(0x30c)][_0x31c299(0x675)])
            return !![];
        const _0xf7308b = this[_0x31c299(0x32b)]();
        if (!_0xf7308b)
            return ![];
        return this[_0x31c299(0x30c)]['container'] = new PIXI['Container'](),
        this[_0x31c299(0x30c)]['graphics'] = new PIXI[(_0x31c299(0x4ef))](),
        this[_0x31c299(0x30c)][_0x31c299(0x44b)][_0x31c299(0x175)](this[_0x31c299(0x30c)]['graphics']),
        _0xf7308b[_0x31c299(0x175)](this[_0x31c299(0x30c)][_0x31c299(0x44b)]),
        this[_0x31c299(0x30c)]['container'][_0x31c299(0x2f2)] = 0xa,
        this['state']['container']['visible'] = ![],
        this[_0x31c299(0x30c)][_0x31c299(0x675)] = !![],
        !![];
    },
    'toggleMode': function(_0x44f89e) {
        var _0x29a446 = _0xb81a41;
        if (!this[_0x29a446(0x433)]())
            return;
        if (this[_0x29a446(0x30c)]['isActive'] && this['state'][_0x29a446(0x744)] === _0x44f89e) {
            this['state'][_0x29a446(0x44b)][_0x29a446(0x5b6)] = ![],
            this[_0x29a446(0x30c)][_0x29a446(0x319)] = ![],
            this[_0x29a446(0x30c)][_0x29a446(0x744)] = null;
            document[_0x29a446(0x374)]('sector_system_toggle') && (document[_0x29a446(0x374)](_0x29a446(0x1f6))[_0x29a446(0x586)] = ![]);
            this[_0x29a446(0x165)]();
            return;
        }
        this[_0x29a446(0x30c)][_0x29a446(0x319)] = !![],
        this[_0x29a446(0x30c)][_0x29a446(0x744)] = _0x44f89e,
        this[_0x29a446(0x30c)][_0x29a446(0x44b)][_0x29a446(0x5b6)] = !![],
        document[_0x29a446(0x374)]('sector_system_toggle') && (document['getElementById'](_0x29a446(0x1f6))['checked'] = !![]),
        _0x44f89e === _0x29a446(0x3c2) ? this[_0x29a446(0x5a6)]() : this[_0x29a446(0x2b7)](),
        this[_0x29a446(0x165)]();
    },
    'setupKeyboardEvents': function() {
        var _0xc7d2dd = _0xb81a41;
        const _0x4edc3c = {
            0x53: () => this[_0xc7d2dd(0x5d3)](_0xc7d2dd(0x3c2)),
            0xbb: () => this[_0xc7d2dd(0x5d3)]('sectors'),
            0x3d: () => this[_0xc7d2dd(0x5d3)](_0xc7d2dd(0x3c2)),
            0x58: () => this[_0xc7d2dd(0x5d3)](_0xc7d2dd(0x652))
        };
        document[_0xc7d2dd(0x57a)](_0xc7d2dd(0x69d), _0x33e6f7 => {
            var _0x4e59c6 = _0xc7d2dd;
            const _0x42fa62 = _0x33e6f7[_0x4e59c6(0x36c)] || _0x33e6f7['which'];
            _0x4edc3c[_0x42fa62] && (_0x4edc3c[_0x42fa62](),
            typeof this[_0x4e59c6(0x29f)] === 'function' && this[_0x4e59c6(0x29f)]());
        }
        );
    },
    'saveSettings': function() {
        var _0x4535c7 = _0xb81a41;
        try {
            localStorage['setItem'](_0x4535c7(0x4ea), JSON[_0x4535c7(0x608)](this[_0x4535c7(0x3e6)])),
            localStorage[_0x4535c7(0x128)](_0x4535c7(0x387), this[_0x4535c7(0x30c)]['isActive'] ? '1' : '0'),
            this[_0x4535c7(0x30c)][_0x4535c7(0x744)] && localStorage[_0x4535c7(0x128)](_0x4535c7(0x2e4), this[_0x4535c7(0x30c)][_0x4535c7(0x744)]),
            console[_0x4535c7(0x680)](_0x4535c7(0x4e8), {
                'active': this[_0x4535c7(0x30c)][_0x4535c7(0x319)],
                'mode': this[_0x4535c7(0x30c)][_0x4535c7(0x744)]
            });
        } catch (_0x1ca3ae) {
            console[_0x4535c7(0x6e5)](_0x4535c7(0x147), _0x1ca3ae);
        }
    },
    'loadSettings': function() {
        var _0x47e57a = _0xb81a41;
        try {
            const _0x34b598 = JSON[_0x47e57a(0x75f)](localStorage[_0x47e57a(0x325)](_0x47e57a(0x4ea)));
            _0x34b598 && (this[_0x47e57a(0x3e6)] = {
                ...this[_0x47e57a(0x3e6)],
                ..._0x34b598
            });
            const _0x398b2f = localStorage[_0x47e57a(0x325)]('sectorSystemActive') === '1';
            let _0x1422cb = localStorage['getItem'](_0x47e57a(0x2e4));
            !_0x1422cb && (_0x1422cb = 'sectors'),
            this[_0x47e57a(0x1fd)] = {
                'isActive': _0x398b2f,
                'currentMode': _0x1422cb
            };
        } catch (_0x1a3e8e) {
            console[_0x47e57a(0x6e5)](_0x47e57a(0x1ca), _0x1a3e8e);
        }
    },
    'applySettings': function() {
        var _0x367576 = _0xb81a41;
        this[_0x367576(0x30c)]['isActive'] && this[_0x367576(0x30c)][_0x367576(0x744)] && (this[_0x367576(0x30c)][_0x367576(0x744)] === _0x367576(0x3c2) ? this[_0x367576(0x5a6)]() : this['drawQuarters']());
    },
    'init': function() {
        var _0x5602af = _0xb81a41;
        if (typeof PIXI === _0x5602af(0x3fa)) {
            setTimeout( () => this[_0x5602af(0x1a0)](), 0x3e8);
            return;
        }
        this[_0x5602af(0x24e)]();
        const _0x519031 = this[_0x5602af(0x433)]();
        this[_0x5602af(0x301)]();
        if (!_0x519031) {
            setTimeout( () => this[_0x5602af(0x1a0)](), 0x3e8);
            return;
        }
        setTimeout( () => {
            var _0x30adbe = _0x5602af;
            this[_0x30adbe(0x1fd)] && this[_0x30adbe(0x1fd)][_0x30adbe(0x319)] && (this[_0x30adbe(0x30c)]['isActive'] = !![],
            this['state'][_0x30adbe(0x744)] = this[_0x30adbe(0x1fd)][_0x30adbe(0x744)],
            this[_0x30adbe(0x30c)][_0x30adbe(0x44b)]['visible'] = !![],
            this[_0x30adbe(0x30c)][_0x30adbe(0x744)] === 'sectors' ? this[_0x30adbe(0x5a6)]() : this[_0x30adbe(0x2b7)](),
            document[_0x30adbe(0x374)](_0x30adbe(0x1f6)) && (document['getElementById'](_0x30adbe(0x1f6))[_0x30adbe(0x586)] = !![]),
            this[_0x30adbe(0x30c)][_0x30adbe(0x238)] = !![],
            $('#sector_system_toggle')['length'] > 0x0 && this['initUserInterface']());
        }
        , 0x3e8);
    },
    'initUserInterface': function() {
        var _0x34e70c = _0xb81a41;
        function _0x191c2f(_0x11f06e) {
            var _0x10021f = _0x1792;
            return '#' + _0x11f06e[_0x10021f(0x132)](0x10)[_0x10021f(0x354)](0x6, '0');
        }
        function _0x3a04fb(_0x39eb0b) {
            var _0x3caf86 = _0x1792;
            return parseInt(_0x39eb0b[_0x3caf86(0x390)]('#', ''), 0x10);
        }
        !this['state']['restored'] && this[_0x34e70c(0x1fd)] && this['savedState'][_0x34e70c(0x319)] && (console[_0x34e70c(0x680)](_0x34e70c(0x393)),
        this['toggleMode'](this[_0x34e70c(0x1fd)][_0x34e70c(0x744)] || _0x34e70c(0x3c2)),
        this['state'][_0x34e70c(0x238)] = !![]);
        const _0x4f06bc = () => {
            var _0x36e656 = _0x34e70c;
            $(_0x36e656(0x35e))[_0x36e656(0x1d4)](_0x36e656(0x586), this[_0x36e656(0x30c)]['isActive']),
            $(_0x36e656(0x120))[_0x36e656(0x410)](this[_0x36e656(0x30c)][_0x36e656(0x744)] || 'sectors'),
            $(_0x36e656(0x5dd))[_0x36e656(0x410)](_0x191c2f(this[_0x36e656(0x3e6)]['backgroundColor'])),
            $(_0x36e656(0x336))['val'](_0x191c2f(this[_0x36e656(0x3e6)][_0x36e656(0x516)])),
            $(_0x36e656(0x5c5))['val'](this[_0x36e656(0x3e6)]['backgroundAlpha'] * 0x64),
            $(_0x36e656(0x4cc))[_0x36e656(0x159)](Math[_0x36e656(0x481)](this['settings'][_0x36e656(0x5fa)] * 0x64) + '%'),
            $('#sector_line_opacity')[_0x36e656(0x410)](this[_0x36e656(0x3e6)][_0x36e656(0x6b7)] * 0x64),
            $(_0x36e656(0x632))[_0x36e656(0x159)](Math[_0x36e656(0x481)](this[_0x36e656(0x3e6)][_0x36e656(0x6b7)] * 0x64) + '%'),
            $(_0x36e656(0x72b))[_0x36e656(0x1d4)](_0x36e656(0x586), this[_0x36e656(0x3e6)]['showLines']),
            !this[_0x36e656(0x3e6)][_0x36e656(0x349)] ? $('#sector_lines_options')['slideUp'](0xc8) : $(_0x36e656(0x462))[_0x36e656(0x716)](0xc8),
            this[_0x36e656(0x30c)][_0x36e656(0x319)] ? $(_0x36e656(0x5b5))[_0x36e656(0x716)](0x12c) : $(_0x36e656(0x5b5))[_0x36e656(0x14f)](0xc8);
        }
        ;
        $('#sector_system_toggle')[_0x34e70c(0x2d9)](_0x34e70c(0x35a))['on']('change', function() {
            var _0x2dc05a = _0x34e70c;
            const _0x19f51e = $(this)[_0x2dc05a(0x1d4)](_0x2dc05a(0x586));
            if (_0x19f51e) {
                const _0x2ad84e = $('#sector_display_mode')[_0x2dc05a(0x410)]() || _0x2dc05a(0x3c2);
                window[_0x2dc05a(0x2f7)][_0x2dc05a(0x5d3)](_0x2ad84e);
            } else
                window['sectorSystem'][_0x2dc05a(0x30c)][_0x2dc05a(0x319)] && window[_0x2dc05a(0x2f7)][_0x2dc05a(0x5d3)](window['sectorSystem']['state'][_0x2dc05a(0x744)]);
            _0x4f06bc();
        }),
        $('#sector_display_mode')['off'](_0x34e70c(0x35a))['on'](_0x34e70c(0x35a), function() {
            var _0x3b3cc8 = _0x34e70c;
            const _0x51dc94 = $(this)['val']();
            window[_0x3b3cc8(0x2f7)][_0x3b3cc8(0x30c)][_0x3b3cc8(0x319)] && (window[_0x3b3cc8(0x2f7)][_0x3b3cc8(0x5d3)](window[_0x3b3cc8(0x2f7)][_0x3b3cc8(0x30c)]['currentMode']),
            window['sectorSystem'][_0x3b3cc8(0x5d3)](_0x51dc94),
            _0x4f06bc());
        }),
        $(_0x34e70c(0x5dd))['off'](_0x34e70c(0x35a))['on']('change', function() {
            var _0x3d39a8 = _0x34e70c;
            window['sectorSystem'][_0x3d39a8(0x3e6)][_0x3d39a8(0x1d7)] = _0x3a04fb($(this)[_0x3d39a8(0x410)]()),
            window[_0x3d39a8(0x2f7)][_0x3d39a8(0x4e2)](),
            window[_0x3d39a8(0x2f7)][_0x3d39a8(0x165)]();
        }),
        $(_0x34e70c(0x336))[_0x34e70c(0x2d9)](_0x34e70c(0x35a))['on']('change', function() {
            var _0x5685dc = _0x34e70c;
            window[_0x5685dc(0x2f7)]['settings'][_0x5685dc(0x516)] = _0x3a04fb($(this)['val']()),
            window[_0x5685dc(0x2f7)][_0x5685dc(0x4e2)](),
            window[_0x5685dc(0x2f7)][_0x5685dc(0x165)]();
        }),
        $(_0x34e70c(0x5c5))['off'](_0x34e70c(0x18c))['on']('input', function() {
            var _0x3ff591 = _0x34e70c;
            const _0x4b61af = parseInt($(this)[_0x3ff591(0x410)]()) / 0x64;
            window[_0x3ff591(0x2f7)]['settings']['backgroundAlpha'] = _0x4b61af,
            $(_0x3ff591(0x4cc))[_0x3ff591(0x159)](Math['round'](_0x4b61af * 0x64) + '%'),
            window[_0x3ff591(0x2f7)]['applySettings'](),
            window['sectorSystem'][_0x3ff591(0x165)]();
        }),
        $(_0x34e70c(0x361))['off'](_0x34e70c(0x18c))['on']('input', function() {
            var _0x157861 = _0x34e70c;
            const _0x402bae = parseInt($(this)['val']()) / 0x64;
            window[_0x157861(0x2f7)][_0x157861(0x3e6)][_0x157861(0x6b7)] = _0x402bae,
            $(_0x157861(0x632))[_0x157861(0x159)](Math[_0x157861(0x481)](_0x402bae * 0x64) + '%'),
            window['sectorSystem']['applySettings'](),
            window[_0x157861(0x2f7)][_0x157861(0x165)]();
        }),
        $(_0x34e70c(0x72b))[_0x34e70c(0x2d9)](_0x34e70c(0x35a))['on']('change', function() {
            var _0x3eb291 = _0x34e70c;
            window[_0x3eb291(0x2f7)][_0x3eb291(0x3e6)]['showLines'] = $(this)[_0x3eb291(0x1d4)](_0x3eb291(0x586)),
            !window['sectorSystem']['settings'][_0x3eb291(0x349)] ? $(_0x3eb291(0x462))[_0x3eb291(0x14f)](0xc8) : $('#sector_lines_options')[_0x3eb291(0x716)](0xc8),
            window[_0x3eb291(0x2f7)][_0x3eb291(0x4e2)](),
            window[_0x3eb291(0x2f7)]['saveSettings']();
        }),
        _0x4f06bc();
    }
};
var StoreSkinID;
function _0x1792(_0x27e41f, _0x423fd7) {
    var _0x5c345f = _0x5c34();
    return _0x1792 = function(_0x1792f6, _0x2694a9) {
        _0x1792f6 = _0x1792f6 - 0x10d;
        var _0x1f0fa0 = _0x5c345f[_0x1792f6];
        return _0x1f0fa0;
    }
    ,
    _0x1792(_0x27e41f, _0x423fd7);
}
$(document)[_0xb81a41(0x66c)](function() {
    var _0xba4774 = _0xb81a41;
    $(_0xba4774(0x19c))[_0xba4774(0x60c)] && ($(_0xba4774(0x19c))[_0xba4774(0x527)](_0xba4774(0x2fd)),
    StoreSkinID = $(_0xba4774(0x6f4)));
});
var myGameSettings = {
    'unlimitedRespawn': ![],
    'respawnDelay': 0x32
};
window[_0xb81a41(0x5c0)] = {
    'enabled': ![],
    'color': 0xffd700,
    'opacity': 0.5,
    'thickness': 0.1
},
window[_0xb81a41(0x39a)] = null;
const ctx = {
    'fontStyle': {
        'blanco': new PIXI[(_0xb81a41(0x65c))]({
            'align': _0xb81a41(0x56c),
            'fill': _0xb81a41(0x6e1),
            'fontSize': 0xe,
            'fontWeight': 'bold',
            'lineJoin': _0xb81a41(0x481),
            'stroke': _0xb81a41(0x50f),
            'strokeThickness': 1.5,
            'whiteSpace': _0xb81a41(0x182),
            'wordWrap': !![]
        })
    }
};
ctx[_0xb81a41(0x3f7)] = new PIXI['Container']();
let lastKnownCoords = {
    'x': null,
    'y': null
}
  , blinkTimerId = null
  , removeMarkTimerId = null;
const createCircle = function() {
    var _0x32e6ae = _0xb81a41;
    if (!window[_0x32e6ae(0x3cb)] || typeof window['coords']['playerX'] === _0x32e6ae(0x3fa) || typeof window['coords'][_0x32e6ae(0x31c)] === 'undefined')
        return;
    let _0x3fa4c5 = _0x32e6ae(0x739);
    if (lastKnownCoords['x'] !== null) {
        const _0x4260f9 = Math['sqrt'](Math[_0x32e6ae(0x1b6)](window[_0x32e6ae(0x3cb)][_0x32e6ae(0x643)] - lastKnownCoords['x'], 0x2) + Math[_0x32e6ae(0x1b6)](window[_0x32e6ae(0x3cb)][_0x32e6ae(0x31c)] - lastKnownCoords['y'], 0x2));
        _0x4260f9 > 0x64 && (ctx[_0x3fa4c5] && (ctx[_0x32e6ae(0x3f7)] && ctx[_0x32e6ae(0x3f7)][_0x32e6ae(0x567)][_0x32e6ae(0x1f2)](ctx[_0x3fa4c5]) && ctx['pointsContainer'][_0x32e6ae(0x77a)](ctx[_0x3fa4c5]),
        ctx[_0x3fa4c5] = null),
        blinkTimerId && (clearInterval(blinkTimerId),
        blinkTimerId = null),
        removeMarkTimerId && (clearTimeout(removeMarkTimerId),
        removeMarkTimerId = null));
    }
    lastKnownCoords['x'] = window[_0x32e6ae(0x3cb)][_0x32e6ae(0x643)],
    lastKnownCoords['y'] = window[_0x32e6ae(0x3cb)][_0x32e6ae(0x31c)];
    if (!ctx[_0x3fa4c5]) {
        ctx[_0x3fa4c5] = new PIXI['Text']('X',ctx[_0x32e6ae(0x6bb)]['blanco']),
        ctx[_0x3fa4c5][_0x32e6ae(0x2f2)] = 0x2,
        ctx[_0x3fa4c5]['alpha'] = 0.9,
        ctx[_0x3fa4c5][_0x32e6ae(0x31d)][_0x32e6ae(0x170)](0.5, 0.5);
        ctx[_0x32e6ae(0x3f7)] && (ctx[_0x32e6ae(0x3f7)][_0x32e6ae(0x6dd)] = !![],
        ctx['pointsContainer'][_0x32e6ae(0x2f2)] = 0x2);
        if (!blinkTimerId) {
            let _0x33b9b9 = !![];
            blinkTimerId = setInterval( () => {
                var _0x528046 = _0x32e6ae;
                ctx[_0x3fa4c5] ? (_0x33b9b9 = !_0x33b9b9,
                ctx[_0x3fa4c5][_0x528046(0x5b6)] = _0x33b9b9) : (clearInterval(blinkTimerId),
                blinkTimerId = null);
            }
            , 0x1f4);
        }
        !removeMarkTimerId && (removeMarkTimerId = setTimeout( () => {
            var _0xaefe5e = _0x32e6ae;
            ctx[_0x3fa4c5] && (ctx[_0xaefe5e(0x3f7)] && ctx[_0xaefe5e(0x3f7)][_0xaefe5e(0x567)][_0xaefe5e(0x1f2)](ctx[_0x3fa4c5]) && ctx[_0xaefe5e(0x3f7)][_0xaefe5e(0x77a)](ctx[_0x3fa4c5]),
            ctx[_0x3fa4c5] = null),
            blinkTimerId && (clearInterval(blinkTimerId),
            blinkTimerId = null),
            removeMarkTimerId = null;
        }
        , 0x4e20));
    }
    ctx[_0x3fa4c5] && (ctx[_0x3fa4c5]['x'] = window[_0x32e6ae(0x3cb)][_0x32e6ae(0x643)],
    ctx[_0x3fa4c5]['y'] = window['coords'][_0x32e6ae(0x31c)],
    ctx[_0x32e6ae(0x3f7)] && !ctx['pointsContainer'][_0x32e6ae(0x567)][_0x32e6ae(0x1f2)](ctx[_0x3fa4c5]) && ctx[_0x32e6ae(0x3f7)][_0x32e6ae(0x175)](ctx[_0x3fa4c5])),
    window[_0x32e6ae(0x326)] && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['Ah'] && ooo['Xg']['Kf']['Wg']['Ah']['Sh'] && (ooo['Xg']['Kf']['Wg']['Ah']['Sh'][_0x32e6ae(0x2f2)] = 0x270f,
    ooo['Xg']['Kf']['Wg']['Ah'][_0x32e6ae(0x6dd)] !== !![] && (ooo['Xg']['Kf']['Wg']['Ah']['sortableChildren'] = !![]),
    ooo['Xg']['Kf']['Wg'][_0x32e6ae(0x6dd)] !== !![] && (ooo['Xg']['Kf']['Wg'][_0x32e6ae(0x6dd)] = !![]));
};
function _typeof(_0x386599) {
    var _0x389fd9 = _0xb81a41;
    return (_typeof = typeof Symbol == _0x389fd9(0x2a8) && typeof Symbol[_0x389fd9(0x589)] == _0x389fd9(0x73d) ? function(_0x113d07) {
        return typeof _0x113d07;
    }
    : function(_0x47af76) {
        var _0x196777 = _0x389fd9;
        return _0x47af76 && typeof Symbol == _0x196777(0x2a8) && _0x47af76[_0x196777(0x229)] === Symbol && _0x47af76 !== Symbol[_0x196777(0x66b)] ? _0x196777(0x73d) : typeof _0x47af76;
    }
    )(_0x386599);
}
function _0x5c34() {
    var _0x16bbb5 = ['image', '[id^=\x22sel_\x22]', '#error-game-connection-retry', 'toggleMode', '#div_Laser,\x20#Laserup,\x20#laser_color_picker,\x20#laser_opacity_slider', 'split', '_originalFontSize', 'dropShadowColor', '/get_store.phpitem=bkgnd0.png', 'currentTime', 'server-image', 'https://wormx.store/video/hs_2.mp3', 'wupPulseEnabled', '#sector_bg_color', 'SKIN', 'GIF\x20SKIN', 'https://wormx.store/', '9999', '#settings-sfx-enabled-switch', 'index.game.antiadblocker.continue', 'Error\x20saving\x20Wormx\x20settings:', 'img_4', '\x22\x20alt=\x22Wormate.io\x20logo\x22/><div\x20class=\x22toaster-consent-accepted-container\x22><span\x20class=\x22toaster-consent-accepted-text\x22>', 's_n', '#saveGame', 'pause', 'kills', 'active', 'mousedown', '#laser_opacity_slider', '#btn_clear_file', 'clearTexts', 'PortionAura', ';\x20uniform\x20vec4\x20', '/get_store.phpitem=bg_sky_8.png', 'Japan', 'https://wormup.in/images/cors-proxy.php?img=cursors/11.png', 'ZDI5eWJYVnc=', 'messages-disabled', 'no-js(\x5cs|$)', 'اختك', 'data-region-name', 'backgroundAlpha', '15px', 'WRM_wormate-io_300x250', '#mm-line-center', 'WX\x202', '150px', 'radian', 'setInt8', '.tab-content', 'black', 'Current:\x20', 'I18N_LANG', 'shown', '/dynamic/assets/revision.json', 'stringify', 'flex', 'Red\x20Lipstick\x20Cursor', 'WellDone\x20!!🔨', 'length', 'abilityUnknown', '#game-canvas', 'target=\x22_black\x22\x20href', 'messenger', 'Heart\x20on\x20Stick\x20Cursor', 'width', '10px', 'hatUnknown', 'favorites-grid', 'feed', '.servers-peru,\x20.servers-mexico,\x20.servers-eeuu,\x20.servers-canada,\x20.servers-germania,\x20.servers-francia,\x20.servers-singapur,\x20.servers-japon,\x20.servers-australia,\x20.servers-granbretana', 'pointer-events', '\x20<input\x20class=\x22dd-option-value\x22\x20type=\x22hidden\x22\x20value=\x22', 'ADD', 'text/css', ';\x20vec2\x20mul\x20=\x200.5\x20*\x20vec2(ScreenParams.x\x20*\x20(ScreenParams.w\x20-\x201.0)\x20+\x201.0,\x20ScreenParams.y\x20*\x20(ScreenParams.z\x20-\x201.0)\x20+\x201.0);\x20vec2\x20v2\x20=\x20(uv\x20-\x20vec2(0.5,\x200.5))\x20*\x20mul\x20*\x201.25;\x20v2\x20=\x20vec2(v2.x\x20*\x20ROT_COS\x20-\x20v2.y\x20*\x20ROT_SIN,\x20v2.x\x20*\x20ROT_SIN\x20+\x20v2.y\x20*\x20ROT_COS)\x20*\x20vec2(1.0,\x202.0);\x20', 'https://wormup.in/images/cors-proxy.php?img=cursors/14.png', 'def_mouth', '32px', 'data-hat-id', 'joystick_checked', 'wupit', ',\x201.0)).xy,\x200.0,\x201.0);\x20vec4\x20ScreenParams\x20=\x20', '</div><div\x20class=\x22toaster-levelup-text\x22>', '#mobile-tab-item', 'alpha', '.dd-option-description', '#mm-player-exp-bar', 'resize', 'index.game.floating.wellDone', 'mobile', '#relojHelp', '#mm-skin-over-button-list', ';\x20attribute\x20vec2\x20', 'onSelected', '8LmPtkC', 'relativePath', '#sector_line_opacity_value', 'putImageData', '&times;', 'mobileconfig', 'charCodeAt', '/get_store.phpitem=moo_2.png', 'WX\x201', '.dd-option', '#f44336', 'resource', 'wear', '.cursor-item', '[data-index]', '#aaa', 'textureCache', '0xFFFFFF', 'killCustomText', 'playerX', 'getRadius', 'anApp', '#final-place', '\x22\x20style=\x22width:\x2032px;\x20height:\x2032px;\x20margin-top:\x2014px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'img_pf_1', 'sessionsPlayed', 'pageY', '..5\x20..', '/get_store.phpitem=bg_sky_7.png', 'https://gateway.wormate.io', 'performance-monitor-toggle', 'zoomSpeed', 'btn_in_t', 'es_ES', 'quarters', '.dd-options', 'reverse', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'index.game.popup.menu.skins.tab', 'coins_1250', 'values', '#joystick_checked', 'auto', '.server-number', 'TextStyle', '0x3', '<span></span>', 'https://wormate.io/images/og-share-img-new.jpg', 'util.time.sec', '#fileSkin', '1495542AKvSgz', '_refresh', 'c_white', 'authResponse', 'glassesVariantArray', 'false', '.settings-sidebar', 'myGameSettings', 'onerror', 'prototype', 'ready', '#backgrounds-tab,\x20.background-grid,\x20.background-item', 'valid', 'removeClass', '#portion_aura_slider', 'floor', 'game-wrap', 'substr', 'lastRadiusTime', 'initialized', '\x22\x20id=\x22btn_in_t\x22\x20style=\x22display:none;\x22/>', 'addTest', 'c_3', 'adplayer', '#volume_value', 'prime', 'pageX', 'height', '/images/skins/', 'clip', 'log', '<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-fb\x22\x20target=\x22_blank\x22\x20href=\x22https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=', 'texts', 'monitor-element', 'onmessage', '</span></a>', '{1}', 'splice', 's_l', 'fail', 'indexOf', 'hasOwnProperty', 'index.game.antiadblocker.msg1', 'onload', 'ArrayBuffer', 'location', '#spin_fast_slider', '#mm-settings', 'webkitRequestFullScreen', '/login', 'arraybuffer', '.favorites-content', '9998', '#mm-bottom-buttons', 'json', 'slice', '#wupsound', '(^|\x5cs)', '#port_name_s', 'keydown', 'https://wormup.in/images/cors-proxy.php?img=cursors/10.png', 'top', '#div_customer', 'precision\x20mediump\x20float;\x20attribute\x20vec2\x20', '#wupspeed', '..2\x20..', '#custom-messages-container', '/dynamic/assets/registry.json', 'index.game.leader.top10', '#e03e42', 'getTime', '0x1', 'SRV', 'mapText', '</a></li>', 'toUTCString', 'empty', 'data-descriptione', 'd_5', 'opacity\x200.3s\x20ease-in-out', 'bg-name', '#op_wup', 'textDict', 'cloneNode', '#kill_msg', 'lineAlpha', 'fillText', 'img_2', 'btnFullScreen', 'fontStyle', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Loading\x20servers...\x20Please\x20wait.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20', 'positionMode', '46px', '..9\x20..', 'custom_skin', 'match', '50px', 'userId', 'dsg', 'cursor', '.background-item', 'F_bg', 'PortionTransparent', 'mm-action-play', 'test', '#headshot_custom_text', 'deltaY', 'wormxObjects', 'dropShadowDistance', 'utils', 'unlimitedRespawn', 'https://wormup.in/images/cors-proxy.php?img=cursors/17.png', 'link', 'listVariant', '#00a8ff', 'target', 'd_3', 'stop', '<input\x20type=\x22hidden\x22\x20id=\x22port_id_s\x22\x20value=\x22\x22>', 'index.game.popup.menu.store.tab', '..10\x20..', '15px\x2020px', '{0}', 'sortableChildren', 'favorites-dialog', 'orig', '\x22\x20style=\x22width:\x20100%;\x20height:\x2065px;\x20object-fit:\x20cover;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x205px;\x20font-size:\x2010px;\x20color:\x20#ffffff;\x22>', '#FF0000', 'fileSize', 'hatFavoritesButton', 'search', 'error', 'خطأ\x20في\x20حفظ\x20اسم\x20السيرفر:', '#wear-eyes-button', 'miniclip', 'KILL', '#loading-progress-cont', 'modal_wup', 'imagePosition', 'https://wormup.in/images/cors-proxy.php?img=cursors/27.png', 'custom', 'data-server-image', '#addflag', 'each', '.dd-click-off-close', 'gold', '#idReplaceSkin', '#mm-loading-progress-bar', 'buttonMode', 'month', 'port_id', 'script', 'https://wormx.store/images/cors-proxy.phpimg=flg/ca.png', '.wormate.io', 'BLEND_MODES', 'hatButtonContainer', 'white', 'getContext', 'nonbuyableCause', '\x20dd-image-right', '#spin_fast_value', '#4CAF50', 'v1_', '#headshot_show_name', 'headshotMsg', 'servers-eeuu', 'PTSans', 'Method\x20', 'game', 'trim', '#f9cc0b', 'onclose', 'dynamic', 'forceUseLocalImages', '/get_store.phpitem=Galaxy-Star.png', 'LOADING_TEXT', 'getInt8', 'servers-australia', 'portion_aura', '<ul\x20class=\x22dd-options\x22></ul>', 'slideDown', 'querySelectorAll', '#adbl-3', '#profile-view', 'PerformanceMonitor', 'save', 'https://wormup.in/images/cors-proxy.php?img=cursors/5.png', 'ui-tab-active\x20ui-tab-inactive', 'https://wormup.in/images/cors-proxy.php?img=cursors/15.png', '</span><a\x20class=\x22toaster-consent-accepted-link\x22\x20href=\x22/privacy-policy\x22>', 'joystick', '#final-continue', 'position', 'new', '12504830yrhKFk', 'https://i.imgur.com/LFiCido.png', '1px\x20solid\x20#333345', '.sidebar-item', 'https://wormup.in/images/cors-proxy.php?img=cursors/28.png', '<div\x20style=\x27text-align:center;padding:10px;color:#aaa;margin:20px\x200;grid-column:1/span\x202;\x27>You\x20don\x27t\x20have\x20any\x20favorite\x20skins\x20yet.</div>', '#loading-progress-text', '#sector_show_lines', 'img', 'level', '-webkit-transform', 'servers-francia', '#sort-toggle', 'wormxSettings', 'imageUrl', 'https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54', '160px', 'isArray', 'every', 'id_customer', 'unbind', 'm_2', '#delete-account-no', 'isFpsVisible', '0lt1', 'symbol', 'https://wormup.in/images/cors-proxy.php?img=cursors/13.png', 'Pink\x20Hearts\x20Cursor', '/images/confetti-valday2024.png', ';\x20uniform\x20sampler2D\x20', 'bold', 'data-server-number', 'currentMode', 'not_connect', 'onopen', '#leaders-button-kills', ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20margin:\x205px;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', '<div>', '#orange-frame', 'mouthDict', 'https://wormx.store/2025/check/index.php', 'dd-click-off-close', 'Wormx\x20Team\x202025\x20Wormate.io', 'revokeObjectURL', 'index.game.antiadblocker.msg2', 'savedGame', '#store-buy-coins_125000', 'wormx', '.switch', 'status', '#fff009', 'antiadblocker', '#store-buy-coins_50000', 'text/javascript', 'pwrFlex', 'https://wormx.store/dynamic/assets/registry.json', 'OPEN', 'style', 'eyesDict', 'parse', 'scale', '#store-view-canv', '0x0', '/get_store.phpitem=mof_1.png', 'img_clock', 'username', 'canvastext', '#zoom_speed_value', '<li><a\x20class=\x22dd-option\x22>', 'showKillName', '.dd-select', 'expOnLevel', 'currentDisplayMode', ';\x20void\x20main()\x20{\x20gl_FragColor\x20=\x20texture2D(', 'killNamePos', '#333333', '#ff2222', 'lastTime', 'div_top', '<div></div>', 'getLoginStatus', 'WRAP_MODES', 'block', '\x22\x20class=\x22toaster\x20toaster-consent-accepted\x22><img\x20class=\x22toaster-consent-accepted-logo\x22\x20src=\x22', '_pulseFunctionInstalled', '.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.', 'removeChild', 'charAt', 'TEAM2', '#adbl-2', '.cursor-container', 'fill', '#profile-experience-bar', 'textShadow', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '/pub/wuid/guest/start?gameMode=', 'server-status', 'VkdWaGJWVlE=', '75px', 'Text', 'timing', '<div\x20class=\x22idwormate\x22><input\x20type=\x22text\x22\x20value=\x22', 'banner', '\x22\x20style=\x22max-width:\x20220px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tooltiptext\x22\x20id=\x22myTooltip\x22>id\x20copy</span>Copy\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20\x20\x20\x0a<!--\x20Headshot\x20Message\x20Display\x20-->\x0a<div\x20id=\x22headshot-message\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20', 'loginUser', '#profile-username', 'byLevel', 'Turkey', 'altKey', 'index.game.social.shareResult.caption', 'Error\x20loading\x20banned\x20words:', '1eaom01c3pxu9wd3', '<div\x20class=\x22table-row\x22><span>', '.player-tooltip', 'csg', 'null', '_complete', '<button>', 'performance-monitor-container', 'Pink\x20Dolphin\x20Cursor', '#mm-line-top', '420px', 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20skins?', '</a></div><div\x20class=\x22toaster-consent-close\x22>', 'sel_top', '#popup-menu-back', '#sector_display_mode', 'xhrFields', 'currentHatId', 'true', 'selectText', '/get_store.phpitem=bg_sky__6.png', '<img>', '#reset_laser_settings', 'setItem', '#final-caption', '#food_shadow_value', 'u5_', 'canvas', 'server-name', '#adbl-continue', 'interactive', 'async', 'string', 'toString', 'https://wormx.store/images/cors-proxy.phpimg=flg/de.png', 'div_zigzag', 'Local\x20Storage\x20Error:', 'Container', 'img_p_1', '554712rvyCYC', '<small\x20class=\x22dd-selected-description\x20dd-desc', 'restore', '0000', '/pub/healthCheck/ping', 'Add', 'file', '\x22\x20title=\x22', 'play', '<button\x20id=\x27manage-favorites-skin\x27\x20class=\x27favorite-button\x27\x20style=\x27background:#2196F3;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x27><span\x20style=\x27font-size:14px;\x27>☰</span>\x20Favorite</button>', 'beforeunload', 'selectedCursor', 'toLowerCase', '#joystick_pxy_value', 'server-region', 'Error\x20saving\x20sector\x20system\x20settings:', '#coins-view', '#mm-coins-box', '/get_store.phpitem=moi_3.png', 'Turquoise\x20Mouse\x20Pointer', 'stopAllMonitoring', 'https://wormup.in/images/cors-proxy.php?img=cursors/7.png', 'ctrl', 'slideUp', 'scroll', ';\x20uniform\x20mat3\x20', 'Error\x20loading\x20skin\x20file:\x20', 'WX\x204', 'success', 'ccg_1', 'replaceAll', 'display', 'oco', 'text', 'coins', 'sin', '0lt0', '0\x205px', 'CPU\x20monitoring\x20stopped\x20because\x20it\x20was\x20disabled', '#store-locked-bar', 'flag\x20', 'savedData', '-o-transform', 'handleNicknameChange', 'dd-option-selected', 'saveSettings', 'lastCpuTime', 'removeItem', '11px', 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09', 'regionDict', 'cpuSamples', 'Current:\x20Default', 'hat-button-container', 'img_f', 'clipboard', 'set', '/get_store.phpitem=mo_2.png', '#laser_opacity_value', '#mm-skin-next', '.favorites-grid', 'addChild', 'White\x20Glove\x20Cursor', '☰\x20Favorites', '_originalColor', 'connected', 'performance-monitor-style', 'showHeadshotName', '1\x20/\x20span\x203', 'absolute', '/getUserData', 'ajax', '#eating_speed_toggle', 'mouthUnknown', 'normal', 'websockets', '\x20does\x20not\x20exists.', 'joystick_size', 'saveGame', 'Watermelon\x20Cursor', 'extend', 'ARENA', 'shared', 'smoothCamera', 'input', 'no-', '50%', 'cpuSampleSize', '</span><span>', '#Laserup', '5px\x2010px', '_frame', 'setAttribute', 'return\x20', 'font', 'timestamp', 'monster_kill_sound', 'prerollCount', '<br/>', '★\x20Add', '.store-view-cont', 'orange-frame', 'none', 'updateDisplays', 'init', 'nickname', 'not', 'wupsw', 'https://i.imgur.com/chSxPo3.png', 'beginFill', '#fdbf5f', '#mm-event-text', '\x22\x20alt=\x22', 'https://wormx.store/2025/css/gamenew.css', 'zoom_speed', '\x20/\x20', 'WormWorld\x20Servers', 'musicEnabled', '/get_store.phpitem=bg_sky__5.png', '#loading-progress-bar', 'move', '20px\x200', 'magnet_ability', 'enabled', 'translate(-50%,\x20-50%)', 'performance', 'pow', 'Pink\x20Octopus\x20Cursor', 'ze-snippet', '\x20⚡️)', '#headshot_msg', 'index.game.toaster.consent.link', 'push', 'source', 'lengthComputable', 'Galaxy\x20Star', 'hat-info-text', '#mm-player-info', '_display', 'joystick_pxy', '#mm-store', 'object', 'server_url', 'add', '.dd-option-image', 'embedCSS', 'Error\x20loading\x20sector\x20system\x20settings:', 'textureDict', 'index.game.floating.headshot', ';\x20vec2\x20uv\x20=\x20', 'servers-mexico', 'column', 'VlZBPQ==', 'frameCount', '#store-buy-button', '/images/bg-pattern-pow2-ARENA.png', 'prop', '#joystick_mode', 'c_5', 'backgroundColor', 'touchstart', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'renderContainer', 'انتظر\x20لحظة...', '.settings-sidebar,\x20.settings-layout,\x20.settings-content,\x20.settings-grid,\x20.tab-content,\x20.sidebar-item', '.favorites-popup', '0\x204px\x208px\x20rgba(0,\x200,\x200,\x200.5)', '#profile-stat-registrationDate', '5363649UqMbFh', '-10px', 'mozRequestFullScreen', 'hidden', '5px', '#eee', 'fn_o', 'rotation', 'util.time.days', '<span\x20class=\x22score-display\x20', 'readAsText', 'server-score', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20', 'reload', '2px\x206px', 'description', 'img_3', '#error-gateway-connection-retry', 'includes', 'skins', 'count', 'keyup', 'sector_system_toggle', '/get_store.phpitem=bg_sky__1.png', 'selected', '158008QfpSDQ', 'Favorite\x20Hats', 'opera', 'crossorigin', 'savedState', '#pulse_effects_enabled', '#portion_aura_value', 'GET', '861926850619051', 'lineTo', 'img_p_3', 'You\x20don\x27t\x20have\x20any\x20favorite\x20hats\x20yet.', 'bestSurvivalTimeSec', '#store-buy-coins_1250', 'c_1', '#markup-wrap', 'event', 'https://wormx.store/images/cors-proxy.phpimg=flg/br.png', 'size', 'pk3', 'Indonesia', 'servers-germania', 'ltmolilci1iurq1i', 'code', 'mouthVariantArray', '#popup-login-fb', 'Texture', 'coins_125000', 'relative', 'cssText', '0lt2', 'https://wormup.in/images/cors-proxy.php?img=cursors/26.png', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '#mm-action-guest', 'skinId', 'Mexico', '<table>', '<div\x20class=\x22div_FullScreen\x22><input\x20type=\x22button\x22\x20value=\x22', 'selectSala', '#popup-login-gg', 'spin_fast', '//connect.facebook.net/', ';\x20void\x20main(){vec4\x20color=texture2D(', '\x22\x20data-bg-name=\x22', 'position-left', 'defer', 'index.game.toaster.consent.iAccept', 'index.game.popup.menu.coins.tab', 'constructor', '#d4db19', '_hasSetupKeyboardControls', '#delete-account-yes', '#toaster-view', 'please\x20don\x27t\x20copy\x20my\x20code', 'pk5', '30px', '{2}', 'value2_kill', 'map', '#food_size_value', 'fromCharCode', '\x0a\x20\x20\x20\x20<button\x20id=\x22op_wup\x22\x20class=\x22op_wup\x22>', 'base', 'restored', '*vec3(', '/get_store.phpitem=mo_4.png', 'grid', 'label_hs', 'servers-granbretana', 'render', 'https://wormx.store/images/cors-proxy.phpimg=flg/fr.png', 'click.ddslick', 'Crystalblue', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20servers\x20available\x20in\x20this\x20region\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'eyesId', 'getFloat32', 'd_1', 'currentHatIndex', 'btn_crsw', 'Shader', 'background', 'headshot', 'insertAfter', 'removeChildren', '16px', 'loadSettings', 't_wup_', '#joystick_position', '#div_server,\x20#div_save,\x20#div_sound,\x20#div_speed,\x20#div_zigzag,\x20#div_w1,\x20#div_top,\x20#div_killmsg,\x20#div_sm,\x20#div_pulse_effects,\x20#div_messages,\x20#div_background,\x20#div_game_enhancements,\x20#config_mobile,\x20#div_Laser,\x20#div_crsw', 'img_o_2', 'cpuDisplay', 'Thailand', 'index.game.result.placeInBoard', '.flag', ';\x20const\x20float\x20ROT_ANGLE_DEG\x20=\x207.5;\x20const\x20float\x20ROT_COS\x20=\x20cos(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20const\x20float\x20ROT_SIN\x20=\x20sin(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20void\x20main()\x20{\x20', '..6\x20..', 'globalHatTextureCache', 'isSignedIn', '#leaders-button-highscore', 'xfbml', 'pk6', 'head', 'find', 'wormate-io_970x250', '87px', 'img_o_4', '#adbl-continue\x20span', 's11', 'fontSize', 'Canada', 'Your\x20account\x20has\x20been\x20locked.', 'Error\x20loading\x20Wormx\x20settings:', 'game-cont', 'dispose', 'glassesId', 'WormX', '#profile-experience-val', '30%', 'html', '#favorites-dialog,\x20#favorites-overlay', '#profile-stat-kills', 'showSelectedHTML', '\x22></div>', '\x22\x20style=\x22max-width:\x20300px;\x20width:\x20350px\x20!important;\x20height:\x2022px\x20!important\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20display:\x20inline-block;\x20margin-right:\x2010px;\x22/>\x0a<button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27', '&nickname=', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22score\x22>', 'Arial', 'mouthId', 'total', 'خطأ\x20في\x20تحديث\x20عرض\x20اسم\x20السيرفر:', 'skinArrayDict', '#ffcc00', 'touchend', 'favoriteSkins', 'https://wormup.in/images/cors-proxy.php?img=cursors/2.png', '.ui-tab-inactive', 'server-image-with-link', 'resolution', 'streamer', 'offsetWidth', '_tick', 'padEnd', 'sel_sc', 'show', '#add-to-favorites-skin', 'nome', 'hatDict', '[id^=\x22div_\x22]', '\x22\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20display:\x20inline-block;\x20margin:\x205px;\x20cursor:\x20pointer;\x20border:\x202px\x20solid\x20', 'graphics', '/get_store.phpitem=mpf_1.png', 'runtimeHash', 'pressed', 'Australia', 'died', 'overflow', 'trigger', 'userAgent', 'querySelector', '..4\x20..', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-item\x20', 'after', 'defaultSelectedIndex', 'Nightdots', 'op_wup', '_cpuMonitoringInterval', 'initUserInterface', 'border-color', '#unl6wj4czdl84o9b', 'headshotMsgType', 'joystick_position', 'highScore', '6gklXmJ', '1000', 'setSelectionRange', 'function', 'byKillsAndHeadShots', 'then', 'volume', '#mm-advice-cont', 'index.game.toaster.consent.text', '/static/assets/', '\x22\x20height=\x2240\x22\x20/>', 'body', 'dd-container', 'value1_hs', 'hatToggleButton', 'Stopping\x20CPU\x20monitoring\x20completely', 'd_2', '294680CIMdWw', 'drawQuarters', 'currentFavSkinIndex', '.dd-pointer', 'Beetle\x20Cursor', '/pub/wuid/', '#fff', 'store/Group_customer.png', 'headshotCustomText', 'data:image/png;base64,', 'avatarUrl', 'price', '&glassesId=', 'enableClasses', 'fuak', 'changedTouches', 'index.game.main.menu.unlockSkins.share', 'https://lh3.googleusercontent.com', '/images/wear-ability.png', 'index.game.popup.menu.settings.tab', 'fontFamily', 'attach', 'fillStyle', 'timmap', 'pulseEnabled', 'monsterKillSound', '/get_store.phpitem=bg_sky_10.png', '<div\x20id=\x27modal_backdrop\x27></div>', 'Float32Array', 'setupToggleButton', 'red', 'skin-info-text', 'cmd', 'pk0', '#markup-header', 'off', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'flex_ability', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22title-wormate-server\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🗺️\x20ALL\x20SERVER\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22description-text-hiep\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:sticky;\x20top:0;\x20z-index:100;\x20background:#242424;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<BR>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20style=\x22margin-top:5px\x22\x20class=\x22ui-tabs-nav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive0\x20ui-tab-active\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20br\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/br.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive1\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20mx\x22\x20value=\x22https://wormup.in/images/cors-proxy.phpimg=flg/mx.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive2\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20us\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/us.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive3\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20ca\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/ca.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive4\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20de\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/de.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive5\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20fr\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/fr.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive6\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20sg\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/sg.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive7\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20jp\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/jp.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive8\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20au\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/au.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive9\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20gb\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/gb.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x202px\x200;\x20padding:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sort-toggle\x22\x20style=\x22font-size:\x2010px;\x20padding:\x201px\x206px;\x20background-color:\x20#333;\x20color:\x20#ddd;\x20border:\x201px\x20solid\x20#666;\x20border-radius:\x203px;\x20cursor:\x20pointer;\x20outline:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Timmap\x20Servers\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22server-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-name\x22>SERVER</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-region\x22>REGION</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-status\x22>STATUS</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-score\x22>SCORE</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Add\x20the\x20background\x20image\x20here\x20before\x20the\x20server\x20container.\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-image-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/PwN4bMV.png\x22\x20class=\x22background-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-peru\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-mexico\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-eeuu\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-canada\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-germania\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-francia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-singapur\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-japon\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-australia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-granbretana\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'blendMode', 'decoder', '/get_store.phpitem=z_i.png', 'siblings', '#joystick_color', 'v_z', 'Timmap\x20Servers', 'sectorSystemMode', '500px', 'load', 'SCREEN', 'Mushroom\x20Cursor', '#wear-glasses-button', 'createElement', 'ccc', 'div', 'onwheel', 'fast', '.description-text', '.dd-selected-image', '/get_store.phpitem=moi_2.png', 'zIndex', '.slider-control', 'cachedRadius', '..3\x20..', '#mm-player-avatar', 'sectorSystem', '\x22\x20id=\x22btnFullScreen\x22/><input\x20type=\x22button\x22\x20value=\x22', '-</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22name\x22>', '#default-cursor-btn', 'TikTok\x20Cursor', 'hat-favorites-button', '<div\x20id=\x22idReplaceSkin\x22></div>', 'value2_hs', '/pub/leaders', 'gray', 'setupKeyboardEvents', '0\x200\x200\x205px', 'endFill', '/js/nipplejs.min.js', '_init', '#social-buttons', 'baseTexture', '#portion_size_value', 'onreadystatechange', 'VjI5eWJXRjBaUzVwYnc9PQ==', '\x22\x20style=\x22cursor:\x20pointer;\x20border:\x202px\x20solid\x20', 'state', 'Spray\x20Can\x20Cursor', 'country', '110px', 'texture', 'https://wormx.store/2025/check/check2.php', '<button\x20id=\x27add-to-favorites-skin\x27\x20class=\x27favorite-button\x27\x20style=\x27background:#4CAF50;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x27><span\x20style=\x27font-size:14px;\x27>★</span>\x20Add</button>', 'servers-singapur', 'Dagger\x20Cursor', 'isBuyer', 'signIn', 'background-color', '[id^=\x27skin-info-text\x27]', 'isActive', '#252538', 'mo2', 'playerY', 'anchor', 'apply', 'not_empty', 'key', 'ui-tab-active', '#final-board', 'players', '#popup-delete-account', 'getItem', 'ooo', 'Customer', 'boolean', 'contextmenu', 'angle', 'findRenderContainer', 'Beach\x20Umbrella\x20Cursor', 'serverUrl', 'servers', '.servers-', '#profile-stat-bestSurvivalTime', '#background-canvas', '/deleteAccount', 'type', 'imagesrc', 'click', '#sector_line_color', 'u4_', '/get_store.phpitem=close_z.png', 'clientY', 'account_type', 'c_2', '3px', 'lineStyle', 'topPlayers', 'sqrt', 'rel', 'skinData', 'get_skin.php', '/get_store.phpitem=mo_3.png', '_pulseStarted', 'value', 'translate(-50%,\x20-50%)\x20scale(', '#wear-mouths-button', 'preventDefault', 'showLines', 'fadeIn', '#ffffff', 'application/json', 'scrollTop', ');\x20vec4\x20colorMix=', 'open', '#5dade6', 'select', '-moz-transform', 'https://wormx.store', 'padStart', 'headShots', 'data-imageSrc', 'original', 'flx', '#performance-monitor-toggle', 'change', 'regDate', '#kill_show_name', '),\x20default', '#sector_system_toggle', 'innerHTML', 'loaded', '#sector_line_opacity', 'clientX', '/get_store.phpitem=bg_sky__2.png', 'createObjectURL', 'HeadShot\x20🚬', 'join', ',\x201.0)).xy,\x200.0,\x201.0);\x20}', 'disableFlex', 'playMonsterSound', '.selectSala', 'White\x20Mouse\x20Pointer', 'keyCode', 'addAsyncTest', 'dd-pointer-up', '\x20=\x20v2;\x20}', 'https://wormup.in/images/cors-proxy.php?img=cursors/8.png', '#please-wait-view', 'config', 'pk4', 'getElementById', 'Cambodia', 'keypress', '\x20=\x20', 'https://wormup.in/images/cors-proxy.php?img=cursors/9.png', '_lastPulseTime', 'has', '#popup-menu-coins-box', '\x22\x20style=\x22max-width:\x20300px;\x20width:\x20350px\x20!important;\x20height:\x2022px\x20!important;\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20display:\x20inline-block;\x20margin-right:\x2010px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27', '#restricted-view', 'https://wormx.store/images/cors-proxy.phpimg=flg/us.png', 'img_o_3', 'عرضك', 'catch', 'ابوك', '#mm-skin-prev', 'replaceWith', '6px', 'pk2', 'sectorSystemActive', '18px', '#food_shadow_slider', '</div></div>', 'lineWidth', 'img_i_2', 'WebSocket', 'concat', 'fullscreen', 'replace', '<input\x20type=\x22hidden\x22\x20id=\x22port_name_s\x22\x20value=\x22\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.performance-monitor-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.monitor-element\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x201px\x201px\x202px\x20rgba(0,0,0,0.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Restoring\x20state\x20from\x20UI\x20initialization', '</div><div\x20class=\x22toaster-coins-close\x22>', 'portionDict', 'https://wormup.in/images/cors-proxy.php?img=cursors/25.png', 'https://wormup.in/images/cors-proxy.php?img=flg/default-server.png', '#store-go-skins-button', 's_wup_', 'laserGraphics', 'tint', '\x22\x20/>', 'Yellow\x20Cheese\x20Cursor', 'src', '..7\x20..', 'hatVariantArray', 'get', 'index.game.popup.menu.store.locked', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'moveTo', 'transform', 'addAttribute', '.dd-selected-text', 'textContent', 'updateToggleButton', 'Nebula', 'store/Group_show_gif.png', 'expires_in', ':visible', 'PortionSize', 'hide', 'FoodSize', 'send', '#sound_effect_selector', 'modalFixed', 'eat_animation', '12px', 'getCurrentPosition', 'eyesVariantArray', '#skin-group-description-text', 'cookie', '#settings-view', 'onclick', 'mode', 'parent', 'auth2', 'https://wormx.store/2025/words/get_banned_words.php', '/buyProperty?id=', '#mm-skin-canv', 'sectors', '#wear-item-price', 'removeHatButtons', 'Press\x20\x27(\x201\x20)\x27\x20to\x20toggle\x20skins\x20during\x20gameplay', '#final-share-fb', '#game-view', 'dropShadow', 'mouseenter', '#port_id', 'coords', '#wear-locked-bar-text', 'startAllMonitoring', '/get_store.phpitem=bg_sky_11.png', '/images/guest-avatar-valday2024.png', 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20hats?', 'pxy', '#f00', '#profile-stat-headshots', 'quarterTextStyle', '#port_name', 'binaryType', '<div\x20class=\x22dd-select\x22><input\x20class=\x22dd-selected-value\x22\x20id=\x22backgroundArena-value\x22\x20type=\x22hidden\x22\x20/><a\x20class=\x22dd-selected\x22></a><span\x20class=\x22dd-pointer\x20dd-pointer-down\x22></span></div>', 'coins_50000', 'thickness', 'onclickServer', '\x22\x20>', '\x22\x20class=\x22toaster\x20toaster-levelup\x22><img\x20class=\x22toaster-levelup-img\x22\x20alt=\x22Wormate\x20Level\x20Up\x20Star\x22\x20src=\x22/images/level-star.svg\x22\x20/><div\x20class=\x22toaster-levelup-val\x22>', 'destroy', 'startCpuMonitoring', 'port_id_s', '999', 'Rectangle', 'wupsle', 'lineHeight', 'className', 'onchange', 'settings', '#mm-player-level', 'startsWith', 'document', 'drawImage', 'getElementsByTagName', 'en_US', '#wupiq', '#btn_copy', 'showFpsCpu', '#profile-stat-gamesPlayed', '#store-view', 'hover', 'https://resources.wormate.io', '#contact-support', '_animFrameId', 'touches', 'pointsContainer', 'pk1', 'custom_wear', 'undefined', 'ccg_0', 'js$2', '#loading-view', 'identifier', 'a1_', 'div_sm', '1\x20/\x20span\x202', '.fav-buttons-container', '&eyesId=', 'detach', '<div\x20id=\x22', 'coins_7000', 'Strawberry\x20and\x20Chocolate\x20Ice\x20Cream\x20Cursor', '&gh=', 'joystick_color', 'mousemove', 'nonbuyable', '#highscore-table', 'restricted', 'JDHnkHtYwyXyVgG9', '#wear-buy-button', 'val', '\x22/></span><span>', '/get_store.phpitem=mp_3.png', 'قواد', '.profile-user', 'textAlign', '#zoom_speed_slider', '\x20*\x20', '#portion_size_slider', '4521076DDBThD', 'showPlayerNames', 'message', '#zigzagup', 'PIXI', '#wear-view', 'Sprite', 'result', 'Octopus\x20Glove\x20Cursor', '#delete-account-view', 'u3_', 'killMsgType', 'wormworld', 'pop', 'reduce', '.play-button', 'fixed', 'addSelectedHatButton', '.background-grid', 'index.game.result.continue', 'تشغيل\x20صوت\x20الهيدشوت\x20العاشر.\x20العدد:\x20', 'def_skin_glow', 'Skin\x20list\x20not\x20found\x20in\x20game\x20data', 'url', 'https://wormate.io', 'SaveGamewx', 'initGraphics', 'clearRect', '#cursors-tab,\x20.cursor-container,\x20.cursor-item', 'Pizza\x20Slice\x20Cursor\x20', '/get_store.phpitem=open_z.png', 'realServerName', 'soundVolume', '100%', 'https://wormx.store/store/check2.php', '/get_store.phpitem=close_w.png', 'https://wormup.in/images/cors-proxy.php?img=cursors/20.png', 'نظيف', '#store-buy-coins_16000', 'iscustom', 'REPEAT', 'data:', 'skinUnknown', 'initDrawing', 'aqnvgcpz05orkobh', 'Bluemist', 'https://wormateserkanconnect.github.io/tim/index.php', '#joystick_size_value', 'inline-block', '#FFF', 'container', 'URL', 'eyesUnknown', '#mm-action-play', 'locale', 'اخوك', '.dd-option-text', 'default', 'region', 'done', '<img\x20src=\x22', 'filter', 'fr_FR', '#manage-favorites-skin', 'index.game.popup.menu.delete.tab', 'atan2', '#sound-laser-settings-tab,\x20#sound_effect_selector,\x20#monster_kill_selector,\x20#volume_slider', 'index.game.social.shareResult.messGood', 'call', '-tab', 'index.game.antiadblocker.msg4', 'GLASSES', 'u6_', '#sector_lines_options', '\x20copied!\x27));\x22>Copy</button></div>', '#joystick_size', 'div_speed', 'Stopping\x20FPS\x20monitoring\x20completely', 'closest', 'Cherries\x20Cursor', '#333', 'kill', 'fpsDisplay', '✅\x20تم\x20تعديل\x20دالة\x20عرض\x20اسم\x20السيرفر\x20بنجاح', 'container_count', '#store-go-wear-button', 'aliases', 'max', 'http://www.w3.org/2000/svg', '<div\x20id=\x22image-tooltip\x22\x20class=\x22image-tooltip\x22></div>', 'https://graph.facebook.com/me?access_token=', '#game-cont,\x20#game-canvas,\x20body', ';\x20uniform\x20vec2\x20', 'div_w1', 'FoodTransparent', '#mm-coins-val', 'attr', 'div_sound', 'wupi', '#css-ddslick', '/images/lens.png', 'remove', 'HAT', '.toaster-consent-close', 'round', '#volume_slider', '\x22\x20data-bg=\x22', 'value1_kill', 'sectorTextStyle', 'port_name_s', 'Modernizr', '#port_id_s', 'displayNumber', 'CLOSING', 'guest', 'audio', 'offset', 'sha256', 'SaveGameXT', 'index.game.toaster.continue', 'baseVal', '#mm-skin-over', '4AqXjfp', 'expToNext', 'score', '.section-title', 'drawCircle', '\x27).then(()=>\x20alert(\x27Your\x20ID\x20', 'جحش', '#store-view-next', '#skin-info-text', '#adbl-1', '<h3>', 'outerWidth', ';\x20gl_Position=vec4((', 'popup', 'wormate.io', 'colorDict', '3.3.1', 'eie', 'getAuthResponse', 'index.game.popup.menu.consent.tab', 'https://wormup.in/images/cors-proxy.php?img=cursors/23.png', 'projectionMatrix', '/get_store.phpitem=close_q.png', 'item', '_config', 'transparent', 'sfxEnabled', 'a2_', ';\x20gl_Position\x20=\x20vec4((', 'regular', 'class', 'index.game.antiadblocker.msg3', 'options', 'index.game.popup.menu.wear.tab', 'addClass', 'keys', 'navigationStart', 'glow', 'opacity', 'Mesh', 'shift', 'Electrical\x20Plug\x20Cursor', 'longitude', 'id_token', 'POST', '#withdraw-consent-view', 'https://wormup.in/images/cors-proxy.php?img=cursors/19.png', 'index', '#game-settings-tab', 'scrollTo', 'url(', 'substring', '4px', 'right', 'https://wormup.in/images/cors-proxy.php?img=cursors/12.png', '#f8d968', 'create', '#sector_bg_opacity_value', '&type=', '#stretch-box', 'gameMode', 'cos', 'FoodShadow', 'player', 'server-info', 'util.time.hours', '#wear-hats-button', '\x22><img\x20src=\x22data:\x20image/svg+xml;\x20base64,\x20PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\x22/><span>', 'documentElement', '#custom-tooltip', '..8\x20..', 'consent_state_2', 'window', 's_kill', 'c_4', '1fr\x201fr\x201fr', 'which', 'left', 'svg', 'applySettings', 'year', ':nth-child(', 'index.game.toaster.levelup', '0x2', 'day', 'Saved\x20sector\x20system\x20state:', '.dd-selected', 'sectorSystemSettings', 'rgba(0,\x200,\x200,\x200.5)', '/images/bg-pattern-pow2-TEAM2.png', 'isCpuVisible', '<div\x20class=\x22player-tooltip\x22></div>', 'Graphics', '\x22\x20id=\x22btnRePlay\x22>', 'skinGroupArrayDict', 'EYES', 'accessToken', 'FPS:\x20', 'now', 'precision\x20highp\x20float;\x20varying\x20vec2\x20', '\x20<img\x20class=\x22dd-option-image', 'servers-canada', 'text,\x20span,\x20div', 'css', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '#food_size_slider', 'name', 'pwr_flex', '#leaders-view', 'killMsg', '#leaders-button-level', '#skin-description-text', 'Player', '#mm-loading-progress-text', 'loading', 'ccg', 'label_kill', 'isInitialized', 'title', 'Clear\x20All', 'كلب', 'webWidget', 'DataView', '_pulseInterval', '#FFFFFF', 'hatId', 'pointer', 'unshift', 'appendChild', '#eating_speed_toggle,\x20#performance-monitor-toggle,\x20#wupspeed,\x20#saveGame,\x20#pulse_effects_enabled', 'cpuUsage', 'lineColor', 'playHeadshotSound', 'pCc', '</small>', 'soundEffect', 'BaseTexture', 'min', 'containerImgS', '/get_store.phpitem=open_q.png', 'latitude', 'isFinite', 'data-region-flag', '#joystick_pxy', 'Player_', 'game-view', ';\x20gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb,\x200.0);\x20}', 'measureCpuUsage', 'append', 'onprogress', 'fillRect', 'img_1', '/get_store.phpitem=mp_1.png', 'Brazil', 'https://wormup.in:4000/active-servers?t=', 'data-index', 'fps', 'food_shadow', 'Geometry', '<div\x20style=\x27text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span\x202;\x27>Error\x20loading\x20favorites</div>', '#wear-tint-chooser', '\x20*\x20vec3(', '1px\x205px', 'UAE', 'zero', 'def_skin_base', 'Starting\x20CPU\x20monitoring...', 'MULTIPLY', 'globalGameData', 'tooltip', ';\x20varying\x20vec2\x20', 'visibility', 'toggle', '82px', 'ccg_2', 'headshotNamePos', '&skinId=', 'soundEnabled', 'fadeOut', 'lastRespawnTime', '#mm-params-game-mode', 'https://wormup.in/images/cors-proxy.php?img=cursors/3.png', 'wrapMode', 's_headshot', 'isConsentGiven', '//apis.google.com/js/platform.js', '/get_store.phpitem=moo_3.png', '#adbl-4', 'gdprConsent', 'fuck', 'img_p_2', 'selectedServerInfo', '<div><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20x=\x220\x22\x20y=\x220\x22\x20viewBox=\x220\x200\x20456\x20456\x22\x20xml:\x20space=\x22preserve\x22><rect\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22456\x22\x20height=\x22456\x22\x20fill=\x22#517AD1\x22/><path\x20d=\x22M242.7\x20456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9\x2035.6-79.5\x2079.5-79.5h62v64.6h-44.4c-13.9\x200-25.3\x2011.3-25.3\x2025.3v50h68.5l-9.5\x2071.9h-59.1V456z\x22\x20fill=\x22#fff\x22/></svg><span>', 'openHatFavorites', '#mm-menu-cont', 'activeFlex', 'preroll', 'hatInfoText', '/images/bg-event-pattern-valday2024.png', '#current-cursor-name', '\x22\x20data-cursor=\x22', 'img_i_3', 'outerHeight', 'startMonitoring', '000000', 'toFixed', 'sort', '.setting-item', 'Hexvoid', 'headshot-message', 'Vietnam', 'ddslick', 'children', 'mo1', 'abilityDict', '.green-dot', '#myTooltip', 'center', 'data', 'd_4', 'index.game.result.share', 'Api_listServer', 'option', 'MOUTH', 'version', 'appendTo', 'signOut', 'WHITE', 'امك', 'coins_16000', 'before', 'addEventListener', 'list', 'exitFullscreen', '#toaster-stack', '.error,\x20.alert,\x20.modal,\x20.popup,\x20.notification', ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20text-align:\x20center;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', '&hatId=', 'uri', 'velocity_ability', '#kill_custom_text', 'stopPropagation', '.server-score', 'checked', 'view', 'reset', 'iterator', '#e74a94', 'selectedHats', '4px\x208px', 'forEach', ');\x20}', 'cachedServers', '.close', 'domComplete', '<div\x20class=\x27favorites-popup\x27\x20style=\x27display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px\x20solid\x20#333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0\x204px\x208px\x20rgba(0,0,0,0.5);color:white;\x27><div\x20style=\x27padding:15px\x2020px;background-color:#252538;border-bottom:1px\x20solid\x20#333345;position:relative;display:flex;justify-content:space-between;align-items:center;\x27><button\x20class=\x27close-favorites\x27\x20style=\x27position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0\x205px;line-height:1;font-weight:bold;\x27>&times;</button><h3\x20style=\x27margin:0\x200\x200\x205px;font-size:18px;color:white;padding-left:15px;\x27>Favorite</h3><button\x20class=\x27clear-all-favorites\x27\x20style=\x27padding:4px\x208px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;\x27>Clear\x20All</button></div><div\x20class=\x27favorites-content\x27\x20style=\x27padding:15px\x2020px;overflow-y:auto;max-height:330px;\x27><div\x20class=\x27favorites-grid\x27\x20style=\x27display:grid;grid-template-columns:1fr\x201fr;gap:15px;padding:0;margin:0;\x27></div></div></div>', '#profile-stat-totalTimeSpent', 'imageSrc', 'from', 'Name\x20Game\x20modifications\x20applied\x20successfully!', 'skin', '#popup-withdraw-consent', 'appId', 's_h', '#store-view-prev', 'index.game.result.tryHit', 'btnRePlay', 'selectedData', '<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22rank\x22>', 'color', 'user_data', 'update', '#store-groups', 'Error\x20loading\x20laser\x20options:', 'merge', 'drawSectors', 'glassesDict', 'offsetHeight', '#popup-logout-container', '#laser_color_picker', 'atan', 'Press\x20\x27(\x202\x20)\x27\x20to\x20toggle\x20hats\x20during\x20gameplay', '#settings-music-enabled-switch', 'close', '0x4', 'Kill\x20and\x20Headshot\x20stats\x20will\x20be\x20removed?', '#store-go-coins-button', '#kill_name_position', 'startPreRoll', 'sel_country', '#sector_settings_panel', 'visible', 'Skin\x20not\x20found', '#monster_kill_selector', '_start', 'portion', '/get_store.phpitem=z_o.png', 'customer', 'showFavoritesDialog', '/images/linelogo-valday2024.png', 'util.time.min', 'laserOptions', 'href', 'c_v', 'abs', 'anonymous', '#sector_bg_opacity', '#headshot_name_position', '<button\x20id=\x27open-favorites-btn\x27\x20class=\x27favorites-button\x27>عرض\x20السكنات\x20المفضلة</button>', '/wormy', 'clickOffToClose', 'removeData', 'favorites-overlay', '#error-game-connection-view', '/sdk.js', '#store-item-price', '.ddslick'];
    _0x5c34 = function() {
        return _0x16bbb5;
    }
    ;
    return _0x5c34();
}
(function() {
    var _0x240e6e = _0xb81a41
      , _0x53b237 = {}
      , _0x69e837 = {}
      , _0x3a706a = {}
      , _0x32eec3 = {};
    _0x3a706a['a'] = function(_0x8381bc) {
        var _0x142348 = _0x1792
          , _0x273daf = new String()
          , _0x10d1a8 = parseInt(_0x8381bc[_0x142348(0x4c6)](0x0, 0x2), 0x10);
        for (var _0x1b5d23 = 0x2; _0x1b5d23 < _0x8381bc[_0x142348(0x60c)]; _0x1b5d23 += 0x2) {
            var _0x4c4d68 = parseInt(_0x8381bc[_0x142348(0x4c6)](_0x1b5d23, _0x1b5d23 + 0x2), 0x10);
            _0x273daf += String[_0x142348(0x235)](_0x4c4d68 ^ (_0x10d1a8 = 0xed1 + _0x10d1a8 * 0x11a1 & 0xff));
        }
        ;return _0x273daf;
    }
    ,
    _0x3a706a['b'] = function(_0x72476d) {
        var _0x1c8c4c = _0x1792;
        return Function(_0x1c8c4c(0x195) + _0x72476d + ';\x20')();
    }
    ,
    _0x53b237['c'] = _0x3a706a['b'](_0x240e6e(0x4db)),
    _0x53b237['d'] = _0x53b237['c'][_0x240e6e(0x3e9)],
    _0x3a706a['e'] = function() {
        return _0x53b237['c']['devicePixelRatio'] || 0x1;
    }
    ,
    _0x53b237['c'][_0x240e6e(0x57a)](_0x240e6e(0x2e6), function() {
        var _0x5b8a80 = _0x240e6e;
        let _0x38c4fe = {
            'eie': null,
            'joystick': {
                'positionMode': 'L',
                'checked': !![],
                'size': 0x5a,
                'mode': _0x5b8a80(0x70e),
                'position': {
                    'left': _0x5b8a80(0x30f),
                    'bottom': _0x5b8a80(0x30f)
                },
                'color': _0x5b8a80(0x2d4),
                'pxy': 0x6e
            },
            'on': ![],
            'vj': null,
            'uj': null,
            'm': null,
            'n': null
        };
        var _0x478708;
        let _0x444d21 = {
            's_l': _0x5b8a80(0x353),
            'fullscreen': null,
            'headshot': 0x0,
            's_headshot': 0x0,
            'mobile': ![],
            'mo': 0x1,
            'mo1': {
                'x': -0x1,
                'y': -0x1
            },
            'mo2': {
                'x': -0x1,
                'y': -0x1
            },
            's_kill': 0x0,
            'kill': 0x0,
            'died': 0x0,
            'saveGame': ![],
            'forceUseLocalImages': ![],
            'localStorageEnabled': !![],
            'pm': {},
            'joystick': _0x38c4fe[_0x5b8a80(0x720)],
            'j': null,
            'pk': 0x0,
            'pk0': '',
            'pk1': '',
            'pk2': '',
            'pk3': '',
            'pk4': '',
            'pk5': '',
            'pk6': '',
            'z': 0x1,
            'c_v': 0xde,
            'c_1': _0x5b8a80(0x26c),
            'c_2': 'TeamX',
            'c_3': _0x5b8a80(0x753),
            'c_4': _0x5b8a80(0x4a1),
            'c_5': _0x5b8a80(0x22e),
            'd_1': _0x5b8a80(0x1d0),
            'd_2': _0x5b8a80(0x785),
            'd_3': _0x5b8a80(0x5f5),
            'd_4': _0x5b8a80(0x30a),
            'd_5': _0x5b8a80(0x169),
            'a': 0x0,
            'b': 0x0,
            'c': 0x0,
            'd': 0x0,
            'e': 0x0,
            'f': '',
            'g': 0x24,
            's_w': ![],
            's_n': '',
            'v_z': 0xe,
            'h': ![],
            'sn': !![],
            's': ![],
            'hz': ![],
            'fz': !![],
            'tt': ![],
            'vh': ![],
            'vp': ![],
            'iq': !![],
            'ctrl': ![],
            'r1': !![],
            'sc': 0x0,
            'wi': 0x0,
            'to': 0xa,
            'sm': 0x14,
            'pi': '',
            'pn': '',
            'se': {
                'a': [],
                'b': [],
                'c': [],
                'd': [],
                'e': [],
                'f': [],
                'g': [],
                'h': [],
                'i': [],
                'j': [],
                'k': []
            },
            'st': ![],
            'hh': 0x0,
            'sh': [],
            'ws': [],
            'we': [],
            'wm': [],
            'wg': [],
            'wh': [],
            'sg': [],
            'gg': null,
            'ig': -0x1,
            'so': 0x1,
            're': ![],
            'dg': null
        }
          , _0x4b54d9 = localStorage['getItem'](_0x5b8a80(0x432));
        if (_0x4b54d9 && _0x4b54d9 !== _0x5b8a80(0x115)) {
            let _0x22017c = JSON[_0x5b8a80(0x75f)](_0x4b54d9);
            for (let _0x59f08a in _0x22017c) {
                _0x444d21[_0x59f08a] = _0x22017c[_0x59f08a];
            }
        }
        ;!_0x444d21['favoriteSkins'] && (_0x444d21[_0x5b8a80(0x27e)] = [],
        localStorage['setItem']('SaveGamewx', JSON[_0x5b8a80(0x608)](_0x444d21)));
        _0x444d21[_0x5b8a80(0x2b8)] === undefined && (_0x444d21['currentFavSkinIndex'] = 0x0,
        localStorage[_0x5b8a80(0x128)](_0x5b8a80(0x432), JSON[_0x5b8a80(0x608)](_0x444d21)));
        !_0x444d21[_0x5b8a80(0x58b)] && (_0x444d21[_0x5b8a80(0x58b)] = [],
        localStorage[_0x5b8a80(0x128)](_0x5b8a80(0x432), JSON['stringify'](_0x444d21)));
        _0x444d21[_0x5b8a80(0x246)] === undefined && (_0x444d21[_0x5b8a80(0x246)] = 0x0,
        localStorage[_0x5b8a80(0x128)](_0x5b8a80(0x432), JSON['stringify'](_0x444d21)));
        !window['globalHatTextureCache'] && (window[_0x5b8a80(0x259)] = {});
        window[_0x5b8a80(0x6cd)] = window[_0x5b8a80(0x6cd)] || {
            'eat_animation': 0.0025,
            'smoothCamera': 0.5,
            'PortionSize': 0x2,
            'PortionAura': 1.2,
            'PortionTransparent': 0.8,
            'FoodTransparent': 0.3,
            'FoodSize': 0x2,
            'FoodShadow': 0x2,
            'zoomSpeed': 0.003,
            'soundEnabled': !![],
            'soundVolume': 0x32,
            'soundEffect': 'https://wormx.store/video/hs_2.mp3'
        };
        try {
            if (localStorage[_0x5b8a80(0x48f)]) {
                const _0x3242e7 = JSON['parse'](localStorage[_0x5b8a80(0x48f)]);
                for (const _0x5cd3d6 in _0x3242e7) {
                    wormxObjects[_0x5b8a80(0x68b)](_0x5cd3d6) && (wormxObjects[_0x5cd3d6] = _0x3242e7[_0x5cd3d6]);
                }
            }
        } catch (_0x2862c5) {
            console['error']('Error\x20loading\x20settings:', _0x2862c5);
        }
        ;function _0x51e0ce() {
            var _0x4e31af = _0x5b8a80;
            try {
                if (typeof localStorage === _0x4e31af(0x3fa))
                    return console[_0x4e31af(0x6e5)]('Local\x20storage\x20is\x20not\x20available.'),
                    ![];
                var _0x1436b5 = localStorage[_0x4e31af(0x325)](_0x4e31af(0x47b))
                  , _0x55c3ab = localStorage[_0x4e31af(0x325)](_0x4e31af(0x622));
                return _0x1436b5 && _0x55c3ab ? (typeof _0x444d21 !== 'undefined' && (_0x444d21[_0x4e31af(0x2e2)] = _0x55c3ab,
                _0x444d21[_0x4e31af(0x70f)] = !![],
                localStorage['setItem'](_0x4e31af(0x432), JSON[_0x4e31af(0x608)](_0x444d21))),
                !![]) : (console[_0x4e31af(0x680)](_0x4e31af(0x74e)),
                ![]);
            } catch (_0x1b695e) {
                return console[_0x4e31af(0x6e5)](_0x4e31af(0x135), _0x1b695e),
                ![];
            }
        }
        _0x51e0ce();
        let _0xe5eec1 = function() {
            var _0x5d1d39 = _0x5b8a80;
            let _0x2ce20b = ![];
            _0x444d21[_0x5d1d39(0x62b)] = ![];
            var _0x3d3784 = navigator[_0x5d1d39(0x296)] || navigator['vendor'] || window[_0x5d1d39(0x1fb)];
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i[_0x5d1d39(0x6ca)](_0x3d3784) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x5d1d39(0x6ca)](_0x3d3784['substr'](0x0, 0x4))) && (_0x2ce20b = !![],
            _0x444d21[_0x5d1d39(0x62b)] = !![]),
            _0x2ce20b;
        }
          , _0x142519 = function(_0x5aeac8) {
            var _0x2014e2 = _0x5b8a80;
            _0x444d21['joystick'] ||= _0x38c4fe[_0x2014e2(0x720)],
            _0x444d21[_0x2014e2(0x720)]['checked'] = _0x5aeac8[_0x2014e2(0x586)],
            localStorage['setItem'](_0x2014e2(0x432), JSON[_0x2014e2(0x608)](_0x444d21));
        }
          , _0x41077f = function(_0x58aedc) {
            var _0x44fe20 = _0x5b8a80;
            _0x444d21[_0x44fe20(0x720)] ||= _0x38c4fe[_0x44fe20(0x720)],
            _0x444d21['joystick']['color'] = _0x58aedc['value'],
            localStorage[_0x44fe20(0x128)](_0x44fe20(0x432), JSON['stringify'](_0x444d21));
        }
          , _0x2b4a0b = function(_0x49e6b9) {
            var _0x2fd8f5 = _0x5b8a80;
            _0x444d21['joystick'] ||= _0x38c4fe[_0x2fd8f5(0x720)],
            _0x444d21['joystick'][_0x2fd8f5(0x3bc)] = _0x49e6b9[_0x2fd8f5(0x345)],
            localStorage[_0x2fd8f5(0x128)](_0x2fd8f5(0x432), JSON[_0x2fd8f5(0x608)](_0x444d21));
        }
          , _0x4f08c9 = function(_0x436dac) {
            var _0x14cae1 = _0x5b8a80;
            _0x444d21[_0x14cae1(0x720)] ||= _0x38c4fe[_0x14cae1(0x720)],
            _0x444d21[_0x14cae1(0x720)][_0x14cae1(0x722)] = {
                'left': _0x14cae1(0x786),
                'bottom': _0x14cae1(0x786)
            },
            _0x436dac[_0x14cae1(0x345)] === 'R' && (_0x444d21[_0x14cae1(0x720)]['position'] = {
                'right': '75px',
                'bottom': '75px'
            }),
            _0x444d21['joystick']['positionMode'] = _0x436dac[_0x14cae1(0x345)],
            localStorage[_0x14cae1(0x128)]('SaveGamewx', JSON[_0x14cae1(0x608)](_0x444d21));
        }
          , _0x13e248 = function(_0x59c03d) {
            var _0x4e3a18 = _0x5b8a80;
            _0x444d21[_0x4e3a18(0x720)] ||= _0x38c4fe['joystick'],
            _0x444d21[_0x4e3a18(0x720)]['position'] = {
                'left': (parseInt(_0x59c03d[_0x4e3a18(0x345)]) + 0xa)['toString']() + 'px',
                'bottom': _0x59c03d[_0x4e3a18(0x345)] + 'px'
            },
            _0x444d21[_0x4e3a18(0x720)][_0x4e3a18(0x6bd)] === 'R' && (_0x444d21['joystick'][_0x4e3a18(0x722)] = {
                'right': (parseInt(_0x59c03d[_0x4e3a18(0x345)]) + 0xa)[_0x4e3a18(0x132)]() + 'px',
                'bottom': _0x59c03d[_0x4e3a18(0x345)] + 'px'
            }),
            _0x444d21[_0x4e3a18(0x720)]['pxy'] = _0x59c03d[_0x4e3a18(0x345)],
            localStorage[_0x4e3a18(0x128)](_0x4e3a18(0x432), JSON[_0x4e3a18(0x608)](_0x444d21));
        }
          , _0x40a48f = function(_0x4c1685) {
            var _0x25c28f = _0x5b8a80;
            _0x444d21[_0x25c28f(0x720)] ||= _0x38c4fe['joystick'],
            _0x444d21[_0x25c28f(0x720)]['size'] = _0x4c1685[_0x25c28f(0x345)],
            localStorage[_0x25c28f(0x128)](_0x25c28f(0x432), JSON[_0x25c28f(0x608)](_0x444d21));
        }
          , _0x3d0462 = function(_0x2cb901, _0x2d4505, _0x158c99, _0x4af837, _0x5e8508, _0x1c7e28) {
            var _0x61c5aa = _0x5b8a80;
            let _0x30d5ef = {
                'a': '',
                'b': 0x0,
                'c': ''
            };
            _0x2cb901 > _0x444d21['g'] * 0x64 + 0x64 || _0x2cb901 < _0x444d21['g'] * 0xa || _0x2cb901 === undefined ? (_0x444d21['a'] = _0x2cb901,
            _0x2cb901 === undefined && (_0x444d21['a'] = Math[_0x61c5aa(0x671)](Math['random']() * (_0x444d21['g'] / 0x9) + (_0x444d21['g'] - _0x444d21['g'] / 0x9))),
            _0x30d5ef['a'] = '00') : (_0x444d21['a'] = _0x2cb901 - _0x444d21['g'] * 0xa,
            _0x30d5ef['b'] = _0x444d21['a'],
            _0x444d21['a'] = _0x444d21['a'] % (_0x444d21['g'] / 0x9),
            _0x30d5ef['b'] = (_0x30d5ef['b'] - _0x444d21['a']) / (_0x444d21['g'] / 0x9) + 0x1,
            _0x444d21['a'] = _0x444d21['a'] + (_0x444d21['g'] - _0x444d21['g'] / 0x9),
            _0x30d5ef['a'] = _0x30d5ef['b'][_0x61c5aa(0x132)](_0x444d21['g'])[_0x61c5aa(0x354)](0x2, 0x0));
            _0x2d4505 > _0x444d21['g'] * 0x14 || _0x2d4505 < _0x444d21['g'] / 0x9 * 0x64 || _0x2d4505 === undefined ? _0x2d4505 > _0x444d21['g'] * 0x14 && _0x2d4505 < _0x444d21['g'] * 0x1e ? (_0x444d21['b'] = _0x2d4505 - _0x444d21['g'] * 0x14,
            _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['b'][_0x61c5aa(0x132)](_0x444d21['g']),
            _0x444d21['b'] = 0x0,
            _0x30d5ef['c'] = _0x30d5ef['c'] + '1') : (_0x444d21['b'] = _0x2d4505,
            _0x2d4505 === undefined && (_0x444d21['b'] = 0x0),
            _0x30d5ef['a'] = _0x30d5ef['a'] + '0',
            _0x30d5ef['c'] = _0x30d5ef['c'] + '0') : (_0x444d21['b'] = _0x2d4505 - _0x444d21['g'] / 0x9 * 0x64 + _0x444d21['g'] / _0x444d21['g'],
            _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['b'][_0x61c5aa(0x132)](_0x444d21['g']),
            _0x444d21['b'] = 0x0,
            _0x30d5ef['c'] = _0x30d5ef['c'] + '0');
            _0x158c99 > _0x444d21['g'] * 0x14 || _0x158c99 < _0x444d21['g'] / 0x9 * 0x64 || _0x158c99 === undefined ? _0x158c99 > _0x444d21['g'] * 0x14 && _0x158c99 < _0x444d21['g'] * 0x1e ? (_0x444d21['c'] = _0x158c99 - _0x444d21['g'] * 0x14,
            _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['c'][_0x61c5aa(0x132)](_0x444d21['g']),
            _0x444d21['c'] = 0x0,
            _0x30d5ef['c'] = _0x30d5ef['c'] + '1') : (_0x444d21['c'] = _0x158c99,
            _0x158c99 === undefined && (_0x444d21['c'] = 0x0),
            _0x30d5ef['a'] = _0x30d5ef['a'] + '0',
            _0x30d5ef['c'] = _0x30d5ef['c'] + '0') : (_0x444d21['c'] = _0x158c99 - _0x444d21['g'] / 0x9 * 0x64 + _0x444d21['g'] / _0x444d21['g'],
            _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['c'][_0x61c5aa(0x132)](_0x444d21['g']),
            _0x444d21['c'] = 0x0,
            _0x30d5ef['c'] = _0x30d5ef['c'] + '0');
            _0x4af837 > _0x444d21['g'] * 0x14 || _0x4af837 < _0x444d21['g'] / 0x9 * 0x64 || _0x4af837 === undefined ? _0x4af837 > _0x444d21['g'] * 0x14 && _0x4af837 < _0x444d21['g'] * 0x1e ? (_0x444d21['d'] = _0x4af837 - _0x444d21['g'] * 0x14,
            _0x444d21['d'][_0x61c5aa(0x132)](_0x444d21['g']) === 'N' ? _0x30d5ef['a'] = _0x30d5ef['a'] + '0' : _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['d'][_0x61c5aa(0x132)](_0x444d21['g']),
            _0x444d21['d'] = 0x0,
            _0x30d5ef['c'] = _0x30d5ef['c'] + '1') : (_0x444d21['d'] = _0x4af837,
            _0x4af837 === undefined && (_0x444d21['d'] = 0x0),
            _0x30d5ef['a'] = _0x30d5ef['a'] + '0',
            _0x30d5ef['c'] = _0x30d5ef['c'] + '0') : (_0x444d21['d'] = _0x4af837 - _0x444d21['g'] / 0x9 * 0x64 + _0x444d21['g'] / _0x444d21['g'],
            _0x444d21['d'][_0x61c5aa(0x132)](_0x444d21['g']) === 'N' ? _0x30d5ef['a'] = _0x30d5ef['a'] + '0' : _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['d'][_0x61c5aa(0x132)](_0x444d21['g']),
            _0x444d21['d'] = 0x0,
            _0x30d5ef['c'] = _0x30d5ef['c'] + '0');
            if (_0x5e8508 > _0x444d21['g'] * 0x14 || _0x5e8508 < _0x444d21['g'] / 0x9 * 0x64 || _0x5e8508 === undefined) {
                if (_0x5e8508 > _0x444d21['g'] * 0x14 && _0x5e8508 < _0x444d21['g'] * 0x1e) {
                    _0x30d5ef['b'] = _0x444d21['g'] / _0x444d21['g'];
                    if (_0x5e8508 <= _0x444d21['g'] * 0x14 + (_0x444d21['g'] - 0x1))
                        _0x444d21['e'] = _0x5e8508 - _0x444d21['g'] * 0x14;
                    else {
                        if (_0x5e8508 <= _0x444d21['g'] * 0x14 + (_0x444d21['g'] - 0x1) * 0x2)
                            _0x30d5ef['b'] = _0x30d5ef['b'] * 0x2,
                            _0x444d21['e'] = _0x5e8508 - _0x444d21['g'] * 0x14 - (_0x444d21['g'] - 0x1);
                        else {
                            if (_0x5e8508 <= _0x444d21['g'] * 0x14 + (_0x444d21['g'] - 0x1) * 0x3)
                                _0x444d21['e'] = _0x5e8508 - _0x444d21['g'] * 0x14 - (_0x444d21['g'] - 0x1) * 0x2;
                            else
                                _0x5e8508 <= _0x444d21['g'] * 0x14 + (_0x444d21['g'] - 0x1) * 0x4 ? (_0x30d5ef['b'] = _0x30d5ef['b'] * 0x2,
                                _0x444d21['e'] = _0x5e8508 - _0x444d21['g'] * 0x14 - (_0x444d21['g'] - 0x1) * 0x3) : _0x444d21['e'] = 0x0;
                        }
                    }
                    _0x444d21['e'] >= _0x444d21['g'] && (_0x30d5ef['b'] = 0x2,
                    _0x444d21['e'] = _0x444d21['e'] - (_0x444d21['g'] - 0x1)),
                    _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['e'][_0x61c5aa(0x132)](_0x444d21['g']),
                    _0x444d21['e'] = 0x0,
                    _0x30d5ef['c'] = _0x30d5ef['c'] + '1';
                } else
                    _0x444d21['e'] = _0x5e8508,
                    _0x5e8508 === undefined && (_0x444d21['e'] = 0x0),
                    _0x30d5ef['a'] = _0x30d5ef['a'] + '0',
                    _0x30d5ef['c'] = _0x30d5ef['c'] + '0',
                    _0x30d5ef['b'] = 0x0;
            } else
                _0x30d5ef['b'] = _0x444d21['g'] / _0x444d21['g'],
                _0x5e8508 - _0x444d21['g'] / 0x9 * 0x64 + 0x1 >= _0x444d21['g'] ? (_0x444d21['e'] = _0x5e8508 - (_0x444d21['g'] / 0x9 * 0x64 + (_0x444d21['g'] - 0x1)),
                _0x30d5ef['b'] = _0x30d5ef['b'] * 0x2) : _0x444d21['e'] = _0x5e8508 - _0x444d21['g'] / 0x9 * 0x64 + _0x30d5ef['b'],
                _0x30d5ef['a'] = _0x30d5ef['a'] + _0x444d21['e'][_0x61c5aa(0x132)](_0x444d21['g']),
                _0x444d21['e'] = 0x0,
                _0x30d5ef['c'] = _0x30d5ef['c'] + '0';
            if (_0x30d5ef['a'] == _0x61c5aa(0x55f))
                _0x444d21['f'] = _0x1c7e28[_0x61c5aa(0x673)](0x0, 0x16)[_0x61c5aa(0x286)](0x16);
            else {
                let _0x12ad74 = parseInt(_0x30d5ef['c'], 0x2);
                _0x5e8508 > 0x316 && _0x5e8508 <= 0x35c && (_0x12ad74 += 0x10),
                _0x30d5ef['b'] <= 0x1 ? _0x30d5ef['a'] = _0x30d5ef['a'][_0x61c5aa(0x673)](0x0, 0x5) + '.' + _0x30d5ef['a']['substr'](0x5, 0x1) : _0x30d5ef['a'] = _0x30d5ef['a'][_0x61c5aa(0x673)](0x0, 0x4) + '.' + _0x30d5ef['a'][_0x61c5aa(0x673)](0x4, 0x2),
                _0x1c7e28 == '' && (_0x1c7e28 = _0x61c5aa(0x779)),
                _0x30d5ef['c'] == _0x61c5aa(0x13b) ? (_0x1c7e28[_0x61c5aa(0x673)](0x17, 0x1) == '.' && (_0x1c7e28 = _0x1c7e28[_0x61c5aa(0x673)](0x0, 0x17)[_0x61c5aa(0x286)](0x17) + '\x20' + _0x1c7e28[_0x61c5aa(0x673)](0x18, 0x1)[_0x61c5aa(0x286)](0x1)),
                _0x444d21['f'] = (_0x1c7e28[_0x61c5aa(0x60c)] >= 0x20 ? _0x1c7e28[_0x61c5aa(0x673)](0x0, 0x19) : _0x1c7e28[_0x61c5aa(0x673)](0x0, 0x19)['padEnd'](0x19)) + _0x30d5ef['a']) : _0x444d21['f'] = (_0x1c7e28['length'] >= 0x20 ? _0x1c7e28[_0x61c5aa(0x673)](0x0, 0x17) : _0x1c7e28['substr'](0x0, 0x17)[_0x61c5aa(0x286)](0x17)) + '.' + _0x12ad74[_0x61c5aa(0x132)](_0x444d21['g']) + _0x30d5ef['a'],
                _0x444d21['f'] = _0x444d21['f'][_0x61c5aa(0x156)]('\x20', '_');
            }
        }
          , _0x2759a4 = function(_0x330225) {
            var _0x78a43 = _0x5b8a80;
            let _0xe64f6b;
            try {
                return _0x444d21[_0x78a43(0x720)] ||= _0x38c4fe[_0x78a43(0x720)],
                _0xe5eec1() && _0x330225 && _0x444d21[_0x78a43(0x720)][_0x78a43(0x586)] && (_0xe64f6b = nipplejs[_0x78a43(0x4cb)](_0x444d21[_0x78a43(0x720)]))['on'](_0x78a43(0x1b0), function(_0x164515, _0x49984b) {
                    var _0x4597a4 = _0x78a43;
                    _0x38c4fe[_0x4597a4(0x4a4)]['fo'] = _0x49984b[_0x4597a4(0x32a)][_0x4597a4(0x600)] <= Math['PI'] ? _0x49984b[_0x4597a4(0x32a)][_0x4597a4(0x600)] * -0x1 : Math['PI'] - (_0x49984b[_0x4597a4(0x32a)][_0x4597a4(0x600)] - Math['PI']);
                }),
                _0xe64f6b;
            } catch (_0x138977) {
                console[_0x78a43(0x6e5)](_0x138977);
            }
        }
          , _0x1e8852 = function(_0x3876c3) {
            var _0x54fd9e = _0x5b8a80;
            let _0x5bd7ee = {
                'a': 0x0,
                'b': 0x0,
                'c': 0x0,
                'd': 0x0,
                'e': 0x0,
                'f': '',
                'g': 0x0,
                'h': '',
                'i': ''
            }
              , _0x19a7bf = 0x0;
            _0x5bd7ee['h'] = _0x3876c3[_0x54fd9e(0x673)](-0x9);
            if (_0x5bd7ee['h'][_0x54fd9e(0x673)](0x0, 0x1) != '.')
                _0x5bd7ee['i'] = _0x54fd9e(0x13b);
            else
                (_0x19a7bf = parseInt(_0x5bd7ee['h'][_0x54fd9e(0x673)](0x1, 0x1), _0x444d21['g'])) > 0xf ? (_0x19a7bf -= 0x10,
                _0x5bd7ee['i'] = _0x19a7bf[_0x54fd9e(0x132)](0x2)['padStart'](0x4, 0x0)) : (_0x5bd7ee['i'] = _0x19a7bf[_0x54fd9e(0x132)](0x2)[_0x54fd9e(0x354)](0x4, 0x0),
                _0x19a7bf = 0x0);
            return _0x5bd7ee['f'] = _0x3876c3[_0x54fd9e(0x673)](-0x7),
            _0x5bd7ee['f'][_0x54fd9e(0x673)](0x0, 0x2) != '00' && (_0x5bd7ee['a'] = parseInt(_0x5bd7ee['f'][_0x54fd9e(0x673)](0x0, 0x2), _0x444d21['g']),
            _0x5bd7ee['a'] = (_0x5bd7ee['a'] - 0x1) * (_0x444d21['g'] / 0x9) + _0x444d21['g'] * 0xa - (_0x444d21['g'] - 0x4)),
            _0x5bd7ee['f'][_0x54fd9e(0x673)](0x5, 0x1) == '.' ? _0x5bd7ee['f'][_0x54fd9e(0x673)](0x6, 0x1) != '0' && (_0x5bd7ee['e'] = parseInt(_0x5bd7ee['f'][_0x54fd9e(0x673)](0x6, 0x1), _0x444d21['g']),
            _0x5bd7ee['i']['substr'](0x3, 0x1) != '0' ? _0x19a7bf > 0x0 ? _0x5bd7ee['e'] = _0x5bd7ee['e'] + _0x444d21['g'] * 0x14 + (_0x444d21['g'] - 0x1) * 0x2 : _0x5bd7ee['e'] = _0x5bd7ee['e'] + _0x444d21['g'] * 0x14 : _0x5bd7ee['e'] = _0x5bd7ee['e'] - 0x1 + _0x444d21['g'] / 0x9 * 0x64) : (_0x5bd7ee['e'] = parseInt(_0x5bd7ee['f'][_0x54fd9e(0x673)](0x6, 0x1), _0x444d21['g']),
            _0x5bd7ee['i'][_0x54fd9e(0x673)](0x3, 0x1) != '0' ? _0x19a7bf > 0x0 ? _0x5bd7ee['e'] = _0x5bd7ee['e'] + _0x444d21['g'] * 0x14 + (_0x444d21['g'] - 0x1) * 0x3 : _0x5bd7ee['e'] = _0x5bd7ee['e'] + _0x444d21['g'] * 0x14 + (_0x444d21['g'] - 0x1) : _0x5bd7ee['e'] = _0x5bd7ee['e'] + (_0x444d21['g'] / 0x9 * 0x64 + (_0x444d21['g'] - 0x1))),
            _0x5bd7ee['f'] = _0x5bd7ee['f'][_0x54fd9e(0x390)]('.', ''),
            _0x5bd7ee['f'][_0x54fd9e(0x673)](0x2, 0x1) != '0' && (_0x5bd7ee['b'] = parseInt(_0x5bd7ee['f'][_0x54fd9e(0x673)](0x2, 0x1), _0x444d21['g']),
            _0x5bd7ee['i'][_0x54fd9e(0x673)](0x0, 0x1) != '0' ? _0x5bd7ee['b'] = _0x5bd7ee['b'] + _0x444d21['g'] * 0x14 : _0x5bd7ee['b'] = _0x5bd7ee['b'] - 0x1 + _0x444d21['g'] / 0x9 * 0x64),
            _0x5bd7ee['f'][_0x54fd9e(0x673)](0x3, 0x1) != '0' && (_0x5bd7ee['c'] = parseInt(_0x5bd7ee['f']['substr'](0x3, 0x1), _0x444d21['g']),
            _0x5bd7ee['i'][_0x54fd9e(0x673)](0x1, 0x1) != '0' ? _0x5bd7ee['c'] = _0x5bd7ee['c'] + _0x444d21['g'] * 0x14 : _0x5bd7ee['c'] = _0x5bd7ee['c'] - 0x1 + _0x444d21['g'] / 0x9 * 0x64),
            _0x5bd7ee['f'][_0x54fd9e(0x673)](0x4, 0x1) != '0' && (_0x5bd7ee['d'] = parseInt(_0x5bd7ee['f']['substr'](0x4, 0x1), _0x444d21['g']),
            _0x5bd7ee['i'][_0x54fd9e(0x673)](0x2, 0x1) != '0' ? _0x5bd7ee['d'] = _0x5bd7ee['d'] + _0x444d21['g'] * 0x14 : _0x5bd7ee['d'] = _0x5bd7ee['d'] - 0x1 + _0x444d21['g'] / 0x9 * 0x64),
            _0x5bd7ee;
        }
          , _0x314953 = function(_0x42b82a) {
            return !(_0x42b82a > _0x444d21['g'] * 0x1e) && !(_0x42b82a < _0x444d21['g'] / 0x9 * 0x64) || _0x42b82a == 0x0;
        }
          , _0x1d65d1 = function(_0x283742) {
            var _0x443e02 = _0x5b8a80;
            return /^(.{25})(\w{5}\.\w{1})$/['test'](_0x283742) || /^(.{25})(\w{4}\.\w{2})$/[_0x443e02(0x6ca)](_0x283742);
        }
          , _0x13bb2f = function(_0x574d53) {
            var _0x360844 = _0x5b8a80;
            _0x574d53 = _0x574d53[_0x360844(0x156)]('_', '\x20');
            if (/^(.{25})(\w{7})$/[_0x360844(0x6ca)](_0x574d53)) {
                for (_0x574d53 = _0x574d53[_0x360844(0x673)](0x0, 0xf)[_0x360844(0x70b)](); _0x574d53['substr'](_0x574d53[_0x360844(0x60c)] - 0x1, 0x1) == '.'; ) {
                    _0x574d53 = _0x574d53[_0x360844(0x673)](0x0, _0x574d53['length'] - 0x1);
                }
                ;return _0x574d53;
            }
            ;return /^(.{25})(\w{5}\.\w{1})$/[_0x360844(0x6ca)](_0x574d53) || /^(.{25})(\w{4}\.\w{2})$/[_0x360844(0x6ca)](_0x574d53) ? _0x574d53['substr'](-0x9)[_0x360844(0x673)](0x0, 0x1) != '.' ? _0x574d53[_0x360844(0x673)](0x0, 0x19)[_0x360844(0x70b)]() : _0x574d53[_0x360844(0x673)](0x0, 0x17)[_0x360844(0x70b)]() : _0x574d53;
        };
        _0x444d21[_0x5b8a80(0x505)] = !![];
        var _0x3b8a7a = localStorage['getItem']('oco');
        localStorage[_0x5b8a80(0x128)](_0x5b8a80(0x3fb), _0x5b8a80(0x5b0)),
        localStorage[_0x5b8a80(0x128)](_0x5b8a80(0x155), 'There\x20was\x20a\x20problem\x20connecting!'),
        localStorage['setItem'](_0x5b8a80(0x541), _0x5b8a80(0x267));
        var _0x319c3c = localStorage[_0x5b8a80(0x325)](_0x5b8a80(0x1a3))
          , _0x33ecbf = localStorage[_0x5b8a80(0x325)]('wupi') != null ? localStorage[_0x5b8a80(0x325)](_0x5b8a80(0x47b))[_0x5b8a80(0x5d5)](',') : localStorage['getItem'](_0x5b8a80(0x47b))
          , _0x43cf18 = localStorage[_0x5b8a80(0x325)](_0x5b8a80(0x622))
          , _0x4ba5d2 = localStorage[_0x5b8a80(0x325)](_0x5b8a80(0x3f9))
          , _0x42e18c = localStorage[_0x5b8a80(0x325)](_0x5b8a80(0x6c0));
        $('<input\x20type=\x22hidden\x22\x20id=\x22port_id\x22\x20value=\x22\x22>')[_0x5b8a80(0x24b)](_0x5b8a80(0x2ef)),
        $(_0x5b8a80(0x6d8))[_0x5b8a80(0x24b)](_0x5b8a80(0x2ef)),
        $('<input\x20type=\x22hidden\x22\x20id=\x22port_name\x22\x20value=\x22\x22>')[_0x5b8a80(0x24b)](_0x5b8a80(0x2ef)),
        $(_0x5b8a80(0x391))[_0x5b8a80(0x24b)](_0x5b8a80(0x2ef)),
        $('#mm-action-buttons')[_0x5b8a80(0x3f2)](function() {
            var _0x11393b = _0x5b8a80;
            $(_0x11393b(0x3ca))[_0x11393b(0x410)](''),
            $('#port_name')[_0x11393b(0x410)]('');
        }),
        $(_0x5b8a80(0x3c6))[_0x5b8a80(0x4fa)](_0x5b8a80(0x157), _0x5b8a80(0x19e)),
        $(_0x5b8a80(0x2a1))[_0x5b8a80(0x4fa)](_0x5b8a80(0x157), _0x5b8a80(0x19e)),
        $(_0x5b8a80(0x21a))['css'](_0x5b8a80(0x157), _0x5b8a80(0x19e)),
        $('#mm-menu-cont')['css'](_0x5b8a80(0x157), _0x5b8a80(0x776)),
        $(_0x5b8a80(0x697))[_0x5b8a80(0x4fa)](_0x5b8a80(0x157), _0x5b8a80(0x776)),
        $(_0x5b8a80(0x1c1))['css'](_0x5b8a80(0x157), _0x5b8a80(0x776));
        var _0x2726a3 = $('<img>', {
            'id': _0x5b8a80(0x19d),
            'src': 'https://i.imgur.com/KNa9b6D.png',
            'alt': _0x5b8a80(0x19d)
        });
        $(_0x5b8a80(0x2f6))[_0x5b8a80(0x29a)](_0x2726a3),
        $(_0x5b8a80(0x74a))[_0x5b8a80(0x4b5)](_0x5b8a80(0x225)),
        $(_0x5b8a80(0x1c1))['css'](_0x5b8a80(0x157), 'block'),
        $(_0x5b8a80(0x62c))[_0x5b8a80(0x4fa)]('position', 'absolute'),
        $(_0x5b8a80(0x62c))['css']('top', _0x5b8a80(0x3b5)),
        $(_0x5b8a80(0x62c))['css'](_0x5b8a80(0x4e0), _0x5b8a80(0x1e4)),
        $('#delete-account-view')[_0x5b8a80(0x4fa)](_0x5b8a80(0x157), _0x5b8a80(0x19e));
        var _0x83e7a4 = null
          , _0x3bbb88 = null
          , _0x4c5f33 = ![]
          , _0x41af32 = 0x37
          , _0x280ab2 = 0x1
          , _0x428de2 = !![];
        if (_0x33ecbf && _0x43cf18 && _0x43cf18 == _0x444d21[_0x5b8a80(0x2e2)])
            ;
        else
            fetch(_0x5b8a80(0x447), {
                'headers': {
                    'Content-Type': _0x5b8a80(0x34c)
                },
                'method': _0x5b8a80(0x4bf),
                'body': JSON[_0x5b8a80(0x608)]({
                    'img': 'i2'
                })
            })['then'](async function(_0x27adff) {
                var _0x38d4dd = _0x5b8a80;
                _0x33ecbf = (_0x27adff = await _0x27adff[_0x38d4dd(0x698)]())['i'][_0x38d4dd(0x5d5)]('.'),
                localStorage['setItem']('wupi', _0x33ecbf),
                localStorage[_0x38d4dd(0x128)]('wupit', _0x27adff['vs']),
                _0x444d21[_0x38d4dd(0x2e2)] = _0x27adff['vs'],
                window[_0x38d4dd(0x68f)][_0x38d4dd(0x1ed)]();
            })[_0x5b8a80(0x381)](function(_0x4a240c) {});
        ;var _0x4db385 = PIXI[_0x5b8a80(0x213)][_0x5b8a80(0x595)](_0x444d21[_0x5b8a80(0x688)] + _0x5b8a80(0x4a9))
          , _0x20e263 = PIXI[_0x5b8a80(0x213)][_0x5b8a80(0x595)](_0x444d21[_0x5b8a80(0x688)] + _0x5b8a80(0x51e))
          , _0x3a3827 = PIXI[_0x5b8a80(0x213)][_0x5b8a80(0x595)](_0x444d21['s_l'] + _0x5b8a80(0x43c))
          , _0x9553a6 = PIXI['Texture'][_0x5b8a80(0x595)](_0x444d21['s_l'] + '/get_store.phpitem=open_w.png')
          , _0x58d665 = PIXI[_0x5b8a80(0x213)][_0x5b8a80(0x595)](_0x444d21['s_l'] + _0x5b8a80(0x338))
          , _0xa77f29 = PIXI[_0x5b8a80(0x213)]['from'](_0x444d21[_0x5b8a80(0x688)] + _0x5b8a80(0x437))
          , _0x2c66a6 = PIXI[_0x5b8a80(0x213)][_0x5b8a80(0x595)](_0x444d21[_0x5b8a80(0x688)] + _0x5b8a80(0x2df))
          , _0x11f129 = PIXI[_0x5b8a80(0x213)][_0x5b8a80(0x595)](_0x444d21[_0x5b8a80(0x688)] + _0x5b8a80(0x5bb))
          , _0xa85e3 = new PIXI[(_0x5b8a80(0x41f))](_0x4db385);
        _0xa85e3[_0x5b8a80(0x6f6)] = !![],
        _0xa85e3[_0x5b8a80(0x31d)][_0x5b8a80(0x170)](0.5),
        _0xa85e3['x'] = -0x41,
        _0xa85e3['y'] = 0x19,
        _0xa85e3[_0x5b8a80(0x12f)] = !![],
        _0xa85e3[_0x5b8a80(0x6f6)] = !![];
        var _0x9f96af = new PIXI['Sprite'](_0x3a3827);
        _0x9f96af[_0x5b8a80(0x6f6)] = !![],
        _0x9f96af[_0x5b8a80(0x31d)][_0x5b8a80(0x170)](0.5),
        _0x9f96af['x'] = -0x21,
        _0x9f96af['y'] = 0x19,
        _0x9f96af[_0x5b8a80(0x12f)] = !![],
        _0x9f96af['buttonMode'] = !![];
        var _0x31aef3 = new PIXI['Sprite'](_0x58d665);
        _0x31aef3[_0x5b8a80(0x6f6)] = !![],
        _0x31aef3['anchor'][_0x5b8a80(0x170)](0.5),
        _0x31aef3['x'] = -0x1,
        _0x31aef3['y'] = 0x19,
        _0x31aef3[_0x5b8a80(0x12f)] = !![],
        _0x31aef3[_0x5b8a80(0x6f6)] = !![];
        var _0x533cda = new PIXI[(_0x5b8a80(0x41f))](_0x11f129);
        _0x533cda[_0x5b8a80(0x6f6)] = !![],
        _0x533cda[_0x5b8a80(0x31d)][_0x5b8a80(0x170)](0.5),
        _0x533cda['x'] = -0x1,
        _0x533cda['y'] = 0x19,
        _0x533cda[_0x5b8a80(0x12f)] = !![],
        _0x533cda[_0x5b8a80(0x6f6)] = !![];
        var _0x576da0 = new PIXI[(_0x5b8a80(0x41f))](_0x2c66a6);
        _0x576da0[_0x5b8a80(0x6f6)] = !![],
        _0x576da0[_0x5b8a80(0x31d)][_0x5b8a80(0x170)](0.5),
        _0x576da0['x'] = -0x21,
        _0x576da0['y'] = 0x19,
        _0x576da0['interactive'] = !![],
        _0x576da0[_0x5b8a80(0x6f6)] = !![],
        _0x9f96af[_0x5b8a80(0x626)] = 0.25,
        _0xa85e3['alpha'] = 0.25,
        _0x31aef3[_0x5b8a80(0x626)] = 0.25,
        _0x576da0['alpha'] = 0.25,
        _0x533cda['alpha'] = 0.25;
        var _0x17f008 = new PIXI[(_0x5b8a80(0x787))](_0x5b8a80(0x6aa),{
            'fontFamily': _0x5b8a80(0x708),
            'fill': _0x5b8a80(0x756),
            'fontSize': 0xc
        });
        _0x17f008[_0x5b8a80(0x31d)]['x'] = 0.5,
        _0x17f008[_0x5b8a80(0x722)]['x'] = 0x6e;
        var _0x373087 = document[_0x5b8a80(0x374)](_0x5b8a80(0x269))
          , _0x17ea21 = document[_0x5b8a80(0x374)](_0x5b8a80(0x524))
          , _0x1abd23 = $(_0x5b8a80(0x547));
        _0x53b237['d'][_0x5b8a80(0x374)](_0x5b8a80(0x672))[_0x5b8a80(0x75d)][_0x5b8a80(0x157)] = _0x5b8a80(0x776),
        function(_0x466d82, _0x5c1e79, _0x2dbad8) {
            var _0x193c19 = _0x5b8a80;
            function _0x5b42d4(_0x551982, _0x428b94) {
                return _typeof(_0x551982) === _0x428b94;
            }
            function _0x25f721() {
                var _0x27f0a6 = _0x1792;
                if (_typeof(_0x5c1e79['createElement']) != 'function')
                    return _0x5c1e79[_0x27f0a6(0x2ea)](arguments[0x0]);
                else
                    return _0x32c0d8 ? _0x5c1e79['createElementNS'][_0x27f0a6(0x45d)](_0x5c1e79, _0x27f0a6(0x471), arguments[0x0]) : _0x5c1e79['createElement'][_0x27f0a6(0x31e)](_0x5c1e79, arguments);
            }
            var _0x581256 = []
              , _0x25c5d9 = []
              , _0x2f672d = {
                '_version': _0x193c19(0x4a3),
                '_config': {
                    'classPrefix': '',
                    'enableClasses': !![],
                    'enableJSClass': !![],
                    'usePrefixes': !![]
                },
                '_q': [],
                'on': function(_0x483007, _0x79550c) {
                    var _0x142d04 = this;
                    setTimeout(function() {
                        _0x79550c(_0x142d04[_0x483007]);
                    }, 0x0);
                },
                'addTest': function(_0x3ec2bf, _0x5b639f, _0x753980) {
                    _0x25c5d9['push']({
                        'name': _0x3ec2bf,
                        'fn': _0x5b639f,
                        'options': _0x753980
                    });
                },
                'addAsyncTest': function(_0x5eb316) {
                    _0x25c5d9['push']({
                        'name': null,
                        'fn': _0x5eb316
                    });
                }
            };
            function _0x1410d3() {}
            _0x1410d3[_0x193c19(0x66b)] = _0x2f672d,
            _0x1410d3 = new _0x1410d3();
            var _0xbc2ab9 = ![];
            try {
                _0xbc2ab9 = _0x193c19(0x38d)in _0x466d82 && _0x466d82[_0x193c19(0x38d)][_0x193c19(0x48a)] === 0x2;
            } catch (_0x2e7201) {}
            ;_0x1410d3[_0x193c19(0x677)](_0x193c19(0x183), _0xbc2ab9);
            var _0x2808a4 = _0x5c1e79['documentElement']
              , _0x32c0d8 = _0x2808a4['nodeName']['toLowerCase']() === _0x193c19(0x4e1);
            _0x1410d3[_0x193c19(0x677)](_0x193c19(0x12c), function() {
                var _0x42f44f = _0x193c19
                  , _0x40c5f5 = _0x25f721('canvas');
                return !!_0x40c5f5[_0x42f44f(0x6ff)] && !!_0x40c5f5[_0x42f44f(0x6ff)]('2d');
            }),
            _0x1410d3[_0x193c19(0x677)](_0x193c19(0x766), function() {
                var _0x288bcb = _0x193c19;
                return _0x1410d3[_0x288bcb(0x12c)] !== ![] && _typeof(_0x25f721('canvas')[_0x288bcb(0x6ff)]('2d')[_0x288bcb(0x6b8)]) == 'function';
            }),
            (function() {
                var _0x3c6952 = _0x193c19, _0x22969e, _0x182b18, _0x3475d6, _0x35aa6b, _0x5d569c, _0x5088cd, _0x4b059e;
                for (var _0x42f404 in _0x25c5d9) {
                    if (_0x25c5d9[_0x3c6952(0x68b)](_0x42f404)) {
                        _0x22969e = [];
                        if ((_0x182b18 = _0x25c5d9[_0x42f404])[_0x3c6952(0x4fd)] && (_0x22969e[_0x3c6952(0x1bc)](_0x182b18['name'][_0x3c6952(0x144)]()),
                        _0x182b18['options'] && _0x182b18[_0x3c6952(0x4b3)][_0x3c6952(0x46f)] && _0x182b18[_0x3c6952(0x4b3)]['aliases'][_0x3c6952(0x60c)]))
                            for (_0x3475d6 = 0x0; _0x3475d6 < _0x182b18[_0x3c6952(0x4b3)][_0x3c6952(0x46f)]['length']; _0x3475d6++) {
                                _0x22969e[_0x3c6952(0x1bc)](_0x182b18[_0x3c6952(0x4b3)][_0x3c6952(0x46f)][_0x3475d6][_0x3c6952(0x144)]());
                            }
                        ;_0x35aa6b = _0x5b42d4(_0x182b18['fn'], 'function') ? _0x182b18['fn']() : _0x182b18['fn'],
                        _0x5d569c = 0x0;
                        for (; _0x5d569c < _0x22969e[_0x3c6952(0x60c)]; _0x5d569c++) {
                            (_0x4b059e = (_0x5088cd = _0x22969e[_0x5d569c])['split']('.'))[_0x3c6952(0x60c)] === 0x1 ? _0x1410d3[_0x4b059e[0x0]] = _0x35aa6b : (!!_0x1410d3[_0x4b059e[0x0]] && !(_0x1410d3[_0x4b059e[0x0]]instanceof Boolean) && (_0x1410d3[_0x4b059e[0x0]] = new Boolean(_0x1410d3[_0x4b059e[0x0]])),
                            _0x1410d3[_0x4b059e[0x0]][_0x4b059e[0x1]] = _0x35aa6b),
                            _0x581256[_0x3c6952(0x1bc)]((_0x35aa6b ? '' : _0x3c6952(0x18d)) + _0x4b059e[_0x3c6952(0x366)]('-'));
                        }
                    }
                }
            }()),
            function(_0x108ff0) {
                var _0x27cb2b = _0x193c19
                  , _0x5d30c3 = _0x2808a4[_0x27cb2b(0x3e4)]
                  , _0x3b6351 = _0x1410d3[_0x27cb2b(0x4ab)]['classPrefix'] || '';
                _0x32c0d8 && (_0x5d30c3 = _0x5d30c3[_0x27cb2b(0x491)]);
                if (_0x1410d3[_0x27cb2b(0x4ab)]['enableJSClass']) {
                    var _0x1db192 = RegExp(_0x27cb2b(0x69b) + _0x3b6351 + _0x27cb2b(0x5f7));
                    _0x5d30c3 = _0x5d30c3[_0x27cb2b(0x390)](_0x1db192, '$1' + _0x3b6351 + _0x27cb2b(0x3fc));
                }
                ;_0x1410d3['_config'][_0x27cb2b(0x2c3)] && (_0x5d30c3 += '\x20' + _0x3b6351 + _0x108ff0['join']('\x20' + _0x3b6351),
                _0x32c0d8 ? _0x2808a4[_0x27cb2b(0x3e4)]['baseVal'] = _0x5d30c3 : _0x2808a4['className'] = _0x5d30c3);
            }(_0x581256),
            delete _0x2f672d[_0x193c19(0x677)],
            delete _0x2f672d[_0x193c19(0x36d)];
            for (var _0x6bf911 = 0x0; _0x6bf911 < _0x1410d3['_q'][_0x193c19(0x60c)]; _0x6bf911++) {
                _0x1410d3['_q'][_0x6bf911]();
            }
            ;_0x466d82[_0x193c19(0x487)] = _0x1410d3;
        }(window, document);
        if (!Modernizr[_0x5b8a80(0x183)] || !Modernizr['canvas'] || !Modernizr[_0x5b8a80(0x766)]) {
            _0x53b237['d']['getElementById']('error-view')[_0x5b8a80(0x75d)][_0x5b8a80(0x157)] = 'block';
            return;
        }
        ;_0x32eec3['f'] = {
            'g': function(_0x3981cc, _0x13b101, _0x1af381) {
                var _0x2db95b = _0x5b8a80;
                _0x3981cc[_0x2db95b(0x6d7)](),
                _0x3981cc[_0x2db95b(0x34a)](_0x13b101, _0x1af381);
            },
            'h': function(_0x2e615d, _0x2db13f, _0x220a17) {
                _0x2e615d['stop'](),
                _0x2e615d['fadeOut'](_0x2db13f, _0x220a17);
            }
        },
        _0x32eec3['i'] = _0x3a706a['b'](_0x5b8a80(0x38d)),
        _0x32eec3['j'] = _0x3a706a['b'](_0x5b8a80(0x2d2)),
        _0x1ea237 = (_0x2f9ea3 = _0x3a706a['b'](_0x5b8a80(0x41d)))[_0x5b8a80(0x6fc)],
        _0x2279e0 = _0x2f9ea3[_0x5b8a80(0x775)],
        _0x32eec3['k'] = {
            'l': _0x2f9ea3[_0x5b8a80(0x136)],
            'm': _0x2f9ea3[_0x5b8a80(0x51b)],
            'n': _0x2f9ea3['Texture'],
            'o': _0x2f9ea3['Renderer'],
            'p': _0x2f9ea3[_0x5b8a80(0x4ef)],
            'q': _0x2f9ea3[_0x5b8a80(0x248)],
            'r': _0x2f9ea3[_0x5b8a80(0x3e1)],
            's': _0x2f9ea3[_0x5b8a80(0x41f)],
            't': _0x2f9ea3['Text'],
            'u': _0x2f9ea3[_0x5b8a80(0x531)],
            'v': _0x2f9ea3[_0x5b8a80(0x4ba)],
            'w': {
                'z': _0x1ea237[_0x5b8a80(0x61a)],
                'A': _0x1ea237[_0x5b8a80(0x2e7)],
                'B': _0x1ea237[_0x5b8a80(0x53a)]
            },
            'C': {
                'D': _0x2279e0[_0x5b8a80(0x441)]
            },
            'F': {
                'G': function(_0x5db1cc) {
                    var _0x2bb784 = _0x5b8a80
                      , _0x273e74 = _0x5db1cc[_0x2bb784(0x3bd)];
                    _0x273e74 != null && _0x273e74['removeChild'](_0x5db1cc);
                }
            }
        },
        _0x69e837['H'] = {
            'I': _0x53b237['c'][_0x5b8a80(0x290)],
            'J': _0x5b8a80(0x64d),
            'K': _0x5b8a80(0x3f3),
            'L': _0x5b8a80(0x5be),
            'M': _0x5b8a80(0x3cf),
            'N': _0x5b8a80(0x740),
            'O': _0x5b8a80(0x559)
        },
        _0x69e837['H']['P'] = ((_0xc6a301 = _0x53b237['c'][_0x5b8a80(0x605)]) || (_0xc6a301 = 'en'),
        _0xc6a301),
        _0x69e837['H']['Q'] = (function() {
            var _0x403342 = _0x5b8a80, _0x2b34e8;
            switch (_0x69e837['H']['P']) {
            case 'uk':
                _0x2b34e8 = 'uk_UA';
                break;
            case 'de':
                _0x2b34e8 = 'de_DE';
                break;
            case 'fr':
                _0x2b34e8 = _0x403342(0x457);
                break;
            case 'es':
                _0x2b34e8 = _0x403342(0x651);
                break;
            default:
                _0x2b34e8 = _0x403342(0x3ec);
            }
            ;return _0x2b34e8;
        }()),
        moment[_0x5b8a80(0x44f)](_0x69e837['H']['Q']),
        ooo = null,
        _0x69e837['S'] = 6.283185307179586,
        _0x69e837['T'] = 3.141592653589793,
        _0x439a5b = _0x53b237['c']['I18N_MESSAGES'],
        _0x3a706a['U'] = function(_0x177fcc) {
            return _0x439a5b[_0x177fcc];
        }
        ,
        _0x3a706a['V'] = function(_0x4e4ccc) {
            if (_0x4e4ccc[_0x69e837['H']['P']])
                return _0x4e4ccc[_0x69e837['H']['P']];
            else
                return _0x4e4ccc['en'] ? _0x4e4ccc['en'] : _0x4e4ccc['x'];
        }
        ,
        _0x3a706a['W'] = function(_0x17a0d6) {
            return encodeURI(_0x17a0d6);
        }
        ,
        _0x3a706a['X'] = function(_0x1b1ff6, _0x5597b9) {
            return setInterval(_0x1b1ff6, _0x5597b9);
        }
        ,
        _0x3a706a['Y'] = function(_0x104373, _0x45dd9f) {
            return setTimeout(_0x104373, _0x45dd9f);
        }
        ,
        _0x3a706a['Z'] = function(_0x1ed53b) {
            clearTimeout(_0x1ed53b);
        }
        ,
        _0x3a706a['$'] = function(_0x4c87c0) {
            var _0x1cce91 = _0x5b8a80
              , _0x3b7b11 = (_0x3a706a['_'](_0x4c87c0) % 0x3c)[_0x1cce91(0x132)]()
              , _0x1ec24c = (_0x3a706a['_'](_0x4c87c0 / 0x3c) % 0x3c)[_0x1cce91(0x132)]()
              , _0x16571d = (_0x3a706a['_'](_0x4c87c0 / 0xe10) % 0x18)[_0x1cce91(0x132)]()
              , _0x244beb = _0x3a706a['_'](_0x4c87c0 / 0x15180)[_0x1cce91(0x132)]()
              , _0x1f8a79 = _0x3a706a['U'](_0x1cce91(0x1e8))
              , _0x1a658f = _0x3a706a['U'](_0x1cce91(0x4d4))
              , _0x4d8ad1 = _0x3a706a['U'](_0x1cce91(0x5bf))
              , _0x45f100 = _0x3a706a['U'](_0x1cce91(0x660));
            if (_0x244beb > 0x0)
                return _0x244beb + '\x20' + _0x1f8a79 + '\x20' + _0x16571d + '\x20' + _0x1a658f + '\x20' + _0x1ec24c + '\x20' + _0x4d8ad1 + '\x20' + _0x3b7b11 + '\x20' + _0x45f100;
            else {
                if (_0x16571d > 0x0)
                    return _0x16571d + '\x20' + _0x1a658f + '\x20' + _0x1ec24c + '\x20' + _0x4d8ad1 + '\x20' + _0x3b7b11 + '\x20' + _0x45f100;
                else
                    return _0x1ec24c > 0x0 ? _0x1ec24c + '\x20' + _0x4d8ad1 + '\x20' + _0x3b7b11 + '\x20' + _0x45f100 : _0x3b7b11 + '\x20' + _0x45f100;
            }
        }
        ,
        _0x3a706a['aa'] = function(_0xedb325) {
            var _0x46466d = _0x5b8a80;
            return _0xedb325['includes'](_0x46466d(0x5c1)) ? _0xedb325[_0x46466d(0x156)](_0x46466d(0x5c1), _0x46466d(0x60f)) : _0xedb325;
        }
        ,
        _0x3a706a['ba'] = function(_0x4a54eb, _0x534db3, _0x26a7e9) {
            var _0x3738c0 = _0x5b8a80
              , _0x570fdf = _0x53b237['d']['createElement'](_0x3738c0(0x6f9))
              , _0x5745cc = !![];
            _typeof(_0x534db3) !== _0x3738c0(0x3fa) && _0x534db3 !== null && (_typeof(_0x534db3['id']) !== 'undefined' && (_0x570fdf['id'] = _0x534db3['id']),
            _typeof(_0x534db3[_0x3738c0(0x130)]) !== 'undefined' && _0x534db3[_0x3738c0(0x130)] && (_0x570fdf[_0x3738c0(0x130)] = 'async'),
            _typeof(_0x534db3[_0x3738c0(0x226)]) !== 'undefined' && _0x534db3['defer'] && (_0x570fdf['defer'] = _0x3738c0(0x226)),
            _typeof(_0x534db3[_0x3738c0(0x1fc)]) !== 'undefined' && (_0x570fdf[_0x3738c0(0x1fc)] = _0x534db3[_0x3738c0(0x1fc)])),
            _0x570fdf[_0x3738c0(0x333)] = _0x3738c0(0x759),
            _0x570fdf[_0x3738c0(0x39e)] = _0x4a54eb,
            _0x26a7e9 && (_0x570fdf[_0x3738c0(0x68d)] = _0x570fdf['onreadystatechange'] = function() {
                var _0x5a9fd4 = _0x3738c0;
                _0x5745cc = ![];
                try {
                    _0x26a7e9();
                } catch (_0x48016f) {}
                ;_0x570fdf[_0x5a9fd4(0x68d)] = _0x570fdf[_0x5a9fd4(0x309)] = null;
            }
            ),
            (_0x53b237['d'][_0x3738c0(0x25e)] || _0x53b237['d']['getElementsByTagName'](_0x3738c0(0x25e))[0x0])[_0x3738c0(0x513)](_0x570fdf);
        }
        ,
        _0x3a706a['ca'] = function(_0x39c30b, _0x28b079) {
            var _0x8a311 = _0x5b8a80
              , _0x465ac7 = _0x28b079;
            return _0x465ac7[_0x8a311(0x66b)] = Object[_0x8a311(0x4cb)](_0x39c30b[_0x8a311(0x66b)]),
            _0x465ac7[_0x8a311(0x66b)][_0x8a311(0x229)] = _0x465ac7,
            _0x465ac7[_0x8a311(0x3bd)] = _0x39c30b,
            _0x465ac7;
        }
        ,
        _0x3a706a['da'] = function(_0x3bfe58) {
            return (_0x3bfe58 %= _0x69e837['S']) < 0x0 ? _0x3bfe58 + _0x69e837['S'] : _0x3bfe58;
        }
        ,
        _0x3a706a['ea'] = function(_0x5812c5, _0xe23d83, _0x12eb09) {
            return _0x3a706a['fa'](_0x12eb09, _0x5812c5, _0xe23d83);
        }
        ,
        _0x3a706a['fa'] = function(_0x520f15, _0x4f584a, _0x18e9be) {
            var _0x2047c6 = _0x5b8a80;
            if (_0x520f15 > _0x18e9be)
                return _0x18e9be;
            else {
                if (_0x520f15 < _0x4f584a)
                    return _0x4f584a;
                else
                    return Number[_0x2047c6(0x520)](_0x520f15) ? _0x520f15 : (_0x4f584a + _0x18e9be) * 0.5;
            }
        }
        ,
        _0x3a706a['ga'] = function(_0x3a9b80, _0x518493, _0x42e1c5, _0x1b266a) {
            return _0x518493 > _0x3a9b80 ? _0x3a706a['ha'](_0x518493, _0x3a9b80 + _0x42e1c5 * _0x1b266a) : _0x3a706a['ia'](_0x518493, _0x3a9b80 - _0x42e1c5 * _0x1b266a);
        }
        ,
        _0x3a706a['ja'] = function(_0x959765, _0x5c243b, _0x1ed44e, _0x49d3a1, _0x3b2e4a) {
            var _0x237d90 = _0x5b8a80;
            return _0x5c243b + (_0x959765 - _0x5c243b) * Math[_0x237d90(0x1b6)](0x1 - _0x49d3a1, _0x1ed44e / _0x3b2e4a);
        }
        ,
        _0x3a706a['ka'] = function(_0x5ab633, _0x787e37, _0x246f9b) {
            return _0x5ab633 - (_0x5ab633 - _0x787e37) * _0x246f9b;
        }
        ,
        _0x3a706a['la'] = function(_0x510929, _0x2e79cc) {
            var _0xec6774 = _0x5b8a80;
            return Math[_0xec6774(0x33f)](_0x510929 * _0x510929 + _0x2e79cc * _0x2e79cc);
        }
        ,
        _0x3a706a['ma'] = function() {
            return Math['random']();
        }
        ,
        _0x3a706a['_'] = function(_0x463205) {
            var _0x168aa1 = _0x5b8a80;
            return Math[_0x168aa1(0x671)](_0x463205);
        }
        ,
        _0x3a706a['na'] = function(_0x296209) {
            var _0x210af2 = _0x5b8a80;
            return Math[_0x210af2(0x5c3)](_0x296209);
        }
        ,
        _0x3a706a['ha'] = function(_0xfc4bf0, _0x192ca3) {
            return Math['min'](_0xfc4bf0, _0x192ca3);
        }
        ,
        _0x3a706a['ia'] = function(_0x1ebf60, _0x43ef81) {
            var _0x3e9249 = _0x5b8a80;
            return Math[_0x3e9249(0x470)](_0x1ebf60, _0x43ef81);
        }
        ,
        _0x3a706a['oa'] = function(_0x597421) {
            var _0x1b0cbd = _0x5b8a80;
            return Math[_0x1b0cbd(0x15b)](_0x597421);
        }
        ,
        _0x3a706a['pa'] = function(_0x5d6e6b) {
            var _0x48b553 = _0x5b8a80;
            return Math[_0x48b553(0x4d0)](_0x5d6e6b);
        }
        ,
        _0x3a706a['qa'] = function(_0x5ec6ef) {
            var _0x5f3332 = _0x5b8a80;
            return Math[_0x5f3332(0x33f)](_0x5ec6ef);
        }
        ,
        _0x3a706a['ra'] = function(_0x4717f6, _0x2d5fc1) {
            var _0x3e7ec6 = _0x5b8a80;
            return Math[_0x3e7ec6(0x1b6)](_0x4717f6, _0x2d5fc1);
        }
        ,
        _0x3a706a['sa'] = function(_0x2cbee6) {
            var _0x2b9eba = _0x5b8a80;
            return Math[_0x2b9eba(0x5ab)](_0x2cbee6);
        }
        ,
        _0x3a706a['ta'] = function(_0x33efa5, _0x2af796) {
            return Math['atan2'](_0x33efa5, _0x2af796);
        }
        ,
        _0x3a706a['ua'] = function(_0x4f5bc1, _0x31d85b, _0xcbb23b, _0xf94b73) {
            var _0x535b5e = _0x5b8a80
              , _0x16a47c = _0x31d85b + _0xf94b73;
            if (_0x4f5bc1 == null)
                throw TypeError();
            ;var _0x36feda = _0x4f5bc1[_0x535b5e(0x60c)] >>> 0x0
              , _0xe72574 = _0xcbb23b >> 0x0
              , _0x5c647d = _0xe72574 < 0x0 ? Math['max'](_0x36feda + _0xe72574, 0x0) : Math[_0x535b5e(0x51c)](_0xe72574, _0x36feda)
              , _0x303e10 = _0x31d85b >> 0x0
              , _0x57b894 = _0x303e10 < 0x0 ? Math[_0x535b5e(0x470)](_0x36feda + _0x303e10, 0x0) : Math[_0x535b5e(0x51c)](_0x303e10, _0x36feda)
              , _0x28e259 = _0x16a47c === undefined ? _0x36feda : _0x16a47c >> 0x0
              , _0x2bb173 = Math[_0x535b5e(0x51c)]((_0x28e259 < 0x0 ? Math[_0x535b5e(0x470)](_0x36feda + _0x28e259, 0x0) : Math[_0x535b5e(0x51c)](_0x28e259, _0x36feda)) - _0x57b894, _0x36feda - _0x5c647d)
              , _0x4b2ff6 = 0x1;
            for (_0x57b894 < _0x5c647d && _0x5c647d < _0x57b894 + _0x2bb173 && (_0x4b2ff6 = -0x1,
            _0x57b894 += _0x2bb173 - 0x1,
            _0x5c647d += _0x2bb173 - 0x1); _0x2bb173 > 0x0; ) {
                _0x57b894 in _0x4f5bc1 ? _0x4f5bc1[_0x5c647d] = _0x4f5bc1[_0x57b894] : delete _0x4f5bc1[_0x5c647d],
                _0x57b894 += _0x4b2ff6,
                _0x5c647d += _0x4b2ff6,
                _0x2bb173--;
            }
            ;return _0x4f5bc1;
        }
        ,
        _0x3a706a['va'] = function(_0x2c5abb, _0x2bdef3) {
            return _0x2c5abb + (_0x2bdef3 - _0x2c5abb) * _0x3a706a['ma']();
        }
        ,
        _0x3a706a['wa'] = function(_0x371b62) {
            var _0x485445 = _0x5b8a80;
            return _0x371b62[parseInt(_0x3a706a['ma']() * _0x371b62[_0x485445(0x60c)])];
        }
        ,
        _0x55024d = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'][_0x5b8a80(0x233)](function(_0x5ecd05) {
            var _0x4b3a7a = _0x5b8a80;
            return _0x5ecd05[_0x4b3a7a(0x636)](0x0);
        }),
        _0x3a706a['xa'] = function(_0x3c0df3) {
            _typeof(_0x3c0df3) == 'undefined' && (_0x3c0df3 = 0x10);
            var _0x17c686 = '';
            for (var _0x3f2f1d = 0x0; _0x3f2f1d < _0x3c0df3; _0x3f2f1d++) {
                _0x17c686 += String['fromCharCode'](_0x55024d[_0x3a706a['_'](_0x3a706a['ma']() * _0x55024d['length'])]);
            }
            ;return _0x17c686;
        }
        ,
        _0x3a706a['ya'] = function(_0x76bc2, _0x251669, _0x109897) {
            var _0x18b66b = _0x5b8a80
              , _0x4ae9c7 = _0x109897 * (0x1 - _0x251669 * 0.5)
              , _0x16a4ce = Math[_0x18b66b(0x51c)](_0x4ae9c7, 0x1 - _0x4ae9c7);
            return _0x3a706a['za'](_0x76bc2, _0x16a4ce ? (_0x109897 - _0x4ae9c7) / _0x16a4ce : 0x0, _0x4ae9c7);
        }
        ,
        _0x3a706a['za'] = function(_0x1f9ae1, _0x5e22ab, _0x3b80f9) {
            var _0x48b237 = (0x1 - _0x3a706a['na'](_0x3b80f9 * 0x2 - 0x1)) * _0x5e22ab
              , _0x4b6c0e = _0x48b237 * (0x1 - _0x3a706a['na'](_0x1f9ae1 / 0x3c % 0x2 - 0x1))
              , _0x4e2475 = _0x3b80f9 - _0x48b237 / 0x2;
            if (_0x1f9ae1 >= 0x0 && _0x1f9ae1 < 0x3c)
                return [_0x4e2475 + _0x48b237, _0x4e2475 + _0x4b6c0e, _0x4e2475];
            else {
                if (_0x1f9ae1 >= 0x3c && _0x1f9ae1 < 0x78)
                    return [_0x4e2475 + _0x4b6c0e, _0x4e2475 + _0x48b237, _0x4e2475];
                else {
                    if (_0x1f9ae1 >= 0x78 && _0x1f9ae1 < 0xb4)
                        return [_0x4e2475, _0x4e2475 + _0x48b237, _0x4e2475 + _0x4b6c0e];
                    else {
                        if (_0x1f9ae1 >= 0xb4 && _0x1f9ae1 < 0xf0)
                            return [_0x4e2475, _0x4e2475 + _0x4b6c0e, _0x4e2475 + _0x48b237];
                        else
                            return _0x1f9ae1 >= 0xf0 && _0x1f9ae1 < 0x12c ? [_0x4e2475 + _0x4b6c0e, _0x4e2475, _0x4e2475 + _0x48b237] : [_0x4e2475 + _0x48b237, _0x4e2475, _0x4e2475 + _0x4b6c0e];
                    }
                }
            }
        }
        ,
        _0x3a706a['Aa'] = function(_0x2e9240, _0x5c9715, _0x1d12e2) {
            var _0x5ca0cc = _0x5b8a80;
            $[_0x5ca0cc(0x3a1)](_0x2e9240)['fail'](_0x5c9715)[_0x5ca0cc(0x454)](_0x1d12e2);
        }
        ,
        _0x3a706a['Ba'] = function(_0x179c90, _0x841230, _0x2ab6cc, _0x26a04b) {
            var _0x4c8c60 = _0x5b8a80
              , _0x4a2f6d = {
                'type': _0x4c8c60(0x200),
                'url': _0x179c90
            }
              , _0x25321b = {
                'responseType': _0x4c8c60(0x694)
            };
            _0x25321b[_0x4c8c60(0x528)] = function(_0x9ac6ee) {
                var _0x44ba94 = _0x4c8c60;
                _0x9ac6ee['lengthComputable'] && _0x26a04b(_0x9ac6ee[_0x44ba94(0x360)] / _0x9ac6ee[_0x44ba94(0x279)] * 0x64);
            }
            ,
            _0x4a2f6d[_0x4c8c60(0x121)] = _0x25321b,
            $[_0x4c8c60(0x17f)](_0x4a2f6d)[_0x4c8c60(0x689)](_0x841230)[_0x4c8c60(0x454)](_0x2ab6cc);
        }
        ,
        _0x3a706a['Ca'] = function() {
            var _0x342ea8 = _0x5b8a80;
            return Date[_0x342ea8(0x4f5)]();
        }
        ,
        _0x3a706a['Da'] = function(_0x36535c, _0x5802a9) {
            for (var _0xfcf9c5 in _0x36535c) {
                _0x36535c['hasOwnProperty'](_0xfcf9c5) && _0x5802a9(_0xfcf9c5, _0x36535c[_0xfcf9c5]);
            }
        }
        ,
        _0x3a706a['Ea'] = function(_0x1ef400) {
            var _0x4be1fc = _0x5b8a80;
            for (var _0x2a4941 = _0x1ef400[_0x4be1fc(0x60c)] - 0x1; _0x2a4941 > 0x0; _0x2a4941--) {
                var _0x465b62 = _0x3a706a['_'](_0x3a706a['ma']() * (_0x2a4941 + 0x1))
                  , _0x420e85 = _0x1ef400[_0x2a4941];
                _0x1ef400[_0x2a4941] = _0x1ef400[_0x465b62],
                _0x1ef400[_0x465b62] = _0x420e85;
            }
            ;return _0x1ef400;
        }
        ,
        _0x53b237['Fa'] = _0x3a706a['b'](_0x5b8a80(0x68e)),
        _0x53b237['Ga'] = _0x3a706a['b'](_0x5b8a80(0x50d)),
        _0x53b237['Ha'] = (function() {
            var _0x36d4b2 = _0x5b8a80;
            function _0x2880a0(_0x2f0841) {
                this['Ia'] = _0x2f0841,
                this['Ja'] = 0x0;
            }
            var _0x282e9c = _0x36d4b2(0x712);
            _0x2880a0[_0x36d4b2(0x66b)]['Ka'] = function() {
                var _0x4d9c39 = this['Ia'][_0x282e9c](this['Ja']);
                return this['Ja'] += 0x1,
                _0x4d9c39;
            }
            ;
            var _0x2ef2cf = 'getInt16';
            _0x2880a0[_0x36d4b2(0x66b)]['La'] = function() {
                var _0x2e6f87 = this['Ia'][_0x2ef2cf](this['Ja']);
                return this['Ja'] += 0x2,
                _0x2e6f87;
            }
            ;
            var _0x199fc3 = 'getInt32';
            _0x2880a0[_0x36d4b2(0x66b)]['Ma'] = function() {
                var _0x205c8e = this['Ia'][_0x199fc3](this['Ja']);
                return this['Ja'] += 0x4,
                _0x205c8e;
            }
            ;
            var _0x4fa6d0 = _0x36d4b2(0x244);
            return _0x2880a0['prototype']['Na'] = function() {
                var _0x125490 = this['Ia'][_0x4fa6d0](this['Ja']);
                return this['Ja'] += 0x4,
                _0x125490;
            }
            ,
            _0x2880a0;
        }()),
        _0x53b237['Oa'] = (function() {
            var _0x42c2cb = _0x5b8a80;
            function _0x12fb29(_0x1dc5b7) {
                this['Ia'] = _0x1dc5b7,
                this['Ja'] = 0x0;
            }
            var _0x55696b = _0x42c2cb(0x601);
            _0x12fb29[_0x42c2cb(0x66b)]['Pa'] = function(_0x2f4c3e) {
                this['Ia'][_0x55696b](this['Ja'], _0x2f4c3e),
                this['Ja'] += 0x1;
            }
            ;
            var _0x56fa84 = 'setInt16';
            return _0x12fb29['prototype']['Qa'] = function(_0x308f69) {
                this['Ia'][_0x56fa84](this['Ja'], _0x308f69),
                this['Ja'] += 0x2;
            }
            ,
            _0x12fb29;
        }()),
        _0x3a706a['Ra'] = function() {
            var _0x4bd183 = _0x5b8a80
              , _0x42e5db = ![];
            function _0x322ffd() {}
            var _0x363226 = {}
              , _0x157197 = _0x4bd183(0x111)
              , _0x1f7bdc = $('#' + _0x157197)
              , _0x5cd3e1 = _0x4bd183(0x40e)
              , _0x8feaa9 = $('#' + _0x5cd3e1);
            return $('#adbl-continue')[_0x4bd183(0x335)](function() {
                var _0x48175e = _0x4bd183;
                _0x8feaa9[_0x48175e(0x545)](0x1f4),
                _0x322ffd(![]);
            }),
            _0x363226['Sa'] = function(_0x289138) {
                var _0xdc2ad4 = _0x4bd183;
                _0x322ffd = _0x289138;
                if (!_0x42e5db)
                    try {
                        aiptag[_0xdc2ad4(0x2d6)][_0xdc2ad4(0x4d2)][_0xdc2ad4(0x1bc)](function() {
                            var _0x6f44f2 = _0xdc2ad4
                              , _0x2874cb = {
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': !![],
                                'AD_CENTERPLAYER': ![]
                            };
                            _0x2874cb[_0x6f44f2(0x711)] = 'loading\x20advertisement',
                            _0x2874cb['PREROLL_ELEM'] = function() {
                                var _0x14cc75 = _0x6f44f2;
                                return _0x53b237['d'][_0x14cc75(0x374)](_0x157197);
                            }
                            ,
                            _0x2874cb['AIP_COMPLETE'] = function(_0x5f5482) {
                                var _0x4c2ce5 = _0x6f44f2;
                                _0x322ffd(!![]),
                                _0x32eec3['f']['h'](_0x1f7bdc, 0x1),
                                _0x32eec3['f']['h'](_0x8feaa9, 0x1);
                                try {
                                    ga('send', _0x4c2ce5(0x209), 'preroll', _0x69e837['H']['I'] + _0x4c2ce5(0x116));
                                } catch (_0x27dc98) {}
                            }
                            ,
                            _0x2874cb['AIP_REMOVE'] = function() {}
                            ,
                            aiptag[_0x6f44f2(0x679)] = new aipPlayer(_0x2874cb);
                        }),
                        _0x42e5db = !![];
                    } catch (_0x563803) {}
            }
            ,
            _0x363226['Ta'] = function() {
                var _0x1706e4 = _0x4bd183;
                if (_typeof(aiptag[_0x1706e4(0x679)]) !== _0x1706e4(0x3fa)) {
                    try {
                        ga('send', _0x1706e4(0x209), _0x1706e4(0x557), _0x69e837['H']['I'] + '_request');
                    } catch (_0x5ac17c) {}
                    ;_0x32eec3['f']['g'](_0x1f7bdc, 0x1),
                    !_0x38c4fe['on'] && aiptag[_0x1706e4(0x2d6)]['player']['push'](function() {
                        var _0xc6f364 = _0x1706e4;
                        aiptag[_0xc6f364(0x679)][_0xc6f364(0x5b3)]();
                    });
                } else {
                    try {
                        ga(_0x1706e4(0x3b1), 'event', _0x1706e4(0x757), _0x69e837['H']['I'] + _0x1706e4(0x5b9));
                    } catch (_0x27ad64) {}
                    ;(function _0x582fbb() {
                        var _0x358b05 = _0x1706e4;
                        $(_0x358b05(0x49c))['text'](_0x3a706a['U'](_0x358b05(0x68c))),
                        $(_0x358b05(0x77d))[_0x358b05(0x159)](_0x3a706a['U'](_0x358b05(0x750))),
                        $(_0x358b05(0x718))[_0x358b05(0x159)](_0x3a706a['U'](_0x358b05(0x4b2))),
                        $('#adbl-4')[_0x358b05(0x159)](_0x3a706a['U'](_0x358b05(0x45f))[_0x358b05(0x390)](_0x358b05(0x6dc), 0xa)),
                        $(_0x358b05(0x263))['text'](_0x3a706a['U'](_0x358b05(0x5e3))),
                        _0x32eec3['f']['h']($(_0x358b05(0x12e)), 0x1),
                        _0x32eec3['f']['g'](_0x8feaa9, 0x1f4);
                        var _0x55943d = 0xa;
                        for (var _0x59f827 = 0x0; _0x59f827 < 0xa; _0x59f827++) {
                            _0x3a706a['Y'](function() {
                                var _0x55bdf2 = _0x358b05;
                                _0x55943d--,
                                $(_0x55bdf2(0x54e))['text'](_0x3a706a['U'](_0x55bdf2(0x45f))[_0x55bdf2(0x390)](_0x55bdf2(0x6dc), _0x55943d));
                                if (_0x55943d === 0x0) {
                                    try {
                                        ga(_0x55bdf2(0x3b1), _0x55bdf2(0x209), _0x55bdf2(0x757), _0x69e837['H']['I'] + _0x55bdf2(0x116));
                                    } catch (_0x42c69c) {}
                                    ;_0x32eec3['f']['g']($(_0x55bdf2(0x12e)), 0xc8);
                                }
                            }, (_0x59f827 + 0x1) * 0x3e8);
                        }
                    }());
                }
            }
            ,
            _0x363226;
        }
        ,
        _0x3a706a['Ua'] = function(_0x866a5f, _0x1cf4a2) {
            var _0x412901 = $('#' + _0x866a5f)
              , _0x57a232 = _0x1cf4a2
              , _0x402af0 = {}
              , _0x179107 = ![];
            return _0x402af0['Sa'] = function() {
                var _0x195bb7 = _0x1792;
                if (!_0x179107) {
                    _0x412901[_0x195bb7(0x6ae)](),
                    _0x412901[_0x195bb7(0x527)]('<div\x20id=\x27' + _0x57a232 + '\x27></div>');
                    try {
                        try {
                            ga(_0x195bb7(0x3b1), _0x195bb7(0x209), _0x195bb7(0x78a), _0x69e837['H']['I'] + _0x195bb7(0x1c2));
                        } catch (_0x1a60ec) {}
                        ;!_0x38c4fe['on'] && aiptag[_0x195bb7(0x2d6)][_0x195bb7(0x157)]['push'](function() {
                            aipDisplayTag['display'](_0x57a232);
                        }),
                        _0x179107 = !![];
                    } catch (_0x27924b) {}
                }
            }
            ,
            _0x402af0['Va'] = function() {
                var _0x2e1275 = _0x1792;
                try {
                    try {
                        ga(_0x2e1275(0x3b1), _0x2e1275(0x209), _0x2e1275(0x78a), _0x69e837['H']['I'] + _0x2e1275(0x663));
                    } catch (_0x41e777) {}
                    ;!_0x38c4fe['on'] && aiptag[_0x2e1275(0x2d6)][_0x2e1275(0x157)]['push'](function() {
                        var _0x2a0a5e = _0x2e1275;
                        aipDisplayTag[_0x2a0a5e(0x157)](_0x57a232);
                    });
                } catch (_0x4139fe) {}
            }
            ,
            _0x402af0;
        }
        ,
        _0x53b237['Wa'] = (function() {
            function _0x2b7673(_0x31c076, _0x26e938, _0x22e594, _0x2007a7, _0x738678, _0x5d19ae, _0x2f86bf, _0x2f2e00, _0x499756, _0x2ad210) {
                this['Xa'] = _0x31c076,
                this['Ya'] = _0x26e938,
                this['Za'] = null,
                this['$a'] = ![],
                this['_a'] = _0x22e594,
                this['ab'] = _0x2007a7,
                this['bb'] = _0x738678,
                this['cb'] = _0x5d19ae,
                this['db'] = _0x2f86bf || (_0x499756 || _0x738678) / 0x2,
                this['eb'] = _0x2f2e00 || (_0x2ad210 || _0x5d19ae) / 0x2,
                this['fb'] = _0x499756 || _0x738678,
                this['gb'] = _0x2ad210 || _0x5d19ae,
                this['hb'] = 0.5 - (this['db'] - this['fb'] * 0.5) / this['bb'],
                this['ib'] = 0.5 - (this['eb'] - this['gb'] * 0.5) / this['cb'],
                this['jb'] = this['bb'] / this['fb'],
                this['kb'] = this['cb'] / this['gb'];
            }
            return _0x2b7673['lb'] = function() {
                return new _0x2b7673('',null,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0);
            }
            ,
            _0x2b7673['mb'] = function(_0x3a513e, _0x511ccf, _0x537282) {
                return new _0x2b7673(_0x3a513e,_0x511ccf,_0x537282['x'],_0x537282['y'],_0x537282['w'],_0x537282['h'],_0x537282['px'],_0x537282['py'],_0x537282['pw'],_0x537282['ph']);
            }
            ,
            _0x2b7673['prototype']['nb'] = function() {
                return !this['$a'] && (this['Ya'] != null && (this['Za'] = new _0x32eec3['k']['n'](this['Ya'],new _0x32eec3['k']['r'](this['_a'],this['ab'],this['bb'],this['cb']))),
                this['$a'] = !![]),
                this['Za'];
            }
            ,
            _0x2b7673['prototype']['ob'] = function() {
                var _0x4b71cf = _0x1792;
                this['Za'] != null && this['Za'][_0x4b71cf(0x3dd)]();
            }
            ,
            _0x2b7673;
        }()),
        _0x53b237['pb'] = (function() {
            var _0x40fbc6 = _0x5b8a80;
            function _0x5f2078(_0x1644d2, _0x3a7995, _0x4ed3dc, _0x1b1156, _0x33df0a, _0x357b89, _0x44f1cf, _0x3d9155, _0x5eb0cd, _0xb2d282, _0x5da4af, _0xcc2fb2, _0x207757, _0x5c0509, _0x49bbe9, _0x21f737, _0x15aca4, _0x2864eb) {
                this['qb'] = _0x1644d2,
                this['rb'] = _0x3a7995,
                this['sb'] = _0x4ed3dc,
                this['tb'] = _0x1b1156,
                this['ub'] = _0x33df0a,
                this['vb'] = _0x357b89,
                this['wb'] = _0x44f1cf,
                this['xb'] = _0x3d9155,
                this['yb'] = _0x5eb0cd,
                this['zb'] = _0xb2d282,
                this['Ab'] = _0x5da4af,
                this['Bb'] = _0xcc2fb2,
                this['Cb'] = _0x207757,
                this['Db'] = _0x5c0509,
                this['Eb'] = _0x49bbe9,
                this['Fb'] = _0x21f737,
                this['Gb'] = _0x15aca4,
                this['Hb'] = _0x2864eb;
            }
            return _0x5f2078[_0x40fbc6(0x66b)]['ob'] = function() {
                var _0xe34f13 = _0x40fbc6;
                for (var _0x260fac = 0x0; _0x260fac < this['qb'][_0xe34f13(0x60c)]; _0x260fac++) {
                    this['qb'][_0x260fac][_0xe34f13(0x26a)](),
                    this['qb'][_0x260fac][_0xe34f13(0x3dd)]();
                }
                ;this['qb'] = [];
                for (var _0x484ab0 = 0x0; _0x484ab0 < this['rb'][_0xe34f13(0x60c)]; _0x484ab0++) {
                    this['rb'][_0x484ab0]['ob']();
                }
                ;this['rb'] = [];
            }
            ,
            _0x5f2078['lb'] = function() {
                var _0x166278 = _0x40fbc6
                  , _0x58e774 = new _0x5f2078['Ib'](_0x53b237['Kb']['Jb'],_0x53b237['Kb']['Jb'])
                  , _0x42f245 = new _0x5f2078['Lb'](_0x166278(0x34b),[_0x53b237['Kb']['Jb']],[_0x53b237['Kb']['Jb']]);
                return new _0x5f2078([],[],{},_0x58e774,{},new _0x5f2078['Mb'](_0x53b237['Kb']['Jb']),{},_0x42f245,{},new _0x5f2078['Nb']('',_0x42f245,_0x58e774),{},new _0x5f2078['Ob']([_0x53b237['Kb']['Jb']]),{},new _0x5f2078['Ob']([_0x53b237['Kb']['Jb']]),{},new _0x5f2078['Ob']([_0x53b237['Kb']['Jb']]),{},new _0x5f2078['Ob']([_0x53b237['Kb']['Jb']]));
            }
            ,
            _0x5f2078['Pb'] = function(_0x4b380d, _0x44546f, _0xd70058, _0x54df23) {
                var _0x4049b6 = new _0x5f2078['Ib'](_0x53b237['Kb']['Jb'],_0x53b237['Kb']['Jb'])
                  , _0x3f68fc = new _0x5f2078['Lb']('#ffffff',[_0x4b380d],[_0x44546f]);
                return new _0x5f2078([],[],{},_0x4049b6,{},new _0x5f2078['Mb'](_0x53b237['Kb']['Jb']),{},_0x3f68fc,{},new _0x5f2078['Nb']('',_0x3f68fc,_0x4049b6),{},new _0x5f2078['Ob']([_0xd70058]),{},new _0x5f2078['Ob']([_0x54df23]),{},new _0x5f2078['Ob']([_0x53b237['Kb']['Jb']]),{},new _0x5f2078['Ob']([_0x53b237['Kb']['Jb']]));
            }
            ,
            _0x5f2078['Qb'] = function(_0x2eddef, _0xd0c34a, _0x1b20e3, _0x5c73f1) {
                var _0x33d596 = _0x40fbc6
                  , _0x20795c = {};
                _0x3a706a['Da'](_0x2eddef[_0x33d596(0x4a2)], function(_0x2489d2, _0x5ad997) {
                    _0x20795c[_0x2489d2] = '#' + _0x5ad997;
                });
                var _0x2f4701 = {};
                for (var _0x45f55f = 0x0; _0x45f55f < _0x2eddef[_0x33d596(0x27b)]['length']; _0x45f55f++) {
                    var _0x4248bb = _0x2eddef['skinArrayDict'][_0x45f55f];
                    _0x2f4701[_0x4248bb['id']] = new _0x5f2078['Lb'](_0x20795c[_0x4248bb[_0x33d596(0x67b)]],_0x4248bb[_0x33d596(0x237)][_0x33d596(0x233)](function(_0x193414) {
                        return _0xd0c34a[_0x193414];
                    }),_0x4248bb[_0x33d596(0x4b8)][_0x33d596(0x233)](function(_0x38bdb6) {
                        return _0xd0c34a[_0x38bdb6];
                    }));
                }
                ;var _0x20b207, _0x30a563 = _0x2eddef[_0x33d596(0x443)];
                _0x20b207 = new _0x5f2078['Lb'](_0x20795c[_0x30a563[_0x33d596(0x67b)]],_0x30a563[_0x33d596(0x237)]['map'](function(_0x3dc923) {
                    return _0xd0c34a[_0x3dc923];
                }),_0x30a563[_0x33d596(0x4b8)][_0x33d596(0x233)](function(_0x5f5840) {
                    return _0xd0c34a[_0x5f5840];
                }));
                var _0x235e21 = {};
                _0x3a706a['Da'](_0x2eddef['eyesDict'], function(_0x1af66f, _0x46720d) {
                    var _0x32974c = _0x33d596;
                    _0x235e21[parseInt(_0x1af66f)] = new _0x5f2078['Ob'](_0x46720d[_0x32974c(0x237)]['map'](function(_0x386ec4) {
                        var _0x2dbc51 = _0x32974c;
                        return _0xd0c34a[_0x386ec4[_0x2dbc51(0x453)]];
                    }));
                });
                var _0x18799a = new _0x5f2078['Ob'](_0x2eddef[_0x33d596(0x44d)]['base'][_0x33d596(0x233)](function(_0x526493) {
                    var _0x3d90a = _0x33d596;
                    return _0xd0c34a[_0x526493[_0x3d90a(0x453)]];
                }))
                  , _0x1c4b1b = {};
                _0x3a706a['Da'](_0x2eddef[_0x33d596(0x74b)], function(_0x564ae7, _0x4cb05c) {
                    var _0x34d840 = _0x33d596;
                    _0x1c4b1b[parseInt(_0x564ae7)] = new _0x5f2078['Ob'](_0x4cb05c['base'][_0x34d840(0x233)](function(_0x70bbeb) {
                        var _0x564fe5 = _0x34d840;
                        return _0xd0c34a[_0x70bbeb[_0x564fe5(0x453)]];
                    }));
                });
                var _0x288110 = new _0x5f2078['Ob'](_0x2eddef[_0x33d596(0x181)]['base'][_0x33d596(0x233)](function(_0x1068c8) {
                    var _0x476186 = _0x33d596;
                    return _0xd0c34a[_0x1068c8[_0x476186(0x453)]];
                }))
                  , _0x34a614 = {};
                _0x3a706a['Da'](_0x2eddef['hatDict'], function(_0x5bce18, _0x3edd6e) {
                    var _0x26e321 = _0x33d596;
                    _0x34a614[parseInt(_0x5bce18)] = new _0x5f2078['Ob'](_0x3edd6e[_0x26e321(0x237)][_0x26e321(0x233)](function(_0x4dac5e) {
                        var _0x171020 = _0x26e321;
                        return _0xd0c34a[_0x4dac5e[_0x171020(0x453)]];
                    }));
                });
                var _0x2951dc = new _0x5f2078['Ob'](_0x2eddef[_0x33d596(0x614)]['base'][_0x33d596(0x233)](function(_0x31c054) {
                    return _0xd0c34a[_0x31c054['region']];
                }))
                  , _0x47df7a = {};
                _0x3a706a['Da'](_0x2eddef[_0x33d596(0x5a7)], function(_0x6994d7, _0x17b2ca) {
                    var _0x2524a6 = _0x33d596;
                    _0x47df7a[parseInt(_0x6994d7)] = new _0x5f2078['Ob'](_0x17b2ca[_0x2524a6(0x237)][_0x2524a6(0x233)](function(_0xbf824e) {
                        var _0x455adf = _0x2524a6;
                        return _0xd0c34a[_0xbf824e[_0x455adf(0x453)]];
                    }));
                });
                var _0x50a7b3 = new _0x5f2078['Ob'](_0x2eddef['glassesUnknown'][_0x33d596(0x237)][_0x33d596(0x233)](function(_0x5dd4e2) {
                    return _0xd0c34a[_0x5dd4e2['region']];
                }))
                  , _0x51e346 = {};
                _0x3a706a['Da'](_0x2eddef[_0x33d596(0x395)], function(_0x2b32c3, _0x210294) {
                    var _0x4d4b98 = _0x33d596;
                    _0x51e346[_0x2b32c3 = parseInt(_0x2b32c3)] = new _0x5f2078['Ib'](_0xd0c34a[_0x210294[_0x4d4b98(0x237)]],_0xd0c34a[_0x210294[_0x4d4b98(0x4b8)]]);
                });
                var _0x32438d, _0x2c3527 = _0x2eddef['portionUnknown'];
                _0x32438d = new _0x5f2078['Ib'](_0xd0c34a[_0x2c3527[_0x33d596(0x237)]],_0xd0c34a[_0x2c3527[_0x33d596(0x4b8)]]);
                var _0x2a87cd = {};
                _0x3a706a['Da'](_0x2eddef[_0x33d596(0x569)], function(_0x464deb, _0x47f532) {
                    _0x2a87cd[_0x464deb = parseInt(_0x464deb)] = new _0x5f2078['Mb'](_0xd0c34a[_0x47f532['base']]);
                });
                var _0x138812, _0x2137cb = _0x2eddef[_0x33d596(0x60d)];
                _0x138812 = new _0x5f2078['Mb'](_0xd0c34a[_0x2137cb[_0x33d596(0x237)]]);
                var _0x23ab5c = {};
                _0x3a706a['Da'](_0x2eddef['teamDict'], function(_0x54a9c9, _0x227e01) {
                    var _0x21f71b = _0x33d596;
                    _0x23ab5c[_0x54a9c9 = parseInt(_0x54a9c9)] = new _0x5f2078['Nb'](_0x227e01[_0x21f71b(0x509)],new _0x5f2078['Lb'](_0x20795c[_0x227e01[_0x21f71b(0x597)][_0x21f71b(0x67b)]],null,_0x227e01['skin'][_0x21f71b(0x4b8)][_0x21f71b(0x233)](function(_0x118b35) {
                        return _0xd0c34a[_0x118b35];
                    })),new _0x5f2078['Ib'](null,_0xd0c34a[_0x227e01[_0x21f71b(0x5ba)][_0x21f71b(0x4b8)]]));
                });
                var _0x178d2a = new _0x5f2078['Nb']({},_0x20b207,_0x32438d);
                return new _0x5f2078(_0x1b20e3,_0x5c73f1,_0x51e346,_0x32438d,_0x2a87cd,_0x138812,_0x2f4701,_0x20b207,_0x23ab5c,_0x178d2a,_0x235e21,_0x18799a,_0x1c4b1b,_0x288110,_0x34a614,_0x2951dc,_0x47df7a,_0x50a7b3);
            }
            ,
            _0x5f2078['prototype']['Rb'] = function(_0x203dbe) {
                var _0x55d2a2 = _0x40fbc6
                  , _0x3cd173 = _0x3a706a['Ea'](Object['keys'](this['wb']))['slice'](0x0, _0x203dbe)
                  , _0x1ec9fb = _0x3a706a['Ea'](Object[_0x55d2a2(0x4b6)](this['Ab']))[_0x55d2a2(0x699)](0x0, _0x203dbe)
                  , _0x5784e2 = _0x3a706a['Ea'](Object['keys'](this['Cb']))[_0x55d2a2(0x699)](0x0, _0x203dbe)
                  , _0xf4d52d = _0x3a706a['Ea'](Object[_0x55d2a2(0x4b6)](this['Eb']))[_0x55d2a2(0x699)](0x0, _0x203dbe)
                  , _0x4ce973 = _0x3a706a['Ea'](Object['keys'](this['Gb']))[_0x55d2a2(0x699)](0x0, _0x203dbe)
                  , _0x39d82b = [];
                for (var _0x2cc87a = 0x0; _0x2cc87a < _0x203dbe; _0x2cc87a++) {
                    var _0x382b90 = _0x3cd173[_0x55d2a2(0x60c)] > 0x0 ? _0x3cd173[_0x2cc87a % _0x3cd173[_0x55d2a2(0x60c)]] : 0x0
                      , _0x343b16 = _0x1ec9fb[_0x55d2a2(0x60c)] > 0x0 ? _0x1ec9fb[_0x2cc87a % _0x1ec9fb[_0x55d2a2(0x60c)]] : 0x0
                      , _0x467e23 = _0x5784e2[_0x55d2a2(0x60c)] > 0x0 ? _0x5784e2[_0x2cc87a % _0x5784e2[_0x55d2a2(0x60c)]] : 0x0
                      , _0x4bb85b = _0xf4d52d['length'] > 0x0 ? _0xf4d52d[_0x2cc87a % _0xf4d52d[_0x55d2a2(0x60c)]] : 0x0
                      , _0x5a324b = _0x4ce973[_0x55d2a2(0x60c)] > 0x0 ? _0x4ce973[_0x2cc87a % _0x4ce973[_0x55d2a2(0x60c)]] : 0x0;
                    _0x39d82b['push'](new _0x53b237['Sb'](_0x382b90,_0x343b16,_0x467e23,_0x4bb85b,_0x5a324b));
                }
                ;return _0x39d82b;
            }
            ,
            _0x5f2078[_0x40fbc6(0x66b)]['Tb'] = function(_0x9e5310) {
                var _0x9043ac = _0x40fbc6;
                return this['wb'][_0x9043ac(0x68b)](_0x9e5310) ? this['wb'][_0x9e5310] : this['xb'];
            }
            ,
            _0x5f2078[_0x40fbc6(0x66b)]['Ub'] = function(_0x1f52e6) {
                var _0x270011 = _0x40fbc6;
                return this['yb'][_0x270011(0x68b)](_0x1f52e6) ? this['yb'][_0x1f52e6] : this['zb'];
            }
            ,
            _0x5f2078[_0x40fbc6(0x66b)]['Vb'] = function(_0x3546f2) {
                var _0x2e32c5 = _0x40fbc6;
                return this['Ab'][_0x2e32c5(0x68b)](_0x3546f2) ? this['Ab'][_0x3546f2] : this['Bb'];
            }
            ,
            _0x5f2078[_0x40fbc6(0x66b)]['Wb'] = function(_0x4b2739) {
                var _0x3195ff = _0x40fbc6;
                return this['Cb'][_0x3195ff(0x68b)](_0x4b2739) ? this['Cb'][_0x4b2739] : this['Db'];
            }
            ,
            _0x5f2078['prototype']['Xb'] = function(_0x3cd6b1) {
                var _0x3509de = _0x40fbc6;
                return this['Gb'][_0x3509de(0x68b)](_0x3cd6b1) ? this['Gb'][_0x3cd6b1] : this['Hb'];
            }
            ,
            _0x5f2078[_0x40fbc6(0x66b)]['Yb'] = function(_0x506be2) {
                var _0x4f6932 = _0x40fbc6;
                return this['Eb'][_0x4f6932(0x68b)](_0x506be2) ? this['Eb'][_0x506be2] : this['Fb'];
            }
            ,
            _0x5f2078[_0x40fbc6(0x66b)]['Zb'] = function(_0x430162) {
                var _0x36dc23 = _0x40fbc6;
                return this['sb'][_0x36dc23(0x68b)](_0x430162) ? this['sb'][_0x430162] : this['tb'];
            }
            ,
            _0x5f2078[_0x40fbc6(0x66b)]['$b'] = function(_0x51cffd) {
                var _0x19b6cc = _0x40fbc6;
                return this['ub'][_0x19b6cc(0x68b)](_0x51cffd) ? this['ub'][_0x51cffd] : this['vb'];
            }
            ,
            _0x5f2078['Nb'] = function _0x43c893(_0x411a0e, _0x2b1bf1, _0xcca76) {
                this['_b'] = _0x411a0e,
                this['ac'] = _0x2b1bf1,
                this['bc'] = _0xcca76;
            }
            ,
            _0x5f2078['Lb'] = function _0x1dd07b(_0xf2864b, _0x108a39, _0x2c59f1) {
                this['cc'] = _0xf2864b,
                this['dc'] = _0x108a39,
                this['ec'] = _0x2c59f1;
            }
            ,
            _0x5f2078['Ob'] = function _0x423abf(_0x4d3b53) {
                this['dc'] = _0x4d3b53;
            }
            ,
            _0x5f2078['Ib'] = function _0x19a527(_0x4e9046, _0x168cc6) {
                this['dc'] = _0x4e9046,
                this['ec'] = _0x168cc6;
            }
            ,
            _0x5f2078['Mb'] = function _0x326fa0(_0xccdce9) {
                this['dc'] = _0xccdce9;
            }
            ,
            _0x5f2078;
        }()),
        _0x53b237['Kb'] = (function() {
            var _0x29a4f4 = _0x5b8a80;
            function _0x2ac38c() {
                var _0x44aced = _0x1792
                  , _0x1bacbe = _0x32eec3['k']['m'][_0x44aced(0x595)](_0x44aced(0x2c8));
                this['fc'] = new _0x53b237['Wa'](_0x44aced(0x1b2),_0x1bacbe,0x9e,0x56,0x43,0x7c,0x94,63.5,0x80,0x80),
                this['gc'] = new _0x53b237['Wa'](_0x44aced(0x582),_0x1bacbe,0x9e,0x4,0x57,0x4a,0xcb,63.5,0x80,0x80),
                this['hc'] = new _0x53b237['Wa']('flex_ability',_0x1bacbe,0x4,0x4,0x92,0x92,63.5,63.5,0x80,0x80);
                var _0xf2e592 = _0x32eec3['k']['m'][_0x44aced(0x595)](_0x44aced(0x725));
                this[_0x44aced(0x75a)] = new _0x53b237['Wa'](_0x44aced(0x2db),_0xf2e592,0x9c,0x8c,0x57,0x3c,0xaa,128.5,0x80,0x80);
                var _0x58e1d4, _0x14b077 = _0x32eec3['k']['m'][_0x44aced(0x595)]('/images/def-look.png'), _0x11997d = new _0x53b237['Wa']('def_eyes',_0x14b077,0x0,0x0,0x2a,0x50,0x4b,0x40,0x80,0x80), _0x4d435d = new _0x53b237['Wa'](_0x44aced(0x61e),_0x14b077,0x2e,0x0,0x14,0x30,0x6d,0x3f,0x80,0x80), _0x3e0b45 = new _0x53b237['Wa'](_0x44aced(0x42e),_0x14b077,0x46,0x0,0x20,0x20,0x0,0x0,0x0,0x0), _0x13c828 = new _0x53b237['Wa'](_0x44aced(0x538),_0x14b077,0x2e,0x34,0x40,0x40,0x0,0x0,0x0,0x0), _0x517b57 = _0x53b237['pb']['Pb'](_0x13c828, _0x3e0b45, _0x11997d, _0x4d435d);
                this['ic'] = new _0x53b237['jc']({},_0x517b57),
                this['kc'] = -0x2710,
                this['lc'] = -0x2710,
                this['mc'] = ((_0x58e1d4 = _0x53b237['c']['document']['createElement'](_0x44aced(0x12c)))[_0x44aced(0x612)] = 0x50,
                _0x58e1d4[_0x44aced(0x67d)] = 0x50,
                {
                    'nc': _0x58e1d4,
                    'oc': _0x58e1d4[_0x44aced(0x6ff)]('2d'),
                    'Za': new _0x32eec3['k']['n'](_0x32eec3['k']['m'][_0x44aced(0x595)](_0x58e1d4))
                }),
                this['pc'] = null,
                this['qc'] = [];
            }
            return _0x2ac38c['Jb'] = _0x53b237['Wa']['lb'](),
            _0x2ac38c[_0x29a4f4(0x66b)]['Sa'] = function() {}
            ,
            _0x2ac38c[_0x29a4f4(0x66b)]['rc'] = function(_0x48119a, _0x3ee0de, _0x40283f) {
                var _0x764e0d = this
                  , _0x664ea = this['ic']['sc']();
                if (_0x664ea > 0x0 && _0x3a706a['Ca']() - this['kc'] < 0x124f80) {
                    _0x48119a != null && _0x48119a();
                    return;
                }
                ;if (this['pc'] != null && !this['pc']['tc']()) {
                    if (_0x3a706a['Ca']() - this['kc'] < 0x493e0) {
                        _0x48119a != null && _0x48119a();
                        return;
                    }
                    ;this['pc']['uc'](),
                    this['pc'] = null;
                }
                ;var _0x215f42 = new _0x53b237['vc'](_0x664ea);
                _0x215f42['wc'](function(_0x4cc190, _0x339f66) {
                    _0x215f42 === _0x764e0d['pc'] && _0x40283f != null && _0x40283f(_0x4cc190, _0x339f66);
                }),
                _0x215f42['xc'](function(_0x4339ac) {
                    _0x215f42 === _0x764e0d['pc'] && _0x3ee0de != null && _0x3ee0de(_0x4339ac);
                }),
                _0x215f42['yc'](function() {
                    _0x215f42 === _0x764e0d['pc'] && _0x3ee0de != null && _0x3ee0de(Error());
                }),
                _0x215f42['zc'](function() {
                    _0x215f42 === _0x764e0d['pc'] && _0x48119a != null && _0x48119a();
                }),
                _0x215f42['Ac'](function(_0x27d27b) {
                    if (_0x215f42 === _0x764e0d['pc']) {
                        _0x764e0d['lc'] = _0x3a706a['Ca'](),
                        _0x764e0d['pc'] = null,
                        _0x764e0d['Bc'](),
                        _0x764e0d['ic']['Cc']()['ob'](),
                        _0x764e0d['ic'] = _0x27d27b;
                        _0x48119a != null && _0x48119a();
                        _0x764e0d['Dc']();
                        return;
                    }
                    ;try {
                        _0x27d27b['Cc']()['ob']();
                    } catch (_0x2541dd) {}
                }),
                _0x215f42['Ec'](),
                this['kc'] = _0x3a706a['Ca'](),
                this['pc'] = _0x215f42;
            }
            ,
            _0x2ac38c[_0x29a4f4(0x66b)]['Bc'] = function() {}
            ,
            _0x2ac38c[_0x29a4f4(0x66b)]['Fc'] = function() {
                return this['ic']['sc']() > 0x0;
            }
            ,
            _0x2ac38c['prototype']['Gc'] = function() {
                return this['ic']['Hc']();
            }
            ,
            _0x2ac38c['prototype']['Ic'] = function() {
                return this['mc'];
            }
            ,
            _0x2ac38c['prototype']['Jc'] = function(_0x3e3356) {
                this['qc']['push'](_0x3e3356);
            }
            ,
            _0x2ac38c['prototype']['Dc'] = function() {
                var _0x517931 = _0x29a4f4;
                for (var _0x2b94c2 = 0x0; _0x2b94c2 < this['qc'][_0x517931(0x60c)]; _0x2b94c2++) {
                    this['qc'][_0x2b94c2]();
                }
            }
            ,
            _0x2ac38c[_0x29a4f4(0x66b)]['Cc'] = function() {
                return this['ic']['Cc']();
            }
            ,
            _0x2ac38c;
        }()),
        _0x53b237['Kc'] = (function() {
            var _0x158f6a = _0x5b8a80;
            function _0xa50ae(_0x4bcf2d) {
                this['Lc'] = _0x4bcf2d;
            }
            return _0xa50ae[_0x158f6a(0x66b)]['Mc'] = function(_0x4bb58f) {
                return this['Lc'][_0x4bb58f];
            }
            ,
            _0xa50ae['Nc'] = (function() {
                var _0x1566b9 = _0x158f6a;
                function _0xf16919() {
                    this['Oc'] = [];
                }
                return _0xf16919[_0x1566b9(0x66b)]['Pc'] = function(_0x37f23d, _0x14baa6) {
                    var _0x59a9d3 = _0x1566b9;
                    for (var _0x412f1a = 0x0; _0x412f1a < this['Oc'][_0x59a9d3(0x60c)]; _0x412f1a++) {
                        if (this['Oc'][_0x412f1a]['Qc'] === _0x37f23d)
                            throw Error();
                    }
                    ;return this['Oc']['push'](new _0xa50ae['Rc'](_0x37f23d,_0x14baa6)),
                    this;
                }
                ,
                _0xf16919[_0x1566b9(0x66b)]['Sc'] = function() {
                    var _0x5b24da = _0x1566b9
                      , _0x35cfe7 = 0x0;
                    for (var _0x55ce81 = 0x0; _0x55ce81 < this['Oc'][_0x5b24da(0x60c)]; _0x55ce81++) {
                        _0x35cfe7 += this['Oc'][_0x55ce81]['Tc'];
                    }
                    ;var _0x5887dc = {}
                      , _0x3aa66c = 0x0;
                    for (var _0xe6bcd9 = 0x0; _0xe6bcd9 < this['Oc'][_0x5b24da(0x60c)]; _0xe6bcd9++) {
                        var _0x1ae929 = this['Oc'][_0xe6bcd9];
                        _0x1ae929['Tc'] = _0x1ae929['Tc'] / _0x35cfe7,
                        _0x1ae929['Uc'] = _0x3aa66c,
                        _0x1ae929['Vc'] = _0x3aa66c + _0x1ae929['Tc'],
                        _0x3aa66c = _0x1ae929['Vc'],
                        _0x5887dc[_0x1ae929['Qc']] = _0x1ae929;
                    }
                    ;return new _0xa50ae(_0x5887dc);
                }
                ,
                _0xf16919;
            }()),
            _0xa50ae['Rc'] = (function() {
                var _0x481b20 = _0x158f6a;
                function _0x59d5fd(_0x11a644, _0x57fea4) {
                    this['Qc'] = _0x11a644,
                    this['Tc'] = _0x57fea4,
                    this['Uc'] = 0x0,
                    this['Vc'] = 0x0;
                }
                return _0x59d5fd[_0x481b20(0x66b)]['Wc'] = function(_0x1aaafc) {
                    return this['Uc'] + (this['Vc'] - this['Uc']) * _0x1aaafc;
                }
                ,
                _0x59d5fd;
            }()),
            _0xa50ae;
        }()),
        _0x53b237['Xc'] = (function() {
            var _0x5f2eb9 = _0x5b8a80;
            function _0x3a44eb() {
                var _0x3effcb = _0x1792;
                this['Yc'] = new _0x32eec3['k']['l'](),
                this['Yc'][_0x3effcb(0x6dd)] = !![],
                this['Zc'] = new _0x373067(),
                this['Zc'][_0x3effcb(0x2f2)] = _0x46a859 * ((_0x5c282f + 0x1) * 0x2 + 0x1 + 0x3),
                this['$c'] = 0x0,
                this['_c'] = Array(_0x5c282f),
                this['_c'][0x0] = this['ad'](0x0, new _0x53b237['bd'](), new _0x53b237['bd']());
                for (var _0x490b3a = 0x1; _0x490b3a < _0x5c282f; _0x490b3a++) {
                    this['_c'][_0x490b3a] = this['ad'](_0x490b3a, new _0x53b237['bd'](), new _0x53b237['bd']());
                }
                ;this['cd'] = 0x0,
                this['dd'] = 0x0,
                this['ed'] = 0x0;
            }
            var _0x2b6c34, _0x46a859 = 0.001, _0x5c282f = 0x31d, _0x5e8210 = _0x69e837['T'] * 0.1;
            _0x3a44eb['fd'] = _0x5c282f,
            _0x3a44eb['prototype']['ad'] = function(_0x5e0c8b, _0x13eda3, _0x584e61) {
                var _0x4deb23 = _0x1792
                  , _0x3bf5c3 = new _0x3173a3(_0x13eda3,_0x584e61);
                return _0x13eda3['gd'][_0x4deb23(0x2f2)] = _0x46a859 * ((_0x5c282f - _0x5e0c8b) * 0x2 + 0x1 + 0x3),
                _0x584e61['gd']['zIndex'] = _0x46a859 * ((_0x5c282f - _0x5e0c8b) * 0x2 - 0x2 + 0x3),
                _0x3bf5c3;
            }
            ,
            _0x3a44eb[_0x5f2eb9(0x66b)]['hd'] = function(_0xfd68c1, _0x1b47f2, _0x3a9424, _0x2cc2ff, _0x5f20b1, _0x5301d6, _0x1f84ae, _0x235657) {
                var _0x1c976b = _0x5f2eb9
                  , _0x60c8f8 = _0x3a9424['dc']
                  , _0x516ef1 = _0xfd68c1 === _0x53b237['jd']['id'] ? _0x1b47f2['ac']['ec'] : _0x3a9424['ec'];
                if (_0x60c8f8[_0x1c976b(0x60c)] > 0x0 && _0x516ef1[_0x1c976b(0x60c)] > 0x0)
                    for (var _0x4ce84c = 0x0; _0x4ce84c < this['_c'][_0x1c976b(0x60c)]; _0x4ce84c++) {
                        this['_c'][_0x4ce84c]['ld']['kd'](_0x60c8f8[_0x4ce84c % _0x60c8f8[_0x1c976b(0x60c)]]),
                        this['_c'][_0x4ce84c]['md']['kd'](_0x516ef1[_0x4ce84c % _0x516ef1[_0x1c976b(0x60c)]]),
                        this['_c'][_0x4ce84c]['ld']['nd'](_0x235657),
                        this['_c'][_0x4ce84c]['md']['nd'](_0x235657);
                    }
                ;this['Zc']['hd'](_0x2cc2ff, _0x5f20b1, _0x5301d6, _0x1f84ae);
            }
            ,
            (_0x2b6c34 = _0x3a706a['ca'](_0x32eec3['k']['l'], function() {
                var _0x4fa41b = _0x5f2eb9;
                _0x32eec3['k']['l'][_0x4fa41b(0x45d)](this),
                this['sortableChildren'] = !![],
                this['od'] = [],
                this['pd'] = [],
                this['qd'] = [],
                this['rd'] = [],
                this['sd'] = new _0x32eec3['k']['l'](),
                this['td'] = [];
                for (var _0x19d826 = 0x0; _0x19d826 < 0x4; _0x19d826++) {
                    var _0x597b25 = new _0x53b237['bd']();
                    _0x597b25['kd'](ooo['ud']['fc']),
                    this['sd']['addChild'](_0x597b25['gd']),
                    this['td'][_0x4fa41b(0x1bc)](_0x597b25);
                }
                ;this['sd'][_0x4fa41b(0x2f2)] = 0.0011,
                this[_0x4fa41b(0x175)](this['sd']),
                this['vd'](),
                this['wd'] = new _0x53b237['bd'](),
                this['wd']['kd'](ooo['ud']['gc']),
                this['wd']['gd'][_0x4fa41b(0x2f2)] = 0.001,
                this['addChild'](this['wd']['gd']),
                this['xd'](),
                this[_0x4fa41b(0x4fe)] = new _0x53b237['bd'](),
                this[_0x4fa41b(0x4fe)]['kd'](ooo['ud']['pwrFlex']),
                this[_0x4fa41b(0x4fe)]['gd']['zIndex'] = 0.001,
                this['addChild'](this['pwr_flex']['gd']),
                this[_0x4fa41b(0x368)]();
            }))[_0x5f2eb9(0x66b)]['hd'] = function(_0x1d18f9, _0xba510d, _0x4f4266, _0x1b98d0) {
                this['yd'](0.002, this['od'], _0x1d18f9['dc']),
                this['yd'](0.003, this['pd'], _0xba510d['dc']),
                this['yd'](0.004, this['rd'], _0x1b98d0['dc']),
                this['yd'](0.005, this['qd'], _0x4f4266['dc']);
            }
            ,
            _0x2b6c34[_0x5f2eb9(0x66b)]['yd'] = function(_0x37b652, _0x4f05cd, _0x3f2f7d) {
                var _0x53f952 = _0x5f2eb9;
                while (_0x3f2f7d[_0x53f952(0x60c)] > _0x4f05cd[_0x53f952(0x60c)]) {
                    var _0x17bdac = new _0x53b237['bd']();
                    _0x4f05cd[_0x53f952(0x1bc)](_0x17bdac),
                    this[_0x53f952(0x175)](_0x17bdac['zd']());
                }
                ;while (_0x3f2f7d[_0x53f952(0x60c)] < _0x4f05cd[_0x53f952(0x60c)]) {
                    _0x4f05cd[_0x53f952(0x426)]()['G']();
                }
                ;var _0x53c8e0 = _0x37b652;
                for (var _0x2a0caf = 0x0; _0x2a0caf < _0x3f2f7d[_0x53f952(0x60c)]; _0x2a0caf++) {
                    _0x53c8e0 += 0.0001;
                    var _0x567322 = _0x4f05cd[_0x2a0caf];
                    _0x567322['kd'](_0x3f2f7d[_0x2a0caf]),
                    _0x567322['gd'][_0x53f952(0x2f2)] = _0x53c8e0;
                }
            }
            ,
            _0x2b6c34['prototype']['Ad'] = function(_0x141c8e, _0x2d4214, _0x5e1d20, _0x433e54) {
                var _0x46cca3 = _0x5f2eb9;
                this[_0x46cca3(0x5b6)] = !![],
                this[_0x46cca3(0x722)][_0x46cca3(0x170)](_0x141c8e, _0x2d4214),
                this[_0x46cca3(0x1e7)] = _0x433e54;
                for (var _0x56286e = 0x0; _0x56286e < this['od'][_0x46cca3(0x60c)]; _0x56286e++) {
                    this['od'][_0x56286e]['Bd'](_0x5e1d20);
                }
                ;for (var _0x16fc7f = 0x0; _0x16fc7f < this['pd']['length']; _0x16fc7f++) {
                    this['pd'][_0x16fc7f]['Bd'](_0x5e1d20);
                }
                ;for (var _0x51ff1d = 0x0; _0x51ff1d < this['qd']['length']; _0x51ff1d++) {
                    this['qd'][_0x51ff1d]['Bd'](_0x5e1d20);
                }
                ;for (var _0xb49ef9 = 0x0; _0xb49ef9 < this['rd'][_0x46cca3(0x60c)]; _0xb49ef9++) {
                    this['rd'][_0xb49ef9]['Bd'](_0x5e1d20);
                }
            }
            ,
            _0x2b6c34[_0x5f2eb9(0x66b)]['Cd'] = function() {
                var _0x9159af = _0x5f2eb9;
                this[_0x9159af(0x5b6)] = ![];
            }
            ,
            _0x2b6c34[_0x5f2eb9(0x66b)]['Dd'] = function(_0xb324d0, _0x2a1173, _0x4bffe2, _0xcc69a3) {
                var _0x5ac543 = _0x5f2eb9;
                this['sd'][_0x5ac543(0x5b6)] = !![];
                var _0x1e6336 = _0x4bffe2 / 0x3e8
                  , _0x50bc1e = 0x1 / this['td'][_0x5ac543(0x60c)];
                for (var _0x3ae9ea = 0x0; _0x3ae9ea < this['td'][_0x5ac543(0x60c)]; _0x3ae9ea++) {
                    var _0x371c55 = 0x1 - (_0x1e6336 + _0x50bc1e * _0x3ae9ea) % 0x1;
                    this['td'][_0x3ae9ea]['gd'][_0x5ac543(0x626)] = 0x1 - _0x371c55,
                    this['td'][_0x3ae9ea]['Bd'](_0x2a1173 * (0.5 + _0x371c55 * 4.5));
                }
            }
            ,
            _0x2b6c34[_0x5f2eb9(0x66b)]['vd'] = function() {
                var _0x52ed5c = _0x5f2eb9;
                this['sd'][_0x52ed5c(0x5b6)] = ![];
            }
            ,
            _0x2b6c34['prototype']['Ed'] = function(_0x10b7c6, _0x1b7893, _0x3ed8b8, _0x24dcd9) {
                var _0x44db88 = _0x5f2eb9;
                this['wd']['gd'][_0x44db88(0x5b6)] = _0x444d21['vp'],
                this['wd']['gd'][_0x44db88(0x626)] = _0x3a706a['ga'](this['wd']['gd']['alpha'], _0x10b7c6['Fd'] ? 0.9 : 0.2, _0x24dcd9, 0.0025),
                this['wd']['Bd'](_0x1b7893);
            }
            ,
            _0x2b6c34['prototype']['xd'] = function() {
                var _0x202f00 = _0x5f2eb9;
                this['wd']['gd'][_0x202f00(0x5b6)] = ![];
            }
            ,
            _0x2b6c34[_0x5f2eb9(0x66b)][_0x5f2eb9(0x556)] = function(_0x586f37, _0x38665f, _0x268bea, _0x1782e7) {
                var _0x2425db = _0x5f2eb9;
                this[_0x2425db(0x4fe)]['gd'][_0x2425db(0x5b6)] = _0x444d21[_0x2425db(0x358)],
                this[_0x2425db(0x4fe)]['gd'][_0x2425db(0x626)] = _0x3a706a['ga'](this['wd']['gd'][_0x2425db(0x626)], _0x586f37['Fd'] ? 0.9 : 0.2, _0x1782e7, 0.0025),
                this[_0x2425db(0x4fe)]['Bd'](_0x38665f);
            }
            ,
            _0x2b6c34[_0x5f2eb9(0x66b)][_0x5f2eb9(0x368)] = function() {
                var _0x4df41a = _0x5f2eb9;
                this[_0x4df41a(0x4fe)]['gd'][_0x4df41a(0x5b6)] = ![];
            }
            ;
            var _0x373067 = _0x2b6c34;
            _0x3a44eb[_0x5f2eb9(0x66b)]['Gd'] = function(_0x5f23b3) {
                return this['dd'] + this['ed'] * _0x3a706a['oa'](_0x5f23b3 * _0x5e8210 - this['cd']);
            }
            ,
            _0x3a44eb[_0x5f2eb9(0x66b)]['Hd'] = function(_0x468f36, _0x1c563b, _0x592fda, _0x201e25) {
                var _0x33f534 = _0x5f2eb9, _0x14eb5b, _0x490d9b, _0x4e52a4, _0x1610cf, _0x9731f5, _0x6cf1ef, _0x398eee, _0x52af4e, _0x58bf18 = _0x468f36['Id'] * 0x2, _0x300c79 = _0x468f36['Jd'], _0xe15fb2 = _0x468f36['Kd'], _0x562eb5 = _0xe15fb2 * 0x4 - 0x3, _0x2945ac = _0x562eb5;
                this['cd'] = _0x1c563b / 0x190 * _0x69e837['T'],
                this['dd'] = _0x58bf18 * 1.5,
                this['ed'] = _0x58bf18 * 0.15 * _0x468f36['Ld'];
                if (_0x201e25(_0x490d9b = _0x300c79[0x0], _0x6cf1ef = _0x300c79[0x1])) {
                    _0x4e52a4 = _0x300c79[0x2],
                    _0x398eee = _0x300c79[0x3],
                    _0x1610cf = _0x300c79[0x4],
                    _0x52af4e = _0x300c79[0x5];
                    var _0x557183 = _0x3a706a['ta'](_0x52af4e + _0x6cf1ef * 0x2 - _0x398eee * 0x3, _0x1610cf + _0x490d9b * 0x2 - _0x4e52a4 * 0x3);
                    this['Zc']['Ad'](_0x490d9b, _0x6cf1ef, _0x58bf18, _0x557183),
                    this['_c'][0x0]['Ad'](_0x490d9b, _0x6cf1ef, _0x58bf18, this['Gd'](0x0), _0x557183),
                    this['_c'][0x1]['Ad'](_0x490d9b * 0.64453125 + _0x4e52a4 * 0.45703125 + _0x1610cf * -0.1015625, _0x6cf1ef * 0.64453125 + _0x398eee * 0.45703125 + _0x52af4e * -0.1015625, _0x58bf18, this['Gd'](0x1), _0x3173a3['Md'](this['_c'][0x0], this['_c'][0x2])),
                    this['_c'][0x2]['Ad'](_0x490d9b * 0.375 + _0x4e52a4 * 0.75 + _0x1610cf * -0.125, _0x6cf1ef * 0.375 + _0x398eee * 0.75 + _0x52af4e * -0.125, _0x58bf18, this['Gd'](0x2), _0x3173a3['Md'](this['_c'][0x1], this['_c'][0x3])),
                    this['_c'][0x3]['Ad'](_0x490d9b * 0.15234375 + _0x4e52a4 * 0.94921875 + _0x1610cf * -0.1015625, _0x6cf1ef * 0.15234375 + _0x398eee * 0.94921875 + _0x52af4e * -0.1015625, _0x58bf18, this['Gd'](0x3), _0x3173a3['Md'](this['_c'][0x2], this['_c'][0x4]));
                } else
                    this['Zc']['Cd'](),
                    this['_c'][0x0]['Cd'](),
                    this['_c'][0x1]['Cd'](),
                    this['_c'][0x2]['Cd'](),
                    this['_c'][0x3]['Cd']();
                ;var _0x55df3e = 0x4;
                for (var _0x51fd93 = 0x2, _0x4f4aa = _0xe15fb2 * 0x2 - 0x4; _0x51fd93 < _0x4f4aa; _0x51fd93 += 0x2) {
                    _0x201e25(_0x490d9b = _0x300c79[_0x51fd93], _0x6cf1ef = _0x300c79[_0x51fd93 + 0x1]) ? (_0x14eb5b = _0x300c79[_0x51fd93 - 0x2],
                    _0x9731f5 = _0x300c79[_0x51fd93 - 0x1],
                    _0x4e52a4 = _0x300c79[_0x51fd93 + 0x2],
                    _0x398eee = _0x300c79[_0x51fd93 + 0x3],
                    _0x1610cf = _0x300c79[_0x51fd93 + 0x4],
                    _0x52af4e = _0x300c79[_0x51fd93 + 0x5],
                    this['_c'][_0x55df3e]['Ad'](_0x490d9b, _0x6cf1ef, _0x58bf18, this['Gd'](_0x55df3e), _0x3173a3['Md'](this['_c'][_0x55df3e - 0x1], this['_c'][_0x55df3e + 0x1])),
                    _0x55df3e++,
                    this['_c'][_0x55df3e]['Ad'](_0x14eb5b * -0.06640625 + _0x490d9b * 0.84375 + _0x4e52a4 * 0.2578125 + _0x1610cf * -0.03515625, _0x9731f5 * -0.06640625 + _0x6cf1ef * 0.84375 + _0x398eee * 0.2578125 + _0x52af4e * -0.03515625, _0x58bf18, this['Gd'](_0x55df3e), _0x3173a3['Md'](this['_c'][_0x55df3e - 0x1], this['_c'][_0x55df3e + 0x1])),
                    _0x55df3e++,
                    this['_c'][_0x55df3e]['Ad'](_0x14eb5b * -0.0625 + _0x490d9b * 0.5625 + _0x4e52a4 * 0.5625 + _0x1610cf * -0.0625, _0x9731f5 * -0.0625 + _0x6cf1ef * 0.5625 + _0x398eee * 0.5625 + _0x52af4e * -0.0625, _0x58bf18, this['Gd'](_0x55df3e), _0x3173a3['Md'](this['_c'][_0x55df3e - 0x1], this['_c'][_0x55df3e + 0x1])),
                    _0x55df3e++,
                    this['_c'][_0x55df3e]['Ad'](_0x14eb5b * -0.03515625 + _0x490d9b * 0.2578125 + _0x4e52a4 * 0.84375 + _0x1610cf * -0.06640625, _0x9731f5 * -0.03515625 + _0x6cf1ef * 0.2578125 + _0x398eee * 0.84375 + _0x52af4e * -0.06640625, _0x58bf18, this['Gd'](_0x55df3e), _0x3173a3['Md'](this['_c'][_0x55df3e - 0x1], this['_c'][_0x55df3e + 0x1])),
                    _0x55df3e++) : (this['_c'][_0x55df3e]['Cd'](),
                    _0x55df3e++,
                    this['_c'][_0x55df3e]['Cd'](),
                    _0x55df3e++,
                    this['_c'][_0x55df3e]['Cd'](),
                    _0x55df3e++,
                    this['_c'][_0x55df3e]['Cd'](),
                    _0x55df3e++);
                }
                ;_0x201e25(_0x490d9b = _0x300c79[_0xe15fb2 * 0x2 - 0x4], _0x6cf1ef = _0x300c79[_0xe15fb2 * 0x2 - 0x3]) ? (_0x14eb5b = _0x300c79[_0xe15fb2 * 0x2 - 0x6],
                _0x9731f5 = _0x300c79[_0xe15fb2 * 0x2 - 0x5],
                _0x4e52a4 = _0x300c79[_0xe15fb2 * 0x2 - 0x2],
                _0x398eee = _0x300c79[_0xe15fb2 * 0x2 - 0x1],
                this['_c'][_0x562eb5 - 0x5]['Ad'](_0x490d9b, _0x6cf1ef, _0x58bf18, this['Gd'](_0x562eb5 - 0x5), _0x3173a3['Md'](this['_c'][_0x562eb5 - 0x6], this['_c'][_0x562eb5 - 0x4])),
                this['_c'][_0x562eb5 - 0x4]['Ad'](_0x14eb5b * -0.1015625 + _0x490d9b * 0.94921875 + _0x4e52a4 * 0.15234375, _0x9731f5 * -0.1015625 + _0x6cf1ef * 0.94921875 + _0x398eee * 0.15234375, _0x58bf18, this['Gd'](_0x562eb5 - 0x4), _0x3173a3['Md'](this['_c'][_0x562eb5 - 0x5], this['_c'][_0x562eb5 - 0x3])),
                this['_c'][_0x562eb5 - 0x3]['Ad'](_0x14eb5b * -0.125 + _0x490d9b * 0.75 + _0x4e52a4 * 0.375, _0x9731f5 * -0.125 + _0x6cf1ef * 0.75 + _0x398eee * 0.375, _0x58bf18, this['Gd'](_0x562eb5 - 0x3), _0x3173a3['Md'](this['_c'][_0x562eb5 - 0x4], this['_c'][_0x562eb5 - 0x2])),
                this['_c'][_0x562eb5 - 0x2]['Ad'](_0x14eb5b * -0.1015625 + _0x490d9b * 0.45703125 + _0x4e52a4 * 0.64453125, _0x9731f5 * -0.1015625 + _0x6cf1ef * 0.45703125 + _0x398eee * 0.64453125, _0x58bf18, this['Gd'](_0x562eb5 - 0x2), _0x3173a3['Md'](this['_c'][_0x562eb5 - 0x3], this['_c'][_0x562eb5 - 0x1])),
                this['_c'][_0x562eb5 - 0x1]['Ad'](_0x4e52a4, _0x398eee, _0x58bf18, this['Gd'](_0x562eb5 - 0x1), _0x3173a3['Md'](this['_c'][_0x562eb5 - 0x2], this['_c'][_0x562eb5 - 0x1]))) : (this['_c'][_0x562eb5 - 0x5]['Cd'](),
                this['_c'][_0x562eb5 - 0x4]['Cd'](),
                this['_c'][_0x562eb5 - 0x3]['Cd'](),
                this['_c'][_0x562eb5 - 0x2]['Cd'](),
                this['_c'][_0x562eb5 - 0x1]['Cd']());
                this['$c'] === 0x0 && _0x2945ac > 0x0 && this['Yc']['addChild'](this['Zc']);
                this['$c'] > 0x0 && _0x2945ac === 0x0 && _0x32eec3['k']['F']['G'](this['Zc']);
                while (this['$c'] < _0x2945ac) {
                    this['Yc']['addChild'](this['_c'][this['$c']]['ld']['zd']()),
                    this['Yc'][_0x33f534(0x175)](this['_c'][this['$c']]['md']['zd']()),
                    this['$c'] += 0x1;
                }
                ;while (this['$c'] > _0x2945ac) {
                    this['$c'] -= 0x1,
                    this['_c'][this['$c']]['md']['G'](),
                    this['_c'][this['$c']]['ld']['G']();
                }
                ;var _0x2dcede = _0x468f36['Nd'][_0x53b237['Pd']['Od']];
                this['_c'][0x0]['Qd']() && _0x2dcede != null && _0x2dcede['Rd'] ? this['Zc']['Dd'](_0x468f36, _0x58bf18, _0x1c563b, _0x592fda) : this['Zc']['vd']();
                var _0x54901a = _0x468f36['Nd'][_0x53b237['Pd']['Sd']];
                this['_c'][0x0]['Qd']() && _0x54901a != null && _0x54901a['Rd'] ? this['Zc']['Ed'](_0x468f36, _0x58bf18, _0x1c563b, _0x592fda) : this['Zc']['xd']();
                var _0x2d38b0 = _0x468f36['Nd'][_0x53b237['Pd']['Yd']];
                this['_c'][0x0]['Qd']() && _0x2d38b0 != null && _0x2d38b0['Rd'] ? this['Zc'][_0x33f534(0x556)](_0x468f36, _0x58bf18, _0x1c563b, _0x592fda) : this['Zc']['disableFlex']();
            }
            ;
            var _0x3173a3 = (function() {
                var _0x2def6e = _0x5f2eb9;
                function _0x1ab0d2(_0x25d688, _0x506887) {
                    this['ld'] = _0x25d688,
                    this['ld']['Td'](![]),
                    this['md'] = _0x506887,
                    this['md']['Td'](![]);
                }
                return _0x1ab0d2[_0x2def6e(0x66b)]['Ad'] = function(_0x8390dd, _0x5555a3, _0x31935a, _0xee106a, _0x3d308f) {
                    this['ld']['Td'](!![]),
                    this['ld']['Ud'](_0x8390dd, _0x5555a3),
                    this['ld']['Bd'](_0x31935a),
                    this['ld']['Vd'](_0x3d308f),
                    this['md']['Td'](!![]),
                    this['md']['Ud'](_0x8390dd, _0x5555a3),
                    this['md']['Bd'](_0xee106a),
                    this['md']['Vd'](_0x3d308f);
                }
                ,
                _0x1ab0d2[_0x2def6e(0x66b)]['Cd'] = function() {
                    this['ld']['Td'](![]),
                    this['md']['Td'](![]);
                }
                ,
                _0x1ab0d2['prototype']['Qd'] = function() {
                    return this['ld']['Qd']();
                }
                ,
                _0x1ab0d2['Md'] = function(_0x249b88, _0x3290aa) {
                    var _0x473877 = _0x2def6e;
                    return _0x3a706a['ta'](_0x249b88['ld']['gd'][_0x473877(0x722)]['y'] - _0x3290aa['ld']['gd'][_0x473877(0x722)]['y'], _0x249b88['ld']['gd'][_0x473877(0x722)]['x'] - _0x3290aa['ld']['gd'][_0x473877(0x722)]['x']);
                }
                ,
                _0x1ab0d2;
            }());
            return _0x3a44eb;
        }()),
        _0x53b237['Pd'] = (function() {
            function _0x51b549(_0x63a23d) {
                this['Wd'] = _0x63a23d,
                this['Rd'] = ![],
                this['Xd'] = 0x1;
            }
            return _0x51b549['Sd'] = 0x0,
            _0x51b549['Yd'] = 0x1,
            _0x51b549['Od'] = 0x2,
            _0x51b549['Zd'] = 0x6,
            _0x51b549['$d'] = 0x3,
            _0x51b549['_d'] = 0x4,
            _0x51b549['ae'] = 0x5,
            _0x51b549;
        }()),
        _0x53b237['jc'] = (function() {
            var _0x1d0ffe = _0x5b8a80;
            function _0x46a2d7(_0x53e6e8, _0x4c79a2) {
                this['be'] = _0x53e6e8,
                this['ce'] = _0x4c79a2;
            }
            return _0x46a2d7['de'] = new _0x46a2d7({},_0x53b237['pb']['lb']()),
            _0x46a2d7[_0x1d0ffe(0x66b)]['sc'] = function() {
                return this['be']['revision'];
            }
            ,
            _0x46a2d7['prototype']['Hc'] = function() {
                return this['be'];
            }
            ,
            _0x46a2d7[_0x1d0ffe(0x66b)]['Cc'] = function() {
                return this['ce'];
            }
            ,
            _0x46a2d7;
        }()),
        _0x53b237['vc'] = (function() {
            var _0x4e7d62 = _0x5b8a80;
            function _0x1ab25d(_0x5cdacf) {
                this['ee'] = (++_0x1ab25d['fe'],
                function(_0x3473a3, _0x29ed87) {}
                ),
                this['ge'] = _0x5cdacf,
                this['he'] = null,
                this['ie'] = null,
                this['je'] = null,
                this['ke'] = null,
                this['le'] = null,
                this['me'] = ![],
                this['ne'] = ![],
                this['oe'] = ![];
            }
            return _0x1ab25d['pe'] = {
                'qe': _0x4e7d62(0x762),
                're': _0x4e7d62(0x6a9),
                'se': _0x4e7d62(0x4e6),
                'te': _0x4e7d62(0x65d),
                'ue': _0x4e7d62(0x5af)
            },
            _0x1ab25d['fe'] = 0x186a0,
            _0x1ab25d['ve'] = new _0x53b237['Kc']['Nc']()['Pc'](_0x1ab25d['pe']['qe'], 0x1)['Pc'](_0x1ab25d['pe']['re'], 0xa)['Pc'](_0x1ab25d['pe']['se'], 0x32)['Pc'](_0x1ab25d['pe']['te'], 0xf)['Pc'](_0x1ab25d['pe']['ue'], 0x5)['Sc'](),
            _0x1ab25d[_0x4e7d62(0x66b)]['Ac'] = function(_0xde0423) {
                this['he'] = _0xde0423;
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['zc'] = function(_0x521d28) {
                this['ie'] = _0x521d28;
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['xc'] = function(_0x18da50) {
                this['je'] = _0x18da50;
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['yc'] = function(_0x46ff80) {
                this['ke'] = _0x46ff80;
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['wc'] = function(_0xb9e32c) {
                this['le'] = _0xb9e32c;
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['tc'] = function() {
                return this['oe'];
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['uc'] = function() {
                this['me'] = !![];
            }
            ,
            _0x1ab25d['prototype']['Ec'] = function() {
                if (!this['ne']) {
                    this['ne'] = !![];
                    if (this['me']) {
                        this['we']();
                        return;
                    }
                    ;this['xe']();
                }
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['xe'] = function() {
                var _0x3098ff = _0x4e7d62
                  , _0x22792a = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;$[_0x3098ff(0x17f)]({
                    'type': _0x3098ff(0x200),
                    'url': _0x69e837['H']['K'] + _0x3098ff(0x607),
                    'xhrFields': {
                        'onprogress': function(_0x5ccc26) {
                            var _0x2383d4 = _0x3098ff, _0x354973, _0x4ecd73;
                            _0x5ccc26[_0x2383d4(0x1be)] && (_0x354973 = _0x5ccc26['loaded'] / _0x5ccc26[_0x2383d4(0x279)],
                            _0x4ecd73 = _0x1ab25d['pe']['qe'],
                            _0x22792a['ye'](_0x4ecd73, _0x1ab25d['ve']['Mc'](_0x4ecd73)['Wc'](_0x354973)));
                        }
                    }
                })['fail'](function() {
                    _0x22792a['ze'](Error());
                })[_0x3098ff(0x454)](function(_0x204920) {
                    if (_0x204920 <= _0x22792a['ge']) {
                        _0x22792a['Ae']();
                        return;
                    }
                    ;_0x22792a['Be']();
                });
            }
            ,
            _0x1ab25d['prototype']['Be'] = function() {
                var _0x54326c = _0x4e7d62
                  , _0x4f1950 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;$['ajax']({
                    'type': _0x54326c(0x200),
                    'url': _0x69e837['H']['K'] + _0x54326c(0x6a5),
                    'xhrFields': {
                        'onprogress': function(_0x5bd353) {
                            var _0x3caf0f = _0x54326c, _0x1ad46d, _0x2dfa04;
                            _0x5bd353['lengthComputable'] && (_0x1ad46d = _0x5bd353[_0x3caf0f(0x360)] / _0x5bd353[_0x3caf0f(0x279)],
                            _0x2dfa04 = _0x1ab25d['pe']['re'],
                            _0x4f1950['ye'](_0x2dfa04, _0x1ab25d['ve']['Mc'](_0x2dfa04)['Wc'](_0x1ad46d)));
                        }
                    }
                })[_0x54326c(0x689)](function() {
                    _0x4f1950['ze'](Error());
                })[_0x54326c(0x454)](function(_0xcda32e) {
                    var _0x4983b4 = _0x54326c;
                    if (_0xcda32e['revision'] <= _0x4f1950['ge']) {
                        _0x4f1950['Ae']();
                        return;
                    }
                    ;var _0x40fd7c = {}
                      , _0x2d74bf = {
                        'country': 'gb',
                        'v': 'v2'
                    };
                    _0x3b8a7a && _0x3b8a7a != 'gb' && (_0x2d74bf['country'] = _0x3b8a7a),
                    _0x40fd7c = _0xcda32e,
                    _0x319c3c && _0x43cf18 && _0x43cf18 == _0x444d21['v_z'] ? (_0x40fd7c = JSON['parse'](_0x319c3c),
                    (async function() {
                        var _0x286013 = _0x1792;
                        (_0x42e18c || _0x4ba5d2 || Array[_0x286013(0x735)](_0x444d21['dg']) && _0x444d21['dg'][_0x286013(0x60c)] > 0x0) && (_0x40fd7c = await Ysw(_0x40fd7c));
                        for (let _0x1ab276 in _0x40fd7c) {
                            Array[_0x286013(0x735)](_0x40fd7c[_0x1ab276]) ? _0xcda32e[_0x1ab276] = _0xcda32e[_0x1ab276][_0x286013(0x38e)](_0x40fd7c[_0x1ab276]) : _0xcda32e[_0x1ab276] = {
                                ..._0xcda32e[_0x1ab276],
                                ..._0x40fd7c[_0x1ab276]
                            };
                        }
                        ;_0x4f1950['Ce'](_0xcda32e);
                    }())) : fetch(_0x4983b4(0x447), {
                        'headers': {
                            'Content-Type': 'application/json'
                        },
                        'method': 'POST',
                        'body': JSON[_0x4983b4(0x608)](_0x2d74bf)
                    })[_0x4983b4(0x2aa)](async function(_0x3c51c9) {
                        var _0x5cd4e8 = _0x4983b4;
                        for (let _0x1622d2 in (_0x3c51c9 = await _0x3c51c9['json']())['textureDict']) {
                            for (let _0x2de25a in _0x3c51c9['textureDict'][_0x1622d2]) {
                                _0x2de25a === _0x5cd4e8(0x13e) && (_0x3c51c9[_0x5cd4e8(0x1cb)][_0x1622d2][_0x2de25a] = _0x5cd4e8(0x2bf) + _0x3c51c9[_0x5cd4e8(0x1cb)][_0x1622d2][_0x2de25a][_0x5cd4e8(0x673)](_0x3c51c9['textureDict'][_0x1622d2][_0x2de25a][_0x5cd4e8(0x60c)] - _0x444d21[_0x5cd4e8(0x5c2)], _0x444d21['c_v']) + _0x3c51c9[_0x5cd4e8(0x1cb)][_0x1622d2][_0x2de25a][_0x5cd4e8(0x673)](0x0, _0x3c51c9[_0x5cd4e8(0x1cb)][_0x1622d2][_0x2de25a][_0x5cd4e8(0x60c)] - _0x444d21[_0x5cd4e8(0x5c2)]));
                            }
                        }
                        ;localStorage[_0x5cd4e8(0x128)](_0x5cd4e8(0x622), _0x444d21['v_z']);
                        (_0x42e18c || _0x4ba5d2 || Array['isArray'](_0x444d21['dg']) && _0x444d21['dg'][_0x5cd4e8(0x60c)] > 0x0) && (_0x3c51c9 = await Ysw(_0x3c51c9));
                        for (let _0x22464d in _0x3c51c9) {
                            Array[_0x5cd4e8(0x735)](_0x3c51c9[_0x22464d]) ? _0xcda32e[_0x22464d] = _0xcda32e[_0x22464d]['concat'](_0x3c51c9[_0x22464d]) : _0xcda32e[_0x22464d] = {
                                ..._0xcda32e[_0x22464d],
                                ..._0x3c51c9[_0x22464d]
                            };
                        }
                        ;_0x4f1950['Ce'](_0xcda32e);
                    })[_0x4983b4(0x381)](function(_0x5916fc) {
                        var _0x3adc5d = _0x4983b4;
                        localStorage[_0x3adc5d(0x167)](_0x3adc5d(0x3f9)),
                        localStorage[_0x3adc5d(0x167)](_0x3adc5d(0x6c0)),
                        _0x4f1950['Ce'](_0xcda32e);
                    });
                });
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['Ce'] = function(_0x21d0e9) {
                var _0x3f3e4e = _0x4e7d62
                  , _0x5e8e21 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;var _0x1e235f = []
                  , _0x1c2ce6 = []
                  , _0x22d083 = 0x0;
                for (var _0x1bff69 in _0x21d0e9[_0x3f3e4e(0x1cb)]) {
                    if (_0x21d0e9['textureDict']['hasOwnProperty'](_0x1bff69)) {
                        var _0x425ffe = _0x21d0e9[_0x3f3e4e(0x1cb)][_0x1bff69];
                        if (_0x425ffe[_0x3f3e4e(0x6ee)]) {
                            var _0x4e8aea = '';
                            _0x425ffe[_0x3f3e4e(0x631)] && (_0x4e8aea = _0x425ffe[_0x3f3e4e(0x631)][_0x3f3e4e(0x6e4)](_0x3f3e4e(0x2c7)) != -0x1 ? _0x425ffe[_0x3f3e4e(0x631)] : _0x3f3e4e(0x353) + _0x425ffe['relativePath']);
                            var _0x35958d = _0x425ffe[_0x3f3e4e(0x13e)] || _0x4e8aea
                              , _0x59ab8d = 0x0
                              , _0x300690 = ''
                              , _0xb89e60 = new _0x1ab25d['De'](_0x1bff69,_0x35958d,_0x59ab8d,_0x300690);
                            _0x1e235f[_0x3f3e4e(0x1bc)](_0xb89e60),
                            _0x1c2ce6[_0x3f3e4e(0x1bc)](_0xb89e60);
                        } else {
                            var _0x35958d = _0x69e837['H']['K'] + _0x425ffe[_0x3f3e4e(0x631)]
                              , _0x59ab8d = _0x425ffe[_0x3f3e4e(0x6e2)]
                              , _0x300690 = _0x425ffe[_0x3f3e4e(0x48e)]
                              , _0xb89e60 = new _0x1ab25d['De'](_0x1bff69,_0x35958d,_0x59ab8d,_0x300690);
                            _0x1e235f['push'](_0xb89e60),
                            _0x1c2ce6[_0x3f3e4e(0x1bc)](_0xb89e60),
                            _0x22d083 += _0x59ab8d;
                        }
                    }
                }
                ;var _0x130d0e, _0x1bad2c = 0x0;
                function _0x48597e(_0x3971fd) {
                    var _0x5b3e5b = _0x3f3e4e;
                    for (var _0x3d5410 = 0x0; _0x3d5410 < _0x1c2ce6[_0x5b3e5b(0x60c)]; _0x3d5410++) {
                        try {
                            _0x53b237['c'][_0x5b3e5b(0x44c)][_0x5b3e5b(0x74f)](_0x1c2ce6[_0x3d5410]['Ee']);
                        } catch (_0x180736) {}
                    }
                    ;_0x5e8e21['ze'](_0x3971fd);
                }
                function _0x4aa822(_0x5e11ad) {
                    var _0x247779, _0x366c02;
                    _0x247779 = (_0x1bad2c + _0x3a706a['_'](_0x130d0e['Fe'] * _0x5e11ad)) / _0x22d083,
                    _0x366c02 = _0x1ab25d['pe']['se'],
                    _0x5e8e21['ye'](_0x366c02, _0x1ab25d['ve']['Mc'](_0x366c02)['Wc'](_0x247779));
                }
                function _0x4f215a(_0x37f925) {
                    var _0x473383 = _0x3f3e4e
                      , _0xbf7c22 = new Blob([_0x37f925]);
                    _0x130d0e['Ee'] = _0x53b237['c']['URL'][_0x473383(0x364)](_0xbf7c22),
                    _0x1bad2c += _0x130d0e['Fe'],
                    _0x4336ee();
                }
                function _0x4336ee() {
                    var _0x39267f = _0x3f3e4e;
                    if (_0x524d61 < _0x1c2ce6[_0x39267f(0x60c)]) {
                        _0x130d0e = _0x1c2ce6[_0x524d61++],
                        _0x5e8e21['Ge'](_0x130d0e, _0x48597e, _0x4f215a, _0x4aa822);
                        return;
                    }
                    ;_0x3a706a['Y'](function() {
                        return _0x5e8e21['He'](_0x21d0e9, _0x1e235f);
                    }, 0x0);
                }
                var _0x524d61 = 0x0;
                _0x4336ee();
            }
            ,
            _0x1ab25d['prototype']['Ge'] = function(_0x2ccb4f, _0x5c8095, _0x52a0ad, _0x328b8d) {
                var _0x3535a8 = _0x4e7d62;
                $[_0x3535a8(0x17f)]({
                    'type': 'GET',
                    'url': _0x2ccb4f['Ie'],
                    'xhrFields': {
                        'responseType': _0x3535a8(0x694),
                        'onprogress': function(_0x1ed595) {
                            var _0x423985 = _0x3535a8;
                            _0x1ed595['lengthComputable'] && _0x328b8d(_0x1ed595[_0x423985(0x360)] / _0x1ed595[_0x423985(0x279)]);
                        }
                    }
                })[_0x3535a8(0x689)](function() {
                    _0x5c8095(Error());
                })[_0x3535a8(0x454)](function(_0x34b4c) {
                    _0x52a0ad(_0x34b4c);
                });
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['He'] = function(_0x10da7f, _0x4dd099) {
                var _0x51bc38 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;var _0x170271, _0x52f10c, _0x477c2b = {};
                function _0x4782f3() {
                    var _0x3ea2fc = _0x1792;
                    for (var _0x56c50e = 0x0; _0x56c50e < _0x4dd099['length']; _0x56c50e++) {
                        try {
                            _0x53b237['c'][_0x3ea2fc(0x44c)]['revokeObjectURL'](_0x4dd099[_0x56c50e]['Ee']);
                        } catch (_0x24eeda) {}
                    }
                    ;_0x51bc38['ze'](Error());
                }
                function _0x19cd2d() {
                    var _0x565a27 = _0x1792, _0x418f56, _0x19d34e;
                    _0x418f56 = _0x4d243e / _0x4dd099[_0x565a27(0x60c)],
                    _0x19d34e = _0x1ab25d['pe']['te'],
                    _0x51bc38['ye'](_0x19d34e, _0x1ab25d['ve']['Mc'](_0x19d34e)['Wc'](_0x418f56)),
                    _0x477c2b[_0x170271['Je']] = new _0x53b237['Ke'](_0x170271['Ee'],_0x52f10c),
                    _0x3f6375();
                }
                function _0x3f6375() {
                    var _0x2419d9 = _0x1792;
                    if (_0x4d243e < _0x4dd099[_0x2419d9(0x60c)]) {
                        _0x170271 = _0x4dd099[_0x4d243e++],
                        (_0x52f10c = _0x32eec3['k']['m'][_0x2419d9(0x595)](_0x170271['Ee']))['on']('error', _0x4782f3),
                        _0x52f10c['on'](_0x2419d9(0x360), _0x19cd2d);
                        return;
                    }
                    ;_0x3a706a['Y'](function() {
                        return _0x51bc38['Le'](_0x10da7f, _0x477c2b);
                    }, 0x0);
                }
                var _0x4d243e = 0x0;
                _0x3f6375();
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['Le'] = function(_0x30a0e0, _0x1dd828) {
                var _0x18a070 = _0x4e7d62
                  , _0x2d3243 = this
                  , _0x4cab1e = {}
                  , _0x121576 = 0x0
                  , _0x12b7d6 = Object['values'](_0x30a0e0[_0x18a070(0x16a)])[_0x18a070(0x60c)];
                _0x3a706a['Da'](_0x30a0e0[_0x18a070(0x16a)], function(_0x87d6ad, _0x55c7d9) {
                    var _0x423487 = _0x18a070, _0xaae6cf, _0x52cdbc, _0x25f1c8 = _0x53b237['Wa']['mb'](_0x55c7d9[_0x423487(0x310)] + ':\x20' + _0x87d6ad, _0x1dd828[_0x55c7d9['texture']]['Za'], _0x55c7d9);
                    _0x4cab1e[_0x87d6ad] = _0x25f1c8,
                    ++_0x121576 % 0xa == 0x0 && (_0xaae6cf = _0x121576 / _0x12b7d6,
                    _0x52cdbc = _0x1ab25d['pe']['ue'],
                    _0x2d3243['ye'](_0x52cdbc, _0x1ab25d['ve']['Mc'](_0x52cdbc)['Wc'](_0xaae6cf)));
                });
                var _0x335525 = Object[_0x18a070(0x658)](_0x1dd828)[_0x18a070(0x233)](function(_0xe500e4) {
                    return _0xe500e4['Za'];
                })
                  , _0x370561 = Object[_0x18a070(0x658)](_0x4cab1e)
                  , _0x419df0 = new _0x53b237['jc'](_0x30a0e0,_0x53b237['pb']['Qb'](_0x30a0e0, _0x4cab1e, _0x335525, _0x370561));
                _0x3a706a['Y'](function() {
                    return _0x2d3243['Me'](_0x419df0);
                }, 0x0);
            }
            ,
            _0x1ab25d['De'] = function _0x22bbe0(_0x5064dd, _0x54f1c7, _0x16edf4, _0x2e8543) {
                this['Je'] = _0x5064dd,
                this['Ie'] = _0x54f1c7,
                this['Fe'] = _0x16edf4,
                this['Ne'] = _0x2e8543,
                this['Ee'] = '';
            }
            ,
            _0x1ab25d['prototype']['Me'] = function(_0x2b31ff) {
                if (this['oe']) {
                    _0x2b31ff['Cc']()['ob']();
                    return;
                }
                ;this['oe'] = !![];
                var _0x5d8502 = this;
                _0x3a706a['Y'](function() {
                    return _0x5d8502['he'](_0x2b31ff);
                }, 0x0);
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['Ae'] = function() {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x184581 = this;
                    _0x3a706a['Y'](function() {
                        return _0x184581['ie']();
                    }, 0x0);
                }
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['ze'] = function(_0x3b3631) {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x6c8320 = this;
                    _0x3a706a['Y'](function() {
                        return _0x6c8320['je'](_0x3b3631);
                    }, 0x0);
                }
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['we'] = function() {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x10725f = this;
                    _0x3a706a['Y'](function() {
                        return _0x10725f['ke']();
                    }, 0x0);
                }
            }
            ,
            _0x1ab25d[_0x4e7d62(0x66b)]['ye'] = function(_0xd1a3f0, _0x5121ce) {
                if (!this['oe'] && !this['me']) {
                    var _0x28b2d7 = this;
                    _0x3a706a['Y'](function() {
                        return _0x28b2d7['le'](_0xd1a3f0, _0x5121ce);
                    }, 0x0);
                }
            }
            ,
            _0x1ab25d;
        }()),
        _0x53b237['Oe'] = {},
        _0x53b237['Pe'] = (function() {
            var _0x27a253 = _0x5b8a80;
            function _0x13e141() {
                this['Qe'] = _0x53b237['Pe']['Se']['Re'],
                this['Te'] = ![],
                this['Ue'] = ![],
                this['Ve'] = null,
                this['We'] = null;
            }
            return _0x13e141[_0x27a253(0x66b)]['Sa'] = function() {}
            ,
            _0x13e141[_0x27a253(0x66b)]['Xe'] = function(_0x42e721) {
                this['Ue'] = _0x42e721;
            }
            ,
            _0x13e141[_0x27a253(0x66b)]['Ye'] = function(_0xa52b2c) {
                this['Qe'] = _0xa52b2c,
                this['Ze']();
            }
            ,
            _0x13e141[_0x27a253(0x66b)]['$e'] = function(_0x226313) {
                this['Te'] = _0x226313,
                this['Ze']();
            }
            ,
            _0x13e141['prototype']['Ze'] = function() {}
            ,
            _0x13e141[_0x27a253(0x66b)]['_e'] = function(_0x466561, _0x8015d9) {
                var _0x10ffd8 = _0x27a253;
                if (!ooo['ud']['Fc']())
                    return null;
                ;var _0x32e0f9 = _0x466561[_0x8015d9];
                return _0x32e0f9 == null || _0x32e0f9[_0x10ffd8(0x60c)] === 0x0 ? null : _0x32e0f9[_0x3a706a['_'](_0x3a706a['ma']() * _0x32e0f9[_0x10ffd8(0x60c)])][_0x10ffd8(0x6b5)]();
            }
            ,
            _0x13e141[_0x27a253(0x66b)]['af'] = function(_0x43f448, _0x3d94a9, _0x1f65fa) {
                var _0x36e661 = _0x27a253;
                if (this['Ue'] && !(_0x1f65fa <= 0x0)) {
                    var _0x1429da = this['_e'](_0x43f448, _0x3d94a9);
                    _0x1429da != null && (_0x1429da[_0x36e661(0x2ab)] = _0x3a706a['ha'](0x1, _0x1f65fa),
                    _0x1429da[_0x36e661(0x140)]());
                }
            }
            ,
            _0x13e141[_0x27a253(0x66b)]['bf'] = function(_0x29c9be, _0x55c8f3) {
                this['Qe']['cf'] && this['af'](_0x29c9be['ef']['df'], _0x29c9be, _0x55c8f3);
            }
            ,
            _0x13e141[_0x27a253(0x66b)]['ff'] = function(_0x45715a, _0x55750c) {
                this['Qe']['gf'] && this['af'](_0x45715a['ef']['hf'], _0x45715a, _0x55750c);
            }
            ,
            _0x13e141[_0x27a253(0x66b)]['if'] = function() {}
            ,
            _0x13e141['prototype']['jf'] = function() {}
            ,
            _0x13e141[_0x27a253(0x66b)]['kf'] = function() {}
            ,
            _0x13e141[_0x27a253(0x66b)]['lf'] = function() {}
            ,
            _0x13e141[_0x27a253(0x66b)]['mf'] = function() {}
            ,
            _0x13e141[_0x27a253(0x66b)]['nf'] = function() {}
            ,
            _0x13e141[_0x27a253(0x66b)]['pf'] = function(_0x2e5ec5, _0x1c3f84, _0x1c6cf6) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['qf'] = function(_0x46582f) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['rf'] = function(_0x31b821) {}
            ,
            _0x13e141['prototype']['sf'] = function(_0x484879) {}
            ,
            _0x13e141['prototype']['tf'] = function(_0x2fcbcb) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['uf'] = function(_0x46b5d3) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['vf'] = function(_0x5889e6) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['wf'] = function(_0x59501f) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['xf'] = function(_0x57e9c4) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['yf'] = function(_0x525145) {}
            ,
            _0x13e141['prototype']['zf'] = function(_0x5d4596) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['Af'] = function(_0x5e98f4) {}
            ,
            _0x13e141['prototype']['Bf'] = function(_0x4be2d6) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['Cf'] = function(_0x448883) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['Df'] = function(_0x1ad09f) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['Ef'] = function(_0x4903bb, _0x2d1297) {}
            ,
            _0x13e141[_0x27a253(0x66b)]['Ff'] = function(_0x163a32) {}
            ,
            _0x13e141['prototype']['Gf'] = function(_0xef14fe, _0x1b0cbe, _0x3b578f) {}
            ,
            _0x13e141['Se'] = {
                'Re': {
                    'Hf': ![],
                    'If': ![],
                    'gf': !![],
                    'cf': ![]
                },
                'Jf': {
                    'Hf': ![],
                    'If': !![],
                    'gf': !![],
                    'cf': ![]
                },
                'Kf': {
                    'Hf': !![],
                    'If': ![],
                    'gf': ![],
                    'cf': !![]
                },
                'Lf': {
                    'Hf': ![],
                    'If': ![],
                    'gf': !![],
                    'cf': ![]
                },
                'Mf': {
                    'Hf': ![],
                    'If': ![],
                    'gf': ![],
                    'cf': ![]
                }
            },
            _0x13e141;
        }()),
        _0x53b237['Nf'] = (function() {
            var _0x41d2fe = _0x5b8a80;
            function _0x2113ee(_0x2024be) {
                var _0x286765 = _0x1792;
                this['Of'] = _0x2024be,
                this['nc'] = _0x2024be[_0x286765(0x3a1)]()[0x0],
                this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['Rf'] = new _0x53b237['Sf'](_0x56204e,_0x103169,_0x53b237['Uf']['Tf']),
                this['Vf'] = ((_0x1bec86 = {})[_0x286765(0x587)] = this['nc'],
                _0x1bec86[_0x286765(0x1d7)] = _0x21fe87,
                _0x1bec86['antialias'] = !![],
                new _0x32eec3['k']['o'](_0x1bec86)),
                this['Wf'] = new _0x32eec3['k']['l'](),
                this['Wf']['sortableChildren'] = !![],
                this['Xf'] = new _0x32eec3['k']['l'](),
                this['Xf'][_0x286765(0x2f2)] = 0x0,
                this['Wf'][_0x286765(0x175)](this['Xf']),
                this['Yf'] = new _0x53b237['Zf'](ooo['ef']['$f']),
                this['Yf']['_f'][_0x286765(0x2f2)] = 0x1,
                this['Wf']['addChild'](this['Yf']['_f']);
                var _0x1bec86, _0x214fe1 = this['Rf']['ag']();
                _0x214fe1[_0x286765(0x2f2)] = 0x2,
                this['Wf'][_0x286765(0x175)](_0x214fe1),
                this['bg'] = new _0x32eec3['k']['l'](),
                this['bg'][_0x286765(0x2f2)] = 0x3,
                this['Wf']['addChild'](this['bg']),
                this['cg'] = [],
                this['dg'] = [],
                this['eg'] = [],
                this['Sa']();
            }
            var _0x21fe87 = 0x0
              , _0x56204e = 0x5
              , _0x103169 = 0x28
              , _0x320c61 = [{
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0.5
            }, {
                'fg': 0x1,
                'gg': 0.75,
                'hg': 0.5
            }, {
                'fg': 0x1,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.75,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0.75
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0x1
            }, {
                'fg': 0.5,
                'gg': 0.75,
                'hg': 0x1
            }, {
                'fg': 0.5,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0.75,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0.75
            }];
            _0x2113ee['prototype']['Sa'] = function() {
                var _0x437f51 = _0x1792;
                this['Vf'][_0x437f51(0x1d7)] = _0x21fe87,
                this['cg'] = Array(_0x320c61['length']);
                for (var _0x507e5a = 0x0; _0x507e5a < this['cg']['length']; _0x507e5a++) {
                    this['cg'][_0x507e5a] = new _0x32eec3['k']['s'](),
                    this['cg'][_0x507e5a][_0x437f51(0x310)] = ooo['ef']['ig'],
                    this['cg'][_0x507e5a][_0x437f51(0x31d)]['set'](0.5),
                    this['Xf'][_0x437f51(0x175)](this['cg'][_0x507e5a]);
                }
                ;this['dg'] = Array(ooo['ef']['jg'][_0x437f51(0x60c)]);
                for (var _0x5e18e9 = 0x0; _0x5e18e9 < this['dg']['length']; _0x5e18e9++) {
                    this['dg'][_0x5e18e9] = new _0x32eec3['k']['s'](),
                    this['dg'][_0x5e18e9][_0x437f51(0x310)] = ooo['ef']['jg'][_0x5e18e9],
                    this['dg'][_0x5e18e9]['anchor'][_0x437f51(0x170)](0.5),
                    this['bg']['addChild'](this['dg'][_0x5e18e9]);
                }
                ;this['eg'] = Array(this['dg'][_0x437f51(0x60c)]);
                for (var _0x4dc3ab = 0x0; _0x4dc3ab < this['eg']['length']; _0x4dc3ab++) {
                    var _0x13df2e = [0x1, 0x1, 0x1];
                    this['eg'][_0x4dc3ab] = {
                        'kg': _0x3a706a['va'](0x0, _0x69e837['S']),
                        'lg': _0x3a706a['va'](0.09, 0.16) * 0.66,
                        'mg': _0x3a706a['va'](0x0, 0x1),
                        'ng': _0x3a706a['va'](0x0, 0x1),
                        'og': 0x0,
                        'fg': _0x13df2e[0x0],
                        'gg': _0x13df2e[0x1],
                        'hg': _0x13df2e[0x2]
                    };
                }
                ;this['pg'](),
                this['qg']();
            }
            ,
            _0x2113ee['Rd'] = ![],
            _0x2113ee['rg'] = function(_0x3320d2) {
                _0x2113ee['Rd'] = _0x3320d2;
            }
            ,
            _0x2113ee['prototype']['sg'] = function(_0x366d69) {
                this['Rf']['rg'](_0x366d69);
            }
            ,
            _0x2113ee['prototype']['qg'] = function() {
                var _0x40b64e = _0x1792
                  , _0x3c48a3 = _0x3a706a['e']();
                this['Pf'] = this['Of'][_0x40b64e(0x612)](),
                this['Qf'] = this['Of'][_0x40b64e(0x67d)](),
                this['Vf'][_0x40b64e(0x629)](this['Pf'], this['Qf']),
                this['Vf'][_0x40b64e(0x282)] = _0x3c48a3,
                this['nc'][_0x40b64e(0x612)] = _0x3c48a3 * this['Pf'],
                this['nc']['height'] = _0x3c48a3 * this['Qf'];
                var _0x310b09 = _0x3a706a['ia'](this['Pf'], this['Qf']) * 0.6;
                for (var _0x31e323 = 0x0; _0x31e323 < this['cg'][_0x40b64e(0x60c)]; _0x31e323++) {
                    this['cg'][_0x31e323][_0x40b64e(0x612)] = _0x310b09,
                    this['cg'][_0x31e323][_0x40b64e(0x67d)] = _0x310b09;
                }
                ;this['Yf']['tg'](this['Pf'], this['Qf']),
                this['Rf']['qg']();
            }
            ,
            _0x2113ee['prototype']['ug'] = function(_0x28d0ba, _0x6fbd8d) {
                var _0x4fdd14 = _0x1792;
                if (_0x2113ee['Rd']) {
                    var _0x51e432 = _0x28d0ba / 0x3e8
                      , _0x572db3 = this['Of']['width']()
                      , _0x1bb3ae = this['Of']['height']();
                    for (var _0x270f87 = 0x0; _0x270f87 < this['cg'][_0x4fdd14(0x60c)]; _0x270f87++) {
                        var _0x38fe1c = _0x320c61[_0x270f87 % _0x320c61[_0x4fdd14(0x60c)]]
                          , _0x40d177 = this['cg'][_0x270f87]
                          , _0x16a54b = _0x270f87 / this['cg'][_0x4fdd14(0x60c)] * _0x69e837['T']
                          , _0x2bcb66 = _0x51e432 * 0.5 * 0.12
                          , _0x1a8bd0 = _0x3a706a['pa']((_0x2bcb66 + _0x16a54b) * 0x3) * _0x3a706a['pa'](_0x16a54b) - _0x3a706a['oa']((_0x2bcb66 + _0x16a54b) * 0x5) * _0x3a706a['oa'](_0x16a54b)
                          , _0x40c18d = _0x3a706a['pa']((_0x2bcb66 + _0x16a54b) * 0x3) * _0x3a706a['oa'](_0x16a54b) + _0x3a706a['oa']((_0x2bcb66 + _0x16a54b) * 0x5) * _0x3a706a['pa'](_0x16a54b)
                          , _0x34ffbe = 0.2 + _0x3a706a['pa'](_0x16a54b + _0x51e432 * 0.075) * 0.2
                          , _0x1ba060 = _0x38fe1c['fg'] * 0xff << 0x10 & 0xff0000 | _0x38fe1c['gg'] * 0xff << 0x8 & 0xff00 | _0x38fe1c['hg'] * 0xff & 0xff;
                        _0x40d177[_0x4fdd14(0x39b)] = _0x1ba060,
                        _0x40d177[_0x4fdd14(0x626)] = _0x34ffbe,
                        _0x40d177['position'][_0x4fdd14(0x170)](_0x572db3 * (0.2 + (_0x1a8bd0 + 0x1) * 0.5 * 0.6), _0x1bb3ae * (0.1 + (_0x40c18d + 0x1) * 0.5 * 0.8));
                    }
                    ;var _0xa4b907 = _0x3a706a['ia'](_0x572db3, _0x1bb3ae) * 0.05;
                    for (var _0xb6065f = 0x0; _0xb6065f < this['dg'][_0x4fdd14(0x60c)]; _0xb6065f++) {
                        var _0x1d6d6f = this['eg'][_0xb6065f]
                          , _0x5bdb89 = this['dg'][_0xb6065f]
                          , _0x5edb68 = _0x69e837['S'] * _0xb6065f / this['dg'][_0x4fdd14(0x60c)];
                        _0x1d6d6f['mg'] = 0.2 + (_0x3a706a['pa'](_0x51e432 * 0.01 + _0x5edb68) + _0x3a706a['pa'](_0x51e432 * 0.02 * 0x11 + _0x5edb68) * 0.2 + 0x1) * 0.6 / 0x2,
                        _0x1d6d6f['ng'] = 0.1 + (_0x3a706a['oa'](_0x51e432 * 0.01 + _0x5edb68) + _0x3a706a['oa'](_0x51e432 * 0.02 * 0x15 + _0x5edb68) * 0.2 + 0x1) * 0.8 / 0x2;
                        var _0x1b0f61 = _0x1d6d6f['mg']
                          , _0x553d6b = _0x1d6d6f['ng']
                          , _0x3c5618 = _0x3a706a['fa'](_0x3a706a['ra'](_0x3a706a['pa']((_0x5edb68 + _0x51e432 * 0.048) * 1.5), 0x6), 0x0, 0.9)
                          , _0x280b2d = (0.4 + (0x1 + _0x3a706a['oa'](_0x5edb68 + _0x51e432 * 0.12)) * 0.5 * 1.2) * 1.2
                          , _0x59208f = _0x5edb68 + _0x51e432 * 0.1
                          , _0x3d65b1 = _0x1d6d6f['fg'] * 0xff << 0x10 & 0xff0000 | _0x1d6d6f['gg'] * 0xff << 0x8 & 0xff00 | _0x1d6d6f['hg'] * 0xff & 0xff;
                        _0x5bdb89['alpha'] = _0x3c5618,
                        _0x5bdb89[_0x4fdd14(0x39b)] = _0x3d65b1,
                        _0x5bdb89[_0x4fdd14(0x722)][_0x4fdd14(0x170)](_0x572db3 * _0x1b0f61, _0x1bb3ae * _0x553d6b),
                        _0x5bdb89['rotation'] = _0x59208f;
                        var _0x110a83 = _0x5bdb89['texture'][_0x4fdd14(0x612)] / _0x5bdb89[_0x4fdd14(0x310)]['height'];
                        _0x5bdb89['width'] = _0x280b2d * _0xa4b907,
                        _0x5bdb89['height'] = _0x280b2d * _0xa4b907 * _0x110a83;
                    }
                    ;this['vg'](),
                    this['Vf'][_0x4fdd14(0x23e)](this['Wf'], null, !![]);
                }
            }
            ,
            _0x2113ee['prototype']['wg'] = function() {
                var _0x575778 = _0x1792;
                if (ooo['ud']['Fc']()) {
                    var _0x5b2e1e = ooo['ud']['Cc']()['Rb'](_0x56204e);
                    for (var _0x38d409 = 0x0; _0x38d409 < _0x56204e; _0x38d409++) {
                        this['Rf']['xg'](_0x38d409, _0x5b2e1e[_0x38d409]);
                    }
                } else {
                    var _0x394008 = _0x3a706a['va'](0x0, 0x1);
                    for (var _0x1b3327 = 0x0; _0x1b3327 < _0x56204e; _0x1b3327++) {
                        var _0x54a17b = (_0x394008 + _0x1b3327 / _0x56204e) % 0x1
                          , _0x176626 = _0x3a706a['za'](_0x3a706a['_'](_0x54a17b * 0x168), 0.85, 0.5)
                          , _0x200d28 = _0x176626[0x0] * 0xff & 0xff | _0x176626[0x1] * 0xff << 0x8 & 0xff00 | _0x176626[0x2] * 0xff << 0x10 & 0xff0000
                          , _0x465511 = _0x575778(0x55f) + _0x200d28[_0x575778(0x132)](0x10);
                        _0x465511 = '#' + _0x465511['substring'](_0x465511[_0x575778(0x60c)] - 0x6, _0x465511[_0x575778(0x60c)]),
                        this['Rf']['yg'](_0x1b3327, _0x465511);
                    }
                }
            }
            ,
            _0x2113ee[_0x41d2fe(0x66b)]['pg'] = function() {
                var _0x591762 = _0x3a706a['ha'](this['Pf'], this['Qf'])
                  , _0x21cb4f = _0x3a706a['Ca']();
                for (var _0x8c3d77 = 0x0; _0x8c3d77 < _0x56204e; _0x8c3d77++) {
                    var _0x26e0f4 = _0x17240c(_0x21cb4f, 0.12, _0x8c3d77 / _0x56204e * _0x69e837['S']);
                    _0x26e0f4['_a'] = _0x26e0f4['_a'] * 0x4,
                    _0x26e0f4['ab'] = _0x26e0f4['ab'] * 0x4,
                    this['Rf']['zg'](_0x8c3d77, (this['Pf'] + _0x26e0f4['_a'] * _0x591762) * 0.5, (this['Qf'] + _0x26e0f4['ab'] * _0x591762) * 0.5);
                }
            }
            ,
            _0x2113ee[_0x41d2fe(0x66b)]['vg'] = function() {
                var _0x25844b = _0x3a706a['ha'](this['Pf'], this['Qf'])
                  , _0x486315 = _0x3a706a['Ca']();
                for (var _0x102f48 = 0x0; _0x102f48 < _0x56204e; _0x102f48++) {
                    var _0x38f646 = _0x17240c(_0x486315, 0.12, _0x102f48 / _0x56204e * _0x69e837['S']);
                    this['Rf']['Ag'](_0x102f48, (this['Pf'] + _0x38f646['_a'] * _0x25844b) * 0.5, (this['Qf'] + _0x38f646['ab'] * _0x25844b) * 0.5);
                }
                ;this['Rf']['Bg']();
            }
            ;
            function _0x17240c(_0x26d6d1, _0x2de836, _0x33bb9e) {
                var _0x41f502 = _0x26d6d1 / 0x3e8;
                return {
                    '_a': (_0x3a706a['pa'](_0x2de836 * _0x41f502 + _0x33bb9e) + _0x3a706a['pa'](_0x2de836 * -0x20 * _0x41f502 + _0x33bb9e) * 0.4 + _0x3a706a['pa'](_0x2de836 * 0x7 * _0x41f502 + _0x33bb9e) * 0.7) * 0.8,
                    'ab': (_0x3a706a['oa'](_0x2de836 * _0x41f502 + _0x33bb9e) + _0x3a706a['oa'](_0x2de836 * -0x20 * _0x41f502 + _0x33bb9e) * 0.4 + _0x3a706a['oa'](_0x2de836 * 0x7 * _0x41f502 + _0x33bb9e) * 0.7) * 0.8
                };
            }
            return _0x2113ee;
        }()),
        _0x53b237['Cg'] = (function() {
            var _0x18d59f = _0x5b8a80;
            function _0x4a435d() {}
            return _0x4a435d['Dg'] = _0x18d59f(0x4da),
            _0x4a435d['Eg'] = _0x18d59f(0x41a),
            _0x4a435d['Fg'] = _0x18d59f(0x1ad),
            _0x4a435d['Gg'] = _0x18d59f(0x4ad),
            _0x4a435d['Hg'] = _0x18d59f(0x33a),
            _0x4a435d['Ig'] = _0x18d59f(0x4cf),
            _0x4a435d['Jg'] = _0x18d59f(0x1a1),
            _0x4a435d['Kg'] = _0x18d59f(0x597),
            _0x4a435d['Lg'] = _0x18d59f(0x199),
            _0x4a435d['Mg'] = _0x18d59f(0x18a),
            _0x4a435d['Ng'] = function(_0x3acb0c, _0x2b4371, _0x5a841c) {
                var _0x4598c2 = _0x18d59f
                  , _0x1cba46 = new Date();
                _0x1cba46['setTime'](_0x1cba46[_0x4598c2(0x6a8)]() + _0x5a841c * 0x5265c00);
                var _0x36e2c2 = 'expires=' + _0x1cba46[_0x4598c2(0x6ad)]();
                _0x53b237['d'][_0x4598c2(0x3b9)] = _0x3acb0c + '=' + _0x2b4371 + ';\x20' + _0x36e2c2;
            }
            ,
            _0x4a435d['Og'] = function(_0x5aa447) {
                var _0x42c786 = _0x18d59f
                  , _0x1d33fe = _0x5aa447 + '=';
                for (var _0x1732ac = _0x53b237['d'][_0x42c786(0x3b9)][_0x42c786(0x5d5)](';\x20'), _0x50d1b7 = 0x0; _0x50d1b7 < _0x1732ac[_0x42c786(0x60c)]; _0x50d1b7++) {
                    for (var _0x2feb1a = _0x1732ac[_0x50d1b7]; _0x2feb1a[_0x42c786(0x77b)](0x0) == '\x20'; ) {
                        _0x2feb1a = _0x2feb1a[_0x42c786(0x4c6)](0x1);
                    }
                    ;if (_0x2feb1a['indexOf'](_0x1d33fe) == 0x0)
                        return _0x2feb1a['substring'](_0x1d33fe[_0x42c786(0x60c)], _0x2feb1a['length']);
                }
                ;return '';
            }
            ,
            _0x4a435d;
        }()),
        _0x2ddbb5 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]],
        _0x69e837['Pg'] = {
            'Qg': function(_0x141de4, _0x3e0a38) {
                return function _0x38c736(_0x404ec4, _0x188910, _0x296908) {
                    var _0x3889b5 = _0x1792
                      , _0x4063de = ![];
                    for (var _0x537fe5 = _0x296908[_0x3889b5(0x60c)], _0xd49b04 = 0x0, _0x2a7a5e = _0x537fe5 - 0x1; _0xd49b04 < _0x537fe5; _0x2a7a5e = _0xd49b04++) {
                        _0x296908[_0xd49b04][0x1] > _0x188910 != _0x296908[_0x2a7a5e][0x1] > _0x188910 && _0x404ec4 < (_0x296908[_0x2a7a5e][0x0] - _0x296908[_0xd49b04][0x0]) * (_0x188910 - _0x296908[_0xd49b04][0x1]) / (_0x296908[_0x2a7a5e][0x1] - _0x296908[_0xd49b04][0x1]) + _0x296908[_0xd49b04][0x0] && (_0x4063de = !_0x4063de);
                    }
                    ;return _0x4063de;
                }(_0x3e0a38, _0x141de4, _0x2ddbb5);
            }
        },
        _0x53b237['Rg'] = (function() {
            var _0x5192a4 = _0x5b8a80;
            function _0x1a5c03(_0x27d070, _0x5ef221) {
                var _0x5af0a0, _0x354c98;
                return _0x5ef221 ? (_0x5af0a0 = 1.3,
                _0x354c98 = 0xed563f) : (_0x5af0a0 = 1.1,
                _0x354c98 = 0xf4d100),
                new _0x4154b0(_0x27d070,_0x354c98,!![],0.5,_0x5af0a0,0.5,0.7);
            }
            function _0x91071f(_0xc9aadc, _0x2f6d74, _0x2d2d17) {
                return ((_0xc9aadc * 0xff & 0xff) << 0x10) + ((_0x2f6d74 * 0xff & 0xff) << 0x8) + (_0x2d2d17 * 0xff & 0xff);
            }
            var _0xf147c9 = _0x3a706a['ca'](_0x32eec3['k']['l'], function() {
                var _0x25e4ae = _0x1792;
                _0x32eec3['k']['l'][_0x25e4ae(0x45d)](this),
                this['Sg'] = [],
                this['Tg'] = 0x0;
            });
            _0xf147c9[_0x5192a4(0x66b)]['Ug'] = function(_0x571c7c) {
                var _0x5b59b0 = _0x5192a4;
                this['Tg'] += _0x571c7c;
                if (this['Tg'] >= 0x1) {
                    var _0x1641c0 = _0x3a706a['_'](this['Tg']);
                    this['Tg'] -= _0x1641c0;
                    var _0x33019b = function _0x89b866(_0x55c998) {
                        var _0x4e9bed = _0x1792;
                        _0x117200 = _0x55c998 > 0x0 ? '+' + _0x3a706a['_'](_0x55c998) : _0x55c998 < 0x0 ? '-' + _0x3a706a['_'](_0x55c998) : '0';
                        var _0x117200, _0x321f7a, _0x26346d = _0x3a706a['ha'](1.5, 0.5 + _0x55c998 / 0x258);
                        if (_0x55c998 < 0x1)
                            _0x321f7a = _0x4e9bed(0x641);
                        else {
                            if (_0x55c998 < 0x1e) {
                                var _0x471711 = (_0x55c998 - 0x1) / 0x1d;
                                _0x321f7a = _0x91071f((0x1 - _0x471711) * 0x1 + _0x471711 * 0.96, (0x1 - _0x471711) * 0x1 + _0x471711 * 0.82, (0x1 - _0x471711) * 0x1 + _0x471711 * 0x0);
                            } else {
                                if (_0x55c998 < 0x12c) {
                                    var _0x37c462 = (_0x55c998 - 0x1e) / 0x10e;
                                    _0x321f7a = _0x91071f((0x1 - _0x37c462) * 0.96 + _0x37c462 * 0.93, (0x1 - _0x37c462) * 0.82 + _0x37c462 * 0.34, (0x1 - _0x37c462) * 0x0 + _0x37c462 * 0.25);
                                } else {
                                    if (_0x55c998 < 0x2bc) {
                                        var _0x236ce8 = (_0x55c998 - 0x12c) / 0x190;
                                        _0x321f7a = _0x91071f((0x1 - _0x236ce8) * 0.93 + _0x236ce8 * 0.98, (0x1 - _0x236ce8) * 0.34 + _0x236ce8 * 0x0, (0x1 - _0x236ce8) * 0.25 + _0x236ce8 * 0.98);
                                    } else
                                        _0x321f7a = 0xf900f9;
                                }
                            }
                        }
                        ;var _0x5d46ff = _0x3a706a['ma']()
                          , _0x1e6a40 = 0x1 + _0x3a706a['ma']() * 0.5;
                        return new _0x4154b0(_0x117200,_0x321f7a,!![],0.5,_0x26346d,_0x5d46ff,_0x1e6a40);
                    }(_0x1641c0);
                    this[_0x5b59b0(0x175)](_0x33019b),
                    this['Sg'][_0x5b59b0(0x1bc)](_0x33019b);
                }
            }
            ,
            window['playMonsterSound'] = function() {
                var _0x45cb0d = _0x5192a4;
                if (wormxObjects[_0x45cb0d(0x544)]) {
                    const _0x58313e = document[_0x45cb0d(0x374)](_0x45cb0d(0x59a));
                    _0x58313e && (_0x58313e['pause'](),
                    _0x58313e[_0x45cb0d(0x5d9)] = 0x0);
                    const _0x1f43df = document['getElementById']('monster_kill_sound');
                    _0x1f43df && (_0x1f43df[_0x45cb0d(0x2ab)] = wormxObjects[_0x45cb0d(0x439)] / 0x64,
                    _0x1f43df[_0x45cb0d(0x5d9)] = 0x0,
                    _0x1f43df['play']());
                }
            }
            ,
            _0xf147c9[_0x5192a4(0x66b)]['Vg'] = function(_0x2eb373, _0x3c1748) {
                var _0x172f76 = _0x5192a4;
                _0x401813(_0x444d21, oeo, 'count', _0x2eb373);
                _0x2eb373 && _0x444d21['vh'] && ((_0x444d21[_0x172f76(0x24a)] % 0xa !== 0x0 || !(_0x444d21[_0x172f76(0x24a)] > 0x0)) && window[_0x172f76(0x517)]());
                if (_0x2eb373) {
                    var _0xe212a8 = '';
                    if (_0x444d21['iq']) {
                        _0xe212a8 = _0x172f76(0x365);
                        var _0x376fc8 = _0x1a5c03(_0xe212a8, !![]);
                        this[_0x172f76(0x175)](_0x376fc8),
                        this['Sg'][_0x172f76(0x1bc)](_0x376fc8);
                    } else {
                        if (_0x444d21['headshotMsgType'] === 'custom' && _0x444d21[_0x172f76(0x2be)])
                            _0xe212a8 = _0x444d21[_0x172f76(0x2be)];
                        else
                            _0x444d21[_0x172f76(0x706)] ? _0xe212a8 = _0x444d21[_0x172f76(0x706)] : _0xe212a8 = _0x3a706a['U'](_0x172f76(0x1cc));
                        var _0x2b82c1 = _0xe212a8;
                        _0x444d21[_0x172f76(0x17b)] !== ![] && _0x3c1748 && (_0x444d21[_0x172f76(0x542)] === _0x172f76(0x579) ? _0x2b82c1 = _0x3c1748 + '\x20' + _0xe212a8 : _0x2b82c1 = _0xe212a8 + '\x20' + _0x3c1748);
                        var _0x376fc8 = _0x1a5c03(_0x2b82c1, !![]);
                        this[_0x172f76(0x175)](_0x376fc8),
                        this['Sg'][_0x172f76(0x1bc)](_0x376fc8);
                    }
                } else {
                    var _0xe212a8 = '';
                    if (_0x444d21['iq']) {
                        _0xe212a8 = _0x172f76(0x60b);
                        var _0x144060 = _0x1a5c03(_0xe212a8, ![]);
                        this[_0x172f76(0x175)](_0x144060),
                        this['Sg'][_0x172f76(0x1bc)](_0x144060);
                    } else {
                        if (_0x444d21[_0x172f76(0x424)] === _0x172f76(0x6ee) && _0x444d21[_0x172f76(0x642)])
                            _0xe212a8 = _0x444d21[_0x172f76(0x642)];
                        else
                            _0x444d21[_0x172f76(0x500)] ? _0xe212a8 = _0x444d21[_0x172f76(0x500)] : _0xe212a8 = _0x3a706a['U'](_0x172f76(0x62a));
                        var _0x2b82c1 = _0xe212a8;
                        _0x444d21[_0x172f76(0x769)] !== ![] && _0x3c1748 && (_0x444d21[_0x172f76(0x76e)] === _0x172f76(0x579) ? _0x2b82c1 = _0x3c1748 + '\x20' + _0xe212a8 : _0x2b82c1 = _0xe212a8 + '\x20' + _0x3c1748);
                        var _0x144060 = _0x1a5c03(_0x2b82c1, ![]);
                        this[_0x172f76(0x175)](_0x144060),
                        this['Sg'][_0x172f76(0x1bc)](_0x144060);
                    }
                }
            }
            ,
            _0xf147c9[_0x5192a4(0x66b)]['Bg'] = function(_0x2defea, _0x4a00e0) {
                var _0x57c653 = _0x5192a4
                  , _0x23689c = ooo['Xg']['Kf']['Wg']
                  , _0x19cefa = _0x23689c['Vf'][_0x57c653(0x612)] / _0x23689c['Vf']['resolution']
                  , _0x50eb46 = _0x23689c['Vf'][_0x57c653(0x67d)] / _0x23689c['Vf'][_0x57c653(0x282)];
                for (var _0x2366fd = 0x0; _0x2366fd < this['Sg'][_0x57c653(0x60c)]; ) {
                    var _0x3abf20 = this['Sg'][_0x2366fd];
                    _0x3abf20['Yg'] = _0x3abf20['Yg'] + _0x4a00e0 / 0x7d0 * _0x3abf20['Zg'],
                    _0x3abf20['$g'] = _0x3abf20['$g'] + _0x4a00e0 / 0x7d0 * _0x3abf20['_g'],
                    _0x3abf20[_0x57c653(0x626)] = _0x3a706a['oa'](_0x69e837['T'] * _0x3abf20['$g']) * 0.5,
                    _0x3abf20[_0x57c653(0x760)][_0x57c653(0x170)](_0x3abf20['Yg']),
                    _0x3abf20[_0x57c653(0x722)]['x'] = _0x19cefa * (0.25 + _0x3abf20['ah'] * 0.5),
                    _0x3abf20[_0x57c653(0x722)]['y'] = _0x3abf20['bh'] ? _0x50eb46 * (0x1 - (0x1 + _0x3abf20['$g']) * 0.5) : _0x50eb46 * (0x1 - (0x0 + _0x3abf20['$g']) * 0.5),
                    _0x3abf20['$g'] > 0x1 && (_0x32eec3['k']['F']['G'](_0x3abf20),
                    this['Sg'][_0x57c653(0x687)](_0x2366fd, 0x1),
                    _0x2366fd--),
                    _0x2366fd++;
                }
            }
            ;
            var _0x4154b0 = _0x3a706a['ca'](_0x32eec3['k']['t'], function(_0x5e615e, _0x4329c9, _0x3df2f1, _0x3f5b19, _0x415ed5, _0x3ebaac, _0x52394a) {
                var _0x2e47d6 = _0x5192a4;
                _0x32eec3['k']['t'][_0x2e47d6(0x45d)](this, _0x5e615e, {
                    'fill': _0x4329c9,
                    'fontFamily': _0x2e47d6(0x708),
                    'fontSize': 0x24
                }),
                this[_0x2e47d6(0x31d)][_0x2e47d6(0x170)](0.5),
                this['bh'] = _0x3df2f1,
                this['Yg'] = _0x3f5b19,
                this['Zg'] = _0x415ed5,
                this['ah'] = _0x3ebaac,
                this['$g'] = 0x0,
                this['_g'] = _0x52394a;
            });
            return _0xf147c9;
        }()),
        _0x53b237['Ke'] = function _0x57cd63(_0x3beab7, _0xd5e185) {
            this['Ee'] = _0x3beab7,
            this['Za'] = _0xd5e185;
        }
        ,
        _0x53b237['jd'] = {
            'ch': 0x0,
            'id': 0x10
        },
        _0x53b237['dh'] = (function() {
            var _0x18645a = _0x5b8a80;
            function _0x44b6ec() {
                this['eh'] = _0x53b237['jd']['ch'],
                this['fh'] = 0x0,
                this['gh'] = 0x1f4,
                this['hh'] = 0xfa0,
                this['ih'] = 0x1b58;
            }
            return _0x44b6ec['jh'] = 0x0,
            _0x44b6ec[_0x18645a(0x66b)]['kh'] = function() {
                return this['gh'] * 1.02;
            }
            ,
            _0x44b6ec;
        }()),
        _0x53b237['lh'] = (function() {
            var _0xec0f43 = _0x5b8a80;
            function _0x134922(_0x13a9a1) {
                var _0x309135 = _0x1792, _0x596416;
                this['Of'] = _0x13a9a1,
                this['nc'] = _0x13a9a1[_0x309135(0x3a1)]()[0x0],
                this['Vf'] = ((_0x596416 = {})[_0x309135(0x587)] = this['nc'],
                _0x596416[_0x309135(0x1d7)] = _0x304a65,
                _0x596416['antialias'] = !![],
                new _0x32eec3['k']['o'](_0x596416)),
                this['Wf'] = new _0x32eec3['k']['l'](),
                this['Wf'][_0x309135(0x6dd)] = !![],
                this['mh'] = _0x3a706a['_'](_0x3a706a['ma']()),
                this['nh'] = 0x0,
                this['oh'] = 0x0,
                this['ph'] = 0xf,
                this['qh'] = 0.5,
                this['rh'] = 0x0,
                this['sh'] = new _0x53b237['th'](),
                this['uh'] = new _0x32eec3['k']['p'](),
                this['vh'] = new _0x32eec3['k']['l'](),
                this['wh'] = new _0x32eec3['k']['l'](),
                this['wh']['sortableChildren'] = !![],
                this['xh'] = new _0x32eec3['k']['l'](),
                this['yh'] = new _0x32eec3['k']['l'](),
                this['yh'][_0x309135(0x6dd)] = !![],
                this['zh'] = new _0x32eec3['k']['l'](),
                this['Ah'] = new _0x4333e9(),
                this['Bh'] = new _0x5e7f8a(),
                this['Ch'] = new _0x5d93ab(),
                this['Dh'] = new _0x53b237['Rg'](),
                this['Eh'] = new _0x32eec3['k']['s'](),
                this['Fh'] = {
                    'x': 0x0,
                    'y': 0x0
                },
                this['Sa']();
            }
            var _0x5a3f44, _0x2d6cac, _0x1b6313, _0x49e958, _0x57b462, _0x304a65 = 0x0;
            _0x134922[_0xec0f43(0x66b)]['Sa'] = function() {
                var _0x3ff0ed = _0xec0f43;
                this['Vf'][_0x3ff0ed(0x1d7)] = _0x304a65,
                this['sh']['_f'][_0x3ff0ed(0x2f2)] = 0xa,
                this['Wf'][_0x3ff0ed(0x175)](this['sh']['_f']),
                this['uh']['zIndex'] = 0x14,
                this['Wf']['addChild'](this['uh']),
                this['vh'][_0x3ff0ed(0x2f2)] = 0x1388,
                this['Wf'][_0x3ff0ed(0x175)](this['vh']),
                this['wh'][_0x3ff0ed(0x2f2)] = 0x13ec,
                this['Wf'][_0x3ff0ed(0x175)](this['wh']),
                this['xh'][_0x3ff0ed(0x2f2)] = 0x2710,
                this['Wf'][_0x3ff0ed(0x175)](this['xh']),
                this['Eh']['texture'] = ooo['ef']['Gh'],
                this['Eh'][_0x3ff0ed(0x31d)][_0x3ff0ed(0x170)](0.5),
                _0x478708 = new _0x32eec3['k']['p'](),
                _0x478708[_0x3ff0ed(0x2f2)] = 0x1,
                this['Wf'][_0x3ff0ed(0x175)](_0x478708),
                this['Eh']['zIndex'] = 0x1,
                this['yh'][_0x3ff0ed(0x175)](this['Eh']),
                this['zh'][_0x3ff0ed(0x626)] = 0.6,
                this['zh'][_0x3ff0ed(0x2f2)] = 0x2,
                this['yh'][_0x3ff0ed(0x175)](this['zh']),
                this['Dh'][_0x3ff0ed(0x2f2)] = 0x3,
                this['yh']['addChild'](this['Dh']),
                this['Ah'][_0x3ff0ed(0x626)] = 0.8,
                this['Ah']['zIndex'] = 0x4,
                this['yh']['addChild'](this['Ah']),
                this['Bh'][_0x3ff0ed(0x2f2)] = 0x5,
                this['yh']['addChild'](this['Bh']),
                this['Ch'][_0x3ff0ed(0x2f2)] = 0x6,
                this['yh'][_0x3ff0ed(0x175)](this['Ch']),
                this['qg']();
            }
            ,
            _0x134922[_0xec0f43(0x66b)]['qg'] = function() {
                var _0x2d2b91 = _0xec0f43
                  , _0x210b9d = _0x3a706a['e']()
                  , _0xc27d57 = this['Of'][_0x2d2b91(0x612)]()
                  , _0x1ff9b5 = this['Of'][_0x2d2b91(0x67d)]();
                this['Vf']['resize'](_0xc27d57, _0x1ff9b5),
                this['Vf'][_0x2d2b91(0x282)] = _0x210b9d,
                this['nc'][_0x2d2b91(0x612)] = _0x210b9d * _0xc27d57,
                this['nc'][_0x2d2b91(0x67d)] = _0x210b9d * _0x1ff9b5,
                this['qh'] = _0x3a706a['ha'](_0x3a706a['ha'](_0xc27d57, _0x1ff9b5), _0x3a706a['ia'](_0xc27d57, _0x1ff9b5) * 0.625),
                this['Eh']['position']['x'] = _0xc27d57 / 0x2,
                this['Eh']['position']['y'] = _0x1ff9b5 / 0x2,
                this['Eh']['width'] = _0xc27d57,
                this['Eh'][_0x2d2b91(0x67d)] = _0x1ff9b5,
                this['Ah']['addChild'](ctx[_0x2d2b91(0x3f7)]),
                this['Ah'][_0x2d2b91(0x722)]['x'] = _0x444d21['sc'] == 0x0 ? 0x3c : _0xc27d57 / 0x2 + 0x3c - _0xc27d57 * _0x444d21['wi'],
                this['Ah'][_0x2d2b91(0x722)]['y'] = 0x3c,
                this['Bh'][_0x2d2b91(0x722)]['x'] = _0x444d21['sc'] == 0x0 ? 0x6e : _0xc27d57 / 0x2 + 0x6e - _0xc27d57 * _0x444d21['wi'],
                this['Bh'][_0x2d2b91(0x722)]['y'] = 0xa,
                this['Ch']['position']['x'] = _0x444d21['sc'] == 0x0 ? _0xc27d57 - 0xe1 : _0xc27d57 / 0x2 - 0xe1 + _0xc27d57 * _0x444d21['wi'],
                this['Ch'][_0x2d2b91(0x722)]['y'] = 0x1;
            }
            ,
            _0x134922[_0xec0f43(0x66b)]['Bg'] = function(_0x221f70, _0x537086) {
                var _0xe3393c = _0xec0f43;
                this['ph'] = 0xf,
                this['vh']['removeChildren'](),
                this['wh'][_0xe3393c(0x24c)](),
                this['xh'][_0xe3393c(0x24c)](),
                this['zh']['removeChildren'](),
                this['sh']['Hh'](_0x221f70['eh'] === _0x53b237['jd']['ch'] ? ooo['ef'][_0xe3393c(0x6c7)] : ooo['ef']['Jh']);
                var _0x4430fb = this['uh'];
                _0x4430fb['clear'](),
                _0x4430fb['lineStyle'](0.2, 0xff0000, 0.3),
                _0x4430fb[_0xe3393c(0x497)](0x0, 0x0, _0x221f70['gh']),
                _0x4430fb[_0xe3393c(0x303)](),
                this['Ch']['Kh'] = _0x537086,
                this['zh']['visible'] = _0x537086;
            }
            ,
            _0x134922['prototype']['ug'] = function(_0x7c5995, _0x3f562e) {
                var _0x2bb2bd = _0xec0f43;
                if (!(this['Vf']['width'] <= 0x5)) {
                    var _0x453b22 = ooo['Mh']['Lh']
                      , _0x5c78c8 = this['Vf']['width'] / this['Vf']['resolution']
                      , _0x193f4a = this['Vf']['height'] / this['Vf']['resolution'];
                    this['ph'] = _0x3a706a['ga'](this['ph'], ooo['Mh']['Nh'], _0x3f562e, 0.002),
                    this['zh']['visible'] = _0x444d21['sn'];
                    var _0x70581e = this['qh'] / (this['ph'] * _0x444d21['z'])
                      , _0xbb4f2b = ooo['Mh']['Lh']['Nd'][_0x53b237['Pd']['Zd']]
                      , _0x5ec9f8 = _0xbb4f2b != null && _0xbb4f2b['Rd'];
                    this['rh'] = _0x3a706a['fa'](this['rh'] + _0x3f562e / 0x3e8 * ((_0x5ec9f8 ? 0x1 : 0x0) * 0.1 - this['rh']), 0x0, 0x1),
                    this['Eh'][_0x2bb2bd(0x626)] = this['rh'],
                    this['mh'] = this['mh'] + _0x3f562e * 0.01;
                    this['mh'] > 0x168 && (this['mh'] = this['mh'] % 0x168);
                    this['nh'] = _0x3a706a['oa'](_0x7c5995 / 0x4b0 * _0x69e837['S']);
                    var _0x4bf9e0 = _0x453b22['Oh']();
                    this['Fh']['x'] = _0x3a706a['ja'](this['Fh']['x'], _0x4bf9e0['_a'], _0x3f562e, window[_0x2bb2bd(0x6cd)][_0x2bb2bd(0x18b)], 33.333),
                    this['Fh']['y'] = _0x3a706a['ja'](this['Fh']['y'], _0x4bf9e0['ab'], _0x3f562e, 0.5, 33.333);
                    var _0x251c73 = _0x5c78c8 / _0x70581e / 0x2
                      , _0x3266e0 = _0x193f4a / _0x70581e / 0x2;
                    ooo['Mh']['Ph'](this['Fh']['x'] - _0x251c73 * 1.3, this['Fh']['x'] + _0x251c73 * 1.3, this['Fh']['y'] - _0x3266e0 * 1.3, this['Fh']['y'] + _0x3266e0 * 1.3),
                    this['sh']['Bg'](this['Fh']['x'], this['Fh']['y'], _0x251c73 * 0x2, _0x3266e0 * 0x2);
                    var _0x342c42 = ooo['Mh']['Qh']['gh'];
                    this['Wf'][_0x2bb2bd(0x760)]['x'] = _0x70581e,
                    this['Wf'][_0x2bb2bd(0x760)]['y'] = _0x70581e,
                    this['Wf'][_0x2bb2bd(0x722)]['x'] = _0x5c78c8 / 0x2 - this['Fh']['x'] * _0x70581e,
                    this['Wf']['position']['y'] = _0x193f4a / 0x2 - this['Fh']['y'] * _0x70581e,
                    window['coords'] = {
                        'playerX': this['Ah']['Sh'][_0x2bb2bd(0x722)]['x'],
                        'playerY': this['Ah']['Sh'][_0x2bb2bd(0x722)]['y']
                    };
                    if (_0x444d21['ls'])
                        !window[_0x2bb2bd(0x39a)] && (window[_0x2bb2bd(0x39a)] = new PIXI[(_0x2bb2bd(0x4ef))](),
                        window[_0x2bb2bd(0x39a)]['zIndex'] = 0x14,
                        this['Wf'][_0x2bb2bd(0x175)](window['laserGraphics'])),
                        window[_0x2bb2bd(0x39a)][_0x2bb2bd(0x5b6)] = !![],
                        window[_0x2bb2bd(0x39a)]['clear'](),
                        window['laserGraphics'][_0x2bb2bd(0x33d)](window['laserOptions'][_0x2bb2bd(0x3d9)], window[_0x2bb2bd(0x5c0)][_0x2bb2bd(0x5a0)], window[_0x2bb2bd(0x5c0)][_0x2bb2bd(0x4b9)]),
                        window[_0x2bb2bd(0x39a)][_0x2bb2bd(0x3a4)](_0x4bf9e0['_a'], _0x4bf9e0['ab']),
                        window[_0x2bb2bd(0x39a)][_0x2bb2bd(0x202)](0x0, 0x0),
                        window[_0x2bb2bd(0x39a)][_0x2bb2bd(0x303)]();
                    else
                        window[_0x2bb2bd(0x39a)] && (window[_0x2bb2bd(0x39a)][_0x2bb2bd(0x5b6)] = ![]);
                    var _0x540db5 = _0x3a706a['la'](_0x4bf9e0['_a'], _0x4bf9e0['ab']);
                    if (_0x540db5 > _0x342c42 - 0xa) {
                        this['oh'] = _0x3a706a['fa'](0x1 + (_0x540db5 - _0x342c42) / 0xa, 0x0, 0x1);
                        var _0x1b9927 = _0x3a706a['pa'](this['mh'] * _0x69e837['S'] / 0x168) * (0x1 - this['oh']) + this['oh'] * 0x1
                          , _0x465805 = _0x3a706a['oa'](this['mh'] * _0x69e837['S'] / 0x168) * (0x1 - this['oh'])
                          , _0x29ded5 = (_0x3a706a['ta'](_0x465805, _0x1b9927) + _0x69e837['S']) % _0x69e837['S'] * 0x168 / _0x69e837['S']
                          , _0x96ae59 = this['oh'] * (0.5 + this['nh'] * 0.5)
                          , _0x2bf3ad = _0x3a706a['za'](_0x3a706a['_'](_0x29ded5), 0x1, 0.75 - this['oh'] * 0.25);
                        this['sh']['nd'](_0x2bf3ad[0x0], _0x2bf3ad[0x1], _0x2bf3ad[0x2], 0.1 + _0x96ae59 * 0.2);
                    } else {
                        this['oh'] = 0x0;
                        var _0x396540 = _0x3a706a['za'](_0x3a706a['_'](this['mh']), 0x1, 0.75);
                        this['sh']['nd'](_0x396540[0x0], _0x396540[0x1], _0x396540[0x2], 0.1);
                    }
                    ;for (var _0x339721 = 0x0; _0x339721 < this['zh'][_0x2bb2bd(0x567)][_0x2bb2bd(0x60c)]; _0x339721++) {
                        var _0x197972 = this['zh']['children'][_0x339721];
                        _0x197972[_0x2bb2bd(0x722)]['x'] = _0x5c78c8 / 0x2 - (this['Fh']['x'] - _0x197972['Rh']['x']) * _0x70581e,
                        _0x197972['position']['y'] = _0x193f4a / 0x2 - (this['Fh']['y'] - _0x197972['Rh']['y']) * _0x70581e;
                    }
                    ;this['Ah']['Sh'][_0x2bb2bd(0x722)]['x'] = _0x4bf9e0['_a'] / _0x342c42 * this['Ah']['Th'],
                    this['Ah']['Sh'][_0x2bb2bd(0x722)]['y'] = _0x4bf9e0['ab'] / _0x342c42 * this['Ah']['Th'],
                    this['Bh']['Uh'](_0x7c5995),
                    this['Dh']['Bg'](_0x7c5995, _0x3f562e),
                    this['Vf']['render'](this['Wf'], null, !![]),
                    this['Vf'][_0x2bb2bd(0x23e)](this['yh'], null, ![]);
                }
            }
            ,
            _0x134922[_0xec0f43(0x66b)]['Vh'] = function(_0x52234c, _0x3e7e68) {
                var _0x4fc2ae = _0xec0f43;
                _0x3e7e68['Wh']['ld']['zd']()['zIndex'] = (_0x52234c + 0x80000000) / 0x100000000 * 0x1388,
                this['vh'][_0x4fc2ae(0x175)](_0x3e7e68['Wh']['md']['zd']()),
                this['wh'][_0x4fc2ae(0x175)](_0x3e7e68['Wh']['ld']['zd']());
            }
            ,
            _0x134922[_0xec0f43(0x66b)]['Xh'] = function(_0x23307b, _0x5ad443, _0x519ebb) {
                var _0x5b38d4 = _0xec0f43;
                _0x5ad443['Yc']['zIndex'] = ooo['Mh']['Qh']['fh'] ? 0x0 : 0xa + (_0x23307b + 0x8000) / 0x10000 * 0x1388,
                _0x38c4fe['n'] != null && _0x38c4fe['n']['Je'] == _0x23307b ? (_0x38c4fe['uj'] = _0x5ad443,
                this['xh'][_0x5b38d4(0x175)](_0x38c4fe['uj']['Yc'])) : this['xh'][_0x5b38d4(0x175)](_0x5ad443['Yc']),
                _0x23307b !== ooo['Mh']['Qh']['fh'] && this['zh']['addChild'](_0x519ebb);
            }
            ;
            var _0x4333e9 = _0x3a706a['ca'](_0x32eec3['k']['l'], function() {
                var _0x52f1d9 = _0xec0f43;
                _0x32eec3['k']['l'][_0x52f1d9(0x45d)](this),
                this['Th'] = 0x28,
                this['Yh'] = new _0x32eec3['k']['s'](),
                this['Yh'][_0x52f1d9(0x31d)]['set'](0.5),
                this['Sh'] = new _0x32eec3['k']['p']();
                var _0x24415b = _0x373087[_0x52f1d9(0x284)]
                  , _0x55791a = _0x373087[_0x52f1d9(0x5a8)]
                  , _0x554f83 = new _0x32eec3['k']['p']();
                _0x554f83[_0x52f1d9(0x1a5)](_0x52f1d9(0x603), 0.4),
                _0x554f83[_0x52f1d9(0x497)](0x0, 0x0, this['Th']),
                _0x554f83['endFill'](),
                _0x554f83[_0x52f1d9(0x33d)](0x2, 0xf79425),
                _0x554f83[_0x52f1d9(0x497)](0x0, 0x0, this['Th']),
                _0x554f83[_0x52f1d9(0x3a4)](0x0, -this['Th']),
                _0x554f83[_0x52f1d9(0x202)](0x0, +this['Th']),
                _0x554f83['moveTo'](-this['Th'], 0x0),
                _0x554f83[_0x52f1d9(0x202)](+this['Th'], 0x0),
                _0x554f83[_0x52f1d9(0x303)](),
                this['Yh'][_0x52f1d9(0x626)] = 0.5,
                this['Sh']['zIndex'] = 0x1869f,
                this['Sh'][_0x52f1d9(0x626)] = 0.9,
                this['Sh'][_0x52f1d9(0x1a5)](0xf79425),
                this['Sh'][_0x52f1d9(0x497)](0x0, 0x0, this['Th'] * 0.1),
                this['Sh'][_0x52f1d9(0x303)](),
                this['Sh']['lineStyle'](0x1, 'black'),
                this['Sh'][_0x52f1d9(0x497)](0x0, 0x0, this['Th'] * 0.1),
                this['Sh']['endFill'](),
                this[_0x52f1d9(0x175)](_0x554f83),
                this[_0x52f1d9(0x175)](ctx[_0x52f1d9(0x3f7)]),
                this['addChild'](this['Yh']),
                this[_0x52f1d9(0x175)](this['Sh']);
                {
                    this[_0x52f1d9(0x764)] = PIXI[_0x52f1d9(0x41f)][_0x52f1d9(0x595)](_0x52f1d9(0x1a4)),
                    this[_0x52f1d9(0x764)]['width'] = 0x64,
                    this[_0x52f1d9(0x764)][_0x52f1d9(0x67d)] = 0x64,
                    this[_0x52f1d9(0x764)]['x'] = -0x32,
                    this[_0x52f1d9(0x764)]['y'] = -0x32,
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x764)]);
                    _0xe5eec1() && (this['img_1'] = PIXI[_0x52f1d9(0x41f)]['from'](_0x444d21[_0x52f1d9(0x688)] + '/get_store.phpitem=mo_1.png'),
                    this[_0x52f1d9(0x52a)][_0x52f1d9(0x612)] = 0x50,
                    this[_0x52f1d9(0x52a)][_0x52f1d9(0x67d)] = 0x28,
                    this[_0x52f1d9(0x52a)]['x'] = -0x64 + _0x24415b * 0.5,
                    this['img_1']['y'] = -0x3c,
                    this['img_1'][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x1 && _0x38c4fe['on'],
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x52a)]),
                    this[_0x52f1d9(0x6b9)] = PIXI[_0x52f1d9(0x41f)][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x171)),
                    this[_0x52f1d9(0x6b9)][_0x52f1d9(0x612)] = 0x50,
                    this[_0x52f1d9(0x6b9)][_0x52f1d9(0x67d)] = 0x28,
                    this[_0x52f1d9(0x6b9)]['x'] = -0x64 + _0x24415b * 0.5,
                    this[_0x52f1d9(0x6b9)]['y'] = -0x3c,
                    this['img_2']['visible'] = _0x444d21['mo'] == 0x2,
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x6b9)]),
                    this[_0x52f1d9(0x1f0)] = PIXI['Sprite']['from'](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x343)),
                    this['img_3']['width'] = 0x50,
                    this['img_3'][_0x52f1d9(0x67d)] = 0x28,
                    this[_0x52f1d9(0x1f0)]['x'] = -0x64 + _0x24415b * 0.5,
                    this[_0x52f1d9(0x1f0)]['y'] = -0x3c,
                    this['img_3'][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x3,
                    this['addChild'](this['img_3']),
                    this[_0x52f1d9(0x5e5)] = PIXI['Sprite'][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x23a)),
                    this[_0x52f1d9(0x5e5)][_0x52f1d9(0x612)] = 0x50,
                    this[_0x52f1d9(0x5e5)][_0x52f1d9(0x67d)] = 0x28,
                    this['img_4']['x'] = -0x64 + _0x24415b * 0.5,
                    this[_0x52f1d9(0x5e5)]['y'] = -0x3c,
                    this[_0x52f1d9(0x5e5)]['visible'] = _0x444d21['mo'] == 0x4,
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x5e5)]),
                    this[_0x52f1d9(0x16e)] = PIXI[_0x52f1d9(0x41f)][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x763)),
                    this[_0x52f1d9(0x16e)][_0x52f1d9(0x612)] = 0x50,
                    this[_0x52f1d9(0x16e)]['height'] = 0x50,
                    this[_0x52f1d9(0x16e)]['x'] = -0x3c,
                    this['img_f']['y'] = -0x3c,
                    this[_0x52f1d9(0x16e)][_0x52f1d9(0x5b6)] = ![],
                    this['addChild'](this[_0x52f1d9(0x16e)]),
                    this[_0x52f1d9(0x252)] = PIXI[_0x52f1d9(0x41f)][_0x52f1d9(0x595)](_0x444d21['s_l'] + _0x52f1d9(0x637)),
                    this['img_o_2'][_0x52f1d9(0x612)] = 0x64,
                    this[_0x52f1d9(0x252)][_0x52f1d9(0x67d)] = 0x64,
                    this['img_o_2']['x'] = 0xf,
                    this[_0x52f1d9(0x252)]['y'] = -0xd2 + _0x55791a,
                    this[_0x52f1d9(0x252)][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x2,
                    this[_0x52f1d9(0x252)]['alpha'] = 0.25,
                    this['addChild'](this[_0x52f1d9(0x252)]),
                    this[_0x52f1d9(0x37f)] = PIXI[_0x52f1d9(0x41f)]['from'](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x54d)),
                    this[_0x52f1d9(0x37f)][_0x52f1d9(0x612)] = 0x64,
                    this['img_o_3'][_0x52f1d9(0x67d)] = 0x64,
                    this['img_o_3']['x'] = 0xf,
                    this[_0x52f1d9(0x37f)]['y'] = -0xd2 + _0x55791a,
                    this[_0x52f1d9(0x37f)][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x3,
                    this[_0x52f1d9(0x37f)][_0x52f1d9(0x626)] = 0.25,
                    this[_0x52f1d9(0x175)](this['img_o_3']),
                    this[_0x52f1d9(0x262)] = PIXI['Sprite'][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + '/get_store.phpitem=moo_4.png'),
                    this[_0x52f1d9(0x262)][_0x52f1d9(0x612)] = 0x64,
                    this[_0x52f1d9(0x262)][_0x52f1d9(0x67d)] = 0x64,
                    this[_0x52f1d9(0x262)]['x'] = 0xf,
                    this[_0x52f1d9(0x262)]['y'] = -0xd2 + _0x55791a,
                    this['img_o_4'][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x4,
                    this[_0x52f1d9(0x175)](this['img_o_4']),
                    this['img_i_2'] = PIXI[_0x52f1d9(0x41f)]['from'](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x2f1)),
                    this['img_i_2']['width'] = 0x32,
                    this[_0x52f1d9(0x38c)][_0x52f1d9(0x67d)] = 0x32,
                    this[_0x52f1d9(0x38c)]['x'] = 0x28,
                    this[_0x52f1d9(0x38c)]['y'] = -0xb9 + _0x55791a,
                    this[_0x52f1d9(0x38c)][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x2,
                    this[_0x52f1d9(0x38c)][_0x52f1d9(0x626)] = 0.25,
                    this[_0x52f1d9(0x175)](this['img_i_2']),
                    this[_0x52f1d9(0x55c)] = PIXI[_0x52f1d9(0x41f)][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x14a)),
                    this[_0x52f1d9(0x55c)][_0x52f1d9(0x612)] = 0x32,
                    this[_0x52f1d9(0x55c)][_0x52f1d9(0x67d)] = 0x32,
                    this[_0x52f1d9(0x55c)]['x'] = 0x28,
                    this[_0x52f1d9(0x55c)]['y'] = -0xb9 + _0x55791a,
                    this['img_i_3'][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x3,
                    this[_0x52f1d9(0x55c)][_0x52f1d9(0x626)] = 0.25,
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x55c)]),
                    this['img_p_1'] = PIXI[_0x52f1d9(0x41f)][_0x52f1d9(0x595)](_0x444d21['s_l'] + _0x52f1d9(0x52b)),
                    this[_0x52f1d9(0x137)][_0x52f1d9(0x612)] = 0x10,
                    this[_0x52f1d9(0x137)][_0x52f1d9(0x67d)] = 0x10,
                    this[_0x52f1d9(0x137)]['x'] = -0x44 + _0x24415b * 0.5,
                    this[_0x52f1d9(0x137)]['y'] = -0x44 + _0x55791a * 0.5,
                    this[_0x52f1d9(0x137)]['visible'] = _0x444d21['mo'] == 0x1 && _0x38c4fe['on'],
                    this['img_p_1']['alpha'] = 0.25,
                    this[_0x52f1d9(0x175)](this['img_p_1']),
                    this[_0x52f1d9(0x648)] = PIXI['Sprite'][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x28f)),
                    this[_0x52f1d9(0x648)][_0x52f1d9(0x612)] = 0x10,
                    this['img_pf_1']['height'] = 0x10,
                    this[_0x52f1d9(0x648)]['x'] = -0x44 + _0x24415b * 0.5,
                    this[_0x52f1d9(0x648)]['y'] = -0x44 + _0x55791a * 0.5,
                    this[_0x52f1d9(0x648)]['visible'] = ![],
                    this['img_pf_1']['alpha'] = 0x1,
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x648)]),
                    this['img_p_2'] = PIXI[_0x52f1d9(0x41f)][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + '/get_store.phpitem=mp_2.png'),
                    this['img_p_2'][_0x52f1d9(0x612)] = 0x10,
                    this[_0x52f1d9(0x551)][_0x52f1d9(0x67d)] = 0x10,
                    this[_0x52f1d9(0x551)]['x'] = -0x44 + _0x24415b * 0.5,
                    this[_0x52f1d9(0x551)]['y'] = -0x44 + _0x55791a * 0.5,
                    this[_0x52f1d9(0x551)][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x2,
                    this['img_p_2']['alpha'] = 0.25,
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x551)]),
                    this[_0x52f1d9(0x203)] = PIXI['Sprite'][_0x52f1d9(0x595)](_0x444d21[_0x52f1d9(0x688)] + _0x52f1d9(0x412)),
                    this[_0x52f1d9(0x203)][_0x52f1d9(0x612)] = 0x10,
                    this[_0x52f1d9(0x203)][_0x52f1d9(0x67d)] = 0x10,
                    this['img_p_3']['x'] = -0x44 + _0x24415b * 0.5,
                    this[_0x52f1d9(0x203)]['y'] = -0x44 + _0x55791a * 0.5,
                    this[_0x52f1d9(0x203)][_0x52f1d9(0x5b6)] = _0x444d21['mo'] == 0x3,
                    this[_0x52f1d9(0x203)][_0x52f1d9(0x626)] = 0.25,
                    this['addChild'](this[_0x52f1d9(0x203)]));
                    b = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': _0x52f1d9(0x4ca),
                        'fontSize': 0xc,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x2d4),
                        'strokeThickness': 0x1,
                        'whiteSpace': 'normal',
                        'wordWrap': !![]
                    });
                    let _0x1c90c5 = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': _0x52f1d9(0x2bc),
                        'fontSize': 0xc,
                        'lineJoin': 'round',
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': _0x52f1d9(0x182),
                        'wordWrap': !![]
                    })
                      , _0x415392 = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': _0x52f1d9(0x2bc),
                        'fontSize': 0x14,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': 'normal',
                        'wordWrap': !![]
                    })
                      , _0x402245 = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': _0x52f1d9(0x2bc),
                        'fontSize': 0x14,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': _0x52f1d9(0x182),
                        'wordWrap': !![]
                    })
                      , _0x53b6c2 = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': '#fff',
                        'fontSize': 0x14,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': _0x52f1d9(0x182),
                        'wordWrap': !![]
                    })
                      , _0x4cc787 = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': '#fff',
                        'fontSize': 0x14,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': _0x52f1d9(0x182),
                        'wordWrap': !![]
                    })
                      , _0x255887 = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': _0x52f1d9(0x2bc),
                        'fontSize': 0x14,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': 'normal',
                        'wordWrap': !![]
                    })
                      , _0x15c06b = new PIXI[(_0x52f1d9(0x65c))]({
                        'align': _0x52f1d9(0x56c),
                        'fill': _0x52f1d9(0x2bc),
                        'fontSize': 0x14,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': 'normal',
                        'wordWrap': !![]
                    })
                      , _0x4911a4 = new PIXI['TextStyle']({
                        'align': _0x52f1d9(0x56c),
                        'fill': _0x52f1d9(0x2bc),
                        'fontSize': 0x14,
                        'lineJoin': _0x52f1d9(0x481),
                        'stroke': _0x52f1d9(0x44a),
                        'whiteSpace': _0x52f1d9(0x182),
                        'wordWrap': !![]
                    });
                    this[_0x52f1d9(0x2d7)] = new PIXI[(_0x52f1d9(0x787))]('',_0x415392),
                    this[_0x52f1d9(0x3f8)] = new PIXI[(_0x52f1d9(0x787))]('',_0x402245),
                    this[_0x52f1d9(0x386)] = new PIXI[(_0x52f1d9(0x787))]('',_0x53b6c2),
                    this[_0x52f1d9(0x20c)] = new PIXI[(_0x52f1d9(0x787))]('',_0x4cc787),
                    this[_0x52f1d9(0x373)] = new PIXI[(_0x52f1d9(0x787))]('',_0x255887),
                    this[_0x52f1d9(0x22f)] = new PIXI['Text']('',_0x15c06b),
                    this[_0x52f1d9(0x25d)] = new PIXI[(_0x52f1d9(0x787))]('',_0x4911a4),
                    this['pk0']['x'] = 0x3c,
                    this[_0x52f1d9(0x3f8)]['x'] = 0x64,
                    this[_0x52f1d9(0x386)]['x'] = 0x8c,
                    this[_0x52f1d9(0x20c)]['x'] = 0xb4,
                    this[_0x52f1d9(0x373)]['x'] = 0xdc,
                    this['pk5']['x'] = 0x104,
                    this[_0x52f1d9(0x25d)]['x'] = 0x12c,
                    this['pk0']['y'] = -0xc,
                    this[_0x52f1d9(0x3f8)]['y'] = -0xc,
                    this['pk2']['y'] = -0xc,
                    this[_0x52f1d9(0x20c)]['y'] = -0xc,
                    this[_0x52f1d9(0x373)]['y'] = -0xc,
                    this[_0x52f1d9(0x22f)]['y'] = -0xc,
                    this['pk6']['y'] = -0xc,
                    this['addChild'](this[_0x52f1d9(0x2d7)]),
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x3f8)]),
                    this[_0x52f1d9(0x175)](this['pk2']),
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x20c)]),
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x373)]),
                    this[_0x52f1d9(0x175)](this['pk5']),
                    this[_0x52f1d9(0x175)](this[_0x52f1d9(0x25d)]),
                    this[_0x52f1d9(0x46d)] = new PIXI[(_0x52f1d9(0x136))](),
                    this['container_count']['x'] = -0x2d,
                    this[_0x52f1d9(0x46d)]['y'] = -0x34,
                    this[_0x52f1d9(0x23c)] = new PIXI[(_0x52f1d9(0x787))]('HS',b),
                    this[_0x52f1d9(0x2b2)] = new PIXI[(_0x52f1d9(0x787))]('0',b),
                    this[_0x52f1d9(0x2fe)] = new PIXI['Text']('0',b),
                    this['label_kill'] = new PIXI['Text'](_0x52f1d9(0x6e9),_0x1c90c5),
                    this[_0x52f1d9(0x484)] = new PIXI['Text']('0',_0x1c90c5),
                    this[_0x52f1d9(0x232)] = new PIXI[(_0x52f1d9(0x787))]('0',_0x1c90c5),
                    this[_0x52f1d9(0x23c)]['x'] = 0x19,
                    this['label_hs']['y'] = 0x6b,
                    this[_0x52f1d9(0x23c)][_0x52f1d9(0x31d)]['x'] = 0.5,
                    this[_0x52f1d9(0x507)]['x'] = 0x4b,
                    this['label_kill']['y'] = 0x6b,
                    this['label_kill'][_0x52f1d9(0x31d)]['x'] = 0.5,
                    this['value1_hs']['x'] = 0x19,
                    this[_0x52f1d9(0x2b2)]['y'] = 0x78,
                    this[_0x52f1d9(0x2b2)]['anchor']['x'] = 0.5,
                    this[_0x52f1d9(0x484)]['x'] = 0x4b,
                    this[_0x52f1d9(0x484)]['y'] = 0x78,
                    this[_0x52f1d9(0x484)][_0x52f1d9(0x31d)]['x'] = 0.5,
                    this[_0x52f1d9(0x2fe)]['x'] = 0x19,
                    this['value2_hs']['y'] = 0x85,
                    this[_0x52f1d9(0x2fe)][_0x52f1d9(0x31d)]['x'] = 0.5,
                    this[_0x52f1d9(0x232)]['x'] = 0x4b,
                    this[_0x52f1d9(0x232)]['y'] = 0x85,
                    this[_0x52f1d9(0x232)][_0x52f1d9(0x31d)]['x'] = 0.5,
                    !_0x444d21[_0x52f1d9(0x186)] && (this[_0x52f1d9(0x2fe)][_0x52f1d9(0x626)] = 0x0,
                    this[_0x52f1d9(0x232)][_0x52f1d9(0x626)] = 0x0),
                    this[_0x52f1d9(0x46d)][_0x52f1d9(0x175)](this['label_hs']),
                    this[_0x52f1d9(0x46d)][_0x52f1d9(0x175)](this[_0x52f1d9(0x2b2)]),
                    this[_0x52f1d9(0x46d)]['addChild'](this[_0x52f1d9(0x2fe)]),
                    this[_0x52f1d9(0x46d)][_0x52f1d9(0x175)](this['label_kill']),
                    this[_0x52f1d9(0x46d)][_0x52f1d9(0x175)](this[_0x52f1d9(0x484)]),
                    this['container_count'][_0x52f1d9(0x175)](this[_0x52f1d9(0x232)]),
                    this['addChild'](this[_0x52f1d9(0x46d)]);
                }
            });
            (_0x5a3f44 = _0x3a706a['ca'](_0x32eec3['k']['l'], function() {
                var _0x4bb7c6 = _0xec0f43;
                _0x32eec3['k']['l'][_0x4bb7c6(0x45d)](this),
                this['Zh'] = {};
            }))[_0xec0f43(0x66b)]['Uh'] = function(_0xf5fec7) {
                var _0x283fb3 = _0xec0f43
                  , _0x596231 = 0.5 + _0x3a706a['pa'](_0x69e837['S'] * (_0xf5fec7 / 0x3e8 / 1.6)) * 0.5;
                for (var _0x5018df in this['Zh']) {
                    var _0x2cb824 = this['Zh'][_0x5018df]
                      , _0xac6531 = _0x2cb824['$h'];
                    _0x2cb824[_0x283fb3(0x626)] = 0x1 - _0xac6531 + _0xac6531 * _0x596231;
                }
            }
            ,
            _0x5a3f44[_0xec0f43(0x66b)]['Bg'] = function(_0x5275f0) {
                var _0x1dbfb5 = _0xec0f43;
                for (var _0x46c96f in this['Zh']) {
                    (_0x5275f0[_0x46c96f] == null || !_0x5275f0[_0x46c96f]['Rd']) && (_0x32eec3['k']['F']['G'](this['Zh'][_0x46c96f]),
                    delete this['Zh'][_0x46c96f]);
                }
                ;var _0x46a92e = 0x0;
                for (var _0x3a8e92 in _0x5275f0) {
                    var _0x5a441e = _0x5275f0[_0x3a8e92];
                    if (_0x5a441e['Rd']) {
                        var _0x6af37d = this['Zh'][_0x3a8e92];
                        if (!_0x6af37d) {
                            var _0x1e7957 = ooo['ud']['Cc']()['$b'](_0x5a441e['Wd'])['dc'];
                            (_0x6af37d = new _0x2d6cac())['texture'] = _0x1e7957['nb'](),
                            _0x6af37d[_0x1dbfb5(0x612)] = 0x28,
                            _0x6af37d[_0x1dbfb5(0x67d)] = 0x28,
                            this['Zh'][_0x3a8e92] = _0x6af37d,
                            this[_0x1dbfb5(0x175)](_0x6af37d);
                        }
                        ;_0x38c4fe['on'] && ((!_0x444d21['hz'] || !_0x444d21[_0x1dbfb5(0x62b)] || !_0x444d21['tt']) && _0x1babb5(_0x444d21, oeo, _0x1dbfb5(0x288), _0x46a92e, _0x5a441e['Wd'], _0x5a441e['Xd'])),
                        _0x6af37d['$h'] = _0x5a441e['Xd'],
                        _0x444d21['hz'] && _0x444d21[_0x1dbfb5(0x62b)] && _0x444d21['tt'] ? ((_0x46a92e == 0x0 || _0x46a92e == 0x28 || _0x46a92e == 0x50 || _0x46a92e == 0x78) && (_0x6af37d['position']['x'] = 0x0,
                        _0x6af37d[_0x1dbfb5(0x722)]['y'] = _0x46a92e + 0xa),
                        _0x46a92e == 0xa0 && (_0x6af37d[_0x1dbfb5(0x722)]['x'] = -0x28,
                        _0x6af37d[_0x1dbfb5(0x722)]['y'] = 0x82),
                        _0x46a92e == 0xc8 && (_0x6af37d['position']['x'] = -0x50,
                        _0x6af37d[_0x1dbfb5(0x722)]['y'] = 0x82),
                        _0x46a92e == 0xf0 && (_0x6af37d['position']['x'] = -0x78,
                        _0x6af37d[_0x1dbfb5(0x722)]['y'] = 0x82)) : _0x6af37d['position']['x'] = _0x46a92e,
                        _0x46a92e += 0x28;
                    }
                }
            }
            ,
            _0x2d6cac = _0x3a706a['ca'](_0x32eec3['k']['s'], function() {
                var _0x46442a = _0xec0f43;
                _0x32eec3['k']['s'][_0x46442a(0x45d)](this),
                this['$h'] = 0x0;
            });
            var _0x5e7f8a = _0x5a3f44;
            (_0x1b6313 = _0x3a706a['ca'](_0x32eec3['k']['l'], function() {
                var _0x402b26 = _0xec0f43;
                _0x32eec3['k']['l'][_0x402b26(0x45d)](this),
                this['Kh'] = !![],
                this['_h'] = 0xc,
                this['ai'] = 0x9,
                this['Sg'] = [];
                for (var _0x1eed24 = 0x0; _0x1eed24 < 0xe; _0x1eed24++) {
                    this['bi']();
                }
            }))['prototype']['Bg'] = function(_0x388291) {
                var _0x88c490 = _0xec0f43;
                if (_0x38c4fe['on']) {
                    if (_0x444d21['tt']) {
                        this[_0x88c490(0x175)](_0xa85e3),
                        this[_0x88c490(0x175)](_0x9f96af);
                        if (_0x444d21['hz'] && _0x444d21[_0x88c490(0x62b)]) {
                            var _0x3a2fca = _0x373087[_0x88c490(0x5a8)];
                            _0xa85e3['x'] = 0xcd,
                            _0xa85e3['y'] = _0x3a2fca / 0x2 - 0x3a + 0xa,
                            _0x9f96af['x'] = 0xcd,
                            _0x9f96af['y'] = _0x3a2fca / 0x2 - 0x1c + 0xa,
                            _0x576da0['x'] = 0xcd,
                            _0x576da0['y'] = _0x3a2fca / 0x2 + 0x3 + 0xa,
                            _0x533cda['x'] = 0xcd,
                            _0x533cda['y'] = _0x3a2fca / 0x2 + 0x21 + 0xa,
                            this[_0x88c490(0x175)](_0x576da0),
                            this[_0x88c490(0x175)](_0x533cda);
                        } else
                            this[_0x88c490(0x175)](_0x31aef3);
                    } else
                        this[_0x88c490(0x175)](_0xa85e3),
                        this[_0x88c490(0x175)](_0x9f96af),
                        _0x444d21['hz'] && _0x444d21[_0x88c490(0x62b)] ? (_0xa85e3['x'] = -0x61,
                        _0x9f96af['x'] = -0x41,
                        this['addChild'](_0x576da0),
                        this[_0x88c490(0x175)](_0x533cda)) : this['addChild'](_0x31aef3);
                } else
                    _0x444d21['hz'] && _0x444d21['mobile'];
                ;this[_0x88c490(0x175)](_0x17f008);
                var _0x570395 = ooo['Mh']['Qh']['eh'] === _0x53b237['jd']['id']
                  , _0x1cf7c7 = 0x0
                  , _0x4549b4 = 0x0;
                _0x4549b4 >= this['Sg'][_0x88c490(0x60c)] && this['bi']();
                this['Sg'][_0x4549b4]['ci'](0x1, _0x88c490(0x6fe)),
                this['Sg'][_0x4549b4]['di']('', _0x3a706a['U'](_0x88c490(0x6a6))[_0x88c490(0x390)]('10', _0x444d21['to']), '(' + ooo['Mh']['ei'] + _0x88c490(0x1b9)),
                this['Sg'][_0x4549b4][_0x88c490(0x722)]['y'] = _0x1cf7c7,
                _0x1cf7c7 += this['_h'],
                _0x4549b4 += 0x1;
                _0x388291['fi'][_0x88c490(0x60c)] > 0x0 && (_0x1cf7c7 += this['ai']);
                for (var _0x2fe41a = 0x0; _0x2fe41a < _0x388291['fi'][_0x88c490(0x60c)]; _0x2fe41a++) {
                    var _0x2081a6 = _0x388291['fi'][_0x2fe41a]
                      , _0x5e3d79 = ooo['ud']['Cc']()['Ub'](_0x2081a6['gi'])
                      , _0x4074ef = ''
                      , _0x54dc34 = ooo['ud']['Gc']()[_0x88c490(0x6b4)][_0x5e3d79['_b']];
                    _0x54dc34 != null && (_0x4074ef = _0x3a706a['V'](_0x54dc34)),
                    _0x4549b4 >= this['Sg'][_0x88c490(0x60c)] && this['bi'](),
                    this['Sg'][_0x4549b4]['ci'](0.8, _0x5e3d79['ac']['cc']),
                    this['Sg'][_0x4549b4]['di']('' + (_0x2fe41a + 0x1), _0x4074ef, '' + _0x3a706a['_'](_0x2081a6['hi'])),
                    this['Sg'][_0x4549b4][_0x88c490(0x722)]['y'] = _0x1cf7c7,
                    _0x1cf7c7 += this['_h'],
                    _0x4549b4 += 0x1;
                }
                ;_0x388291['ii'][_0x88c490(0x60c)] > 0x0 && (_0x1cf7c7 += this['ai']);
                for (var _0x48b2a9 = 0x0; _0x48b2a9 < _0x388291['ii'][_0x88c490(0x60c)] - (0xa - _0x444d21['to']); _0x48b2a9++) {
                    var _0x11caf7 = _0x388291['ii'][_0x48b2a9]
                      , _0xdcad37 = ooo['Mh']['Qh']['fh'] === _0x11caf7['ji']
                      , _0x1a52ea = undefined
                      , _0x648e21 = undefined;
                    if (_0xdcad37)
                        _0x1a52ea = _0x88c490(0x6fe),
                        _0x648e21 = ooo['Mh']['Lh']['ki']['Xa'];
                    else {
                        var _0x3e4e57 = ooo['Mh']['li'][_0x11caf7['ji']];
                        _0x3e4e57 != null ? (_0x1a52ea = _0x570395 ? ooo['ud']['Cc']()['Ub'](_0x3e4e57['ki']['mi'])['ac']['cc'] : ooo['ud']['Cc']()['Tb'](_0x3e4e57['ki']['ni'])['cc'],
                        _0x648e21 = _0x444d21['sn'] ? _0x3e4e57['ki']['Xa'] : '---') : (_0x1a52ea = _0x88c490(0x300),
                        _0x648e21 = '?');
                    }
                    ;_0xdcad37 && (_0x1cf7c7 += this['ai']),
                    _0x4549b4 >= this['Sg'][_0x88c490(0x60c)] && this['bi'](),
                    this['Sg'][_0x4549b4]['ci'](_0xdcad37 ? 0x1 : 0.8, _0x1a52ea),
                    this['Sg'][_0x4549b4]['di']('' + (_0x48b2a9 + 0x1), _0x648e21, '' + _0x3a706a['_'](_0x11caf7['hi'])),
                    this['Sg'][_0x4549b4][_0x88c490(0x722)]['y'] = _0x1cf7c7,
                    _0x1cf7c7 += this['_h'],
                    _0x4549b4 += 0x1,
                    _0xdcad37 && (_0x1cf7c7 += this['ai']);
                }
                ;for (ooo['Mh']['oi'] > _0x388291['ii']['length'] && (_0x1cf7c7 += this['ai'],
                _0x4549b4 >= this['Sg'][_0x88c490(0x60c)] && this['bi'](),
                this['Sg'][_0x4549b4]['ci'](0x1, _0x88c490(0x6fe)),
                this['Sg'][_0x4549b4]['di']('' + ooo['Mh']['oi'], ooo['Mh']['Lh']['ki']['Xa'], '' + _0x3a706a['_'](ooo['Mh']['Lh']['hi'])),
                this['Sg'][_0x4549b4]['position']['y'] = _0x1cf7c7,
                _0x1cf7c7 += this['_h'],
                _0x4549b4 += 0x1,
                _0x1cf7c7 += this['ai']); this['Sg'][_0x88c490(0x60c)] > _0x4549b4; ) {
                    _0x32eec3['k']['F']['G'](this['Sg']['pop']());
                }
            }
            ,
            _0x1b6313[_0xec0f43(0x66b)]['bi'] = function() {
                var _0x1e8f87 = _0xec0f43
                  , _0x536a5f = new _0x57b462();
                _0x536a5f['position']['y'] = 0x0,
                this['Sg']['length'] > 0x0 && (_0x536a5f[_0x1e8f87(0x722)]['y'] = this['Sg'][this['Sg'][_0x1e8f87(0x60c)] - 0x1][_0x1e8f87(0x722)]['y'] + this['_h']),
                this['Sg'][_0x1e8f87(0x1bc)](_0x536a5f),
                this[_0x1e8f87(0x175)](_0x536a5f);
            }
            ,
            (_0x49e958 = _0x3a706a['ca'](_0x32eec3['k']['l'], function() {
                var _0x14416c = _0xec0f43;
                _0x32eec3['k']['l']['call'](this),
                this['pi'] = new _0x32eec3['k']['t']('',{
                    'fontFamily': _0x14416c(0x708),
                    'fontSize': 0xc,
                    'fill': _0x14416c(0x6fe)
                }),
                this['pi']['anchor']['x'] = 0x1,
                this['pi'][_0x14416c(0x722)]['x'] = 0x1e,
                this[_0x14416c(0x175)](this['pi']),
                this['qi'] = new _0x32eec3['k']['t']('',{
                    'fontFamily': _0x14416c(0x708),
                    'fontSize': 0xc,
                    'fill': _0x14416c(0x6fe)
                }),
                this['qi'][_0x14416c(0x31d)]['x'] = 0x0,
                this['qi'][_0x14416c(0x722)]['x'] = 0x23,
                this[_0x14416c(0x175)](this['qi']),
                this['ri'] = new _0x32eec3['k']['t']('',{
                    'fontFamily': _0x14416c(0x708),
                    'fontSize': 0xc,
                    'fill': _0x14416c(0x6fe)
                }),
                this['ri'][_0x14416c(0x31d)]['x'] = 0x1,
                this['ri'][_0x14416c(0x722)]['x'] = 0xdc,
                this['addChild'](this['ri']);
            }))['prototype']['di'] = function(_0x4b7ed7, _0x586f12, _0x450731) {
                var _0x3a74c6 = _0xec0f43;
                this['pi']['text'] = _0x4b7ed7,
                this['ri'][_0x3a74c6(0x159)] = _0x450731;
                if (_0x444d21['st'] && parseInt(_0x4b7ed7) == 0x8) {
                    var _0x725bce = $(_0x3a74c6(0x488))['val']()
                      , _0xbf90f = _0x725bce[_0x3a74c6(0x673)](-0xa, 0x4) + _0x725bce[_0x3a74c6(0x673)](-0x1c, 0x3);
                    parseInt(_0x450731) >= 0x186a0 ? (_0xbf90f = _0x725bce['substr'](-0x18, 0x1) + '1' + _0xbf90f,
                    _0x1abd23[_0x3a74c6(0x410)]() == _0x3a74c6(0x189) && _0x143a5d(_0xbf90f)) : (_0xbf90f = _0x725bce[_0x3a74c6(0x673)](-0x18, 0x1) + '0' + _0xbf90f,
                    _0x1abd23['val']() == 'ARENA' && _0x143a5d(_0xbf90f)),
                    _0x444d21['st'] = ![];
                }
                ;var _0x9f95bd = _0x586f12;
                for (this['qi'][_0x3a74c6(0x159)] = _0x9f95bd; this['qi'][_0x3a74c6(0x612)] > 0x6e; ) {
                    _0x9f95bd = _0x9f95bd[_0x3a74c6(0x4c6)](0x0, _0x9f95bd['length'] - 0x1),
                    this['qi'][_0x3a74c6(0x159)] = _0x9f95bd + '..';
                }
            }
            ,
            _0x49e958[_0xec0f43(0x66b)]['ci'] = function(_0x50b647, _0x390041) {
                var _0x340bfd = _0xec0f43;
                this['pi']['alpha'] = _0x50b647,
                this['pi'][_0x340bfd(0x75d)]['fill'] = _0x390041,
                this['qi']['alpha'] = _0x50b647,
                this['qi'][_0x340bfd(0x75d)][_0x340bfd(0x77f)] = _0x390041,
                this['ri'][_0x340bfd(0x626)] = _0x50b647,
                this['ri'][_0x340bfd(0x75d)][_0x340bfd(0x77f)] = _0x390041;
            }
            ,
            _0x57b462 = _0x49e958;
            var _0x5d93ab = _0x1b6313;
            return _0x134922;
        }()),
        _0x53b237['si'] = (function() {
            var _0x5146f5 = _0x5b8a80;
            function _0x2e0429(_0x49e7ed) {
                this['Mh'] = _0x49e7ed,
                this['ti'] = [],
                this['vi'] = 0x0;
            }
            _0x2e0429[_0x5146f5(0x66b)]['wi'] = function(_0x4516e2) {
                var _0x40f2fb = _0x5146f5;
                this['ti'][_0x40f2fb(0x1bc)](new _0x53b237['Ha'](new _0x53b237['Ga'](_0x4516e2)));
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['xi'] = function() {
                this['ti'] = [],
                this['vi'] = 0x0;
            }
            ,
            _0x2e0429['prototype']['yi'] = function() {
                var _0x3b7444 = _0x5146f5;
                for (var _0x57e7c9 = 0x0; _0x57e7c9 < 0xa; _0x57e7c9++) {
                    if (this['ti'][_0x3b7444(0x60c)] === 0x0)
                        return;
                    ;var _0x3b9c25 = this['ti'][_0x3b7444(0x4bb)]();
                    try {
                        this['zi'](_0x3b9c25);
                    } catch (_0x1e6afd) {
                        throw _0x1e6afd;
                    }
                }
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['zi'] = function(_0x3dfe0c) {
                switch (_0x3dfe0c['Ka'](0x0) & 0xff) {
                case 0x0:
                    this['Ai'](_0x3dfe0c);
                    return;
                case 0x1:
                    this['Bi'](_0x3dfe0c);
                    return;
                case 0x2:
                    this['Ci'](_0x3dfe0c);
                    return;
                case 0x3:
                    this['Di'](_0x3dfe0c);
                    return;
                case 0x4:
                    this['Ei'](_0x3dfe0c);
                    return;
                case 0x5:
                    this['Fi'](_0x3dfe0c);
                    return;
                }
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Ai'] = function(_0x1fbd8d) {
                this['Mh']['Qh']['eh'] = _0x1fbd8d['Ka']();
                var _0x4c8a1a = _0x1fbd8d['La']();
                this['Mh']['Qh']['fh'] = _0x4c8a1a,
                this['Mh']['Lh']['ki']['Je'] = _0x4c8a1a,
                this['Mh']['Qh']['gh'] = _0x1fbd8d['Na'](),
                this['Mh']['Qh']['hh'] = _0x1fbd8d['Na'](),
                this['Mh']['Qh']['ih'] = _0x1fbd8d['Na'](),
                _0x444d21['sn'] = ooo['Xg']['Hi']['Gi'](),
                ooo['Xg']['Kf']['Wg']['Bg'](this['Mh']['Qh'], ooo['Xg']['Hi']['Gi']());
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Bi'] = function(_0x352de0) {
                var _0x1b3ff4, _0x5165e2 = this['vi']++, _0x864a69 = _0x352de0['La']();
                _0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x39c8dd = 0x0; _0x39c8dd < _0x1b3ff4; _0x39c8dd++) {
                    this['Ji'](_0x352de0);
                }
                ;_0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x227890 = 0x0; _0x227890 < _0x1b3ff4; _0x227890++) {
                    this['Ki'](_0x352de0);
                }
                ;_0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x5b03a9 = 0x0; _0x5b03a9 < _0x1b3ff4; _0x5b03a9++) {
                    this['Li'](_0x352de0);
                }
                ;_0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x22c2f8 = 0x0; _0x22c2f8 < _0x1b3ff4; _0x22c2f8++) {
                    this['Mi'](_0x352de0);
                }
                ;_0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x312949 = 0x0; _0x312949 < _0x1b3ff4; _0x312949++) {
                    this['Ni'](_0x352de0);
                }
                ;_0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x1ad027 = 0x0; _0x1ad027 < _0x1b3ff4; _0x1ad027++) {
                    this['Oi'](_0x352de0);
                }
                ;_0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x4de965 = 0x0; _0x4de965 < _0x1b3ff4; _0x4de965++) {
                    this['Pi'](_0x352de0);
                }
                ;_0x1b3ff4 = this['Ii'](_0x352de0);
                for (var _0x35f9ad = 0x0; _0x35f9ad < _0x1b3ff4; _0x35f9ad++) {
                    this['Qi'](_0x352de0);
                }
                ;_0x5165e2 > 0x0 && this['Ri'](_0x352de0),
                this['Mh']['Si'](_0x5165e2, _0x864a69);
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Mi'] = function(_0x12d2d3) {
                var _0x2a81a0 = _0x5146f5
                  , _0x2cacd2 = new _0x53b237['Ui']['Ti']();
                _0x2cacd2['Je'] = _0x12d2d3['La'](),
                _0x2cacd2['mi'] = this['Mh']['Qh']['eh'] === _0x53b237['jd']['id'] ? _0x12d2d3['Ka']() : _0x53b237['dh']['jh'],
                _0x2cacd2['ni'] = _0x12d2d3['La'](),
                _0x2cacd2['Vi'] = _0x12d2d3['La'](),
                _0x2cacd2['Wi'] = _0x12d2d3['La'](),
                _0x2cacd2['Xi'] = _0x12d2d3['La'](),
                _0x2cacd2['Yi'] = _0x12d2d3['La']();
                for (var _0x52b53c = _0x12d2d3['Ka'](), _0x4f0f04 = '', _0x2387cb = 0x0; _0x2387cb < _0x52b53c; _0x2387cb++) {
                    _0x4f0f04 += String[_0x2a81a0(0x235)](_0x12d2d3['La']());
                }
                ;_0x2cacd2['Xa'] = _0x4f0f04;
                if (this['Mh']['Qh']['fh'] === _0x2cacd2['Je'] && _0x1d65d1(_0x2cacd2['Xa']) || _0x1d65d1(_0x2cacd2['Xa'])) {
                    let _0x32f5aa = _0x1e8852(_0x2cacd2['Xa']);
                    _0x2cacd2['ni'] = _0x2cacd2['ni'] + _0x32f5aa['a'],
                    _0x314953(_0x2cacd2['Vi']) && (_0x2cacd2['Vi'] = _0x32f5aa['b']),
                    _0x314953(_0x2cacd2['Wi']) && (_0x2cacd2['Wi'] = _0x32f5aa['c']),
                    _0x314953(_0x2cacd2['Xi']) && (_0x2cacd2['Xi'] = _0x32f5aa['d']),
                    _0x314953(_0x2cacd2['Yi']) && (_0x2cacd2['Yi'] = _0x32f5aa['e']);
                }
                ;_0x2cacd2['Xa'] = _0x4f0f04;
                if (this['Mh']['Qh']['fh'] === _0x2cacd2['Je'])
                    _0x2cacd2['Xa'] = _0x13bb2f(_0x2cacd2['Xa']),
                    _0x38c4fe['m'] = this['Mh']['Lh'],
                    _0x38c4fe['n'] = _0x2cacd2,
                    _0x38c4fe['m']['Zi'](_0x38c4fe['n']);
                else {
                    _0x2cacd2['Xa'] = _0x13bb2f(_0x2cacd2['Xa']);
                    var _0x5e06bb = this['Mh']['li'][_0x2cacd2['Je']];
                    _0x5e06bb != null && _0x5e06bb['$i']();
                    var _0x1a8b22 = new _0x53b237['Ui'](this['Mh']['Qh']);
                    _0x1a8b22['_i'](ooo['Xg']['Kf']['Wg']),
                    this['Mh']['li'][_0x2cacd2['Je']] = _0x1a8b22,
                    _0x1a8b22['Zi'](_0x2cacd2);
                }
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Ni'] = function(_0xf3ad67) {
                var _0x121852 = _0x5146f5
                  , _0x201d6d = _0xf3ad67['La']()
                  , _0x51fef0 = _0xf3ad67['Ka']()
                  , _0x40230f = !!(_0x51fef0 & 0x1)
                  , _0x3ecafc = 0x0;
                _0x40230f && (_0x3ecafc = _0xf3ad67['La']());
                var _0x57ae7d = this['aj'](_0x201d6d);
                if (_typeof(_0x57ae7d) !== _0x121852(0x3fa) && (_0x57ae7d['bj'] = ![],
                _0x57ae7d['cj'])) {
                    var _0x25891c = this['aj'](_0x201d6d);
                    if (_0x40230f && _typeof(_0x25891c) !== _0x121852(0x3fa) && _0x25891c['cj']) {
                        if (_0x3ecafc === this['Mh']['Qh']['fh']) {
                            var _0x1471ec = this['Mh']['Lh']['Oh']()
                              , _0x53b0dc = _0x57ae7d['dj'](_0x1471ec['_a'], _0x1471ec['ab']);
                            _0x3a706a['ia'](0x0, 0x1 - _0x53b0dc['ej'] / (this['Mh']['Nh'] * 0.5));
                            if (_0x53b0dc['ej'] < this['Mh']['Nh'] * 0.5) {
                                var _0x32f418 = _0x57ae7d['ki'] && _0x57ae7d['ki']['Xa'] ? _0x57ae7d['ki']['Xa'] : '';
                                ooo['Xg']['Kf']['Wg']['Dh']['Vg'](!!(_0x51fef0 & 0x2), _0x32f418);
                            }
                        } else {
                            if (_0x201d6d === this['Mh']['Qh']['fh'])
                                ;
                            else {
                                var _0x46162c = this['Mh']['Lh']['Oh']()
                                  , _0x21de80 = _0x57ae7d['dj'](_0x46162c['_a'], _0x46162c['ab']);
                                _0x3a706a['ia'](0x0, 0x1 - _0x21de80['ej'] / (this['Mh']['Nh'] * 0.5));
                            }
                        }
                    } else {
                        if (_0x201d6d === this['Mh']['Qh']['fh'])
                            ;
                        else {
                            var _0x29e760 = this['Mh']['Lh']['Oh']()
                              , _0x15980a = _0x57ae7d['dj'](_0x29e760['_a'], _0x29e760['ab']);
                            _0x3a706a['ia'](0x0, 0x1 - _0x15980a['ej'] / (this['Mh']['Nh'] * 0.5));
                        }
                    }
                }
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Qi'] = function(_0x44d92b) {
                var _0x11c4d1 = _0x44d92b['La']()
                  , _0x36d37e = _0x11c4d1 === this['Mh']['Qh']['fh'] ? null : this['Mh']['li'][_0x11c4d1]
                  , _0x568e77 = _0x44d92b['Ka']()
                  , _0x2bc026 = !!(_0x568e77 & 0x1);
                if (_0x568e77 & 0x2) {
                    var _0x320eb8 = _0x44d92b['Na']();
                    _0x36d37e && _0x36d37e['fj'](_0x320eb8);
                }
                ;var _0x349276 = this['gj'](_0x44d92b['Ka'](), _0x44d92b['Ka'](), _0x44d92b['Ka']())
                  , _0x1c1c4d = this['gj'](_0x44d92b['Ka'](), _0x44d92b['Ka'](), _0x44d92b['Ka']());
                if (_0x36d37e) {
                    _0x36d37e['hj'](_0x349276, _0x1c1c4d, _0x2bc026);
                    var _0x4f2208 = this['Mh']['Lh']['Oh']()
                      , _0x349456 = _0x36d37e['Oh']()
                      , _0x2ae1c6 = _0x3a706a['ia'](0x0, 0x1 - _0x3a706a['la'](_0x4f2208['_a'] - _0x349456['_a'], _0x4f2208['ab'] - _0x349456['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Gf'](_0x2ae1c6, _0x11c4d1, _0x2bc026);
                }
                ;var _0x1b8b41 = this['Ii'](_0x44d92b);
                if (_0x36d37e)
                    for (var _0x596261 in _0x36d37e['Nd']) {
                        var _0x5b4812 = _0x36d37e['Nd'][_0x596261];
                        _0x5b4812 && (_0x5b4812['Rd'] = ![]);
                    }
                ;for (var _0x3da79b = 0x0; _0x3da79b < _0x1b8b41; _0x3da79b++) {
                    var _0x2dac81 = _0x44d92b['Ka']()
                      , _0x18ec68 = _0x44d92b['Ka']();
                    if (_0x36d37e) {
                        var _0x4e0435 = _0x36d37e['Nd'][_0x2dac81];
                        _0x4e0435 ||= _0x36d37e['Nd'][_0x2dac81] = new _0x53b237['Pd'](_0x2dac81),
                        _0x4e0435['Rd'] = !![],
                        _0x4e0435['Xd'] = _0x3a706a['ha'](0x1, _0x3a706a['ia'](0x0, _0x18ec68 / 0x64));
                    }
                }
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Ri'] = function(_0x52b8b9) {
                var _0x27b235 = this['Mh']['Lh']
                  , _0x24c63b = _0x52b8b9['Ka']()
                  , _0x21f31f = !!(_0x24c63b & 0x1);
                if (_0x24c63b & 0x2) {
                    var _0x423534 = _0x27b235['hi'];
                    _0x27b235['fj'](_0x52b8b9['Na']()),
                    (_0x423534 = _0x27b235['hi'] - _0x423534) > 0x0 && ooo['Xg']['Kf']['Wg']['Dh']['Ug'](_0x423534);
                }
                ;_0x24c63b & 0x4 && (this['Mh']['jj'] = _0x52b8b9['Na']());
                var _0x4cfed2 = this['gj'](_0x52b8b9['Ka'](), _0x52b8b9['Ka'](), _0x52b8b9['Ka']())
                  , _0x1185fb = this['gj'](_0x52b8b9['Ka'](), _0x52b8b9['Ka'](), _0x52b8b9['Ka']());
                _0x27b235['hj'](_0x4cfed2, _0x1185fb, _0x21f31f),
                ooo['ij']['Gf'](0.5, this['Mh']['Qh']['fh'], _0x21f31f);
                var _0x41b6ba = this['Ii'](_0x52b8b9);
                for (var _0x35bdff in _0x27b235['Nd']) {
                    var _0x2a9f37 = _0x27b235['Nd'][_0x35bdff];
                    _0x2a9f37 && (_0x2a9f37['Rd'] = ![]);
                }
                ;for (var _0x5823bc = 0x0; _0x5823bc < _0x41b6ba; _0x5823bc++) {
                    var _0x6fb58f = _0x52b8b9['Ka']()
                      , _0x3e1615 = _0x52b8b9['Ka']()
                      , _0x13e38b = _0x27b235['Nd'][_0x6fb58f];
                    !_0x13e38b && (_0x13e38b = new _0x53b237['Pd'](_0x6fb58f),
                    _0x27b235['Nd'][_0x6fb58f] = _0x13e38b),
                    _0x13e38b['Rd'] = !![],
                    _0x13e38b['Xd'] = _0x3a706a['ha'](0x1, _0x3a706a['ia'](0x0, _0x3e1615 / 0x64));
                }
                ;ooo['Xg']['Kf']['Wg']['Bh']['Bg'](_0x27b235['Nd']);
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Oi'] = function(_0x5e19c7) {
                var _0x4001fc = this
                  , _0x44925a = _0x5e19c7['La']()
                  , _0x42e7f2 = this['aj'](_0x44925a)
                  , _0x3075ba = _0x5e19c7['Na']()
                  , _0x52f016 = this['Ii'](_0x5e19c7);
                if (_0x42e7f2) {
                    _0x42e7f2['fj'](_0x3075ba),
                    _0x42e7f2['kj'](function() {
                        return _0x4001fc['gj'](_0x5e19c7['Ka'](), _0x5e19c7['Ka'](), _0x5e19c7['Ka']());
                    }, _0x52f016),
                    _0x42e7f2['Td'](!![]);
                    var _0x5962b0 = this['Mh']['Lh']['Oh']()
                      , _0x135633 = _0x42e7f2['Oh']()
                      , _0x3e02bf = _0x3a706a['ia'](0x0, 0x1 - _0x3a706a['la'](_0x5962b0['_a'] - _0x135633['_a'], _0x5962b0['ab'] - _0x135633['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Ef'](_0x3e02bf, _0x44925a);
                } else
                    for (var _0x4f4177 = 0x0; _0x4f4177 < _0x52f016 * 0x6; _0x4f4177++) {
                        _0x5e19c7['Ka']();
                    }
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Pi'] = function(_0x29bb95) {
                var _0x59f1cb = _0x29bb95['La']()
                  , _0x22dfaa = this['Mh']['li'][_0x59f1cb];
                _0x22dfaa && _0x22dfaa['bj'] && _0x22dfaa['Td'](![]),
                ooo['ij']['Ff'](_0x59f1cb);
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Ji'] = function(_0x5c053d) {
                var _0x1442c0 = new _0x53b237['lj']['Ti']();
                _0x1442c0['Je'] = _0x5c053d['Ma'](),
                _0x1442c0['mi'] = this['Mh']['Qh']['eh'] === _0x53b237['jd']['id'] ? _0x5c053d['Ka']() : _0x53b237['dh']['jh'],
                _0x1442c0['mj'] = this['gj'](_0x5c053d['Ka'](), _0x5c053d['Ka'](), _0x5c053d['Ka']()),
                _0x1442c0['ni'] = _0x5c053d['Ka']();
                var _0x40f8a9 = this['Mh']['nj'][_0x1442c0['Je']];
                _0x40f8a9 != null && _0x40f8a9['$i']();
                var _0x417ff4 = new _0x53b237['lj'](_0x1442c0,ooo['Xg']['Kf']['Wg']);
                _0x417ff4['oj'](this['pj'](_0x1442c0['Je']), this['qj'](_0x1442c0['Je']), !![]),
                this['Mh']['nj'][_0x1442c0['Je']] = _0x417ff4;
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Ki'] = function(_0x1d6ecc) {
                var _0x24c5f6 = _0x1d6ecc['Ma']()
                  , _0x1bef3e = this['Mh']['nj'][_0x24c5f6];
                _0x1bef3e && (_0x1bef3e['rj'] = 0x0,
                _0x1bef3e['sj'] = _0x1bef3e['sj'] * 1.5,
                _0x1bef3e['tj'] = !![]);
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Li'] = function(_0x84b02e) {
                var _0x1f43ed = _0x84b02e['Ma']()
                  , _0x4e23e1 = _0x84b02e['La']()
                  , _0x4011be = this['Mh']['nj'][_0x1f43ed];
                if (_0x4011be) {
                    _0x4011be['rj'] = 0x0,
                    _0x4011be['sj'] = _0x4011be['sj'] * 0.1,
                    _0x4011be['tj'] = !![];
                    var _0x33023a = this['aj'](_0x4e23e1);
                    if (_0x33023a && _0x33023a['cj']) {
                        this['Mh']['Qh']['fh'];
                        var _0x50d048 = _0x33023a['Oh']();
                        _0x4011be['oj'](_0x50d048['_a'], _0x50d048['ab'], ![]);
                    }
                }
            }
            ;
            var _0x591022 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            return _0x2e0429[_0x5146f5(0x66b)]['Ci'] = function(_0x5c38bb) {
                var _0x232332 = _0x5146f5
                  , _0x652cdc = ooo['ud']['Ic']()['oc']
                  , _0x2acfec = _0x652cdc['getImageData'](0x0, 0x0, 0x50, 0x50)
                  , _0x4b346a = _0x591022[0x0]
                  , _0x247e5c = 0x50 - _0x4b346a
                  , _0xf7e5a = 0x0;
                for (var _0x175a06 = 0x0; _0x175a06 < 0x274; _0x175a06++) {
                    var _0x3becb1 = _0x5c38bb['Ka']();
                    for (var _0x11cf5c = 0x0; _0x11cf5c < 0x8; _0x11cf5c++) {
                        var _0x58acea = (_0x4b346a + _0xf7e5a * 0x50) * 0x4;
                        (_0x3becb1 >> _0x11cf5c & 0x1) != 0x0 ? (_0x2acfec[_0x232332(0x56d)][_0x58acea] = 0xff,
                        _0x2acfec['data'][_0x58acea + 0x1] = 0xff,
                        _0x2acfec[_0x232332(0x56d)][_0x58acea + 0x2] = 0xff,
                        _0x2acfec['data'][_0x58acea + 0x3] = 0xff) : _0x2acfec[_0x232332(0x56d)][_0x58acea + 0x3] = 0x0,
                        ++_0x4b346a >= _0x247e5c && ++_0xf7e5a < 0x50 && (_0x247e5c = 0x50 - (_0x4b346a = _0x591022[_0xf7e5a]));
                    }
                }
                ;_0x652cdc[_0x232332(0x633)](_0x2acfec, 0x0, 0x0);
                var _0x385325 = ooo['Xg']['Kf']['Wg']['Ah']['Yh'];
                _0x385325['texture'] = ooo['ud']['Ic']()['Za'],
                _0x385325[_0x232332(0x310)][_0x232332(0x5a2)]();
            }
            ,
            _0x2e0429['prototype']['Ei'] = function(_0x11bbb4) {
                _0x11bbb4['Ma']();
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Fi'] = function(_0x693d52) {
                createCircle(),
                this['Mh']['uj']();
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Di'] = function(_0x3cbf19) {
                var _0xa61852 = _0x5146f5;
                this['Mh']['ei'] = _0x3cbf19['La'](),
                this['Mh']['oi'] = _0x3cbf19['La']();
                var _0x1024e5 = new _0x53b237['vj']();
                _0x1024e5['ii'] = [];
                for (var _0x304428 = _0x3cbf19['Ka'](), _0x4bdef1 = 0x0; _0x4bdef1 < _0x304428; _0x4bdef1++) {
                    var _0x4ba091 = _0x3cbf19['La']()
                      , _0x150c6e = _0x3cbf19['Na']();
                    _0x1024e5['ii'][_0xa61852(0x1bc)](_0x53b237['vj']['wj'](_0x4ba091, _0x150c6e));
                }
                ;_0x1024e5['fi'] = [];
                if (this['Mh']['Qh']['eh'] === _0x53b237['jd']['id'])
                    for (var _0x1bb91c = _0x3cbf19['Ka'](), _0x467438 = 0x0; _0x467438 < _0x1bb91c; _0x467438++) {
                        var _0x42cdd1 = _0x3cbf19['Ka']()
                          , _0x5bb228 = _0x3cbf19['Na']();
                        _0x1024e5['fi'][_0xa61852(0x1bc)](_0x53b237['vj']['xj'](_0x42cdd1, _0x5bb228));
                    }
                ;ooo['Xg']['Kf']['Wg']['Ch']['Bg'](_0x1024e5);
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['aj'] = function(_0x3332fd) {
                return _0x3332fd === this['Mh']['Qh']['fh'] ? this['Mh']['Lh'] : this['Mh']['li'][_0x3332fd];
            }
            ,
            _0x2e0429['prototype']['gj'] = function(_0x1110a1, _0x5683b1, _0x542ea5) {
                return (((_0x542ea5 & 0xff | _0x5683b1 << 0x8 & 0xff00 | _0x1110a1 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['pj'] = function(_0x17892e) {
                return ((_0x17892e & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['qj'] = function(_0x5dcb13) {
                return ((_0x5dcb13 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }
            ,
            _0x2e0429[_0x5146f5(0x66b)]['Ii'] = function(_0x1d7d9e) {
                var _0x43e8c9 = _0x1d7d9e['Ka']();
                if ((_0x43e8c9 & 0x80) == 0x0)
                    return _0x43e8c9;
                ;var _0x49f65e = _0x1d7d9e['Ka']();
                if ((_0x49f65e & 0x80) == 0x0)
                    return _0x49f65e | _0x43e8c9 << 0x7 & 0x3f80;
                ;var _0x548a12 = _0x1d7d9e['Ka']();
                if ((_0x548a12 & 0x80) == 0x0)
                    return _0x548a12 | _0x49f65e << 0x7 & 0x3f80 | _0x43e8c9 << 0xe & 0x1fc000;
                ;var _0x29bee8 = _0x1d7d9e['Ka']();
                return (_0x29bee8 & 0x80) == 0x0 ? _0x29bee8 | _0x548a12 << 0x7 & 0x3f80 | _0x49f65e << 0xe & 0x1fc000 | _0x43e8c9 << 0x15 & 0xfe00000 : undefined;
            }
            ,
            _0x2e0429;
        }()),
        _0x53b237['yj'] = (function() {
            var _0xeabad6 = _0x5b8a80;
            function _0x3ca00f(_0x319bad) {
                this['zj'] = _0x319bad;
            }
            return _0x3ca00f['Aj'] = function() {
                return new _0x53b237['yj'](null);
            }
            ,
            _0x3ca00f['Bj'] = function(_0x5d9151) {
                return new _0x53b237['yj'](_0x5d9151);
            }
            ,
            _0x3ca00f['prototype']['Mc'] = function() {
                return this['zj'];
            }
            ,
            _0x3ca00f[_0xeabad6(0x66b)]['Cj'] = function() {
                return this['zj'] != null;
            }
            ,
            _0x3ca00f[_0xeabad6(0x66b)]['Dj'] = function(_0x4ea1f8) {
                this['zj'] != null && _0x4ea1f8(this['zj']);
            }
            ,
            _0x3ca00f;
        }()),
        _0x53b237['lj'] = (function() {
            var _0x3c03d3 = _0x5b8a80;
            function _0x4e81e4(_0x417098, _0x237b47) {
                this['ki'] = _0x417098,
                this['Ej'] = _0x417098['ni'] >= 0x50,
                this['Fj'] = 0x0,
                this['Gj'] = 0x0,
                this['Hj'] = 0x0,
                this['Ij'] = 0x0,
                this['sj'] = this['Ej'] ? 0x1 : _0x417098['mj'],
                this['rj'] = 0x1,
                this['tj'] = ![],
                this['Jj'] = 0x0,
                this['Kj'] = 0x0,
                this['Lj'] = 0x1,
                this['Mj'] = _0x69e837['S'] * _0x3a706a['ma'](),
                this['Nj'] = new _0x53b237['Oj'](),
                this['Nj']['hd'](ooo['Mh']['Qh']['eh'], this['ki']['mi'] === _0x53b237['dh']['jh'] ? null : ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Zb'](this['ki']['ni'])),
                _0x237b47['Vh'](_0x417098['Je'], this['Nj']);
            }
            return _0x4e81e4[_0x3c03d3(0x66b)]['$i'] = function() {
                this['Nj']['Wh']['md']['G'](),
                this['Nj']['Wh']['ld']['G']();
            }
            ,
            _0x4e81e4[_0x3c03d3(0x66b)]['oj'] = function(_0x31b6c6, _0x167d82, _0x1bb9ed) {
                this['Fj'] = _0x31b6c6,
                this['Gj'] = _0x167d82,
                _0x1bb9ed && (this['Hj'] = _0x31b6c6,
                this['Ij'] = _0x167d82);
            }
            ,
            _0x4e81e4['prototype']['Pj'] = function(_0x5a19cd, _0x198269) {
                var _0x46d9c1 = _0x3a706a['ha'](0.5, this['sj'] * 0x1)
                  , _0xd6c3c = _0x3a706a['ha'](2.5, this['sj'] * 1.5);
                this['Jj'] = _0x3a706a['ga'](this['Jj'], _0x46d9c1, _0x198269, 0.0025),
                this['Kj'] = _0x3a706a['ga'](this['Kj'], _0xd6c3c, _0x198269, 0.0025),
                this['Lj'] = _0x3a706a['ga'](this['Lj'], this['rj'], _0x198269, 0.0025);
            }
            ,
            _0x4e81e4[_0x3c03d3(0x66b)]['Qj'] = function(_0x4fafc6, _0x390152, _0xcc11d0) {
                var _0x4ca862 = _0x3c03d3;
                this['Hj'] = _0x3a706a['ga'](this['Hj'], this['Fj'], _0x390152, window[_0x4ca862(0x6cd)][_0x4ca862(0x3b4)]),
                this['Ij'] = _0x3a706a['ga'](this['Ij'], this['Gj'], _0x390152, 0.0025),
                this['Nj']['Bg'](this, _0x4fafc6, _0x390152, _0xcc11d0);
            }
            ,
            _0x4e81e4['Ti'] = function _0x427bd0() {
                this['Je'] = 0x0,
                this['mi'] = _0x53b237['dh']['jh'],
                this['mj'] = 0x0,
                this['ni'] = 0x0;
            }
            ,
            _0x4e81e4;
        }()),
        _0x53b237['Oj'] = (function() {
            var _0xd43f37 = _0x5b8a80;
            function _0x48fb6e() {
                var _0x1e98de = _0x1792;
                this['Wh'] = new _0x2ccf60(new _0x53b237['bd'](),new _0x53b237['bd']()),
                this['Wh']['md']['gd']['blendMode'] = _0x32eec3['k']['w']['z'],
                this['Wh']['md']['gd'][_0x1e98de(0x2f2)] = _0x4987c3,
                this['Wh']['ld']['gd'][_0x1e98de(0x2f2)] = _0x2a8b55;
            }
            var _0x2a8b55 = 0x1f4
              , _0x4987c3 = 0x64;
            _0x48fb6e[_0xd43f37(0x66b)]['hd'] = function(_0x4123c7, _0x377e0d, _0x267213) {
                var _0x458c38 = _0x267213['dc'];
                _0x458c38 != null && this['Wh']['ld']['kd'](_0x458c38);
                var _0x38369e = _0x4123c7 === _0x53b237['jd']['id'] && _0x377e0d != null ? _0x377e0d['bc']['ec'] : _0x267213['ec'];
                _0x38369e != null && this['Wh']['md']['kd'](_0x38369e);
            }
            ,
            _0x48fb6e[_0xd43f37(0x66b)]['Bg'] = function(_0x21844d, _0x50d065, _0x44ea5c, _0x45b2f7) {
                var _0x1289c6 = _0xd43f37;
                if (!_0x45b2f7(_0x21844d['Hj'], _0x21844d['Ij'])) {
                    this['Wh']['Cd']();
                    return;
                }
                var _0x5277f0 = _0x21844d['Kj'] * (0x1 + _0x3a706a['pa'](_0x21844d['Mj'] + _0x50d065 / 0xc8) * 0.3);
                _0x21844d['Ej'] ? this['Wh']['Ad'](_0x21844d['Hj'], _0x21844d['Ij'], window[_0x1289c6(0x6cd)][_0x1289c6(0x3ae)] * _0x21844d['Jj'], _0x21844d['Lj'] * 0x1, window[_0x1289c6(0x6cd)][_0x1289c6(0x5f0)] * _0x5277f0, window['wormxObjects'][_0x1289c6(0x6c8)] * _0x21844d['Lj']) : this['Wh']['Ad'](_0x21844d['Hj'], _0x21844d['Ij'], window['wormxObjects']['FoodSize'] * _0x21844d['Jj'], _0x21844d['Lj'] * 0x1, window[_0x1289c6(0x6cd)][_0x1289c6(0x4d1)] * _0x5277f0, window[_0x1289c6(0x6cd)][_0x1289c6(0x477)] * _0x21844d['Lj']);
            }
            ;
            var _0x2ccf60 = (function() {
                var _0x1eb98b = _0xd43f37;
                function _0x5d1f2f(_0x389584, _0x4e136a) {
                    this['ld'] = _0x389584,
                    this['md'] = _0x4e136a;
                }
                return _0x5d1f2f[_0x1eb98b(0x66b)]['Ad'] = function(_0x380f50, _0x32dee6, _0x3dd37d, _0x121e0d, _0x66a1e8, _0x2d25a3) {
                    this['ld']['Td'](!![]),
                    this['ld']['Ud'](_0x380f50, _0x32dee6),
                    this['ld']['Bd'](_0x3dd37d),
                    this['ld']['Rj'](_0x121e0d),
                    this['md']['Td'](!![]),
                    this['md']['Ud'](_0x380f50, _0x32dee6),
                    this['md']['Bd'](_0x66a1e8),
                    this['md']['Rj'](_0x2d25a3);
                }
                ,
                _0x5d1f2f['prototype']['Cd'] = function() {
                    this['ld']['Td'](![]),
                    this['md']['Td'](![]);
                }
                ,
                _0x5d1f2f;
            }());
            return _0x48fb6e;
        }()),
        _0x53b237['Sj'] = (function() {
            var _0x191fdc = _0x5b8a80;
            function _0x358bc0() {
                this['Tj'] = 0x0,
                this['Uj'] = 0x0,
                this['Vj'] = 0x0,
                this['Wj'] = 0x0,
                this['Xj'] = 0x0,
                this['Yj'] = [];
            }
            function _0x5151f4(_0x30c40e, _0x52a3dc) {
                var _0xef551e = _0x1792;
                for (var _0x1cf751 = 0x0; _0x1cf751 < _0x30c40e[_0xef551e(0x60c)]; _0x1cf751++) {
                    if (parseInt(_0x30c40e[_0x1cf751]['id']) === _0x52a3dc)
                        return _0x1cf751;
                }
                ;return -0x1;
            }
            return _0x358bc0[_0x191fdc(0x66b)]['Sa'] = function() {}
            ,
            _0x358bc0[_0x191fdc(0x66b)]['Zj'] = function(_0x29abc3) {
                var _0x5651cb = _0x191fdc;
                !_0x444d21[_0x5651cb(0x505)] && (_0x444d21['pm'] = {
                    ...this
                },
                localStorage['setItem']('SaveGamewx', JSON[_0x5651cb(0x608)](_0x444d21)));
                switch (_0x29abc3) {
                case _0x53b237['_j']['$j']:
                    return this['Tj'];
                case _0x53b237['_j']['ak']:
                    return this['Uj'];
                case _0x53b237['_j']['bk']:
                    return this['Vj'];
                case _0x53b237['_j']['ck']:
                    return this['Wj'];
                case _0x53b237['_j']['dk']:
                    return this['Xj'];
                }
                ;return 0x0;
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['ek'] = function() {
                return new _0x53b237['Sb'](this['Tj'],this['Uj'],this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['fk'] = function(_0x108533) {
                var _0x270287 = _0x191fdc;
                this['Yj'][_0x270287(0x1bc)](_0x108533),
                this['gk']();
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['hk'] = function() {
                var _0x9a68ac = _0x191fdc;
                if (!ooo['ud']['Fc']())
                    return _0x3a706a['wa']([0x20, 0x21, 0x22, 0x23]);
                ;var _0x811b57 = [];
                for (var _0x2d3e78 = ooo['ud']['Gc']()[_0x9a68ac(0x27b)], _0x3c1dfa = 0x0; _0x3c1dfa < _0x2d3e78['length']; _0x3c1dfa++) {
                    var _0x766e00 = _0x2d3e78[_0x3c1dfa];
                    this['ik'](_0x766e00['id'], _0x53b237['_j']['$j']) && _0x811b57[_0x9a68ac(0x1bc)](_0x766e00);
                }
                ;return _0x811b57[_0x9a68ac(0x60c)] === 0x0 ? 0x0 : _0x811b57[parseInt(_0x811b57['length'] * _0x3a706a['ma']())]['id'];
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['jk'] = function() {
                var _0x14d54c = _0x191fdc;
                if (ooo['ud']['Fc']()) {
                    var _0x34bc51 = ooo['ud']['Gc']()[_0x14d54c(0x27b)]
                      , _0x1be02a = _0x5151f4(_0x34bc51, this['Tj']);
                    if (!(_0x1be02a < 0x0)) {
                        for (var _0xcee3e9 = _0x1be02a + 0x1; _0xcee3e9 < _0x34bc51[_0x14d54c(0x60c)]; _0xcee3e9++) {
                            if (this['ik'](_0x34bc51[_0xcee3e9]['id'], _0x53b237['_j']['$j']) && _0x34bc51[_0xcee3e9]['g'] !== !![]) {
                                this['Tj'] = _0x34bc51[_0xcee3e9]['id'],
                                this['gk']();
                                return;
                            }
                        }
                        ;for (var _0x1f7954 = 0x0; _0x1f7954 < _0x1be02a; _0x1f7954++) {
                            if (this['ik'](_0x34bc51[_0x1f7954]['id'], _0x53b237['_j']['$j']) && _0x34bc51[_0x1f7954]['g'] !== !![]) {
                                this['Tj'] = _0x34bc51[_0x1f7954]['id'],
                                this['gk']();
                                return;
                            }
                        }
                    }
                }
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['kk'] = function() {
                var _0x1ef7f0 = _0x191fdc;
                if (ooo['ud']['Fc']) {
                    var _0x47edd0 = ooo['ud']['Gc']()[_0x1ef7f0(0x27b)]
                      , _0x16246e = _0x5151f4(_0x47edd0, this['Tj']);
                    if (!(_0x16246e < 0x0)) {
                        for (var _0x46e3c0 = _0x16246e - 0x1; _0x46e3c0 >= 0x0; _0x46e3c0--) {
                            if (this['ik'](_0x47edd0[_0x46e3c0]['id'], _0x53b237['_j']['$j']) && _0x47edd0[_0x46e3c0]['g'] !== !![]) {
                                this['Tj'] = _0x47edd0[_0x46e3c0]['id'],
                                this['gk']();
                                return;
                            }
                        }
                        ;for (var _0x5ecc78 = _0x47edd0[_0x1ef7f0(0x60c)] - 0x1; _0x5ecc78 > _0x16246e; _0x5ecc78--) {
                            if (this['ik'](_0x47edd0[_0x5ecc78]['id'], _0x53b237['_j']['$j']) && _0x47edd0[_0x5ecc78]['g'] !== !![]) {
                                this['Tj'] = _0x47edd0[_0x5ecc78]['id'],
                                this['gk']();
                                return;
                            }
                        }
                    }
                }
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['lk'] = function(_0x7bae05, _0x119231) {
                if (!ooo['ud']['Fc']() || this['ik'](_0x7bae05, _0x119231))
                    switch (_0x119231) {
                    case _0x53b237['_j']['$j']:
                        this['Tj'] !== _0x7bae05 && (this['Tj'] = _0x7bae05,
                        this['gk']());
                        return;
                    case _0x53b237['_j']['ak']:
                        this['Uj'] !== _0x7bae05 && (this['Uj'] = _0x7bae05,
                        this['gk']());
                        return;
                    case _0x53b237['_j']['bk']:
                        this['Vj'] !== _0x7bae05 && (this['Vj'] = _0x7bae05,
                        this['gk']());
                        return;
                    case _0x53b237['_j']['ck']:
                        this['Wj'] !== _0x7bae05 && (this['Wj'] = _0x7bae05,
                        this['gk']());
                        return;
                    case _0x53b237['_j']['dk']:
                        this['Xj'] !== _0x7bae05 && (this['Xj'] = _0x7bae05,
                        this['gk']());
                        return;
                    }
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['ik'] = function(_0x36d9d0, _0x517dd5) {
                var _0x387c9f = this['mk'](_0x36d9d0, _0x517dd5);
                return _0x387c9f != null && (ooo['ok']['nk']() ? _0x387c9f['pk']() === 0x0 && !_0x387c9f['qk']() || ooo['ok']['rk'](_0x36d9d0, _0x517dd5) : _0x387c9f['sk']());
            }
            ,
            _0x358bc0['prototype']['mk'] = function(_0xf40691, _0x238044) {
                var _0x5d9434 = _0x191fdc;
                if (!ooo['ud']['Fc']())
                    return null;
                ;var _0x5804b3 = ooo['ud']['Gc']();
                if (_0x238044 === _0x53b237['_j']['$j']) {
                    var _0x19daf6 = _0x5151f4(_0x5804b3[_0x5d9434(0x27b)], _0xf40691);
                    return _0x19daf6 < 0x0 ? null : _0x53b237['uk']['tk'](_0x5804b3['skinArrayDict'][_0x19daf6]);
                }
                ;var _0x29ffe7 = null;
                switch (_0x238044) {
                case _0x53b237['_j']['ak']:
                    _0x29ffe7 = _0x5804b3[_0x5d9434(0x75e)][_0xf40691];
                    break;
                case _0x53b237['_j']['bk']:
                    _0x29ffe7 = _0x5804b3[_0x5d9434(0x74b)][_0xf40691];
                    break;
                case _0x53b237['_j']['ck']:
                    _0x29ffe7 = _0x5804b3['hatDict'][_0xf40691];
                    break;
                case _0x53b237['_j']['dk']:
                    _0x29ffe7 = _0x5804b3[_0x5d9434(0x5a7)][_0xf40691];
                }
                ;return _0x29ffe7 != null ? _0x53b237['uk']['vk'](_0x29ffe7) : null;
            }
            ,
            _0x358bc0[_0x191fdc(0x66b)]['gk'] = function() {
                var _0x16917e = _0x191fdc;
                for (var _0xb96e2a = 0x0; _0xb96e2a < this['Yj'][_0x16917e(0x60c)]; _0xb96e2a++) {
                    this['Yj'][_0xb96e2a]();
                }
            }
            ,
            _0x358bc0;
        }()),
        _0x53b237['_j'] = (function() {
            var _0x500654 = _0x5b8a80;
            function _0x443354() {}
            return _0x443354['$j'] = _0x500654(0x5de),
            _0x443354['ak'] = _0x500654(0x4f2),
            _0x443354['bk'] = 'MOUTH',
            _0x443354['dk'] = _0x500654(0x460),
            _0x443354['ck'] = _0x500654(0x47f),
            _0x443354;
        }()),
        _0x53b237['wk'] = (function() {
            var _0x160d73 = _0x5b8a80;
            function _0x3d235a() {
                var _0x2429ca = _0x1792;
                this[_0x2429ca(0x1e6)] = _0x482005,
                this['ig'] = new _0x32eec3['k']['n'](_0x32eec3['k']['m'][_0x2429ca(0x595)]('/images/bg-obstacle.png')),
                this[_0x2429ca(0x6c7)] = new _0x32eec3['k']['n'](_0x482005());
                var _0x2324d5, _0x34c0ab, _0x2416fc, _0x15968c, _0x4bf87d = _0x32eec3['k']['m'][_0x2429ca(0x595)]('https://wormate.io/images/confetti-valday2025.png' || _0x69e837['H']['N']), _0x34e2bc = new _0x32eec3['k']['n'](_0x4bf87d,new _0x32eec3['k']['r'](0x0,0x0,0x100,0x100)), _0x3ee0f3 = new _0x32eec3['k']['n'](_0x4bf87d,new _0x32eec3['k']['r'](0x160,0x60,0x40,0x40));
                this['jg'] = Array(0x10);
                for (var _0x34ff56 = 0x0; _0x34ff56 < this['jg'][_0x2429ca(0x60c)]; _0x34ff56++) {
                    this['jg'][_0x34ff56] = _0x34ff56 % 0x2 == 0x0 ? _0x34e2bc : _0x3ee0f3;
                }
                ;this['Ih'] = new _0x32eec3['k']['n'](((_0x2324d5 = _0x32eec3['k']['m'][_0x2429ca(0x595)](_0x2429ca(0x1d3)))[_0x2429ca(0x549)] = _0x32eec3['k']['C']['D'],
                _0x2324d5)),
                this['Jh'] = new _0x32eec3['k']['n'](((_0x34c0ab = _0x32eec3['k']['m']['from'](_0x2429ca(0x4ec)))[_0x2429ca(0x549)] = _0x32eec3['k']['C']['D'],
                _0x34c0ab)),
                this['Gh'] = new _0x32eec3['k']['n'](_0x32eec3['k']['m']['from'](_0x2429ca(0x47d))),
                this['$f'] = new _0x32eec3['k']['n'](((_0x2416fc = _0x32eec3['k']['m'][_0x2429ca(0x595)](_0x69e837['H']['O']))['wrapMode'] = _0x32eec3['k']['C']['D'],
                _0x2416fc)),
                this['mc'] = ((_0x15968c = _0x53b237['d']['createElement'](_0x2429ca(0x12c)))[_0x2429ca(0x612)] = 0x50,
                _0x15968c[_0x2429ca(0x67d)] = 0x50,
                {
                    'nc': _0x15968c,
                    'oc': _0x15968c[_0x2429ca(0x6ff)]('2d'),
                    'Za': new _0x32eec3['k']['n'](_0x32eec3['k']['m'][_0x2429ca(0x595)](_0x15968c))
                }),
                this['hf'] = {},
                this['df'] = {},
                this['xk'] = [],
                this['yk'] = null;
            }
            function _0x482005(_0x369281) {
                var _0x325c14 = _0x1792;
                return (_0x369281 = _0x32eec3['k']['m'][_0x325c14(0x595)](_0x369281 || _0x444d21[_0x325c14(0x249)] || '/images/bg-pattern-pow2-ARENA.png'))[_0x325c14(0x549)] = _0x32eec3['k']['C']['D'],
                _0x369281;
            }
            return _0x3d235a[_0x160d73(0x66b)]['Sa'] = function(_0x18a750) {
                function _0x47cf33() {
                    --_0x523ca3 == 0x0 && _0x18a750();
                }
                var _0x523ca3 = 0x4;
                this['hf'] = {},
                _0x47cf33(),
                this['df'] = {},
                _0x47cf33(),
                this['xk'] = [],
                _0x47cf33(),
                this['yk'] = null,
                _0x47cf33();
            }
            ,
            _0x3d235a;
        }()),
        _0x53b237['zk'] = (function() {
            var _0xdd0377 = _0x5b8a80;
            function _0x4a7690() {
                this['Ak'] = null,
                this['Kf'] = new _0x53b237['Bk'](),
                this['Jf'] = new _0x53b237['Ck'](),
                this['Dk'] = new _0x53b237['Ek'](),
                this['Fk'] = new _0x53b237['Gk'](),
                this['Hk'] = new _0x53b237['Ik'](),
                this['Jk'] = new _0x53b237['Kk'](),
                this['Lk'] = new _0x53b237['Mk'](),
                this['Nk'] = new _0x53b237['Ok'](),
                this['Hi'] = new _0x53b237['Pk'](),
                this['Qk'] = new _0x53b237['Rk'](),
                this['Sk'] = new _0x53b237['Tk'](),
                this['Uk'] = new _0x53b237['Vk'](),
                this['Wk'] = new _0x53b237['Xk'](),
                this['Yk'] = new _0x53b237['Zk'](),
                this['Re'] = new _0x53b237['$k'](),
                this['_k'] = new _0x53b237['al'](),
                this['bl'] = new _0x53b237['cl'](),
                this['dl'] = new _0x53b237['el'](),
                this['fl'] = [];
            }
            function _0xcb383c(_0x5267b0, _0x3c54b6) {
                var _0x4041c9 = _0x1792;
                if (_0x3c54b6 !== _0x5267b0['length'] + 0x1) {
                    var _0x303f6c = _0x5267b0[_0x3c54b6];
                    _0x3a706a['ua'](_0x5267b0, _0x3c54b6 + 0x1, _0x3c54b6, _0x5267b0[_0x4041c9(0x60c)] - _0x3c54b6 - 0x1),
                    _0x5267b0[_0x5267b0[_0x4041c9(0x60c)] - 0x1] = _0x303f6c;
                }
            }
            return _0x4a7690['prototype']['Sa'] = function() {
                var _0x888a99 = _0x1792;
                this['Ak'] = new _0x53b237['Nf'](_0x53b237['Uf']['Tf']),
                this['fl'] = [this['Kf'], this['Jf'], this['Dk'], this['Fk'], this['Hk'], this['Jk'], this['Lk'], this['Nk'], this['Hi'], this['Qk'], this['Sk'], this['Uk'], this['Wk'], this['Yk'], this['Re'], this['_k'], this['bl'], this['dl']];
                for (var _0x21f684 = 0x0; _0x21f684 < this['fl'][_0x888a99(0x60c)]; _0x21f684++) {
                    this['fl'][_0x21f684]['Sa']();
                }
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['Uh'] = function(_0x68e89, _0x379279) {
                var _0x4dce69 = _0xdd0377;
                for (var _0x5e1966 = this['fl'][_0x4dce69(0x60c)] - 0x1; _0x5e1966 >= 0x0; _0x5e1966--) {
                    this['fl'][_0x5e1966]['ug'](_0x68e89, _0x379279);
                }
                ;this['fl'][0x0] !== this['Kf'] && this['fl'][0x0] !== this['dl'] && this['Ak'] != null && this['Ak']['ug'](_0x68e89, _0x379279);
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['qg'] = function() {
                var _0x3d907d = _0xdd0377;
                for (var _0x27ce9d = this['fl'][_0x3d907d(0x60c)] - 0x1; _0x27ce9d >= 0x0; _0x27ce9d--) {
                    this['fl'][_0x27ce9d]['qg']();
                }
                ;this['Ak'] != null && this['Ak']['qg']();
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['gl'] = function(_0x2464ae) {
                var _0x1592dc = function _0x1cdae5(_0x5167b9, _0x25feb6) {
                    for (var _0x55a0a4 = 0x0; _0x55a0a4 < _0x5167b9['length']; _0x55a0a4++) {
                        if (_0x5167b9[_0x55a0a4] === _0x25feb6)
                            return _0x55a0a4;
                    }
                    ;return -0x1;
                }(this['fl'], _0x2464ae);
                !(_0x1592dc < 0x0) && (this['fl'][0x0]['hl'](),
                function _0x1a3624(_0x1616d3, _0x42ae50) {
                    if (_0x42ae50 !== 0x0) {
                        var _0x8e82d4 = _0x1616d3[_0x42ae50];
                        _0x3a706a['ua'](_0x1616d3, 0x0, 0x1, _0x42ae50),
                        _0x1616d3[0x0] = _0x8e82d4;
                    }
                }(this['fl'], _0x1592dc),
                this['il']());
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['jl'] = function() {
                this['fl'][0x0]['hl']();
                do {
                    _0xcb383c(this['fl'], 0x0);
                } while (this['fl'][0x0]['Wd'] !== _0x53b237['ll']['kl']);
                ;this['il']();
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['il'] = function() {
                var _0x3103b8 = this['fl'][0x0];
                _0x3103b8['ml'](),
                _0x3103b8['nl'](),
                this['ol']();
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['pl'] = function() {
                return this['fl']['length'] !== 0x0 && this['fl'][0x0]['Wd'] === _0x53b237['ll']['kl'] && this['Yk']['ql']();
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['rl'] = function() {
                var _0x414f38 = _0xdd0377;
                return this['fl'][_0x414f38(0x60c)] === 0x0 ? null : this['fl'][0x0];
            }
            ,
            _0x4a7690[_0xdd0377(0x66b)]['ol'] = function() {
                this['pl']() && this['gl'](this['Yk']);
            }
            ,
            _0x4a7690;
        }()),
        _0x53b237['vj'] = (function() {
            function _0x16b697() {
                this['ii'] = [],
                this['fi'] = [];
            }
            return _0x16b697['wj'] = function(_0x2394bf, _0xb4e1b3) {
                return {
                    'ji': _0x2394bf,
                    'hi': _0xb4e1b3
                };
            }
            ,
            _0x16b697['xj'] = function(_0xc079b3, _0x51a6f7) {
                return {
                    'gi': _0xc079b3,
                    'hi': _0x51a6f7
                };
            }
            ,
            _0x16b697;
        }()),
        _0x53b237['sl'] = (function() {
            var _0x5be4ee = _0x5b8a80;
            function _0x34ab40() {
                this['tl'] = [],
                this['ul'] = [],
                this['vl'] = ![],
                this['wl'] = _0x421ec5,
                this['xl'] = {};
            }
            var _0x421ec5 = _0x5be4ee(0x48b)
              , _0x4ce6fd = _0x5be4ee(0x48b)
              , _0x55c7d8 = 'fb'
              , _0x3eecd8 = 'gg';
            return _0x34ab40['yl'] = new (function() {
                var _0x282962 = _0x5be4ee;
                function _0x3eb134() {}
                return _0x3eb134['zl'] = function _0x3b8194(_0x532b5a) {
                    this['Al'] = _0x532b5a;
                }
                ,
                _0x3eb134['prototype']['Bl'] = function() {
                    var _0xf363a7 = _0x1792;
                    return (typeof FB == _0xf363a7(0x3fa) ? 'undefined' : _typeof(FB)) != _0xf363a7(0x3fa);
                }
                ,
                _0x3eb134[_0x282962(0x66b)]['Cl'] = function(_0x26b68a, _0x4a84e5, _0x28329b) {
                    var _0x2fe95f = _0x282962
                      , _0xbfa3c3 = _0x2fe95f(0x473) + _0x26b68a;
                    $['get'](_0xbfa3c3)[_0x2fe95f(0x689)](function() {
                        _0x4a84e5();
                    })[_0x2fe95f(0x454)](function() {
                        _0x28329b();
                    });
                }
                ,
                _0x3eb134[_0x282962(0x66b)]['Dl'] = function(_0x1d5e4a, _0x3607a8) {
                    if (!this['Bl']()) {
                        _0x1d5e4a();
                        return;
                    }
                    ;this['El'](function() {
                        FB['login'](function(_0x225f0a) {
                            var _0x445225 = _0x1792;
                            if (_0x225f0a['status'] !== _0x445225(0x179)) {
                                _0x1d5e4a();
                                return;
                            }
                            ;var _0x5af111 = _0x225f0a[_0x445225(0x665)][_0x445225(0x4f3)];
                            _0x3607a8(new _0x3eb134['zl'](_0x5af111));
                        });
                    }, function(_0x1e1ec2) {
                        _0x3607a8(_0x1e1ec2);
                    });
                }
                ,
                _0x3eb134['prototype']['El'] = function(_0x59dbd9, _0x343355) {
                    var _0x304843 = _0x282962
                      , _0x598a26 = this;
                    if (!this['Bl']()) {
                        _0x59dbd9();
                        return;
                    }
                    ;FB[_0x304843(0x774)](function(_0x3384e2) {
                        var _0x5d5eaf = _0x304843;
                        if (_0x3384e2[_0x5d5eaf(0x755)] !== _0x5d5eaf(0x179)) {
                            _0x59dbd9();
                            return;
                        }
                        ;var _0x3d297c = _0x3384e2[_0x5d5eaf(0x665)][_0x5d5eaf(0x4f3)];
                        _0x598a26['Cl'](_0x3d297c, function() {
                            _0x59dbd9();
                        }, function() {
                            _0x343355(new _0x3eb134['zl'](_0x3d297c));
                        });
                    });
                }
                ,
                _0x3eb134[_0x282962(0x66b)]['Fl'] = function() {
                    this['Bl']() && FB['logout']();
                }
                ,
                _0x3eb134;
            }())(),
            _0x34ab40['Gl'] = new (function() {
                var _0x390c64 = _0x5be4ee;
                function _0x24eae4() {}
                return _0x24eae4['Hl'] = function _0xba25b3(_0x1e2f3b, _0x533748) {
                    this['Al'] = _0x1e2f3b,
                    this['Il'] = _0x533748;
                }
                ,
                _0x24eae4[_0x390c64(0x66b)]['Bl'] = function() {
                    var _0x552ee2 = _0x390c64;
                    return _typeof(GoogleAuth) != _0x552ee2(0x3fa);
                }
                ,
                _0x24eae4[_0x390c64(0x66b)]['Dl'] = function(_0x50ea91, _0x961e9f) {
                    var _0x45d2c4 = _0x390c64;
                    if (_typeof(GoogleAuth) == _0x45d2c4(0x3fa)) {
                        _0x50ea91();
                        return;
                    }
                    ;GoogleAuth['then'](function() {
                        var _0x961509 = _0x45d2c4;
                        if (GoogleAuth[_0x961509(0x25a)]['get']()) {
                            var _0x3113b7 = GoogleAuth['currentUser']['get']()
                              , _0x164ac0 = _0x3113b7[_0x961509(0x4a5)]()[_0x961509(0x4be)]
                              , _0x23beb4 = new Date()[_0x961509(0x6a8)]() + _0x3113b7[_0x961509(0x4a5)]()[_0x961509(0x3ac)] * 0x3e8;
                            if (new Date()[_0x961509(0x6a8)]() < _0x23beb4) {
                                _0x961e9f(new _0x24eae4['Hl'](_0x164ac0,_0x23beb4));
                                return;
                            }
                        }
                        ;GoogleAuth[_0x961509(0x316)]()['then'](function(_0x954f54) {
                            var _0x326950 = _0x961509;
                            if (_typeof(_0x954f54[_0x326950(0x6e5)]) !== _0x326950(0x3fa) || !_0x954f54['isSignedIn']()) {
                                _0x50ea91();
                                return;
                            }
                            ;var _0x5713e1 = _0x954f54['getAuthResponse']()[_0x326950(0x4be)]
                              , _0x292d9a = new Date()[_0x326950(0x6a8)]() + _0x954f54[_0x326950(0x4a5)]()[_0x326950(0x3ac)] * 0x3e8;
                            _0x961e9f(new _0x24eae4['Hl'](_0x5713e1,_0x292d9a));
                        });
                    });
                }
                ,
                _0x24eae4[_0x390c64(0x66b)]['El'] = function(_0x136f77, _0x1e7863) {
                    var _0x343841 = _0x390c64;
                    if (_typeof(GoogleAuth) == _0x343841(0x3fa)) {
                        _0x136f77();
                        return;
                    }
                    ;GoogleAuth[_0x343841(0x2aa)](function() {
                        var _0x478681 = _0x343841;
                        if (GoogleAuth[_0x478681(0x25a)][_0x478681(0x3a1)]()) {
                            var _0xaec755 = GoogleAuth['currentUser'][_0x478681(0x3a1)]()
                              , _0x5a59c8 = _0xaec755[_0x478681(0x4a5)]()[_0x478681(0x4be)]
                              , _0x4380db = new Date()[_0x478681(0x6a8)]() + _0xaec755[_0x478681(0x4a5)]()[_0x478681(0x3ac)] * 0x3e8;
                            if (new Date()[_0x478681(0x6a8)]() < _0x4380db) {
                                _0x1e7863(new _0x24eae4['Hl'](_0x5a59c8,_0x4380db));
                                return;
                            }
                        }
                        ;_0x136f77();
                    });
                }
                ,
                _0x24eae4[_0x390c64(0x66b)]['Fl'] = function() {
                    var _0x2c7a82 = _0x390c64;
                    _typeof(GoogleAuth) != _0x2c7a82(0x3fa) && GoogleAuth[_0x2c7a82(0x575)]();
                }
                ,
                _0x24eae4;
            }())(),
            _0x34ab40[_0x5be4ee(0x66b)]['Sa'] = function() {
                this['Jl']();
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Kl'] = function() {
                var _0x268ab0 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x268ab0(0x6c3)] : '';
            }
            ,
            _0x34ab40['prototype']['Ll'] = function() {
                var _0x2bd4d4 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x2bd4d4(0x765)] : '';
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Ml'] = function() {
                var _0x57e853 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x57e853(0x1a1)] : '';
            }
            ,
            _0x34ab40['prototype']['Nl'] = function() {
                var _0x161f50 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x161f50(0x2c0)] : _0x69e837['H']['M'];
            }
            ,
            _0x34ab40['prototype']['Ol'] = function() {
                var _0x435e76 = _0x5be4ee;
                return this['vl'] && this['xl'][_0x435e76(0x315)];
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Pl'] = function() {
                var _0x5fa8e3 = _0x5be4ee;
                return this['vl'] && this['xl'][_0x5fa8e3(0x54b)];
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Ql'] = function() {
                var _0x2ec014 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x2ec014(0x15a)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Rl'] = function() {
                var _0x5d4abe = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x5d4abe(0x72d)] : 0x1;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Sl'] = function() {
                var _0x18dceb = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x18dceb(0x76b)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Tl'] = function() {
                var _0x473d37 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x473d37(0x494)] : 0x32;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Ul'] = function() {
                var _0xac2427 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0xac2427(0x21b)] : 0x0;
            }
            ,
            _0x34ab40['prototype']['Vl'] = function() {
                var _0x52e702 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x52e702(0x243)] : 0x0;
            }
            ,
            _0x34ab40['prototype']['Wl'] = function() {
                var _0x2d24fa = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x2d24fa(0x278)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Xl'] = function() {
                var _0x15896e = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x15896e(0x26b)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Yl'] = function() {
                var _0x519f53 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x519f53(0x510)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['Zl'] = function() {
                var _0xb489db = _0x5be4ee;
                return this['vl'] ? this['xl'][_0xb489db(0x2a4)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['$l'] = function() {
                var _0x306be0 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x306be0(0x205)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['_l'] = function() {
                var _0x3e0433 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x3e0433(0x5ea)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['am'] = function() {
                return this['vl'] ? this['xl']['headShots'] : 0x0;
            }
            ,
            _0x34ab40['prototype']['bm'] = function() {
                var _0x225768 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x225768(0x649)] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['cm'] = function() {
                return this['vl'] ? this['xl']['totalPlayTimeSec'] : 0x0;
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['dm'] = function() {
                var _0x5e3066 = _0x5be4ee;
                return this['vl'] ? this['xl'][_0x5e3066(0x35b)] : {};
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['em'] = function(_0x4cd12e) {
                this['tl']['push'](_0x4cd12e),
                _0x4cd12e();
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['fm'] = function(_0x28393c) {
                this['ul']['push'](_0x28393c),
                _0x28393c();
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['rk'] = function(_0x345c28, _0x5d7c8e) {
                var _0x129cd3 = _0x5be4ee
                  , _0x85e467 = this['xl']['propertyList'][_0x129cd3(0x38e)](_0x444d21['pL'] || []);
                if (_0x85e467 == null)
                    return ![];
                ;for (_0x4ce6fd = 0x0; _0x4ce6fd < _0x85e467['length']; _0x4ce6fd++) {
                    var _0x3f26e3 = _0x85e467[_0x4ce6fd];
                    if (_0x3f26e3['id'] == _0x345c28 && _0x3f26e3['type'] === _0x5d7c8e)
                        return !![];
                }
                ;return ![];
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['nk'] = function() {
                return this['vl'];
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['gm'] = function() {
                return this['wl'];
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['hm'] = function(_0x139f41) {
                var _0x7fb52b = this
                  , _0x12f808 = this['Kl']()
                  , _0x942e0f = this['Ql']()
                  , _0x5ea314 = this['Rl']();
                this['im'](function() {
                    _0x139f41 != null && _0x139f41();
                }, function(_0x15788c) {
                    var _0x517626 = _0x1792;
                    _0x7fb52b['xl'] = _0x15788c[_0x517626(0x5a1)],
                    _0x7fb52b['jm']();
                    var _0x36a46d = _0x7fb52b['Kl']()
                      , _0x22b71c = _0x7fb52b['Ql']()
                      , _0x1f7a6a = _0x7fb52b['Rl']();
                    if (_0x12f808 === _0x36a46d) {
                        _0x1f7a6a > 0x1 && _0x1f7a6a !== _0x5ea314 && ooo['Xg']['Yk']['km'](new _0x53b237['lm'](_0x1f7a6a));
                        var _0x32ab0c = _0x22b71c - _0x942e0f;
                        _0x32ab0c >= 0x14 && ooo['Xg']['Yk']['km'](new _0x53b237['mm'](_0x32ab0c));
                    }
                    ;_0x139f41 != null && _0x139f41();
                });
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['im'] = function(_0x38fb5f, _0x2f0394) {
                var _0x2e944f = _0x5be4ee
                  , _0x911b58 = _0x69e837['H']['J'] + _0x2e944f(0x2bb) + this['wl'] + _0x2e944f(0x17e);
                _0x3a706a['Aa'](_0x911b58, _0x38fb5f, function(_0x56063d) {
                    var _0x55865 = _0x2e944f;
                    _0x56063d[_0x55865(0x210)] !== 0x4b0 ? _0x38fb5f() : _0x2f0394(_0x56063d);
                });
            }
            ,
            _0x34ab40['prototype']['nm'] = function(_0xd9dc5a, _0x5d3b95, _0x47c565, _0x58bc6f) {
                var _0x291770 = _0x5be4ee
                  , _0x106f04 = _0x69e837['H']['J'] + _0x291770(0x2bb) + this['wl'] + _0x291770(0x3c0) + _0xd9dc5a + _0x291770(0x4cd) + _0x5d3b95;
                _0x3a706a['Aa'](_0x106f04, function() {
                    _0x47c565();
                }, function(_0x2f4400) {
                    var _0x3efd1f = _0x291770;
                    _0x2f4400[_0x3efd1f(0x210)] !== 0x4b0 ? _0x47c565() : _0x58bc6f();
                });
            }
            ,
            _0x34ab40['prototype']['om'] = function(_0x336905, _0x2606bb) {
                var _0x17d8fc = _0x5be4ee
                  , _0x835f7c = _0x69e837['H']['J'] + _0x17d8fc(0x2bb) + this['wl'] + _0x17d8fc(0x332);
                _0x3a706a['Aa'](_0x835f7c, _0x336905, function(_0x3d06b6) {
                    var _0x14e4d0 = _0x17d8fc;
                    _0x3d06b6[_0x14e4d0(0x210)] !== 0x4b0 ? _0x336905() : _0x2606bb();
                });
            }
            ,
            _0x34ab40['prototype']['pm'] = function(_0x373738) {
                var _0x464a8f = this;
                this['vl'] && this['qm'](),
                _0x34ab40['yl']['Dl'](function() {
                    _0x373738();
                }, function(_0xab153e) {
                    _0x464a8f['rm'](_0x55c7d8, _0xab153e['Al'], _0x373738);
                });
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['sm'] = function(_0x4b6836) {
                var _0x280771 = this;
                this['vl'] && this['qm'](),
                _0x34ab40['Gl']['Dl'](function() {
                    _0x4b6836();
                }, function(_0xa80051) {
                    _0x280771['rm'](_0x3eecd8, _0xa80051['Al'], _0x4b6836);
                });
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['rm'] = function(_0x48be16, _0xa90965, _0x4eee49) {
                var _0x2d9332 = _0x5be4ee
                  , _0x5a6235 = this
                  , _0x16c020 = _0x48be16 + '_' + _0xa90965
                  , _0x226e23 = _0x69e837['H']['J'] + _0x2d9332(0x2bb) + _0x16c020 + _0x2d9332(0x693);
                _0x3a706a['Aa'](_0x226e23, function() {
                    _0x5a6235['tm']();
                }, function(_0x11bd7d) {
                    _0x11bd7d['code'] !== 0x4b0 ? _0x5a6235['tm']() : (_0x5a6235['um'](_0x48be16, _0xa90965, _0x11bd7d['user_data']),
                    _0x4eee49 != null && _0x4eee49());
                });
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['qm'] = function() {
                try {
                    this['vm'](),
                    this['wm']();
                } catch (_0x4964c4) {}
                ;this['xm']();
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['ym'] = function() {
                this['vl'] && this['om'](function() {}, function() {});
            }
            ,
            _0x34ab40['prototype']['tm'] = function() {
                ooo['Xg']['gl'](ooo['Xg']['_k']);
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['um'] = function(_0xd40f49, _0x150eb1, _0x1ebe7c) {
                var _0x2d356c = this;
                _0x23b441(_0x1ebe7c, function(_0xf9d43d) {
                    var _0x3eebbd = _0x1792
                      , _0x216f4e = _0x2d356c['vl'] ? _0x2d356c['xl'][_0x3eebbd(0x6c3)] : _0xf9d43d;
                    _0x2d356c['vl'] = !![],
                    _0x2d356c['wl'] = _0xd40f49 + '_' + _0x150eb1,
                    _0x2d356c['xl'] = _0xf9d43d,
                    _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Hg'], _0xd40f49, 0x3c),
                    _0x216f4e !== _0x2d356c['xl'][_0x3eebbd(0x6c3)] ? _0x2d356c['zm']() : _0x2d356c['jm'](),
                    ooo['Xp'](!![], !![]),
                    _0x444d21[_0x3eebbd(0x505)] = ![];
                });
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['xm'] = function() {
                var _0x34f5cd = _0x5be4ee
                  , _0x1a5282 = this['vl'] ? this['xl'][_0x34f5cd(0x6c3)] : _0x4ce6fd;
                this['vl'] = ![],
                this['wl'] = _0x421ec5,
                this['xl'] = {},
                _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Hg'], '', 0x3c),
                _0x1a5282 !== this['xl']['userId'] ? this['zm']() : this['jm']();
            }
            ,
            _0x34ab40['prototype']['Jl'] = function() {
                var _0x464558 = _0x53b237['Cg']['Og'](_0x53b237['Cg']['Hg'])
                  , _0x34ced5 = this;
                if (_0x55c7d8 === _0x464558) {
                    var _0x1d0678 = 0x1;
                    (function _0x1ddf5d() {
                        if (!_0x34ab40['yl']['Bl']() && _0x1d0678++ < 0x5) {
                            _0x3a706a['Y'](_0x1ddf5d, 0x3e8);
                            return;
                        }
                        ;_0x34ab40['yl']['El'](function() {}, function(_0x31c7e1) {
                            _0x34ced5['rm'](_0x55c7d8, _0x31c7e1['Al']);
                        });
                    }());
                } else {
                    if (_0x3eecd8 === _0x464558) {
                        var _0x498976 = 0x1;
                        (function _0x3fec8d() {
                            if (!_0x34ab40['Gl']['Bl']() && _0x498976++ < 0x5) {
                                _0x3a706a['Y'](_0x3fec8d, 0x3e8);
                                return;
                            }
                            ;_0x34ab40['Gl']['El'](function() {}, function(_0x474d25) {
                                _0x34ced5['rm'](_0x3eecd8, _0x474d25['Al']);
                            });
                        }());
                    }
                }
            }
            ,
            _0x34ab40['prototype']['zm'] = function() {
                var _0x2f879f = _0x5be4ee;
                for (var _0x5d3232 = 0x0; _0x5d3232 < this['tl'][_0x2f879f(0x60c)]; _0x5d3232++) {
                    this['tl'][_0x5d3232]();
                }
                ;this['jm']();
            }
            ,
            _0x34ab40['prototype']['jm'] = function() {
                var _0x4c1efa = _0x5be4ee;
                for (var _0x1e3342 = 0x0; _0x1e3342 < this['ul'][_0x4c1efa(0x60c)]; _0x1e3342++) {
                    this['ul'][_0x1e3342]();
                }
            }
            ,
            _0x34ab40[_0x5be4ee(0x66b)]['vm'] = function() {
                _0x34ab40['yl']['Fl']();
            }
            ,
            _0x34ab40['prototype']['wm'] = function() {
                _0x34ab40['Gl']['Fl']();
            }
            ,
            _0x34ab40;
        }()),
        _0x53b237['Sf'] = (function() {
            var _0x1a3d91 = _0x5b8a80;
            function _0x2d3fa2(_0x1bf1b0, _0x2ce2ce, _0x3c1564) {
                var _0xb9a77e = _0x1792;
                this['Of'] = _0x3c1564,
                this['Rd'] = ![],
                this['Yc'] = new _0x32eec3['k']['l'](),
                this['Yc']['visible'] = ![],
                this['Am'] = Array(_0x1bf1b0);
                for (var _0x5c0290 = 0x0; _0x5c0290 < this['Am'][_0xb9a77e(0x60c)]; _0x5c0290++) {
                    var _0x4b518c = new _0x53b237['Bm'](new _0x32eec3['j'](_0x2ce2ce * 0x3));
                    _0x4b518c['Cm'](_0x2ce2ce),
                    this['Am'][_0x5c0290] = _0x4b518c,
                    this['Yc']['addChild'](_0x4b518c['ag']());
                }
                ;this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['qg']();
            }
            return _0x2d3fa2[_0x1a3d91(0x66b)]['ag'] = function() {
                return this['Yc'];
            }
            ,
            _0x2d3fa2[_0x1a3d91(0x66b)]['rg'] = function(_0x593a87) {
                var _0x1c49e0 = _0x1a3d91;
                this['Rd'] = _0x593a87,
                this['Yc'][_0x1c49e0(0x5b6)] = _0x593a87;
            }
            ,
            _0x2d3fa2['prototype']['qg'] = function() {
                var _0x5e006e = _0x1a3d91;
                this['Pf'] = this['Of'][_0x5e006e(0x612)](),
                this['Qf'] = this['Of'][_0x5e006e(0x67d)]();
                var _0x9ebe38 = this['Qf'] / 0x1e;
                for (var _0x1005a5 = 0x0; _0x1005a5 < this['Am'][_0x5e006e(0x60c)]; _0x1005a5++) {
                    this['Am'][_0x1005a5]['Dm'](_0x9ebe38);
                }
            }
            ,
            _0x2d3fa2[_0x1a3d91(0x66b)]['Bg'] = function() {
                var _0x3f8f67 = _0x1a3d91;
                if (this['Rd'])
                    for (var _0x30ca35 = 0x0; _0x30ca35 < this['Am'][_0x3f8f67(0x60c)]; _0x30ca35++) {
                        this['Am'][_0x30ca35]['Bg'](this['Vf']);
                    }
            }
            ,
            _0x2d3fa2[_0x1a3d91(0x66b)]['Em'] = function() {
                return this['Pf'];
            }
            ,
            _0x2d3fa2[_0x1a3d91(0x66b)]['Fm'] = function() {
                return this['Qf'];
            }
            ,
            _0x2d3fa2['prototype']['xg'] = function(_0x5574f7, _0x55a6fb) {
                this['Am'][_0x5574f7]['Gm'](_0x55a6fb);
            }
            ,
            _0x2d3fa2[_0x1a3d91(0x66b)]['yg'] = function(_0x13a0fa, _0x558193) {
                this['Am'][_0x13a0fa]['Hm'](_0x558193);
            }
            ,
            _0x2d3fa2[_0x1a3d91(0x66b)]['zg'] = function(_0x5dc4fd, _0x1197b0, _0xcba910) {
                var _0x4c5a5f = this['Am'][_0x5dc4fd];
                for (var _0x3cb51a = _0x4c5a5f['Im'](), _0x53e42a = _0x4c5a5f['Jm'], _0x5aa154 = 0x0; _0x5aa154 < _0x3cb51a; _0x5aa154++) {
                    _0x53e42a[_0x5aa154 * 0x3] = _0x1197b0,
                    _0x53e42a[_0x5aa154 * 0x3 + 0x1] = _0xcba910,
                    _0x53e42a[_0x5aa154 * 0x3 + 0x2] = 0x0;
                }
            }
            ,
            _0x2d3fa2['prototype']['Ag'] = function(_0x2d3179, _0x3c4a1d, _0x34f51f) {
                var _0x4e2d55, _0x376a88, _0x4f6517 = this['Am'][_0x2d3179], _0x1abdf9 = _0x4f6517['Im'](), _0x1b2be5 = _0x4f6517['Jm'], _0x57a7a9 = _0x4f6517['Km'](), _0x390496 = _0x1b2be5[0x0], _0x2479a = _0x1b2be5[0x1], _0x173b78 = _0x3c4a1d - _0x390496, _0x5d2397 = _0x34f51f - _0x2479a, _0x56b0b5 = _0x3a706a['la'](_0x173b78, _0x5d2397);
                if (_0x56b0b5 > 0x0) {
                    _0x1b2be5[0x0] = _0x3c4a1d,
                    _0x1b2be5[0x1] = _0x34f51f,
                    _0x1b2be5[0x2] = _0x3a706a['ta'](_0x5d2397, _0x173b78);
                    var _0x1892cb = _0x57a7a9 * 0.25 / (_0x57a7a9 * 0.25 + _0x56b0b5)
                      , _0x1b5956 = 0x1 - _0x1892cb * 0x2;
                    for (var _0xd0459b = 0x1, _0x460773 = _0x1abdf9; _0xd0459b < _0x460773; _0xd0459b++) {
                        _0x4e2d55 = _0x1b2be5[_0xd0459b * 0x3],
                        _0x1b2be5[_0xd0459b * 0x3] = _0x1b2be5[_0xd0459b * 0x3 - 0x3] * _0x1b5956 + (_0x4e2d55 + _0x390496) * _0x1892cb,
                        _0x390496 = _0x4e2d55,
                        _0x376a88 = _0x1b2be5[_0xd0459b * 0x3 + 0x1],
                        _0x1b2be5[_0xd0459b * 0x3 + 0x1] = _0x1b2be5[_0xd0459b * 0x3 - 0x2] * _0x1b5956 + (_0x376a88 + _0x2479a) * _0x1892cb,
                        _0x2479a = _0x376a88,
                        _0x1b2be5[_0xd0459b * 0x3 + 0x2] = _0x3a706a['ta'](_0x1b2be5[_0xd0459b * 0x3 - 0x2] - _0x1b2be5[_0xd0459b * 0x3 + 0x1], _0x1b2be5[_0xd0459b * 0x3 - 0x3] - _0x1b2be5[_0xd0459b * 0x3]);
                    }
                }
            }
            ,
            _0x2d3fa2;
        }()),
        _0x53b237['Lm'] = (function() {
            var _0x2b3995 = _0x5b8a80;
            function _0x2abe4d(_0x1ceb4a) {
                var _0x3d3a02 = _0x1792, _0x443b7c, _0x2cc679 = this;
                this['Of'] = _0x1ceb4a,
                this['nc'] = _0x1ceb4a['get']()[0x0],
                this['Vf'] = ((_0x443b7c = {})[_0x3d3a02(0x587)] = _0x2cc679['nc'],
                _0x443b7c[_0x3d3a02(0x4ac)] = !![],
                new _0x32eec3['k']['o'](_0x443b7c)),
                this['Rd'] = ![],
                this['Mm'] = new _0x53b237['Bm'](new _0x32eec3['j'](_0x3793e3 * 0x3)),
                this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['Nm'] = _0x37c268['Om'],
                this['Pm'] = _0x37c268['Om'],
                this['Qm'] = _0x37c268['Om'],
                this['Rm'] = _0x37c268['Om'],
                this['Sm'] = _0x37c268['Om'],
                this['qg'](),
                ooo['ud']['Jc'](function() {
                    _0x2cc679['Mm']['Tm']();
                });
            }
            var _0x3793e3 = _0x3a706a['ha'](0x64, _0x53b237['Xc']['fd'])
              , _0x37c268 = {
                'Om': _0x2b3995(0x15c),
                'Um': _0x2b3995(0x73c),
                'Vm': _0x2b3995(0x217)
            };
            return _0x2abe4d[_0x2b3995(0x66b)]['rg'] = function(_0x316717) {
                this['Rd'] = _0x316717;
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['qg'] = function() {
                var _0x37dc16 = _0x2b3995
                  , _0xbbc5a7 = _0x3a706a['e']();
                this['Pf'] = this['Of']['width'](),
                this['Qf'] = this['Of'][_0x37dc16(0x67d)](),
                this['Vf'][_0x37dc16(0x629)](this['Pf'], this['Qf']),
                this['Vf'][_0x37dc16(0x282)] = _0xbbc5a7,
                this['nc'][_0x37dc16(0x612)] = _0xbbc5a7 * this['Pf'],
                this['nc'][_0x37dc16(0x67d)] = _0xbbc5a7 * this['Qf'];
                var _0x2a3316 = this['Qf'] / 0x4;
                this['Mm']['Dm'](_0x2a3316);
                var _0x298f61 = _0x3a706a['fa'](_0x3a706a['_'](this['Pf'] / _0x2a3316) * 0x2 - 0x5, 0x1, _0x3793e3);
                this['Mm']['Cm'](_0x298f61);
            }
            ,
            _0x2abe4d['prototype']['ug'] = function() {
                if (this['Rd']) {
                    var _0x3d34cb = _0x3a706a['Ca']() / 0xc8
                      , _0x58ece3 = _0x3a706a['oa'](_0x3d34cb);
                    this['Mm']['Wm'](this['Xm'](this['Nm'], _0x58ece3), this['Ym'](this['Nm'], _0x58ece3)),
                    this['Mm']['Zm'](this['$m'](this['Pm'], _0x58ece3), this['$m'](this['Qm'], _0x58ece3), this['$m'](this['Rm'], _0x58ece3), this['$m'](this['Sm'], _0x58ece3));
                    var _0x2dced9 = this['Mm']['Km']();
                    for (var _0x127cb5 = this['Mm']['Im'](), _0x180ee1 = this['Mm']['Jm'], _0x26cf8a = this['Pf'] - (this['Pf'] - _0x2dced9 * 0.5 * (_0x127cb5 - 0x1)) * 0.5, _0x5cd5f4 = this['Qf'] * 0.5, _0x1cd684 = 0x0, _0x282987 = 0x0, _0x507b24 = -0x1; _0x507b24 < _0x127cb5; _0x507b24++) {
                        var _0x1e798f = _0x507b24
                          , _0x56970f = _0x3a706a['pa'](_0x1e798f * 0x1 / 0xc * _0x69e837['T'] - _0x3d34cb) * (0x1 - _0x3a706a['ra'](0x10, _0x1e798f * -0x1 / 0xc));
                        _0x507b24 >= 0x0 && (_0x180ee1[_0x507b24 * 0x3] = _0x26cf8a - _0x2dced9 * 0.5 * _0x1e798f,
                        _0x180ee1[_0x507b24 * 0x3 + 0x1] = _0x5cd5f4 + _0x2dced9 * 0.5 * _0x56970f,
                        _0x180ee1[_0x507b24 * 0x3 + 0x2] = _0x3a706a['ta'](_0x282987 - _0x56970f, _0x1e798f - _0x1cd684)),
                        _0x1cd684 = _0x1e798f,
                        _0x282987 = _0x56970f;
                    }
                    ;this['Mm']['Bg'](),
                    this['Mm']['_m'](this['Vf']);
                }
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['Gm'] = function(_0x96b9da) {
                this['Mm']['Gm'](_0x96b9da);
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['an'] = function(_0xe1738e) {
                this['Nm'] = _0xe1738e ? _0x37c268['Vm'] : _0x37c268['Um'],
                this['Pm'] = _0x37c268['Om'],
                this['Qm'] = _0x37c268['Om'],
                this['Rm'] = _0x37c268['Om'],
                this['Sm'] = _0x37c268['Om'];
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['bn'] = function(_0xf74b12) {
                this['Nm'] = _0x37c268['Om'],
                this['Pm'] = _0xf74b12 ? _0x37c268['Vm'] : _0x37c268['Um'],
                this['Qm'] = _0x37c268['Om'],
                this['Rm'] = _0x37c268['Om'],
                this['Sm'] = _0x37c268['Om'];
            }
            ,
            _0x2abe4d['prototype']['cn'] = function(_0x597d0a) {
                this['Nm'] = _0x37c268['Om'],
                this['Pm'] = _0x37c268['Om'],
                this['Qm'] = _0x597d0a ? _0x37c268['Vm'] : _0x37c268['Um'],
                this['Rm'] = _0x37c268['Om'],
                this['Sm'] = _0x37c268['Om'];
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['dn'] = function(_0x3ded93) {
                this['Nm'] = _0x37c268['Om'],
                this['Pm'] = _0x37c268['Om'],
                this['Qm'] = _0x37c268['Om'],
                this['Rm'] = _0x3ded93 ? _0x37c268['Vm'] : _0x37c268['Um'],
                this['Sm'] = _0x37c268['Om'];
            }
            ,
            _0x2abe4d['prototype']['en'] = function(_0x5cd0c2) {
                this['Nm'] = _0x37c268['Om'],
                this['Pm'] = _0x37c268['Om'],
                this['Qm'] = _0x37c268['Om'],
                this['Rm'] = _0x37c268['Om'],
                this['Sm'] = _0x5cd0c2 ? _0x37c268['Vm'] : _0x37c268['Um'];
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['Xm'] = function(_0x3b1823, _0x556846) {
                switch (_0x3b1823) {
                case _0x37c268['Um']:
                    return 0.9 + _0x556846 * 0.1;
                case _0x37c268['Vm']:
                    return 0.4 + _0x556846 * 0.3;
                }
                ;return 0x1;
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['Ym'] = function(_0x3b5fa6, _0x19472b) {
                switch (_0x3b5fa6) {
                case _0x37c268['Um']:
                    return 0.6 + _0x19472b * 0.5;
                case _0x37c268['Vm']:
                    return 0.3 + _0x19472b * 0.3;
                }
                ;return 0x1;
            }
            ,
            _0x2abe4d[_0x2b3995(0x66b)]['$m'] = function(_0x4714c8, _0x429778) {
                switch (_0x4714c8) {
                case _0x37c268['Um']:
                    return 0.9 + _0x429778 * 0.1;
                case _0x37c268['Vm']:
                    return 0.6 + _0x429778 * 0.4;
                }
                ;return 0x1;
            }
            ,
            _0x2abe4d;
        }()),
        _0x53b237['uk'] = (function() {
            var _0x2723d0 = _0x5b8a80;
            function _0x5749a4(_0x1ceb47, _0x42eb5d, _0x1772c8, _0x19ee15, _0x4e7fbc) {
                this['gn'] = _0x1ceb47,
                this['hn'] = _0x42eb5d,
                this['in'] = _0x1772c8,
                this['jn'] = _0x19ee15,
                this['kn'] = _0x4e7fbc;
            }
            return _0x5749a4['tk'] = function(_0x583a1e) {
                var _0x309da4 = _0x1792;
                return new _0x5749a4(_0x583a1e[_0x309da4(0x2c1)],_0x583a1e[_0x309da4(0x48b)],_0x583a1e['nonbuyable'],_0x583a1e[_0x309da4(0x700)],_0x583a1e[_0x309da4(0x1ef)]);
            }
            ,
            _0x5749a4['vk'] = function(_0x475c1a) {
                var _0x2b6886 = _0x1792;
                return new _0x5749a4(_0x475c1a['price'],_0x475c1a[_0x2b6886(0x48b)],_0x475c1a[_0x2b6886(0x40b)],_0x475c1a[_0x2b6886(0x700)],_0x475c1a['description']);
            }
            ,
            _0x5749a4['prototype']['pk'] = function() {
                return this['gn'];
            }
            ,
            _0x5749a4[_0x2723d0(0x66b)]['sk'] = function() {
                return this['hn'];
            }
            ,
            _0x5749a4[_0x2723d0(0x66b)]['qk'] = function() {
                return this['in'];
            }
            ,
            _0x5749a4['prototype']['ln'] = function() {
                return this['jn'];
            }
            ,
            _0x5749a4[_0x2723d0(0x66b)]['mn'] = function() {
                return this['kn'];
            }
            ,
            _0x5749a4;
        }()),
        _0x53b237['Zf'] = (function() {
            var _0x59ca87 = _0x5b8a80;
            function _0x5e47c4(_0x526afe) {
                var _0x133623 = _0x1792;
                this['nn'] = {},
                this['nn'][_0x1ab2f9] = _0x526afe;
                var _0x14273d = _0x32eec3['k']['q'][_0x133623(0x595)](_0x56e00a, _0x1311b4, this['nn']);
                this['_f'] = new _0x32eec3['k']['v'](_0x2a7acf,_0x14273d),
                this['_f'][_0x133623(0x2dd)] = _0x32eec3['k']['w']['B'];
            }
            var _0x1c302e = _0x59ca87(0x3ff) + _0x3a706a['xa']()
              , _0x21d841 = _0x59ca87(0x4ae) + _0x3a706a['xa']()
              , _0x492806 = 'translationMatrix'
              , _0xd611e7 = 'projectionMatrix'
              , _0x1ab2f9 = _0x59ca87(0x423) + _0x3a706a['xa']()
              , _0xe239fd = _0x59ca87(0x337) + _0x3a706a['xa']()
              , _0x8fa94 = _0x59ca87(0x704) + _0x3a706a['xa']()
              , _0x2a7acf = new _0x32eec3['k']['u']()[_0x59ca87(0x3a6)](_0x1c302e, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)[_0x59ca87(0x3a6)](_0x21d841, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)
              , _0x56e00a = _0x59ca87(0x6a1) + _0x1c302e + ';\x20attribute\x20vec2\x20' + _0x21d841 + _0x59ca87(0x151) + _0x492806 + _0x59ca87(0x151) + _0xd611e7 + _0x59ca87(0x5f1) + _0xe239fd + ';\x20varying\x20vec2\x20' + _0x8fa94 + _0x59ca87(0x257) + _0x8fa94 + _0x59ca87(0x377) + _0x21d841 + _0x59ca87(0x4af) + _0xd611e7 + _0x59ca87(0x417) + _0x492806 + _0x59ca87(0x534) + _0x1c302e + _0x59ca87(0x623) + _0xe239fd + _0x59ca87(0x1cd) + _0x21d841 + _0x59ca87(0x61c) + _0x8fa94 + _0x59ca87(0x36f)
              , _0x1311b4 = _0x59ca87(0x4f6) + _0x8fa94 + _0x59ca87(0x741) + _0x1ab2f9 + _0x59ca87(0x76d) + _0x1ab2f9 + ',\x20' + _0x8fa94 + _0x59ca87(0x58e);
            return _0x5e47c4[_0x59ca87(0x66b)]['tg'] = function(_0x1a2343, _0xa79ca3) {
                var _0x22e737 = _0x59ca87;
                this['_f'][_0x22e737(0x760)]['x'] = _0x1a2343,
                this['_f'][_0x22e737(0x760)]['y'] = _0xa79ca3,
                this['nn'][_0xe239fd] = [_0x1a2343, _0xa79ca3, 0x1 / _0x1a2343 + 0x1, 0x1 / _0xa79ca3 + 0x1];
            }
            ,
            _0x5e47c4;
        }()),
        _0x53b237['th'] = (function() {
            var _0x29936d = _0x5b8a80;
            function _0x2e16c3() {
                var _0x4ca7d8 = _0x1792;
                this['nn'] = {},
                this['nn'][_0x2c08e4] = [0x1, 0.5, 0.25, 0.5],
                this['nn'][_0x3b637e] = _0x32eec3['k']['n'][_0x4ca7d8(0x576)],
                this['nn'][_0x56af90] = [0x0, 0x0],
                this['nn'][_0x4c7738] = [0x0, 0x0];
                var _0x369a1e = _0x32eec3['k']['q'][_0x4ca7d8(0x595)](_0x5c7312, _0xbf17a5, this['nn']);
                this['_f'] = new _0x32eec3['k']['v'](_0x10979d,_0x369a1e);
            }
            var _0x4ec640 = 'a1_' + _0x3a706a['xa']()
              , _0x271b83 = _0x29936d(0x4ae) + _0x3a706a['xa']()
              , _0x107b4a = 'translationMatrix'
              , _0x90a6fb = _0x29936d(0x4a8)
              , _0x2c08e4 = 'u3_' + _0x3a706a['xa']()
              , _0x3b637e = _0x29936d(0x337) + _0x3a706a['xa']()
              , _0x56af90 = _0x29936d(0x12b) + _0x3a706a['xa']()
              , _0x4c7738 = _0x29936d(0x461) + _0x3a706a['xa']()
              , _0x421093 = _0x29936d(0x704) + _0x3a706a['xa']()
              , _0x10979d = new _0x32eec3['k']['u']()[_0x29936d(0x3a6)](_0x4ec640, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x29936d(0x3a6)](_0x271b83, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)
              , _0x5c7312 = _0x29936d(0x6a1) + _0x4ec640 + _0x29936d(0x62e) + _0x271b83 + ';\x20uniform\x20mat3\x20' + _0x107b4a + ';\x20uniform\x20mat3\x20' + _0x90a6fb + _0x29936d(0x53d) + _0x421093 + ';\x20void\x20main(){' + _0x421093 + '=' + _0x271b83 + _0x29936d(0x49f) + _0x90a6fb + '*' + _0x107b4a + _0x29936d(0x239) + _0x4ec640 + _0x29936d(0x367)
              , _0xbf17a5 = _0x29936d(0x4f6) + _0x421093 + _0x29936d(0x5f1) + _0x2c08e4 + _0x29936d(0x741) + _0x3b637e + _0x29936d(0x475) + _0x56af90 + ';\x20uniform\x20vec2\x20' + _0x4c7738 + _0x29936d(0x223) + _0x3b637e + ',\x20' + _0x421093 + '*' + _0x56af90 + '+' + _0x4c7738 + _0x29936d(0x34e) + _0x2c08e4 + _0x29936d(0x525);
            return _0x2e16c3[_0x29936d(0x66b)]['nd'] = function(_0xa93de6, _0x14f2ac, _0xa73739, _0xd21c2d) {
                var _0x50322f = this['nn'][_0x2c08e4];
                _0x50322f[0x0] = _0xa93de6,
                _0x50322f[0x1] = _0x14f2ac,
                _0x50322f[0x2] = _0xa73739,
                _0x50322f[0x3] = _0xd21c2d;
            }
            ,
            _0x2e16c3['prototype']['Hh'] = function(_0x3bd114) {
                this['nn'][_0x3b637e] = _0x3bd114;
            }
            ,
            _0x2e16c3[_0x29936d(0x66b)]['Bg'] = function(_0x5e77e4, _0x578746, _0x45fef8, _0x432ad3) {
                var _0x4d3fa6 = _0x29936d;
                this['_f'][_0x4d3fa6(0x722)]['x'] = _0x5e77e4,
                this['_f'][_0x4d3fa6(0x722)]['y'] = _0x578746,
                this['_f']['scale']['x'] = _0x45fef8,
                this['_f'][_0x4d3fa6(0x760)]['y'] = _0x432ad3;
                var _0x279d89 = this['nn'][_0x56af90];
                _0x279d89[0x0] = _0x45fef8 * 0.2520615384615385,
                _0x279d89[0x1] = _0x432ad3 * 0.4357063736263738;
                var _0x45b439 = this['nn'][_0x4c7738];
                _0x45b439[0x0] = _0x5e77e4 * 0.2520615384615385,
                _0x45b439[0x1] = _0x578746 * 0.4357063736263738;
            }
            ,
            _0x2e16c3;
        }()),
        _0x53b237['bd'] = (function() {
            var _0x3b8920 = _0x5b8a80;
            function _0x1c9824() {
                this['gd'] = new _0x32eec3['k']['s'](),
                this['pn'] = 0x0,
                this['qn'] = 0x0;
            }
            return _0x1c9824[_0x3b8920(0x66b)]['kd'] = function(_0x86a807) {
                var _0x322270 = _0x3b8920;
                this['gd']['texture'] = _0x86a807['nb'](),
                this['gd'][_0x322270(0x31d)][_0x322270(0x170)](_0x86a807['hb'], _0x86a807['ib']),
                this['pn'] = _0x86a807['jb'],
                this['qn'] = _0x86a807['kb'];
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['nd'] = function(_0x4eb282) {
                var _0x50b8b1 = _0x3b8920;
                this['gd']['tint'] = parseInt(_0x4eb282[_0x50b8b1(0x4c6)](0x1), 0x10);
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['Bd'] = function(_0x3a36c3) {
                var _0x35e346 = _0x3b8920;
                this['gd'][_0x35e346(0x612)] = _0x3a36c3 * this['pn'],
                this['gd'][_0x35e346(0x67d)] = _0x3a36c3 * this['qn'];
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['Vd'] = function(_0x3576c0) {
                var _0x50326d = _0x3b8920;
                this['gd'][_0x50326d(0x1e7)] = _0x3576c0;
            }
            ,
            _0x1c9824['prototype']['Ud'] = function(_0x4d7118, _0x8ed7ae) {
                var _0xe3dbfd = _0x3b8920;
                this['gd'][_0xe3dbfd(0x722)]['set'](_0x4d7118, _0x8ed7ae);
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['Td'] = function(_0x447c67) {
                this['gd']['visible'] = _0x447c67;
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['Qd'] = function() {
                var _0xd5d71c = _0x3b8920;
                return this['gd'][_0xd5d71c(0x5b6)];
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['Rj'] = function(_0x362043) {
                var _0x1128d7 = _0x3b8920;
                this['gd'][_0x1128d7(0x626)] = _0x362043;
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['zd'] = function() {
                return this['gd'];
            }
            ,
            _0x1c9824[_0x3b8920(0x66b)]['G'] = function() {
                _0x32eec3['k']['F']['G'](this['gd']);
            }
            ,
            _0x1c9824;
        }()),
        _0x53b237['Ui'] = (function() {
            var _0x5c1cff = _0x5b8a80;
            function _0x1bedb5(_0x14373a) {
                this['Qh'] = _0x14373a,
                this['ki'] = new _0x53b237['Ui']['Ti'](),
                this['cj'] = ![],
                this['bj'] = !![],
                this['Fd'] = ![],
                this['Id'] = 0x0,
                this['rn'] = 0x0,
                this['Lj'] = 0x1,
                this['Ld'] = 0x0,
                this['hi'] = 0x0,
                this['Nd'] = {},
                this['Kd'] = 0x0,
                this['sn'] = new _0x32eec3['j'](_0x893b35 * 0x2),
                this['tn'] = new _0x32eec3['j'](_0x893b35 * 0x2),
                this['Jd'] = new _0x32eec3['j'](_0x893b35 * 0x2),
                this['un'] = null,
                this['vn'] = null,
                this['wn'] = null,
                this['xn']();
            }
            var _0x893b35 = 0xc8;
            return _0x1bedb5[_0x5c1cff(0x66b)]['$i'] = function() {
                this['vn'] != null && _0x32eec3['k']['F']['G'](this['vn']['Yc']),
                this['wn'] != null && _0x32eec3['k']['F']['G'](this['wn']);
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['xn'] = function() {
                this['fj'](0.25),
                this['ki']['Xa'] = '',
                this['bj'] = !![],
                this['Nd'] = {},
                this['Td'](![]);
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['Zi'] = function(_0x38d4b0) {
                this['ki'] = _0x38d4b0,
                this['yn'](this['cj']);
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['Td'] = function(_0x1502ea) {
                var _0x3dd18f = this['cj'];
                this['cj'] = _0x1502ea,
                this['yn'](_0x3dd18f);
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['fj'] = function(_0x4f89b7) {
                this['hi'] = _0x4f89b7 * 0x32;
                var _0x346c5c = _0x4f89b7;
                _0x4f89b7 > this['Qh']['hh'] && (_0x346c5c = _0x3a706a['sa']((_0x4f89b7 - this['Qh']['hh']) / this['Qh']['ih']) * this['Qh']['ih'] + this['Qh']['hh']);
                var _0x287d86 = _0x3a706a['qa'](_0x3a706a['ra'](_0x346c5c * 0x5, 0.707106781186548) * 0x4 + 0x19)
                  , _0x3d6dbb = _0x3a706a['ha'](_0x893b35, _0x3a706a['ia'](0x3, (_0x287d86 - 0x5) * 0x5 + 0x1))
                  , _0x19fde7 = this['Kd'];
                this['Id'] = (0x5 + _0x287d86 * 0.9) * 0.025,
                this['Kd'] = _0x3a706a['_'](_0x3d6dbb),
                this['rn'] = _0x3d6dbb - this['Kd'];
                if (_0x19fde7 > 0x0 && _0x19fde7 < this['Kd']) {
                    var _0x4463e7 = this['sn'][_0x19fde7 * 0x2 - 0x2]
                      , _0x2d3cff = this['sn'][_0x19fde7 * 0x2 - 0x1]
                      , _0x38d233 = this['tn'][_0x19fde7 * 0x2 - 0x2]
                      , _0x30b2ea = this['tn'][_0x19fde7 * 0x2 - 0x1]
                      , _0x45e811 = this['Jd'][_0x19fde7 * 0x2 - 0x2]
                      , _0x24d3ae = this['Jd'][_0x19fde7 * 0x2 - 0x1];
                    for (var _0x464c4e = _0x19fde7; _0x464c4e < this['Kd']; _0x464c4e++) {
                        this['sn'][_0x464c4e * 0x2] = _0x4463e7,
                        this['sn'][_0x464c4e * 0x2 + 0x1] = _0x2d3cff,
                        this['tn'][_0x464c4e * 0x2] = _0x38d233,
                        this['tn'][_0x464c4e * 0x2 + 0x1] = _0x30b2ea,
                        this['Jd'][_0x464c4e * 0x2] = _0x45e811,
                        this['Jd'][_0x464c4e * 0x2 + 0x1] = _0x24d3ae;
                    }
                }
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['kj'] = function(_0x565576, _0x221d64) {
                this['Kd'] = _0x221d64;
                for (var _0x5b3e00 = 0x0; _0x5b3e00 < this['Kd']; _0x5b3e00++) {
                    this['sn'][_0x5b3e00 * 0x2] = this['tn'][_0x5b3e00 * 0x2] = this['Jd'][_0x5b3e00 * 0x2] = _0x565576(),
                    this['sn'][_0x5b3e00 * 0x2 + 0x1] = this['tn'][_0x5b3e00 * 0x2 + 0x1] = this['Jd'][_0x5b3e00 * 0x2 + 0x1] = _0x565576();
                }
            }
            ,
            _0x1bedb5['prototype']['hj'] = function(_0x39829d, _0x8950f3, _0x58d1c4) {
                this['Fd'] = _0x58d1c4;
                for (var _0x29b88d = 0x0; _0x29b88d < this['Kd']; _0x29b88d++) {
                    this['sn'][_0x29b88d * 0x2] = this['tn'][_0x29b88d * 0x2],
                    this['sn'][_0x29b88d * 0x2 + 0x1] = this['tn'][_0x29b88d * 0x2 + 0x1];
                }
                ;var _0x151be7 = _0x39829d - this['tn'][0x0]
                  , _0x3f62f8 = _0x8950f3 - this['tn'][0x1];
                this['zn'](_0x151be7, _0x3f62f8, this['Kd'], this['tn']);
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['zn'] = function(_0x47a8e6, _0xb461b9, _0x1a3ef1, _0x219755) {
                var _0x525667 = _0x3a706a['la'](_0x47a8e6, _0xb461b9);
                if (!(_0x525667 <= 0x0)) {
                    var _0x2e5e5c, _0x3d5303 = _0x219755[0x0];
                    _0x219755[0x0] += _0x47a8e6;
                    var _0x45108f, _0x5c0efa = _0x219755[0x1];
                    _0x219755[0x1] += _0xb461b9;
                    var _0x1cfaad = this['Id'] / (this['Id'] + _0x525667)
                      , _0x546ba6 = 0x1 - _0x1cfaad * 0x2;
                    for (var _0x13f34e = 0x1, _0x5209d9 = _0x1a3ef1 - 0x1; _0x13f34e < _0x5209d9; _0x13f34e++) {
                        _0x2e5e5c = _0x219755[_0x13f34e * 0x2],
                        _0x219755[_0x13f34e * 0x2] = _0x219755[_0x13f34e * 0x2 - 0x2] * _0x546ba6 + (_0x2e5e5c + _0x3d5303) * _0x1cfaad,
                        _0x3d5303 = _0x2e5e5c,
                        _0x45108f = _0x219755[_0x13f34e * 0x2 + 0x1],
                        _0x219755[_0x13f34e * 0x2 + 0x1] = _0x219755[_0x13f34e * 0x2 - 0x1] * _0x546ba6 + (_0x45108f + _0x5c0efa) * _0x1cfaad,
                        _0x5c0efa = _0x45108f;
                    }
                    ;_0x546ba6 = 0x1 - (_0x1cfaad = this['rn'] * this['Id'] / (this['rn'] * this['Id'] + _0x525667)) * 0x2,
                    _0x219755[_0x1a3ef1 * 0x2 - 0x2] = _0x219755[_0x1a3ef1 * 0x2 - 0x4] * _0x546ba6 + (_0x219755[_0x1a3ef1 * 0x2 - 0x2] + _0x3d5303) * _0x1cfaad,
                    _0x219755[_0x1a3ef1 * 0x2 - 0x1] = _0x219755[_0x1a3ef1 * 0x2 - 0x3] * _0x546ba6 + (_0x219755[_0x1a3ef1 * 0x2 - 0x1] + _0x5c0efa) * _0x1cfaad;
                }
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['Oh'] = function() {
                return {
                    '_a': this['Jd'][0x0],
                    'ab': this['Jd'][0x1]
                };
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['dj'] = function(_0x3a4be7, _0x3308d1) {
                var _0x17a993 = 0xf4240
                  , _0x2fb25d = _0x3a4be7
                  , _0x12ceb6 = _0x3308d1;
                for (var _0x3a3447 = 0x0; _0x3a3447 < this['Kd']; _0x3a3447++) {
                    var _0x44ca82 = this['Jd'][_0x3a3447 * 0x2]
                      , _0x3b5a2a = this['Jd'][_0x3a3447 * 0x2 + 0x1]
                      , _0x22454e = _0x3a706a['la'](_0x3a4be7 - _0x44ca82, _0x3308d1 - _0x3b5a2a);
                    _0x22454e < _0x17a993 && (_0x17a993 = _0x22454e,
                    _0x2fb25d = _0x44ca82,
                    _0x12ceb6 = _0x3b5a2a);
                }
                ;return {
                    '_a': _0x2fb25d,
                    'ab': _0x12ceb6,
                    'ej': _0x17a993
                };
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['_i'] = function(_0x13bef2) {
                this['un'] = _0x13bef2;
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['Pj'] = function(_0x4d4a91, _0x314e31) {
                var _0x4f72b0 = _0x5c1cff;
                this['Lj'] = _0x3a706a['ga'](this['Lj'], this['bj'] ? this['Fd'] ? 0.9 + _0x3a706a['pa'](_0x4d4a91 / 0x190 * _0x69e837['T']) * 0.1 : 0x1 : 0x0, _0x314e31, 0x1 / 0x320),
                this['Ld'] = _0x3a706a['ga'](this['Ld'], this['bj'] ? this['Fd'] ? 0x1 : 0x0 : 0x1, _0x314e31, 0.0025),
                this['vn'] != null && (this['vn']['Yc'][_0x4f72b0(0x626)] = this['Lj']),
                this['wn'] != null && (this['wn'][_0x4f72b0(0x626)] = this['Lj']);
            }
            ,
            _0x1bedb5['prototype']['Qj'] = function(_0x4471e6, _0x2abdef, _0xfe1628, _0x46b666) {
                if (this['cj'] && this['bj']) {
                    var _0x3483e5 = _0x3a706a['ra'](0.11112, _0x2abdef / 0x5f);
                    for (var _0x4abbde = 0x0; _0x4abbde < this['Kd']; _0x4abbde++) {
                        var _0x54d549 = _0x3a706a['ka'](this['sn'][_0x4abbde * 0x2], this['tn'][_0x4abbde * 0x2], _0xfe1628)
                          , _0x56c0fc = _0x3a706a['ka'](this['sn'][_0x4abbde * 0x2 + 0x1], this['tn'][_0x4abbde * 0x2 + 0x1], _0xfe1628);
                        this['Jd'][_0x4abbde * 0x2] = _0x3a706a['ka'](_0x54d549, this['Jd'][_0x4abbde * 0x2], _0x3483e5),
                        this['Jd'][_0x4abbde * 0x2 + 0x1] = _0x3a706a['ka'](_0x56c0fc, this['Jd'][_0x4abbde * 0x2 + 0x1], _0x3483e5);
                    }
                }
                ;this['vn'] != null && this['cj'] && this['vn']['Hd'](this, _0x4471e6, _0x2abdef, _0x46b666),
                this['wn'] != null && (this['wn']['Rh']['x'] = this['Jd'][0x0],
                this['wn']['Rh']['y'] = this['Jd'][0x1] - this['Id'] * 0x3);
            }
            ,
            _0x1bedb5[_0x5c1cff(0x66b)]['yn'] = function(_0x15dc29) {
                this['cj'] ? !_0x15dc29 && this['An']() : (this['vn'] != null && _0x32eec3['k']['F']['G'](this['vn']['Yc']),
                this['wn'] != null && _0x32eec3['k']['F']['G'](this['wn']));
            }
            ,
            _0x1bedb5['prototype']['An'] = function() {
                var _0x457012 = _0x5c1cff;
                this['vn'] == null ? this['vn'] = new _0x53b237['Xc']() : _0x32eec3['k']['F']['G'](this['vn']['Yc']);
                this['vn']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Tb'](this['ki']['ni']), ooo['ud']['Cc']()['Vb'](this['ki']['Vi']), ooo['ud']['Cc']()['Wb'](this['ki']['Wi']), ooo['ud']['Cc']()['Xb'](this['ki']['Xi']), ooo['ud']['Cc']()['Yb'](this['ki']['Yi']), '#ffffff');
                this['wn'] == null ? (this['wn'] = new _0x53b237['Bn'](''),
                this['wn'][_0x457012(0x75d)][_0x457012(0x2ca)] = _0x457012(0x708),
                this['wn'][_0x457012(0x31d)][_0x457012(0x170)](0.5)) : _0x32eec3['k']['F']['G'](this['wn']);
                this['wn']['style'][_0x457012(0x265)] = 0xe,
                this['wn']['style'][_0x457012(0x77f)] = ooo['ud']['Cc']()['Tb'](this['ki']['ni'])['cc'],
                this['wn'][_0x457012(0x159)] = this['ki']['Xa'],
                this['un']['Xh'](this['ki']['Je'], this['vn'], this['wn']);
                if (_0x38c4fe['n'] != null && _0x38c4fe['n']['Je'] == this['ki']['Je']) {
                    _0x38c4fe['vj'] = this['wn'];
                    let _0x3010fe = _0x444d21['sg'][_0x457012(0x68a)](_0x38c4fe['n']['ni']);
                    _0x3010fe == -0x1 ? _0x444d21['ig'] != -0x1 && (_0x444d21['ig'] = -0x1) : (_0x444d21['ig'] = _0x444d21['gg'][_0x3010fe]['s'],
                    _0x444d21['re'] = ![],
                    _0x42c310());
                }
            }
            ,
            _0x1bedb5['Ti'] = function _0x51f679() {
                this['Je'] = 0x0,
                this['mi'] = _0x53b237['dh']['jh'],
                this['ni'] = 0x0,
                this['Vi'] = 0x0,
                this['Wi'] = 0x0,
                this['Xi'] = 0x0,
                this['Yi'] = 0x0,
                this['Xa'] = '';
            }
            ,
            _0x1bedb5;
        }()),
        _0x53b237['Bn'] = _0x3a706a['ca'](_0x32eec3['k']['t'], function(_0x44b32d, _0x1d755c, _0x3962ce) {
            var _0x1b3e5b = _0x5b8a80;
            _0x32eec3['k']['t'][_0x1b3e5b(0x45d)](this, _0x44b32d, _0x1d755c, _0x3962ce),
            this['Rh'] = {
                'x': 0x0,
                'y': 0x0
            };
        }),
        _0x53b237['Sb'] = (function() {
            var _0x526d85 = _0x5b8a80;
            function _0x4d5b55(_0x597223, _0x4e2f02, _0x3b9c82, _0x5de944, _0x59d726) {
                this['Tj'] = _0x597223,
                this['Uj'] = _0x4e2f02,
                this['Vj'] = _0x3b9c82,
                this['Wj'] = _0x5de944,
                this['Xj'] = _0x59d726;
            }
            return _0x4d5b55[_0x526d85(0x66b)]['Cn'] = function(_0x21bfaf) {
                return new _0x4d5b55(_0x21bfaf,this['Uj'],this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x4d5b55['prototype']['Dn'] = function(_0x5f41dd) {
                return new _0x4d5b55(this['Tj'],_0x5f41dd,this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x4d5b55['prototype']['En'] = function(_0x3f25e2) {
                return new _0x4d5b55(this['Tj'],this['Uj'],_0x3f25e2,this['Wj'],this['Xj']);
            }
            ,
            _0x4d5b55['prototype']['Fn'] = function(_0x5ccd5a) {
                return new _0x4d5b55(this['Tj'],this['Uj'],this['Vj'],_0x5ccd5a,this['Xj']);
            }
            ,
            _0x4d5b55[_0x526d85(0x66b)]['Gn'] = function(_0x209630) {
                return new _0x4d5b55(this['Tj'],this['Uj'],this['Vj'],this['Wj'],_0x209630);
            }
            ,
            _0x4d5b55;
        }()),
        _0x53b237['Bm'] = (function() {
            var _0x43d1a9 = _0x5b8a80;
            function _0x174f14(_0x1ec778) {
                var _0x32f49e = _0x1792;
                this['Hn'] = new _0x53b237['Xc'](),
                this['Hn']['Yc'][_0x32f49e(0x175)](this['Hn']['Zc']),
                this['In'] = null,
                this['Jn'] = null,
                this['Jm'] = _0x1ec778,
                this['$c'] = 0x0,
                this['mj'] = 0x1,
                this['Kn'] = 0x1,
                this['Ln'] = 0x1,
                this['Mn'] = 0x1,
                this['Nn'] = 0x1,
                this['On'] = 0x1,
                this['Pn'] = 0x1,
                this['Hm'](_0x32f49e(0x34b));
            }
            var _0x3f3bf1 = new _0x53b237['Sb'](0x0,0x0,0x0,0x0,0x0);
            return _0x174f14['prototype']['ag'] = function() {
                return this['Hn']['Yc'];
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Cm'] = function(_0x37d572) {
                var _0x570f0f = _0x43d1a9;
                this['$c'] = _0x37d572;
                if (this['Hn']['$c'] !== _0x37d572) {
                    for (var _0x22687b = _0x37d572; _0x22687b < this['Hn']['_c']['length']; _0x22687b++) {
                        this['Hn']['_c'][_0x22687b]['Cd']();
                    }
                    ;while (this['Hn']['$c'] > _0x37d572) {
                        this['Hn']['$c'] -= 0x1;
                        var _0x3efcd2 = this['Hn']['_c'][this['Hn']['$c']];
                        _0x3efcd2['md']['G'](),
                        _0x3efcd2['ld']['G']();
                    }
                    ;while (this['Hn']['$c'] < _0x37d572) {
                        var _0x515fca = this['Hn']['_c'][this['Hn']['$c']];
                        this['Hn']['$c'] += 0x1,
                        this['Hn']['Yc'][_0x570f0f(0x175)](_0x515fca['ld']['zd']()),
                        this['Hn']['Yc']['addChild'](_0x515fca['md']['zd']()),
                        _0x515fca['ld']['Rj'](this['Kn']),
                        _0x515fca['md']['Rj'](this['Ln']);
                    }
                    ;for (var _0x3c82a4 = 0x0; _0x3c82a4 < this['Hn']['Zc']['od'][_0x570f0f(0x60c)]; _0x3c82a4++) {
                        this['Hn']['Zc']['od'][_0x3c82a4]['Rj'](this['Mn']);
                    }
                    ;for (var _0x290f56 = 0x0; _0x290f56 < this['Hn']['Zc']['pd'][_0x570f0f(0x60c)]; _0x290f56++) {
                        this['Hn']['Zc']['pd'][_0x290f56]['Rj'](this['Nn']);
                    }
                    ;for (var _0x4c641f = 0x0; _0x4c641f < this['Hn']['Zc']['rd'][_0x570f0f(0x60c)]; _0x4c641f++) {
                        this['Hn']['Zc']['rd'][_0x4c641f]['Rj'](this['On']);
                    }
                    ;for (var _0x30c9f4 = 0x0; _0x30c9f4 < this['Hn']['Zc']['qd'][_0x570f0f(0x60c)]; _0x30c9f4++) {
                        this['Hn']['Zc']['qd'][_0x30c9f4]['Rj'](this['Pn']);
                    }
                }
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Im'] = function() {
                return this['$c'];
            }
            ,
            _0x174f14['prototype']['Gm'] = function(_0x2ef97a) {
                var _0x379869 = _0x43d1a9;
                this['In'] = _0x2ef97a,
                this['Jn'] = _0x379869(0x34b),
                this['Tm']();
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Hm'] = function(_0x3c8663) {
                this['In'] = _0x3f3bf1,
                this['Jn'] = _0x3c8663,
                this['Tm']();
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Tm'] = function() {
                this['Hn']['hd'](_0x53b237['jd']['ch'], null, ooo['ud']['Cc']()['Tb'](this['In']['Tj']), ooo['ud']['Cc']()['Vb'](this['In']['Uj']), ooo['ud']['Cc']()['Wb'](this['In']['Vj']), ooo['ud']['Cc']()['Xb'](this['In']['Xj']), ooo['ud']['Cc']()['Yb'](this['In']['Wj']), this['Jn']);
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Dm'] = function(_0x5423a6) {
                this['mj'] = _0x5423a6;
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Km'] = function() {
                return this['mj'];
            }
            ,
            _0x174f14['prototype']['Wm'] = function(_0x5b7332, _0xf6c421) {
                this['Kn'] = _0x5b7332,
                this['Ln'] = _0xf6c421;
                for (var _0x3587bf = 0x0; _0x3587bf < this['$c']; _0x3587bf++) {
                    var _0x1f84a8 = this['Hn']['_c'][_0x3587bf];
                    _0x1f84a8['ld']['Rj'](this['Kn']),
                    _0x1f84a8['md']['Rj'](this['Ln']);
                }
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Zm'] = function(_0x4cd4c4, _0x111495, _0x19ad6b, _0x8ce1c) {
                var _0x1e729a = _0x43d1a9;
                this['Mn'] = _0x4cd4c4,
                this['Nn'] = _0x111495,
                this['On'] = _0x19ad6b,
                this['Pn'] = _0x8ce1c;
                for (var _0x52192a = 0x0; _0x52192a < this['Hn']['Zc']['od'][_0x1e729a(0x60c)]; _0x52192a++) {
                    this['Hn']['Zc']['od'][_0x52192a]['Rj'](this['Mn']);
                }
                ;for (var _0x1d8cb9 = 0x0; _0x1d8cb9 < this['Hn']['Zc']['pd']['length']; _0x1d8cb9++) {
                    this['Hn']['Zc']['pd'][_0x1d8cb9]['Rj'](this['Nn']);
                }
                ;for (var _0x4858b8 = 0x0; _0x4858b8 < this['Hn']['Zc']['rd'][_0x1e729a(0x60c)]; _0x4858b8++) {
                    this['Hn']['Zc']['rd'][_0x4858b8]['Rj'](this['On']);
                }
                ;for (var _0xc17562 = 0x0; _0xc17562 < this['Hn']['Zc']['qd'][_0x1e729a(0x60c)]; _0xc17562++) {
                    this['Hn']['Zc']['qd'][_0xc17562]['Rj'](this['Pn']);
                }
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['Bg'] = function() {
                var _0x58f08a = this['mj'] * 0x2
                  , _0x2943bc = this['mj'] * 0x2 * 1.5;
                if (this['$c'] > 0x0) {
                    var _0x38fef1 = this['Jm'][0x0]
                      , _0x4511bc = this['Jm'][0x1]
                      , _0x49e430 = this['Jm'][0x2];
                    this['Hn']['_c'][0x0]['Ad'](_0x38fef1, _0x4511bc, _0x58f08a, _0x2943bc, _0x49e430),
                    this['Hn']['Zc']['Ad'](_0x38fef1, _0x4511bc, _0x58f08a, _0x49e430);
                }
                ;for (var _0x177b9a = 0x1; _0x177b9a < this['$c']; _0x177b9a++) {
                    var _0x2d6666 = this['Jm'][_0x177b9a * 0x3]
                      , _0x1cde6b = this['Jm'][_0x177b9a * 0x3 + 0x1]
                      , _0x2f3710 = this['Jm'][_0x177b9a * 0x3 + 0x2];
                    this['Hn']['_c'][_0x177b9a]['Ad'](_0x2d6666, _0x1cde6b, _0x58f08a, _0x2943bc, _0x2f3710);
                }
            }
            ,
            _0x174f14[_0x43d1a9(0x66b)]['_m'] = function(_0x3f926b) {
                var _0x542714 = _0x43d1a9;
                _0x3f926b[_0x542714(0x23e)](this['Hn']['Yc']);
            }
            ,
            _0x174f14;
        }()),
        _0x53b237['Uf'] = (function() {
            var _0x2a52e5 = _0x5b8a80;
            function _0x3a11a4(_0x2f3c91) {
                this['Wd'] = _0x2f3c91;
            }
            return _0x3a11a4['Tf'] = $(_0x2a52e5(0x331)),
            _0x3a11a4['Qn'] = $('#stretch-box'),
            _0x3a11a4['Rn'] = $(_0x2a52e5(0x306)),
            _0x3a11a4['Sn'] = $(_0x2a52e5(0x208)),
            _0x3a11a4['Tn'] = $(_0x2a52e5(0x3c7)),
            _0x3a11a4['Un'] = $('#results-view'),
            _0x3a11a4['Vn'] = $('#main-menu-view'),
            _0x3a11a4['Wn'] = $('#popup-view'),
            _0x3a11a4['Xn'] = $(_0x2a52e5(0x22d)),
            _0x3a11a4['Yn'] = $(_0x2a52e5(0x3fd)),
            _0x3a11a4['Zn'] = $(_0x2a52e5(0x37d)),
            _0x3a11a4['$n'] = $('#error-gateway-connection-view'),
            _0x3a11a4['_n'] = $(_0x2a52e5(0x5cc)),
            _0x3a11a4[_0x2a52e5(0x66b)]['Sa'] = function() {}
            ,
            _0x3a11a4[_0x2a52e5(0x66b)]['ml'] = function() {}
            ,
            _0x3a11a4['prototype']['nl'] = function() {}
            ,
            _0x3a11a4[_0x2a52e5(0x66b)]['hl'] = function() {}
            ,
            _0x3a11a4[_0x2a52e5(0x66b)]['qg'] = function() {}
            ,
            _0x3a11a4[_0x2a52e5(0x66b)]['ug'] = function(_0x65fda2, _0x1a2fc9) {}
            ,
            _0x3a11a4;
        }()),
        _0x271958 = $(_0x5b8a80(0x129)),
        _0x43791c = $(_0x5b8a80(0x721)),
        _0x3e7229 = $('#congrats-bg'),
        _0x5dfc04 = $(_0x5b8a80(0x2a1)),
        _0x528de9 = $('#final-share-fb'),
        _0x5c49e0 = $('#final-message'),
        _0xa9c614 = $('#final-score'),
        _0x2b4a75 = $(_0x5b8a80(0x646)),
        _0x5164a7 = $(_0x5b8a80(0x322)),
        _0x3b2000 = $(_0x5b8a80(0x60e)),
        (_0x54d2dc = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            var _0x2360ae = _0x5b8a80;
            _0x53b237['Uf'][_0x2360ae(0x45d)](this, _0x53b237['ll']['ao']);
            var _0x45b66f = this
              , _0x381d83 = _0x3b2000['get']()[0x0];
            _0x528de9[_0x2360ae(0x53f)](_0x69e837['co']['bo']),
            _0x271958[_0x2360ae(0x159)](_0x3a706a['U']('index.game.result.title')),
            _0x43791c[_0x2360ae(0x159)](_0x3a706a['U'](_0x2360ae(0x42c))),
            _0x43791c[_0x2360ae(0x26f)]('Continue\x20(Home)'),
            _0x43791c[_0x2360ae(0x29a)]('<div\x20id=\x27final-replay\x27>Replay</div>'),
            _0x43791c[_0x2360ae(0x335)](function() {
                ooo['ij']['if'](),
                _0x69e837['co']['do']['Va'](),
                ooo['ij']['Ye'](_0x53b237['Pe']['Se']['Jf']),
                ooo['Xg']['gl'](ooo['Xg']['Jf']);
            }),
            $('#final-replay')[_0x2360ae(0x335)](function() {
                ooo['ij']['if'](),
                ooo['to']();
            }),
            $(_0x2360ae(0x26f))[_0x2360ae(0x69d)](function(_0x3a6a3c) {
                var _0xa30495 = _0x2360ae;
                (_0x3a6a3c[_0xa30495(0x36c)] !== 0x11 || !(_0x444d21['ctrl'] = !![])) && (_0x3a6a3c[_0xa30495(0x36c)] !== 0x11 && (_0x444d21[_0xa30495(0x14e)] = ![]));
                _0x3a6a3c[_0xa30495(0x36c)] === 0x20 && (_0x45b66f['eo'] = !![]);
                _0x3a6a3c[_0xa30495(0x36c)] === 0x31 && _0x2f0bd4();
                if (_0x3a6a3c[_0xa30495(0x36c)] === 0x32) {
                    if (_0x38c4fe['on'] && _0x444d21['s']) {
                        if (_0x444d21[_0xa30495(0x58b)] && _0x444d21['selectedHats'][_0xa30495(0x60c)] > 0x0) {
                            _0x444d21[_0xa30495(0x246)] = (_0x444d21[_0xa30495(0x246)] + 0x1) % _0x444d21['selectedHats'][_0xa30495(0x60c)];
                            let _0x4898d0 = _0x444d21[_0xa30495(0x58b)][_0x444d21[_0xa30495(0x246)]];
                            _0xe62b56(_0x4898d0),
                            localStorage[_0xa30495(0x128)](_0xa30495(0x432), JSON[_0xa30495(0x608)](_0x444d21));
                        }
                    }
                }
            })[_0x2360ae(0x1f5)](function(_0x14302f) {
                var _0x24a663 = _0x2360ae;
                _0x444d21[_0x24a663(0x14e)] = ![];
                _0x38c4fe['on'] && _0x444d21['s'] && (_0x14302f[_0x24a663(0x36c)] == 0x51 || _0x14302f[_0x24a663(0x36c)] == 0x57 ? (_0x14302f['keyCode'] == 0x51 && (_0xa85e3[_0x24a663(0x310)] = _0x20e263,
                _0x9f96af['texture'] = _0x3a3827,
                _0xa85e3[_0x24a663(0x626)] = 0x1,
                _0x9f96af[_0x24a663(0x626)] = 0.25,
                _0x43c09a()),
                _0x14302f[_0x24a663(0x36c)] == 0x57 && (_0x9f96af[_0x24a663(0x310)] = _0x9553a6,
                _0xa85e3[_0x24a663(0x310)] = _0x4db385,
                _0xa85e3[_0x24a663(0x626)] = 0.25,
                _0x9f96af[_0x24a663(0x626)] = 0x1,
                _0x348c9b())) : (_0x9f96af[_0x24a663(0x310)] = _0x3a3827,
                _0xa85e3[_0x24a663(0x310)] = _0x4db385,
                _0x9f96af[_0x24a663(0x626)] = 0.25,
                _0xa85e3[_0x24a663(0x626)] = 0.25,
                _0x4c5f33 = ![],
                _0x41af32 = 0x37,
                _0x280ab2 = 0x1,
                _0x428de2 = !![],
                clearInterval(_0x83e7a4),
                _0x83e7a4 = null),
                _0x14302f[_0x24a663(0x36c)] == 0x5a && (_0x444d21['z'] == 0x1 ? (_0x444d21['h'] ? _0x444d21['z'] = 1.6 : _0x444d21['z'] = 1.2,
                _0x31aef3[_0x24a663(0x310)] = _0xa77f29,
                _0x31aef3[_0x24a663(0x626)] = 0x1) : (_0x444d21['z'] = 0x1,
                _0x31aef3[_0x24a663(0x310)] = _0x58d665,
                _0x31aef3[_0x24a663(0x626)] = 0.25)),
                _0x444d21['hz'] && !_0x444d21[_0x24a663(0x62b)] && (_0x14302f[_0x24a663(0x36c)] == 0xbc && _0x444d21['z'] >= 0.2 && (_0x444d21['z'] = _0x444d21['z'] - 0.1),
                _0x14302f[_0x24a663(0x36c)] == 0xbe && _0x444d21['z'] <= 0x19 && (_0x444d21['z'] = _0x444d21['z'] + 0.1)));
                if (_0x38c4fe['on'] && _0x14302f[_0x24a663(0x36c)] == 0x52) {
                    !window[_0x24a663(0x546)] && (window[_0x24a663(0x546)] = 0x0);
                    const _0x3674a3 = new Date()[_0x24a663(0x6a8)]()
                      , _0x3dd320 = _0x3674a3 - window['lastRespawnTime'];
                    if (_0x3dd320 < 0x3e8) {
                        console[_0x24a663(0x680)](_0x24a663(0x1db));
                        return;
                    }
                    window[_0x24a663(0x546)] = _0x3674a3;
                    _0x444d21['pi'] && _0x444d21['pn'] && ($(_0x24a663(0x488))[_0x24a663(0x410)](_0x444d21['pi']),
                    $(_0x24a663(0x69c))[_0x24a663(0x410)](_0x444d21['pn']),
                    $('#port_id')[_0x24a663(0x410)]($('#port_id_s')['val']()),
                    $(_0x24a663(0x3d5))[_0x24a663(0x410)]($(_0x24a663(0x69c))[_0x24a663(0x410)]()));
                    _0x444d21['r1'] = !![];
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['uj'] === _0x24a663(0x2a8)) {
                            ooo['Mh']['uj'](),
                            setTimeout(function() {
                                var _0x2dd646 = _0x24a663;
                                document[_0x2dd646(0x374)](_0x2dd646(0x6c9))[_0x2dd646(0x335)]();
                            }, 0x12c);
                            return;
                        }
                    } catch (_0x437226) {
                        console['log']('فشل\x20في\x20تنفيذ\x20دالة\x20الموت\x20الطبيعية');
                    }
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['gr'] === _0x24a663(0x2a8))
                            ooo['Mh']['gr']();
                        else {
                            if (ooo['Mh'] && ooo['Mh']['Rq']) {
                                try {
                                    ooo['Mh']['go'] = 0x3;
                                } catch (_0x50316e) {}
                                ooo['Mh']['Rq'][_0x24a663(0x5ae)]();
                            }
                        }
                        setTimeout(function() {
                            var _0x3a5e34 = _0x24a663;
                            try {
                                const _0x426051 = document[_0x3a5e34(0x717)](_0x3a5e34(0x57e));
                                _0x426051[_0x3a5e34(0x58d)](_0x5bd21e => {
                                    var _0x34a16e = _0x3a5e34;
                                    try {
                                        _0x5bd21e['style'][_0x34a16e(0x157)] = 'none';
                                    } catch (_0x3f053f) {}
                                }
                                );
                            } catch (_0x4a16d9) {}
                            document['getElementById']('mm-action-play')[_0x3a5e34(0x335)]();
                        }, 0x15e);
                    } catch (_0x53d3f6) {
                        console[_0x24a663(0x680)]('خطأ\x20في\x20عملية\x20الرسبون:', _0x53d3f6),
                        document[_0x24a663(0x374)](_0x24a663(0x6c9))['click']();
                    }
                }
                _0x38c4fe['on'] && _0x14302f[_0x24a663(0x36c)] == 0x38 && (document[_0x24a663(0x374)]('settings-show-names-switch')['click'](),
                _0x444d21['sn'] ? _0x444d21['sn'] = ![] : _0x444d21['sn'] = !![]),
                _0x14302f[_0x24a663(0x36c)] === 0x20 && (_0x45b66f['eo'] = ![]);
            }),
            _0x381d83[_0x2360ae(0x57a)]('touchmove', function(_0xd5e5a2) {
                var _0x4298f1 = _0x2360ae;
                if (_0x38c4fe['on'] && _0x444d21[_0x4298f1(0x62b)] && _0x444d21['mo'] != 0x6 && _0x444d21['s']) {
                    var _0x17c0db = btoa(_0x444d21[_0x4298f1(0x207)]);
                    if (_0x444d21[_0x4298f1(0x568)]['x'] != -0x1 && _0x444d21['mo1']['y'] == -0x1 && btoa(_0x17c0db) == _0x444d21['d_1'] || _0x444d21['mo2']['x'] == -0x1 && _0x444d21[_0x4298f1(0x31b)]['y'] != -0x1 && btoa(_0x17c0db) == _0x444d21[_0x4298f1(0x245)]) {
                        var _0x416c1a = ooo['Xg']['Kf']['Wg']['Ah']
                          , _0x1a176c = _0x381d83['offsetHeight']
                          , _0x3c99e7 = _0x381d83[_0x4298f1(0x284)]
                          , _0x414ac7 = _0x1a176c * 0.5
                          , _0x237d5b = _0x3c99e7 * 0.5
                          , _0x441f90 = btoa(_0x444d21[_0x4298f1(0x33b)]);
                        for (let _0x365c6b = 0x0; _0x365c6b < _0xd5e5a2[_0x4298f1(0x2c5)][_0x4298f1(0x60c)]; _0x365c6b++) {
                            var _0x564ee5 = _0xd5e5a2[_0x4298f1(0x2c5)][_0x365c6b]['pageX']
                              , _0x6592 = _0xd5e5a2[_0x4298f1(0x2c5)][_0x365c6b][_0x4298f1(0x64a)]
                              , _0xdfdee8 = _0xd5e5a2[_0x4298f1(0x2c5)][_0x365c6b][_0x4298f1(0x3fe)];
                            _0x444d21['mo'] == 0x1 && btoa(_0x441f90) == _0x444d21['d_2'] && (_0x1a176c *= 0.5,
                            _0x3c99e7 *= 0.5);
                            _0x444d21['mo'] == 0x2 && btoa(_0x441f90) == _0x444d21[_0x4298f1(0x2b5)] && (_0x1a176c = _0x416c1a[_0x4298f1(0x252)]['y'] + 0x6e,
                            _0x3c99e7 = _0x416c1a['img_o_2']['x'] + 0x6e);
                            _0x444d21['mo'] == 0x3 && btoa(_0x441f90) == _0x444d21[_0x4298f1(0x2b5)] && (_0x1a176c = _0x416c1a[_0x4298f1(0x37f)]['y'] + 0x6e,
                            _0x3c99e7 = _0x416c1a['img_o_3']['x'] + 0x6e);
                            (_0x444d21['mo'] == 0x4 && btoa(_0x441f90) == _0x444d21['d_2'] || _0x444d21['mo'] == 0x5 && btoa(_0x441f90) == _0x444d21[_0x4298f1(0x2b5)]) && (_0x1a176c = _0x416c1a[_0x4298f1(0x262)]['y'] + 0x6e,
                            _0x3c99e7 = _0x416c1a[_0x4298f1(0x262)]['x'] + 0x6e);
                            var _0x12bdb0 = btoa(_0x444d21['c_5'])
                              , _0x1a0c9c = Math[_0x4298f1(0x45a)](_0x6592 - _0x1a176c, _0x564ee5 - _0x3c99e7)
                              , _0x4ff4be = Math[_0x4298f1(0x4d0)](_0x1a0c9c)
                              , _0x22b1d3 = Math[_0x4298f1(0x15b)](_0x1a0c9c)
                              , _0x2b0a9e = btoa(_0x444d21[_0x4298f1(0x4dd)])
                              , _0x2a920c = _0x444d21[_0x4298f1(0x568)]['x'] == _0xdfdee8;
                            btoa(_0x444d21[_0x4298f1(0x678)]);
                            if (_0x2a920c && btoa(_0x2b0a9e) == _0x444d21['d_4']) {
                                if (_0x564ee5 <= 0x0 || _0x6592 <= 0x0)
                                    _0x444d21[_0x4298f1(0x568)]['x'] = -0x1,
                                    _0x444d21['mo'] == 0x1 && (_0x416c1a[_0x4298f1(0x137)][_0x4298f1(0x626)] = 0.25),
                                    _0x444d21['mo'] == 0x2 && (_0x416c1a['img_o_2'][_0x4298f1(0x626)] = 0.25,
                                    _0x416c1a[_0x4298f1(0x38c)][_0x4298f1(0x626)] = 0.25,
                                    _0x416c1a[_0x4298f1(0x551)][_0x4298f1(0x626)] = 0.25),
                                    _0x444d21['mo'] == 0x3 && (_0x416c1a['img_o_3'][_0x4298f1(0x626)] = 0.25,
                                    _0x416c1a[_0x4298f1(0x55c)][_0x4298f1(0x626)] = 0.25,
                                    _0x416c1a[_0x4298f1(0x203)][_0x4298f1(0x626)] = 0.25),
                                    (_0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x416c1a[_0x4298f1(0x551)][_0x4298f1(0x626)] = 0.25);
                                else {
                                    _0x45b66f['fo'] = _0x1a0c9c;
                                    var _0x3bc974 = 0x32;
                                    (_0x444d21['mo'] == 0x1 || _0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x3bc974 = 0x6e);
                                    var _0x2a8577 = _0x3c99e7 - _0x564ee5
                                      , _0x15b4e7 = _0x1a176c - _0x6592
                                      , _0x40503d = Math[_0x4298f1(0x33f)](_0x2a8577 * _0x2a8577 + _0x15b4e7 * _0x15b4e7)
                                      , _0x2bc416 = _0x237d5b + _0x40503d * _0x4ff4be - 0x44
                                      , _0x368f4a = _0x414ac7 + _0x40503d * _0x22b1d3 - 0x44
                                      , _0x586c04 = _0x237d5b + _0x3bc974 * _0x4ff4be - 0x44
                                      , _0x277ec2 = _0x414ac7 + _0x3bc974 * _0x22b1d3 - 0x44
                                      , _0x5d441e = _0x237d5b + _0x4ff4be * 0x4b - 0x44
                                      , _0x3c48c5 = _0x414ac7 + _0x22b1d3 * 0x4b - 0x44
                                      , _0x43b79e = _0x564ee5 - 0x55
                                      , _0x2c9875 = _0x6592 - 0x55
                                      , _0x2796e7 = _0x3c99e7 + _0x3bc974 * _0x4ff4be - 0x55
                                      , _0x60e545 = _0x1a176c + _0x3bc974 * _0x22b1d3 - 0x55
                                      , _0x47d225 = _0x3c99e7 + _0x4ff4be * 0x3 - 0x6e
                                      , _0x4f15e3 = _0x1a176c + _0x22b1d3 * 0x3 - 0x6e;
                                    _0x40503d < _0x3bc974 ? (_0x444d21[_0x4298f1(0x31b)]['x'] == -0x1 && _0x444d21[_0x4298f1(0x31b)]['y'] != -0x1 ? (_0x416c1a[_0x4298f1(0x648)]['x'] = _0x2bc416,
                                    _0x416c1a['img_pf_1']['y'] = _0x368f4a) : (_0x444d21['mo'] == 0x1 && (_0x416c1a[_0x4298f1(0x137)]['x'] = _0x2bc416,
                                    _0x416c1a['img_p_1']['y'] = _0x368f4a),
                                    (_0x444d21['mo'] == 0x2 || _0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x416c1a[_0x4298f1(0x551)]['x'] = _0x2bc416,
                                    _0x416c1a['img_p_2']['y'] = _0x368f4a),
                                    _0x444d21['mo'] == 0x3 && (_0x416c1a[_0x4298f1(0x203)]['x'] = _0x2bc416,
                                    _0x416c1a[_0x4298f1(0x203)]['y'] = _0x368f4a)),
                                    _0x444d21['mo'] == 0x2 && (_0x416c1a['img_i_2']['y'] = _0x2c9875,
                                    _0x416c1a['img_i_2']['x'] = _0x43b79e),
                                    _0x444d21['mo'] == 0x3 && (_0x416c1a[_0x4298f1(0x55c)]['y'] = _0x2c9875,
                                    _0x416c1a[_0x4298f1(0x55c)]['x'] = _0x43b79e)) : (_0x444d21[_0x4298f1(0x31b)]['x'] == -0x1 && _0x444d21[_0x4298f1(0x31b)]['y'] != -0x1 ? (_0x416c1a[_0x4298f1(0x648)]['x'] = _0x586c04,
                                    _0x416c1a[_0x4298f1(0x648)]['y'] = _0x277ec2,
                                    (_0x444d21['mo'] == 0x2 || _0x444d21['mo'] == 0x3) && (_0x40503d < 0x4b ? (_0x416c1a['img_pf_1']['x'] = _0x2bc416,
                                    _0x416c1a[_0x4298f1(0x648)]['y'] = _0x368f4a) : (_0x416c1a[_0x4298f1(0x648)]['x'] = _0x5d441e,
                                    _0x416c1a[_0x4298f1(0x648)]['y'] = _0x3c48c5))) : (_0x444d21['mo'] == 0x1 && (_0x416c1a[_0x4298f1(0x137)]['x'] = _0x586c04,
                                    _0x416c1a[_0x4298f1(0x137)]['y'] = _0x277ec2),
                                    (_0x444d21['mo'] == 0x2 || _0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x416c1a[_0x4298f1(0x551)]['x'] = _0x586c04,
                                    _0x416c1a[_0x4298f1(0x551)]['y'] = _0x277ec2,
                                    _0x444d21['mo'] == 0x2 && (_0x40503d < 0x4b ? (_0x416c1a['img_p_2']['x'] = _0x2bc416,
                                    _0x416c1a[_0x4298f1(0x551)]['y'] = _0x368f4a) : (_0x416c1a[_0x4298f1(0x551)]['x'] = _0x5d441e,
                                    _0x416c1a['img_p_2']['y'] = _0x3c48c5))),
                                    _0x444d21['mo'] == 0x3 && (_0x40503d < 0x4b ? (_0x416c1a['img_p_3']['x'] = _0x2bc416,
                                    _0x416c1a[_0x4298f1(0x203)]['y'] = _0x368f4a) : (_0x416c1a[_0x4298f1(0x203)]['x'] = _0x5d441e,
                                    _0x416c1a['img_p_3']['y'] = _0x3c48c5))),
                                    _0x444d21['mo'] == 0x2 && (_0x416c1a['img_i_2']['y'] = _0x60e545,
                                    _0x416c1a['img_i_2']['x'] = _0x2796e7),
                                    _0x444d21['mo'] == 0x3 && (_0x416c1a[_0x4298f1(0x55c)]['y'] = _0x60e545,
                                    _0x416c1a[_0x4298f1(0x55c)]['x'] = _0x2796e7,
                                    _0x416c1a[_0x4298f1(0x37f)]['y'] = _0x4f15e3,
                                    _0x416c1a[_0x4298f1(0x37f)]['x'] = _0x47d225));
                                }
                            } else {
                                if ((_0x2a920c = _0x444d21[_0x4298f1(0x31b)]['y'] == _0xdfdee8) && btoa(_0x12bdb0) == _0x444d21[_0x4298f1(0x6b0)]) {
                                    if (_0x564ee5 <= 0x0 || _0x6592 <= 0x0)
                                        _0x444d21[_0x4298f1(0x31b)]['y'] = -0x1,
                                        _0x416c1a[_0x4298f1(0x16e)][_0x4298f1(0x5b6)] = ![],
                                        _0x416c1a['img_pf_1']['visible'] = ![],
                                        _0x444d21['mo'] == 0x1 && (_0x416c1a[_0x4298f1(0x137)][_0x4298f1(0x5b6)] = !![]),
                                        (_0x444d21['mo'] == 0x2 || _0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x416c1a[_0x4298f1(0x551)]['visible'] = !![]),
                                        _0x444d21['mo'] == 0x3 && (_0x416c1a[_0x4298f1(0x203)][_0x4298f1(0x5b6)] = !![]),
                                        (_0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x416c1a[_0x4298f1(0x16e)]['visible'] = !![]),
                                        _0x45b66f['eo'] = ![];
                                    else {
                                        if (_0x444d21['mo'] == 0x3) {
                                            _0x4ff4be = Math[_0x4298f1(0x4d0)](_0x1a0c9c = Math[_0x4298f1(0x45a)](_0x6592 - (_0x1a176c = _0x416c1a[_0x4298f1(0x16e)]['y'] + 0x64), _0x564ee5 - (_0x3c99e7 = _0x416c1a['img_f']['x'] + 0x64))),
                                            _0x22b1d3 = Math[_0x4298f1(0x15b)](_0x1a0c9c);
                                            var _0x43b79e = _0x3c99e7 + _0x4ff4be * 0x3 - 0x64
                                              , _0x2c9875 = _0x1a176c + _0x22b1d3 * 0x3 - 0x64
                                              , _0x2a8577 = _0x3c99e7 - _0x564ee5
                                              , _0x15b4e7 = _0x1a176c - _0x6592
                                              , _0x40503d = Math['sqrt'](_0x2a8577 * _0x2a8577 + _0x15b4e7 * _0x15b4e7);
                                            _0x40503d >= 0x28 && (_0x416c1a[_0x4298f1(0x16e)]['y'] = _0x43b79e,
                                            _0x416c1a[_0x4298f1(0x16e)]['x'] = _0x2c9875);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else
                    (!_0xe5eec1() || !_0x444d21['joystick'][_0x4298f1(0x586)]) && ((_0xd5e5a2 = _0xd5e5a2 || window[_0x4298f1(0x209)]) && ((_0xd5e5a2 = _0xd5e5a2[_0x4298f1(0x3f6)][0x0])['clientX'] !== undefined ? _0x45b66f['fo'] = Math[_0x4298f1(0x45a)](_0xd5e5a2[_0x4298f1(0x339)] - _0x381d83[_0x4298f1(0x5a8)] * 0.5, _0xd5e5a2[_0x4298f1(0x362)] - _0x381d83[_0x4298f1(0x284)] * 0.5) : _0x45b66f['fo'] = Math[_0x4298f1(0x45a)](_0xd5e5a2[_0x4298f1(0x64a)] - _0x381d83[_0x4298f1(0x5a8)] * 0.5, _0xd5e5a2[_0x4298f1(0x67c)] - _0x381d83[_0x4298f1(0x284)] * 0.5)));
            }, !![]),
            _0x381d83[_0x2360ae(0x57a)](_0x2360ae(0x1d8), function(_0x185955) {
                var _0x3863a3 = _0x2360ae;
                if (_0x38c4fe['on'] && _0x444d21['mobile'] && _0x444d21['mo'] != 0x6 && _0x444d21['s']) {
                    var _0x46058c = ooo['Xg']['Kf']['Wg']['Ah']
                      , _0x57abe2 = btoa(_0x444d21[_0x3863a3(0x4dd)])
                      , _0x4fd5f1 = _0x381d83['offsetHeight']
                      , _0x30da03 = btoa(_0x444d21[_0x3863a3(0x678)])
                      , _0x4266f9 = _0x381d83['offsetWidth']
                      , _0x266a4e = btoa(_0x444d21[_0x3863a3(0x1d6)])
                      , _0x48574d = (_0x185955 = _0x185955 || window[_0x3863a3(0x209)])[_0x3863a3(0x3f6)][_0x3863a3(0x4aa)](0x0)[_0x3863a3(0x67c)]
                      , _0x5a6394 = btoa(_0x444d21[_0x3863a3(0x33b)])
                      , _0x3da47d = _0x185955[_0x3863a3(0x3f6)][_0x3863a3(0x4aa)](0x0)[_0x3863a3(0x64a)]
                      , _0x5ef529 = _0x185955[_0x3863a3(0x3f6)][_0x3863a3(0x60c)]
                      , _0x21fff1 = btoa(_0x444d21['c_1'])
                      , _0x4eddb4 = _0x185955[_0x3863a3(0x3f6)][_0x3863a3(0x4aa)](0x0)[_0x3863a3(0x3fe)];
                    for (let _0x2c706e = 0x0; _0x2c706e < _0x5ef529; _0x2c706e++) {
                        _0x444d21[_0x3863a3(0x31b)]['x'] == -0x1 && _0x444d21[_0x3863a3(0x31b)]['y'] != -0x1 ? _0x185955[_0x3863a3(0x3f6)][_0x3863a3(0x4aa)](_0x2c706e)[_0x3863a3(0x3fe)] != _0x444d21['mo2']['y'] && (_0x48574d = _0x185955[_0x3863a3(0x3f6)]['item'](_0x2c706e)[_0x3863a3(0x67c)],
                        _0x3da47d = _0x185955[_0x3863a3(0x3f6)][_0x3863a3(0x4aa)](_0x2c706e)[_0x3863a3(0x64a)],
                        _0x4eddb4 = _0x185955['touches'][_0x3863a3(0x4aa)](_0x2c706e)['identifier']) : (_0x48574d = _0x185955[_0x3863a3(0x3f6)][_0x3863a3(0x4aa)](_0x2c706e)['pageX'],
                        _0x3da47d = _0x185955[_0x3863a3(0x3f6)]['item'](_0x2c706e)[_0x3863a3(0x64a)],
                        _0x4eddb4 = _0x185955[_0x3863a3(0x3f6)]['item'](_0x2c706e)[_0x3863a3(0x3fe)]);
                    }
                    ;var _0x411227 = 0x0;
                    (_0x444d21['mo'] == 0x4 && btoa(_0x266a4e) == _0x444d21[_0x3863a3(0x6b0)] || _0x444d21['mo'] == 0x5 && btoa(_0x57abe2) == _0x444d21[_0x3863a3(0x56e)]) && (_0x411227 = Math['sqrt']((_0x48574d - _0x46058c[_0x3863a3(0x16e)]['x'] - 0x64) * (_0x48574d - _0x46058c[_0x3863a3(0x16e)]['x'] - 0x64) + (_0x3da47d - _0x46058c['img_f']['y'] - 0x64) * (_0x3da47d - _0x46058c['img_f']['y'] - 0x64)));
                    _0x5ef529 == 0x1 && (_0x444d21['mo'] == 0x4 && _0x411227 > 0x28 || _0x444d21['mo'] != 0x4) && (_0x444d21['mo'] == 0x5 && _0x411227 > 0x28 || _0x444d21['mo'] != 0x5) && (_0x444d21['mo2']['y'] = -0x1,
                    _0x46058c[_0x3863a3(0x16e)][_0x3863a3(0x5b6)] = ![],
                    _0x46058c[_0x3863a3(0x648)]['visible'] = ![],
                    _0x444d21['mo'] == 0x1 && (_0x46058c[_0x3863a3(0x137)][_0x3863a3(0x626)] = 0.25,
                    _0x46058c['img_p_1'][_0x3863a3(0x5b6)] = !![]),
                    _0x444d21['mo'] == 0x2 && (_0x46058c['img_o_2'][_0x3863a3(0x626)] = 0.25,
                    _0x46058c[_0x3863a3(0x38c)][_0x3863a3(0x626)] = 0.25,
                    _0x46058c[_0x3863a3(0x551)][_0x3863a3(0x626)] = 0.25,
                    _0x46058c[_0x3863a3(0x551)]['visible'] = !![]),
                    _0x444d21['mo'] == 0x3 && (_0x46058c[_0x3863a3(0x37f)][_0x3863a3(0x626)] = 0.25,
                    _0x46058c[_0x3863a3(0x55c)]['alpha'] = 0.25,
                    _0x46058c[_0x3863a3(0x203)][_0x3863a3(0x626)] = 0.25,
                    _0x46058c[_0x3863a3(0x203)][_0x3863a3(0x5b6)] = !![]),
                    (_0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x46058c['img_p_2'][_0x3863a3(0x626)] = 0.25,
                    _0x46058c[_0x3863a3(0x551)][_0x3863a3(0x5b6)] = !![],
                    _0x46058c['img_f'][_0x3863a3(0x5b6)] = !![]),
                    _0x45b66f['eo'] = ![]);
                    if (_0x444d21[_0x3863a3(0x568)]['x'] == -0x1 && _0x444d21[_0x3863a3(0x568)]['y'] == -0x1 && btoa(_0x57abe2) == _0x444d21['d_4'] && (_0x444d21['mo'] == 0x4 && _0x411227 > 0x28 || _0x444d21['mo'] != 0x4 && btoa(_0x30da03) == _0x444d21[_0x3863a3(0x6d6)]) && (_0x444d21['mo'] == 0x5 && _0x411227 > 0x28 || _0x444d21['mo'] != 0x5 && btoa(_0x5a6394) == _0x444d21[_0x3863a3(0x2b5)])) {
                        _0x444d21[_0x3863a3(0x568)]['x'] = _0x4eddb4;
                        _0x444d21[_0x3863a3(0x568)]['x'] == _0x444d21['mo2']['y'] && _0x444d21[_0x3863a3(0x568)]['y'] == _0x444d21[_0x3863a3(0x31b)]['x'] && (_0x48574d = _0x185955['touches'][_0x3863a3(0x4aa)](0x1)[_0x3863a3(0x67c)],
                        _0x3da47d = _0x185955[_0x3863a3(0x3f6)][_0x3863a3(0x4aa)](0x1)[_0x3863a3(0x64a)]);
                        var _0x2a2765 = _0x4266f9 * 0.5 - 0x44
                          , _0x2f5acc = _0x4fd5f1 * 0.5 - 0x44
                          , _0x580e02 = _0x48574d - 0x6e
                          , _0x517187 = _0x3da47d - 0x6e
                          , _0x3cf4e1 = _0x48574d - 0x55
                          , _0x2b3f06 = _0x3da47d - 0x55;
                        _0x444d21['mo'] == 0x1 && _0x444d21[_0x3863a3(0x31b)]['x'] == -0x1 && _0x444d21[_0x3863a3(0x31b)]['y'] == -0x1 && (_0x46058c['img_p_1'][_0x3863a3(0x626)] = 0x1,
                        _0x46058c[_0x3863a3(0x137)]['x'] = _0x2a2765,
                        _0x46058c[_0x3863a3(0x137)]['y'] = _0x2f5acc,
                        _0x46058c[_0x3863a3(0x137)]['visible'] = !![]),
                        _0x444d21['mo'] == 0x2 && (_0x46058c['img_o_2'][_0x3863a3(0x626)] = 0x1,
                        _0x46058c[_0x3863a3(0x252)]['x'] = _0x580e02,
                        _0x46058c['img_o_2']['y'] = _0x517187,
                        _0x46058c[_0x3863a3(0x38c)][_0x3863a3(0x626)] = 0x1,
                        _0x46058c[_0x3863a3(0x38c)]['x'] = _0x3cf4e1,
                        _0x46058c[_0x3863a3(0x38c)]['y'] = _0x2b3f06,
                        _0x444d21[_0x3863a3(0x31b)]['x'] == -0x1 && _0x444d21['mo2']['y'] == -0x1 && (_0x46058c[_0x3863a3(0x551)][_0x3863a3(0x626)] = 0x1,
                        _0x46058c[_0x3863a3(0x551)]['x'] = _0x2a2765,
                        _0x46058c[_0x3863a3(0x551)]['y'] = _0x2f5acc,
                        _0x46058c[_0x3863a3(0x551)][_0x3863a3(0x5b6)] = !![])),
                        _0x444d21['mo'] == 0x3 && btoa(_0x266a4e) == _0x444d21[_0x3863a3(0x6b0)] && (_0x46058c[_0x3863a3(0x37f)][_0x3863a3(0x626)] = 0x1,
                        _0x46058c[_0x3863a3(0x37f)]['x'] = _0x580e02,
                        _0x46058c['img_o_3']['y'] = _0x517187,
                        _0x46058c['img_i_3'][_0x3863a3(0x626)] = 0x1,
                        _0x46058c['img_i_3']['x'] = _0x3cf4e1,
                        _0x46058c[_0x3863a3(0x55c)]['y'] = _0x2b3f06,
                        _0x444d21[_0x3863a3(0x31b)]['x'] == -0x1 && _0x444d21[_0x3863a3(0x31b)]['y'] == -0x1 && (_0x46058c[_0x3863a3(0x203)][_0x3863a3(0x626)] = 0x1,
                        _0x46058c[_0x3863a3(0x203)]['x'] = _0x2a2765,
                        _0x46058c[_0x3863a3(0x203)]['y'] = _0x2f5acc,
                        _0x46058c[_0x3863a3(0x203)][_0x3863a3(0x5b6)] = !![])),
                        _0x444d21['mo'] == 0x4 && btoa(_0x5a6394) == _0x444d21[_0x3863a3(0x2b5)] && _0x444d21[_0x3863a3(0x31b)]['x'] == -0x1 && _0x444d21['mo2']['y'] == -0x1 && (_0x46058c[_0x3863a3(0x551)][_0x3863a3(0x626)] = 0x1,
                        _0x46058c['img_p_2']['x'] = _0x2a2765,
                        _0x46058c['img_p_2']['y'] = _0x2f5acc,
                        _0x46058c[_0x3863a3(0x551)]['visible'] = !![]),
                        _0x444d21['mo'] == 0x5 && btoa(_0x30da03) == _0x444d21['d_3'] && _0x444d21[_0x3863a3(0x31b)]['x'] == -0x1 && _0x444d21[_0x3863a3(0x31b)]['y'] == -0x1 && (_0x46058c['img_p_2'][_0x3863a3(0x626)] = 0x1,
                        _0x46058c[_0x3863a3(0x551)]['x'] = _0x2a2765,
                        _0x46058c[_0x3863a3(0x551)]['y'] = _0x2f5acc,
                        _0x46058c[_0x3863a3(0x551)][_0x3863a3(0x5b6)] = !![]);
                    } else
                        (_0x5ef529 >= 0x2 && _0x444d21[_0x3863a3(0x31b)]['x'] == -0x1 && _0x444d21['mo2']['y'] == -0x1 && btoa(_0x30da03) == _0x444d21[_0x3863a3(0x6d6)] || _0x5ef529 == 0x1 && _0x444d21['mo'] == 0x4 && _0x411227 <= 0x28 && btoa(_0x21fff1) == _0x444d21[_0x3863a3(0x245)] || _0x5ef529 == 0x1 && _0x444d21['mo'] == 0x5 && _0x411227 <= 0x28 && btoa(_0x5a6394) == _0x444d21['d_2']) && (_0x444d21['mo2']['y'] = _0x4eddb4,
                        _0x46058c[_0x3863a3(0x16e)][_0x3863a3(0x5b6)] = !![],
                        _0x46058c[_0x3863a3(0x648)][_0x3863a3(0x5b6)] = !![],
                        _0x444d21['mo'] == 0x1 && (_0x46058c[_0x3863a3(0x137)]['visible'] = ![],
                        _0x46058c[_0x3863a3(0x648)]['x'] = _0x46058c[_0x3863a3(0x137)]['x'],
                        _0x46058c[_0x3863a3(0x648)]['y'] = _0x46058c[_0x3863a3(0x137)]['y']),
                        (_0x444d21['mo'] == 0x2 || _0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x46058c[_0x3863a3(0x551)][_0x3863a3(0x5b6)] = ![],
                        _0x46058c[_0x3863a3(0x648)]['x'] = _0x46058c[_0x3863a3(0x551)]['x'],
                        _0x46058c[_0x3863a3(0x648)]['y'] = _0x46058c[_0x3863a3(0x551)]['y']),
                        _0x444d21['mo'] == 0x3 && btoa(_0x30da03) == _0x444d21[_0x3863a3(0x6d6)] && (_0x46058c['img_p_3']['visible'] = ![],
                        _0x46058c['img_pf_1']['x'] = _0x46058c['img_p_3']['x'],
                        _0x46058c[_0x3863a3(0x648)]['y'] = _0x46058c[_0x3863a3(0x203)]['y']),
                        _0x444d21['mo'] != 0x4 && _0x444d21['mo'] != 0x5 && (_0x46058c['img_f']['x'] = _0x48574d - 0x64,
                        _0x46058c['img_f']['y'] = _0x3da47d - 0x64),
                        _0x45b66f['eo'] = !![]);
                    ;_0x185955['preventDefault']();
                } else
                    (_0x185955 = _0x185955 || window[_0x3863a3(0x209)]) && (_0x45b66f['eo'] = _0x185955['touches'][_0x3863a3(0x60c)] >= 0x2),
                    _0x185955[_0x3863a3(0x348)]();
            }, !![]),
            _0x381d83[_0x2360ae(0x57a)](_0x2360ae(0x27d), function(_0x2bb09f) {
                var _0x148802 = _0x2360ae;
                if (_0x38c4fe['on'] && _0x444d21[_0x148802(0x62b)] && _0x444d21['mo'] != 0x6 && _0x444d21['s']) {
                    var _0x46973b = ooo['Xg']['Kf']['Wg']['Ah']
                      , _0x5fc40e = btoa(_0x444d21[_0x148802(0x207)]);
                    (_0x2bb09f = _0x2bb09f || window['event']) && ((_0x2bb09f = _0x2bb09f[_0x148802(0x2c5)][0x0])['clientX'] !== undefined ? _0x27d39d(_0x2bb09f['clientX'], _0x2bb09f['clientY']) : _0x27d39d(_0x2bb09f[_0x148802(0x67c)], _0x2bb09f[_0x148802(0x64a)]));
                    var _0x338b26 = btoa(_0x444d21[_0x148802(0x33b)])
                      , _0x264d50 = _0x2bb09f[_0x148802(0x3fe)];
                    _0x264d50 == _0x444d21[_0x148802(0x568)]['x'] && _0x444d21[_0x148802(0x568)]['y'] == -0x1 && btoa(_0x338b26) == _0x444d21[_0x148802(0x2b5)] && (_0x444d21[_0x148802(0x568)]['x'] = -0x1,
                    _0x444d21['mo'] == 0x1 && (_0x46973b[_0x148802(0x137)]['alpha'] = 0.25),
                    _0x444d21['mo'] == 0x2 && (_0x46973b[_0x148802(0x252)][_0x148802(0x626)] = 0.25,
                    _0x46973b['img_i_2'][_0x148802(0x626)] = 0.25,
                    _0x46973b[_0x148802(0x551)]['alpha'] = 0.25),
                    _0x444d21['mo'] == 0x3 && btoa(_0x5fc40e) == _0x444d21['d_1'] && (_0x46973b['img_o_3'][_0x148802(0x626)] = 0.25,
                    _0x46973b[_0x148802(0x55c)][_0x148802(0x626)] = 0.25,
                    _0x46973b[_0x148802(0x203)][_0x148802(0x626)] = 0.25),
                    _0x444d21['mo'] == 0x4 && (_0x46973b[_0x148802(0x551)][_0x148802(0x626)] = 0.25),
                    _0x444d21['mo'] == 0x5 && (_0x46973b[_0x148802(0x551)][_0x148802(0x626)] = 0.25));
                    var _0x4ef60c = btoa(_0x444d21[_0x148802(0x678)]);
                    _0x444d21[_0x148802(0x31b)]['x'] == -0x1 && _0x264d50 == _0x444d21[_0x148802(0x31b)]['y'] && btoa(_0x4ef60c) == _0x444d21[_0x148802(0x6d6)] && (_0x444d21[_0x148802(0x31b)]['y'] = -0x1,
                    _0x46973b[_0x148802(0x16e)]['visible'] = ![],
                    _0x46973b[_0x148802(0x648)][_0x148802(0x5b6)] = ![],
                    _0x444d21['mo'] == 0x1 && (_0x46973b[_0x148802(0x137)][_0x148802(0x5b6)] = !![]),
                    (_0x444d21['mo'] == 0x2 || _0x444d21['mo'] == 0x4 && btoa(_0x338b26) == _0x444d21['d_2'] || _0x444d21['mo'] == 0x5 && btoa(_0x4ef60c) == _0x444d21[_0x148802(0x6d6)]) && (_0x46973b[_0x148802(0x551)][_0x148802(0x5b6)] = !![]),
                    _0x444d21['mo'] == 0x3 && (_0x46973b[_0x148802(0x203)][_0x148802(0x5b6)] = !![]),
                    (_0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5) && (_0x46973b[_0x148802(0x16e)]['visible'] = !![]),
                    _0x45b66f['eo'] = ![]);
                } else
                    (_0x2bb09f = _0x2bb09f || window[_0x148802(0x209)]) && (_0x45b66f['eo'] = _0x2bb09f[_0x148802(0x3f6)][_0x148802(0x60c)] >= 0x2),
                    _0x444d21['mobile'] && _0x444d21['s'] && (_0x2bb09f = _0x2bb09f || window[_0x148802(0x209)]) && ((_0x2bb09f = _0x2bb09f[_0x148802(0x2c5)][0x0])['clientX'] !== undefined ? _0x27d39d(_0x2bb09f[_0x148802(0x362)], _0x2bb09f[_0x148802(0x339)]) : _0x27d39d(_0x2bb09f[_0x148802(0x67c)], _0x2bb09f['pageY']));
            }, !![]),
            _0x381d83[_0x2360ae(0x57a)](_0x2360ae(0x40a), function(_0x3bf4a0) {
                var _0x591326 = _0x2360ae;
                (_0x3bf4a0 = _0x3bf4a0 || _0x53b237['c']['event'] && _typeof(_0x3bf4a0[_0x591326(0x362)]) != _0x591326(0x3fa)) && (_0x45b66f['fo'] = _0x3a706a['ta'](_0x3bf4a0[_0x591326(0x339)] - _0x381d83[_0x591326(0x5a8)] * 0.5, _0x3bf4a0[_0x591326(0x362)] - _0x381d83[_0x591326(0x284)] * 0.5));
            }, !![]),
            _0x381d83[_0x2360ae(0x57a)](_0x2360ae(0x5ec), function(_0xbef2b9) {
                _0x45b66f['eo'] = !![];
            }, !![]),
            _0x381d83[_0x2360ae(0x57a)]('mouseup', function(_0x2cde44) {
                _0x45b66f['eo'] = ![];
            }, !![]),
            this['Wg'] = new _0x53b237['lh'](_0x3b2000),
            this['go'] = _0x39e2f6['ho'],
            this['fo'] = 0x0,
            this['eo'] = ![],
            _0x38c4fe[_0x2360ae(0x4a4)] = _0x45b66f;
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {}
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['ml'] = function() {
            _0x53b237['Nf']['rg'](![]),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tf'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Rn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Sn'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tn'], 0x1f4),
            this['go'] === _0x39e2f6['ho'] ? _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x1) : _0x32eec3['f']['g'](_0x53b237['Uf']['Un'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0x32);
        }
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['ho'] = function() {
            return this['go'] = _0x39e2f6['ho'],
            this;
        }
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['io'] = function() {
            return _0x32eec3['f']['h'](_0x3e7229, 0x1),
            _0x3a706a['Y'](function() {
                _0x32eec3['f']['g'](_0x3e7229, 0x1f4);
            }, 0xbb8),
            _0x32eec3['f']['h'](_0x5dfc04, 0x1),
            _0x3a706a['Y'](function() {
                _0x32eec3['f']['g'](_0x5dfc04, 0x1f4);
            }, 0x1f4),
            this['go'] = _0x39e2f6['io'],
            this;
        }
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['nl'] = function() {
            this['eo'] = ![],
            this['Wg']['qg'](),
            this['go'] === _0x39e2f6['io'] && ooo['ij']['mf']();
        }
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['qg'] = function() {
            this['Wg']['qg']();
        }
        ,
        _0x54d2dc['prototype']['ug'] = function(_0xae3547, _0x2c8a62) {
            this['Wg']['ug'](_0xae3547, _0x2c8a62);
        }
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['jo'] = function(_0x422b70, _0x4d58d7, _0x22e95b) {
            var _0x229eee = _0x5b8a80, _0xfb1eec, _0x3734c8, _0x1579a1;
            _0x4d58d7 >= 0x1 && _0x4d58d7 <= 0xa ? (_0xfb1eec = _0x3a706a['U']('index.game.result.place.i' + _0x4d58d7),
            _0x3734c8 = _0x3a706a['U'](_0x229eee(0x255)),
            _0x1579a1 = _0x3a706a['U'](_0x229eee(0x45c))[_0x229eee(0x390)](_0x229eee(0x6dc), _0x22e95b)[_0x229eee(0x390)](_0x229eee(0x686), _0x422b70)[_0x229eee(0x390)](_0x229eee(0x231), _0xfb1eec)) : (_0xfb1eec = '',
            _0x3734c8 = _0x3a706a['U'](_0x229eee(0x59c)),
            _0x1579a1 = _0x3a706a['U']('index.game.social.shareResult.messNorm')['replace'](_0x229eee(0x6dc), _0x22e95b)[_0x229eee(0x390)](_0x229eee(0x686), _0x422b70));
            _0x5c49e0[_0x229eee(0x26f)](_0x3a706a['U']('index.game.result.your')),
            _0xa9c614[_0x229eee(0x26f)](_0x422b70),
            _0x2b4a75[_0x229eee(0x26f)](_0xfb1eec),
            _0x5164a7['html'](_0x3734c8);
            if (_0x69e837['co']['bo']) {
                var _0x5d639e, _0x2d99dc, _0x546620, _0x46484b, _0x2f25fa, _0x3f24de, _0x62861d, _0xed9f46 = _0x3a706a['U'](_0x229eee(0x56f));
                _0x3a706a['U'](_0x229eee(0x10f)),
                _0x528de9[_0x229eee(0x6ae)]()[_0x229eee(0x527)]((_0x5d639e = _0xed9f46,
                _0x2d99dc = _0x229eee(0x431),
                _0x546620 = _0x229eee(0x4a1),
                _0x46484b = _0x1579a1,
                _0x2f25fa = _0x1579a1,
                _0x3f24de = _0x229eee(0x65f),
                (_0x62861d = $(_0x229eee(0x553) + _0x5d639e + '</span></div>'))[_0x229eee(0x335)](function() {
                    var _0x3d1355 = _0x229eee;
                    (typeof FB == _0x3d1355(0x3fa) ? _0x3d1355(0x3fa) : _typeof(FB)) !== _0x3d1355(0x3fa) && _typeof(FB['ui']) != _0x3d1355(0x3fa) && FB['ui']({
                        'method': _0x3d1355(0x616),
                        'display': _0x3d1355(0x4a0),
                        'link': _0x2d99dc,
                        'name': _0x546620,
                        'caption': _0x46484b,
                        'description': _0x2f25fa,
                        'picture': _0x3f24de
                    }, function() {});
                }),
                _0x62861d));
            }
        }
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['ko'] = function() {
            return this['fo'];
        }
        ,
        _0x54d2dc[_0x5b8a80(0x66b)]['lo'] = function() {
            return this['eo'];
        }
        ,
        _0x39e2f6 = {
            'ho': 0x0,
            'io': 0x1
        },
        _0x53b237['Bk'] = _0x54d2dc,
        _0x3531a7 = $(_0x5b8a80(0x6ea)),
        _0x2b27dc = $(_0x5b8a80(0x1af)),
        _0x502018 = $(_0x5b8a80(0x72a)),
        (_0x5643d5 = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            _0x53b237['Uf']['call'](this, _0x53b237['ll']['ao']),
            this['mo'] = -0x1,
            this['no'] = '';
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {}
        ,
        _0x5643d5[_0x5b8a80(0x66b)]['ml'] = function() {
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tf'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Rn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Sn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Yn'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0x32);
        }
        ,
        _0x5643d5[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['Ye'](_0x53b237['Pe']['Se']['Re']),
            ooo['Xg']['Ak']['wg'](),
            ooo['Xg']['Ak']['sg'](!![]);
        }
        ,
        _0x5643d5[_0x5b8a80(0x66b)]['hl'] = function() {
            ooo['Xg']['Ak']['sg'](![]);
        }
        ,
        _0x5643d5['prototype']['oo'] = function() {
            this['po']('', 0x0),
            _0x32eec3['f']['g'](_0x3531a7, 0x64);
        }
        ,
        _0x5643d5[_0x5b8a80(0x66b)]['qo'] = function() {
            _0x32eec3['f']['h'](_0x3531a7, 0x64);
        }
        ,
        _0x5643d5[_0x5b8a80(0x66b)]['po'] = function(_0x55d1f2, _0x51ffa4) {
            var _0x20a406 = _0x5b8a80;
            this['no'] !== _0x55d1f2 && (this['no'] = _0x55d1f2);
            var _0x3622ba = _0x3a706a['fa'](_0x3a706a['_'](_0x51ffa4 * 0x64), 0x0, 0x64);
            this['mo'] !== _0x3622ba && (_0x2b27dc['css']('width', _0x3622ba + '%'),
            _0x502018[_0x20a406(0x26f)](_0x3622ba + '\x20%'));
        }
        ,
        _0x53b237['$k'] = _0x5643d5,
        _0x30dbb5 = $(_0x5b8a80(0x11a)),
        $(_0x5b8a80(0x5fd)),
        $('#mm-line-bottom'),
        _0x25178c = $(_0x5b8a80(0x697)),
        _0x31b330 = $(_0x5b8a80(0x555)),
        _0x5702a3 = $('#mm-loading'),
        _0x57caa2 = $(_0x5b8a80(0x6f5)),
        _0x48f327 = $(_0x5b8a80(0x504)),
        $(_0x5b8a80(0x1a7)),
        _0x707f74 = $(_0x5b8a80(0x3c1)),
        _0x3d589c = $(_0x5b8a80(0x383)),
        _0x317a91 = $(_0x5b8a80(0x173)),
        _0x255926 = $(_0x5b8a80(0x492)),
        _0x4751f0 = $(_0x5b8a80(0x62d)),
        _0x45de25 = $('#mm-params-nickname'),
        _0x780ed6 = $(_0x5b8a80(0x547)),
        _0x85e11 = $(_0x5b8a80(0x44e)),
        _0x60f159 = $('#mm-action-guest'),
        _0x247ec0 = $('#mm-action-login'),
        _0x5b92c3 = $('#mm-player-info'),
        _0xc64448 = $(_0x5b8a80(0x1c4)),
        _0x131df5 = $('#mm-leaders'),
        _0x2a3edc = $(_0x5b8a80(0x691)),
        _0x2f400b = $(_0x5b8a80(0x149)),
        _0x3c244c = $(_0x5b8a80(0x2f6)),
        _0x372cd3 = $('#mm-player-username'),
        _0x505335 = $(_0x5b8a80(0x478)),
        _0x45db8e = $(_0x5b8a80(0x628)),
        _0x1de020 = $('#mm-player-exp-val'),
        _0x3d4aab = $(_0x5b8a80(0x3e7)),
        (_0x14888a = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            var _0x499891 = _0x5b8a80;
            _0x53b237['Uf'][_0x499891(0x45d)](this, _0x53b237['ll']['kl']),
            this['mo'] = -0x1,
            this['no'] = '';
            var _0x58ca47 = [_0x499891(0x50b), _0x499891(0x550), _0x499891(0x2c4), _0x499891(0x499), 'أن\x20الله\x20يراك', _0x499891(0x380), _0x499891(0x43e), 'طيبة', _0x499891(0x450), _0x499891(0x5f8), _0x499891(0x577), _0x499891(0x382), _0x499891(0x413), 'ملعون'];
            function _0x3067fd(_0x3f35e0) {
                var _0x8733 = _0x499891;
                if (!_0x3f35e0)
                    return '';
                return _0x3f35e0[_0x8733(0x144)]()[_0x8733(0x390)](/[^a-zA-Z0-9\u0600-\u06FF*]/g, '')[_0x8733(0x390)](/[ـ]/g, '')['replace'](/[ًٌٍَُِّْ]/g, '')[_0x8733(0x390)](/[أإآا]/g, 'ا')[_0x8733(0x390)](/[ىي]/g, 'ي')[_0x8733(0x390)](/[ة]/g, 'ه');
            }
            window['handleNicknameChange'] = function(_0x1567d4) {
                var _0x1e24cc = _0x499891;
                if (!_0x1567d4 || _0x1567d4[_0x1e24cc(0x70b)]() === '')
                    return '';
                return _0x1567d4;
            }
            ,
            fetch(_0x499891(0x3bf))['then'](_0x2d3df8 => _0x2d3df8[_0x499891(0x698)]())[_0x499891(0x2aa)](_0x43380d => {
                var _0x3cb64b = _0x499891;
                _0x58ca47 = Array[_0x3cb64b(0x735)](_0x43380d) ? _0x43380d : Object[_0x3cb64b(0x658)](_0x43380d);
            }
            )[_0x499891(0x381)](_0x4bd0cc => {
                var _0x5176be = _0x499891;
                console['error'](_0x5176be(0x110), _0x4bd0cc);
            }
            ),
            this['ro'] = new _0x53b237['Lm'](_0x707f74),
            _0x780ed6[_0x499891(0x335)](function() {
                ooo['ij']['if']();
            }),
            _0x707f74[_0x499891(0x335)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Qk']));
            }),
            _0x3d589c[_0x499891(0x335)](function() {
                ooo['ij']['if'](),
                ooo['so']['kk']();
            }),
            _0x317a91['click'](function() {
                ooo['ij']['if'](),
                ooo['so']['jk']();
            }),
            _0x45de25[_0x499891(0x376)](function(_0x5e992f) {
                _0x444d21['r1'] = ![],
                _0x5e992f['keyCode'] === 0xd && ooo['to']();
            }),
            _0x85e11[_0x499891(0x335)](function() {
                var _0x12347f = _0x499891
                  , _0x18b6b1 = _0x45de25[_0x12347f(0x410)]();
                _0x18b6b1 && _0x18b6b1[_0x12347f(0x70b)]() !== '' && _0x45de25[_0x12347f(0x410)](window[_0x12347f(0x163)](_0x18b6b1)),
                ooo['ij']['if'](),
                ooo['to']();
            }),
            _0x60f159[_0x499891(0x335)](function() {
                var _0x53af29 = _0x499891
                  , _0x48a1b2 = _0x45de25[_0x53af29(0x410)]();
                _0x48a1b2 && _0x48a1b2[_0x53af29(0x70b)]() !== '' && _0x45de25['val'](window[_0x53af29(0x163)](_0x48a1b2)),
                ooo['ij']['if'](),
                ooo['to']();
            }),
            _0x247ec0[_0x499891(0x335)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Nk']);
            }),
            _0x2a3edc[_0x499891(0x335)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hi']);
            }),
            _0x5b92c3[_0x499891(0x335)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Lk']));
            }),
            _0x131df5[_0x499891(0x335)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Jk']));
            }),
            _0xc64448['click'](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Sk']));
            }),
            _0x2f400b[_0x499891(0x335)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hk']));
            }),
            this['uo'](),
            this['vo']();
            var _0xd6be4b = _0x53b237['Cg']['Og'](_0x53b237['Cg']['Ig']);
            _0xd6be4b !== _0x499891(0x189) && _0xd6be4b !== _0x499891(0x77c) && (_0xd6be4b = _0x499891(0x189)),
            _0x780ed6[_0x499891(0x410)](_0xd6be4b);
        }))['prototype']['Sa'] = function() {
            var _0x51b877 = this;
            function _0xc18909(_0x4bd2ad, _0x9567c9) {
                var _0x5a9b76 = _0x1792;
                _0x4bd2ad['pm'] && (_0x9567c9['skinId'] = _0x4bd2ad['pm']['Tj'],
                _0x9567c9[_0x5a9b76(0x243)] = _0x4bd2ad['pm']['Uj'],
                _0x9567c9['mouthId'] = _0x4bd2ad['pm']['Vj'],
                _0x9567c9[_0x5a9b76(0x510)] = _0x4bd2ad['pm']['Wj'],
                _0x9567c9[_0x5a9b76(0x26b)] = _0x4bd2ad['pm']['Xj']);
            }
            ooo['ok']['fm'](function() {
                ooo['ok']['nk']() ? (_0xc18909(_0x444d21, ooo['ok']['xl']),
                ooo['so']['lk'](ooo['ok']['Ul'](), _0x53b237['_j']['$j']),
                ooo['so']['lk'](ooo['ok']['Vl'](), _0x53b237['_j']['ak']),
                ooo['so']['lk'](ooo['ok']['Wl'](), _0x53b237['_j']['bk']),
                ooo['so']['lk'](ooo['ok']['Xl'](), _0x53b237['_j']['dk']),
                ooo['so']['lk'](ooo['ok']['Yl'](), _0x53b237['_j']['ck'])) : (ooo['so']['lk'](ooo['wo'](), _0x53b237['_j']['$j']),
                ooo['so']['lk'](0x0, _0x53b237['_j']['ak']),
                ooo['so']['lk'](0x0, _0x53b237['_j']['bk']),
                ooo['so']['lk'](0x0, _0x53b237['_j']['dk']),
                ooo['so']['lk'](0x0, _0x53b237['_j']['ck']));
            }),
            ooo['ok']['fm'](function() {
                var _0x3ead06 = _0x1792;
                _0x85e11['toggle'](ooo['ok']['nk']()),
                _0x247ec0['toggle'](!ooo['ok']['nk']()),
                _0x60f159['toggle'](!ooo['ok']['nk']()),
                _0x131df5[_0x3ead06(0x53f)](ooo['ok']['nk']()),
                _0xc64448['toggle'](ooo['ok']['nk']()),
                _0x2f400b['toggle'](ooo['ok']['nk']()),
                _0x5b92c3[_0x3ead06(0x53f)](!![]),
                _0x2a3edc[_0x3ead06(0x53f)](!![]),
                ooo['ok']['nk']() ? (_0x255926[_0x3ead06(0x3af)](),
                _0x372cd3[_0x3ead06(0x26f)](ooo['ok']['Ll']()),
                _0x3c244c[_0x3ead06(0x479)]('src', ooo['ok']['Nl']()),
                _0x505335[_0x3ead06(0x26f)](ooo['ok']['Ql']()),
                _0x45db8e['width'](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'),
                _0x1de020['html'](ooo['ok']['Sl']() + _0x3ead06(0x1ab) + ooo['ok']['Tl']()),
                _0x3d4aab[_0x3ead06(0x26f)](ooo['ok']['Rl']()),
                _0x45de25['val'](ooo['ok']['Ml']())) : (_0x255926[_0x3ead06(0x53f)](_0x69e837['co']['bo'] && !ooo['xo']()),
                _0x372cd3['html'](_0x372cd3[_0x3ead06(0x56d)](_0x3ead06(0x48b))),
                _0x3c244c['attr'](_0x3ead06(0x39e), _0x69e837['H']['M']),
                _0x505335[_0x3ead06(0x26f)]('10'),
                _0x45db8e[_0x3ead06(0x612)]('0'),
                _0x1de020[_0x3ead06(0x26f)](''),
                _0x3d4aab[_0x3ead06(0x26f)](0x1),
                _0x45de25[_0x3ead06(0x410)](_0x53b237['Cg']['Og'](_0x53b237['Cg']['Jg'])));
            }),
            ooo['so']['fk'](function() {
                _0x51b877['ro']['Gm'](ooo['so']['ek']());
            });
        }
        ,
        _0x14888a['prototype']['ml'] = function() {
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tf'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Rn'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Sn'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Vn'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0x32);
        }
        ,
        _0x14888a['prototype']['yo'] = function() {
            _0x32eec3['f']['g'](_0x30dbb5, 0x1f4),
            _0x32eec3['f']['g'](_0x25178c, 0x1f4),
            _0x32eec3['f']['g'](_0x31b330, 0x1f4),
            _0x32eec3['f']['h'](_0x5702a3, 0x64);
        }
        ,
        _0x14888a[_0x5b8a80(0x66b)]['zo'] = function() {
            _0x32eec3['f']['h'](_0x30dbb5, 0x64),
            _0x32eec3['f']['h'](_0x25178c, 0x64),
            _0x32eec3['f']['h'](_0x31b330, 0x64),
            _0x32eec3['f']['g'](_0x5702a3, 0x1f4);
        }
        ,
        _0x14888a['prototype']['po'] = function(_0x5f5289, _0x22a868) {
            var _0x3e7405 = _0x5b8a80;
            this['no'] !== _0x5f5289 && (this['no'] = _0x5f5289);
            var _0x4c6809 = _0x3a706a['fa'](_0x3a706a['_'](_0x22a868 * 0x64), 0x0, 0x64);
            this['mo'] !== _0x4c6809 && (_0x57caa2[_0x3e7405(0x4fa)](_0x3e7405(0x612), _0x4c6809 + '%'),
            _0x48f327['html'](_0x4c6809 + '\x20%'));
        }
        ,
        _0x14888a[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['jf'](),
            this['ro']['rg'](!![]);
        }
        ,
        _0x14888a[_0x5b8a80(0x66b)]['hl'] = function() {
            this['ro']['rg'](![]);
        }
        ,
        _0x14888a['prototype']['qg'] = function() {
            this['ro']['qg']();
        }
        ,
        _0x14888a['prototype']['ug'] = function(_0xeb1b0e, _0x23a24b) {
            this['ro']['ug']();
        }
        ,
        _0x14888a[_0x5b8a80(0x66b)]['Ml'] = function() {
            var _0x43ff1d = _0x5b8a80;
            return _0x45de25[_0x43ff1d(0x410)]();
        }
        ,
        _0x14888a['prototype']['Ao'] = function() {
            var _0x2e5a95 = _0x5b8a80;
            return _0x780ed6[_0x2e5a95(0x410)]();
        }
        ,
        _0x14888a[_0x5b8a80(0x66b)]['uo'] = function() {
            var _0x20c871 = _0x5b8a80
              , _0x540952 = $(_0x20c871(0x2ac))[_0x20c871(0x567)]()
              , _0x33a527 = 0x0;
            _0x3a706a['X'](function() {
                var _0x495ea0 = _0x20c871;
                _0x540952['eq'](_0x33a527)[_0x495ea0(0x545)](0x1f4, function() {
                    var _0x2f23c0 = _0x495ea0;
                    ++_0x33a527 >= _0x540952[_0x2f23c0(0x60c)] && (_0x33a527 = 0x0),
                    _0x540952['eq'](_0x33a527)[_0x2f23c0(0x34a)](0x1f4)[_0x2f23c0(0x4fa)](_0x2f23c0(0x157), _0x2f23c0(0x449));
                });
            }, 0xbb8);
        }
        ,
        _0x14888a[_0x5b8a80(0x66b)]['vo'] = function() {
            var _0x54788b = _0x5b8a80;
            if (_0x69e837['co']['bo'] && !ooo['xo']()) {
                _0x255926[_0x54788b(0x288)]();
                var _0x2c8974 = _0x3a706a['U'](_0x54788b(0x2c6))
                  , _0xbc7982 = encodeURIComponent(_0x3a706a['U']('index.game.main.menu.unlockSkins.comeAndPlay'));
                _0x4751f0[_0x54788b(0x527)]($(_0x54788b(0x681) + _0xbc7982 + _0x54788b(0x4d6) + _0x2c8974 + _0x54788b(0x685))[_0x54788b(0x335)](function _0x2f8dbc() {
                    ooo['Bo'](!![]),
                    _0x3a706a['Y'](function() {
                        var _0x45503f = _0x1792;
                        _0x255926[_0x45503f(0x3af)]();
                    }, 0xbb8);
                }));
            }
        }
        ,
        _0x53b237['Ck'] = _0x14888a,
        (_0x34d45a = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            var _0xa58fcc = _0x5b8a80;
            _0x53b237['Uf'][_0xa58fcc(0x45d)](this, _0x53b237['ll']['ao']);
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {}
        ,
        _0x34d45a[_0x5b8a80(0x66b)]['ml'] = function() {
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tf'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Rn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Sn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0x32);
        }
        ,
        _0x53b237['el'] = _0x34d45a,
        (_0x420177 = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            _0x53b237['Uf']['call'](this, _0x53b237['ll']['ao']);
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {}
        ,
        _0x420177[_0x5b8a80(0x66b)]['ml'] = function() {
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tf'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Rn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Sn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Zn'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0x32);
        }
        ,
        _0x420177['prototype']['nl'] = function() {}
        ,
        _0x53b237['Xk'] = _0x420177,
        _0x3ba1f0 = $(_0x5b8a80(0x57d)),
        (_0x480fa7 = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            var _0xbb235e = _0x5b8a80;
            _0x53b237['Uf'][_0xbb235e(0x45d)](this, _0x53b237['ll']['ao']),
            this['Co'] = [],
            this['Do'] = null;
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {}
        ,
        _0x480fa7[_0x5b8a80(0x66b)]['ml'] = function() {
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tf'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Rn'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Sn'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Xn'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0x32);
        }
        ,
        _0x480fa7[_0x5b8a80(0x66b)]['nl'] = function() {
            this['Eo']();
        }
        ,
        _0x480fa7[_0x5b8a80(0x66b)]['ql'] = function() {
            var _0x3cebb9 = _0x5b8a80;
            return this['Do'] != null || this['Co'][_0x3cebb9(0x60c)] > 0x0;
        }
        ,
        _0x480fa7[_0x5b8a80(0x66b)]['Fo'] = function(_0x513bd9) {
            var _0x508700 = _0x5b8a80;
            this['Co'][_0x508700(0x512)](_0x513bd9),
            _0x3a706a['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }
        ,
        _0x480fa7[_0x5b8a80(0x66b)]['km'] = function(_0x2a4fcb) {
            var _0x1e7646 = _0x5b8a80;
            this['Co'][_0x1e7646(0x1bc)](_0x2a4fcb),
            _0x3a706a['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }
        ,
        _0x480fa7['prototype']['Eo'] = function() {
            var _0x4d27be = _0x5b8a80
              , _0x1bbd31 = this;
            if (this['Do'] == null) {
                if (this['Co'][_0x4d27be(0x60c)] === 0x0) {
                    ooo['Xg']['jl']();
                    return;
                }
                ;var _0x1a2b20 = this['Co'][_0x4d27be(0x4bb)]();
                this['Do'] = _0x1a2b20;
                var _0x357279 = _0x1a2b20['ag']();
                _0x32eec3['f']['g'](_0x357279, 0x12c),
                _0x3ba1f0['append'](_0x357279),
                _0x1a2b20['Go'] = function() {
                    var _0x45e3f9 = _0x4d27be;
                    _0x357279[_0x45e3f9(0x545)](0x12c),
                    _0x3a706a['Y'](function() {
                        var _0x1f2b23 = _0x45e3f9;
                        _0x357279[_0x1f2b23(0x47e)]();
                    }, 0x12c),
                    _0x1bbd31['Do'] === _0x1a2b20 && (_0x1bbd31['Do'] = null),
                    _0x1bbd31['Eo']();
                }
                ,
                _0x1a2b20['nl']();
            }
        }
        ,
        _0x53b237['Zk'] = _0x480fa7,
        _0x53b237['ll'] = {
            'ao': 0x0,
            'kl': 0x1
        },
        _0x49b759 = $('#popup-menu-label'),
        _0x147cb0 = $(_0x5b8a80(0x37b)),
        _0x5c33f8 = $('#popup-menu-coins-val'),
        $(_0x5b8a80(0x11f))[_0x5b8a80(0x335)](function() {
            ooo['ij']['if'](),
            ooo['Xg']['jl']();
        }),
        _0x147cb0[_0x5b8a80(0x335)](function() {
            ooo['ok']['nk']() && (ooo['ij']['if'](),
            ooo['Xg']['gl'](ooo['Xg']['Hk']));
        }),
        (_0x348834 = _0x3a706a['ca'](_0x53b237['Uf'], function(_0x17108b, _0x14fdad) {
            _0x53b237['Uf']['call'](this, _0x53b237['ll']['kl']),
            this['Xa'] = _0x17108b,
            this['Io'] = _0x14fdad,
            this['Jo'] = [];
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {
            var _0x239d14 = _0x5b8a80;
            _0x348834[_0x239d14(0x3bd)][_0x239d14(0x66b)]['Sa'][_0x239d14(0x45d)](this),
            !_0x348834['Ko'] && (_0x348834['Ko'] = !![],
            ooo['ok']['fm'](function() {
                var _0x53be68 = _0x239d14;
                ooo['ok']['nk']() ? _0x5c33f8[_0x53be68(0x26f)](ooo['ok']['Ql']()) : _0x5c33f8[_0x53be68(0x26f)]('0');
            })),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Lo'], 0x64);
        }
        ,
        _0x348834['Mo'] = $(_0x5b8a80(0x148)),
        _0x348834['No'] = $(_0x5b8a80(0x4ff)),
        _0x348834['Oo'] = $(_0x5b8a80(0x719)),
        _0x348834['Po'] = $('#login-view'),
        _0x348834['Qo'] = $(_0x5b8a80(0x3ba)),
        _0x348834['Ro'] = $('#skins-view'),
        _0x348834['So'] = $(_0x5b8a80(0x3f1)),
        _0x348834['To'] = $(_0x5b8a80(0x41e)),
        _0x348834['Uo'] = $(_0x5b8a80(0x4c0)),
        _0x348834['Vo'] = $(_0x5b8a80(0x422)),
        _0x348834['Lo'] = $(_0x5b8a80(0x371)),
        _0x348834['prototype']['ml'] = function() {
            var _0x3978b9 = _0x5b8a80;
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tf'], 0x1),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Qn'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Rn'], 0xc8),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Sn'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0xc8),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Wn'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0xc8),
            _0x49b759[_0x3978b9(0x26f)](this['Xa']),
            _0x147cb0[_0x3978b9(0x53f)](this['Io']),
            this['Wo']();
        }
        ,
        _0x348834[_0x5b8a80(0x66b)]['Wo'] = function() {}
        ,
        _0x348834[_0x5b8a80(0x66b)]['Xo'] = function(_0x59668c) {
            var _0x57fcd5 = _0x5b8a80
              , _0x23ac72 = this
              , _0x55d300 = _0x3a706a['va'](0x0, 0x7fffffff) & 0x7fffffff;
            return this['Jo'][_0x57fcd5(0x1bc)](_0x55d300),
            _0x32eec3['f']['g'](_0x53b237['Ho']['Lo'], 0x64),
            _0x3a706a['Y'](function() {
                _0x23ac72['Yo'](_0x55d300);
            }, _0x59668c),
            new _0x306d5a(this,_0x55d300);
        }
        ,
        _0x348834[_0x5b8a80(0x66b)]['Yo'] = function(_0x255528) {
            var _0x4bd9b2 = _0x5b8a80
              , _0x560f81 = this['Jo'][_0x4bd9b2(0x68a)](_0x255528);
            !(_0x560f81 < 0x0) && (this['Jo'][_0x4bd9b2(0x687)](_0x560f81, 0x1),
            this['Jo']['length'] === 0x0 && _0x32eec3['f']['h'](_0x53b237['Ho']['Lo'], 0x64));
        }
        ,
        _0x53b237['Ho'] = _0x348834;
        var _0x2f9ea3, _0x1ea237, _0x2279e0, _0xc6a301, _0x439a5b, _0x55024d, _0x2ddbb5, _0x271958, _0x43791c, _0x3e7229, _0x5dfc04, _0x528de9, _0x5c49e0, _0xa9c614, _0x2b4a75, _0x5164a7, _0x3b2000, _0x54d2dc, _0x39e2f6, _0x3531a7, _0x2b27dc, _0x502018, _0x5643d5, _0x30dbb5, _0x25178c, _0x31b330, _0x5702a3, _0x57caa2, _0x48f327, _0x707f74, _0x3d589c, _0x317a91, _0x255926, _0x4751f0, _0x45de25, _0x780ed6, _0x85e11, _0x60f159, _0x247ec0, _0x5b92c3, _0xc64448, _0x131df5, _0x2a3edc, _0x2f400b, _0x3c244c, _0x372cd3, _0x505335, _0x45db8e, _0x1de020, _0x3d4aab, _0x14888a, _0x34d45a, _0x420177, _0x3ba1f0, _0x480fa7, _0x49b759, _0x147cb0, _0x5c33f8, _0x348834, _0x258991, _0x5a69aa, _0x183be9, _0x1e78c3, _0x2e542c, _0x1680a2, _0x2c98e5, _0x2d7a76, _0x4e0e3d, _0x4debbc, _0x3cd241, _0x485f81, _0x415b04, _0x50ad04, _0x3327c1, _0xd5fb4b, _0x59c3cc, _0x20663c, _0x1f7068, _0x51542f, _0x3be847, _0x5a3f2b, _0x51eccf, _0x36285c, _0x5ce22c, _0x457662, _0x292015, _0x3bc348, _0x4ab107, _0xcc1129, _0x282ddb, _0x3314a1, _0x3b9f80, _0x23c83f, _0x2779c0, _0x5bcdba, _0x19b2f9, _0x502bfc, _0x3e5fe8, _0x5bda2c, _0x31fbf9, _0x2d826b, _0x5389ff, _0x11479d, _0x3f92ad, _0x4a8ed7, _0x525a36, _0x3c5f71, _0x25d998, _0x211ad3, _0x46eee3, _0x18663c, _0x2ac727, _0x59a32b, _0x317621, _0x30a949, _0x5bd893, _0x5a5b97, _0xd692a, _0x7ffef, _0x2c9747, _0x28de82, _0x1e57cb, _0x5173a7, _0x5bd4af, _0x4bd91a, _0x4192f4, _0x1598e3, _0x283329, _0x5dd9b4, _0x42ed44, _0x1b2ea4, _0x192cf7, _0x245dd2, _0x56313b, _0x303d1b, _0x5b20e1, _0x1a1e9c, _0x50c0b9, _0x57d67b, _0x31dc77, _0x399dc1, _0x7f1b52, _0x5cc374, _0x209a48, _0x94a5a3, _0x39f4dc, _0x51f979, _0x363c93, _0x40e2e2, _0xdc1a9e, _0x4d7d88, _0x306d5a = (function() {
            var _0x28f343 = _0x5b8a80;
            function _0x125be0(_0x1196e2, _0x171c29) {
                this['Zo'] = _0x1196e2,
                this['$o'] = _0x171c29;
            }
            return _0x125be0[_0x28f343(0x66b)]['_o'] = function() {
                this['Zo']['Yo'](this['$o']);
            }
            ,
            _0x125be0;
        }());
        _0x258991 = $(_0x5b8a80(0x752)),
        _0x5a69aa = $(_0x5b8a80(0x758)),
        _0x183be9 = $(_0x5b8a80(0x43f)),
        _0x1e78c3 = $('#store-buy-coins_7000'),
        _0x2e542c = $('#store-buy-coins_3250'),
        _0x1680a2 = $(_0x5b8a80(0x206)),
        (_0x2c98e5 = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x234e57 = _0x5b8a80;
            _0x53b237['Ho']['call'](this, _0x3a706a['U'](_0x234e57(0x228)), ![]);
            var _0x28a8fa = this;
            _0x258991[_0x234e57(0x335)](function() {
                var _0x2fde0a = _0x234e57;
                ooo['ij']['if'](),
                _0x28a8fa['ap'](_0x2fde0a(0x214));
            }),
            _0x5a69aa[_0x234e57(0x335)](function() {
                var _0xa21207 = _0x234e57;
                ooo['ij']['if'](),
                _0x28a8fa['ap'](_0xa21207(0x3d8));
            }),
            _0x183be9[_0x234e57(0x335)](function() {
                var _0x48a54d = _0x234e57;
                ooo['ij']['if'](),
                _0x28a8fa['ap'](_0x48a54d(0x578));
            }),
            _0x1e78c3[_0x234e57(0x335)](function() {
                var _0x4fdad1 = _0x234e57;
                ooo['ij']['if'](),
                _0x28a8fa['ap'](_0x4fdad1(0x406));
            }),
            _0x2e542c[_0x234e57(0x335)](function() {
                ooo['ij']['if'](),
                _0x28a8fa['ap']('coins_3250');
            }),
            _0x1680a2[_0x234e57(0x335)](function() {
                var _0x160f3e = _0x234e57;
                ooo['ij']['if'](),
                _0x28a8fa['ap'](_0x160f3e(0x657));
            });
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {
            var _0x5200c1 = _0x5b8a80;
            _0x2c98e5[_0x5200c1(0x3bd)][_0x5200c1(0x66b)]['Sa'][_0x5200c1(0x45d)](this);
        }
        ,
        _0x2c98e5[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['g'](_0x53b237['Ho']['Mo'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x2c98e5[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x2c98e5[_0x5b8a80(0x66b)]['ap'] = function(_0x50d805) {}
        ,
        _0x53b237['Ik'] = _0x2c98e5,
        _0x2d7a76 = $(_0x5b8a80(0x40c)),
        _0x4e0e3d = $(_0x5b8a80(0x501)),
        _0x4debbc = $(_0x5b8a80(0x25b)),
        _0x3cd241 = $(_0x5b8a80(0x747)),
        _0x485f81 = _0x5b8a80(0x78e),
        _0x415b04 = 'byHighScore',
        _0x50ad04 = _0x5b8a80(0x2a9),
        (_0x3327c1 = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x84af99 = _0x5b8a80;
            _0x53b237['Ho'][_0x84af99(0x45d)](this, _0x3a706a['U']('index.game.popup.menu.leaders.tab'), !![]);
            var _0x3be015 = this;
            this['bp'] = {},
            this['cp'] = {
                'dp': {
                    'ep': _0x4e0e3d,
                    'fp': _0x485f81
                },
                'gp': {
                    'ep': _0x4debbc,
                    'fp': _0x415b04
                },
                'hp': {
                    'ep': _0x3cd241,
                    'fp': _0x50ad04
                }
            },
            _0x4e0e3d['click'](function() {
                ooo['ij']['if'](),
                _0x3be015['ip'](_0x3be015['cp']['dp']);
            }),
            _0x4debbc[_0x84af99(0x335)](function() {
                ooo['ij']['if'](),
                _0x3be015['ip'](_0x3be015['cp']['gp']);
            }),
            _0x3cd241[_0x84af99(0x335)](function() {
                ooo['ij']['if'](),
                _0x3be015['ip'](_0x3be015['cp']['hp']);
            });
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {
            var _0x398da7 = _0x5b8a80;
            _0x3327c1[_0x398da7(0x3bd)][_0x398da7(0x66b)]['Sa'][_0x398da7(0x45d)](this);
        }
        ,
        _0x3327c1[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['No'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x3327c1[_0x5b8a80(0x66b)]['nl'] = function() {
            var _0x143bc0 = _0x5b8a80
              , _0x3631dd = this;
            ooo['ij']['jf']();
            var _0x2396ee = this['Xo'](0x1388)
              , _0x45dbac = _0x69e837['H']['J'] + _0x143bc0(0x2ff);
            _0x3a706a['Aa'](_0x45dbac, function() {
                var _0x4345cf = {
                    [_0x485f81]: [],
                    [_0x415b04]: [],
                    [_0x50ad04]: []
                };
                _0x3631dd['bp'] = _0x4345cf,
                _0x3631dd['ip'](_0x3631dd['jp'] ?? _0x3631dd['cp']['dp']),
                _0x2396ee['_o']();
            }, function(_0x3093fe) {
                _0x3631dd['bp'] = _0x3093fe,
                _0x3631dd['ip'](_0x3631dd['jp'] ?? _0x3631dd['cp']['dp']),
                _0x2396ee['_o']();
            });
        }
        ,
        _0x3327c1['prototype']['ip'] = function(_0xc9db43) {
            var _0x5bac02 = _0x5b8a80;
            this['jp'] = _0xc9db43;
            for (var _0x5a26aa in this['cp']) {
                this['cp']['hasOwnProperty'](_0x5a26aa) && this['cp'][_0x5a26aa]['ep'][_0x5bac02(0x66f)](_0x5bac02(0x291));
            }
            ;this['jp']['ep'][_0x5bac02(0x4b5)](_0x5bac02(0x291));
            for (var _0x26ff33 = this['bp'][this['jp']['fp']], _0x39abae = '', _0x22e1c6 = 0x0; _0x22e1c6 < _0x26ff33[_0x5bac02(0x60c)]; _0x22e1c6++) {
                var _0x312bf4 = _0x26ff33[_0x22e1c6];
                _0x39abae += _0x5bac02(0x112) + (_0x22e1c6 + 0x1) + '</span><span><img\x20src=\x22' + _0x312bf4[_0x5bac02(0x2c0)] + _0x5bac02(0x411) + _0x312bf4[_0x5bac02(0x765)] + _0x5bac02(0x190) + _0x312bf4['level'] + _0x5bac02(0x190) + _0x312bf4[_0x5bac02(0x2a4)] + _0x5bac02(0x190) + _0x312bf4[_0x5bac02(0x355)] + _0x5bac02(0x1ab) + _0x312bf4[_0x5bac02(0x5ea)] + '</span></div>';
            }
            ;_0x2d7a76[_0x5bac02(0x6ae)](),
            _0x2d7a76[_0x5bac02(0x527)](_0x39abae);
        }
        ,
        _0x53b237['Kk'] = _0x3327c1,
        _0xd5fb4b = $(_0x5b8a80(0x220)),
        _0x59c3cc = $(_0x5b8a80(0x212)),
        (_0x20663c = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x2be380 = _0x5b8a80
              , _0xb82758 = this;
            _0x53b237['Ho']['call'](this, _0x3a706a['U']('index.game.popup.menu.login.tab'), ![]),
            _0xd5fb4b[_0x2be380(0x335)](function() {
                ooo['ij']['if']();
                var _0x5c7db1 = _0xb82758['Xo'](0x2710);
                _0x3a706a['Y'](function() {
                    ooo['ok']['sm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](),
                        _0x5c7db1['_o']();
                    });
                }, 0x1f4);
            }),
            _0x59c3cc[_0x2be380(0x335)](function() {
                ooo['ij']['if']();
                var _0x5d7802 = _0xb82758['Xo'](0x2710);
                _0x3a706a['Y'](function() {
                    ooo['ok']['pm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](),
                        _0x5d7802['_o']();
                    });
                }, 0x1f4);
            });
        }))['prototype']['Sa'] = function() {
            var _0x80961e = _0x5b8a80;
            _0x20663c[_0x80961e(0x3bd)][_0x80961e(0x66b)]['Sa'][_0x80961e(0x45d)](this);
        }
        ,
        _0x20663c[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['Po'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x20663c['prototype']['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x53b237['Ok'] = _0x20663c,
        _0x1f7068 = $('#profile-avatar'),
        _0x51542f = $(_0x5b8a80(0x78d)),
        _0x3be847 = $(_0x5b8a80(0x780)),
        _0x5a3f2b = $(_0x5b8a80(0x26d)),
        _0x51eccf = $('#profile-level'),
        _0x36285c = $('#profile-stat-highScore'),
        _0x5ce22c = $(_0x5b8a80(0x330)),
        _0x457662 = $(_0x5b8a80(0x271)),
        _0x292015 = $(_0x5b8a80(0x3d3)),
        _0x3bc348 = $(_0x5b8a80(0x3f0)),
        _0x4ab107 = $(_0x5b8a80(0x593)),
        _0xcc1129 = $(_0x5b8a80(0x1df)),
        (_0x282ddb = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            _0x53b237['Ho']['call'](this, _0x3a706a['U']('index.game.popup.menu.profile.tab'), !![]);
        }))['prototype']['Sa'] = function() {
            var _0x443e96 = _0x5b8a80;
            _0x282ddb[_0x443e96(0x3bd)]['prototype']['Sa'][_0x443e96(0x45d)](this);
        }
        ,
        _0x282ddb[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['Oo'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x282ddb['prototype']['nl'] = function() {
            var _0x4a03ec = _0x5b8a80;
            ooo['ij']['jf']();
            var _0x294af9 = ooo['ok']['dm']()
              , _0x2f9ca7 = moment([_0x294af9[_0x4a03ec(0x4e3)], _0x294af9[_0x4a03ec(0x6f7)] - 0x1, _0x294af9[_0x4a03ec(0x4e7)]])['format']('LL');
            _0x51542f[_0x4a03ec(0x26f)](ooo['ok']['Ll']()),
            _0x1f7068['attr']('src', ooo['ok']['Nl']()),
            _0x3be847['width'](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'),
            _0x5a3f2b['html'](ooo['ok']['Sl']() + _0x4a03ec(0x1ab) + ooo['ok']['Tl']()),
            _0x51eccf['html'](ooo['ok']['Rl']()),
            _0x36285c[_0x4a03ec(0x26f)](ooo['ok']['Zl']()),
            _0x5ce22c[_0x4a03ec(0x26f)](_0x3a706a['$'](ooo['ok']['$l']())),
            _0x457662[_0x4a03ec(0x26f)](ooo['ok']['_l']()),
            _0x292015[_0x4a03ec(0x26f)](ooo['ok']['am']()),
            _0x3bc348[_0x4a03ec(0x26f)](ooo['ok']['bm']()),
            _0x4ab107['html'](_0x3a706a['$'](ooo['ok']['cm']())),
            _0xcc1129[_0x4a03ec(0x26f)](_0x2f9ca7);
        }
        ,
        _0x53b237['Mk'] = _0x282ddb,
        _0x3314a1 = $(_0x5b8a80(0x5ad)),
        _0x3b9f80 = $(_0x5b8a80(0x5e2)),
        _0x23c83f = $('#settings-show-names-switch'),
        _0x2779c0 = $('#popup-logout'),
        _0x5bcdba = $(_0x5b8a80(0x5a9)),
        _0x19b2f9 = $(_0x5b8a80(0x324)),
        _0x502bfc = $('#popup-delete-account-container'),
        _0x3e5fe8 = $(_0x5b8a80(0x598)),
        (_0x5bda2c = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x15b1c9 = _0x5b8a80;
            _0x53b237['Ho'][_0x15b1c9(0x45d)](this, _0x3a706a['U'](_0x15b1c9(0x2c9)), ![]);
            var _0x2387e0 = this;
            _0x3314a1['click'](function() {
                var _0x50e915 = !!_0x3314a1['prop']('checked');
                _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Fg'], _0x50e915, 0x1e),
                ooo['ij']['$e'](_0x50e915),
                ooo['ij']['if']();
            }),
            _0x3b9f80[_0x15b1c9(0x335)](function() {
                var _0x2050a3 = _0x15b1c9
                  , _0xda5756 = !!_0x3b9f80[_0x2050a3(0x1d4)](_0x2050a3(0x586));
                _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Gg'], _0xda5756, 0x1e),
                ooo['ij']['Xe'](_0xda5756),
                ooo['ij']['if']();
            }),
            _0x23c83f[_0x15b1c9(0x335)](function() {
                ooo['ij']['if']();
            }),
            _0x2779c0[_0x15b1c9(0x335)](function() {
                ooo['ij']['if'](),
                _0x2387e0['Xo'](0x1f4),
                ooo['ok']['qm']();
            }),
            _0x19b2f9[_0x15b1c9(0x335)](function() {
                ooo['ok']['nk']() ? (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Fk'])) : ooo['ij']['nf']();
            }),
            _0x3e5fe8[_0x15b1c9(0x335)](function() {
                ooo['kp']() ? (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Dk'])) : ooo['ij']['nf']();
            });
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {
            var _0x2d6315 = _0x5b8a80, _0x263fcd, _0x28aece, _0x3e57e5;
            _0x5bda2c[_0x2d6315(0x3bd)][_0x2d6315(0x66b)]['Sa'][_0x2d6315(0x45d)](this),
            _0x263fcd = _0x53b237['Cg']['Og'](_0x53b237['Cg']['Fg']) !== 'false',
            _0x3314a1['prop'](_0x2d6315(0x586), _0x263fcd),
            ooo['ij']['$e'](_0x263fcd),
            _0x28aece = _0x53b237['Cg']['Og'](_0x53b237['Cg']['Gg']) !== _0x2d6315(0x667),
            _0x3b9f80[_0x2d6315(0x1d4)](_0x2d6315(0x586), _0x28aece),
            ooo['ij']['Xe'](_0x28aece),
            _0x3e57e5 = _0x53b237['Cg']['Og'](_0x53b237['Cg']['Eg']) !== _0x2d6315(0x667),
            _0x23c83f[_0x2d6315(0x1d4)](_0x2d6315(0x586), _0x3e57e5),
            ooo['ok']['em'](function() {
                var _0x52a6d4 = _0x2d6315;
                _0x5bcdba[_0x52a6d4(0x53f)](ooo['ok']['nk']()),
                _0x502bfc[_0x52a6d4(0x53f)](ooo['ok']['nk']());
            });
        }
        ,
        _0x5bda2c[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['Qo'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x5bda2c[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['jf'](),
            ooo['kp']() ? _0x3e5fe8['show']() : _0x3e5fe8['hide']();
        }
        ,
        _0x5bda2c[_0x5b8a80(0x66b)]['Gi'] = function() {
            var _0x2f8d70 = _0x5b8a80;
            return _0x23c83f[_0x2f8d70(0x1d4)](_0x2f8d70(0x586));
        }
        ,
        _0x53b237['Pk'] = _0x5bda2c,
        _0x31fbf9 = $(_0x5b8a80(0x761)),
        _0x2d826b = $(_0x5b8a80(0x502)),
        _0x5389ff = $(_0x5b8a80(0x3b8)),
        _0x11479d = $(_0x5b8a80(0x15f)),
        _0x3f92ad = $('#store-locked-bar-text'),
        _0x4a8ed7 = $(_0x5b8a80(0x1d2)),
        _0x525a36 = $(_0x5b8a80(0x5ce)),
        _0x3c5f71 = $(_0x5b8a80(0x5a3)),
        _0x25d998 = $(_0x5b8a80(0x59b)),
        _0x211ad3 = $(_0x5b8a80(0x49a)),
        (_0x46eee3 = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x1b8053 = _0x5b8a80;
            _0x53b237['Ho']['call'](this, _0x3a706a['U'](_0x1b8053(0x656)), !![]);
            var _0x326336 = this;
            this['lp'] = null,
            this['mp'] = [],
            this['np'] = {},
            this['op'] = new _0x53b237['Lm'](_0x31fbf9),
            _0x4a8ed7['click'](function() {
                ooo['ij']['if'](),
                _0x326336['pp']();
            }),
            _0x25d998[_0x1b8053(0x335)](function() {
                ooo['ij']['if'](),
                _0x326336['lp']['qp']();
            }),
            _0x211ad3[_0x1b8053(0x335)](function() {
                ooo['ij']['if'](),
                _0x326336['lp']['rp']();
            });
        }))['prototype']['Sa'] = function() {
            var _0x1e5e33 = _0x5b8a80;
            _0x46eee3['parent'][_0x1e5e33(0x66b)]['Sa']['call'](this);
            var _0x2eea51 = this;
            ooo['ud']['Jc'](function() {
                var _0x2940cf = _0x1e5e33
                  , _0x3c5a92 = ooo['ud']['Gc']();
                _0x2eea51['mp'] = [];
                for (var _0x35a750 = 0x0; _0x35a750 < _0x3c5a92['skinGroupArrayDict'][_0x2940cf(0x60c)]; _0x35a750++) {
                    _0x2eea51['mp'][_0x2940cf(0x1bc)](new _0x18663c(_0x2eea51,_0x3c5a92[_0x2940cf(0x4f1)][_0x35a750]));
                }
                ;_0x2eea51['np'] = {};
                for (var _0x3fabcb = 0x0; _0x3fabcb < _0x3c5a92[_0x2940cf(0x27b)]['length']; _0x3fabcb++) {
                    var _0x990a2d = _0x3c5a92[_0x2940cf(0x27b)][_0x3fabcb];
                    _0x2eea51['np'][_0x990a2d['id']] = _0x990a2d;
                }
                ;_0x2eea51['sp']();
            }),
            this['tp'](![]),
            ooo['so']['fk'](function() {
                _0x2eea51['tp'](![]);
            });
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['Ro'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['Ye'](_0x53b237['Pe']['Se']['Jf']),
            ooo['ij']['jf'](),
            this['sp'](),
            this['op']['rg'](!![]);
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['hl'] = function() {
            this['op']['rg'](![]);
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['qg'] = function() {
            this['op']['qg']();
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['ug'] = function(_0x1daad4, _0x5b3f40) {
            this['op']['ug']();
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['sp'] = function() {
            var _0x44423c = _0x5b8a80
              , _0x4ff36c = this
              , _0x312200 = this;
            _0x3c5f71[_0x44423c(0x6ae)]();
            for (var _0x33931e = 0x0; _0x33931e < this['mp'][_0x44423c(0x60c)]; _0x33931e++) {
                (function(_0x5848c1) {
                    var _0xafa53 = _0x44423c
                      , _0x4c41b6 = _0x4ff36c['mp'][_0x5848c1]
                      , _0x369b9b = _0x53b237['d'][_0xafa53(0x2ea)]('li');
                    _0x3c5f71[_0xafa53(0x527)](_0x369b9b);
                    var _0xd912f6 = $(_0x369b9b);
                    _0x312200['xp'] && _0x312200['xp']['isCustom'] && _0xd912f6[_0xafa53(0x4b5)](_0xafa53(0x440)),
                    _0xd912f6[_0xafa53(0x26f)](_0x4c41b6['up']()),
                    _0xd912f6[_0xafa53(0x335)](function() {
                        ooo['ij']['if'](),
                        _0x312200['vp'](_0x4c41b6);
                    }),
                    _0x4c41b6['wp'] = _0xd912f6;
                }(_0x33931e));
            }
            ;if (this['mp'][_0x44423c(0x60c)] > 0x0) {
                var _0x15b729 = ooo['so']['Zj'](_0x53b237['_j']['$j']);
                for (var _0x54f347 = 0x0; _0x54f347 < this['mp']['length']; _0x54f347++) {
                    var _0x53b296 = this['mp'][_0x54f347];
                    for (var _0x53ac00 = _0x53b296['xp']['list'], _0x27e7fa = 0x0; _0x27e7fa < _0x53ac00[_0x44423c(0x60c)]; _0x27e7fa++) {
                        if (_0x53ac00[_0x27e7fa] === _0x15b729) {
                            _0x53b296['yp'] = _0x27e7fa,
                            this['vp'](_0x53b296);
                            return;
                        }
                    }
                }
                ;this['vp'](this['mp'][0x0]);
            }
        }
        ,
        _0x46eee3['prototype']['vp'] = function(_0x21bbc0) {
            var _0x2f1a88 = _0x5b8a80;
            if (this['lp'] !== _0x21bbc0) {
                this['lp'] = _0x21bbc0,
                _0x3c5f71[_0x2f1a88(0x567)]()['removeClass']('pressed');
                this['lp']['wp'] && this['lp']['wp'][_0x2f1a88(0x4b5)](_0x2f1a88(0x291));
                _0x5389ff[_0x2f1a88(0x26f)]('');
                if (_0x21bbc0['xp'] != null) {
                    var _0x5cf981 = ooo['ud']['Gc']()[_0x2f1a88(0x6b4)][_0x21bbc0['xp']['description']];
                    _0x5cf981 != null && _0x5389ff[_0x2f1a88(0x26f)](_0x3a706a['aa'](_0x3a706a['V'](_0x5cf981)));
                }
                ;this['tp'](!![]);
            }
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['zp'] = function() {
            return this['lp'] == null ? _0x53b237['yj']['Aj']() : this['lp']['Ap']();
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['pp'] = function() {
            var _0x10c135 = this['zp']();
            if (_0x10c135['Cj']()) {
                var _0x328218 = _0x10c135['Mc']();
                this['Bp'](_0x328218);
            }
        }
        ,
        _0x46eee3['prototype']['Bp'] = function(_0x143171) {
            var _0x35b4c4 = ooo['so']['mk'](_0x143171, _0x53b237['_j']['$j']);
            if (_0x35b4c4 != null) {
                var _0x1cd120 = _0x35b4c4['pk']();
                if (!(ooo['ok']['Ql']() < _0x1cd120)) {
                    var _0x3516f2 = ooo['so']['Zj'](_0x53b237['_j']['$j'])
                      , _0x1874c4 = ooo['so']['Zj'](_0x53b237['_j']['ak'])
                      , _0x1f3144 = ooo['so']['Zj'](_0x53b237['_j']['bk'])
                      , _0x2c23b0 = ooo['so']['Zj'](_0x53b237['_j']['dk'])
                      , _0x5f40df = ooo['so']['Zj'](_0x53b237['_j']['ck'])
                      , _0x3094c5 = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x143171, _0x53b237['_j']['$j'], function() {
                        _0x3094c5['_o'](),
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x3516f2, _0x53b237['_j']['$j']),
                            ooo['so']['lk'](_0x1874c4, _0x53b237['_j']['ak']),
                            ooo['so']['lk'](_0x1f3144, _0x53b237['_j']['bk']),
                            ooo['so']['lk'](_0x2c23b0, _0x53b237['_j']['dk']),
                            ooo['so']['lk'](_0x5f40df, _0x53b237['_j']['ck']),
                            ooo['so']['lk'](_0x143171, _0x53b237['_j']['$j']),
                            _0x3094c5['_o']();
                        });
                    });
                }
            }
        }
        ,
        _0x46eee3[_0x5b8a80(0x66b)]['tp'] = function(_0x9eac0d) {
            var _0x2e4fe8 = _0x5b8a80
              , _0x45c19d = ooo['so']['ek']()
              , _0x355710 = this['zp']();
            if (_0x355710['Cj']()) {
                var _0x44d926 = _0x355710['Mc']()
                  , _0x1c4e40 = ooo['so']['mk'](_0x44d926, _0x53b237['_j']['$j'])
                  , _0x35ce9a = ![];
                $(_0x2e4fe8(0x289))['remove'](),
                $(_0x2e4fe8(0x458))[_0x2e4fe8(0x47e)](),
                $(_0x2e4fe8(0x49b))['remove'](),
                $(_0x2e4fe8(0x402))['remove'](),
                $(_0x2e4fe8(0x1dd))[_0x2e4fe8(0x47e)]();
                if (ooo['so']['ik'](_0x44d926, _0x53b237['_j']['$j'])) {
                    _0x11479d[_0x2e4fe8(0x3af)](),
                    _0x4a8ed7[_0x2e4fe8(0x3af)]();
                    var _0x96a7c3 = $('<div\x20class=\x27fav-buttons-container\x27\x20style=\x27margin:10px;display:flex;gap:5px;position:fixed;left:140px;top:110px;z-index:1000;\x27></div>')
                      , _0x110b22 = $(_0x2e4fe8(0x312))
                      , _0x3954f6 = $(_0x2e4fe8(0x141));
                    _0x96a7c3[_0x2e4fe8(0x527)](_0x110b22),
                    _0x96a7c3[_0x2e4fe8(0x527)](_0x3954f6),
                    _0x3c5f71[_0x2e4fe8(0x527)](_0x96a7c3);
                    var _0x51babe = $(_0x2e4fe8(0x749))[_0x2e4fe8(0x479)]('id', _0x2e4fe8(0x2d5))[_0x2e4fe8(0x4fa)]({
                        'position': _0x2e4fe8(0x429),
                        'left': _0x2e4fe8(0x5ff),
                        'top': _0x2e4fe8(0x734),
                        'font-size': _0x2e4fe8(0x3b5),
                        'color': _0x2e4fe8(0x2bc),
                        'z-index': _0x2e4fe8(0x2a6)
                    })[_0x2e4fe8(0x159)](_0x2e4fe8(0x3c5))[_0x2e4fe8(0x574)](_0x3c5f71)
                      , _0x2d9154 = $(_0x2e4fe8(0x592));
                    $(_0x2e4fe8(0x2b0))[_0x2e4fe8(0x527)](_0x2d9154),
                    $('.close-favorites')[_0x2e4fe8(0x335)](function() {
                        var _0x4c6331 = _0x2e4fe8;
                        $('.favorites-popup')[_0x4c6331(0x3af)]();
                    }),
                    $(document)['mouseup'](function(_0xea4afe) {
                        var _0x5140f4 = _0x2e4fe8
                          , _0x3d4a84 = $(_0x5140f4(0x1dd));
                        !_0x3d4a84['is'](_0xea4afe['target']) && _0x3d4a84[_0x5140f4(0x37a)](_0xea4afe[_0x5140f4(0x6d5)])[_0x5140f4(0x60c)] === 0x0 && _0x3d4a84['hide']();
                    }),
                    $[_0x2e4fe8(0x6f1)]($(_0x2e4fe8(0x318)), function() {
                        var _0x2929ea = _0x2e4fe8;
                        $(this)['attr']('id') !== _0x2929ea(0x2d5) && $(this)[_0x2929ea(0x47e)]();
                    }),
                    $(_0x2e4fe8(0x695))['on'](_0x2e4fe8(0x150), function() {
                        var _0x3b3c39 = _0x2e4fe8;
                        $(this)['css'](_0x3b3c39(0x618), _0x3b3c39(0x65a));
                    }),
                    $(_0x2e4fe8(0x1dd))['on'](_0x2e4fe8(0x606), function() {
                        setTimeout(function() {
                            var _0x1f0c84 = _0x1792;
                            $(_0x1f0c84(0x695))[_0x1f0c84(0x34d)](0x0);
                        }, 0x64);
                    }),
                    $('.clear-all-favorites')[_0x2e4fe8(0x335)](function() {
                        var _0x282b0a = _0x2e4fe8;
                        confirm(_0x282b0a(0x11c)) && (_0x444d21[_0x282b0a(0x27e)] = [],
                        localStorage['setItem'](_0x282b0a(0x432), JSON['stringify'](_0x444d21)),
                        _0x1a217e(),
                        _0x110b22 && _0x110b22['is'](':visible') && _0x110b22[_0x282b0a(0x159)](_0x282b0a(0x19b))['css']('background-color', '#4CAF50'));
                    }),
                    _0x110b22[_0x2e4fe8(0x335)](function() {
                        var _0x191f73 = _0x2e4fe8
                          , _0x2bb8ba = _0x44d926;
                        !_0x444d21['favoriteSkins'] && (_0x444d21['favoriteSkins'] = []);
                        var _0x36648a = ![];
                        try {
                            for (var _0x32e43f = 0x0; _0x32e43f < _0x444d21['favoriteSkins']['length']; _0x32e43f++) {
                                if (_0x444d21[_0x191f73(0x27e)][_0x32e43f] === _0x2bb8ba) {
                                    _0x36648a = !![];
                                    break;
                                }
                            }
                        } catch (_0x3da772) {
                            _0x444d21['favoriteSkins'] = [];
                        }
                        if (!_0x36648a)
                            _0x444d21[_0x191f73(0x27e)][_0x191f73(0x1bc)](_0x2bb8ba),
                            localStorage[_0x191f73(0x128)](_0x191f73(0x432), JSON[_0x191f73(0x608)](_0x444d21)),
                            $(this)[_0x191f73(0x159)]('X')[_0x191f73(0x4fa)](_0x191f73(0x317), '#f44336');
                        else {
                            var _0x226108 = _0x444d21[_0x191f73(0x27e)]['indexOf'](_0x2bb8ba);
                            _0x444d21['favoriteSkins']['splice'](_0x226108, 0x1),
                            localStorage[_0x191f73(0x128)]('SaveGamewx', JSON['stringify'](_0x444d21)),
                            $(this)[_0x191f73(0x159)](_0x191f73(0x19b))[_0x191f73(0x4fa)]('background-color', _0x191f73(0x703));
                        }
                    }),
                    _0x3954f6[_0x2e4fe8(0x335)](function() {
                        var _0x47f9df = _0x2e4fe8;
                        $[_0x47f9df(0x6f1)]($(_0x47f9df(0x318)), function(_0x228a99) {
                            _0x228a99 > 0x0 && $(this)['remove']();
                        }),
                        _0x1a217e(),
                        $(_0x47f9df(0x1dd))[_0x47f9df(0x288)]();
                    });
                } else {
                    if (_0x1c4e40 == null || _0x1c4e40['qk']()) {
                        _0x35ce9a = !![],
                        _0x11479d[_0x2e4fe8(0x288)](),
                        _0x4a8ed7[_0x2e4fe8(0x3af)](),
                        _0x3f92ad[_0x2e4fe8(0x159)](_0x3a706a['U'](_0x2e4fe8(0x3a2)));
                        if (_0x1c4e40 != null && _0x1c4e40['qk']()) {
                            var _0x5677bb = ooo['ud']['Gc']()['textDict'][_0x1c4e40['ln']()];
                            _0x5677bb != null && _0x3f92ad[_0x2e4fe8(0x159)](_0x3a706a['V'](_0x5677bb));
                        }
                    } else
                        _0x11479d[_0x2e4fe8(0x3af)](),
                        _0x4a8ed7['show'](),
                        _0x525a36[_0x2e4fe8(0x26f)](_0x1c4e40['pk']());
                }
                _0x2d826b[_0x2e4fe8(0x26f)]('');
                if (_0x1c4e40 != null && _0x1c4e40['mn']() != null) {
                    var _0x5b9a85 = ooo['ud']['Gc']()[_0x2e4fe8(0x6b4)][_0x1c4e40['mn']()];
                    _0x5b9a85 != null && _0x2d826b[_0x2e4fe8(0x26f)](_0x3a706a['aa'](_0x3a706a['V'](_0x5b9a85)));
                }
                StoreSkinID && _0x44d926 && StoreSkinID[_0x2e4fe8(0x26f)](_0x44d926),
                this['op']['Gm'](_0x45c19d['Cn'](_0x44d926)),
                this['op']['an'](_0x35ce9a),
                _0x9eac0d && ooo['so']['lk'](_0x44d926, _0x53b237['_j']['$j']);
            }
        }
        ;
        function _0x2f0bd4() {
            var _0x11d9e6 = _0x5b8a80;
            !_0x444d21['favoriteSkins'] && (_0x444d21[_0x11d9e6(0x27e)] = [],
            localStorage[_0x11d9e6(0x128)](_0x11d9e6(0x432), JSON[_0x11d9e6(0x608)](_0x444d21)));
            if (_0x444d21[_0x11d9e6(0x27e)][_0x11d9e6(0x60c)] > 0x0) {
                _0x444d21[_0x11d9e6(0x2b8)] === undefined ? _0x444d21[_0x11d9e6(0x2b8)] = 0x0 : _0x444d21[_0x11d9e6(0x2b8)] = (_0x444d21[_0x11d9e6(0x2b8)] + 0x1) % _0x444d21[_0x11d9e6(0x27e)]['length'];
                var _0x42a203 = _0x444d21[_0x11d9e6(0x27e)][_0x444d21[_0x11d9e6(0x2b8)]];
                _0x8c65f2(_0x42a203),
                localStorage[_0x11d9e6(0x128)](_0x11d9e6(0x432), JSON['stringify'](_0x444d21));
            }
        }
        function _0x8c65f2(_0x19e292) {
            ooo['so']['lk'](_0x19e292, _0x53b237['_j']['$j']);
            if (_0x38c4fe && _0x38c4fe['n'] && _0x38c4fe['n']['Je']) {
                var _0x164aac = ooo['ud']['Cc']()['Tb'](_0x19e292);
                _0x38c4fe['uj'] && _0x164aac && _0x38c4fe['uj']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](_0x38c4fe['n']['mi']), _0x164aac, ooo['ud']['Cc']()['Vb'](_0x38c4fe['n']['Vi']), ooo['ud']['Cc']()['Wb'](_0x38c4fe['n']['Wi']), ooo['ud']['Cc']()['Xb'](_0x38c4fe['n']['Xi']), ooo['ud']['Cc']()['Yb'](_0x38c4fe['n']['Yi']), '#ffffff');
            }
        }
        function _0x3c9a51(_0x31f1dc, _0x400de2) {
            var _0x3ec273 = _0x5b8a80;
            if (!_0x31f1dc)
                return '';
            if (_0x31f1dc['startsWith'](_0x3ec273(0x442)))
                return _0x31f1dc;
            if (_0x31f1dc[_0x3ec273(0x1f2)](_0x3ec273(0x342)))
                return _0x31f1dc[_0x3ec273(0x3e8)]('http') ? _0x31f1dc[_0x3ec273(0x390)](/https?:\/\/[^\/]+/, _0x3ec273(0x353)) : _0x3ec273(0x353) + _0x31f1dc;
            if (_0x31f1dc['includes']('/images/skins/'))
                return _0x3ec273(0x5e0) + _0x31f1dc;
            if (_0x31f1dc[_0x3ec273(0x1f2)](_0x3ec273(0x2ae)))
                return 'https://resources.wormate.io' + _0x31f1dc;
            if (_0x31f1dc[_0x3ec273(0x1f2)](_0x3ec273(0x67e)))
                return 'https://wormx.store' + _0x31f1dc;
            if (!_0x31f1dc[_0x3ec273(0x3e8)]('http'))
                return 'https://wormate.io' + _0x31f1dc;
            return _0x31f1dc;
        }
        function _0x1e743d(_0x2adc8e) {
            var _0x554f42 = _0x5b8a80;
            !_0x444d21[_0x554f42(0x27e)] && (_0x444d21[_0x554f42(0x27e)] = []);
            var _0x35e8e2 = ![];
            for (var _0x124fdb = 0x0; _0x124fdb < _0x444d21['favoriteSkins'][_0x554f42(0x60c)]; _0x124fdb++) {
                if (_0x444d21[_0x554f42(0x27e)][_0x124fdb] === _0x2adc8e) {
                    _0x35e8e2 = !![];
                    break;
                }
            }
            !_0x35e8e2 && (_0x444d21['favoriteSkins']['push'](_0x2adc8e),
            localStorage['setItem']('SaveGamewx', JSON[_0x554f42(0x608)](_0x444d21)));
        }
        function _0x268e2f() {
            var _0x4fa1d6 = _0x5b8a80;
            if ($('#open-favorites-btn')[_0x4fa1d6(0x60c)] === 0x0) {
                var _0x327a22 = $(_0x4fa1d6(0x5c7));
                $('<style>#open-favorites-btn\x20{\x20position:\x20absolute;\x20top:\x2010px;\x20right:\x2010px;\x20background:\x20#4CAF50;\x20color:\x20white;\x20border:\x20none;\x20padding:\x205px\x2010px;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20z-index:\x201000;\x20}#open-favorites-btn:hover\x20{\x20background:\x20#45a049;\x20}</style>')[_0x4fa1d6(0x574)](_0x4fa1d6(0x25e)),
                _0x327a22[_0x4fa1d6(0x335)](function() {
                    var _0x3a33d3 = _0x4fa1d6;
                    _0x1a217e(),
                    $(_0x3a33d3(0x1dd))[_0x3a33d3(0x288)]();
                }),
                $(_0x4fa1d6(0x3c1))[_0x4fa1d6(0x60c)] > 0x0 && ($(_0x4fa1d6(0x3c1))[_0x4fa1d6(0x3bd)]()[_0x4fa1d6(0x4fa)](_0x4fa1d6(0x722), _0x4fa1d6(0x215)),
                $(_0x4fa1d6(0x3c1))[_0x4fa1d6(0x3bd)]()[_0x4fa1d6(0x527)](_0x327a22));
            }
        }
        function _0x155920(_0x3b10b6) {
            var _0x3c0a4f = _0x5b8a80;
            _0x444d21[_0x3c0a4f(0x27e)] && _0x3b10b6 >= 0x0 && _0x3b10b6 < _0x444d21[_0x3c0a4f(0x27e)][_0x3c0a4f(0x60c)] && (_0x444d21[_0x3c0a4f(0x27e)][_0x3c0a4f(0x687)](_0x3b10b6, 0x1),
            localStorage[_0x3c0a4f(0x128)](_0x3c0a4f(0x432), JSON[_0x3c0a4f(0x608)](_0x444d21)),
            _0x1a217e());
        }
        function _0x1a217e() {
            var _0x3c8757 = _0x5b8a80
              , _0x595da7 = $(_0x3c8757(0x174));
            _0x595da7[_0x3c8757(0x6ae)]();
            !_0x444d21['favoriteSkins'] && (_0x444d21[_0x3c8757(0x27e)] = [],
            localStorage['setItem'](_0x3c8757(0x432), JSON[_0x3c8757(0x608)](_0x444d21)));
            try {
                if (_0x444d21['favoriteSkins'][_0x3c8757(0x60c)] > 0x0)
                    for (var _0x25ab5a = 0x0; _0x25ab5a < _0x444d21[_0x3c8757(0x27e)][_0x3c8757(0x60c)]; _0x25ab5a++) {
                        var _0x232435 = _0x444d21[_0x3c8757(0x27e)][_0x25ab5a]
                          , _0x29daeb = $(_0x3c8757(0x749))[_0x3c8757(0x479)](_0x3c8757(0x52e), _0x25ab5a)['attr']('data-skin-id', _0x232435)[_0x3c8757(0x4fa)]({
                            'display': _0x3c8757(0x609),
                            'flex-direction': _0x3c8757(0x1cf),
                            'align-items': _0x3c8757(0x56c),
                            'padding': '2px',
                            'background': '#252538',
                            'border-radius': _0x3c8757(0x385),
                            'position': _0x3c8757(0x215),
                            'height': _0x3c8757(0x6c2),
                            'width': _0x3c8757(0x43a)
                        })
                          , _0x5e315a = $('<div>')[_0x3c8757(0x4fa)]({
                            'width': _0x3c8757(0x43a),
                            'height': _0x3c8757(0x6be),
                            'background': _0x3c8757(0x4ac),
                            'border-radius': _0x3c8757(0x4c7),
                            'overflow': _0x3c8757(0x5b6),
                            'position': 'relative',
                            'display': 'flex',
                            'justify-content': 'center',
                            'align-items': _0x3c8757(0x56c)
                        })[_0x3c8757(0x574)](_0x29daeb)
                          , _0x3ef9ac = $(_0x3c8757(0x117))[_0x3c8757(0x159)]('X')[_0x3c8757(0x4fa)]({
                            'position': _0x3c8757(0x17d),
                            'top': _0x3c8757(0x33c),
                            'right': '3px',
                            'background': _0x3c8757(0x63a),
                            'color': _0x3c8757(0x6fe),
                            'border': _0x3c8757(0x19e),
                            'padding': _0x3c8757(0x535),
                            'border-radius': _0x3c8757(0x33c),
                            'cursor': _0x3c8757(0x511),
                            'font-size': _0x3c8757(0x168),
                            'z-index': '20'
                        })[_0x3c8757(0x574)](_0x29daeb)
                          , _0x46a72f = _0x187bbb(_0x232435);
                        _0x5e315a[_0x3c8757(0x527)](_0x46a72f),
                        _0x595da7[_0x3c8757(0x527)](_0x29daeb),
                        _0x3ef9ac[_0x3c8757(0x335)](function() {
                            var _0x13b24d = _0x3c8757
                              , _0x3ce6a5 = $(this)[_0x13b24d(0x467)](_0x13b24d(0x63e))
                              , _0x29a573 = parseInt(_0x3ce6a5[_0x13b24d(0x479)](_0x13b24d(0x52e)));
                            _0x444d21['favoriteSkins'] && _0x29a573 >= 0x0 && _0x29a573 < _0x444d21[_0x13b24d(0x27e)][_0x13b24d(0x60c)] && (_0x444d21['favoriteSkins'][_0x13b24d(0x687)](_0x29a573, 0x1),
                            localStorage[_0x13b24d(0x128)](_0x13b24d(0x432), JSON[_0x13b24d(0x608)](_0x444d21)),
                            _0x3ce6a5[_0x13b24d(0x545)](0x12c, function() {
                                var _0x3b9d63 = _0x13b24d;
                                $(this)['remove'](),
                                _0x595da7[_0x3b9d63(0x25f)]('[data-index]')[_0x3b9d63(0x6f1)](function(_0xf43a02) {
                                    var _0x36456f = _0x3b9d63;
                                    $(this)[_0x36456f(0x479)](_0x36456f(0x52e), _0xf43a02);
                                }),
                                _0x444d21['favoriteSkins'][_0x3b9d63(0x60c)] === 0x0 && _0x34eafe(_0x595da7);
                            }));
                        });
                    }
                else
                    _0x34eafe(_0x595da7);
            } catch (_0x3536f9) {
                _0x595da7['append'](_0x3c8757(0x532));
            }
        }
        function _0x34eafe(_0x2f08a1) {
            var _0x23fe07 = _0x5b8a80;
            _0x2f08a1[_0x23fe07(0x527)](_0x23fe07(0x729));
        }
        function _0x187bbb(_0x416818) {
            var _0x51f61a = _0x5b8a80;
            !window[_0x51f61a(0x640)] && (window[_0x51f61a(0x640)] = {});
            try {
                let _0x1aab6e = null;
                if (typeof ooo !== _0x51f61a(0x3fa)) {
                    if (ooo['ud'] && ooo['ud']['Gc'])
                        _0x1aab6e = ooo['ud']['Gc']();
                    else {
                        if (ooo['ok'] && ooo['ok']['xl'] && ooo['ok']['xl'][_0x51f61a(0x341)])
                            _0x1aab6e = ooo['ok']['xl'][_0x51f61a(0x341)];
                        else
                            window[_0x51f61a(0x53b)] && (_0x1aab6e = window[_0x51f61a(0x53b)]);
                    }
                }
                if (!_0x1aab6e) {
                    const _0x3c233b = localStorage[_0x51f61a(0x325)]('wupsw');
                    if (_0x3c233b)
                        try {
                            _0x1aab6e = JSON[_0x51f61a(0x75f)](_0x3c233b);
                        } catch (_0x5d43af) {}
                }
                if (!_0x1aab6e)
                    throw new Error('Game\x20data\x20not\x20available');
                let _0x3d04ca = null;
                if (_0x1aab6e[_0x51f61a(0x27b)] && Array['isArray'](_0x1aab6e[_0x51f61a(0x27b)]))
                    _0x3d04ca = _0x1aab6e['skinArrayDict'];
                else {
                    if (_0x1aab6e[_0x51f61a(0x1f3)] && Array[_0x51f61a(0x735)](_0x1aab6e['skins']))
                        _0x3d04ca = _0x1aab6e[_0x51f61a(0x1f3)];
                    else
                        throw new Error(_0x51f61a(0x42f));
                }
                let _0x33a023 = null;
                for (let _0x200896 = 0x0; _0x200896 < _0x3d04ca[_0x51f61a(0x60c)]; _0x200896++) {
                    if (_0x3d04ca[_0x200896] && _0x3d04ca[_0x200896]['id'] === _0x416818) {
                        _0x33a023 = _0x3d04ca[_0x200896];
                        break;
                    }
                }
                if (!_0x33a023)
                    throw new Error(_0x51f61a(0x5b7));
                const _0x1e3f49 = document[_0x51f61a(0x2ea)](_0x51f61a(0x2ec));
                _0x1e3f49[_0x51f61a(0x75d)]['cssText'] = _0x51f61a(0x219);
                const _0x485847 = document[_0x51f61a(0x2ea)](_0x51f61a(0x2ec));
                _0x485847['textContent'] = '#' + _0x416818,
                _0x485847[_0x51f61a(0x75d)][_0x51f61a(0x216)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                _0x1e3f49['appendChild'](_0x485847);
                const _0x5718b6 = document[_0x51f61a(0x2ea)](_0x51f61a(0x12c));
                _0x5718b6['width'] = 0x258,
                _0x5718b6[_0x51f61a(0x67d)] = 0x50,
                _0x5718b6['style'][_0x51f61a(0x216)] = _0x51f61a(0x2da),
                _0x1e3f49[_0x51f61a(0x513)](_0x5718b6);
                const _0x538d38 = _0x5718b6['getContext']('2d');
                _0x538d38['clearRect'](0x0, 0x0, _0x5718b6[_0x51f61a(0x612)], _0x5718b6[_0x51f61a(0x67d)]);
                if (_0x33a023['base'] && Array[_0x51f61a(0x735)](_0x33a023[_0x51f61a(0x237)]) && _0x33a023[_0x51f61a(0x237)][_0x51f61a(0x60c)] > 0x0) {
                    let _0x1cd55c = {}
                      , _0x60d454 = [];
                    _0x33a023[_0x51f61a(0x237)][_0x51f61a(0x58d)](_0x115962 => {
                        var _0x4e08eb = _0x51f61a;
                        if (!_0x115962)
                            return;
                        if (_0x1aab6e[_0x4e08eb(0x16a)] && _0x1aab6e['regionDict'][_0x115962]) {
                            const _0x49051c = _0x1aab6e[_0x4e08eb(0x16a)][_0x115962];
                            if (_0x1aab6e[_0x4e08eb(0x1cb)] && _0x49051c[_0x4e08eb(0x310)] && _0x1aab6e[_0x4e08eb(0x1cb)][_0x49051c[_0x4e08eb(0x310)]]) {
                                const _0x4f4f9e = _0x1aab6e[_0x4e08eb(0x1cb)][_0x49051c[_0x4e08eb(0x310)]];
                                if (_0x4f4f9e && (_0x4f4f9e['file'] || _0x4f4f9e[_0x4e08eb(0x631)])) {
                                    let _0x28493f = _0x3c9a51(_0x4f4f9e['relativePath'] || _0x4f4f9e[_0x4e08eb(0x13e)], _0x49051c['texture']);
                                    !_0x1cd55c[_0x28493f] && (_0x1cd55c[_0x28493f] = []),
                                    _0x1cd55c[_0x28493f]['push']({
                                        'id': _0x115962,
                                        'region': _0x49051c
                                    }),
                                    _0x60d454[_0x4e08eb(0x1bc)]({
                                        'id': _0x115962,
                                        'region': _0x49051c
                                    });
                                }
                            }
                        }
                    }
                    );
                    const _0x4825a4 = [..._0x60d454][_0x51f61a(0x654)]();
                    let _0x32eee0 = [..._0x4825a4];
                    while (_0x32eee0[_0x51f61a(0x60c)] < 0x1b) {
                        const _0x14a143 = 0x1b - _0x32eee0[_0x51f61a(0x60c)]
                          , _0x2659f7 = _0x4825a4[_0x51f61a(0x699)](0x0, Math[_0x51f61a(0x51c)](_0x14a143, _0x4825a4[_0x51f61a(0x60c)]));
                        _0x32eee0 = [..._0x32eee0, ..._0x2659f7];
                    }
                    const _0x428f86 = 0x50
                      , _0x58d6bf = _0x428f86 / 0x2
                      , _0x48080a = 0.2
                      , _0x1ae1d8 = _0x428f86 * _0x48080a * _0x32eee0['length'] + _0x428f86 * 0.75;
                    _0x5718b6[_0x51f61a(0x612)] = Math['max'](0x258, _0x1ae1d8),
                    _0x538d38[_0x51f61a(0x434)](0x0, 0x0, _0x5718b6['width'], _0x5718b6[_0x51f61a(0x67d)]);
                    let _0x4fb9b4 = 0x0;
                    const _0x2be70e = Object[_0x51f61a(0x4b6)](_0x1cd55c)[_0x51f61a(0x60c)];
                    function _0x1b9a25(_0x5af672) {
                        _0x10c6a6(_0x5af672);
                    }
                    function _0x10c6a6(_0x4c5c88) {
                        var _0x689e01 = _0x51f61a;
                        const _0x281854 = _0x5718b6[_0x689e01(0x67d)] / 0x2;
                        _0x32eee0[_0x689e01(0x58d)]( (_0x804005, _0xa85fea) => {
                            var _0x315335 = _0x689e01;
                            if (!_0x804005)
                                return;
                            const _0x5780ca = _0x804005['region']
                              , _0x4ffb87 = _0x58d6bf + _0xa85fea * _0x58d6bf * 0x2 * _0x48080a;
                            _0x538d38[_0x315335(0x71b)](),
                            _0x538d38['beginPath'](),
                            _0x538d38['arc'](_0x4ffb87, _0x281854, _0x58d6bf, 0x0, Math['PI'] * 0x2),
                            _0x538d38[_0x315335(0x67f)]();
                            const _0xa8422e = Math[_0x315335(0x470)](_0x5780ca['w'], _0x5780ca['h'])
                              , _0x5a2264 = _0x58d6bf * 0x2 / _0xa8422e
                              , _0x2e3830 = _0x4ffb87 - _0x5780ca['w'] * _0x5a2264 / 0x2
                              , _0x3bb603 = _0x281854 - _0x5780ca['h'] * _0x5a2264 / 0x2;
                            _0x538d38['drawImage'](_0x4c5c88, _0x5780ca['x'], _0x5780ca['y'], _0x5780ca['w'], _0x5780ca['h'], _0x2e3830, _0x3bb603, _0x5780ca['w'] * _0x5a2264, _0x5780ca['h'] * _0x5a2264),
                            _0x538d38[_0x315335(0x13a)]();
                        }
                        );
                    }
                    return Object[_0x51f61a(0x4b6)](_0x1cd55c)[_0x51f61a(0x58d)](_0x416805 => {
                        var _0x1cfcb5 = _0x51f61a;
                        if (window[_0x1cfcb5(0x640)][_0x416805]) {
                            _0x1b9a25(window[_0x1cfcb5(0x640)][_0x416805]);
                            return;
                        }
                        const _0x455d73 = new Image();
                        _0x455d73['onload'] = () => {
                            var _0x6ae0d4 = _0x1cfcb5;
                            window[_0x6ae0d4(0x640)][_0x416805] = _0x455d73,
                            _0x1b9a25(_0x455d73),
                            _0x4fb9b4++;
                        }
                        ,
                        _0x455d73[_0x1cfcb5(0x66a)] = () => {
                            _0x4fb9b4++;
                        }
                        ,
                        _0x455d73[_0x1cfcb5(0x39e)] = _0x416805;
                    }
                    ),
                    _0x1e3f49;
                }
            } catch (_0x37014e) {
                const _0x5817fe = document[_0x51f61a(0x2ea)]('div');
                return _0x5817fe[_0x51f61a(0x75d)][_0x51f61a(0x216)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                _0x5817fe[_0x51f61a(0x3a8)] = '⚠️',
                _0x5817fe;
            }
            const _0x14a8b2 = document[_0x51f61a(0x2ea)]('div');
            return _0x14a8b2[_0x51f61a(0x75d)]['cssText'] = _0x51f61a(0x1ec),
            _0x14a8b2['textContent'] = '🎮',
            _0x14a8b2;
        }
        _0x18663c = (function() {
            var _0x31b83c = _0x5b8a80;
            function _0x5c0255(_0x28ea30, _0xcb98e6) {
                this['Cp'] = _0x28ea30,
                this['yp'] = 0x0,
                this['xp'] = _0xcb98e6;
            }
            return _0x5c0255[_0x31b83c(0x66b)]['qp'] = function() {
                var _0x5c5bf5 = _0x31b83c;
                --this['yp'] < 0x0 && (this['yp'] = this['xp'][_0x5c5bf5(0x57b)][_0x5c5bf5(0x60c)] - 0x1),
                this['Cp']['tp'](!![]);
            }
            ,
            _0x5c0255[_0x31b83c(0x66b)]['rp'] = function() {
                var _0x5e135d = _0x31b83c;
                ++this['yp'] >= this['xp'][_0x5e135d(0x57b)][_0x5e135d(0x60c)] && (this['yp'] = 0x0),
                this['Cp']['tp'](!![]);
            }
            ,
            _0x5c0255['prototype']['up'] = function() {
                var _0x8a230 = _0x31b83c;
                let _0x46eeee = _0x3a706a['V'](this['xp']['name']);
                return this['xp'][_0x8a230(0x72c)] && ((this['xp'][_0x8a230(0x72c)][_0x8a230(0x6e4)](_0x8a230(0x2bf)) == -0x1 || !(_0x46eeee = '<img\x20src=\x22' + this['xp'][_0x8a230(0x72c)] + _0x8a230(0x2af))) && (this['xp'][_0x8a230(0x72c)][_0x8a230(0x6e4)](_0x8a230(0x2c7)) == -0x1 || !(_0x46eeee = _0x8a230(0x455) + this['xp']['img'] + _0x8a230(0x2af))) && (_0x46eeee = _0x8a230(0x455) + _0x444d21[_0x8a230(0x688)] + '/images/' + this['xp'][_0x8a230(0x72c)] + '\x22\x20height=\x2240\x22\x20/>')),
                _0x46eeee;
            }
            ,
            _0x5c0255['prototype']['Ap'] = function() {
                var _0x411f63 = _0x31b83c;
                return this['yp'] >= this['xp'][_0x411f63(0x57b)][_0x411f63(0x60c)] ? _0x53b237['yj']['Aj']() : _0x53b237['yj']['Bj'](this['xp']['list'][this['yp']]);
            }
            ,
            _0x5c0255;
        }()),
        _0x53b237['Rk'] = _0x46eee3,
        _0x2ac727 = $(_0x5b8a80(0x5b1)),
        _0x59a32b = $(_0x5b8a80(0x398)),
        _0x317621 = $(_0x5b8a80(0x46e)),
        (_0x30a949 = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x1bc2c6 = _0x5b8a80;
            _0x53b237['Ho']['call'](this, _0x3a706a['U'](_0x1bc2c6(0x6d9)), !![]),
            _0x2ac727['click'](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hk']);
            }),
            _0x59a32b[_0x1bc2c6(0x335)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Qk']);
            }),
            _0x317621['click'](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Uk']);
            });
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {
            var _0x4e888f = _0x5b8a80;
            _0x30a949[_0x4e888f(0x3bd)][_0x4e888f(0x66b)]['Sa'][_0x4e888f(0x45d)](this);
        }
        ,
        _0x30a949[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['So'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x30a949[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x53b237['Tk'] = _0x30a949,
        _0x5bd893 = $('#wear-view-canv'),
        _0x5a5b97 = $('#wear-description-text'),
        _0xd692a = $('#wear-locked-bar'),
        _0x7ffef = $(_0x5b8a80(0x3cc)),
        _0x2c9747 = $(_0x5b8a80(0x40f)),
        _0x28de82 = $(_0x5b8a80(0x3c3)),
        _0x1e57cb = $(_0x5b8a80(0x6e7)),
        _0x5173a7 = $(_0x5b8a80(0x347)),
        _0x5bd4af = $(_0x5b8a80(0x2e9)),
        _0x4bd91a = $(_0x5b8a80(0x4d5)),
        _0x4192f4 = $(_0x5b8a80(0x533)),
        _0x1598e3 = $('#wear-view-prev'),
        _0x283329 = $('#wear-view-next'),
        (_0x5dd9b4 = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x4a45e2 = _0x5b8a80
              , _0x5da151 = this;
            _0x53b237['Ho'][_0x4a45e2(0x45d)](this, _0x3a706a['U'](_0x4a45e2(0x4b4)), !![]);
            var _0x47011e = this;
            this['Dp'] = [],
            this['ak'] = new _0x42ed44(this,_0x53b237['_j']['ak'],_0x1e57cb),
            this['bk'] = new _0x42ed44(this,_0x53b237['_j']['bk'],_0x5173a7),
            this['dk'] = new _0x42ed44(this,_0x53b237['_j']['dk'],_0x5bd4af),
            this['ck'] = new _0x42ed44(this,_0x53b237['_j']['ck'],_0x4bd91a),
            this['Ep'] = null,
            this['Fp'] = null,
            this['Gp'] = null,
            this['Hp'] = null,
            this['Ip'] = null,
            this['Jp'] = null,
            this['op'] = new _0x53b237['Lm'](_0x5bd893),
            _0x2c9747[_0x4a45e2(0x335)](function() {
                ooo['ij']['if'](),
                _0x47011e['Kp']();
            }),
            _0x1598e3['click'](function() {
                ooo['ij']['if'](),
                _0x47011e['Ep']['Lp']();
            }),
            _0x283329[_0x4a45e2(0x335)](function() {
                ooo['ij']['if'](),
                _0x47011e['Ep']['Mp']();
            }),
            _0x1e57cb[_0x4a45e2(0x335)](function() {
                ooo['ij']['if'](),
                _0x47011e['Np'](_0x5da151['ak']);
            }),
            _0x5173a7['click'](function() {
                ooo['ij']['if'](),
                _0x47011e['Np'](_0x5da151['bk']);
            }),
            _0x5bd4af[_0x4a45e2(0x335)](function() {
                ooo['ij']['if'](),
                _0x47011e['Np'](_0x5da151['dk']);
            }),
            _0x4bd91a['click'](function() {
                ooo['ij']['if'](),
                _0x47011e['Np'](_0x5da151['ck']);
            }),
            this['Dp']['push'](this['ak']),
            this['Dp'][_0x4a45e2(0x1bc)](this['bk']),
            this['Dp'][_0x4a45e2(0x1bc)](this['dk']),
            this['Dp'][_0x4a45e2(0x1bc)](this['ck']);
        }))['prototype']['Sa'] = function() {
            var _0x4c4bc8 = _0x5b8a80;
            _0x5dd9b4[_0x4c4bc8(0x3bd)][_0x4c4bc8(0x66b)]['Sa'][_0x4c4bc8(0x45d)](this);
            var _0x49453e = this;
            ooo['ud']['Jc'](function() {
                var _0x4c3694 = _0x4c4bc8
                  , _0x2c82e9 = ooo['ud']['Gc']();
                _0x49453e['Fp'] = _0x2c82e9[_0x4c3694(0x75e)],
                _0x49453e['Gp'] = _0x2c82e9[_0x4c3694(0x74b)],
                _0x49453e['Hp'] = _0x2c82e9[_0x4c3694(0x5a7)],
                _0x49453e['Ip'] = _0x2c82e9[_0x4c3694(0x28b)],
                _0x49453e['Jp'] = _0x2c82e9[_0x4c3694(0x4a2)],
                _0x49453e['ak']['Op'](_0x2c82e9[_0x4c3694(0x3b7)]),
                _0x49453e['ak']['Pp'](_0x49453e['Fp']),
                _0x49453e['bk']['Op'](_0x2c82e9[_0x4c3694(0x211)]),
                _0x49453e['bk']['Pp'](_0x49453e['Gp']),
                _0x49453e['dk']['Op'](_0x2c82e9[_0x4c3694(0x666)]),
                _0x49453e['dk']['Pp'](_0x49453e['Hp']),
                _0x49453e['ck']['Op'](_0x2c82e9[_0x4c3694(0x3a0)]),
                _0x49453e['ck']['Pp'](_0x49453e['Ip']);
            }),
            this['tp'](![]),
            ooo['so']['fk'](function() {
                _0x49453e['tp'](![]);
            });
        }
        ,
        _0x5dd9b4[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['To'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x5dd9b4['prototype']['nl'] = function() {
            ooo['ij']['Ye'](_0x53b237['Pe']['Se']['Jf']),
            ooo['ij']['jf'](),
            this['Np'](this['Ep'] ?? this['ak']),
            this['op']['rg'](!![]);
        }
        ,
        _0x5dd9b4[_0x5b8a80(0x66b)]['hl'] = function() {
            this['op']['rg'](![]);
        }
        ,
        _0x5dd9b4[_0x5b8a80(0x66b)]['qg'] = function() {
            this['op']['qg']();
        }
        ,
        _0x5dd9b4['prototype']['ug'] = function(_0x568a19, _0x29d386) {
            this['op']['ug']();
        }
        ,
        _0x5dd9b4[_0x5b8a80(0x66b)]['Np'] = function(_0x3ca711) {
            var _0x5952af = _0x5b8a80;
            this['Ep'] = _0x3ca711;
            for (var _0x1536ae = 0x0; _0x1536ae < this['Dp'][_0x5952af(0x60c)]; _0x1536ae++) {
                this['Dp'][_0x1536ae]['ep']['removeClass'](_0x5952af(0x291));
            }
            ;this['Ep']['ep']['addClass'](_0x5952af(0x291)),
            this['Ep']['ml']();
        }
        ,
        _0x5dd9b4[_0x5b8a80(0x66b)]['Qp'] = function() {
            return this['Ep'] == null ? _0x53b237['yj']['Aj']() : _0x53b237['yj']['Bj']({
                'Je': this['Ep']['Ap'](),
                'Wd': this['Ep']['Wd']
            });
        }
        ,
        _0x5dd9b4['prototype']['Kp'] = function() {
            var _0x49c872 = this['Qp']();
            if (_0x49c872['Cj']()) {
                var _0x1b96f0 = _0x49c872['Mc']();
                this['Rp'](_0x1b96f0['Je'], _0x1b96f0['Wd']);
            }
        }
        ,
        _0x5dd9b4[_0x5b8a80(0x66b)]['Rp'] = function(_0x47d443, _0x266a96) {
            var _0x21b3e6 = ooo['so']['mk'](_0x47d443, _0x266a96);
            if (_0x21b3e6 != null) {
                var _0x3ce747 = _0x21b3e6['pk']();
                if (!(ooo['ok']['Ql']() < _0x3ce747)) {
                    var _0x4edd02 = ooo['so']['Zj'](_0x53b237['_j']['$j'])
                      , _0x6802e7 = ooo['so']['Zj'](_0x53b237['_j']['ak'])
                      , _0x45b253 = ooo['so']['Zj'](_0x53b237['_j']['bk'])
                      , _0x1648b7 = ooo['so']['Zj'](_0x53b237['_j']['dk'])
                      , _0x575408 = ooo['so']['Zj'](_0x53b237['_j']['ck'])
                      , _0xfc9df5 = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x47d443, _0x266a96, function() {
                        _0xfc9df5['_o'](),
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x4edd02, _0x53b237['_j']['$j']),
                            ooo['so']['lk'](_0x6802e7, _0x53b237['_j']['ak']),
                            ooo['so']['lk'](_0x45b253, _0x53b237['_j']['bk']),
                            ooo['so']['lk'](_0x1648b7, _0x53b237['_j']['dk']),
                            ooo['so']['lk'](_0x575408, _0x53b237['_j']['ck']),
                            ooo['so']['lk'](_0x47d443, _0x266a96),
                            _0xfc9df5['_o']();
                        });
                    });
                }
            }
        }
        ,
        window[_0x5b8a80(0x259)] = window[_0x5b8a80(0x259)] || {},
        _0x5dd9b4[_0x5b8a80(0x66b)]['tp'] = function(_0x2b6a57) {
            var _0x1034d0 = _0x5b8a80
              , _0x198f95 = ooo['so']['ek']()
              , _0xcf32f7 = this['Qp']();
            if (_0xcf32f7['Cj']()) {
                var _0x2a17e2 = _0xcf32f7['Mc']()
                  , _0x2d913d = ooo['so']['mk'](_0x2a17e2['Je'], _0x2a17e2['Wd'])
                  , _0x46ed0f = ![];
                !_0x2a17e2[_0x1034d0(0x58b)] && (_0x2a17e2[_0x1034d0(0x58b)] = []);
                if (ooo['so']['ik'](_0x2a17e2['Je'], _0x2a17e2['Wd']))
                    _0xd692a[_0x1034d0(0x3af)](),
                    _0x2c9747[_0x1034d0(0x3af)](),
                    _0x2a17e2['Wd'] === _0x1034d0(0x47f) ? this[_0x1034d0(0x42a)](_0x2a17e2['Je']) : this[_0x1034d0(0x3c4)]();
                else {
                    if (_0x2d913d == null || _0x2d913d['qk']()) {
                        _0x46ed0f = !![],
                        _0xd692a[_0x1034d0(0x288)](),
                        _0x2c9747[_0x1034d0(0x3af)](),
                        _0x7ffef[_0x1034d0(0x159)](_0x3a706a['U'](_0x1034d0(0x3a2)));
                        if (_0x2d913d != null && _0x2d913d['qk']()) {
                            var _0x2d2344 = ooo['ud']['Gc']()['textDict'][_0x2d913d['ln']()];
                            _0x2d2344 != null && _0x7ffef[_0x1034d0(0x159)](_0x3a706a['V'](_0x2d2344));
                        }
                        this['removeHatButtons']();
                    } else
                        _0xd692a[_0x1034d0(0x3af)](),
                        _0x2c9747[_0x1034d0(0x288)](),
                        _0x28de82[_0x1034d0(0x26f)](_0x2d913d['pk']()),
                        this[_0x1034d0(0x3c4)]();
                }
                _0x5a5b97['html']('');
                if (_0x2d913d != null && _0x2d913d['mn']() != null) {
                    var _0x57d8dd = ooo['ud']['Gc']()['textDict'][_0x2d913d['mn']()];
                    _0x57d8dd != null && _0x5a5b97['html'](_0x3a706a['aa'](_0x3a706a['V'](_0x57d8dd)));
                }
                var _0x16d226 = this['op'];
                switch (_0x2a17e2['Wd']) {
                case _0x1034d0(0x4f2):
                    _0x16d226['Gm'](_0x198f95['Dn'](_0x2a17e2['Je'])),
                    _0x16d226['bn'](_0x46ed0f);
                    break;
                case _0x1034d0(0x572):
                    _0x16d226['Gm'](_0x198f95['En'](_0x2a17e2['Je'])),
                    _0x16d226['cn'](_0x46ed0f);
                    break;
                case 'GLASSES':
                    _0x16d226['Gm'](_0x198f95['Gn'](_0x2a17e2['Je'])),
                    _0x16d226['en'](_0x46ed0f);
                    break;
                case _0x1034d0(0x47f):
                    _0x16d226['Gm'](_0x198f95['Fn'](_0x2a17e2['Je'])),
                    _0x16d226['dn'](_0x46ed0f);
                    break;
                }
                _0x2b6a57 && ooo['so']['lk'](_0x2a17e2['Je'], _0x2a17e2['Wd']);
            }
        }
        ,
        _0x5dd9b4['prototype'][_0x5b8a80(0x42a)] = function(_0x46d01d) {
            var _0x5a503c = _0x5b8a80;
            this[_0x5a503c(0x122)] = _0x46d01d;
            if (!this['hatButtonContainer']) {
                this['hatButtonContainer'] = $(_0x5a503c(0x749))[_0x5a503c(0x479)]('id', _0x5a503c(0x16d))[_0x5a503c(0x4fa)]({
                    'position': 'absolute',
                    'bottom': _0x5a503c(0x230),
                    'left': _0x5a503c(0x1e1),
                    'display': _0x5a503c(0x609),
                    'gap': _0x5a503c(0x1e4)
                })[_0x5a503c(0x574)](_0x5a503c(0x41e)),
                this[_0x5a503c(0x2b3)] = $(_0x5a503c(0x117))[_0x5a503c(0x479)]('id', 'hat-toggle-button')['css']({
                    'padding': _0x5a503c(0x192),
                    'background-color': _0x5a503c(0x703),
                    'color': _0x5a503c(0x6fe),
                    'border': _0x5a503c(0x19e),
                    'border-radius': _0x5a503c(0x4c7),
                    'cursor': _0x5a503c(0x511),
                    'min-width': _0x5a503c(0x61f)
                })[_0x5a503c(0x574)](this['hatButtonContainer']),
                this[_0x5a503c(0x6e3)] = $('<button>')[_0x5a503c(0x479)]('id', _0x5a503c(0x2fc))[_0x5a503c(0x4fa)]({
                    'padding': _0x5a503c(0x192),
                    'background-color': '#2196F3',
                    'color': _0x5a503c(0x6fe),
                    'border': 'none',
                    'border-radius': _0x5a503c(0x4c7),
                    'cursor': _0x5a503c(0x511)
                })[_0x5a503c(0x159)](_0x5a503c(0x177))[_0x5a503c(0x574)](this['hatButtonContainer']),
                this[_0x5a503c(0x558)] = $(_0x5a503c(0x749))[_0x5a503c(0x479)]('id', _0x5a503c(0x1c0))[_0x5a503c(0x4fa)]({
                    'position': _0x5a503c(0x17d),
                    'bottom': _0x5a503c(0x613),
                    'left': '-5px',
                    'font-size': _0x5a503c(0x3b5),
                    'color': _0x5a503c(0x2bc)
                })[_0x5a503c(0x159)](_0x5a503c(0x5ac))[_0x5a503c(0x574)](_0x5a503c(0x41e));
                var _0x4b4d89 = this;
                this['hatFavoritesButton']['on'](_0x5a503c(0x335), function() {
                    var _0x11cc64 = _0x5a503c;
                    _0x4b4d89[_0x11cc64(0x5bd)]();
                });
            }
            let _0x19b1ed = _0x444d21['selectedHats'][_0x5a503c(0x1f2)](_0x46d01d);
            this['hatToggleButton']['text'](_0x19b1ed ? 'X' : _0x5a503c(0x19b)),
            this[_0x5a503c(0x2b3)][_0x5a503c(0x4fa)]('background-color', _0x19b1ed ? '#f44336' : '#4CAF50'),
            this[_0x5a503c(0x2b3)]['off'](_0x5a503c(0x335));
            var _0x4b4d89 = this;
            this[_0x5a503c(0x2b3)]['on'](_0x5a503c(0x335), function() {
                var _0x4c5d84 = _0x5a503c;
                let _0xbbfadd = _0x444d21['selectedHats']['indexOf'](_0x46d01d);
                _0xbbfadd >= 0x0 ? (_0x444d21[_0x4c5d84(0x58b)][_0x4c5d84(0x687)](_0xbbfadd, 0x1),
                $(this)[_0x4c5d84(0x159)](_0x4c5d84(0x13d))[_0x4c5d84(0x4fa)](_0x4c5d84(0x317), _0x4c5d84(0x703))) : (_0x444d21[_0x4c5d84(0x58b)]['push'](_0x46d01d),
                $(this)[_0x4c5d84(0x159)]('X')[_0x4c5d84(0x4fa)]('background-color', _0x4c5d84(0x63a))),
                localStorage['setItem'](_0x4c5d84(0x432), JSON['stringify'](_0x444d21));
            }),
            this[_0x5a503c(0x6fd)]['show'](),
            this[_0x5a503c(0x558)][_0x5a503c(0x288)]();
        }
        ,
        _0x5dd9b4[_0x5b8a80(0x66b)]['removeHatButtons'] = function() {
            var _0x4b2082 = _0x5b8a80;
            this[_0x4b2082(0x6fd)] && this[_0x4b2082(0x6fd)][_0x4b2082(0x3af)](),
            this['hatInfoText'] && this[_0x4b2082(0x558)]['hide']();
        }
        ;
        function _0x147be1(_0x3beb52) {
            var _0x4c925e = _0x5b8a80;
            try {
                if (window[_0x4c925e(0x259)][_0x3beb52] && window[_0x4c925e(0x259)][_0x3beb52][_0x4c925e(0x66e)])
                    return window[_0x4c925e(0x259)][_0x3beb52];
                const _0x44b9bf = ooo['ud']['Cc']()['Yb'](_0x3beb52);
                if (!_0x44b9bf || !_0x44b9bf['dc'] || !_0x44b9bf['dc'][_0x4c925e(0x60c)])
                    return null;
                const _0x5f4484 = _0x44b9bf['dc'][0x0];
                let _0x3ad174 = null;
                if (_0x5f4484['_a'] !== undefined)
                    _0x3ad174 = {
                        'x': _0x5f4484['_a'] || 0x0,
                        'y': _0x5f4484['ab'] || 0x0,
                        'width': _0x5f4484['bb'] || 0x0,
                        'height': _0x5f4484['cb'] || 0x0
                    };
                else {
                    if (_0x5f4484[_0x4c925e(0x193)])
                        _0x3ad174 = {
                            'x': _0x5f4484[_0x4c925e(0x193)]['x'] || 0x0,
                            'y': _0x5f4484[_0x4c925e(0x193)]['y'] || 0x0,
                            'width': _0x5f4484['_frame'][_0x4c925e(0x612)] || 0x0,
                            'height': _0x5f4484['_frame'][_0x4c925e(0x67d)] || 0x0
                        };
                    else {
                        if (_0x5f4484[_0x4c925e(0x6df)])
                            _0x3ad174 = {
                                'x': _0x5f4484[_0x4c925e(0x6df)]['x'] || 0x0,
                                'y': _0x5f4484['orig']['y'] || 0x0,
                                'width': _0x5f4484[_0x4c925e(0x6df)]['width'] || 0x0,
                                'height': _0x5f4484[_0x4c925e(0x6df)]['height'] || 0x0
                            };
                        else
                            _0x5f4484['va'] && _0x5f4484['va'][_0x4c925e(0x60c)] >= 0x4 && (_0x3ad174 = {
                                'x': _0x5f4484['va'][0x0] || 0x0,
                                'y': _0x5f4484['va'][0x1] || 0x0,
                                'width': _0x5f4484['va'][0x2] || 0x0,
                                'height': _0x5f4484['va'][0x3] || 0x0
                            });
                    }
                }
                let _0x58a27d = null;
                if (_0x5f4484['Za'] && _0x5f4484['Za']['baseTexture'] && _0x5f4484['Za'][_0x4c925e(0x307)][_0x4c925e(0x63b)] && _0x5f4484['Za']['baseTexture']['resource']['source'])
                    _0x58a27d = _0x5f4484['Za'][_0x4c925e(0x307)][_0x4c925e(0x63b)][_0x4c925e(0x1bd)];
                else {
                    if (_0x5f4484[_0x4c925e(0x307)] && _0x5f4484[_0x4c925e(0x307)][_0x4c925e(0x63b)] && _0x5f4484[_0x4c925e(0x307)][_0x4c925e(0x63b)][_0x4c925e(0x1bd)])
                        _0x58a27d = _0x5f4484['baseTexture'][_0x4c925e(0x63b)][_0x4c925e(0x1bd)];
                    else {
                        if (_0x5f4484[_0x4c925e(0x307)] && _0x5f4484[_0x4c925e(0x307)][_0x4c925e(0x63b)] && _0x5f4484['baseTexture']['resource']['data'])
                            _0x58a27d = _0x5f4484[_0x4c925e(0x307)][_0x4c925e(0x63b)][_0x4c925e(0x56d)];
                        else
                            _0x5f4484[_0x4c925e(0x307)] && _0x5f4484[_0x4c925e(0x307)][_0x4c925e(0x1bd)] && (_0x58a27d = _0x5f4484[_0x4c925e(0x307)]['source']);
                    }
                }
                const _0xe5eaeb = {
                    'hatId': _0x3beb52,
                    'image': _0x58a27d || null,
                    'coords': _0x3ad174 || null,
                    'textureData': _0x5f4484,
                    'hatData': _0x44b9bf,
                    'valid': _0x58a27d && _0x3ad174 ? !![] : ![]
                };
                return window[_0x4c925e(0x259)][_0x3beb52] = _0xe5eaeb,
                _0xe5eaeb;
            } catch (_0x1ea7ca) {
                return null;
            }
        }
        function _0xddb510(_0x4b85cc) {
            var _0x5eb556 = _0x5b8a80;
            try {
                const _0x5e4e82 = document[_0x5eb556(0x2ea)](_0x5eb556(0x2ec));
                _0x5e4e82[_0x5eb556(0x75d)][_0x5eb556(0x216)] = _0x5eb556(0x4fb);
                const _0x386fad = document[_0x5eb556(0x2ea)](_0x5eb556(0x2ec));
                _0x386fad[_0x5eb556(0x3a8)] = '#' + _0x4b85cc,
                _0x386fad[_0x5eb556(0x75d)][_0x5eb556(0x216)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                _0x5e4e82[_0x5eb556(0x513)](_0x386fad);
                const _0x2e776c = document['createElement'](_0x5eb556(0x12c));
                _0x2e776c[_0x5eb556(0x612)] = 0x50,
                _0x2e776c[_0x5eb556(0x67d)] = 0x50,
                _0x2e776c[_0x5eb556(0x75d)]['cssText'] = _0x5eb556(0x655),
                _0x5e4e82['appendChild'](_0x2e776c);
                const _0x4f408c = _0x2e776c[_0x5eb556(0x6ff)]('2d', {
                    'willReadFrequently': !![]
                });
                _0x4f408c['clearRect'](0x0, 0x0, _0x2e776c[_0x5eb556(0x612)], _0x2e776c[_0x5eb556(0x67d)]);
                const _0x41f73c = _0x147be1(_0x4b85cc);
                if (!_0x41f73c || !_0x41f73c['image'] || !_0x41f73c['coords'])
                    return _0x4f408c['fillStyle'] = _0x5eb556(0x469),
                    _0x4f408c[_0x5eb556(0x529)](0x0, 0x0, _0x2e776c[_0x5eb556(0x612)], _0x2e776c['height']),
                    _0x4f408c[_0x5eb556(0x2cc)] = _0x5eb556(0x6fe),
                    _0x4f408c[_0x5eb556(0x196)] = '18px\x20Arial',
                    _0x4f408c[_0x5eb556(0x415)] = _0x5eb556(0x56c),
                    _0x4f408c[_0x5eb556(0x6b8)]('#' + _0x4b85cc, _0x2e776c['width'] / 0x2, _0x2e776c[_0x5eb556(0x67d)] / 0x2),
                    _0x5e4e82;
                try {
                    if (_0x41f73c[_0x5eb556(0x3cb)]) {
                        _0x4f408c['save']();
                        const _0x4d3a17 = Math[_0x5eb556(0x51c)]((_0x2e776c['width'] - 0xa) / _0x41f73c[_0x5eb556(0x3cb)][_0x5eb556(0x612)], (_0x2e776c[_0x5eb556(0x67d)] - 0xa) / _0x41f73c[_0x5eb556(0x3cb)]['height']) * 0.9
                          , _0x1ef021 = _0x41f73c['coords'][_0x5eb556(0x612)] * _0x4d3a17
                          , _0x5dba9e = _0x41f73c['coords'][_0x5eb556(0x67d)] * _0x4d3a17
                          , _0x157101 = (_0x2e776c['width'] - _0x1ef021) / 0x2
                          , _0x264239 = (_0x2e776c['height'] - _0x5dba9e) / 0x2;
                        _0x4f408c[_0x5eb556(0x3ea)](_0x41f73c[_0x5eb556(0x5d0)], _0x41f73c[_0x5eb556(0x3cb)]['x'], _0x41f73c[_0x5eb556(0x3cb)]['y'], _0x41f73c[_0x5eb556(0x3cb)][_0x5eb556(0x612)], _0x41f73c['coords'][_0x5eb556(0x67d)], _0x157101, _0x264239, _0x1ef021, _0x5dba9e),
                        _0x4f408c[_0x5eb556(0x13a)]();
                    } else {
                        const _0x3dec68 = Math[_0x5eb556(0x51c)]((_0x2e776c['width'] - 0xa) / _0x41f73c[_0x5eb556(0x5d0)][_0x5eb556(0x612)], (_0x2e776c[_0x5eb556(0x67d)] - 0xa) / _0x41f73c[_0x5eb556(0x5d0)][_0x5eb556(0x67d)]) * 0.8
                          , _0x3225a9 = _0x41f73c[_0x5eb556(0x5d0)]['width'] * _0x3dec68
                          , _0x308d0e = _0x41f73c[_0x5eb556(0x5d0)][_0x5eb556(0x67d)] * _0x3dec68
                          , _0x408a5b = (_0x2e776c['width'] - _0x3225a9) / 0x2
                          , _0x30c7fd = (_0x2e776c[_0x5eb556(0x67d)] - _0x308d0e) / 0x2;
                        _0x4f408c[_0x5eb556(0x3ea)](_0x41f73c['image'], _0x408a5b, _0x30c7fd, _0x3225a9, _0x308d0e);
                    }
                } catch (_0x3a2717) {
                    _0x4f408c[_0x5eb556(0x2cc)] = _0x5eb556(0x469),
                    _0x4f408c[_0x5eb556(0x529)](0x0, 0x0, _0x2e776c[_0x5eb556(0x612)], _0x2e776c['height']),
                    _0x4f408c['fillStyle'] = _0x5eb556(0x6fe),
                    _0x4f408c['font'] = '18px\x20Arial',
                    _0x4f408c['textAlign'] = _0x5eb556(0x56c),
                    _0x4f408c[_0x5eb556(0x6b8)]('#' + _0x4b85cc, _0x2e776c[_0x5eb556(0x612)] / 0x2, _0x2e776c['height'] / 0x2);
                }
                return _0x5e4e82;
            } catch (_0x1c9b93) {
                const _0x102c29 = document[_0x5eb556(0x2ea)](_0x5eb556(0x2ec));
                return _0x102c29[_0x5eb556(0x75d)][_0x5eb556(0x216)] = _0x5eb556(0x3a3),
                _0x102c29[_0x5eb556(0x3a8)] = '#' + _0x4b85cc,
                _0x102c29;
            }
        }
        _0x5dd9b4['prototype']['showFavoritesDialog'] = function() {
            var _0x144161 = _0x5b8a80;
            $(_0x144161(0x270))['remove']();
            var _0x551b52 = $(_0x144161(0x749))[_0x144161(0x479)]('id', _0x144161(0x5cb))[_0x144161(0x4fa)]({
                'position': _0x144161(0x429),
                'top': '0',
                'left': '0',
                'width': _0x144161(0x43a),
                'height': _0x144161(0x43a),
                'background-color': _0x144161(0x4eb),
                'z-index': _0x144161(0x3e0)
            })[_0x144161(0x574)]('body')
              , _0x541972 = $(_0x144161(0x749))[_0x144161(0x479)]('id', _0x144161(0x6de))['css']({
                'position': _0x144161(0x429),
                'top': _0x144161(0x18e),
                'left': _0x144161(0x18e),
                'transform': _0x144161(0x1b4),
                'background-color': '#1e1e2f',
                'border-radius': '8px',
                'box-shadow': _0x144161(0x1de),
                'z-index': _0x144161(0x2a6),
                'width': _0x144161(0x2e5),
                'overflow': _0x144161(0x1e3),
                'color': _0x144161(0x6fe)
            })[_0x144161(0x574)](_0x144161(0x2b0))
              , _0x4c0402 = $('<div>')['css']({
                'padding': _0x144161(0x6db),
                'background-color': _0x144161(0x31a),
                'border-bottom': _0x144161(0x726),
                'position': 'relative',
                'display': _0x144161(0x609),
                'justify-content': 'space-between',
                'align-items': _0x144161(0x56c)
            })[_0x144161(0x574)](_0x541972);
            $(_0x144161(0x49d))[_0x144161(0x159)](_0x144161(0x1fa))['css']({
                'margin': _0x144161(0x302),
                'font-size': _0x144161(0x388),
                'color': _0x144161(0x6fe),
                'padding-left': _0x144161(0x5fb)
            })['appendTo'](_0x4c0402);
            var _0x328b9e = $('<button>')[_0x144161(0x26f)](_0x144161(0x634))['css']({
                'position': _0x144161(0x17d),
                'top': '8px',
                'left': _0x144161(0x613),
                'font-size': '22px',
                'background': _0x144161(0x19e),
                'border': _0x144161(0x19e),
                'color': _0x144161(0x63f),
                'cursor': 'pointer',
                'padding': _0x144161(0x15d),
                'line-height': '1',
                'font-weight': _0x144161(0x742)
            })['appendTo'](_0x4c0402)
              , _0x377f56 = $(_0x144161(0x117))[_0x144161(0x159)](_0x144161(0x50a))['css']({
                'padding': _0x144161(0x58c),
                'background-color': '#f44336',
                'color': _0x144161(0x6fe),
                'border': _0x144161(0x19e),
                'border-radius': _0x144161(0x4c7),
                'cursor': _0x144161(0x511),
                'font-size': _0x144161(0x3b5)
            })['appendTo'](_0x4c0402)
              , _0x4cc831 = $(_0x144161(0x749))[_0x144161(0x479)]('id', 'favorites-content')[_0x144161(0x4fa)]({
                'padding': _0x144161(0x6db),
                'max-height': _0x144161(0x11b),
                'overflow-y': 'auto'
            })[_0x144161(0x574)](_0x541972)
              , _0x32de46 = $(_0x144161(0x749))[_0x144161(0x479)](_0x144161(0x4b1), _0x144161(0x615))['css']({
                'display': _0x144161(0x23b),
                'grid-template-columns': _0x144161(0x4de),
                'gap': _0x144161(0x3b5),
                'padding': '0',
                'margin': '0'
            })[_0x144161(0x574)](_0x4cc831)
              , _0x387306 = this;
            _0x377f56['on'](_0x144161(0x335), function() {
                var _0x4001ae = _0x144161;
                confirm(_0x4001ae(0x3d0)) && (_0x444d21['selectedHats'] = [],
                localStorage[_0x4001ae(0x128)](_0x4001ae(0x432), JSON[_0x4001ae(0x608)](_0x444d21)),
                _0x32de46['empty'](),
                $('<div>')['css']({
                    'text-align': _0x4001ae(0x56c),
                    'padding': _0x4001ae(0x613),
                    'color': _0x4001ae(0x63f),
                    'margin': _0x4001ae(0x1b1),
                    'grid-column': _0x4001ae(0x17c)
                })[_0x4001ae(0x159)](_0x4001ae(0x204))['appendTo'](_0x32de46),
                _0x387306[_0x4001ae(0x2b3)] && _0x387306[_0x4001ae(0x2b3)]['is'](_0x4001ae(0x3ad)) && _0x387306[_0x4001ae(0x2b3)][_0x4001ae(0x159)](_0x4001ae(0x19b))[_0x4001ae(0x4fa)](_0x4001ae(0x317), _0x4001ae(0x703)));
            });
            function _0x3371a3() {
                var _0x34ec57 = _0x144161;
                _0x541972[_0x34ec57(0x47e)](),
                _0x551b52[_0x34ec57(0x47e)]();
            }
            _0x328b9e['on'](_0x144161(0x335), _0x3371a3),
            _0x551b52['on'](_0x144161(0x335), _0x3371a3),
            !_0x444d21[_0x144161(0x58b)] || _0x444d21[_0x144161(0x58b)][_0x144161(0x60c)] === 0x0 ? $('<div>')[_0x144161(0x4fa)]({
                'text-align': 'center',
                'padding': '10px',
                'color': _0x144161(0x63f),
                'margin': _0x144161(0x1b1),
                'grid-column': _0x144161(0x401)
            })[_0x144161(0x159)](_0x144161(0x204))['appendTo'](_0x32de46) : (_0x444d21['selectedHats'][_0x144161(0x58d)](function(_0x212221) {
                _0x147be1(_0x212221);
            }),
            _0x444d21['selectedHats'][_0x144161(0x58d)](function(_0x216a82, _0x2cc4cd) {
                var _0x3fc9b3 = _0x144161
                  , _0x7ca60e = $('<div>')['attr'](_0x3fc9b3(0x52e), _0x2cc4cd)[_0x3fc9b3(0x479)]('data-hat-id', _0x216a82)[_0x3fc9b3(0x4fa)]({
                    'display': _0x3fc9b3(0x609),
                    'flex-direction': 'column',
                    'align-items': 'center',
                    'padding': '2px',
                    'background': _0x3fc9b3(0x31a),
                    'border-radius': _0x3fc9b3(0x385),
                    'position': 'relative',
                    'height': _0x3fc9b3(0x261),
                    'width': _0x3fc9b3(0x43a)
                })[_0x3fc9b3(0x574)](_0x32de46)
                  , _0x50d047 = $(_0x3fc9b3(0x749))['css']({
                    'width': '100%',
                    'height': _0x3fc9b3(0x540),
                    'background': _0x3fc9b3(0x4ac),
                    'border-radius': _0x3fc9b3(0x4c7),
                    'overflow': _0x3fc9b3(0x5b6),
                    'position': 'relative',
                    'display': _0x3fc9b3(0x609),
                    'justify-content': 'center',
                    'align-items': 'center'
                })['appendTo'](_0x7ca60e)
                  , _0xa3d2c7 = $(_0x3fc9b3(0x117))['text']('X')[_0x3fc9b3(0x4fa)]({
                    'position': 'absolute',
                    'top': _0x3fc9b3(0x4c7),
                    'right': '4px',
                    'background': _0x3fc9b3(0x63a),
                    'color': 'white',
                    'border': _0x3fc9b3(0x19e),
                    'padding': _0x3fc9b3(0x1ee),
                    'border-radius': _0x3fc9b3(0x33c),
                    'cursor': _0x3fc9b3(0x511),
                    'font-size': _0x3fc9b3(0x3b5),
                    'z-index': '20'
                })[_0x3fc9b3(0x574)](_0x7ca60e)
                  , _0x10f446 = _0xddb510(_0x216a82);
                _0x50d047[_0x3fc9b3(0x527)](_0x10f446),
                _0xa3d2c7['on'](_0x3fc9b3(0x335), function(_0x1ebc87) {
                    var _0x4b2352 = _0x3fc9b3;
                    _0x1ebc87['stopPropagation']();
                    var _0x3c69e8 = $(this)[_0x4b2352(0x467)](_0x4b2352(0x63e))
                      , _0x769743 = parseInt(_0x3c69e8[_0x4b2352(0x479)](_0x4b2352(0x52e)))
                      , _0x5596ba = _0x3c69e8[_0x4b2352(0x479)](_0x4b2352(0x620));
                    _0x444d21['selectedHats'] && _0x769743 >= 0x0 && _0x769743 < _0x444d21[_0x4b2352(0x58b)]['length'] && (_0x444d21['selectedHats'][_0x4b2352(0x687)](_0x769743, 0x1),
                    localStorage[_0x4b2352(0x128)](_0x4b2352(0x432), JSON[_0x4b2352(0x608)](_0x444d21)),
                    _0x3c69e8[_0x4b2352(0x545)](0x12c, function() {
                        var _0x1347ae = _0x4b2352;
                        $(this)['remove'](),
                        _0x32de46[_0x1347ae(0x25f)](_0x1347ae(0x63e))[_0x1347ae(0x6f1)](function(_0x2add13) {
                            var _0x5e6e9d = _0x1347ae;
                            $(this)[_0x5e6e9d(0x479)](_0x5e6e9d(0x52e), _0x2add13);
                        }),
                        _0x444d21[_0x1347ae(0x58b)][_0x1347ae(0x60c)] === 0x0 && (_0x32de46[_0x1347ae(0x6ae)](),
                        $(_0x1347ae(0x749))['css']({
                            'text-align': _0x1347ae(0x56c),
                            'padding': _0x1347ae(0x613),
                            'color': _0x1347ae(0x63f),
                            'margin': _0x1347ae(0x1b1),
                            'grid-column': _0x1347ae(0x17c)
                        })[_0x1347ae(0x159)](_0x1347ae(0x204))[_0x1347ae(0x574)](_0x32de46)),
                        _0x387306[_0x1347ae(0x122)] === _0x5596ba && _0x387306[_0x1347ae(0x2b3)] && _0x387306[_0x1347ae(0x2b3)][_0x1347ae(0x159)](_0x1347ae(0x19b))[_0x1347ae(0x4fa)](_0x1347ae(0x317), _0x1347ae(0x703));
                    }));
                });
            })),
            $(_0x144161(0x695))['on'](_0x144161(0x150), function() {
                var _0x5ebfee = _0x144161;
                $(this)[_0x5ebfee(0x4fa)](_0x5ebfee(0x618), _0x5ebfee(0x65a));
            }),
            $(_0x144161(0x1dd))['on'](_0x144161(0x606), function() {
                setTimeout(function() {
                    var _0x509ee4 = _0x1792;
                    $(_0x509ee4(0x695))[_0x509ee4(0x34d)](0x0);
                }, 0x64);
            });
        }
        ;
        function _0xe62b56(_0x2f98da) {
            try {
                if (ooo && ooo['Mh'] && ooo['Mh']['Lh'] && ooo['Mh']['Lh']['ki']) {
                    const _0x4439d1 = ooo['Mh']['Lh']['ki']['Yi'];
                    ooo['Mh']['Lh']['ki']['Yi'] = _0x2f98da;
                    ooo['Mh']['Qh'] && ooo['Mh']['Qh']['fh'] && ooo['Mh']['li'] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki'] && (ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki']['Yi'] = _0x2f98da);
                    if (_0x38c4fe && _0x38c4fe['uj'] && _0x38c4fe['n']) {
                        const _0x50a7d2 = _0x1cfec7(_0x38c4fe['uj']);
                        if (_0x50a7d2)
                            return _0x3de1b9(_0x50a7d2, _0x2f98da),
                            !![];
                        else {
                            const _0x50fa30 = ooo['ud']['Cc']()['Yb'](_0x2f98da);
                            if (_0x50fa30)
                                return _0x1899ce(_0x38c4fe['uj'], _0x50fa30),
                                !![];
                        }
                    }
                    return !![];
                }
            } catch (_0x2773d1) {}
            return ![];
        }
        function _0x1cfec7(_0x22dcca) {
            if (_0x22dcca['Zc'] && _0x22dcca['Zc']['rd'])
                return _0x22dcca['Zc']['rd'];
            return null;
        }
        function _0x3de1b9(_0x3b77d0, _0x1ed035) {
            var _0x1d04cd = _0x5b8a80;
            if (_0x3b77d0 && _0x3b77d0[_0x1d04cd(0x60c)] > 0x0) {
                const _0x58bc0c = ooo['ud']['Cc']()['Yb'](_0x1ed035);
                if (_0x58bc0c && _0x58bc0c['dc'] && _0x58bc0c['dc'][_0x1d04cd(0x60c)] > 0x0)
                    try {
                        return _0x3b77d0[0x0]['kd'](_0x58bc0c['dc'][0x0]),
                        !![];
                    } catch (_0x21f8b1) {}
            }
            return ![];
        }
        function _0x1899ce(_0x2caef6, _0x2cdf8b) {
            if (_0x2caef6 && _0x2caef6['Zc'] && _0x2cdf8b)
                try {
                    return _0x2caef6['Zc']['yd'](0.004, _0x2caef6['Zc']['rd'], _0x2cdf8b),
                    !![];
                } catch (_0x577ec1) {}
            return ![];
        }
        function _0x248b2d() {
            var _0x29e197 = _0x5b8a80;
            if (!_0x444d21[_0x29e197(0x58b)]) {
                _0x444d21[_0x29e197(0x58b)] = [],
                localStorage[_0x29e197(0x128)](_0x29e197(0x432), JSON[_0x29e197(0x608)](_0x444d21));
                return;
            }
            if (_0x444d21['selectedHats'][_0x29e197(0x60c)] > 0x0) {
                _0x444d21[_0x29e197(0x246)] === undefined ? _0x444d21[_0x29e197(0x246)] = 0x0 : _0x444d21[_0x29e197(0x246)] = (_0x444d21['currentHatIndex'] + 0x1) % _0x444d21[_0x29e197(0x58b)][_0x29e197(0x60c)];
                let _0x479ccd = _0x444d21[_0x29e197(0x58b)][_0x444d21[_0x29e197(0x246)]];
                const _0x1a8256 = _0xe62b56(_0x479ccd);
                localStorage[_0x29e197(0x128)](_0x29e197(0x432), JSON['stringify'](_0x444d21));
            }
        }
        function _0xb82149() {
            if (window['hatCyclingInitialized'])
                return;
            $(document)['on']('keydown', function(_0x198ab0) {
                var _0x241ea6 = _0x1792;
                (_0x198ab0[_0x241ea6(0x36c)] === 0x32 || _0x198ab0[_0x241ea6(0x4df)] === 0x32) && _0x248b2d();
            }),
            window['hatCyclingInitialized'] = !![];
        }
        function _0x1b55c0() {
            var _0x4d508a = _0x5b8a80;
            if (!_0x444d21[_0x4d508a(0x58b)] || _0x444d21[_0x4d508a(0x58b)][_0x4d508a(0x60c)] === 0x0)
                return;
            _0x444d21[_0x4d508a(0x58b)][_0x4d508a(0x58d)](function(_0x33c5a8) {
                _0x147be1(_0x33c5a8);
            });
        }
        $(document)[_0x5b8a80(0x66c)](function() {
            setTimeout(function() {
                var _0x15f1a3 = _0x1792;
                _0xb82149(),
                _0x1b55c0(),
                window[_0x15f1a3(0x554)] = function() {
                    var _0xe871a0 = _0x15f1a3;
                    if (_0x5dd9b4[_0xe871a0(0x66b)]['showFavoritesDialog']) {
                        var _0x2d2607 = new _0x5dd9b4();
                        _0x2d2607[_0xe871a0(0x5bd)]();
                    }
                }
                ,
                window['hatHelp'] = function() {}
                ;
            }, 0x3e8);
        });
        function _0x3eb463() {
            var _0x5ddd71 = _0x5b8a80;
            try {
                const _0x1c242f = []
                  , _0x4fbfa2 = ooo['ud']['Cc']();
                if (!_0x4fbfa2)
                    return _0x1c242f;
                for (let _0x1a0eb8 in _0x4fbfa2['Vb']) {
                    _0x4fbfa2['Vb'][_0x5ddd71(0x68b)](_0x1a0eb8) && _0x1c242f[_0x5ddd71(0x1bc)](_0x1a0eb8);
                }
                return _0x1c242f;
            } catch (_0xb7daba) {
                return [];
            }
        }
        function _0x3731f7() {}
        window[_0x5b8a80(0x57a)]('load', function() {
            setTimeout(function() {
                _0x1b55c0(),
                _0x3731f7();
            }, 0x7d0);
        }),
        _0x42ed44 = (function() {
            var _0x25ea9b = _0x5b8a80;
            function _0x5aa537(_0x1fb338, _0x1ea3ca, _0x5a409d) {
                this['Cp'] = _0x1fb338,
                this['Wd'] = _0x1ea3ca,
                this['ep'] = _0x5a409d,
                this['Lc'] = {},
                this['Sp'] = [[]],
                this['Tp'] = -0xa,
                this['Up'] = -0xa;
            }
            return _0x5aa537[_0x25ea9b(0x66b)]['Op'] = function(_0x3c0cec) {
                this['Sp'] = _0x3c0cec;
            }
            ,
            _0x5aa537[_0x25ea9b(0x66b)]['Pp'] = function(_0x4681cc) {
                this['Lc'] = _0x4681cc;
            }
            ,
            _0x5aa537['prototype']['ml'] = function() {
                var _0x43baf6 = ooo['so']['Zj'](this['Wd']);
                for (var _0x1aeac9 = 0x0; _0x1aeac9 < this['Sp']['length']; _0x1aeac9++) {
                    for (var _0x59fa5f = 0x0; _0x59fa5f < this['Sp'][_0x1aeac9]['length']; _0x59fa5f++) {
                        if (this['Sp'][_0x1aeac9][_0x59fa5f] === _0x43baf6) {
                            this['Vp'](_0x1aeac9),
                            this['Wp'](_0x59fa5f);
                            return;
                        }
                    }
                }
                ;this['Vp'](0x0),
                this['Wp'](0x0);
            }
            ,
            _0x5aa537[_0x25ea9b(0x66b)]['Lp'] = function() {
                var _0x18cfc2 = _0x25ea9b
                  , _0x49a94f = this['Tp'] - 0x1;
                _0x49a94f < 0x0 && (_0x49a94f = this['Sp'][_0x18cfc2(0x60c)] - 0x1),
                this['Vp'](_0x49a94f),
                this['Wp'](this['Up'] % this['Sp'][_0x49a94f][_0x18cfc2(0x60c)]);
            }
            ,
            _0x5aa537['prototype']['Mp'] = function() {
                var _0x231491 = _0x25ea9b
                  , _0x415163 = this['Tp'] + 0x1;
                _0x415163 >= this['Sp'][_0x231491(0x60c)] && (_0x415163 = 0x0),
                this['Vp'](_0x415163),
                this['Wp'](this['Up'] % this['Sp'][_0x415163][_0x231491(0x60c)]);
            }
            ,
            _0x5aa537['prototype']['Vp'] = function(_0x3348ec) {
                var _0x5c9bdc = _0x25ea9b
                  , _0x39950a = this;
                if (!(_0x3348ec < 0x0) && !(_0x3348ec >= this['Sp']['length'])) {
                    this['Tp'] = _0x3348ec,
                    _0x4192f4['empty']();
                    var _0x2d4eef = this['Sp'][this['Tp']];
                    if (_0x2d4eef[_0x5c9bdc(0x60c)] > 0x1)
                        for (var _0x5d264f = 0x0; _0x5d264f < _0x2d4eef[_0x5c9bdc(0x60c)]; _0x5d264f++) {
                            (function(_0x2838a8) {
                                var _0x345014 = _0x5c9bdc
                                  , _0x1b2d02 = _0x2d4eef[_0x2838a8]
                                  , _0x2edbbf = _0x39950a['Lc'][_0x1b2d02]
                                  , _0x28d16e = '#' + _0x39950a['Cp']['Jp'][_0x2edbbf['prime']]
                                  , _0x1f2130 = $('<div\x20style=\x22border-color:\x20' + _0x28d16e + _0x345014(0x273));
                                _0x1f2130[_0x345014(0x335)](function() {
                                    ooo['ij']['if'](),
                                    _0x39950a['Wp'](_0x2838a8);
                                }),
                                _0x4192f4[_0x345014(0x527)](_0x1f2130);
                            }(_0x5d264f));
                        }
                }
            }
            ,
            _0x5aa537[_0x25ea9b(0x66b)]['Wp'] = function(_0xbb52b3) {
                var _0xc99d45 = _0x25ea9b;
                if (!(_0xbb52b3 < 0x0) && !(_0xbb52b3 >= this['Sp'][this['Tp']][_0xc99d45(0x60c)])) {
                    this['Up'] = _0xbb52b3,
                    _0x4192f4[_0xc99d45(0x567)]()['css'](_0xc99d45(0x317), 'transparent');
                    var _0x40d941 = _0x4192f4[_0xc99d45(0x567)](_0xc99d45(0x4e4) + (0x1 + _0xbb52b3) + ')');
                    _0x40d941[_0xc99d45(0x4fa)](_0xc99d45(0x317), _0x40d941[_0xc99d45(0x4fa)]('border-color')),
                    this['Cp']['tp'](!![]);
                }
            }
            ,
            _0x5aa537[_0x25ea9b(0x66b)]['Ap'] = function() {
                return this['Sp'][this['Tp']][this['Up']];
            }
            ,
            _0x5aa537;
        }()),
        _0x53b237['Vk'] = _0x5dd9b4,
        _0x1b2ea4 = $(_0x5b8a80(0x428)),
        _0x192cf7 = $('.close-button'),
        (_0x245dd2 = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x13fbb6 = _0x5b8a80;
            _0x53b237['Ho']['call'](this, _0x3a706a['U'](_0x13fbb6(0x4a6)), ![]),
            _0x1b2ea4[_0x13fbb6(0x335)](function() {
                ooo['ij']['if'](),
                ooo['kp']() ? (ooo['Xg']['gl'](ooo['Xg']['Jf']),
                ooo['Xp'](![], !![]),
                ooo['Xg']['Yk']['Fo'](new _0x53b237['Yp']())) : ooo['Xg']['jl']();
            }),
            _0x192cf7[_0x13fbb6(0x335)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['jl']();
            });
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {
            var _0x317631 = _0x5b8a80;
            _0x245dd2['parent'][_0x317631(0x66b)]['Sa'][_0x317631(0x45d)](this);
        }
        ,
        _0x245dd2['prototype']['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['Uo'], 0xc8),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Vo'], 0x32);
        }
        ,
        _0x245dd2['prototype']['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x53b237['Ek'] = _0x245dd2,
        _0x56313b = $('#delete-account-timer'),
        _0x303d1b = $(_0x5b8a80(0x22c)),
        _0x5b20e1 = $(_0x5b8a80(0x73a)),
        (_0x1a1e9c = _0x3a706a['ca'](_0x53b237['Ho'], function() {
            var _0x45fc48 = _0x5b8a80;
            _0x53b237['Ho']['call'](this, _0x3a706a['U'](_0x45fc48(0x459)), ![]),
            _0x303d1b[_0x45fc48(0x335)](function() {
                ooo['ij']['if'](),
                ooo['ok']['nk']() ? (ooo['ok']['ym'](),
                ooo['ok']['qm']()) : ooo['Xg']['jl']();
            }),
            _0x5b20e1[_0x45fc48(0x335)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['jl']();
            }),
            this['Zp'] = [];
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {
            _0x1a1e9c['parent']['prototype']['Sa']['call'](this);
        }
        ,
        _0x1a1e9c[_0x5b8a80(0x66b)]['Wo'] = function() {
            _0x32eec3['f']['h'](_0x53b237['Ho']['Mo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['No'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Oo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Po'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Qo'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Ro'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['So'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['To'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Ho']['Uo'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Ho']['Vo'], 0xc8);
        }
        ,
        _0x1a1e9c[_0x5b8a80(0x66b)]['nl'] = function() {
            var _0x528944 = _0x5b8a80;
            ooo['ij']['nf'](),
            _0x32eec3['f']['h'](_0x303d1b, 0x1),
            _0x32eec3['f']['g'](_0x56313b, 0x1),
            _0x56313b[_0x528944(0x159)](_0x528944(0x6da)),
            this['$p'](),
            this['_p'](function() {
                var _0x165633 = _0x528944;
                _0x56313b[_0x165633(0x159)](_0x165633(0x6bf));
            }, 0x3e8),
            this['_p'](function() {
                var _0xe8b5a1 = _0x528944;
                _0x56313b[_0xe8b5a1(0x159)](_0xe8b5a1(0x4d9));
            }, 0x7d0),
            this['_p'](function() {
                var _0x26ac30 = _0x528944;
                _0x56313b[_0x26ac30(0x159)](_0x26ac30(0x39f));
            }, 0xbb8),
            this['_p'](function() {
                var _0x3fc428 = _0x528944;
                _0x56313b['text'](_0x3fc428(0x258));
            }, 0xfa0),
            this['_p'](function() {
                var _0x5eee77 = _0x528944;
                _0x56313b[_0x5eee77(0x159)](_0x5eee77(0x64b));
            }, 0x1388),
            this['_p'](function() {
                var _0x36e1e9 = _0x528944;
                _0x56313b[_0x36e1e9(0x159)](_0x36e1e9(0x298));
            }, 0x1770),
            this['_p'](function() {
                var _0x569a99 = _0x528944;
                _0x56313b[_0x569a99(0x159)](_0x569a99(0x2f5));
            }, 0x1b58),
            this['_p'](function() {
                var _0x5b1e40 = _0x528944;
                _0x56313b['text'](_0x5b1e40(0x6a3));
            }, 0x1f40),
            this['_p'](function() {
                var _0x359933 = _0x528944;
                _0x56313b[_0x359933(0x159)]('..1\x20..');
            }, 0x2328),
            this['_p'](function() {
                _0x32eec3['f']['g'](_0x303d1b, 0x12c),
                _0x32eec3['f']['h'](_0x56313b, 0x1);
            }, 0x2710);
        }
        ,
        _0x1a1e9c[_0x5b8a80(0x66b)]['_p'] = function(_0x5726c3, _0x2b2727) {
            var _0x9afd8d = _0x5b8a80
              , _0x334ae4 = _0x3a706a['Y'](_0x5726c3, _0x2b2727);
            this['Zp'][_0x9afd8d(0x1bc)](_0x334ae4);
        }
        ,
        _0x1a1e9c[_0x5b8a80(0x66b)]['$p'] = function() {
            var _0x56c207 = _0x5b8a80;
            for (var _0x465829 = 0x0; _0x465829 < this['Zp'][_0x56c207(0x60c)]; _0x465829++) {
                _0x3a706a['Z'](this['Zp'][_0x465829]);
            }
            ;this['Zp'] = [];
        }
        ,
        _0x53b237['Gk'] = _0x1a1e9c,
        _0x53b237['aq'] = (function() {
            var _0x372e33 = _0x5b8a80;
            function _0x401c10() {
                this['Go'] = function() {}
                ;
            }
            return _0x401c10['prototype']['ag'] = function() {}
            ,
            _0x401c10[_0x372e33(0x66b)]['nl'] = function() {}
            ,
            _0x401c10;
        }()),
        (_0x50c0b9 = _0x3a706a['ca'](_0x53b237['aq'], function(_0x2b374d) {
            var _0x5c78dd = _0x5b8a80;
            _0x53b237['aq']['call'](this);
            var _0x5e7108 = _0x3a706a['Ca']() + '_' + _0x3a706a['_'](0x3e8 + _0x3a706a['ma']() * 0x2327);
            this['bq'] = $(_0x5c78dd(0x405) + _0x5e7108 + '\x22\x20class=\x22toaster\x20toaster-coins\x22><img\x20class=\x22toaster-coins-img\x22\x20alt=\x22Wormate\x20Coin\x22\x20src=\x22/images/coin_320.png\x22\x20/><div\x20class=\x22toaster-coins-val\x22>' + _0x2b374d + _0x5c78dd(0x394) + _0x3a706a['U'](_0x5c78dd(0x490)) + '</div></div>');
            var _0x1c90be = this;
            this['bq'][_0x5c78dd(0x25f)]('.toaster-coins-close')[_0x5c78dd(0x335)](function() {
                ooo['ij']['if'](),
                _0x1c90be['Go']();
            });
        }))['prototype']['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x50c0b9[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['lf']();
        }
        ,
        _0x53b237['mm'] = _0x50c0b9,
        (_0x57d67b = _0x3a706a['ca'](_0x53b237['aq'], function(_0x516605) {
            var _0x3a24c6 = _0x5b8a80;
            _0x53b237['aq']['call'](this);
            var _0x10eef8 = _0x3a706a['Ca']() + '_' + _0x3a706a['_'](0x3e8 + _0x3a706a['ma']() * 0x2327);
            this['bq'] = $(_0x3a24c6(0x405) + _0x10eef8 + _0x3a24c6(0x3dc) + _0x516605 + _0x3a24c6(0x624) + _0x3a706a['U'](_0x3a24c6(0x4e5)) + '</div><div\x20class=\x22toaster-levelup-close\x22>' + _0x3a706a['U'](_0x3a24c6(0x490)) + _0x3a24c6(0x38a));
            var _0x3414fc = this;
            this['bq']['find']('.toaster-levelup-close')['click'](function() {
                ooo['ij']['if'](),
                _0x3414fc['Go']();
            });
        }))[_0x5b8a80(0x66b)]['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x57d67b[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['kf']();
        }
        ,
        _0x53b237['lm'] = _0x57d67b,
        (_0x31dc77 = _0x3a706a['ca'](_0x53b237['aq'], function() {
            var _0x98b5d1 = _0x5b8a80;
            _0x53b237['aq'][_0x98b5d1(0x45d)](this);
            var _0x43f594 = this
              , _0x31958a = _0x3a706a['Ca']() + '_' + _0x3a706a['_'](0x3e8 + _0x3a706a['ma']() * 0x2327);
            this['bq'] = $(_0x98b5d1(0x405) + _0x31958a + _0x98b5d1(0x777) + _0x69e837['H']['L'] + _0x98b5d1(0x5e6) + _0x3a706a['U'](_0x98b5d1(0x2ad))[_0x98b5d1(0x156)]('\x20', '&nbsp;')['replaceAll']('\x0a', _0x98b5d1(0x19a)) + _0x98b5d1(0x71f) + _0x3a706a['U'](_0x98b5d1(0x1bb)) + _0x98b5d1(0x11d) + _0x3a706a['U'](_0x98b5d1(0x227)) + _0x98b5d1(0x38a)),
            this['cq'] = this['bq']['find'](_0x98b5d1(0x480)),
            this['cq'][_0x98b5d1(0x3af)](),
            this['cq'][_0x98b5d1(0x335)](function() {
                ooo['ij']['if'](),
                ooo['kp']() && ooo['Xp'](!![], !![]),
                _0x43f594['Go']();
            });
        }))[_0x5b8a80(0x66b)]['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x31dc77['prototype']['nl'] = function() {
            var _0xb431ec = this;
            ooo['kp']() && !ooo['Pl']() ? (ooo['ij']['nf'](),
            _0x3a706a['Y'](function() {
                var _0x5015c1 = _0x1792;
                _0xb431ec['cq'][_0x5015c1(0x34a)](0x12c);
            }, 0x7d0)) : _0x3a706a['Y'](function() {
                _0xb431ec['Go']();
            }, 0x0);
        }
        ,
        _0x53b237['Yp'] = _0x31dc77,
        _0x399dc1 = $(_0x5b8a80(0x1f1)),
        (_0x7f1b52 = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            var _0x3f1f5a = _0x5b8a80;
            _0x53b237['Uf'][_0x3f1f5a(0x45d)](this, _0x53b237['ll']['ao']),
            _0x399dc1[_0x3f1f5a(0x335)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['Re']['qo'](),
                ooo['Xg']['gl'](ooo['Xg']['Re']),
                _0x3a706a['Y'](function() {
                    var _0xb8b173 = _0x1792
                      , _0x4b223f = _0x69e837['H']['J'] + _0xb8b173(0x13c);
                    _0x3a706a['Aa'](_0x4b223f, function() {
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function(_0x245378) {
                        ooo['Xg']['Re']['oo'](),
                        ooo['ud']['rc'](function() {
                            ooo['Xg']['gl'](ooo['Xg']['Jf']);
                        }, function(_0xa0f97a) {
                            ooo['Xg']['gl'](ooo['Xg']['_k']);
                        }, function(_0x49dafc, _0x59d151) {
                            ooo['Xg']['Re']['po'](_0x49dafc, _0x59d151);
                        });
                    });
                }, 0x7d0);
            });
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {}
        ,
        _0x7f1b52['prototype']['ml'] = function() {
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tf'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Rn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Sn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['$n'], 0x1f4),
            _0x32eec3['f']['h'](_0x53b237['Uf']['_n'], 0x32);
        }
        ,
        _0x7f1b52[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['Ye'](_0x53b237['Pe']['Se']['Jf']),
            ooo['ij']['nf']();
        }
        ,
        _0x53b237['al'] = _0x7f1b52,
        _0x5cc374 = $(_0x5b8a80(0x5d2)),
        (_0x209a48 = _0x3a706a['ca'](_0x53b237['Uf'], function() {
            var _0x4ab07e = _0x5b8a80;
            _0x53b237['Uf'][_0x4ab07e(0x45d)](this, _0x53b237['ll']['ao']),
            _0x5cc374[_0x4ab07e(0x335)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Jf']);
            });
        }))[_0x5b8a80(0x66b)]['Sa'] = function() {}
        ,
        _0x209a48['prototype']['ml'] = function() {
            _0x53b237['Nf']['rg'](!![]),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Tf'], 0x1f4),
            _0x32eec3['f']['g'](_0x53b237['Uf']['Qn'], 0x1),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Rn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Sn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Tn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Un'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Vn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Wn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Xn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Yn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['Zn'], 0x32),
            _0x32eec3['f']['h'](_0x53b237['Uf']['$n'], 0x32),
            _0x32eec3['f']['g'](_0x53b237['Uf']['_n'], 0x1f4);
        }
        ,
        _0x209a48[_0x5b8a80(0x66b)]['nl'] = function() {
            ooo['ij']['Ye'](_0x53b237['Pe']['Se']['Jf']),
            ooo['ij']['nf']();
        }
        ,
        _0x53b237['cl'] = _0x209a48,
        _0x3a706a['dq'] = function() {
            function _0x268074(_0x1070f9) {
                var _0x5e7d2a = _0x1070f9 + _0x3a706a['_'](_0x3a706a['ma']() * 0xffff) * 0x25;
                _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Lg'], _0x5e7d2a, 0x1e);
            }
            return (function() {
                var _0x3c8b3b = _0x1792
                  , _0x209fb5 = parseInt(_0x53b237['Cg']['Og'](_0x53b237['Cg']['Lg'])) % 0x25;
                (!(_0x209fb5 >= 0x0) || !(_0x209fb5 < _0x69e837['co']['fq'])) && (_0x209fb5 = _0x3a706a['ia'](0x0, _0x69e837['co']['fq'] - 0x2));
                var _0x36c1d4 = {
                    'gq': ![]
                };
                _0x36c1d4['hq'] = _0x3a706a['Ca'](),
                _0x36c1d4['iq'] = 0x0,
                _0x36c1d4['jq'] = 0x0,
                _0x36c1d4['kq'] = null,
                _0x36c1d4['lq'] = _0x69e837['H']['Q'],
                _0x36c1d4['mq'] = _0x69e837['H']['P'],
                _0x36c1d4['Mh'] = null,
                _0x36c1d4['ud'] = null,
                _0x36c1d4['ef'] = null,
                _0x36c1d4['ij'] = null,
                _0x36c1d4['Xg'] = null,
                _0x36c1d4['so'] = null,
                _0x36c1d4['ok'] = null;
                try {
                    var _0x1f6e1b = navigator;
                    if (_0x1f6e1b) {
                        var _0x33a695 = _0x1f6e1b['geolocation'];
                        _0x33a695 && _0x33a695[_0x3c8b3b(0x3b6)](function(_0x57f4b4) {
                            var _0x3572da = _0x3c8b3b
                              , _0x83351f = _0x57f4b4[_0x3572da(0x3cb)];
                            _typeof(_0x83351f) != _0x3572da(0x3fa) && _typeof(_0x83351f[_0x3572da(0x51f)]) != _0x3572da(0x3fa) && _typeof(_0x83351f[_0x3572da(0x4bd)]) != _0x3572da(0x3fa) && (_0x36c1d4['kq'] = _0x57f4b4);
                        }, function(_0x5789bd) {});
                    }
                } catch (_0x2aef5c) {}
                ;return _0x36c1d4['Sa'] = function() {
                    var _0xa61937 = _0x3c8b3b;
                    _0x36c1d4['Mh'] = new _0x53b237['nq'](),
                    _0x36c1d4['Mh']['oq'] = new _0x53b237['si'](_0x36c1d4['Mh']),
                    _0x36c1d4['ud'] = new _0x53b237['Kb'](),
                    _0x36c1d4['ef'] = new _0x53b237['wk'](),
                    _0x36c1d4['ij'] = new _0x53b237['Pe'](),
                    _0x36c1d4['Xg'] = new _0x53b237['zk'](),
                    _0x36c1d4['so'] = new _0x53b237['Sj'](),
                    _0x36c1d4['ok'] = new _0x53b237['sl']();
                    try {
                        ga(_0xa61937(0x3b1), _0xa61937(0x209), 'app', _0x69e837['H']['I'] + _0xa61937(0x305));
                    } catch (_0x35d262) {}
                    ;_0x36c1d4['Mh']['pq'] = function() {
                        _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['bl']);
                    }
                    ,
                    _0x36c1d4['Mh']['qq'] = function() {
                        var _0x1dc3e4 = _0xa61937
                          , _0x4ac60d = _0x36c1d4['Xg']['Jf']['Ao']();
                        try {
                            ga(_0x1dc3e4(0x3b1), _0x1dc3e4(0x209), 'game', _0x69e837['H']['I'] + _0x1dc3e4(0x5b9), _0x4ac60d);
                        } catch (_0x2048e5) {}
                        ;_0x36c1d4['ij']['Ye'](_0x53b237['Pe']['Se']['Kf']),
                        _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Kf']['ho']());
                    }
                    ,
                    _0x36c1d4['Mh']['rq'] = function() {
                        var _0x43e0e7 = _0xa61937, _0x2c7ab9, _0x1f7c60;
                        try {
                            ga(_0x43e0e7(0x3b1), 'event', _0x43e0e7(0x70a), _0x69e837['H']['I'] + '_end');
                        } catch (_0x20cf89) {}
                        ;$(_0x43e0e7(0x2b0))['height']() >= 0x1ae && _0x69e837['co']['sq']['Va'](),
                        _0x36c1d4['ud']['rc'](null, null, null),
                        _0x2c7ab9 = _0x3a706a['_'](_0x36c1d4['Mh']['Lh']['hi']),
                        _0x1f7c60 = _0x36c1d4['Mh']['oi'],
                        _0x36c1d4['ok']['nk']() ? _0x36c1d4['ok']['hm'](function() {
                            _0x36c1d4['tq'](_0x2c7ab9, _0x1f7c60);
                        }) : _0x36c1d4['tq'](_0x2c7ab9, _0x1f7c60);
                    }
                    ,
                    _0x36c1d4['Mh']['uq'] = function(_0x51dc95) {
                        _0x51dc95(_0x36c1d4['Xg']['Kf']['ko'](), _0x36c1d4['Xg']['Kf']['lo']());
                    }
                    ,
                    _0x36c1d4['ok']['em'](function() {
                        var _0x185e8f = _0xa61937
                          , _0x51f9ec = _0x36c1d4['Xg']['rl']();
                        _0x51f9ec != null && _0x51f9ec['Wd'] === _0x53b237['ll']['kl'] && (_0x36c1d4['ij']['Ye'](_0x53b237['Pe']['Se']['Jf']),
                        _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Jf']));
                        if (_0x36c1d4['ok']['nk']()) {
                            var _0x561a46 = _0x36c1d4['ok']['Kl']();
                            try {
                                ga(_0x185e8f(0x170), _0x185e8f(0x6c3), _0x561a46);
                            } catch (_0x36c65a) {}
                            ;try {
                                zE(_0x185e8f(0x610), _0x185e8f(0x78c), function(_0x5da018) {
                                    _0x5da018(_0x561a46);
                                });
                            } catch (_0x28da41) {}
                        } else
                            try {
                                zE(_0x185e8f(0x50c), 'logout');
                            } catch (_0x3b204d) {}
                        ;_0x36c1d4['kp']() && _0x36c1d4['ok']['nk']() && !_0x36c1d4['ok']['Pl']() ? (_0x36c1d4['Xp'](![], ![]),
                        _0x36c1d4['Xg']['Yk']['Fo'](new _0x53b237['Yp']())) : _0x36c1d4['vq'](!![]);
                    }),
                    _0x36c1d4['Mh']['Sa'](),
                    _0x36c1d4['Xg']['Sa'](),
                    _0x36c1d4['so']['Sa'](),
                    _0x36c1d4['ud']['Sa'](),
                    _0x36c1d4['Xg']['Jf']['zo'](),
                    _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Jf']),
                    _0x36c1d4['ef']['Sa'](function() {
                        _0x36c1d4['ij']['Sa'](),
                        _0x36c1d4['ok']['Sa'](),
                        _0x36c1d4['ud']['rc'](function() {
                            _0x36c1d4['Xg']['Jf']['yo'](),
                            _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Jf']);
                        }, function(_0xa72e20) {
                            _0x36c1d4['Xg']['Jf']['yo'](),
                            _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['_k']);
                        }, function(_0x3eeb5f, _0x3c4b18) {
                            var _0x33532a = _0x3eeb5f;
                            _0x36c1d4['Xg']['Re']['po'](_0x33532a, _0x3c4b18),
                            _0x36c1d4['Xg']['Jf']['po'](_0x33532a, _0x3c4b18);
                        }),
                        _0x36c1d4['kp']() && !_0x36c1d4['Pl']() ? _0x36c1d4['Xg']['Yk']['Fo'](new _0x53b237['Yp']()) : _0x36c1d4['vq'](!![]);
                    });
                }
                ,
                _0x36c1d4['wq'] = function(_0x3744e3) {
                    if (_0x36c1d4['ok']['nk']()) {
                        var _0x3aa75f = _0x36c1d4['ok']['gm']()
                          , _0x36b7e2 = _0x69e837['H']['J'] + '/pub/wuid/' + _0x3aa75f + '/consent/change?value=' + _0x3a706a['W'](_0x3744e3);
                        _0x3a706a['Aa'](_0x36b7e2, function() {}, function(_0x40f789) {});
                    }
                }
                ,
                _0x36c1d4['to'] = function() {
                    _0x209fb5++,
                    _0x38c4fe['on'] && (_0x209fb5 = 0x1),
                    !_0x69e837['co']['xq'] && _0x209fb5 >= _0x69e837['co']['fq'] ? (_0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['dl']),
                    _0x36c1d4['ij']['Ye'](_0x53b237['Pe']['Se']['Mf']),
                    _0x69e837['co']['yq']['Ta']()) : (_0x268074(_0x209fb5),
                    _0x36c1d4['zq']());
                }
                ,
                _0x36c1d4['zq'] = function() {
                    var _0x4debe2 = _0x3c8b3b;
                    if (_0x36c1d4['Mh']['Aq']()) {
                        _0x36c1d4['Xg']['Re']['qo'](),
                        _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Re']);
                        var _0x1fccd0 = _0x36c1d4['Xg']['Jf']['Ao']();
                        _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Ig'], _0x1fccd0, 0x1e);
                        var _0x44ca36 = _0x36c1d4['Xg']['Hi']['Gi']();
                        _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Eg'], _0x44ca36, 0x1e);
                        var _0x3e7f19 = 0x0;
                        if (_0x36c1d4['kq'] != null) {
                            var _0x58814a = _0x36c1d4['kq']['coords'][_0x4debe2(0x51f)]
                              , _0x17055a = _0x36c1d4['kq']['coords'][_0x4debe2(0x4bd)];
                            _0x3e7f19 = _0x3a706a['ia'](0x0, _0x3a706a['ha'](0x7fff, (_0x58814a + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | _0x3a706a['ia'](0x0, _0x3a706a['ha'](0xffff, (_0x17055a + 0xb4) / 0x168 * 0x10000)) << 0x10;
                        }
                        ;if (_0x36c1d4['ok']['nk']())
                            _0x36c1d4['Bq'](_0x1fccd0, _0x3e7f19);
                        else {
                            var _0x4ff4c2 = _0x36c1d4['Xg']['Jf']['Ml']();
                            _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Jg'], _0x4ff4c2, 0x1e);
                            var _0xa994c5 = _0x36c1d4['so']['Zj'](_0x53b237['_j']['$j']);
                            _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Kg'], _0xa994c5, 0x1e),
                            _0x36c1d4['Cq'](_0x1fccd0, _0x3e7f19);
                        }
                    }
                }
                ,
                _0x36c1d4['Bq'] = function(_0x8ead2d, _0x132c66) {
                    var _0x266f1d = _0x3c8b3b, _0x22d7a0, _0x520b68 = _0x36c1d4['ok']['gm'](), _0x21a88c = window[_0x266f1d(0x163)](_0x36c1d4['Xg']['Jf']['Ml']()), _0x235acf = _0x36c1d4['so']['Zj'](_0x53b237['_j']['$j']), _0x54f9de = _0x36c1d4['so']['Zj'](_0x53b237['_j']['ak']), _0x2e6ba5 = _0x36c1d4['so']['Zj'](_0x53b237['_j']['bk']);
                    _0x3d0462(_0x235acf, _0x54f9de, _0x2e6ba5, _0x36c1d4['so']['Zj'](_0x53b237['_j']['dk']), _0x36c1d4['so']['Zj'](_0x53b237['_j']['ck']), _0x21a88c);
                    var _0x4735da = (_0x21a88c = (_0x21a88c = _0x444d21['f'])['trim']())[_0x266f1d(0x390)](_0x21a88c[_0x266f1d(0x673)](-0x7), '');
                    _0x4735da != _0x444d21[_0x266f1d(0x5e7)] && (_0x444d21[_0x266f1d(0x5e7)] = _0x4735da,
                    _0x1c7285(_0x4735da['trim']()));
                    var _0x5378a7 = _0x69e837['H']['J'] + _0x266f1d(0x2bb) + _0x520b68 + '/start?gameMode=' + _0x3a706a['W'](_0x8ead2d) + _0x266f1d(0x408) + _0x132c66 + _0x266f1d(0x275) + _0x3a706a['W'](_0x21a88c) + _0x266f1d(0x543) + _0x444d21['a'] + _0x266f1d(0x403) + _0x444d21['b'] + '&mouthId=' + _0x444d21['c'] + _0x266f1d(0x2c2) + _0x444d21['d'] + _0x266f1d(0x580) + _0x444d21['e'];
                    _0x3a706a['Aa'](_0x5378a7, function() {
                        _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['_k']);
                    }, function(_0x4139c0) {
                        var _0x35be0d = _0x266f1d;
                        if (_0x4139c0[_0x35be0d(0x210)] === 0x5b4) {
                            _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Wk']);
                            try {
                                ga('send', _0x35be0d(0x209), _0x35be0d(0x40d), _0x69e837['H']['I'] + _0x35be0d(0x285));
                            } catch (_0x5241b7) {}
                        } else {
                            if (_0x4139c0[_0x35be0d(0x210)] !== 0x4b0)
                                _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['_k']);
                            else {
                                var _0x38ee61 = _0x4139c0['server_url']
                                  , _0x32e18a = _0x19548b(_0x38ee61[_0x35be0d(0x673)](-0xa, 0x4));
                                $('#port_id')[_0x35be0d(0x410)]() === '' ? ($(_0x35be0d(0x488))[_0x35be0d(0x410)](_0x38ee61),
                                $(_0x35be0d(0x69c))['val'](_0x32e18a),
                                _0x444d21['pi'] = _0x38ee61,
                                _0x444d21['pn'] = _0x32e18a,
                                localStorage[_0x35be0d(0x128)](_0x35be0d(0x432), JSON[_0x35be0d(0x608)](_0x444d21)),
                                _0x17f008[_0x35be0d(0x159)] = '' + _0x32e18a,
                                createCircle(),
                                _0x36c1d4['Mh']['Dq'](_0x38ee61, _0x520b68)) : ($('#port_id_s')['val']($(_0x35be0d(0x3ca))['val']()),
                                $(_0x35be0d(0x69c))[_0x35be0d(0x410)]($(_0x35be0d(0x3d5))[_0x35be0d(0x410)]()),
                                _0x444d21['pi'] = $(_0x35be0d(0x3ca))[_0x35be0d(0x410)](),
                                _0x444d21['pn'] = $(_0x35be0d(0x3d5))[_0x35be0d(0x410)](),
                                localStorage[_0x35be0d(0x128)]('SaveGamewx', JSON[_0x35be0d(0x608)](_0x444d21)),
                                _0x17f008['text'] = '' + $(_0x35be0d(0x3d5))[_0x35be0d(0x410)](),
                                createCircle(),
                                _0x36c1d4['Mh']['Dq']($(_0x35be0d(0x3ca))['val'](), _0x520b68));
                            }
                        }
                    });
                }
                ,
                _0x36c1d4['Cq'] = function(_0x2c0988, _0x17e6a5) {
                    var _0x4a2778 = _0x3c8b3b
                      , _0x267d93 = window[_0x4a2778(0x163)](_0x36c1d4['Xg']['Jf']['Ml']())
                      , _0x2d2c4a = _0x36c1d4['so']['Zj'](_0x53b237['_j']['$j'])
                      , _0x22f664 = _0x69e837['H']['J'] + _0x4a2778(0x783) + _0x3a706a['W'](_0x2c0988) + _0x4a2778(0x408) + _0x17e6a5 + _0x4a2778(0x275) + _0x3a706a['W'](_0x267d93) + _0x4a2778(0x543) + _0x3a706a['W'](_0x2d2c4a);
                    _0x3a706a['Aa'](_0x22f664, function() {
                        _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['_k']);
                    }, function(_0xc2da58) {
                        var _0x108d25 = _0x4a2778;
                        if (_0xc2da58[_0x108d25(0x210)] === 0x5b4) {
                            _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Wk']);
                            try {
                                ga('send', _0x108d25(0x209), _0x108d25(0x40d), _0x69e837['H']['I'] + '_tick');
                            } catch (_0x34f023) {}
                        } else {
                            if (_0xc2da58[_0x108d25(0x210)] !== 0x4b0)
                                _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['_k']);
                            else {
                                var _0x487946 = _0xc2da58['server_url']
                                  , _0x5a90e5 = _0x19548b(_0x487946[_0x108d25(0x673)](-0xa, 0x4));
                                $(_0x108d25(0x3ca))['val']() === '' ? ($(_0x108d25(0x488))[_0x108d25(0x410)](_0x487946),
                                $(_0x108d25(0x69c))['val'](_0x5a90e5),
                                _0x444d21['pi'] = _0x487946,
                                _0x444d21['pn'] = _0x5a90e5,
                                localStorage[_0x108d25(0x128)](_0x108d25(0x432), JSON[_0x108d25(0x608)](_0x444d21)),
                                _0x17f008[_0x108d25(0x159)] = '' + _0x5a90e5,
                                createCircle(),
                                _0x36c1d4['Mh']['Eq'](_0x487946, _0x267d93, _0x2d2c4a)) : ($(_0x108d25(0x488))['val']($(_0x108d25(0x3ca))[_0x108d25(0x410)]()),
                                $(_0x108d25(0x69c))[_0x108d25(0x410)]($(_0x108d25(0x3d5))[_0x108d25(0x410)]()),
                                _0x444d21['pi'] = $(_0x108d25(0x3ca))['val'](),
                                _0x444d21['pn'] = $(_0x108d25(0x3d5))['val'](),
                                localStorage['setItem'](_0x108d25(0x432), JSON[_0x108d25(0x608)](_0x444d21)),
                                _0x17f008[_0x108d25(0x159)] = '' + $(_0x108d25(0x3d5))['val'](),
                                createCircle(),
                                _0x36c1d4['Mh']['Eq']($(_0x108d25(0x3ca))[_0x108d25(0x410)](), _0x267d93, _0x2d2c4a));
                            }
                        }
                    });
                }
                ,
                _0x36c1d4['tq'] = function(_0xaa66bd, _0x2a4ddc) {
                    var _0x6888dc = _0x36c1d4['Xg']['Jf']['Ml']();
                    _0x36c1d4['Xg']['Kf']['jo'](_0xaa66bd, _0x2a4ddc, _0x6888dc),
                    _0x36c1d4['ij']['Ye'](_0x53b237['Pe']['Se']['Lf']),
                    _0x36c1d4['Xg']['gl'](_0x36c1d4['Xg']['Kf']['io']());
                }
                ,
                _0x36c1d4['wo'] = function() {
                    if (!_0x36c1d4['xo']())
                        return _0x36c1d4['so']['hk']();
                    ;var _0x6581d8 = parseInt(_0x53b237['Cg']['Og'](_0x53b237['Cg']['Kg']));
                    return _0x6581d8 != null && _0x36c1d4['so']['ik'](_0x6581d8, _0x53b237['_j']['$j']) ? _0x6581d8 : _0x36c1d4['so']['hk']();
                }
                ,
                _0x36c1d4['Bo'] = function(_0xd6d2) {
                    var _0x1487a2 = _0x3c8b3b;
                    _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Mg'], _0xd6d2 ? _0x1487a2(0x123) : _0x1487a2(0x667), 0x708);
                }
                ,
                _0x36c1d4['xo'] = function() {
                    return _0x53b237['Cg']['Og'](_0x53b237['Cg']['Mg']) === 'true';
                }
                ,
                _0x36c1d4['vq'] = function(_0x511123) {
                    var _0x5cb839 = _0x3c8b3b;
                    if (_0x511123 !== _0x36c1d4['gq']) {
                        _0x36c1d4['gq'] = _0x511123;
                        var _0xb8df3e = _0xb8df3e || {};
                        _0xb8df3e['consented'] = _0x511123,
                        _0xb8df3e[_0x5cb839(0x54f)] = _0x511123,
                        _0x69e837['co']['do']['Sa'](),
                        _0x69e837['co']['sq']['Sa'](),
                        _0x69e837['co']['yq']['Sa'](function(_0x221228) {
                            _0x221228 && _0x268074(_0x209fb5 = 0x0),
                            _0x36c1d4['zq']();
                        });
                    }
                }
                ,
                _0x36c1d4['Xp'] = function(_0x51ec34, _0x261bdd) {
                    var _0x3228e1 = _0x3c8b3b;
                    _0x53b237['Cg']['Ng'](_0x53b237['Cg']['Dg'], _0x51ec34 ? 'true' : _0x3228e1(0x667)),
                    _0x261bdd && _0x36c1d4['wq'](_0x51ec34),
                    _0x36c1d4['vq'](_0x51ec34);
                }
                ,
                _0x36c1d4['Pl'] = function() {
                    var _0x599690 = _0x3c8b3b;
                    return _0x53b237['Cg']['Og'](_0x53b237['Cg']['Dg']) === _0x599690(0x123);
                }
                ,
                _0x36c1d4['kp'] = function() {
                    var _0x44996c = _0x3c8b3b;
                    try {
                        return !!_0x53b237['c']['isIPInEEA'] || _0x36c1d4['kq'] != null && !!_0x69e837['Pg']['Qg'](_0x36c1d4['kq'][_0x44996c(0x3cb)]['latitude'], _0x36c1d4['kq'][_0x44996c(0x3cb)][_0x44996c(0x4bd)]);
                    } catch (_0x5bce5e) {
                        return !![];
                    }
                }
                ,
                _0x36c1d4['ug'] = function() {
                    _0x36c1d4['iq'] = _0x3a706a['Ca'](),
                    _0x36c1d4['jq'] = _0x36c1d4['iq'] - _0x36c1d4['hq'],
                    _0x36c1d4['Mh']['Uh'](_0x36c1d4['iq'], _0x36c1d4['jq']),
                    _0x36c1d4['Xg']['Uh'](_0x36c1d4['iq'], _0x36c1d4['jq']),
                    _0x36c1d4['hq'] = _0x36c1d4['iq'];
                }
                ,
                _0x36c1d4['qg'] = function() {
                    _0x36c1d4['Xg']['qg']();
                }
                ,
                _0x36c1d4;
            }());
        }
        ,
        _0x53b237['nq'] = function() {
            'use strict';
            var _0x330424 = {
                'Jq': 0x1e,
                'Kq': new _0x32eec3['j'](0x64),
                'Lq': 0x0,
                'Mq': 0x0,
                'Nq': 0x0,
                'Oq': 0x0,
                'Pq': 0x0,
                'Qq': 0x0,
                'go': 0x0,
                'Rq': null,
                'Sq': 0x12c,
                'qq': function() {},
                'rq': function() {},
                'uq': function() {},
                'pq': function() {},
                'Qh': new _0x53b237['dh'](),
                'oq': null,
                'Lh': null,
                'nj': {},
                'li': {},
                'jj': 12.5,
                'Nh': 0x28,
                'Tq': 0x1,
                'Uq': -0x1,
                'Vq': 0x1,
                'Wq': 0x1,
                'Xq': -0x1,
                'Yq': -0x1,
                'Zq': 0x1,
                '$q': 0x1,
                'ar': -0x1,
                'oi': 0x1f4,
                'ei': 0x1f4
            };
            return _0x330424['Qh']['gh'] = 0x1f4,
            _0x330424['Lh'] = new _0x53b237['Ui'](_0x330424['Qh']),
            _0x330424['Sa'] = function() {
                _0x330424['Lh']['_i'](ooo['Xg']['Kf']['Wg']),
                _0x3a706a['X'](function() {
                    _0x330424['uq'](function(_0x195697, _0x12ccd3) {
                        _0x330424['br'](_0x195697, _0x12ccd3);
                    });
                }, _0x444d21['sm']);
            }
            ,
            _0x330424['Ph'] = function(_0x2790bb, _0x554d97, _0x409b56, _0x233663) {
                _0x330424['Uq'] = _0x2790bb,
                _0x330424['Vq'] = _0x554d97,
                _0x330424['Wq'] = _0x409b56,
                _0x330424['Xq'] = _0x233663,
                _0x330424['cr']();
            }
            ,
            _0x330424['dr'] = function(_0x5ce9e4) {
                _0x330424['Tq'] = _0x5ce9e4,
                _0x330424['cr']();
            }
            ,
            _0x330424['cr'] = function() {
                _0x330424['Yq'] = _0x330424['Uq'] - _0x330424['Tq'],
                _0x330424['Zq'] = _0x330424['Vq'] + _0x330424['Tq'],
                _0x330424['$q'] = _0x330424['Wq'] - _0x330424['Tq'],
                _0x330424['ar'] = _0x330424['Xq'] + _0x330424['Tq'];
            }
            ,
            _0x330424['Uh'] = function(_0x1bb117, _0x47df4d) {
                var _0x3555c7 = _0x1792;
                _0x330424['Nq'] += _0x47df4d,
                _0x330424['Mq'] -= _0x330424['Lq'] * 0.2 * _0x47df4d,
                _0x330424['oq']['yi']();
                _0x330424['Rq'] != null && (_0x330424['go'] === 0x2 || _0x330424['go'] === 0x3) && (_0x330424['er'](_0x1bb117, _0x47df4d),
                _0x330424['Nh'] = 0x4 + _0x330424['jj'] * _0x330424['Lh']['Id']);
                var _0x1e1094 = 0x3e8 / _0x3a706a['ia'](0x1, _0x47df4d)
                  , _0x31979d = 0x0;
                for (var _0x5cb4dc = 0x0; _0x5cb4dc < _0x330424['Kq']['length'] - 0x1; _0x5cb4dc++) {
                    _0x31979d += _0x330424['Kq'][_0x5cb4dc],
                    _0x330424['Kq'][_0x5cb4dc] = _0x330424['Kq'][_0x5cb4dc + 0x1];
                }
                ;_0x330424['Kq'][_0x330424['Kq'][_0x3555c7(0x60c)] - 0x1] = _0x1e1094,
                _0x330424['Jq'] = (_0x31979d + _0x1e1094) / _0x330424['Kq'][_0x3555c7(0x60c)];
            }
            ,
            _0x330424['fr'] = function(_0x1d15cf, _0x1d1467) {
                return _0x1d15cf > _0x330424['Yq'] && _0x1d15cf < _0x330424['Zq'] && _0x1d1467 > _0x330424['$q'] && _0x1d1467 < _0x330424['ar'];
            }
            ,
            _0x330424['er'] = function(_0x2a8ee2, _0x156216) {
                var _0x4ffce9 = (_0x330424['Nq'] + _0x330424['Mq'] - _0x330424['Oq']) / (_0x330424['Pq'] - _0x330424['Oq']);
                _0x330424['Lh']['Pj'](_0x2a8ee2, _0x156216),
                _0x330424['Lh']['Qj'](_0x2a8ee2, _0x156216, _0x4ffce9, _0x330424['fr']);
                var _0x59b946 = 0x0;
                for (var _0x9e2fb9 in _0x330424['li']) {
                    var _0x2917df = _0x330424['li'][_0x9e2fb9];
                    _0x2917df['Pj'](_0x2a8ee2, _0x156216),
                    _0x2917df['Qj'](_0x2a8ee2, _0x156216, _0x4ffce9, _0x330424['fr']),
                    _0x2917df['cj'] && _0x2917df['Id'] > _0x59b946 && (_0x59b946 = _0x2917df['Id']),
                    !_0x2917df['bj'] && (!!(_0x2917df['Lj'] < 0.005) || !_0x2917df['cj']) && (_0x2917df['$i'](),
                    delete _0x330424['li'][_0x2917df['ki']['Je']]);
                }
                ;_0x330424['dr'](_0x59b946 * 0x3);
                for (var _0x4bcf1b in _0x330424['nj']) {
                    var _0x53a8e7 = _0x330424['nj'][_0x4bcf1b];
                    _0x53a8e7['Pj'](_0x2a8ee2, _0x156216),
                    _0x53a8e7['Qj'](_0x2a8ee2, _0x156216, _0x330424['fr']),
                    _0x53a8e7['tj'] && (_0x53a8e7['Lj'] < 0.005 || !_0x330424['fr'](_0x53a8e7['Fj'], _0x53a8e7['Gj'])) && (_0x53a8e7['$i'](),
                    delete _0x330424['nj'][_0x53a8e7['ki']['Je']]);
                }
            }
            ,
            _0x330424['Si'] = function(_0x3f7d50, _0x56b03c) {
                _0x330424['go'] === 0x1 && (_0x330424['go'] = 0x2,
                _0x330424['qq']());
                var _0x1c0eac = ooo['iq'];
                _0x330424['Qq'] = _0x3f7d50;
                _0x3f7d50 === 0x0 ? (_0x330424['Oq'] = _0x1c0eac - 0x5f,
                _0x330424['Pq'] = _0x1c0eac,
                _0x330424['Nq'] = _0x330424['Oq'],
                _0x330424['Mq'] = 0x0) : (_0x330424['Oq'] = _0x330424['Pq'],
                _0x330424['Pq'] = _0x330424['Pq'] + _0x56b03c);
                var _0x500b8f = _0x330424['Nq'] + _0x330424['Mq'];
                _0x330424['Lq'] = (_0x500b8f - _0x330424['Oq']) / (_0x330424['Pq'] - _0x330424['Oq']);
            }
            ,
            _0x330424['uj'] = function() {
                if (_0x330424['go'] === 0x1 || _0x330424['go'] === 0x2) {
                    _0x330424['go'] = 0x3;
                    var _0x442337 = _0x330424['Rq'];
                    _0x3a706a['Y'](function() {
                        var _0x5a6f30 = _0x1792;
                        _0x330424['go'] === 0x3 && (_0x330424['go'] = 0x0),
                        _0x442337 != null && _0x442337 === _0x330424['Rq'] && (_0x330424['Rq'][_0x5a6f30(0x5ae)](),
                        _0x330424['Rq'] = null);
                    }, 0x1388),
                    _0x330424['rq']();
                }
            }
            ,
            _0x330424['Aq'] = function() {
                var _0x5550d9 = _0x1792;
                return _0x330424['go'] !== 0x2 && (_0x330424['go'] = 0x1,
                _0x330424['oq']['xi'](),
                _0x330424['nj'] = {},
                _0x330424['li'] = {},
                _0x330424['Lh']['xn'](),
                _0x330424['Rq'] != null && (_0x330424['Rq'][_0x5550d9(0x5ae)](),
                _0x330424['Rq'] = null),
                !![]);
            }
            ,
            _0x330424['gr'] = function() {
                _0x330424['Rq'] = null,
                _0x330424['oq']['xi'](),
                _0x330424['go'] !== 0x3 && _0x330424['pq'](),
                _0x330424['go'] = 0x0;
            }
            ,
            _0x330424['Dq'] = function(_0x119bec, _0x2f73c3) {
                _0x330424['hr'](_0x119bec, function() {
                    var _0x54d915 = _0x1792;
                    if (myGameSettings[_0x54d915(0x6d0)]) {
                        var _0x4b5c8c = document['getElementById']('mm-params-nickname');
                        _0x4b5c8c ? _0x4b5c8c = _0x4b5c8c['value'] || '' : _0x4b5c8c = _0x2f73c3;
                        var _0x3b3359 = 0x80
                          , _0x5aed49 = _0x3a706a['ha'](0x20, _0x4b5c8c[_0x54d915(0x60c)])
                          , _0x24fcd5 = new _0x53b237['Fa'](0x7 + _0x5aed49 * 0x2)
                          , _0x2fd109 = new _0x53b237['Oa'](new _0x53b237['Ga'](_0x24fcd5));
                        _0x2fd109['Pa'](0x81),
                        _0x2fd109['Qa'](0xaf0),
                        _0x2fd109['Pa'](0x0),
                        _0x2fd109['Qa'](_0x3b3359),
                        _0x2fd109['Pa'](_0x5aed49);
                        for (var _0x2998dd = 0x0; _0x2998dd < _0x5aed49; _0x2998dd++) {
                            _0x2fd109['Qa'](_0x4b5c8c[_0x54d915(0x636)](_0x2998dd));
                        }
                        _0x330424['ir'](_0x24fcd5);
                    } else {
                        var _0x3fc173 = _0x3a706a['ha'](0x800, _0x2f73c3[_0x54d915(0x60c)])
                          , _0x24fcd5 = new _0x53b237['Fa'](0x6 + _0x3fc173 * 0x2)
                          , _0x2fd109 = new _0x53b237['Oa'](new _0x53b237['Ga'](_0x24fcd5));
                        _0x2fd109['Pa'](0x81),
                        _0x2fd109['Qa'](0xaf0),
                        _0x2fd109['Pa'](0x1),
                        _0x2fd109['Qa'](_0x3fc173);
                        for (var _0xb2ea6f = 0x0; _0xb2ea6f < _0x3fc173; _0xb2ea6f++) {
                            _0x2fd109['Qa'](_0x2f73c3['charCodeAt'](_0xb2ea6f));
                        }
                        _0x330424['ir'](_0x24fcd5);
                    }
                });
            }
            ,
            _0x330424['Eq'] = function(_0x58586c, _0x16a1b3, _0x3f1d4f) {
                _0x330424['hr'](_0x58586c, function() {
                    var _0x5ab439 = _0x1792
                      , _0x31d37d = _0x3a706a['ha'](0x20, _0x16a1b3['length'])
                      , _0xe82eb0 = new _0x53b237['Fa'](0x7 + _0x31d37d * 0x2)
                      , _0x2cc255 = new _0x53b237['Oa'](new _0x53b237['Ga'](_0xe82eb0));
                    _0x2cc255['Pa'](0x81),
                    _0x2cc255['Qa'](0xaf0),
                    _0x2cc255['Pa'](0x0),
                    _0x2cc255['Qa'](_0x3f1d4f),
                    _0x2cc255['Pa'](_0x31d37d);
                    for (var _0x332f09 = 0x0; _0x332f09 < _0x31d37d; _0x332f09++) {
                        _0x2cc255['Qa'](_0x16a1b3[_0x5ab439(0x636)](_0x332f09));
                    }
                    ;_0x330424['ir'](_0xe82eb0);
                });
            }
            ,
            _0x330424['ir'] = function(_0x50bc4b) {
                var _0x331ab8 = _0x1792;
                try {
                    _0x330424['Rq'] != null && _0x330424['Rq']['readyState'] === _0x32eec3['i'][_0x331ab8(0x75c)] && _0x330424['Rq'][_0x331ab8(0x3b1)](_0x50bc4b);
                } catch (_0x4c79c8) {
                    _0x330424['gr']();
                }
            }
            ,
            _0x330424['br'] = function(_0x3b9027, _0x19529b) {
                var _0x1239c6 = ((_0x19529b ? 0x80 : 0x0) | _0x3a706a['da'](_0x3b9027) / _0x69e837['S'] * 0x80 & 0x7f) & 0xff;
                if (_0x330424['Sq'] !== _0x1239c6) {
                    var _0x34290a = new _0x53b237['Fa'](0x1);
                    new _0x53b237['Oa'](new _0x53b237['Ga'](_0x34290a))['Pa'](_0x1239c6),
                    _0x330424['ir'](_0x34290a),
                    _0x330424['Sq'] = _0x1239c6;
                }
            }
            ,
            _0x330424['hr'] = function(_0x4a6d35, _0x3720d3) {
                var _0x456a8f = _0x1792;
                let _0x573ebb;
                !_0x38c4fe['on'] && _0x444d21[_0x456a8f(0x62b)] && (_0x573ebb = _0x2759a4(_0x444d21[_0x456a8f(0x62b)]));
                var _0x2b7b6a = _0x330424['Rq'] = new _0x32eec3['i'](_0x4a6d35);
                _0x2b7b6a[_0x456a8f(0x3d6)] = _0x456a8f(0x694),
                _0x2b7b6a[_0x456a8f(0x746)] = function() {
                    var _0xb9408b = _0x456a8f;
                    _0x401813(_0x444d21, oeo, _0xb9408b(0x34f)),
                    _0x1babb5(_0x444d21, oeo, _0xb9408b(0x1e3)),
                    _0x330424['Rq'] === _0x2b7b6a && _0x3720d3();
                }
                ,
                _0x2b7b6a[_0x456a8f(0x70d)] = function() {
                    var _0x58d86a = _0x456a8f;
                    _0x401813(_0x444d21, oeo, 'close'),
                    _0x1babb5(_0x444d21, oeo, 'hidden'),
                    !_0x38c4fe['on'] && _0x444d21[_0x58d86a(0x62b)] && _0x573ebb && _0x573ebb['destroy'](),
                    _0x330424['Rq'] === _0x2b7b6a && _0x330424['gr']();
                }
                ,
                _0x2b7b6a[_0x456a8f(0x66a)] = function(_0x3aede8) {
                    var _0x5aeb2b = _0x456a8f;
                    _0x330424['Rq'] === _0x2b7b6a && _0x330424['gr'](),
                    !_0x38c4fe['on'] && _0x444d21[_0x5aeb2b(0x62b)] && _0x573ebb && _0x573ebb['destroy']();
                }
                ,
                _0x2b7b6a[_0x456a8f(0x684)] = function(_0x46d1cd) {
                    var _0xefd8f6 = _0x456a8f;
                    _0x330424['Rq'] === _0x2b7b6a && _0x330424['oq']['wi'](_0x46d1cd[_0xefd8f6(0x56d)]);
                }
                ;
            }
            ,
            _0x330424;
        }
        ,
        _0x94a5a3 = _0x53b237['c']['ENV'],
        (_0x39f4dc = {})['main'] = {
            'do': _0x3a706a['Ua']('aqnvgcpz05orkobh', _0x5b8a80(0x5fc)),
            'sq': _0x3a706a['Ua'](_0x5b8a80(0x20f), _0x5b8a80(0x260)),
            'yq': _0x3a706a['Ra'](),
            'fq': 0x4,
            'xq': ![],
            'bo': !![]
        },
        _0x39f4dc[_0x5b8a80(0x6e8)] = {
            'do': _0x3a706a['Ua'](_0x5b8a80(0x445), _0x5b8a80(0x5fc)),
            'sq': _0x3a706a['Ua'](_0x5b8a80(0x20f), 'wormate-io_970x250'),
            'yq': _0x3a706a['Ra'](),
            'fq': 0x4,
            'xq': ![],
            'bo': ![]
        };
        !(_0x51f979 = _0x39f4dc[_0x94a5a3]) && (_0x51f979 = _0x39f4dc['main']);
        _0x69e837['co'] = _0x51f979,
        $(function() {
            var _0x2dc450 = _0x5b8a80;
            FastClick[_0x2dc450(0x2cb)](_0x53b237['d'][_0x2dc450(0x2b0)]);
        }),
        addEventListener(_0x5b8a80(0x329), function(_0x1324fe) {
            var _0x20bbce = _0x5b8a80;
            return _0x1324fe['preventDefault'](),
            _0x1324fe[_0x20bbce(0x584)](),
            ![];
        }),
        _0x363c93 = ![],
        _0x40e2e2 = ![],
        _0x3a706a['ba'](_0x5b8a80(0x733), ((_0xdc1a9e = {})['id'] = _0x5b8a80(0x1b8),
        _0xdc1a9e[_0x5b8a80(0x130)] = !![],
        _0xdc1a9e), function() {
            var _0x3b86f6 = _0x5b8a80;
            _0x363c93 = !![],
            _0x40e2e2 = ![],
            zE('webWidget', _0x3b86f6(0x3af)),
            zE('webWidget:\x20on', _0x3b86f6(0x5ae), function() {
                var _0x3ab63e = _0x3b86f6;
                zE(_0x3ab63e(0x50c), _0x3ab63e(0x3af)),
                _0x40e2e2 = ![];
            });
        }),
        $(_0x5b8a80(0x3f4))['click'](function() {
            var _0x58bd8b = _0x5b8a80;
            _0x363c93 && (_0x40e2e2 ? (zE(_0x58bd8b(0x50c), _0x58bd8b(0x5ae)),
            _0x40e2e2 = ![]) : (zE(_0x58bd8b(0x50c), _0x58bd8b(0x34f)),
            zE(_0x58bd8b(0x50c), 'show'),
            _0x40e2e2 = !![]));
        }),
        _0x53b237['c']['fbAsyncInit'] = function() {
            var _0x1d1e97 = _0x5b8a80, _0x34d4c4;
            FB[_0x1d1e97(0x1a0)](((_0x34d4c4 = {})[_0x1d1e97(0x599)] = _0x1d1e97(0x201),
            _0x34d4c4[_0x1d1e97(0x3b9)] = !![],
            _0x34d4c4[_0x1d1e97(0x25c)] = !![],
            _0x34d4c4[_0x1d1e97(0x755)] = !![],
            _0x34d4c4[_0x1d1e97(0x573)] = 'v14.0',
            _0x34d4c4));
        }
        ,
        _0x3a706a['ba'](_0x5b8a80(0x222) + _0x69e837['H']['Q'] + _0x5b8a80(0x5cd), ((_0x4d7d88 = {})['id'] = 'facebook-jssdk',
        _0x4d7d88[_0x5b8a80(0x130)] = !![],
        _0x4d7d88['defer'] = !![],
        _0x4d7d88[_0x5b8a80(0x1fc)] = _0x5b8a80(0x5c4),
        _0x4d7d88)),
        _0x3a706a['ba']('https://apis.google.com/js/platform.js', null, function() {
            var _0x1dfbef = _0x5b8a80;
            gapi[_0x1dfbef(0x2e6)]('auth2', function() {
                var _0x18a319 = _0x1dfbef, _0xffe612;
                GoogleAuth = gapi[_0x18a319(0x3be)]['init'](((_0xffe612 = {})['client_id'] = '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com',
                _0xffe612));
            });
        }),
        _0x3a706a['ba'](_0x5b8a80(0x54c)),
        (function() {
            var _0xf540e1 = _0x5b8a80;
            try {
                let _0x26fb53 = document[_0xf540e1(0x3eb)]('head')[0x0]
                  , _0x225beb = document[_0xf540e1(0x2ea)](_0xf540e1(0x6d2));
                _0x225beb[_0xf540e1(0x340)] = 'stylesheet',
                _0x225beb[_0xf540e1(0x333)] = _0xf540e1(0x61b),
                _0x225beb[_0xf540e1(0x5c1)] = _0xf540e1(0x1a9),
                _0x26fb53[_0xf540e1(0x513)](_0x225beb);
            } catch (_0x4875bf) {
                console[_0xf540e1(0x6e5)](_0x4875bf);
            }
        }()),
        (ooo = _0x3a706a['dq']())['Sa'](),
        oeo = ooo['Xg']['Kf']['Wg']['Ah'],
        function _0x29c909() {
            requestAnimationFrame(_0x29c909),
            ooo['ug']();
        }(),
        (function() {
            var _0x4a7cf4 = _0x5b8a80;
            function _0x57a0e4() {
                var _0x4c45b0 = _0x1792
                  , _0x5209d2 = _0x8efb68[_0x4c45b0(0x612)]()
                  , _0x38ab71 = _0x8efb68['height']()
                  , _0x3e9c3a = _0x35f29e[_0x4c45b0(0x49e)]()
                  , _0x1ccd31 = _0x35f29e[_0x4c45b0(0x55d)]()
                  , _0x57391c = _0x347770['outerHeight']()
                  , _0x3e7c0f = _0x42e72a['outerHeight']()
                  , _0x2cc50a = _0x3a706a['ha'](0x1, _0x3a706a['ha']((_0x38ab71 - _0x3e7c0f - _0x57391c) / _0x1ccd31, _0x5209d2 / _0x3e9c3a))
                  , _0x515c8c = _0x4c45b0(0x346) + _0x2cc50a + ')';
                _0x35f29e['css'](_0x4c45b0(0x72e), _0x515c8c),
                _0x35f29e[_0x4c45b0(0x4fa)](_0x4c45b0(0x352), _0x515c8c),
                _0x35f29e['css']('-ms-transform', _0x515c8c),
                _0x35f29e[_0x4c45b0(0x4fa)](_0x4c45b0(0x162), _0x515c8c),
                _0x35f29e[_0x4c45b0(0x4fa)]('transform', _0x515c8c),
                ooo['qg'](),
                _0x53b237['c'][_0x4c45b0(0x4c4)](0x0, 0x1);
            }
            var _0x8efb68 = $('body')
              , _0x35f29e = $(_0x4a7cf4(0x4ce))
              , _0x347770 = $(_0x4a7cf4(0x2d8))
              , _0x42e72a = $('#markup-footer');
            _0x57a0e4(),
            $(_0x53b237['c'])[_0x4a7cf4(0x629)](_0x57a0e4);
        }());
        let _0x2934c2 = function(_0x286c41, _0x17af82) {
            var _0x598cdc = _0x5b8a80
              , _0x38ad81 = $(_0x598cdc(0x5e8));
            _0x38ad81[_0x598cdc(0x1d4)]('checked', _0x286c41[_0x598cdc(0x186)]),
            _0x38ad81['change'](function() {
                var _0x4e45a0 = _0x598cdc;
                if (!this[_0x4e45a0(0x586)]) {
                    let _0xfc63cc = confirm(localStorage[_0x4e45a0(0x325)](_0x4e45a0(0x3fb)));
                    $(this)[_0x4e45a0(0x1d4)](_0x4e45a0(0x586), !_0xfc63cc),
                    !this['checked'] && _0x401813(_0x286c41, _0x17af82, _0x4e45a0(0x537));
                }
                ;_0x286c41[_0x4e45a0(0x186)] = this['checked'],
                _0x17af82[_0x4e45a0(0x2fe)][_0x4e45a0(0x626)] = this['checked'] ? 0x1 : 0x0,
                _0x17af82[_0x4e45a0(0x232)][_0x4e45a0(0x626)] = this[_0x4e45a0(0x586)] ? 0x1 : 0x0,
                localStorage['setItem'](_0x4e45a0(0x432), this[_0x4e45a0(0x586)] ? JSON[_0x4e45a0(0x608)](_0x286c41) : null);
            });
        }
          , _0x401813 = function(_0x1e0582, _0x242951, _0x3ff3ca, _0xc6ec9f) {
            var _0x287e6b = _0x5b8a80;
            let _0x36a097 = function(_0x2285bc, _0x55cc27, _0x1a5bef, _0xed277f) {
                var _0x422356 = _0x1792;
                _0x242951[_0x422356(0x2b2)]['text'] = _0x55cc27,
                _0x242951[_0x422356(0x2fe)][_0x422356(0x159)] = _0x1a5bef,
                _0x242951[_0x422356(0x484)][_0x422356(0x159)] = _0x2285bc,
                _0x242951[_0x422356(0x232)]['text'] = _0xed277f;
            };
            _0x3ff3ca === _0x287e6b(0x1f4) && (_0x1e0582[_0x287e6b(0x46a)] = (_0x1e0582[_0x287e6b(0x46a)] || 0x0) + (_0xc6ec9f ? 0x0 : 0x1),
            _0x1e0582[_0x287e6b(0x24a)] = (_0x1e0582[_0x287e6b(0x24a)] || 0x0) + (_0xc6ec9f ? 0x1 : 0x0),
            _0x1e0582[_0x287e6b(0x4dc)] += _0xc6ec9f ? 0x0 : 0x1,
            _0x1e0582[_0x287e6b(0x54a)] += _0xc6ec9f ? 0x1 : 0x0,
            _0x36a097(_0x1e0582[_0x287e6b(0x46a)], _0x1e0582[_0x287e6b(0x24a)], _0x1e0582[_0x287e6b(0x54a)], _0x1e0582[_0x287e6b(0x4dc)]),
            _0xc6ec9f && wormxObjects && wormxObjects[_0x287e6b(0x544)] && (_0x1e0582['headshot'] % 0xa === 0x0 && _0x1e0582['headshot'] > 0x0 && (console['log'](_0x287e6b(0x42d) + _0x1e0582[_0x287e6b(0x24a)]),
            window[_0x287e6b(0x369)]())));
            _0x3ff3ca === _0x287e6b(0x34f) && (_0x1e0582[_0x287e6b(0x46a)] = 0x0,
            _0x1e0582[_0x287e6b(0x24a)] = 0x0,
            _0x1e0582['s'] = !![],
            _0x1e0582['st'] = !![],
            _0x31aef3[_0x287e6b(0x310)] = _0x58d665,
            _0x1e0582['saveGame'] && _0x36a097(_0x1e0582[_0x287e6b(0x46a)], _0x1e0582[_0x287e6b(0x24a)], _0x1e0582['s_headshot'], _0x1e0582[_0x287e6b(0x4dc)]),
            _0x2f221d());
            if (_0x3ff3ca === 'close') {
                _0x1e0582['s'] = ![],
                _0xa85e3[_0x287e6b(0x310)] = _0x4db385,
                _0x9f96af[_0x287e6b(0x310)] = _0x3a3827,
                _0x4c5f33 = ![],
                _0x41af32 = 0x37,
                _0x280ab2 = 0x1,
                _0x428de2 = !![],
                clearInterval(_0x83e7a4),
                _0x83e7a4 = null,
                clearInterval(_0x3bbb88),
                _0x3bbb88 = null,
                _0x1e0582['z'] = 0x1,
                _0x1e0582['fz'] = !![],
                _0x1e0582[_0x287e6b(0x568)]['x'] = -0x1,
                _0x1e0582[_0x287e6b(0x568)]['y'] = -0x1,
                _0x1e0582[_0x287e6b(0x31b)]['x'] = -0x1,
                _0x1e0582['mo2']['y'] = -0x1;
                const _0x5c3e24 = document[_0x287e6b(0x717)](_0x287e6b(0x48c));
                _0x5c3e24[_0x287e6b(0x58d)](_0xb54114 => {
                    var _0x4ec1f4 = _0x287e6b;
                    _0xb54114['pause'](),
                    _0xb54114[_0x4ec1f4(0x5d9)] = 0x0;
                }
                ),
                _0x38c4fe && _0x38c4fe['on'] && _0x1e0582[_0x287e6b(0x62b)] && _0x1e0582['mo'] == 0x6 && _0x1e0582['j'] && _0x1e0582['j']['destroy'](),
                _0x1e0582[_0x287e6b(0x186)] ? _0x1e0582[_0x287e6b(0x293)] = (_0x1e0582['died'] || 0x0) + 0x1 : _0x401813(_0x1e0582, _0x242951, _0x287e6b(0x537));
            }
            _0x3ff3ca === _0x287e6b(0x537) && (_0x1e0582[_0x287e6b(0x46a)] = 0x0,
            _0x1e0582[_0x287e6b(0x4dc)] = 0x0,
            _0x1e0582[_0x287e6b(0x24a)] = 0x0,
            _0x1e0582['s_headshot'] = 0x0,
            _0x1e0582[_0x287e6b(0x293)] = 0x0),
            localStorage[_0x287e6b(0x128)](_0x287e6b(0x432), JSON[_0x287e6b(0x608)](_0x1e0582));
        };
        window[_0x5b8a80(0x2ce)] = !![];
        function _0x5c85e0() {
            var _0x1b1e3f = _0x5b8a80;
            const _0x3f369b = localStorage[_0x1b1e3f(0x325)]('wupPulseEnabled');
            _0x3f369b !== null && (window['pulseEnabled'] = _0x3f369b === _0x1b1e3f(0x123));
        }
        function _0x3810e6() {
            var _0x25038f = _0x5b8a80;
            localStorage[_0x25038f(0x128)](_0x25038f(0x5dc), window[_0x25038f(0x2ce)][_0x25038f(0x132)]());
        }
        function _0x46a5c3() {
            var _0x34a0d5 = _0x5b8a80;
            _0x5c85e0();
            if (window[_0x34a0d5(0x778)])
                return;
            window[_0x34a0d5(0x778)] = !![];
            function _0x45ba70() {
                var _0xbe1581 = _0x34a0d5;
                if (!window[_0xbe1581(0x2ce)]) {
                    [_0xbe1581(0x2d7), 'pk1', 'pk2', _0xbe1581(0x20c), _0xbe1581(0x373), _0xbe1581(0x22f), _0xbe1581(0x25d)][_0xbe1581(0x58d)](_0x4223d3 => {
                        var _0x5e4150 = _0xbe1581;
                        const _0x4f62d0 = globalThis['config']?.[_0x4223d3];
                        _0x4f62d0 && _0x4f62d0[_0x5e4150(0x344)] && _0x225969(_0x4f62d0);
                    }
                    );
                    return;
                }
                [_0xbe1581(0x2d7), _0xbe1581(0x3f8), _0xbe1581(0x386), _0xbe1581(0x20c), _0xbe1581(0x373), 'pk5', _0xbe1581(0x25d)][_0xbe1581(0x58d)](_0x1cd270 => {
                    var _0x66ee13 = _0xbe1581;
                    const _0x52794e = globalThis['config']?.[_0x1cd270];
                    if (!_0x52794e || !_0x52794e[_0x66ee13(0x159)])
                        return;
                    const _0x2e7471 = _0x52794e[_0x66ee13(0x75d)] && _0x52794e['style'][_0x66ee13(0x77f)] === _0x66ee13(0x70c)
                      , _0x29c839 = _0x52794e[_0x66ee13(0x75d)] && _0x52794e[_0x66ee13(0x75d)][_0x66ee13(0x77f)] === _0x66ee13(0x1a6);
                    if (_0x2e7471 || _0x29c839) {
                        const _0x212d93 = parseInt(_0x52794e[_0x66ee13(0x159)]);
                        !isNaN(_0x212d93) && _0x212d93 > 0x0 && _0x212d93 <= 0x5 ? _0xeb0e0f(_0x52794e) : _0x225969(_0x52794e);
                    } else
                        _0x225969(_0x52794e);
                }
                );
            }
            function _0xeb0e0f(_0x4be370) {
                var _0x354ef0 = _0x34a0d5;
                if (_0x4be370[_0x354ef0(0x344)])
                    return;
                _0x4be370[_0x354ef0(0x178)] = _0x4be370[_0x354ef0(0x75d)][_0x354ef0(0x77f)],
                _0x4be370[_0x354ef0(0x5d6)] = _0x4be370[_0x354ef0(0x75d)][_0x354ef0(0x265)] || _0x354ef0(0x24d),
                _0x4be370[_0x354ef0(0x344)] = !![],
                _0x4be370[_0x354ef0(0x379)] = 0x0,
                _0x4be370[_0x354ef0(0x50e)] = setInterval( () => {
                    var _0x324c2a = _0x354ef0;
                    const _0xf5f94c = Date[_0x324c2a(0x4f5)]();
                    _0xf5f94c - _0x4be370['_lastPulseTime'] > 0x320 && (_0x4be370[_0x324c2a(0x379)] = _0xf5f94c,
                    _0x4be370[_0x324c2a(0x75d)][_0x324c2a(0x77f)] = _0x324c2a(0x6e1),
                    _0x4be370['style']['fontSize'] = _0x324c2a(0x61f),
                    _0x4be370[_0x324c2a(0x75d)][_0x324c2a(0x3c8)] = !![],
                    _0x4be370['style'][_0x324c2a(0x5d7)] = _0x324c2a(0x6e1),
                    _0x4be370[_0x324c2a(0x75d)][_0x324c2a(0x6ce)] = 0x5,
                    _0x4be370['style']['dropShadowBlur'] = 0x6,
                    setTimeout( () => {
                        var _0x244534 = _0x324c2a;
                        if (!_0x4be370 || !_0x4be370[_0x244534(0x75d)])
                            return;
                        _0x4be370['style'][_0x244534(0x77f)] = _0x4be370[_0x244534(0x178)],
                        _0x4be370[_0x244534(0x75d)]['fontSize'] = _0x4be370[_0x244534(0x5d6)],
                        _0x4be370[_0x244534(0x75d)]['dropShadow'] = ![];
                    }
                    , 0x190));
                }
                , 0x64);
            }
            function _0x225969(_0x36b14c) {
                var _0x338241 = _0x34a0d5;
                if (!_0x36b14c || !_0x36b14c[_0x338241(0x344)])
                    return;
                clearInterval(_0x36b14c[_0x338241(0x50e)]),
                _0x36b14c[_0x338241(0x50e)] = null,
                _0x36b14c[_0x338241(0x344)] = ![],
                _0x36b14c[_0x338241(0x178)] && _0x36b14c[_0x338241(0x75d)] && (_0x36b14c['style']['fill'] = _0x36b14c['_originalColor']),
                _0x36b14c['_originalFontSize'] && _0x36b14c[_0x338241(0x75d)] && (_0x36b14c['style'][_0x338241(0x265)] = _0x36b14c[_0x338241(0x5d6)]),
                _0x36b14c['style'] && (_0x36b14c[_0x338241(0x75d)]['dropShadow'] = ![]);
            }
            window[_0x34a0d5(0x57a)](_0x34a0d5(0x142), function() {
                var _0x3b53f1 = _0x34a0d5;
                [_0x3b53f1(0x2d7), 'pk1', 'pk2', _0x3b53f1(0x20c), _0x3b53f1(0x373), _0x3b53f1(0x22f), _0x3b53f1(0x25d)][_0x3b53f1(0x58d)](_0x53711a => {
                    var _0x3a3720 = _0x3b53f1;
                    const _0x333b6c = globalThis['config']?.[_0x53711a];
                    _0x333b6c && _0x333b6c[_0x3a3720(0x344)] && clearInterval(_0x333b6c[_0x3a3720(0x50e)]);
                }
                );
            }),
            setInterval(_0x45ba70, 0xc8);
        }
        let _0x1babb5 = function(_0x5be284, _0x5b6d66, _0xf26417, _0x53e300, _0x36655a, _0x237362) {
            var _0x3a0916 = _0x5b8a80, _0x51427b, _0x3410be, _0x5d3151;
            globalThis[_0x3a0916(0x372)] = _0x5b6d66,
            _0x46a5c3();
            let _0x410598 = function(_0x15f50d, _0x47aba0, _0x1528ea, _0x51245a, _0x4e3d63, _0x4805cc, _0x2fc10f) {
                var _0x378383 = _0x3a0916;
                _0x5b6d66[_0x378383(0x2d7)][_0x378383(0x159)] != _0x15f50d && (_0x5b6d66[_0x378383(0x2d7)][_0x378383(0x159)] = _0x15f50d),
                _0x5b6d66[_0x378383(0x3f8)]['text'] != _0x47aba0 && (_0x5b6d66[_0x378383(0x3f8)][_0x378383(0x159)] = _0x47aba0),
                _0x5b6d66[_0x378383(0x386)]['text'] != _0x1528ea && (_0x5b6d66[_0x378383(0x386)][_0x378383(0x159)] = _0x1528ea),
                _0x5b6d66['pk3'][_0x378383(0x159)] != _0x51245a && (_0x5b6d66['pk3'][_0x378383(0x159)] = _0x51245a),
                _0x5b6d66[_0x378383(0x373)][_0x378383(0x159)] != _0x4e3d63 && (_0x5b6d66[_0x378383(0x373)][_0x378383(0x159)] = _0x4e3d63),
                _0x5b6d66[_0x378383(0x22f)][_0x378383(0x159)] != _0x4805cc && (_0x5b6d66[_0x378383(0x22f)][_0x378383(0x159)] = _0x4805cc),
                _0x5b6d66[_0x378383(0x25d)][_0x378383(0x159)] != _0x2fc10f && (_0x5b6d66[_0x378383(0x25d)][_0x378383(0x159)] = _0x2fc10f);
            };
            _0xf26417 === _0x3a0916(0x288) && (_0x51427b = _0x53e300,
            _0x3410be = _0x36655a,
            _0x5d3151 = _0x237362,
            _0x51427b == 0x0 && ((_0x3410be == 0x0 || _0x3410be == 0x1 || _0x3410be == 0x2 || _0x3410be == 0x6) && (_0x5be284['pk'] = 0x1e - _0x5d3151 * 0x64 * (0x1e / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x2d7)] = '' : _0x5be284[_0x3a0916(0x2d7)] = _0x5be284['pk']['toFixed'](),
            _0x3410be == 0x0 && _0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x70c) && (_0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x70c)),
            _0x3410be == 0x1 && _0x5b6d66['pk0'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x1a6) && (_0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x1a6)),
            _0x3410be == 0x2 && _0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x350) && (_0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350)),
            _0x3410be == 0x6 && _0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x58a) && (_0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = '#e74a94')),
            _0x3410be == 0x3 && (_0x5be284['pk'] = 0x50 - _0x5d3151 * 0x64 * (0x50 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x2d7)] = '' : _0x5be284[_0x3a0916(0x2d7)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66['pk0'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x6a7) && (_0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x6a7))),
            _0x3410be == 0x4 && (_0x5be284['pk'] = 0x28 - _0x5d3151 * 0x64 * (0x28 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x2d7)] = '' : _0x5be284[_0x3a0916(0x2d7)] = _0x5be284['pk']['toFixed'](),
            _0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x350) && (_0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x350))),
            _0x3410be == 0x5 && (_0x5be284['pk'] = 0x14 - _0x5d3151 * 0x64 * (0x14 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x2d7)] = '' : _0x5be284[_0x3a0916(0x2d7)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x2d7)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != '#d4db19' && (_0x5b6d66['pk0'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x22a))),
            _0x5be284[_0x3a0916(0x3f8)] = '',
            _0x5be284[_0x3a0916(0x386)] = '',
            _0x5be284[_0x3a0916(0x20c)] = '',
            _0x5be284[_0x3a0916(0x373)] = '',
            _0x5be284['pk5'] = '',
            _0x5be284[_0x3a0916(0x25d)] = ''),
            _0x51427b == 0x28 && ((_0x3410be == 0x0 || _0x3410be == 0x1 || _0x3410be == 0x2 || _0x3410be == 0x6) && (_0x5be284['pk'] = 0x1e - _0x5d3151 * 0x64 * (0x1e / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x3f8)] = '' : _0x5be284[_0x3a0916(0x3f8)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x3410be == 0x0 && _0x5b6d66[_0x3a0916(0x3f8)]['style'][_0x3a0916(0x77f)] != _0x3a0916(0x70c) && (_0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x70c)),
            _0x3410be == 0x1 && _0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x1a6) && (_0x5b6d66[_0x3a0916(0x3f8)]['style'][_0x3a0916(0x77f)] = _0x3a0916(0x1a6)),
            _0x3410be == 0x2 && _0x5b6d66['pk1'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x350) && (_0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350)),
            _0x3410be == 0x6 && _0x5b6d66['pk1'][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x58a) && (_0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x58a))),
            _0x3410be == 0x3 && (_0x5be284['pk'] = 0x50 - _0x5d3151 * 0x64 * (0x50 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284['pk1'] = '' : _0x5be284[_0x3a0916(0x3f8)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x6a7) && (_0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = '#e03e42')),
            _0x3410be == 0x4 && (_0x5be284['pk'] = 0x28 - _0x5d3151 * 0x64 * (0x28 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x3f8)] = '' : _0x5be284[_0x3a0916(0x3f8)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x3f8)]['style']['fill'] != _0x3a0916(0x350) && (_0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350))),
            _0x3410be == 0x5 && (_0x5be284['pk'] = 0x14 - _0x5d3151 * 0x64 * (0x14 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x3f8)] = '' : _0x5be284[_0x3a0916(0x3f8)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != '#d4db19' && (_0x5b6d66[_0x3a0916(0x3f8)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x22a))),
            _0x5be284[_0x3a0916(0x386)] = '',
            _0x5be284[_0x3a0916(0x20c)] = '',
            _0x5be284[_0x3a0916(0x373)] = '',
            _0x5be284['pk5'] = '',
            _0x5be284['pk6'] = ''),
            _0x51427b == 0x50 && ((_0x3410be == 0x0 || _0x3410be == 0x1 || _0x3410be == 0x2 || _0x3410be == 0x6) && (_0x5be284['pk'] = 0x1e - _0x5d3151 * 0x64 * (0x1e / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x386)] = '' : _0x5be284[_0x3a0916(0x386)] = _0x5be284['pk']['toFixed'](),
            _0x3410be == 0x0 && _0x5b6d66[_0x3a0916(0x386)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x70c) && (_0x5b6d66[_0x3a0916(0x386)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x70c)),
            _0x3410be == 0x1 && _0x5b6d66[_0x3a0916(0x386)][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x1a6) && (_0x5b6d66[_0x3a0916(0x386)][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x1a6)),
            _0x3410be == 0x2 && _0x5b6d66['pk2'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x350) && (_0x5b6d66[_0x3a0916(0x386)]['style']['fill'] = _0x3a0916(0x350)),
            _0x3410be == 0x6 && _0x5b6d66['pk2']['style'][_0x3a0916(0x77f)] != _0x3a0916(0x58a) && (_0x5b6d66[_0x3a0916(0x386)]['style']['fill'] = _0x3a0916(0x58a))),
            _0x3410be == 0x3 && (_0x5be284['pk'] = 0x50 - _0x5d3151 * 0x64 * (0x50 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x386)] = '' : _0x5be284[_0x3a0916(0x386)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x386)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x6a7) && (_0x5b6d66['pk2'][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x6a7))),
            _0x3410be == 0x4 && (_0x5be284['pk'] = 0x28 - _0x5d3151 * 0x64 * (0x28 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284['pk2'] = '' : _0x5be284['pk2'] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x386)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != '#5dade6' && (_0x5b6d66[_0x3a0916(0x386)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350))),
            _0x3410be == 0x5 && (_0x5be284['pk'] = 0x14 - _0x5d3151 * 0x64 * (0x14 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284['pk2'] = '' : _0x5be284['pk2'] = _0x5be284['pk']['toFixed'](),
            _0x5b6d66[_0x3a0916(0x386)]['style']['fill'] != _0x3a0916(0x22a) && (_0x5b6d66[_0x3a0916(0x386)]['style']['fill'] = _0x3a0916(0x22a))),
            _0x5be284[_0x3a0916(0x20c)] = '',
            _0x5be284[_0x3a0916(0x373)] = '',
            _0x5be284['pk5'] = '',
            _0x5be284[_0x3a0916(0x25d)] = ''),
            _0x51427b == 0x78 && ((_0x3410be == 0x0 || _0x3410be == 0x1 || _0x3410be == 0x2 || _0x3410be == 0x6) && (_0x5be284['pk'] = 0x1e - _0x5d3151 * 0x64 * (0x1e / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x20c)] = '' : _0x5be284['pk3'] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x3410be == 0x0 && _0x5b6d66[_0x3a0916(0x20c)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x70c) && (_0x5b6d66['pk3'][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x70c)),
            _0x3410be == 0x1 && _0x5b6d66['pk3'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != '#fdbf5f' && (_0x5b6d66[_0x3a0916(0x20c)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = '#fdbf5f'),
            _0x3410be == 0x2 && _0x5b6d66['pk3']['style']['fill'] != _0x3a0916(0x350) && (_0x5b6d66['pk3'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350)),
            _0x3410be == 0x6 && _0x5b6d66[_0x3a0916(0x20c)]['style'][_0x3a0916(0x77f)] != _0x3a0916(0x58a) && (_0x5b6d66[_0x3a0916(0x20c)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x58a))),
            _0x3410be == 0x3 && (_0x5be284['pk'] = 0x50 - _0x5d3151 * 0x64 * (0x50 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x20c)] = '' : _0x5be284[_0x3a0916(0x20c)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x20c)][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x6a7) && (_0x5b6d66['pk3'][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x6a7))),
            _0x3410be == 0x4 && (_0x5be284['pk'] = 0x28 - _0x5d3151 * 0x64 * (0x28 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x20c)] = '' : _0x5be284[_0x3a0916(0x20c)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x20c)][_0x3a0916(0x75d)]['fill'] != '#5dade6' && (_0x5b6d66[_0x3a0916(0x20c)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350))),
            _0x3410be == 0x5 && (_0x5be284['pk'] = 0x14 - _0x5d3151 * 0x64 * (0x14 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x20c)] = '' : _0x5be284[_0x3a0916(0x20c)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66['pk3']['style'][_0x3a0916(0x77f)] != _0x3a0916(0x22a) && (_0x5b6d66[_0x3a0916(0x20c)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x22a))),
            _0x5be284[_0x3a0916(0x373)] = '',
            _0x5be284[_0x3a0916(0x22f)] = '',
            _0x5be284[_0x3a0916(0x25d)] = ''),
            _0x51427b == 0xa0 && ((_0x3410be == 0x0 || _0x3410be == 0x1 || _0x3410be == 0x2 || _0x3410be == 0x6) && (_0x5be284['pk'] = 0x1e - _0x5d3151 * 0x64 * (0x1e / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284['pk4'] = '' : _0x5be284['pk4'] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x3410be == 0x0 && _0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x70c) && (_0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x70c)),
            _0x3410be == 0x1 && _0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x1a6) && (_0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x1a6)),
            _0x3410be == 0x2 && _0x5b6d66[_0x3a0916(0x373)]['style']['fill'] != '#5dade6' && (_0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350)),
            _0x3410be == 0x6 && _0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x58a) && (_0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x58a))),
            _0x3410be == 0x3 && (_0x5be284['pk'] = 0x50 - _0x5d3151 * 0x64 * (0x50 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x373)] = '' : _0x5be284['pk4'] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x6a7) && (_0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x6a7))),
            _0x3410be == 0x4 && (_0x5be284['pk'] = 0x28 - _0x5d3151 * 0x64 * (0x28 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x373)] = '' : _0x5be284['pk4'] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x373)]['style']['fill'] != _0x3a0916(0x350) && (_0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350))),
            _0x3410be == 0x5 && (_0x5be284['pk'] = 0x14 - _0x5d3151 * 0x64 * (0x14 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x373)] = '' : _0x5be284[_0x3a0916(0x373)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x373)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != '#d4db19' && (_0x5b6d66['pk4'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x22a))),
            _0x5be284[_0x3a0916(0x22f)] = '',
            _0x5be284[_0x3a0916(0x25d)] = ''),
            _0x51427b == 0xc8 && ((_0x3410be == 0x0 || _0x3410be == 0x1 || _0x3410be == 0x2 || _0x3410be == 0x6) && (_0x5be284['pk'] = 0x1e - _0x5d3151 * 0x64 * (0x1e / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x22f)] = '' : _0x5be284[_0x3a0916(0x22f)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x3410be == 0x0 && _0x5b6d66[_0x3a0916(0x22f)]['style'][_0x3a0916(0x77f)] != '#f9cc0b' && (_0x5b6d66[_0x3a0916(0x22f)]['style'][_0x3a0916(0x77f)] = _0x3a0916(0x70c)),
            _0x3410be == 0x1 && _0x5b6d66[_0x3a0916(0x22f)][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x1a6) && (_0x5b6d66[_0x3a0916(0x22f)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = '#fdbf5f'),
            _0x3410be == 0x2 && _0x5b6d66['pk5'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x350) && (_0x5b6d66['pk5'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350)),
            _0x3410be == 0x6 && _0x5b6d66[_0x3a0916(0x22f)][_0x3a0916(0x75d)]['fill'] != _0x3a0916(0x58a) && (_0x5b6d66[_0x3a0916(0x22f)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x58a))),
            _0x3410be == 0x3 && (_0x5be284['pk'] = 0x50 - _0x5d3151 * 0x64 * (0x50 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x22f)] = '' : _0x5be284[_0x3a0916(0x22f)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66['pk5'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x6a7) && (_0x5b6d66[_0x3a0916(0x22f)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x6a7))),
            _0x3410be == 0x4 && (_0x5be284['pk'] = 0x28 - _0x5d3151 * 0x64 * (0x28 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x22f)] = '' : _0x5be284['pk5'] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x22f)]['style'][_0x3a0916(0x77f)] != _0x3a0916(0x350) && (_0x5b6d66[_0x3a0916(0x22f)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x350))),
            _0x3410be == 0x5 && (_0x5be284['pk'] = 0x14 - _0x5d3151 * 0x64 * (0x14 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x22f)] = '' : _0x5be284[_0x3a0916(0x22f)] = _0x5be284['pk']['toFixed'](),
            _0x5b6d66['pk5'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x22a) && (_0x5b6d66[_0x3a0916(0x22f)][_0x3a0916(0x75d)]['fill'] = '#d4db19')),
            _0x5be284[_0x3a0916(0x25d)] = ''),
            _0x51427b == 0xf0 && ((_0x3410be == 0x0 || _0x3410be == 0x1 || _0x3410be == 0x2 || _0x3410be == 0x6) && (_0x5be284['pk'] = 0x1e - _0x5d3151 * 0x64 * (0x1e / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x25d)] = '' : _0x5be284[_0x3a0916(0x25d)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x3410be == 0x0 && _0x5b6d66[_0x3a0916(0x25d)]['style']['fill'] != _0x3a0916(0x70c) && (_0x5b6d66[_0x3a0916(0x25d)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x70c)),
            _0x3410be == 0x1 && _0x5b6d66['pk6'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x1a6) && (_0x5b6d66[_0x3a0916(0x25d)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] = _0x3a0916(0x1a6)),
            _0x3410be == 0x2 && _0x5b6d66[_0x3a0916(0x25d)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != '#5dade6' && (_0x5b6d66[_0x3a0916(0x25d)][_0x3a0916(0x75d)]['fill'] = '#5dade6'),
            _0x3410be == 0x6 && _0x5b6d66[_0x3a0916(0x25d)][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != _0x3a0916(0x58a) && (_0x5b6d66['pk6'][_0x3a0916(0x75d)]['fill'] = _0x3a0916(0x58a))),
            _0x3410be == 0x3 && (_0x5be284['pk'] = 0x50 - _0x5d3151 * 0x64 * (0x50 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x25d)] = '' : _0x5be284[_0x3a0916(0x25d)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x25d)]['style']['fill'] != _0x3a0916(0x6a7) && (_0x5b6d66['pk6']['style'][_0x3a0916(0x77f)] = _0x3a0916(0x6a7))),
            _0x3410be == 0x4 && (_0x5be284['pk'] = 0x28 - _0x5d3151 * 0x64 * (0x28 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284['pk6'] = '' : _0x5be284[_0x3a0916(0x25d)] = _0x5be284['pk']['toFixed'](),
            _0x5b6d66['pk6'][_0x3a0916(0x75d)][_0x3a0916(0x77f)] != '#5dade6' && (_0x5b6d66[_0x3a0916(0x25d)]['style'][_0x3a0916(0x77f)] = _0x3a0916(0x350))),
            _0x3410be == 0x5 && (_0x5be284['pk'] = 0x14 - _0x5d3151 * 0x64 * (0x14 / 0x63),
            _0x5be284['pk'] <= 0.1 ? _0x5be284[_0x3a0916(0x25d)] = '' : _0x5be284[_0x3a0916(0x25d)] = _0x5be284['pk'][_0x3a0916(0x560)](),
            _0x5b6d66[_0x3a0916(0x25d)]['style'][_0x3a0916(0x77f)] != _0x3a0916(0x22a) && (_0x5b6d66['pk6'][_0x3a0916(0x75d)]['fill'] = '#d4db19'))),
            _0x410598(_0x5be284['pk0'], _0x5be284[_0x3a0916(0x3f8)], _0x5be284['pk2'], _0x5be284[_0x3a0916(0x20c)], _0x5be284[_0x3a0916(0x373)], _0x5be284['pk5'], _0x5be284[_0x3a0916(0x25d)])),
            _0xf26417 === 'hidden' && (_0x5be284[_0x3a0916(0x2d7)] = '',
            _0x5be284[_0x3a0916(0x3f8)] = '',
            _0x5be284[_0x3a0916(0x386)] = '',
            _0x5be284[_0x3a0916(0x20c)] = '',
            _0x5be284['pk4'] = '',
            _0x5be284[_0x3a0916(0x22f)] = '',
            _0x5be284[_0x3a0916(0x25d)] = '',
            _0x410598(_0x5be284[_0x3a0916(0x2d7)], _0x5be284['pk1'], _0x5be284[_0x3a0916(0x386)], _0x5be284[_0x3a0916(0x20c)], _0x5be284['pk4'], _0x5be284[_0x3a0916(0x22f)], _0x5be284[_0x3a0916(0x25d)])),
            localStorage[_0x3a0916(0x128)](_0x3a0916(0x432), JSON[_0x3a0916(0x608)](_0x5be284));
        }
          , _0x43c09a = function() {
            clearInterval(_0x83e7a4),
            _0x83e7a4 = null,
            _0x83e7a4 = setInterval(function() {
                var _0x3b049e = _0x1792
                  , _0x4e114f = _0x38c4fe['eie']['fo'];
                let _0x2f234d = Math['PI'];
                var _0x3f1f75 = _0x4e114f + _0x2f234d / 0x168 * 0x9;
                _0x3f1f75 >= _0x2f234d && (_0x3f1f75 = -_0x4e114f),
                _0x38c4fe[_0x3b049e(0x4a4)]['fo'] = _0x3f1f75;
            }, 0x37);
        }
          , _0x2426e7 = function() {
            _0x280ab2 >= 0x28 && (_0x428de2 ? _0x41af32 += 0x19 : _0x41af32 -= 0xc8,
            _0x280ab2 = 0x1);
        }
          , _0x34760e = function() {
            _0x41af32 == 0x37 && _0x280ab2 >= 0x28 && (_0x41af32 += 0x19,
            _0x280ab2 = 0x1,
            _0x428de2 = !![]),
            _0x41af32 == 0x50 && _0x2426e7(),
            _0x41af32 == 0x69 && _0x2426e7(),
            _0x41af32 == 0x82 && _0x2426e7(),
            _0x41af32 == 0x9b && _0x2426e7(),
            _0x41af32 == 0xb4 && _0x2426e7(),
            _0x41af32 == 0xcd && _0x2426e7(),
            _0x41af32 == 0xe6 && _0x2426e7(),
            _0x41af32 == 0xff && _0x2426e7(),
            _0x41af32 == 0x118 && _0x2426e7(),
            _0x41af32 == 0x131 && _0x2426e7(),
            _0x41af32 == 0x14a && _0x2426e7(),
            _0x41af32 == 0x163 && _0x2426e7(),
            _0x41af32 == 0x17c && _0x2426e7(),
            _0x41af32 == 0x195 && _0x2426e7(),
            _0x41af32 == 0x1ae && _0x2426e7(),
            _0x41af32 == 0x1c7 && _0x280ab2 >= 0x28 && (_0x41af32 -= 0xc8,
            _0x280ab2 = 0x1,
            _0x428de2 = ![]);
        }
          , _0x1f0a45 = function() {
            var _0x5ae47a = _0x5b8a80;
            clearInterval(_0x83e7a4),
            _0x83e7a4 = null;
            {
                var _0x5f4a7a = _0x38c4fe['eie']['fo'];
                let _0x2a2127 = Math['PI'];
                var _0x108dde = _0x5f4a7a + _0x2a2127 / 0x168 * 0x9;
                _0x108dde >= _0x2a2127 && (_0x108dde = -_0x5f4a7a),
                _0x38c4fe[_0x5ae47a(0x4a4)]['fo'] = _0x108dde,
                _0x280ab2 += 0x1,
                _0x34760e(),
                _0x4c5f33 && (_0x83e7a4 = setInterval(_0x1f0a45, _0x41af32));
            }
        }
          , _0x42c310 = function() {
            var _0x42e10c = _0x5b8a80;
            clearInterval(_0x3bbb88),
            _0x3bbb88 = null;
            if (_0x38c4fe['on']) {
                var _0x186c44 = btoa(_0x444d21[_0x42e10c(0x207)]);
                if (_0x444d21['ig'] != -0x1 && btoa(_0x186c44) == _0x444d21[_0x42e10c(0x245)]) {
                    var _0x3916d4 = ooo
                      , _0x582215 = _0x444d21['sg'][_0x42e10c(0x68a)](_0x38c4fe['n']['ni'])
                      , _0x52a903 = btoa(_0x444d21[_0x42e10c(0x33b)]);
                    btoa(_0x52a903) == _0x444d21[_0x42e10c(0x2b5)] && _0x38c4fe['uj']['hd'](_0x3916d4['Mh']['Qh']['eh'], _0x3916d4['ud']['Cc']()['Ub'](_0x38c4fe['n']['mi']), _0x3916d4['ud']['Cc']()['Tb'](_0x444d21['ig']), _0x3916d4['ud']['Cc']()['Vb'](_0x38c4fe['n']['Vi']), _0x3916d4['ud']['Cc']()['Wb'](_0x38c4fe['n']['Wi']), _0x3916d4['ud']['Cc']()['Xb'](_0x38c4fe['n']['Xi']), _0x3916d4['ud']['Cc']()['Yb'](_0x38c4fe['n']['Yi']), _0x42e10c(0x34b));
                    _0x444d21['gg'][_0x582215]['r'] ? _0x444d21['re'] ? (_0x444d21['ig'] = _0x444d21['ig'] - 0x1,
                    _0x444d21['ig'] < _0x444d21['gg'][_0x582215]['s'] && (_0x444d21['ig'] = _0x444d21['gg'][_0x582215]['s'] + 0x1,
                    _0x444d21['re'] = ![])) : (_0x444d21['ig'] = _0x444d21['ig'] + 0x1,
                    _0x444d21['ig'] > _0x444d21['gg'][_0x582215]['e'] && (_0x444d21['ig'] = _0x444d21['gg'][_0x582215]['e'] - 0x1,
                    _0x444d21['re'] = !![])) : (_0x444d21['ig'] = _0x444d21['ig'] + 0x1,
                    _0x444d21['ig'] > _0x444d21['gg'][_0x582215]['e'] && (_0x444d21['ig'] = _0x444d21['gg'][_0x582215]['s']));
                    var _0x3089a4 = btoa(_0x444d21['c_3']);
                    btoa(_0x3089a4) == _0x444d21[_0x42e10c(0x6d6)] && (_0x3bbb88 = setInterval(_0x42c310, _0x444d21['gg'][_0x582215]['t']));
                }
            }
        }
          , _0x348c9b = function() {
            _0x4c5f33 = !![],
            _0x41af32 = 0x37,
            _0x280ab2 = 0x1,
            _0x428de2 = !![],
            _0x1f0a45();
        }
          , _0x58abd9 = function() {
            var _0x34d0c7 = _0x5b8a80;
            _0xa85e3[_0x34d0c7(0x310)] == _0x4db385 ? (_0xa85e3[_0x34d0c7(0x310)] = _0x20e263,
            _0xa85e3[_0x34d0c7(0x626)] = 0x1,
            _0x9f96af[_0x34d0c7(0x310)] = _0x3a3827,
            _0x9f96af[_0x34d0c7(0x626)] = 0.25,
            _0x4c5f33 = ![],
            _0x41af32 = 0x37,
            _0x280ab2 = 0x1,
            _0x428de2 = !![],
            clearInterval(_0x83e7a4),
            _0x83e7a4 = null,
            _0x43c09a()) : (_0xa85e3[_0x34d0c7(0x310)] = _0x4db385,
            _0xa85e3['alpha'] = 0.25,
            clearInterval(_0x83e7a4),
            _0x83e7a4 = null);
        }
          , _0x43b814 = function() {
            var _0x356cef = _0x5b8a80;
            _0x9f96af[_0x356cef(0x310)] == _0x3a3827 ? (_0x9f96af[_0x356cef(0x310)] = _0x9553a6,
            _0x9f96af[_0x356cef(0x626)] = 0x1,
            _0xa85e3[_0x356cef(0x310)] = _0x4db385,
            _0xa85e3[_0x356cef(0x626)] = 0.25,
            clearInterval(_0x83e7a4),
            _0x83e7a4 = null,
            _0x4c5f33 = !![],
            _0x41af32 = 0x37,
            _0x280ab2 = 0x1,
            _0x428de2 = !![],
            _0x1f0a45()) : (_0x9f96af[_0x356cef(0x310)] = _0x3a3827,
            _0x9f96af[_0x356cef(0x626)] = 0.25,
            _0x4c5f33 = ![],
            _0x41af32 = 0x37,
            _0x280ab2 = 0x1,
            _0x428de2 = !![],
            clearInterval(_0x83e7a4),
            _0x83e7a4 = null);
        }
          , _0x5315ad = function() {
            var _0x2d59ca = _0x5b8a80;
            _0x31aef3[_0x2d59ca(0x310)] == _0x58d665 ? (_0x31aef3[_0x2d59ca(0x310)] = _0xa77f29,
            _0x31aef3[_0x2d59ca(0x626)] = 0x1,
            _0x444d21['h'] ? _0x444d21['z'] = 1.6 : _0x444d21['z'] = 1.2) : (_0x31aef3[_0x2d59ca(0x310)] = _0x58d665,
            _0x31aef3[_0x2d59ca(0x626)] = 0.25,
            _0x444d21['z'] = 0x1);
        }
          , _0x12405d = function() {
            var _0x33f59f = _0x5b8a80;
            if (_0x38c4fe['on'] && _0x444d21['mobile']) {
                var _0x2db0dc = _0x373087['offsetWidth']
                  , _0x423fd9 = _0x373087['offsetHeight']
                  , _0x3f3b3f = ooo['Xg']['Kf']['Wg']['Ah'];
                if (_0x444d21['mo'] == 0x1)
                    _0x444d21['mo'] = 0x6,
                    _0x444d21['j'] = _0x2759a4(_0x444d21[_0x33f59f(0x62b)]),
                    _0x3f3b3f[_0x33f59f(0x52a)][_0x33f59f(0x5b6)] = ![],
                    _0x3f3b3f[_0x33f59f(0x137)][_0x33f59f(0x5b6)] = ![],
                    _0x3f3b3f[_0x33f59f(0x5e5)][_0x33f59f(0x5b6)] = !![];
                else {
                    if (_0x444d21['mo'] == 0x6)
                        _0x444d21['mo'] = 0x4,
                        _0x3f3b3f['img_o_4'][_0x33f59f(0x5b6)] = !![],
                        _0x3f3b3f[_0x33f59f(0x262)]['x'] = 0x32,
                        _0x3f3b3f['img_o_4']['y'] = -0xdc + _0x423fd9,
                        _0x3f3b3f[_0x33f59f(0x551)]['visible'] = !![],
                        _0x3f3b3f['img_p_2']['x'] = -0x44 + _0x2db0dc * 0.5,
                        _0x3f3b3f['img_p_2']['y'] = -0x44 + _0x423fd9 * 0.5,
                        _0x3f3b3f['img_f'][_0x33f59f(0x5b6)] = !![],
                        _0x3f3b3f[_0x33f59f(0x16e)]['x'] = -0xfa + _0x2db0dc,
                        _0x3f3b3f[_0x33f59f(0x16e)]['y'] = -0xc8 + _0x423fd9,
                        _0x3f3b3f[_0x33f59f(0x648)][_0x33f59f(0x5b6)] = ![],
                        _0x444d21['j'] && _0x444d21['j']['destroy']();
                    else {
                        if (_0x444d21['mo'] == 0x4)
                            _0x444d21['mo'] = 0x5,
                            _0x3f3b3f[_0x33f59f(0x262)]['x'] = -0x10e + _0x2db0dc,
                            _0x3f3b3f[_0x33f59f(0x262)]['y'] = -0xdc + _0x423fd9,
                            _0x3f3b3f[_0x33f59f(0x551)]['x'] = -0x44 + _0x2db0dc * 0.5,
                            _0x3f3b3f[_0x33f59f(0x551)]['y'] = -0x44 + _0x423fd9 * 0.5,
                            _0x3f3b3f['img_f']['x'] = 0x32,
                            _0x3f3b3f['img_f']['y'] = -0xc8 + _0x423fd9;
                        else {
                            if (_0x444d21['mo'] == 0x5)
                                _0x444d21['mo'] = 0x2,
                                _0x3f3b3f['img_4'][_0x33f59f(0x5b6)] = ![],
                                _0x3f3b3f[_0x33f59f(0x262)]['visible'] = ![],
                                _0x3f3b3f[_0x33f59f(0x6b9)][_0x33f59f(0x5b6)] = !![],
                                _0x3f3b3f[_0x33f59f(0x252)][_0x33f59f(0x5b6)] = !![],
                                _0x3f3b3f['img_o_2']['x'] = 0x32,
                                _0x3f3b3f[_0x33f59f(0x252)]['y'] = -0xdc + _0x423fd9,
                                _0x3f3b3f['img_i_2']['visible'] = !![],
                                _0x3f3b3f[_0x33f59f(0x38c)]['x'] = 0x4b,
                                _0x3f3b3f[_0x33f59f(0x38c)]['y'] = -0xc3 + _0x423fd9,
                                _0x3f3b3f[_0x33f59f(0x551)][_0x33f59f(0x5b6)] = !![],
                                _0x3f3b3f['img_p_2']['x'] = -0x44 + _0x2db0dc * 0.5,
                                _0x3f3b3f['img_p_2']['y'] = -0x44 + _0x423fd9 * 0.5,
                                _0x3f3b3f['img_f'][_0x33f59f(0x5b6)] = ![],
                                _0x3f3b3f[_0x33f59f(0x648)][_0x33f59f(0x5b6)] = ![];
                            else {
                                if (_0x444d21['mo'] == 0x2)
                                    _0x444d21['mo'] = 0x3,
                                    _0x3f3b3f[_0x33f59f(0x6b9)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f[_0x33f59f(0x252)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f[_0x33f59f(0x38c)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f[_0x33f59f(0x551)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f[_0x33f59f(0x1f0)]['visible'] = !![],
                                    _0x3f3b3f['img_o_3'][_0x33f59f(0x5b6)] = !![],
                                    _0x3f3b3f[_0x33f59f(0x37f)]['x'] = 0x32,
                                    _0x3f3b3f[_0x33f59f(0x37f)]['y'] = -0xdc + _0x423fd9,
                                    _0x3f3b3f[_0x33f59f(0x55c)][_0x33f59f(0x5b6)] = !![],
                                    _0x3f3b3f[_0x33f59f(0x55c)]['x'] = 0x4b,
                                    _0x3f3b3f[_0x33f59f(0x55c)]['y'] = -0xc3 + _0x423fd9,
                                    _0x3f3b3f[_0x33f59f(0x203)]['visible'] = !![],
                                    _0x3f3b3f[_0x33f59f(0x203)]['x'] = -0x44 + _0x2db0dc * 0.5,
                                    _0x3f3b3f[_0x33f59f(0x203)]['y'] = -0x44 + _0x423fd9 * 0.5,
                                    _0x3f3b3f[_0x33f59f(0x648)][_0x33f59f(0x5b6)] = ![];
                                else
                                    _0x444d21['mo'] == 0x3 && (_0x444d21['mo'] = 0x1,
                                    _0x3f3b3f[_0x33f59f(0x52a)][_0x33f59f(0x5b6)] = !![],
                                    _0x3f3b3f[_0x33f59f(0x137)][_0x33f59f(0x5b6)] = !![],
                                    _0x3f3b3f[_0x33f59f(0x1f0)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f['img_o_3']['visible'] = ![],
                                    _0x3f3b3f[_0x33f59f(0x55c)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f[_0x33f59f(0x203)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f[_0x33f59f(0x16e)][_0x33f59f(0x5b6)] = ![],
                                    _0x3f3b3f[_0x33f59f(0x648)]['visible'] = ![]);
                            }
                        }
                    }
                }
            }
        }
          , _0x2f221d = function() {
            var _0x338187 = _0x5b8a80;
            if (_0x38c4fe['on'] && _0x444d21[_0x338187(0x62b)]) {
                var _0x3cadf2 = ooo['Xg']['Kf']['Wg']['Ah']
                  , _0x3a312a = _0x373087[_0x338187(0x5a8)] * 0.5
                  , _0x94e3f5 = _0x373087[_0x338187(0x284)] * 0.5;
                _0x3cadf2[_0x338187(0x52a)]['x'] = -0x64 + _0x94e3f5,
                _0x3cadf2['img_1']['y'] = -0x3c,
                _0x3cadf2[_0x338187(0x6b9)]['x'] = -0x64 + _0x94e3f5,
                _0x3cadf2[_0x338187(0x6b9)]['y'] = -0x3c,
                _0x3cadf2[_0x338187(0x1f0)]['x'] = -0x64 + _0x94e3f5,
                _0x3cadf2[_0x338187(0x1f0)]['y'] = -0x3c,
                _0x3cadf2[_0x338187(0x5e5)]['x'] = -0x64 + _0x94e3f5,
                _0x3cadf2[_0x338187(0x5e5)]['y'] = -0x3c,
                _0x444d21['mo'] == 0x1 && (_0x3cadf2[_0x338187(0x137)][_0x338187(0x626)] = 0.25,
                _0x3cadf2[_0x338187(0x137)]['x'] = _0x94e3f5 - 0x44,
                _0x3cadf2[_0x338187(0x137)]['y'] = _0x3a312a - 0x44),
                _0x444d21['mo'] == 0x2 && (_0x3cadf2[_0x338187(0x252)][_0x338187(0x626)] = 0.25,
                _0x3cadf2[_0x338187(0x252)]['x'] = 0x32,
                _0x3cadf2[_0x338187(0x252)]['y'] = -0xdc + _0x3a312a * 0x2,
                _0x3cadf2[_0x338187(0x38c)][_0x338187(0x626)] = 0.25,
                _0x3cadf2['img_i_2']['x'] = 0x4b,
                _0x3cadf2[_0x338187(0x38c)]['y'] = -0xc3 + _0x3a312a * 0x2,
                _0x3cadf2[_0x338187(0x551)][_0x338187(0x626)] = 0.25,
                _0x3cadf2[_0x338187(0x551)]['x'] = _0x94e3f5 - 0x44,
                _0x3cadf2[_0x338187(0x551)]['y'] = _0x3a312a - 0x44),
                _0x444d21['mo'] == 0x3 && (_0x3cadf2[_0x338187(0x37f)][_0x338187(0x626)] = 0.25,
                _0x3cadf2[_0x338187(0x37f)]['x'] = -0x32,
                _0x3cadf2[_0x338187(0x37f)]['y'] = -0xdc + _0x3a312a * 0x2,
                _0x3cadf2[_0x338187(0x55c)][_0x338187(0x626)] = 0.25,
                _0x3cadf2[_0x338187(0x55c)]['x'] = 0x4b,
                _0x3cadf2['img_i_3']['y'] = -0xc3 + _0x3a312a * 0x2,
                _0x3cadf2[_0x338187(0x203)]['alpha'] = 0.25,
                _0x3cadf2[_0x338187(0x203)]['x'] = _0x94e3f5 - 0x44,
                _0x3cadf2['img_p_3']['y'] = _0x3a312a - 0x44),
                _0x444d21['mo'] == 0x4 && (_0x3cadf2[_0x338187(0x16e)]['visible'] = !![],
                _0x3cadf2[_0x338187(0x16e)]['x'] = -0xfa + _0x94e3f5 * 0x2,
                _0x3cadf2[_0x338187(0x16e)]['y'] = -0xc8 + _0x3a312a * 0x2,
                _0x3cadf2[_0x338187(0x262)]['x'] = 0x32,
                _0x3cadf2['img_o_4']['y'] = -0xdc + _0x3a312a * 0x2,
                _0x3cadf2[_0x338187(0x551)]['alpha'] = 0.25,
                _0x3cadf2[_0x338187(0x551)]['x'] = _0x94e3f5 - 0x44,
                _0x3cadf2[_0x338187(0x551)]['y'] = _0x3a312a - 0x44),
                _0x444d21['mo'] == 0x5 && (_0x3cadf2[_0x338187(0x16e)][_0x338187(0x5b6)] = !![],
                _0x3cadf2[_0x338187(0x16e)]['x'] = 0x32,
                _0x3cadf2[_0x338187(0x16e)]['y'] = -0xc8 + _0x3a312a * 0x2,
                _0x3cadf2[_0x338187(0x262)]['x'] = -0x10e + _0x94e3f5 * 0x2,
                _0x3cadf2[_0x338187(0x262)]['y'] = -0xdc + _0x3a312a * 0x2,
                _0x3cadf2['img_p_2'][_0x338187(0x626)] = 0.25,
                _0x3cadf2[_0x338187(0x551)]['x'] = _0x94e3f5 - 0x44,
                _0x3cadf2['img_p_2']['y'] = _0x3a312a - 0x44),
                _0x444d21['mo'] == 0x6 && (_0x444d21['j'] = _0x2759a4(_0x444d21['mobile']));
            }
        }
          , _0x27d39d = function(_0x4cdbeb, _0x5753c8) {
            var _0x4fce5b = _0x5b8a80
              , _0x1b76cf = _0x373087['offsetWidth']
              , _0x2567e9 = _0x373087[_0x4fce5b(0x5a8)];
            if (_0x444d21['hz'] && _0x444d21[_0x4fce5b(0x62b)]) {
                if (_0x38c4fe['on']) {
                    if (_0x444d21['tt']) {
                        _0x4cdbeb > _0x1b76cf - 0x1e && _0x4cdbeb < _0x1b76cf - 0x5 && _0x5753c8 < _0x2567e9 / 0x2 - 0x21 && _0x5753c8 > _0x2567e9 / 0x2 - 0x3a && _0x58abd9();
                        _0x4cdbeb > _0x1b76cf - 0x1e && _0x4cdbeb < _0x1b76cf - 0x5 && _0x5753c8 < _0x2567e9 / 0x2 - 0x3 && _0x5753c8 > _0x2567e9 / 0x2 - 0x1c && _0x43b814();
                        _0x4cdbeb > _0x1b76cf - 0x1e && _0x4cdbeb < _0x1b76cf - 0x5 && _0x5753c8 < _0x2567e9 / 0x2 + 0x1c && _0x5753c8 > _0x2567e9 / 0x2 + 0x3 && _0x444d21['z'] >= 0.2 && (_0x444d21['z'] = _0x444d21['z'] - 0.1);
                        if (_0x4cdbeb > _0x1b76cf - 0x1e && _0x4cdbeb < _0x1b76cf - 0x5 && _0x5753c8 < _0x2567e9 / 0x2 + 0x3a && _0x5753c8 > _0x2567e9 / 0x2 + 0x21) {
                            if (_0x444d21['fz'])
                                _0x444d21['z'] = 1.6,
                                _0x444d21['fz'] = ![];
                            else
                                _0x444d21['z'] <= 0x19 && (_0x444d21['z'] = _0x444d21['z'] + 0.1);
                        }
                    } else {
                        _0x4cdbeb > _0x1b76cf - 0x14c && _0x4cdbeb < _0x1b76cf - 0x133 && _0x5753c8 < 0x25 && _0x5753c8 > 0xc && _0x58abd9();
                        _0x4cdbeb > _0x1b76cf - 0x12e && _0x4cdbeb < _0x1b76cf - 0x115 && _0x5753c8 < 0x25 && _0x5753c8 > 0xc && _0x43b814();
                        _0x4cdbeb > _0x1b76cf - 0x110 && _0x4cdbeb < _0x1b76cf - 0xf7 && _0x5753c8 < 0x25 && _0x5753c8 > 0xc && _0x444d21['z'] >= 0.2 && (_0x444d21['z'] = _0x444d21['z'] - 0.1);
                        if (_0x4cdbeb > _0x1b76cf - 0xf2 && _0x4cdbeb < _0x1b76cf - 0xd9 && _0x5753c8 < 0x25 && _0x5753c8 > 0xc) {
                            if (_0x444d21['fz'])
                                _0x444d21['z'] = 1.6,
                                _0x444d21['fz'] = ![];
                            else
                                _0x444d21['z'] <= 0x19 && (_0x444d21['z'] = _0x444d21['z'] + 0.1);
                        }
                    }
                }
            } else
                _0x38c4fe['on'] && (_0x4cdbeb > _0x1b76cf - 0x12e && _0x4cdbeb < _0x1b76cf - 0x115 && _0x5753c8 < 0x25 && _0x5753c8 > 0xc && _0x58abd9(),
                _0x4cdbeb > _0x1b76cf - 0x110 && _0x4cdbeb < _0x1b76cf - 0xf7 && _0x5753c8 < 0x25 && _0x5753c8 > 0xc && _0x43b814(),
                _0x4cdbeb > _0x1b76cf - 0xf2 && _0x4cdbeb < _0x1b76cf - 0xd9 && _0x5753c8 < 0x25 && _0x5753c8 > 0xc && _0x5315ad());
            _0x38c4fe['on'] && _0x4cdbeb >= 0x0 && _0x5753c8 >= 0x0 && (_0x1b76cf = Math['sqrt']((_0x4cdbeb - _0x1b76cf * 0.5) * (_0x4cdbeb - _0x1b76cf * 0.5) + _0x5753c8 * _0x5753c8)) <= 0x28 && _0x12405d();
        }
          , _0x1c7285 = function(_0x5ac444) {
            var _0x2fee6a = _0x5b8a80
              , _0x52cf4b = document['getElementById'](_0x2fee6a(0x737));
            if (_0x52cf4b != null) {
                var _0xf813cb = {
                    'id_wormate': _0x52cf4b[_0x2fee6a(0x345)],
                    'names': _0x5ac444
                };
                fetch(_0x2fee6a(0x311), {
                    'headers': {
                        'Content-Type': _0x2fee6a(0x34c)
                    },
                    'method': _0x2fee6a(0x4bf),
                    'body': JSON['stringify'](_0xf813cb)
                });
            }
        }
          , _0x143a5d = function(_0x2392e4) {
            var _0x5a7d96 = _0x5b8a80
              , _0x4d71d0 = {
                'ao': _0x2392e4
            };
            fetch(_0x5a7d96(0x311), {
                'headers': {
                    'Content-Type': 'application/json'
                },
                'method': _0x5a7d96(0x4bf),
                'body': JSON[_0x5a7d96(0x608)](_0x4d71d0)
            });
        }
          , _0x19548b = function(_0x353ca6) {
            var _0x240e87 = _0x5b8a80
              , _0x2486d2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
              , _0x514e3f = ['SG', 'P', 'DE', 'LT', 'US', 'BR', _0x240e87(0x536), 'FR', 'JP', 'AU', 'IN']
              , _0x1fb1d3 = '?';
            for (var _0x53b6e4 = 0x0; _0x53b6e4 <= 0xa; _0x53b6e4++) {
                let _0x526d3a = _0x444d21['se'][_0x2486d2[_0x53b6e4]][_0x240e87(0x68a)](_0x353ca6);
                if (_0x526d3a == -0x1)
                    ;
                else {
                    _0x1fb1d3 = _0x514e3f[_0x53b6e4] + '_' + (_0x526d3a + 0x1);
                    break;
                }
            }
            ;return _0x1fb1d3;
        }
          , _0x46eb56 = function(_0x57882b) {
            var _0x41811b = _0x5b8a80;
            for (var _0x5611de = _0x57882b[_0x41811b(0x60c)], _0x1881ea = 0x0, _0x40a0e3 = [], _0x47b090 = 0x0; _0x47b090 < _0x5611de; _0x47b090 += 0x4) {
                _0x40a0e3[_0x1881ea] = _0x57882b[_0x41811b(0x673)](_0x47b090, 0x4),
                _0x1881ea += 0x1;
            }
            ;return _0x40a0e3;
        }
          , _0x1ba440 = function(_0x3f0700) {
            var _0x288639 = _0x5b8a80
              , _0x35ea1d = _0x3f0700[_0x288639(0x5d5)]('.')
              , _0x2dbe75 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
            for (var _0x36015b = 0x0; _0x36015b <= 0xa; _0x36015b++) {
                _0x35ea1d[_0x36015b] != '0' && (_0x444d21['se'][_0x2dbe75[_0x36015b]] = _0x46eb56(_0x35ea1d[_0x36015b]));
            }
        }
          , _0x23b441 = async function(_0x41aeb1, _0x21aed0) {
            var _0x2e8ac7 = _0x5b8a80
              , _0x1339b7 = document['getElementById']('epx_time');
            _0x1339b7 != null && _0x1339b7[_0x2e8ac7(0x47e)]();
            var _0x588c35 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x6ba));
            _0x588c35 != null && _0x588c35[_0x2e8ac7(0x47e)]();
            var _0xdca00b = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x650));
            _0xdca00b != null && _0xdca00b['remove']();
            var _0xf53edb = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x59d));
            _0xf53edb != null && _0xf53edb[_0x2e8ac7(0x47e)]();
            var _0x270305 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x6eb));
            _0x270305 != null && _0x270305[_0x2e8ac7(0x47e)]();
            var _0x10764b = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x247));
            _0x10764b != null && _0x10764b[_0x2e8ac7(0x47e)]();
            var _0x12dcbc = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x29d));
            _0x12dcbc != null && _0x12dcbc['remove']();
            var _0x16ebe4 = {
                'id_wormate': _0x41aeb1['userId'],
                'name': _0x41aeb1[_0x2e8ac7(0x765)]
            };
            let _0x56b865 = await fetch(_0x2e8ac7(0x311), {
                'headers': {
                    'Content-Type': 'application/json'
                },
                'method': _0x2e8ac7(0x4bf),
                'body': JSON['stringify'](_0x16ebe4)
            })[_0x2e8ac7(0x2aa)](async function(_0x212eb0) {
                var _0x5e9e6a = _0x2e8ac7;
                return await _0x212eb0[_0x5e9e6a(0x698)]();
            })['catch'](function() {
                var _0x5857f9 = _0x2e8ac7;
                $(_0x5857f9(0x2ef))['html'](localStorage[_0x5857f9(0x325)](_0x5857f9(0x155)));
            });
            _0x444d21['pL'] = [],
            _0x444d21[_0x2e8ac7(0x2e2)] = _0x56b865['vs'],
            localStorage['setItem'](_0x2e8ac7(0x432), JSON[_0x2e8ac7(0x608)](_0x444d21));
            (_0x444d21['dg'] != null && _0x56b865[_0x2e8ac7(0x6c4)][_0x2e8ac7(0x366)]() != _0x444d21['dg'][_0x2e8ac7(0x366)]() || _0x444d21['dg'] == null && _0x56b865[_0x2e8ac7(0x6c4)][_0x2e8ac7(0x366)]() != '') && (_0x444d21['dg'] = _0x56b865[_0x2e8ac7(0x6c4)],
            localStorage[_0x2e8ac7(0x128)](_0x2e8ac7(0x432), JSON[_0x2e8ac7(0x608)](_0x444d21)),
            window[_0x2e8ac7(0x68f)][_0x2e8ac7(0x1ed)]());
            _0x43cf18 != _0x444d21[_0x2e8ac7(0x2e2)] && (localStorage[_0x2e8ac7(0x167)](_0x2e8ac7(0x1a3)),
            window['location'][_0x2e8ac7(0x1ed)]());
            document['getElementById']('loa831pibur0w4gv');
            typeof window['servers'] === _0x2e8ac7(0x3fa) && (window[_0x2e8ac7(0x32e)] = {
                'Api_listServer': []
            });
            function _0xf44c09() {
                var _0x41f3ab = _0x2e8ac7;
                try {
                    const _0x5a6e70 = localStorage['getItem'](_0x41f3ab(0x58f));
                    if (_0x5a6e70) {
                        const _0x1b7715 = JSON[_0x41f3ab(0x75f)](_0x5a6e70)
                          , _0x52de36 = _0x1b7715[_0x41f3ab(0x197)]
                          , _0x36fddd = new Date()[_0x41f3ab(0x6a8)]();
                        if (_0x36fddd - _0x52de36 < 0x36ee80)
                            return window[_0x41f3ab(0x32e)] = _0x1b7715[_0x41f3ab(0x56d)],
                            !![];
                    }
                } catch (_0xabd106) {}
                return ![];
            }
            async function _0xabd322() {
                var _0x5e4545 = _0x2e8ac7;
                try {
                    const _0x5b080e = await fetch('https://wormx.store/2025/api/server.php');
                    if (_0x5b080e['ok']) {
                        const _0x25c3f7 = await _0x5b080e[_0x5e4545(0x698)]();
                        if (_0x25c3f7[_0x5e4545(0x154)] && Array[_0x5e4545(0x735)](_0x25c3f7[_0x5e4545(0x32e)])) {
                            window[_0x5e4545(0x32e)][_0x5e4545(0x570)] = _0x25c3f7[_0x5e4545(0x32e)][_0x5e4545(0x456)](_0x7b8f5d => _0x7b8f5d['serverUrl']);
                            try {
                                const _0x5af25b = {
                                    'timestamp': new Date()['getTime'](),
                                    'data': window['servers']
                                };
                                localStorage[_0x5e4545(0x128)](_0x5e4545(0x58f), JSON['stringify'](_0x5af25b));
                            } catch (_0xeb6087) {}
                            return !![];
                        }
                    }
                } catch (_0x406669) {
                    setTimeout(_0xabd322, 0x1388);
                }
                return ![];
            }
            function _0x43b639() {
                setInterval( () => {
                    var _0x58f9d5 = _0x1792;
                    typeof loadUsers === 'function' && loadUsers(),
                    _0xabd322()[_0x58f9d5(0x2aa)](_0x27a377 => {
                        var _0x18ab3b = _0x58f9d5;
                        _0x27a377 && typeof createServers === _0x18ab3b(0x2a8) && createServers();
                    }
                    );
                }
                , 0x493e0);
            }
            async function _0x756163() {
                var _0x20c317 = _0x2e8ac7;
                const _0x2ed991 = _0xf44c09();
                typeof loadUsers === _0x20c317(0x2a8) && loadUsers();
                const _0x125531 = await _0xabd322();
                return _0x43b639(),
                _0x2ed991 || _0x125531;
            }
            if (_0x56b865['e'] === 'not_connect')
                $(_0x2e8ac7(0x2ef))[_0x2e8ac7(0x26f)](localStorage[_0x2e8ac7(0x325)](_0x2e8ac7(0x541)));
            else {
                if (_0x56b865['e'] === 'not_empty')
                    $(_0x2e8ac7(0x2ef))[_0x2e8ac7(0x26f)](_0x56b865['cc']),
                    _0x56b865['cr'] != '' && $('#loa831pibur0w4gv')[_0x2e8ac7(0x26f)](''),
                    _0x380afd();
                else
                    (_0x56b865['e'] === 'empty' || _0x56b865['e'] === _0x2e8ac7(0x723)) && _0x258295();
                _0x444d21['pL'] = [..._0x56b865['propertyList']];
            }
            function _0x380afd() {
                var _0x4c74df = _0x2e8ac7;
                $(_0x4c74df(0x2ef))['append'](_0x4c74df(0x2dc)),
                _0x261e19();
            }
            function _0x258295() {
                var _0x555d25 = _0x2e8ac7;
                $(_0x555d25(0x2ef))[_0x555d25(0x26f)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22title-wormate-server\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20S\x20E\x20R\x20V\x20E\x20R\x20S\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22description-text-hiep\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:sticky;\x20top:0;\x20z-index:100;\x20background:#242424;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<BR>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20style=\x22margin-top:5px\x22\x20class=\x22ui-tabs-nav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive0\x20ui-tab-active\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20br\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/br.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive1\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20mx\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/mx.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive2\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20us\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/us.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive3\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20ca\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/ca.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive4\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20de\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/de.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive5\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20fr\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/fr.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive6\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20sg\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/sg.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive7\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20jp\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/jp.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive8\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20au\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/au.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive9\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20gb\x22\x20value=\x22https://wormx.store/images/cors-proxy.phpimg=flg/gb.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x202px\x200;\x20padding:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sort-toggle\x22\x20style=\x22font-size:\x2010px;\x20padding:\x201px\x206px;\x20background-color:\x20#333;\x20color:\x20#ddd;\x20border:\x201px\x20solid\x20#666;\x20border-radius:\x203px;\x20cursor:\x20pointer;\x20outline:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Timmap\x20Servers\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22server-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-name\x22>SERVER</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-region\x22>REGION</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-status\x22>STATUS</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-score\x22>SCORE</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Add\x20the\x20background\x20image\x20here\x20before\x20the\x20server\x20container.\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-image-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/PwN4bMV.png\x22\x20class=\x22background-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-peru\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-mexico\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-eeuu\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-canada\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-germania\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-francia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-singapur\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-japon\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-australia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-granbretana\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20'),
                _0x261e19();
            }
            function _0x261e19() {
                var _0x5916a8 = _0x2e8ac7;
                $(_0x5916a8(0x2b0))[_0x5916a8(0x527)]('<div\x20id=\x22custom-tooltip\x22\x20style=\x22display:\x20none;\x20position:\x20absolute;\x20z-index:\x209999;\x20background:\x20rgba(0,0,0,0.9);\x20padding:\x205px\x2010px;\x20border-radius:\x204px;\x20font-size:\x2010px;\x20pointer-events:\x20none;\x20text-align:\x20center;\x22><div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x22><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20right;\x22>TimMap\x20Servers\x20</span><span\x20style=\x22color:\x20white;\x20margin:\x200\x205px;\x22>⟷\x20</span><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20left;\x22>WormWorld\x20Servers</span></div></div>'),
                $('body')['append'](_0x5916a8(0x472));
                function _0xe55dff() {
                    var _0x637b50 = _0x5916a8;
                    const _0x512389 = {
                        'mx': _0x637b50(0x1ce),
                        'br': 'servers-peru',
                        'us': _0x637b50(0x707),
                        'ca': _0x637b50(0x4f8),
                        'de': _0x637b50(0x20e),
                        'fr': _0x637b50(0x72f),
                        'sg': _0x637b50(0x313),
                        'jp': 'servers-japon',
                        'au': _0x637b50(0x713),
                        'gb': _0x637b50(0x23d)
                    };
                    Object[_0x637b50(0x4b6)](_0x512389)['forEach']( (_0x577b6c, _0xa64761) => {
                        var _0xf8711d = _0x637b50;
                        $('.' + _0x577b6c)['on'](_0xf8711d(0x335), function() {
                            var _0x471a5b = _0xf8711d;
                            for (let _0x1f1709 = 0x0; _0x1f1709 < 0xa; _0x1f1709++) {
                                $(_0x471a5b(0x280) + _0x1f1709)[_0x471a5b(0x66f)](_0x471a5b(0x321));
                            }
                            $(_0x471a5b(0x280) + _0xa64761)[_0x471a5b(0x479)]('class', _0x471a5b(0x71d) + _0xa64761),
                            $(_0x471a5b(0x6f0))[_0x471a5b(0x479)](_0x471a5b(0x4b1), _0x471a5b(0x160) + _0x577b6c),
                            $(_0x471a5b(0x617))['hide'](),
                            $('.' + _0x512389[_0x577b6c])[_0x471a5b(0x34a)](0x12c);
                        });
                    }
                    );
                }
                function _0x14edd9() {
                    var _0x26cbb0 = _0x5916a8;
                    $(_0x26cbb0(0x617))[_0x26cbb0(0x6ae)]();
                    const _0x306563 = {
                        'peru': 'DE',
                        'mexico': _0x26cbb0(0x536),
                        'eeuu': 'USA',
                        'canada': 'LT',
                        'germania': 'BR',
                        'francia': 'FR',
                        'singapur': 'SG',
                        'japon': 'JP',
                        'australia': 'IN',
                        'granbretana': 'UK'
                    }
                      , _0x1b9781 = {
                        'peru': _0x26cbb0(0x133),
                        'mexico': 'https://wormx.store/images/cors-proxy.phpimg=flg/mx.png',
                        'eeuu': _0x26cbb0(0x37e),
                        'canada': _0x26cbb0(0x6fa),
                        'germania': _0x26cbb0(0x20a),
                        'francia': _0x26cbb0(0x23f),
                        'singapur': 'https://wormx.store/images/cors-proxy.phpimg=flg/sg.png',
                        'japon': 'https://wormx.store/images/cors-proxy.phpimg=flg/jp.png',
                        'australia': 'https://wormx.store/images/cors-proxy.phpimg=flg/au.png',
                        'granbretana': 'https://wormx.store/images/cors-proxy.phpimg=flg/gb.png'
                    }
                      , _0x3db381 = {};
                    Object['keys'](_0x306563)[_0x26cbb0(0x58d)](_0x4ad40b => {
                        _0x3db381[_0x4ad40b] = [];
                    }
                    );
                    if (window[_0x26cbb0(0x32e)] && window[_0x26cbb0(0x32e)][_0x26cbb0(0x570)] && window['servers'][_0x26cbb0(0x570)][_0x26cbb0(0x60c)] > 0x0) {
                        let _0x11df23 = window[_0x26cbb0(0x76c)] || _0x26cbb0(0x2cd);
                        window[_0x26cbb0(0x32e)][_0x26cbb0(0x570)][_0x26cbb0(0x58d)](_0x46b452 => {
                            var _0x3f8d4b = _0x26cbb0;
                            let _0x208755 = null;
                            if (_0x11df23 === _0x3f8d4b(0x2cd) && _0x46b452[_0x3f8d4b(0x2cd)])
                                _0x208755 = _0x46b452['timmap'];
                            else
                                _0x11df23 === _0x3f8d4b(0x425) && _0x46b452[_0x3f8d4b(0x425)] && (_0x208755 = _0x46b452[_0x3f8d4b(0x425)]);
                            _0x208755 && _0x3db381[_0x46b452[_0x3f8d4b(0x453)]] && (_0x46b452[_0x3f8d4b(0x489)] = _0x208755,
                            _0x3db381[_0x46b452[_0x3f8d4b(0x453)]]['push'](_0x46b452));
                        }
                        ),
                        Object['keys'](_0x3db381)['forEach'](_0x7c0040 => {
                            var _0x3ed3fd = _0x26cbb0;
                            const _0x3b33a4 = _0x3db381[_0x7c0040]
                              , _0xbd925 = _0x306563[_0x7c0040];
                            if (_0x3b33a4[_0x3ed3fd(0x60c)] > 0x0) {
                                _0x3b33a4[_0x3ed3fd(0x561)]( (_0x3110ac, _0x202f7c) => (_0x3110ac[_0x3ed3fd(0x489)] || 0x0) - (_0x202f7c['displayNumber'] || 0x0));
                                for (let _0x4dc6be = 0x0; _0x4dc6be < _0x3b33a4[_0x3ed3fd(0x60c)]; _0x4dc6be++) {
                                    const _0x2c3edb = _0x3b33a4[_0x4dc6be]
                                      , _0x183d38 = _0x2c3edb[_0x3ed3fd(0x489)]
                                      , _0x2e647d = _0x2c3edb[_0x3ed3fd(0x5d0)] || _0x3ed3fd(0x397)
                                      , _0x3e7a5c = _0x2c3edb[_0x3ed3fd(0x732)] || ''
                                      , _0x19352c = $(_0x3ed3fd(0x773))['addClass'](_0x3ed3fd(0x21f))[_0x3ed3fd(0x479)]({
                                        'id': _0x7c0040,
                                        'value': _0x2c3edb[_0x3ed3fd(0x32d)],
                                        'data-server-name': _0x2c3edb['name'] || 'Server\x20' + _0x183d38,
                                        'data-region-name': _0xbd925,
                                        'data-region-flag': _0x1b9781[_0x7c0040],
                                        'data-server-number': _0x183d38,
                                        'data-server-image': _0x2e647d
                                    })
                                      , _0xb7364d = _0x3e7a5c && _0x3e7a5c[_0x3ed3fd(0x70b)]() !== ''
                                      , _0x2d4260 = $(_0x3ed3fd(0x773))[_0x3ed3fd(0x4b5)](_0x3ed3fd(0x5da));
                                    _0xb7364d && _0x2d4260[_0x3ed3fd(0x4b5)](_0x3ed3fd(0x281))[_0x3ed3fd(0x56d)](_0x3ed3fd(0x430), _0x3e7a5c);
                                    _0x2d4260[_0x3ed3fd(0x527)]($(_0x3ed3fd(0x126))['attr'](_0x3ed3fd(0x39e), _0x2e647d));
                                    const _0x3b34f0 = $(_0x3ed3fd(0x773))[_0x3ed3fd(0x4b5)](_0x3ed3fd(0x4d3))[_0x3ed3fd(0x527)]($(_0x3ed3fd(0x65e))[_0x3ed3fd(0x4b5)]('server-number')['text'](_0x183d38 + '.'), $(_0x3ed3fd(0x65e))[_0x3ed3fd(0x4b5)](_0x3ed3fd(0x12d))[_0x3ed3fd(0x159)](_0x2c3edb['name'] || 'Server\x20' + _0x183d38))
                                      , _0x2fa84a = $(_0x3ed3fd(0x773))[_0x3ed3fd(0x4b5)](_0x3ed3fd(0x146))[_0x3ed3fd(0x159)](_0xbd925 + '\x20' + _0x183d38)
                                      , _0x55593a = $(_0x3ed3fd(0x773))[_0x3ed3fd(0x4b5)](_0x3ed3fd(0x784))['append']($('<span></span>')[_0x3ed3fd(0x4b5)]('green-dot'))
                                      , _0x335acc = $(_0x3ed3fd(0x773))[_0x3ed3fd(0x4b5)](_0x3ed3fd(0x1eb));
                                    _0x19352c[_0x3ed3fd(0x527)](_0x2d4260, _0x3b34f0, _0x2fa84a, _0x55593a, _0x335acc),
                                    $(_0x3ed3fd(0x32f) + _0x7c0040)[_0x3ed3fd(0x527)](_0x19352c),
                                    _0x19352c[_0x3ed3fd(0x335)](function() {
                                        var _0xdb3323 = _0x3ed3fd;
                                        const _0xef2fd = $(this)['attr'](_0xdb3323(0x5f9))
                                          , _0x594203 = $(this)[_0xdb3323(0x479)](_0xdb3323(0x743))
                                          , _0x2f0727 = $(this)['attr'](_0xdb3323(0x345))
                                          , _0x3498d3 = $(this)[_0xdb3323(0x479)](_0xdb3323(0x521))
                                          , _0x2da7fa = $(this)[_0xdb3323(0x479)](_0xdb3323(0x6ef))
                                          , _0x2b0d7c = _0xef2fd + '\x20' + _0x594203;
                                        window[_0xdb3323(0x438)] = _0x2b0d7c,
                                        window[_0xdb3323(0x552)] = {
                                            'regionName': _0xef2fd,
                                            'serverNumber': _0x594203,
                                            'regionFlag': _0x3498d3,
                                            'serverImage': _0x2da7fa,
                                            'displayName': _0x2b0d7c
                                        },
                                        $(_0xdb3323(0x488))[_0xdb3323(0x410)](_0x2f0727),
                                        $(_0xdb3323(0x69c))['val'](_0x2b0d7c),
                                        $(_0xdb3323(0x3ca))[_0xdb3323(0x410)]($(_0xdb3323(0x488))[_0xdb3323(0x410)]()),
                                        $(_0xdb3323(0x3d5))[_0xdb3323(0x410)]($('#port_name_s')[_0xdb3323(0x410)]());
                                        try {
                                            const _0x58e687 = JSON[_0xdb3323(0x75f)](localStorage[_0xdb3323(0x325)](_0xdb3323(0x432)) || '{}');
                                            _0x58e687[_0xdb3323(0x438)] = _0x2b0d7c,
                                            localStorage['setItem']('SaveGamewx', JSON['stringify'](_0x58e687));
                                        } catch (_0x4bad06) {
                                            console[_0xdb3323(0x6e5)](_0xdb3323(0x6e6), _0x4bad06);
                                        }
                                        typeof ctx !== 'undefined' && (ctx[_0xdb3323(0x51d)] && ctx[_0xdb3323(0x3da)] && (ctx['containerImgS'][_0xdb3323(0x310)] = ctx['onclickServer'])),
                                        typeof retundFlagError === _0xdb3323(0x2a8) && retundFlagError(),
                                        window[_0xdb3323(0x1c6)] = _0x2f0727,
                                        $(_0xdb3323(0x44e))[_0xdb3323(0x335)](),
                                        $('#adbl-continue')['click'](),
                                        setTimeout(_0x446f5c, 0x1f4),
                                        setTimeout(_0x446f5c, 0x7d0);
                                    });
                                }
                            } else
                                $(_0x3ed3fd(0x32f) + _0x7c0040)[_0x3ed3fd(0x527)](_0x3ed3fd(0x242));
                        }
                        );
                    } else
                        $('.servers-peru,\x20.servers-mexico,\x20.servers-eeuu,\x20.servers-canada,\x20.servers-germania,\x20.servers-francia,\x20.servers-singapur,\x20.servers-japon,\x20.servers-australia,\x20.servers-granbretana')['html'](_0x26cbb0(0x6bc));
                    _0x4da6bc();
                }
                function _0x28d06d(_0xcf74ef) {
                    var _0x37c926 = _0x5916a8;
                    if (_0xcf74ef >= 0xf4240)
                        return (_0xcf74ef / 0xf4240)[_0x37c926(0x560)](0x2) + 'M';
                    else
                        return _0xcf74ef >= 0x3e8 ? (_0xcf74ef / 0x3e8)[_0x37c926(0x560)](0x1) + 'K' : _0xcf74ef[_0x37c926(0x560)](0x0);
                }
                function _0x446f5c() {
                    var _0x191179 = _0x5916a8;
                    if (!window[_0x191179(0x438)])
                        return;
                    document[_0x191179(0x717)](_0x191179(0x4f9))[_0x191179(0x58d)](_0x56ef08 => {
                        var _0x16408a = _0x191179;
                        const _0x50d16d = _0x56ef08[_0x16408a(0x3a8)] || '';
                        (_0x50d16d[_0x16408a(0x1f2)]('wss://') || _0x50d16d['includes'](_0x16408a(0x6fb)) || _0x50d16d['includes'](_0x16408a(0x5c8)) || _0x50d16d[_0x16408a(0x6c1)](/[a-z]+-\d+/i)) && (_0x56ef08[_0x16408a(0x3a8)] = window[_0x16408a(0x438)],
                        _0x56ef08['text'] !== undefined && (_0x56ef08[_0x16408a(0x159)] = window[_0x16408a(0x438)]));
                    }
                    ),
                    window[_0x191179(0x6ab)] && window['mapText'][_0x191179(0x159)] !== undefined && (window['mapText'][_0x191179(0x159)] = window[_0x191179(0x438)]);
                }
                function _0x262af8() {
                    var _0x26be6b = _0x5916a8;
                    try {
                        const _0x184788 = window[_0x26be6b(0x161)] || window[_0x26be6b(0x161)];
                        if (_0x184788 && typeof _0x184788['Bq'] === _0x26be6b(0x2a8)) {
                            const _0x8246c = _0x184788['Bq'];
                            _0x184788['Bq'] = function(_0x351bc6, _0x2a7c0b) {
                                var _0x49d61e = _0x26be6b;
                                const _0x436e4d = _0x8246c[_0x49d61e(0x31e)](this, arguments);
                                return setTimeout(function() {
                                    var _0x289e7c = _0x49d61e;
                                    try {
                                        const _0x9e1d0c = window[_0x289e7c(0x438)] || (function() {
                                            var _0x4458aa = _0x289e7c;
                                            try {
                                                const _0x96713a = JSON[_0x4458aa(0x75f)](localStorage[_0x4458aa(0x325)](_0x4458aa(0x432)) || '{}');
                                                return _0x96713a['realServerName'] || '';
                                            } catch (_0x5ae73c) {
                                                return '';
                                            }
                                        }());
                                        window[_0x289e7c(0x6ab)] && window[_0x289e7c(0x6ab)][_0x289e7c(0x159)] && _0x9e1d0c && (window[_0x289e7c(0x6ab)]['text'] = _0x9e1d0c);
                                    } catch (_0x34c8d9) {
                                        console[_0x289e7c(0x6e5)](_0x289e7c(0x27a), _0x34c8d9);
                                    }
                                }, 0x64),
                                _0x436e4d;
                            }
                            ,
                            console[_0x26be6b(0x680)](_0x26be6b(0x46c));
                        }
                    } catch (_0xa410e3) {
                        console[_0x26be6b(0x6e5)]('❌\x20خطأ\x20في\x20تعديل\x20دالة\x20عرض\x20اسم\x20السيرفر:', _0xa410e3);
                    }
                }
                function _0x4da6bc() {
                    var _0x11c79e = _0x5916a8;
                    fetch(_0x11c79e(0x52d) + Date[_0x11c79e(0x4f5)]())[_0x11c79e(0x2aa)](_0x33b8ca => _0x33b8ca[_0x11c79e(0x698)]())[_0x11c79e(0x2aa)](_0x5e5576 => {
                        var _0x1cecb7 = _0x11c79e;
                        _0x5e5576 && _0x5e5576['servers'] && $(_0x1cecb7(0x36a))['each'](function() {
                            var _0x5dfd7a = _0x1cecb7;
                            const _0x2f57c = $(this)
                              , _0x17122b = _0x2f57c[_0x5dfd7a(0x479)]('value')
                              , _0x2b6a07 = _0x5e5576[_0x5dfd7a(0x32e)][_0x17122b];
                            _0x2f57c[_0x5dfd7a(0x25f)](_0x5dfd7a(0x56a))[_0x5dfd7a(0x4fa)](_0x5dfd7a(0x157), 'none');
                            if (_0x2b6a07 && _0x2b6a07[_0x5dfd7a(0x33e)] && _0x2b6a07[_0x5dfd7a(0x33e)][_0x5dfd7a(0x60c)]) {
                                _0x2f57c['data'](_0x5dfd7a(0x323), JSON['stringify'](_0x2b6a07[_0x5dfd7a(0x33e)]));
                                const _0x3b62ce = _0x2b6a07[_0x5dfd7a(0x33e)][0x0]
                                  , _0x489937 = _0x28d06d(_0x3b62ce['score'])
                                  , _0x6c52f6 = _0x3b62ce['score'] >= 0xf4240;
                                _0x2f57c[_0x5dfd7a(0x25f)](_0x5dfd7a(0x585))[_0x5dfd7a(0x26f)](_0x5dfd7a(0x1e9) + (_0x6c52f6 ? 'million' : _0x5dfd7a(0x4b0)) + '\x22>' + _0x489937 + '</span>');
                                if (_0x2b6a07[_0x5dfd7a(0x33e)][_0x5dfd7a(0x60c)] >= 0x4) {
                                    const _0x43e1ac = _0x2b6a07[_0x5dfd7a(0x33e)]['slice'](0x0, 0x4)[_0x5dfd7a(0x736)](_0x508218 => _0x508218['score'] >= 0xf4240);
                                    _0x43e1ac && _0x2f57c[_0x5dfd7a(0x25f)](_0x5dfd7a(0x56a))[_0x5dfd7a(0x4fa)](_0x5dfd7a(0x157), _0x5dfd7a(0x776));
                                }
                            } else
                                _0x2f57c[_0x5dfd7a(0x25f)](_0x5dfd7a(0x585))[_0x5dfd7a(0x26f)]('-');
                        });
                    }
                    )[_0x11c79e(0x381)](_0x4327ad => console[_0x11c79e(0x6e5)]('Error\x20updating\x20servers:', _0x4327ad));
                }
                function _0xdb5aa4() {
                    var _0x456146 = _0x5916a8;
                    $(document)['on'](_0x456146(0x3c9), '.server-score', function(_0x2f165a) {
                        var _0x40f7c3 = _0x456146;
                        $(_0x40f7c3(0x113))[_0x40f7c3(0x47e)]();
                        const _0x59bc65 = $(this)[_0x40f7c3(0x467)]('.selectSala')
                          , _0x258277 = _0x59bc65[_0x40f7c3(0x56d)](_0x40f7c3(0x323));
                        if (!_0x258277)
                            return;
                        let _0x475c16 = [];
                        try {
                            _0x475c16 = typeof _0x258277 === _0x40f7c3(0x131) ? JSON[_0x40f7c3(0x75f)](_0x258277) : _0x258277;
                        } catch (_0x5d1ae3) {
                            return;
                        }
                        if (!_0x475c16 || !_0x475c16[_0x40f7c3(0x60c)])
                            return;
                        let _0x3abb8a = _0x40f7c3(0x21d);
                        const _0x5eac13 = Math['min'](_0x475c16['length'], 0xa);
                        for (let _0x17ab94 = 0x0; _0x17ab94 < _0x5eac13; _0x17ab94++) {
                            const _0x4d8ef8 = _0x475c16[_0x17ab94];
                            _0x3abb8a += _0x40f7c3(0x59f) + (_0x17ab94 + 0x1) + _0x40f7c3(0x2f9) + (_0x4d8ef8[_0x40f7c3(0x4fd)] || _0x40f7c3(0x523) + _0x4d8ef8['id']) + _0x40f7c3(0x276) + _0x28d06d(_0x4d8ef8[_0x40f7c3(0x495)]) + _0x40f7c3(0x1d9);
                        }
                        _0x3abb8a += '</table>';
                        const _0x538b56 = $(_0x40f7c3(0x4ee))['html'](_0x3abb8a)[_0x40f7c3(0x4fa)]({
                            'top': _0x2f165a[_0x40f7c3(0x64a)] + 0xa,
                            'left': _0x2f165a[_0x40f7c3(0x67c)] + 0xa
                        });
                        $(_0x40f7c3(0x2b0))['append'](_0x538b56),
                        $(this)[_0x40f7c3(0x56d)](_0x40f7c3(0x53c), _0x538b56);
                    }),
                    $(document)['on']('mouseleave', '.server-score', function() {
                        var _0x125f75 = _0x456146;
                        const _0x1de13a = $(this)[_0x125f75(0x56d)]('tooltip');
                        _0x1de13a && setTimeout(function() {
                            var _0x1b1d22 = _0x125f75;
                            _0x1de13a[_0x1b1d22(0x47e)]();
                        }, 0x64);
                    }),
                    $(document)['on'](_0x456146(0x40a), '.server-score', function(_0x108e9b) {
                        var _0x270d34 = _0x456146;
                        const _0x57b0eb = $(this)[_0x270d34(0x56d)](_0x270d34(0x53c));
                        _0x57b0eb && _0x57b0eb[_0x270d34(0x4fa)]({
                            'top': _0x108e9b[_0x270d34(0x64a)] + 0xa,
                            'left': _0x108e9b[_0x270d34(0x67c)] + 0xa
                        });
                    });
                }
                $('#sort-toggle')['on']({
                    'mouseenter': function(_0x4dfef6) {
                        var _0x587913 = _0x5916a8
                          , _0x47eace = $(_0x587913(0x4d8))
                          , _0x5f3996 = $(this)[_0x587913(0x48d)]()
                          , _0x5ad1c5 = $(this)['outerWidth']()
                          , _0x1d7fc3 = _0x47eace[_0x587913(0x49e)]();
                        _0x47eace[_0x587913(0x4fa)]({
                            'left': _0x5f3996[_0x587913(0x4e0)] + _0x5ad1c5 / 0x2 - _0x1d7fc3 / 0x2,
                            'top': _0x5f3996[_0x587913(0x69f)] + 0x1e
                        })[_0x587913(0x34a)](0xc8);
                    },
                    'mouseleave': function() {
                        var _0x398cd9 = _0x5916a8;
                        $(_0x398cd9(0x4d8))[_0x398cd9(0x545)](0xc8);
                    }
                }),
                $(_0x5916a8(0x730))[_0x5916a8(0x335)](function() {
                    var _0x5c4e0c = _0x5916a8;
                    window[_0x5c4e0c(0x76c)] === _0x5c4e0c(0x2cd) ? (window[_0x5c4e0c(0x76c)] = _0x5c4e0c(0x425),
                    $(this)[_0x5c4e0c(0x4b5)](_0x5c4e0c(0x425))[_0x5c4e0c(0x159)](_0x5c4e0c(0x1ac)),
                    $(_0x5c4e0c(0x65b))['css'](_0x5c4e0c(0x5a0), '#00a8ff')) : (window[_0x5c4e0c(0x76c)] = _0x5c4e0c(0x2cd),
                    $(this)['removeClass'](_0x5c4e0c(0x425))[_0x5c4e0c(0x159)](_0x5c4e0c(0x2e3)),
                    $(_0x5c4e0c(0x65b))[_0x5c4e0c(0x4fa)](_0x5c4e0c(0x5a0), _0x5c4e0c(0x3d2))),
                    _0x14edd9();
                }),
                $('.ui-tab')['on'](_0x5916a8(0x335), _0xe55dff),
                $(_0x5916a8(0x256))[_0x5916a8(0x335)](function() {
                    var _0x3dba2d = _0x5916a8;
                    let _0x1b5187 = $(this)[_0x3dba2d(0x479)]('value');
                    typeof theoKzObjects !== 'undefined' && (theoKzObjects['flag'] = _0x1b5187),
                    typeof ctx !== _0x3dba2d(0x3fa) && ctx['containerImgS'] && (ctx['containerImgS'][_0x3dba2d(0x310)] = ctx[_0x3dba2d(0x3da)]),
                    typeof retundFlagError === 'function' && retundFlagError();
                }),
                setTimeout(function() {
                    let _0x5395af = 0x0
                      , _0x25faaf = setInterval(function() {
                        var _0x5ae123 = _0x1792;
                        if (_0x5395af >= 0x6) {
                            clearInterval(_0x25faaf);
                            return;
                        }
                        _0x5395af % 0x2 === 0x0 ? (window[_0x5ae123(0x76c)] = _0x5ae123(0x425),
                        $(_0x5ae123(0x730))[_0x5ae123(0x4b5)](_0x5ae123(0x425))[_0x5ae123(0x159)](_0x5ae123(0x1ac)),
                        $(_0x5ae123(0x65b))[_0x5ae123(0x4fa)](_0x5ae123(0x5a0), _0x5ae123(0x6d4))) : (window[_0x5ae123(0x76c)] = _0x5ae123(0x2cd),
                        $(_0x5ae123(0x730))[_0x5ae123(0x66f)](_0x5ae123(0x425))[_0x5ae123(0x159)]('Timmap\x20Servers'),
                        $('.server-number')[_0x5ae123(0x4fa)](_0x5ae123(0x5a0), _0x5ae123(0x3d2))),
                        _0x14edd9(),
                        _0x5395af++;
                    }, 0x2bc);
                }, 0x5dc),
                _0xe55dff(),
                _0xdb5aa4(),
                _0x262af8(),
                window['currentDisplayMode'] = 'timmap',
                _0x756163()[_0x5916a8(0x2aa)](_0x2ac8d0 => {
                    _0x2ac8d0 && _0x14edd9();
                }
                );
            }
            _0x21aed0(_0x41aeb1),
            window[_0x2e8ac7(0x71a)] = {
                'lastTime': performance[_0x2e8ac7(0x4f5)](),
                'frameCount': 0x0,
                'fps': 0x0,
                'cpuUsage': 0x0,
                'fpsDisplay': null,
                'cpuDisplay': null,
                'isFpsVisible': ![],
                'isCpuVisible': ![],
                'cpuSamples': [],
                'cpuSampleSize': 0xa,
                'lastCpuTime': 0x0,
                'isInitialized': ![],
                '_cpuMonitoringInterval': null,
                '_animFrameId': null,
                'init'() {
                    var _0x53bbc1 = _0x2e8ac7;
                    if (this[_0x53bbc1(0x508)])
                        return;
                    this[_0x53bbc1(0x508)] = !![];
                    const _0x421637 = localStorage[_0x53bbc1(0x325)](_0x53bbc1(0x3ef));
                    _0x421637 !== null && (this[_0x53bbc1(0x73b)] = _0x421637 === 'true',
                    this[_0x53bbc1(0x4ed)] = _0x421637 === _0x53bbc1(0x123)),
                    this['createDisplayElements'](),
                    (this[_0x53bbc1(0x73b)] || this[_0x53bbc1(0x4ed)]) && this[_0x53bbc1(0x3cd)](),
                    this['setupKeyboardControls'](),
                    this[_0x53bbc1(0x19f)](),
                    this[_0x53bbc1(0x2d3)]();
                },
                'startAllMonitoring'() {
                    var _0x17d82b = _0x2e8ac7;
                    this[_0x17d82b(0x73b)] && !this[_0x17d82b(0x3f5)] && this[_0x17d82b(0x55e)](),
                    this[_0x17d82b(0x4ed)] && !this[_0x17d82b(0x29e)] && this[_0x17d82b(0x3de)]();
                },
                'stopAllMonitoring'() {
                    var _0x1ad244 = _0x2e8ac7;
                    this[_0x1ad244(0x29e)] && (console[_0x1ad244(0x680)](_0x1ad244(0x2b4)),
                    clearInterval(this[_0x1ad244(0x29e)]),
                    this[_0x1ad244(0x29e)] = null),
                    this[_0x1ad244(0x3f5)] && (console[_0x1ad244(0x680)](_0x1ad244(0x466)),
                    cancelAnimationFrame(this[_0x1ad244(0x3f5)]),
                    this[_0x1ad244(0x3f5)] = null);
                },
                'setupToggleButton'() {
                    var _0x4545ab = _0x2e8ac7;
                    const _0x15b6c5 = document[_0x4545ab(0x374)]('performance-monitor-toggle');
                    _0x15b6c5 ? (_0x15b6c5[_0x4545ab(0x586)] = this[_0x4545ab(0x73b)] || this['isCpuVisible'],
                    _0x15b6c5['addEventListener'](_0x4545ab(0x35a), () => {
                        var _0x5b1670 = _0x4545ab;
                        const _0x2273e3 = _0x15b6c5[_0x5b1670(0x586)];
                        this[_0x5b1670(0x53f)](_0x2273e3);
                    }
                    )) : setTimeout( () => {
                        var _0x443ff9 = _0x4545ab;
                        const _0x4ee1c3 = document[_0x443ff9(0x374)](_0x443ff9(0x64e));
                        _0x4ee1c3 && (_0x4ee1c3['checked'] = this[_0x443ff9(0x73b)] || this[_0x443ff9(0x4ed)],
                        _0x4ee1c3[_0x443ff9(0x57a)](_0x443ff9(0x35a), () => {
                            var _0x376100 = _0x443ff9;
                            this[_0x376100(0x53f)](_0x4ee1c3['checked']);
                        }
                        ));
                    }
                    , 0x3e8);
                },
                'createDisplayElements'() {
                    var _0x209435 = _0x2e8ac7;
                    const _0xfb1f86 = document[_0x209435(0x374)](_0x209435(0x17a));
                    if (!_0xfb1f86) {
                        const _0x10b6dc = document[_0x209435(0x2ea)](_0x209435(0x75d));
                        _0x10b6dc['id'] = _0x209435(0x17a),
                        _0x10b6dc[_0x209435(0x3a8)] = _0x209435(0x392),
                        document[_0x209435(0x25e)]['appendChild'](_0x10b6dc);
                    }
                    let _0xc0acf9 = document[_0x209435(0x297)]('.performance-monitor-container');
                    !_0xc0acf9 && (_0xc0acf9 = document[_0x209435(0x2ea)]('div'),
                    _0xc0acf9[_0x209435(0x3e4)] = _0x209435(0x118),
                    document[_0x209435(0x2b0)]['appendChild'](_0xc0acf9)),
                    !this[_0x209435(0x46b)] && (this['fpsDisplay'] = document[_0x209435(0x2ea)](_0x209435(0x2ec)),
                    this['fpsDisplay'][_0x209435(0x3e4)] = _0x209435(0x683),
                    _0xc0acf9[_0x209435(0x513)](this['fpsDisplay'])),
                    !this[_0x209435(0x253)] && (this[_0x209435(0x253)] = document[_0x209435(0x2ea)](_0x209435(0x2ec)),
                    this[_0x209435(0x253)][_0x209435(0x3e4)] = _0x209435(0x683),
                    _0xc0acf9[_0x209435(0x513)](this[_0x209435(0x253)]));
                },
                'startCpuMonitoring'() {
                    var _0xe35a01 = _0x2e8ac7;
                    if (!this['isCpuVisible']) {
                        console['log']('CPU\x20monitoring\x20not\x20started\x20because\x20it\x27s\x20disabled');
                        return;
                    }
                    this[_0xe35a01(0x29e)] && clearInterval(this[_0xe35a01(0x29e)]),
                    this[_0xe35a01(0x166)] = performance['now'](),
                    this[_0xe35a01(0x16b)] = [],
                    console[_0xe35a01(0x680)](_0xe35a01(0x539)),
                    this[_0xe35a01(0x29e)] = setInterval( () => {
                        var _0x5d0fee = _0xe35a01;
                        if (!this[_0x5d0fee(0x4ed)]) {
                            clearInterval(this['_cpuMonitoringInterval']),
                            this[_0x5d0fee(0x29e)] = null,
                            console[_0x5d0fee(0x680)](_0x5d0fee(0x15e));
                            return;
                        }
                        this[_0x5d0fee(0x526)]();
                    }
                    , 0x1f4);
                },
                'measureCpuUsage'() {
                    var _0x22f9f2 = _0x2e8ac7;
                    const _0x1cfbb0 = performance[_0x22f9f2(0x4f5)]()
                      , _0x15ba38 = _0x1cfbb0 - this[_0x22f9f2(0x166)]
                      , _0x1dc19f = 0x3c
                      , _0x2810c1 = Math[_0x22f9f2(0x470)](0x0, _0x1dc19f - this[_0x22f9f2(0x52f)]) / _0x1dc19f;
                    let _0x11a553 = 0x0;
                    if (window[_0x22f9f2(0x1b5)] && window['performance'][_0x22f9f2(0x788)]) {
                        const _0x193222 = window[_0x22f9f2(0x1b5)][_0x22f9f2(0x788)];
                        _0x11a553 = _0x193222[_0x22f9f2(0x591)] - _0x193222[_0x22f9f2(0x4b7)];
                    }
                    const _0x4ed157 = Math[_0x22f9f2(0x51c)](0x1, window[_0x22f9f2(0x645)] ? 0.7 : 0.3)
                      , _0x71c082 = Math[_0x22f9f2(0x51c)](0x64, Math[_0x22f9f2(0x481)]((_0x2810c1 * 0x46 + _0x11a553 / 0x3e8 * 0x1e) * _0x4ed157));
                    this[_0x22f9f2(0x16b)][_0x22f9f2(0x1bc)](_0x71c082),
                    this[_0x22f9f2(0x16b)][_0x22f9f2(0x60c)] > this[_0x22f9f2(0x18f)] && this['cpuSamples']['shift'](),
                    this[_0x22f9f2(0x515)] = Math['round'](this['cpuSamples'][_0x22f9f2(0x427)]( (_0x548205, _0x240bd1) => _0x548205 + _0x240bd1, 0x0) / this[_0x22f9f2(0x16b)][_0x22f9f2(0x60c)]),
                    this[_0x22f9f2(0x166)] = _0x1cfbb0,
                    this[_0x22f9f2(0x19f)]();
                },
                'startMonitoring'() {
                    var _0x2f16b4 = _0x2e8ac7;
                    if (!this['isFpsVisible'])
                        return;
                    this[_0x2f16b4(0x3f5)] && cancelAnimationFrame(this[_0x2f16b4(0x3f5)]);
                    const _0x88f412 = () => {
                        var _0x4b640c = _0x2f16b4;
                        if (!this[_0x4b640c(0x73b)]) {
                            cancelAnimationFrame(this[_0x4b640c(0x3f5)]),
                            this['_animFrameId'] = null;
                            return;
                        }
                        const _0x59ced0 = performance[_0x4b640c(0x4f5)]()
                          , _0x4dc601 = _0x59ced0 - this[_0x4b640c(0x771)];
                        this[_0x4b640c(0x1d1)]++,
                        _0x4dc601 >= 0x3e8 && (this[_0x4b640c(0x52f)] = Math[_0x4b640c(0x481)](this['frameCount'] * 0x3e8 / _0x4dc601),
                        this['frameCount'] = 0x0,
                        this[_0x4b640c(0x771)] = _0x59ced0,
                        this[_0x4b640c(0x19f)]()),
                        this[_0x4b640c(0x3f5)] = requestAnimationFrame(_0x88f412);
                    }
                    ;
                    this[_0x2f16b4(0x3f5)] = requestAnimationFrame(_0x88f412);
                },
                'updateDisplays'() {
                    var _0x4b5dcc = _0x2e8ac7;
                    if (!this[_0x4b5dcc(0x46b)] || !this['cpuDisplay'])
                        return;
                    if (this['isFpsVisible']) {
                        this[_0x4b5dcc(0x46b)][_0x4b5dcc(0x3a8)] = _0x4b5dcc(0x4f4) + this['fps'];
                        if (this[_0x4b5dcc(0x52f)] >= 0x3a)
                            this['fpsDisplay'][_0x4b5dcc(0x75d)][_0x4b5dcc(0x5a0)] = _0x4b5dcc(0x6fe);
                        else
                            this[_0x4b5dcc(0x52f)] >= 0x1e ? this[_0x4b5dcc(0x46b)][_0x4b5dcc(0x75d)][_0x4b5dcc(0x5a0)] = _0x4b5dcc(0x6f3) : this[_0x4b5dcc(0x46b)][_0x4b5dcc(0x75d)][_0x4b5dcc(0x5a0)] = _0x4b5dcc(0x2d4);
                        this['fpsDisplay'][_0x4b5dcc(0x75d)]['display'] = _0x4b5dcc(0x776);
                    } else
                        this[_0x4b5dcc(0x46b)][_0x4b5dcc(0x75d)][_0x4b5dcc(0x157)] = _0x4b5dcc(0x19e);
                    if (this['isCpuVisible']) {
                        this[_0x4b5dcc(0x253)][_0x4b5dcc(0x3a8)] = 'CPU:\x20' + this[_0x4b5dcc(0x515)] + '%';
                        if (this[_0x4b5dcc(0x515)] <= 0x32)
                            this[_0x4b5dcc(0x253)][_0x4b5dcc(0x75d)][_0x4b5dcc(0x5a0)] = _0x4b5dcc(0x6fe);
                        else
                            this['cpuUsage'] <= 0x50 ? this['cpuDisplay'][_0x4b5dcc(0x75d)]['color'] = _0x4b5dcc(0x6f3) : this[_0x4b5dcc(0x253)][_0x4b5dcc(0x75d)][_0x4b5dcc(0x5a0)] = _0x4b5dcc(0x2d4);
                        this['cpuDisplay'][_0x4b5dcc(0x75d)]['display'] = 'block';
                    } else
                        this[_0x4b5dcc(0x253)][_0x4b5dcc(0x75d)][_0x4b5dcc(0x157)] = _0x4b5dcc(0x19e);
                },
                'setupKeyboardControls'() {
                    var _0x5f3ad0 = _0x2e8ac7;
                    if (this[_0x5f3ad0(0x22b)])
                        return;
                    this[_0x5f3ad0(0x22b)] = !![],
                    document[_0x5f3ad0(0x57a)](_0x5f3ad0(0x69d), _0x19189a => {
                        var _0x586ac2 = _0x5f3ad0;
                        if (_0x19189a[_0x586ac2(0x320)] === 'F2' || _0x19189a['code'] === 'F2' || _0x19189a[_0x586ac2(0x36c)] === 0x71)
                            return _0x19189a[_0x586ac2(0x348)](),
                            this['isCpuVisible'] = !this[_0x586ac2(0x4ed)],
                            this[_0x586ac2(0x4ed)] && !this[_0x586ac2(0x29e)] && this[_0x586ac2(0x3de)](),
                            this[_0x586ac2(0x165)](),
                            this[_0x586ac2(0x19f)](),
                            this[_0x586ac2(0x3a9)](),
                            ![];
                        else {
                            if (_0x19189a[_0x586ac2(0x320)] === 'F4' || _0x19189a[_0x586ac2(0x210)] === 'F4' || _0x19189a[_0x586ac2(0x36c)] === 0x73)
                                return _0x19189a[_0x586ac2(0x348)](),
                                this[_0x586ac2(0x73b)] = !this[_0x586ac2(0x73b)],
                                this[_0x586ac2(0x73b)] && !this[_0x586ac2(0x3f5)] && this[_0x586ac2(0x55e)](),
                                this['saveSettings'](),
                                this[_0x586ac2(0x19f)](),
                                this['updateToggleButton'](),
                                ![];
                            else {
                                if (_0x19189a[_0x586ac2(0x10e)] && (_0x19189a[_0x586ac2(0x320)] === '2' || _0x19189a['keyCode'] === 0x32))
                                    return _0x19189a[_0x586ac2(0x348)](),
                                    this[_0x586ac2(0x4ed)] = !this[_0x586ac2(0x4ed)],
                                    this[_0x586ac2(0x4ed)] && !this[_0x586ac2(0x29e)] && this[_0x586ac2(0x3de)](),
                                    this[_0x586ac2(0x165)](),
                                    this[_0x586ac2(0x19f)](),
                                    this[_0x586ac2(0x3a9)](),
                                    ![];
                                else {
                                    if (_0x19189a[_0x586ac2(0x10e)] && (_0x19189a[_0x586ac2(0x320)] === '4' || _0x19189a[_0x586ac2(0x36c)] === 0x34))
                                        return _0x19189a[_0x586ac2(0x348)](),
                                        this[_0x586ac2(0x73b)] = !this[_0x586ac2(0x73b)],
                                        this[_0x586ac2(0x73b)] && !this[_0x586ac2(0x3f5)] && this[_0x586ac2(0x55e)](),
                                        this[_0x586ac2(0x165)](),
                                        this[_0x586ac2(0x19f)](),
                                        this[_0x586ac2(0x3a9)](),
                                        ![];
                                }
                            }
                        }
                    }
                    , !![]);
                },
                'saveSettings'() {
                    var _0x8ac90e = _0x2e8ac7;
                    const _0x400cd7 = this[_0x8ac90e(0x73b)] || this['isCpuVisible'];
                    localStorage['setItem'](_0x8ac90e(0x3ef), _0x400cd7);
                },
                'updateToggleButton'() {
                    var _0x2979d2 = _0x2e8ac7;
                    const _0xc7537d = document['getElementById'](_0x2979d2(0x64e));
                    _0xc7537d && (_0xc7537d[_0x2979d2(0x586)] = this[_0x2979d2(0x73b)] || this[_0x2979d2(0x4ed)]);
                },
                'toggle'(_0x37d81f) {
                    var _0x27d1b3 = _0x2e8ac7;
                    typeof _0x37d81f !== _0x27d1b3(0x328) && (_0x37d81f = !this[_0x27d1b3(0x73b)] && !this[_0x27d1b3(0x4ed)]);
                    const _0x27cf7d = this[_0x27d1b3(0x73b)]
                      , _0x1df340 = this['isCpuVisible'];
                    this[_0x27d1b3(0x73b)] = _0x37d81f,
                    this[_0x27d1b3(0x4ed)] = _0x37d81f,
                    this[_0x27d1b3(0x165)](),
                    _0x37d81f ? (!_0x27cf7d && this[_0x27d1b3(0x73b)] && this[_0x27d1b3(0x55e)](),
                    !_0x1df340 && this[_0x27d1b3(0x4ed)] && this[_0x27d1b3(0x3de)]()) : this[_0x27d1b3(0x14c)](),
                    this[_0x27d1b3(0x19f)]();
                },
                'enable'(_0x155258) {
                    var _0x1b8ec8 = _0x2e8ac7;
                    _0x155258 ? !this[_0x1b8ec8(0x508)] ? this[_0x1b8ec8(0x1a0)]() : this[_0x1b8ec8(0x53f)](!![]) : this['toggle'](![]);
                }
            },
            $(_0x2e8ac7(0x414))[_0x2e8ac7(0x527)](_0x2e8ac7(0x789) + _0x41aeb1[_0x2e8ac7(0x6c3)] + _0x2e8ac7(0x274) + _0x41aeb1['userId'] + _0x2e8ac7(0x498) + _0x41aeb1[_0x2e8ac7(0x6c3)] + _0x2e8ac7(0x463));
            var _0x4d60fb = '';
            _0x56b865['e'] === 'not_empty' && (_0x4d60fb = '<input\x20type=\x22button\x22\x20value=\x22' + _0x56b865['ccg'][0x3] + _0x2e8ac7(0x4f0),
            _0x444d21['s_w'] = _0x56b865['sw'] == 0x1);
            _0x1ba440(_0x56b865[_0x2e8ac7(0x264)]),
            $('#mm-advice-cont')[_0x2e8ac7(0x26f)](_0x2e8ac7(0x21e) + _0x56b865[_0x2e8ac7(0x506)][0x4] + _0x2e8ac7(0x2f8) + _0x56b865[_0x2e8ac7(0x506)][0x5] + _0x2e8ac7(0x676) + _0x4d60fb + '</div>'),
            document[_0x2e8ac7(0x374)](_0x2e8ac7(0x6ba))['addEventListener'](_0x2e8ac7(0x335), function() {
                var _0x1d1731 = _0x2e8ac7;
                let _0x24ab91 = document[_0x1d1731(0x4d7)]['requestFullScreen'] || document['documentElement'][_0x1d1731(0x692)] || document[_0x1d1731(0x4d7)][_0x1d1731(0x1e2)];
                if (_0x24ab91 && !_0x444d21[_0x1d1731(0x38f)])
                    try {
                        _0x444d21[_0x1d1731(0x38f)] = !![],
                        _0x24ab91[_0x1d1731(0x45d)](document[_0x1d1731(0x4d7)]);
                    } catch (_0x1ab54a) {}
                else
                    _0x444d21[_0x1d1731(0x38f)] = ![],
                    document[_0x1d1731(0x57c)]();
            });
            _0x56b865['e'] === _0x2e8ac7(0x31f) && document['getElementById'](_0x2e8ac7(0x59d))[_0x2e8ac7(0x57a)](_0x2e8ac7(0x335), function() {
                var _0x12b83f = _0x2e8ac7;
                $(_0x12b83f(0x488))['val'](_0x444d21['pi']),
                $(_0x12b83f(0x69c))['val'](_0x444d21['pn']),
                $(_0x12b83f(0x3ca))[_0x12b83f(0x410)]($(_0x12b83f(0x488))[_0x12b83f(0x410)]()),
                $(_0x12b83f(0x3d5))[_0x12b83f(0x410)]($(_0x12b83f(0x69c))[_0x12b83f(0x410)]()),
                document[_0x12b83f(0x374)](_0x12b83f(0x6c9))[_0x12b83f(0x335)]();
            });
            !window[_0x2e8ac7(0x6cd)] && (window[_0x2e8ac7(0x6cd)] = {
                'eat_animation': 0.0025,
                'smoothCamera': 0.5,
                'PortionSize': 0x2,
                'PortionAura': 1.2,
                'PortionTransparent': 0.8,
                'FoodTransparent': 0.3,
                'FoodSize': 0x2,
                'FoodShadow': 0x2,
                'zoomSpeed': 0.003,
                'soundEnabled': !![],
                'soundVolume': 0x32,
                'soundEffect': _0x2e8ac7(0x5db)
            });
            try {
                const _0x1cc0d6 = JSON['parse'](localStorage[_0x2e8ac7(0x325)](_0x2e8ac7(0x731)));
                if (_0x1cc0d6)
                    for (const _0x45015e in _0x1cc0d6) {
                        wormxObjects[_0x2e8ac7(0x68b)](_0x45015e) && (wormxObjects[_0x45015e] = _0x1cc0d6[_0x45015e]);
                    }
            } catch (_0x534dc8) {
                console[_0x2e8ac7(0x6e5)](_0x2e8ac7(0x268), _0x534dc8);
            }
            function _0x37dae5() {
                var _0x4662ef = _0x2e8ac7;
                try {
                    localStorage['setItem'](_0x4662ef(0x731), JSON[_0x4662ef(0x608)](wormxObjects));
                } catch (_0x4b91d9) {
                    console[_0x4662ef(0x6e5)](_0x4662ef(0x5e4), _0x4b91d9);
                }
            }
            _0x444d21['s_w'] ? $('\x0a<link\x20href=\x27https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\x27\x20rel=\x27stylesheet\x27/>\x0a<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\x22>\x0a<button\x20id=\x22btn_crsw\x22\x20style=\x22display:\x20none;\x22>💡</button>\x20\x0a<button\x20id=\x22op_wup\x22\x20class=\x22op_wup\x22>⚙️\x20Settings</button>\x20\x0a<div\x20id=\x22modal_wup\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20<div\x20class=\x22modal-content\x22>\x20\x0a\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22>&times;</span>\x20\x0a\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22>GAME\x20SETTINGS</h2>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wup_body\x22\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20layout\x20with\x20sidebar\x20and\x20content\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-layout\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sidebar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-sidebar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x20active\x22\x20data-tab=\x22game-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M14.7\x206.3a1\x201\x200\x200\x200\x200\x201.4l1.6\x201.6a1\x201\x200\x200\x200\x201.4\x200l3.77-3.77a6\x206\x200\x200\x201-7.94\x207.94l-6.91\x206.91a2.12\x202.12\x200\x200\x201-3-3l6.91-6.91a6\x206\x200\x200\x201\x207.94-7.94l-3.76\x203.76z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Game\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22mobile-settings\x22\x20id=\x22mobile-tab-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x225\x22\x20y=\x222\x22\x20width=\x2214\x22\x20height=\x2220\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2218\x22\x20x2=\x2212\x22\x20y2=\x2218\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Mobile\x20Controls</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22sound-laser-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M22\x2012h-4l-3\x209L9\x203l-3\x209H2\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Laser\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22power-ups\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Power-ups\x20&\x20Zoom</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015a2\x202\x200\x200\x201-2\x202H7l-4\x204V5a2\x202\x200\x200\x201\x202-2h14a2\x202\x200\x200\x201\x202\x202z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22backgrounds\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x223\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x228.5\x22\x20cy=\x228.5\x22\x20r=\x221.5\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2221\x2015\x2016\x2010\x205\x2021\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Backgrounds</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22cursors\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203l7.07\x2016.97\x202.51-7.39\x207.39-2.51L3\x203z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M13\x2013l6\x206\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Cursors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22about\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212\x22\x20y2=\x2212\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212\x22\x20y2=\x228\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>About</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Content\x20Area\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_server\x22\x20style=\x22position:\x20absolute;\x20opacity:\x200;\x20top:\x20-9999px;\x20left:\x20-9999px;\x20pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22sel_server\x22>Country</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_country\x22></select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Options\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Game\x20Options</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Fast\x20Eating\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bolt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Fast\x20Eating</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22eating_speed_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ZigZag\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_zigzag\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-eye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20ZigZag</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormup.in/images/cors-proxy.php?img=img/zigzag.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22zigzagup\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_speed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-tachometer-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormup.in/images/cors-proxy.php?img=img/speed.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wupspeed\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Total\x20Kill-Headshot\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_save\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22saveGame\x22>Total\x20Kill/Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22saveGame\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20FPS/CPU\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-microchip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20FPS/CPU</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22performance-monitor-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Visual\x20Pulse\x20Effects\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_pulse_effects\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-wave-square\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Visual\x20Pulse\x20Effects</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22pulse_effects_enabled\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Screen\x20Mode\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_w1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-desktop\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Screen\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sc\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>100%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>75%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>Center</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Smooth\x20Level\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sliders-h\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Smooth\x20movement</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>Normal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>High</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Top\x20Players\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-trophy\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Top\x20Players</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>0</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>1</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>2</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x223\x22>3</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x224\x22>4</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x225\x22>5</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x226\x22>6</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x227\x22>7</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x228\x22>8</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x229\x22>9</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-settings-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Effects\x20Label\x20on\x20Left\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-volume-up\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-effects-title\x22>Sound\x20Effects</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Headshot\x20Sound\x20Selector\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sound_effect_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/hs_2.mp3\x22>Default\x20Headshot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\x22>Headshot\x20Sound</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/emaat.mp3\x22>Emaat</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/sniper-shot.mp3\x22>Sniper\x20Shot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/headshot_6.mp3\x22>Headshot\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\x22>Alqm</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\x22>Bye\x20Bye</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/Aelo-Adi.MP3\x22>Adelo\x20Adi</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/alalobee.mp3\x22>Ala\x20Loby</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/laugh.mp3\x22>Laugh</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/mario-jump.mp3\x22>Mario\x20Jump</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pew.mp3\x22>Pew</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pingo.mp3\x22>Pingo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/wak-wak.mp3\x22>Wak\x20Wak</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x2010th\x20Headshot\x20Sound\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22monster_kill_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/monster-kill-hahaha.mp3\x22>Monster\x20Kill</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/mk.mp3\x22>Monster\x20Kill\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\x22>Monster\x20Kill\x203</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Volume\x20Control\x20without\x20label\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22volume-slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22volume_slider\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22\x20value=\x2240\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22volume_value\x22\x20class=\x22slider-value\x22>40</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Toggle\x20Switch\x20on\x20far\x20right\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wupsound\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x20round\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Custom\x20Skin\x20Upload\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Custom\x20Skin</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_crsw\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-file-image\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Skin\x20File....\x20Only\x20(skin.json)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-grow:\x201;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22file\x22\x20accept=\x22.json\x22\x20id=\x22fileSkin\x22\x20style=\x22flex-grow:\x201;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_clear_file\x22>Clear</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Audio\x20elements\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22s_h\x22><source\x20src=\x22https://wormx.store/video/hs_2.mp3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22monster_kill_sound\x22><source\x20src=\x22https://wormx.store/video/monster-kill-hahaha.mp3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22sound_test_audio\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Mobile\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mobile-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Mobile\x20Controls</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Joystick\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-gamepad\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_checked\x22>Enable\x20Joystick</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22joystick_checked\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_color\x22>Joystick\x20Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_color\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22red\x22>Red</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22blue\x22>Blue</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22green\x22>Green</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22yellow\x22>Yellow</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22purple\x22>Purple</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22orange\x22>Orange</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-cog\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_mode\x22>Joystick\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_mode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22static\x22>Static</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dynamic\x22>Dynamic</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-map-marker-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_position\x22>Position</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_position\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22L\x22>Left</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22R\x22>Right</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand-arrows-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_size\x22>Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_size\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_size_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_pxy\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_pxy\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_pxy_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22config_mobile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Additional\x20mobile\x20settings\x20will\x20be\x20loaded\x20here\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Laser\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sound-laser-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Laser\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Laser\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_Laser\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22Laserup\x22>Enable\x20Laser</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22Laserup\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_color_picker\x22>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22laser_color_picker\x22\x20value=\x22#FFD700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_opacity_slider\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22laser_opacity_slider\x22\x20min=\x2210\x22\x20max=\x22100\x22\x20step=\x2210\x22\x20value=\x2250\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22laser_opacity_value\x22\x20class=\x22slider-value\x22>50</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22reset_laser_settings\x22\x20class=\x22reset-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Keyboard\x20Shortcuts:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20text-align:\x20right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>O</strong>\x20-\x20Increase\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>P</strong>\x20-\x20Decrease\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22power-ups-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Power-ups\x20&\x20Zoom\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Advanced\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Spin\x20Fast\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sync-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spin_fast_slider\x22>Spin\x20Fast</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22spin_fast_slider\x22\x20min=\x220.3\x22\x20max=\x220.6\x22\x20step=\x220.1\x22\x20value=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22spin_fast_value\x22\x20class=\x22slider-value\x22>0.5</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22spin_fast\x22\x20data-default=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_size_slider\x22>Power-ups\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_size_slider\x22\x20min=\x221\x22\x20max=\x226\x22\x20step=\x221\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Aura\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-radiation-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_aura_slider\x22>Power-ups\x20Aura</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_aura_slider\x22\x20min=\x221.2\x22\x20max=\x223.2\x22\x20step=\x220.2\x22\x20value=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_aura_value\x22\x20class=\x22slider-value\x22>1.2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_aura\x22\x20data-default=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-apple-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_size_slider\x22>Food\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_size_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Shadow\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-moon\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_shadow_slider\x22>Food\x20Shadow</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_shadow_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_shadow_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_shadow\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Zoom\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Zoom\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-search-plus\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22zoom_speed_slider\x22>Zoom\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22zoom_speed_slider\x22\x20min=\x220.001\x22\x20max=\x220.01\x22\x20step=\x220.001\x22\x20value=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom_speed_value\x22\x20class=\x22slider-value\x22>0.003</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22zoom_speed\x22\x20data-default=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_game_enhancements\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Messages\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22messages-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Messages</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Default\x20Kill&Headshot\x20Toggle\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-with-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill&Headshot\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-skull\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Default\x20Kill&Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wupiq\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20New\x20Messages\x20Layout\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Messages</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22messages-container\x22\x20id=\x22custom-messages-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Left\x20side:\x20Kill\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22KILLED\x22>KILLED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22WASTED\x22>WASTED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ELIMINATED\x22>ELIMINATED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22DESTROYED\x22>DESTROYED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22FINISHED\x22>FINISHED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22Well\x20Done!\x22>Well\x20Done!</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22kill_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22kill_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22kill_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Right\x20side:\x20Headshot\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Headshot\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22HEADSHOT\x22>HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BOOM!\x20HEADSHOT\x22>BOOM!\x20HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22PERFECT\x20AIM\x22>PERFECT\x20AIM</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22CRITICAL\x20HIT\x22>CRITICAL\x20HIT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BULLSEYE\x22>BULLSEYE</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22headshot_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22headshot_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22headshot_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_messages\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Backgrounds\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22backgrounds-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Backgrounds</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sector\x20System\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-system-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-toggle-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-th-large\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-label\x22>Enable\x20Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_system_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20Panel\x20-\x20Hidden\x20until\x20enabled\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_settings_panel\x22\x20class=\x22sector-settings-panel\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-main-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-grip-horizontal\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Display\x20Mode</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sector_display_mode\x22\x20class=\x22sector-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sectors\x22>Sectors\x20(12)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22quarters\x22>Quarters\x20(4)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-fill-drip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_bg_color\x22\x20value=\x22#000000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Opacity\x20-\x20Always\x20visible\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_bg_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2260\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_bg_opacity_value\x22>60%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-border-style\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Show\x20Lines</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_show_lines\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Lines\x20Options\x20-\x20Hidden\x20when\x20Show\x20Lines\x20is\x20off\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_lines_options\x22\x20class=\x22sector-lines-options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_line_color\x22\x20value=\x22#FF0000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-low-vision\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_line_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2230\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_line_opacity_value\x22>30%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-shortcuts\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-title\x22>Keyboard\x20Shortcuts:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>S</strong>\x20or\x20<strong>=</strong>\x20-\x20Toggle\x20Sectors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>X</strong>\x20-\x20Toggle\x20Quarters</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20items\x20will\x20be\x20added\x20dynamically\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Cursors\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cursors-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Cursors</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20العنوان\x20في\x20سطر\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-mouse-pointer\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Cursor\x20Selection</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20الزر\x20في\x20سطر\x20منفصل\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x20cursor-controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22default-cursor-btn\x22\x20class=\x22secondary-button\x22>Default\x20Cursor</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22current-cursor-name\x22>Current:\x20Electrical\x20Plug\x20Cursor</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20المؤشرات\x20ستضاف\x20ديناميكياً\x20هنا\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_cursors\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20About\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22about-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>About</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22about-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-info-circle\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Wormx:\x20Enhance\x20Your\x20Wormate.io\x20Experience\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[Wormx]\x20is\x20a\x20Chrome\x20extension\x20designed\x20to\x20improve\x20your\x20wormate.io\x20gameplay.\x20Quickly\x20select\x20rooms,\x20customize\x20your\x20worm\x20with\x20vibrant\x20skin\x20colors,\x20and\x20enjoy\x20extra\x20features\x20to\x20enhance\x20your\x20experience.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-calendar-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Release\x20Date:\x2012/05/2025.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-code-branch\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Version:\x202.0.1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-users\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Designed\x20by:\x20Wormx\x20Team\x20!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Keyboard\x20Shortcuts:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>O</strong>\x20-\x20Increase\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>P</strong>\x20-\x20Decrease\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20User\x20ID\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-id-card\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22>ID:\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22' + _0x41aeb1[_0x2e8ac7(0x6c3)] + _0x2e8ac7(0x78b))[_0x2e8ac7(0x24b)](_0x2e8ac7(0x1c4)) : $(_0x2e8ac7(0x236) + _0x56b865[_0x2e8ac7(0x506)][0x6] + '</button>\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wup\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x20wup-modal\x22\x20style=\x22max-width:\x20480px\x20!important;\x20width:\x20480px\x20!important;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22center\x20wup-header\x22\x20style=\x22background-color:\x20#ff8a18;\x20background:\x20linear-gradient(145deg,\x20rgb(255,\x20141,\x200),\x20rgb(255,\x20102,\x200));\x20padding:\x200\x2015px;\x20height:\x2036px;\x20line-height:\x2036px;\x20border-radius:\x208px\x208px\x200\x200;\x20position:\x20relative;\x20text-align:\x20center;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22\x20style=\x22position:\x20absolute;\x20left:\x2015px;\x20top:\x206px;\x20color:\x20white;\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x22>×</span>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22\x20style=\x22margin:\x200;\x20font-size:\x2018px;\x20color:\x20white;\x22>Settings</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modal_wup_body\x22\x20class=\x22modal-body\x20wup-body\x22\x20style=\x22padding:\x2015px;\x20background-color:\x20#1e2339;\x20color:\x20#fff;\x20border-radius:\x200\x200\x208px\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20قسم\x20معرف\x20المستخدم\x20مع\x20زر\x20النسخ\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22\x20style=\x22display:\x20block;\x20margin-bottom:\x205px;\x20font-weight:\x20bold;\x20color:\x20#ddd;\x22>User\x20ID</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20margin:\x200\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22' + _0x41aeb1['userId'] + _0x2e8ac7(0x37c) + _0x41aeb1[_0x2e8ac7(0x6c3)] + '\x27).then(()=>\x20alert(\x27Your\x20ID\x20' + _0x41aeb1[_0x2e8ac7(0x6c3)] + '\x20copied!\x27));\x22>Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20رابط\x20Discord\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2010px\x200;\x20margin-bottom:\x2015px;\x20border-top:\x201px\x20solid\x20#3a4061;\x20border-bottom:\x201px\x20solid\x20#3a4061;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://t.me/wormateactivate\x22\x20target=\x22_blank\x22\x20style=\x22display:\x20inline-block;\x20background-color:\x20#5865F2;\x20color:\x20white;\x20padding:\x2010px\x2015px;\x20text-decoration:\x20none;\x20border-radius:\x204px;\x20font-weight:\x20bold;\x20box-shadow:\x200\x202px\x205px\x20rgba(0,0,0,0.2);\x20transition:\x20background-color\x200.3s;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20style=\x22width:\x2020px;\x20height:\x2020px;\x20margin-right:\x208px;\x20display:\x20inline-block;\x20vertical-align:\x20middle;\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M20.317\x204.3698a19.7913\x2019.7913\x200\x2000-4.8851-1.5152.0741.0741\x200\x2000-.0785.0371c-.211.3753-.4447.8648-.6083\x201.2495-1.8447-.2762-3.68-.2762-5.4868\x200-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077\x200\x2000-.0785-.037\x2019.7363\x2019.7363\x200\x2000-4.8852\x201.515.0699.0699\x200\x2000-.0321.0277C.5334\x209.0458-.319\x2013.5799.0992\x2018.0578a.0824.0824\x200\x2000.0312.0561c2.0528\x201.5076\x204.0413\x202.4228\x205.9929\x203.0294a.0777.0777\x200\x2000.0842-.0276c.4616-.6304.8731-1.2952\x201.226-1.9942a.076.076\x200\x2000-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077\x200\x2001-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743\x200\x2001.0776-.0105c3.9278\x201.7933\x208.18\x201.7933\x2012.0614\x200a.0739.0739\x200\x2001.0785.0095c.1202.099.246.1981.3728.2924a.077.077\x200\x2001-.0066.1276\x2012.2986\x2012.2986\x200\x2001-1.873.8914.0766.0766\x200\x2000-.0407.1067c.3604.698.7719\x201.3628\x201.225\x201.9932a.076.076\x200\x2000.0842.0286c1.961-.6067\x203.9495-1.5219\x206.0023-3.0294a.077.077\x200\x2000.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061\x200\x2000-.0312-.0286zM8.02\x2015.3312c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9555-2.4189\x202.157-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.9555\x202.4189-2.1569\x202.4189zm7.9748\x200c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9554-2.4189\x202.1569-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.946\x202.4189-2.1568\x202.4189Z\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Join\x20Our\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.8em;\x20margin-top:\x202px;\x22>انضم\x20إلى\x20مجتمعنا\x20على\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2010px;\x20color:\x20#aaa;\x20font-size:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20all\x20premium\x20features\x20by\x20joining\x20our\x20Discord\x20server\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.9em;\x20margin-top:\x202px;\x22>للحصول\x20على\x20جميع\x20الميزات،\x20انضم\x20إلى\x20سيرفر\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20صورة\x20البريميوم\x20المصغرة\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x2010px\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormup.in/images/cors-proxy.php?img=img/premium_features.png\x22\x20alt=\x22Premium\x20Features\x22\x20style=\x22max-width:\x20180px;\x20height:\x20auto;\x20border-radius:\x204px;\x20display:\x20block;\x20margin:\x200\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20نص\x20بريميوم\x20مع\x20أيقونة\x20فقط\x20(بدون\x20صورة\x20أو\x20تكرار)\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#ddd;\x20font-size:\x2014px;\x20margin:\x205px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crown\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x20Premium\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20العناصر\x20المخفية\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_server\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_save\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_sound\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_speed\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_w1\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_top\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_killmsg\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_sm\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_background\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22config_mobile\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_crsw\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_zigzag\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_pulse_effects\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_messages\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_game_enhancements\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_Laser\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22s_h\x22><source\x20src=\x22https://wormx.store/video/hs_2.mp3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20عناصر\x20مخفية\x20إضافية\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22eating_speed_toggle\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22performance-monitor-toggle\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-grid\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-sidebar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-content\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab-content\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20')[_0x2e8ac7(0x24b)](_0x2e8ac7(0x1c4));
            $(document)[_0x2e8ac7(0x66c)](function() {
                var _0xeeca20 = _0x2e8ac7;
                const _0x10206a = _0x56b865['e'] === _0xeeca20(0x31f) || _0x3aff1b;
                !_0x10206a && setTimeout(function() {
                    var _0x38096b = _0xeeca20;
                    $(_0x38096b(0x1dc))[_0x38096b(0x3af)](),
                    $(_0x38096b(0x28c))[_0x38096b(0x1a2)](_0x38096b(0x6a0))[_0x38096b(0x3af)](),
                    $(_0x38096b(0x514))[_0x38096b(0x467)](_0x38096b(0x562))[_0x38096b(0x3af)](),
                    $('[id^=\x22sel_\x22]')[_0x38096b(0x3af)](),
                    $(_0x38096b(0x754))[_0x38096b(0x3af)](),
                    $(_0x38096b(0x2f3))[_0x38096b(0x3af)](),
                    $(_0x38096b(0x496))[_0x38096b(0x3af)](),
                    $(_0x38096b(0x66d))[_0x38096b(0x3af)](),
                    $(_0x38096b(0x435))[_0x38096b(0x3af)](),
                    $(_0x38096b(0x45b))['hide'](),
                    $(_0x38096b(0x5d4))[_0x38096b(0x3af)]();
                }, 0x64);
            }),
            $(_0x2e8ac7(0x6b3))[_0x2e8ac7(0x335)](function() {
                setTimeout(function() {
                    var _0x2900f2 = _0x1792;
                    const _0x6fc15d = _0x56b865['e'] === 'not_empty' || _0x3aff1b;
                    !_0x6fc15d && ($('.settings-sidebar,\x20.settings-layout,\x20.settings-content,\x20.settings-grid,\x20.tab-content,\x20.sidebar-item')['hide'](),
                    $(_0x2900f2(0x28c))[_0x2900f2(0x1a2)](_0x2900f2(0x6a0))[_0x2900f2(0x3af)](),
                    $(_0x2900f2(0x514))['closest'](_0x2900f2(0x562))['hide'](),
                    $(_0x2900f2(0x5d1))[_0x2900f2(0x3af)](),
                    $('.switch,\x20.slider-control,\x20.section-title')['hide'](),
                    $(_0x2900f2(0x66d))[_0x2900f2(0x3af)](),
                    $('#cursors-tab,\x20.cursor-container,\x20.cursor-item')[_0x2900f2(0x3af)](),
                    $(_0x2900f2(0x45b))[_0x2900f2(0x3af)](),
                    $(_0x2900f2(0x5d4))['hide']());
                }, 0x64);
            }),
            $(_0x2e8ac7(0x3ee))[_0x2e8ac7(0x335)](function() {
                var _0x507cfc = _0x2e8ac7
                  , _0x47be39 = document['getElementById']('id_customer');
                _0x47be39['select'](),
                _0x47be39[_0x507cfc(0x2a7)](0x0, 0x1869f),
                navigator[_0x507cfc(0x16f)]['writeText'](_0x47be39[_0x507cfc(0x345)]),
                $('#myTooltip')[_0x507cfc(0x26f)]('' + _0x56b865[_0x507cfc(0x506)][0xe] + '!'),
                $(_0x507cfc(0x56b))[_0x507cfc(0x4fa)](_0x507cfc(0x53e), _0x507cfc(0x5b6)),
                $(_0x507cfc(0x56b))[_0x507cfc(0x4fa)](_0x507cfc(0x4b9), '1'),
                setTimeout(function() {
                    var _0x54d1ac = _0x507cfc;
                    $('#myTooltip')[_0x54d1ac(0x4fa)](_0x54d1ac(0x53e), 'hidden'),
                    $(_0x54d1ac(0x56b))[_0x54d1ac(0x4fa)](_0x54d1ac(0x4b9), '0');
                }, 0x5dc);
            }),
            $('#btn_copy')[_0x2e8ac7(0x3f2)](function() {
                var _0x3ee7ef = _0x2e8ac7;
                $(_0x3ee7ef(0x56b))['css']('visibility', 'visible'),
                $('#myTooltip')[_0x3ee7ef(0x4fa)](_0x3ee7ef(0x4b9), '1');
            }, function() {
                var _0x3702ce = _0x2e8ac7;
                $(_0x3702ce(0x56b))[_0x3702ce(0x159)]() !== _0x56b865[_0x3702ce(0x506)][0xe] + '!' && ($('#myTooltip')[_0x3702ce(0x4fa)](_0x3702ce(0x53e), _0x3702ce(0x1e3)),
                $(_0x3702ce(0x56b))[_0x3702ce(0x4fa)]('opacity', '0'));
            }),
            $(document)[_0x2e8ac7(0x66c)](function() {
                var _0x2b105f = _0x2e8ac7;
                if (window[_0x2b105f(0x3b3)])
                    return;
                window[_0x2b105f(0x3b3)] = !![];
                var _0x394bab = $('#modal_wup')
                  , _0x467ddc = _0x394bab['css'](_0x2b105f(0x157));
                $('body')[_0x2b105f(0x527)](_0x394bab[_0x2b105f(0x404)]());
                var _0x3bab93 = $(_0x2b105f(0x2d1))['css']({
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                    'width': _0x2b105f(0x43a),
                    'height': _0x2b105f(0x43a),
                    'background-color': 'rgba(0,\x200,\x200,\x200.7)',
                    'z-index': _0x2b105f(0x696),
                    'display': _0x2b105f(0x19e)
                });
                _0x394bab[_0x2b105f(0x579)](_0x3bab93),
                $('#op_wup')[_0x2b105f(0x2d9)](_0x2b105f(0x335))['on'](_0x2b105f(0x335), function(_0x1bc391) {
                    var _0x2969bf = _0x2b105f;
                    return _0x1bc391['preventDefault'](),
                    _0x3bab93[_0x2969bf(0x288)](),
                    _0x394bab['css']({
                        'z-index': '9999',
                        'display': 'block'
                    }),
                    $('body')[_0x2969bf(0x4fa)](_0x2969bf(0x294), _0x2969bf(0x1e3)),
                    ![];
                }),
                $(_0x2b105f(0x590))['off'](_0x2b105f(0x335))['on'](_0x2b105f(0x335), function() {
                    var _0x552500 = _0x2b105f;
                    _0x394bab[_0x552500(0x4fa)](_0x552500(0x157), 'none'),
                    _0x3bab93[_0x552500(0x3af)](),
                    $(_0x552500(0x2b0))[_0x552500(0x4fa)](_0x552500(0x294), '');
                }),
                _0x3bab93['on'](_0x2b105f(0x335), function() {
                    var _0x3c360b = _0x2b105f;
                    _0x394bab[_0x3c360b(0x4fa)](_0x3c360b(0x157), _0x3c360b(0x19e)),
                    _0x3bab93[_0x3c360b(0x3af)](),
                    $('body')[_0x3c360b(0x4fa)](_0x3c360b(0x294), '');
                });
            });
            var _0x5efd8f = document[_0x2e8ac7(0x374)]('div_save')
              , _0x54c6ed = document['getElementById'](_0x2e8ac7(0x47a))
              , _0x2e4767 = document['getElementById'](_0x2e8ac7(0x465))
              , _0x26fd2f = document['getElementById'](_0x2e8ac7(0x134))
              , _0x5ef4b2 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x476))
              , _0x178c58 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x400))
              , _0x466318 = document['getElementById'](_0x2e8ac7(0x287))
              , _0x42df4e = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x772))
              , _0xb1bc37 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x11e))
              , _0xe4e51c = document[_0x2e8ac7(0x374)]('div_killmsg')
              , _0x32b74e = document[_0x2e8ac7(0x374)]('div_background')
              , _0x5d4221 = [{
                'name': _0x2e8ac7(0x565),
                'val': 'vn'
            }, {
                'name': _0x2e8ac7(0x254),
                'val': 'th'
            }, {
                'name': _0x2e8ac7(0x375),
                'val': 'kh'
            }, {
                'name': _0x2e8ac7(0x20d),
                'val': 'id'
            }, {
                'name': 'Singapore',
                'val': 'sg'
            }, {
                'name': _0x2e8ac7(0x5f3),
                'val': 'jp'
            }, {
                'name': _0x2e8ac7(0x21c),
                'val': 'mx'
            }, {
                'name': _0x2e8ac7(0x52c),
                'val': 'br'
            }, {
                'name': _0x2e8ac7(0x266),
                'val': 'ca'
            }, {
                'name': 'Germany',
                'val': 'de'
            }, {
                'name': 'France',
                'val': 'fr'
            }, {
                'name': 'England',
                'val': 'gb'
            }, {
                'name': _0x2e8ac7(0x292),
                'val': 'au'
            }, {
                'name': 'USA',
                'val': 'us'
            }, {
                'name': 'Portugal',
                'val': 'pt'
            }, {
                'name': _0x2e8ac7(0x10d),
                'val': 'tr'
            }, {
                'name': _0x56b865[_0x2e8ac7(0x506)][0x24],
                'val': 'iq'
            }];
            let _0x55bb1e = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x5b4));
            if (_0x55bb1e) {
                for (_0x21aed0 = 0x0; _0x21aed0 < _0x5d4221['length']; _0x21aed0++) {
                    let _0x254035 = document[_0x2e8ac7(0x2ea)](_0x2e8ac7(0x571));
                    _0x254035['value'] = _0x5d4221[_0x21aed0][_0x2e8ac7(0x410)],
                    _0x254035[_0x2e8ac7(0x35f)] = _0x5d4221[_0x21aed0]['name'],
                    _0x55bb1e['appendChild'](_0x254035);
                }
                _0x3b8a7a && (_0x55bb1e['value'] = _0x3b8a7a),
                _0x55bb1e[_0x2e8ac7(0x3e5)] = function() {
                    var _0x543416 = _0x2e8ac7;
                    let _0x5a3136 = _0x55bb1e['value'];
                    _0x3b8a7a = _0x5a3136,
                    localStorage['setItem'](_0x543416(0x158), _0x5a3136);
                    var _0x141e40 = {
                        'id_wormate': _0x41aeb1['userId'],
                        'country': _0x5a3136
                    };
                    fetch(_0x543416(0x74c), {
                        'headers': {
                            'Content-Type': _0x543416(0x34c)
                        },
                        'method': _0x543416(0x4bf),
                        'body': JSON[_0x543416(0x608)](_0x141e40)
                    }),
                    localStorage[_0x543416(0x167)](_0x543416(0x1a3)),
                    window[_0x543416(0x68f)][_0x543416(0x1ed)]();
                }
                ;
            }
            var _0x3aff1b = ![];
            if (_0x56b865['cm'] === '' || _0x56b865['cm'] === undefined)
                ;
            else {
                var _0xdca00b = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x650))
                  , _0x1888c3 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x6c9))
                  , _0x33132a = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x6f8));
                _0xdca00b && (_0xdca00b[_0x2e8ac7(0x75d)][_0x2e8ac7(0x157)] = _0x2e8ac7(0x776),
                _0xdca00b[_0x2e8ac7(0x3bb)] = function() {
                    var _0x25ebf7 = _0x2e8ac7;
                    _0x33132a[_0x25ebf7(0x345)] = _0x56b865['cm'],
                    _0x1888c3[_0x25ebf7(0x335)]();
                }
                ,
                _0x3aff1b = !![]);
            }
            if (_0x56b865['e'] === _0x2e8ac7(0x745))
                ;
            else {
                _0x444d21['h'] = _0x56b865['z'] == 'b',
                _0x444d21['hz'] = _0x56b865['z'] == 'c';
                if (_0x56b865['e'] === _0x2e8ac7(0x31f) || _0x3aff1b) {
                    var _0x5c1796 = ooo['Xg']['Kf']['Wg']['Ah'];
                    _0x5efd8f && (_0x5efd8f[_0x2e8ac7(0x75d)][_0x2e8ac7(0x157)] = _0x2e8ac7(0x776));
                    _0x54c6ed && (_0x54c6ed[_0x2e8ac7(0x75d)]['display'] = _0x2e8ac7(0x449));
                    $(_0x2e8ac7(0x41c))[_0x2e8ac7(0x1d4)](_0x2e8ac7(0x586), _0x444d21[_0x2e8ac7(0x358)]),
                    $(_0x2e8ac7(0x41c))[_0x2e8ac7(0x35a)](function() {
                        var _0x1c07a6 = _0x2e8ac7;
                        _0x444d21['flx'] = $(this)[_0x1c07a6(0x1d4)](_0x1c07a6(0x586)),
                        localStorage[_0x1c07a6(0x128)](_0x1c07a6(0x432), JSON['stringify'](_0x444d21));
                    }),
                    $('#wupspeed')[_0x2e8ac7(0x1d4)]('checked', _0x444d21['vp']),
                    $(_0x2e8ac7(0x6a2))[_0x2e8ac7(0x35a)](function() {
                        var _0x108669 = _0x2e8ac7;
                        _0x444d21['vp'] = $(this)[_0x108669(0x1d4)](_0x108669(0x586)),
                        localStorage[_0x108669(0x128)]('SaveGamewx', JSON['stringify'](_0x444d21));
                    }),
                    $(_0x2e8ac7(0x5e8))[_0x2e8ac7(0x1d4)](_0x2e8ac7(0x586), _0x444d21['cs']),
                    $('#saveGame')[_0x2e8ac7(0x35a)](function() {
                        var _0x2b5bf3 = _0x2e8ac7;
                        _0x444d21['cs'] = $(this)[_0x2b5bf3(0x1d4)](_0x2b5bf3(0x586)),
                        localStorage[_0x2b5bf3(0x128)](_0x2b5bf3(0x432), JSON['stringify'](_0x444d21));
                    });
                    _0x444d21[_0x2e8ac7(0x62b)] ? (_0x5ef4b2 && (_0x5ef4b2[_0x2e8ac7(0x75d)][_0x2e8ac7(0x157)] = _0x2e8ac7(0x19e)),
                    _0x444d21['sc'] = 0x0,
                    _0x444d21['wi'] = 0x0) : (_0x5ef4b2 && (_0x5ef4b2[_0x2e8ac7(0x75d)][_0x2e8ac7(0x157)] = _0x2e8ac7(0x449)),
                    _0x466318 && (_0x466318[_0x2e8ac7(0x345)] = _0x444d21['sc'],
                    _0x466318[_0x2e8ac7(0x3e5)] = function() {
                        var _0x4a3dd3 = _0x2e8ac7;
                        _0x444d21['sc'] = parseInt(_0x466318['value']),
                        _0x444d21['sc'] == 0x1 && (_0x444d21['wi'] = screen[_0x4a3dd3(0x67d)] / (screen[_0x4a3dd3(0x612)] * 0x2)),
                        _0x444d21['sc'] == 0x2 && (_0x444d21['wi'] = 0x0),
                        localStorage[_0x4a3dd3(0x128)](_0x4a3dd3(0x432), JSON[_0x4a3dd3(0x608)](_0x444d21));
                    }
                    ));
                    _0x178c58 && (_0x178c58[_0x2e8ac7(0x75d)][_0x2e8ac7(0x157)] = 'inline-block');
                    sel_sm && (sel_sm[_0x2e8ac7(0x345)] = _0x444d21['sm'],
                    sel_sm[_0x2e8ac7(0x3e5)] = function() {
                        var _0x138e37 = _0x2e8ac7;
                        _0x444d21['sm'] = parseInt(sel_sm[_0x138e37(0x345)]),
                        localStorage[_0x138e37(0x128)]('SaveGamewx', JSON[_0x138e37(0x608)](_0x444d21));
                    }
                    );
                    _0x42df4e && (_0x42df4e[_0x2e8ac7(0x75d)]['display'] = _0x2e8ac7(0x449));
                    _0xb1bc37 && (_0xb1bc37['value'] = _0x444d21['to'],
                    _0xb1bc37['onchange'] = function() {
                        var _0x40782c = _0x2e8ac7;
                        _0x444d21['to'] = parseInt(_0xb1bc37[_0x40782c(0x345)]),
                        localStorage[_0x40782c(0x128)](_0x40782c(0x432), JSON[_0x40782c(0x608)](_0x444d21));
                    }
                    );
                    if (_0x55bb1e && _0x55bb1e[_0x2e8ac7(0x345)] == 'iq' && _0xe4e51c) {
                        _0xe4e51c['style']['display'] = _0x2e8ac7(0x449);
                        var _0x466ad5 = $(_0x2e8ac7(0x3ed));
                        _0x466ad5[_0x2e8ac7(0x1d4)](_0x2e8ac7(0x586), _0x444d21['iq']),
                        _0x466ad5[_0x2e8ac7(0x35a)](function() {
                            var _0x257d39 = _0x2e8ac7;
                            this[_0x257d39(0x586)] ? _0x444d21['iq'] = !![] : _0x444d21['iq'] = ![],
                            localStorage['setItem'](_0x257d39(0x432), JSON[_0x257d39(0x608)](_0x444d21));
                        });
                    } else
                        _0x444d21['iq'] = ![],
                        _0xe4e51c && (_0xe4e51c[_0x2e8ac7(0x75d)][_0x2e8ac7(0x157)] = _0x2e8ac7(0x19e));
                    const _0x129d35 = localStorage[_0x2e8ac7(0x325)](_0x2e8ac7(0x3ef)) === _0x2e8ac7(0x123);
                    $(_0x2e8ac7(0x359))['prop'](_0x2e8ac7(0x586), _0x129d35),
                    $(_0x2e8ac7(0x359))[_0x2e8ac7(0x35a)](function() {
                        var _0x5b1fcb = _0x2e8ac7;
                        const _0x1d4e58 = $(this)[_0x5b1fcb(0x1d4)](_0x5b1fcb(0x586));
                        localStorage[_0x5b1fcb(0x128)](_0x5b1fcb(0x3ef), _0x1d4e58),
                        window[_0x5b1fcb(0x71a)] && window[_0x5b1fcb(0x71a)][_0x5b1fcb(0x53f)](_0x1d4e58);
                    });
                    window['PerformanceMonitor'] && window[_0x2e8ac7(0x71a)][_0x2e8ac7(0x1a0)]();
                    const _0xb1dee2 = localStorage['getItem'](_0x2e8ac7(0x5dc)) === _0x2e8ac7(0x123) || localStorage['getItem'](_0x2e8ac7(0x5dc)) === null;
                    $(_0x2e8ac7(0x1fe))[_0x2e8ac7(0x1d4)](_0x2e8ac7(0x586), _0xb1dee2),
                    window[_0x2e8ac7(0x2ce)] = _0xb1dee2,
                    $(_0x2e8ac7(0x1fe))[_0x2e8ac7(0x35a)](function() {
                        var _0x440148 = _0x2e8ac7;
                        window['pulseEnabled'] = $(this)[_0x440148(0x1d4)](_0x440148(0x586)),
                        localStorage[_0x440148(0x128)]('wupPulseEnabled', window[_0x440148(0x2ce)][_0x440148(0x132)]());
                    }),
                    _0x444d21[_0x2e8ac7(0x207)] = _0x56b865[_0x2e8ac7(0x283)];
                    _0x32b74e && (_0x32b74e[_0x2e8ac7(0x75d)][_0x2e8ac7(0x157)] = _0x2e8ac7(0x776));
                    _0x2934c2(_0x444d21, oeo),
                    _0x38c4fe['on'] = !![];
                    _0xe5eec1() ? (_0x444d21['tt'] = _0x56b865['tt'] == 0x1,
                    _0x5c1796['img_1'][_0x2e8ac7(0x5b6)] = _0x38c4fe['on'] && _0x444d21['mo'] == 0x1,
                    _0x5c1796[_0x2e8ac7(0x6b9)]['visible'] = _0x38c4fe['on'] && _0x444d21['mo'] == 0x2,
                    _0x5c1796[_0x2e8ac7(0x1f0)][_0x2e8ac7(0x5b6)] = _0x38c4fe['on'] && _0x444d21['mo'] == 0x3,
                    _0x5c1796['img_4'][_0x2e8ac7(0x5b6)] = _0x38c4fe['on'] && (_0x444d21['mo'] == 0x4 || _0x444d21['mo'] == 0x5 || _0x444d21['mo'] == 0x6)) : _0x444d21['tt'] = ![];
                    var _0x9b40d = [{
                        'nome': 'Default',
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x5d8)
                    }, {
                        'nome': 'Stardust',
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x125)
                    }, {
                        'nome': _0x2e8ac7(0x29c),
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x64c)
                    }, {
                        'nome': _0x2e8ac7(0x1bf),
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x710)
                    }, {
                        'nome': _0x2e8ac7(0x563),
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x2d0)
                    }, {
                        'nome': _0x2e8ac7(0x241),
                        'uri': _0x444d21['s_l'] + '/get_store.phpitem=bg_sky_9.png'
                    }, {
                        'nome': _0x2e8ac7(0x3aa),
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x363)
                    }, {
                        'nome': _0x2e8ac7(0x446),
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x1f7)
                    }, {
                        'nome': 'Prism',
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x5f2)
                    }, {
                        'nome': 'Cloudscape',
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x1ae)
                    }, {
                        'nome': 'Desert',
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + _0x2e8ac7(0x3ce)
                    }, {
                        'nome': 'Crystalblue\x202',
                        'uri': _0x444d21[_0x2e8ac7(0x688)] + '/get_store.phpitem=bg_sky_12.png'
                    }];
                    _0x444d21['c_2'] = _0x56b865['programmer'];
                    let _0x23909b = $(_0x2e8ac7(0x42b));
                    _0x23909b['length'] > 0x0 && (_0x23909b[_0x2e8ac7(0x6ae)](),
                    _0x9b40d['forEach'](function(_0x3a5c05) {
                        var _0x2fa591 = _0x2e8ac7;
                        const _0x22d4e2 = _0x444d21[_0x2fa591(0x249)] === _0x3a5c05[_0x2fa591(0x581)]
                          , _0x21a462 = $('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-item\x20' + (_0x22d4e2 ? 'active' : '') + _0x2fa591(0x483) + _0x3a5c05[_0x2fa591(0x581)] + _0x2fa591(0x224) + _0x3a5c05[_0x2fa591(0x28a)] + _0x2fa591(0x30b) + (_0x22d4e2 ? _0x2fa591(0x27c) : _0x2fa591(0x76f)) + _0x2fa591(0x748) + _0x3a5c05[_0x2fa591(0x581)] + _0x2fa591(0x1a8) + _0x3a5c05['nome'] + _0x2fa591(0x6e0) + _0x3a5c05['nome'] + _0x2fa591(0x782));
                        _0x21a462[_0x2fa591(0x335)](function() {
                            var _0x580f4c = _0x2fa591;
                            $(_0x580f4c(0x6c6))[_0x580f4c(0x66f)](_0x580f4c(0x5eb))[_0x580f4c(0x4fa)](_0x580f4c(0x2a0), _0x580f4c(0x76f)),
                            $(this)[_0x580f4c(0x4b5)](_0x580f4c(0x5eb))[_0x580f4c(0x4fa)]('border-color', _0x580f4c(0x27c));
                            const _0x4555be = $(this)['data']('bg')
                              , _0x4bd9a7 = $(this)[_0x580f4c(0x56d)](_0x580f4c(0x6b2));
                            _0x444d21[_0x580f4c(0x249)] = _0x4555be,
                            localStorage['setItem'](_0x580f4c(0x432), JSON[_0x580f4c(0x608)](_0x444d21)),
                            ooo && ooo['ef'] && ooo['ef'][_0x580f4c(0x6c7)] && ooo['ef'][_0x580f4c(0x1e6)] && (ooo['ef'][_0x580f4c(0x6c7)] = new PIXI['Texture'](ooo['ef'][_0x580f4c(0x1e6)](_0x4555be))),
                            $('#backgroundArena')[_0x580f4c(0x410)](_0x4555be);
                        }),
                        _0x23909b['append'](_0x21a462);
                    }));
                    let _0x2706af = document[_0x2e8ac7(0x374)]('backgroundArena');
                    if (_0x2706af) {
                        for (_0x21aed0 = 0x0; _0x21aed0 < _0x9b40d[_0x2e8ac7(0x60c)]; _0x21aed0++) {
                            let _0x5e4a08 = document[_0x2e8ac7(0x2ea)](_0x2e8ac7(0x571));
                            _0x5e4a08['value'] = _0x9b40d[_0x21aed0][_0x2e8ac7(0x581)],
                            _0x5e4a08[_0x2e8ac7(0x194)](_0x2e8ac7(0x356), _0x9b40d[_0x21aed0]['uri']),
                            _0x5e4a08[_0x2e8ac7(0x194)](_0x2e8ac7(0x6af), _0x9b40d[_0x21aed0][_0x2e8ac7(0x28a)]),
                            _0x5e4a08['innerHTML'] = _0x9b40d[_0x21aed0][_0x2e8ac7(0x28a)],
                            _0x2706af[_0x2e8ac7(0x513)](_0x5e4a08);
                        }
                        _0x444d21[_0x2e8ac7(0x678)] = _0x56b865['extension'],
                        _0x2706af[_0x2e8ac7(0x345)] = _0x444d21[_0x2e8ac7(0x249)] || _0x9b40d[0x0][_0x2e8ac7(0x581)],
                        $['fn'][_0x2e8ac7(0x3e2)] && $('#backgroundArena')[_0x2e8ac7(0x3e2)]({
                            'onSelected': function() {
                                var _0x518d03 = _0x2e8ac7;
                                _0x444d21[_0x518d03(0x249)] = $('#backgroundArena-value')[_0x518d03(0x410)](),
                                localStorage[_0x518d03(0x128)](_0x518d03(0x432), JSON[_0x518d03(0x608)](_0x444d21));
                                ooo && ooo['ef'] && ooo['ef'][_0x518d03(0x6c7)] && ooo['ef']['fn_o'] && (ooo['ef']['F_bg'] = new PIXI['Texture'](ooo['ef'][_0x518d03(0x1e6)](_0x444d21[_0x518d03(0x249)])));
                                const _0x3dcce9 = _0x444d21[_0x518d03(0x249)];
                                $(_0x518d03(0x6c6))['removeClass']('active')[_0x518d03(0x4fa)](_0x518d03(0x2a0), _0x518d03(0x76f)),
                                $('.background-item[data-bg=\x22' + _0x3dcce9 + '\x22]')[_0x518d03(0x4b5)](_0x518d03(0x5eb))[_0x518d03(0x4fa)](_0x518d03(0x2a0), _0x518d03(0x27c));
                            }
                        });
                    }
                    const _0x326598 = [{
                        'name': _0x2e8ac7(0x14b),
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/1.png'
                    }, {
                        'name': _0x2e8ac7(0x36b),
                        'url': _0x2e8ac7(0x27f)
                    }, {
                        'name': _0x2e8ac7(0x1b7),
                        'url': _0x2e8ac7(0x548)
                    }, {
                        'name': _0x2e8ac7(0x2ba),
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/4.png'
                    }, {
                        'name': _0x2e8ac7(0x2fb),
                        'url': _0x2e8ac7(0x71c)
                    }, {
                        'name': _0x2e8ac7(0x187),
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/6.png'
                    }, {
                        'name': _0x2e8ac7(0x60a),
                        'url': _0x2e8ac7(0x14d)
                    }, {
                        'name': 'Flame\x20Cursor',
                        'url': _0x2e8ac7(0x370)
                    }, {
                        'name': _0x2e8ac7(0x468),
                        'url': _0x2e8ac7(0x378)
                    }, {
                        'name': _0x2e8ac7(0x73f),
                        'url': _0x2e8ac7(0x69e)
                    }, {
                        'name': _0x2e8ac7(0x30d),
                        'url': _0x2e8ac7(0x5f4)
                    }, {
                        'name': _0x2e8ac7(0x32c),
                        'url': _0x2e8ac7(0x4c9)
                    }, {
                        'name': 'Three-colored\x20Glove\x20Cursor',
                        'url': _0x2e8ac7(0x73e)
                    }, {
                        'name': _0x2e8ac7(0x119),
                        'url': _0x2e8ac7(0x61d)
                    }, {
                        'name': _0x2e8ac7(0x2e8),
                        'url': _0x2e8ac7(0x71e)
                    }, {
                        'name': _0x2e8ac7(0x421),
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/16.png'
                    }, {
                        'name': _0x2e8ac7(0x39d),
                        'url': _0x2e8ac7(0x6d1)
                    }, {
                        'name': 'Roasting\x20Marshmallow\x20Cursor',
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/18.png'
                    }, {
                        'name': _0x2e8ac7(0x176),
                        'url': _0x2e8ac7(0x4c1)
                    }, {
                        'name': 'Red\x20Pepper\x20Cursor',
                        'url': _0x2e8ac7(0x43d)
                    }, {
                        'name': 'Magic\x20Wand\x20with\x20Golden\x20Star\x20Cursor',
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/21.png'
                    }, {
                        'name': _0x2e8ac7(0x407),
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/22.png'
                    }, {
                        'name': _0x2e8ac7(0x314),
                        'url': _0x2e8ac7(0x4a7)
                    }, {
                        'name': _0x2e8ac7(0x436),
                        'url': 'https://wormup.in/images/cors-proxy.php?img=cursors/24.png'
                    }, {
                        'name': 'Strawberry\x20Candy\x20Cursor',
                        'url': _0x2e8ac7(0x396)
                    }, {
                        'name': 'Rose\x20Branch\x20Cursor',
                        'url': _0x2e8ac7(0x218)
                    }, {
                        'name': _0x2e8ac7(0x4bc),
                        'url': _0x2e8ac7(0x6ed)
                    }, {
                        'name': _0x2e8ac7(0x611),
                        'url': _0x2e8ac7(0x728)
                    }]
                      , _0x38383b = localStorage[_0x2e8ac7(0x325)](_0x2e8ac7(0x143));
                    if (_0x38383b) {
                        _0x519f48(_0x38383b);
                        const _0x5f4adc = _0x326598[_0x2e8ac7(0x25f)](_0x258f5d => _0x258f5d['url'] === _0x38383b);
                        _0x5f4adc && $(_0x2e8ac7(0x55a))[_0x2e8ac7(0x159)](_0x2e8ac7(0x604) + _0x5f4adc[_0x2e8ac7(0x4fd)]);
                    }
                    const _0x45ebc9 = $(_0x2e8ac7(0x77e));
                    _0x45ebc9[_0x2e8ac7(0x60c)] > 0x0 && (_0x45ebc9[_0x2e8ac7(0x6ae)](),
                    _0x326598['forEach'](function(_0x4a9cde) {
                        var _0x41d3cd = _0x2e8ac7;
                        const _0x37febc = _0x38383b === _0x4a9cde['url']
                          , _0x485f68 = $(_0x41d3cd(0x299) + (_0x37febc ? _0x41d3cd(0x5eb) : '') + _0x41d3cd(0x55b) + _0x4a9cde[_0x41d3cd(0x430)] + _0x41d3cd(0x13f) + _0x4a9cde[_0x41d3cd(0x4fd)] + _0x41d3cd(0x28d) + (_0x37febc ? '#ffcc00' : _0x41d3cd(0x76f)) + _0x41d3cd(0x57f) + _0x4a9cde[_0x41d3cd(0x430)] + '\x22\x20alt=\x22' + _0x4a9cde[_0x41d3cd(0x4fd)] + _0x41d3cd(0x647));
                        _0x485f68[_0x41d3cd(0x335)](function() {
                            var _0x3cb23b = _0x41d3cd;
                            $(_0x3cb23b(0x63d))['removeClass'](_0x3cb23b(0x5eb))[_0x3cb23b(0x4fa)]('border-color', _0x3cb23b(0x76f)),
                            $(this)[_0x3cb23b(0x4b5)](_0x3cb23b(0x5eb))[_0x3cb23b(0x4fa)](_0x3cb23b(0x2a0), _0x3cb23b(0x27c));
                            const _0x1d34b8 = $(this)[_0x3cb23b(0x56d)](_0x3cb23b(0x6c5));
                            localStorage['setItem'](_0x3cb23b(0x143), _0x1d34b8),
                            _0x519f48(_0x1d34b8),
                            $(_0x3cb23b(0x55a))[_0x3cb23b(0x159)](_0x3cb23b(0x604) + _0x4a9cde['name']);
                        }),
                        _0x45ebc9[_0x41d3cd(0x527)](_0x485f68);
                    }));
                    $(_0x2e8ac7(0x2fa))['click'](function() {
                        var _0x296720 = _0x2e8ac7;
                        localStorage[_0x296720(0x167)]('selectedCursor'),
                        $(_0x296720(0x474))[_0x296720(0x4fa)](_0x296720(0x6c5), _0x296720(0x452)),
                        $(_0x296720(0x55a))[_0x296720(0x159)](_0x296720(0x16c)),
                        $(_0x296720(0x63d))[_0x296720(0x66f)](_0x296720(0x5eb))[_0x296720(0x4fa)](_0x296720(0x2a0), '#333333');
                    });
                    function _0x519f48(_0x3e6b4a) {
                        var _0x387568 = _0x2e8ac7;
                        $('#game-cont,\x20#game-canvas,\x20body')[_0x387568(0x4fa)]({
                            'cursor': _0x387568(0x4c5) + _0x3e6b4a + _0x387568(0x35d)
                        });
                    }
                    _0x444d21[_0x2e8ac7(0x4dd)] = _0x56b865['game'];
                    _0x444d21['hz'] && _0x17ea21 && (_0x17ea21['onwheel'] = function(_0x1a76fa) {
                        var _0xfdf8ef = _0x2e8ac7;
                        if (!_0x444d21['ctrl'] && (_0x444d21['z'] >= 0.2 && _0x444d21['z'] <= 0x19 || _0x444d21['z'] < 0.2 && _0x1a76fa[_0xfdf8ef(0x6cc)] < 0x0 || _0x444d21['z'] > 0x19 && _0x1a76fa[_0xfdf8ef(0x6cc)] > 0x0)) {
                            const _0x199882 = window[_0xfdf8ef(0x6cd)] && window[_0xfdf8ef(0x6cd)][_0xfdf8ef(0x64f)] ? window[_0xfdf8ef(0x6cd)][_0xfdf8ef(0x64f)] : 0.003;
                            _0x444d21['z'] = _0x444d21['z'] + _0x1a76fa['deltaY'] * -_0x199882,
                            _0x444d21['z'] < 0x1 && (_0x444d21['z'] = 0x1);
                        }
                    }
                    );
                    if (_0x444d21['mobile']) {
                        $('#config_mobile')[_0x2e8ac7(0x26f)](_0x56b865['mb']);
                        var _0x56fdde = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x621))
                          , _0x5bf75b = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x409))
                          , _0x285517 = document[_0x2e8ac7(0x374)]('joystick_mode')
                          , _0xb178d2 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x2a3))
                          , _0x17daa6 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x185))
                          , _0x265cc2 = document[_0x2e8ac7(0x374)](_0x2e8ac7(0x1c3));
                        _0x56fdde && (_0x56fdde[_0x2e8ac7(0x3e5)] = function() {
                            _0x142519(_0x56fdde),
                            _0x41077f(_0x5bf75b),
                            _0x2b4a0b(_0x285517),
                            _0x4f08c9(_0xb178d2),
                            _0x46605c(_0x265cc2),
                            _0x575639(_0x17daa6);
                        }
                        ),
                        _0x5bf75b && (_0x5bf75b[_0x2e8ac7(0x3e5)] = function() {
                            _0x142519(_0x56fdde),
                            _0x41077f(_0x5bf75b),
                            _0x2b4a0b(_0x285517),
                            _0x4f08c9(_0xb178d2),
                            _0x46605c(_0x265cc2),
                            _0x575639(_0x17daa6);
                        }
                        ),
                        _0x285517 && (_0x285517['onchange'] = function() {
                            _0x142519(_0x56fdde),
                            _0x41077f(_0x5bf75b),
                            _0x2b4a0b(_0x285517),
                            _0x4f08c9(_0xb178d2),
                            _0x46605c(_0x265cc2),
                            _0x575639(_0x17daa6);
                        }
                        ),
                        _0xb178d2 && (_0xb178d2[_0x2e8ac7(0x3e5)] = function() {
                            _0x142519(_0x56fdde),
                            _0x41077f(_0x5bf75b),
                            _0x2b4a0b(_0x285517),
                            _0x4f08c9(_0xb178d2),
                            _0x46605c(_0x265cc2),
                            _0x575639(_0x17daa6);
                        }
                        ),
                        _0x17daa6 && (_0x17daa6[_0x2e8ac7(0x3e5)] = function() {
                            _0x142519(_0x56fdde),
                            _0x41077f(_0x5bf75b),
                            _0x2b4a0b(_0x285517),
                            _0x4f08c9(_0xb178d2),
                            _0x46605c(_0x265cc2),
                            _0x575639(_0x17daa6);
                        }
                        ),
                        _0x265cc2 && (_0x265cc2[_0x2e8ac7(0x3e5)] = function() {
                            _0x142519(_0x56fdde),
                            _0x41077f(_0x5bf75b),
                            _0x2b4a0b(_0x285517),
                            _0x4f08c9(_0xb178d2),
                            _0x46605c(_0x265cc2),
                            _0x575639(_0x17daa6);
                        }
                        ),
                        _0x444d21[_0x2e8ac7(0x720)] ? ($(_0x2e8ac7(0x659))['val'](_0x444d21['joystick']['checked']),
                        $(_0x2e8ac7(0x2e1))[_0x2e8ac7(0x410)](_0x444d21[_0x2e8ac7(0x720)][_0x2e8ac7(0x5a0)]),
                        $('#joystick_mode')[_0x2e8ac7(0x410)](_0x444d21[_0x2e8ac7(0x720)][_0x2e8ac7(0x3bc)]),
                        $('#joystick_position')[_0x2e8ac7(0x410)](_0x444d21[_0x2e8ac7(0x720)]['positionMode']),
                        $(_0x2e8ac7(0x464))[_0x2e8ac7(0x410)](_0x444d21[_0x2e8ac7(0x720)][_0x2e8ac7(0x20b)]),
                        $(_0x2e8ac7(0x522))[_0x2e8ac7(0x410)](_0x444d21[_0x2e8ac7(0x720)][_0x2e8ac7(0x3d1)])) : ($(_0x2e8ac7(0x659))[_0x2e8ac7(0x410)](!![]),
                        $(_0x2e8ac7(0x2e1))[_0x2e8ac7(0x410)](_0x2e8ac7(0x2d4)),
                        $(_0x2e8ac7(0x1d5))[_0x2e8ac7(0x410)]('dynamic'),
                        $(_0x2e8ac7(0x250))[_0x2e8ac7(0x410)]('L'),
                        $(_0x2e8ac7(0x464))['val'](0x64),
                        $('#joystick_pxy')['val'](0x64)),
                        typeof _0x142519 === _0x2e8ac7(0x2a8) && _0x56fdde && _0x142519(_0x56fdde),
                        typeof _0x41077f === 'function' && _0x5bf75b && _0x41077f(_0x5bf75b),
                        typeof _0x2b4a0b === 'function' && _0x285517 && _0x2b4a0b(_0x285517),
                        typeof _0x4f08c9 === _0x2e8ac7(0x2a8) && _0xb178d2 && _0x4f08c9(_0xb178d2),
                        typeof _0x46605c === _0x2e8ac7(0x2a8) && _0x265cc2 && _0x46605c(_0x265cc2),
                        typeof _0x575639 === _0x2e8ac7(0x2a8) && _0x17daa6 && _0x575639(_0x17daa6);
                    }
                    function _0x575639(_0x417ab5) {
                        var _0xf3516d = _0x2e8ac7;
                        !_0x444d21['joystick'] && (_0x444d21[_0xf3516d(0x720)] = {}),
                        _0x444d21[_0xf3516d(0x720)][_0xf3516d(0x20b)] = parseInt(_0x417ab5['value']),
                        $(_0xf3516d(0x448))[_0xf3516d(0x159)](_0x417ab5[_0xf3516d(0x345)]),
                        localStorage[_0xf3516d(0x128)](_0xf3516d(0x432), JSON[_0xf3516d(0x608)](_0x444d21));
                    }
                    function _0x46605c(_0x487971) {
                        var _0x26e8a8 = _0x2e8ac7;
                        !_0x444d21[_0x26e8a8(0x720)] && (_0x444d21[_0x26e8a8(0x720)] = {}),
                        _0x444d21['joystick'][_0x26e8a8(0x3d1)] = parseInt(_0x487971['value']),
                        $(_0x26e8a8(0x145))['text'](_0x487971[_0x26e8a8(0x345)]),
                        localStorage[_0x26e8a8(0x128)](_0x26e8a8(0x432), JSON[_0x26e8a8(0x608)](_0x444d21));
                    }
                    typeof _0xa85e3 !== _0x2e8ac7(0x3fa) && typeof _0x9f96af !== 'undefined' && typeof _0x31aef3 !== _0x2e8ac7(0x3fa) && (typeof _0x58abd9 === _0x2e8ac7(0x2a8) && _0xa85e3['on'](_0x2e8ac7(0x5ec), _0x58abd9),
                    typeof _0x43b814 === 'function' && _0x9f96af['on'](_0x2e8ac7(0x5ec), _0x43b814),
                    typeof _0x5315ad === 'function' && _0x31aef3['on'](_0x2e8ac7(0x5ec), _0x5315ad)),
                    _0x444d21[_0x2e8ac7(0x1d6)] = _0x56b865['note'];
                } else
                    $(_0x2e8ac7(0x251))[_0x2e8ac7(0x3af)]();
                _0x56b865[_0x2e8ac7(0x2eb)] && _0x56b865[_0x2e8ac7(0x2eb)] != 'iq' && _0x56b865[_0x2e8ac7(0x2eb)] != _0x3b8a7a && (localStorage[_0x2e8ac7(0x128)]('oco', _0x56b865[_0x2e8ac7(0x2eb)]),
                localStorage[_0x2e8ac7(0x167)](_0x2e8ac7(0x1a3)),
                window[_0x2e8ac7(0x68f)]['reload']()),
                !_0x3b8a7a && localStorage[_0x2e8ac7(0x128)]('oco', 'iq');
            }
            localStorage[_0x2e8ac7(0x128)]('SaveGamewx', JSON[_0x2e8ac7(0x608)](_0x444d21)),
            $(document)[_0x2e8ac7(0x66c)](function() {
                var _0x3b4ede = _0x2e8ac7;
                if ($(_0x3b4ede(0x668))[_0x3b4ede(0x60c)] > 0x0) {
                    $('.sidebar-item')[_0x3b4ede(0x335)](function() {
                        var _0xdb751c = _0x3b4ede;
                        $(_0xdb751c(0x727))[_0xdb751c(0x66f)](_0xdb751c(0x5eb)),
                        $(this)[_0xdb751c(0x4b5)](_0xdb751c(0x5eb)),
                        $('.tab-content')['hide']();
                        const _0xae7b09 = $(this)[_0xdb751c(0x56d)]('tab') + _0xdb751c(0x45e);
                        $('#' + _0xae7b09)[_0xdb751c(0x288)]();
                    }),
                    $(_0x3b4ede(0x4c3))['show'](),
                    $(_0x3b4ede(0x602))['not'](_0x3b4ede(0x4c3))[_0x3b4ede(0x3af)]();
                    !_0x444d21[_0x3b4ede(0x62b)] && $(_0x3b4ede(0x625))['hide']();
                    function _0x370fc() {
                        var _0x38f92f = _0x3b4ede;
                        $(_0x38f92f(0x3ed))[_0x38f92f(0x1d4)](_0x38f92f(0x586)) ? $(_0x38f92f(0x6a4))[_0x38f92f(0x4b5)](_0x38f92f(0x5f6)) : $(_0x38f92f(0x6a4))[_0x38f92f(0x66f)](_0x38f92f(0x5f6));
                    }
                    _0x370fc(),
                    $(_0x3b4ede(0x464))['on'](_0x3b4ede(0x18c), function() {
                        var _0x4dee8b = _0x3b4ede
                          , _0x20caa1 = $(this)[_0x4dee8b(0x410)]();
                        $(_0x4dee8b(0x448))[_0x4dee8b(0x159)](_0x20caa1),
                        _0x40a48f(this);
                    }),
                    $(_0x3b4ede(0x522))['on'](_0x3b4ede(0x18c), function() {
                        var _0x20ab92 = _0x3b4ede
                          , _0x354e70 = $(this)[_0x20ab92(0x410)]();
                        $(_0x20ab92(0x145))['text'](_0x354e70),
                        _0x13e248(this);
                    }),
                    $('#wupiq')[_0x3b4ede(0x35a)](function() {
                        var _0x526d37 = _0x3b4ede;
                        _0x370fc(),
                        _0x444d21['iq'] = $(this)[_0x526d37(0x1d4)](_0x526d37(0x586)),
                        localStorage[_0x526d37(0x128)](_0x526d37(0x432), JSON[_0x526d37(0x608)](_0x444d21));
                    }),
                    $(_0x3b4ede(0x6b6))[_0x3b4ede(0x35a)](function() {
                        var _0xd3ab36 = _0x3b4ede;
                        _0x444d21[_0xd3ab36(0x500)] = $(this)[_0xd3ab36(0x410)](),
                        localStorage['setItem'](_0xd3ab36(0x432), JSON['stringify'](_0x444d21));
                    }),
                    $(_0x3b4ede(0x1ba))['change'](function() {
                        var _0x59a8f3 = _0x3b4ede;
                        _0x444d21['headshotMsg'] = $(this)[_0x59a8f3(0x410)](),
                        localStorage['setItem']('SaveGamewx', JSON[_0x59a8f3(0x608)](_0x444d21));
                    }),
                    $(_0x3b4ede(0x35c))[_0x3b4ede(0x35a)](function() {
                        var _0x1226da = _0x3b4ede;
                        _0x444d21[_0x1226da(0x769)] = $(this)[_0x1226da(0x1d4)]('checked'),
                        localStorage[_0x1226da(0x128)](_0x1226da(0x432), JSON[_0x1226da(0x608)](_0x444d21));
                    }),
                    $(_0x3b4ede(0x705))['change'](function() {
                        var _0x46788f = _0x3b4ede;
                        _0x444d21[_0x46788f(0x17b)] = $(this)[_0x46788f(0x1d4)](_0x46788f(0x586)),
                        localStorage[_0x46788f(0x128)](_0x46788f(0x432), JSON[_0x46788f(0x608)](_0x444d21));
                    }),
                    $(_0x3b4ede(0x5b2))[_0x3b4ede(0x35a)](function() {
                        var _0x1090b7 = _0x3b4ede;
                        _0x444d21[_0x1090b7(0x76e)] = $(this)[_0x1090b7(0x410)](),
                        localStorage['setItem'](_0x1090b7(0x432), JSON['stringify'](_0x444d21));
                    }),
                    $(_0x3b4ede(0x5c6))[_0x3b4ede(0x35a)](function() {
                        var _0x4380c9 = _0x3b4ede;
                        _0x444d21[_0x4380c9(0x542)] = $(this)[_0x4380c9(0x410)](),
                        localStorage[_0x4380c9(0x128)](_0x4380c9(0x432), JSON[_0x4380c9(0x608)](_0x444d21));
                    }),
                    $(_0x3b4ede(0x583))['on'](_0x3b4ede(0x18c), function() {
                        var _0x579193 = _0x3b4ede;
                        $(this)[_0x579193(0x410)]() !== '' ? (_0x444d21[_0x579193(0x424)] = _0x579193(0x6ee),
                        _0x444d21['killCustomText'] = $(this)[_0x579193(0x410)]()) : _0x444d21['killMsgType'] = 'preset',
                        localStorage[_0x579193(0x128)]('SaveGamewx', JSON[_0x579193(0x608)](_0x444d21));
                    }),
                    $(_0x3b4ede(0x6cb))['on']('input', function() {
                        var _0x56efe7 = _0x3b4ede;
                        $(this)['val']() !== '' ? (_0x444d21[_0x56efe7(0x2a2)] = _0x56efe7(0x6ee),
                        _0x444d21['headshotCustomText'] = $(this)[_0x56efe7(0x410)]()) : _0x444d21[_0x56efe7(0x2a2)] = 'preset',
                        localStorage['setItem'](_0x56efe7(0x432), JSON[_0x56efe7(0x608)](_0x444d21));
                    });
                    _0x444d21[_0x3b4ede(0x500)] && $(_0x3b4ede(0x6b6))[_0x3b4ede(0x410)](_0x444d21[_0x3b4ede(0x500)]);
                    _0x444d21[_0x3b4ede(0x706)] && $(_0x3b4ede(0x1ba))[_0x3b4ede(0x410)](_0x444d21['headshotMsg']);
                    _0x444d21['killMsgType'] === _0x3b4ede(0x6ee) && _0x444d21[_0x3b4ede(0x642)] && $(_0x3b4ede(0x583))[_0x3b4ede(0x410)](_0x444d21['killCustomText'] || '');
                    _0x444d21['headshotMsgType'] === _0x3b4ede(0x6ee) && _0x444d21[_0x3b4ede(0x2be)] && $(_0x3b4ede(0x6cb))[_0x3b4ede(0x410)](_0x444d21[_0x3b4ede(0x2be)] || '');
                    $(_0x3b4ede(0x35c))[_0x3b4ede(0x1d4)]('checked', _0x444d21['showKillName'] !== ![]),
                    $(_0x3b4ede(0x705))[_0x3b4ede(0x1d4)](_0x3b4ede(0x586), _0x444d21[_0x3b4ede(0x17b)] !== ![]),
                    $(_0x3b4ede(0x5b2))[_0x3b4ede(0x410)](_0x444d21[_0x3b4ede(0x76e)] || _0x3b4ede(0x29a)),
                    $(_0x3b4ede(0x5c6))[_0x3b4ede(0x410)](_0x444d21['headshotNamePos'] || _0x3b4ede(0x29a)),
                    $(_0x3b4ede(0x69a))[_0x3b4ede(0x1d4)]('checked', wormxObjects['soundEnabled'] || _0x444d21['vh']),
                    $(_0x3b4ede(0x3b2))[_0x3b4ede(0x410)](wormxObjects['soundEffect'] || _0x3b4ede(0x5db)),
                    $(_0x3b4ede(0x482))['val'](wormxObjects[_0x3b4ede(0x439)] || 0x32),
                    $(_0x3b4ede(0x67a))['text'](wormxObjects[_0x3b4ede(0x439)] || 0x32);
                    let _0x2ddb1e = null;
                    function _0x207518(_0x20973c, _0x9c2e1f) {
                        var _0x5abd97 = _0x3b4ede;
                        _0x2ddb1e && (_0x2ddb1e['pause'](),
                        _0x2ddb1e[_0x5abd97(0x5d9)] = 0x0),
                        _0x20973c[_0x5abd97(0x2ab)] = _0x9c2e1f / 0x64,
                        _0x20973c['currentTime'] = 0x0,
                        _0x20973c[_0x5abd97(0x140)](),
                        _0x2ddb1e = _0x20973c;
                    }
                    $('#wupsound')[_0x3b4ede(0x35a)](function() {
                        var _0x1d4471 = _0x3b4ede;
                        wormxObjects['soundEnabled'] = $(this)[_0x1d4471(0x1d4)]('checked'),
                        _0x444d21['vh'] = $(this)[_0x1d4471(0x1d4)](_0x1d4471(0x586)),
                        _0x37dae5(),
                        localStorage['setItem']('SaveGamewx', JSON[_0x1d4471(0x608)](_0x444d21));
                        if (wormxObjects['soundEnabled']) {
                            const _0x460056 = document['getElementById']('s_h');
                            _0x460056 && _0x207518(_0x460056, wormxObjects['soundVolume']);
                        }
                    }),
                    $('#sound_effect_selector')['change'](function() {
                        var _0x5670a7 = _0x3b4ede;
                        wormxObjects['soundEffect'] = $(this)[_0x5670a7(0x410)](),
                        _0x37dae5();
                        const _0x8557a9 = document[_0x5670a7(0x374)](_0x5670a7(0x59a));
                        if (_0x8557a9) {
                            const _0x1dcc43 = _0x8557a9[_0x5670a7(0x297)](_0x5670a7(0x1bd));
                            _0x1dcc43 && (_0x1dcc43[_0x5670a7(0x39e)] = wormxObjects[_0x5670a7(0x51a)],
                            _0x8557a9[_0x5670a7(0x2e6)](),
                            wormxObjects[_0x5670a7(0x544)] && setTimeout( () => {
                                var _0x7da07a = _0x5670a7;
                                _0x207518(_0x8557a9, wormxObjects[_0x7da07a(0x439)]);
                            }
                            , 0x64));
                        }
                    }),
                    $(_0x3b4ede(0x5b8))[_0x3b4ede(0x35a)](function() {
                        var _0x54ddb9 = _0x3b4ede;
                        const _0x2c825a = $(this)[_0x54ddb9(0x410)]()
                          , _0x227512 = document[_0x54ddb9(0x374)](_0x54ddb9(0x198));
                        if (_0x227512) {
                            const _0x3dc25e = _0x227512[_0x54ddb9(0x297)](_0x54ddb9(0x1bd));
                            _0x3dc25e && (_0x3dc25e[_0x54ddb9(0x39e)] = _0x2c825a,
                            _0x227512['load'](),
                            wormxObjects[_0x54ddb9(0x544)] && setTimeout( () => {
                                var _0x17b988 = _0x54ddb9;
                                _0x207518(_0x227512, wormxObjects[_0x17b988(0x439)]);
                            }
                            , 0x64));
                        }
                        !wormxObjects['monsterKillSound'] && (wormxObjects[_0x54ddb9(0x2cf)] = {}),
                        wormxObjects[_0x54ddb9(0x2cf)] = _0x2c825a,
                        _0x37dae5();
                    }),
                    $('#volume_slider')['on'](_0x3b4ede(0x18c), function() {
                        var _0x3c46b5 = _0x3b4ede;
                        wormxObjects[_0x3c46b5(0x439)] = parseInt($(this)[_0x3c46b5(0x410)]()),
                        $(_0x3c46b5(0x67a))[_0x3c46b5(0x159)](wormxObjects[_0x3c46b5(0x439)]);
                        const _0x43cfaf = document[_0x3c46b5(0x717)](_0x3c46b5(0x48c));
                        _0x43cfaf[_0x3c46b5(0x58d)](_0x4ec3b1 => {
                            var _0x30b339 = _0x3c46b5;
                            _0x4ec3b1[_0x30b339(0x2ab)] = wormxObjects['soundVolume'] / 0x64;
                        }
                        );
                        if (wormxObjects['soundEnabled']) {
                            const _0x18802e = document[_0x3c46b5(0x374)](_0x3c46b5(0x59a));
                            _0x18802e && _0x207518(_0x18802e, wormxObjects[_0x3c46b5(0x439)]);
                        }
                        _0x37dae5();
                    });
                    !window[_0x3b4ede(0x5c0)] && (window[_0x3b4ede(0x5c0)] = {
                        'enabled': _0x444d21['ls'] || ![],
                        'color': 0xffd700,
                        'opacity': 0.5,
                        'thickness': 0.1
                    });
                    try {
                        const _0x50c636 = JSON[_0x3b4ede(0x75f)](localStorage['getItem']('laserOptions'));
                        _0x50c636 && (window[_0x3b4ede(0x5c0)] = _0x50c636);
                    } catch (_0x1a7f25) {
                        console[_0x3b4ede(0x6e5)](_0x3b4ede(0x5a4), _0x1a7f25);
                    }
                    $('#Laserup')[_0x3b4ede(0x1d4)]('checked', window[_0x3b4ede(0x5c0)][_0x3b4ede(0x1b3)]);
                    const _0x1b2bee = '#' + window[_0x3b4ede(0x5c0)][_0x3b4ede(0x5a0)][_0x3b4ede(0x132)](0x10)[_0x3b4ede(0x354)](0x6, '0');
                    $(_0x3b4ede(0x5aa))['val'](_0x1b2bee),
                    $(_0x3b4ede(0x5ed))[_0x3b4ede(0x410)](window['laserOptions']['opacity'] * 0x64),
                    $(_0x3b4ede(0x172))[_0x3b4ede(0x159)](Math['round'](window[_0x3b4ede(0x5c0)][_0x3b4ede(0x4b9)] * 0x64)),
                    $(_0x3b4ede(0x191))[_0x3b4ede(0x35a)](function() {
                        var _0x42db96 = _0x3b4ede;
                        window['laserOptions'][_0x42db96(0x1b3)] = $(this)['prop'](_0x42db96(0x586)),
                        _0x444d21['ls'] = $(this)[_0x42db96(0x1d4)](_0x42db96(0x586)),
                        localStorage[_0x42db96(0x128)](_0x42db96(0x5c0), JSON[_0x42db96(0x608)](window[_0x42db96(0x5c0)])),
                        localStorage[_0x42db96(0x128)](_0x42db96(0x432), JSON['stringify'](_0x444d21));
                    }),
                    $('#laser_color_picker')[_0x3b4ede(0x35a)](function() {
                        var _0x36dc48 = _0x3b4ede;
                        const _0x113421 = $(this)[_0x36dc48(0x410)]();
                        window[_0x36dc48(0x5c0)][_0x36dc48(0x5a0)] = parseInt(_0x113421[_0x36dc48(0x390)]('#', '0x')),
                        localStorage[_0x36dc48(0x128)]('laserOptions', JSON[_0x36dc48(0x608)](window['laserOptions']));
                    }),
                    $(_0x3b4ede(0x5ed))['on'](_0x3b4ede(0x18c), function() {
                        var _0x49c732 = _0x3b4ede;
                        const _0x31fede = parseInt($(this)['val']());
                        window[_0x49c732(0x5c0)][_0x49c732(0x4b9)] = _0x31fede / 0x64,
                        $(_0x49c732(0x172))[_0x49c732(0x159)](_0x31fede),
                        localStorage[_0x49c732(0x128)](_0x49c732(0x5c0), JSON['stringify'](window[_0x49c732(0x5c0)]));
                    }),
                    $(_0x3b4ede(0x127))[_0x3b4ede(0x335)](function() {
                        var _0x5bd156 = _0x3b4ede;
                        window['laserOptions'] = {
                            'enabled': _0x444d21['ls'],
                            'color': 0xffd700,
                            'opacity': 0.5,
                            'thickness': 0.1
                        },
                        localStorage['setItem'](_0x5bd156(0x5c0), JSON['stringify'](window['laserOptions'])),
                        $('#laser_color_picker')[_0x5bd156(0x410)]('#FFD700'),
                        $(_0x5bd156(0x5ed))[_0x5bd156(0x410)](0x32),
                        $(_0x5bd156(0x172))['text'](0x32);
                    }),
                    $(document)[_0x3b4ede(0x69d)](function(_0x59e5b9) {
                        var _0x2d2eaa = _0x3b4ede;
                        _0x59e5b9[_0x2d2eaa(0x4df)] === 0x4c && $(_0x2d2eaa(0x191))[_0x2d2eaa(0x1d4)]('checked', !$(_0x2d2eaa(0x191))[_0x2d2eaa(0x1d4)](_0x2d2eaa(0x586)))['trigger'](_0x2d2eaa(0x35a));
                        if (_0x59e5b9[_0x2d2eaa(0x4df)] === 0x4f) {
                            let _0x77d433 = parseInt($(_0x2d2eaa(0x5ed))[_0x2d2eaa(0x410)]());
                            _0x77d433 < 0x64 && $(_0x2d2eaa(0x5ed))['val'](_0x77d433 + 0xa)[_0x2d2eaa(0x295)](_0x2d2eaa(0x18c));
                        }
                        if (_0x59e5b9['which'] === 0x50) {
                            let _0x536dad = parseInt($('#laser_opacity_slider')[_0x2d2eaa(0x410)]());
                            _0x536dad > 0xa && $(_0x2d2eaa(0x5ed))[_0x2d2eaa(0x410)](_0x536dad - 0xa)['trigger'](_0x2d2eaa(0x18c));
                        }
                    }),
                    $(_0x3b4ede(0x180))[_0x3b4ede(0x1d4)](_0x3b4ede(0x586), wormxObjects[_0x3b4ede(0x3b4)] >= 0x1),
                    $(_0x3b4ede(0x690))[_0x3b4ede(0x410)](wormxObjects['smoothCamera']),
                    $(_0x3b4ede(0x702))['text'](wormxObjects[_0x3b4ede(0x18b)]),
                    $(_0x3b4ede(0x416))[_0x3b4ede(0x410)](wormxObjects[_0x3b4ede(0x64f)]),
                    $(_0x3b4ede(0x767))['text'](wormxObjects[_0x3b4ede(0x64f)]),
                    $(_0x3b4ede(0x418))[_0x3b4ede(0x410)](wormxObjects['PortionSize']),
                    $(_0x3b4ede(0x308))['text'](wormxObjects[_0x3b4ede(0x3ae)]),
                    $('#portion_aura_slider')['val'](wormxObjects[_0x3b4ede(0x5f0)]),
                    $(_0x3b4ede(0x1ff))[_0x3b4ede(0x159)](wormxObjects['PortionAura']),
                    $(_0x3b4ede(0x4fc))[_0x3b4ede(0x410)](wormxObjects[_0x3b4ede(0x3b0)]),
                    $(_0x3b4ede(0x234))[_0x3b4ede(0x159)](wormxObjects[_0x3b4ede(0x3b0)]),
                    $(_0x3b4ede(0x389))['val'](wormxObjects[_0x3b4ede(0x4d1)]),
                    $(_0x3b4ede(0x12a))[_0x3b4ede(0x159)](wormxObjects[_0x3b4ede(0x4d1)]),
                    $(_0x3b4ede(0x180))[_0x3b4ede(0x35a)](function() {
                        var _0x588cba = _0x3b4ede;
                        wormxObjects[_0x588cba(0x3b4)] = $(this)[_0x588cba(0x1d4)](_0x588cba(0x586)) ? 0x1 : 0.0025,
                        _0x37dae5();
                    }),
                    $(_0x3b4ede(0x690))['on'](_0x3b4ede(0x18c), function() {
                        var _0x435d9a = _0x3b4ede;
                        const _0x1b34f9 = parseFloat($(this)[_0x435d9a(0x410)]());
                        wormxObjects[_0x435d9a(0x18b)] = _0x1b34f9,
                        $(_0x435d9a(0x702))['text'](_0x1b34f9),
                        _0x37dae5();
                    }),
                    $('#zoom_speed_slider')['on']('input', function() {
                        var _0xaeaa77 = _0x3b4ede;
                        const _0x5e186a = parseFloat($(this)['val']());
                        wormxObjects['zoomSpeed'] = _0x5e186a,
                        $(_0xaeaa77(0x767))[_0xaeaa77(0x159)](_0x5e186a),
                        _0x37dae5(),
                        _0x444d21['hz'] && _0x17ea21 && _0x17ea21[_0xaeaa77(0x2ed)] && (_0x17ea21[_0xaeaa77(0x2ed)] = function(_0x4ac397) {
                            var _0x5c1e24 = _0xaeaa77;
                            !_0x444d21['ctrl'] && (_0x444d21['z'] >= 0.2 && _0x444d21['z'] <= 0x19 || _0x444d21['z'] < 0.2 && _0x4ac397[_0x5c1e24(0x6cc)] < 0x0 || _0x444d21['z'] > 0x19 && _0x4ac397['deltaY'] > 0x0) && (_0x444d21['z'] = _0x444d21['z'] + _0x4ac397['deltaY'] * -wormxObjects[_0x5c1e24(0x64f)],
                            _0x444d21['z'] < 0x1 && (_0x444d21['z'] = 0x1));
                        }
                        );
                    }),
                    $(_0x3b4ede(0x418))['on']('input', function() {
                        var _0xab92e6 = _0x3b4ede;
                        const _0x5193e0 = parseFloat($(this)[_0xab92e6(0x410)]());
                        wormxObjects[_0xab92e6(0x3ae)] = _0x5193e0,
                        $(_0xab92e6(0x308))[_0xab92e6(0x159)](_0x5193e0),
                        _0x37dae5();
                    }),
                    $(_0x3b4ede(0x670))['on'](_0x3b4ede(0x18c), function() {
                        var _0x64ddb6 = _0x3b4ede;
                        const _0x4ac404 = parseFloat($(this)[_0x64ddb6(0x410)]());
                        wormxObjects[_0x64ddb6(0x5f0)] = _0x4ac404,
                        $(_0x64ddb6(0x1ff))[_0x64ddb6(0x159)](_0x4ac404),
                        _0x37dae5();
                    }),
                    $(_0x3b4ede(0x4fc))['on'](_0x3b4ede(0x18c), function() {
                        var _0x4f9cc9 = _0x3b4ede;
                        const _0x1b78f1 = parseFloat($(this)['val']());
                        wormxObjects[_0x4f9cc9(0x3b0)] = _0x1b78f1,
                        $(_0x4f9cc9(0x234))[_0x4f9cc9(0x159)](_0x1b78f1),
                        _0x37dae5();
                    }),
                    $(_0x3b4ede(0x389))['on'](_0x3b4ede(0x18c), function() {
                        var _0x34a976 = _0x3b4ede;
                        const _0x36239e = parseFloat($(this)[_0x34a976(0x410)]());
                        wormxObjects['FoodShadow'] = _0x36239e,
                        $(_0x34a976(0x12a))[_0x34a976(0x159)](_0x36239e),
                        _0x37dae5();
                    }),
                    $('.reset-btn')[_0x3b4ede(0x335)](function() {
                        var _0x10d5d5 = _0x3b4ede;
                        const _0x47476d = $(this)[_0x10d5d5(0x56d)](_0x10d5d5(0x588))
                          , _0x3a6a7d = $(this)['data']('default');
                        if (_0x47476d && _0x3a6a7d !== undefined)
                            switch (_0x47476d) {
                            case _0x10d5d5(0x221):
                                $(_0x10d5d5(0x690))[_0x10d5d5(0x410)](_0x3a6a7d)[_0x10d5d5(0x295)](_0x10d5d5(0x18c));
                                break;
                            case 'portion_size':
                                $(_0x10d5d5(0x418))[_0x10d5d5(0x410)](_0x3a6a7d)['trigger']('input');
                                break;
                            case _0x10d5d5(0x714):
                                $('#portion_aura_slider')['val'](_0x3a6a7d)[_0x10d5d5(0x295)](_0x10d5d5(0x18c));
                                break;
                            case 'food_size':
                                $(_0x10d5d5(0x4fc))[_0x10d5d5(0x410)](_0x3a6a7d)[_0x10d5d5(0x295)]('input');
                                break;
                            case _0x10d5d5(0x530):
                                $('#food_shadow_slider')[_0x10d5d5(0x410)](_0x3a6a7d)[_0x10d5d5(0x295)]('input');
                                break;
                            case _0x10d5d5(0x1aa):
                                $('#zoom_speed_slider')['val'](_0x3a6a7d)['trigger'](_0x10d5d5(0x18c));
                                break;
                            }
                    });
                    function _0x3f87c7() {
                        const _0x106833 = setInterval( () => {
                            var _0xfc39ea = _0x1792;
                            if (window[_0xfc39ea(0x6cf)] && window[_0xfc39ea(0x6cf)][_0xfc39ea(0x66b)] && window[_0xfc39ea(0x372)] && window['config'][_0xfc39ea(0x66b)] && window[_0xfc39ea(0x751)] && window['savedGame'][_0xfc39ea(0x66b)]) {
                                clearInterval(_0x106833);
                                const _0x574ab9 = window[_0xfc39ea(0x6cf)][_0xfc39ea(0x66b)]['Qj'];
                                window[_0xfc39ea(0x6cf)][_0xfc39ea(0x66b)]['Qj'] = function(_0x2b57f8, _0x562fc6, _0x28d6bf) {
                                    var _0xa4464d = _0xfc39ea;
                                    this['Hj'] = window[_0xa4464d(0x2de)]['ga'](this['Hj'], this['Fj'], _0x562fc6, window[_0xa4464d(0x6cd)][_0xa4464d(0x3b4)]),
                                    this['Ij'] = window[_0xa4464d(0x2de)]['ga'](this['Ij'], this['Gj'], _0x562fc6, 0.0025),
                                    this['Nj']['Bg'](this, _0x2b57f8, _0x562fc6, _0x28d6bf);
                                }
                                ;
                                const _0x1c6b2b = window[_0xfc39ea(0x372)][_0xfc39ea(0x66b)]['Bg'];
                                window[_0xfc39ea(0x372)][_0xfc39ea(0x66b)]['Bg'] = function(_0x620bf6, _0x5ef12f, _0x536c92, _0x4a809f) {
                                    var _0x493444 = _0xfc39ea;
                                    if (!_0x4a809f(_0x620bf6['Hj'], _0x620bf6['Ij'])) {
                                        this['Wh']['Cd']();
                                        return;
                                    }
                                    var _0x2252c5 = _0x620bf6['Kj'] * (0x1 + window[_0x493444(0x2de)]['pa'](_0x620bf6['Mj'] + _0x5ef12f / 0xc8) * 0.3);
                                    _0x620bf6['Ej'] ? this['Wh']['Ad'](_0x620bf6['Hj'], _0x620bf6['Ij'], window[_0x493444(0x6cd)]['PortionSize'] * _0x620bf6['Jj'], _0x620bf6['Lj'] * 0x1, window[_0x493444(0x6cd)][_0x493444(0x5f0)] * _0x2252c5, window[_0x493444(0x6cd)]['PortionTransparent'] * _0x620bf6['Lj']) : this['Wh']['Ad'](_0x620bf6['Hj'], _0x620bf6['Ij'], window[_0x493444(0x6cd)][_0x493444(0x3b0)] * _0x620bf6['Jj'], _0x620bf6['Lj'] * 0x1, window[_0x493444(0x6cd)]['FoodShadow'] * _0x2252c5, window[_0x493444(0x6cd)]['FoodTransparent'] * _0x620bf6['Lj']);
                                }
                                ;
                                const _0x42a980 = window[_0xfc39ea(0x751)][_0xfc39ea(0x66b)]['ug'];
                                window[_0xfc39ea(0x751)]['prototype']['ug'] = function(_0x3b49f9, _0x288844) {
                                    var _0xa3f99e = _0xfc39ea;
                                    const _0x305086 = _0x42a980[_0xa3f99e(0x31e)](this, arguments);
                                    if (this['Fh'] && typeof this['Fh']['x'] !== _0xa3f99e(0x3fa) && window[_0xa3f99e(0x326)] && window[_0xa3f99e(0x326)]['Mh']) {
                                        const _0xe3ca36 = window[_0xa3f99e(0x326)]['Mh']['Oh']();
                                        _0xe3ca36 && typeof _0xe3ca36['_a'] !== _0xa3f99e(0x3fa) && (this['Fh']['x'] = window['decoder']['ja'](this['Fh']['x'], _0xe3ca36['_a'], _0x288844, window['wormxObjects'][_0xa3f99e(0x18b)], 33.333));
                                    }
                                    return _0x305086;
                                }
                                ,
                                !window['showHeadshotMessage'] && (window['showHeadshotMessage'] = function(_0x560799, _0xc1a8df) {
                                    var _0x1735ec = _0xfc39ea;
                                    if (!document['getElementById'](_0x1735ec(0x564))) {
                                        const _0x548d10 = document[_0x1735ec(0x2ea)](_0x1735ec(0x2ec));
                                        _0x548d10['id'] = _0x1735ec(0x564),
                                        _0x548d10[_0x1735ec(0x75d)][_0x1735ec(0x722)] = _0x1735ec(0x429),
                                        _0x548d10[_0x1735ec(0x75d)]['top'] = _0x1735ec(0x26e),
                                        _0x548d10[_0x1735ec(0x75d)][_0x1735ec(0x4e0)] = _0x1735ec(0x18e),
                                        _0x548d10['style'][_0x1735ec(0x3a5)] = _0x1735ec(0x1b4),
                                        _0x548d10[_0x1735ec(0x75d)]['color'] = _0xc1a8df ? _0x1735ec(0x770) : '#ffcc00',
                                        _0x548d10[_0x1735ec(0x75d)][_0x1735ec(0x265)] = '32px',
                                        _0x548d10['style']['fontWeight'] = _0x1735ec(0x742),
                                        _0x548d10[_0x1735ec(0x75d)][_0x1735ec(0x781)] = '2px\x202px\x204px\x20rgba(0,\x200,\x200,\x200.7)',
                                        _0x548d10[_0x1735ec(0x75d)][_0x1735ec(0x2f2)] = _0x1735ec(0x5e1),
                                        _0x548d10[_0x1735ec(0x75d)][_0x1735ec(0x4b9)] = '0',
                                        _0x548d10[_0x1735ec(0x75d)]['transition'] = _0x1735ec(0x6b1),
                                        document['body'][_0x1735ec(0x513)](_0x548d10);
                                    }
                                    const _0x1ca614 = _0xc1a8df ? _0x444d21[_0x1735ec(0x2a2)] : _0x444d21['killMsgType']
                                      , _0x5d0e78 = document[_0x1735ec(0x374)](_0x1735ec(0x564));
                                    let _0x8267db = ''
                                      , _0x56c6f0 = _0xc1a8df ? _0x444d21[_0x1735ec(0x17b)] : _0x444d21[_0x1735ec(0x769)]
                                      , _0x1cd98d = _0xc1a8df ? _0x444d21[_0x1735ec(0x542)] : _0x444d21['killNamePos'];
                                    _0x1ca614 === _0x1735ec(0x6ee) ? _0x8267db = _0xc1a8df ? _0x444d21[_0x1735ec(0x2be)] : _0x444d21[_0x1735ec(0x642)] : _0x8267db = _0xc1a8df ? _0x444d21[_0x1735ec(0x706)] : _0x444d21['killMsg'];
                                    _0x56c6f0 && _0x560799 && (_0x1cd98d === _0x1735ec(0x579) ? _0x8267db = _0x560799 + '\x20' + _0x8267db : _0x8267db = _0x8267db + '\x20' + _0x560799);
                                    _0x5d0e78[_0x1735ec(0x3a8)] = _0x8267db,
                                    _0x5d0e78[_0x1735ec(0x75d)][_0x1735ec(0x5a0)] = _0xc1a8df ? _0x1735ec(0x770) : '#ffcc00',
                                    _0x5d0e78[_0x1735ec(0x75d)][_0x1735ec(0x4b9)] = '1';
                                    if (_0xc1a8df && wormxObjects[_0x1735ec(0x544)]) {
                                        const _0x25b058 = document[_0x1735ec(0x374)](_0x1735ec(0x59a));
                                        _0x25b058 && (_0x25b058[_0x1735ec(0x2ab)] = wormxObjects[_0x1735ec(0x439)] / 0x64,
                                        _0x25b058[_0x1735ec(0x5d9)] = 0x0,
                                        _0x25b058[_0x1735ec(0x140)]());
                                    }
                                }
                                ),
                                console[_0xfc39ea(0x680)](_0xfc39ea(0x596));
                            }
                        }
                        , 0x3e8);
                    }
                    setTimeout(_0x3f87c7, 0x3e8),
                    window['playHeadshotSound'] = function() {
                        var _0x3fd43f = _0x3b4ede;
                        if (wormxObjects[_0x3fd43f(0x544)]) {
                            const _0x292415 = document[_0x3fd43f(0x374)](_0x3fd43f(0x59a));
                            _0x292415 && (_0x292415['volume'] = wormxObjects[_0x3fd43f(0x439)] / 0x64,
                            _0x292415['currentTime'] = 0x0,
                            _0x292415['play']());
                        }
                    }
                    ,
                    $(_0x3b4ede(0x5ee))[_0x3b4ede(0x335)](function() {
                        var _0x3bc23d = _0x3b4ede;
                        localStorage[_0x3bc23d(0x167)](_0x3bc23d(0x3f9)),
                        localStorage[_0x3bc23d(0x167)]('custom_skin'),
                        window[_0x3bc23d(0x68f)][_0x3bc23d(0x1ed)]();
                    }),
                    $(_0x3b4ede(0x661))[_0x3b4ede(0x35a)](function(_0x1d180b) {
                        var _0x5b0dfd = _0x3b4ede;
                        const _0x9ec249 = _0x1d180b[_0x5b0dfd(0x6d5)]['files'][0x0];
                        if (_0x9ec249) {
                            const _0x1bf139 = new FileReader();
                            _0x1bf139[_0x5b0dfd(0x68d)] = function(_0x2e26c0) {
                                var _0x16c1c2 = _0x5b0dfd;
                                try {
                                    const _0x1c445d = JSON[_0x16c1c2(0x75f)](_0x2e26c0[_0x16c1c2(0x6d5)][_0x16c1c2(0x420)]);
                                    localStorage['setItem'](_0x16c1c2(0x6c0), JSON['stringify'](_0x1c445d)),
                                    alert('Skin\x20loaded\x20successfully!');
                                } catch (_0x3ada54) {
                                    alert(_0x16c1c2(0x152) + _0x3ada54[_0x16c1c2(0x41b)]);
                                }
                            }
                            ,
                            _0x1bf139[_0x5b0dfd(0x1ea)](_0x9ec249);
                        }
                    });
                }
                window[_0x3b4ede(0x71a)] && setTimeout(function() {
                    var _0x4db1a1 = _0x3b4ede;
                    window[_0x4db1a1(0x71a)][_0x4db1a1(0x1a0)]();
                }, 0x1f4),
                setTimeout( () => {
                    var _0x1d6f8a = _0x3b4ede;
                    window[_0x1d6f8a(0x2f7)] && typeof window[_0x1d6f8a(0x2f7)][_0x1d6f8a(0x1a0)] === _0x1d6f8a(0x2a8) && window['sectorSystem']['init']();
                }
                , 0x3e8),
                $('.sidebar-item[data-tab=\x27backgrounds\x27]')['on']('click', function() {
                    var _0x2b58e3 = _0x3b4ede;
                    window['sectorSystem'] && typeof window[_0x2b58e3(0x2f7)][_0x2b58e3(0x29f)] === 'function' && setTimeout( () => window['sectorSystem'][_0x2b58e3(0x29f)](), 0x64);
                });
            });
        };
        Ysw = async function(_0x2654cd) {
            var _0x205c34 = _0x5b8a80
              , _0x5b3efb = await _0x2654cd;
            try {
                _0x444d21['gg'] = [],
                _0x444d21['sg'] = [];
                var _0x3f5842 = 0x0;
                if (_0x4ba5d2 && (_0x4ba5d2 = JSON[_0x205c34(0x75f)](_0x4ba5d2))[_0x205c34(0x63c)]) {
                    for (var _0x3f0569 in _0x4ba5d2[_0x205c34(0x63c)]['textureDict']) {
                        _0x4ba5d2[_0x205c34(0x63c)]['textureDict'][_0x3f0569][_0x205c34(0x13e)][_0x205c34(0x6e4)](_0x205c34(0x2bf)) == -0x1 && (_0x4ba5d2[_0x205c34(0x63c)]['textureDict'][_0x3f0569][_0x205c34(0x13e)] = _0x205c34(0x2bf) + _0x4ba5d2[_0x205c34(0x63c)][_0x205c34(0x1cb)][_0x3f0569][_0x205c34(0x13e)]['substr'](_0x4ba5d2[_0x205c34(0x63c)]['textureDict'][_0x3f0569][_0x205c34(0x13e)]['length'] - _0x444d21['c_v'], _0x444d21['c_v']) + _0x4ba5d2[_0x205c34(0x63c)][_0x205c34(0x1cb)][_0x3f0569][_0x205c34(0x13e)][_0x205c34(0x673)](0x0, _0x4ba5d2[_0x205c34(0x63c)][_0x205c34(0x1cb)][_0x3f0569][_0x205c34(0x13e)]['length'] - _0x444d21[_0x205c34(0x5c2)])),
                        _0x5b3efb[_0x205c34(0x1cb)][_0x3f0569] = _0x4ba5d2[_0x205c34(0x63c)]['textureDict'][_0x3f0569];
                    }
                    ;for (let _0x1568b1 in _0x4ba5d2['wear'][_0x205c34(0x16a)]) {
                        _0x5b3efb[_0x205c34(0x16a)][_0x1568b1] = _0x4ba5d2['wear'][_0x205c34(0x16a)][_0x1568b1],
                        _0x5b3efb[(_0x3f0569 = _0x5b3efb['regionDict'][_0x1568b1])[_0x205c34(0x57b)]][_0x3f0569['id']] = _0x3f0569['obj'],
                        _0x5b3efb[_0x3f0569[_0x205c34(0x6d3)]][_0x205c34(0x1bc)]([_0x3f0569['id']]);
                    }
                }
                ;if (_0x42e18c) {
                    if ((_0x42e18c = JSON[_0x205c34(0x75f)](_0x42e18c))['csg']) {
                        var _0x1c8aa6 = 0x0
                          , _0x4b3ca9 = ![]
                          , _0x16a66c = 0x0;
                        for (var _0x490742 in _0x42e18c['csg']['0']) {
                            for (var _0x11b3e7 = _0x42e18c[_0x205c34(0x114)]['1'][_0x490742][_0x205c34(0x5d5)]('|'), _0x38a3a4 = 0x0; _0x38a3a4 < _0x11b3e7['length']; _0x38a3a4++) {
                                _0x5b3efb[_0x205c34(0x1cb)]['t_wup_' + (_0x444d21['g'] / 0x9 * 0x3e8 + _0x16a66c)] = {
                                    'custom': !![],
                                    'file': 'data:image/png;base64,' + _0x11b3e7[_0x38a3a4][_0x205c34(0x673)](_0x11b3e7[_0x38a3a4]['length'] - _0x444d21[_0x205c34(0x5c2)], _0x444d21[_0x205c34(0x5c2)]) + _0x11b3e7[_0x38a3a4]['substr'](0x0, _0x11b3e7[_0x38a3a4][_0x205c34(0x60c)] - _0x444d21[_0x205c34(0x5c2)])
                                },
                                _0x16a66c++;
                            }
                            ;var _0x2ea842 = _0x42e18c['csg']['2'][_0x490742]
                              , _0x158b58 = 0x0
                              , _0x48f998 = _0x205c34(0x3ab)
                              , _0x5828bc = _0x205c34(0x5df)
                              , _0x35b3dd = 0x0;
                            for (var _0x3f0569 in _0x2ea842) {
                                _0x35b3dd++;
                            }
                            ;for (var _0x3f0569 in _0x2ea842) {
                                if (_0x158b58 == 0x0) {
                                    var _0x593cf1 = {
                                        'id': _0x444d21['g'] * 0x64 + _0x1c8aa6,
                                        'base': [],
                                        'guest': ![],
                                        'g': ![],
                                        'price': 0x0,
                                        'priceBefore': 0x0,
                                        'nonbuyable': ![],
                                        'prime': 'c_white',
                                        'glow': _0x2ea842[_0x3f0569]
                                    };
                                    for (var _0x38a3a4 = 0x0; _0x38a3a4 < _0x2ea842[_0x3f0569]['length']; _0x38a3a4++) {
                                        _0x593cf1['base'][_0x205c34(0x1bc)](_0x205c34(0x399) + (_0x444d21['g'] / 0x9 * 0x3e8 + _0x3f5842) + '_' + (_0x2ea842[_0x3f0569][_0x205c34(0x60c)] - _0x38a3a4));
                                    }
                                    ;_0x5b3efb[_0x205c34(0x27b)][_0x205c34(0x1bc)](_0x593cf1);
                                    var _0x22584d = _0x444d21['sg'][_0x205c34(0x68a)](_0x593cf1['id']);
                                    _0x22584d == -0x1 && (_0x444d21['sg'][_0x205c34(0x1bc)](_0x593cf1['id']),
                                    _0x444d21['gg'][_0x205c34(0x1bc)]({
                                        's': _0x444d21['g'] / 0x9 * 0x3e8 + _0x3f5842,
                                        'e': _0x444d21['g'] / 0x9 * 0x3e8 + _0x3f5842 + _0x35b3dd - 0x1,
                                        't': parseInt(_0x42e18c[_0x205c34(0x114)]['0'][_0x490742]['substr'](0x0, 0x1)) * 0x64,
                                        'r': _0x42e18c['csg']['0'][_0x490742][_0x205c34(0x673)](0x1, 0x1) == '1'
                                    }));
                                    if (_0x4b3ca9)
                                        for (var _0x356b1e in _0x5b3efb[_0x205c34(0x4f1)]) {
                                            _0x5b3efb[_0x205c34(0x4f1)][_0x356b1e]['id'] == _0x5828bc && _0x5b3efb['skinGroupArrayDict'][_0x356b1e]['list'][_0x205c34(0x1bc)](_0x593cf1['id']);
                                        }
                                    else
                                        _0x5b3efb[_0x205c34(0x4f1)][_0x205c34(0x1bc)]({
                                            'isCustom': !![],
                                            'id': _0x5828bc,
                                            'img': _0x48f998,
                                            'name': {
                                                'de': _0x5828bc,
                                                'en': _0x5828bc,
                                                'es': _0x5828bc,
                                                'fr': _0x5828bc,
                                                'uk': _0x5828bc
                                            },
                                            'list': [_0x593cf1['id']]
                                        }),
                                        _0x4b3ca9 = !![];
                                    ;_0x1c8aa6++;
                                }
                                ;var _0x593cf1 = {
                                    'id': _0x444d21['g'] / 0x9 * 0x3e8 + _0x3f5842,
                                    'base': [],
                                    'guest': ![],
                                    'g': !![],
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': ![],
                                    'prime': _0x205c34(0x664),
                                    'glow': _0x2ea842[_0x3f0569]
                                };
                                for (var _0x38a3a4 = 0x0; _0x38a3a4 < _0x2ea842[_0x3f0569][_0x205c34(0x60c)]; _0x38a3a4++) {
                                    _0x593cf1[_0x205c34(0x237)][_0x205c34(0x1bc)](_0x205c34(0x399) + _0x593cf1['id'] + '_' + (_0x2ea842[_0x3f0569][_0x205c34(0x60c)] - _0x38a3a4)),
                                    _0x5b3efb[_0x205c34(0x16a)][_0x205c34(0x399) + _0x593cf1['id'] + '_' + (_0x38a3a4 + 0x1)] = {
                                        'texture': _0x205c34(0x24f) + _0x593cf1['id'],
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x38a3a4 || 0x0) * 0x63,
                                        'y': 0x0
                                    };
                                }
                                ;_0x5b3efb[_0x205c34(0x27b)]['push'](_0x593cf1),
                                _0x158b58++,
                                _0x3f5842++;
                            }
                        }
                    } else {
                        var _0x1f5f56 = []
                          , _0x48f998 = _0x205c34(0x2bd);
                        for (let _0x162724 in _0x42e18c) {
                            if (_0x162724 != 'img') {
                                _0x42e18c[_0x162724]['textureDict'][_0x162724][_0x205c34(0x13e)]['search'](_0x205c34(0x2bf)) == -0x1 && (_0x42e18c[_0x162724][_0x205c34(0x1cb)][_0x162724][_0x205c34(0x13e)] = _0x205c34(0x2bf) + _0x42e18c[_0x162724][_0x205c34(0x1cb)][_0x162724][_0x205c34(0x13e)][_0x205c34(0x673)](_0x42e18c[_0x162724]['textureDict'][_0x162724][_0x205c34(0x13e)][_0x205c34(0x60c)] - _0x444d21[_0x205c34(0x5c2)], _0x444d21[_0x205c34(0x5c2)]) + _0x42e18c[_0x162724][_0x205c34(0x1cb)][_0x162724][_0x205c34(0x13e)][_0x205c34(0x673)](0x0, _0x42e18c[_0x162724][_0x205c34(0x1cb)][_0x162724][_0x205c34(0x13e)][_0x205c34(0x60c)] - _0x444d21[_0x205c34(0x5c2)]));
                                _0x5b3efb[_0x205c34(0x1cb)][_0x162724] = _0x42e18c[_0x162724][_0x205c34(0x1cb)][_0x162724];
                                for (let _0x3c0280 in _0x42e18c[_0x162724][_0x205c34(0x16a)]) {
                                    _0x5b3efb[_0x205c34(0x16a)][_0x3c0280] = _0x42e18c[_0x162724][_0x205c34(0x16a)][_0x3c0280];
                                }
                                ;_0x5b3efb[_0x205c34(0x27b)]['push'](_0x42e18c[_0x162724][_0x205c34(0x597)]),
                                _0x1f5f56['push'](_0x42e18c[_0x162724][_0x205c34(0x597)]['id']);
                            } else
                                _0x42e18c[_0x162724] != _0x205c34(0x5bc) && (_0x48f998 = _0x42e18c[_0x162724]);
                        }
                        ;_0x5b3efb[_0x205c34(0x4f1)][_0x205c34(0x1bc)]({
                            'isCustom': !![],
                            'id': _0x205c34(0x5bc),
                            'img': _0x48f998,
                            'name': {
                                'de': _0x205c34(0x327),
                                'en': _0x205c34(0x327),
                                'es': _0x205c34(0x327),
                                'fr': 'Customer',
                                'uk': _0x205c34(0x327)
                            },
                            'list': _0x1f5f56
                        });
                    }
                }
                ;if (Array[_0x205c34(0x735)](_0x444d21['dg']) && _0x444d21['dg']['length'] > 0x0)
                    for (var _0x3f0569 in _0x444d21['dg']) {
                        var _0x5a71f9 = _0x444d21['dg'][_0x3f0569][_0x205c34(0x5d5)]('|')
                          , _0x2314f7 = {
                            'g': _0x5a71f9['0']
                        };
                        await fetch(_0x205c34(0x43b), {
                            'headers': {
                                'Content-Type': _0x205c34(0x34c)
                            },
                            'method': _0x205c34(0x4bf),
                            'body': JSON[_0x205c34(0x608)](_0x2314f7)
                        })[_0x205c34(0x2aa)](async function(_0x13eefa) {
                            var _0x100f95 = _0x205c34;
                            _0x13eefa = await _0x13eefa[_0x100f95(0x698)](),
                            _0x5b3efb[_0x100f95(0x1cb)][_0x100f95(0x24f) + _0x5a71f9['0'] + '_skin_g'] = {
                                'custom': !![],
                                'relativePath': _0x13eefa[_0x100f95(0x114)]['1']['0']
                            };
                            var _0x3f6809 = _0x13eefa[_0x100f95(0x114)]['2']['0']
                              , _0x4edcef = 0x0;
                            for (var _0x4441fa in _0x3f6809) {
                                _0x4edcef++;
                            }
                            ;_0x444d21['sg'][_0x100f95(0x1bc)](parseInt(_0x5a71f9['1'])),
                            _0x444d21['gg'][_0x100f95(0x1bc)]({
                                's': _0x444d21['g'] / 0x9 * 0x3e8 + _0x3f5842,
                                'e': _0x444d21['g'] / 0x9 * 0x3e8 + _0x3f5842 + _0x4edcef - 0x1,
                                't': parseInt(_0x13eefa[_0x100f95(0x114)]['0']['0']['substr'](0x0, 0x1)) * 0x64,
                                'r': _0x13eefa[_0x100f95(0x114)]['0']['0'][_0x100f95(0x673)](0x1, 0x1) == '1'
                            });
                            var _0x1eb929 = 0x0;
                            for (var _0x4441fa in _0x3f6809) {
                                var _0x2216a2 = {
                                    'id': _0x444d21['g'] / 0x9 * 0x3e8 + _0x3f5842,
                                    'base': [],
                                    'guest': ![],
                                    'g': !![],
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': ![],
                                    'prime': _0x100f95(0x664),
                                    'glow': _0x3f6809[_0x4441fa]
                                };
                                for (var _0x5180d0 = 0x0; _0x5180d0 < _0x3f6809[_0x4441fa][_0x100f95(0x60c)]; _0x5180d0++) {
                                    _0x2216a2[_0x100f95(0x237)][_0x100f95(0x1bc)](_0x100f95(0x399) + _0x2216a2['id'] + '_' + (_0x3f6809[_0x4441fa]['length'] - _0x5180d0)),
                                    _0x5b3efb[_0x100f95(0x16a)][_0x100f95(0x399) + _0x2216a2['id'] + '_' + (_0x5180d0 + 0x1)] = {
                                        'texture': _0x100f95(0x24f) + _0x5a71f9['0'] + '_skin_g',
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x5180d0 || 0x0) * 0x63,
                                        'y': (_0x1eb929 || 0x0) * 0x63
                                    };
                                }
                                ;_0x5b3efb['skinArrayDict'][_0x100f95(0x1bc)](_0x2216a2),
                                _0x3f5842++,
                                _0x1eb929++;
                            }
                        })[_0x205c34(0x381)](function(_0x3c6a5b) {});
                    }
            } catch (_0xa7faec) {
                localStorage[_0x205c34(0x167)](_0x205c34(0x3f9)),
                localStorage[_0x205c34(0x167)](_0x205c34(0x6c0)),
                window['location']['reload']();
            }
            ;return _0x5b3efb;
        }
        ;
        var _0x4e314b = ![];
        _0x4e314b && (_0x4e314b = ![],
        s_h[_0x5b8a80(0x5e9)]()),
        function(_0x501abe) {
            var _0x4fe37e = _0x5b8a80;
            _0x501abe['fn']['wupsle'] = function(_0x38ddab) {
                var _0xc7d80 = _0x1792;
                if (_0x38edf[_0x38ddab])
                    return _0x38edf[_0x38ddab]['apply'](this, Array[_0xc7d80(0x66b)]['slice']['call'](arguments, 0x1));
                else {
                    if (typeof _0x38ddab != _0xc7d80(0x1c5) && _0x38ddab) {
                        _0x501abe['error'](_0xc7d80(0x709) + _0x38ddab + _0xc7d80(0x184));
                        return;
                    } else
                        return _0x38edf[_0xc7d80(0x1a0)]['apply'](this, arguments);
                }
            }
            ;
            var _0x38edf = {}
              , _0x14a29d = {
                'data': [],
                'keepJSONItemsOnTop': ![],
                'width': 0x64,
                'height': null,
                'background': _0x4fe37e(0x1e5),
                'selectText': '',
                'defaultSelectedIndex': null,
                'truncateDescription': !![],
                'imagePosition': _0x4fe37e(0x4e0),
                'showSelectedHTML': !![],
                'clickOffToClose': !![],
                'embedCSS': !![],
                'onSelected': function() {}
            };
            function _0x9cf70d(_0x3f92db, _0xc20c82) {
                var _0x2cb6a5 = _0x4fe37e, _0x53422c, _0x4a0fdc, _0x29045e, _0x59ae3d, _0x43b4b6 = _0x3f92db['data'](_0x2cb6a5(0x566)), _0x2e48b8 = _0x3f92db[_0x2cb6a5(0x25f)](_0x2cb6a5(0x4e9)), _0x4e3b0f = _0x2e48b8['siblings']('.dd-selected-value');
                _0x3f92db[_0x2cb6a5(0x25f)](_0x2cb6a5(0x653)),
                _0x2e48b8[_0x2cb6a5(0x2e0)](_0x2cb6a5(0x2b9));
                var _0x589422 = _0x3f92db[_0x2cb6a5(0x25f)](_0x2cb6a5(0x639))['eq'](_0xc20c82)
                  , _0x5abd9f = _0x589422[_0x2cb6a5(0x467)]('li')
                  , _0x6d66f8 = _0x43b4b6[_0x2cb6a5(0x3e6)]
                  , _0x5cefc3 = _0x43b4b6['settings']['data'][_0xc20c82];
                _0x3f92db[_0x2cb6a5(0x25f)](_0x2cb6a5(0x639))[_0x2cb6a5(0x66f)](_0x2cb6a5(0x164)),
                _0x589422[_0x2cb6a5(0x4b5)](_0x2cb6a5(0x164)),
                _0x43b4b6['selectedIndex'] = _0xc20c82,
                _0x43b4b6['selectedItem'] = _0x5abd9f,
                _0x43b4b6[_0x2cb6a5(0x59e)] = _0x5cefc3,
                _0x6d66f8[_0x2cb6a5(0x272)] ? _0x2e48b8['html']((_0x5cefc3[_0x2cb6a5(0x594)] ? '<img\x20class=\x22dd-selected-image' + (_0x6d66f8[_0x2cb6a5(0x6ec)] == _0x2cb6a5(0x4c8) ? '\x20dd-image-right' : '') + '\x22\x20src=\x22' + _0x5cefc3[_0x2cb6a5(0x594)] + '\x22\x20/>' : '') + (_0x5cefc3[_0x2cb6a5(0x1ef)] ? _0x2cb6a5(0x139) + (_0x6d66f8['truncateDescription'] ? '\x20dd-selected-description-truncated' : '') + _0x2cb6a5(0x3db) + _0x5cefc3['description'] + _0x2cb6a5(0x519) : '')) : _0x2e48b8[_0x2cb6a5(0x26f)](_0x5cefc3[_0x2cb6a5(0x159)]),
                _0x4e3b0f[_0x2cb6a5(0x410)](_0x5cefc3[_0x2cb6a5(0x345)]),
                _0x43b4b6[_0x2cb6a5(0x357)]['val'](_0x5cefc3[_0x2cb6a5(0x345)]),
                _0x3f92db[_0x2cb6a5(0x56d)]('ddslick', _0x43b4b6),
                _0x311776(_0x3f92db),
                _0x4a0fdc = (_0x53422c = _0x3f92db)[_0x2cb6a5(0x25f)]('.dd-select')[_0x2cb6a5(0x4fa)]('height'),
                _0x29045e = _0x53422c['find']('.dd-selected-description'),
                _0x59ae3d = _0x53422c['find'](_0x2cb6a5(0x2f0)),
                _0x29045e[_0x2cb6a5(0x60c)] <= 0x0 && _0x59ae3d[_0x2cb6a5(0x60c)] > 0x0 && _0x53422c['find'](_0x2cb6a5(0x3a7))[_0x2cb6a5(0x4fa)](_0x2cb6a5(0x3e3), _0x4a0fdc),
                typeof _0x6d66f8[_0x2cb6a5(0x62f)] == _0x2cb6a5(0x2a8) && _0x6d66f8[_0x2cb6a5(0x62f)]['call'](this, _0x43b4b6);
            }
            function _0x25b5a7(_0x45abc1) {
                var _0x486c9e = _0x4fe37e
                  , _0x21d04a = _0x45abc1[_0x486c9e(0x25f)](_0x486c9e(0x76a))
                  , _0x3bd19e = _0x21d04a[_0x486c9e(0x2e0)](_0x486c9e(0x653))
                  , _0x4113c7 = _0x21d04a['find'](_0x486c9e(0x2b9))
                  , _0x5f9922 = _0x3bd19e['is'](_0x486c9e(0x3ad));
                _0x501abe(_0x486c9e(0x6f2))[_0x486c9e(0x1a2)](_0x3bd19e)[_0x486c9e(0x14f)](0x32),
                _0x501abe(_0x486c9e(0x2b9))[_0x486c9e(0x66f)](_0x486c9e(0x36e)),
                _0x5f9922 ? (_0x3bd19e[_0x486c9e(0x14f)](_0x486c9e(0x2ee)),
                _0x4113c7[_0x486c9e(0x66f)](_0x486c9e(0x36e))) : (_0x3bd19e[_0x486c9e(0x716)](_0x486c9e(0x2ee)),
                _0x4113c7[_0x486c9e(0x4b5)]('dd-pointer-up')),
                function _0x56d9ca(_0x119629) {
                    var _0x433dae = _0x486c9e;
                    _0x119629[_0x433dae(0x25f)]('.dd-option')['each'](function() {
                        var _0x30bac3 = _0x433dae
                          , _0x3e7784 = _0x501abe(this)
                          , _0x5b70ce = _0x3e7784[_0x30bac3(0x4fa)](_0x30bac3(0x67d))
                          , _0x16b416 = _0x3e7784[_0x30bac3(0x25f)](_0x30bac3(0x627))
                          , _0x439a91 = _0x119629[_0x30bac3(0x25f)](_0x30bac3(0x1c8));
                        _0x16b416[_0x30bac3(0x60c)] <= 0x0 && _0x439a91[_0x30bac3(0x60c)] > 0x0 && _0x3e7784[_0x30bac3(0x25f)](_0x30bac3(0x451))['css'](_0x30bac3(0x3e3), _0x5b70ce);
                    });
                }(_0x45abc1);
            }
            function _0x311776(_0x1e93a1) {
                var _0x47e46a = _0x4fe37e;
                _0x1e93a1[_0x47e46a(0x25f)](_0x47e46a(0x653))[_0x47e46a(0x14f)](0x32),
                _0x1e93a1[_0x47e46a(0x25f)](_0x47e46a(0x2b9))[_0x47e46a(0x66f)](_0x47e46a(0x36e))[_0x47e46a(0x66f)](_0x47e46a(0x36e));
            }
            _0x38edf[_0x4fe37e(0x1a0)] = function(_0x535045) {
                var _0x478615 = _0x4fe37e
                  , _0x535045 = _0x501abe[_0x478615(0x188)]({}, _0x14a29d, _0x535045);
                return _0x501abe(_0x478615(0x47c))[_0x478615(0x60c)] <= 0x0 && _0x535045[_0x478615(0x1c9)] && _0x501abe('<style\x20id=\x22css-ddslick\x22\x20type=\x22text/css\x22>.dd-select{\x20border-radius:2px;\x20border:solid\x201px\x20#ccc;\x20position:relative;\x20cursor:pointer;}.dd-desc\x20{\x20color:#aaa;\x20display:block;\x20overflow:\x20hidden;\x20font-weight:normal;\x20line-height:\x201.4em;\x20}.dd-selected{\x20overflow:hidden;\x20display:block;\x20padding:2px;\x20font-weight:bold;}.dd-pointer{\x20width:0;\x20height:0;\x20position:absolute;\x20right:10px;\x20top:50%;\x20margin-top:-3px;}.dd-pointer-down{\x20border:solid\x205px\x20transparent;\x20border-top:solid\x205px\x20#000;\x20}.dd-pointer-up{border:solid\x205px\x20transparent\x20!important;\x20border-bottom:solid\x205px\x20#000\x20!important;\x20margin-top:-8px;}.dd-options{\x20border:solid\x201px\x20#ccc;\x20border-top:none;\x20list-style:none;\x20box-shadow:0px\x201px\x205px\x20#ddd;\x20display:none;\x20position:absolute;\x20z-index:2000;\x20margin:0;\x20padding:0;background:#fff;\x20overflow:auto;}.dd-option{\x20padding:2px;\x20display:block;\x20border-bottom:solid\x201px\x20#ddd;\x20overflow:hidden;\x20text-decoration:none;\x20color:#333;\x20cursor:pointer;-webkit-transition:\x20all\x200.25s\x20ease-in-out;\x20-moz-transition:\x20all\x200.25s\x20ease-in-out;-o-transition:\x20all\x200.25s\x20ease-in-out;-ms-transition:\x20all\x200.25s\x20ease-in-out;\x20}\x20ul.dd-options\x20{height:\x20130px;}\x20.dd-options\x20>\x20li:last-child\x20>\x20.dd-option{\x20border-bottom:none;}.dd-option:hover{\x20background:#f3f3f3;\x20color:#000;}.dd-selected-description-truncated\x20{\x20text-overflow:\x20ellipsis;\x20white-space:nowrap;\x20}.dd-option-selected\x20{\x20background:#f6f6f6;\x20}.dd-option-image,\x20.dd-selected-image\x20{\x20vertical-align:middle;\x20float:left;\x20margin-right:5px;\x20max-width:64px;}.dd-image-right\x20{\x20float:right;\x20margin-right:15px;\x20margin-left:5px;}.dd-container{display:\x20inline-block;\x20position:relative;}​\x20.dd-selected-text\x20{\x20font-weight:bold}​</style>')[_0x478615(0x574)](_0x478615(0x25e)),
                this['each'](function() {
                    var _0x5d081b = _0x478615
                      , _0xe71c8d = _0x501abe(this);
                    if (!_0xe71c8d[_0x5d081b(0x56d)]('ddslick')) {
                        var _0x50328a = [];
                        _0x535045['data'],
                        _0xe71c8d[_0x5d081b(0x25f)](_0x5d081b(0x571))['each'](function() {
                            var _0x509fc3 = _0x5d081b
                              , _0x155a53 = _0x501abe(this)
                              , _0x20b5da = _0x155a53['data']();
                            _0x50328a[_0x509fc3(0x1bc)]({
                                'text': _0x501abe[_0x509fc3(0x70b)](_0x155a53[_0x509fc3(0x159)]()),
                                'value': _0x155a53[_0x509fc3(0x410)](),
                                'selected': _0x155a53['is'](':selected'),
                                'description': _0x20b5da[_0x509fc3(0x1ef)],
                                'imageSrc': _0x20b5da[_0x509fc3(0x334)]
                            });
                        });
                        _0x535045['keepJSONItemsOnTop'] ? _0x501abe[_0x5d081b(0x5a5)](_0x535045['data'], _0x50328a) : _0x535045[_0x5d081b(0x56d)] = _0x501abe[_0x5d081b(0x5a5)](_0x50328a, _0x535045[_0x5d081b(0x56d)]);
                        var _0x53dcd1 = _0xe71c8d
                          , _0x4d3d74 = _0x501abe(_0x5d081b(0x405) + _0xe71c8d[_0x5d081b(0x479)]('id') + _0x5d081b(0x273));
                        _0xe71c8d[_0x5d081b(0x384)](_0x4d3d74),
                        (_0xe71c8d = _0x4d3d74)[_0x5d081b(0x4b5)](_0x5d081b(0x2b1))[_0x5d081b(0x527)](_0x5d081b(0x3d7))['append'](_0x5d081b(0x715));
                        var _0x50328a = _0xe71c8d['find'](_0x5d081b(0x76a))
                          , _0x136b1c = _0xe71c8d[_0x5d081b(0x25f)](_0x5d081b(0x653));
                        _0x136b1c['css']({
                            'width': _0x535045['width']
                        }),
                        _0x50328a[_0x5d081b(0x4fa)]({
                            'width': _0x535045[_0x5d081b(0x612)],
                            'background': _0x535045[_0x5d081b(0x249)]
                        }),
                        _0xe71c8d[_0x5d081b(0x4fa)]({
                            'width': _0x535045[_0x5d081b(0x612)]
                        });
                        _0x535045[_0x5d081b(0x67d)] != null && _0x136b1c[_0x5d081b(0x4fa)]({
                            'height': _0x535045[_0x5d081b(0x67d)],
                            'overflow': 'auto'
                        });
                        _0x501abe[_0x5d081b(0x6f1)](_0x535045['data'], function(_0x2127e3, _0x3a012b) {
                            var _0x5a53c5 = _0x5d081b;
                            _0x3a012b[_0x5a53c5(0x1f8)] && (_0x535045[_0x5a53c5(0x29b)] = _0x2127e3),
                            _0x136b1c['append'](_0x5a53c5(0x768) + (_0x3a012b[_0x5a53c5(0x345)] ? _0x5a53c5(0x619) + _0x3a012b[_0x5a53c5(0x345)] + _0x5a53c5(0x39c) : '') + (_0x3a012b[_0x5a53c5(0x594)] ? _0x5a53c5(0x4f7) + (_0x535045[_0x5a53c5(0x6ec)] == 'right' ? _0x5a53c5(0x701) : '') + '\x22\x20src=\x22' + _0x3a012b['imageSrc'] + _0x5a53c5(0x39c) : '') + _0x5a53c5(0x6ac));
                        });
                        var _0x3ddf39 = {
                            'settings': _0x535045,
                            'original': _0x53dcd1,
                            'selectedIndex': -0x1,
                            'selectedItem': null,
                            'selectedData': null
                        };
                        _0xe71c8d[_0x5d081b(0x56d)](_0x5d081b(0x566), _0x3ddf39),
                        _0x535045[_0x5d081b(0x124)][_0x5d081b(0x60c)] > 0x0 && _0x535045[_0x5d081b(0x29b)] == null ? _0xe71c8d[_0x5d081b(0x25f)](_0x5d081b(0x4e9))[_0x5d081b(0x26f)](_0x535045[_0x5d081b(0x124)]) : _0x9cf70d(_0xe71c8d, _0x535045['defaultSelectedIndex'] != null && _0x535045[_0x5d081b(0x29b)] >= 0x0 && _0x535045[_0x5d081b(0x29b)] < _0x535045[_0x5d081b(0x56d)][_0x5d081b(0x60c)] ? _0x535045['defaultSelectedIndex'] : 0x0),
                        _0xe71c8d[_0x5d081b(0x25f)]('.dd-select')['on'](_0x5d081b(0x240), function() {
                            _0x25b5a7(_0xe71c8d);
                        }),
                        _0xe71c8d[_0x5d081b(0x25f)](_0x5d081b(0x639))['on'](_0x5d081b(0x240), function() {
                            var _0x12b32b = _0x5d081b;
                            _0x9cf70d(_0xe71c8d, _0x501abe(this)[_0x12b32b(0x467)]('li')[_0x12b32b(0x4c2)]());
                        }),
                        _0x535045[_0x5d081b(0x5c9)] && (_0x136b1c[_0x5d081b(0x4b5)](_0x5d081b(0x74d)),
                        _0xe71c8d['on'](_0x5d081b(0x240), function(_0x5b40e3) {
                            var _0x397c42 = _0x5d081b;
                            _0x5b40e3[_0x397c42(0x584)]();
                        }),
                        _0x501abe(_0x5d081b(0x2b0))['on'](_0x5d081b(0x335), function() {
                            var _0x34e476 = _0x5d081b;
                            _0x501abe(_0x34e476(0x6f2))[_0x34e476(0x14f)](0x32)[_0x34e476(0x2e0)](_0x34e476(0x76a))[_0x34e476(0x25f)]('.dd-pointer')['removeClass'](_0x34e476(0x36e));
                        }));
                    }
                });
            }
            ,
            _0x38edf[_0x4fe37e(0x351)] = function(_0x2f27aa) {
                var _0x393c8b = _0x4fe37e;
                return this[_0x393c8b(0x6f1)](function() {
                    var _0x428518 = _0x393c8b;
                    _0x2f27aa[_0x428518(0x4c2)] !== undefined && _0x9cf70d(_0x501abe(this), _0x2f27aa['index']);
                });
            }
            ,
            _0x38edf[_0x4fe37e(0x34f)] = function() {
                var _0x1939f0 = _0x4fe37e;
                return this[_0x1939f0(0x6f1)](function() {
                    var _0x34b0e7 = _0x1939f0
                      , _0x52e049 = _0x501abe(this);
                    _0x52e049[_0x34b0e7(0x56d)](_0x34b0e7(0x566)) && _0x25b5a7(_0x52e049);
                });
            }
            ,
            _0x38edf['close'] = function() {
                var _0x5bee3b = _0x4fe37e;
                return this[_0x5bee3b(0x6f1)](function() {
                    var _0x42a6a8 = _0x5bee3b
                      , _0xf4fcae = _0x501abe(this);
                    _0xf4fcae['data'](_0x42a6a8(0x566)) && _0x311776(_0xf4fcae);
                });
            }
            ,
            _0x38edf[_0x4fe37e(0x3dd)] = function() {
                var _0x1144a4 = _0x4fe37e;
                return this[_0x1144a4(0x6f1)](function() {
                    var _0x10b55b = _0x1144a4
                      , _0x5c66fa = _0x501abe(this)
                      , _0x1c3351 = _0x5c66fa[_0x10b55b(0x56d)](_0x10b55b(0x566));
                    if (_0x1c3351) {
                        var _0x79303b = _0x1c3351[_0x10b55b(0x357)];
                        _0x5c66fa[_0x10b55b(0x5ca)](_0x10b55b(0x566))[_0x10b55b(0x738)](_0x10b55b(0x5cf))[_0x10b55b(0x384)](_0x79303b);
                    }
                });
            }
            ;
        }(jQuery),
        _0xe5eec1() && _0x3a706a['ba'](_0x444d21[_0x5b8a80(0x688)] + _0x5b8a80(0x304), _0x5b8a80(0x635), function() {}),
        ooo[_0x5b8a80(0x518)] = function() {
            var _0x35a7e0 = _0x5b8a80
              , _0x5717d0 = {}
              , _0x5aded5 = {
                'country': 'iq'
            };
            _0x3b8a7a && _0x3b8a7a != 'iq' && (_0x5aded5[_0x35a7e0(0x30e)] = _0x3b8a7a),
            $[_0x35a7e0(0x3a1)](_0x35a7e0(0x75b), function(_0x225055) {
                var _0x45f3a1 = _0x35a7e0;
                _0x5717d0 = _0x225055,
                fetch(_0x45f3a1(0x447), {
                    'headers': {
                        'Content-Type': _0x45f3a1(0x34c)
                    },
                    'method': _0x45f3a1(0x4bf),
                    'body': JSON['stringify'](_0x5aded5)
                })[_0x45f3a1(0x2aa)](async function(_0x215f68) {
                    var _0x5e34c3 = _0x45f3a1;
                    for (let _0x2de606 in (_0x215f68 = await _0x215f68[_0x5e34c3(0x698)]())[_0x5e34c3(0x1cb)]) {
                        for (let _0x19a12d in _0x215f68[_0x5e34c3(0x1cb)][_0x2de606]) {
                            _0x19a12d === 'file' && (_0x215f68[_0x5e34c3(0x1cb)][_0x2de606][_0x19a12d] = _0x5e34c3(0x2bf) + _0x215f68['textureDict'][_0x2de606][_0x19a12d][_0x5e34c3(0x673)](_0x215f68['textureDict'][_0x2de606][_0x19a12d]['length'] - _0x444d21['c_v'], _0x444d21['c_v']) + _0x215f68[_0x5e34c3(0x1cb)][_0x2de606][_0x19a12d][_0x5e34c3(0x673)](0x0, _0x215f68[_0x5e34c3(0x1cb)][_0x2de606][_0x19a12d][_0x5e34c3(0x60c)] - _0x444d21[_0x5e34c3(0x5c2)]));
                        }
                    }
                    ;for (let _0x1ff1f0 in _0x215f68) {
                        _0x1ff1f0 !== 'propertyList' && (Array[_0x5e34c3(0x735)](_0x215f68[_0x1ff1f0]) ? _0x225055[_0x1ff1f0] = _0x225055[_0x1ff1f0][_0x5e34c3(0x38e)](_0x215f68[_0x1ff1f0]) : _0x225055[_0x1ff1f0] = {
                            ..._0x225055[_0x1ff1f0],
                            ..._0x215f68[_0x1ff1f0]
                        });
                    }
                })['catch'](function(_0x69fa99) {});
            });
        }
        ,
        ooo['pDc'] = function(_0x56578a) {
            var _0xa3c989 = _0x5b8a80
              , _0xd30739 = {};
            (function(_0x3f47f9, _0x89660d) {
                var _0x311033 = _0x1792;
                for (var _0x4504c4 in _0x3f47f9) {
                    _0x3f47f9[_0x311033(0x68b)](_0x4504c4) && _0x89660d(_0x4504c4, _0x3f47f9[_0x4504c4]);
                }
            }(_0x56578a[_0xa3c989(0x1cb)], function(_0x21cd8d, _0xd12074) {
                var _0x326a38 = _0xa3c989;
                let _0x29fdfd = _0x444d21[_0x326a38(0x688)] + _0xd12074['relativePath'];
                !_0xd12074[_0x326a38(0x6ee)] && (_0x29fdfd = _0x444d21[_0x326a38(0x688)] + _0xd12074['relativePath']);
                try {
                    _0xd30739[_0x21cd8d] = new PIXI[(_0x326a38(0x213))](_0x29fdfd);
                } catch (_0x431336) {}
            }));
        }
        ;
    });
}()),
(function() {
    var _0x192057 = _0xb81a41;
    let _0x4dbdf6 = ![]
      , _0x296482 = ![]
      , _0x92be = 0x0;
    function _0x1db7f5() {
        var _0x372209 = _0x1792;
        if (window[_0x372209(0x326)] && window[_0x372209(0x326)]['Mh'] && typeof window[_0x372209(0x326)]['Mh']['Dq'] === _0x372209(0x2a8))
            return !![];
        return ![];
    }
    function _0x17053d() {
        var _0x23cf62 = _0x1792;
        const _0x5e43e3 = Date[_0x23cf62(0x4f5)]();
        if (_0x296482 || _0x5e43e3 - _0x92be < 0x3e8)
            return;
        _0x296482 = !![],
        _0x92be = _0x5e43e3;
        try {
            typeof window[_0x23cf62(0x669)] !== _0x23cf62(0x3fa) && (window[_0x23cf62(0x669)][_0x23cf62(0x6d0)] = !![]),
            typeof window[_0x23cf62(0x326)]['Mh']['gr'] === _0x23cf62(0x2a8) && window[_0x23cf62(0x326)]['Mh']['gr'](),
            setTimeout(function() {
                var _0x330801 = _0x23cf62;
                try {
                    const _0x36c523 = document[_0x330801(0x374)](_0x330801(0x3df)) ? document[_0x330801(0x374)](_0x330801(0x3df))[_0x330801(0x345)] || '' : ''
                      , _0x62a770 = document['getElementById'](_0x330801(0x486)) ? document[_0x330801(0x374)](_0x330801(0x486))[_0x330801(0x345)] || _0x330801(0x503) : _0x330801(0x503);
                    window[_0x330801(0x326)]['Mh']['Dq'](_0x36c523, _0x62a770),
                    setTimeout(function() {
                        _0x296482 = ![];
                    }, 0x3e8);
                } catch (_0x24f56e) {
                    _0x296482 = ![];
                }
            }, 0x12c);
        } catch (_0x417067) {
            _0x296482 = ![];
        }
    }
    function _0x32229e() {
        var _0xa99140 = _0x1792;
        _0x4dbdf6 = !_0x4dbdf6,
        typeof window[_0xa99140(0x669)] !== 'undefined' && (window['myGameSettings'][_0xa99140(0x6d0)] = _0x4dbdf6);
    }
    document['addEventListener'](_0x192057(0x69d), function(_0xdc1e13) {
        var _0x80dbc0 = _0x192057;
        (_0xdc1e13[_0x80dbc0(0x320)] === 'F8' || _0xdc1e13[_0x80dbc0(0x36c)] === 0x77) && _0x32229e();
        if (_0x4dbdf6 && (_0xdc1e13[_0x80dbc0(0x320)][_0x80dbc0(0x144)]() === 'r' || _0xdc1e13[_0x80dbc0(0x36c)] === 0x52)) {
            if (_0x1db7f5())
                _0xdc1e13[_0x80dbc0(0x348)](),
                _0xdc1e13['stopPropagation'](),
                _0x17053d();
            else {}
        }
    }, !![]);
    if (!_0x1db7f5()) {
        const _0x4bce71 = setInterval(function() {
            _0x1db7f5() && clearInterval(_0x4bce71);
        }, 0x3e8);
    } else {}
}());
