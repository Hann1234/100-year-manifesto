-- Create Database '100-year-manifesto'

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
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
	"last_activity" TIMESTAMP NOT NULL DEFAULT NOW(),
	"complete" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "track_video_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "admin_edit_form" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
    "page_id" integer NOT NULL,
	"page_name" varchar(255) NOT NULL,
	"html_id" varchar(255) NOT NULL,
	"html_type" varchar(63) NOT NULL DEFAULT 'text',
	"html_content" TEXT,
    "edit_date" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT "admin_edit_form_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "access_code" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"code" varchar(123) NOT NULL,
	"expiration_date" TIMESTAMP NOT NULL DEFAULT NOW() + 7 * INTERVAL '1 DAY',
	CONSTRAINT "access_code_pk" PRIMARY KEY ("id")
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

ALTER TABLE "access_code" ADD CONSTRAINT "access_code_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

-- DUMMY DATA
-- the number in this queries has to be replaced with the user id that you are currently working on
insert into  mission(user_id, manifesto_text)
	values('2','Make the world a better place.');

insert into mantras(user_id, manifesto_text)
	values('2','FAMILY. FITNESS. FREEDOM.'),
	('2','DISCIPLINE EQUALS FREEDOM.'),
	('2','BE OBSESSIVELY GRATEFUL'),
	('2','KNOWLEDGE IS POWER.'),
	('2','THE OBSTACLE IS THE WAY.'),
	('2','LIVE. LOVE. LEARN. LEGACY.'),
	('2','BETTER EVERY DAY.'),
	('2','HELL YES...OR NO.'),
	('2','REMEMBER TO ENJOY THE DANCE.'),
	('2','MEMENTO MORI.');
	
insert into core_values(user_id, manifesto_text)
	values('2','EXPLORATION'),
	('2','FAMILY'),
	('2','FREEDOM'),
	('2','GROWTH'),
	('2','PEACE'),
	('2','PURPOSE');
	
insert into for_good(user_id, manifesto_text)
	values('2','PURSUING A CURE FOR CANCER'),
	('2','SUPPORTING A HEALTHY PLANET'),
	('2','ENTREPRENEURSHIP FOR GOOD'),
	('2','ELIMINATE PREVENTABLE DEATHS');

insert into life_goals(user_id, manifesto_text)
	values('2','Inner peace.'),
	('2','Live a life full of diversity in events, people, and opportunities.'),
	('2','Take actions with a large impact on the world.'),
	('2','Protect my family and friends.'),
	('2','Be a great father and role model for my daughters.'),
	('2','Be a great husband.'),
	('2','Maintain close and rewarding friendships with the people who are important to me.'),
	('2','Empower entrepreneurs to change the world.'),
	('2','Actualize lifetime wish list into reality.');
	
insert into guiding_principles(user_id,source, manifesto_text)
	values('2','MAHATMA GANDHI','I cried because I had no shoes, then I met a man who had no feet.'),
	('2','PHIL KNIGHT','The cowards never started and the weak died along the way. That leaves us, ladies and gentlemen. Us.'),
	('2','BRENE BROWN','Those who have the greatest capacity fordiscomfort rise the fastest.'),
	('2','RICHARD BRANSON','Train people well enough so they can leave,treat them well enough so they do not want to.'),
	('2','ALBERT EINSTEIN','Try not to become a man of success but rather try
to become a man of value.'),
	('2','SENECA','If aman knows not to which port he sails, no wind
is favorable.');