// 1. Extract action types
function extractActions( input ) {
	if ( typeof input !== "object" ) { json_ = JSON.parse( input ); }
	actions_ = json_.actions;
	types_ = [];
	
	for ( count = 0; count < actions_.length; count++ ) {
		types_.push( actions_[ count ].type );
	}

	console.log( types_ );
}

// 2. Convert actions array into a object where the key is the actions' type and the value are its params
function convertActions( input ) {
	if ( typeof input !== "object" ) { json_ = JSON.parse( input ); }
	actions_ = json_.actions;
	converted_actions = {};

	for ( count = 0; count < actions_.length; count++ ) {
		action_type = actions_[ count ].type;
		action_params = actions_[ count ].params;
		converted_actions[ action_type ] = action_params;
	}

	json_.actions = converted_actions;

	return json_;
}

// 3. Calculate the sum and average for the following input (non-number elements should be ignored): ["0", 2, 4, 6, null, [], 8, 10]
function calculateThis( input ) {
	var sum_ = 0;
	var loops_ = 0;
	_.each( input, function( num ){
		num_ = parseInt( num );
		if ( !isNaN( num_ ) ) {
			sum_ += num_;
			loops_ += 1;
		}
	});

	console.log( "Sum is: "+ sum_ );

	var avarage_ = sum_ / loops_;
	console.log( "Avarage is: "+ avarage_ );
}

/* 	Question: In the above task, what would happen if there were two actions of a same type?
*	Answer: The value of the action that already exists would be overwritten by the value of the last action from the same type.
 */