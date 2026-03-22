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
        },
        '3dBlock2': function(jsonData) {
            return `
                |X:${jsonData?.element?.x || null}|Y:${jsonData?.element?.y || null}|Z:${jsonData?.element?.z || null}|A:${jsonData?.element?.a || null}|B:${jsonData?.element?.b || null}|C:${jsonData?.element?.c || null};
                3D DATA;
                1.0.0;
                2;
                |name:${jsonData?.meta?.name || null};
                ${jsonData?.data || {}}
            `
        },
        'htmlobject': async function(jsonData) {
            let ret = `
              <html>
            `
            for(let i = 0; i < jsonData.length; i++) {}
            ret += `
              </html>
            `
        },
    },
    '3dBlock': {
        '': '<DATAPACK CLASS "3dBlock" {...}>'
    },
    '3dBlock2': {
        '': '<DATAPACK CLASS "3dBlock2" {...}>'
    },
}

export { dataPack }