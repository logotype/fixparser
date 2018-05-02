import Message from './../message/Message';

export const SOH = '\x01';
export const STRING_A = '^A ';
export const STRING_EQUALS = '=';
export const RE_A = /\^A\s|\^A/g;
export const RE_ESCAPE = /([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g; // eslint-disable-line no-useless-escape
export const RE_PIPE = /\|/g;
export const RE_FIXT = new RegExp('^8=FIXT?.\\d.\\d([^\\d]+)\\d.*', 'i');

export const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
}, {});

export const adjustForTimezone = (date) => {
    const timeOffsetInMS = date.getTimezoneOffset() * 60000;
    date.setTime(date.getTime() + timeOffsetInMS);
    return date;
};

export const timestamp = (dateObject) => {
    if (isNaN(dateObject.getTime())) {
        console.error('Invalid date specified!');
    }
    const date = adjustForTimezone(dateObject);
    return `${date.getFullYear()}${Message.pad(date.getMonth() + 1, 2)}${Message.pad(date.getDate(), 2)}-${Message.pad(date.getHours(), 2)}:${Message.pad(date.getMinutes(), 2)}:${Message.pad(date.getSeconds(), 2)}.${Message.pad(date.getMilliseconds(), 3)}`;
};
