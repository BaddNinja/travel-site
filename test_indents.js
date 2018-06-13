var spa = (function() {
  var initModule = function( $container ) {
    $container.html(
      '<h1 style="display:inline-block; marhgin:25px;">' + 'hello world!'
        + '</h1>'
    );
    var 
      x, y, r, print_msg, get_random,
      top_fruit_list, full_fruit_list,
      coef        = 0.5,
      rot_delta   = 1,
      x_delta     = 1,
      y_delta     = 1,
      first_name  = 'sally';

      top_fruit_list  = [ 'Apple', 'Banana', 'Orange' ];
      
      full_fruit_list = [
        'Apple',    'Apricot',  'Banana',   'Blackberry',   'Blueberry',
        'Currant',  'Cherry',   'Date',     'Grape',        'Grapefruit',
        'Guava',    'Kiwi',     'Kumquat',  'Lemon',        'Lime'
      ];

  }
})