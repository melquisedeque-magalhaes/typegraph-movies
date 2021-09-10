import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import VideoSchema from "../../models/VideoSchema";
import { Video } from "./Video";

@InputType()
class VideoInput {

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    category: string;
}

@Resolver(Video)
export class VideoResolver {

    @Query(() => [Video])
    async videos() {
        const videos = await VideoSchema.find()

        return videos
    }

    @Mutation(() => Video)
    async createVideo(@Arg("videoInput") videoInput: VideoInput) {
        const video = await VideoSchema.create(videoInput)

        return video
    }
}