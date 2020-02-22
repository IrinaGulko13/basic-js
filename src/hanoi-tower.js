module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    let speed = turnsSpeed/3600;
    let seconds = turns/speed;

    let hanoi = {
        turns: turns,
        seconds: seconds
    }
    return hanoi;
}