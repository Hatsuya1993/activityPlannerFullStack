import { yelpResponseType } from "../../client/src/Redux/initialState";

export interface LocationInterface {
    uid: string,
    data_id: string,
    name: string,
    longitude: number,
    latitude: number,
    yelpData: yelpResponseType
}