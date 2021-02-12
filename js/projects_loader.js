
jQuery(document).ready(function(){
    render_projects(data);

    $(".show_more_button").click(function(){
        var id = $(this).attr('id');
        $('.'+id).show();
      //  console.log('.'+id);
        $(this).remove();
    });

    $(document).on('click', '.tag', function(){
        var filtered_data = [];
        for(i in data){
            var contains = false;
            for(j in data[i].tags){
                if(data[i].tags[j] == $(this).text()){
                    contains = true;
                }
            }
            if(contains)filtered_data.push(data[i]);
        }
        clear_projects();
        render_projects(filtered_data);
        $('html, body').animate({
            scrollTop: $("#"+filtered_data[0].id+"_page").offset().top
        }, 1000);
    });
});

function clear_projects(){
    $("#projects").empty();
    $("#spacer").remove();
}

function render_projects(data){
    for(var i=0;i<data.length;i++){
        $("#projects").append(`<div class="page" id="${data[i].id}_page">
        <h1 class="project_title">${data[i].titlu}</h1>
        <h2 class="project_subtitle">${data[i].subtitlu}</h2>
        <img class="threesixty" id="${data[i].id}" src="./img/cmlogo.png" alt="">
        <div class="paragraphs_${data[i].id}"></div>
        <br style="clear:both" />

        <h3 class="wi">What went into it?</h1>
        <div class="tags_${data[i].id}"></div>
        <br style="clear:both" />
        <br style="clear:both" />
    </div>`);
    for(var j=0;j<data[i].text.length;j++){
        if(data[i].text.length>1){
            if(j == 0){
                $(".paragraphs_"+data[i].id).append(`<p class="pp">${data[i].text[j]}</p><p id="p_${data[i].id}" class="show_more_button">show more...</p>`);
            }
            else $(".paragraphs_"+data[i].id).append(`<p class="pp more p_${data[i].id}">${data[i].text[j]}</p>`);

        }
        else{
            $(".paragraphs_"+data[i].id).append(`<p class="pp">${data[i].text[j]}</p>`);
        }
    }
    for(var j=0;j<data[i].tags.length;j++){
        $(".tags_"+data[i].id).append(`<div class="tag">${data[i].tags[j]}</div>`);
    }
    }
    if(data.length%2 == 0){
        $("#projects").after(`<div id="spacer"></div>`);}
}
