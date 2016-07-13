// 1. Add a new action of type notification, with parameters title and message (string values)
function addActionTo( input ) {
	if ( typeof input !== "object" ) { json_ = JSON.parse( input ); }
	new_action = {
		type: "notification",
		params: {
			title: "Notification from Jack",
			message: "Buy Coca Cola!"
		}
	};
	json_.actions.push( new_action );
	
	return json_;
}

// 2. Set action property of the first action to null and remove the link property
function touchAction( input ) {
	if ( typeof input !== "object" ) { json_ = JSON.parse( input ); }
	json_.actions[0].action = null;
	delete json_.actions[0].params.link;

	return json_;
} 