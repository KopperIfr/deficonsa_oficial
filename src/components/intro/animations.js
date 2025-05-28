

export const animationPROJECTS = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: .2,
            delay: index * .2
        }
    })
}



export const animationLEADING_B = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            delay: .3
        }
    }
}

export const animationLEADING_H2 = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}


export const animationBG_IMG = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        
    }
}

export const animationRTL = {
    initial:{
        x: 50,
        opacity: 0
    },
    animate: (delay) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: .4,
            delay: .3 * delay
        }
    })
}


export const animationLTR = {
    initial:{
        x: -50,
        opacity: 0
    },
    animate: (delay) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: .4,
            delay: .3 * delay
        }
    })
}

export const animationLTR_NO_DELAY = {
    initial:{
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

export const animationRTL_NO_DELAY = {
    initial:{
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

export const animationBTT = {
    initial:{
        y: -50,
        opacity: 0
    },
    animate: (delay) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: .4,
            delay: .3 * delay
        }
    })
}