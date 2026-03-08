const DOM8787 = {
    'metadata': {
        'version': '0.0.1',
        'versionNum': 1
    },
    'create': async (d) => {
        return {
            'content': d.innerHTML,
            'update': function (c) {
                d.innerHTML = c
            }
        }
    }
}

export { DOM8787 }