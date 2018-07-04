hexo.extend.tag.register('problemset', (args, content) => {
	const mkd = text => text // feature
	const res = content.split('\n\n').map((data, cnt) => {
		const [desc, opts] = data.split(/\n-{3,}\n/);
		const choices = opts.split('\n').map(opt => {
			const [name, ...cont] = opt.split('. ');
			return `<label class="__prob_option__"><input type="radio" name="prob${cnt}"><div>${cont.map(mkd).join('. ')}</div></label>`
		})
		return (`
		<li class="__prob_item__">
			<div class="__prob_desc__">${mkd(desc)}</div>
			${choices.join('')}
		</li>
		`)
	}).join('');
	let head = '';
	if (args.length > 1) {
		head = `<div class="__prob_head__">${mkd(args.slice(1).join(' '))}</div>`
	}
	return (`
	<div class="__prob__" data-ans="${args[0]}">
		${head}
		<ol>${res}</ol>
		<button class="__prob_submit__">✔️ 提交</button>
		<div class="__prob_result__"></div>
		<div class="__prob_congr__"></div>
	</div>
	`)
}, { ends: true });
