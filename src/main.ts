import {AppServer} from "./server";
import {AddressInfo} from "net";

AppServer.Start().then((server) => {
    const addressInfo = (server.address() as AddressInfo);
    console.log(`Server is listening at: [${addressInfo.address}:${addressInfo.port}]`);
});