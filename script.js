window.location.href = 'https://marella.github.io/material-icons/'

var results = [];

function filterResults(results) {
	var search = $('#search').val();
	if (search == '') {
		return results;
	}
	search = search.toLowerCase();
	return $.grep(results, function(a) {
		return (a.indexOf(search) >= 0);
	});
}

function showResults() {
	var icons = filterResults(results);
	var html = '';
	for (var i = 0; i < icons.length; i++) {
		html += '<li><i class="mi mi-' + icons[i] + '"></i> <br /> ' + icons[i] + '</li>';
	}
	$('#search-results').html(html);
}

$(function() {
	$.getJSON('icon-names.json', function(data) {
		results = data;
		showResults();
	});
	$('#search').on('input', showResults);
});
