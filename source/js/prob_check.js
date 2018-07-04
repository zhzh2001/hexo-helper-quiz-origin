document.addEventListener('DOMContentLoaded', function () {
	$('.__prob__').each(function () {
		var _this = $(this);
		_this.find('button.__prob_submit__').click(function () {
			var ans = _this.data('ans'),
				correct = 0,
				all = 0;
			_this.find('.__prob_item__').each(function (i, elem) {
				var res = -1;
				$(elem).find('.__prob_option__ input').each(function (_i, _el) {
					if (_el.checked) {
						res = _i;
					}
				})
				if (ans[i] === String.fromCharCode(65 + res)) {
					correct++;
				}
				all++;
			})
			_this.find('.__prob_result__').html(correct + '/' + all);
			var msg = '';
			if (correct / all < 0.25)
				msg = '宠物猫：看起来你像是太乐于温暖的床铺和频繁的肉食而无法成为武士！或者你只需要回去重新阅读（一次又一次）。';
			else if (correct / all < 0.5)
				msg = '学徒：你还在学习森林的方式。不要着急，只要有一个好的导师，你会很快成为武士的。';
			else if (correct / all < 0.75)
				msg = '武士：伟大的工作！你是族群里勇敢的武士，而且你也是一个聪明的读者。';
			else
				msg = '族长：你真的非常了解族群猫的世界！所有伟大的族长都应该像你一样明智和阅读好。';
			_this.find('.__prob_congr__').html(msg);
			if (correct == all)
				alert('你AK了！');
		})
	})
});