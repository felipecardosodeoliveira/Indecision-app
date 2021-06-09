export const isAdult = (age) => {
    if (age >= 18) {
        return 'is adult';
    } else {
        return 'is not an adult';
    }
}

export const canDrink = (age) => {
    if (age >= 21) {
        return 'you can drink';
    } else {
        return 'you can\'t drink';
    }
}