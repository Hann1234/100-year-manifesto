-- Create Database '100-year-manifesto'

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"name" varchar(31),
	"email" varchar(80) NOT NULL UNIQUE,
	"password" varchar(127) NOT NULL,
	"role" varchar(10) NOT NULL DEFAULT 'customer',
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "mission" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"manifesto_text" varchar(511) NOT NULL,
	CONSTRAINT "mission_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "life_goals" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"manifesto_text" varchar(511) NOT NULL,
	CONSTRAINT "life_goals_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "mantras" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"manifesto_text" varchar(63) NOT NULL,
	CONSTRAINT "mantras_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "core_values" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"manifesto_text" varchar(31) NOT NULL,
	CONSTRAINT "core_values_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "for_good" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"manifesto_text" varchar(255) NOT NULL,
	CONSTRAINT "for_good_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "guiding_principles" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"source" varchar(63),
	"manifesto_text" varchar(1023) NOT NULL,
	CONSTRAINT "guiding_principles_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "additional_questions" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"question" varchar(255) NOT NULL,
	"manifesto_text" varchar(1023) NOT NULL,
	CONSTRAINT "additional_questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "track_video" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"last_activity" TIMESTAMP NOT NULL,
	"complete" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "track_video_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "admin_edit_form" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"page_name" varchar(255) NOT NULL,
	"html_id" varchar(255) NOT NULL,
	"form_text" TEXT,
	CONSTRAINT "admin_edit_form_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "mission" ADD CONSTRAINT "mission_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "admin_edit_form" ADD CONSTRAINT "admin_edit_form_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "life_goals" ADD CONSTRAINT "life_goals_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "mantras" ADD CONSTRAINT "mantras_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "core_values" ADD CONSTRAINT "core_values_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "for_good" ADD CONSTRAINT "for_good_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "guiding_principles" ADD CONSTRAINT "guiding_principles_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "track_video" ADD CONSTRAINT "track_video_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "additional_questions" ADD CONSTRAINT "additional_questions_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;