
	const ans = document.querySelector('.ans');
	
	let expression = '';
	let a=0;
	
		
		const value = e.target.dataset['value'];

		if(value !== undefined) {
			
			if(value == 'ce') {
				expression = '';
				ans.value = 0;
				return true;
			}
			else if(value == 'x^2'){
				expression =square();
			}
	
			else if(value == 'radic'){
				expression = Math.sqrt(expression);
			}
			else if(value == 'log'){
				expression = Math.log(expression);
			}
			else if(value == 'sin'){
				expression = Math.sin(expression);
			}
			else if(value == 'cos'){
				expression = Math.cos(expression);
			}
			else if(value == 'tan'){
				expression = Math.tan(expression);
			}

			else if(value == '=') {
				if (expression.indexOf("%") !== -1) {
					exp2 = expression.split("%")
				 	expression = ((exp2[0]/100) * exp2[1]);
				} else {
				const answer = eval(expression);
				expression = answer;
				} 
			} else {
				expression += value;
			}

			if(expression == undefined) {
				expression = '';
				ans.value = 0;
			} else {
				ans.value = expression;
			}
			// expression += value;


        }

	
	const square =()=> {
			return eval(expression*expression);
	}