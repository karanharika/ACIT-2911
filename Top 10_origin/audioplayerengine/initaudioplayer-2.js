jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-2\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-2").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"skin",
        tracklistarrowimage:"tracklistarrow-48-16-0.png",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"assassins_creed_revelations_logo-wallpaper-2560x1440.jpg",
        tracklistarrowimageheight:16,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        loopimage:"loop-24-24-0.png",
        prevnextimage:"prevnext-48-48-1.png",
        showinfo:true,
        imageheight:100,
        skin:"Jukebox",
        responsive:true,
        loopimagewidth:24,
        showstop:true,
        prevnextimageheight:48,
        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",
        tracklistbackgroundimage:"assassins_creed_revelations_logo-wallpaper-2560x1440.jpg",
        showloading:false,
        forcefirefoxflash:false,
        tracklistscroll:true,
        preloadaudio:true,
        showvolumebar:true,
        imagefullwidth:true,
        width:300,
        showimage:true,
        showloop:true,
        volumeimage:"volume-24-24-0.png",
        playpauseimagewidth:48,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:48,
        titleinbarwidthmode:"fixed",
        forceflash:false,
        tracklistarrowimagewidth:48,
        playpauseimageheight:48,
        showbackgroundimage:true,
        stopimage:"stop-48-48-0.png",
        showvolume:true,
        playpauseimage:"playpause-48-48-1.png",
        forcehtml5:false,
        showprevnext:true,
        backgroundimage:"red_dead_redemption_2_dark_4k-wallpaper-3840x2160.jpg",
        loadingformat:"Loading...",
        progressheight:8,
        showtracklistbackgroundimage:true,
        titleinbarscroll:true,
        showtitle:true,
        defaultvolume:100,
        showtitleinbar:true,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:48,
        volumeimageheight:24,
        stopimagewidth:48,
        volumebarheight:100,
        noncontinous:false,
        stopotherplayers:true,
        showbarbackgroundimage:true,
        volumebarpadding:15,
        imagewidth:100,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        fullwidth:true,
        loop:1,
        tracklistitem:10
    });
});