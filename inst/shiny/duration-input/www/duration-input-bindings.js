var urlInputBinding = new Shiny.InputBinding();
$.extend(urlInputBinding, {
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
    $(el).on('change.urlInputBinding', function(event) {


      var hour = $(el).find('.hour');
      var min = $(el).find('.minute');
      var sec = $(el).find('.second');
      var hourVal = parseInt(hour.val());
      var minVal = parseInt(min.val());
      var secVal = parseInt(sec.val());

      if (hourVal < 0) {
        hour.val(0);
      }

      if (minVal < 0) {
        min.val(minVal + 60);
        hour.val(Math.max(hourVal - 1, 0));
        //hour.val(hourVal - 1);
      } else if (minVal >= 60) {
        min.val(minVal - 60);
        hour.val(hourVal + 1);
      }

      if (secVal <= 0) {
        sec.val(secVal + 59);
        min.val(Math.max(minVal - 1, 0));
        //min.val(minVal - 1);
      } else if (secVal >= 60) {
        sec.val(secVal - 59);
        min.val(minVal + 1);
      }

      callback();
    });

  },

  unsubscribe: function(el) {
    $(el).off('.urlInputBinding');
  }
});
Shiny.inputBindings.register(urlInputBinding, 'shiny.urlInput');