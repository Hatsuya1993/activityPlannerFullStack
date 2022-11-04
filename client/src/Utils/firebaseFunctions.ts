import { collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

export interface dataType {
    uid: string,
    name: string,
    latitude: number,
    longitude: number,
    data_id: string,
    yelpData: {
        id: string,
        alias: string,
        name: string,
        image_url: string,
        is_closed: string
    }
}
export const saveItem = async (data: dataType) => {
    await setDoc(doc(firestore, 'saveStore', data.data_id), data, {merge: true})
}

export const getAllItems = async (uid: string) => {
    const items = await getDocs(query(collection(firestore, 'saveStore')))
    return items.docs.map((doc) => doc.data()).filter((each) => each.uid === uid)
}

export const deleteItem = async (data_id: string) => {
    const docRef = doc(firestore, 'saveStore', data_id)
    await deleteDoc(docRef)
}