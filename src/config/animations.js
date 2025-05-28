export const animateBTM_TOP = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: (count) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: .3,
            delay: .2 * count
        }
    })
}


export const animateOpacity = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    }
}


export const animateOpacity_WITH_DELAY = {
    initial: {
        opacity: 0,
    },
    animate: (index) => ({
        opacity: 1,
        transition: {
            delay: .2 * index,
        }
    })
}



export const animateOpacity_0_5 = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}


export const animateOpacity_1 = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}