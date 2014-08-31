var clearValues = function(){
	$('#przedmiot').val("").focus();
	 $('#wykladowca').val("");
	$('#ocena').val("");
}
var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13) {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};

Przedmioty = new Meteor.Collection('Przedmioty');
if (Meteor.isClient) {
 	Template.main.Przedmioty = function(){
	return Przedmioty.find();
}
Template.main.events(okCancelEvents(
  '#ocena',
  {
    ok: function (text, evt) {
     var przedmiot = $('#przedmiot').val();
	 var wykladowca = $('#wykladowca').val();
	 Przedmioty.insert({przedmiot:przedmiot,wykladowca:wykladowca,ocena:text});
	clearValues();
    }
  }));	
}


if (Meteor.isServer) {
  
}
