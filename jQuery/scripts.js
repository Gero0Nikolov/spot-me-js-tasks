$( document ).ready(function() {
	$( "body" ).append( "<textarea id='text-box' style='width: 500px; height: 500px;'></textarea>" );
	addJSONtoTextArea( json );
	$.ajax({
		url: "https://api.ipify.org",
		success: function( result ) {
			console.log( result );
		}
	});
});

function addJSONtoTextArea( input ) {
	if ( typeof input !== "object" ) { json_ = JSON.parse( input ); }
	json_ = JSON.stringify( json_, null, 4 );
	$( "#text-box" ).val( json_ );
}