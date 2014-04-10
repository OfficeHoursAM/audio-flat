function secondsTimeSpanToMMSS(seconds)
{
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    seconds = Math.round(seconds);

    return (minutes < 10 ? '0' + minutes : minutes)+":"+(seconds < 10 ? '0' + seconds : seconds); //zero padding on minutes and seconds
}

$(document).ready(function()
{
    var audio_flats = $(".audio-flat");
    $.each(audio_flats, function(index, audio_flat)
    {
        audio_flat.song = new Audio($(audio_flat).attr("src"));
        audio_flat.song.addEventListener('timeupdate', function()
        {
            var currentTime = parseInt(audio_flat.song.currentTime, 10);
            $(audio_flat).find("#seek").val(currentTime);
            $(audio_flat).find("#seek").attr("value", currentTime);

            $(audio_flat).find("#seek").attr("max", audio_flat.song.duration);
            $(audio_flat).find("#duration").text(secondsTimeSpanToMMSS(audio_flat.song.duration - currentTime));
        });

        $(audio_flat).find("#seek").bind("change", function()
        {
            audio_flat.song.currentTime = $(this).val();
            $(audio_flat).find("#seek").attr("max", audio_flat.song.duration);
        });

        $(audio_flat).find("#play-pause").click(function(event)
        {
            var play_pause = $(event.target);
            if (play_pause.hasClass("play")) // Play the song
            {
                play_pause.removeClass("play");
                play_pause.addClass("pause");

                audio_flat.song.play();
            }
            else // Pause the song
            {
                play_pause.removeClass("pause");
                play_pause.addClass("play");

                audio_flat.song.pause();
            }
        });
    });
});
