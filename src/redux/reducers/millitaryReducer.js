/**
 * I added in this reducer state of current year
 * because I need to change all data about millitarys and year simultaneously
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  officers: [
    {
      id: 1,
      rank: "Colonel",
      name: "Nicholas Anthony",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 2,
      rank: "Lieutenant Colonel",
      name: "Archie Huber",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 3,
      rank: "Lieutenant Colonel",
      name: "Irving Brennan",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 4,
      rank: "Major",
      name: "Seth Bennett",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 5,
      rank: "Captain",
      name: "Dean Humphrey",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 6,
      rank: "Captain",
      name: "Derek Costa",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 7,
      rank: "First Lieutenant",
      name: "Tony Cohen",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 8,
      rank: "Second Lieutenant",
      name: "Oscar O'Donnell",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 9,
      rank: "Second Lieutenant",
      name: "Douglas Cook",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 10,
      rank: "Chief Warrant Officer 5",
      name: "Marcus Harvey",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 11,
      rank: "Chief Warrant Officer 5",
      name: "Matthew Harris",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 12,
      rank: "Chief Warrant Officer 3",
      name: "Geoffrey McKee",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
  ],
  sergeants: [
    {
      id: 1,
      rank: "Command Sergeant Major",
      name: "Oscar McIntosh",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 2,
      rank: "Command Sergeant Major",
      name: "Peter Swenson",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 3,
      rank: "Sergeant Major",
      name: "Gavin Gonzalez",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 4,
      rank: "Sergeant Major",
      name: "Benjamin Conklin",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 5,
      rank: "Sergeant Major",
      name: "Levi Michael",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 6,
      rank: "First Sergeant",
      name: "William Mann",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 7,
      rank: "Master Sergeant",
      name: "Jonathon Proctor",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 8,
      rank: "Master Sergeant",
      name: "Jonathan Steele",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 9,
      rank: "Master Sergeant",
      name: "Derek Lawrence",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 10,
      rank: "Sergeant First Class",
      name: "Kenneth Pugh",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 11,
      rank: "Sergeant First Class",
      name: "Jason Stern",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 12,
      rank: "Staff Sergeant",
      name: "Alexander Mathews",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 13,
      rank: "Staff Sergeant",
      name: "ЛАСТАВЧУК Людмила В’ячеславівна",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 14,
      rank: "Staff Sergeant",
      name: "Martin Shafer",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
  ],
  soldiers: [
    {
      id: 1,
      rank: "Specialist",
      name: "Brendan Mathis",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 2,
      rank: "Specialist",
      name: "Alec Wall",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 3,
      rank: "Corporal",
      name: "Brent Gentry",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 4,
      rank: "Corporal",
      name: "Dylan Ziegler",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 5,
      rank: "Corporal",
      name: "Tanner Kessler",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 7,
      rank: "Private First Class",
      name: "Antonio Kennedy",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 8,
      rank: "Private",
      name: "Jacob McCoy",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
    {
      id: 9,
      rank: "Private",
      name: "James Bowers",
      placesOfTreatment: {
        home: 0,
        hospital: 0,
        medPoint: 0,
      },
      diagnoses: [],
    },
  ],

  currentYear: `${new Date().getFullYear()}`,
};

export const millitarySlice = createSlice({
  name: "addMillitary",
  initialState,
  reducers: {
    addMillitary(state, action) {
      const { type, id, position, data } = action.payload;
      const updatedMillitarys = state[type];

      const newMillitary = {
        id: null,
        ...data,
        placesOfTreatment: {
          home: 0,
          hospital: 0,
          medPoint: 0,
        },
        diagnoses: [],
      };

      if (position === "top") {
        updatedMillitarys.splice(id - 1, 0, newMillitary);
        updatedMillitarys.forEach((millitary, index) => {
          millitary.id = index + 1;
        });

        state[type] = updatedMillitarys;
      } else {
        updatedMillitarys.splice(id, 0, newMillitary);
        updatedMillitarys.forEach((millitary, index) => {
          millitary.id = index + 1;
        });

        state[type] = updatedMillitarys;
      }
    },
    removeMillitary(state, action) {
      const { type, id } = action.payload;
      const updateMillitarys = state[type].filter(
        (millitary) => millitary.id !== id
      );
      updateMillitarys.forEach((element, index) => {
        element.id = index + 1;
      });
      state[type] = updateMillitarys;
    },

    addMedicalHistory(state, action) {
      const { id, type, data } = action.payload;
      const { placeOfTreatment } = data;
      const selectedMillitary = state[type][id - 1];
      const updatedMillitarys = state[type];

      if (placeOfTreatment === "At home") {
        selectedMillitary.placesOfTreatment.home += 1;
      }

      if (placeOfTreatment === "In the hospital") {
        selectedMillitary.placesOfTreatment.hospital += 1;
      }

      if (placeOfTreatment === "In the medical point") {
        selectedMillitary.placesOfTreatment.medPoint += 1;
      }

      const lengthOfDiagnoses = updatedMillitarys[id - 1].diagnoses.length;

      const historyItem = {
        key: `${lengthOfDiagnoses + 1}`,
        ...data,
      };

      selectedMillitary.diagnoses.push(historyItem);
    },

    removeMedicalHistory(state, action) {
      const { key, type, id, placeOfTreatment } = action.payload;
      const updateMillitarys = state[type];
      const selectedMillitary = updateMillitarys[id - 1];

      if (placeOfTreatment === "At home") {
        selectedMillitary.placesOfTreatment.home -= 1;
      }

      if (placeOfTreatment === "In the hospital") {
        selectedMillitary.placesOfTreatment.hospital -= 1;
      }

      if (placeOfTreatment === "In the medical point") {
        selectedMillitary.placesOfTreatment.medPoint -= 1;
      }

      selectedMillitary.diagnoses = selectedMillitary.diagnoses.filter(
        (historyItem) => historyItem.key !== key
      );
    },

    editMedicalHistoryItem(state, action) {
      const { id, type, data } = action.payload;
      const { key, placeOfTreatment } = data;

      const updateMillitarys = state[type];
      const selectedMillitary = updateMillitarys[id - 1];

      selectedMillitary.diagnoses = selectedMillitary.diagnoses.map((item) => {
        if (key === item.key) {
          if (JSON.stringify(data) === JSON.stringify(item)) {
            return item;
          }

          if (data.placeOfTreatment !== item.placeOfTreatment) {
            switch (placeOfTreatment) {
              case "At home":
                selectedMillitary.placesOfTreatment.home += 1;
                break;
              case "In the hospital":
                selectedMillitary.placesOfTreatment.hospital += 1;
                break;
              case "In the medical point":
                selectedMillitary.placesOfTreatment.medPoint += 1;
                break;
              default:
                break;
            }

            switch (item.placeOfTreatment) {
              case "At home":
                selectedMillitary.placesOfTreatment.home -= 1;
                break;
                case "In the hospital":
                selectedMillitary.placesOfTreatment.hospital -= 1;
                break;
                case "In the medical point":
                selectedMillitary.placesOfTreatment.medPoint -= 1;
                break;
              default:
                break;
            }
          }

          item = data;
          return item;
        }
        return item;
      });
    },

    generalUpdateState(_, action) {
      // update the all state, when the data got from local storage
      const { millitarys, year } = action.payload;
      return { currentYear: year, ...millitarys };
    },
  },
});

export const {
  addMillitary,
  removeMillitary,
  addMedicalHistory,
  removeMedicalHistory,
  editMedicalHistoryItem,
  generalUpdateState,
} = millitarySlice.actions;

export default millitarySlice.reducer;
