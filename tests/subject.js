var assert = require('assert');

suite('Przedmioty', function() {


    test('#1 inicjalizacja serwera', function(done, server) {
    server.eval(function() {
      var przedmiot = Przedmioty.find().fetch();
      emit('przedmiot', przedmiot);
    }).once('przedmiot', function(przedmiot) {
      assert.equal(przedmiot.length, 0);
      done();
    });
  });

  test('# 2inicjalizacja klienta', function(done, client) {
    client.eval(function() {
      var przedmiot = Przedmioty.find().fetch();
      emit('przedmiot', przedmiot);
    }).once('przedmiot', function(przedmiot) {
      assert.equal(przedmiot.length, 0);
      done();
    });
  });

    test('#3 dodawanie pustego wpisu ze strony klienta', function(done, client) {
    client.eval(function() {
        Przedmioty.insert({
          przedmiot: '',
          wykladowca: '',
          ocena: ''
        });
    var przedmiot = Przedmioty.find({
          przedmiot: '',
          wykladowca: '',
          ocena: ''
          }).fetch();
    emit('przedmiot', przedmiot);
    });

    client.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });

      test('#4 dodawanie pustego wpisu ze strony serwera', function(done, server) {
    server.eval(function() {
        Przedmioty.insert({
          przedmiot: '',
          wykladowca: '',
          ocena: ''
        });
    var przedmiot = Przedmioty.find({
          przedmiot: '',
          wykladowca: '',
          ocena: ''
          }).fetch();
    emit('przedmiot', przedmiot);
    });

    server.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });

  test('#5 wstawiane nazwy przedmiotu ze strony klienta', function(done, client) {
    client.eval(function() {
        Przedmioty.insert({
          przedmiot: 'Techniki internetowe'
        });
    var przedmiot = Przedmioty.find({
          przedmiot: 'Techniki internetowe'}).fetch();
    emit('przedmiot', przedmiot);
    });

    client.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });

  test('#6 wstawianie przedmiotu i wykładowcy ze strony klienta', function(done, client) {
    client.eval(function() {
        Przedmioty.insert({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl'
        });
    var przedmiot = Przedmioty.find({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl'}).fetch();
    emit('przedmiot', przedmiot);
    });

    client.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });

    test('#7 wstawianie przedmiotu, wykladowcy i oceny ze strony klienta', function(done, client) {
    client.eval(function() {
        Przedmioty.insert({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl',
          ocena: 'brak'
        });
    var przedmiot = Przedmioty.find({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl',
          ocena: 'brak'}).fetch();
    emit('przedmiot', przedmiot);
    });

    client.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });

  test('#8 wstawiane nazwy przedmiotu ze strony serwera', function(done, server) {
    server.eval(function() {
        Przedmioty.insert({
          przedmiot: 'Techniki internetowe'
        });
    var przedmiot = Przedmioty.find({
          przedmiot: 'Techniki internetowe'}).fetch();
    emit('przedmiot', przedmiot);
    });

    server.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });

  test('# 9wstawianie przedmiotu i wykładowcy ze strony serwera', function(done, server) {
    server.eval(function() {
        Przedmioty.insert({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl'
        });
    var przedmiot = Przedmioty.find({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl'}).fetch();
    emit('przedmiot', przedmiot);
    });

    server.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });

    test('#10 wstawianie przedmiotu, wykladowcy i oceny ze strony serwera', function(done, server) {
    server.eval(function() {
        Przedmioty.insert({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl',
          ocena: 'brak'
        });
    var przedmiot = Przedmioty.find({
          przedmiot: 'Techniki internetowe',
          wykladowca: 'W.Bzyl',
          ocena: 'brak'}).fetch();
    emit('przedmiot', przedmiot);
    });

    server.once('przedmiot', function(przedmiot) {
    assert.equal(przedmiot.length, 1);
      done();
    });
  });
 });