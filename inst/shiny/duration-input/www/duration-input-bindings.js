$(function () {
    $('.second').spinner({
        spin: function (event, ui) {
            if (ui.value >= 60) {
                $(this).spinner('value', ui.value - 60);
                $('.minute').spinner('stepUp');
                return false;
            } else if (ui.value < 0) {
                $(this).spinner('value', ui.value + 60);
                $('.minute').spinner('stepDown');
                return false;
            }
        }
    });
    $('.minute').spinner({
        spin: function (event, ui) {
            if (ui.value >= 60) {
                $(this).spinner('value', ui.value - 60);
                $('.hour').spinner('stepUp');
                return false;
            } else if (ui.value < 0) {
                $(this).spinner('value', ui.value + 60);
                $('.hour').spinner('stepDown');
                return false;
            }
        }
    });
    $('.hour').spinner({
     min: 0});
});
var durationInputBinding = new Shiny.InputBinding();

$.extend(durationInputBinding, {
  find: function(scope) {
    return $(scope).find(".durationInput");
  },
  getValue: function(el) {
    return {
        hour: parseInt($(el).find(".hour").value);
        minute: parseInt($(el).find(".minute").value);
        second: parseInt($(el).find(".second").value);
    };
  },
  subscribe: function(el, callback) {
    $(el).on("change.durationInputBinding", function(e) {
      callback();
    });
  },
  unsubscribe: function(el) {
    $(el).off(".durationInputBinding");
  }

  Shiny.inputBindings.register(durationInputBinding);
});