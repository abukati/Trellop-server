import { Migration } from '@mikro-orm/migrations';

export class Migration20220311121830 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "comment" ("id" uuid not null, "by_member_id" varchar(255) not null, "text" text null);');
    this.addSql('alter table "comment" add constraint "comment_pkey" primary key ("id");');

    this.addSql('create table "checklist_item" ("id" uuid not null, "title" text null, "done" boolean not null);');
    this.addSql('alter table "checklist_item" add constraint "checklist_item_pkey" primary key ("id");');

    this.addSql('create table "checklist" ("id" uuid not null, "title" text not null, "items" text[] not null);');
    this.addSql('alter table "checklist" add constraint "checklist_pkey" primary key ("id");');

    this.addSql('create table "member" ("id" uuid not null, "username" varchar(255) not null, "fullname" varchar(255) not null, "image" varchar(255) not null, "starred_ids" text[] not null, "watchlist" text[] not null);');
    this.addSql('alter table "member" add constraint "member_pkey" primary key ("id");');

    this.addSql('create table "label" ("id" uuid not null, "title" text not null, "color" text not null);');
    this.addSql('alter table "label" add constraint "label_pkey" primary key ("id");');

    this.addSql('create table "archived_item" ("from_list_id" varchar(255) not null, "item" varchar(255) not null, "index" int not null);');
    this.addSql('alter table "archived_item" add constraint "archived_item_pkey" primary key ("from_list_id");');

    this.addSql('create table "task" ("id" uuid not null, "title" text not null, "description" text null, "style" varchar(255) not null, "members" text[] null, "labels" text[] null, "start_date" text null, "due_date" text null, "due_complete" boolean not null, "comments" text[] null, "checklists" text[] not null, "is_archived" boolean not null);');
    this.addSql('alter table "task" add constraint "task_pkey" primary key ("id");');

    this.addSql('create table "list" ("id" uuid not null, "title" text not null, "tasks" text[] not null);');
    this.addSql('alter table "list" add constraint "list_pkey" primary key ("id");');

    this.addSql('create table "board" ("id" uuid not null, "title" text not null, "created_by" varchar(255) not null, "background" varchar(255) null, "members" text[] not null, "labels" text[] not null, "description" text null, "archive" text[] not null, "lists" text[] not null);');
    this.addSql('alter table "board" add constraint "board_pkey" primary key ("id");');
  }

}
