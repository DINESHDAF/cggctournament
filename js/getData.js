// https://google,developers.appspot.com/chart/interactive/docs/spreadsheets#gid
google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawChart);

function drawChart() {
	// Add your sheets url and range below
	var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1oydFl7rEI4vdDVySSO7ubUdg9JFn3zOcT9A9PDpKXXY/edit#gid=2106481192?range=A1:Z1000";
	var query = new google.visualization.Query(spreadsheetUrl);
	query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
	var dataTable = response.getDataTable();
	// https://developers.google.com/chart/interactive/docs/reference?hl=en#methods
	// getValue(rowIndex, columnIndex)
	document.getElementById("getMatchOne").innerHTML = dataTable.getValue(1, 1);
	document.getElementById("getTeamsOne").innerHTML = dataTable.getValue(2, 0);
	document.getElementById("teamAOne").innerHTML = dataTable.getValue(2, 1);
	document.getElementById("teamBOne").innerHTML = dataTable.getValue(2, 2);
	document.getElementById("totalRunsOne").innerHTML = dataTable.getValue(3, 0);
	document.getElementById("teamRunsAOne").innerHTML = dataTable.getValue(3, 1);
	document.getElementById("teamRunsBOne").innerHTML = dataTable.getValue(3, 2);
	document.getElementById("totalOversOne").innerHTML = dataTable.getValue(4, 0);
	document.getElementById("teamOversAOne").innerHTML = dataTable.getValue(4, 1);
	document.getElementById("teamOversBOne").innerHTML = dataTable.getValue(4, 2);
	document.getElementById("getMatchOneWin").innerHTML = dataTable.getValue(5, 0);
	document.getElementById("matchOneWin").innerHTML = dataTable.getValue(5, 1);


	document.getElementById("getMatchTwo").innerHTML = dataTable.getValue(6, 1);
	document.getElementById("getTeamsTwo").innerHTML = dataTable.getValue(7, 0);
	document.getElementById("teamATwo").innerHTML = dataTable.getValue(7, 1);
	document.getElementById("teamBTwo").innerHTML = dataTable.getValue(7, 2);
	document.getElementById("totalRunsTwo").innerHTML = dataTable.getValue(8, 0);
	document.getElementById("teamRunsATwo").innerHTML = dataTable.getValue(8, 1);
	document.getElementById("teamRunsBTwo").innerHTML = dataTable.getValue(8, 2);
	document.getElementById("totalOversTwo").innerHTML = dataTable.getValue(9, 0);
	document.getElementById("teamOversATwo").innerHTML = dataTable.getValue(9, 1);
	document.getElementById("teamOversBTwo").innerHTML = dataTable.getValue(9, 2);
	document.getElementById("getMatchTwoWin").innerHTML = dataTable.getValue(10, 0);
	document.getElementById("matchTwoWin").innerHTML = dataTable.getValue(10, 1);
	
	document.getElementById("getMatchFinal").innerHTML = dataTable.getValue(1, 5);
	document.getElementById("getTeamsFinal").innerHTML = dataTable.getValue(2, 4);
	document.getElementById("teamAFinal").innerHTML = dataTable.getValue(2, 5);
	document.getElementById("teamBFinal").innerHTML = dataTable.getValue(2, 6);
	document.getElementById("totalRunsFinal").innerHTML = dataTable.getValue(3, 4);
	document.getElementById("teamRunsAFinal").innerHTML = dataTable.getValue(3, 5);
	document.getElementById("teamRunsBFinal").innerHTML = dataTable.getValue(3, 6);
	document.getElementById("totalOversFinal").innerHTML = dataTable.getValue(4, 4);
	document.getElementById("teamOversAFinal").innerHTML = dataTable.getValue(4, 5);
	document.getElementById("teamOversBFinal").innerHTML = dataTable.getValue(4, 6);
	document.getElementById("getMatchFinalWin").innerHTML = dataTable.getValue(5, 4);
	document.getElementById("matchFinalWin").innerHTML = dataTable.getValue(5, 5);
	
	document.getElementById("displayFinal").style = dataTable.getValue(6, 4)+": "+dataTable.getValue(6, 5)+";";
}