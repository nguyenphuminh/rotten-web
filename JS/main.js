rUI.setTitle('RottenJS');
rUI.setLogo('logo.png');

rt('.quote').typing({
	str:'One library, thousands of websites',
	clrPrev:true,
	speed:60,
});

rt('.container').style(`
	height: ${window.innerHeight/100*50}px;
	min-height: ${window.innerHeight/100*50}px;
	min-width: 100%;
	width: 100%;
	margin-top: 7%;
`);

rt('.spin').rotate(1,{
	loop:true,
	delay:1,
	end:false
});