import {
    FmFrontend
} from "./services/frontend";

function main(){
    new FmFrontend({
        Name: "example",
        Product: "devops-learning"
    });
}

main();