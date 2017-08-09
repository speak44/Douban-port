/*
	https://api.douban.com/v2/movie/search?q=战狼2&start=0&callback=fn 
*/
function Model(search,num){
	$.ajax({
		url:'https://api.douban.com/v2/movie/search?callback=?',
		dataType:'jsonp',
		data:{
			q:search,
			start:num,
			count:8
		},
		success:function(data){
			let page=window.location.hash.split('=')[1]
			data.page = page;
			console.log(data)
			let t = template('temp',data);
		//console.log(t)
		//每一条数据信息
			$('#app').html(t);
			$('#pages li').click(function(){
				console.log($(this).html())
				location.hash='h='+$(this).html()
			})

		}
	});
}


window.onhashchange=function(){
	let page=window.location.hash.split('=')[1]
	let val = $('input').val();
	Model(val,page*8);
}
