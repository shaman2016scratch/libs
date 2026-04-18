const fixMath = {
    plus: function(p1, p2) {
        let p1Decode = p1.split('.')
        let p2Decode = p2.split('.')
        let result
        if (p1Decode[1]) {
            if (p2Decode[1]) {
                let mainResult = p1Decode[0] + p2Decode[0]
                let drobResult = p1Decode[1] + p2Decode[1]
                result = 0+`${mainResult}.${drobResult}`
            } else {
                let mainResult = p1Decode[0] + p2Decode[0]
                let drobResult = p1Decode[1]
                result = 0+`${mainResult}.${drobResult}`
            }
        } else {
            if (p2Decode[1]) {
                let mainResult = p1Decode[0] + p2Decode[0]
                let drobResult = p2Decode[1]
                result = 0+`${mainResult}.${drobResult}`
            } else {
                let mainResult = p1Decode[0] + p2Decode[0]
                result = mainResult
            }
        }
        return result
    }
}

const getMathParams = {
    isDrob: function(number) {
        let result
        let decode = number.split['.']
        if (!decode[1]) {
            result = false
        } else {
            if (!decode[2]) {
                result = true
            } else {
                result = false
            }
        }
        return result
    },
    getDrob: function(num) {
        function isDrob(number) {
            let result
            let decode = number.split['.']
            if (!decode[1]) {
                result = false
            } else {
                if (!decode[2]) {
                    result = true
                } else {
                    result = false
                }
            }
            return result
        }
        let ret
        if (!isDrob(num)) {
            ret = undefined
        } else {
            ret = number.split['.'][1]
        }
        return ret
    }
}

export { fixMath, getMathParams }