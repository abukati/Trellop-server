import { Migration } from '@mikro-orm/migrations';

export class Migration20220309112141 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "board" drop constraint if exists "board_id_check";');
    this.addSql('alter table "board" alter column "id" type varchar(255) using ("id"::varchar(255));');
    this.addSql('alter table "board" alter column "id" drop default;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "board" drop constraint if exists "board_id_check";');
    this.addSql('alter table "board" alter column "id" type int using ("id"::int);');
    this.addSql('create sequence if not exists "board_id_seq";');
    this.addSql('select setval(\'board_id_seq\', (select max("id") from "board"));');
    this.addSql('alter table "board" alter column "id" set default nextval(\'board_id_seq\');');
  }

}
