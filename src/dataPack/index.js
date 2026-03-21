const dataPack = {
    'new': {
        '3dBlock': function(jsonData) {
            return [
                jsonData?.element?.x || null,
                jsonData?.element?.y || null,
                jsonData?.element?.y || null,
                {
                    a: jsonData?.element?.a || null,
                    b: jsonData?.element?.b || null,
                    c: jsonData?.element?.c || null,
                },
                '3D DATA TYPE 1, 1.0',
                '1.0.0',
                1,
                {
                    name: jsonData?.meta?.name || null,
                },
                jsonData?.data || {},
            ]
        }
    },
    '3dBlock': {
        '': '<class 3dBlock {...}>'
    }
}

export { dataPack }