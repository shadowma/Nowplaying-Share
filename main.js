
Importer.loadQtBinding( "qt.core" );
Importer.loadQtBinding( "qt.gui" );

function onShare(){
    album = Amarok.Engine.currentTrack().album;
    artist = Amarok.Engine.currentTrack().artist;
    title = Amarok.Engine.currentTrack().title;
    length = Amarok.Engine.currentTrack().length;    
    
    duration = millisecondsToTime(length);
    
    d = new Date();
    playdate = d.getFullYear() + '-' +(d.getMonth()+1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    surl = 'http://music.wayshine.us/nowplaying.php?album='+album+'&artist='+artist+'&title='+title+'&length='+duration+'&date='+playdate+'&from=623&c=0&s=0';
    
    Url = new QUrl(surl);
    QDesktopServices.openUrl( Url );
}

function millisecondsToTime(length){
    second = length/1000;

    if (second > 60) {
      minute = second / 60;
      second = second % 60;
      duration = Math.floor(minute) + ":" + Math.floor(second);
    }
    if (minute > 60) {
      hour = minute / 60;
      minute = minute % 60;
      duration = Math.floor(hour) + ":" + Math.floor(minute) + ":" + Math.floor(second);
    }
    return duration;
}

Amarok.Window.addToolsMenu("share", "Share Nowplaying");
Amarok.Window.ToolsMenu.share['triggered()'].connect( onShare );

