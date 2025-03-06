import {
    FmFrontend
} from "./services/frontend";
import {
    FmBackend
} from "./services/backend";

function main(){
    new FmFrontend({
        Name: "example",
        Product: "devops-learning"
    });

    new FmBackend({
        Name: "example",
        Product: "devops-learning"
    });
}

main();