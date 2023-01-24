export function formatTime(startTime, duration, type) {
    return `${startTime.toTimeString().slice(0, 5)} ~ ${new Date(startTime.getTime() + duration * 1000).toTimeString().slice(0, 5)} ${type} \n`;
}