import { create } from 'zustand';

interface UserData {
  pseudo: string;
  ville: string;
  codePostal: string;
  activity: string;
  allowSurPlace: boolean;
  allowClickAndCollect: boolean;
  servicesEnCours: string | null;
}

interface UserState {
  data: UserData;
  loading: boolean;
  error: string | null;
  fetchData?: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  data: {
    "pseudo": "Akhi Place",
    "ville": "Sevran",
    "codePostal": "93270",
    "activity": "Commerce",
    "allowSurPlace": true,
    "allowClickAndCollect": true,
    "servicesEnCours": null
  },
  loading: false,
  error: null,
  // fetchData: async () => {
  //   const userId = 'MydKHgrbSmRuAv3fvlUV5xv6sCL2';
  //   const apiKey = 'voldiTest';

  //   set({ loading: true, error: null });

  //   try {
  //     const response = await fetch(`https://europe-west1-miamapp-cc1ca.cloudfunctions.net/getDataFromUserID?userId=${userId}`, {
  //       method: 'GET',
  //       headers: {
  //         'api-key': apiKey,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.statusText}`);
  //     }

  //     const data = await response.json();
  //     set({ userData: data, loading: false });
  //   } catch (error: any) {
  //     set({ error: error.message, loading: false });
  //   }
  // },
}));

export default useUserStore;