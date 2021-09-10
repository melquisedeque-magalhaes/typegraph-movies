import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Video {

    @Field()
    name: String;

    @Field()
    description: String;

    @Field()
    _id: String;
}