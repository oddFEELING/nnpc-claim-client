import create from 'zustand';

export const claimStore = create((set) => ({
  claim: {},
  reportClaim: {},
  setClaim: (payload) => set({ claim: payload }),
  setReportClaim: (payload) => set({ reportClaim: payload }),
  editClaim: (
    key,
    payload,
    number = false,
    layer1 = null,
    layer2 = null,
    layer3 = null
  ) =>
    set((state) => {
      /* ====== Three layers */
      if (layer1 && layer2 && layer3) {
        return {
          claim: {
            ...state.claim,
            [layer1]: {
              ...state.claim[layer1],
              [layer2]: {
                ...state.claim[layer1][layer2],
                [layer3]: {
                  ...state.claim[layer1][layer2][layer3],
                  [key]: number ? Number(payload) : payload,
                },
              },
            },
          },
        };
      } else if (layer1 && layer2 && !layer3) {
        /* ====== Two layers */
        return {
          claim: {
            ...state.claim,
            [layer1]: {
              ...state.claim[layer1],
              [layer2]: {
                ...state.claim[layer1][layer2],
                [key]: number ? Number(payload) : payload,
              },
            },
          },
        };
      } else if (layer1 && !layer2 && !layer3) {
        /* ====== One layer */
        return {
          claim: {
            ...state.claim,
            [layer1]: {
              ...state.claim[layer1],
              [key]: number ? Number(payload) : payload,
            },
          },
        };
      } else if (!layer1 && !layer2 && !layer3) {
        /* ====== no layers */
        return {
          claim: {
            ...state.claim,
            [key]: number ? Number(payload) : payload,
          },
        };
      }
    }),
}));

/*
Ediit claim takes in 7 args
the key is the key of the entry 
the payload is the value of the entry 
the nuimber is a boolean that indicates if the entry is a number or string
The layers indicate the nesting level. the function cna nest up to 3 levels deep.
*/

/*
claim is the regular claim for activities
report claim is for report generating
*/
