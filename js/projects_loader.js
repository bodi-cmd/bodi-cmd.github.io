
jQuery(document).ready(function(){
    render_projects(data);

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
    });
});

function clear_projects(){
    $("#projects").empty();
    $("#spacer").remove();
}

function render_projects(data){
    for(var i=0;i<data.length;i++){
        $("#projects").append(`<div class="page">
        <h1 class="project_title">${data[i].titlu}</h1>
        <h2 class="project_subtitle">${data[i].subtitlu}</h2>
        <img class="threesixty" id="${data[i].id}" src="./img/Cadre_sportier/sportier0060.png" alt="">
        <div class="paragraphs_${data[i].id}"></div>
        <br style="clear:both" />

        <h3 class="wi">What went into it?</h1>
        <div class="tags_${data[i].id}"></div>
        <br style="clear:both" />
        <br style="clear:both" />
    </div>`);
    for(var j=0;j<data[i].text.length;j++){
        $(".paragraphs_"+data[i].id).append(`<p class="pp">${data[i].text[j]}</p>`);
    }
    for(var j=0;j<data[i].tags.length;j++){
        $(".tags_"+data[i].id).append(`<div class="tag">${data[i].tags[j]}</div>`);
    }
    }
    if(data.length%2 == 0){
        $("#projects").after(`<div id="spacer"></div>`);}
}
