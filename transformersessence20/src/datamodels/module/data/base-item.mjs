import XavEssence20DataModel from "./base-model.mjs";

export default class XavEssence20ItemBase extends XavEssence20DataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}