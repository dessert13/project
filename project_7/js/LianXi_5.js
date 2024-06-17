$(document).ready(function() {  
    // 增加一行  
    $('input[name="b1"]').click(function() {  
        var newRow = $('<tr><td>幸福从天而降</td><td class="center">&yen;18.50</td></tr>');  
        $('#row3').before(newRow);  
    });  
 
    // 删除第2行  
    $('input[name="b2"]').click(function() {  
        $('table tr').eq(2).remove();  
    });  
 
    // 修改标题样式  
    $('input[name="b3"]').click(function() {  
        $('#row1').css({  
            'font-weight': 'bold',  
            'text-align': 'center',  
            'background-color': '#cccccc'  
        });  
    });  
 
    // 复制最后一行  
    $('input[name="b4"]').click(function() {  
        var lastRow = $('table tr:last').clone();  
        $('table').append(lastRow);  
    });  
});