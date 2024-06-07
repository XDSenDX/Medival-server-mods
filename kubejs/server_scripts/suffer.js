/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
   event.remove({id: 'minecraft:redstone_block'}),
	 event.remove({id: 'spelunkers_charm:encased_geyser_recipe'}),
	  event.remove({id: 'minecraft:redstone_torch'}),
	   event.remove({id: 'minecraft:redstone_lamp'}),
	    event.remove({id: 'minecraft:repeater'}),
		 event.remove({id: 'minecraft:comparator'}),
		  event.remove({id: 'minecraft:piston'}),
		   event.remove({id: 'minecraft:sticky_piston'}),
		    event.remove({id: 'minecraft:observer'}),
			 event.remove({id: 'minecraft:clock'}),
			  event.remove({id: 'minecraft:recovery_compass'}),
			   event.remove({id: 'minecraft:compass'}),
			    event.remove({id: 'minecraft:enchanting_table'}),
				 event.remove({id: 'minecraft:daylight_detector'}),
				  event.remove({id: 'minecraft:dispenser'}),
				   event.remove({id: 'minecraft:dropper'}),
				    event.remove({id: 'minecraft:beacon'}),
					 event.remove({id: 'minecraft:golden_apple'}),
					  event.remove({id: 'meds_and_herbs:medkit_advanced_recipe'}),
					  event.remove({id: 'meds_and_herbs:medkit_expert_recipe'})
					  
					 

}) 