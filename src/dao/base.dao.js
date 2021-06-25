exports.create = async (schema, req) => {
  try {
    return await schema.create(req);
  } catch (err) {
    return err;
  }
};

exports.findOneAndUpdate = async (schema, id, req) => {
  try {
    const user = await schema.findByIdAndUpdate(
      id,
      { $set: req },
      { upsert: false, new: false, runValidators: true, context: "query" },
      function (err, result) {
        if (err) {
        } else {
          return result;
        }
      }
    );
    return user;
  } catch (err) { }
};

exports.findAll = async (schema) => {
  const params = [{ $match: { isDeleted: false } }];
  try {
    return await schema.aggregate(params).sort({ createdAt: -1 });
  } catch (err) { }
};


exports.findOne = async (schema, req) => {
  try {
    return await schema.findOne({ email: req.email })
  } catch (err) {
    return err;
  }
}





