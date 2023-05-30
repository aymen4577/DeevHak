module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      NomEntre: String,
    Domaine:String,
      NumeroFix:Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const hackathon = mongoose.model("Entreprises", schema);
  return hackathon;
};
