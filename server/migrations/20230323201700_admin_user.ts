import { Knex } from "knex";

export async function up(knex: Knex): Promise<any> {
  const hasIsAdmin = await knex.schema.hasColumn("users", "isAdmin");

  if (!hasIsAdmin) {
    await knex.schema.alterTable("users", table => {
      table.boolean("isAdmin");
    });
  }
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.alterTable("users", table => {
    table.dropColumn("isAdmin");
  });
}
