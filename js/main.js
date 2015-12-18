$(function(){
	var ajax_url = 'http://serv1.dca.tw:3000/API/bootcamp/articles/';
	
	//顯示資料 (read)
	$.ajax({
		url: ajax_url,
		type: 'GET',
		error: function(){
			console.log('error');
		},
		success: function(e){
			for(var i=0; i<e.length; i++) {
				$(".result").append(
					'<div class="full-msg" data-id="'+ e[i]._id +'">' +
					'<div>姓名：'+ e[i].username +'<span class="del">刪除留言</span></div>' +
					'<div>網站：'+ e[i].url +'</div>' +
					'<div>電子郵件：'+ e[i].email +'</div>' +
					'<div>'+ e[i]. message +'</div>' +
					'</div>'
				);
			};
		}
	});
	
	//刪除資料(delete)
	$(".result").on('click', '.del', function(){
		var fullMsg = $(this).closest('.full-msg'),
				delID = fullMsg.data('id');
		
		$.ajax({
			url: ajax_url + delID,
			type: 'DELETE',
			error: function() {
				console.log('error');
			},
			success: function(e){
				console.log(e);
				fullMsg.fadeOut(800, function(){
					$(this).html('留言已刪除').fadeIn(800);
				});
			}
		});
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
});