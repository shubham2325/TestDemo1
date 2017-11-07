
var ValidationState = "valid";
(function(jQuery)
{
   
	 jQuery.fn.validate = function(options){

        	options = jQuery.extend({

		            expression: "return true;",

		            message: "",
 
		           error_class: "ValidationErrors",
		
           error_field_class: "ErrorField",

		           live: true
        }, options);
 
var SelfID = jQuery(this).attr("id");
  
	      if (options['live']) {
  
	          jQuery(this).bind('blur', function(){
   
		             validate_field(this);
            });
 
           jQuery(this).bind('focus keypress', function(){
 
           jQuery(this).next('.' + options['error_class']).fadeOut("fast", function(){
  
	                  jQuery(this).remove();
              
		});
 
               jQuery(this).removeClass(options['error_field_class']);
  
          });
        }
 
       jQuery(this).parents("form").submit(function(){
 
           validate_field('#' + SelfID);

            if (ValidationState == "valid")  return true;
 
           else 
               
		 return false;
     
		   });
  
      function validate_field(id){

	            var self = jQuery(id).attr("id");
  
	            var expression = 'function Validate(){' + options['expression'].replace(/VAL/g, '$(\'#' + self + '\').val()') + '} Validate()';
 
		           var validation_state = eval(expression);
    
			        if (!validation_state) {
          
				      if (jQuery(id).next('.' + options['error_class']).length == 0) {
     
			               jQuery(id).after('<span class="' + options['error_class'] + '">' + options['message'] + '</span>');
   
			                 jQuery(id).addClass(options['error_field_class']);
                }
  
				              ValidationState = "invalid";
 
					               return false;
            }
           else {
 
               ValidationState = "valid";
  
              return true;
            }
       
 }
    };
})(jQuery);
