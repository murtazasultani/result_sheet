app.filter("gender", function()
{
	return function(gender)
	{
		switch(gender)
		{
			case 0:
				return 'Female';

			case 1:
				return 'Male';

			default:
				return 'undifined!';
		}
	}
});

app.filter("grade", function()
{
	return function(grade)
	{
		if(grade > 95)
		{
			return 'A';
		}

		else if(grade > 90)
		{
			return 'B';
		}

		else if(grade > 85)
		{
			return 'C';
		}

		else if(grade > 80)
		{
			return 'D';
		}

		else if(grade > 75)
		{
			return 'E';
		}

		else if(grade < 75)
		{
			return 'F';
		}
	}
});

app.filter("result", function()
{
	return function(result)
	{
		if(result > 55)
		{
			return 'Passed';
		}

		else if(result >= 40)
		{
			return 'passed';
		}

		else if(result < 40)
		{
			return 'Faild';
		}
	}
});

app.filter("resultClass", function()
{
	return function(resultClass)
	{
		if(resultClass > 55)
		{
			return 'badge-success';
		}

		else if(resultClass >= 40)
		{
			return 'badge-warning';
		}

		else if(resultClass < 40)
		{
			return 'badge-danger';
		}
	}
});