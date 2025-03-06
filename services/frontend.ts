import {
    ComponentResource,
    CustomResourceOptions,
} from "@pulumi/pulumi";
import {
    FmBucket
} from "../resources/bucket";

type FmFrontendArgs ={
    Name: string;
    Product: string;
}

export class FmFrontend extends ComponentResource {
    constructor(args: FmFrontendArgs, opts?: CustomResourceOptions) {
        const name = `${args.Product}-${args.Name}`;

        super("pkg:index:FmFrontend", name, {}, opts);

        // frontend source code
        new FmBucket({
            Name: args.Name,
            Product: args.Product,
            Public: true
        }, {
            parent: this
        });

        new FmBucket({
            Name: '${args.Name}-replica',
            Product: args.Product,
        }, {
            parent: this
        });
    }
}