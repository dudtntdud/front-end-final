
(function($, app){

  var $noteStringField = $('#memo');
  var noteTemplateHtml = $('#noteTemplate').html();

  app.view ={

    addNote: function(event){

      var contents = $noteStringField[0].value;
      var note = $.extend({}, app.model, {
          content : contents
      });

      console.log('new note : ', note)
      app.collection.add(note);
    },

    render: function(){
      if(app.collection.toJSON()[0] === undefined){
        $noteStringField.html(tmpl(noteTemplateHtml, {notes: "" } ));
      }
      else{
        $noteStringField.html(tmpl(noteTemplateHtml, {notes: app.collection.toJSON()[0] } ));
      }
    },
  };

  app.$wrap.on('addCollection', app.view.render);


})(jQuery, Notes);
