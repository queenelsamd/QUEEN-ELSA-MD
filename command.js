var commands = [];

function cmd(info, func) {
    var data = {
        ...info, // Spread operator to copy all properties from info
        function: func,
        dontAddCommandList: info.dontAddCommandList || false,
        desc: info.desc || '',
        fromMe: info.fromMe || false,
        category: info.category || 'misc',
        filename: info.filename || 'Not Provided'
    };
    commands.push(data);
    return data;
}

module.exports = {
    cmd,
    commands
};
