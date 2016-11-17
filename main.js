this.Documents = new Mongo.Collection("documents");

if (Meteor.isClient) {
    Template.editor.helpers ({
        docid:function(){
            var doc = Documents.findOne();
            if (doc) {
                return doc._id;
            }
            else {
                return Documents.findOne()._id;
            }
        },
        config:function () {
            return function(editor){
                editor.setTheme('ace/theme/monokai')
                editor.getSession().setMode('ace/mode/javascript')
                editor.setShowPrintMargin(false)
                editor.getSession().setUseWrapMode(true)
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        if (!Documents.findOne()) {
                Documents.insert({title:"new document"});
        }
    });
}