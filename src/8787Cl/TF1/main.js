const tf1 = {
    'metadata': {
        'version': '0.0.1',
        'versionN': 1
    },
    'install': function() {
        let ftDataV = {
            'window': {},
            'config': {},
            'packages': {
                'list': {},
                'installed': []
            }
        }
        if (!window) {
            global.ftData = ftDataV
        } else {
            window.ftData = ftDataV
        }
    },
    'run': async function(c) {
        let code = c.split(';/n')
        let imported = []
    }
}

export { tf1 }