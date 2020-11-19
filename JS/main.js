rUI.setTitle('RottenJS');
rUI.setLogo('logo.png');

rt('.quote').typing({
	str:'One library, thousands of websites',
	clrPrev:true,
	speed:60,
});

rt('.container').style(`
	margin-top: 5%;
`);

rt('.spin').rotate(1,{
	loop:true,
	delay:1,
	end:false
});