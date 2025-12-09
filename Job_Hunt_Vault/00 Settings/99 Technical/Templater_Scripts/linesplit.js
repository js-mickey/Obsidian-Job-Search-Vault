module.exports = function (content) {
	const cutBlankLines = content.replace(/^\s*\n/gm, "");
    const splitLines = cutBlankLines.split('\n');
    let reSplit = splitLines.map(i => '* ' + i + '\n');
    return reSplit.join("");
};
