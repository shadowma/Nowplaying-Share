
Importer.loadQtBinding( "qt.core" );
Importer.loadQtBinding( "qt.gui" );

function onShare(){
    album = Amarok.Engine.currentTrack().album;
    artist = Amarok.Engine.currentTrack().artist;
    title = Amarok.Engine.currentTrack().title;
    length = Amarok.Engine.currentTrack().length;    
    
    t = new Date(length);
    if (length/1000 > 3600) {
      duration = t.getHours() + ':' + checkTime(t.getMinutes()) + ':' + checkTime(t.getSeconds());
    }
    else {
      duration = t.getMinutes() + ':' + checkTime(t.getSeconds());
    }  
    
    d = new Date();
    playdate = d.getFullYear() + '-' +checkTime((d.getMonth()+1)) + '-' + checkTime(d.getDate()) + ' ' + checkTime(d.getHours()) + ':' + checkTime(d.getMinutes()) + ':' + checkTime(d.getSeconds());
    
    surl = 'http://music.wayshine.us/nowplaying.php?album='+album+'&artist='+artist+'&title='+title+'&length='+duration+'&date='+playdate+'&from=623&c=0&s=0';
    Url = new QUrl(surl);
    QDesktopServices.openUrl( Url );
}

function checkTime(i){
  if (i<10){
    i="0" + i;
  }
  return i;
}

Amarok.Window.addToolsMenu("share", "Share Nowplaying");
Amarok.Window.ToolsMenu.share['triggered()'].connect( onShare );