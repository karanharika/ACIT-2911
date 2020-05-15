jQuery(document).ready(function () {

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i = 0; i < scripts.length; i++) {

        if (scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingaudioplayer-1").amazingaudioplayer({

        jsfolder: jsFolder,

        skinsfoldername: "skin",

        tracklistarrowimage: "tracklistarrow-48-16-0.png",

        timeformatlive: "%CURRENT% / LIVE",

        volumeimagewidth: 90,

        barbackgroundimage: "assassins_creed_revelations_logo-wallpaper-2560x1440.jpg",

        tracklistarrowimageheight: 16,

        showtime: true,

        titleinbarwidth: 80,

        showprogress: true,

        random: false,

        titleformat: "%TITLE%",

        height: 1000,

        loopimage: "loop-24-24-0.png",

        prevnextimage: "prevnext-90-90-0.png",

        showinfo: true,

        imageheight: 100,

        skin: "Bar",

        responsive: true,

        loopimagewidth: 90,

        showstop: true,

        prevnextimageheight: 90,

        infoformat: "By %ARTIST% %ALBUM%<br />%INFO%",

        tracklistbackgroundimage: "the_witcher_3_wild_hunt_geralt_of_rivia_2-wallpaper-3840x2160.jpg",

        showloading: false,

        forcefirefoxflash: false,

        tracklistscroll: true,

        preloadaudio: true,

        showvolumebar: true,

        imagefullwidth: false,

        width: 1000,

        showimage: true,

        showloop: true,

        volumeimage: "volume-24-24-0.png",

        playpauseimagewidth: 90,

        loopimageheight: 90,

        tracklistitemformat: "<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",

        prevnextimagewidth: 90,

        titleinbarwidthmode: "fixed",

        forceflash: false,

        tracklistarrowimagewidth: 48,

        playpauseimageheight: 90,

        showbackgroundimage: true,

        stopimage: "stop-48-48-1.png",

        showvolume: true,

        playpauseimage: "playpause-90-90-0.png",

        forcehtml5: false,

        showprevnext: true,

        backgroundimage: "cube_figure_dark_142157_3840x2160.jpg",

        loadingformat: "Loading...",

        progressheight: 8,

        showtracklistbackgroundimage: true,

        titleinbarscroll: true,

        showtitle: true,

        defaultvolume: 75,

        showtitleinbar: true,

        heightmode: "auto",

        titleinbarformat: "%TITLE%",

        showtracklist: true,

        stopimageheight: 90,

        volumeimageheight: 90,

        stopimagewidth: 90,

        volumebarheight: 80,

        noncontinous: false,

        stopotherplayers: true,

        showbarbackgroundimage: true,

        volumebarpadding: 10,

        imagewidth: 100,

        timeformat: "%CURRENT% / %DURATION%",

        autoplay: false,

        fullwidth: true,

        loop: 1,

        tracklistitem: 10

    });

});