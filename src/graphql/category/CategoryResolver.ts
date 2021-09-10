import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

import { Category } from './Category'
import CategorySchema from "../../models/CategorySchema";

@InputType()
class CategoryInput {
    @Field()
    description: string;

    @Field()
    name: string;
}

@Resolver(Category)
export class CategoryResolver {

    @Query(() => [Category])
    async categories() {
        const categories = await CategorySchema.find()

        return categories
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        const category = await CategorySchema.create(categoryInput)

        return category
    }
}