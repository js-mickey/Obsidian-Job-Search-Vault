module.exports = async function (tp, filepath) {
    const path = filepath;
    var optionNote = await tp.app.vault.read(tp.app.vault.getAbstractFileByPath((path))) + '';
    var content = optionNote.split("\n");
    return content;
};