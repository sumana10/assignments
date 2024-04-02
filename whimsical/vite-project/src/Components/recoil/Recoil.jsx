import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async ()=>{
            try {
                const response = await axios.get("https://apigenerator.dronahq.com/api/fL8zCNXG/notification");
                return response.data[0];
              } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
              }
        }
    }),
});

export const totalNotificationsCounter = selector({
    key: "totalNotificationsCounter",
    get: ({ get }) => {
        const networkAtomCount = get(notifications) || {};

        return (networkAtomCount.network || 0) +
            (networkAtomCount.jobs || 0)+
            (networkAtomCount.messaging || 0)+
            (networkAtomCount.notifications || 0)
        
    },
});