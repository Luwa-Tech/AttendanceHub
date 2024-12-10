import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

/**
    Implementation assumes that the application is deployed
    on a server in another timezone other than West African Time (WAT).

    It could be adjusted for other use cases or not used at all
    if this case doesn't apply.
 */

const WEST_AFRICAN_TIMEZONE = 'Africa/Lagos';

/**
 * Converts a Date object to a WAT timezone-aware Date.
 * @param {Date} date - The original date object (default: current time).
 * @returns {Date} - A timezone-aware Date in WAT.
 */
export const getLocalTime = (date = new Date()) => {
    // Convert the date to WAT
    const zonedTime = utcToZonedTime(date, WEST_AFRICAN_TIMEZONE);
    return zonedTime;
};

/**
 * Formats a Date in WAT timezone to a string.
 * @param {Date} date - The original date object.
 * @returns {string} - Formatted date string in WAT timezone.
 */
export const formatToLocalTime = (date = new Date()) => {
    return format(utcToZonedTime(date, WEST_AFRICAN_TIMEZONE), 'yyyy-MM-dd HH:mm:ssXXX', {
        timeZone: WEST_AFRICAN_TIMEZONE,
    });
};