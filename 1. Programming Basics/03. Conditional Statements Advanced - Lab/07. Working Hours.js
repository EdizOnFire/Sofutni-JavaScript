function workingHours(input) {

    switch (Number(input[0])) {
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17: switch (input[1]) {
            case 'Monday': console.log('open'); break;
            case 'Tuesday': console.log('open'); break;
            case 'Wednsday': console.log('open'); break;
            case 'Thursday': console.log('open'); break;
            case 'Friday': console.log('open'); break;
            case 'Saturday': console.log('open'); break;
            default: console.log('closed'); break;
        } break
        default: console.log('closed'); break;
    }
}
workingHours(['11', 'Monday'])