Schemas = [];

Schemas.Post = new SimpleSchema({
    title: {
        type: String
    },
    content: {
        type: String,
        optional: true
    },
    link: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    }
});

Schemas.Comment = new SimpleSchema({

});

Posts = new Mongo.Collection("posts");
Posts.attachSchema(Schemas.Post);