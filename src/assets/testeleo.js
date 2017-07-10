var teste = (function() {

  return {
    testeleo: function() {
      console.log('bateu no script externo');
    }
  }

})(teste||{})
