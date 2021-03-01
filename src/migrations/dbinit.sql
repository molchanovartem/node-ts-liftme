-- CREATE TABLE product
-- (
--     id integer NOT NULL,
--     name text  NOT NULL,
--     "number_changes" integer NOT NULL,
--     price numeric NOT NULL,
--     "updated_at" timestamp without time zone NOT NULL,
--     CONSTRAINT product_pkey PRIMARY KEY (id)
-- )

CREATE TABLE todos
(
    id integer NOT NULL,
    title text  NOT NULL,
    description text NOT NULL,
    "isFinished" boolean NOT NULL,
    CONSTRAINT todos_pkey PRIMARY KEY (id)
)