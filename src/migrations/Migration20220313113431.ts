import { Migration } from '@mikro-orm/migrations';

export class Migration20220313113431 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "comment" ("id" uuid not null, "by_member_id" varchar(255) not null, "text" text null);');
    this.addSql('alter table "comment" add constraint "comment_pkey" primary key ("id");');

    this.addSql('create table "checklist_item" ("id" uuid not null, "title" text null, "done" boolean not null);');
    this.addSql('alter table "checklist_item" add constraint "checklist_item_pkey" primary key ("id");');

    this.addSql('create table "checklist" ("id" uuid not null, "title" text not null, "items" text[] not null);');
    this.addSql('alter table "checklist" add constraint "checklist_pkey" primary key ("id");');

    this.addSql('create table "member" ("id" uuid not null, "username" varchar(255) not null, "fullname" varchar(255) not null, "image" varchar(255) null);');
    this.addSql('alter table "member" add constraint "member_pkey" primary key ("id");');

    this.addSql('create table "board" ("id" uuid not null, "title" text not null, "description" text null, "background" jsonb not null, "created_by_id_id" uuid not null);');
    this.addSql('alter table "board" add constraint "board_pkey" primary key ("id");');

    this.addSql('create table "list" ("id" uuid not null, "title" text not null, "board_id_id" uuid not null);');
    this.addSql('alter table "list" add constraint "list_pkey" primary key ("id");');

    this.addSql('create table "task" ("id" uuid not null, "title" text not null, "description" text null, "style_background" varchar(255) null, "style_full_cover" boolean not null, "start_date" bigint null, "due_date" bigint null, "due_complete" boolean not null, "is_archived" boolean not null, "board_id_id" uuid not null, "list_id_id" uuid not null);');
    this.addSql('alter table "task" add constraint "task_pkey" primary key ("id");');

    this.addSql('create table "task_members" ("task_id" uuid not null, "member_id" uuid not null);');
    this.addSql('alter table "task_members" add constraint "task_members_pkey" primary key ("task_id", "member_id");');

    this.addSql('create table "archived_item" ("from_list_id" varchar(255) not null, "item" varchar(255) not null, "index" int not null, "board_id_id" uuid not null);');
    this.addSql('alter table "archived_item" add constraint "archived_item_pkey" primary key ("from_list_id");');

    this.addSql('create table "label" ("id" uuid not null, "title" text not null, "color" text not null, "board_id_id" uuid not null);');
    this.addSql('alter table "label" add constraint "label_pkey" primary key ("id");');

    this.addSql('create table "task_labels" ("task_id" uuid not null, "label_id" uuid not null);');
    this.addSql('alter table "task_labels" add constraint "task_labels_pkey" primary key ("task_id", "label_id");');

    this.addSql('create table "board_members" ("board_id" uuid not null, "member_id" uuid not null);');
    this.addSql('alter table "board_members" add constraint "board_members_pkey" primary key ("board_id", "member_id");');

    this.addSql('alter table "board" add constraint "board_created_by_id_id_foreign" foreign key ("created_by_id_id") references "member" ("id") on update cascade;');

    this.addSql('alter table "list" add constraint "list_board_id_id_foreign" foreign key ("board_id_id") references "board" ("id") on update cascade;');

    this.addSql('alter table "task" add constraint "task_board_id_id_foreign" foreign key ("board_id_id") references "board" ("id") on update cascade;');
    this.addSql('alter table "task" add constraint "task_list_id_id_foreign" foreign key ("list_id_id") references "list" ("id") on update cascade;');

    this.addSql('alter table "task_members" add constraint "task_members_task_id_foreign" foreign key ("task_id") references "task" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "task_members" add constraint "task_members_member_id_foreign" foreign key ("member_id") references "member" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "archived_item" add constraint "archived_item_board_id_id_foreign" foreign key ("board_id_id") references "board" ("id") on update cascade;');

    this.addSql('alter table "label" add constraint "label_board_id_id_foreign" foreign key ("board_id_id") references "board" ("id") on update cascade;');

    this.addSql('alter table "task_labels" add constraint "task_labels_task_id_foreign" foreign key ("task_id") references "task" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "task_labels" add constraint "task_labels_label_id_foreign" foreign key ("label_id") references "label" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "board_members" add constraint "board_members_board_id_foreign" foreign key ("board_id") references "board" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "board_members" add constraint "board_members_member_id_foreign" foreign key ("member_id") references "member" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "board" drop constraint "board_created_by_id_id_foreign";');

    this.addSql('alter table "task_members" drop constraint "task_members_member_id_foreign";');

    this.addSql('alter table "board_members" drop constraint "board_members_member_id_foreign";');

    this.addSql('alter table "list" drop constraint "list_board_id_id_foreign";');

    this.addSql('alter table "task" drop constraint "task_board_id_id_foreign";');

    this.addSql('alter table "archived_item" drop constraint "archived_item_board_id_id_foreign";');

    this.addSql('alter table "label" drop constraint "label_board_id_id_foreign";');

    this.addSql('alter table "board_members" drop constraint "board_members_board_id_foreign";');

    this.addSql('alter table "task" drop constraint "task_list_id_id_foreign";');

    this.addSql('alter table "task_members" drop constraint "task_members_task_id_foreign";');

    this.addSql('alter table "task_labels" drop constraint "task_labels_task_id_foreign";');

    this.addSql('alter table "task_labels" drop constraint "task_labels_label_id_foreign";');

    this.addSql('drop table if exists "comment" cascade;');

    this.addSql('drop table if exists "checklist_item" cascade;');

    this.addSql('drop table if exists "checklist" cascade;');

    this.addSql('drop table if exists "member" cascade;');

    this.addSql('drop table if exists "board" cascade;');

    this.addSql('drop table if exists "list" cascade;');

    this.addSql('drop table if exists "task" cascade;');

    this.addSql('drop table if exists "task_members" cascade;');

    this.addSql('drop table if exists "archived_item" cascade;');

    this.addSql('drop table if exists "label" cascade;');

    this.addSql('drop table if exists "task_labels" cascade;');

    this.addSql('drop table if exists "board_members" cascade;');
  }

}
