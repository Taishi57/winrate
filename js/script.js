$(document).ready(function(){
    console.log('script.js v1 loaded')
    var playerCount = 1;
    var winrate = [];
    $('#add').click(function(){
        $('#inputBox').append(
            '<div class="row">' +
                '<div class="col-6">' +
                    '<input type="text" class="name">' +
                '</div>' +
                '<div class="col-3">' +
                    '<input type="number" class="win">' +
                '</div>' +
                '<div class="col-3">' +
                    '<input type="number" class="loss">' +
                '</div>' +
            '</div>'
            );
        playerCount++;
    });
    
    //'+(i+1)+'
    $('#calculate').click(function(){
        winrate = [];
        for(var i = 0; i < playerCount; i++){
            winrate.push({
                name: $('#inputBox .row:nth-child('+(i+1)+') .name').val(),
                win: $('#inputBox .row:nth-child('+(i+1)+') .win').val(),
                loss: $('#inputBox .row:nth-child('+(i+1)+') .loss').val(),
            });
        }
        var sorted = winrate.sort(compare);
        $('#result .names').empty();
        $('#result .scores').empty();
        for(var i = 0; i < playerCount; i++){
            $('#result .names').append(
                '<p><b>'+ winrate[i].name +'</b></p>'
            );
            $('#result .scores').append(
                '<p><b>'+ winrate[i].win +' - ' + winrate[i].loss + '</b></p>'
            );
        }
        
    });
    
    function compare(a,b){
        let comparison = 0;
    
        aTotalPlay = a.win + a.loss;
        bTotalPlay = b.win + b.loss;
        aWinRate = a.win / aTotalPlay;
        bWinRate = b.win / bTotalPlay;
    
        console.log(a.name + " " +aWinRate + "% to "+ b.name + " "+ bWinRate + "%");
        
        if(aWinRate > bWinRate){
            comparison = -1;
        }else if (aWinRate < bWinRate){
            comparison = 1;
        }else{
            if(aTotalPlay > bTotalPlay){
                comparison = -1;
            }else if(aTotalPlay < bTotalPlay){
                comparison = 1;
            }else{
                if(a.name < b.name){
                    comparison = -1;
                }else{
                    comparison = 1;
                }
            }
        }
        console.log(comparison);
        return comparison;
    }
})
