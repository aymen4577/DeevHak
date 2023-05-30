module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      genre: [
        {
          type: String,
          enum: ['M', 'F'],
        }
      ],
  pays_origine:String,
  num_telephone:String,
  
  date_naissance:Date,
    
    })

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Particpant = mongoose.model("participants", schema);
  return Particpant;
};
