// 이곳에 코드를 작성하세요
function runFullScreen() {
    // full-screen available?
    if (
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
        ) {
        var i = document.documentElement;

// go full-screen
        if (i.requestFullscreen) {
            i.requestFullscreen();
        } else if (i.webkitRequestFullscreen) {
            i.webkitRequestFullscreen();
        } else if (i.mozRequestFullScreen) {
            i.mozRequestFullScreen();
        } else if (i.msRequestFullscreen) {
            i.msRequestFullscreen();
        }
    }
}

function createHtmlDoc(source, charSet) {
    var header = "<!doctype html>" +
        "<html lang=\"kr\">" +
        "<head>" +
        "<meta charset=\"" + charSet + "\">" +
        "<title>note file</title>" +
        "</head>" +
        "<body>";
    var footer = "</body>" +
        "</html>";

    return header + source + footer;
}

function clearNote() {
    setHtmlCode("");
    autoSave();
}

function saveNoteFile() {
    var charSet = "utf-8";
    var doc = createHtmlDoc(getHtmlCode(), charSet);
    var blob = new Blob([doc], {type: "text/plain;charset=" + charSet});
    saveAs(blob, "note.html");
}

$('#fullScreen').on('click', runFullScreen);
$('#newNote').on('click', clearNote);
$('#saveFile').on('click', saveNoteFile);