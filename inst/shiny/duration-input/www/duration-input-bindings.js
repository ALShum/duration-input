var durationInputBinding = new Shiny.InputBinding();
$.extend(durationInputBinding, {
  find: function(scope) {
    return $(scope).find('.duration');
  },

  getId: function(el) {
    return el.id;
  },

  getValue: function(el) {
    return {
      hour: parseInt($(el).find('.hour').val()),
      minute: parseInt($(el).find('.minute').val()),
      second: parseInt($(el).find('.second').val())
    };
  },

  setValue: function(el, value) {
    el.value = value;
  },

  subscribe: function(el, callback) {
    $(el).on('change.durationInputBinding', function(event) {
      var hour = $(el).find('.hour');
      var min = $(el).find('.minute');
      var sec = $(el).find('.second');
      var hourVal = parseInt(hour.val());
      var minVal = parseInt(min.val());
      var secVal = parseInt(sec.val());
      var totalSeconds = 3600 * hourVal + 60 * minVal + secVal;

      if (hourVal < 0) {
        hour.val(0);
      }

      if (minVal < 0) {
        min.val(Math.floor(totalSeconds % 3600 / 60));
        hour.val(Math.floor(totalSeconds / 3600));
      } else if (minVal >= 60) {
        min.val(Math.floor(totalSeconds % 3600 / 60));
        hour.val(Math.floor(totalSeconds / 3600));
      }

      if (secVal < 0) {
        totalSeconds = Math.max(totalSeconds, 0)
        sec.val(totalSeconds % 3600 % 60 );
        min.val(Math.floor(totalSeconds % 3600 / 60));
        hour.val(Math.floor(totalSeconds / 3600));
      } else if (secVal >= 60) {
        min.val(Math.floor(totalSeconds % 3600 / 60));
        hour.val(Math.floor(totalSeconds / 3600));
        sec.val(totalSeconds % 3600 % 60);
      }

      callback();
    });

  },

  unsubscribe: function(el) {
    $(el).off('.durationInputBinding');
  }
});
Shiny.inputBindings.register(durationInputBinding, 'shiny.durationInput');