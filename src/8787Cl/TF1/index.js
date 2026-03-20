import tf1planer from './pkg/planer.js'
import tf1filesEmulator from './pkg/filesEmulator.js'
import { tf1vm, tf1compiler } from './components/vm-compiler/index.js'

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
                'all': {
                    'planer': {
                        'name': 'planer',
                        'version': '0.0.1',
                        'pkg': [],
                        'data': tf1planer,
                    },
                    'filesEmulator': {
                        'name': 'Files Emulator',
                        'version': '0.0.1',
                        'pkg': [],
                        'data': tf1filesEmulator
                    },
                },
                'list': [
                    'planer',
                    'filesEmulator',
                ],
                'installed': [],
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
